import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, TrendingUp, DollarSign, Heart, Brain, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Financial Resources & Blog | Learn Finance | BuyNswipe",
  description:
    "Learn about personal finance, credit scores, loans, and investment. Read expert articles, guides, and tips on financial literacy.",
  keywords: [
    "financial blog",
    "finance articles",
    "personal finance guide",
    "credit score tips",
    "loan guide",
    "investment tips",
    "financial literacy",
    "money management",
  ],
  openGraph: {
    title: "Financial Resources & Blog | BuyNswipe",
    description: "Learn about personal finance, credit scores, loans, and investment. Expert articles and guides.",
    url: "https://buynswipe.com/resources",
    type: "website",
  },
}

export default function ResourcesPage() {
  const categories = [
    { icon: Brain, title: "Financial Literacy", desc: "Learn the basics of personal finance", count: "12 Articles" },
    { icon: TrendingUp, title: "Loan Guides", desc: "Complete guides for all loan types", count: "18 Articles" },
    { icon: DollarSign, title: "Investment Tips", desc: "Smart investment strategies", count: "15 Articles" },
    { icon: Heart, title: "Budget Planning", desc: "Plan your budget effectively", count: "10 Articles" },
    { icon: Shield, title: "Money Security", desc: "Protect your financial data", count: "8 Articles" },
    { icon: BookOpen, title: "Guides & Tools", desc: "Calculators and templates", count: "20 Tools" },
  ]

  const articles = [
    {
      title: "How to Improve Your CIBIL Score Quickly",
      date: "Dec 2024",
      category: "Credit Score",
      link: "/resources/how-to-improve-credit-score",
    },
    {
      title: "Complete Guide to Personal Loans",
      date: "Dec 2024",
      category: "Loan Guide",
      link: "/resources/guide-to-personal-loans",
    },
    {
      title: "Financial Literacy 101",
      date: "Nov 2024",
      category: "Finance Basics",
      link: "/resources/financial-literacy",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Resources & Learning Hub</h1>
          <p className="text-xl text-blue-100">Master personal finance with expert guides and articles</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Card key={cat.title} className="hover:shadow-lg transition">
                <CardContent className="pt-6">
                  <cat.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                  <p className="text-blue-600 font-semibold">{cat.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <Link key={article.title} href={article.link}>
                <Card className="hover:shadow-lg transition cursor-pointer">
                  <CardContent className="p-6 flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm">{article.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Financial Tips</h2>
          <p className="text-lg mb-8">Get expert advice delivered to your inbox</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Subscribe Now</Button>
        </div>
      </section>
    </main>
  )
}
