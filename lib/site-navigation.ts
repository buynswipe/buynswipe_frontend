export type NavigationItem = {
  label: string
  href: string
  accent?: "blue" | "emerald"
}

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Credit", href: "/credit", accent: "emerald" },
  { label: "Payment Solutions", href: "/payment-solutions" },
  { label: "BuyNswipe® Go", href: "/go", accent: "blue" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Search", href: "/search" },
  { label: "About BuyNswipe®", href: "/investor-relations" },
  { label: "Contact", href: "/contact", accent: "blue" },
]

export const primaryDesktopNavigation = primaryNavigation.filter(({ label }) => label !== "Home" && label !== "About BuyNswipe®")

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export const criticalRoutes = [
  "/",
  "/shop",
  "/shop/products",
  "/shop/product/noise-cancelling-headphones",
  "/shop/ai",
  "/auth/login",
  "/investor-relations",
  "/investor-relations/financial-metrics",
  "/compliance/rbi-regulations",
  "/credit",
  "/support",
  "/admin",
] as const
