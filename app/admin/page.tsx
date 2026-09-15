import Link from "next/link"
import { Activity, ArrowUpRight, FileClock, FileText, Handshake, Inbox, LayoutDashboard, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

const modules = [
  { href: "/admin/leads", label: "Lead inbox", description: "Review and triage contact submissions.", icon: Inbox, accent: "bg-sky-100 text-sky-700" },
  { href: "/admin/content", label: "Content studio", description: "Manage pages, blogs, and resources.", icon: FileText, accent: "bg-amber-100 text-amber-700" },
  { href: "/admin/credit", label: "Credit catalog", description: "Govern products, claims, and disclosures.", icon: LayoutDashboard, accent: "bg-emerald-100 text-emerald-700" },
  { href: "/admin/affiliates", label: "Affiliate operations", description: "Monitor offers, links, and evidence.", icon: Handshake, accent: "bg-violet-100 text-violet-700" },
  { href: "/admin/team", label: "Team and roles", description: "Manage staff access and audit history.", icon: Users, accent: "bg-rose-100 text-rose-700" },
  { href: "/admin/analytics", label: "Analytics", description: "Review funnel and operational health.", icon: Activity, accent: "bg-cyan-100 text-cyan-700" },
  { href: "/admin/audit", label: "Audit history", description: "Trace sensitive staff actions.", icon: FileClock, accent: "bg-slate-100 text-slate-700" },
]

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data: staff } = await supabase.from("admin_users").select("role, display_name").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  const { count: leads } = await supabase.from("contact_submissions").select("id", { count: "exact", head: true }).eq("status", "new")
  const { count: auditEvents } = await supabase.from("admin_audit_logs").select("id", { count: "exact", head: true })
  const { count: contentReview } = await supabase.from("cms_documents").select("id", { count: "exact", head: true }).eq("status", "review")
  const { count: brokenLinks } = await supabase.from("affiliate_link_checks").select("id", { count: "exact", head: true }).eq("is_healthy", false)

  return <main>
    <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-sky-600">Operations center</p><h1 className="mt-2 text-3xl font-black tracking-tight">Good morning, {staff?.display_name?.split(" ")[0] || "team"}.</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">One workspace for the leads, content, credit, and affiliate systems behind BuyNswipe.</p></div><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-sky-600">View portal <ArrowUpRight className="size-4" /></Link></header>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"><Metric label="New leads" value={leads ?? 0} detail="Needs triage" /><Metric label="In review" value={contentReview ?? 0} detail="CMS queue" /><Metric label="Broken links" value={brokenLinks ?? 0} detail="Needs attention" /><Metric label="Audit events" value={auditEvents ?? 0} detail="Recorded actions" /><Metric label="Access role" value={staff?.role.replaceAll("_", " ") || "staff"} detail="Current permissions" /></div>
    <section className="mt-10"><div><h2 className="text-xl font-black">Workspaces</h2><p className="mt-1 text-sm text-slate-500">Open a module to continue operating the portal.</p></div><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{modules.map(({ href, label, description, icon: Icon, accent }) => <Link key={href} href={href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"><div className={`grid size-11 place-items-center rounded-xl ${accent}`}><Icon className="size-5" /></div><h3 className="mt-5 font-bold">{label}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-sky-600">Open workspace <ArrowUpRight className="size-4" /></span></Link>)}</div></section>
  </main>
}

function Metric({ label, value, detail }: { label: string; value: number | string; detail: string }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p><p className="mt-3 text-3xl font-black capitalize">{value}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div> }
