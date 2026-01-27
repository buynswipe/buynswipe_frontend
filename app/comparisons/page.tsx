import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingDown, CreditCard, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Compare Loans & Credit Cards | Side-by-Side Comparison | BuyNswipe",
  description: "Compare personal loans, home loans, credit cards side-by-side. View fees, interest rates, eligibility, and find the best product for your needs.",
  keywords: ["loan comparison", "credit card comparison", "best loans", "best credit cards", "compare products"],
}

export default function ComparisonsHub() {
  const comparisons = [
    {
      title: "Personal Loan Comparison",
      description: "Compare interest rates, processing time, eligibility, and fees across 20+ lenders",
      href: "/comparisons/loans",
      icon: TrendingDown,
      features: ["Interest Rates", "Eligibility", "Processing Time", "Documents"],
    },
    {
      title: "Credit Card Comparison",
      description: "Compare cashback, rewards, fees, and benefits across 50+ credit cards",
      href: "/comparisons/credit-cards",
      icon: CreditCard,
      features: ["Cashback Rates", "Annual Fees", "Rewards", "Benefits"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compare Products</h1>
          <p className="text-xl text-blue-100">
            Find the best loans and credit cards for your financial needs
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {comparisons.map((comparison) => {
              const Icon = comparison.icon
              return (
                <Card key={comparison.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-8 h-8 text-blue-600" />
                      <CardTitle className="text-2xl">{comparison.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{comparison.description}</p>
                    <div className="mb-6">
                      <p className="font-semibold text-gray-900 mb-3">Compare by:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {comparison.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={comparison.href}>
                        Start Comparing
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Comparison Tools</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/tools/interest-rate-comparison"
                className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Interest Rate Comparison</h3>
                <p className="text-sm text-gray-600">Compare real-time interest rates across banks</p>
              </Link>
              <Link
                href="/tools/emi-calculator"
                className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">EMI Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your monthly EMI for any loan</p>
              </Link>
              <Link
                href="/tools/affordability-calculator"
                className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Affordability Checker</h3>
                <p className="text-sm text-gray-600">Check how much you can borrow</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
