import type { Metadata } from "next"
import Link from "next/link"
import { Smartphone, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Card Payment Methods - How to Pay Bill | BuyNswipe",
  description:
    "How to pay credit card bill? Learn 8 payment methods - UPI, netbanking, auto-pay, cash, cheque, NEFT, IMPS. Pay on time.",
  keywords: [
    "credit card payment methods",
    "how to pay credit card bill",
    "credit card payment online",
    "auto-pay credit card",
    "upi credit card payment",
    "netbanking credit card payment",
    "credit card payment due date",
    "credit card minimum payment",
  ],
}

export default function CreditCardPaymentMethodsPage() {
  const paymentMethods = [
    {
      name: "UPI (Unified Payments Interface)",
      steps: ["Open your bank app", "Select Pay Bills", "Enter card details", "Authorize with UPI PIN"],
      benefits: "Instant, 24/7, no fees",
      time: "Real-time",
    },
    {
      name: "Net Banking",
      steps: [
        "Log into bank account",
        "Select Credit Card payments",
        "Choose card and amount",
        "Authorize transaction",
      ],
      benefits: "Safe, easy, multiple options",
      time: "1-2 hours",
    },
    {
      name: "Auto-Pay (Auto Debit)",
      steps: ["Register card with auto-pay", "Choose payment date", "Automatic deduction", "Confirmation via SMS"],
      benefits: "Never miss payment, hassle-free",
      time: "Automatic",
    },
    {
      name: "Mobile App",
      steps: ["Open bank or card app", "Go to Payments section", "Enter amount", "Confirm payment"],
      benefits: "Quick, convenient, track history",
      time: "Instant",
    },
    {
      name: "Cash Payment",
      steps: ["Visit bank branch", "Submit payment form", "Provide cash", "Get receipt"],
      benefits: "Direct, no digitization needed",
      time: "Same day",
    },
    {
      name: "Cheque Payment",
      steps: ["Write cheque to bank", "Mail or deposit cheque", "Cheque processing", "Amount credited"],
      benefits: "Traditional, recorded, safe",
      time: "3-5 days",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Payment Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Payment Methods</h1>
          <p className="text-xl text-cyan-100">Complete guide to paying your credit card bill on time</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-cyan-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Timely Payment is Important?</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Avoids interest charges (1.5-4% monthly)",
                "Maintains good credit score",
                "Prevents late payment penalties",
                "Preserves credit card privileges",
                "Enables credit limit increase",
                "Shows financial discipline to lenders",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-cyan-600 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8 Ways to Pay Your Credit Card Bill</h2>
            <div className="space-y-6">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden border-l-4 border-cyan-600">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-cyan-600" />
                      {method.name}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
                        <ol className="space-y-1 ml-4">
                          {method.steps.map((step, sidx) => (
                            <li key={sidx} className="text-gray-700">
                              {sidx + 1}. {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="flex gap-8 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Benefits:</span> {method.benefits}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Time:</span> {method.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Important Payment Dates
            </h2>
            <div className="space-y-4">
              {[
                { term: "Statement Cycle", desc: "Usually 25-30 days from last date, dates vary by card and bank" },
                {
                  term: "Due Date",
                  desc: "Usually 20-21 days after statement date, payment must be made by this date",
                },
                { term: "Grace Period", desc: "20-50 days from purchase date (if full bill paid by due date)" },
                { term: "Late Payment Period", desc: "After due date, interest accrues at 1.5-4% per month" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900">{item.term}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pro Tips for Easy Payment</h2>
            <ul className="space-y-2">
              {[
                "Set up auto-pay to never miss a due date",
                "Pay full bill to avoid interest charges",
                "Make payment 2-3 days before due date",
                "Use UPI for instant zero-fee payments",
                "Keep payment receipts for records",
                "Monitor your statement dates",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="text-yellow-300 font-bold mt-1">•</span> {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your First Credit Card Today</h2>
            <p className="text-cyan-100 mb-6">Easy application with instant approval</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-cyan-600 font-bold px-8 py-3 rounded-lg hover:bg-cyan-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
