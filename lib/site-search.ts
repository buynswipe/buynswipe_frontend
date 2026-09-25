import { shopItems } from "@/lib/shop-data"

export type SearchResult = { title: string; description: string; href: string; type: string; keywords: string[] }

const pages: SearchResult[] = [
  { title: "BuyNswipe Credit", description: "Explore credit products, education, comparisons and calculators.", href: "/credit", type: "Product", keywords: ["loan", "cards", "emi", "finance"] },
  { title: "ShopNdeal", description: "Compare products, deals, coupons and savings signals.", href: "/shop", type: "Product", keywords: ["shopping", "deals", "coupons", "cashback"] },
  { title: "BuyNswipe Go", description: "Explore mobility, transit and NCMC payment experiences.", href: "/go", type: "Product", keywords: ["metro", "transit", "ncmc", "mobility"] },
  { title: "Payment Solutions", description: "Payment experiences for merchants, partners and platforms.", href: "/payment-solutions", type: "Solution", keywords: ["payments", "merchant", "checkout", "platform"] },
  { title: "Financial Tools", description: "Use calculators and planning tools for everyday decisions.", href: "/tools", type: "Tool", keywords: ["calculator", "emi", "affordability", "roi"] },
  { title: "Investor Relations", description: "Review company information, financial metrics and diligence context.", href: "/investor-relations", type: "Company", keywords: ["investors", "metrics", "company", "diligence"] },
  { title: "Resources and Guides", description: "Browse financial education, product guidance and practical explainers.", href: "/resources", type: "Resource", keywords: ["guides", "education", "help", "learn"] },
  { title: "Developer Integrations", description: "Explore integration pathways and platform resources for builders.", href: "/integrations", type: "Solution", keywords: ["developers", "api", "integrations", "platform"] },
  { title: "Contact BuyNswipe", description: "Start a conversation with the BuyNswipe team.", href: "/contact", type: "Company", keywords: ["support", "partnership", "brochure"] },
]

const products: SearchResult[] = shopItems.map((item) => ({
  title: item.name,
  description: `${item.category} from ${item.merchant} with a ${item.discount}% listed discount signal.`,
  href: `/shop/product/${item.slug}`,
  type: "Product",
  keywords: [item.merchant, item.brand, item.category, item.dealType],
}))

export const searchTypes = ["All", "Product", "Solution", "Tool", "Resource", "Company"] as const

export function searchSite(query = "", type: string = "All") {
  const normalized = query.trim().toLowerCase()
  const source = type === "All" ? [...pages, ...products] : [...pages, ...products].filter((result) => result.type === type)
  if (!normalized) return source.slice(0, 24)
  return source.filter((result) => `${result.title} ${result.description} ${result.keywords.join(" ")}`.toLowerCase().includes(normalized)).slice(0, 24)
}

export function getSearchSuggestions() { return pages.slice(0, 5) }
