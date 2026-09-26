"use client"

import { useState } from "react"

export function LeadAssignmentControl({ leadId, initialAssignee, members }: { leadId: string; initialAssignee: string | null; members: Array<{ user_id: string; display_name: string | null; role: string }> }) {
  const [assignee, setAssignee] = useState(initialAssignee ?? "")
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  async function update(value: string) {
    setAssignee(value)
    setSaving(true)
    setMessage("")
    const response = await fetch(`/api/admin/leads/${leadId}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ assigned_to: value || null }) })
    setSaving(false)
    setMessage(response.ok ? "Saved" : "Unable to save")
  }

  return <label className="block text-sm font-bold text-slate-700">Owner<select value={assignee} onChange={(event) => update(event.target.value)} disabled={saving} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold"><option value="">Unassigned</option>{members.map((member) => <option key={member.user_id} value={member.user_id}>{member.display_name || "Unlabeled staff"} · {member.role.replaceAll("_", " ")}</option>)}</select>{message && <span className="mt-1 block text-xs font-medium text-slate-400" aria-live="polite">{message}</span>}</label>
}
