import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, FileText, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "API Documentation | BuyNswipe Developers | REST API Guide",
  description:
    "Complete API documentation for BuyNswipe. REST API, SDKs, webhooks, and integration guides. Build with BuyNswipe's payment and credit APIs.",
  keywords: [
    "BuyNswipe API",
    "API documentation",
    "REST API",
    "payment API",
    "credit API",
    "developer guide",
    "SDK",
    "webhook",
  ],
}

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">API Documentation</h1>
          <p className="text-xl text-purple-100">Build powerful fintech applications with BuyNswipe APIs</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Getting Started</h2>

          <Card className="mb-8">
            <CardHeader>
              <Code2 className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>1. Get API Keys</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Sign up for a developer account to get your API keys and test credentials.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">Generate API Keys</Button>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>2. Read Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Review our comprehensive API reference and integration guides.</p>
              <Button variant="outline">View API Reference</Button>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <FileText className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>3. Test Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Use our sandbox environment to test your integration before going live.
              </p>
              <Button variant="outline">Access Sandbox</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">API Endpoints</h2>

          <div className="space-y-6">
            {[
              {
                endpoint: "POST /api/v1/payments",
                desc: "Process a payment transaction",
                auth: "API Key",
              },
              {
                endpoint: "GET /api/v1/payments/:id",
                desc: "Retrieve payment details",
                auth: "API Key",
              },
              {
                endpoint: "POST /api/v1/loans",
                desc: "Create a loan application",
                auth: "OAuth 2.0",
              },
              {
                endpoint: "GET /api/v1/loans",
                desc: "List all loans for user",
                auth: "OAuth 2.0",
              },
              {
                endpoint: "POST /api/v1/webhooks",
                desc: "Register webhook endpoints",
                auth: "API Key",
              },
              {
                endpoint: "GET /api/v1/balance",
                desc: "Get account balance",
                auth: "API Key",
              },
            ].map((api) => (
              <Card key={api.endpoint}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-2">
                    <code className="bg-gray-900 text-green-400 px-3 py-1 rounded text-sm font-mono">
                      {api.endpoint}
                    </code>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{api.auth}</span>
                  </div>
                  <p className="text-gray-700">{api.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Available SDKs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Node.js", pkg: "npm install buynswipe-sdk" },
              { name: "Python", pkg: "pip install buynswipe-sdk" },
              { name: "Java", pkg: "maven dependency: com.buynswipe:sdk" },
              { name: "PHP", pkg: "composer require buynswipe/sdk" },
              { name: "Go", pkg: "go get github.com/buynswipe/sdk-go" },
              { name: "Ruby", pkg: "gem install buynswipe-sdk" },
            ].map((sdk) => (
              <Card key={sdk.name}>
                <CardContent className="pt-6">
                  <p className="font-semibold mb-2">{sdk.name}</p>
                  <code className="bg-gray-100 p-2 rounded text-sm block text-gray-800">{sdk.pkg}</code>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-xl mb-8 text-purple-100">Join thousands of developers building with BuyNswipe</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">Start Free Trial</Button>
            <Button variant="outline" className="border-white text-white hover:bg-purple-700 bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
