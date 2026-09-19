import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const slugPattern = /^[a-z0-9-]{2,120}$/

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Sign in to view your ShopNdeal preferences." }, { status: 401 })
  const [{ data: wishlist, error: wishlistError }, { data: alerts, error: alertsError }] = await Promise.all([
    supabase.from("shop_wishlists").select("product_slug, created_at").eq("user_id", user.id).order("created_at", { ascending: false }),
    supabase.from("shop_price_alerts").select("product_slug, target_price, active").eq("user_id", user.id).eq("active", true),
  ])
  if (wishlistError || alertsError) return NextResponse.json({ error: "Unable to load ShopNdeal preferences." }, { status: 500 })
  return NextResponse.json({ wishlist: wishlist ?? [], alerts: alerts ?? [] })
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Sign in to save ShopNdeal preferences." }, { status: 401 })
  const body = await request.json().catch(() => null)
  const slug = typeof body?.productSlug === "string" ? body.productSlug.trim() : ""
  const targetPrice = body?.targetPrice === undefined || body?.targetPrice === "" ? null : Number(body.targetPrice)
  if (!slugPattern.test(slug)) return NextResponse.json({ error: "Invalid product." }, { status: 400 })
  if (targetPrice !== null && (!Number.isFinite(targetPrice) || targetPrice <= 0 || targetPrice > 100000000)) return NextResponse.json({ error: "Enter a valid target price." }, { status: 400 })

  const { error: wishlistError } = await supabase.from("shop_wishlists").upsert({ user_id: user.id, product_slug: slug }, { onConflict: "user_id,product_slug" })
  if (wishlistError) return NextResponse.json({ error: wishlistError.message }, { status: 500 })
  if (targetPrice !== null) {
    const { error } = await supabase.from("shop_price_alerts").upsert({ user_id: user.id, product_slug: slug, target_price: targetPrice, active: true }, { onConflict: "user_id,product_slug" })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}

export async function DELETE(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Sign in to manage ShopNdeal preferences." }, { status: 401 })
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("productSlug") || ""
  if (!slugPattern.test(slug)) return NextResponse.json({ error: "Invalid product." }, { status: 400 })
  const { error } = await supabase.from("shop_wishlists").delete().eq("user_id", user.id).eq("product_slug", slug)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  await supabase.from("shop_price_alerts").delete().eq("user_id", user.id).eq("product_slug", slug)
  return NextResponse.json({ ok: true })
}
