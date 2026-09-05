import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Clock, Percent, FileText, Shield, Zap, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "HDFC Instant Loan | ₹15 Lakh | 10.88% Interest | Instant Approval | BuyNswipe",
  description:
    "Apply for HDFC Instant Loan with instant disbursal, 100% digital process, and pre-approved for cardholders. Get ₹15 Lakh at 10.88% with 6-48 months tenure.",
  keywords: ["HDFC instant loan", "HDFC personal loan", "instant loan HDFC", "HDFC loan instant approval"],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "HDFC Instant Loan",
  provider: { "@type": "FinancialService", name: "HDFC Bank" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "50000",
    highPrice: "1500000",
    priceCurrency: "INR",
  },
  interestRate: { "@type": "QuantitativeValue", minValue: 10.88, maxValue: 10.88 },
}

export default function HDFCInstantLoanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">Instant Disbursal</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">HDFC Instant Loan</h1>
              <p className="text-xl text-blue-100 mb-8">
                Hassle-free and pre-approved loan for HDFC Bank credit cardholders. Get up to ₹15 Lakh at 10.88%
                interest with 100% digital journey.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Loan Amount</p>
                  <p className="text-2xl font-bold">₹15 Lakh</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Interest Rate</p>
                  <p className="text-2xl font-bold">10.88%</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Tenure</p>
                  <p className="text-2xl font-bold">6-48 Months</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-blue-200 text-sm">Approval</p>
                  <p className="text-2xl font-bold">Instant</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                <Link href="https://bitli.in/1PSoadc" target="_blank" rel="noopener noreferrer">
                  Apply Now <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="space-y-4">
                  {[
                    "Instant Disbursal within 24 hours",
                    "100% Digital Journey - No paperwork",
                    "Pre-approved for HDFC cardholders",
                    "Processing fee 0.5% to 1%",
                    "Flexible repayment options",
                    "No collateral required",
                  ].map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Eligibility Criteria</h2>
                <div className="space-y-3">
                  {[
                    { label: "Age", value: "21-60 years" },
                    { label: "HDFC Card Required", value: "Yes" },
                    { label: "Employment", value: "Salaried/Self-employed" },
                    { label: "CIBIL Score", value: "700+" },
                    { label: "Monthly Income", value: "₹25,000+" },
                    { label: "Work Experience", value: "1+ year" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between bg-gray-50 p-3 rounded">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Documents Required</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">HDFC Instant Loan requires minimal documentation:</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {["PAN Card", "Aadhaar Card", "Salary Slips (Last 3 months)", "Bank Statements (Last 6 months)"].map(
                    (doc) => (
                      <li key={doc} className="flex items-center gap-2 text-gray-700">
                        <FileText className="w-4 h-4 text-blue-600" /> {doc}
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose HDFC Instant Loan?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" /> Quick Process
                  </h3>
                  <p className="text-gray-700">
                    Instant approval for pre-approved HDFC cardholders. Disbursal within 24 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" /> 100% Digital
                  </h3>
                  <p className="text-gray-700">Completely paperless process. Apply online, get approved online.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" /> Secure
                  </h3>
                  <p className="text-gray-700">Bank-level security with RBI-regulated HDFC Bank.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Percent className="w-5 h-5 text-blue-600" /> Competitive Rates
                  </h3>
                  <p className="text-gray-700">10.88% interest rate is among the best in the market.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-gray-700 mb-6">
                Get your HDFC Instant Loan approved in minutes with our simple application process.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="https://bitli.in/1PSoadc" target="_blank" rel="noopener noreferrer">
                  Apply for HDFC Instant Loan <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
