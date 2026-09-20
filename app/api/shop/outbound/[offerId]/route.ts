import { shopItems } from "@/lib/shop-data"
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ offerId: string }> }) {
  const { offerId } = await params
  const item = shopItems.find((entry) => entry.slug === offerId)
  if (!item) return NextResponse.json({ error: "Offer not found" }, { status: 404 })

  const destination = new URL("https://www.google.com/search")
  destination.searchParams.set("q", `${item.merchant} ${item.brand} ${item.name}`)
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    await supabase.from("shop_attribution_events").insert({
      event_type: "outbound_click",
      user_id: user.id,
      offer_id: item.slug,
      source_url: new URL(request.url).toString(),
      destination_url: destination.toString(),
      metadata: { merchant: item.merchant, brand: item.brand, demoDestination: true },
    })
  }
  return NextResponse.redirect(destination)
}
