import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, DollarSign, BarChart3, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Loan vs Credit Card - Which is Better? | BuyNswipe",
  description:
    "Complete comparison between personal loans and credit cards with detailed analysis of features, benefits, and use cases.",
  keywords: [
    "loan vs credit card",
    "personal loan vs credit card",
    "when to use loan",
    "when to use credit card",
    "loan benefits",
    "credit card benefits",
  ],
}

export default function LoanVsCreditCardPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Borrowing Comparison</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan vs Credit Card</h1>
          <p className="text-xl text-blue-100">Which borrowing option is right for you?</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-4 text-left font-bold">Aspect</th>
                    <th className="border p-4 text-left font-bold">Personal Loan</th>
                    <th className="border p-4 text-left font-bold">Credit Card</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: "Amount", loan: "₹5,000 - ₹50 lakhs", card: "₹10,000 - ₹10 lakhs" },
                    { aspect: "Interest Rate", loan: "8-14% p.a.", card: "24-36% p.a." },
                    { aspect: "Approval Time", loan: "3-7 days", card: "1-5 days" },
                    { aspect: "Processing Fee", loan: "0.5-2% of amount", card: "₹0-₹5,000" },
                    { aspect: "Annual Fee", loan: "No", card: "₹500-₹5,000" },
                    { aspect: "Tenure", loan: "12-60 months", card: "Monthly billing" },
                    { aspect: "Withdrawal", loan: "Lump sum", card: "As needed" },
                    { aspect: "Rewards", loan: "No", card: "Cashback, Points, Miles" },
                    { aspect: "Impact on Score", loan: "Medium impact", card: "Higher impact if misused" },
                    { aspect: "Flexibility", loan: "Fixed EMI", card: "Full/Minimum payment" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-4 font-bold text-gray-900">{row.aspect}</td>
                      <td className="border p-4 text-gray-700">{row.loan}</td>
                      <td className="border p-4 text-gray-700">{row.card}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              When to Choose Personal Loan
            </h2>
            <ul className="space-y-4">
              {[
                "Need large sum of money (₹1 lakh +)",
                "Fixed tenure repayment planned",
                "Lower interest rates are priority",
                "Consolidating multiple debts",
                "Planning major expenses (wedding, home improvement)",
                "Need EMI stability for budgeting",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CreditCard className="w-8 h-8 text-green-600" />
              When to Choose Credit Card
            </h2>
            <ul className="space-y-4">
              {[
                "Small frequent purchases (₹50,000 and below)",
                "Earn rewards and cashback",
                "Build credit history quickly",
                "Emergency short-term needs",
                "Regular monthly shopping and bills",
                "Take advantage of 0% EMI offers",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-orange-600" />
              Cost Comparison Example
            </h2>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Borrowing ₹2 lakhs for 1 year:</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Personal Loan @ 10%</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>Principal: ₹2,00,000</p>
                    <p>Interest: ₹20,000</p>
                    <p>Processing Fee: ₹4,000</p>
                    <p className="font-bold text-blue-600">Total Cost: ₹24,000</p>
                    <p className="font-bold text-blue-600">Monthly EMI: ₹18,667</p>
                  </div>
                </div>
                <div className="border-l-4 border-green-600 p-4">
                  <h3 className="font-bold text-gray-900 mb-3">Credit Card @ 30%</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>Principal: ₹2,00,000</p>
                    <p>Interest: ₹60,000</p>
                    <p>Annual Fee: ₹1,000</p>
                    <p className="font-bold text-green-600">Total Cost: ₹61,000</p>
                    <p className="font-bold text-green-600">Monthly Minimum: ₹6,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Need a Personal Loan?</h3>
              <p className="text-blue-100 mb-6">Compare rates from top lenders</p>
              <Link
                href="/credit/personal-loan"
                className="inline-block bg-white text-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                Apply Now
              </Link>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Apply for Credit Card?</h3>
              <p className="text-green-100 mb-6">Find cards with best rewards</p>
              <Link
                href="/credit/credit-card"
                className="inline-block bg-white text-green-600 font-bold px-6 py-2 rounded-lg hover:bg-green-50 transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
