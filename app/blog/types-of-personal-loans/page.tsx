import type { Metadata } from "next"
import Link from "next/link"
import { Zap, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Types of Personal Loans - Complete Guide | BuyNswipe",
  description:
    "Learn about different types of personal loans: unsecured, secured, debt consolidation, and special purpose loans.",
  keywords: [
    "types of personal loans",
    "personal loan types",
    "unsecured personal loan",
    "secured personal loan",
    "debt consolidation loan",
  ],
}

export default function TypesOfPersonalLoansPage() {
  const loanTypes = [
    {
      name: "Unsecured Personal Loans",
      amount: "₹50,000 - ₹50 lakhs",
      rate: "8% - 15% p.a.",
      tenure: "12-60 months",
      desc: "No collateral required, approved based on income and creditworthiness",
      features: ["Quick approval (24-48 hours)", "No asset pledging", "Higher interest rates", "Lower loan amount"],
    },
    {
      name: "Secured Personal Loans",
      amount: "₹1 lakh - ₹2 crores",
      rate: "6% - 10% p.a.",
      tenure: "24-84 months",
      desc: "Requires collateral like property, vehicle, or fixed deposits",
      features: ["Lower interest rates", "Higher loan amounts", "Longer tenure available", "Risk of asset loss"],
    },
    {
      name: "Debt Consolidation Loans",
      amount: "₹50,000 - ₹1 crore",
      rate: "8% - 12% p.a.",
      tenure: "24-60 months",
      desc: "Combine multiple debts into single loan with lower EMI",
      features: ["Reduced EMI burden", "Single loan repayment", "Improved credit score", "Flexible repayment"],
    },
    {
      name: "Emergency/Personal Loans",
      amount: "₹25,000 - ₹10 lakhs",
      rate: "10% - 18% p.a.",
      tenure: "6-36 months",
      desc: "Quick loans for urgent financial needs without collateral",
      features: ["Instant disbursal", "Minimal documentation", "No collateral", "Higher interest rates"],
    },
    {
      name: "Wedding Loans",
      amount: "₹50,000 - ₹50 lakhs",
      rate: "7% - 12% p.a.",
      tenure: "12-60 months",
      desc: "Special loans for wedding expenses with lower rates",
      features: ["Lower interest rates", "Higher approval chance", "Special discounts", "Flexible tenure"],
    },
    {
      name: "Home Improvement Loans",
      amount: "₹50,000 - ₹50 lakhs",
      rate: "8% - 13% p.a.",
      tenure: "12-60 months",
      desc: "Loans specifically for renovation, repair, and home upgrades",
      features: ["Purpose-specific rates", "Flexible terms", "Quick disbursement", "Tax deductible"],
    },
  ]

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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Loan Types</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Types of Personal Loans</h1>
          <p className="text-xl text-blue-100">Choose the right personal loan for your financial needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 mb-12">
            {loanTypes.map((loan, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 border border-blue-200">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    {loan.name}
                  </h2>
                </div>

                <p className="text-gray-700 text-lg mb-6">{loan.desc}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                    <p className="font-bold text-blue-600">{loan.amount}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                    <p className="font-bold text-blue-600">{loan.rate}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Tenure</p>
                    <p className="font-bold text-blue-600">{loan.tenure}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Approval</p>
                    <p className="font-bold text-blue-600">24-48 hrs</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {loan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <TrendingUp className="w-4 h-4 text-green-600" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparison: Which Loan is Right for You?</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Loan Type</th>
                    <th className="p-4 text-left">Interest Rate</th>
                    <th className="p-4 text-left">Approval Speed</th>
                    <th className="p-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {loanTypes.map((loan, idx) => (
                    <tr key={idx} className="border-b hover:bg-blue-50">
                      <td className="p-4 font-semibold text-gray-900">{loan.name}</td>
                      <td className="p-4 text-gray-700">{loan.rate}</td>
                      <td className="p-4 text-gray-700">24-48 hrs</td>
                      <td className="p-4 text-gray-700">
                        {idx === 0 && "Quick loans"}
                        {idx === 1 && "Large amounts"}
                        {idx === 2 && "Debt reduction"}
                        {idx === 3 && "Urgencies"}
                        {idx === 4 && "Weddings"}
                        {idx === 5 && "Home upgrades"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Find Your Perfect Personal Loan</h2>
            <p className="text-blue-100 mb-6">Compare rates and apply for the right loan type today</p>
            <Link
              href="/credit/affiliate-loans"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Compare Loans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
