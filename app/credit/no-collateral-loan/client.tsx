"use client"

import { Download, ShieldCheck, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function NoCollateralLoanClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "No Collateral Loan",
    description: "Unsecured loans without collateral requirements",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            No Collateral Loans - <span className="text-green-600">Unsecured Financing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Borrow up to ₹50 lakhs without pledging assets or collateral. Instant approval for creditworthy individuals
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Apply for Unsecured Loan
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advantages of No Collateral Loans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "No Asset Risk", desc: "Keep your property and assets secure" },
              { icon: TrendingUp, title: "Flexible Use", desc: "Use funds for any personal purpose" },
              { icon: Users, title: "Easy Approval", desc: "Based on income and credit score only" },
              { icon: Download, title: "Quick Process", desc: "Minimal documentation required" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How No Collateral Loans Work</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "Evaluation", desc: "Lender evaluates your income and credit score" },
              { step: 2, title: "Verification", desc: "Quick KYC and income verification" },
              { step: 3, title: "Decision", desc: "Instant approval based on creditworthiness" },
              { step: 4, title: "Disbursal", desc: "Funds transferred to your account" },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4 bg-white p-6 rounded-lg">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is collateral-free loan safe?",
                a: "Yes, it is regulated by RBI and banks use credit scores to assess risk.",
              },
              {
                q: "What if I have low credit score?",
                a: "Some lenders approve loans with scores below 600, but at higher interest rates.",
              },
            ].map((item, index) => (
              <details key={index} className="bg-gray-50 rounded-lg border p-6 cursor-pointer">
                <summary className="font-semibold text-gray-900">{item.q}</summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Unsecured Loan Today</h2>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Apply Now - No Collateral Needed
          </Button>
        </div>
      </section>


    </div>
  )
}
