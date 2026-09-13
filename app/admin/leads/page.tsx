import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowLeft, Download, Mail, Phone, Search } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { LeadStatusControl } from "./lead-status-control"

export default async function AdminLeadsPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; source?: string }> }) {
  const filters = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login?next=/admin/leads")

  const { data: staff } = await supabase.from("admin_users").select("role, display_name").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) redirect("/auth/login?error=admin_access_required")

  let leadsQuery = supabase.from("contact_submissions").select("id, name, email, phone, subject, message, source, status, created_at").order("created_at", { ascending: false }).limit(100)
  if (filters.q) leadsQuery = leadsQuery.or(`name.ilike.%${filters.q}%,email.ilike.%${filters.q}%`)
  if (filters.status) leadsQuery = leadsQuery.eq("status", filters.status)
  if (filters.source) leadsQuery = leadsQuery.eq("source", filters.source)
  const { data: leads } = await leadsQuery

  return (
    <main className="min-h-screen bg-slate-950 text-slate-950">
      <div className="mx-auto min-h-screen max-w-7xl bg-slate-50 p-6 lg:p-10">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Admin overview</Link>
        <header className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold text-sky-600">CRM workspace</p><h1 className="mt-2 text-3xl font-black">Lead inbox</h1><p className="mt-2 text-sm text-slate-500">Review inbound contact, webinar, pricing, and support submissions.</p></div>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">{leads?.length ?? 0} recent records</span>
        </header>
        <form className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row" role="search"><label className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 px-3"><Search className="size-4 text-slate-400" /><span className="sr-only">Search leads</span><input name="q" defaultValue={filters.q} placeholder="Search name or email" className="w-full py-2 text-sm outline-none" /></label><select name="status" defaultValue={filters.status ?? ""} className="rounded-xl border border-slate-200 px-3 py-2 text-sm"><option value="">All statuses</option><option value="new">New</option><option value="in_progress">In progress</option><option value="resolved">Resolved</option><option value="spam">Spam</option></select><select name="source" defaultValue={filters.source ?? ""} className="rounded-xl border border-slate-200 px-3 py-2 text-sm"><option value="">All sources</option><option value="contact">Contact</option><option value="webinar">Webinar</option><option value="pricing">Pricing</option><option value="support">Support</option></select><button className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">Filter</button><a href="/api/admin/leads/export" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700"><Download className="size-4" /> Export</a></form>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[1.4fr_1.2fr_1fr_1fr_0.8fr] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 md:grid"><span>Lead</span><span>Message</span><span>Source</span><span>Status</span><span>Received</span></div>
          {leads?.length ? leads.map((lead) => (
            <article key={lead.id} className="grid gap-4 border-b border-slate-100 p-5 last:border-0 md:grid-cols-[1.4fr_1.2fr_1fr_1fr_0.8fr] md:items-center">
              <div><Link href={`/admin/leads/${lead.id}`} className="font-bold text-slate-950 hover:text-sky-600">{lead.name}</Link><a className="mt-1 flex items-center gap-1 text-xs text-slate-500 hover:text-sky-600" href={`mailto:${lead.email}`}><Mail className="size-3" /> {lead.email}</a>{lead.phone && <a className="mt-1 flex items-center gap-1 text-xs text-slate-500" href={`tel:${lead.phone}`}><Phone className="size-3" /> {lead.phone}</a>}</div>
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
