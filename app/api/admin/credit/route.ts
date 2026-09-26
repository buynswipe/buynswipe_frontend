import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const body = await request.json()
  const name = typeof body.name === "string" ? body.name.trim() : ""
  const provider = typeof body.provider === "string" ? body.provider.trim() : ""
  const productType = typeof body.productType === "string" ? body.productType.trim() : ""
  if (name.length < 2 || provider.length < 2 || productType.length < 2) return NextResponse.json({ error: "Name, provider, and type are required" }, { status: 400 })
  const { data: allowed } = await supabase.rpc("is_admin_staff", { required_roles: ["owner", "admin", "editor"] })
  if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { data, error } = await supabase.from("credit_products").insert({ name, provider, product_type: productType, rate_text: body.rateText?.trim() || null, fee_text: body.feeText?.trim() || null, eligibility: body.eligibility?.trim() || null, source_url: body.sourceUrl?.trim() || null, created_by: user.id }).select("id").single()
  if (error) return NextResponse.json({ error: "Unable to create product" }, { status: 500 })
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "created", entity_type: "credit_product", entity_id: data.id })
  return NextResponse.json({ id: data.id }, { status: 201 })
}
