import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowUpRight, FileText, Handshake, Inbox, LayoutDashboard, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

const modules = [
  { href: "/admin/leads", label: "Lead inbox", description: "Review and triage contact submissions.", icon: Inbox, accent: "bg-sky-100 text-sky-700" },
  { href: "/admin/content", label: "Content studio", description: "Manage pages, blogs, and resources.", icon: FileText, accent: "bg-amber-100 text-amber-700" },
  { href: "/admin/credit", label: "Credit catalog", description: "Govern products, claims, and disclosures.", icon: LayoutDashboard, accent: "bg-emerald-100 text-emerald-700" },
  { href: "/admin/affiliates", label: "Affiliate operations", description: "Monitor offers, links, and evidence.", icon: Handshake, accent: "bg-violet-100 text-violet-700" },
  { href: "/admin/team", label: "Team and roles", description: "Manage staff access and audit history.", icon: Users, accent: "bg-rose-100 text-rose-700" },
]

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login?next=/admin")

  const { data: staff } = await supabase.from("admin_users").select("role, display_name").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) redirect("/auth/login?error=admin_access_required")

  const { count: leads } = await supabase.from("contact_submissions").select("id", { count: "exact", head: true }).eq("status", "new")
  const { count: auditEvents } = await supabase.from("admin_audit_logs").select("id", { count: "exact", head: true })

  return (
    <main className="min-h-screen bg-slate-950 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-slate-50 lg:flex-row">
        <aside className="w-full border-b border-slate-200 bg-white p-6 lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <Link href="/admin" className="flex items-center gap-3 text-lg font-black tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-sky-600 text-white">B</span> BuyNswipe Ops</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Workspace</p>
          <nav className="mt-3 grid gap-1" aria-label="Admin navigation">
            <Link className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white" href="/admin">Overview</Link>
            {modules.map((module) => <Link key={module.href} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100" href={module.href}>{module.label}</Link>)}
          </nav>
          <div className="mt-10 rounded-2xl bg-slate-900 p-4 text-white"><p className="text-xs uppercase tracking-widest text-slate-400">Signed in as</p><p className="mt-2 truncate text-sm font-semibold">{staff.display_name || user.email}</p><p className="mt-1 text-xs capitalize text-sky-300">{staff.role.replaceAll("_", " ")}</p></div>
        </aside>
        <section className="flex-1 p-6 lg:p-10">
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-sky-600">Operations center</p><h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Good morning, {staff.display_name?.split(" ")[0] || "team"}.</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">One workspace for the leads, content, credit, and affiliate systems behind BuyNswipe.</p></div><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-sky-600">View portal <ArrowUpRight className="size-4" /></Link></header>
          <div className="mt-8 grid gap-4 sm:grid-cols-3"><Metric label="New leads" value={leads ?? 0} detail="Needs triage" /><Metric label="Audit events" value={auditEvents ?? 0} detail="Recorded actions" /><Metric label="Access role" value={staff.role.replace("_", " ")} detail="Current permissions" /></div>
          <div className="mt-10"><div className="flex items-end justify-between"><div><h2 className="text-xl font-black">Workspaces</h2><p className="mt-1 text-sm text-slate-500">Open a module to continue operating the portal.</p></div></div><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{modules.map(({ href, label, description, icon: Icon, accent }) => <Link key={href} href={href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"><div className={`grid size-11 place-items-center rounded-xl ${accent}`}><Icon className="size-5" /></div><h3 className="mt-5 font-bold text-slate-950">{label}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-sky-600">Open workspace <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" /></span></Link>)}</div></div>
        </section>
      </div>
    </main>
  )
}

function Metric({ label, value, detail }: { label: string; value: number | string; detail: string }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p><p className="mt-3 text-3xl font-black capitalize text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div> }
