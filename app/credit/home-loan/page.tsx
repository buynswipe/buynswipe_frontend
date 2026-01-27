import type { Metadata } from "next"
import HomeLoanClient from "./client"

export const metadata: Metadata = {
  title: "Home Loan Online - Best Mortgage Rates 2024 | BuyNswipe",
  description:
    "Compare home loans at best rates. Get instant approval for property purchase or construction loans. Check eligibility, calculate EMI, and apply online with BuyNswipe.",
  keywords:
    "home loan, home loan online, best home loan rates, mortgage loan, property loan, home loan eligibility, home loan calculator, instant home loan approval, low interest home loan, construction loan",
  openGraph: {
    title: "Home Loan Online - Best Mortgage Rates 2024 | BuyNswipe",
    description: "Compare home loans at best rates. Get instant approval for property purchase or construction loans.",
    url: "https://buynswipe.com/credit/home-loan",
    type: "website",
  },
}

export default function HomeLoanPage() {
  return <HomeLoanClient />
}
