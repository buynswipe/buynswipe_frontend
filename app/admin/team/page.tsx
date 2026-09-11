import Link from "next/link"
import { ArrowLeft, ShieldCheck, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

export default async function AdminTeamPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: staff } = await supabase.from("admin_users").select("role, display_name").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff || !["owner", "admin"].includes(staff.role)) return <main className="min-h-screen bg-slate-950 p-6 text-white"><p>Access denied.</p></main>

  const { data: members } = await supabase.from("admin_users").select("user_id, role, display_name, is_active, created_at").order("created_at", { ascending: false })
  const activeCount = members?.filter((member) => member.is_active).length ?? 0

  return <main className="min-h-screen bg-slate-950 text-slate-950"><div className="mx-auto min-h-screen max-w-7xl bg-slate-50 p-6 lg:p-10"><Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-600"><ArrowLeft className="size-4" /> Admin overview</Link><header className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-rose-600">Access control</p><h1 className="mt-2 text-3xl font-black">Team and roles</h1><p className="mt-2 text-sm text-slate-500">Review active staff access and role assignments.</p></div><div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"><span className="text-rose-600">{activeCount}</span> active staff</div></header><section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center gap-3 border-b border-slate-100 p-5"><Users className="size-5 text-rose-600" /><div><h2 className="font-bold">Staff directory</h2><p className="text-sm text-slate-500">Role changes remain restricted to owner and admin accounts.</p></div></div><div className="divide-y divide-slate-100">{members?.length ? members.map((member) => <div key={member.user_id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-rose-50 text-sm font-black text-rose-700">{(member.display_name || "S").slice(0, 1).toUpperCase()}</div><div><p className="font-bold text-slate-900">{member.display_name || "Unlabeled staff"}</p><p className="text-xs text-slate-500">Added {new Date(member.created_at).toLocaleDateString("en-IN")}</p></div></div><div className="flex items-center gap-3"><span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600"><ShieldCheck className="size-3" />{member.role.replaceAll("_", " ")}</span><span className={`rounded-full px-3 py-1 text-xs font-bold ${member.is_active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{member.is_active ? "Active" : "Disabled"}</span></div></div>) : <p className="p-10 text-center text-sm text-slate-500">No staff accounts have been provisioned.</p>}</div></section></div></main>
}
