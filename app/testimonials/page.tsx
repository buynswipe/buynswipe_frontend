import type { Metadata } from "next"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe Testimonials & Reviews | Customer Success Stories",
  description:
    "Read testimonials and success stories from BuyNswipe customers. See how merchants and individuals benefit from our payment solutions and credit marketplace.",
  keywords: [
    "BuyNswipe reviews",
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
      "BuyNswipe POS system has transformed my restaurant's billing process. Transaction processing is instant, inventory tracking is real-time, and customer service is excellent. Highly recommended!",
    rating: 5,
    metrics: "45% transaction growth, 60% faster billing",
  },
  {
    name: "Priya Sharma",
    role: "Retail Store Manager, Mumbai",
    content:
      "Managing 5 retail locations has become so much easier with BuyNswipe. The multi-location dashboard gives me complete visibility, and the settlement is quick. Best investment for my business.",
    rating: 5,
    metrics: "35% inventory cost reduction, 5 locations managed",
  },
  {
    name: "Amit Patel",
    role: "Freelance Developer, Bangalore",
    content:
      "I used BuyNswipe's personal loan service to fund my startup. The process was completely digital, approval was quick, and the interest rate was competitive. Great experience!",
    rating: 5,
    metrics: "₹5L loan approved in 24 hours",
  },
  {
    name: "Deepika Nair",
    role: "E-commerce Seller, Pune",
    content:
      "BuyNswipe payment gateway integration was seamless. Multiple payment options, low MDR, and excellent support. My checkout conversion has improved significantly.",
    rating: 5,
    metrics: "25% conversion rate increase",
  },
  {
    name: "Vikram Singh",
    role: "Small Business Owner, NCR",
    content:
      "The credit card application through BuyNswipe was hassle-free. Got approved with good limits and cashback offers. Perfect for managing my business expenses.",
    rating: 5,
    metrics: "₹5L credit limit approved instantly",
  },
  {
    name: "Ananya Desai",
    role: "Travel Agency Owner, Bangalore",
    content:
      "BuyNswipe's BNPL feature has been a game-changer for my customers. They can book travel now and pay later, which has increased my bookings by 40%. Excellent service!",
    rating: 5,
    metrics: "40% booking increase with BNPL",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-amber-100">Real stories from BuyNswipe users</p>
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
          <h2 className="text-3xl font-bold mb-4">Overall Rating</h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-5xl font-bold text-amber-600">4.9/5</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-lg mb-8">Based on 10,000+ verified customer reviews</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Thousands of Satisfied Customers</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-4xl font-bold text-amber-600">50,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600">₹5,000 Cr+</p>
              <p className="text-gray-600">Transactions Processed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-amber-600">10,000+</p>
              <p className="text-gray-600">Reviews & Ratings</p>
            </div>
          </div>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 font-semibold">
            Start Your Journey Today
          </button>
        </div>
      </section>
    </main>
  )
}
