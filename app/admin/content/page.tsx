import Link from "next/link"
import { ArrowLeft, FileText, Plus } from "lucide-react"

const contentAreas = [
  ["Blog posts", "Draft, review, publish, and retire educational articles.", "/admin/content/blogs"],
  ["Landing pages", "Manage page copy, SEO metadata, and publishing status.", "/admin/content/pages"],
  ["Resources", "Maintain guides, calculators, and downloadable content.", "/admin/content/resources"],
]

export default function AdminContentPage() { return <main className="min-h-screen bg-slate-950 text-slate-950"><div className="mx-auto min-h-screen max-w-7xl bg-slate-50 p-6 lg:p-10"><Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Admin overview</Link><header className="mt-8 flex justify-between gap-4"><div><p className="text-sm font-semibold text-amber-600">Editorial workspace</p><h1 className="mt-2 text-3xl font-black">Content studio</h1><p className="mt-2 text-sm text-slate-500">A governed workflow for every public page and editorial asset.</p></div><button className="inline-flex h-10 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white"><Plus className="size-4" /> New content</button></header><div className="mt-8 grid gap-4 md:grid-cols-3">{contentAreas.map(([title, description, href]) => <Link href={href} key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"><div className="grid size-11 place-items-center rounded-xl bg-amber-100 text-amber-700"><FileText className="size-5" /></div><h2 className="mt-5 font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><span className="mt-5 block text-sm font-bold text-amber-700">Open collection →</span></Link>)}</div></div></main> }
