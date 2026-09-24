import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://buynswipe.com",
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/"],
      },
      {
        userAgent: ["ChatGPT-User", "GPTBot", "Google-Extended", "PerplexityBot", "Anthropic-AI"],
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/auth/", "/shop/alerts", "/shop/wishlist", "/shop/creators"],
      },
    ],
    sitemap: "https://buynswipe.com/sitemap.xml",
  }
}
