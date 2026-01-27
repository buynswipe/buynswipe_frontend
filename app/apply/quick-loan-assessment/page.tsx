import type { Metadata } from "next"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Quick Loan Assessment | Check Your Eligibility | BuyNswipe",
  description:
    "Quick 3-step eligibility check for personal loans. Get instant results and recommendations based on your income and credit profile.",
  keywords: [
    "loan eligibility",
    "personal loan eligibility",
    "check loan eligibility",
    "loan assessment",
    "instant loan approval",
  ],
}

export default function QuickLoanAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Quick Assessment</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quick Loan Eligibility Check</h1>
          <p className="text-xl text-green-100">Get your instant eligibility result in 3 simple steps</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <form className="space-y-8">
              {/* Step 1 */}
              <div className="pb-8 border-b">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-2xl font-bold">Basic Information</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name*</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Age*</label>
                      <input type="number" className="w-full border border-gray-300 rounded-lg p-3" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Employment Type*</label>
                      <select className="w-full border border-gray-300 rounded-lg p-3" required>
                        <option>Salaried</option>
                        <option>Self-Employed</option>
                        <option>Business Owner</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="pb-8 border-b">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-2xl font-bold">Financial Details</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Monthly Income (₹)*</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-3"
                      placeholder="50,000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Existing Monthly EMI (₹)*</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-3"
                      placeholder="10,000"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-2xl font-bold">Loan Details</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Loan Amount (₹)*</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-3"
                      placeholder="5,00,000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Preferred Tenure (Months)*</label>
                    <select className="w-full border border-gray-300 rounded-lg p-3" required>
                      <option>12</option>
                      <option>24</option>
                      <option>36</option>
                      <option>48</option>
                      <option>60</option>
                    </select>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 h-auto">
                Check Eligibility
              </Button>
            </form>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Fast Results</h3>
                <p className="text-sm text-gray-600">Get instant eligibility confirmation within seconds</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">No Hard Inquiry</h3>
                <p className="text-sm text-gray-600">Soft check only - won't affect your credit score</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
