import { NextResponse } from "next/server"
import { z } from "zod"
import { createClient } from "@/lib/supabase/server"

const reportSchema = z.object({
  couponCode: z.string().trim().min(2).max(80),
  merchant: z.string().trim().min(2).max(120),
  reason: z.enum(["expired", "not_working", "incorrect_discount", "incorrect_terms", "other"]),
  details: z.string().trim().max(1000).default(""),
})

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Sign in to report a coupon." }, { status: 401 })

  const parsed = reportSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: "Please provide a valid coupon report." }, { status: 400 })

  const { error } = await supabase.from("shop_coupon_reports").insert({
    coupon_code: parsed.data.couponCode,
    merchant: parsed.data.merchant,
    reporter_id: user.id,
    reason: parsed.data.reason,
    details: parsed.data.details,
  })
  if (error) return NextResponse.json({ error: "Unable to submit the report right now." }, { status: 500 })
  return NextResponse.json({ ok: true })
}
