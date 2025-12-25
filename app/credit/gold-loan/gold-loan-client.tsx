"use client"

import { ChevronDown, CheckCircle2, Zap, TrendingUp, Shield, Clock, Coins } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GoldLoanClientPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the interest rate for gold loans?",
      answer:
        "Gold loan interest rates range from 7.5% to 15% p.a. depending on the lender and purity of gold. Lower rates are available for 916 purity (22K) gold. Rate depends on LTV (Loan-to-Value ratio) and repayment tenure.",
    },
    {
      question: "How much loan can I get on my gold?",
      answer:
        "You can typically get 70-80% of your gold value as loan amount. For 22K gold, expect ₹3,500-4,500 per gram depending on current market prices. The exact amount depends on gold purity and weight.",
    },
    {
      question: "Is my gold safe with the lender?",
      answer:
        "Yes, gold is stored in bank vaults with insurance coverage. Lenders maintain detailed records of your gold with weight certificates. Insurance covers full gold value against theft or damage.",
    },
    {
      question: "What is the processing fee for gold loans?",
      answer:
        "Processing fees typically range from 0.5% to 2% of the loan amount. Some lenders waive fees for online applications or existing customers. Additional charges may include insurance (0.5-1% p.a.) and storage fees.",
    },
    {
      question: "Can I get a gold loan without paying full repayment?",
      answer:
        "Yes, interest-only payments are available for 3-12 months, after which you can repay principal. Some lenders offer flexible repayment where you can pay in installments or full lump sum.",
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Coins className="w-8 h-8" />
            <span className="text-sm font-semibold uppercase tracking-wide">Gold Loan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gold Loan - Instant Cash Against Gold</h1>
          <p className="text-xl text-amber-100 mb-8">
            Get instant approval for gold loans at competitive rates. Quick disbursal, secure storage, and flexible
            repayment.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
              Apply Now
            </button>
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition border border-white">
              Calculate Loan Amount
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Gold Loan from BuyNswipe?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Instant Approval", desc: "24-hour fund disbursal", icon: Zap },
              { title: "Best Rates", desc: "7.5% - 15% p.a. interest", icon: TrendingUp },
              { title: "Secure Storage", desc: "Bank vault with insurance", icon: Shield },
              { title: "Flexible Repayment", desc: "Interest-only or installments", icon: Clock },
              { title: "No Hassle", desc: "Quick documentation process", icon: CheckCircle2 },
              { title: "Transparent", desc: "No hidden charges", icon: Coins },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition text-center"
              >
                <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Gold Loan FAQ</h2>
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
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Instant Gold Loan Today</h2>
          <p className="text-xl text-amber-100 mb-8">Apply online and get funds in 24 hours. No hidden charges.</p>
          <Link
            href="/credit"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
          >
            Apply for Gold Loan
          </Link>
        </div>
      </section>
    </div>
  )
}
