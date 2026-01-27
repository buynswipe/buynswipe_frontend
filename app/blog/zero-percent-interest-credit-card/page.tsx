import type { Metadata } from "next"
import Link from "next/link"
import { Zap, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "0% Interest Credit Card - Zero EMI & Balance Transfer | BuyNswipe",
  description:
    "What is 0% interest credit card? Learn about 0% EMI, 0% balance transfer, 0% purchase offers. Best zero interest credit cards in India.",
  keywords: [
    "0% interest credit card",
    "zero interest credit card",
    "0% balance transfer",
    "0% emi credit card",
    "0% purchase credit card",
    "interest free credit card",
    "zero interest rate card",
  ],
}

export default function ZeroInterestCreditCardPage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Financial Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">0% Interest Credit Cards - Complete Guide</h1>
          <p className="text-xl text-green-100">
            Learn about 0% EMI, 0% balance transfer, and interest-free credit card offers
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a 0% Interest Credit Card?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong>0% interest credit card</strong> is a special offer where the card issuer charges zero percent
              interest on specific types of transactions for a limited period. This can apply to purchases, balance
              transfers, or EMI conversions, making borrowing completely interest-free during the promotional period.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of 0% Interest Offers</h2>
            <div className="space-y-6">
              {[
                {
                  title: "0% EMI on Purchases",
                  desc: "Convert any purchase into monthly installments with zero interest. Example: Buy a ₹60,000 laptop in 12 EMIs of ₹5,000 with 0% interest.",
                  benefits: ["No extra charges", "Flexible tenure (3-24 months)", "Available at partner merchants"],
                },
                {
                  title: "0% Balance Transfer",
                  desc: "Transfer your existing credit card debt to a 0% card without interest for 3-12 months, helping you pay off debt faster.",
                  benefits: ["Escape high interest rates", "Consolidate multiple debts", "Fixed repayment period"],
                },
                {
                  title: "0% Purchase Offer",
                  desc: "Make new purchases on 0% interest for 20-50 days, extending your interest-free period beyond the standard grace period.",
                  benefits: ["Extended payment window", "No EMI conversion needed", "Complete interest waiver"],
                },
              ].map((offer, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    {offer.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{offer.desc}</p>
                  <ul className="space-y-2">
                    {offer.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does 0% EMI Work?</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Make a Purchase",
                  desc: "Buy anything at a merchant offering 0% EMI (electronics, furniture, appliances, etc.)",
                },
                {
                  step: 2,
                  title: "Choose EMI Tenure",
                  desc: "Select 3, 6, 9, or 12-month EMI plan - typically 3 to 24 months available",
                },
                {
                  step: 3,
                  title: "Zero Interest Charged",
                  desc: "Amount is divided equally - if ₹12,000 in 12 EMIs = ₹1,000/month with 0% interest",
                },
                {
                  step: 4,
                  title: "Pay Monthly EMI",
                  desc: "Fixed monthly payment with no additional charges or hidden fees",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
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

          <div className="bg-yellow-50 rounded-lg p-8 mb-12 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              Important Terms & Conditions
            </h2>
            <ul className="space-y-3">
              {[
                "Processing fee may apply (typically ₹0-2% of EMI amount)",
                "Offer is valid only at partner merchants",
                "Full payment is mandatory by due date to avoid interest",
                "Missing EMI payment activates full interest from purchase date",
                "Offer validity varies - usually 3-24 months",
                "Cannot combine 0% offers with other discounts",
              ].map((term) => (
                <li key={term} className="flex items-start gap-3 text-gray-700">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best 0% Interest Credit Cards in India</h2>
            <div className="space-y-4">
              {[
                {
                  name: "HDFC Bank MoneyBack Card",
                  offers: "0% EMI on purchases, 1.5% cashback",
                  tenure: "3-12 months",
                },
                {
                  name: "SBI SimpliClick Card",
                  offers: "0% EMI, 5% online cashback",
                  tenure: "Up to 24 months",
                },
                {
                  name: "Axis Bank Flipkart Card",
                  offers: "0% EMI, 5% cashback",
                  tenure: "3-12 months",
                },
                {
                  name: "ICICI Bank Amazon Pay Card",
                  offers: "0% EMI, 5% Amazon cashback",
                  tenure: "3-12 months",
                },
              ].map((card) => (
                <div key={card.name} className="p-4 border rounded-lg hover:shadow-md transition">
                  <h3 className="font-bold text-gray-900">{card.name}</h3>
                  <p className="text-sm text-gray-600">Offers: {card.offers}</p>
                  <p className="text-sm text-green-600">Tenure: {card.tenure}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: 0% Interest Credit Cards</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is 0% EMI really interest-free?",
                  a: "Yes, during the promotional period, no interest is charged. However, a processing fee of 0-2% may apply.",
                },
                {
                  q: "What happens if I miss an EMI payment?",
                  a: "Interest is calculated from the original purchase date at the card's regular interest rate, typically 2-4% per month.",
                },
                {
                  q: "Can I pay 0% EMI in full before tenure ends?",
                  a: "Yes, you can prepay without any penalty charges and save the remaining EMIs.",
                },
                {
                  q: "Is 0% balance transfer truly interest-free?",
                  a: "Yes, but a one-time balance transfer fee (1-3%) is charged. After the promotional period, regular interest applies.",
                },
                {
                  q: "Which merchants offer 0% EMI?",
                  a: "Electronics retailers, furniture stores, appliance shops, and online marketplaces typically offer 0% EMI.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Find Your Best 0% Interest Credit Card</h2>
            <p className="text-green-100 mb-6">Compare top cards with 0% EMI and interest-free offers</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition"
            >
              Compare Cards Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
