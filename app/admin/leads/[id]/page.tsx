import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { LeadStatusControl } from "../lead-status-control"
import { LeadNotesForm } from "../lead-notes-form"
import { LeadAssignmentControl } from "../lead-assignment-control"

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!/^[0-9a-f-]{36}$/i.test(id)) redirect("/admin/leads")
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/auth/login?next=/admin/leads/${id}`)
  const { data: staff } = await supabase.from("admin_users").select("role").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) redirect("/auth/login?error=admin_access_required")
  const [{ data: lead }, { data: notes }, { data: members }] = await Promise.all([
    supabase.from("contact_submissions").select("id, name, email, phone, subject, message, source, status, assigned_to, created_at").eq("id", id).maybeSingle(),
    supabase.from("lead_notes").select("id, note, created_at, author_id").eq("lead_id", id).order("created_at", { ascending: false }),
    supabase.from("admin_users").select("user_id, display_name, role").eq("is_active", true).order("display_name"),
  ])
  if (!lead) notFound()
  return <main className="min-h-screen bg-slate-950 text-slate-950"><div className="mx-auto min-h-screen max-w-5xl bg-slate-50 p-6 lg:p-10"><Link href="/admin/leads" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Lead inbox</Link><header className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><p className="text-sm font-semibold text-sky-600">Lead detail</p><h1 className="mt-2 text-3xl font-black">{lead.name}</h1><p className="mt-2 text-sm text-slate-500">{lead.source} submission · {new Date(lead.created_at).toLocaleString("en-IN")}</p></div><LeadStatusControl id={lead.id} initialStatus={lead.status} /></header><div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><section className="space-y-6"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-sm font-black uppercase tracking-wider text-slate-400">Submission</h2><div className="mt-5 space-y-3 text-sm"><a href={`mailto:${lead.email}`} className="flex items-center gap-2 font-semibold hover:text-sky-600"><Mail className="size-4" /> {lead.email}</a>{lead.phone && <a href={`tel:${lead.phone}`} className="flex items-center gap-2 font-semibold hover:text-sky-600"><Phone className="size-4" /> {lead.phone}</a>}<p className="border-t border-slate-100 pt-4 font-bold">{lead.subject || "General inquiry"}</p><p className="whitespace-pre-wrap leading-7 text-slate-600">{lead.message}</p></div></div><LeadNotesForm leadId={lead.id} /></section><aside className="space-y-6"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><LeadAssignmentControl leadId={lead.id} initialAssignee={lead.assigned_to} members={members ?? []} /></div><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-sm font-black uppercase tracking-wider text-slate-400">Activity</h2><div className="mt-5 space-y-4">{notes?.length ? notes.map((note) => <article key={note.id} className="border-l-2 border-sky-200 pl-4"><p className="text-sm leading-6 text-slate-700">{note.note}</p><time className="mt-2 block text-xs text-slate-400">{new Date(note.created_at).toLocaleString("en-IN")}</time></article>) : <p className="text-sm text-slate-500">No internal notes yet.</p>}</div></div></aside></div></div></main>
}
