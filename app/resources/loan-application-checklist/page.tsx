import type { Metadata } from "next"
import Link from "next/link"
import { Download, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Loan Application Checklist - All Required Documents | BuyNswipe",
  description:
    "Complete checklist of all documents required for personal loan, home loan, education loan, and business loan applications. Download PDF.",
  keywords: [
    "loan application checklist",
    "required documents for loan",
    "personal loan documents",
    "home loan documents",
    "loan checklist PDF",
  ],
}

export default function LoanApplicationChecklistPage() {
  const loanTypes = [
    {
      name: "Personal Loan",
      documents: [
        "Identity Proof (Aadhar, PAN, Passport, Driving License)",
        "Address Proof (Electricity Bill, Water Bill, Rent Agreement)",
        "Bank Statements (Last 6 months)",
        "Income Proof (Salary Slips for last 3 months)",
        "Employment Letter (Current designation and tenure)",
        "IT Returns (Last 2 years for self-employed)",
        "Credit Card Statement (Last 3 months)",
      ],
    },
    {
      name: "Home Loan",
      documents: [
        "Identity & Address Proof (Aadhar, PAN, Passport)",
        "Income Proof (Salary slips, IT returns, bank statements)",
        "Employment Letter (Confirmation of current position)",
        "Property Documents (Title deed, sale agreement, mutation)",
        "Valuation Report (Approved surveyor's report)",
        "Insurance Documents (Property insurance details)",
        "Loan Related Documents (If balance transfer)",
      ],
    },
    {
      name: "Education Loan",
      documents: [
        "Identity Proof (Aadhar, PAN, Passport)",
        "Admission Letter (University acceptance)",
        "Academic Records (Last year result/transcript)",
        "Fee Structure (Course fee details)",
        "Sponsor ID & Address Proof (For co-borrower/parent)",
        "Income Documents (Salary slips, IT returns)",
        "Passport (If studying abroad)",
      ],
    },
    {
      name: "Business Loan",
      documents: [
        "Business Registration (License, GST, MOA/AOA)",
        "Identity & Address Proof (Owner's ID and address)",
        "Financial Statements (Last 2-3 years balance sheet)",
        "IT Returns (Business returns for 2-3 years)",
        "Bank Statements (Business account for 6-12 months)",
        "Income Tax Returns (Personal for promoter)",
        "Collateral Documents (If secured loan)",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Free Checklist</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Application Checklist</h1>
          <p className="text-xl text-green-100 mb-8">Never miss a required document - get organized and apply faster</p>
          <Button className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3 h-auto">
            <Download className="w-5 h-5 mr-2" />
            Download Checklist (PDF)
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Documents Required by Loan Type</h2>
            <div className="space-y-8">
              {loanTypes.map((loan, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-xl">{loan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {loan.documents.map((doc, docIdx) => (
                        <div key={docIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{doc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-orange-50 border-orange-200 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <AlertCircle className="w-5 h-5" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>• Documents must be originals or notarized copies</p>
              <p>• Ensure all documents are valid and not expired</p>
              <p>• CIBIL score should be 600+ for better approval chances</p>
              <p>• Some banks may require additional documents based on profile</p>
              <p>• Having all documents ready speeds up the approval process</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Download Complete Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name*</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address*</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Loan Type*</label>
                  <select className="w-full border border-gray-300 rounded-lg p-3" required>
                    <option>Personal Loan</option>
                    <option>Home Loan</option>
                    <option>Education Loan</option>
                    <option>Business Loan</option>
                    <option>All Types</option>
                  </select>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-auto py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Send Checklist to Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-green-600 text-white py-12 px-4 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-green-100 mb-6">Check your eligibility and apply for your loan in minutes</p>
          <Link
            href="/apply/quick-loan-assessment"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 font-semibold"
          >
            Check Eligibility
          </Link>
        </div>
      </section>
    </div>
  )
}
