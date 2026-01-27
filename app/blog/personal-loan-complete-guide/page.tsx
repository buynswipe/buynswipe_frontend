import type { Metadata } from "next"
import Link from "next/link"
import { Zap, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Personal Loan Guide - Complete Information for India | BuyNswipe",
  description:
    "Complete guide to personal loans in India. Learn types, eligibility, documents required, interest rates, approval process.",
  keywords: [
    "personal loan guide",
    "what is personal loan",
    "personal loan eligibility",
    "personal loan documents",
    "personal loan interest rate",
    "personal loan approval",
    "best personal loans",
    "personal loan application",
  ],
}

export default function PersonalLoanGuidePage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Complete Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Loan Complete Guide</h1>
          <p className="text-xl text-blue-100">Everything you need to know about personal loans in India</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a Personal Loan?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong>personal loan</strong> is an unsecured loan provided by banks and NBFCs that doesn't require
              collateral. You receive the loan amount upfront and repay it in equal monthly installments (EMIs) over a
              fixed tenure (12-60 months). Personal loans are quick to process and flexible in usage.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Personal Loans</h2>
            <div className="space-y-4">
              {[
                {
                  type: "Salary-Based Loans",
                  desc: "For salaried individuals with fixed income, easy approval",
                },
                {
                  type: "Self-Employed Loans",
                  desc: "For business owners and freelancers with profit & loss statements",
                },
                {
                  type: "MSME/Business Loans",
                  desc: "For small business owners, higher loan amount available",
                },
                {
                  type: "Home Improvement Loans",
                  desc: "Specifically for home renovation and repair costs",
                },
                {
                  type: "Wedding Loans",
                  desc: "Lower interest rates for wedding-related expenses",
                },
                {
                  type: "Education Loans",
                  desc: "For higher education with government backing options",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    {item.type}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Loan Eligibility Criteria</h2>
            <div className="space-y-4">
              {[
                { criterion: "Age", detail: "Minimum 21 years, maximum 60-65 years at end of loan tenure" },
                {
                  criterion: "Employment",
                  detail: "Salaried employee, self-employed, or business owner with 2+ years experience",
                },
                { criterion: "Income", detail: "Minimum monthly income ₹15,000-25,000 (varies by lender)" },
                { criterion: "CIBIL Score", detail: "Minimum 650-700 credit score required" },
                { criterion: "Bank Account", detail: "Active bank account for salary/income credit" },
                { criterion: "Residence", detail: "Indian citizen or NRI with Indian bank account" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-gray-900 text-lg">{item.criterion}</h3>
                  <p className="text-gray-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for Personal Loan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Salaried Employees</h3>
                <ul className="space-y-2">
                  {[
                    "PAN Card",
                    "Aadhar Card",
                    "Latest 3 months salary slips",
                    "Last 2 years IT returns",
                    "Bank statements (6 months)",
                    "Address proof",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Employed</h3>
                <ul className="space-y-2">
                  {[
                    "PAN Card",
                    "Aadhar Card",
                    "Business registration",
                    "Last 2 years profit & loss",
                    "Last 2 years IT returns",
                    "Bank statements (12 months)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Loan Interest Rates</h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="space-y-4">
                {[
                  { bank: "HDFC Bank", rate: "7-12% p.a." },
                  { bank: "ICICI Bank", rate: "8-12.5% p.a." },
                  { bank: "SBI", rate: "7-9.5% p.a." },
                  { bank: "Axis Bank", rate: "8-11.5% p.a." },
                  { bank: "Bajaj Finserv", rate: "10.99-15.99% p.a." },
                  { bank: "LendingKart", rate: "12-27% p.a." },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-bold text-gray-900">{item.bank}</span>
                    <span className="text-blue-600 font-bold">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">6-Step Personal Loan Application Process</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Choose Lender", desc: "Compare rates, tenure, and features across banks" },
                { step: 2, title: "Check Eligibility", desc: "Verify you meet income and CIBIL score requirements" },
                { step: 3, title: "Submit Application", desc: "Apply online or visit branch with documents" },
                { step: 4, title: "Document Verification", desc: "Bank verifies documents (usually 2-3 days)" },
                { step: 5, title: "Credit Approval", desc: "Get approval notification via SMS/email" },
                { step: 6, title: "Disbursal", desc: "Loan amount credited within 24-48 hours" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 text-blue-800 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Personal Loan Now</h2>
            <p className="text-blue-100 mb-6">Compare top lenders and get instant approval</p>
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
