import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, TrendingUp, Target, Wallet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Personal Finance Tips & Money Management Guide | BuyNswipe Blog",
  description:
    "10 proven personal finance tips to build wealth, save money, and achieve financial goals. Expert money management strategies for 2025.",
  keywords: [
    "personal finance tips",
    "money management tips",
    "financial tips",
    "save money tips",
    "wealth building",
    "financial goals",
  ],
}

const tips = [
  {
    icon: Target,
    title: "Create Clear Financial Goals",
    description: "Define short-term (1-3 years) and long-term (10+ years) goals",
    timeline: "Month 1",
    impact: "15% higher savings rate",
  },
  {
    icon: Wallet,
    title: "Build an Emergency Fund",
    description: "Save 6-12 months of expenses for financial security",
    timeline: "6-12 months",
    impact: "100% debt-free living",
  },
  {
    icon: TrendingUp,
    title: "Invest in Diversified Assets",
    description: "Allocate across stocks, bonds, real estate, and gold",
    timeline: "Ongoing",
    impact: "8-12% annual returns",
  },
]

export default function PersonalFinanceTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Financial Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">10 Personal Finance Tips for 2025</h1>
          <p className="text-xl text-blue-100">
            Proven strategies to build wealth, save money, and achieve your financial goals
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-blue max-w-none mb-16">
            <p>
              Personal finance management is one of the most important skills for achieving financial independence.
              Whether you're looking to build wealth, pay off debt, or achieve specific financial goals, these 10 proven
              tips will help you take control of your money.
            </p>
          </div>

          {/* Tips Grid */}
          <div className="space-y-6 mb-16">
            {tips.map((tip) => (
              <Card key={tip.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <tip.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 mb-4">{tip.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Timeline: {tip.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700">Impact: {tip.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How much should I save monthly?",
                  a: "Financial experts recommend saving 20% of your income. However, start with 10% if you're just beginning and increase gradually.",
                },
                {
                  q: "Is investing important for wealth building?",
                  a: "Yes. Investing helps your money grow through compound interest. A 30-year investment with 8% annual returns can triple your wealth.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
