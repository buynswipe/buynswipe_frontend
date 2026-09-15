"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type Document = { id: string; title: string; excerpt: string | null; content: string; status: string; scheduled_at: string | null; seo_title: string | null; seo_description: string | null }

export function ContentEditForm({ document }: { document: Document }) {
  const router = useRouter()
  const [form, setForm] = useState({ title: document.title, excerpt: document.excerpt || "", content: document.content, status: document.status, scheduledAt: document.scheduled_at ? document.scheduled_at.slice(0, 16) : "", seoTitle: document.seo_title || "", seoDescription: document.seo_description || "" })
  const [message, setMessage] = useState("")
  const [saving, setSaving] = useState(false)
  async function save(event: React.FormEvent) {
    event.preventDefault(); setSaving(true); setMessage("")
    const response = await fetch(`/api/admin/content/${document.id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(form) })
    const result = await response.json()
    setMessage(response.ok ? "Saved successfully." : result.error || "Unable to save content")
    setSaving(false); if (response.ok) router.refresh()
  }
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }))
  return <form onSubmit={save} className="mt-8 grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><label className="grid gap-2 text-sm font-bold">Title<input value={form.title} onChange={(event) => update("title", event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 font-normal" required /></label><label className="grid gap-2 text-sm font-bold">Excerpt<textarea value={form.excerpt} onChange={(event) => update("excerpt", event.target.value)} rows={3} className="rounded-xl border border-slate-200 px-3 py-2 font-normal" /></label><label className="grid gap-2 text-sm font-bold">Content<textarea value={form.content} onChange={(event) => update("content", event.target.value)} rows={16} className="rounded-xl border border-slate-200 px-3 py-2 font-mono text-sm font-normal" /></label><div className="grid gap-5 md:grid-cols-3"><label className="grid gap-2 text-sm font-bold">Status<select value={form.status} onChange={(event) => update("status", event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 font-normal"><option value="draft">Draft</option><option value="in_review">In review</option><option value="published">Published</option><option value="archived">Archived</option></select></label><label className="grid gap-2 text-sm font-bold">Schedule publication<input type="datetime-local" value={form.scheduledAt} onChange={(event) => update("scheduledAt", event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 font-normal" /></label><label className="grid gap-2 text-sm font-bold md:col-span-1">SEO title<input value={form.seoTitle} onChange={(event) => update("seoTitle", event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 font-normal" /></label></div><label className="grid gap-2 text-sm font-bold">SEO description<textarea value={form.seoDescription} onChange={(event) => update("seoDescription", event.target.value)} rows={3} className="rounded-xl border border-slate-200 px-3 py-2 font-normal" /></label><div className="flex items-center justify-between gap-4"><p aria-live="polite" className="text-sm font-semibold text-slate-500">{message}</p><button disabled={saving} className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50">{saving ? "Saving..." : "Save changes"}</button></div></form>
}
