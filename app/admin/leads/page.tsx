import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { LeadStatusControl } from "./lead-status-control"

export default async function AdminLeadsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login?next=/admin/leads")

  const { data: staff } = await supabase.from("admin_users").select("role, display_name").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) redirect("/auth/login?error=admin_access_required")

  const { data: leads } = await supabase.from("contact_submissions").select("id, name, email, phone, subject, message, source, status, created_at").order("created_at", { ascending: false }).limit(100)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-950">
      <div className="mx-auto min-h-screen max-w-7xl bg-slate-50 p-6 lg:p-10">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Admin overview</Link>
        <header className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold text-sky-600">CRM workspace</p><h1 className="mt-2 text-3xl font-black">Lead inbox</h1><p className="mt-2 text-sm text-slate-500">Review inbound contact, webinar, pricing, and support submissions.</p></div>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">{leads?.length ?? 0} recent records</span>
        </header>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[1.4fr_1.2fr_1fr_1fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 md:grid"><span>Lead</span><span>Message</span><span>Source</span><span>Status</span><span>Received</span></div>
          {leads?.length ? leads.map((lead) => (
            <article key={lead.id} className="grid gap-4 border-b border-slate-100 p-5 last:border-0 md:grid-cols-[1.4fr_1.2fr_1fr_1fr_0.8fr] md:items-center">
              <div><h2 className="font-bold text-slate-950">{lead.name}</h2><a className="mt-1 flex items-center gap-1 text-xs text-slate-500 hover:text-sky-600" href={`mailto:${lead.email}`}><Mail className="size-3" /> {lead.email}</a>{lead.phone && <a className="mt-1 flex items-center gap-1 text-xs text-slate-500" href={`tel:${lead.phone}`}><Phone className="size-3" /> {lead.phone}</a>}</div>
              <p className="line-clamp-2 text-sm leading-5 text-slate-500">{lead.subject || lead.message}</p>
              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600">{lead.source}</span>
              <LeadStatusControl id={lead.id} initialStatus={lead.status} />
              <time className="text-xs font-semibold text-slate-400" dateTime={lead.created_at}>{new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</time>
            </article>
          )) : <div className="p-12 text-center text-sm text-slate-500">No submissions yet.</div>}
        </div>
      </div>
    </main>
  )
}
