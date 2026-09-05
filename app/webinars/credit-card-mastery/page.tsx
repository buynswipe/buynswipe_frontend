import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Zap, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Credit Card Mastery Webinar | Maximize Rewards | BuyNswipe",
  description:
    "Learn how to maximize credit card rewards, build credit history, optimize spending categories, and manage credit wisely. Expert strategies for financial growth.",
  keywords: [
    "credit card webinar",
    "maximize rewards",
    "credit card strategies",
    "financial literacy",
    "rewards optimization",
  ],
}

export default function CreditCardMastery() {
  const webinarDetails = {
    date: "January 22, 2024",
    time: "6:30 PM IST",
    duration: "50 minutes",
    host: "Financial Advisor - BuyNswipe",
    attendees: "600+",
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit Card Mastery: Maximize Your Rewards</h1>
          <p className="text-xl text-emerald-100 mb-8">
            Expert strategies to earn more rewards, build credit, and save money
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-50 font-semibold">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-emerald-700 font-semibold">
              Add to Calendar
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Clock className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                <p className="text-lg font-bold">{webinarDetails.date}</p>
                <p className="text-gray-700">{webinarDetails.time}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-lg font-bold">{webinarDetails.duration}</p>
                <p className="text-gray-700">Plus Q&A Session</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Expected Attendees</p>
                <p className="text-lg font-bold">{webinarDetails.attendees}</p>
                <p className="text-gray-700">Live & Interactive</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Host</p>
                <p className="text-lg font-bold">{webinarDetails.host}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Webinar Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Master the art of credit card usage in this intensive webinar. We'll cover advanced reward strategies,
                category optimization, credit building tactics, and how to avoid common pitfalls. Perfect for both
                beginners and experienced credit card users.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Reward Strategies", desc: "Category-wise spending optimization and multiplier stacking" },
              { title: "Credit Building", desc: "How to improve credit score using credit cards strategically" },
              { title: "Sign-up Bonuses", desc: "Maximizing welcome bonuses and promotional offers" },
              { title: "Fee Management", desc: "Understanding fees and how to avoid or get them waived" },
              { title: "Travel Hacks", desc: "Using cards for travel redemptions and benefits" },
              { title: "Debt Management", desc: "Responsible usage and avoiding credit card debt traps" },
            ].map((topic) => (
              <Card key={topic.title}>
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
                  <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                  <p className="text-gray-700 text-sm">{topic.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Registration Form</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 font-semibold">
                  Register for Webinar
                </button>
              </form>
              <p className="text-sm text-gray-600 text-center mt-4">
                We'll send you the webinar link and exclusive rewards guide to your email
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Limited Spots Available!</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Early registrants get exclusive bonuses including a rewards optimization checklist and card comparison guide
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 font-semibold">
            Register Now
          </button>
        </div>
      </section>
    </main>
  )
}
