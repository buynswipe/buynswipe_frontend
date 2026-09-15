import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const decisions = new Set(["approved", "rejected", "needs_changes"])

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!/^[0-9a-f-]{36}$/i.test(id)) return NextResponse.json({ error: "Invalid product" }, { status: 400 })
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { data: allowed } = await supabase.rpc("is_admin_staff", { required_roles: ["owner", "admin", "editor"] })
  if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const body = await request.json()
  const decision = typeof body.decision === "string" ? body.decision : ""
  const notes = typeof body.notes === "string" ? body.notes.trim().slice(0, 5000) : ""
  if (!decisions.has(decision)) return NextResponse.json({ error: "Invalid review decision" }, { status: 400 })
  const { data, error } = await supabase.from("credit_reviews").insert({ product_id: id, reviewer_id: user.id, decision, notes }).select("id, decision, notes, created_at").single()
  if (error) return NextResponse.json({ error: "Unable to save review" }, { status: 500 })
  await supabase.from("credit_products").update({ status: decision === "approved" ? "approved" : decision === "rejected" ? "rejected" : "review" }).eq("id", id)
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: `credit.${decision}`, entity_type: "credit_product", entity_id: id, metadata: { notes } })
  return NextResponse.json(data, { status: 201 })
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { data, error } = await supabase.from("credit_reviews").select("id, decision, notes, created_at, reviewer_id").eq("product_id", id).order("created_at", { ascending: false })
  if (error) return NextResponse.json({ error: "Unable to load reviews" }, { status: 500 })
  return NextResponse.json(data)
}
