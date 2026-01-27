import type { Metadata } from "next"
import Link from "next/link"
import { Car, DollarSign, Clock, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Auto Loan Guide - Car Financing in India | BuyNswipe",
  description:
    "Complete auto loan guide covering car financing options, interest rates, eligibility criteria, EMI calculation, and best banks.",
  keywords: [
    "auto loan",
    "car loan",
    "car financing",
    "auto loan eligibility",
    "car loan interest rate",
    "auto loan EMI",
    "best car loan banks",
    "car loan documents",
  ],
}

export default function AutoLoanGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Vehicle Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Auto Loan Guide</h1>
          <p className="text-xl text-blue-100">
            Finance your dream car with competitive interest rates and flexible EMI
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Car className="w-8 h-8 text-blue-600" />
              Types of Auto Loans
            </h2>
            <div className="space-y-6">
              {[
                {
                  type: "New Car Loan",
                  amount: "₹5 lakhs - ₹50 lakhs",
                  rate: "6.5-9% p.a.",
                  desc: "Finance a new car from dealership with minimal documentation",
                },
                {
                  type: "Used Car Loan",
                  amount: "₹3 lakhs - ₹30 lakhs",
                  rate: "7-10% p.a.",
                  desc: "Purchase pre-owned vehicles with lower interest rates",
                },
                {
                  type: "Car Refinancing Loan",
                  amount: "₹5 lakhs - ₹50 lakhs",
                  rate: "6-8.5% p.a.",
                  desc: "Refinance existing car loan at lower rates",
                },
              ].map((loan, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{loan.type}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-bold text-blue-600">{loan.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rate</p>
                      <p className="font-bold text-blue-600">{loan.rate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{loan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Auto Loan Eligibility
            </h2>
            <div className="space-y-4">
              {[
                { criterion: "Age", detail: "18-65 years, co-applicant up to 70 years" },
                { criterion: "Income", detail: "Monthly salary ₹20,000+ (salaried), ₹30,000+ (self-employed)" },
                { criterion: "Employment", detail: "Minimum 6 months employment history" },
                { criterion: "CIBIL Score", detail: "Minimum 650+ for approval" },
                { criterion: "Vehicle Age", detail: "New or max 8-10 years old (for used cars)" },
                { criterion: "Income Ratio", detail: "Car EMI ≤ 50% of monthly income" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="font-bold text-gray-900">{item.criterion}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-purple-600" />
              Loan Processing & Tenure
            </h2>
            <div className="space-y-4">
              {[
                { factor: "Processing Time", detail: "2-7 days after document verification" },
                { factor: "Loan-to-Value Ratio", detail: "70-90% of vehicle cost (collateral against car)" },
                { factor: "EMI Tenure", detail: "12-84 months (1-7 years)" },
                { factor: "Down Payment", detail: "10-30% of vehicle cost required" },
                { factor: "Insurance", detail: "Comprehensive insurance mandatory during loan tenure" },
                { factor: "Foreclosure Option", detail: "Repay early with minimal/no penalty" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                  <p className="font-bold text-gray-900">{item.factor}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-8 h-8 text-orange-600" />
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Identity proof (Aadhaar/PAN)",
                "Address proof (utility bill/lease)",
                "Recent salary slips (3 months)",
                "Income tax returns (last 2 years)",
                "Bank statements (last 6 months)",
                "Vehicle quotation/invoice",
                "Registration documents",
                "Insurance policy copy",
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600 flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Auto Loan</h2>
            <p className="text-blue-100 mb-6">Get instant approval and drive home your dream car today</p>
            <Link
              href="/credit/affiliate-loans"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
