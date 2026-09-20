import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"
import { formatINR, shopItems } from "@/lib/shop-data"

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const brand = decodeURIComponent((await params).brand)
  return { title: `${brand} products | ShopNdeal`, description: `Explore ${brand} products and transparent savings routes.` }
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const brand = decodeURIComponent((await params).brand)
  const items = shopItems.filter((item) => item.brand.toLowerCase() === brand.toLowerCase())
  const name = items[0]?.brand || brand
  return <main className="min-h-screen bg-[#f7f9fc] px-5 py-10 text-slate-950"><div className="mx-auto max-w-6xl"><Link href="/shop/products" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600"><ArrowLeft className="size-4" /> Back to products</Link><div className="mt-10"><p className="text-sm font-bold uppercase tracking-[.16em] text-blue-600">Brand collection</p><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{name}</h1><p className="mt-4 max-w-xl leading-7 text-slate-600">Compare available products and savings signals for this brand.</p></div>{items.length === 0 ? <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No products are listed for this brand yet.</div> : <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <Link key={item.slug} href={`/shop/product/${item.slug}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`h-32 bg-gradient-to-br ${item.accent}`} /><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.category}</p><h2 className="mt-3 font-black">{item.name}</h2><div className="mt-3 flex items-center gap-1 text-sm font-bold text-amber-600"><Star className="size-4 fill-current" /> {item.rating} <span className="font-normal text-slate-400">({item.reviewCount.toLocaleString("en-IN")})</span></div><p className="mt-4 text-xl font-black">{formatINR(item.price)}</p></div></Link>)}</div>}</div></main>
}
