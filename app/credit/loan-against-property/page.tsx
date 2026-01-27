import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, TrendingUp, CheckCircle, ArrowRight, DollarSign, Calendar, FileCheck, Building2 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Loan Against Property Online - LAP Instant Approval | Best Interest Rates",
  description:
    "Get instant loan against property online with lowest interest rates from 7.5% p.a. Upto Rs 5 Crore. Fast approval, minimal documentation, flexible repayment. LAP online application in 24 hours.",
  keywords: [
    "loan against property",
    "lap loan",
    "loan against property online",
    "loan against property rate",
    "loan against residential property",
    "loan against commercial property",
    "property loan",
    "home loan against property",
    "instant loan against property",
    "low interest lap loan",
    "lap interest rate",
    "lap emi calculator",
    "best lap rates",
    "lap eligibility",
    "lap documents required",
    "lap instant approval",
    "quick lap loan",
    "lap without valuation",
    "lap online application",
    "lap 24 hours approval",
  ],
  openGraph: {
    title: "Loan Against Property - Instant Approval Online",
    description: "Get instant LAP loan from Rs 5 Lakh to Rs 5 Crore with lowest interest rates at 7.5% p.a.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LoanAgainstPropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: "Loan Against Property",
            url: "https://buynswipe.com/credit/loan-against-property",
            provider: {
              "@type": "Organization",
              name: "BuyNswipe Technology",
            },
            interestRate: {
              "@type": "QuantitativeValue",
              minValue: 7.5,
              maxValue: 12,
              unitText: "percent per annum",
            },
            amount: {
              "@type": "MonetaryAmount",
              minValue: 500000,
              maxValue: 50000000,
              currency: "INR",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
        <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/credit" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">BuyNswipe</span>
            </Link>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                <Building2 className="w-4 h-4 mr-1" />
                Lowest LAP Interest Rates
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Loan Against Property (LAP) - Instant Approval Online
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Get instant loan against residential or commercial property with interest rates starting from 7.5% p.a.
                Upto Rs 5 Crore. 24-hour approval with minimal documentation.
              </p>
              <p className="text-gray-500 mb-8">
                Fast approval LAP loan online. No property valuation required. Flexible EMI options. Best rates in
                market. Apply now!
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="p-6">
                  <DollarSign className="w-10 h-10 text-amber-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Lowest Rates</h3>
                  <p className="text-gray-600 text-sm">Interest rates from 7.5% p.a. Lowest LAP rates in India 2025.</p>
                  <p className="text-2xl font-bold text-amber-600 mt-3">7.5% - 12%</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <TrendingUp className="w-10 h-10 text-orange-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">High Loan Amount</h3>
                  <p className="text-gray-600 text-sm">Loan amount upto Rs 5 Crore based on property value.</p>
                  <p className="text-2xl font-bold text-orange-600 mt-3">Rs 5 Cr+</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="p-6">
                  <Calendar className="w-10 h-10 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Fast Approval</h3>
                  <p className="text-gray-600 text-sm">Approval in 24 hours. Instant disbursal. Quick LAP online.</p>
                  <p className="text-2xl font-bold text-red-600 mt-3">24 Hrs</p>
                </CardContent>
              </Card>
            </div>

            {/* LAP Calculator */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">LAP EMI Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Value (Rs)</label>
                    <input
                      type="number"
                      placeholder="Enter property value"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount Required (Rs)</label>
                      <input
                        type="number"
                        placeholder="Enter loan amount"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-600">
                        <option>5 years</option>
                        <option>10 years</option>
                        <option>15 years</option>
                        <option>20 years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (p.a.)</label>
                    <input
                      type="number"
                      placeholder="7.5 - 12%"
                      defaultValue="9.5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 py-3 text-lg" size="lg">
                    Calculate LAP EMI
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility & Requirements */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">LAP Eligibility Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Age: 25 - 70 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly Income: Minimum Rs 25,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CIBIL Score: 700+ preferred</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Property: Residential or commercial</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Documents Required for LAP</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Property papers and latest mutation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Last 6 months bank statements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aadhaar, PAN, and ID proof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Latest salary slip / ITR</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Apply for LAP - Get Rs 5 Crore at 7.5% p.a.</h2>
              <p className="text-lg text-amber-100 mb-6">
                Fastest approval in 24 hours. Minimal documentation. Best LAP interest rates.
              </p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Apply for LAP Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
