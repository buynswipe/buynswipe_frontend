import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

type RouteContext = { params: Promise<{ id: string }> }
const statuses = new Set(["new", "in_progress", "resolved", "spam"])

export async function PATCH(request: Request, { params }: RouteContext) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { data: staff } = await supabase.from("admin_users").select("role").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff || !["owner", "admin", "lead_manager", "support"].includes(staff.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const body = await request.json().catch(() => null)
  const status = typeof body?.status === "string" ? body.status : ""
  const { id } = await params
  if (!statuses.has(status) || !/^[0-9a-f-]{36}$/i.test(id)) {
    return NextResponse.json({ error: "Invalid lead update" }, { status: 400 })
  }

  const { data, error } = await supabase.from("contact_submissions").update({ status }).eq("id", id).select("id, status").single()
  if (error) return NextResponse.json({ error: "Unable to update lead" }, { status: 500 })

  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "lead.status_updated", entity_type: "contact_submission", entity_id: id, metadata: { status } })
  return NextResponse.json({ lead: data })
}
