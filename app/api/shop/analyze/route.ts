import { NextResponse } from "next/server"
import { z } from "zod"
import { createClient } from "@/lib/supabase/server"
import { calculateSavings, searchShopItems } from "@/lib/shop-data"

const schema = z.object({ url: z.string().url().max(2048) })
const allowedHosts = new Set(["soundcart.example", "urbanstep.example", "techbazaar.example", "homekind.example", "glowbasket.example", "freshbasket.example"])

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: "Enter a valid shopping URL." }, { status: 400 })

  let url: URL
  try { url = new URL(parsed.data.url) } catch { return NextResponse.json({ error: "Enter a valid shopping URL." }, { status: 400 }) }
  if (url.protocol !== "https:" || !allowedHosts.has(url.hostname)) {
    return NextResponse.json({ supported: false, message: "This merchant is not connected yet. Try a supported ShopNdeal demo merchant." })
  }

  const item = searchShopItems(url.pathname.replaceAll("/", " ")).at(0) || searchShopItems("", url.hostname.split(".")[0]).at(0)
  const savings = item ? calculateSavings(item.price, Math.round(item.price * 0.05), item.cashback) : null
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) await supabase.from("shop_attribution_events").insert({ event_type: "url_analysis", user_id: user.id, source_url: url.toString(), metadata: { supported: true, product: item?.slug ?? null } })

  return NextResponse.json({ supported: true, merchant: item?.merchant ?? url.hostname, item: item ?? null, savings, estimated: true })
}
