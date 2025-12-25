"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, TrendingUp, Shield } from "lucide-react"

export function CarLoanClientPage() {
  const [selectedLoan, setSelectedLoan] = useState("new-car")

  const carLoans = [
    {
      id: "new-car",
      name: "New Car Loan",
      minRate: "7.2%",
      maxRate: "10.5%",
      loanAmount: "Up to ₹50 Lakh",
      tenure: "12-84 months",
      description: "Finance your brand new car with competitive rates",
      features: ["New vehicles only", "Fast approval", "Flexible tenure", "Online process"],
    },
    {
      id: "used-car",
      name: "Used Car Loan",
      minRate: "8.5%",
      maxRate: "11.5%",
      loanAmount: "Up to ₹30 Lakh",
      tenure: "12-72 months",
      description: "Quick financing for pre-owned vehicles",
      features: ["Used vehicles up to 5 years", "Quick disbursal", "Hassle-free process", "Minimal documentation"],
    },
    {
      id: "two-wheeler",
      name: "Two-Wheeler Loan",
      minRate: "8.0%",
      maxRate: "12.0%",
      loanAmount: "Up to ₹5 Lakh",
      tenure: "12-60 months",
      description: "Affordable two-wheeler financing solutions",
      features: ["Bikes & scooters", "Same-day approval", "Zero down payment options", "Minimal KYC"],
    },
  ]

  const lenders = [
    { name: "HDFC Bank", rate: "7.2%", approval: "24 hours", minCibil: 650 },
    { name: "ICICI Bank", rate: "7.5%", approval: "24 hours", minCibil: 650 },
    { name: "Bajaj Finserv", rate: "8.0%", approval: "2 hours", minCibil: 600 },
    { name: "Mahindra Finance", rate: "8.3%", approval: "4 hours", minCibil: 600 },
  ]

  const faqs = [
    {
      question: "What is the minimum CIBIL score required for car loan?",
      answer:
        "Most lenders require a minimum CIBIL score of 600-650. Higher scores (750+) get better interest rates. Score below 600 may require additional collateral or guarantor.",
    },
    {
      question: "Can I get car loan without CIBIL score?",
      answer:
        "Yes, some lenders offer car loans without CIBIL check, but with higher interest rates (11-13%). They may require additional documents or collateral.",
    },
    {
      question: "What documents are needed for car loan?",
      answer:
        "Basic documents: ID proof, address proof, income proof (salary slips/ITR), employment letter, bank statements, vehicle details, insurance quote.",
    },
    {
      question: "How long does car loan approval take?",
      answer:
        "Most lenders provide approval within 2-48 hours. Online applications are typically processed faster than branch visits.",
    },
    {
      question: "Can I prepay my car loan?",
      answer:
        "Yes, most lenders allow prepayment. Some charge prepayment penalty of 0-2%. Check with your lender before paying off early.",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Best Car Loan Online - Get Instant Approval
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Low interest rates from 7.2% • Quick disbursal in 24-48 hours • Compare lenders for best deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Car Loan Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {carLoans.map((loan) => (
              <div
                key={loan.id}
                onClick={() => setSelectedLoan(loan.id)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition ${
                  selectedLoan === loan.id
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-300"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{loan.name}</h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Rate:</strong> {loan.minRate} - {loan.maxRate}
                  </p>
                  <p>
                    <strong>Amount:</strong> {loan.loanAmount}
                  </p>
                  <p>
                    <strong>Tenure:</strong> {loan.tenure}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lenders Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Car Loan Lenders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left p-4 font-bold">Lender</th>
                  <th className="text-left p-4 font-bold">Interest Rate</th>
                  <th className="text-left p-4 font-bold">Approval Time</th>
                  <th className="text-left p-4 font-bold">Min CIBIL Score</th>
                </tr>
              </thead>
              <tbody>
                {lenders.map((lender, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-semibold">{lender.name}</td>
                    <td className="p-4 text-green-600 font-bold">{lender.rate}</td>
                    <td className="p-4">{lender.approval}</td>
                    <td className="p-4">{lender.minCibil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Car Loan Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                For Salaried Professionals
              </h3>
              <ul className="space-y-3">
                {[
                  "Age: 21-60 years",
                  "Monthly income: ₹25,000+",
                  "Employment: Minimum 2 years",
                  "CIBIL score: 650+",
                  "Minimum loan: ₹5 Lakh",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                For Self-Employed
              </h3>
              <ul className="space-y-3">
                {[
                  "Age: 21-65 years",
                  "Monthly income: ₹30,000+",
                  "Business: Minimum 3 years",
                  "CIBIL score: 700+",
                  "ITR: Last 2-3 years",
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Finance Your Car?</h2>
          <p className="text-xl text-blue-100 mb-8">Get instant approval with minimal documentation</p>
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition inline-flex items-center gap-2">
            Apply for Car Loan <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SEO Content Footer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">About Car Loans in India</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>car loan</strong> is a popular financing option for purchasing new or used vehicles. With{" "}
            <strong>best car loan rates starting from 7.2%</strong> per annum, you can drive home your dream car with
            affordable monthly EMIs. <strong>Instant car loan approval</strong> is now possible with online
            applications, making the process quick and hassle-free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're looking for a <strong>new car loan</strong>, <strong>used car loan</strong>, or{" "}
            <strong>two-wheeler loan</strong>, BuyNswipe helps you compare rates from top lenders. Our{" "}
            <strong>car loan calculator</strong> helps you understand your EMI before applying. Check your{" "}
            <strong>car loan eligibility</strong> in seconds without any documentation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Get <strong>low interest car loans</strong> with flexible repayment tenure up to 84 months. Compare{" "}
            <strong>car loan offers</strong> from HDFC, ICICI, Bajaj Finserv, and other major lenders. Apply for{" "}
            <strong>car loan online</strong> today and get approval within 24-48 hours.
          </p>
        </div>
      </section>
    </main>
  )
}
