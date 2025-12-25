import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe Case Studies | Success Stories | Restaurant & Retail ROI",
  description:
    "Real-world success stories from restaurants and retail stores using BuyNswipe POS and payment solutions. See measurable ROI and growth results.",
  keywords: [
    "case studies",
    "success stories",
    "restaurant POS case study",
    "retail POS ROI",
    "BuyNswipe success",
    "payment solution ROI",
  ],
}

const caseStudies = [
  {
    icon: TrendingUp,
    title: "Restaurant Transaction Growth",
    description: "Fine dining restaurant increased transaction volume by 45% with BuyNswipe POS",
    href: "/case-studies/restaurant-success-story",
    metrics: ["45% Revenue Growth", "60% Faster Billing", "90% Customer Satisfaction"],
  },
  {
    icon: Store,
    title: "Retail Chain Expansion",
    description: "Multi-location retail store scaled operations across 5 stores with unified POS",
    href: "/case-studies/retail-store-success",
    metrics: ["5 New Locations", "35% Inventory Reduction", "25% Cost Savings"],
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl text-blue-100">Real results from businesses using BuyNswipe solutions</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.title} href={study.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <study.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {study.metrics.map((metric) => (
                        <div key={metric} className="text-sm font-semibold text-blue-600">
                          ✓ {metric}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Read Case Study</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Businesses Trust BuyNswipe</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: "500+", label: "Businesses Served" },
              { number: "₹50 Cr+", label: "Annual Transactions" },
              { number: "99.9%", label: "Uptime Guarantee" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
