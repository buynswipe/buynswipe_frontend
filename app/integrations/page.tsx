import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Database, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "BuyNswipe API & Integrations | Developer Documentation | REST API",
  description:
    "BuyNswipe REST API and integrations for developers. Payment processing, POS systems, and credit marketplace integrations.",
  keywords: [
    "BuyNswipe API",
    "REST API",
    "payment gateway API",
    "developer documentation",
    "API integrations",
    "webhook support",
  ],
}

const integrations = [
  {
    icon: Code2,
    title: "REST API",
    description: "Full-featured REST API for all BuyNswipe services",
    endpoints: ["Payments", "Orders", "Inventory", "Customers"],
  },
  {
    icon: Database,
    title: "Webhooks",
    description: "Real-time events for payment and order updates",
    endpoints: ["Payment Success", "Order Status", "Inventory Changes"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security and compliance",
    endpoints: ["OAuth 2.0", "API Keys", "Encryption"],
  },
]

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Developer API</h1>
          <p className="text-xl text-purple-100">Build with BuyNswipe. Integrate everything.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <Card key={integration.title}>
                <CardHeader>
                  <integration.icon className="w-8 h-8 text-purple-600 mb-2" />
                  <CardTitle>{integration.title}</CardTitle>
                  <p className="text-gray-600 text-sm mt-2">{integration.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {integration.endpoints.map((endpoint) => (
                      <li key={endpoint} className="flex items-center gap-2 text-sm">
                        <span className="text-purple-600">→</span>
                        {endpoint}
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
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
              {`const buynswipe = require('buynswipe-sdk');

const client = new buynswipe.Client({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Process a payment
const payment = await client.payments.create({
  amount: 10000,
  currency: 'INR',
  method: 'card'
});`}
            </pre>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "API Reference", desc: "Complete endpoint documentation" },
              { title: "SDK Libraries", desc: "Node.js, Python, Java, PHP SDKs" },
              { title: "Sample Code", desc: "Code examples in multiple languages" },
              { title: "Tutorials", desc: "Step-by-step integration guides" },
            ].map((resource) => (
              <Card key={resource.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{resource.desc}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-xl mb-8 text-purple-100">Get your API keys and start building today</p>
          <Button className="bg-white text-purple-600 hover:bg-purple-50">Get API Keys</Button>
        </div>
      </section>
    </main>
  )
}
