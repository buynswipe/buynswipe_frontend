"use client"

import { ChevronDown, CheckCircle2, MapPin, Shield, TrendingUp, Home, DollarSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomeLoanClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the minimum salary required for a home loan?",
      answer:
        "Most lenders require a minimum monthly income of Rs 25,000-30,000. However, the actual requirement depends on the loan amount and your debt-to-income ratio. Self-employed individuals may need higher income proof.",
    },
    {
      question: "Can I get a home loan with low CIBIL score?",
      answer:
        "A score above 700 is preferred, but some lenders offer home loans with scores as low as 600-650 with higher interest rates (0.5-1% more). You may need a co-applicant or larger down payment.",
    },
    {
      question: "How much down payment do I need for a home loan?",
      answer:
        "Typically 10-20% down payment is required. First-time buyers may get loans with 5-10% down payment. Government-backed schemes like PMAY may require no down payment.",
    },
    {
      question: "What is the maximum home loan tenure?",
      answer:
        "Most banks offer home loans for 5-30 years. The tenure depends on your age, income stability, and the property value. Longer tenure means lower EMI but higher total interest.",
    },
    {
      question: "What documents are needed for a home loan application?",
      answer:
        "Required documents: ID proof, address proof, income proof (salary slips/IT returns), bank statements (6 months), property documents, photographs, and permission from employer/partners if applicable.",
    },
    {
      question: "Is home loan pre-approval possible?",
      answer:
        "Yes, most banks offer pre-approval that is valid for 3-6 months. Pre-approval gives you an approved loan amount without checking the property. You can then search for properties within your budget.",
    },
  ]

  const lenders = [
    { name: "SBI Home Loan", rate: "7.0-7.5%", amount: "1 Cr", tenure: "30 years", emi: "₹9,966/lakh" },
    { name: "HDFC Home Loan", rate: "7.2-7.8%", amount: "5 Cr", tenure: "30 years", emi: "₹10,200/lakh" },
    { name: "ICICI Home Loan", rate: "7.1-7.9%", amount: "3 Cr", tenure: "30 years", emi: "₹10,100/lakh" },
    { name: "Axis Home Loan", rate: "7.0-7.6%", amount: "2 Cr", tenure: "30 years", emi: "₹10,050/lakh" },
    { name: "BOB Home Loan", rate: "6.9-7.5%", amount: "1.5 Cr", tenure: "30 years", emi: "₹9,900/lakh" },
  ]

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8" />
            <span className="text-sm font-semibold uppercase tracking-wide">Home Loans</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loan at Best Rates</h1>
          <p className="text-xl text-blue-100 mb-8">
            Get instant approval for property purchase or construction. Compare rates from top lenders and apply online.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Check Eligibility
            </button>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition border border-white">
              Calculate EMI
            </button>
          </div>
        </div>
      </section>

      {/* Home Loan Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Types of Home Loans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Property Purchase",
                desc: "Loan for buying an existing or under-construction property",
                icon: MapPin,
              },
              { title: "Home Construction", desc: "Loan for building a home on your own land", icon: TrendingUp },
              { title: "Home Improvement", desc: "Loan for renovations, extensions, or repairs", icon: Shield },
              { title: "Refinance", desc: "Refinance existing home loan at lower rates", icon: DollarSign },
              { title: "Balance Transfer", desc: "Transfer home loan from one bank to another", icon: TrendingUp },
              { title: "Top-up Loan", desc: "Additional loan against existing property", icon: Home },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <item.icon className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lender Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Compare Home Loan Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Lender</th>
                  <th className="p-4 text-left">Interest Rate</th>
                  <th className="p-4 text-left">Max Loan Amount</th>
                  <th className="p-4 text-left">Max Tenure</th>
                  <th className="p-4 text-left">EMI per Lakh</th>
                </tr>
              </thead>
              <tbody>
                {lenders.map((lender, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold">{lender.name}</td>
                    <td className="p-4">{lender.rate}</td>
                    <td className="p-4">{lender.amount}</td>
                    <td className="p-4">{lender.tenure}</td>
                    <td className="p-4 text-green-600 font-semibold">{lender.emi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Home Loan Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Age: 21-70 years (at loan maturity)",
                  "Minimum annual income: Rs 3-5 lakhs",
                  "CIBIL score: 700+ (600+ in some cases)",
                  "Employment: Salaried or self-employed for 2+ years",
                  "Indian citizen with valid ID proof",
                  "Debt-to-income ratio: Below 50%",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Documents Needed
              </h3>
              <ul className="space-y-3">
                {[
                  "PAN card and Aadhaar",
                  "Last 6 months salary slips",
                  "Last 2 years IT returns",
                  "Bank account statements (6 months)",
                  "Property documents (title, survey)",
                  "Photographs and address proof",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Home Loan FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition font-semibold text-left"
                >
                  {faq.question}
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`} />
                </button>
                {expandedFaq === i && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Footer */}
      <section className="py-12 px-4 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto prose prose-sm">
          <h2 className="text-2xl font-bold mb-6">Home Loan Guide - Complete Information</h2>
          <p className="mb-4 text-gray-700">
            A <strong>home loan</strong> is a long-term financial product that helps you purchase or construct
            residential property. In India, <strong>home loans at competitive rates</strong> are available from banks
            like SBI, HDFC, ICICI, and Axis Bank. The <strong>best home loan interest rates</strong> range from 6.9% to
            8.5% p.a. depending on your CIBIL score and employment type.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Home loan eligibility</strong> depends on factors like age, income, CIBIL score, and employment. You
            can check <strong>home loan eligibility instantly</strong> using our calculator. The{" "}
            <strong>home loan EMI calculator</strong> helps you estimate monthly payments based on loan amount, tenure,
            and interest rate.
          </p>
          <p className="mb-4 text-gray-700">
            Types of home loans include <strong>property purchase loans</strong>,{" "}
            <strong>home construction loans</strong>, <strong>home improvement loans</strong>, and{" "}
            <strong>balance transfer options</strong>. Popular schemes like{" "}
            <strong>Pradhan Mantri Awas Yojana (PMAY)</strong> offer subsidized interest rates for affordable housing.
          </p>
          <p className="text-gray-700">
            Get <strong>instant home loan approval</strong> online with BuyNswipe. Compare rates from multiple lenders,
            calculate your EMI, check eligibility, and apply with just a few clicks. We help you find the{" "}
            <strong>lowest home loan rates</strong> and fastest approval process.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Home Loan?</h2>
          <p className="text-xl text-blue-100 mb-8">Check eligibility and get instant approval from top lenders</p>
          <Link
            href="/credit/eligibility-checker"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Check Eligibility Now
          </Link>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: "Home Loan",
            description: "Home loan for property purchase, construction, and home improvement",
            interestRate: "6.9-8.5%",
            loanTerm: "PT5Y to PT30Y",
            loanType: "Mortgage",
            eligibilityRequirements: {
              "@type": "Thing",
              description: "Age 21-70, CIBIL 700+, minimum income Rs 3-5 lakhs",
            },
            faqPage: {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          }),
        }}
      />
    </div>
  )
}
