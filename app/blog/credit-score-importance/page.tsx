import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, AlertCircle, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Score Importance - Impact on Loans & Cards | BuyNswipe",
  description:
    "Complete guide on credit score importance, how it's calculated, factors affecting it, and its impact on loan and credit card eligibility.",
  keywords: [
    "credit score importance",
    "CIBIL score",
    "credit score range",
    "factors affecting credit score",
    "improve credit score",
    "credit score impact",
  ],
}

export default function CreditScoreImportancePage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Financial Health</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Score Importance</h1>
          <p className="text-xl text-blue-100">Understand your credit score and its impact on your financial future</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              What is Credit Score?
            </h2>
            <div className="bg-white rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                A credit score is a 3-digit number (300-900) that represents your creditworthiness. It's calculated by
                credit rating agencies like CIBIL, Experian, Equifax, and CRIF High Mark based on your credit history
                and financial behavior.
              </p>
              <p className="text-gray-700">
                Higher scores indicate lower credit risk and make you more attractive to lenders, resulting in better
                loan terms and interest rates.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Credit Score Ranges</h3>
              {[
                { range: "300-549", rating: "Poor", desc: "Very high risk, difficult to get loans/cards" },
                { range: "550-649", rating: "Fair", desc: "High risk, higher interest rates, limited options" },
                { range: "650-749", rating: "Good", desc: "Moderate risk, approved but with conditions" },
                { range: "750-849", rating: "Very Good", desc: "Low risk, better rates and easier approval" },
                { range: "850-900", rating: "Excellent", desc: "Minimal risk, best rates and instant approval" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900">
                      {item.range} - {item.rating}
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-8 h-8 text-green-600" />5 Factors Affecting Credit Score
            </h2>
            <div className="space-y-6">
              {[
                {
                  factor: "Payment History (35%)",
                  impact: "On-time payment is most important",
                  details: "Late or missed payments significantly lower your score",
                },
                {
                  factor: "Credit Utilization (30%)",
                  impact: "Keep usage below 30% of limit",
                  details: "Higher usage indicates financial stress",
                },
                {
                  factor: "Credit Mix (15%)",
                  impact: "Mix of secured & unsecured credit",
                  details: "Diverse credit types show better management",
                },
                {
                  factor: "Credit Age (10%)",
                  impact: "Older credit history is better",
                  details: "Keep old accounts open, longer history = higher score",
                },
                {
                  factor: "Credit Inquiries (10%)",
                  impact: "Too many inquiries lower score",
                  details: "Each application triggers hard inquiry",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.factor}</h3>
                  <p className="text-green-600 font-semibold mb-2">{item.impact}</p>
                  <p className="text-gray-700">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-purple-600" />
              Impact on Financial Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  product: "Personal Loan",
                  impact750: "₹15 lakhs at 8-9% interest",
                  impact650: "₹10 lakhs at 11-12% interest",
                },
                {
                  product: "Credit Card",
                  impact750: "₹5 lakhs limit, instant approval",
                  impact650: "₹1-2 lakhs limit, longer process",
                },
                {
                  product: "Home Loan",
                  impact750: "Full amount at 6.5% interest",
                  impact650: "70% amount at 8-9% interest",
                },
                {
                  product: "Auto Loan",
                  impact750: "90% value at 7% interest",
                  impact650: "60% value at 10% interest",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.product}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Score 750+</p>
                      <p className="text-gray-700 text-sm">{item.impact750}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Score 650</p>
                      <p className="text-gray-700 text-sm">{item.impact650}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Check Your Credit Score Today</h2>
            <p className="text-blue-100 mb-6">Get free CIBIL score and improve your financial health</p>
            <Link
              href="/credit/cibil-score"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Check Score Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
