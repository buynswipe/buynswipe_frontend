import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, FileText, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How to Apply for Credit Card - Step by Step Guide | BuyNswipe",
  description:
    "Complete guide on how to apply for credit card. Learn eligibility, required documents, online & offline application process.",
  keywords: [
    "how to apply for credit card",
    "credit card application process",
    "credit card documents required",
    "online credit card application",
    "credit card eligibility",
  ],
}

export default function HowToApplyCreditCardPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Application Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Apply for Credit Card - Complete Guide</h1>
          <p className="text-xl text-blue-100">Step-by-step process to apply online or offline for credit cards</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Credit Card Application Process</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Applying for a credit card is simple and can be done online (5 minutes) or offline (at bank branch). The
              process involves basic eligibility check, document submission, verification, and approval.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Application Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Choose the Right Credit Card",
                  desc: "Compare different cards based on benefits, fees, and your spending pattern",
                  action: "Visit bank website or BuyNswipe credit card comparison page",
                },
                {
                  step: 2,
                  title: "Check Eligibility Criteria",
                  desc: "Verify minimum age (21 years), income, CIBIL score, and employment status",
                  action: "Most banks require ₹1.5+ lakh annual income and CIBIL score 650+",
                },
                {
                  step: 3,
                  title: "Fill Online Application",
                  desc: "Visit bank website and fill application with personal and financial details",
                  action: "Takes 5-10 minutes; provide accurate information",
                },
                {
                  step: 4,
                  title: "Upload Required Documents",
                  desc: "Submit scanned copies of ID, address proof, income proof, and bank statements",
                  action: "Digital submission for instant processing",
                },
                {
                  step: 5,
                  title: "Bank Verification",
                  desc: "Bank reviews your profile, CIBIL score, and calls for verification (optional)",
                  action: "May take 1-3 days for verification",
                },
                {
                  step: 6,
                  title: "Approval & Offer",
                  desc: "Bank approves and offers credit limit based on eligibility",
                  action: "Decision in 24-72 hours",
                },
                {
                  step: 7,
                  title: "Card Delivery",
                  desc: "Physical card is couriered to your address with PIN in separate envelope",
                  action: "Delivery takes 7-14 business days",
                },
                {
                  step: 8,
                  title: "Activation & First Use",
                  desc: "Activate card via SMS/app and start using immediately",
                  action: "Generate OTP and complete activation",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-2">{item.desc}</p>
                    <p className="text-sm text-blue-600">
                      <strong>Action:</strong> {item.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-8 h-8 text-blue-600" />
              Required Documents for Credit Card Application
            </h2>
            <div className="space-y-4">
              {[
                {
                  category: "Identity Proof",
                  docs: ["Passport", "Driving License", "Voter ID", "Aadhaar Card", "PAN Card"],
                },
                {
                  category: "Address Proof",
                  docs: ["Electricity Bill", "Telephone Bill", "Rent Agreement", "Property Tax Receipt", "Aadhaar"],
                },
                {
                  category: "Income Proof",
                  docs: [
                    "Salary Slips (last 3 months)",
                    "ITR (Income Tax Return)",
                    "Bank statements (6 months)",
                    "Employment letter",
                  ],
                },
                {
                  category: "Financial Documents",
                  docs: ["Existing credit cards", "Loan statements", "Bank account statement", "Investment documents"],
                },
              ].map((item) => (
                <div key={item.category} className="p-6 border rounded-lg hover:shadow-md transition">
                  <h3 className="font-bold text-gray-900 mb-3">{item.category}</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.docs.map((doc) => (
                      <div key={doc} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 mb-12 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-600" />
              Timeline for Credit Card Approval
            </h2>
            <div className="space-y-4">
              {[
                { stage: "Online Application", time: "5-10 minutes" },
                { stage: "Document Verification", time: "1-3 days" },
                { stage: "Bank Decision", time: "24-72 hours" },
                { stage: "Card Printing", time: "2-5 days" },
                { stage: "Card Delivery", time: "7-14 business days" },
                { stage: "Total Time", time: "2-4 weeks" },
              ].map((item) => (
                <div key={item.stage} className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-bold text-gray-900">{item.stage}</span>
                  <span className="text-green-600 font-bold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Apply for Credit Card Now</h2>
            <p className="text-blue-100 mb-6">Choose from 50+ credit cards and apply instantly</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Browse & Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
