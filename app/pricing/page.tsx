import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe Pricing | Transparent Pricing for POS & Credit Solutions",
  description:
    "Transparent, flexible pricing for restaurant POS, retail management, credit marketplace, and payment solutions. Choose the plan that fits your business.",
  keywords: [
    "BuyNswipe pricing",
    "POS pricing",
    "payment gateway pricing",
    "credit marketplace pricing",
    "restaurant POS cost",
  ],
}

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for single-location businesses",
    price: "₹2,999",
    period: "per month",
    features: ["1 POS Terminal", "Basic Inventory", "Payment Processing", "Daily Sales Report", "Email Support"],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "₹7,999",
    period: "per month",
    popular: true,
    features: [
      "Up to 3 POS Terminals",
      "Advanced Inventory",
      "Multi-User Access",
      "Real-time Analytics",
      "Kitchen Display System",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited POS Terminals",
      "Full Integration Suite",
      "Custom Development",
      "Dedicated Account Manager",
      "API Access",
      "24/7 Support",
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl text-blue-100">Choose the plan that fits your business needs</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={tier.popular ? "border-2 border-blue-600 md:scale-105" : ""}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-600 ml-2">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Processing Rates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { method: "Credit Card", rate: "1.8% + ₹5" },
              { method: "Debit Card", rate: "0.9% + ₹5" },
              { method: "UPI", rate: "₹0 + 0.9%" },
            ].map((item) => (
              <Card key={item.method}>
                <CardHeader>
                  <CardTitle>{item.method}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600">{item.rate}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Credit Marketplace Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Personal Loans",
                pricing: "1.2% - 2.5% origination fee",
                desc: "Based on loan amount and credit score",
              },
              {
                title: "Credit Cards",
                pricing: "No cost to apply",
                desc: "Revenue from card issuer partnerships",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-2xl font-bold text-blue-600">{item.pricing}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">All Plans Include</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              "Free onboarding & training",
              "99.9% uptime guarantee",
              "Data security & encryption",
              "Regular updates & features",
              "Transaction reports",
              "Customer support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center">
                <Check className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
