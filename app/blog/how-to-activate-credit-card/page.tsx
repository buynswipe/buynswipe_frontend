import type { Metadata } from "next"
import Link from "next/link"
import { Smartphone, Phone, Globe, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "How to Activate Credit Card - Complete Guide (SBI, HDFC, Axis, ICICI) | BuyNswipe",
  description:
    "Step-by-step guide on how to activate credit card. Learn activation methods for SBI, HDFC, Axis, ICICI cards via app, phone, SMS, or online.",
  keywords: [
    "how to activate credit card",
    "how to activate sbi credit card",
    "how to activate hdfc credit card",
    "can i activate credit card via sms",
    "how to activate credit card online",
    "credit card activation",
    "activate credit card by phone call",
    "credit card activate",
  ],
}

export default function HowToActivateCreditCardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyNswipe
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-yellow-400 text-yellow-900 mb-4">How-To Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Activate Credit Card - Complete Guide 2025</h1>
          <p className="text-xl text-green-100">
            Learn 4 easy ways to activate your credit card in minutes - app, phone, SMS, or online
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Why Activate */}
          <div className="bg-green-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Do You Need to Activate Your Credit Card?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Credit card activation is a mandatory security step before you can use your new card. Activation confirms
              that you've received the card and are authorizing its use. Without activation, your card remains locked
              and unusable for transactions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {["Use for purchases", "Build credit score", "Unlock rewards", "Access benefits"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Activation Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4 Ways to Activate Your Credit Card</h2>
            <div className="space-y-6">
              {[
                {
                  icon: Smartphone,
                  method: "Via Mobile App (Fastest)",
                  time: "2-3 minutes",
                  steps: [
                    "Download your bank's mobile app",
                    "Log in with your internet banking credentials",
                    "Navigate to 'Credit Card' or 'Cards' section",
                    "Select your new card and click 'Activate'",
                    "Enter your card's CVV and expiry date",
                    "Confirm activation via OTP",
                  ],
                },
                {
                  icon: Phone,
                  method: "Via Phone Call",
                  time: "5 minutes",
                  steps: [
                    "Call your bank's credit card helpline",
                    "Provide card number and personal details",
                    "Answer security questions for verification",
                    "Confirm activation with the representative",
                    "Activation done - you'll receive confirmation",
                  ],
                },
                {
                  icon: Globe,
                  method: "Via Online Portal",
                  time: "3-4 minutes",
                  steps: [
                    "Visit your bank's internet banking website",
                    "Log in with your username and password",
                    "Click on 'Card Services' or 'Manage Cards'",
                    "Select your new card from the list",
                    "Enter card details and activate",
                  ],
                },
              ].map((method) => (
                <Card key={method.method} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <method.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{method.method}</h3>
                        <p className="text-sm text-green-600">⏱️ Takes {method.time}</p>
                      </div>
                    </div>
                    <ol className="space-y-2 text-gray-700">
                      {method.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="font-bold text-green-600">{idx + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bank-Specific Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank-Specific Activation Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  bank: "SBI Credit Card",
                  app: "YONO App",
                  phone: "1800-112-211",
                  link: "/credit/affiliate-products/sbi-cashback-card",
                },
                {
                  bank: "HDFC Bank Credit Card",
                  app: "HDFC Mobile App",
                  phone: "1860-210-2020",
                  link: "/credit/affiliate-products/axis-flipkart-card",
                },
                {
                  bank: "Axis Bank Credit Card",
                  app: "Axis Mobile App",
                  phone: "1860-500-8000",
                  link: "/credit/affiliate-products/axis-flipkart-card",
                },
                {
                  bank: "ICICI Bank Credit Card",
                  app: "iMobile App",
                  phone: "1860-889-2010",
                  link: "/credit/credit-card",
                },
              ].map((bank) => (
                <Card key={bank.bank} className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">{bank.bank}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        📱 App: <span className="font-bold">{bank.app}</span>
                      </p>
                      <p>
                        📞 Helpline: <span className="font-bold">{bank.phone}</span>
                      </p>
                    </div>
                    <Link href={bank.link} className="text-blue-600 font-bold mt-3 inline-block hover:underline">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Activation Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I activate my credit card via SMS?",
                  a: "Most banks don't offer SMS activation anymore for security reasons. Use mobile app, phone call, or online portal instead.",
                },
                {
                  q: "How long does credit card activation take?",
                  a: "Immediate if done via app or phone (2-5 minutes). Processing may take 24 hours for online portal activations.",
                },
                {
                  q: "Do I need internet banking to activate?",
                  a: "No. You can call your bank's helpline and activate via phone without any app or internet banking access.",
                },
                {
                  q: "What if I forgot my activation code?",
                  a: "Contact your bank's customer service. They can resend the code or help you activate directly.",
                },
                {
                  q: "Can someone else activate my credit card?",
                  a: "No, for security reasons only the cardholder can activate their own card.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
