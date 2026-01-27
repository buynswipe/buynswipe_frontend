import type { Metadata } from "next"
import Link from "next/link"
import { HelpCircle, CreditCard, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "What is a Credit Card? Complete Guide & Meaning Explained | BuyNswipe",
  description:
    "What is a credit card in easy words? Learn credit card meaning, how they work, types, and benefits. Complete guide to understanding credit cards.",
  keywords: [
    "what is a credit card",
    "credit card meaning",
    "what is a credit card in easy words",
    "credit card definition",
    "how does a credit card work",
    "types of credit cards",
    "credit card vs debit card",
    "credit card benefits",
    "credit card in hindi",
  ],
}

const sections = [
  {
    icon: CreditCard,
    title: "What is a Credit Card?",
    description: "A credit card is a payment tool issued by banks",
  },
  {
    icon: Zap,
    title: "How Credit Cards Work",
    description: "Understanding the credit card cycle and billing process",
  },
  {
    icon: Shield,
    title: "Credit Card Safety",
    description: "Protection features and fraud prevention",
  },
]

export default function WhatIsCreditCardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Educational Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What is a Credit Card? Complete Beginner's Guide</h1>
          <p className="text-xl text-blue-100">
            Understand credit cards in simple words - how they work, benefits, and everything you need to know
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Definition Section */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Credit Card Definition in Simple Words</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong>credit card</strong> is a plastic card issued by a bank or financial institution that allows you
              to borrow money for purchases. Instead of using your own money immediately, you can buy items now and pay
              the bank later. The bank charges you interest if you don't pay the full amount by the due date.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does a Credit Card Work?</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Apply for a Credit Card",
                  desc: "You apply to a bank and get approved based on your credit history and income",
                },
                {
                  step: 2,
                  title: "Receive Your Credit Card",
                  desc: "The bank issues a card with a credit limit (max amount you can borrow)",
                },
                {
                  step: 3,
                  title: "Make Purchases",
                  desc: "Use the card to buy anything - the bank pays the merchant on your behalf",
                },
                {
                  step: 4,
                  title: "Receive Monthly Statement",
                  desc: "The bank sends you a bill showing all your purchases and amount due",
                },
                {
                  step: 5,
                  title: "Pay Your Bill",
                  desc: "You pay the bank before the due date to avoid interest charges",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Types of Credit Cards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Credit Cards</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  type: "Cashback Credit Cards",
                  benefit: "Earn rewards on every purchase",
                  example: "SBI SimpliClick - 5% cashback on online shopping",
                },
                {
                  type: "Travel Credit Cards",
                  benefit: "Airport lounge access & travel miles",
                  example: "HDFC Bank Infinia - Unlimited lounge access",
                },
                {
                  type: "Fuel Credit Cards",
                  benefit: "Discounts on fuel purchases",
                  example: "Axis Bank Fuel Advantage - 4% fuel surcharge waived",
                },
                {
                  type: "Shopping Credit Cards",
                  benefit: "Discounts at retail stores",
                  example: "Flipkart Axis Card - Extra 5% discount",
                },
              ].map((card) => (
                <Card key={card.type} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{card.type}</h3>
                    <p className="text-sm text-gray-600 mb-2">{card.benefit}</p>
                    <p className="text-xs text-blue-600">{card.example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Credit Card vs Debit Card */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Card vs Debit Card - Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border p-3 text-left font-bold">Feature</th>
                    <th className="border p-3 text-left font-bold">Credit Card</th>
                    <th className="border p-3 text-left font-bold">Debit Card</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Money Source",
                      credit: "Bank's money (you pay later)",
                      debit: "Your own money (instant)",
                    },
                    { feature: "Interest", credit: "Charged if not paid on time", debit: "No interest charges" },
                    { feature: "Credit Score", credit: "Improves credit score", debit: "No impact on credit" },
                    { feature: "Rewards", credit: "Cashback, miles, points", debit: "Limited rewards" },
                    { feature: "Grace Period", credit: "20-50 days interest-free", debit: "No grace period" },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50">
                      <td className="border p-3 font-bold text-gray-900">{row.feature}</td>
                      <td className="border p-3 text-gray-700">{row.credit}</td>
                      <td className="border p-3 text-gray-700">{row.debit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Using a Credit Card</h2>
            <div className="grid gap-4">
              {[
                "Build Credit Score - Regular payments improve your credit history",
                "Earn Rewards - Cashback, miles, and points on every purchase",
                "Purchase Protection - Fraud liability protection & chargeback rights",
                "Grace Period - Interest-free borrowing for 20-50 days",
                "Emergency Access - Use credit when cash is not available",
                "Financial Flexibility - Pay bills, book flights, and manage expenses",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <HelpCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is a credit card in one sentence?",
                  a: "A credit card is a payment tool that allows you to borrow money from a bank to make purchases and pay it back later with interest.",
                },
                {
                  q: "Is a credit card safe to use?",
                  a: "Yes, modern credit cards have fraud protection, EMV chips, and secure authentication. You're protected against unauthorized transactions.",
                },
                {
                  q: "What is the difference between a credit card and a debit card?",
                  a: "A credit card lets you borrow money (you pay later with interest), while a debit card uses your own money immediately with no interest.",
                },
                {
                  q: "Do I need a good salary to get a credit card?",
                  a: "No. You can get secured credit cards with as little as ₹10,000 FD, or student credit cards without income proof.",
                },
                {
                  q: "What is the grace period on a credit card?",
                  a: "The grace period is typically 20-50 days during which you don't pay interest if you pay your full bill by the due date.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply for a Credit Card?</h2>
            <p className="text-blue-100 mb-6">
              Explore best credit cards with cashback, travel benefits, and rewards matching your lifestyle
            </p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Compare Credit Cards
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
