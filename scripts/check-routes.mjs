const baseUrl = process.env.BASE_URL || "http://localhost:3000"
const routes = [
  "/",
  "/shop",
  "/shop/products",
  "/shop/product/noise-cancelling-headphones",
  "/shop/ai",
  "/shop/analyze",
  "/shop/coupons",
  "/shop/cashback",
  "/auth/login",
  "/investor-relations",
  "/investor-relations/financial-metrics",
  "/compliance/rbi-regulations",
  "/credit",
  "/credit/emi-calculator",
  "/tools/affordability-calculator",
  "/search?q=credit",
  "/resources",
  "/support",
  "/ads.txt",
  "/admin",
  "/admin/login",
  "/admin/dashboard",
  "/buynswipe-go",
]

const allowedRedirects = new Set(["/auth/login", "/admin", "/admin/login", "/admin/dashboard", "/buynswipe-go"])
const expectedTextRoutes = new Set(["/ads.txt"])
let failures = 0
for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl), { redirect: "manual" })
  const location = response.headers.get("location") || ""
  const redirectedToLogin = response.status >= 300 && response.status < 400 && location.includes("/auth/login")
  const redirectedToAdminLogin = response.status >= 300 && response.status < 400 && location.includes("/admin/login")
  const redirectedToCanonicalAdmin = route === "/admin" && response.status === 307 && location.endsWith("/admin/dashboard")
  const redirectedToCanonicalGo = route === "/buynswipe-go" && response.status === 308 && location.endsWith("/go")
  const contentType = response.headers.get("content-type") || ""
  const validAdsText = route === "/ads.txt" && response.ok && contentType.includes("text/plain")
  const allowed = response.ok || validAdsText || redirectedToCanonicalAdmin || redirectedToCanonicalGo || (allowedRedirects.has(route) && (redirectedToLogin || redirectedToAdminLogin))
  console.log(`${allowed ? "PASS" : "FAIL"} ${response.status} ${route}${location ? ` -> ${location}` : ""}${expectedTextRoutes.has(route) ? ` [${contentType}]` : ""}`)
  if (!allowed) failures += 1
}
if (failures) process.exit(1)
