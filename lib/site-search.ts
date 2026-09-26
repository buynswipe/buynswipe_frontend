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
  { title: "EMI Calculator", description: "Estimate monthly loan payments and understand repayment scenarios.", href: "/tools/emi-calculator", type: "Tool", keywords: ["emi", "monthly payment", "loan calculator"] },
  { title: "Affordability Calculator", description: "Explore an indicative borrowing range using income and repayment inputs.", href: "/tools/affordability-calculator", type: "Tool", keywords: ["affordability", "eligibility", "income"] },
  { title: "ROI Calculator", description: "Model indicative returns for an investment scenario.", href: "/tools/investment-roi-calculator", type: "Tool", keywords: ["roi", "investment", "returns"] },
  { title: "Webinars", description: "Watch practical sessions and explainers from the BuyNswipe ecosystem.", href: "/webinars", type: "Resource", keywords: ["webinar", "video", "learning"] },
  { title: "Glossary", description: "Understand common credit, payments and fintech terminology.", href: "/glossary", type: "Resource", keywords: ["terms", "definitions", "finance"] },
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

function levenshtein(left: string, right: string) {
  const row = Array.from({ length: right.length + 1 }, (_, index) => index)
  for (let i = 1; i <= left.length; i += 1) {
    let previous = row[0]
    row[0] = i
    for (let j = 1; j <= right.length; j += 1) {
      const current = row[j]
      row[j] = left[i - 1] === right[j - 1] ? previous : Math.min(previous + 1, row[j - 1] + 1, current + 1)
      previous = current
    }
  }
  return row[right.length]
}

export function searchSite(query = "", type: string = "All") {
  const normalized = query.trim().toLowerCase()
  const source = type === "All" ? [...pages, ...products] : [...pages, ...products].filter((result) => result.type === type)
  if (!normalized) return source.slice(0, 24)
  return source
    .map((result) => {
      const fields = [result.title, result.description, ...result.keywords].map((field) => field.toLowerCase())
      const score = fields.reduce((best, field) => {
        if (field.includes(normalized)) return Math.max(best, 100)
        const distance = levenshtein(normalized, field.length > normalized.length ? field.slice(0, normalized.length + 2) : field)
        return Math.max(best, 80 - distance * 10)
      }, 0)
      return { result, score }
    })
    .filter(({ score }) => score >= 40)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map(({ result }) => result)
}

export function getSearchSuggestions() { return pages.slice(0, 5) }
