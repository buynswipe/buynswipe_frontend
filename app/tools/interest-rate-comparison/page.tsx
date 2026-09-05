import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Interest Rate Comparison Tool | Personal Loans & Credit Cards | BuyNswipe",
  description: "Compare real-time interest rates across all major banks for personal loans and credit cards. Find the best rates for your financial needs.",
  keywords: ["interest rate comparison", "personal loan rates", "credit card interest", "best rates", "rate comparison tool"],
}

const loanRates = [
  { bank: "HDFC Bank", rate: "9.5% - 15%", minAmount: "₹25,000", maxAmount: "₹40 Lakhs", tenure: "12-84 months" },
  { bank: "ICICI Bank", rate: "10% - 16%", minAmount: "₹25,000", maxAmount: "₹50 Lakhs", tenure: "12-84 months" },
  { bank: "Bajaj Finserv", rate: "9% - 13%", minAmount: "₹10,000", maxAmount: "₹30 Lakhs", tenure: "12-60 months" },
  { bank: "SBI", rate: "8.5% - 14%", minAmount: "₹50,000", maxAmount: "₹35 Lakhs", tenure: "12-84 months" },
  { bank: "Axis Bank", rate: "10.5% - 16.5%", minAmount: "₹25,000", maxAmount: "₹40 Lakhs", tenure: "12-60 months" },
  { bank: "IndusInd Bank", rate: "10% - 15.5%", minAmount: "₹25,000", maxAmount: "₹45 Lakhs", tenure: "12-72 months" },
]

const creditCardRates = [
  { bank: "HDFC Bank", monthlyRate: "2.5%", annualRate: "30%", baseAmount: "₹1,00,000", minPay: "5% + Interest" },
  { bank: "ICICI Bank", monthlyRate: "2.49%", annualRate: "29.88%", baseAmount: "₹1,00,000", minPay: "5% + Interest" },
  { bank: "Axis Bank", monthlyRate: "2.5%", annualRate: "30%", baseAmount: "₹1,00,000", minPay: "5% + Interest" },
  { bank: "SBI", monthlyRate: "2.4%", annualRate: "28.8%", baseAmount: "₹1,00,000", minPay: "5% + Interest" },
  { bank: "IDBI Bank", monthlyRate: "2.5%", annualRate: "30%", baseAmount: "₹1,00,000", minPay: "5% + Interest" },
]

export default function InterestRateComparisonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interest Rate Comparison</h1>
          <p className="text-xl text-blue-100">Compare real-time rates across major banks and NBFCs</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Personal Loan Interest Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border p-3 text-left font-semibold">Bank/NBFC</th>
                  <th className="border p-3 text-left font-semibold">Interest Rate</th>
                  <th className="border p-3 text-left font-semibold">Min Amount</th>
                  <th className="border p-3 text-left font-semibold">Max Amount</th>
                  <th className="border p-3 text-left font-semibold">Tenure</th>
                </tr>
              </thead>
              <tbody>
                {loanRates.map((loan, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border p-3 font-semibold">{loan.bank}</td>
                    <td className="border p-3 text-blue-600 font-bold">{loan.rate}</td>
                    <td className="border p-3">{loan.minAmount}</td>
                    <td className="border p-3">{loan.maxAmount}</td>
                    <td className="border p-3">{loan.tenure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mb-8 mt-16">Credit Card Interest Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border p-3 text-left font-semibold">Bank</th>
                  <th className="border p-3 text-left font-semibold">Monthly Rate</th>
                  <th className="border p-3 text-left font-semibold">Annual Rate</th>
                  <th className="border p-3 text-left font-semibold">Example Amount</th>
                  <th className="border p-3 text-left font-semibold">Min Payment</th>
                </tr>
              </thead>
              <tbody>
                {creditCardRates.map((card, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border p-3 font-semibold">{card.bank}</td>
                    <td className="border p-3 text-blue-600 font-bold">{card.monthlyRate}</td>
                    <td className="border p-3 text-blue-600 font-bold">{card.annualRate}</td>
                    <td className="border p-3">{card.baseAmount}</td>
                    <td className="border p-3">{card.minPay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interest Rate Range</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">8.5% - 16.5%</p>
                <p className="text-gray-600 text-sm">Personal loans vary by bank and credit profile</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Factors Affecting Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ CIBIL Score</li>
                  <li>✓ Income & Stability</li>
                  <li>✓ Credit History</li>
                  <li>✓ Loan Amount</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How to Get Best Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Improve CIBIL score</li>
                  <li>✓ Show stable income</li>
                  <li>✓ Lower debt-to-income</li>
                  <li>✓ Compare offers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Important Notes</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Rates shown are indicative and subject to lender discretion based on individual profile</li>
              <li>• Personal factors like income, employment, and credit score can affect final approved rate</li>
              <li>• Credit card rates are for revolving credit on outstanding balances</li>
              <li>• Consider processing fees, GST, and other charges while comparing total cost</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
