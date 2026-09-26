"use client"
import { useState } from "react"

export function CreditReviewForm({ productId }: { productId: string }) {
  const [message, setMessage] = useState("")
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage("Saving…")
    const body = Object.fromEntries(new FormData(event.currentTarget))
    const response = await fetch(`/api/admin/credit/${productId}/reviews`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) })
    setMessage(response.ok ? "Review saved" : "Unable to save review")
    if (response.ok) event.currentTarget.reset()
  }
  return <form onSubmit={submit} className="mt-5 grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"><label className="grid gap-1 text-sm font-bold">Decision<select name="decision" required className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-normal"><option value="needs_changes">Needs changes</option><option value="approved">Approved</option><option value="rejected">Rejected</option></select></label><label className="grid gap-1 text-sm font-bold">Review notes<textarea name="notes" maxLength={5000} className="min-h-24 rounded-lg border border-slate-200 bg-white px-3 py-2 font-normal" /></label><div className="flex items-center gap-3"><button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white">Save review</button><span className="text-xs text-slate-500" role="status">{message}</span></div></form>
}
