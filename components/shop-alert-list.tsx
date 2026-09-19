"use client"

import { useState } from "react"
import Link from "next/link"
import { formatINR, type ShopItem } from "@/lib/shop-data"

export function ShopAlertList({ alerts, items }: { alerts: { product_slug: string; target_price: number }[]; items: ShopItem[] }) {
  const [rows, setRows] = useState(alerts)
  const [message, setMessage] = useState("")
  async function remove(slug: string) {
    const response = await fetch(`/api/shop/preferences?productSlug=${encodeURIComponent(slug)}`, { method: "DELETE" })
    if (!response.ok) { setMessage("We could not remove that alert."); return }
    setRows((current) => current.filter((row) => row.product_slug !== slug))
    setMessage("Alert removed.")
  }
  if (!rows.length) return <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center"><h2 className="text-xl font-black text-slate-950">No active price alerts</h2><p className="mt-2 text-slate-600">Set a target price on any product page and we will keep it on your watchlist.</p><Link href="/shop/products" className="mt-6 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white">Browse products</Link></div>
  return <div><div className="grid gap-5 md:grid-cols-2">{rows.map((row) => { const item = items.find((candidate) => candidate.slug === row.product_slug); if (!item) return null; return <article key={row.product_slug} className="rounded-3xl border border-slate-200 bg-white p-5"><div className={`h-28 rounded-2xl bg-gradient-to-br ${item.accent}`} /><div className="mt-5 flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">{item.merchant}</p><h2 className="mt-2 text-xl font-black text-slate-950">{item.name}</h2><p className="mt-2 text-sm text-slate-500">Current price {formatINR(item.price)}</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Target {formatINR(Number(row.target_price))}</span></div><button type="button" onClick={() => remove(row.product_slug)} className="mt-5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 hover:border-rose-200 hover:text-rose-700">Remove alert</button></article> })}</div>{message && <p className="mt-4 text-sm font-semibold text-slate-600" role="status">{message}</p>}</div>
}
