const baseUrl = process.env.BASE_URL || "http://localhost:3000"
const routes = [
  "/",
  "/shop",
  "/shop/products",
  "/shop/product/echo-headphones",
  "/shop/ai",
  "/auth/login",
  "/investor-relations",
  "/investor-relations/financial-metrics",
  "/compliance/rbi-regulations",
  "/credit",
  "/support",
  "/admin",
]

const allowedRedirects = new Set(["/auth/login", "/admin"])
let failures = 0
for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl), { redirect: "manual" })
  const location = response.headers.get("location") || ""
  const redirectedToLogin = response.status >= 300 && response.status < 400 && location.includes("/auth/login")
  const allowed = response.ok || (allowedRedirects.has(route) && redirectedToLogin)
  console.log(`${allowed ? "PASS" : "FAIL"} ${response.status} ${route}${location ? ` -> ${location}` : ""}`)
  if (!allowed) failures += 1
}
if (failures) process.exit(1)
