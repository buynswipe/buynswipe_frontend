"use client"

import { Download, CheckCircle, CreditCard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PersonalLoanVsCreditCardClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    name: "Personal Loan vs Credit Card Comparison",
    description: "Comprehensive comparison between personal loans and credit cards",
    hasPart: [
      {
        "@type": "FinancialProduct",
        name: "Personal Loan",
        description: "Fixed amount borrowed with defined repayment period",
      },
      {
        "@type": "FinancialProduct",
        name: "Credit Card",
        description: "Revolving credit with flexible spending limits",
      },
    ],
  }

  const faqs = [
    {
      question: "Which is cheaper - personal loan or credit card?",
      answer:
        "Personal loans typically have lower interest rates (8-12% p.a.) compared to credit cards (15-24% p.a.), making them cheaper for larger amounts. However, credit cards offer 0% interest for 45-60 days.",
    },
    {
      question: "Can I use a personal loan for anything?",
      answer:
        "Yes, personal loans are unsecured and can be used for any purpose - debt consolidation, home renovation, education, vacation, or emergency expenses.",
    },
    {
      question: "Is credit card debt easier to manage?",
      answer:
        "Credit cards offer flexibility but can lead to debt accumulation. Personal loans enforce disciplined repayment with fixed monthly EMIs.",
    },
    {
      question: "What credit score do I need for a personal loan?",
      answer:
        "Generally, a CIBIL score of 750+ is ideal. Some lenders approve scores as low as 600, but with higher interest rates.",
    },
    {
      question: "Can I get a personal loan faster than a credit card?",
      answer:
        "Yes, personal loans can be approved in 24-48 hours with minimal documentation. Credit cards typically take 5-7 business days.",
    },
    {
      question: "Which builds better credit history?",
      answer:
        "Both help build credit, but personal loans show installment credit management while credit cards show revolving credit management. Having both diversifies your credit mix.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
          <nav className="hidden md:flex space-x-6">
            <Link href="/credit" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/credit/personal-loan" className="text-gray-600 hover:text-blue-600 transition-colors">
              Personal Loan
            </Link>
            <Link href="/credit/credit-card" className="text-gray-600 hover:text-blue-600 transition-colors">
              Credit Card
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Personal Loan vs <span className="text-blue-600">Credit Card</span> – Which Should You Choose?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete comparison guide to help you understand the differences and choose the right financial product for
            your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-5 h-5 mr-2" />
              Comparison Guide
            </Button>
            <Button size="lg" variant="outline">
              Compare Offers
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 font-semibold text-blue-600">Personal Loan</th>
                  <th className="px-4 py-3 font-semibold text-green-600">Credit Card</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Interest Rate</td>
                  <td className="px-4 py-3 text-gray-600">8-12% p.a.</td>
                  <td className="px-4 py-3 text-gray-600">15-24% p.a.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Amount Range</td>
                  <td className="px-4 py-3 text-gray-600">₹10,000 - ₹50 Lakh+</td>
                  <td className="px-4 py-3 text-gray-600">₹10,000 - ₹10 Lakh</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Tenure</td>
                  <td className="px-4 py-3 text-gray-600">2-7 years</td>
                  <td className="px-4 py-3 text-gray-600">Flexible (revolving)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Approval Time</td>
                  <td className="px-4 py-3 text-gray-600">24-48 hours</td>
                  <td className="px-4 py-3 text-gray-600">5-7 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Documentation</td>
                  <td className="px-4 py-3 text-gray-600">Minimal (KYC)</td>
                  <td className="px-4 py-3 text-gray-600">Moderate</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Prepayment</td>
                  <td className="px-4 py-3 text-gray-600">Allowed (few charges)</td>
                  <td className="px-4 py-3 text-gray-600">No penalty</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-left font-medium text-gray-800">Rewards</td>
                  <td className="px-4 py-3 text-gray-600">None typically</td>
                  <td className="px-4 py-3 text-gray-600">Cashback, points</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Comparison</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personal Loan */}
            <Card className="bg-white border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Personal Loan</h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Lower interest rates (8-12% p.a.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Fixed repayment schedule</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Larger loan amounts available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Can be used for any purpose</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Improves installment credit history</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Disadvantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Strict eligibility criteria</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Processing fees (0.5-1%)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Prepayment charges</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Fixed commitment period</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Credit Card */}
            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Credit Card</h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">0% interest for 45-60 days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Cashback and reward points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Revolving credit - reusable limit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">No prepayment penalty</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Travel and lifestyle benefits</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Disadvantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">High interest rates (15-24% p.a.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Easy to overspend</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Annual/joining fees</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 mt-0.5 text-red-600">✕</div>
                      <span className="text-gray-600">Lower credit limits</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Use What */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">When to Use Which?</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Choose Personal Loan For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">Large expenses (₹1-50 lakh+)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">Debt consolidation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">Home renovation or major purchases</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">Education or medical emergencies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">Business expansion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">When you need predictable EMIs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Choose Credit Card For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Small to medium expenses (₹10k-10L)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Regular purchases and bills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Earning rewards and cashback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Revolving credit needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">When you can pay within 45-60 days</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Travel and lifestyle benefits needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-blue-300 transition-colors"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-2 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make Your Choice?</h2>
          <p className="text-xl text-blue-100 mb-8">Compare offers and apply for the best option for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/credit/personal-loan">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Personal Loans
              </Button>
            </Link>
            <Link href="/credit/credit-card">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Compare Credit Cards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto text-center">
          <p className="text-sm">BuyNswipe Credit | Helping you find the right financial product for your needs</p>
        </div>
      </footer>
    </div>
  )
}
