import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, TrendingDown, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Retail Store Case Study | 5 Store Expansion | BuyNswipe POS",
  description:
    "How a retail fashion chain expanded from 1 to 5 stores while reducing inventory costs by 35% and saving 25% operational costs using BuyNswipe unified POS system.",
  keywords: [
    "retail POS case study",
    "retail expansion",
    "inventory management ROI",
    "multi-location POS",
    "retail success story",
  ],
}

export default function RetailCaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail Chain Expansion Success</h1>
          <p className="text-xl text-purple-100">How StyleHub Fashion scaled from 1 to 5 stores with unified POS</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-4">
              StyleHub Fashion operated a single flagship store with manual inventory tracking and spreadsheet-based
              operations. Managing growth and inventory across multiple locations seemed impossible without a unified
              system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Store, label: "Store Locations", value: "1 Store" },
              { icon: TrendingDown, label: "Annual Inventory Loss", value: "18%" },
              { icon: MapPin, label: "Monthly Revenue", value: "₹20 Lakhs" },
            ].map((metric) => (
              <Card key={metric.label}>
                <CardHeader>
                  <metric.icon className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle className="text-sm">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-gray-700 mb-4">
              StyleHub implemented BuyNswipe's unified retail POS system with centralized inventory management,
              multi-location support, and detailed analytics. This allowed them to confidently expand while maintaining
              operational efficiency.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-green-900">Results After 12 Months</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { metric: "5", label: "Store Locations (4 new)" },
                { metric: "35%", label: "Inventory Cost Reduction" },
                { metric: "₹75 Lakhs", label: "Total Monthly Revenue" },
                { metric: "25%", label: "Operational Cost Savings" },
                { metric: "8%", label: "Inventory Loss (down from 18%)" },
                { metric: "3.75x", label: "Revenue Growth" },
              ].map((result) => (
                <div key={result.label} className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                  <div className="text-gray-700 font-semibold">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Key Features Used</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Centralized inventory management",
                "Multi-location stock sync",
                "Unified payment processing",
                "Staff performance tracking",
                "Detailed sales analytics",
                "Automatic low-stock alerts",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-white p-4 border border-gray-200 rounded">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-lg italic text-gray-700 mb-4">
              "BuyNswipe made expansion possible. We went from 1 to 5 stores in a year with better control and
              visibility than we had before. The system scales with our business!"
            </p>
            <p className="font-semibold text-gray-800">— Priya Sharma, Founder, StyleHub Fashion</p>
          </div>

          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Get Multi-Store POS System
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
