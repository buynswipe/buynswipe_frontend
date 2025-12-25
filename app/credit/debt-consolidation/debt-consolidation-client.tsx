"use client"

import { TrendingDown, Calculator, CheckCircle, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function DebtConsolidationClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Debt Consolidation Loan",
    description: "Consolidate multiple debts into single loan",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
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

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <TrendingDown className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Debt <span className="text-purple-600">Consolidation Loans</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Simplify multiple debts into one loan with lower interest rates and easier management
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Calculate Savings
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Consolidate Your Debts?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Wallet className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Lower Interest Rates</h3>
                <p className="text-gray-600">Reduce from 24% to 9-12% p.a. on consolidated debt</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Single Payment</h3>
                <p className="text-gray-600">One EMI instead of multiple payments every month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Calculator className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Better Credit Score</h3>
                <p className="text-gray-600">Improved credit rating by reducing credit utilization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Calculate Your Savings</h2>
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Before Consolidation</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">Credit Card 1 (24% p.a.)</label>
                      <input type="number" placeholder="₹50,000" className="w-full border rounded px-3 py-2 mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Credit Card 2 (20% p.a.)</label>
                      <input type="number" placeholder="₹30,000" className="w-full border rounded px-3 py-2 mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Personal Loan (15% p.a.)</label>
                      <input type="number" placeholder="₹1,00,000" className="w-full border rounded px-3 py-2 mt-1" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">After Consolidation</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="mb-4">
                      <p className="text-gray-600">Total Debt</p>
                      <p className="text-3xl font-bold text-purple-600">₹1,80,000</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600">Consolidated Rate</p>
                      <p className="text-2xl font-bold text-green-600">10% p.a.</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Monthly Savings</p>
                      <p className="text-2xl font-bold text-blue-600">~₹2,500</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Calculate Your Savings</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">4-Step Consolidation Process</h2>
          <div className="space-y-4">
            {[
              { n: 1, title: "List Your Debts", desc: "Gather details of all outstanding debts" },
              { n: 2, title: "Apply Online", desc: "Fill loan application in 5 minutes" },
              { n: 3, title: "Get Approval", desc: "Instant approval based on credit profile" },
              { n: 4, title: "Payoff & Consolidate", desc: "We payoff debts, you get single EMI" },
            ].map((item) => (
              <div key={item.n} className="flex items-start space-x-4 bg-purple-50 p-6 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.n}
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

      {/* CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Start Consolidating Your Debts Today</h2>
          <p className="text-xl text-purple-100 mb-8">See how much you could save with debt consolidation</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Apply for Consolidation Loan
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto text-center">
          <p className="text-sm">BuyNswipe Credit - Simplify your financial life</p>
        </div>
      </footer>
    </div>
  )
}
