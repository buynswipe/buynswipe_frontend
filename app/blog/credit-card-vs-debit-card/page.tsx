import type { Metadata } from "next"
import Link from "next/link"
import { Shield, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Card vs Debit Card - Complete Comparison | BuyNswipe",
  description:
    "Credit card vs debit card: differences, pros, cons, and which is better. Understand rewards, liability, and usage benefits.",
  keywords: [
    "credit card vs debit card",
    "difference between credit and debit card",
    "credit card advantages",
    "debit card advantages",
    "when to use credit card",
    "when to use debit card",
    "credit card benefits over debit",
  ],
}

export default function CreditCardVsDebitCardPage() {
  const comparison = [
    { aspect: "Source of Funds", credit: "Borrowed money from bank", debit: "Your own money" },
    { aspect: "Interest Charges", credit: "Yes, if balance not paid", debit: "No interest charges" },
    { aspect: "Rewards/Cashback", credit: "Yes, 1-5% cashback", debit: "Limited or none" },
    { aspect: "Credit Score", credit: "Improves with timely payments", debit: "No impact on credit score" },
    { aspect: "EMI Facility", credit: "Available for large purchases", debit: "Typically not available" },
    { aspect: "Grace Period", credit: "20-50 days interest-free", debit: "No grace period" },
    { aspect: "Fraud Liability", credit: "Limited liability (₹0-500)", debit: "Higher liability" },
    { aspect: "Traveling", credit: "Better for international travel", debit: "Limited acceptance abroad" },
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

      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Comparison Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card vs Debit Card</h1>
          <p className="text-xl text-indigo-100">
            Comprehensive comparison to help you choose the right payment method
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Differences at a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border p-3 text-left font-bold text-gray-900">Aspect</th>
                    <th className="border p-3 text-left font-bold text-indigo-600">Credit Card</th>
                    <th className="border p-3 text-left font-bold text-gray-600">Debit Card</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-3 font-semibold text-gray-900">{row.aspect}</td>
                      <td className="border p-3 text-gray-700">{row.credit}</td>
                      <td className="border p-3 text-gray-700">{row.debit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advantages of Credit Cards</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Earn Rewards & Cashback",
                  desc: "Get 1-5% cashback on every purchase, which adds up significantly over time",
                },
                {
                  title: "Build Credit History",
                  desc: "Regular credit card usage improves your CIBIL score, helping you get better loans in future",
                },
                { title: "Grace Period", desc: "Enjoy 20-50 days interest-free period for bill payment" },
                { title: "EMI Facility", desc: "Convert large purchases into 0% EMI for up to 24 months" },
                { title: "Fraud Protection", desc: "Limited liability (₹0-500) if card is misused or stolen" },
                { title: "Travel Benefits", desc: "Better international acceptance, travel insurance, lounge access" },
              ].map((item, idx) => (
                <div key={idx} className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advantages of Debit Cards</h2>
            <div className="space-y-4">
              {[
                { title: "Spend Only What You Have", desc: "No risk of overspending or going into debt" },
                { title: "No Interest Charges", desc: "Zero interest charges unlike credit cards" },
                { title: "Easy Account Management", desc: "Direct access to your bank account and ATM withdrawals" },
                { title: "Lower Eligibility Criteria", desc: "No income requirements, easier to get" },
                { title: "Automatic Expense Tracking", desc: "All transactions directly visible in your bank account" },
                { title: "No Monthly Billing Cycle", desc: "Money is deducted immediately, no bill management needed" },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Which Should You Use?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Use Credit Card When:</h3>
                <ul className="space-y-2">
                  {[
                    "Making big purchases",
                    "Booking flights/hotels",
                    "Building credit history",
                    "You can pay full balance",
                    "Need fraud protection",
                    "Want rewards/cashback",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-yellow-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Use Debit Card When:</h3>
                <ul className="space-y-2">
                  {[
                    "Managing daily expenses",
                    "ATM cash withdrawals",
                    "Want no debt risk",
                    "Limited income control",
                    "Online shopping safely",
                    "Avoid overspending",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Your First Credit Card?</h2>
            <p className="text-indigo-100 mb-6">Compare top credit cards and apply with instant approval</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              Apply for Credit Card
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
