import type { Metadata } from "next"
import Link from "next/link"
import { Briefcase, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Business Loan Guide - Startup to SME Financing | BuyNswipe",
  description:
    "Complete business loan guide covering startup loans, MSME loans, working capital, and government schemes.",
  keywords: [
    "business loan",
    "startup loan",
    "MSME loan",
    "working capital loan",
    "business loan eligibility",
    "business loan interest rate",
  ],
}

export default function BusinessLoanGuidePage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Business Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Business Loan Guide</h1>
          <p className="text-xl text-blue-100">Grow your business with the right financing solution</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-8 h-8 text-blue-600" />
              Types of Business Loans
            </h2>
            <div className="space-y-6">
              {[
                {
                  type: "Startup Loans",
                  amount: "₹50,000 - ₹1 crore",
                  rate: "10-15% p.a.",
                  desc: "For new business ventures, government-backed schemes available (Startup India)",
                },
                {
                  type: "MSME Loans",
                  amount: "₹1 lakh - ₹1 crore",
                  rate: "8-12% p.a.",
                  desc: "For micro, small, medium enterprises with GST registration",
                },
                {
                  type: "Working Capital Loans",
                  amount: "₹50,000 - ₹5 crores",
                  rate: "7-11% p.a.",
                  desc: "For operational expenses, inventory, payroll management",
                },
                {
                  type: "Equipment Financing",
                  amount: "₹1 lakh - ₹5 crores",
                  rate: "8-13% p.a.",
                  desc: "For machinery, vehicles, equipment purchase",
                },
                {
                  type: "Trade Credit",
                  amount: "₹50,000 - ₹1 crore",
                  rate: "6-10% p.a.",
                  desc: "For supplier credit, import-export businesses",
                },
                {
                  type: "Expansion Loans",
                  amount: "₹10 lakhs - ₹5 crores",
                  rate: "9-14% p.a.",
                  desc: "For business expansion, new branch, market entry",
                },
              ].map((loan, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{loan.type}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-bold text-blue-600">{loan.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rate</p>
                      <p className="font-bold text-blue-600">{loan.rate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{loan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-green-600" />
              Business Loan Eligibility
            </h2>
            <div className="space-y-4">
              {[
                {
                  criterion: "Business Age",
                  detail: "Minimum 1-2 years (government schemes), 3+ for traditional loans",
                },
                { criterion: "Annual Turnover", detail: "Minimum ₹10 lakhs to ₹1 crore (varies by loan type)" },
                { criterion: "GST Registration", detail: "Mandatory for most MSME and business loans" },
                { criterion: "ITR & Financials", detail: "2 years IT returns, bank statements, balance sheet" },
                { criterion: "CIBIL Score", detail: "Minimum 650+ (business and personal credit score)" },
                { criterion: "Debt-to-Income Ratio", detail: "Maximum 2:1 (existing debt vs income)" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="font-bold text-gray-900">{item.criterion}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Business Loan Today</h2>
            <p className="text-blue-100 mb-6">Compare rates from top lenders and grow your business</p>
            <Link
              href="/credit/business-loan"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Apply for Business Loan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
