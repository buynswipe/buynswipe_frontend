import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { LinkCheckControl } from "../link-check-control"

export default async function AffiliateOfferPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!/^[0-9a-f-]{36}$/i.test(id)) redirect("/admin/affiliates")
  const supabase = await createClient()
  const [{ data: offer }, { data: checks }] = await Promise.all([
    supabase.from("affiliate_offers").select("id, name, partner, category, destination_url, tracking_url, disclosure, status, health_status, last_checked_at").eq("id", id).maybeSingle(),
    supabase.from("affiliate_link_checks").select("id, http_status, is_healthy, error_message, checked_at").eq("offer_id", id).order("checked_at", { ascending: false }).limit(20),
  ])
  if (!offer) notFound()
  return <main className="min-h-screen bg-slate-950 text-slate-950"><div className="mx-auto min-h-screen max-w-5xl bg-slate-50 p-6 lg:p-10"><Link href="/admin/affiliates" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Affiliate operations</Link><header className="mt-8"><p className="text-sm font-semibold text-violet-600">Offer detail</p><h1 className="mt-2 text-3xl font-black">{offer.name}</h1><p className="mt-2 text-sm text-slate-500">{offer.partner} · {offer.category}</p></header><div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]"><section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="font-black">Link health</h2><p className="mt-2 break-all text-sm text-slate-500">{offer.destination_url}</p><LinkCheckControl offerId={offer.id} /><dl className="mt-6 space-y-3 text-sm"><div className="flex justify-between gap-4"><dt className="text-slate-500">Status</dt><dd className="font-bold capitalize">{offer.health_status ?? "unknown"}</dd></div><div className="flex justify-between gap-4"><dt className="text-slate-500">Disclosure</dt><dd className="text-right font-bold">{offer.disclosure}</dd></div></dl></section><section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="font-black">Check history</h2><div className="mt-4 divide-y divide-slate-100">{checks?.length ? checks.map((check) => <div key={check.id} className="flex items-start justify-between gap-4 py-3 text-sm"><div><p className="font-bold">{check.is_healthy ? "Healthy" : "Unhealthy"} {check.http_status ? `· HTTP ${check.http_status}` : ""}</p><p className="mt-1 text-xs text-slate-500">{check.error_message || "No error"}</p></div><time className="shrink-0 text-xs text-slate-400">{new Date(check.checked_at).toLocaleString()}</time></div>) : <p className="py-6 text-sm text-slate-500">No checks recorded yet.</p>}</div></section></div></div></main>
}
