import type { Metadata } from "next"
import { Store, Smartphone, Monitor, CreditCard, TrendingUp, CheckCircle, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "POS System for Retail | mPOS | Cloud POS | POS Terminal | BuyNswipe",
  description:
    "Complete POS solutions for retail stores. mPOS terminal, cloud-based POS software, and traditional point of sale systems. Accept all payment methods securely.",
  keywords: [
    "POS system",
    "point of sale",
    "mPOS",
    "mobile POS",
    "cloud POS",
    "POS terminal",
    "retail POS",
    "payment terminal",
    "POS software",
    "card payment",
    "digital payment",
    "POS machine",
    "checkout system",
    "retail solutions",
  ],
  openGraph: {
    title: "POS System for Retail Merchants | BuyNswipe",
    description: "Complete point of sale solutions for retail stores",
    url: "https://buynswipe.com/payment-solutions/pos-systems",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BuyNswipe POS System",
  description: "Complete point of sale solution for retail merchants",
  provider: { "@type": "Organization", name: "BuyNswipe" },
}

export default function POSSystemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">POS Systems for Modern Retail</h1>
            <p className="text-xl text-purple-100 mb-8 text-balance">
              Accept all payment methods with secure, reliable point of sale solutions
            </p>
            <Button className="bg-white text-purple-600 hover:bg-purple-50">Get POS Terminal</Button>
          </div>
        </section>

        {/* POS Types */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our POS Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile POS",
                  desc: "Lightweight terminal for on-the-go payments",
                  features: ["Portable", "WiFi/4G", "Battery powered"],
                  price: "₹5,000",
                },
                {
                  icon: Monitor,
                  title: "Cloud POS",
                  desc: "Web-based solution for inventory management",
                  features: ["Real-time sync", "Multi-location", "Analytics"],
                  price: "₹999/mo",
                },
                {
                  icon: Store,
                  title: "Traditional POS",
                  desc: "Complete counter solution with receipt printer",
                  features: ["Full system", "Receipt printer", "Secure"],
                  price: "₹15,000",
                },
              ].map((pos) => (
                <Card key={pos.title} className="hover:shadow-lg transition">
                  <CardHeader>
                    <pos.icon className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle>{pos.title}</CardTitle>
                    <CardDescription>{pos.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        {pos.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <div className="text-2xl font-bold text-purple-600">{pos.price}</div>
                      <Button className="w-full">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Payment Methods Supported</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {["Credit Card", "Debit Card", "UPI", "Wallet", "BNPL", "EMI", "QR Code", "NFC"].map((method) => (
                <div key={method} className="bg-white p-4 rounded-lg text-center font-semibold">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Upgrade to BuyNswipe POS?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Instant Settlement", desc: "Money reaches your account in minutes" },
                { icon: Shield, title: "Secure", desc: "PCI DSS compliant and encrypted transactions" },
                { icon: TrendingUp, title: "Analytics", desc: "Real-time sales and transaction reports" },
                { icon: CreditCard, title: "All Cards", desc: "Accept all credit and debit cards" },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-lg border">
                  <benefit.icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Checkout?</h2>
            <p className="text-xl mb-8 text-purple-100">Get a POS system set up in 24 hours</p>
            <Button className="bg-white text-purple-600 hover:bg-purple-50">Get POS Now</Button>
          </div>
        </section>
      </main>
    </>
  )
}
