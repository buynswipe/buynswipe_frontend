import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calculator, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Advanced EMI Calculator - Personal, Home, Auto, Education Loans | BuyNswipe",
  description:
    "Advanced EMI calculator with amortization schedule. Calculate monthly EMI for personal loan, home loan, car loan, education loan instantly.",
  keywords: ["emi calculator", "loan calculator", "monthly payment calculator", "amortization calculator"],
}

export default function EMICalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/credit" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">BuyNswipe</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Advanced EMI Calculator</h1>
          <p className="text-xl text-gray-600">Calculate loans with detailed amortization schedules and comparisons</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                EMI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-gray-600">Enter loan details to calculate your monthly EMI payment.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Loan Amount (₹)</label>
                  <input type="number" placeholder="500000" className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Rate (% p.a.)</label>
                  <input type="number" step="0.1" placeholder="12" className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Tenure (Months)</label>
                  <input type="number" placeholder="36" className="w-full border rounded px-3 py-2" />
                </div>
                <Button className="w-full bg-blue-600">Calculate</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 shadow-xl bg-blue-600 text-white">
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-blue-200 mb-2">Monthly EMI</p>
                <p className="text-5xl font-bold">₹16,607</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded p-4">
                  <p className="text-sm text-blue-200">Principal</p>
                  <p className="text-2xl font-bold">₹5,00,000</p>
                </div>
                <div className="bg-white/10 rounded p-4">
                  <p className="text-sm text-blue-200">Total Interest</p>
                  <p className="text-2xl font-bold">₹97,852</p>
                </div>
              </div>
              <Link href="/credit">
                <Button className="w-full bg-white text-blue-600">Apply Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Loan Types</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Personal Loan", "Home Loan", "Auto Loan", "Education Loan"].map((type) => (
              <Card key={type}>
                <CardContent className="p-6 text-center">
                  <p className="font-semibold">{type} EMI</p>
                  <p className="text-sm text-gray-600 mt-2">Calculate your monthly payment</p>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    Calculate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
