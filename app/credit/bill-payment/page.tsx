import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Online Bill Payment | Electricity, Water, Mobile Bills | BuyNswipe",
  description:
    "Pay electricity, water, gas, mobile, DTH, insurance bills online instantly. Secure BBPS bill payment with 24/7 support. Zero transaction charges.",
  keywords: [
    "bill payment online",
    "electricity bill payment",
    "water bill payment",
    "mobile bill payment",
    "DTH bill payment",
    "insurance bill payment",
    "BBPS bill payment",
    "online bill payment app",
    "instant bill payment",
    "bill payment without fee",
    "utility bill payment",
    "loan EMI payment",
    "credit card bill payment",
    "online payment India",
    "digital bill payment",
    "recurring bill payment",
    "bill autopay",
    "BBPS services",
    "payment gateway",
    "online utility payment",
  ],
  openGraph: {
    title: "Online Bill Payment | BuyNswipe",
    description:
      "Pay all your bills online securely. Electricity, water, mobile, DTH, insurance bills payment with zero charges.",
    url: "https://buynswipe.com/credit/bill-payment",
    siteName: "BuyNswipe",
  },
}

export default function BillPaymentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Online Bill Payment Made Easy</h1>
          <p className="text-xl text-blue-100 mb-8 text-balance">
            Pay all your bills in seconds with BuyNswipe. Electricity, water, mobile, DTH, insurance - everything in one
            place.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Pay Your Bills Now
          </button>
        </div>
      </section>

      {/* What is Bill Payment */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is Online Bill Payment?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Online bill payment allows you to pay all your utility bills, subscriptions, and financial obligations from
            the comfort of your home using BuyNswipe's secure platform. With BBPS (Bharat Bill Payment System)
            integration, you can pay bills instantly without visiting banks or payment centers.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {["Instant Payment", "Zero Charges", "Secure Transaction", "24/7 Available"].map((feature, i) => (
              <div key={i} className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-blue-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bill Categories */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Bills You Can Pay</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Electricity", desc: "Pay power bills for all states instantly" },
              { title: "Water", desc: "Municipal water supply bill payment" },
              { title: "Mobile & DTH", desc: "Mobile recharge and DTH subscriptions" },
              { title: "Insurance", desc: "Health, auto, and term insurance premiums" },
              { title: "Gas", desc: "CNG and LPG cylinder booking & payment" },
              { title: "Broadband", desc: "Internet and cable subscriptions" },
              { title: "Loan EMI", desc: "Personal, home, and auto loan payments" },
              { title: "Credit Card Bills", desc: "Pay credit card bills directly" },
            ].map((bill, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">{bill.title}</h3>
                <p className="text-gray-600">{bill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How Bill Payment Works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Enter Bill Details",
                desc: "Select biller and enter your consumer/reference number",
              },
              { step: "2", title: "View Amount", desc: "System fetches and displays your bill amount" },
              {
                step: "3",
                title: "Choose Payment Method",
                desc: "Pay via UPI, credit card, debit card, or net banking",
              },
              { step: "4", title: "Instant Confirmation", desc: "Get SMS and email confirmation with bill receipt" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
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

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benefits of Online Bill Payment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Save Time", desc: "Pay bills in seconds without leaving home" },
              { title: "Zero Charges", desc: "No hidden fees or transaction charges" },
              { title: "Secure & Safe", desc: "Bank-level encryption and data protection" },
              { title: "Auto Reminders", desc: "Get bill due date reminders via SMS/Email" },
              { title: "Bill History", desc: "Track all payment history in one place" },
              { title: "24/7 Support", desc: "Customer support available round the clock" },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-blue-600">{benefit.title}</h3>
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
                q: "Is online bill payment safe?",
                a: "Yes, all transactions are secured with bank-level encryption and RBI compliance.",
              },
              {
                q: "What payment methods are accepted?",
                a: "We accept UPI, credit card, debit card, net banking, and mobile wallets.",
              },
              {
                q: "How long does payment take?",
                a: "Most bills are paid instantly, though some billers may take 24-48 hours.",
              },
              {
                q: "Can I pay bills through auto-pay?",
                a: "Yes, set up recurring payments for monthly bills like electricity and broadband.",
              },
              {
                q: "What if payment fails?",
                a: "Failed payments are refunded immediately to your account within 24 hours.",
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
      <section className="py-12 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Paying Bills Instantly</h2>
          <p className="text-xl mb-8 text-blue-100">Download BuyNswipe app and pay all your bills in one click</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Download App
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">About BuyNswipe Bill Payment</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              BuyNswipe's <strong>online bill payment service</strong> leverages the Bharat Bill Payment System (BBPS)
              to enable seamless <strong>instant bill payments</strong> across India. Whether you need to pay{" "}
              <strong>electricity bills online</strong>, <strong>water bill payment</strong>,{" "}
              <strong>mobile bill</strong>, or any other utility, BuyNswipe simplifies the process with a single, secure
              platform.
            </p>
            <p>
              Our <strong>digital bill payment app</strong> supports 50+ billers across categories including utilities,
              insurance, subscriptions, and financial obligations. With <strong>zero transaction charges</strong> and{" "}
              <strong>24/7 availability</strong>, BuyNswipe ensures you never miss a bill deadline.
            </p>
            <p>
              Experience the convenience of <strong>automatic bill payment</strong> with our autopay feature. Set up{" "}
              <strong>recurring bill payments</strong> for monthly utilities and receive instant confirmation with
              receipts. Our <strong>BBPS-compliant payment gateway</strong> ensures bank-level security for all
              transactions.
            </p>
            <p>
              Whether you're looking to pay <strong>loan EMI online</strong>, <strong>credit card bills</strong>, or
              utility bills, BuyNswipe's integrated platform makes <strong>bill payment in India</strong> faster and
              more convenient than ever before.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
