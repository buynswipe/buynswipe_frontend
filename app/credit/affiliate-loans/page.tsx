import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { loanProducts } from "@/lib/affiliate-products"

export const metadata: Metadata = {
  title: "Best Personal Loans 2025 | Compare 16+ Lenders | Instant Approval | BuyNswipe",
  description:
    "Compare and apply for the best personal loans from 16+ trusted lenders. Get instant approval, same-day disbursal, and lowest interest rates starting 9.99%. No collateral required.",
  keywords: [
    "personal loans",
    "best personal loans",
    "instant personal loans",
    "personal loan compare",
    "HDFC personal loan",
    "Bajaj Finserv personal loan",
    "Axis Bank personal loan",
    "SBI personal loan",
    "personal loan online",
    "low interest personal loan",
    "quick personal loan",
  ],
}

export default function AffiliateLoansPage() {
  const loansByCategory = loanProducts.reduce(
    (acc, loan) => {
      if (!acc[loan.category]) acc[loan.category] = []
      acc[loan.category].push(loan)
      return acc
    },
    {} as Record<string, typeof loanProducts>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-400 text-yellow-900 mb-4">Compare 16+ Lenders</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Loans from Trusted Lenders</h1>
            <p className="text-xl text-blue-100 mb-8">
              Get instant approval, same-day disbursal, and lowest interest rates. Compare all top lenders on BuyNswipe.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Instant Approval", "Same Day Disbursal", "₹3,000 - ₹75 Lakh", "From 9.99% Interest"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
              Check Eligibility Free
            </Button>
          </div>
        </div>
      </section>

      {/* Loans by Category */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {Object.entries(loansByCategory).map(([category, loans]) => (
            <div key={category} className="mb-20">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">{category} Loans</h2>
              <p className="text-gray-600 mb-8">Compare the best {category.toLowerCase()} loan options</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loans.map((loan) => (
                  <Card key={loan.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle>{loan.name}</CardTitle>
                          <CardDescription className="mt-2">{loan.description}</CardDescription>
                        </div>
                        <Badge variant="outline">{category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y">
                        <div>
                          <p className="text-sm text-gray-600">Loan Amount</p>
                          <p className="text-lg font-bold text-blue-600">{loan.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Interest Rate</p>
                          <p className="text-lg font-bold text-blue-600">{loan.rate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Tenure</p>
                          <p className="text-lg font-bold text-blue-600">{loan.tenure}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                        <ul className="space-y-1">
                          {loan.features.map((feature) => (
                            <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href={loan.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Apply Now
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Which personal loan has the lowest interest rate?",
                a: "Axis Bank and HSBC personal loans offer rates as low as 9.99% p.a. for eligible applicants. Rates vary based on credit profile, income, and employment status.",
              },
              {
                q: "Can I get a personal loan with low CIBIL score?",
                a: "Yes! Several lenders on this page offer loans for CIBIL scores as low as 650-680. However, interest rates will be higher than for scores above 750.",
              },
              {
                q: "What's the fastest personal loan approval?",
                a: "Zype and mPokket offer approval within 60 seconds. However, fund disbursal typically takes 1-4 hours after final approval.",
              },
              {
                q: "Do I need documents for personal loans?",
                a: "Some lenders like Zype and CASHe require minimal documents (PAN only). Others require bank statements, salary slips, and address proof.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
