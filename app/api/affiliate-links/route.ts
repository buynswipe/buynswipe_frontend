import { NextResponse } from "next/server"
import { validateAffiliateLinks } from "@/lib/affiliate-link-validation"

export const dynamic = "force-dynamic"

export async function GET() {
  const report = await validateAffiliateLinks()
  return NextResponse.json(report, {
    headers: { "Cache-Control": "no-store" },
  })
}
