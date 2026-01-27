import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, Percent, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Financial Tools & Calculators | EMI, Affordability, ROI | BuyNswipe",
  description: "Use our free financial tools to calculate EMI, check affordability, compare interest rates, and plan your investments.",
  keywords: ["EMI calculator", "affordability calculator", "interest rate comparison", "ROI calculator", "financial tools"],
}

export default function ToolsHub() {
  const tools = [
    {
      title: "EMI Calculator",
      description: "Calculate monthly EMI for personal loans, home loans, car loans, and more",
      href: "/tools/emi-calculator",
      icon: Calculator,
      features: ["Multiple loan types", "Real-time calculation", "Amortization schedule", "PDF download"],
    },
    {
      title: "Affordability Calculator",
      description: "Check how much you can borrow based on your income and existing obligations",
      href: "/tools/affordability-calculator",
      icon: BarChart3,
      features: ["Income-based calculation", "Debt ratio analysis", "Instant results", "Recommendations"],
    },
    {
      title: "Interest Rate Comparison",
      description: "Compare real-time interest rates across 50+ banks and NBFCs",
      href: "/tools/interest-rate-comparison",
      icon: Percent,
      features: ["Live rates", "Bank comparison", "Rate trends", "Apply now links"],
    },
    {
      title: "Investment ROI Calculator",
      description: "Calculate returns on your investments with compound interest visualization",
      href: "/tools/investment-roi-calculator",
      icon: TrendingUp,
      features: ["Compound interest", "Inflation adjustment", "Goal planning", "Chart visualization"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Tools</h1>
          <p className="text-xl text-blue-100">
            Free calculators and comparison tools to help you make smart financial decisions
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-8 h-8 text-blue-600" />
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{tool.description}</p>
                    <div className="mb-6">
                      <p className="font-semibold text-gray-900 mb-3">Features:</p>
                      <ul className="space-y-2">
                        {tool.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={tool.href}>
                        Use Tool
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Tools Help</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Make Better Decisions</h3>
                <p className="text-gray-700">
                  Calculate exact EMI, affordability, and returns before applying for loans or investments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Save Time & Money</h3>
                <p className="text-gray-700">
                  Compare rates instantly and find the best products for your financial situation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Plan Your Future</h3>
                <p className="text-gray-700">
                  Use our tools to plan investments, calculate savings goals, and visualize your financial growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
