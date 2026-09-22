import Link from "next/link"
import { ArrowUpRight, Bell, Heart, MousePointerClick, ShoppingBag, Search, ShieldCheck } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

const modules = [
  { href: "/admin/audit", label: "Coupon reports", description: "Review open customer reports before changing trust status.", icon: Bell },
  { href: "/admin/analytics", label: "Shop analytics", description: "Review product interest, outbound clicks, and savings activity.", icon: ShoppingBag },
  { href: "/admin/settings", label: "Price-alert operations", description: "Manage alert policy and review cadence from portal settings.", icon: Bell },
  { href: "/shop/wishlist", label: "Customer watchlists", description: "Open the customer-facing saved products experience.", icon: Heart },
  { href: "/shop/cashback", label: "Cashback ledger", description: "Review the customer-facing provider-confirmed cashback view.", icon: ShoppingBag },
  { href: "/admin/shop/merchants", label: "Merchant registry", description: "Review lifecycle, verification, affiliate, and cashback readiness.", icon: ShoppingBag },
  { href: "/shop/creators", label: "Creator campaigns", description: "Preview approved creator campaigns and earnings disclosures.", icon: ShoppingBag },
]

export default async function ShopAdminPage() {
  const supabase = await createClient()
  const [{ count: outboundClicks }, { count: analyses }, { count: reportedLinks }, { count: healthyChecks }, { count: couponReports }] = await Promise.all([
    supabase.from("shop_attribution_events").select("id", { count: "exact", head: true }).eq("event_type", "outbound_click"),
    supabase.from("shop_attribution_events").select("id", { count: "exact", head: true }).eq("event_type", "url_analysis"),
    supabase.from("affiliate_link_checks").select("id", { count: "exact", head: true }).eq("is_healthy", false),
    supabase.from("affiliate_link_checks").select("id", { count: "exact", head: true }).eq("is_healthy", true),
    supabase.from("shop_coupon_reports").select("id", { count: "exact", head: true }).eq("status", "open"),
  ])

  return (
    <main className="space-y-8">
      <header className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">ShopNdeal operations</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Savings intelligence, ready for review.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Use this workspace to connect catalog quality, customer intent, and verified savings operations as ShopNdeal moves from foundation to live commerce data.</p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="ShopNdeal metrics"><ShopMetric icon={MousePointerClick} label="Outbound clicks" value={outboundClicks ?? 0} detail="Tracked shopping intent" /><ShopMetric icon={Search} label="URL analyses" value={analyses ?? 0} detail="Savings checks requested" /><ShopMetric icon={ShieldCheck} label="Healthy checks" value={healthyChecks ?? 0} detail="Latest link health" /><ShopMetric icon={Bell} label="Needs review" value={(reportedLinks ?? 0) + (couponReports ?? 0)} detail={`${reportedLinks ?? 0} links · ${couponReports ?? 0} coupons`} /></section>
      <section className="grid gap-4 md:grid-cols-3" aria-label="ShopNdeal operations modules">
        {modules.map(({ href, label, description, icon: Icon }) => (
          <Link key={href} href={href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
            <div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-cyan-50 text-cyan-700"><Icon className="size-5" aria-hidden="true" /></span><ArrowUpRight className="size-4 text-slate-400 transition group-hover:text-cyan-600" aria-hidden="true" /></div>
            <h2 className="mt-5 text-lg font-black text-slate-950">{label}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
          </Link>
        ))}
      </section>
      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950">
        <strong>Current data boundary:</strong> the public catalog is still a verified demo foundation. Connect live product feeds, affiliate attribution, and event aggregates before using this workspace for operational reporting.
      </section>
    </main>
  )
}

function ShopMetric({ icon: Icon, label, value, detail }: { icon: typeof ShoppingBag; label: string; value: number; detail: string }) { return <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">{label}</p><Icon className="size-4 text-cyan-600" aria-hidden="true" /></div><p className="mt-3 text-3xl font-black text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div> }
