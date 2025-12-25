import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed, Clock, Users, TrendingUp, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Restaurant POS System | Table Management | Order Tracking | BuyNswipe",
  description:
    "Complete restaurant POS solution with table management, kitchen display, delivery integration, and real-time analytics for dine-in and delivery restaurants.",
  keywords: [
    "restaurant POS",
    "food service POS",
    "table management system",
    "kitchen display system",
    "restaurant payment",
    "order management",
    "delivery integration",
    "restaurant billing",
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BuyNswipe Restaurant POS System",
  description: "Complete POS solution for restaurants",
}

export default function RestaurantSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurant POS System</h1>
            <p className="text-xl text-orange-100 mb-8">
              Complete solution for dine-in, delivery, and takeout restaurants
            </p>
            <Button className="bg-white text-orange-600 hover:bg-orange-50">Get Restaurant POS</Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Table Management", desc: "Smart table allocation and guest tracking" },
                { icon: Clock, title: "Kitchen Display", desc: "Real-time order tracking in kitchen" },
                { icon: TrendingUp, title: "Analytics", desc: "Sales, inventory, and staff performance" },
                { icon: UtensilsCrossed, title: "Menu Management", desc: "Easy menu updates and pricing" },
                { icon: Zap, title: "Fast Billing", desc: "Quick checkout with bill printing" },
                { icon: Shield, title: "Secure Payments", desc: "All payment methods supported" },
              ].map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <feature.icon className="w-8 h-8 text-orange-600 mb-2" />
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Restaurants Choose BuyNswipe</h2>
            <div className="space-y-4">
              {[
                "Increase order accuracy and reduce errors",
                "Speed up table turnover and improve customer satisfaction",
                "Track inventory in real-time and reduce food waste",
                "Access detailed sales analytics and reports",
                "Integrate with delivery platforms seamlessly",
                "Manage staff and their performance efficiently",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
            <p className="text-xl mb-8 text-orange-100">Get set up in 24 hours with dedicated support</p>
            <Button className="bg-white text-orange-600 hover:bg-orange-50">Get Restaurant POS</Button>
          </div>
        </section>
      </main>
    </>
  )
}
