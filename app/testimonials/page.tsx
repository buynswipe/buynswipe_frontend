import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe® Customer Examples | Illustrative Outcomes",
  description:
    "Illustrative customer examples for BuyNswipe® payment and credit journeys. Outcomes vary by provider, product, and customer circumstances.",
  keywords: [
    "BuyNswipe® reviews",
    "customer testimonials",
    "success stories",
    "customer feedback",
    "ratings",
    "merchant reviews",
  ],
}

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Restaurant Owner, Delhi",
    content:
      "BuyNswipe® POS system has transformed my restaurant's billing process. Transaction processing is instant, inventory tracking is real-time, and customer service is excellent. Highly recommended!",
    rating: 5,
    metrics: "45% transaction growth, 60% faster billing",
  },
  {
    name: "Priya Sharma",
    role: "Retail Store Manager, Mumbai",
    content:
      "Managing 5 retail locations has become so much easier with BuyNswipe®. The multi-location dashboard gives me complete visibility, and the settlement is quick. Best investment for my business.",
    rating: 5,
    metrics: "35% inventory cost reduction, 5 locations managed",
  },
  {
    name: "Amit Patel",
    role: "Freelance Developer, Bangalore",
    content:
      "I used BuyNswipe®'s personal loan service to fund my startup. The process was completely digital, approval was quick, and the interest rate was competitive. Great experience!",
    rating: 5,
    metrics: "Illustrative customer outcome; provider approval required",
  },
  {
    name: "Deepika Nair",
    role: "E-commerce Seller, Pune",
    content:
      "BuyNswipe® payment gateway integration was seamless. Multiple payment options, low MDR, and excellent support. My checkout conversion has improved significantly.",
    rating: 5,
    metrics: "25% conversion rate increase",
  },
  {
    name: "Vikram Singh",
    role: "Small Business Owner, NCR",
    content:
      "The credit card application through BuyNswipe® was hassle-free. Got approved with good limits and cashback offers. Perfect for managing my business expenses.",
    rating: 5,
    metrics: "Illustrative outcome; eligibility and limits vary",
  },
  {
    name: "Ananya Desai",
    role: "Travel Agency Owner, Bangalore",
    content:
      "BuyNswipe®'s BNPL feature has been a game-changer for my customers. They can book travel now and pay later, which has increased my bookings by 40%. Excellent service!",
    rating: 5,
    metrics: "40% booking increase with BNPL",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer examples</h1>
          <p className="text-xl text-amber-100">Illustrative outcomes; actual results vary by provider and customer</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-amber-900">{testimonial.metrics}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How to read these examples</h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg mb-8">These examples are illustrative and are not a verified rating, review count, performance guarantee, or promise of a particular customer outcome.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore a potential customer journey</h2>
          <div className="mx-auto max-w-2xl mb-8 text-gray-600">Use the examples above to understand the types of workflows BuyNswipe® may support. Confirm product availability, pricing, provider terms, and performance evidence before making a decision.</div>
          <Link href="/contact" className="inline-flex bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 font-semibold">
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </main>
  )
}
