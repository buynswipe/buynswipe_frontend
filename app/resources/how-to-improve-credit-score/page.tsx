import type { Metadata } from "next"
import { CheckCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "How to Improve CIBIL Score - 10 Ways to Boost Credit Score Fast | BuyNswipe",
  description:
    "Learn how to improve CIBIL score quickly. 10 actionable tips to boost credit score from 500 to 750+ in 6-12 months.",
  keywords: [
    "how to improve CIBIL score",
    "increase credit score",
    "improve credit score fast",
    "CIBIL score improvement",
    "credit score tips",
    "bad credit to good credit",
    "credit score hack",
    "boost CIBIL score",
  ],
  openGraph: {
    title: "How to Improve CIBIL Score - 10 Ways to Boost Credit Score Fast",
    description: "Learn 10 proven tips to improve your CIBIL score quickly from 500 to 750+",
    url: "https://buynswipe.com/resources/how-to-improve-credit-score",
  },
}

export default function ImproveScorePage() {
  const tips = [
    { title: "Pay Bills on Time", impact: "35%", desc: "Your payment history is the biggest factor" },
    { title: "Reduce Credit Utilization", impact: "30%", desc: "Keep credit usage below 30% of limit" },
    { title: "Clear Old Debts", impact: "15%", desc: "Prioritize paying off outstanding loans" },
    { title: "Avoid Multiple Inquiries", impact: "10%", desc: "Each hard inquiry reduces score by 5-10 points" },
    { title: "Keep Old Accounts Active", impact: "15%", desc: "Longer credit history improves score" },
    { title: "Use Credit Mix", impact: "10%", desc: "Have both credit cards and loans" },
    { title: "Monitor Your Credit Report", impact: "5%", desc: "Check for errors and dispute them" },
    { title: "Settle Defaults Quickly", impact: "20%", desc: "Default payment has major negative impact" },
    { title: "Get Credit Limit Increase", impact: "30%", desc: "Increases score if utilization stays low" },
    { title: "Become Authorized User", impact: "variable", desc: "Benefit from good payment history" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Improve Your CIBIL Score</h1>
          <p className="text-xl text-green-100">10 proven ways to boost credit score from 500 to 750+ in 6-12 months</p>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">10 Ways to Improve Credit Score</h2>
          <div className="space-y-4">
            {tips.map((tip, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{tip.title}</h3>
                    <p className="text-gray-600 mb-2">{tip.desc}</p>
                    <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
                      Impact: {tip.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Credit Score Improvement Timeline</h2>
          <div className="space-y-6">
            {[
              { month: "Month 1-3", score: "550-600", action: "Start paying bills on time" },
              { month: "Month 3-6", score: "600-650", action: "Reduce credit card usage" },
              { month: "Month 6-9", score: "650-700", action: "Clear old debts" },
              { month: "Month 9-12", score: "700-750+", action: "Maintain good habits" },
            ].map((phase) => (
              <Card key={phase.month}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{phase.month}</h3>
                      <p className="text-gray-600">{phase.action}</p>
                      <p className="text-green-600 font-semibold mt-2">Expected Score: {phase.score}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does it take to improve credit score?",
                a: "Usually 6-12 months with consistent good payment habits. Negative items fade after 7 years.",
              },
              {
                q: "What is a good CIBIL score?",
                a: "700-749 is good, 750+ is excellent. Below 650 makes it hard to get loans.",
              },
              {
                q: "Does checking credit score reduce it?",
                a: "Soft inquiries don't affect score. Only hard inquiries (loan applications) reduce it.",
              },
              {
                q: "How much does clearing debt improve score?",
                a: "Paying off debt can improve score by 50-100+ points depending on your profile.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                <summary className="font-semibold">{faq.q}</summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
