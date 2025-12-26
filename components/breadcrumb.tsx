"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()

  // Generate breadcrumb items based on pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (pathname === "/") return []

    const segments = pathname.split("/").filter((s) => s)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

    let path = ""
    segments.forEach((segment, index) => {
      path += `/${segment}`
      const label = segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

      breadcrumbs.push({
        label,
        href: path,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length === 0) return null

  return (
    <nav
      className="flex items-center gap-2 text-sm text-gray-600 py-4 px-4 bg-gray-50 border-b"
      aria-label="Breadcrumb"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `https://buynswipe.com${item.href}`,
          })),
        })}
      </script>
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
