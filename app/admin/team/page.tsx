import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { InviteTeamMember } from "./invite-team-member"
import { MemberControls } from "./member-controls"

export default async function AdminTeamPage() {
  const authClient = await createClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) return null

  const supabase = createAdminClient()
  const { data: staff } = await supabase
    .from("admin_users")
    .select("role, display_name")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .maybeSingle()

  if (!staff || !["owner", "admin"].includes(staff.role)) {
    return <main className="min-h-screen bg-slate-950 p-6 text-white"><p>Access denied.</p></main>
  }

  const { data: members } = await supabase
    .from("admin_users")
    .select("user_id, role, display_name, is_active, created_at")
    .order("created_at", { ascending: false })

  const activeCount = members?.filter((member) => member.is_active).length ?? 0
  const inactiveCount = (members?.length ?? 0) - activeCount

  return (
    <main className="min-h-screen bg-slate-950 text-slate-950">
      <div className="mx-auto min-h-screen max-w-7xl bg-slate-50 px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-sky-600">
          <ArrowLeft className="size-4" /> Admin overview
        </Link>

        <header className="mt-8 flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Access control</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Team and roles</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Invite trusted teammates, assign the right level of access, and keep your workspace secure.</p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active</p><p className="mt-1 text-2xl font-black text-rose-600">{activeCount}</p></div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Inactive</p><p className="mt-1 text-2xl font-black text-slate-900">{inactiveCount}</p></div>
          </div>
        </header>

        <div className="mt-8"><InviteTeamMember /></div>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start gap-3 border-b border-slate-100 p-5 sm:p-6">
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-600"><Users className="size-5" /></div>
            <div><h2 className="font-bold text-slate-950">Staff directory</h2><p className="mt-1 text-sm text-slate-500">Manage access for everyone with portal permissions.</p></div>
          </div>
          <div className="hidden grid-cols-[1fr_140px_280px] gap-4 border-b border-slate-100 bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 sm:grid"><span>Member</span><span>Role</span><span className="text-right">Actions</span></div>
          <div className="divide-y divide-slate-100">
            {members?.length ? members.map((member) => (
              <div key={member.user_id} className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50 sm:grid sm:grid-cols-[1fr_140px_280px] sm:items-center sm:gap-4 sm:px-6">
                <div className="flex items-center gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-rose-50 text-sm font-black text-rose-700">{(member.display_name || "S").slice(0, 1).toUpperCase()}</div><div className="min-w-0"><p className="truncate font-bold text-slate-900">{member.display_name || "Unlabeled staff"}</p><p className="mt-1 text-xs text-slate-500">Added {new Date(member.created_at).toLocaleDateString("en-IN")}</p></div></div>
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold capitalize text-slate-600 sm:bg-transparent sm:px-0">{member.role}</span>
                <div className="flex justify-between gap-3 sm:justify-end"><span className={`self-center text-xs font-semibold ${member.is_active ? "text-emerald-600" : "text-slate-400"}`}>{member.is_active ? "Active" : "Inactive"}</span><MemberControls userId={member.user_id} role={member.role} isActive={member.is_active} canAssignAdmin={staff.role === "owner"} isOwner={member.role === "owner"} /></div>
              </div>
            )) : <div className="p-10 text-center text-sm text-slate-500">No team members yet.</div>}
          </div>
        </section>
      </div>
    </main>
  )
}
