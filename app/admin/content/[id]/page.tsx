import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { ContentEditForm } from "./edit-form"
import { RevisionHistory } from "./revision-history"

export default async function AdminContentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/auth/login?next=/admin/content/${id}`)
  const { data: staff } = await supabase.from("admin_users").select("role, is_active").eq("user_id", user.id).maybeSingle()
  if (!staff?.is_active || !["owner", "admin", "editor"].includes(staff.role)) redirect("/auth/login?error=admin_access_required")
  const { data: document } = await supabase.from("cms_documents").select("id, title, excerpt, content, status, seo_title, seo_description, slug, document_type").eq("id", id).single()
  if (!document) notFound()
  const { data: revisions } = await supabase.from("content_revisions").select("id, title, status, created_at").eq("content_id", id).order("created_at", { ascending: false }).limit(20)
  return <main className="min-h-screen bg-slate-950 text-slate-950"><div className="mx-auto min-h-screen max-w-5xl bg-slate-50 p-6 lg:p-10"><Link href="/admin/content" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Content studio</Link><header className="mt-8"><p className="text-sm font-semibold capitalize text-sky-600">{document.document_type} editor · /{document.slug}</p><h1 className="mt-2 text-3xl font-black">Edit content</h1><p className="mt-2 text-sm text-slate-500">Draft safely, add SEO metadata, and move content through review before publishing.</p></header><ContentEditForm document={document} /><RevisionHistory document={document} revisions={revisions ?? []} /></div></main>
}
