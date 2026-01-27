import type { Metadata } from "next"
import { Store, Zap, Users, DollarSign, BarChart3, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Merchant Services | Payment Settlement | Wholesale Banking | BuyNswipe",
  description:
    "Complete merchant payment solutions. POS terminals, payment gateway, instant settlement, and wholesale banking services for retail and online merchants.",
  keywords: [
    "merchant services",
    "payment merchant",
    "settlement account",
    "wholesale banking",
    "merchant banking",
    "payment aggregator",
    "transaction processing",
  ],
}

export default function MerchantServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Merchant Payment Solutions</h1>
          <p className="text-xl text-emerald-100 mb-8 text-balance">
            Complete ecosystem for accepting, processing, and settling payments
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Partner With Us</Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Merchant Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Store,
                title: "POS Solutions",
                desc: "mPOS terminals and cloud-based checkout systems",
              },
              {
                icon: DollarSign,
                title: "Instant Settlement",
                desc: "Real-time fund settlement to your account",
              },
              {
                icon: Zap,
                title: "Payment Processing",
                desc: "Accept all payment methods securely",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                desc: "Real-time sales and transaction reports",
              },
              {
                icon: Users,
                title: "Customer Support",
                desc: "24/7 dedicated merchant support",
              },
              {
                icon: Shield,
                title: "Secure",
                desc: "PCI DSS compliant and encrypted",
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <service.icon className="w-8 h-8 text-emerald-600 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Competitive Merchant Rates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Retail", rate: "1.5-2%", volume: "No minimum" },
              { type: "E-commerce", rate: "1.2-1.8%", volume: "Higher volume" },
              { type: "Aggregator", rate: "0.8-1.2%", volume: "Large volume" },
            ].map((pricing) => (
              <Card key={pricing.type}>
                <CardHeader>
                  <CardTitle>{pricing.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Transaction Rate</p>
                    <p className="text-2xl font-bold text-emerald-600">{pricing.rate}</p>
                  </div>
                  <p className="text-sm text-gray-600">{pricing.volume}</p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Become a BuyNswipe Partner</h2>
          <p className="text-xl mb-8 text-emerald-100">Grow your business with our merchant solutions</p>
          <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Partner Now</Button>
        </div>
      </section>
    </main>
  )
}
