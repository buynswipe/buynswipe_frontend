import type { Metadata } from "next"
import { CreditCardCatalogPage } from "@/components/credit-card-catalog"

export const metadata: Metadata = {
  title: "Compare Credit Cards | BuyNswipe Credit",
  description: "Search, compare, and apply for cashback, lifestyle, shopping, and premium credit cards through BuyNswipe partner links.",
}

export default function AffiliateCardsPage() {
  return <CreditCardCatalogPage />
}
