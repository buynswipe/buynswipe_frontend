import type { Metadata } from "next"
import { CreditCard, TrendingUp, Gift, Zap, Shield, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Complete Credit Card Guide - Types, Benefits & How to Choose | BuyNswipe",
  description:
    "Ultimate credit card guide. Learn about credit card types, benefits, rewards programs, and how to choose the right card for you.",
  keywords: [
    "credit card guide",
    "types of credit cards",
    "credit card benefits",
    "credit card rewards",
    "best credit card",
    "how to choose credit card",
    "credit card tips",
    "credit card eligibility",
  ],
  openGraph: {
    title: "Complete Credit Card Guide - Types, Benefits & How to Choose",
    description: "Learn everything about credit cards, rewards, and how to maximize benefits.",
    url: "https://buynswipe.com/resources/credit-card-guide",
  },
}

export default function CreditCardGuidePage() {
  const cardTypes = [
    {
      icon: CreditCard,
      title: "Cashback Cards",
      desc: "Earn 1-5% cashback on all purchases or specific categories",
      best: "Daily spenders",
    },
    {
      icon: TrendingUp,
      title: "Travel Cards",
      desc: "Earn miles/points on travel and get travel benefits",
      best: "Frequent travelers",
    },
    {
      icon: Gift,
      title: "Rewards Cards",
      desc: "Earn points on purchases, redeemable for gifts/travel",
      best: "Point collectors",
    },
    {
      icon: Zap,
      title: "Fuel Cards",
      desc: "Get 5-7% fuel surcharge waiver and fuel rewards",
      best: "Car owners",
    },
    {
      icon: DollarSign,
      title: "Dining Cards",
      desc: "Cashback and offers at restaurants and food platforms",
      best: "Food enthusiasts",
    },
    {
      icon: Shield,
      title: "Premium Cards",
      desc: "High-end cards with luxury benefits and concierge",
      best: "High earners",
    },
  ]

  const benefits = [
    { title: "Free Credit", desc: "Get 45-50 days free credit", value: "Saves Interest" },
    { title: "Rewards", desc: "Earn 1-5% on purchases", value: "Cash Back" },
    { title: "Offers", desc: "Exclusive deals and discounts", value: "Savings" },
    { title: "Lounge Access", desc: "Free airport lounge entry", value: "Premium" },
    { title: "Insurance", desc: "Travel, purchase, accidental insurance", value: "Protection" },
    { title: "Concierge", desc: "24/7 customer support services", value: "Convenience" },
  ]

  const eligibility = [
    { item: "Age", value: "21-60 years" },
    { item: "Annual Income", value: "₹3,00,000+" },
    { item: "Credit Score", value: "650+" },
    { item: "Employment", value: "1+ years" },
    { item: "Credit History", value: "2+ years" },
  ]

  const comparison = [
    { aspect: "Annual Fee", cashback: "₹500-1000", travel: "₹2000-5000", premium: "₹10000+" },
    { aspect: "Welcome Bonus", cashback: "₹2000-5000", travel: "₹5000-15000", premium: "₹15000-30000" },
    { aspect: "Cashback", cashback: "1-5%", travel: "0-2%", premium: "1-3%" },
    { aspect: "Best For", cashback: "Daily spenders", travel: "Travelers", premium: "High earners" },
  ]

  const tips = [
    "Choose card based on spending patterns",
    "Compare interest rates and fees",
    "Look for welcome bonuses",
    "Check rewards program",
    "Pay full bill on due date",
    "Don't use cash advances",
    "Monitor credit score",
    "Use cards for building credit history",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Credit Card Guide</h1>
          <p className="text-xl text-amber-100">Learn about types, benefits, and how to choose the right credit card</p>
        </div>
      </section>

      {/* Card Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">6 Types of Credit Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardTypes.map((card, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <card.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                  <span className="inline-block bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded">
                    Best For: {card.best}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Credit Card Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{benefit.value}</div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Credit Card Eligibility</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {eligibility.map((e, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold">{e.item}</p>
                      <p className="text-gray-600">{e.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Card Type Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Aspect</th>
                  <th className="px-6 py-3 text-left">Cashback Card</th>
                  <th className="px-6 py-3 text-left">Travel Card</th>
                  <th className="px-6 py-3 text-left">Premium Card</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-amber-50">
                    <td className="px-6 py-3 font-bold">{row.aspect}</td>
                    <td className="px-6 py-3">{row.cashback}</td>
                    <td className="px-6 py-3">{row.travel}</td>
                    <td className="px-6 py-3">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">8 Credit Card Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Credit Card</h2>
          <p className="text-lg mb-8">Compare cards and apply for the best rewards</p>
          <Button className="bg-white text-amber-600 hover:bg-amber-50">Browse Cards</Button>
        </div>
      </section>
    </main>
  )
}
