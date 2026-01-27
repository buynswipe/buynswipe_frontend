import type { Metadata } from "next"
import { BookOpen, DollarSign, TrendingUp, Shield, PieChart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Financial Literacy 101 - Learn Personal Finance Basics | BuyNswipe",
  description:
    "Financial literacy guide for beginners. Learn budgeting, saving, investing, credit scores, and money management. Start your financial journey today.",
  keywords: [
    "financial literacy",
    "personal finance basics",
    "money management",
    "budgeting tips",
    "saving money",
    "investment basics",
    "financial planning",
    "learn finance",
  ],
  openGraph: {
    title: "Financial Literacy 101 - Learn Personal Finance Basics | BuyNswipe",
    description: "Master the fundamentals of personal finance and money management.",
    url: "https://buynswipe.com/resources/financial-literacy",
  },
}

export default function FinancialLiteracyPage() {
  const topics = [
    {
      icon: DollarSign,
      title: "Budgeting",
      desc: "Create a monthly budget and track expenses. The 50-30-20 rule: 50% needs, 30% wants, 20% savings.",
      tips: ["Track all expenses", "Set savings goals", "Cut unnecessary spending"],
    },
    {
      icon: TrendingUp,
      title: "Saving & Investment",
      desc: "Build emergency fund of 6 months expenses. Start investing early for compound growth.",
      tips: ["Emergency fund first", "Regular SIP investment", "Diversify portfolio"],
    },
    {
      icon: Shield,
      title: "Credit Management",
      desc: "Maintain good credit score above 750. Pay bills on time and keep credit utilization low.",
      tips: ["Pay on time", "Keep utilization <30%", "Monitor credit report"],
    },
    {
      icon: PieChart,
      title: "Asset Allocation",
      desc: "Diversify investments across stocks, bonds, real estate, and gold based on risk profile.",
      tips: ["Mix of assets", "Regular rebalancing", "Age-based strategy"],
    },
    {
      icon: Zap,
      title: "Debt Management",
      desc: "Minimize high-interest debt. Focus on debt repayment strategy.",
      tips: ["Pay high-interest first", "Consolidate if possible", "Avoid new debt"],
    },
    {
      icon: BookOpen,
      title: "Insurance",
      desc: "Get adequate health, life, and property insurance for financial security.",
      tips: ["Health insurance", "Term life insurance", "Emergency coverage"],
    },
  ]

  const pyramid = [
    { level: 1, title: "Emergency Fund", desc: "3-6 months of expenses" },
    { level: 2, title: "Insurance & Debt", desc: "Protect & pay off debt" },
    { level: 3, title: "Investing", desc: "Long-term wealth building" },
    { level: 4, title: "Advanced Goals", desc: "Real estate, business, etc" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Literacy 101</h1>
          <p className="text-xl text-purple-100">Master the fundamentals of personal finance and money management</p>
        </div>
      </section>

      {/* Core Topics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">6 Core Topics of Financial Literacy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <topic.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.desc}</p>
                  <ul className="space-y-2">
                    {topic.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Pyramid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Your Financial Pyramid</h2>
          <div className="space-y-4">
            {pyramid.map((item) => (
              <Card key={item.level}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-purple-600 w-16">Level {item.level}</div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">10 Financial Habits for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Pay yourself first - save before spending",
              "Track your expenses monthly",
              "Build an emergency fund",
              "Invest in your education",
              "Automate your savings",
              "Review investments quarterly",
              "Avoid lifestyle inflation",
              "Have financial goals",
              "Negotiate salary & rates",
              "Keep learning about finance",
            ].map((habit, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{habit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Financial Journey Today</h2>
          <p className="text-lg mb-8">Get personalized financial guidance with BuyNswipe</p>
          <Button className="bg-white text-purple-600 hover:bg-purple-50">Get Started</Button>
        </div>
      </section>
    </main>
  )
}
