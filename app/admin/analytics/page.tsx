import { BarChart3, CheckCircle2, FileText, Link2, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function AdminAnalyticsPage() {
  const supabase = await createClient()
  const [{ data: leads }, { data: content }, { data: offers }, { data: products }] = await Promise.all([
    supabase.from("contact_submissions").select("source,status,created_at"),
    supabase.from("cms_documents").select("document_type,status"),
    supabase.from("affiliate_offers").select("health_status,status"),
    supabase.from("credit_products").select("status"),
  ])

  const sourceCounts = Object.entries((leads ?? []).reduce<Record<string, number>>((acc, lead) => { acc[lead.source] = (acc[lead.source] ?? 0) + 1; return acc }, {})).sort((a, b) => b[1] - a[1])
  const newLeads = (leads ?? []).filter((lead) => lead.status === "new").length
  const publishedContent = (content ?? []).filter((item) => item.status === "published").length
  const healthyOffers = (offers ?? []).filter((offer) => offer.health_status === "healthy").length
  const publishedProducts = (products ?? []).filter((product) => product.status === "published").length

  return <main>
    <header><p className="text-sm font-semibold text-sky-600">Reporting</p><h1 className="mt-2 text-3xl font-black tracking-tight">Portal analytics</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">A live operational view of demand, publishing health, credit products, and affiliate inventory.</p></header>
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric icon={Users} label="Total leads" value={leads?.length ?? 0} detail={`${newLeads} new`} /><Metric icon={FileText} label="Published content" value={publishedContent} detail={`${content?.length ?? 0} total records`} /><Metric icon={Link2} label="Healthy offers" value={healthyOffers} detail={`${offers?.length ?? 0} tracked offers`} /><Metric icon={CheckCircle2} label="Live products" value={publishedProducts} detail={`${products?.length ?? 0} catalog records`} /></section>
    <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><div><h2 className="font-black">Lead sources</h2><p className="mt-1 text-sm text-slate-500">All captured submissions by source.</p></div><BarChart3 className="size-5 text-sky-600" /></div><div className="mt-6 space-y-4">{sourceCounts.length ? sourceCounts.map(([source, count]) => <div key={source}><div className="flex justify-between text-sm"><span className="font-semibold capitalize">{source.replaceAll("_", " ")}</span><span className="font-bold text-slate-500">{count}</span></div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-sky-500" style={{ width: `${Math.max(8, Math.round((count / (leads?.length || 1)) * 100))}%` }} /></div></div>) : <p className="py-8 text-sm text-slate-500">No lead activity recorded yet.</p>}</div></div><div className="rounded-2xl border border-slate-200 bg-white p-5"><h2 className="font-black">Operational health</h2><p className="mt-1 text-sm text-slate-500">Current inventory checks.</p><div className="mt-6 space-y-3"><Health label="Lead capture" value={leads ? "Online" : "Unavailable"} good={Boolean(leads)} /><Health label="CMS inventory" value={`${content?.length ?? 0} records`} good={Boolean(content)} /><Health label="Affiliate checks" value={`${healthyOffers}/${offers?.length ?? 0} healthy`} good={Boolean(offers)} /><Health label="Credit catalog" value={`${publishedProducts} published`} good={Boolean(products)} /></div></div></section>
  </main>
}

function Metric({ icon: Icon, label, value, detail }: { icon: typeof Users; label: string; value: number; detail: string }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p><Icon className="size-4 text-sky-600" /></div><p className="mt-3 text-3xl font-black">{value}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div> }
function Health({ label, value, good }: { label: string; value: string; good: boolean }) { return <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"><span className="text-sm font-semibold">{label}</span><span className={`text-xs font-bold ${good ? "text-emerald-600" : "text-rose-600"}`}>{value}</span></div> }
