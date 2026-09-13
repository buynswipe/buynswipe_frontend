"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type Revision = { id: string; title: string; status: string; created_at: string }

export function RevisionHistory({ document, revisions }: { document: { id: string; title: string; excerpt: string | null; content: string; seo_title: string | null; seo_description: string | null }; revisions: Revision[] }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")
  async function createRevision() {
    setSaving(true); setMessage("")
    const response = await fetch(`/api/admin/content/${document.id}/revisions`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: document.title, excerpt: document.excerpt ?? "", content: document.content, seoTitle: document.seo_title ?? "", seoDescription: document.seo_description ?? "", status: "draft" }) })
    const result = await response.json()
    setMessage(response.ok ? "Revision snapshot created." : result.error || "Unable to create revision")
    setSaving(false)
    if (response.ok) router.refresh()
  }
  return <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-black">Revision history</h2><p className="mt-1 text-sm text-slate-500">Create immutable snapshots before review or publishing.</p></div><button type="button" onClick={createRevision} disabled={saving} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50">{saving ? "Saving…" : "Create snapshot"}</button></div><p aria-live="polite" className="mt-3 text-sm font-semibold text-slate-500">{message}</p><div className="mt-5 divide-y divide-slate-100">{revisions.length ? revisions.map((revision) => <div key={revision.id} className="flex items-center justify-between gap-4 py-3"><div><p className="font-semibold text-slate-800">{revision.title}</p><p className="text-xs text-slate-500">{new Date(revision.created_at).toLocaleString()}</p></div><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold capitalize text-slate-600">{revision.status}</span></div>) : <p className="py-3 text-sm text-slate-500">No snapshots yet.</p>}</div></section>
}
