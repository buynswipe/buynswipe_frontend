import Link from "next/link"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import { LogoutButton } from "./logout-button"
import { AdminNav } from "./admin-nav"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portal Admin | BuyNswipe®",
  description: "Private BuyNswipe® portal administration workspace.",
  robots: { index: false, follow: false },
}

const navigation = [
  { href: "/admin/dashboard", label: "Overview", icon: "dashboard" },
  { href: "/admin/leads", label: "Leads & CRM", icon: "users" },
  { href: "/admin/content", label: "Content studio", icon: "book" },
  { href: "/admin/credit", label: "Credit catalog", icon: "credit-card" },
  { href: "/admin/affiliates", label: "Affiliates", icon: "link" },
  { href: "/admin/team", label: "Team & roles", icon: "briefcase" },
  { href: "/admin/analytics", label: "Analytics", icon: "chart" },
  { href: "/admin/audit", label: "Audit history", icon: "file-clock" },
  { href: "/admin/settings", label: "Settings", icon: "settings" },
  { href: "/admin/shop", label: "ShopNdeal", icon: "shopping-bag" },
] as const

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = (await headers()).get("x-next-pathname")
  if (pathname === "/admin/login") return children

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/admin/login?next=/admin/dashboard")

  const { data: staff } = await supabase.from("admin_users").select("role,display_name").eq("user_id", user.id).eq("is_active", true).maybeSingle()
  if (!staff) redirect("/admin/login?error=admin_access_required")

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-5 lg:block">
        <Link href="/admin" className="block border-b border-slate-100 pb-6"><p className="text-xl font-black tracking-tight">BuyNswipe®</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Portal admin</p></Link>
        <AdminNav navigation={navigation} />
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-slate-950 p-4 text-white"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Signed in as</p><p className="mt-2 truncate text-sm font-bold">{staff.display_name || user.email}</p><p className="mt-1 text-xs capitalize text-blue-300">{staff.role?.replace("_", " ") || "staff"}</p><LogoutButton /></div>
      </aside>
      <main className="min-h-screen lg:pl-64"><div className="border-b border-slate-200 bg-white px-5 py-3 lg:hidden"><AdminNav navigation={navigation} mobile /></div><div className="mx-auto max-w-7xl p-5 sm:p-8">{children}</div></main>
    </div>
  )
}
