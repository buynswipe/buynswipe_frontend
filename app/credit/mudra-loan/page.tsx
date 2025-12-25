import type { Metadata } from "next"
import MudraLoanClient from "./MudraLoanClient"

export const metadata: Metadata = {
  title: "Mudra Loan - Government Business Loan for Startups | BuyNswipe",
  description:
    "Apply for Pradhan Mantri Mudra Yojana (PMMY) loan for your business. Get up to Rs 10 lakhs at subsidized rates with no collateral.",
  keywords:
    "mudra loan, pradhan mantri mudra yojana, pmmy, business loan, startup loan, small business loan, micro finance, government loan, collateral free loan, mudra loan interest rate",
}

export default function MudraLoanPage() {
  return <MudraLoanClient />
}
