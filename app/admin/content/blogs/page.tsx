import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function AdminBlogsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data: posts } = await supabase.from("cms_documents").select("id, title, slug, status, updated_at, seo_title").eq("document_type", "blog").order("updated_at", { ascending: false })
  return <main className="min-h-screen bg-slate-950 p-6 text-slate-950"><div className="mx-auto max-w-6xl rounded-3xl bg-slate-50 p-8"><Link href="/admin/content" className="inline-flex items-center gap-2 text-sm font-bold text-sky-600"><ArrowLeft className="size-4" /> Content studio</Link><div className="mt-8 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold text-amber-600">Editorial collection</p><h1 className="mt-2 text-3xl font-black">Blog posts</h1><p className="mt-2 text-slate-500">Draft, review, publish, and maintain educational articles.</p></div><Link href="/admin/content" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white">New draft</Link></div><div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="grid grid-cols-[1fr_140px_180px] gap-4 border-b border-slate-200 p-4 text-xs font-bold uppercase tracking-widest text-slate-400"><span>Title</span><span>Status</span><span>Last updated</span></div>{posts?.length ? posts.map((post) => <div key={post.id} className="grid grid-cols-[1fr_140px_180px] gap-4 border-b border-slate-100 p-4 text-sm last:border-0"><div><p className="font-bold">{post.title}</p><p className="mt-1 text-xs text-slate-500">/{post.slug}{post.seo_title ? " · SEO ready" : " · SEO missing"}</p></div><span className="h-fit w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600">{post.status.replace("_", " ")}</span><time className="text-slate-500">{new Date(post.updated_at).toLocaleDateString("en-IN")}</time></div>) : <p className="p-8 text-sm text-slate-500">No blog drafts yet. Create one from Content studio.</p>}</div></div></main>
}
