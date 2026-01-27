import type { Metadata } from "next"
import Link from "next/link"
import { PlayCircle, Clock, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Loan Application Tutorial Video | Step-by-Step Guide | BuyNswipe",
  description:
    "Watch our comprehensive 8-minute video tutorial on how to apply for a personal loan. Step-by-step guidance with real examples.",
  keywords: [
    "loan application tutorial",
    "how to apply for loan",
    "loan application video",
    "personal loan tutorial",
    "loan process explained",
  ],
}

export default function LoanApplicationTutorialPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-red-500 text-white mb-4">Video Tutorial</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Application Tutorial</h1>
          <p className="text-xl text-blue-100">Learn how to apply for a personal loan in 8 minutes</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-900 rounded-lg mb-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20"></div>
            <PlayCircle className="w-24 h-24 text-white opacity-80 hover:opacity-100 cursor-pointer transition" />
            <p className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded">8:42</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "📋", title: "Step 1: Prepare Documents", desc: "Gather all required documents" },
              { icon: "📝", title: "Step 2: Fill Application", desc: "Complete the application form" },
              { icon: "✅", title: "Step 3: Get Approved", desc: "Receive approval in 24-48 hours" },
            ].map((step, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl mb-2">{step.icon}</p>
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Video Contents</h2>
            <div className="space-y-4">
              {[
                { time: "0:00", topic: "Introduction & Loan Types" },
                { time: "1:15", topic: "Eligibility Requirements" },
                { time: "2:30", topic: "Required Documents Checklist" },
                { time: "3:45", topic: "Online Application Process" },
                { time: "5:20", topic: "Document Submission" },
                { time: "6:40", topic: "Approval & Disbursal Timeline" },
                { time: "7:50", topic: "FAQ & Next Steps" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                  <Badge className="bg-blue-600 text-white flex-shrink-0">{item.time}</Badge>
                  <p className="text-gray-700">{item.topic}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Fast Approval Process
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Apply in 5 minutes</li>
                  <li>✓ Instant eligibility check</li>
                  <li>✓ 24-48 hour approval</li>
                  <li>✓ Same-day disbursal available</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  What You Need
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Valid ID proof</li>
                  <li>✓ Address proof</li>
                  <li>✓ Bank statements (6 months)</li>
                  <li>✓ Salary slips or income proof</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-blue-100 mb-6">Start your loan application in 5 minutes with our easy process</p>
            <Link
              href="/apply/quick-loan-assessment"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
