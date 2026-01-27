import type { Metadata } from "next"
import { Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Free CIBIL Credit Report Guide | Download PDF | BuyNswipe",
  description:
    "Free downloadable guide to understanding your CIBIL credit report and credit score. Learn what factors affect your score and how to improve it.",
  keywords: [
    "credit report guide",
    "CIBIL report",
    "credit score guide",
    "free credit guide PDF",
    "understand credit report",
  ],
}

export default function CreditReportGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Free CIBIL Credit Report Guide</h1>
          <p className="text-xl text-green-100">Understand your credit report and improve your score</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="space-y-3">
                {[
                  "How to read your CIBIL report",
                  "Understanding credit score factors",
                  "Payment history impact (35%)",
                  "Credit utilization importance (30%)",
                  "Credit mix & account age (15%)",
                  "Inquiries and new credit (20%)",
                  "Common errors and disputes",
                  "30-day improvement checklist",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg p-8">
              <div className="text-center">
                <Download className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Get Your Free Guide</h3>
                <p className="text-green-100 mb-6">35-page comprehensive CIBIL guide (PDF)</p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded text-gray-900"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded text-gray-900"
                    required
                  />
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-bold py-3">
                    Download Free Guide
                  </Button>
                </form>

                <p className="text-xs text-green-200 mt-4">No spam, unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Understand Your Credit Report?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Loan Approval", desc: "Banks check your report before approving loans" },
              { title: "Interest Rates", desc: "Better scores get lower interest rates, saving money" },
              { title: "Credit Limits", desc: "Report determines your credit card limit and terms" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
