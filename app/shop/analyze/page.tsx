"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, ShieldCheck } from "lucide-react"
import { formatINR } from "@/lib/shop-data"

type Result = { supported: boolean; message?: string; merchant?: string; item?: { slug: string; name: string; price: number; cashback: number; verified: boolean } | null; savings?: { potentialSavings: number; effectivePrice: number; cashback: number } | null; estimated?: boolean }

export default function AnalyzePage() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  async function analyze(event: React.FormEvent) {
    event.preventDefault(); setLoading(true); setResult(null)
    const response = await fetch("/api/shop/analyze", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url }) })
    setResult(await response.json()); setLoading(false)
  }
  return <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
    <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[.2em] text-blue-600">ShopNdeal savings intelligence</p><h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Find the smarter way to buy.</h1><p className="mt-5 text-lg leading-8 text-slate-600">Paste a supported shopping link and see the available savings routes in one clear view.</p></div>
    <form onSubmit={analyze} className="mt-10 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row"><label htmlFor="shopping-url" className="sr-only">Shopping URL</label><input id="shopping-url" type="url" required value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://soundcart.example/..." className="min-w-0 flex-1 rounded-xl bg-slate-50 px-4 py-3 text-sm outline-none ring-blue-200 focus:ring-2" /><button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white hover:bg-blue-700 disabled:opacity-60"><Search className="size-4" />{loading ? "Checking..." : "Find my savings"}</button></form>
    {result && <section aria-live="polite" className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">{result.supported && result.item && result.savings ? <><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-bold text-slate-500">{result.merchant}</p><h2 className="mt-1 text-2xl font-black text-slate-950">{result.item.name}</h2></div>{result.item.verified && <ShieldCheck className="size-6 text-emerald-500" aria-label="Verified catalog item" />}</div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-emerald-50 p-4"><p className="text-xs font-bold uppercase text-emerald-700">Potential savings</p><p className="mt-1 text-2xl font-black text-emerald-800">{formatINR(result.savings.potentialSavings)}</p></div><div className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold uppercase text-blue-700">Estimated effective price</p><p className="mt-1 text-2xl font-black text-blue-800">{formatINR(result.savings.effectivePrice)}</p></div><div className="rounded-xl bg-slate-50 p-4"><p className="text-xs font-bold uppercase text-slate-600">Cashback route</p><p className="mt-1 text-2xl font-black text-slate-900">{formatINR(result.savings.cashback)}</p></div></div><p className="mt-5 text-xs text-slate-500">Estimated demo result. Final eligibility, availability, and merchant terms apply at checkout.</p><Link href={`/shop/product/${result.item.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">View product details <ArrowRight className="size-4" /></Link></> : <p className="font-semibold text-slate-700">{result.message || "We could not match that link yet."}</p>}</section>}
  </main>
}
