import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Privacy Policy | BuyNswipe | GDPR Compliant",
  description:
    "Learn about BuyNswipe's comprehensive data privacy practices, GDPR compliance, encryption standards, and user rights protection. Your data security is our priority.",
  keywords: [
    "data privacy",
    "GDPR compliance",
    "data protection",
    "encryption",
    "user rights",
    "data security",
    "privacy policy",
  ],
}

export default function DataPrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Privacy & Security</h1>
          <p className="text-xl text-green-100">Your trust is our responsibility</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Privacy Commitment</h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-700">
              At BuyNswipe, we take data privacy and security seriously. We comply with all applicable data protection
              regulations including GDPR, India's Digital Personal Data Protection Act (DPDPA), and RBI guidelines for
              financial data handling.
            </p>
            <p className="text-gray-700">
              Every piece of customer data is protected with enterprise-grade encryption, secure access controls, and
              regular security audits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Security Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Lock className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>End-to-End Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All data transmissions are encrypted using TLS 1.3 protocol. Stored data is encrypted with AES-256
                  encryption standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>PCI DSS Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We maintain PCI DSS Level 1 compliance for handling payment card information securely and protecting
                  financial data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Regular Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Independent security audits and penetration testing are conducted quarterly to identify and remediate
                  vulnerabilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>ISO 27001 Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  BuyNswipe maintains ISO 27001 certification for information security management systems and best
                  practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Your Data Rights</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Right to Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You have the right to request and access all personal data we hold about you. We will provide this
                  information within 15 days of request.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Right to Rectification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  If your data is inaccurate or incomplete, you can request correction or updates at any time through
                  your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Right to Erasure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You can request deletion of your personal data, subject to legal retention requirements for financial
                  records.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Right to Data Portability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You can request your data in a structured, machine-readable format to transfer to other services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Privacy Questions?</h2>
          <p className="text-xl mb-8">Contact our Data Protection Officer</p>
          <p className="text-green-100">privacy@buynswipe.com</p>
        </div>
      </section>
    </main>
  )
}
