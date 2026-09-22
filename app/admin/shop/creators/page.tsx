import { createClient } from "@/lib/supabase/server"

export default async function AdminCreatorsPage() {
  const supabase = await createClient()
  const [{ data: creators }, { data: campaigns }, { data: applications }, { data: earnings }] = await Promise.all([
    supabase.from("shop_creators").select("id, display_name, niche, status, verification_status, created_at").order("created_at", { ascending: false }).limit(100),
    supabase.from("shop_campaigns").select("id, name, status, campaign_type, starts_at, ends_at").order("created_at", { ascending: false }).limit(100),
    supabase.from("shop_creator_applications").select("id, status, created_at, creator_id, campaign_id").order("created_at", { ascending: false }).limit(100),
    supabase.from("shop_creator_earnings").select("id, amount, currency, status, created_at, creator_id").order("created_at", { ascending: false }).limit(100),
  ])

  const creatorRows = creators ?? []
  const campaignRows = campaigns ?? []
  const applicationRows = applications ?? []
  const earningRows = earnings ?? []
  const pendingApplications = applicationRows.filter((item) => item.status === "pending").length
  const approvedCampaigns = campaignRows.filter((item) => item.status === "approved").length
  const pendingEarnings = earningRows.filter((item) => item.status === "pending").reduce((sum, item) => sum + Number(item.amount || 0), 0)

  return <main className="space-y-8">
    <header><p className="text-sm font-semibold text-sky-600">ShopNdeal operations</p><h1 className="mt-2 text-3xl font-black tracking-tight">Creator commerce</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Review creator profiles, campaign participation, and provider-confirmed earnings without treating clicks or potential commissions as payouts.</p></header>
    <section className="grid gap-4 sm:grid-cols-3"><Metric label="Creators" value={creatorRows.length} detail="Profiles in queue" /><Metric label="Pending applications" value={pendingApplications} detail="Manual review" /><Metric label="Pending earnings" value={`₹${pendingEarnings.toLocaleString("en-IN")}`} detail={`${approvedCampaigns} approved campaigns`} /></section>
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-5 py-4"><h2 className="font-black text-slate-950">Creator profiles</h2><p className="mt-1 text-sm text-slate-500">Status and verification are separate decisions.</p></div>{creatorRows.length ? creatorRows.map((creator) => <div key={creator.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 last:border-0"><div><p className="font-bold text-slate-900">{creator.display_name}</p><p className="mt-1 text-xs capitalize text-slate-500">{creator.niche || "General"} · {creator.status.replaceAll("_", " ")}</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600">{creator.verification_status}</span></div>) : <p className="p-5 text-sm text-slate-500">No creator profiles yet.</p>}</section>
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-5 py-4"><h2 className="font-black text-slate-950">Campaigns and earnings</h2><p className="mt-1 text-sm text-slate-500">Campaigns: {campaignRows.length} · Earnings records: {earningRows.length}</p></div><div className="grid gap-3 p-5 sm:grid-cols-2">{campaignRows.slice(0, 6).map((campaign) => <div key={campaign.id} className="rounded-2xl bg-slate-50 p-4"><p className="font-bold text-slate-900">{campaign.name}</p><p className="mt-1 text-xs capitalize text-slate-500">{campaign.campaign_type.replaceAll("_", " ")} · {campaign.status}</p></div>)}{!campaignRows.length ? <p className="text-sm text-slate-500">No campaigns yet.</p> : null}</div></section>
  </main>
}

function Metric({ label, value, detail }: { label: string; value: number | string; detail: string }) { return <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">{label}</p><p className="mt-3 text-3xl font-black text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div> }
