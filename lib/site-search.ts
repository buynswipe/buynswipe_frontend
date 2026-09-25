import { shopItems } from "@/lib/shop-data"

export type SearchResult = { title: string; description: string; href: string; type: string; keywords: string[] }

const pages: SearchResult[] = [
  { title: "BuyNswipe Credit", description: "Explore credit products, education, comparisons and calculators.", href: "/credit", type: "Product", keywords: ["loan", "cards", "emi", "finance"] },
  { title: "ShopNdeal", description: "Compare products, deals, coupons and savings signals.", href: "/shop", type: "Product", keywords: ["shopping", "deals", "coupons", "cashback"] },
  { title: "BuyNswipe Go", description: "Explore mobility, transit and NCMC payment experiences.", href: "/go", type: "Product", keywords: ["metro", "transit", "ncmc", "mobility"] },
  { title: "Payment Solutions", description: "Payment experiences for merchants, partners and platforms.", href: "/payment-solutions", type: "Solution", keywords: ["payments", "merchant", "checkout", "platform"] },
  { title: "Financial Tools", description: "Use calculators and planning tools for everyday decisions.", href: "/tools", type: "Tool", keywords: ["calculator", "emi", "affordability", "roi"] },
  { title: "Contact BuyNswipe", description: "Start a conversation with the BuyNswipe team.", href: "/contact", type: "Company", keywords: ["support", "partnership", "brochure"] },
]

const products: SearchResult[] = shopItems.map((item) => ({
  title: item.name,
  description: `${item.category} from ${item.merchant} with a ${item.discount}% listed discount signal.`,
  href: `/shop/product/${item.slug}`,
  type: "Product",
  keywords: [item.merchant, item.brand, item.category, item.dealType],
}))

export function searchSite(query = "") {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return [...pages, ...products].slice(0, 12)
  return [...pages, ...products].filter((result) => `${result.title} ${result.description} ${result.keywords.join(" ")}`.toLowerCase().includes(normalized)).slice(0, 24)
}

export function getSearchSuggestions() { return pages.slice(0, 5) }
