"use client"

import { useState } from "react"
import { UserPlus } from "lucide-react"

export function InviteTeamMember() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function submit(formData: FormData) {
    setPending(true)
    setStatus(null)
    const response = await fetch("/api/admin/team/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        displayName: formData.get("displayName"),
        role: formData.get("role"),
      }),
    })
    const result = await response.json()
    setPending(false)
    if (!response.ok) {
      setStatus(result.error || "Unable to send invitation.")
      return
    }
    setStatus("Invitation sent. The member can use the email link to sign in.")
    setOpen(false)
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-bold">Invite team member</h2>
          <p className="mt-1 text-sm text-slate-500">Send an email invitation and assign access before they sign in.</p>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-800">
          <UserPlus className="size-4" /> {open ? "Close" : "Invite member"}
        </button>
      </div>
      {open && <form action={submit} className="mt-5 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">
        <label className="text-sm font-semibold text-slate-700">Name<input name="displayName" required maxLength={120} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-sky-500" /></label>
        <label className="text-sm font-semibold text-slate-700">Email<input name="email" type="email" required maxLength={320} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-sky-500" /></label>
        <label className="text-sm font-semibold text-slate-700">Role<select name="role" defaultValue="viewer" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none focus:border-sky-500"><option value="admin">Admin</option><option value="editor">Editor</option><option value="viewer">Viewer</option></select></label>
        <button disabled={pending} className="rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white disabled:opacity-50 sm:col-span-3 sm:justify-self-end">{pending ? "Sending…" : "Send invitation"}</button>
      </form>}
      {status && <p role="status" className="mt-4 text-sm font-semibold text-slate-600">{status}</p>}
    </div>
  )
}
