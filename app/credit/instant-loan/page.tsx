import InstantLoanClient from "./instant-loan-client"

export const metadata = {
  title: "Instant Loan Online - Quick Approval in 24-48 Hours | BuyNswipe",
  description:
    "Get instant personal loans with fast approval (24-48 hours). Compare instant loan options, eligibility, interest rates, and apply online now.",
  keywords:
    "instant loan, instant personal loan, quick loan, same day loan, 24 hour loan, instant approval loan, online instant loan",
  openGraph: {
    title: "Instant Loan - Fast Approval & Instant Disbursal",
    description: "Get instant loans with 24-48 hour approval and online disbursal",
  },
}

export default function InstantLoanPage() {
  return <InstantLoanClient />
}
