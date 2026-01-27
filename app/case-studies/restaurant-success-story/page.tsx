import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Restaurant Case Study | 45% Revenue Growth | BuyNswipe POS",
  description:
    "How a fine dining restaurant increased transaction volume by 45%, reduced billing time by 60%, and improved customer satisfaction to 90% with BuyNswipe POS system.",
  keywords: [
    "restaurant POS case study",
    "restaurant revenue growth",
    "POS ROI",
    "restaurant success story",
    "fine dining POS",
  ],
}

export default function RestaurantCaseStudy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fine Dining Restaurant Success Story</h1>
          <p className="text-xl text-orange-100">How Rajdhani Restaurant increased transactions by 45%</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-4">
              Rajdhani, a premium fine dining restaurant in Delhi, was struggling with manual billing processes, long
              customer wait times, and inability to track real-time inventory. Their legacy POS system was outdated and
              couldn't integrate with their delivery platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, label: "Billing Time", value: "45 mins avg" },
              { icon: Users, label: "Table Turnover", value: "2.5x per day" },
              { icon: TrendingUp, label: "Monthly Revenue", value: "₹25 Lakhs" },
            ].map((metric) => (
              <Card key={metric.label}>
                <CardHeader>
                  <metric.icon className="w-8 h-8 text-orange-600 mb-2" />
                  <CardTitle className="text-sm">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-600">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-gray-700 mb-4">
              Rajdhani implemented BuyNswipe's Restaurant POS system with table management, kitchen display, and
              integrated payment processing. The system connected with their delivery platforms and provided real-time
              inventory tracking.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-green-900">Results After 6 Months</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { metric: "45%", label: "Transaction Volume Growth" },
                { metric: "60%", label: "Faster Billing Process" },
                { metric: "90%", label: "Customer Satisfaction" },
                { metric: "₹36.25 Lakhs", label: "New Monthly Revenue" },
                { metric: "35%", label: "Food Waste Reduction" },
                { metric: "3.5x", label: "Daily Table Turnover" },
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
                "Smart table allocation",
                "Kitchen display system",
                "Real-time inventory tracking",
                "Integrated payment processing",
                "Delivery platform integration",
                "Staff performance analytics",
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
              "BuyNswipe transformed our restaurant operations. We're processing 45% more transactions while our staff
              is less stressed. The system paid for itself in 3 months!"
            </p>
            <p className="font-semibold text-gray-800">— Rajesh Kumar, Owner, Rajdhani Restaurant</p>
          </div>

          <div className="text-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Get Restaurant POS Like Rajdhani
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
