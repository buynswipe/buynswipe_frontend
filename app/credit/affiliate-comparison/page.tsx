import type { Metadata } from "next"
import ClientAffiliateComparisonPage from "./client-page"

export const metadata: Metadata = {
  title: "Compare Personal Loans & Credit Cards | Side-by-Side | BuyNswipe",
  description:
    "Compare multiple personal loans and credit cards side-by-side. View interest rates, features, eligibility, and fees in one place.",
  keywords: ["loan comparison", "credit card comparison", "compare loans", "compare cards", "loan calculator"],
}

export default function AffiliateComparisonPage() {
  return <ClientAffiliateComparisonPage />
}
