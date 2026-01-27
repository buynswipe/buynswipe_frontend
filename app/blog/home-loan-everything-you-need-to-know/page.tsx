import type { Metadata } from "next"
import Link from "next/link"
import { Home, DollarSign, FileCheck, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Home Loan Complete Guide - Types, Eligibility, Process | BuyNswipe",
  description:
    "Complete home loan guide covering types, eligibility, documentation, processing time, and cost of home loans in India.",
  keywords: [
    "home loan",
    "home loan eligibility",
    "home loan process",
    "home loan interest rate",
    "home loan documentation",
    "home loan tenure",
    "home loan disbursement",
  ],
}

export default function HomeLoanGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Home Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Home Loan Guide</h1>
          <p className="text-xl text-green-100">Everything you need to know about home loans in India</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Home className="w-8 h-8 text-green-600" />
              Types of Home Loans
            </h2>
            <div className="space-y-6">
              {[
                {
                  type: "Loan Against Property (LAP)",
                  amount: "₹10 lakhs - ₹10 crores",
                  rate: "8-11% p.a.",
                  desc: "Borrow against your existing property for any purpose",
                },
                {
                  type: "Home Purchase Loan",
                  amount: "₹25 lakhs - ₹5 crores",
                  rate: "6.5-8.5% p.a.",
                  desc: "For buying new or resale residential property",
                },
                {
                  type: "Home Construction Loan",
                  amount: "₹50 lakhs - ₹2 crores",
                  rate: "7-9.5% p.a.",
                  desc: "For building new home on your own land",
                },
                {
                  type: "Home Improvement Loan",
                  amount: "₹5 lakhs - ₹50 lakhs",
                  rate: "8-11% p.a.",
                  desc: "For renovation, extension, or major repairs",
                },
                {
                  type: "Home Top-up Loan",
                  amount: "₹5 lakhs - ₹2 crores",
                  rate: "7-10% p.a.",
                  desc: "Additional loan on existing home with existing mortgage",
                },
              ].map((loan, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{loan.type}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-bold text-green-600">{loan.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rate</p>
                      <p className="font-bold text-green-600">{loan.rate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{loan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileCheck className="w-8 h-8 text-blue-600" />
              Home Loan Eligibility
            </h2>
            <div className="space-y-4">
              {[
                { criterion: "Age", detail: "Minimum 21 years, maximum 65-70 years at loan maturity" },
                { criterion: "Income", detail: "Minimum monthly income ₹15,000 - ₹25,000 depending on lender" },
                { criterion: "CIBIL Score", detail: "Minimum 650+ (higher scores get better rates)" },
                { criterion: "Employment", detail: "Salaried or self-employed with 3+ years experience" },
                { criterion: "Property Value", detail: "Loan amount usually 80-90% of property value" },
                { criterion: "ITR/Salary", detail: "2 years IT returns or 6 months salary slips required" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="font-bold text-gray-900">{item.criterion}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-purple-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="w-8 h-8 text-purple-600" />
              Home Loan Process & Timeline
            </h2>
            <div className="space-y-4">
              {[
                { step: "Application", time: "1-2 days", desc: "Submit application with documents" },
                { step: "Document Verification", time: "5-7 days", desc: "Bank verifies all submitted documents" },
                { step: "Property Valuation", time: "3-5 days", desc: "Bank conducts property assessment" },
                { step: "Loan Approval", time: "5-7 days", desc: "Final approval by bank committee" },
                { step: "Sanction Letter", time: "1-2 days", desc: "Receive formal offer letter" },
                { step: "Disbursement", time: "7-14 days", desc: "Money transferred to your account" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 flex items-start gap-4 border-l-4 border-purple-600">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{item.step}</p>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                  <p className="text-purple-600 font-bold whitespace-nowrap">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign className="w-8 h-8 text-orange-600" />
              Home Loan Costs & Charges
            </h2>
            <div className="space-y-4">
              {[
                {
                  charge: "Processing Fee",
                  amount: "0.5-1% of loan amount",
                  desc: "Non-refundable fee charged by bank",
                },
                { charge: "Documentation Charges", amount: "₹500-₹2,000", desc: "For legal documentation" },
                { charge: "Valuation Charges", amount: "₹1,500-₹5,000", desc: "Property valuation fee" },
                { charge: "Insurance", amount: "0.5-1% per annum", desc: "Mortgage protection insurance" },
                {
                  charge: "Registration & Stamp Duty",
                  amount: "4-7% of property value",
                  desc: "Government charges (state dependent)",
                },
                { charge: "EMI", amount: "Varies", desc: "Monthly principal + interest payment" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900">{item.charge}</p>
                    <p className="text-orange-600 font-bold">{item.amount}</p>
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Your Home Loan Today</h2>
            <p className="text-green-100 mb-6">Compare rates from top lenders and buy your dream home</p>
            <Link
              href="/credit/home-loan"
              className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition"
            >
              Apply for Home Loan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
