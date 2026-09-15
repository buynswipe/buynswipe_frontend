"use client"
import { useState } from "react"
import { RefreshCw } from "lucide-react"

export function LinkCheckControl({ offerId }: { offerId: string }) {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  async function check() {
    setLoading(true); setMessage("Checking…")
    const response = await fetch(`/api/admin/affiliates/${offerId}/check`, { method: "POST" })
    const result = await response.json()
    setMessage(response.ok ? (result.is_healthy ? "Link is healthy" : "Link needs attention") : result.error || "Check failed")
    setLoading(false)
    if (response.ok) window.location.reload()
  }
  return <div className="mt-6"><button type="button" onClick={check} disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white disabled:opacity-50"><RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} /> {loading ? "Checking" : "Check now"}</button><p className="mt-2 text-xs text-slate-500" role="status">{message}</p></div>
}
