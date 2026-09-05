import type { Metadata } from "next"
import Link from "next/link"
import { Badge, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Government Loan Schemes | Mudra | CGTMSE | Startup India | BuyNswipe",
  description:
    "Explore government backed loan schemes: PM Mudra Yojana, CGTMSE, Startup India, Stand-Up India. Get subsidized loans with government guarantee. Apply on BuyNswipe.",
  keywords: [
    "government loan schemes",
    "PM Mudra Yojana",
    "CGTMSE loan",
    "Startup India loan",
    "Stand-Up India loan",
    "government business loan",
    "subsidized loan scheme",
    "credit guarantee scheme",
    "government guaranteed loan",
  ],
}

const schemes = [
  {
    name: "PM Mudra Yojana (PMMY)",
    amount: "₹50K - ₹10L",
    rate: "Subsidized",
    desc: "Micro enterprises support scheme by PM Modi",
    features: [
      "Shishu: Up to ₹50,000",
      "Kishore: ₹50,001 to ₹5 Lakhs",
      "Tarun: ₹5,00,001 to ₹10 Lakhs",
      "No collateral required",
      "Flexible repayment",
    ],
  },
  {
    name: "CGTMSE (Credit Guarantee)",
    amount: "₹1L - ₹1Cr",
    rate: "Prime + 2%",
    desc: "Collateral free loans covered by government guarantee",
    features: [
      "100% guarantee coverage",
      "No collateral needed",
      "First time entrepreneurs eligible",
      "Up to 7 years repayment",
      "Covers manufacturing & services",
    ],
  },
  {
    name: "Startup India Scheme",
    amount: "₹1L - ₹10Cr",
    rate: "Subsidized",
    desc: "Support for DPIIT registered startups",
    features: [
      "DPIIT recognition needed",
      "Includes Mudra loans",
      "Priority sector lending",
      "Tax benefits",
      "Incubation support",
    ],
  },
  {
    name: "Stand-Up India Scheme",
    amount: "₹10L - ₹1Cr",
    rate: "PLR",
    desc: "Empowerment of SC/ST/Women entrepreneurs",
    features: [
      "SC/ST/Women entrepreneurs",
      "Manufacturing or services sector",
      "New or existing businesses",
      "Mentorship support",
      "Interest subsidy available",
    ],
  },
]

export default function GovernmentSchemesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are government loan schemes in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Government loan schemes include PM Mudra Yojana, CGTMSE, Startup India, and Stand-Up India. These provide subsidized loans with partial or full government guarantee.",
                },
              },
            ],
          }),
        }}
      />

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            BuyNswipe
          </Link>
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="#apply">Explore Schemes</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-400 text-yellow-900 mb-4">Government Schemes</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Government Loan Schemes
              <span className="block text-orange-200 mt-2">Subsidized & Guaranteed</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Explore <strong>PM Mudra</strong>, <strong>CGTMSE</strong>, <strong>Startup India</strong>, and{" "}
              <strong>Stand-Up India</strong> schemes with government guarantee and subsidized rates.
            </p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
              Check Eligibility
            </Button>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {schemes.map((scheme) => (
              <Card key={scheme.name} className="hover:shadow-lg transition-all border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-xl text-orange-900">{scheme.name}</CardTitle>
                  <p className="text-sm text-orange-700">{scheme.desc}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Loan Amount</p>
                      <p className="font-bold text-orange-600">{scheme.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Interest Rate</p>
                      <p className="font-bold text-green-600">{scheme.rate}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {scheme.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find the Right Government Scheme for You</h2>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-lg px-8">
            Explore All Schemes
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 BuyNswipe | Government Schemes Made Easy</p>
        </div>
      </footer>
    </div>
  )
}
