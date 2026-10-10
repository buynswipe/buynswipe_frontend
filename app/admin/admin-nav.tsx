"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, BookOpen, BriefcaseBusiness, CreditCard, FileClock, LayoutDashboard, Link2, Settings, ShoppingBag, Users } from "lucide-react"

const icons = { dashboard: LayoutDashboard, users: Users, book: BookOpen, "credit-card": CreditCard, link: Link2, briefcase: BriefcaseBusiness, chart: BarChart3, "file-clock": FileClock, settings: Settings, "shopping-bag": ShoppingBag } as const

type NavigationItem = { href: string; label: string; icon?: keyof typeof icons }

export function AdminNav({ navigation, mobile = false }: { navigation: readonly NavigationItem[]; mobile?: boolean }) {
  const pathname = usePathname()
  return <nav className={mobile ? "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "mt-7 space-y-1"} aria-label="Admin navigation">{navigation.map(({ href, label, icon }) => {
    const active = href === "/admin" ? pathname === href : pathname.startsWith(href)
    const Icon = icon ? icons[icon] : null
    return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={mobile ? `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold whitespace-nowrap transition ${active ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"}` : `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"}`}>{Icon ? <Icon className="size-4" aria-hidden="true" /> : null}{label}</Link>
  })}</nav>
}
