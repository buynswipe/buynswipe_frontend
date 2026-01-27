import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, CreditCard, Shield, TrendingUp, Zap, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "E-commerce Payment Gateway | Online Payment Processing | BuyNswipe",
  description:
    "Complete e-commerce payment solution with payment gateway, order management, subscription billing, and fraud protection for online stores.",
  keywords: [
    "e-commerce payment",
    "payment gateway",
    "online payment",
    "order management",
    "subscription billing",
    "fraud protection",
    "payment processing",
  ],
}

export default function EcommerceSolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">E-commerce Payment Gateway</h1>
          <p className="text-xl text-blue-100 mb-8">Seamless payment processing for online stores and marketplaces</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Payment Gateway</Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">E-commerce Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: "Payment Gateway", desc: "Accept all payment methods" },
              { icon: ShoppingCart, title: "Order Management", desc: "Track and manage all orders" },
              { icon: TrendingUp, title: "Subscription Billing", desc: "Recurring payment support" },
              { icon: Shield, title: "Fraud Protection", desc: "Advanced fraud detection" },
              { icon: Zap, title: "Instant Settlement", desc: "Quick payouts to your account" },
              { icon: Globe, title: "Multi-currency", desc: "Support for global transactions" },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why E-commerce Businesses Choose BuyNswipe</h2>
          <div className="space-y-4">
            {[
              "Accept payments from all major cards and wallets",
              "Reduce cart abandonment with smooth checkout",
              "Process refunds instantly and automatically",
              "Manage subscriptions and recurring billing",
              "Get detailed transaction reports and analytics",
              "Protect customer data with PCI DSS compliance",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Accepting Payments Online Today</h2>
          <p className="text-xl mb-8 text-blue-100">Integration takes less than 1 hour</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Payment Gateway</Button>
        </div>
      </section>
    </main>
  )
}
