import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Link2, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe Partnerships | Strategic Partners | Integration Program",
  description:
    "Join BuyNswipe's partner ecosystem. Bank partnerships, fintech integrations, merchant aggregators, and technology partnerships.",
  keywords: [
    "BuyNswipe partnerships",
    "bank partnerships",
    "fintech integrations",
    "partner program",
    "API partnerships",
  ],
}

const partnerTypes = [
  {
    icon: Building2,
    title: "Bank Partners",
    description: "Co-branded loan and credit card products",
    benefits: ["Revenue sharing model", "White-label solutions", "Customer acquisition"],
  },
  {
    icon: Link2,
    title: "Integration Partners",
    description: "API-first platform for third-party developers",
    benefits: ["REST API", "Webhook support", "Sandbox environment"],
  },
  {
    icon: Zap,
    title: "Merchant Aggregators",
    description: "Reseller and distributor partnerships",
    benefits: ["Competitive margins", "Marketing support", "Training resources"],
  },
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With BuyNswipe</h1>
          <p className="text-xl text-green-100">Build together. Grow together. Win together.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((partner) => (
              <Card key={partner.title}>
                <CardHeader>
                  <partner.icon className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle>{partner.title}</CardTitle>
                  <p className="text-gray-600 text-sm mt-2">{partner.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm">
                        <span className="text-green-600">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With BuyNswipe?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Proven fintech platform with 500+ users",
              "Multiple revenue streams (POS, credit, payments)",
              "Govt-recognized and compliant",
              "Strong technical infrastructure",
              "Experienced team with fintech background",
              "Growing market opportunity",
            ].map((reason) => (
              <div key={reason} className="flex items-start gap-3 bg-white p-4 rounded">
                <span className="text-green-600 text-xl mt-1">✓</span>
                <span className="font-semibold">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-xl mb-8 text-green-100">Let's build something great together</p>
          <Button className="bg-white text-green-600 hover:bg-green-50">Start Partnership Discussion</Button>
        </div>
      </section>
    </main>
  )
}
