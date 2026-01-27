import type { Metadata } from "next"
import { Zap, Send, Globe, Shield, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Digital Payment Methods | UPI | NEFT | RTGS | IMPS | BuyNswipe",
  description:
    "Complete guide to digital payment methods. UPI instant payment, NEFT transfers, RTGS for large amounts, IMPS, and more. Compare speeds and charges.",
  keywords: [
    "digital payment",
    "UPI payment",
    "NEFT",
    "RTGS",
    "IMPS",
    "digital money transfer",
    "instant payment",
    "bank transfer",
    "payment gateway",
  ],
}

export default function DigitalPaymentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Digital Payment Methods in India</h1>
          <p className="text-xl text-indigo-100 mb-8 text-balance">
            Fast, secure, and instant payment options for individuals and businesses
          </p>
        </div>
      </section>

      {/* Payment Methods Comparison */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Methods Comparison</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "UPI",
                time: "Instant",
                limit: "₹1 Lakh/txn",
                charges: "Free",
                icon: Zap,
              },
              {
                name: "IMPS",
                time: "10-15 mins",
                limit: "₹10 Lakh/txn",
                charges: "₹5-15",
                icon: Send,
              },
              {
                name: "NEFT",
                time: "30-60 mins",
                limit: "No limit",
                charges: "₹2.50-7.50",
                icon: Globe,
              },
              {
                name: "RTGS",
                time: "2-30 mins",
                limit: "₹2L+ only",
                charges: "₹10-55",
                icon: TrendingUp,
              },
            ].map((method) => (
              <Card key={method.name}>
                <CardHeader>
                  <method.icon className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle>{method.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Speed</p>
                    <p className="font-semibold">{method.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Max Limit</p>
                    <p className="font-semibold">{method.limit}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Charges</p>
                    <p className="font-semibold text-green-600">{method.charges}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Digital Payment Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Secure", desc: "Bank-grade encryption" },
              { icon: CheckCircle, title: "Verified", desc: "RBI regulated" },
              { icon: Zap, title: "Instant", desc: "Real-time settlement" },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg text-center">
                <feature.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Digital Payments Today</h2>
        <Button className="bg-white text-indigo-600 hover:bg-indigo-50">Get Started</Button>
      </section>
    </main>
  )
}
