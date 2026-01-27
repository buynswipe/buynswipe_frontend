import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, Smartphone, Zap, Globe, Store, Lock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Digital Payment Solutions | AEPS | POS System | UPI | Money Transfer | BuyNswipe",
  description:
    "Complete digital payment solutions for merchants and consumers. AEPS payment system, POS terminals, UPI integration, money transfer, bill payment, and BBPS services.",
  keywords: [
    "digital payment solutions",
    "payment gateway",
    "POS system",
    "AEPS payment",
    "UPI integration",
    "money transfer",
    "bill payment",
    "BBPS",
    "digital payment merchant",
    "payment aggregator",
    "online payment",
    "digital wallet",
    "contactless payment",
    "payment terminal",
    "merchant services",
    "payment processing",
    "fintech solutions",
    "digital India",
  ],
  openGraph: {
    title: "Digital Payment Solutions | BuyNswipe",
    description: "Complete payment ecosystem for merchants and consumers",
    url: "https://buynswipe.com/payment-solutions",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BuyNswipe Payment Solutions",
  description: "Complete digital payment solutions platform",
  url: "https://buynswipe.com/payment-solutions",
}

export default function PaymentSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Complete Digital Payment Solutions</h1>
            <p className="text-xl text-blue-100 mb-8 text-balance">
              From AEPS to POS systems, UPI to international remittance - BuyNswipe powers your payment journey
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Payment Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "AEPS",
                  desc: "Aadhaar Enabled Payment System for cardless cash withdrawal",
                  link: "/credit/aeps",
                },
                {
                  icon: Store,
                  title: "POS Systems",
                  desc: "Complete point of sale solutions for retail merchants",
                  link: "/payment-solutions/pos-systems",
                },
                {
                  icon: Smartphone,
                  title: "UPI & Digital Payments",
                  desc: "Instant payment processing via UPI, NEFT, RTGS, IMPS",
                  link: "/payment-solutions/digital-payments",
                },
                {
                  icon: Globe,
                  title: "Money Transfer",
                  desc: "Domestic and international fund transfers",
                  link: "/credit/money-transfer",
                },
                {
                  icon: CreditCard,
                  title: "Bill Payment",
                  desc: "BBPS utility bills, mobile recharge, insurance",
                  link: "/credit/bill-payment",
                },
                {
                  icon: Lock,
                  title: "Merchant Services",
                  desc: "Complete merchant solutions and settlement services",
                  link: "/payment-solutions/merchant-services",
                },
              ].map((service) => (
                <Link key={service.title} href={service.link}>
                  <Card className="h-full hover:shadow-lg transition cursor-pointer">
                    <CardHeader>
                      <service.icon className="w-8 h-8 text-blue-600 mb-2" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose BuyNswipe */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose BuyNswipe?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "RBI Approved", desc: "Certified and regulated payment service" },
                { title: "24/7 Support", desc: "Round the clock customer service" },
                { title: "Lowest Charges", desc: "Best rates in the industry" },
                { title: "Instant Settlement", desc: "Fast fund transfer to your account" },
                { title: "Secure & Encrypted", desc: "Bank-grade security for all transactions" },
                { title: "Pan-India Coverage", desc: "Service available across 50+ lakh outlets" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Payment Experience?</h2>
            <p className="text-xl mb-8 text-blue-100">Join thousands of merchants and consumers using BuyNswipe</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">Start Your Journey</Button>
          </div>
        </section>
      </main>
    </>
  )
}
