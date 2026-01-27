import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed, Store, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Industry Solutions | Restaurant POS | Retail | E-commerce | BuyNswipe",
  description:
    "Tailored payment and POS solutions for restaurants, retail stores, and e-commerce businesses. Increase sales and streamline operations with BuyNswipe.",
  keywords: [
    "restaurant POS",
    "retail solutions",
    "e-commerce payment",
    "business solutions",
    "industry specific",
    "restaurant payment",
    "point of sale",
  ],
}

const solutions = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Solutions",
    description: "Complete POS and payment system for dine-in, delivery, and takeout",
    href: "/solutions/restaurants",
    features: ["Table Management", "Order Tracking", "Kitchen Display", "Delivery Integration"],
    cta: "Explore Restaurant POS",
  },
  {
    icon: Store,
    title: "Retail Solutions",
    description: "Inventory management and payment processing for retail stores",
    href: "/solutions/retail",
    features: ["Inventory Sync", "Multi-location", "Staff Management", "Sales Analytics"],
    cta: "View Retail Solutions",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Seamless payment gateway for online stores and marketplaces",
    href: "/solutions/ecommerce",
    features: ["Payment Gateway", "Order Management", "Subscription Billing", "Fraud Protection"],
    cta: "Get E-commerce POS",
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry-Specific Solutions</h1>
          <p className="text-xl text-blue-100">Payment and POS solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link key={solution.title} href={solution.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <solution.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">{solution.cta}</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Common Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              "Restaurants",
              "Retail Stores",
              "Cafes",
              "Fast Food",
              "Supermarkets",
              "Boutiques",
              "Pharmacies",
              "Gas Stations",
            ].map((industry) => (
              <div key={industry} className="bg-white p-4 rounded-lg shadow">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
