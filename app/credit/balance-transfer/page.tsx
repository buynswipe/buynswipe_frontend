import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Credit Card Balance Transfer | Low Interest Rate | BuyNswipe",
  description:
    "Transfer high-interest credit card balance to low-interest cards. Compare balance transfer offers and save up to 3% interest.",
  keywords: [
    "balance transfer",
    "credit card balance transfer",
    "balance transfer offer",
    "low interest balance transfer",
    "balance transfer card",
    "credit card balance transfer online",
    "zero interest balance transfer",
    "balance transfer EMI",
    "transfer credit card debt",
    "best balance transfer card",
    "balance transfer interest rate",
    "balance transfer fee",
    "balance transfer eligibility",
    "credit card debt transfer",
    "transfer existing credit card",
    "balance transfer calculator",
    "balance transfer approval",
    "instant balance transfer",
    "how to transfer credit card balance",
    "balance transfer benefits",
  ],
  openGraph: {
    title: "Credit Card Balance Transfer | BuyNswipe",
    description:
      "Reduce interest burden with credit card balance transfer. Compare low-interest offers and transfer your debt easily.",
    url: "https://buynswipe.com/credit/balance-transfer",
    siteName: "BuyNswipe",
  },
}

export default function BalanceTransferPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Reduce Your Credit Card Debt with Balance Transfer
          </h1>
          <p className="text-xl text-purple-100 mb-8 text-balance">
            Transfer high-interest credit card balance to low-interest cards and save thousands in interest charges.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
            Calculate Your Savings
          </button>
        </div>
      </section>

      {/* What is Balance Transfer */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is Credit Card Balance Transfer?</h2>
          <p className="text-lg text-gray-700 mb-4">
            A balance transfer is the process of moving your outstanding credit card balance from one card to another,
            typically to a card with a lower interest rate. This can help you save significantly on interest payments
            while managing your debt more efficiently.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg mt-6">
            <h3 className="font-bold text-lg mb-3">Example Savings:</h3>
            <p className="text-gray-700">
              If you transfer ₹1 lakh balance from 18% card to 0% card for 6 months, you save ₹9,000 in interest
              charges!
            </p>
          </div>
        </div>
      </section>

      {/* Balance Transfer Options */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Balance Transfer Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Credit Card to Credit Card",
                rate: "0-8%",
                months: "6-12",
                desc: "Transfer to new card with 0% initial rate",
              },
              {
                title: "Credit Card to Personal Loan",
                rate: "9-13%",
                months: "12-60",
                desc: "Convert to fixed-rate personal loan",
              },
              {
                title: "Credit Card to Balance Transfer EMI",
                rate: "5-10%",
                months: "6-24",
                desc: "Structured EMI payment plan",
              },
            ].map((option, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{option.desc}</p>
                <div className="space-y-2">
                  <p>
                    <strong>Rate:</strong> {option.rate}
                  </p>
                  <p>
                    <strong>Duration:</strong> {option.months}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cards for Balance Transfer */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Top Balance Transfer Cards</h2>
          <div className="space-y-4">
            {[
              { name: "Card A", bank: "Bank 1", rate: "0% for 6 months", fee: "1%", limit: "₹5 Lakh" },
              { name: "Card B", bank: "Bank 2", rate: "0% for 9 months", fee: "2%", limit: "₹10 Lakh" },
              { name: "Card C", bank: "Bank 3", rate: "5% for 12 months", fee: "1.5%", limit: "₹7.5 Lakh" },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{card.name}</h3>
                    <p className="text-gray-600">{card.bank}</p>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                    Apply Now
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Rate</p>
                    <p className="font-bold">{card.rate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Fee</p>
                    <p className="font-bold">{card.fee}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Limit</p>
                    <p className="font-bold">{card.limit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Balance Transfer Savings Calculator</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label className="block font-semibold mb-2">Current Balance Amount (₹)</label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-lg p-3"
                defaultValue="100000"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Current Interest Rate (%)</label>
              <input
                type="number"
                placeholder="18"
                className="w-full border border-gray-300 rounded-lg p-3"
                defaultValue="18"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">New Interest Rate (%)</label>
              <input
                type="number"
                placeholder="0"
                className="w-full border border-gray-300 rounded-lg p-3"
                defaultValue="0"
              />
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Calculate Savings
            </button>
            <div className="bg-purple-100 p-4 rounded-lg mt-6">
              <p className="text-sm text-gray-600">Estimated Monthly Savings</p>
              <p className="text-3xl font-bold text-purple-600">₹1,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the balance transfer fee?",
                a: "Typically 1-2.5% of transferred amount. Some banks offer 0% fee for limited periods.",
              },
              {
                q: "How long does balance transfer take?",
                a: "Usually 5-7 working days for the amount to be credited to your old card.",
              },
              {
                q: "Can I transfer from any credit card?",
                a: "Yes, you can transfer from any bank's credit card to another card or personal loan.",
              },
              {
                q: "What's the maximum balance I can transfer?",
                a: "Usually 80-100% of your new card's credit limit.",
              },
              {
                q: "Does balance transfer affect my credit score?",
                a: "Temporarily, but it improves over time as you reduce debt-to-credit ratio.",
              },
            ].map((item, i) => (
              <details key={i} className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <summary className="font-semibold text-lg">{item.q}</summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reduce Your Debt?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Get personalized balance transfer recommendations based on your profile
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
            Get Your Best Offer
          </button>
        </div>
      </section>
    </main>
  )
}
