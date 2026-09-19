import type { Metadata } from "next"
import Link from "next/link"
import { Filter, ShieldCheck } from "lucide-react"
import { formatINR, shopItems } from "@/lib/shop-data"

export const metadata: Metadata = { title: "Shop Products | ShopNdeal", description: "Discover products with transparent prices, discounts and savings routes." }

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams
  const term = (params.q || params.category || "").toLowerCase()
  const items = shopItems.filter((item) => !term || `${item.name} ${item.merchant} ${item.category}`.toLowerCase().includes(term))
  return <main className="min-h-screen bg-[#f7f9fc] px-5 py-10 text-slate-950"><div className="mx-auto max-w-7xl"><Link href="/shop" className="text-sm font-bold text-blue-600">← Back to ShopNdeal</Link><div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold text-blue-600">ShopNdeal catalog</p><h1 className="mt-1 text-4xl font-black tracking-tight">Find products worth buying.</h1><p className="mt-2 text-slate-500">Transparent starting points with savings signals, not promises.</p></div><button type="button" className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold"><Filter className="size-4" /> Filters</button></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map((item) => <Link key={item.slug} href={`/shop/product/${item.slug}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg"><div className={`h-32 bg-gradient-to-br ${item.accent}`} /><div className="p-5"><div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400"><span>{item.category}</span>{item.verified && <ShieldCheck className="size-4 text-emerald-500" />}</div><h2 className="mt-3 font-black">{item.name}</h2><p className="mt-1 text-sm text-slate-500">{item.merchant}</p><p className="mt-4 text-xl font-black">{formatINR(item.price)}</p><p className="text-xs text-emerald-600">{item.discount}% off · {formatINR(item.cashback)} cashback potential</p></div></Link>)}</div>{items.length === 0 && <div className="mt-8 rounded-2xl bg-white p-10 text-center text-slate-500">No catalog matches yet. Try a broader search.</div>}</div></main>
}
