import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Personal Loan Eligibility Criteria - Full Requirements | BuyNswipe",
  description:
    "Check personal loan eligibility criteria including age, income, CIBIL score, employment requirements for banks in India.",
  keywords: [
    "personal loan eligibility",
    "personal loan eligibility criteria",
    "personal loan income requirement",
    "personal loan CIBIL score",
    "personal loan age limit",
  ],
}

export default function PersonalLoanEligibilityPage() {
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
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Eligibility Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Loan Eligibility Criteria</h1>
          <p className="text-xl text-blue-100">Check if you meet requirements and increase approval chances</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Basic Eligibility Requirements</h2>
            <div className="space-y-4">
              {[
                {
                  criterion: "Age",
                  requirement: "Minimum 21 years",
                  detail: "Maximum age at loan end: 60-65 years (varies by bank)",
                },
                {
                  criterion: "Citizenship",
                  requirement: "Indian Citizen or NRI",
                  detail: "NRI with Indian bank account and income proofs",
                },
                {
                  criterion: "Residence",
                  requirement: "Indian resident",
                  detail: "Proof of residence required (Aadhar, utility bills)",
                },
                {
                  criterion: "Employment Status",
                  requirement: "Salaried or Self-employed",
                  detail: "Minimum 2 years in current employment/business",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {item.criterion}
                  </h3>
                  <p className="text-gray-900 font-semibold mb-1">{item.requirement}</p>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Income Requirements by Employment Type</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Salaried Employees</h3>
                <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <p className="text-gray-700 mb-3">
                    <strong>Minimum Monthly Income:</strong> ₹15,000 - ₹25,000 (varies by bank)
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Loan Amount:</strong> 10-12x monthly salary (up to ₹40-50 lakhs)
                  </p>
                  <p className="text-gray-700">
                    <strong>Tenure:</strong> 12-60 months depending on income and job stability
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Employed Professionals</h3>
                <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <p className="text-gray-700 mb-3">
                    <strong>Minimum Monthly Income:</strong> ₹30,000 - ₹50,000 from business
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Business Age:</strong> Minimum 3-5 years old (ITR requirement)
                  </p>
                  <p className="text-gray-700">
                    <strong>Documentation:</strong> 2 years ITR, profit & loss, balance sheet required
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Owners (MSME)</h3>
                <div className="bg-white rounded-lg p-6 border-l-4 border-green-600">
                  <p className="text-gray-700 mb-3">
                    <strong>Business Turnover:</strong> Minimum ₹50 lakhs - ₹1 crore annually
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Loan Amount:</strong> Up to ₹1-5 crores based on turnover
                  </p>
                  <p className="text-gray-700">
                    <strong>GST & ITR:</strong> Registered GST and 2 years ITR essential
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score & Credit Requirements</h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="space-y-4 mb-6">
                {[
                  {
                    score: "750+",
                    approval: "Instant Approval",
                    rate: "Lowest Interest Rate",
                    color: "text-green-600",
                  },
                  { score: "700-750", approval: "Quick Approval", rate: "Competitive Rates", color: "text-blue-600" },
                  {
                    score: "650-700",
                    approval: "Standard Processing",
                    rate: "Higher Interest",
                    color: "text-yellow-600",
                  },
                  {
                    score: "Below 650",
                    approval: "Manual Review",
                    rate: "Premium Rates/Rejection",
                    color: "text-red-600",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className={`font-bold text-lg ${item.color}`}>{item.score}</p>
                      <p className="text-gray-700">{item.approval}</p>
                    </div>
                    <p className="text-gray-900 font-semibold">{item.rate}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                CIBIL score between 650-900. Higher score = Better approval chances & lower interest rates
              </p>
            </div>
          </div>

          <div className="mb-12 bg-red-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              Common Rejection Reasons
            </h2>
            <ul className="space-y-3">
              {[
                "Low CIBIL score (below 650)",
                "High existing debt/loan obligations",
                "Irregular income or unemployed status",
                "Less than 2 years in current job/business",
                "Multiple loan applications within 30 days",
                "Negative credit history or defaults",
                "Self-employed with irregular income",
                "No bank account or transaction history",
              ].map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips to Improve Approval Chances</h2>
            <ul className="space-y-3">
              {[
                "Improve CIBIL score by paying bills on time",
                "Reduce existing debt before applying",
                "Maintain consistent bank transactions",
                "Apply with pre-approved lender",
                "Use higher income if co-applicant available",
                "Choose longer tenure to reduce EMI burden",
                "Apply through employer tie-ups for better rates",
                "Provide additional collateral for higher amounts",
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Check Your Personal Loan Eligibility</h2>
            <p className="text-blue-100 mb-6">Get pre-approved and find the best loan options for you</p>
            <Link
              href="/credit/eligibility-checker"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
