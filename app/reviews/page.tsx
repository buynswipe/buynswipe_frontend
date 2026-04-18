import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Customer Reviews & Ratings | Loan & Credit Card Reviews | BuyNswipe",
  description:
    "Read real customer reviews and ratings for personal loans, credit cards, and fintech products. Share your experience and help others.",
  keywords: ["customer reviews", "product ratings", "loan reviews", "credit card reviews", "user experiences"],
}

export default function ReviewsHub() {
  const stats = [
    { label: "Verified Reviews", value: "2,847", icon: Users },
    { label: "Average Rating", value: "4.6/5", icon: Star },
    { label: "Customer Satisfaction", value: "94%", icon: TrendingUp },
  ]

  const recentReviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      product: "HDFC Personal Loan",
      title: "Quick approval and great customer service",
      content:
        "Applied on Monday, approved by Tuesday, money in my account on Wednesday. The entire process was transparent and hassle-free.",
      date: "2 days ago",
      helpful: 124,
    },
    {
      name: "Priya Sharma",
      rating: 4,
      product: "Axis Flipkart Card",
      title: "Excellent rewards but high annual fee",
      content:
        "Great cashback on shopping and groceries. However, the annual fee of ₹499 is a bit steep compared to competitors.",
      date: "5 days ago",
      helpful: 98,
    },
    {
      name: "Amit Patel",
      rating: 5,
      product: "BuyNswipe POS System",
      title: "Best POS system for my restaurant",
      content:
        "Easy setup, fast payments, excellent support. Reduced billing time by 60% and improved customer satisfaction significantly.",
      date: "1 week ago",
      helpful: 156,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-blue-100">
            Real reviews from real customers about loans, credit cards, and fintech products
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Reviews</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/reviews/submit-review">Write a Review</Link>
            </Button>
          </div>

          <div className="space-y-6">
            {recentReviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-blue-600 mb-2">{review.product}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-4">{review.content}</p>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <span className="text-sm text-gray-600">Helpful?</span>
                    <button className="text-sm text-blue-600 hover:underline">👍 Yes ({review.helpful})</button>
                    <button className="text-sm text-gray-500 hover:text-blue-600 hover:underline">👎 No</button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-gray-700 mb-8">
            Help others make better financial decisions by sharing your review of any loan, credit card, or fintech product.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
            <Link href="/reviews/submit-review">Submit Your Review</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
