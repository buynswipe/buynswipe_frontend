import { creditCardProducts } from "@/lib/affiliate-products"

export type AffiliateLinkStatus = "verified" | "redirected" | "unavailable" | "error"

export type AffiliateLinkResult = {
  id: string
  name: string
  url: string
  finalUrl?: string
  status: AffiliateLinkStatus
  statusCode?: number
  checkedAt: string
  error?: string
}

async function checkUrl(product: (typeof creditCardProducts)[number]): Promise<AffiliateLinkResult> {
  const checkedAt = new Date().toISOString()
  try {
    let response = await fetch(product.affiliateLink, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(7000),
      headers: { "user-agent": "BuyNswipe affiliate link monitor" },
    })
    if (response.status === 403 || response.status === 405) {
      response = await fetch(product.affiliateLink, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(7000),
        headers: { "user-agent": "BuyNswipe affiliate link monitor", accept: "text/html" },
      })
    }
    const status = response.ok ? (response.url !== product.affiliateLink ? "redirected" : "verified") : "unavailable"
    return { id: product.id, name: product.name, url: product.affiliateLink, finalUrl: response.url, status, statusCode: response.status, checkedAt }
  } catch (error) {
    return { id: product.id, name: product.name, url: product.affiliateLink, status: "error", checkedAt, error: error instanceof Error ? error.message : "Unknown validation error" }
  }
}

export async function validateAffiliateLinks() {
  const results = await Promise.all(creditCardProducts.map(checkUrl))
  const duplicateUrls = creditCardProducts
    .map((product) => product.affiliateLink)
    .filter((url, index, links) => links.indexOf(url) !== index)
  return { checkedAt: new Date().toISOString(), total: results.length, duplicates: Array.from(new Set(duplicateUrls)), results }
}
