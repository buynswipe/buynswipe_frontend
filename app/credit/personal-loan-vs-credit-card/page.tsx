import PersonalLoanVsCreditCardClient from "./PersonalLoanVsCreditCardClient"

export const metadata = {
  title: "Personal Loan vs Credit Card - Which is Better? | BuyNswipe",
  description:
    "Compare personal loans and credit cards. Understand differences in interest rates, eligibility, usage, and choose the best option for your financial needs.",
  keywords:
    "personal loan vs credit card, loan vs card, difference between loan and credit card, personal loan advantages, credit card benefits",
  openGraph: {
    title: "Personal Loan vs Credit Card - Complete Comparison Guide",
    description: "Detailed comparison of personal loans and credit cards with pros, cons, and decision guide.",
    type: "website",
  },
}

export default function PersonalLoanVsCreditCard() {
  return <PersonalLoanVsCreditCardClient />
}
