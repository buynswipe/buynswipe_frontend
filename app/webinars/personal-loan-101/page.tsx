import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BookOpen, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Personal Loan 101 Webinar | Learn Loan Fundamentals | BuyNswipe",
  description:
    "Free webinar on personal loan basics, eligibility requirements, application tips, and how to choose the right loan. Expert insights on qualifying and managing loans.",
  keywords: [
    "personal loan webinar",
    "loan education",
    "how to apply for loan",
    "loan eligibility",
    "personal finance",
  ],
}

export default function PersonalLoan101() {
  const webinarDetails = {
    date: "January 15, 2024",
    time: "7:00 PM IST",
    duration: "45 minutes",
    host: "Ratnesh Choubey, Founder BuyNswipe",
    attendees: "500+",
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Loan 101: Complete Guide</h1>
          <p className="text-xl text-blue-100 mb-8">
            Master loan fundamentals, eligibility, and smart borrowing strategies
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 font-semibold">
              Register Now
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold">
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
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                <p className="text-lg font-bold">{webinarDetails.date}</p>
                <p className="text-gray-700">{webinarDetails.time}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <BookOpen className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-lg font-bold">{webinarDetails.duration}</p>
                <p className="text-gray-700">Plus Q&A Session</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600 mb-1">Expected Attendees</p>
                <p className="text-lg font-bold">{webinarDetails.attendees}</p>
                <p className="text-gray-700">Live & Interactive</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
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
                In this comprehensive webinar, we'll cover everything you need to know about personal loans - from
                fundamentals to application strategies. Whether you're a first-time borrower or looking to refinance,
                this session will equip you with the knowledge to make smart borrowing decisions.
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
              { title: "Loan Types", desc: "Understanding personal, secured, and specialty loans" },
              { title: "Eligibility Criteria", desc: "Income, age, credit score, and employment requirements" },
              { title: "Application Process", desc: "Step-by-step walkthrough of the loan application" },
              { title: "Interest Rates", desc: "How rates are calculated and how to get the best deals" },
              { title: "Comparison Tips", desc: "How to evaluate and compare loan offers" },
              { title: "EMI Management", desc: "Understanding EMIs and planning your budget" },
            ].map((topic) => (
              <Card key={topic.title}>
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mb-2" />
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold">
                  Register for Webinar
                </button>
              </form>
              <p className="text-sm text-gray-600 text-center mt-4">
                We'll send you the webinar link and calendar invite to your email
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Limited seats available. Register now to secure your spot and get instant access to exclusive resources
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold">
            Register Now
          </button>
        </div>
      </section>
    </main>
  )
}
