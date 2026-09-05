import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap, BarChart3, Download, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Investor Relations | BuyNswipe Acquisition Opportunity",
  description:
    "BuyNswipe is available for strategic acquisition. Learn about our market opportunity, financial metrics, growth trajectory, and acquisition details.",
  keywords: [
    "investor relations",
    "BuyNswipe acquisition",
    "fintech investment",
    "startup metrics",
    "financial performance",
  ],
}

export default function InvestorRelationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Investment Opportunity</h1>
          <p className="text-2xl text-blue-100 mb-8">Strategic acquisition of BuyNswipe fintech platform</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="#metrics"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              View Metrics
            </Link>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Download Teaser
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Acquire BuyNswipe?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Proven Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Consistent month-over-month growth with expanding user base and transaction volume across payment and
                  credit segments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Access to underserved segments in digital payments and credit marketplace with massive TAM in fintech
                  lending.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Modern, scalable technology platform built on Next.js and cloud infrastructure, ready for rapid
                  scaling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Revenue Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Multiple revenue streams from affiliates, merchant services, loan processing fees, and transaction
                  commissions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="metrics" className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Users Active", value: "100K+" },
              { label: "Monthly Transactions", value: "50K+" },
              { label: "Total GMV", value: "₹10Cr+" },
              { label: "Monthly Growth", value: "15-20%" },
              { label: "Affiliate Links", value: "35+" },
              { label: "Available Products", value: "36+" },
            ].map((metric) => (
              <Card key={metric.label}>
                <CardContent className="pt-8 text-center">
                  <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                  <p className="text-4xl font-bold text-blue-600">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link
            href="/investor-relations/financial-metrics"
            className="flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-800 py-4"
          >
            View Detailed Financial Metrics <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Regulatory & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Government Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Startup India (DPIIT) Recognition</li>
                  <li>✓ Clean ROC Filing Status</li>
                  <li>✓ Trademark Registration (™)</li>
                  <li>✓ Premium Domain Assets</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ RBI Guidelines Adherence</li>
                  <li>✓ AEPS Security Standards</li>
                  <li>✓ Data Protection Compliance</li>
                  <li>✓ Regular Audits & Reviews</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Link
            href="/compliance/rbi-regulations"
            className="flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-800 py-4"
          >
            View Full Compliance Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Acquire?</h2>
          <p className="text-xl text-blue-100 mb-8">
            BuyNswipe represents a unique opportunity to acquire a profitable, growing fintech platform with strong
            regulatory standing and significant growth potential.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Teaser
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Contact Founder
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
