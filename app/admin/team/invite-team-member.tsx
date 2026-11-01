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
    const response = await fetch("/api/admin/team/invite", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: formData.get("email"), displayName: formData.get("displayName"), role: formData.get("role") }) })
    const result = await response.json().catch(() => ({}))
    setPending(false)
    if (!response.ok) return setStatus(result.error || "Unable to send invitation.")
    setStatus("Invitation sent. The member can use the email link to sign in.")
    setOpen(false)
  }

  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div className="flex items-start gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-600"><UserPlus className="size-5" /></div><div><h2 className="font-bold text-slate-950">Invite a teammate</h2><p className="mt-1 text-sm text-slate-500">Send a secure email invitation with access assigned in advance.</p></div></div><button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800">{open ? "Close form" : "Invite member"}</button></div>{open && <form action={submit} className="mt-6 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3"><label className="text-sm font-semibold text-slate-700">Full name<input name="displayName" required maxLength={120} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100" /></label><label className="text-sm font-semibold text-slate-700">Work email<input name="email" type="email" required maxLength={320} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100" /></label><label className="text-sm font-semibold text-slate-700">Access level<select name="role" defaultValue="viewer" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"><option value="admin">Admin</option><option value="editor">Editor</option><option value="viewer">Viewer</option></select></label><button disabled={pending} className="rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-3 sm:justify-self-end">{pending ? "Sending invitation..." : "Send invitation"}</button></form>}{status && <p role="status" className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">{status}</p>}</div>
}
