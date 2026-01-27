import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Financial Blog & Articles | Money Tips & Loan Guide | BuyNswipe",
  description:
    "Read expert financial articles, loan guides, and money management tips. Learn about personal loans, credit cards, budgeting, and smart financial planning.",
  keywords: [
    "financial blog",
    "money management tips",
    "personal finance blog",
    "loan guides",
    "credit card tips",
    "budgeting tips",
    "financial planning",
  ],
}

const blogCategories = [
  {
    title: "Loans & Credit",
    description: "Everything about personal loans, business loans, and credit management",
    articles: [
      {
        slug: "how-to-improve-credit-score",
        title: "How to Improve CIBIL Score Fast",
        excerpt: "10 proven strategies to boost your credit score from 600 to 750+",
        date: "Jan 15, 2025",
        category: "Credit Management",
      },
      {
        slug: "personal-loan-guide",
        title: "Complete Guide to Personal Loans",
        excerpt: "Everything you need to know about applying for and managing personal loans",
        date: "Jan 10, 2025",
        category: "Loans",
      },
    ],
  },
  {
    title: "Financial Planning",
    description: "Smart money management and wealth building strategies",
    articles: [
      {
        slug: "financial-planning-tips",
        title: "6-Step Financial Planning Guide",
        excerpt: "Create a solid financial plan for short-term and long-term goals",
        date: "Jan 8, 2025",
        category: "Financial Planning",
      },
      {
        slug: "loan-repayment-strategies",
        title: "Best Loan Repayment Strategies",
        excerpt: "Compare Avalanche, Snowball, and other methods to pay off debt faster",
        date: "Jan 5, 2025",
        category: "Debt Management",
      },
    ],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/credit" className="text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-600">
              Resources
            </Link>
            <Link href="/blog" className="text-blue-600 font-semibold">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Blog & Articles</h1>
          <p className="text-xl text-blue-100">
            Expert insights on loans, credit cards, personal finance, and smart money management
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {blogCategories.map((category) => (
            <div key={category.title} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.articles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <CardTitle className="text-xl text-gray-900">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center text-blue-600 hover:text-blue-700">
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
