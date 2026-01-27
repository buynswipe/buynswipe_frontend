import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe FAQ | Frequently Asked Questions | Credit & POS Solutions",
  description:
    "Comprehensive FAQ about BuyNswipe credit marketplace, POS systems, digital payments, and fintech solutions. Get answers to common questions.",
  keywords: [
    "BuyNswipe FAQ",
    "frequently asked questions",
    "personal loan FAQ",
    "credit card FAQ",
    "POS system FAQ",
    "payment gateway questions",
  ],
}

const faqCategories = [
  {
    category: "Credit & Loans",
    questions: [
      {
        q: "What credit products does BuyNswipe offer?",
        a: "BuyNswipe offers personal loans, business loans, home loans, auto loans, education loans, credit cards, and BNPL solutions from multiple lenders.",
      },
      {
        q: "What is the minimum eligibility for a personal loan?",
        a: "Minimum eligibility: Age 21-60, monthly income ₹20,000+, employment for 6+ months, and credit score 600+. Exact requirements vary by lender.",
      },
      {
        q: "How long does loan approval take?",
        a: "Most loans are approved within 24-48 hours with instant disbursal options available. Approval depends on documentation and credit verification.",
      },
      {
        q: "Can I get a loan without CIBIL check?",
        a: "Yes, some lenders offer loans without strict CIBIL requirements. However, a credit check is typically conducted for risk assessment.",
      },
      {
        q: "What documents are required for a loan?",
        a: "Generally required: PAN card, Aadhaar, bank statements, salary slips, and identity proof. Additional docs may be requested based on loan type.",
      },
    ],
  },
  {
    category: "POS & Payments",
    questions: [
      {
        q: "What are the main features of BuyNswipe POS?",
        a: "Features include real-time sales tracking, inventory management, multi-user access, kitchen display system, payment processing, and analytics dashboard.",
      },
      {
        q: "What payment methods does BuyNswipe support?",
        a: "BuyNswipe supports credit cards, debit cards, UPI, digital wallets, BNPL, and cash. All major payment methods are integrated.",
      },
      {
        q: "What is the transaction fee for UPI?",
        a: "UPI transactions have no processing fee plus just 0.9% MDR. This makes it the most cost-effective payment method for merchants.",
      },
      {
        q: "Is BuyNswipe POS secure?",
        a: "Yes, BuyNswipe POS is PCI-DSS compliant with SSL encryption, tokenization, and fraud detection. All data is stored securely.",
      },
      {
        q: "How quickly does settlement happen?",
        a: "Standard settlement is T+1 (next business day). Instant settlement is available for enterprise merchants with premium plans.",
      },
    ],
  },
  {
    category: "Account & Security",
    questions: [
      {
        q: "Is BuyNswipe RBI approved?",
        a: "BuyNswipe Technology Pvt. Ltd. is registered under Startup India (DPIIT) and follows all RBI guidelines for financial transactions.",
      },
      {
        q: "How is my data protected?",
        a: "All data is encrypted using 256-bit SSL encryption, stored on secure servers, and complies with GDPR and India's data protection laws.",
      },
      {
        q: "Can I integrate BuyNswipe with my existing system?",
        a: "Yes, BuyNswipe provides REST APIs, webhooks, and SDK libraries for seamless integration with existing business systems.",
      },
      {
        q: "What is BuyNswipe's uptime guarantee?",
        a: "BuyNswipe guarantees 99.9% uptime with redundant systems, automatic failover, and 24/7 monitoring for service reliability.",
      },
      {
        q: "How do I report a security issue?",
        a: "Contact security@buynswipe.com with details. All security reports are reviewed within 24 hours by our security team.",
      },
    ],
  },
  {
    category: "Support & Acquisition",
    questions: [
      {
        q: "What support options are available?",
        a: "BuyNswipe offers email support, phone support, WhatsApp support, and live chat. Premium customers get dedicated account managers.",
      },
      {
        q: "How long is the onboarding process?",
        a: "Standard onboarding takes 2-3 hours including account setup, staff training, and system configuration. Express onboarding available.",
      },
      {
        q: "Is BuyNswipe available for acquisition?",
        a: "Yes, BuyNswipe is a pre-funded startup (₹17L seed funding) registered under Startup India. Acquisition inquiries welcome - contact founder directly.",
      },
      {
        q: "What is the asking price for BuyNswipe?",
        a: "The acquisition asking price is INR 1.6 Crore, open to negotiation with qualified, serious buyers. Teaser and brochure available on request.",
      },
      {
        q: "What assets are included in the acquisition?",
        a: "Includes registered company (2017), trademarked brand, premium domains (buynswipe.com, .in), mobile app, social profiles, and all IP.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about BuyNswipe credit, POS, and payments
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-gray-200 rounded-lg hover:border-blue-400 transition"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-gray-900 hover:bg-blue-50 transition">
                      <span>{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-gray-600 group-open:rotate-180 transition" />
                    </summary>
                    <div className="px-4 pb-4 pt-2 text-gray-700 border-t border-gray-200">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Didn't find your answer?</h2>
          <p className="text-gray-600 mb-8">Our support team is here to help</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Contact Support</button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
