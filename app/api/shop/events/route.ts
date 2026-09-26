import { NextResponse } from "next/server"
import { z } from "zod"
import { createClient } from "@/lib/supabase/server"

const eventSchema = z.object({
  eventType: z.enum(["url_analysis", "outbound_click"]),
  offerId: z.string().trim().max(160).optional(),
  sourceUrl: z.string().url().max(2000).optional(),
  destinationUrl: z.string().url().max(2000).optional(),
  metadata: z.record(z.string(), z.unknown()).default({}),
})

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Authentication required" }, { status: 401 })

  const parsed = eventSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: "Invalid event payload" }, { status: 400 })

  const { error } = await supabase.from("shop_attribution_events").insert({
    event_type: parsed.data.eventType,
    user_id: user.id,
    offer_id: parsed.data.offerId ?? null,
    source_url: parsed.data.sourceUrl ?? null,
    destination_url: parsed.data.destinationUrl ?? null,
    metadata: parsed.data.metadata,
  })
  if (error) return NextResponse.json({ error: "Unable to record event" }, { status: 500 })
  return NextResponse.json({ ok: true }, { status: 201 })
}
