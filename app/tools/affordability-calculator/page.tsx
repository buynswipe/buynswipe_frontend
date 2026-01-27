import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Loan Affordability Calculator - How Much Can You Borrow | BuyNswipe",
  description:
    "Calculate how much loan you can afford based on your income, existing debts, and preferred EMI percentage.",
  keywords: ["loan affordability calculator", "how much loan can i get", "affordable loan amount"],
}

export default function AffordabilityCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/credit" className="text-blue-600 hover:underline">
            ← Back to Credit
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loan Affordability Calculator</h1>
          <p className="text-xl text-gray-600">Find out how much you can borrow based on your income</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Your Financial Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Monthly Income (₹)</label>
                <input type="number" placeholder="50000" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Existing Loan EMI (₹)</label>
                <input type="number" placeholder="10000" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred EMI % of Income</label>
                <input type="number" placeholder="30" className="w-full border rounded px-3 py-2" />
              </div>
              <Button className="w-full bg-green-600">Calculate Affordability</Button>
            </CardContent>
          </Card>

          <Card className="bg-green-600 text-white">
            <CardHeader>
              <CardTitle>Your Affordability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-green-200 mb-2">Maximum Affordable Loan</p>
                <p className="text-5xl font-bold">₹12,50,000</p>
              </div>
              <div>
                <p className="text-sm text-green-200">Affordable Monthly EMI: ₹15,000</p>
                <p className="text-sm text-green-200">Based on 30% of monthly income</p>
              </div>
              <Link href="/credit/affiliate-loans">
                <Button className="w-full bg-white text-green-600">Explore Loan Options</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
