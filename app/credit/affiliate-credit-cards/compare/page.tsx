import type { Metadata } from "next"
import ComparisonClient from "./comparison-client"

export const metadata: Metadata = {
  title: "Compare Credit Card Offers | BuyNswipe",
  description: "Compare selected BuyNswipe credit card and finance offers side by side.",
}

export default async function CompareOffersPage({ searchParams }: { searchParams: Promise<{ offers?: string }> }) {
  const params = await searchParams
  const selectedIds = (params.offers ?? "").split(",").filter(Boolean).slice(0, 3)
  return <ComparisonClient selectedIds={selectedIds} />
}
