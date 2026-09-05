import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, DollarSign, TrendingDown, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "EMI Calculator Guide - Calculate Loan EMI Online | BuyNswipe",
  description:
    "Complete EMI calculator guide with examples for personal loans, auto loans, home loans. Learn how to calculate EMI and optimize your loan.",
  keywords: [
    "EMI calculator",
    "loan EMI calculator",
    "EMI calculation formula",
    "how to calculate EMI",
    "EMI vs principal",
    "EMI calculator online",
    "personal loan EMI",
  ],
}

export default function EMICalculatorGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Financial Planning</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">EMI Calculator Guide</h1>
          <p className="text-xl text-purple-100">Learn how to calculate EMI and plan your loan repayment effectively</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calculator className="w-8 h-8 text-purple-600" />
              What is EMI?
            </h2>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 mb-6">
              <p className="text-gray-700 mb-4">
                EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan. It includes
                both principal and interest components, calculated based on loan amount, interest rate, and tenure.
              </p>
              <div className="bg-purple-100 rounded-lg p-4 mb-4">
                <p className="font-bold text-gray-900 mb-2">EMI Formula:</p>
                <p className="text-gray-700 font-mono text-sm">EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">P = Loan Amount</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">R = Monthly Interest Rate</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">N = Loan Tenure (months)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              EMI Calculation Examples
            </h2>
            <div className="space-y-4">
              {[
                {
                  type: "Personal Loan",
                  principal: "₹5 lakhs",
                  rate: "10% p.a.",
                  tenure: "5 years",
                  emi: "₹10,614",
                  total: "₹63,68,840",
                },
                {
                  type: "Auto Loan",
                  principal: "₹8 lakhs",
                  rate: "7.5% p.a.",
                  tenure: "5 years",
                  emi: "₹15,969",
                  total: "₹9,58,140",
                },
                {
                  type: "Home Loan",
                  principal: "₹25 lakhs",
                  rate: "6.5% p.a.",
                  tenure: "20 years",
                  emi: "₹19,331",
                  total: "₹46,39,440",
                },
              ].map((example, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="font-bold text-gray-900 mb-3">{example.type}</p>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600">Principal</p>
                      <p className="font-bold text-blue-600">{example.principal}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rate</p>
                      <p className="font-bold text-blue-600">{example.rate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Tenure</p>
                      <p className="font-bold text-blue-600">{example.tenure}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Monthly EMI</p>
                      <p className="font-bold text-blue-600">{example.emi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-green-600" />
              How to Use EMI Calculator
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Enter Loan Amount", detail: "Input the principal amount you need to borrow" },
                { step: 2, title: "Select Interest Rate", detail: "Choose the applicable annual interest rate" },
                { step: 3, title: "Choose Tenure", detail: "Select loan duration in months or years" },
                { step: 4, title: "View Results", detail: "Instant calculation of monthly EMI and total interest" },
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

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingDown className="w-8 h-8 text-orange-600" />
              EMI Optimization Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Compare interest rates across banks",
                "Choose shorter tenure for lower interest",
                "Make part prepayments to reduce principal",
                "Negotiate interest rates based on CIBIL",
                "Consider fixed vs floating rates",
                "Factor in processing fees in total cost",
                "Use online calculators for comparison",
                "Review EMI affordability before applying",
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600 flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Calculate Your EMI</h2>
            <p className="text-purple-100 mb-6">Use our free EMI calculator to plan your loan repayment</p>
            <Link
              href="/credit/emi-calculator"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition"
            >
              Use Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
