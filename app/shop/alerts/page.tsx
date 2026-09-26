import type { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { shopItems } from "@/lib/shop-data"
import { ShopAlertList } from "@/components/shop-alert-list"

export const metadata: Metadata = { title: "Price alerts | ShopNdeal", description: "Manage your ShopNdeal price alerts." }

export default async function ShopAlertsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return <main className="mx-auto max-w-3xl px-6 py-20"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">ShopNdeal</p><h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Price alerts, without the noise.</h1><p className="mt-4 text-slate-600">Sign in to manage the prices you are watching.</p><Link href="/auth/login?next=/shop/alerts" className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white">Sign in to continue</Link></main>
  const { data: alerts } = await supabase.from("shop_price_alerts").select("product_slug, target_price").eq("user_id", user.id).eq("active", true).order("created_at", { ascending: false })
  return <main className="min-h-screen bg-[#f7f9fc] px-6 py-12"><div className="mx-auto max-w-6xl"><Link href="/shop" className="text-sm font-bold text-blue-700">← Back to ShopNdeal</Link><div className="mt-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">My ShopNdeal</p><h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Price alerts</h1><p className="mt-3 max-w-2xl text-slate-600">Keep an eye on meaningful price drops. Alerts are private to your account.</p></div><div className="mt-10"><ShopAlertList alerts={alerts ?? []} items={shopItems} /></div></div></main>
}
