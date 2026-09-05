import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Self-Employed Loan | Freelancer Loan | Professional Loan | BuyNswipe",
  description:
    "Get instant loan for self-employed professionals, freelancers, doctors, CA, lawyers. No collateral loans up to ₹50 lakh. Quick approval in 48 hours. Low interest rates from 10% p.a.",
  keywords: [
    "self-employed loan",
    "freelancer loan",
    "professional loan",
    "doctor loan",
    "CA loan",
    "lawyer loan",
    "chartered accountant loan",
    "consultant loan",
    "self-employed personal loan",
    "self-employed business loan",
    "loan for independent professionals",
    "loan without ITR",
    "loan based on GST",
    "self-employed loan eligibility",
    "quick loan for self-employed",
    "medical professional loan",
    "dental professional loan",
    "consultant personal loan",
  ],
  openGraph: {
    title: "Self-Employed Loan | Freelancer Loan @ 10% | BuyNswipe",
    description: "Instant loan for self-employed and freelancers. No collateral up to ₹50 Lakh.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      name: "Self-Employed Personal Loan",
      description: "Personal loan designed for self-employed professionals and freelancers.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
      },
      interestRate: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 18,
        unitText: "percent per annum",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can self-employed get personal loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, self-employed professionals can get personal loans up to ₹50 Lakh without collateral. You need minimum annual income of ₹3-5 Lakh and 2 years business stability.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are needed for self-employed loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Required documents: Last 2 years ITR, GST returns (if registered), 6 months bank statements, PAN card, Aadhar, business address proof, and proof of professional credentials.",
          },
        },
        {
          "@type": "Question",
          name: "What is the interest rate for self-employed personal loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Interest rates range from 10-18% p.a. depending on credit score, income stability, and loan amount. Self-employed with good CIBIL score get lower rates.",
          },
        },
      ],
    },
  ],
}

const professionals = [
  { name: "Doctors & Surgeons", minIncome: "₹5 Lakh", maxLoan: "₹100 Lakh" },
  { name: "CA & Chartered Accountants", minIncome: "₹4 Lakh", maxLoan: "₹80 Lakh" },
  { name: "Lawyers & Legal Professionals", minIncome: "₹3 Lakh", maxLoan: "₹50 Lakh" },
  { name: "Freelancers & Consultants", minIncome: "₹2 Lakh", maxLoan: "₹40 Lakh" },
  { name: "Architects & Engineers", minIncome: "₹3 Lakh", maxLoan: "₹50 Lakh" },
  { name: "Writers & Content Creators", minIncome: "₹2 Lakh", maxLoan: "₹30 Lakh" },
]

export default function SelfEmployedLoanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              BuyNswipe
            </Link>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </header>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4">Self-Employed Loans</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Loan for Self-Employed Professionals
                <span className="block text-purple-200 mt-2">₹1 Lakh to ₹100 Lakh @ 10%</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Get instant <strong>self-employed loan</strong>, <strong>freelancer loan</strong>, and{" "}
                <strong>professional loan</strong>. No collateral. Flexible tenure.
              </p>
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
                Check Eligibility Now
              </Button>
            </div>
          </div>
        </section>

        {/* Professionals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Loans for Professional Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((prof) => (
                <Card key={prof.name} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">{prof.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Minimum Annual Income</p>
                        <p className="font-bold text-purple-600">{prof.minIncome}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Max Loan Amount</p>
                        <p className="font-bold text-green-600">{prof.maxLoan}</p>
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Apply <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Self-Employed Loan FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I get loan without showing 2 years ITR?",
                  a: "Some lenders offer loans based on GST returns and 6-12 months bank statements for self-employed professionals. However, most require at least 1 year ITR.",
                },
                {
                  q: "What is the minimum CIBIL score needed?",
                  a: "Minimum CIBIL score requirement is 650 for most self-employed loans. With score below 650, approval is difficult without collateral.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Grow Your Professional Practice</h2>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
              Apply for Self-Employed Loan
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© 2025 BuyNswipe | Loans for Professionals</p>
          </div>
        </footer>
      </div>
    </>
  )
}
