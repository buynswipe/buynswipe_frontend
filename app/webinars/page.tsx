import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Financial Education Webinars | BuyNswipe Learning",
  description:
    "Attend free webinars on credit cards, personal loans, credit building, and financial planning. Expert speakers and live Q&A sessions.",
  keywords: ["financial webinars", "credit education", "loan information", "financial planning", "credit card tips"],
}

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      id: "personal-loan-101",
      title: "Personal Loan 101",
      description: "Complete guide to understanding and applying for personal loans",
      date: "January 15, 2025",
      time: "7:00 PM IST",
      duration: "60 minutes",
      speaker: "Ratnesh Choubey",
      attendees: 1250,
    },
    {
      id: "credit-card-mastery",
      title: "Credit Card Mastery",
      description: "Master credit card rewards, benefits, and how to use them wisely",
      date: "January 22, 2025",
      time: "7:00 PM IST",
      duration: "60 minutes",
      speaker: "Financial Expert",
      attendees: 950,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Financial Education Webinars</h1>
          <p className="text-2xl text-blue-100 mb-8">Learn from experts and master your finances</p>
          <p className="text-blue-200">Free live webinars every month with Q&A sessions</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Webinars</h2>
          <div className="space-y-6">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span>
                          {webinar.time} ({webinar.duration})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Speaker</p>
                        <p className="font-semibold text-gray-900">{webinar.speaker}</p>
                      </div>
                      <Link
                        href={`/webinars/${webinar.id}`}
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold self-start md:self-end"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Attend Our Webinars?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "👨‍🏫",
                title: "Expert Speakers",
                desc: "Learn from fintech professionals and industry experts",
              },
              {
                icon: "❓",
                title: "Live Q&A",
                desc: "Ask questions and get answers from the experts",
              },
              {
                icon: "🎓",
                title: "Certificate",
                desc: "Get a certificate of completion for attendance",
              },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl mb-4">{item.icon}</p>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Webinars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Credit Score Secrets Revealed", date: "Dec 15, 2024", attendees: 500 },
              { title: "Loan Comparison Guide", date: "Dec 8, 2024", attendees: 450 },
              { title: "Financial Planning Basics", date: "Nov 30, 2024", attendees: 600 },
              { title: "Debt Management Strategies", date: "Nov 22, 2024", attendees: 550 },
            ].map((webinar, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-2">{webinar.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{webinar.date}</span>
                    <span>{webinar.attendees} attendees</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe for Webinar Updates</h2>
          <p className="text-blue-100 mb-8 text-lg">Get notified about upcoming webinars and financial tips</p>
          <form className="max-w-md mx-auto flex gap-2 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Subscribe
            </button>
          </form>
          <p className="text-blue-100 text-sm">We send updates only for new webinars, no spam</p>
        </div>
      </section>
    </main>
  )
}
