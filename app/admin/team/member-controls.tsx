"use client"

import { useState } from "react"

export function MemberControls({ userId, role, isActive, canAssignAdmin, isOwner }: { userId: string; role: string; isActive: boolean; canAssignAdmin: boolean; isOwner: boolean }) {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function update(payload: { role?: string; isActive?: boolean }) {
    setPending(true)
    setMessage("")
    const response = await fetch(`/api/admin/team/${userId}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
    const result = await response.json().catch(() => ({}))
    setPending(false)
    if (!response.ok) return setMessage(result.error || "Unable to update member.")
    setMessage("Saved")
    window.location.reload()
  }

  if (isOwner) return <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Owner</span>
  return <div className="flex flex-wrap items-center justify-end gap-2"><select aria-label="Member role" disabled={pending} value={role} onChange={(event) => update({ role: event.target.value })} className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-bold capitalize"><option value="admin" disabled={!canAssignAdmin}>Admin</option><option value="editor">Editor</option><option value="viewer">Viewer</option></select><button type="button" disabled={pending} onClick={() => update({ isActive: !isActive })} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 disabled:opacity-50">{isActive ? "Deactivate" : "Reactivate"}</button>{message && <span className="text-xs font-semibold text-slate-500">{message}</span>}</div>
}
