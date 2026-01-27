import type { Metadata } from "next"
import GoldLoanClientPage from "./gold-loan-client"

export const metadata: Metadata = {
  title: "Gold Loan Online - Instant Approval at Best Rates | BuyNswipe",
  description:
    "Get instant gold loan online with quick approval. Lowest interest rates, flexible repayment, secure storage. Apply now and get funds in 24 hours.",
  keywords:
    "gold loan, gold loan online, instant gold loan, gold loan rates, gold loan eligibility, quick gold loan, instant cash against gold, gold jewelry loan, secured gold loan, gold loan with lowest rates",
}

export default function GoldLoanPage() {
  return <GoldLoanClientPage />
}
