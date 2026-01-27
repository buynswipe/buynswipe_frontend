import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How to Improve Credit Score Quickly - 10 Proven Tips | BuyNswipe",
  description:
    "10 actionable strategies to improve your CIBIL credit score quickly with realistic timelines and step-by-step guidance.",
  keywords: [
    "how to improve credit score",
    "improve CIBIL score",
    "increase credit score fast",
    "credit score improvement tips",
    "bad credit repair",
  ],
}

export default function HowToImproveCreditScorePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Credit Improvement</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Improve Your Credit Score Quickly</h1>
          <p className="text-xl text-green-100">10 proven strategies to boost your CIBIL score in 30-90 days</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10 Actionable Strategies</h2>
            <div className="space-y-6">
              {[
                {
                  strategy: "Pay Bills On Time",
                  impact: "35% of credit score",
                  timeline: "Immediate effect",
                  steps: [
                    "Set up payment reminders",
                    "Use auto-pay for credit cards",
                    "Pay before due date",
                    "Avoid even 1-day delays",
                  ],
                },
                {
                  strategy: "Reduce Credit Card Debt",
                  impact: "30% of credit score",
                  timeline: "30-60 days for visible change",
                  steps: [
                    "Pay more than minimum amount",
                    "Target cards with highest balances",
                    "Keep utilization below 30%",
                    "Don't close old cards",
                  ],
                },
                {
                  strategy: "Pay Down Existing Loans",
                  impact: "Boosts payment history",
                  timeline: "60-90 days for significant improvement",
                  steps: [
                    "Make extra principal payments",
                    "Use bonus/increment for repayment",
                    "Maintain regular EMI payments",
                    "Clear high-interest loans first",
                  ],
                },
                {
                  strategy: "Get Credit Mix Right",
                  impact: "15% of credit score",
                  timeline: "3-6 months to build",
                  steps: [
                    "Maintain 1-2 credit cards",
                    "Keep existing personal loan",
                    "Home/auto loans add value",
                    "Don't open too many accounts",
                  ],
                },
                {
                  strategy: "Limit New Credit Applications",
                  impact: "10% of credit score",
                  timeline: "Immediate & 6 months",
                  steps: [
                    "Avoid multiple card/loan applications",
                    "Space out applications by 6+ months",
                    "Only apply when truly needed",
                    "Each query reduces score temporarily",
                  ],
                },
                {
                  strategy: "Check & Correct Errors",
                  impact: "Potential +50-100 points",
                  timeline: "30 days if errors found",
                  steps: [
                    "Get free credit report annually",
                    "Look for unauthorized accounts",
                    "Check for duplicate entries",
                    "Dispute errors immediately",
                  ],
                },
                {
                  strategy: "Keep Old Accounts Open",
                  impact: "10% of credit score",
                  timeline: "Long-term benefit",
                  steps: [
                    "Use old credit cards occasionally",
                    "Keep accounts in good standing",
                    "Don't close oldest accounts",
                    "Account age matters",
                  ],
                },
                {
                  strategy: "Become an Authorized User",
                  impact: "Boost by 30-100 points",
                  timeline: "Immediate if added to good account",
                  steps: [
                    "Ask family/spouse with good credit",
                    "Bank adds your credit profile",
                    "Their good payment history helps you",
                    "Their debt counts against you too",
                  ],
                },
                {
                  strategy: "Negotiate with Creditors",
                  impact: "Removes negative marks",
                  timeline: "30-90 days negotiation",
                  steps: [
                    "Contact creditors directly",
                    "Request removal of late marks",
                    "Offer settlement for old debts",
                    "Get written commitment",
                  ],
                },
                {
                  strategy: "Use Credit Carefully",
                  impact: "Builds positive history",
                  timeline: "Ongoing benefit",
                  steps: [
                    "Use credit card for small purchases",
                    "Pay full balance monthly",
                    "Avoid cash advances",
                    "Maintain consistent usage",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {idx + 1}. {item.strategy}
                    </h3>
                    <Badge className="bg-green-100 text-green-800">{item.timeline}</Badge>
                  </div>
                  <p className="text-green-600 font-semibold mb-4">{item.impact}</p>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Action Steps:</p>
                    <ul className="space-y-2">
                      {item.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              {[
                "Missing even a single payment - damages score significantly",
                "Closing old credit cards - reduces average account age",
                "Maxing out credit cards - increases utilization ratio",
                "Multiple applications in short period - each causes hard inquiry",
                "Taking new debt to pay old debt - increases total debt burden",
                "Ignoring credit report errors - costs you 20-100 points",
                "Co-signing for others - their default affects your score",
              ].map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-8 h-8 text-blue-600" />
              Expected Timeline
            </h2>
            <div className="space-y-4">
              {[
                { period: "Weeks 1-2", result: "Pay pending dues, stop new applications" },
                { period: "Weeks 2-4", result: "Reduce credit card balances by 10-15%" },
                { period: "Month 2-3", result: "Continue payments, reduce to <30% utilization" },
                { period: "Month 3-6", result: "Build credit mix, add authorized user status" },
                { period: "6-12 months", result: "Score improvement of 50-150 points visible" },
                { period: "12+ months", result: "Potential improvement to 750+ score range" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="font-bold text-gray-900">{item.period}</p>
                  <p className="text-gray-700 text-sm">{item.result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Start Improving Your Score Today</h2>
            <p className="text-green-100 mb-6">Check your free CIBIL score and get personalized improvement plan</p>
            <Link
              href="/credit/cibil-score"
              className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition"
            >
              Check Score Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
