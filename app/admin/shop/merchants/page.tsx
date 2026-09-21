import Link from "next/link"
import { ArrowLeft, Store } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function ShopMerchantsAdminPage() {
  const supabase = await createClient()
  const { data: merchants, error } = await supabase.from("shop_merchants").select("id, name, slug, category, status, verification_status, affiliate_status, cashback_available, created_at").order("created_at", { ascending: false }).limit(100)

  return (
    <main className="space-y-8">
      <header>
        <Link href="/admin/shop" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-cyan-900"><ArrowLeft className="size-4" aria-hidden="true" /> ShopNdeal operations</Link>
        <div className="mt-6 flex items-start gap-4"><span className="grid size-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700"><Store className="size-6" aria-hidden="true" /></span><div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Catalog governance</p><h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Merchant registry</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Review merchant lifecycle, verification, affiliate connection, and cashback readiness before publishing offers.</p></div></div>
      </header>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {error ? <p className="p-6 text-sm text-amber-800">Merchant data is not available to this role yet. Configure the staff read policy before using this queue.</p> : merchants?.length ? <div className="divide-y divide-slate-100">{merchants.map((merchant) => <article key={merchant.id} className="flex flex-wrap items-center justify-between gap-4 p-5"><div><h2 className="font-black text-slate-950">{merchant.name}</h2><p className="mt-1 text-sm text-slate-500">{merchant.category || "Uncategorized"} · {merchant.slug}</p></div><div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-slate-100 px-3 py-1 capitalize text-slate-700">{merchant.status.replaceAll("_", " ")}</span><span className="rounded-full bg-cyan-50 px-3 py-1 capitalize text-cyan-800">{merchant.verification_status}</span><span className="rounded-full bg-emerald-50 px-3 py-1 capitalize text-emerald-800">{merchant.affiliate_status.replaceAll("_", " ")}</span>{merchant.cashback_available ? <span className="rounded-full bg-violet-50 px-3 py-1 text-violet-800">Cashback ready</span> : null}</div></article>)}</div> : <div className="p-10 text-center"><Store className="mx-auto size-8 text-slate-300" aria-hidden="true" /><p className="mt-3 font-bold text-slate-700">No merchants are ready for review.</p><p className="mt-1 text-sm text-slate-500">New merchant submissions will appear here after the staff policy is enabled.</p></div>}
      </section>
    </main>
  )
}
