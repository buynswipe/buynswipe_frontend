import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Card Eligibility Requirements - Salary, Age, CIBIL Score | BuyNswipe",
  description:
    "Complete guide to credit card eligibility criteria. Learn minimum salary, age, CIBIL score, and employment requirements.",
  keywords: [
    "credit card eligibility",
    "credit card requirements",
    "minimum salary credit card",
    "credit card age limit",
    "cibil score for credit card",
    "credit card eligibility criteria",
  ],
}

export default function CreditCardEligibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Eligibility Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Eligibility - Complete Requirements</h1>
          <p className="text-xl text-teal-100">
            Learn salary, age, CIBIL score, and all criteria needed for credit card approval
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Basic Eligibility Criteria</h2>
            <div className="space-y-6">
              {[
                {
                  criterion: "Age",
                  requirement: "21-65 years",
                  details: "Minimum 21 years to apply; senior citizens (60+) may need co-applicant",
                  note: "Some banks offer student cards at 18+ with proof of enrollment",
                },
                {
                  criterion: "Nationality",
                  requirement: "Indian citizen or NRI",
                  details: "Must have valid ID proof and PAN number",
                  note: "NRIs can apply if they have Indian bank account and ITR",
                },
                {
                  criterion: "Employment Status",
                  requirement: "Salaried/Self-employed/Business",
                  details: "Stable income source with 2+ years in current job",
                  note: "Students can apply for student credit cards",
                },
                {
                  criterion: "Credit Score",
                  requirement: "CIBIL 650+",
                  details: "Higher score increases approval chances and credit limit",
                  note: "Below 650 may get rejected; 750+ gets premium cards",
                },
              ].map((item) => (
                <div key={item.criterion} className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.criterion}</h3>
                  <p className="text-lg font-bold text-teal-600 mb-2">{item.requirement}</p>
                  <p className="text-gray-700 mb-2">{item.details}</p>
                  <p className="text-sm text-gray-600 italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Income & Salary Requirements</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-teal-100">
                    <th className="border p-3 text-left font-bold">Category</th>
                    <th className="border p-3 text-left font-bold">Minimum Annual Income</th>
                    <th className="border p-3 text-left font-bold">Entry Credit Card</th>
                    <th className="border p-3 text-left font-bold">Premium Card</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      cat: "Salaried Employees",
                      income: "₹1.5 - 3 Lakh",
                      entry: "₹25,000 limit",
                      premium: "₹10+ Lakh income",
                    },
                    {
                      cat: "Self-Employed",
                      income: "₹3 - 5 Lakh",
                      entry: "₹50,000 limit",
                      premium: "₹15+ Lakh income",
                    },
                    { cat: "Business Owners", income: "₹5+ Lakh", entry: "₹1+ Lakh limit", premium: "₹25+ Lakh" },
                    { cat: "Students", income: "₹0 (No income)", entry: "Student card", premium: "N/A" },
                  ].map((row) => (
                    <tr key={row.cat} className="hover:bg-gray-50">
                      <td className="border p-3 font-bold text-gray-900">{row.cat}</td>
                      <td className="border p-3 text-gray-700">{row.income}</td>
                      <td className="border p-3 text-gray-700">{row.entry}</td>
                      <td className="border p-3 text-gray-700">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score Impact on Credit Card</h2>
            <div className="space-y-4">
              {[
                {
                  score: "Below 550",
                  status: "Poor",
                  approval: "High rejection chance",
                  action: "Improve score before applying",
                },
                {
                  score: "550-650",
                  status: "Fair",
                  approval: "Limited options, low limit",
                  action: "Secured card recommended",
                },
                {
                  score: "650-750",
                  status: "Good",
                  approval: "Good approval rate",
                  action: "Apply for standard cards",
                },
                {
                  score: "750+",
                  status: "Excellent",
                  approval: "Instant approval",
                  action: "Eligible for premium cards",
                },
              ].map((item) => (
                <div key={item.score} className="p-4 border rounded-lg hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{item.score}</h3>
                    <Badge className="bg-teal-100 text-teal-800">{item.status}</Badge>
                  </div>
                  <p className="text-gray-700 mb-2">{item.approval}</p>
                  <p className="text-sm text-teal-600">
                    <strong>Recommendation:</strong> {item.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-12 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Special Eligibility Cases
            </h2>
            <div className="space-y-4">
              {[
                {
                  case: "Students",
                  req: "Proof of enrollment, parent/guardian details, ₹0 income",
                },
                {
                  case: "Housewives",
                  req: "Spouse income, joint bank account, marriage certificate",
                },
                {
                  case: "Retired Persons",
                  req: "Pension details, retirement certificate, age <70 years",
                },
                {
                  case: "Self-Employed",
                  req: "2 years ITR, business registration, bank statements",
                },
                {
                  case: "NRI",
                  req: "Indian bank account, ITR, passport, NRI status proof",
                },
                {
                  case: "Freelancers",
                  req: "6 months bank statements, tax filing, income proof",
                },
              ].map((item) => (
                <div key={item.case} className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <h3 className="font-bold text-gray-900 mb-1">{item.case}</h3>
                  <p className="text-gray-600 text-sm">{item.req}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 mb-12 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-yellow-600" />
              How to Improve Credit Card Eligibility
            </h2>
            <ol className="space-y-3">
              {[
                "Check and improve CIBIL score - aim for 750+",
                "Ensure stable employment for 2+ years",
                "Reduce existing credit card utilization",
                "Pay all bills and EMIs on time",
                "Avoid multiple loan/card applications",
                "Increase annual income through salary hike or side income",
                "Build relationship with existing bank",
                "Apply for secured credit card first if score is low",
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="font-bold text-yellow-600 flex-shrink-0">{idx + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Check Your Credit Card Eligibility</h2>
            <p className="text-teal-100 mb-6">Find credit cards matching your income, CIBIL score, and employment</p>
            <Link
              href="/credit/eligibility-checker"
              className="inline-block bg-white text-teal-600 font-bold px-8 py-3 rounded-lg hover:bg-teal-50 transition mr-4"
            >
              Check Eligibility
            </Link>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-teal-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-teal-900 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
