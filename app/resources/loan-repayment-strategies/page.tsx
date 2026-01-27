import type { Metadata } from "next"
import { TrendingDown, Clock, DollarSign, Target, AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Loan Repayment Strategies - Pay Off Debt Faster | BuyNswipe",
  description:
    "Master loan repayment strategies. Learn different repayment methods, EMI calculators, and debt payoff plans to clear loans faster.",
  keywords: [
    "loan repayment",
    "debt repayment strategy",
    "pay off loan faster",
    "EMI calculator",
    "loan prepayment",
    "debt payoff plan",
    "loan repayment methods",
    "reduce loan interest",
  ],
  openGraph: {
    title: "Loan Repayment Strategies - Pay Off Debt Faster",
    description: "Learn proven strategies to repay loans faster and save on interest.",
    url: "https://buynswipe.com/resources/loan-repayment-strategies",
  },
}

export default function LoanRepaymentPage() {
  const strategies = [
    {
      icon: TrendingDown,
      title: "Avalanche Method",
      desc: "Pay minimum on all loans, extra towards highest interest rate loan first",
      pros: "Saves most interest",
      cons: "Takes longer psychological win",
    },
    {
      icon: Target,
      title: "Snowball Method",
      desc: "Pay minimum on all loans, extra towards smallest balance loan first",
      pros: "Quick wins & motivation",
      cons: "Pays more interest overall",
    },
    {
      icon: Clock,
      title: "Bi-weekly Payments",
      desc: "Pay half EMI every 2 weeks instead of monthly full payment",
      pros: "Saves interest, builds discipline",
      cons: "Requires consistency",
    },
    {
      icon: DollarSign,
      title: "Lump Sum Prepayment",
      desc: "Make one-time large payment when you have bonus or extra income",
      pros: "Significant interest saving",
      cons: "Needs extra funds available",
    },
  ]

  const comparisons = [
    {
      method: "Avalanche",
      time: "24 months",
      totalPay: "₹10,20,000",
      interest: "₹20,000",
      best: "Multiple high-interest loans",
    },
    {
      method: "Snowball",
      time: "26 months",
      totalPay: "₹10,45,000",
      interest: "₹45,000",
      best: "Motivation & quick wins",
    },
    {
      method: "Bi-weekly",
      time: "22 months",
      totalPay: "₹10,05,000",
      interest: "₹5,000",
      best: "Regular income",
    },
    {
      method: "Lump Sum",
      time: "18 months",
      totalPay: "₹9,80,000",
      interest: "Varies",
      best: "One-time windfalls",
    },
  ]

  const tips = [
    { tip: "Automate payments", desc: "Set up auto-payment to ensure on-time payments" },
    { tip: "Round up payments", desc: "Pay ₹10,005 instead of ₹10,000 for faster payoff" },
    { tip: "Check for penalties", desc: "Verify prepayment terms before early repayment" },
    { tip: "Negotiate rates", desc: "After good payment history, ask for rate reduction" },
    { tip: "Use bonus income", desc: "Dedicate annual bonuses towards loan prepayment" },
    { tip: "Refinance if better", desc: "Refinance to lower rate if available and beneficial" },
  ]

  const steps = [
    {
      step: 1,
      title: "List All Loans",
      desc: "Write down all loans with balance, interest rate, and EMI",
    },
    {
      step: 2,
      title: "Choose Strategy",
      desc: "Select Avalanche (save interest) or Snowball (quick wins)",
    },
    {
      step: 3,
      title: "Set Target Date",
      desc: "Define when you want to be debt-free",
    },
    {
      step: 4,
      title: "Track Progress",
      desc: "Monitor monthly progress towards debt-freedom",
    },
  ]

  const benefits = [
    { title: "Save Interest", amount: "₹1-5 Lakhs", desc: "By paying 1-2 years early" },
    { title: "Improve Credit", value: "50-100 points", desc: "As you pay down debt" },
    { title: "Financial Freedom", value: "Peace of mind", desc: "Less debt burden" },
    { title: "Better Loan Terms", value: "Lower rates", desc: "For future borrowing" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loan Repayment Strategies</h1>
          <p className="text-xl text-orange-100">Master proven strategies to pay off loans faster and save interest</p>
        </div>
      </section>

      {/* 4 Strategies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">4 Effective Repayment Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((s, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <s.icon className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-green-700">{s.pros}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700">{s.cons}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Strategy Comparison (₹10 Lakh Loan @ 10% p.a.)</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Strategy</th>
                  <th className="px-6 py-3 text-left">Payoff Time</th>
                  <th className="px-6 py-3 text-left">Total Payment</th>
                  <th className="px-6 py-3 text-left">Interest Paid</th>
                  <th className="px-6 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-orange-50">
                    <td className="px-6 py-3 font-bold text-orange-600">{row.method}</td>
                    <td className="px-6 py-3">{row.time}</td>
                    <td className="px-6 py-3 font-semibold">{row.totalPay}</td>
                    <td className="px-6 py-3 text-red-600">{row.interest}</td>
                    <td className="px-6 py-3">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">4-Step Repayment Plan</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <Card key={s.step}>
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benefits of Strategic Repayment</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{b.amount || b.value}</div>
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">6 Repayment Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((t, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">
                  <h3 className="font-bold text-orange-600 mb-2">{t.tip}</h3>
                  <p className="text-gray-600 text-sm">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Debt Payoff Journey</h2>
          <p className="text-lg mb-8">Use our EMI calculator to plan your repayment strategy</p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">Calculate EMI</Button>
        </div>
      </section>
    </main>
  )
}
