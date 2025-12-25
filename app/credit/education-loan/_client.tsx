"use client"

import { ArrowRight, CheckCircle2, BookOpen, GraduationCap, Globe } from "lucide-react"

export default function EducationLoanClientPage() {
  const studyOptions = [
    {
      id: "india",
      name: "Studies in India",
      maxAmount: "Up to ₹20 Lakh",
      rate: "5.5% - 9.5%",
      tenure: "Repay after course + 1 year",
      courses: ["Engineering", "Medical", "Management", "Law", "Arts"],
    },
    {
      id: "abroad",
      name: "Studies Abroad",
      maxAmount: "Up to ₹1 Crore",
      rate: "6.0% - 10.0%",
      tenure: "Repay after course + 6-12 months",
      courses: ["US", "UK", "Canada", "Australia", "Europe"],
    },
  ]

  const lenders = [
    { name: "State Bank of India", rate: "5.5%", maxLoan: "₹1 Crore", processing: "7-10 days" },
    { name: "HDFC Bank", rate: "6.5%", maxLoan: "₹50 Lakh", processing: "5-7 days" },
    { name: "ICICI Bank", rate: "6.8%", maxLoan: "₹50 Lakh", processing: "5-7 days" },
    { name: "Axis Bank", rate: "7.0%", maxLoan: "₹50 Lakh", processing: "7-10 days" },
  ]

  const faqs = [
    {
      question: "What is the maximum education loan amount?",
      answer:
        "For studies in India: Up to ₹20 Lakh. For abroad studies: Up to ₹1 Crore, depending on course and lender. Loan amount covers course fee, books, accommodation, travel, and living expenses.",
    },
    {
      question: "Who can apply for education loan?",
      answer:
        "Students who have secured admission in recognized institutions can apply. Co-applicant (parent/guardian) is required. Age: 18+ years. No CIBIL score requirement for first-time borrowers.",
    },
    {
      question: "When do I start repaying education loan?",
      answer:
        "Moratorium period: Repayment starts after completion of course + 6-12 months grace period. During studies and moratorium, only interest may be charged (optional).",
    },
    {
      question: "What documents are needed for education loan?",
      answer:
        "Admission letter, 10+2 marksheet, degree certificate, course fee structure, passport (for abroad), visa, parents income proof, bank statements, employment letter.",
    },
    {
      question: "Can I get education loan without collateral?",
      answer:
        "Yes, loans up to ₹4 Lakh are available without collateral. For higher amounts, security/collateral may be required. Government schemes like PMAY offer guaranteed loans.",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Education Loan for Your Dream Career</h1>
          <p className="text-xl text-purple-100 mb-8">
            Low interest rates from 5.5% • Loans up to ₹1 Crore • Instant approval • Moratorium period available
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* Study Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education Loan Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {studyOptions.map((option) => (
              <div
                key={option.id}
                className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  {option.id === "india" ? (
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  ) : (
                    <Globe className="w-8 h-8 text-purple-600" />
                  )}
                  <h3 className="text-2xl font-bold">{option.name}</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p>
                    <strong>Max Amount:</strong> {option.maxAmount}
                  </p>
                  <p>
                    <strong>Interest Rate:</strong> {option.rate}
                  </p>
                  <p>
                    <strong>Repayment:</strong> {option.tenure}
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-3">Eligible Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {option.courses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lenders */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Education Loan Lenders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left p-4 font-bold">Lender</th>
                  <th className="text-left p-4 font-bold">Interest Rate</th>
                  <th className="text-left p-4 font-bold">Max Loan Amount</th>
                  <th className="text-left p-4 font-bold">Processing Time</th>
                </tr>
              </thead>
              <tbody>
                {lenders.map((lender, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold">{lender.name}</td>
                    <td className="p-4 text-green-600 font-bold">{lender.rate}</td>
                    <td className="p-4">{lender.maxLoan}</td>
                    <td className="p-4">{lender.processing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                Student Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Age: 18-35 years",
                  "Minimum 10+2 or equivalent qualification",
                  "Admission in recognized institution",
                  "Minimum 50% in qualifying exam",
                  "No CIBIL score requirement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                Co-Applicant Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Age: 21-65 years",
                  "Annual income: ₹2 Lakh minimum",
                  "Stable employment history",
                  "Good CIBIL score (650+)",
                  "Collateral for loans above ₹4 Lakh",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education Loan FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Educational Journey Today</h2>
          <p className="text-xl text-purple-100 mb-8">Easy approval process with minimum documentation</p>
          <button className="bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition inline-flex items-center gap-2">
            Apply for Education Loan <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">About Education Loans</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            An <strong>education loan</strong> is a financial tool designed to help students pursue higher education
            without financial constraints. With <strong>education loan interest rates starting from 5.5%</strong>, it's
            an affordable option for students planning to study in India or abroad.{" "}
            <strong>Education loan for abroad</strong> studies can cover courses in the USA, UK, Canada, Australia, and
            other countries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Get <strong>instant education loan approval</strong> with flexible repayment options. Most lenders offer a{" "}
            <strong>moratorium period</strong> allowing you to start repayment after completing your course. Our{" "}
            <strong>education loan calculator</strong> helps you understand the EMI based on loan amount and tenure.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're looking for <strong>education loan for engineering</strong>,{" "}
            <strong>medical education loan</strong>, or <strong>MBA study loan</strong>, BuyNswipe helps you compare
            rates from top banks. Apply for <strong>education loan online</strong> today and get approval within 5-10
            days.
          </p>
        </div>
      </section>
    </main>
  )
}
