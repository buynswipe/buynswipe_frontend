import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Clock, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How to Apply for Personal Loan - Step-by-Step Guide | BuyNswipe",
  description:
    "Complete step-by-step guide on how to apply for personal loan. Learn documents, process, timeline, and approval tips.",
  keywords: [
    "how to apply for personal loan",
    "personal loan application process",
    "personal loan documents",
    "online personal loan application",
    "personal loan approval process",
  ],
}

export default function HowToApplyPersonalLoanPage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Application Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Apply for Personal Loan</h1>
          <p className="text-xl text-blue-100">
            Complete step-by-step guide to apply for personal loan online and offline
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8-Step Personal Loan Application Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Check Your Eligibility",
                  desc: "Verify basic requirements: age 21-60, income ₹15,000+, CIBIL 650+, employment 2+ years",
                },
                {
                  step: 2,
                  title: "Gather Required Documents",
                  desc: "Collect PAN, Aadhar, salary slips, IT returns, bank statements, and address proof",
                },
                {
                  step: 3,
                  title: "Compare Loan Options",
                  desc: "Check interest rates, tenure, EMI, processing fees across top lenders",
                },
                {
                  step: 4,
                  title: "Apply Online or Visit Branch",
                  desc: "Fill online application form with personal, financial, and employment details",
                },
                {
                  step: 5,
                  title: "Document Submission",
                  desc: "Upload scanned copies online or submit physical documents at branch",
                },
                {
                  step: 6,
                  title: "Document Verification",
                  desc: "Bank verifies documents with your employer and references (2-5 days)",
                },
                {
                  step: 7,
                  title: "Final Approval",
                  desc: "Receive approval notification via SMS, email with loan sanction letter",
                },
                {
                  step: 8,
                  title: "Loan Disbursal",
                  desc: "Loan amount credited to your bank account within 24-48 hours",
                },
              ].map((item) => (
                <div key={item.step} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-8 h-8 text-green-600" />
              Complete Document Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Identity & Address</h3>
                <ul className="space-y-2">
                  {["PAN Card", "Aadhar Card", "Passport (optional)", "Driving License", "Voter ID"].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Income & Employment</h3>
                <ul className="space-y-2">
                  {[
                    "Latest 3 Salary Slips",
                    "IT Returns (2 years)",
                    "Employer Certificate",
                    "Form 16 (2 years)",
                    "Employment Letter",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Documents</h3>
                <ul className="space-y-2">
                  {[
                    "Bank Statements (6-12 months)",
                    "Loan Statement (if any)",
                    "Investment Proof",
                    "Insurance Policy",
                  ].map((doc) => (
                    <li key={doc} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Employed Specific</h3>
                <ul className="space-y-2">
                  {[
                    "Business Registration",
                    "GST Certificate",
                    "Profit & Loss (2 years)",
                    "Balance Sheet (2 years)",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-8 h-8 text-blue-600" />
              Personal Loan Processing Timeline
            </h2>
            <div className="space-y-4">
              {[
                { day: "Day 1-2", event: "Application & Document Submission", status: "Online filing" },
                { day: "Day 2-5", event: "Document Verification", status: "Bank checks documents" },
                { day: "Day 5-7", event: "Credit Check & Final Approval", status: "CIBIL check & approval" },
                { day: "Day 7-10", event: "Sanction Letter & Disbursement", status: "Amount credited to account" },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-4 flex items-center gap-4">
                  <div className="text-lg font-bold text-blue-600 w-20">{item.day}</div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900">{item.event}</h3>
                    <p className="text-sm text-gray-600">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-yellow-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips for Quick Personal Loan Approval</h2>
            <ul className="space-y-3">
              {[
                "Ensure CIBIL score above 750 for best rates and instant approval",
                "Prepare all documents in advance to avoid delays",
                "Apply online during business hours for faster processing",
                "Keep bank statements showing consistent income deposits",
                "Avoid applying to multiple lenders simultaneously (affects CIBIL)",
                "Be honest with income details to avoid rejection",
                "Check if employer is pre-approved with the lender",
                "Compare EMI calculator results before finalizing",
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply for Personal Loan?</h2>
            <p className="text-blue-100 mb-6">Compare rates from top lenders and apply instantly</p>
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
