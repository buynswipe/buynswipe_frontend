import type { Metadata } from "next"
import Link from "next/link"
import { DollarSign, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Credit Card Charges & Fees Explained - Hidden Costs | BuyNswipe",
  description:
    "Complete guide to credit card charges, fees, and hidden costs. Learn annual fee, GST, withdrawal charges, and how to avoid them.",
  keywords: [
    "credit card charges",
    "credit card fees",
    "annual fee credit card",
    "credit card hidden charges",
    "cash withdrawal charge credit card",
    "credit card gst",
    "credit card charges in india",
  ],
}

export default function CreditCardChargesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">Cost Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Charges & Fees Complete Guide</h1>
          <p className="text-xl text-orange-100">
            Understand all charges, hidden costs, and how to minimize credit card fees
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Credit Card Charges</h2>
            <div className="space-y-6">
              {[
                {
                  charge: "Annual Fee (Membership Fee)",
                  amount: "₹0 - ₹50,000",
                  desc: "Fee charged yearly just to keep the card active",
                  example: "Premium cards charge ₹5,000-50,000 annually; Basic cards may be free",
                  howToAvoid: "Waive with minimum annual spending (typically ₹2-5 lakh)",
                },
                {
                  charge: "Interest / Finance Charge",
                  amount: "18-40% p.a.",
                  desc: "Charged on unpaid balance if you don't pay full amount by due date",
                  example: "₹10,000 unpaid at 36% = ₹300/month interest",
                  howToAvoid: "Pay full balance before due date to get grace period",
                },
                {
                  charge: "Late Payment Charge",
                  amount: "₹100 - ₹500",
                  desc: "Fine for paying bill after the due date",
                  example: "Pay 3 days late = ₹200 penalty + interest on full balance",
                  howToAvoid: "Set payment reminders and enable auto-pay",
                },
                {
                  charge: "Cash Withdrawal / Advance Fee",
                  amount: "2-3% + GST",
                  desc: "Fee for withdrawing cash from ATM using credit card",
                  example: "Withdraw ₹10,000 = ₹300 fee + 18% GST = ₹354",
                  howToAvoid: "Use debit card for cash withdrawals instead",
                },
                {
                  charge: "Balance Transfer Fee",
                  amount: "1-3% + GST",
                  desc: "Fee to transfer existing credit card debt to a new card",
                  example: "Transfer ₹50,000 = ₹1,500 fee (3% + GST)",
                  howToAvoid: "Negotiate with bank for waiver on balance transfer",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.charge}</h3>
                  <p className="text-lg font-bold text-orange-600 mb-3">{item.amount}</p>
                  <p className="text-gray-700 mb-2">{item.desc}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Example:</strong> {item.example}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>How to Avoid:</strong> {item.howToAvoid}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Hidden Charges</h2>
            <div className="grid gap-4">
              {[
                { fee: "Foreign Transaction Fee", cost: "1-2% + GST", detail: "Charged on purchases abroad" },
                { fee: "Fuel Surcharge", cost: "0-1%", detail: "Extra fee on fuel pump transactions" },
                { fee: "Duplicate Statement Fee", cost: "₹50-100", detail: "For requesting duplicate statements" },
                { fee: "Card Replacement Fee", cost: "₹100-500", detail: "If you lose or damage your card" },
                { fee: "Exceeding Credit Limit Fee", cost: "₹500-1,000", detail: "Overspending beyond limit" },
                { fee: "EMI Conversion Fee", cost: "0-2%", detail: "Processing fee for converting to EMI" },
                { fee: "Convenience Fee", cost: "1-2%", detail: "At certain online platforms" },
                { fee: "Cheque Bounce Fee", cost: "₹300-500", detail: "If linked cheque bounces" },
              ].map((item) => (
                <div key={item.fee} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50">
                  <DollarSign className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.fee}</h3>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                  <span className="font-bold text-orange-600">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-8 mb-12 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              How to Minimize Credit Card Charges
            </h2>
            <div className="space-y-4">
              {[
                "Pay full balance before due date to avoid interest charges",
                "Choose lifetime free cards or negotiate annual fee waiver",
                "Avoid cash withdrawals - use debit card instead",
                "Keep spending below credit limit to avoid over-limit fees",
                "Monitor statements monthly for unauthorized charges",
                "Don't use convenience features like EMI unless necessary",
                "Set payment reminders to avoid late payment fees",
                "Compare cards before applying - some have 0% processing fees",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-3 text-gray-700">
                  <span className="text-red-600 font-bold mt-1">✓</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Find a No-Fee Credit Card</h2>
            <p className="text-orange-100 mb-6">Compare cards with minimal charges and maximum benefits</p>
            <Link
              href="/credit/affiliate-credit-cards"
              className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition"
            >
              Compare Fee-Free Cards
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
