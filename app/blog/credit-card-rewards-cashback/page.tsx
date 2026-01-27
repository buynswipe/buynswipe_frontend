import type { Metadata } from "next"
import Link from "next/link"
import { Gift, TrendingUp, Zap, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Card Rewards & Cashback Guide - Maximize Benefits | BuyNswipe",
  description:
    "Complete guide to credit card rewards and cashback programs. Learn how to maximize credit card benefits and earn rewards on every purchase.",
  keywords: [
    "credit card rewards",
    "cashback credit card",
    "reward points",
    "credit card benefits",
    "maximize rewards",
    "cashback rate",
    "reward redemption",
  ],
}

export default function CreditCardRewardsCashbackPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Rewards Strategy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Rewards & Cashback Guide</h1>
          <p className="text-xl text-green-100">Maximize your earnings on every credit card transaction</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Gift className="w-8 h-8 text-green-600" />
              Types of Credit Card Rewards
            </h2>
            <div className="space-y-6">
              {[
                {
                  type: "Cashback",
                  rate: "0.5%-3% per transaction",
                  desc: "Direct cash credit to account or statement",
                },
                {
                  type: "Reward Points",
                  rate: "1 point per ₹100",
                  desc: "Redeemable for travel, shopping, gift vouchers",
                },
                {
                  type: "Travel Miles",
                  rate: "1 mile per ₹1 spent",
                  desc: "Specifically for airline and hotel bookings",
                },
                {
                  type: "Accelerated Points",
                  rate: "2-5 points per ₹100",
                  desc: "Higher points on specific categories",
                },
              ].map((reward, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reward.type}</h3>
                  <p className="text-green-600 font-bold mb-2">{reward.rate}</p>
                  <p className="text-gray-700">{reward.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Category-wise Cashback Rates
            </h2>
            <div className="space-y-4">
              {[
                { category: "Groceries", rate: "3-4%", examples: "Walmart, Flipkart" },
                { category: "Fuel", rate: "2-3%", examples: "All fuel pumps" },
                { category: "Travel", rate: "3-5%", examples: "Airlines, hotels, buses" },
                { category: "Shopping", rate: "1-2%", examples: "Online, offline retail" },
                { category: "Dining", rate: "2-5%", examples: "Restaurants, food apps" },
                { category: "Movies", rate: "1.5-3%", examples: "Cinemas, OTT platforms" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-900">{item.category}</p>
                      <p className="text-blue-600 font-bold text-sm">{item.rate}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{item.examples}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-purple-600" />
              Strategies to Maximize Rewards
            </h2>
            <div className="space-y-4">
              {[
                { strategy: "Use Right Card for Category", detail: "Match card rewards with your spending category" },
                { strategy: "Stack Rewards", detail: "Combine card cashback with shopping portal offers" },
                { strategy: "Pay Full Balance", detail: "Avoid interest charges that exceed reward value" },
                { strategy: "Redeem Wisely", detail: "Use points for high-value items like travel" },
                { strategy: "Sign-up Bonuses", detail: "Get bonus points on meeting minimum spend" },
                { strategy: "Referral Programs", detail: "Earn extra rewards by referring friends" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                  <p className="font-bold text-gray-900">{item.strategy}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-orange-600" />
              Reward Redemption Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Flight bookings on partner airlines",
                "Hotel stays and resort packages",
                "Shopping vouchers and gift cards",
                "Bill payments and EMI conversion",
                "Insurance premium payments",
                "Cashback to bank account",
                "Gadgets and consumer products",
                "Donate to NGOs and charities",
              ].map((option, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600 flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-gray-700">{option}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Premium Credit Cards</h2>
            <p className="text-green-100 mb-6">Start earning rewards on every purchase today</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
