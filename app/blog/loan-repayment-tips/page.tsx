import type { Metadata } from "next"
import Link from "next/link"
import { TrendingDown, Zap, Target, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Loan Repayment Tips - Strategies to Pay Loans Faster | BuyNswipe",
  description:
    "Smart loan repayment strategies and tips to pay off loans faster, reduce interest, and improve financial health.",
  keywords: [
    "loan repayment tips",
    "pay off loan faster",
    "loan repayment strategy",
    "reduce loan interest",
    "EMI prepayment",
    "debt repayment plan",
    "loan payoff methods",
  ],
}

export default function LoanRepaymentTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Debt Management</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Repayment Tips</h1>
          <p className="text-xl text-teal-100">Pay off your loans faster and save thousands in interest</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingDown className="w-8 h-8 text-teal-600" />8 Loan Repayment Strategies
            </h2>
            <div className="space-y-4">
              {[
                {
                  strategy: "Avalanche Method",
                  detail: "Pay minimum on all loans, extra on highest interest rate loan first",
                  saves: "Best for maximum interest savings",
                },
                {
                  strategy: "Snowball Method",
                  detail: "Pay minimum on all loans, extra on smallest balance first",
                  saves: "Quick psychological wins, builds momentum",
                },
                {
                  strategy: "Make Bi-weekly Payments",
                  detail: "Pay half EMI every 2 weeks instead of full EMI monthly",
                  saves: "Extra payments reduce principal faster",
                },
                {
                  strategy: "Annual Bonus Strategy",
                  detail: "Use annual bonus/incentive for lump sum prepayment",
                  saves: "Can reduce loan tenure by 2-3 years",
                },
                {
                  strategy: "Lump Sum Prepayment",
                  detail: "Pay unexpected money (gift, tax refund) towards principal",
                  saves: "Directly reduces outstanding amount",
                },
                {
                  strategy: "Refinance Loans",
                  detail: "Switch to lower interest rate when market rates drop",
                  saves: "1-2% rate reduction saves ₹2-5 lakhs",
                },
                {
                  strategy: "Balance Transfer",
                  detail: "Transfer to lower-rate lender (check T&C carefully)",
                  saves: "Can reduce overall interest burden",
                },
                {
                  strategy: "Increase EMI Gradually",
                  detail: "Raise EMI by 5% annually as your income grows",
                  saves: "Systematic prepayment reduces loan period",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-teal-600">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900">{item.strategy}</p>
                    <span className="text-teal-600 text-xs font-bold bg-teal-100 px-2 py-1 rounded">{item.saves}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-green-600" />
              Quick Wins for Faster Repayment
            </h2>
            <div className="space-y-4">
              {[
                { action: "Skip Non-essential Spending", timeline: "Immediate", impact: "₹2,000-5,000/month extra" },
                { action: "Negotiate Rate Reduction", timeline: "1-2 weeks", impact: "0.5-1% lower rate" },
                { action: "Use Salary Increments", timeline: "Annual", impact: "Accelerate repayment by years" },
                { action: "Opt for Shorter Tenure", timeline: "New loans", impact: "Higher EMI but less interest" },
              ].map((win, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900">{win.action}</p>
                    <span className="text-green-600 text-xs font-bold">{win.timeline}</span>
                  </div>
                  <p className="text-gray-700 text-sm text-green-600">{win.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-8 h-8 text-orange-600" />
              Repayment Milestones
            </h2>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600">
              <p className="text-gray-700 mb-6">Track your progress through these milestones for motivation:</p>
              <div className="space-y-4">
                {[
                  { milestone: "25% Loan Cleared", time: "Year 2-3", action: "Celebrate progress" },
                  { milestone: "50% Loan Cleared", time: "Year 5-7", action: "Review rate reduction" },
                  { milestone: "75% Loan Cleared", time: "Year 8-10", action: "Plan final payments" },
                  { milestone: "100% Loan Cleared", time: "Varies", action: "Get no-due certificate" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b">
                    <div>
                      <p className="font-bold text-gray-900">{item.milestone}</p>
                      <p className="text-orange-600 text-sm">{item.time}</p>
                    </div>
                    <p className="text-gray-700 text-sm">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-purple-600" />
              Sample Savings Calculation
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 mb-3">
                  <span className="font-bold">Scenario:</span> ₹5 lakh loan @ 10% p.a., standard 5-year tenure
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <p className="text-gray-700">Standard EMI (60 months)</p>
                    <p className="font-bold">₹10,614/month</p>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <p className="text-gray-700">Total Amount Paid</p>
                    <p className="font-bold">₹6,36,840</p>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <p className="text-gray-700">Total Interest Paid</p>
                    <p className="font-bold text-red-600">₹1,36,840</p>
                  </div>
                  <div className="flex justify-between border-b pb-2 mt-4">
                    <p className="text-gray-700 font-bold">With ₹20,000 Extra Payment (48 months)</p>
                    <p className="font-bold">Saves ₹35,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Loan Repayment Journey</h2>
            <p className="text-teal-100 mb-6">Use our tools to calculate savings and plan your repayment</p>
            <Link
              href="/credit/emi-calculator"
              className="inline-block bg-white text-teal-600 font-bold px-8 py-3 rounded-lg hover:bg-teal-50 transition"
            >
              Calculate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
