"use client"

import { ChevronDown, Briefcase } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MudraLoanClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Mudra Loan?",
      answer:
        "Mudra (Micro Units Development & Refinance Agency) is a government-backed scheme offering loans up to Rs 10 lakhs for small businesses without collateral. It supports startups and existing micro businesses in manufacturing, services, and trading sectors.",
    },
    {
      question: "What are the Mudra Loan categories?",
      answer:
        "Three categories: Shishu (up to Rs 50,000), Kishore (Rs 50,000 to Rs 5 lakhs), and Tarun (Rs 5 to Rs 10 lakhs). Choose based on your business expansion needs.",
    },
    {
      question: "What is the interest rate for Mudra Loan?",
      answer:
        "Interest rates range from 6% to 9% p.a. depending on your credit score and business profile. Government provides interest rate subsidies for first-time borrowers. Some banks offer reduced rates for women entrepreneurs.",
    },
    {
      question: "What documents are needed for Mudra Loan?",
      answer:
        "Basic documents: ID proof, address proof, PAN, bank statements (6 months), business proof (registration/license), and income proof. Self-employed applicants need 2 years ITR.",
    },
    {
      question: "Can I get Mudra Loan if I have low credit score?",
      answer:
        "Yes, Mudra Loan is specifically designed for first-time borrowers and those with limited credit history. CIBIL score is not the primary criteria. Business plan and ability to repay matter more.",
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8" />
            <span className="text-sm font-semibold uppercase">Mudra Loan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudra Loan - Government Business Loan</h1>
          <p className="text-xl text-indigo-100 mb-8">
            Start or grow your small business with government-backed Mudra Loan up to Rs 10 lakhs. No collateral
            required.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
            Apply for Mudra Loan
          </button>
        </div>
      </section>

      {/* Mudra Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mudra Loan Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Shishu", amount: "Up to Rs 50,000", desc: "For starting a new micro business" },
              { name: "Kishore", amount: "Rs 50,000 to Rs 5 Lakhs", desc: "For growing existing business" },
              { name: "Tarun", amount: "Rs 5 Lakhs to Rs 10 Lakhs", desc: "For established business expansion" },
            ].map((cat, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-indigo-200 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{cat.name}</h3>
                <p className="text-lg font-semibold text-green-600 mb-3">{cat.amount}</p>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mudra Loan FAQ</h2>
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start or Grow Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Apply for Mudra Loan and get up to Rs 10 lakhs at low interest rates
          </p>
          <Link
            href="/credit/business-loan"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
