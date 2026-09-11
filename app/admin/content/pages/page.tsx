import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function AdminPagesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data: pages } = await supabase.from("cms_documents").select("id, title, slug, status, updated_at, seo_title").eq("document_type", "page").order("updated_at", { ascending: false })

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-950">
      <div className="mx-auto max-w-6xl rounded-3xl bg-slate-50 p-8">
        <Link href="/admin/content" className="inline-flex items-center gap-2 text-sm font-bold text-sky-600"><ArrowLeft className="size-4" /> Content studio</Link>
        <h1 className="mt-8 text-3xl font-black">Landing pages</h1>
        <p className="mt-2 text-slate-500">Manage structured page metadata, review status, and publishing readiness.</p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-[1fr_140px_180px] gap-4 border-b border-slate-200 p-4 text-xs font-bold uppercase tracking-widest text-slate-400"><span>Page</span><span>Status</span><span>Last updated</span></div>
          {pages?.length ? pages.map((page) => <div key={page.id} className="grid grid-cols-[1fr_140px_180px] gap-4 border-b border-slate-100 p-4 text-sm last:border-0"><div><p className="font-bold">{page.title}</p><p className="mt-1 text-xs text-slate-500">/{page.slug} · {page.seo_title ? "SEO ready" : "SEO missing"}</p></div><span className="h-fit w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600">{page.status.replace("_", " ")}</span><time className="text-slate-500">{new Date(page.updated_at).toLocaleDateString("en-IN")}</time></div>) : <p className="p-8 text-sm text-slate-500">No managed landing pages yet.</p>}
        </div>
      </div>
    </main>
  )
}
