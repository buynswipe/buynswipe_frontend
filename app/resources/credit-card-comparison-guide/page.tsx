import type { Metadata } from "next"
import Link from "next/link"
import { Download, CreditCard, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Credit Card Comparison Guide - 20+ Cards Compared | BuyNswipe",
  description:
    "Compare 20+ popular credit cards with detailed features, fees, cashback, and rewards. Download our comprehensive comparison guide.",
  keywords: [
    "credit card comparison",
    "best credit cards",
    "credit card comparison PDF",
    "credit card features",
    "credit card cashback",
  ],
}

export default function CreditCardComparisonGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Free Download</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Comparison Guide</h1>
          <p className="text-xl text-purple-100 mb-8">
            Compare 20+ cards side-by-side with detailed features and benefits
          </p>
          <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3 h-auto">
            <Download className="w-5 h-5 mr-2" />
            Download Guide (PDF)
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Cards Included in This Guide</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "HDFC MoneyBack Plus",
                "Axis Flipkart",
                "SBI SimpliClick",
                "ICICI Sapphiro",
                "Amex Platinum",
                "BOB PremierZ",
                "Yes First",
                "Indusind Pinnacle",
                "Citi Cashback",
                "AU Delight",
              ].map((card, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <p className="text-gray-700">{card}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <div className="space-y-4">
              {[
                "Annual fees vs benefits comparison",
                "Cashback rates across categories (Shopping, Dining, Travel, etc.)",
                "Reward points redemption value",
                "Welcome and sign-up bonuses",
                "Eligibility and income requirements",
                "Insurance and travel benefits included",
                "Best credit cards by spending pattern",
                "How to maximize rewards from each card",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Cashback Cards", desc: "Best cards for pure cashback rewards" },
              { title: "Rewards Cards", desc: "Maximum rewards points earning" },
              { title: "Premium Cards", desc: "Best benefits and travel perks" },
            ].map((cat, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600">{cat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Get Your Comparison Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name*</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address*</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Primary Spending Category*</label>
                  <select className="w-full border border-gray-300 rounded-lg p-3" required>
                    <option>Shopping</option>
                    <option>Travel & Flights</option>
                    <option>Dining</option>
                    <option>Online Shopping</option>
                    <option>Overall Cashback</option>
                  </select>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-auto py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Send Guide to Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-12 px-4 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Card</h2>
          <p className="text-purple-100 mb-6">Use our card comparison tool to find the best match for your spending</p>
          <Link
            href="/credit/credit-card"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 font-semibold"
          >
            Compare Cards Now
          </Link>
        </div>
      </section>
    </div>
  )
}
