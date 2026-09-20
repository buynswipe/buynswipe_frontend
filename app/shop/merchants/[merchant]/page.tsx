import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import { formatINR, shopItems } from "@/lib/shop-data"

export async function generateMetadata({ params }: { params: Promise<{ merchant: string }> }): Promise<Metadata> {
  const merchant = decodeURIComponent((await params).merchant)
  return { title: `${merchant} deals | ShopNdeal`, description: `Compare verified savings routes from ${merchant}.` }
}

export default async function MerchantPage({ params }: { params: Promise<{ merchant: string }> }) {
  const merchant = decodeURIComponent((await params).merchant)
  const items = shopItems.filter((item) => item.merchant.toLowerCase() === merchant.toLowerCase())
  const name = items[0]?.merchant || merchant
  return <main className="min-h-screen bg-[#f7f9fc] px-5 py-10 text-slate-950"><div className="mx-auto max-w-6xl"><Link href="/shop/products" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600"><ArrowLeft className="size-4" /> Back to products</Link><div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white sm:p-12"><p className="text-sm font-bold uppercase tracking-[.16em] text-cyan-300">Merchant profile</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{name}</h1><p className="mt-4 max-w-xl leading-7 text-slate-300">Compare starting prices, verified offers and potential cashback before visiting this merchant.</p></div>{items.length === 0 ? <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No verified offers are listed for this merchant yet.</div> : <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <Link key={item.slug} href={`/shop/product/${item.slug}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`h-32 bg-gradient-to-br ${item.accent}`} /><div className="p-5"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400"><span>{item.category}</span>{item.verified && <ShieldCheck className="size-4 text-emerald-500" aria-label="Verified offer" />}</div><h2 className="mt-3 font-black">{item.name}</h2><p className="mt-4 text-xl font-black">{formatINR(item.price)}</p><p className="text-xs text-emerald-600">{item.discount}% off · {formatINR(item.cashback)} cashback potential</p></div></Link>)}</div>}</div></main>
}
