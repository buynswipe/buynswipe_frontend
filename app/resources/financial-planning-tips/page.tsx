import type { Metadata } from "next"
import { Target, PieChart, TrendingUp, Shield, Home, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Financial Planning Tips - Create Your Wealth Plan | BuyNswipe",
  description:
    "Master financial planning with expert tips. Learn goal setting, budgeting, saving, investing, and retirement planning strategies.",
  keywords: [
    "financial planning",
    "financial planning tips",
    "wealth planning",
    "retirement planning",
    "investment planning",
    "goal setting",
    "financial goals",
    "long-term planning",
  ],
  openGraph: {
    title: "Financial Planning Tips - Create Your Wealth Plan",
    description: "Expert financial planning strategies for building long-term wealth and security.",
    url: "https://buynswipe.com/resources/financial-planning-tips",
  },
}

export default function FinancialPlanningPage() {
  const steps = [
    {
      icon: Target,
      title: "Set Clear Goals",
      desc: "Define specific, measurable, achievable financial goals for short (1yr), medium (3-5yr), and long-term (10+yr)",
    },
    {
      icon: PieChart,
      title: "Create Budget",
      desc: "Track income and expenses. Follow 50-30-20 rule: 50% needs, 30% wants, 20% savings/investment",
    },
    {
      icon: Shield,
      title: "Build Emergency Fund",
      desc: "Save 6 months of expenses in liquid, accessible accounts before investing",
    },
    {
      icon: TrendingUp,
      title: "Start Investing",
      desc: "Invest in diversified portfolio through SIP, mutual funds, stocks, or real estate",
    },
    {
      icon: Home,
      title: "Get Insurance",
      desc: "Buy health insurance, term life insurance, and property insurance for protection",
    },
    {
      icon: Briefcase,
      title: "Plan Retirement",
      desc: "Contribute to retirement accounts and plan for passive income sources",
    },
  ]

  const goals = [
    {
      horizon: "Short-term (1 year)",
      examples: "Emergency fund, vacation, gadget purchase",
      amount: "₹50,000-2,00,000",
    },
    {
      horizon: "Medium-term (3-5 years)",
      examples: "Car purchase, wedding, home down payment",
      amount: "₹5,00,000-20,00,000",
    },
    { horizon: "Long-term (10+ years)", examples: "Home, retirement, children education", amount: "₹20,00,000+" },
  ]

  const allocation = [
    { age: "20s", stocks: "80%", bonds: "15%", others: "5%", note: "High growth phase" },
    { age: "30s", stocks: "70%", bonds: "20%", others: "10%", note: "Balanced approach" },
    { age: "40s", stocks: "50%", bonds: "35%", others: "15%", note: "Risk reduction" },
    { age: "50s", stocks: "30%", bonds: "50%", others: "20%", note: "Capital preservation" },
    { age: "60+", stocks: "20%", bonds: "60%", others: "20%", note: "Conservative approach" },
  ]

  const strategies = [
    {
      strategy: "Rupee Cost Averaging",
      desc: "Invest fixed amount regularly to reduce market timing risk",
      benefit: "Lower average cost",
    },
    {
      strategy: "Diversification",
      desc: "Spread investments across asset classes and sectors",
      benefit: "Reduced risk",
    },
    { strategy: "Tax Optimization", desc: "Use tax-saving instruments like PPF, ELSS, NPS", benefit: "Tax savings" },
    { strategy: "Rebalancing", desc: "Review and rebalance portfolio annually", benefit: "Maintain allocation" },
    { strategy: "Automation", desc: "Set up automatic transfers for savings and investments", benefit: "Discipline" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Planning Tips</h1>
          <p className="text-xl text-teal-100">Create a comprehensive wealth plan and achieve your financial goals</p>
        </div>
      </section>

      {/* 6 Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">6 Steps to Financial Planning Success</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <step.icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Goals */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Define Your Financial Goals</h2>
          <div className="space-y-4">
            {goals.map((goal, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-teal-600">{goal.horizon}</h3>
                      <p className="text-gray-600 mt-1">{goal.examples}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Typical Amount</p>
                      <p className="font-bold text-lg text-teal-600">{goal.amount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Allocation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Age-Based Asset Allocation</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Age Group</th>
                  <th className="px-6 py-3 text-left">Stocks</th>
                  <th className="px-6 py-3 text-left">Bonds</th>
                  <th className="px-6 py-3 text-left">Others</th>
                  <th className="px-6 py-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {allocation.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-teal-50">
                    <td className="px-6 py-3 font-bold">{row.age}</td>
                    <td className="px-6 py-3 text-teal-600 font-semibold">{row.stocks}</td>
                    <td className="px-6 py-3">{row.bonds}</td>
                    <td className="px-6 py-3">{row.others}</td>
                    <td className="px-6 py-3 text-gray-600 italic">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">5 Winning Investment Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((s, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-teal-600 mb-2">{s.strategy}</h3>
                  <p className="text-gray-600 mb-4">{s.desc}</p>
                  <div className="bg-teal-50 p-3 rounded">
                    <p className="text-sm text-teal-700">
                      <span className="font-semibold">Benefit:</span> {s.benefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Financial Planning Checklist</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Emergency fund of 6 months",
                  "Adequate health insurance",
                  "Term life insurance",
                  "Retirement account opened",
                  "Tax-saving investments",
                  "Diversified portfolio",
                  "Will & legal documents",
                  "Annual plan review",
                  "Debt management plan",
                  "Education fund setup",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-teal-600 flex items-center justify-center">
                      <span className="text-teal-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Financial Plan Today</h2>
          <p className="text-lg mb-8">Get personalized recommendations based on your goals and profile</p>
          <Button className="bg-white text-teal-600 hover:bg-teal-50">Create Plan</Button>
        </div>
      </section>
    </main>
  )
}
