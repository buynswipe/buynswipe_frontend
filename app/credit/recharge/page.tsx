import type { Metadata } from "next"
import { Zap, Clock, Shield, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mobile Recharge Online | Instant DTH & Data Recharge | BuyNswipe",
  description:
    "Instant mobile recharge online for all operators. DTH recharge, data plans, and prepaid subscriptions. 24/7 availability with zero charges. Recharge now on BuyNswipe.",
  keywords: [
    "mobile recharge online",
    "instant mobile recharge",
    "DTH recharge",
    "airtel recharge",
    "jio recharge",
    "vodafone recharge",
    "data recharge",
    "prepaid recharge",
    "online recharge",
    "fast recharge",
    "unlimited plans",
    "data plans",
    "mobile plans",
    "broadband recharge",
  ],
  openGraph: {
    title: "Mobile Recharge Online | Instant DTH Recharge | BuyNswipe",
    description:
      "Recharge your mobile, DTH, and broadband instantly. All operators supported. Zero transaction charges.",
    url: "https://buynswipe.com/credit/recharge",
    type: "website",
  },
}

export default function RechargePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Instant Mobile & DTH Recharge</h1>
          <p className="text-xl text-orange-100 mb-8">
            Recharge your mobile, DTH, and broadband in seconds. All operators supported. Zero charges.
          </p>
          <Button className="bg-white text-orange-600 px-8 py-3 hover:bg-orange-50">Recharge Now</Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Instant", desc: "Recharge in seconds" },
              { icon: Clock, title: "24/7", desc: "Always available" },
              { icon: Shield, title: "Secure", desc: "100% safe" },
              { icon: DollarSign, title: "Free", desc: "Zero charges" },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardContent className="pt-6 text-center">
                  <feature.icon className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operators */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Supported Operators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Jio", plans: "Unlimited data, calls, SMS" },
              { name: "Airtel", plans: "Prepaid, postpaid, broadband" },
              { name: "Vodafone", plans: "All plan types available" },
              { name: "BSNL", plans: "Landline, mobile, broadband" },
              { name: "Tata Sky", plans: "DTH recharge & subscriptions" },
              { name: "Dish TV", plans: "DTH packages available" },
            ].map((operator) => (
              <Card key={operator.name}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-orange-600 mb-2">{operator.name}</h3>
                  <p className="text-gray-600 text-sm">{operator.plans}</p>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Recharge {operator.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How to Recharge</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Select Service", desc: "Choose mobile, DTH, or broadband" },
              { step: "2", title: "Enter Number", desc: "Input your mobile or subscriber ID" },
              { step: "3", title: "Choose Plan", desc: "Select from available plans" },
              { step: "4", title: "Make Payment", desc: "Pay securely via UPI/card/wallet" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is online recharge safe?", a: "Yes, 100% secure with bank-level encryption." },
              { q: "Is there any hidden charge?", a: "No, completely free. We don't charge any fee." },
              { q: "How quickly is recharge activated?", a: "Usually within 30 seconds to 5 minutes." },
              { q: "Can I recharge for someone else?", a: "Yes, just enter their number and pay." },
            ].map((item, i) => (
              <details key={i} className="bg-white p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                <summary className="font-semibold">{item.q}</summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Recharge?</h2>
          <p className="text-lg mb-8">Get instant activation in seconds</p>
          <Button className="bg-white text-orange-600 px-8 py-3 hover:bg-orange-50">Start Recharging</Button>
        </div>
      </section>
    </main>
  )
}
