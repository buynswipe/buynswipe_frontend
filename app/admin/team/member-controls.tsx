"use client"

import { useState } from "react"

export function MemberControls({ userId, role, isActive, canAssignAdmin, isOwner }: { userId: string; role: string; isActive: boolean; canAssignAdmin: boolean; isOwner: boolean }) {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  async function update(payload: { role?: string; isActive?: boolean }, confirmation: string) {
    if (!window.confirm(confirmation)) return
    setPending(true)
    setMessage("")
    setError(false)
    try {
      const response = await fetch(`/api/admin/team/${userId}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || "Unable to update member.")
      setMessage("Saved")
      window.location.reload()
    } catch (actionError) {
      setError(true)
      setMessage(actionError instanceof Error ? actionError.message : "Unable to update member.")
    } finally {
      setPending(false)
    }
  }

  if (isOwner) return <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">Owner protected</span>

  return <div className="flex flex-wrap items-center justify-end gap-2"><label className="sr-only" htmlFor={`role-${userId}`}>Role for {role} member</label><select id={`role-${userId}`} aria-label="Member role" disabled={pending} value={role} onChange={(event) => update({ role: event.target.value }, `Change this member's role to ${event.target.value}?`)} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold capitalize text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"><option value="admin" disabled={!canAssignAdmin}>Admin</option><option value="editor">Editor</option><option value="viewer">Viewer</option></select><button type="button" disabled={pending} onClick={() => update({ isActive: !isActive }, `${isActive ? "Deactivate" : "Reactivate"} this team member?`)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">{pending ? "Saving..." : isActive ? "Deactivate" : "Reactivate"}</button>{message && <span role="status" aria-live="polite" className={`text-xs font-semibold ${error ? "text-rose-600" : "text-emerald-600"}`}>{message}</span>}</div>
}
