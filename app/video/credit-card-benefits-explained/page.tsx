import type { Metadata } from "next"
import Link from "next/link"
import { PlayCircle, Award, Gift } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Credit Card Benefits Explained Video | Rewards & Cashback | BuyNswipe",
  description:
    "Watch our 7-minute video explaining credit card benefits, rewards points, cashback, and how to maximize your earnings.",
  keywords: [
    "credit card benefits",
    "credit card rewards",
    "credit card cashback",
    "credit card tutorial",
    "how to use credit card",
  ],
}

export default function CreditCardBenefitsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-red-500 text-white mb-4">Video Tutorial</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Benefits Explained</h1>
          <p className="text-xl text-purple-100">Master rewards, cashback, and maximize your card benefits</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-900 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
            <PlayCircle className="w-24 h-24 text-white opacity-80 hover:opacity-100 cursor-pointer transition" />
            <p className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded">7:35</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🎁", title: "Sign-Up Bonus", desc: "Welcome rewards on first purchase" },
              { icon: "💰", title: "Cashback", desc: "Get cash back on purchases" },
              { icon: "⭐", title: "Rewards Points", desc: "Earn points on every transaction" },
            ].map((benefit, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl mb-2">{benefit.icon}</p>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Video Contents</h2>
            <div className="space-y-4">
              {[
                { time: "0:00", topic: "Credit Card Basics & Benefits" },
                { time: "1:20", topic: "Sign-Up & Welcome Bonuses" },
                { time: "2:45", topic: "Reward Points Systems" },
                { time: "4:00", topic: "Cashback Programs by Category" },
                { time: "5:15", topic: "Travel & Insurance Benefits" },
                { time: "6:30", topic: "How to Maximize Rewards" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                  <Badge className="bg-purple-600 text-white flex-shrink-0">{item.time}</Badge>
                  <p className="text-gray-700">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Top Benefits
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Up to 5% cashback on shopping</li>
                  <li>✓ Free airport lounge access</li>
                  <li>✓ Travel insurance included</li>
                  <li>✓ Rewards on dining & travel</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-pink-600" />
                  Special Offers
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Annual fee waiver conditions</li>
                  <li>✓ Bonus rewards on categories</li>
                  <li>✓ Partner merchant benefits</li>
                  <li>✓ Referral rewards program</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your Perfect Card Today</h2>
            <p className="text-purple-100 mb-6">Apply for a credit card that matches your spending pattern</p>
            <Link
              href="/credit/credit-card"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-purple-50"
            >
              Browse Cards
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
