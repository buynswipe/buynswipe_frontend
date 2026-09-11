"use client"

import { useState } from "react"

const statuses = ["new", "in_progress", "resolved", "spam"] as const

type Props = { id: string; initialStatus: string }

export function LeadStatusControl({ id, initialStatus }: Props) {
  const [status, setStatus] = useState(initialStatus)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  async function updateStatus(nextStatus: string) {
    setSaving(true)
    setError("")
    const response = await fetch(`/api/admin/leads/${id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: nextStatus }) })
    if (!response.ok) {
      setError("Unable to save")
    } else {
      setStatus(nextStatus)
    }
    setSaving(false)
  }

  return <div><select aria-label="Lead status" value={status} disabled={saving} onChange={(event) => updateStatus(event.target.value)} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold capitalize text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"><option value="new">New</option><option value="in_progress">In progress</option><option value="resolved">Resolved</option><option value="spam">Spam</option></select>{error && <p className="mt-1 text-[11px] font-semibold text-rose-600">{error}</p>}</div>
}
