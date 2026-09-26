"use client"

import { useState } from "react"

export function LeadNotesForm({ leadId }: { leadId: string }) {
  const [note, setNote] = useState("")
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle")
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!note.trim()) return
    setState("saving")
    const response = await fetch(`/api/admin/leads/${leadId}/notes`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ note }) })
    if (!response.ok) { setState("error"); return }
    setNote(""); setState("saved")
  }
  return <form onSubmit={submit} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><label htmlFor="lead-note" className="text-sm font-bold text-slate-800">Add internal note</label><textarea id="lead-note" value={note} onChange={(event) => setNote(event.target.value)} rows={4} maxLength={5000} className="mt-3 w-full rounded-lg border border-slate-200 bg-white p-3 text-sm outline-none focus:border-sky-500" placeholder="Record the next action or customer context..." /><div className="mt-3 flex items-center justify-between"><span className="text-xs text-slate-500">{state === "saved" ? "Note saved" : state === "error" ? "Could not save note" : `${note.length}/5000`}</span><button disabled={state === "saving" || !note.trim()} className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{state === "saving" ? "Saving..." : "Save note"}</button></div></form>
}
