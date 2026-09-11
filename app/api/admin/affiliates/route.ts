import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const body = await request.json()
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const partner = typeof body.partner === "string" ? body.partner.trim() : ""
  const category = typeof body.category === "string" ? body.category.trim() : ""
  const destinationUrl = typeof body.destinationUrl === "string" ? body.destinationUrl.trim() : ""
  if (name.length < 2 || partner.length < 2 || category.length < 2 || !/^https?:\/\//i.test(destinationUrl)) return NextResponse.json({ error: "Valid offer details are required" }, { status: 400 })
  const { data: allowed } = await supabase.rpc("is_admin_staff", { required_roles: ["owner", "admin", "affiliate_manager"] })
  if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { data, error } = await supabase.from("affiliate_offers").insert({ name, partner, category, destination_url: destinationUrl, tracking_url: body.trackingUrl?.trim() || null, disclosure: body.disclosure?.trim() || "Sponsored link" , owner_id: user.id }).select("id").single()
  if (error) return NextResponse.json({ error: "Unable to create offer" }, { status: 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "created", entity_type: "affiliate_offer", entity_id: data.id })
  return NextResponse.json({ id: data.id }, { status: 201 })
}
