import type { Metadata } from "next"
import Link from "next/link"
import { ThumbsUp, ThumbsDown, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Card Advantages & Disadvantages - Pros and Cons | BuyNswipe",
  description:
    "Credit card advantages and disadvantages explained. Learn benefits vs drawbacks of using credit cards responsibly.",
  keywords: [
    "credit card advantages",
    "credit card disadvantages",
    "benefits of credit card",
    "drawbacks of credit card",
    "pros and cons of credit card",
    "credit card advantages and disadvantages",
  ],
}

export default function CreditCardAdvantagesPage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Financial Decision Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Advantages & Disadvantages</h1>
          <p className="text-xl text-purple-100">
            Complete analysis of credit card pros and cons to make informed decisions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ThumbsUp className="w-8 h-8 text-green-600" />
              Advantages of Credit Cards
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Build Credit Score",
                  desc: "Regular credit card usage and timely payments build a strong credit history, improving your credit score for future loans",
                },
                {
                  title: "Earn Rewards & Cashback",
                  desc: "Earn 1-5% cashback, travel miles, or reward points on every purchase - turning spending into savings",
                },
                {
                  title: "Purchase Protection",
                  desc: "Extended warranty, fraud protection, and chargeback rights protect your purchases and money",
                },
                {
                  title: "Interest-Free Grace Period",
                  desc: "20-50 day interest-free borrowing window allows you to use money now and pay later without charges",
                },
                {
                  title: "Emergency Access to Funds",
                  desc: "Use credit when cash is unavailable - perfect for emergencies, travel, or unexpected expenses",
                },
                {
                  title: "Flexible EMI Options",
                  desc: "Convert purchases into easy monthly EMIs with 0% interest, improving cash flow management",
                },
                {
                  title: "Exclusive Offers & Discounts",
                  desc: "Cardholders get exclusive access to restaurant offers, shopping discounts, and travel deals",
                },
                {
                  title: "Travel Benefits",
                  desc: "Lounge access, travel insurance, air miles, and airport transfers on premium credit cards",
                },
              ].map((adv, idx) => (
                <div
                  key={idx}
                  className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600 hover:shadow-md transition"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-gray-700">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ThumbsDown className="w-8 h-8 text-red-600" />
              Disadvantages of Credit Cards
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "High Interest Rates",
                  desc: "If you don't pay the full balance, interest charges are high (18-40% annually), making debt accumulate quickly",
                },
                {
                  title: "Annual Fees",
                  desc: "Premium cards charge yearly fees (₹500-50,000) - even if unused, reducing value for inactive users",
                },
                {
                  title: "Overspending Risk",
                  desc: "Easy credit encourages overspending beyond your budget, leading to debt accumulation",
                },
                {
                  title: "Late Payment Charges",
                  desc: "Missing payment due dates results in late fees (₹100-500) and penalty interest rates",
                },
                {
                  title: "Credit Score Damage",
                  desc: "Late payments or high credit utilization negatively impact credit score, affecting future loans",
                },
                {
                  title: "Hidden Charges",
                  desc: "Processing fees, cash advance fees, foreign transaction fees, and GST add hidden costs",
                },
                {
                  title: "Minimum Payment Trap",
                  desc: "Paying only minimum balance keeps you in debt longer, charging maximum interest",
                },
                {
                  title: "Fraud & Security Risk",
                  desc: "Card cloning, skimming, and unauthorized transactions pose security risks if not careful",
                },
              ].map((dis, idx) => (
                <div
                  key={idx}
                  className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600 hover:shadow-md transition"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{dis.title}</h3>
                  <p className="text-gray-700">{dis.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparison: Benefits vs Drawbacks</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border p-3 text-left font-bold">Aspect</th>
                    <th className="border p-3 text-left font-bold">Advantage</th>
                    <th className="border p-3 text-left font-bold">Disadvantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: "Interest", adv: "Grace period (20-50 days)", dis: "High rates (18-40% p.a.)" },
                    { aspect: "Rewards", adv: "Earn 1-5% cashback", dis: "Annual fees reduce value" },
                    { aspect: "Credit Score", adv: "Builds credit history", dis: "Late payment damages score" },
                    { aspect: "Spending", adv: "Easy emergency access", dis: "Encourages overspending" },
                    { aspect: "Fees", adv: "No fee if paid on time", dis: "Multiple hidden charges" },
                  ].map((row) => (
                    <tr key={row.aspect} className="hover:bg-gray-50">
                      <td className="border p-3 font-bold text-gray-900">{row.aspect}</td>
                      <td className="border p-3 text-green-700">{row.adv}</td>
                      <td className="border p-3 text-red-700">{row.dis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-12 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              How to Use Credit Cards Responsibly
            </h2>
            <ol className="space-y-3">
              {[
                "Pay full balance every month to avoid interest charges",
                "Set spending budget and track your expenses carefully",
                "Use rewards strategically - only buy what you need",
                "Pay bills on time to protect your credit score",
                "Keep credit utilization below 30% for better score",
                "Review statements monthly for fraud or errors",
                "Avoid cash advances - they charge high interest",
                "Never share card details or OTPs with anyone",
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="font-bold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Your Credit Card?</h2>
            <p className="text-purple-100 mb-6">Choose a card that matches your spending habits and financial goals</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition"
            >
              Explore Credit Cards
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
