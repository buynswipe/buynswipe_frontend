import Link from "next/link"
import { ArrowLeft, Bell, LockKeyhole, ShieldCheck } from "lucide-react"

const settings = [
  { title: "Security and access", description: "Review authentication, session refresh, and role enforcement.", href: "/admin/team", icon: LockKeyhole },
  { title: "Audit and compliance", description: "Inspect recorded exports, mutations, reviews, and publishing actions.", href: "/admin/audit", icon: ShieldCheck },
  { title: "Operational alerts", description: "Use Analytics to monitor review queues, new leads, and broken affiliate links.", href: "/admin/analytics", icon: Bell },
]

export default function AdminSettingsPage() {
  return <main><Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Admin overview</Link><header className="mt-8"><p className="text-sm font-semibold text-sky-600">Workspace settings</p><h1 className="mt-2 text-3xl font-black tracking-tight">Portal operations</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Centralize the operational surfaces that keep the BuyNswipe portal secure, reviewable, and healthy.</p></header><section className="mt-8 grid gap-4 md:grid-cols-3">{settings.map(({ title, description, href, icon: Icon }) => <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"><div className="grid size-11 place-items-center rounded-xl bg-sky-100 text-sky-700"><Icon className="size-5" aria-hidden="true" /></div><h2 className="mt-5 font-bold text-slate-900">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><span className="mt-5 inline-block text-sm font-bold text-sky-600">Open workspace</span></Link>)}</section></main>
}
