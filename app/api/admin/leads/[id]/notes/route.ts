import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { data: staff } = await supabase.from("admin_users").select("role").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { id } = await params
  const body = await request.json().catch(() => null)
  const note = typeof body?.note === "string" ? body.note.trim() : ""
  if (!/^[0-9a-f-]{36}$/i.test(id) || note.length < 1 || note.length > 5000) return NextResponse.json({ error: "Invalid note" }, { status: 400 })
  const { data, error } = await supabase.from("lead_notes").insert({ lead_id: id, author_id: user.id, note }).select("id, note, created_at").single()
  if (error) return NextResponse.json({ error: "Unable to save note" }, { status: 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "lead.note_created", entity_type: "contact_submission", entity_id: id, metadata: {} })
  return NextResponse.json({ note: data }, { status: 201 })
}
