"use client"

import { Phone, CheckCircle, Clock, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function InstantLoanClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Instant Personal Loan",
    description: "Fast approval personal loans with 24-48 hour disbursal",
    interestRate: "8-15%",
    processingFee: "0.5-1%",
    loanTerm: "2-7 years",
  }

  const providers = [
    { name: "BankA", rate: "9%", time: "24 hours", amount: "Up to ₹25L" },
    { name: "BankB", rate: "10%", time: "48 hours", amount: "Up to ₹50L" },
    { name: "MoneyLender", rate: "8%", time: "4 hours", amount: "Up to ₹10L" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/credit" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BuyNswipe Credit</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 inline mr-2" />
            Fast Approval in 24-48 Hours
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Instant <span className="text-blue-600">Personal Loans</span> Online
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Quick approval, minimal documentation, instant disbursal. Get up to ₹50 lakhs in as little as 24 hours
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Apply for Instant Loan
          </Button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Instant Loans?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Super Fast</h3>
                <p className="text-sm text-gray-600">Approval in 24-48 hours with instant disbursal</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Minimal Docs</h3>
                <p className="text-sm text-gray-600">Just KYC and basic income proof required</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">No Collateral</h3>
                <p className="text-sm text-gray-600">Unsecured loans without pledging assets</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated support throughout the process</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Age: 21-60 years</h4>
                    <p className="text-gray-600 text-sm">Must be an Indian citizen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Income: ₹25,000+ monthly</h4>
                    <p className="text-gray-600 text-sm">Salaried or self-employed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">CIBIL Score: 650+</h4>
                    <p className="text-gray-600 text-sm">Better scores get lower rates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Employment: 2+ years</h4>
                    <p className="text-gray-600 text-sm">Current job for at least 2 years</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4-Step Quick Process</h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Apply Online", desc: "Fill quick form in 2 minutes" },
                  { step: 2, title: "Instant Verification", desc: "OTP & KYC verification" },
                  { step: 3, title: "Approval", desc: "Get approval in 24-48 hours" },
                  { step: 4, title: "Disbursal", desc: "Money in your account instantly" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Instant Loan Providers</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="px-4 py-3 text-center font-semibold">Interest Rate</th>
                  <th className="px-4 py-3 text-center font-semibold">Approval Time</th>
                  <th className="px-4 py-3 text-center font-semibold">Loan Amount</th>
                  <th className="px-4 py-3 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {providers.map((provider, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{provider.name}</td>
                    <td className="px-4 py-3 text-center text-blue-600 font-semibold">{provider.rate}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{provider.time}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{provider.amount}</td>
                    <td className="px-4 py-3 text-center">
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does approval take?",
                a: "Most instant loans are approved within 24-48 hours. Some lenders offer approval within 4 hours.",
              },
              {
                q: "What documents are needed?",
                a: "Minimal documentation: Aadhaar, PAN, salary slip, and bank statement for the last 3 months.",
              },
              {
                q: "Can I get instant loan without CIBIL?",
                a: "Most require CIBIL score of 650+, but some lenders approve with lower scores at higher rates.",
              },
            ].map((item, index) => (
              <details key={index} className="bg-white rounded-lg border p-6 cursor-pointer">
                <summary className="font-semibold text-gray-900">{item.q}</summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Instant Loan Today</h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto text-center">
          <p className="text-sm">BuyNswipe Credit - Your trusted platform for instant loans</p>
        </div>
      </footer>
    </div>
  )
}
