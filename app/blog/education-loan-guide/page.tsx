import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Globe, DollarSign, BarChart3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Education Loan Guide - Study in India & Abroad | BuyNswipe",
  description:
    "Complete education loan guide covering domestic loans, overseas education, eligibility, repayment options, and moratorium details.",
  keywords: [
    "education loan",
    "study loan",
    "higher education loan",
    "overseas education loan",
    "education loan eligibility",
    "education loan interest rate",
    "education loan moratorium",
  ],
}

export default function EducationLoanGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Education Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Education Loan Guide</h1>
          <p className="text-xl text-indigo-100">Finance your dream education in India or abroad</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12 bg-indigo-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              Types of Education Loans
            </h2>
            <div className="space-y-6">
              {[
                {
                  type: "Domestic Education Loan",
                  amount: "₹10 lakhs - ₹2 crores",
                  rate: "7-9% p.a.",
                  desc: "For engineering, medical, MBA in Indian universities",
                },
                {
                  type: "Overseas Education Loan",
                  amount: "₹20 lakhs - ₹1 crore",
                  rate: "8-11% p.a.",
                  desc: "For studies in US, UK, Canada, Australia, and other countries",
                },
                {
                  type: "Professional Course Loan",
                  amount: "₹5 lakhs - ₹50 lakhs",
                  rate: "7.5-10% p.a.",
                  desc: "For CA, CS, CFA, TOEFL, GMAT, IELTS preparation",
                },
                {
                  type: "Research & Higher Studies",
                  amount: "₹10 lakhs - ₹1 crore",
                  rate: "7-9% p.a.",
                  desc: "For PhD, Post-doctorate, and research programs",
                },
              ].map((loan, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-indigo-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{loan.type}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-bold text-indigo-600">{loan.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rate</p>
                      <p className="font-bold text-indigo-600">{loan.rate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{loan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe className="w-8 h-8 text-green-600" />
              Education Loan Eligibility
            </h2>
            <div className="space-y-4">
              {[
                { criterion: "Age", detail: "Student: 18-35 years, Co-applicant: up to 60 years" },
                { criterion: "Admission", detail: "Must have admission in recognized institution" },
                { criterion: "Course Duration", detail: "Minimum 6 months course (full-time)" },
                { criterion: "Academic Score", detail: "12th pass or higher with good grades" },
                { criterion: "Co-applicant", detail: "Parent/guardian with stable income required" },
                { criterion: "CIBIL Score", detail: "Minimum 650+ (family credit score)" },
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
              <DollarSign className="w-8 h-8 text-blue-600" />
              Repayment & Moratorium Options
            </h2>
            <div className="space-y-4">
              {[
                {
                  option: "Study Period Moratorium",
                  period: "During course + 6 months",
                  desc: "No EMI during studies, only interest paid by bank/student",
                },
                {
                  option: "Post-Study Moratorium",
                  period: "1-2 years after studies",
                  desc: "Grace period before starting full EMI repayment",
                },
                {
                  option: "Tenure Options",
                  period: "5-15 years",
                  desc: "Choose EMI duration based on course and future income",
                },
                {
                  option: "Flexible Repayment",
                  period: "Variable EMI",
                  desc: "Lower EMI initially, increase as income grows",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900">{item.option}</p>
                    <span className="text-blue-600 font-bold text-sm">{item.period}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-orange-600" />
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "12th & graduation mark sheets",
                "Course admission letter",
                "Fee structure document",
                "Identity proof (Aadhaar, PAN)",
                "Co-applicant ITR/salary slips",
                "Bank statements (6 months)",
                "Property documents (if applicable)",
                "Loan guarantee/collateral details",
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-600 flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Education Loan</h2>
            <p className="text-indigo-100 mb-6">Get funding for your dream course and build your future</p>
            <Link
              href="/credit/education-loan"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
