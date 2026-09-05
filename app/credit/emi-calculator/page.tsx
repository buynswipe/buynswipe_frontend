import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, ArrowLeft, IndianRupee, Percent, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "EMI Calculator - Calculate Loan EMI Online Free | BuyNswipe Credit",
  description:
    "Free EMI calculator for personal loan, home loan, car loan, education loan. Calculate monthly EMI, total interest, and loan amortization schedule instantly. Best EMI calculator India 2025.",
  keywords: [
    "emi calculator",
    "loan emi calculator",
    "personal loan emi calculator",
    "home loan emi calculator",
    "car loan emi calculator",
    "education loan emi calculator",
    "emi calculator india",
    "monthly emi calculator",
    "loan calculator",
    "interest calculator",
    "amortization calculator",
    "loan repayment calculator",
    "emi calculation formula",
    "calculate emi online",
    "free emi calculator",
    "best emi calculator",
  ],
  openGraph: {
    title: "EMI Calculator - Calculate Loan EMI Online Free",
    description: "Calculate your loan EMI instantly. Free calculator for personal, home, car, and education loans.",
    url: "https://buynswipe.com/credit/emi-calculator",
    siteName: "BuyNswipe Credit",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "BuyNswipe EMI Calculator",
  description: "Free online EMI calculator for all types of loans",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  provider: {
    "@type": "Organization",
    name: "BuyNswipe Technology Pvt. Ltd.",
  },
}

export default function EMICalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main className="container mx-auto px-4 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Free Online Tool</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              EMI Calculator - Calculate Your Loan EMI Instantly
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate monthly EMI for personal loan, home loan, car loan, education loan. Get instant results with
              detailed amortization schedule.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Calculator Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  Loan EMI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Loan Amount (Rs)
                  </Label>
                  <Input id="amount" type="number" placeholder="Enter loan amount" defaultValue="500000" />
                  <p className="text-sm text-gray-500">Rs 10,000 to Rs 5,00,00,000</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate" className="flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Interest Rate (% per annum)
                  </Label>
                  <Input id="rate" type="number" step="0.1" placeholder="Enter interest rate" defaultValue="12" />
                  <p className="text-sm text-gray-500">Current rates: 10.5% - 24% p.a.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tenure" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Loan Tenure (Months)
                  </Label>
                  <Input id="tenure" type="number" placeholder="Enter tenure in months" defaultValue="36" />
                  <p className="text-sm text-gray-500">12 to 84 months</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardHeader>
                <CardTitle className="text-white">Your EMI Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-blue-200 mb-2">Monthly EMI</p>
                  <p className="text-5xl font-bold">Rs 16,607</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-blue-200 text-sm">Principal Amount</p>
                    <p className="text-2xl font-bold">Rs 5,00,000</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-blue-200 text-sm">Total Interest</p>
                    <p className="text-2xl font-bold">Rs 97,852</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-blue-200 text-sm">Total Payment</p>
                  <p className="text-3xl font-bold">Rs 5,97,852</p>
                </div>

                <Link href="/credit">
                  <Button className="w-full bg-white text-blue-700 hover:bg-gray-100" size="lg">
                    Apply for Loan at Best Rates
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* EMI Formula Explanation */}
          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How is EMI Calculated?</h2>
            <Card>
              <CardContent className="p-8">
                <div className="bg-gray-100 rounded-lg p-6 text-center mb-6">
                  <p className="text-lg font-mono">EMI = P x R x (1+R)^N / [(1+R)^N - 1]</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600">P</span>
                    </div>
                    <h3 className="font-semibold">Principal</h3>
                    <p className="text-sm text-gray-600">The loan amount you borrow</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600">R</span>
                    </div>
                    <h3 className="font-semibold">Rate of Interest</h3>
                    <p className="text-sm text-gray-600">Monthly interest rate (Annual rate / 12)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-blue-600">N</span>
                    </div>
                    <h3 className="font-semibold">Number of EMIs</h3>
                    <p className="text-sm text-gray-600">Loan tenure in months</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Loan Types */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Calculate EMI for All Loan Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Personal Loan EMI", rate: "10.5% - 24%", tenure: "12-60 months" },
                { name: "Home Loan EMI", rate: "8.5% - 12%", tenure: "60-360 months" },
                { name: "Car Loan EMI", rate: "7.5% - 15%", tenure: "12-84 months" },
                { name: "Education Loan EMI", rate: "8% - 14%", tenure: "36-180 months" },
              ].map((loan, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-3">{loan.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">Interest: {loan.rate}</p>
                    <p className="text-sm text-gray-600">Tenure: {loan.tenure}</p>
                    <Button variant="outline" className="mt-4 w-full bg-transparent">
                      Calculate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mt-16 bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Benefits of Using EMI Calculator</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Plan your monthly budget accurately",
                "Compare different loan options easily",
                "Understand total interest payable",
                "Choose optimal loan tenure",
                "Make informed borrowing decisions",
                "Free and instant calculations",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply for a Loan?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Compare offers from 50+ banks and NBFCs. Get instant approval with lowest interest rates.
            </p>
            <Link href="/credit">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply Now - Get Best Rates
              </Button>
            </Link>
          </section>
        </main>


      </div>
    </>
  )
}
