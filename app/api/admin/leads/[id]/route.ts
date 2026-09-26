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
  const assignedTo = body?.assigned_to === null || typeof body?.assigned_to === "string" ? body.assigned_to : undefined
  const { id } = await params
  if ((!statuses.has(status) && assignedTo === undefined) || !/^[0-9a-f-]{36}$/i.test(id) || (assignedTo && !/^[0-9a-f-]{36}$/i.test(assignedTo))) {
    return NextResponse.json({ error: "Invalid lead update" }, { status: 400 })
  }

  const update = assignedTo !== undefined ? { assigned_to: assignedTo } : { status }
  const { data, error } = await supabase.from("contact_submissions").update(update).eq("id", id).select("id, status, assigned_to").single()
  if (error) return NextResponse.json({ error: "Unable to update lead" }, { status: 500 })

  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: assignedTo !== undefined ? "lead.assigned" : "lead.status_updated", entity_type: "contact_submission", entity_id: id, metadata: assignedTo !== undefined ? { assigned_to: assignedTo } : { status } })
  return NextResponse.json({ lead: data })
}
