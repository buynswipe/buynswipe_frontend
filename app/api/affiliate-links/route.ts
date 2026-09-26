import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { validateAffiliateLinks } from "@/lib/affiliate-link-validation"

export const dynamic = "force-dynamic"

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { data: allowed } = await supabase.rpc("is_admin_staff", { required_roles: ["owner", "admin", "affiliate_manager"] })
  if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const report = await validateAffiliateLinks()
  return NextResponse.json(report, {
    headers: { "Cache-Control": "no-store" },
  })
}
