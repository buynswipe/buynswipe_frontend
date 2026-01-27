import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, Zap, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About BuyNswipe | Company Story | Founder | Acquisition Opportunity",
  description:
    "Learn about BuyNswipe's mission to democratize digital payments and credit access. Founded in 2017, govt-recognized, pre-funded fintech startup ready for acquisition.",
  keywords: [
    "about BuyNswipe",
    "BuyNswipe founder",
    "company mission",
    "fintech startup",
    "digital payments",
    "credit marketplace",
  ],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BuyNswipe</h1>
          <p className="text-xl text-blue-100">Making digital payments and credit universally accessible since 2017</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              BuyNswipe Technology Pvt. Ltd. was founded in 2017 with a singular mission: to make digital payments so
              easy, safe, and universally accepted that people never feel the need to carry cash.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a vision to bridge the digital divide in India has evolved into a comprehensive fintech
              platform offering payment solutions, credit marketplace, and merchant services. We've served hundreds of
              thousands of customers and processed billions in transactions.
            </p>
            <p className="text-gray-700">
              Today, BuyNswipe stands as a government-recognized startup under Startup India (DPIIT), with trademark
              protection, premium domain assets, and a clean regulatory track record. We're now at an inflection point
              where the right strategic acquirer can scale this platform exponentially.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Financial Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We believe everyone deserves access to simple, affordable financial services regardless of their
                  background or location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Digital-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We leverage technology to create seamless experiences that solve real problems in the financial
                  services space.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Customer Centricity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Every decision we make is guided by what's best for our customers, partners, and the broader
                  ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Check className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Trust & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We maintain the highest standards of security and compliance to protect customer data and maintain
                  trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Company Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Founded", value: "2017" },
              { label: "Seed Funding", value: "₹17 Lakhs" },
              { label: "Government Recognition", value: "Startup India (DPIIT)" },
              { label: "Brand Status", value: "Trademarked™" },
              { label: "Premium Domains", value: "buynswipe.com, .in" },
              { label: "Registration", value: "Noida, NCR - Clean ROC" },
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Founder</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Ratnesh Choubey</h3>
                <p className="text-gray-600 mb-4">Founder & CEO, BuyNswipe Technology Pvt. Ltd.</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-6 text-left">
                  <p className="text-gray-700">
                    Ratnesh Choubey is a serial entrepreneur with deep expertise in fintech and digital payments. His
                    vision for BuyNswipe was born from recognizing the gap between payment infrastructure and
                    accessibility for everyday Indians. Under his leadership, BuyNswipe has grown from a startup concept
                    to a multi-product fintech platform serving hundreds of thousands of customers.
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                    View Profile
                  </button>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Acquisition Opportunity</h2>
          <p className="text-xl mb-8 text-blue-100">
            BuyNswipe is available for strategic acquisition by qualified buyers
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold">
              Download Teaser
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold">
              Contact Founder
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
