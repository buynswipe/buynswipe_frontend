import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const blockedHosts = new Set(["localhost", "127.0.0.1", "::1"])

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!/^[0-9a-f-]{36}$/i.test(id)) return NextResponse.json({ error: "Invalid offer" }, { status: 400 })
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { data: allowed } = await supabase.rpc("is_admin_staff", { required_roles: ["owner", "admin", "affiliate_manager"] })
  if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { data: offer } = await supabase.from("affiliate_offers").select("destination_url").eq("id", id).single()
  if (!offer) return NextResponse.json({ error: "Offer not found" }, { status: 404 })
  let status: number | null = null
  let errorMessage: string | null = null
  try {
    const url = new URL(offer.destination_url)
    if (!/^https?:$/.test(url.protocol) || blockedHosts.has(url.hostname) || url.hostname.endsWith(".local")) throw new Error("Destination host is not allowed")
    const response = await fetch(url, { method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(8000) })
    status = response.status
  } catch (error) {
    errorMessage = error instanceof Error ? error.message.slice(0, 240) : "Link check failed"
  }
  const healthy = status !== null && status >= 200 && status < 400
  const { data: check, error } = await supabase.from("affiliate_link_checks").insert({ offer_id: id, checked_by: user.id, http_status: status, is_healthy: healthy, error_message: errorMessage }).select("id, http_status, is_healthy, error_message, checked_at").single()
  if (error) return NextResponse.json({ error: "Unable to save link check" }, { status: 500 })
  await supabase.from("affiliate_offers").update({ health_status: healthy ? "healthy" : "unhealthy", last_checked_at: new Date().toISOString() }).eq("id", id)
  await supabase.from("admin_audit_logs").insert({ actor_id: user.id, action: "affiliate.link_checked", entity_type: "affiliate_offer", entity_id: id, metadata: { healthy, status } })
  return NextResponse.json(check)
}
