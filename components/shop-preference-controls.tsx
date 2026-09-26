"use client"

import { useState } from "react"
import { Bell, Heart } from "lucide-react"

export function ShopPreferenceControls({ productSlug }: { productSlug: string }) {
  const [saved, setSaved] = useState(false)
  const [targetPrice, setTargetPrice] = useState("")
  const [message, setMessage] = useState("")
  const [saving, setSaving] = useState(false)

  async function savePreferences() {
    setSaving(true); setMessage("")
    const response = await fetch("/api/shop/preferences", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ productSlug, targetPrice }) })
    const result = await response.json().catch(() => ({}))
    setMessage(response.ok ? "Saved to your ShopNdeal watchlist." : result.error || "Sign in to save this product.")
    if (response.ok) setSaved(true)
    setSaving(false)
  }

  return <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4"><div className="flex flex-wrap gap-3"><button type="button" onClick={savePreferences} disabled={saving} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition ${saved ? "bg-emerald-100 text-emerald-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}><Heart className="size-4" /> {saved ? "Saved" : "Save to wishlist"}</button><label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm"><Bell className="size-4 text-blue-600" /><span className="sr-only">Target price</span><span className="text-slate-500">Alert below ₹</span><input inputMode="decimal" value={targetPrice} onChange={(event) => setTargetPrice(event.target.value)} placeholder="optional" className="w-20 bg-transparent font-bold outline-none" /></label></div>{message && <p className="mt-3 text-sm font-semibold text-slate-600" role="status">{message}</p>}</div>
}
