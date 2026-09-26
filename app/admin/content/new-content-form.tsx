"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function NewContentForm() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [documentType, setDocumentType] = useState("blog")
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setError("")
    const response = await fetch("/api/admin/content", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title, slug, documentType }) })
    const result = await response.json()
    if (!response.ok) setError(result.error || "Unable to create content")
    else { setOpen(false); setTitle(""); setSlug(""); router.refresh() }
    setSaving(false)
  }

  if (!open) return <button onClick={() => setOpen(true)} className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-700">New content</button>
  return <form onSubmit={submit} className="rounded-2xl border border-sky-200 bg-sky-50 p-4 sm:min-w-[420px]"><div className="grid gap-3 sm:grid-cols-2"><input aria-label="Title" required minLength={3} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /><input aria-label="Slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" value={slug} onChange={(event) => setSlug(event.target.value)} placeholder="url-slug" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" /><select aria-label="Content type" value={documentType} onChange={(event) => setDocumentType(event.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"><option value="blog">Blog post</option><option value="page">Landing page</option><option value="resource">Resource</option></select></div>{error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}<div className="mt-4 flex gap-2"><button disabled={saving} className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{saving ? "Creating..." : "Create draft"}</button><button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600">Cancel</button></div></form>
}
