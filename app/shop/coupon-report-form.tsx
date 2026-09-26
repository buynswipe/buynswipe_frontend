"use client"

import { useState } from "react"

export function CouponReportForm({ code, merchant }: { code: string; merchant: string }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState("")
  const [saving, setSaving] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setStatus("")
    const form = new FormData(event.currentTarget)
    const response = await fetch("/api/shop/coupons/report", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ couponCode: code, merchant, reason: form.get("reason"), details: form.get("details") }) })
    const result = await response.json()
    setStatus(response.ok ? "Thanks — we’ll review this coupon." : result.error || "Unable to submit report.")
    setSaving(false)
    if (response.ok) setOpen(false)
  }

  return <div className="text-right"><button type="button" onClick={() => setOpen((value) => !value)} className="text-xs font-bold text-slate-500 underline underline-offset-2 hover:text-slate-900">Report an issue</button>{open && <form onSubmit={submit} className="mt-3 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-left"><label className="text-xs font-bold text-slate-600">Reason<select name="reason" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm"><option value="not_working">Code did not work</option><option value="expired">Expired</option><option value="incorrect_discount">Discount was incorrect</option><option value="incorrect_terms">Terms were incorrect</option><option value="other">Other</option></select></label><label className="text-xs font-bold text-slate-600">Details<textarea name="details" rows={2} maxLength={1000} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm font-normal" /></label><button type="submit" disabled={saving} className="rounded-lg bg-slate-950 px-3 py-2 text-xs font-bold text-white disabled:opacity-50">{saving ? "Sending…" : "Submit report"}</button></form>}{status && <p className="mt-2 text-xs font-semibold text-slate-600">{status}</p>}</div>
}
