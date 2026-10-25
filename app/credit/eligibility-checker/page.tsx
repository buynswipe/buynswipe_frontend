import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Loan Eligibility Calculator - Check Instant Loan Eligibility Free Online",
  description:
    "Estimate potential eligibility for personal loan, business loan, or credit card options. Results are indicative only, are not approval, and do not guarantee an offer or rate.",
  keywords: [
    "loan eligibility calculator",
    "check loan eligibility",
    "personal loan eligibility checker",
    "business loan eligibility",
    "credit card eligibility check",
    "instant eligibility check",
    "emi calculator",
    "loan calculator india",
    "home loan eligibility",
    "auto loan eligibility",
    "gold loan eligibility",
    "eligibility criteria loan",
    "check if eligible for loan",
    "minimum salary for loan",
    "loan eligibility without cibil",
    "instant approval loan eligibility",
    "online eligibility check",
    "free eligibility calculator",
    "loan approval probability",
    "instant loan eligibility status",
  ],
  openGraph: {
    title: "Loan Eligibility Calculator - Check Free",
    description:
      "Check instant loan eligibility for all loan types online free. Get approval probability in 2 minutes.",
    url: "https://buynswipe.com/credit/eligibility-checker",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EligibilityCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Loan Eligibility Checker",
            url: "https://buynswipe.com/credit/eligibility-checker",
            applicationCategory: "FinanceApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-emerald-50">
        <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/credit" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">BuyNswipe®</span>
            </Link>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                <Target className="w-4 h-4 mr-1" />
                Indicative eligibility check
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Estimate loan eligibility with clear assumptions
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Indicative eligibility check for personal loan, business loan, credit card, and BNPL options. Get
                an estimate in about 2 minutes. Results are not approval and do not guarantee an offer or rate.
              </p>
              <p className="text-gray-500 mb-8">
                Use this free planning tool to organize your information. Results are indicative; provider checks, consent,
                documentation, and credit policies can affect the final outcome.
              </p>
            </div>

            {/* Main Calculator Card */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review an indicative eligibility estimate</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income *</label>
                      <input
                        type="number"
                        placeholder="Enter in Rs"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eligibility-employment" className="block text-sm font-medium text-gray-700 mb-2">Employment type</label>
                      <select id="eligibility-employment" defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600" required>
                        <option>Select employment type</option>
                        <option>Salaried</option>
                        <option>Self-Employed</option>
                        <option>Business Owner</option>
                        <option>Freelancer</option>
                        <option>Retired</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eligibility-cibil" className="block text-sm font-medium text-gray-700 mb-2">CIBIL score (optional)</label>
                      <input
                        id="eligibility-cibil"
                        name="cibilScore"
                        type="number"
                        min="300"
                        max="900"
                        inputMode="numeric"
                        aria-describedby="eligibility-cibil-help"
                        placeholder="300 to 900"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
<label htmlFor="eligibility-loan-type" className="block text-sm font-medium text-gray-700 mb-2">Loan type</label>
                      <select id="eligibility-loan-type" defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600" required>
                      <option>Select loan type</option>
                      <option>Personal Loan</option>
                      <option>Business Loan</option>
                      <option>Credit Card</option>
                      <option>BNPL / Pay Later</option>
                      <option>Home Loan</option>
                      <option>Auto Loan</option>
                      <option>Gold Loan</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eligibility-loan-amount" className="block text-sm font-medium text-gray-700 mb-2">Loan amount required (₹)</label>
                    <input
                      id="eligibility-loan-amount"
                      name="loanAmount"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="100000000"
                      placeholder="Enter amount in rupees"
                      aria-describedby="eligibility-loan-amount-help"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <p id="eligibility-loan-amount-help" className="mt-1 text-xs text-gray-500">Use whole rupees; this is an indicative assessment, not a quote.</p>
                  </div>

                  <label className="flex items-start gap-3 text-sm text-gray-600"><input type="checkbox" required className="mt-1 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" /><span>I understand this is an indicative assessment, not a loan approval, and agree to the <a href="/privacy" className="font-semibold text-blue-700 underline">privacy notice</a>.</span></label>
                  <p className="text-xs text-gray-500">Final decisions, rates, fees, and documentation come from the selected provider. We do not guarantee approval.</p>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg" size="lg">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Review indicative result
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Loan Eligibility Checker Works</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                    <h3 className="font-bold text-gray-900 mb-2">Fill Details</h3>
                    <p className="text-sm text-gray-600">Enter your basic details - name, income, employment type</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                    <h3 className="font-bold text-gray-900 mb-2">AI Analysis</h3>
                    <p className="text-sm text-gray-600">Our AI analyzes your profile against 50+ lender criteria</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <h3 className="font-bold text-gray-900 mb-2">Match Offers</h3>
                    <p className="text-sm text-gray-600">Get personalized loan offers from best-fit lenders</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                    <h3 className="font-bold text-gray-900 mb-2">Review options</h3>
                    <p className="text-sm text-gray-600">Review indicative matches; final decisions come from the provider</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Loan Eligibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Age: 21-60 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly Income: Minimum Rs 15,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CIBIL Score: 600+ (some lenders offer without CIBIL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Employment: Salaried or self-employed for 2+ years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Documents: Aadhaar, PAN, Bank Statement, Salary Slip</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Loan Eligibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Business Age: Minimum 2 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Annual Turnover: Rs 5 Lakh minimum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">CIBIL Score: 650+ preferred (not mandatory)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">GST Registration: Required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Documents: ITR, Bank Statement, GST Certificate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Does eligibility check affect CIBIL score?</h3>
                    <p className="text-gray-600 text-sm">
                      This tool is intended as an indicative assessment. Whether a later provider check affects your CIBIL score depends on the provider, product, and the consent you give at that step.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">
                      What is the minimum salary required for personal loan?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Minimum monthly salary for personal loan is Rs 15,000. However, some lenders offer loans to
                      individuals with lower income using alternative income verification methods.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Can I get a loan without CIBIL score?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes! Many NBFCs offer personal loans without CIBIL check. They use alternative methods like bank
                      statements, UPI transaction history, and income proof for assessment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">How accurate is the eligibility checker?</h3>
                    <p className="text-gray-600 text-sm">
                      This tool provides an indicative estimate from the information you enter. It does not predict approval, and provider criteria, documentation, and credit checks may change the outcome.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Check Your Eligibility?</h2>
              <p className="text-lg text-blue-100 mb-6">
                It takes less than 2 minutes to check eligibility for all loan types.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Check Eligibility Free Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
