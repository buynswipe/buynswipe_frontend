import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, Package, Users, BarChart3, Zap, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Retail POS System | Inventory Management | Sales Analytics | BuyNswipe",
  description:
    "Complete retail POS solution with inventory management, multi-location support, staff management, and real-time sales analytics for retail stores.",
  keywords: [
    "retail POS",
    "inventory management",
    "retail payment system",
    "point of sale",
    "multi-location",
    "sales analytics",
    "retail billing",
  ],
}

export default function RetailSolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail POS System</h1>
          <p className="text-xl text-green-100 mb-8">
            Inventory management and payment processing for modern retail stores
          </p>
          <Button className="bg-white text-green-600 hover:bg-green-50">Get Retail POS</Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Retail Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: "Inventory Sync", desc: "Real-time stock tracking across locations" },
              { icon: Store, title: "Multi-Location", desc: "Manage multiple stores from one dashboard" },
              { icon: Users, title: "Staff Management", desc: "Employee access control and performance" },
              { icon: BarChart3, title: "Sales Reports", desc: "Daily, weekly, and monthly analytics" },
              { icon: Zap, title: "Fast Checkout", desc: "Barcode scanning and quick billing" },
              { icon: Lock, title: "Secure", desc: "PCI DSS compliant payment processing" },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-green-600 mb-2" />
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
          <h2 className="text-3xl font-bold mb-8 text-center">Why Retail Stores Choose BuyNswipe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reduce inventory wastage and shrinkage",
              "Identify top-selling products and adjust stock",
              "Manage multiple locations from one dashboard",
              "Train staff quickly with simple interface",
              "Offer loyalty programs and discounts",
              "Get real-time sales reports anytime",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Upgrade Your Retail Store Today</h2>
          <p className="text-xl mb-8 text-green-100">Setup in 24 hours with complete training</p>
          <Button className="bg-white text-green-600 hover:bg-green-50">Get Retail POS</Button>
        </div>
      </section>
    </main>
  )
}
