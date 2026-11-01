import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Security & Compliance | BuyNswipe® | Data Protection & Certifications",
  description:
    "BuyNswipe® security practices, privacy controls, and compliance information. Verify certifications and provider responsibilities during diligence.",
  keywords: [
    "BuyNswipe® security",
    "data protection",
    "RBI compliance",
    "DPIIT recognized",
    "ISO certification",
    "GDPR compliance",
    "PCI-DSS",
    "encryption",
  ],
}

export default function SecurityCompliancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security & Compliance</h1>
          <p className="text-xl text-green-100">Security practices and compliance information for customer and partner review</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Compliance Framework</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>RBI Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Where a product involves regulated payment or lending activity, the relevant licensed provider is responsible for applicable Reserve Bank of India requirements. Confirm product scope and provider details before relying on this page.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Payment system registration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Regulatory reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Anti-money laundering (AML)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Know Your Customer (KYC)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Government Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Official recognition under Government of India's Startup India program.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> DPIIT Recognized Startup
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Tax exemption benefits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Priority government support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Regulatory clarity
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Security controls should be reviewed against the specific product, provider, and deployment environment.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> 256-bit SSL encryption
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Tokenization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> End-to-end encryption
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span> Secure key management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileCheck className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Any certification or attestation should be confirmed through current, scope-specific documentation.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> PCI-DSS scope: confirm current documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> ISO 27001 scope: confirm current documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> GDPR applicability: review with counsel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span> SOC 2 scope: confirm current documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Data Protection</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All customer data is encrypted using 256-bit AES encryption and stored on secure, redundant servers.
                  We never store sensitive data like full credit card numbers or security codes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GDPR & Data Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our handling of personal data is described in the Privacy Policy. Available rights, retention periods, and
                  request processes depend on the applicable law, product, and role of the relevant provider.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Advanced machine learning models detect and prevent fraud in real-time. Suspicious transactions are
                  flagged and reviewed by our security team within minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Incident Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Security incidents are handled according to the applicable response process and legal obligations. Contact us
                  promptly if you believe your information or an account has been exposed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Security Certifications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "PCI-DSS", level: "Level 1" },
              { name: "ISO 27001", level: "Information Security" },
              { name: "SOC 2", level: "Type II" },
              { name: "GDPR", level: "Compliant" },
            ].map((cert) => (
              <Card key={cert.name}>
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Questions about Security?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact our security team for detailed compliance documentation</p>
          <a href="/contact?type=security" className="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600">
            Contact Security Team
          </a>
        </div>
      </section>
    </main>
  )
}
