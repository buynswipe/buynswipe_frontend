import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Key, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "API Documentation | BuyNswipe Developer | Integration Guide",
  description:
    "Complete API documentation for BuyNswipe. Integrate loans, credit cards, and payment solutions with code examples and detailed guides.",
  keywords: ["API documentation", "developer guide", "API integration", "code examples", "REST API", "authentication"],
}

export default function ApiDocumentationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">API Documentation</h1>
          <p className="text-xl text-blue-100">Build with BuyNswipe's powerful APIs</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Key className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  All API requests require Bearer token authentication. Include your API key in the Authorization
                  header.
                </p>
                <code className="bg-gray-100 p-2 rounded text-sm block">Authorization: Bearer YOUR_API_KEY</code>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Base URL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Use the following base URL for all API requests:</p>
                <code className="bg-gray-100 p-2 rounded text-sm block">https://api.buynswipe.com/v1</code>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Available APIs</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Loan Application API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Endpoints:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <code className="bg-gray-100 p-1 rounded">POST /loans/apply</code>
                        <p className="text-gray-600">Create a new loan application</p>
                      </div>
                      <div>
                        <code className="bg-gray-100 p-1 rounded">
                          GET /loans/{"{"}id{"}"}
                        </code>
                        <p className="text-gray-600">Get loan application status</p>
                      </div>
                      <div>
                        <code className="bg-gray-100 p-1 rounded">GET /loans/eligibility-check</code>
                        <p className="text-gray-600">Check user eligibility</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rate Limit:</h4>
                    <p className="text-gray-700">1000 requests per minute</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Credit Card API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Endpoints:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <code className="bg-gray-100 p-1 rounded">POST /cards/apply</code>
                        <p className="text-gray-600">Submit credit card application</p>
                      </div>
                      <div>
                        <code className="bg-gray-100 p-1 rounded">GET /cards/compare</code>
                        <p className="text-gray-600">Compare credit card offers</p>
                      </div>
                      <div>
                        <code className="bg-gray-100 p-1 rounded">
                          GET /cards/{"{"}cardId{"}"}
                        </code>
                        <p className="text-gray-600">Get card details and benefits</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rate Limit:</h4>
                    <p className="text-gray-700">500 requests per minute</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Payment API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Endpoints:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <code className="bg-gray-100 p-1 rounded">POST /payments/initiate</code>
                        <p className="text-gray-600">Initiate a payment transaction</p>
                      </div>
                      <div>
                        <code className="bg-gray-100 p-1 rounded">
                          GET /payments/{"{"}txnId{"}"}
                        </code>
                        <p className="text-gray-600">Get payment status</p>
                      </div>
                      <div>
                        <code className="bg-gray-100 p-1 rounded">POST /payments/refund</code>
                        <p className="text-gray-600">Process refund</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rate Limit:</h4>
                    <p className="text-gray-700">2000 requests per minute</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Error Handling</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Error Response Format:</h4>
                  <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                    {`{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Invalid loan amount",
    "details": {
      "field": "amount",
      "reason": "Must be between 10000 and 5000000"
    }
  }
}`}
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Status Codes:</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <code className="bg-gray-100 px-2 py-1 rounded">400</code> - Bad Request
                    </p>
                    <p>
                      <code className="bg-gray-100 px-2 py-1 rounded">401</code> - Unauthorized
                    </p>
                    <p>
                      <code className="bg-gray-100 px-2 py-1 rounded">404</code> - Not Found
                    </p>
                    <p>
                      <code className="bg-gray-100 px-2 py-1 rounded">429</code> - Rate Limit Exceeded
                    </p>
                    <p>
                      <code className="bg-gray-100 px-2 py-1 rounded">500</code> - Server Error
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl mb-8">Contact our developer support team</p>
          <p className="text-blue-100">developers@buynswipe.com | Slack: buynswipe-dev</p>
        </div>
      </section>
    </main>
  )
}
