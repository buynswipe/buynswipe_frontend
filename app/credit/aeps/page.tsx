import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AEPS | Aadhaar Enabled Payment System | BuyNswipe",
  description:
    "AEPS - Aadhaar Enabled Payment System for digital payments. Withdraw cash without card using Aadhaar biometric authentication.",
  keywords: [
    "AEPS",
    "Aadhaar enabled payment system",
    "AEPS payment",
    "AEPS cash withdrawal",
    "micro ATM",
    "Aadhaar ATM",
    "AEPS transaction",
    "digital payment Aadhaar",
    "cashless payment",
    "biometric payment",
    "AEPS near me",
    "AEPS balance check",
    "money withdrawal Aadhaar",
    "financial inclusion",
    "AEPS benefits",
    "how to use AEPS",
    "AEPS service",
    "government digital payment",
    "RBI AEPS",
    "Aadhaar payment system",
  ],
  openGraph: {
    title: "AEPS | Aadhaar Payment System | BuyNswipe",
    description:
      "Use Aadhaar for digital payments and cash withdrawal. Secure biometric authentication for financial transactions.",
    url: "https://buynswipe.com/credit/aeps",
    siteName: "BuyNswipe",
  },
}

export default function AEPSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">AEPS - Digital Payment with Aadhaar</h1>
          <p className="text-xl text-green-100 mb-8 text-balance">
            Withdraw cash, check balance, and make payments using just your Aadhaar and fingerprint. No card needed.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
            Find AEPS Near You
          </button>
        </div>
      </section>

      {/* What is AEPS */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is AEPS?</h2>
          <p className="text-lg text-gray-700 mb-4">
            AEPS (Aadhaar Enabled Payment System) is a bank-led initiative that allows customers to perform financial
            transactions using their Aadhaar number and biometric authentication. It enables cardless cash withdrawal,
            balance enquiry, and fund transfers at authorized AEPS outlets across India.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {["No Card Required", "Biometric Secure", "24/7 Available", "Zero Charges"].map((feature, i) => (
              <div key={i} className="bg-green-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-green-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEPS Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">AEPS Services Available</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Cash Withdrawal", desc: "Withdraw up to ₹10,000 per day using Aadhaar" },
              { title: "Balance Enquiry", desc: "Check your bank balance instantly" },
              { title: "Fund Transfer", desc: "Transfer money to other bank accounts" },
              { title: "Mobile Recharge", desc: "Recharge your mobile prepaid account" },
              { title: "Utility Bill Payment", desc: "Pay electricity, water, gas bills" },
              { title: "Money Deposit", desc: "Deposit cash into your Aadhaar-linked account" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AEPS Works */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How Does AEPS Work?</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Visit AEPS Outlet",
                desc: "Go to any authorized bank, micro-ATM, or AEPS service point",
              },
              { step: "2", title: "Provide Aadhaar Number", desc: "Give your 12-digit Aadhaar number to the operator" },
              { step: "3", title: "Biometric Authentication", desc: "Give your fingerprint for secure verification" },
              { step: "4", title: "Complete Transaction", desc: "Withdraw cash or perform desired transaction" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEPS Benefits */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benefits of AEPS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Financial Inclusion", desc: "Reach unbanked populations without debit cards" },
              { title: "Security", desc: "Biometric authentication prevents fraud and misuse" },
              { title: "Accessibility", desc: "Available at 50+ lakh AEPS outlets nationwide" },
              { title: "Low Cost", desc: "Zero transaction charges for customers" },
              { title: "Quick Process", desc: "Transactions completed in less than 2 minutes" },
              { title: "Government Approved", desc: "RBI and NPCI regulated payment system" },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-green-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
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
                q: "Is AEPS transaction secure?",
                a: "Yes, biometric authentication and bank-grade encryption ensure maximum security.",
              },
              {
                q: "What is the daily AEPS withdrawal limit?",
                a: "Maximum ₹10,000 per day per transaction, with multiple daily transactions allowed.",
              },
              {
                q: "Is there any AEPS transaction charge?",
                a: "No, AEPS transactions are completely free for customers.",
              },
              {
                q: "Which banks support AEPS?",
                a: "All major banks including SBI, ICICI, HDFC, Axis, and regional banks support AEPS.",
              },
              {
                q: "Can I use AEPS without a smartphone?",
                a: "Yes, AEPS works at micro-ATMs and authorized outlets without smartphone requirement.",
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
      <section className="py-12 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Using AEPS Today</h2>
          <p className="text-xl mb-8 text-green-100">
            Locate nearest AEPS outlet and experience cardless digital payment
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Find AEPS Outlet
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
