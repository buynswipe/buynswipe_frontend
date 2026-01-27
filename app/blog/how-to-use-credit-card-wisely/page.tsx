import type { Metadata } from "next"
import Link from "next/link"
import { Shield, DollarSign, AlertCircle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How to Use Credit Card Wisely - Smart Credit Card Tips | BuyNswipe",
  description:
    "Learn how to use credit cards responsibly and wisely. Master credit card best practices to avoid debt and build excellent credit.",
  keywords: [
    "how to use credit card wisely",
    "credit card best practices",
    "credit card tips",
    "avoid credit card debt",
    "credit card management",
    "responsible credit use",
    "credit card dos and donts",
  ],
}

export default function HowToUseCreditCardWiselyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Smart Usage</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Use Credit Card Wisely</h1>
          <p className="text-xl text-indigo-100">
            Master responsible credit card usage and build excellent financial health
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-indigo-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-indigo-600" />
              Credit Card DO's
            </h2>
            <div className="space-y-4">
              {[
                { tip: "Pay Full Balance", detail: "Pay the entire outstanding amount by due date to avoid interest" },
                { tip: "Set Budget", detail: "Spend only what you can repay comfortably every month" },
                { tip: "Track Transactions", detail: "Monitor all purchases to prevent unexpected bills" },
                { tip: "Use Rewards", detail: "Maximize cashback and points on regular expenses" },
                { tip: "Keep Low Utilization", detail: "Use less than 30% of credit limit for better score" },
                { tip: "Enable Alerts", detail: "Set transaction alerts and payment reminders" },
                { tip: "Build Credit Score", detail: "Regular payments improve your CIBIL score" },
                { tip: "Review Statements", detail: "Check monthly statements for fraud or errors" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="font-bold text-gray-900 text-green-600 flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    {item.tip}
                  </p>
                  <p className="text-gray-700 text-sm mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-red-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-8 h-8 text-red-600" />
              Credit Card DON'Ts
            </h2>
            <div className="space-y-4">
              {[
                { warning: "Don't Miss Payments", detail: "Late payments damage credit score and incur penalties" },
                { warning: "Don't Spend More Than Income", detail: "Avoid debt spiral by living within your means" },
                { warning: "Don't Max Out Limit", detail: "High utilization reduces credit score significantly" },
                {
                  warning: "Don't Make Only Minimum Payment",
                  detail: "You pay excessive interest on remaining balance",
                },
                { warning: "Don't Share Card Details", detail: "Protect PIN, CVV, and OTP for security" },
                { warning: "Don't Use Unnecessary Cards", detail: "Multiple cards make tracking spending difficult" },
                { warning: "Don't Ignore Statements", detail: "Fraud can go undetected without review" },
                { warning: "Don't Apply For Multiple Cards", detail: "Multiple inquiries harm your credit score" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-red-600">
                  <p className="font-bold text-gray-900 text-red-600 flex items-center gap-2">
                    <span className="text-red-600">✗</span>
                    {item.warning}
                  </p>
                  <p className="text-gray-700 text-sm mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              Smart Budget Planning
            </h2>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 mb-6">
              <p className="text-gray-700 mb-4">
                Use the 50/30/20 budget rule: 50% needs, 30% wants, 20% savings. Allocate only 10-15% of your income to
                credit card spending.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <p className="text-gray-700">Monthly Income</p>
                  <p className="font-bold">₹50,000</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <p className="text-gray-700">Needs (50%)</p>
                  <p className="font-bold text-blue-600">₹25,000</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <p className="text-gray-700">Wants (30%)</p>
                  <p className="font-bold text-green-600">₹15,000</p>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <p className="text-gray-700">Savings (20%)</p>
                  <p className="font-bold text-orange-600">₹10,000</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-bold">Recommended CC Spend</p>
                  <p className="font-bold text-indigo-600">₹5,000-7,500</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-8 h-8 text-purple-600" />
              Security Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Keep physical card in safe place",
                "Never share PIN or CVV with anyone",
                "Use unique, strong passwords for apps",
                "Enable 2-factor authentication",
                "Monitor credit score regularly",
                "Set transaction limits for online use",
                "Block card immediately if lost/stolen",
                "Verify seller authenticity before payment",
              ].map((practice, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-600 flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <p className="text-gray-700">{practice}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your Smart Credit Card</h2>
            <p className="text-indigo-100 mb-6">Start using credit wisely and build excellent financial health</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
