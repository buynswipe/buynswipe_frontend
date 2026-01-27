import type { Metadata } from "next"
import Link from "next/link"
import { Building2, DollarSign, Home, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Loan Against Property (LAP) Guide - Real Estate Financing | BuyNswipe",
  description:
    "Complete loan against property guide covering LAP features, eligibility, interest rates, advantages, and comparison with home loans.",
  keywords: [
    "loan against property",
    "LAP",
    "property loan",
    "loan on property",
    "LAP interest rate",
    "loan against property eligibility",
    "LAP vs home loan",
  ],
}

export default function LoanAgainstPropertyGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Property Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Against Property Guide</h1>
          <p className="text-xl text-emerald-100">
            Unlock cash from your property with flexible terms and competitive rates
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-emerald-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building2 className="w-8 h-8 text-emerald-600" />
              What is Loan Against Property?
            </h2>
            <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-600 mb-6">
              <p className="text-gray-700 mb-4">
                A Loan Against Property (LAP) is a secured loan where you pledge your residential or commercial property
                as collateral to borrow funds. The loan amount is determined by the property value, market conditions,
                and your repayment capacity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 font-bold">Loan Amount</p>
                  <p className="text-emerald-600 font-bold">₹5 lakhs - ₹5 crores</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold">Interest Rate</p>
                  <p className="text-emerald-600 font-bold">6.5-9.5% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold">Tenure</p>
                  <p className="text-emerald-600 font-bold">5-20 years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-bold">LTV Ratio</p>
                  <p className="text-emerald-600 font-bold">40-60% of property value</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Home className="w-8 h-8 text-blue-600" />
              LAP vs Home Loan Comparison
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <p className="font-bold text-gray-900 mb-3">Loan Against Property</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>✓ 40-60% of property value</li>
                  <li>✓ Flexible usage of funds</li>
                  <li>✓ Quick approval (5-10 days)</li>
                  <li>✓ Higher interest rates</li>
                  <li>✓ Existing property required</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                <p className="font-bold text-gray-900 mb-3">Home Loan</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>✓ 80-90% of property value</li>
                  <li>✓ Can only buy property</li>
                  <li>✓ Longer approval process</li>
                  <li>✓ Lower interest rates</li>
                  <li>✓ New property purchase</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-orange-600" />
              Eligibility & Requirements
            </h2>
            <div className="space-y-4">
              {[
                { item: "Age", detail: "25-65 years (at loan maturity)" },
                { item: "Income", detail: "Monthly income ₹30,000+ (salaried), ₹50,000+ (self-employed)" },
                { item: "Employment", detail: "Minimum 2 years in current job/business" },
                { item: "CIBIL Score", detail: "700+ for easy approval" },
                { item: "Property Value", detail: "₹10 lakhs and above" },
                { item: "Property Type", detail: "Residential, commercial, or industrial property" },
                { item: "Property Status", detail: "Owned free property or nearly paid property" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                  <p className="font-bold text-gray-900">{item.item}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              Document Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Property documents (title deed, mutation)",
                "Property tax receipts (last 2 years)",
                "Building approval/completion certificate",
                "Identity and address proof",
                "Income proof (salary slip/ITR)",
                "Bank statements (last 6 months)",
                "Property valuation certificate",
                "Insurance policy copy",
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-600 flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Loan Against Property</h2>
            <p className="text-emerald-100 mb-6">Get approved in 5-10 days with highest property valuation</p>
            <Link
              href="/credit/loan-against-property"
              className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
