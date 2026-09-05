import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, FileText, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Bajaj Finserv Personal Loan | ₹55 Lakh | 11% Interest | Instant Approval | BuyNswipe",
  description:
    "Apply for Bajaj Finserv Personal Loan with up to ₹55 Lakh, 11% interest rate, 84-month tenure. Quick approval and zero foreclosure charges.",
  keywords: ["Bajaj Finserv personal loan", "Bajaj loan", "personal loan Bajaj"],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "Bajaj Finserv Personal Loan",
  provider: { "@type": "FinancialService", name: "Bajaj Finserv" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "100000",
    highPrice: "5500000",
    priceCurrency: "INR",
  },
}

export default function BajajPersonalLoanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">Highest Loan Amount</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Bajaj Finserv Personal Loan</h1>
              <p className="text-xl text-green-100 mb-8">
                Get up to ₹55 Lakh personal loan at 11% interest. Flexible 84-month tenure, quick approval, zero
                foreclosure charges.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-green-200 text-sm">Loan Amount</p>
                  <p className="text-2xl font-bold">₹55 Lakh</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-green-200 text-sm">Interest Rate</p>
                  <p className="text-2xl font-bold">11%</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-green-200 text-sm">Max Tenure</p>
                  <p className="text-2xl font-bold">84 Months</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-green-200 text-sm">Approval</p>
                  <p className="text-2xl font-bold">Quick</p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8 font-bold"
              >
                <Link href="https://bitli.in/l2EMs89" target="_blank" rel="noopener noreferrer">
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
                <h2 className="text-2xl font-bold mb-6">Why Choose Bajaj?</h2>
                <div className="space-y-4">
                  {[
                    "Highest loan amount up to ₹55 Lakh",
                    "Flexible tenure up to 84 months",
                    "Zero foreclosure charges",
                    "Quick approval & disbursal",
                    "Low interest rate 11%",
                    "Overdraft services available",
                  ].map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Eligibility</h2>
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    {[
                      { label: "Age", value: "25-57 years" },
                      { label: "Monthly Salary", value: "₹35,000+" },
                      { label: "CIBIL Score", value: "685+" },
                      { label: "Employment", value: "Salaried/Self-employed" },
                      { label: "Experience", value: "2+ years" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between bg-gray-50 p-3 rounded">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="text-gray-600 text-sm">{item.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Documents Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3">Personal Documents</h3>
                    <ul className="space-y-2">
                      {["PAN Card", "Aadhaar Card", "Passport/Voter ID"].map((doc) => (
                        <li key={doc} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3">Income Documents</h3>
                    <ul className="space-y-2">
                      {["Salary Slips (3 months)", "Bank Statements (6 months)", "ITR (Self-employed)"].map((doc) => (
                        <li key={doc} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Get Your ₹55 Lakh Loan Today</h2>
              <p className="text-gray-700 mb-6">
                Flexible repayment options with zero foreclosure charges. Quick approval and fast disbursal.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="https://bitli.in/l2EMs89" target="_blank" rel="noopener noreferrer">
                  Apply for Bajaj Loan <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
