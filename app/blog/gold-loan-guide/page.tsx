import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, Zap, Lock, TrendingDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Gold Loan Guide - Quick Cash Against Gold | BuyNswipe",
  description:
    "Complete gold loan guide covering gold loan features, interest rates, eligibility, process, and benefits of borrowing against gold jewelry.",
  keywords: [
    "gold loan",
    "gold loan interest rate",
    "quick gold loan",
    "gold loan eligibility",
    "gold loan process",
    "pledge gold for loan",
    "gold rate today",
  ],
}

export default function GoldLoanGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-yellow-500 to-yellow-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-blue-600 text-white mb-4">Quick Loans</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gold Loan Guide</h1>
          <p className="text-xl text-yellow-100">
            Get instant cash against gold jewelry - same day approval and disbursal
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-yellow-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-yellow-600" />
              Gold Loan Basics
            </h2>
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-600 mb-6">
              <p className="text-gray-700 mb-4">
                A gold loan is a quick, collateral-based loan where you pledge your gold jewelry in exchange for instant
                cash. The loan amount depends on the purity and weight of gold.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 font-bold">Loan Amount</p>
                  <p className="text-yellow-600 font-bold">₹10,000 - ₹50 lakhs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold">Interest Rate</p>
                  <p className="text-yellow-600 font-bold">7-12% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold">Processing Time</p>
                  <p className="text-yellow-600 font-bold">Same day to 2 hours</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold">Tenure</p>
                  <p className="text-yellow-600 font-bold">3 months - 3 years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-green-600" />
              Gold Loan Process
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Visit Branch", detail: "Go to nearest gold loan branch with your gold jewelry" },
                { step: 2, title: "Gold Verification", detail: "Purity and weight verified by certified appraiser" },
                { step: 3, title: "Valuation", detail: "Loan amount determined at current gold rates (75-80% value)" },
                { step: 4, title: "Documentation", detail: "Simple form filling and verification (10-15 minutes)" },
                { step: 5, title: "Instant Disbursal", detail: "Cash or bank transfer within 1-2 hours" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-700 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Lock className="w-8 h-8 text-blue-600" />
              Gold Loan Eligibility
            </h2>
            <div className="space-y-4">
              {[
                { criterion: "Age", detail: "18 years and above" },
                { criterion: "Gold Type", detail: "22K/24K gold jewelry only (no gold coins/bars)" },
                { criterion: "Minimum Weight", detail: "Usually 10 grams minimum" },
                { criterion: "CIBIL Score", detail: "Not required (no credit check)" },
                { criterion: "Documents", detail: "Only ID proof required" },
                { criterion: "Employment", detail: "No employment check needed" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="font-bold text-gray-900">{item.criterion}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingDown className="w-8 h-8 text-orange-600" />
              Gold Loan Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Instant approval (no credit check)",
                "Quick disbursal (same day/2 hours)",
                "Minimal documentation required",
                "Flexible repayment options",
                "Option to redeem gold anytime",
                "Lower interest rates than personal loans",
                "No hidden charges",
                "Insurance coverage on gold",
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600 flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Gold Loan</h2>
            <p className="text-yellow-100 mb-6">Get instant cash in 2 hours - no credit checks required</p>
            <Link
              href="/credit/affiliate-loans"
              className="inline-block bg-white text-yellow-600 font-bold px-8 py-3 rounded-lg hover:bg-yellow-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
