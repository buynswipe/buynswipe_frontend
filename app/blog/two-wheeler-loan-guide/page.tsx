import type { Metadata } from "next"
import Link from "next/link"
import { Bike, TrendingDown, FileCheck, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Two Wheeler Loan Guide - Bike & Scooter Financing | BuyNswipe",
  description:
    "Complete two wheeler loan guide covering motorcycle financing, scooter loans, eligibility, interest rates, and quick approval.",
  keywords: [
    "two wheeler loan",
    "bike loan",
    "scooter loan",
    "motorcycle financing",
    "two wheeler loan eligibility",
    "bike loan interest rate",
    "quick bike loan approval",
  ],
}

export default function TwoWheelerLoanGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Quick Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Two Wheeler Loan Guide</h1>
          <p className="text-xl text-red-100">
            Finance your bike or scooter with instant approval and lowest interest rates
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-red-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Bike className="w-8 h-8 text-red-600" />
              Types of Two Wheeler Loans
            </h2>
            <div className="space-y-6">
              {[
                {
                  type: "Motorcycle Loan",
                  amount: "₹50,000 - ₹10 lakhs",
                  rate: "7-10% p.a.",
                  desc: "Finance premium and standard motorcycles",
                },
                {
                  type: "Scooter Loan",
                  amount: "₹25,000 - ₹5 lakhs",
                  rate: "6.5-9% p.a.",
                  desc: "Quick approval for automatic scooters",
                },
                {
                  type: "Moped Loan",
                  amount: "₹10,000 - ₹2 lakhs",
                  rate: "6-8% p.a.",
                  desc: "Affordable financing for mopeds and gearless vehicles",
                },
              ].map((loan, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-red-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{loan.type}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-bold text-red-600">{loan.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rate</p>
                      <p className="font-bold text-red-600">{loan.rate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{loan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileCheck className="w-8 h-8 text-green-600" />
              Eligibility Criteria
            </h2>
            <div className="space-y-4">
              {[
                { criterion: "Age", detail: "18-65 years" },
                { criterion: "Income", detail: "Monthly income ₹10,000+ (salaried/self-employed)" },
                { criterion: "Employment", detail: "Minimum 6 months service/business" },
                { criterion: "CIBIL Score", detail: "600+ (faster approval with 750+)" },
                { criterion: "Vehicle Cost", detail: "₹50,000 and above" },
                { criterion: "Driving License", detail: "Valid driving license required" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="font-bold text-gray-900">{item.criterion}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-blue-600" />
              Quick Features & Benefits
            </h2>
            <div className="space-y-4">
              {[
                { feature: "Instant Approval", detail: "Same-day to 3-day approval after document submission" },
                { feature: "Low EMI", detail: "Flexible EMI starting from ₹2,000 per month" },
                { feature: "Quick Disbursal", detail: "Money to dealer within 24-48 hours" },
                { feature: "Minimal Documentation", detail: "Only 4-5 documents required" },
                { feature: "No Processing Fee", detail: "Zero processing charges with many lenders" },
                { feature: "Insurance Included", detail: "Comprehensive coverage at competitive rates" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="font-bold text-gray-900">{item.feature}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingDown className="w-8 h-8 text-purple-600" />
              Documents & EMI Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Identity & address proof",
                "Latest salary slip (1 month)",
                "Bank statements (3 months)",
                "Vehicle invoice/quotation",
                "Driving license copy",
                "Insurance policy",
                "Income proof document",
                "Educational qualification",
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-600 flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Two Wheeler Loan</h2>
            <p className="text-red-100 mb-6">Instant approval with lowest interest rates and flexible EMI</p>
            <Link
              href="/credit/affiliate-loans"
              className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
