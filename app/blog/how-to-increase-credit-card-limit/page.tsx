import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How to Increase Credit Card Limit - Step-by-Step Guide | BuyNswipe",
  description:
    "How to increase credit card limit? Learn automatic and manual methods, eligibility criteria, and tips to get instant limit increase.",
  keywords: [
    "how to increase credit card limit",
    "credit card limit increase",
    "automatic credit card limit increase",
    "request credit card limit increase",
    "hdfc credit card limit increase",
    "sbi credit card limit increase",
    "icici credit card limit increase",
    "axis credit card limit increase",
  ],
}

export default function IncreaseCardLimitPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">How-To Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Increase Your Credit Card Limit</h1>
          <p className="text-xl text-emerald-100">Complete guide to get instant credit card limit increase</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Increase Your Credit Card Limit?</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                A higher credit card limit provides flexibility for large purchases without using multiple cards.
                Benefits include:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Emergency access to larger amounts",
                  "Ability to make big purchases without worrying about limit",
                  "Improved credit utilization ratio (if you don't increase spending)",
                  "More rewards on higher spends",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 1: Automatic Credit Card Limit Increase</h2>
            <div className="bg-emerald-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Most banks automatically increase your limit after 6-12 months of responsible usage. This is the easiest
                method.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Check Eligibility",
                    desc: "Your card must be 6+ months old with on-time payments",
                  },
                  {
                    step: 2,
                    title: "Build Good Payment History",
                    desc: "Make timely payments and maintain low credit utilization",
                  },
                  {
                    step: 3,
                    title: "Wait for Bank Offer",
                    desc: "Bank automatically increases limit via SMS/app notification",
                  },
                  { step: 4, title: "Accept Increase", desc: "Confirm the increase through app or bank call" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-emerald-600">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 2: Manual Limit Increase Request</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Request via Mobile App
                </h3>
                <ol className="space-y-2 text-gray-700 ml-4">
                  <li>1. Open your bank's mobile app</li>
                  <li>2. Go to "Credit Card" → "Manage Card" → "Limit Increase"</li>
                  <li>3. Select new desired limit</li>
                  <li>4. Submit request (instant decision in most cases)</li>
                  <li>5. Receive approval notification</li>
                </ol>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  Call Customer Service
                </h3>
                <ol className="space-y-2 text-gray-700 ml-4">
                  <li>1. Call bank's customer service number (on card back)</li>
                  <li>2. Select Credit Card option</li>
                  <li>3. Ask for limit increase request</li>
                  <li>4. Provide desired new limit</li>
                  <li>5. Get instant or 24-hour approval</li>
                </ol>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Visit Bank Branch
                </h3>
                <ol className="space-y-2 text-gray-700 ml-4">
                  <li>1. Visit nearest bank branch with credit card and ID</li>
                  <li>2. Request to meet card relationship manager</li>
                  <li>3. Discuss desired limit increase</li>
                  <li>4. Submit required documents if needed</li>
                  <li>5. Get approval within 1-3 days</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-yellow-50 rounded-lg p-8 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              Eligibility Criteria
            </h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Card must be 6+ months old",
                "All payments should be made on or before due date",
                "No defaults or late payments in past 12 months",
                "Good credit score (usually 750+)",
                "Regular spending and card usage",
                "Stable income (verified through documents if needed)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank-Specific Procedures</h2>
            <div className="space-y-4">
              {[
                {
                  bank: "HDFC Bank",
                  method: "NetBanking → Cards → Increase Limit or Call 1860-500-3435",
                },
                {
                  bank: "SBI",
                  method: "YONO App → Cards → Limit Increase or SMS LIMI to 09223-110-110",
                },
                {
                  bank: "ICICI Bank",
                  method: "Mobile App → Cards → Manage Card → Increase Limit or Call 9540-00-9540",
                },
                {
                  bank: "Axis Bank",
                  method: "Mobile App → Credit Cards → Card Settings → Request Limit Increase",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <h3 className="font-bold text-gray-900 text-lg">{item.bank}</h3>
                  <p className="text-gray-700">{item.method}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Your First Credit Card</h2>
            <p className="text-emerald-100 mb-6">Start building your credit history with a card designed for you</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
