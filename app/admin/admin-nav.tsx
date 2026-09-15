"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function AdminNav({ navigation, mobile = false }: { navigation: { href: string; label: string; icon?: React.ComponentType<{ className?: string }> }[]; mobile?: boolean }) {
  const pathname = usePathname()
  return <nav className={mobile ? "flex gap-2 overflow-x-auto" : "mt-7 space-y-1"} aria-label="Admin navigation">{navigation.map(({ href, label, icon: Icon }) => {
    const active = href === "/admin" ? pathname === href : pathname.startsWith(href)
    return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={mobile ? `shrink-0 rounded-lg px-3 py-2 text-xs font-bold transition ${active ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"}` : `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"}`}>{Icon ? <Icon className="size-4" aria-hidden="true" /> : null}{label}</Link>
  })}</nav>
}
