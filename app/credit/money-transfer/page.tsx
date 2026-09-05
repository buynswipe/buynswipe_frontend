import type { Metadata } from "next"
import Link from "next/link"
import { Send, Zap, Shield, Globe, CheckCircle, Phone, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Online Money Transfer 2024 | Domestic Remittance | NEFT RTGS UPI | BuyNswipe",
  description:
    "Send money online instantly with lowest charges. Compare money transfer services - NEFT, RTGS, IMPS, UPI, demand draft. Domestic and international remittance at best rates. BuyNswipe money transfer guide.",
  keywords: [
    "money transfer",
    "online money transfer",
    "money transfer online",
    "domestic money transfer",
    "send money online",
    "quick money transfer",
    "money transfer app",
    "NEFT transfer",
    "RTGS transfer",
    "UPI money transfer",
    "IMPS transfer",
    "demand draft",
    "international money transfer",
    "remittance",
    "money transfer charges",
    "money transfer to USA",
    "money transfer to Canada",
    "money transfer to UK",
    "cheapest money transfer",
    "fastest money transfer",
  ],
  openGraph: {
    title: "Online Money Transfer | Instant Domestic & International | Lowest Charges | BuyNswipe",
    description:
      "Send money online with NEFT, RTGS, UPI, IMPS. Lowest transfer charges and fastest remittance service.",
    url: "https://buynswipe.com/credit/money-transfer",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialProduct",
      "@id": "https://buynswipe.com/credit/money-transfer#product",
      name: "BuyNswipe Money Transfer Service",
      description:
        "Fast, secure domestic and international money transfer with lowest charges via NEFT, RTGS, UPI, IMPS.",
      provider: {
        "@type": "FinancialService",
        name: "BuyNswipe",
        url: "https://buynswipe.com",
      },
      category: "Money Transfer",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is fastest money transfer method?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UPI and IMPS are fastest - money reaches within seconds. NEFT takes 30-60 minutes during banking hours. RTGS takes 2-30 minutes for large amounts (above ₹2 Lakh). RTGS is best for large money transfers.",
          },
        },
        {
          "@type": "Question",
          name: "How much money can I transfer via UPI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UPI limit is ₹1 Lakh per transaction and ₹2 Lakh daily limit per bank. For IMPS, limit is ₹10 Lakh per transaction. NEFT and RTGS have no transaction limits.",
          },
        },
        {
          "@type": "Question",
          name: "What are money transfer charges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UPI: Free. IMPS: ₹5-15. NEFT: ₹2.50-7.50. RTGS: ₹10-55. International remittance: 0.5-2% of amount. Charges vary by bank.",
          },
        },
        {
          "@type": "Question",
          name: "Can I transfer money to international accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, via international remittance and SWIFT transfers. Costs 0.5-2% of amount. Requires beneficiary account details. Takes 2-5 working days.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://buynswipe.com" },
        { "@type": "ListItem", position: 2, name: "Credit", item: "https://buynswipe.com/credit" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Money Transfer",
          item: "https://buynswipe.com/credit/money-transfer",
        },
      ],
    },
  ],
}

const transferMethods = [
  {
    icon: Zap,
    title: "UPI Transfer",
    desc: "Instant transfer, free, ₹1L per transaction",
    time: "Seconds",
    charges: "FREE",
    limit: "₹1L/transaction",
    color: "bg-green-500",
  },
  {
    icon: Send,
    title: "IMPS Transfer",
    desc: "Immediate payment, 24/7 available",
    time: "10-15 mins",
    charges: "₹5-15",
    limit: "₹10L/transaction",
    color: "bg-blue-500",
  },
  {
    icon: Globe,
    title: "NEFT Transfer",
    desc: "National Electronic Fund Transfer",
    time: "30-60 mins",
    charges: "₹2.50-7.50",
    limit: "No limit",
    color: "bg-orange-500",
  },
  {
    icon: Shield,
    title: "RTGS Transfer",
    desc: "Real Time Gross Settlement, large amounts",
    time: "2-30 mins",
    charges: "₹10-55",
    limit: "₹2L+ only",
    color: "bg-purple-500",
  },
]

const transferServices = [
  {
    name: "Google Pay",
    method: "UPI",
    charges: "Free",
    speed: "Instant",
    limit: "₹1L/txn",
    rating: "4.8",
  },
  {
    name: "PhonePe",
    method: "UPI",
    charges: "Free",
    speed: "Instant",
    limit: "₹1L/txn",
    rating: "4.7",
  },
  {
    name: "HDFC NetBanking",
    method: "NEFT/RTGS",
    charges: "₹2.50-55",
    speed: "30 mins-30 mins",
    limit: "No limit",
    rating: "4.6",
  },
  {
    name: "ICICI NetBanking",
    method: "NEFT/RTGS",
    charges: "₹2.50-55",
    speed: "30 mins-30 mins",
    limit: "No limit",
    rating: "4.7",
  },
  {
    name: "SBI YONO App",
    method: "NEFT/RTGS",
    charges: "₹2.50-55",
    speed: "30 mins-30 mins",
    limit: "No limit",
    rating: "4.5",
  },
  {
    name: "Remitly (Intl)",
    method: "International",
    charges: "₹100-500",
    speed: "1-2 days",
    limit: "No limit",
    rating: "4.6",
  },
]

export default function MoneyTransferPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BuyNswipe
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/credit" className="text-gray-600 hover:text-blue-600">
                All Products
              </Link>
              <Link href="/credit/personal-loan" className="text-gray-600 hover:text-blue-600">
                Personal Loan
              </Link>
              <Link href="/credit/money-transfer" className="text-blue-600 font-medium">
                Money Transfer
              </Link>
            </nav>
            <Button asChild>
              <Link href="#transfer">Send Money</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-cyan-300 text-cyan-900 mb-4">Instant Transfer Available</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Money Transfer Online 2024
                <span className="block text-cyan-300 mt-2">Instant | Lowest Charges</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Send money instantly with <strong>UPI transfer</strong>, <strong>NEFT</strong>, <strong>RTGS</strong>,
                and <strong>international remittance</strong>. Lowest charges guaranteed. No hidden fees.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Instant", "Secure", "Lowest Charges", "24x7 Available"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-cyan-900 text-lg px-8">
                  Send Money Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
                >
                  Compare Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer Methods */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Money Transfer Methods</h2>
              <p className="text-xl text-gray-600">Choose fastest and cheapest transfer method</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transferMethods.map((method) => (
                <Card
                  key={method.title}
                  className="hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`${method.color} text-white p-4`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Time</span>
                        <span className="font-medium">{method.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Charges</span>
                        <span className="font-medium text-green-600">{method.charges}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Max Limit</span>
                        <span className="font-medium">{method.limit}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transfer Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Money Transfer Services 2024</h2>
              <p className="text-xl text-gray-600">Compare charges and transfer speed</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transferServices.map((service) => (
                <Card key={service.name} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{service.method}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Charges</span>
                        <span className="font-medium text-green-600">{service.charges}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Speed</span>
                        <span className="font-medium">{service.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Max Limit</span>
                        <span className="font-medium">{service.limit}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Use Service</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Money Transfer Works</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Enter Details", desc: "Beneficiary account number" },
                { step: "2", title: "Select Mode", desc: "Choose transfer method" },
                { step: "3", title: "Verify", desc: "Confirm amount and details" },
                { step: "4", title: "Authorize", desc: "OTP or PIN verification" },
                { step: "5", title: "Confirmed", desc: "Money transferred instantly" },
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="transfer" className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Money in Seconds</h2>
            <p className="text-xl text-blue-100 mb-8">Fast, secure, and transparent money transfer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-cyan-900 text-lg px-8">
                Transfer Money Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Phone className="w-5 h-5 mr-2" /> +91 8171169007
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Money Transfer FAQs</h2>

            <div className="space-y-4">
              {[
                {
                  q: "What is fastest way to transfer money?",
                  a: "UPI is fastest - money transfers in seconds for up to ₹1 Lakh. IMPS takes 10-15 minutes for up to ₹10 Lakh. NEFT takes 30-60 minutes. RTGS takes 2-30 minutes for large amounts above ₹2 Lakh.",
                },
                {
                  q: "What are cheapest money transfer charges?",
                  a: "UPI and Google Pay are completely free. IMPS charges ₹5-15. NEFT charges ₹2.50-7.50. RTGS charges ₹10-55. International remittance charges 0.5-2% of transfer amount.",
                },
                {
                  q: "Can I transfer large amount via UPI?",
                  a: "UPI limit is ₹1 Lakh per transaction. For larger amounts, use IMPS (₹10 Lakh), NEFT, or RTGS (no limits). RTGS is best for transfers above ₹2 Lakh.",
                },
                {
                  q: "Is money transfer safe and secure?",
                  a: "Yes, all bank transfers are encrypted and secure. You receive OTP verification. Money is directly transferred to verified beneficiary account. Bank guarantees transaction security.",
                },
                {
                  q: "How to transfer money internationally?",
                  a: "Use international remittance services like Remitly, Western Union, or bank SWIFT transfers. Requires beneficiary account details. Transfers take 1-5 working days. Charges are 0.5-2% of amount.",
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>© 2025 BuyNswipe Technology Pvt. Ltd. | Startup India Recognized | All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
