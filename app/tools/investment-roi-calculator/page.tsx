import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Investment ROI Calculator - Calculate Returns | BuyNswipe",
  description: "Calculate your investment returns with compounding interest. See how your money grows over time.",
  keywords: ["roi calculator", "investment calculator", "compound interest calculator", "returns calculator"],
}

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="border-b bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/resources" className="text-blue-600">
            ← Back
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment ROI Calculator</h1>
          <p className="text-xl text-gray-600">Calculate returns from your investments with compounding</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Initial Investment (₹)</label>
                <input type="number" placeholder="100000" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Annual Return Rate (%)</label>
                <input type="number" step="0.1" placeholder="12" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Investment Period (Years)</label>
                <input type="number" placeholder="5" className="w-full border rounded px-3 py-2" />
              </div>
              <Button className="w-full bg-purple-600">Calculate ROI</Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-600 text-white">
            <CardHeader>
              <CardTitle>Your Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-purple-200 mb-2">Final Amount</p>
                <p className="text-5xl font-bold">₹1,76,234</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded p-4">
                  <p className="text-sm text-purple-200">Profit Gained</p>
                  <p className="text-2xl font-bold">₹76,234</p>
                </div>
                <div className="bg-white/10 rounded p-4">
                  <p className="text-sm text-purple-200">ROI %</p>
                  <p className="text-2xl font-bold">76.23%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
