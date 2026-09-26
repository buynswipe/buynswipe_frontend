import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { NewContentForm } from "./new-content-form"

const contentAreas = [
  ["Blog posts", "Draft, review, publish, and retire educational articles.", "/admin/content/blogs", "blog"],
  ["Landing pages", "Manage page copy, SEO metadata, and publishing status.", "/admin/content/pages", "page"],
  ["Resources", "Maintain guides, calculators, and downloadable content.", "/admin/content/resources", "resource"],
] as const

export default async function AdminContentPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data: staff } = await supabase.from("admin_users").select("role, is_active").eq("user_id", user.id).maybeSingle()
  if (!staff?.is_active) return null
  const { data: documents } = await supabase.from("cms_documents").select("id, slug, title, document_type, status, updated_at").order("updated_at", { ascending: false }).limit(50)

  return <main className="min-h-screen bg-slate-950 text-slate-950"><div className="mx-auto min-h-screen max-w-7xl bg-slate-50 p-6 lg:p-10"><Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Admin overview</Link><header className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-amber-600">Editorial workspace</p><h1 className="mt-2 text-3xl font-black">Content studio</h1><p className="mt-2 text-sm text-slate-500">Structured publishing for pages, blogs, and resources.</p></div><NewContentForm /></header><div className="mt-8 grid gap-4 md:grid-cols-3">{contentAreas.map(([title, description, href, type]) => <Link href={href} key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"><div className="grid size-11 place-items-center rounded-xl bg-amber-100 text-amber-700"><FileText className="size-5" /></div><h2 className="mt-5 font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><span className="mt-5 block text-sm font-bold text-amber-700">{documents?.filter((doc) => doc.document_type === type).length ?? 0} records · Open collection →</span></Link>)}</div><section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="border-b border-slate-200 p-5"><h2 className="font-black">Recent content</h2><p className="mt-1 text-sm text-slate-500">Drafts and published records ordered by last update.</p></div><div className="divide-y divide-slate-100">{documents?.length ? documents.map((doc) => <div key={doc.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold">{doc.title}</p><p className="mt-1 text-xs text-slate-500">/{doc.slug} · {doc.document_type}</p></div><span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600">{doc.status.replace("_", " ")}</span></div>) : <p className="p-8 text-sm text-slate-500">No content records yet. Create the first draft above.</p>}</div></section></div></main>
}
