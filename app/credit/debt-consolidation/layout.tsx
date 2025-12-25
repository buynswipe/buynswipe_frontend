import type React from "react"

export const metadata = {
  title: "Debt Consolidation Loan - Combine Multiple Debts | BuyNswipe",
  description:
    "Consolidate multiple debts into one single loan. Lower interest rates, simplified payments, and reduced financial burden. Apply online today.",
  keywords:
    "debt consolidation loan, consolidate debt, debt management loan, reduce debt burden, multiple loan consolidation",
  openGraph: {
    title: "Debt Consolidation Loan - Simplify Your Debts",
    description: "Combine multiple debts into one loan at lower interest rates",
  },
}

export default function DebtConsolidationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
