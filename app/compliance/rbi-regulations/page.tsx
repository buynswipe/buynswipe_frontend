import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Shield, FileCheck, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "RBI Compliance & Regulations | BuyNswipe Legal Framework",
  description:
    "BuyNswipe's comprehensive compliance with RBI guidelines, NEFT/RTGS protocols, data privacy laws, and regulatory certifications for fintech services.",
  keywords: ["RBI compliance", "fintech regulations", "data privacy", "NEFT RTGS", "compliance framework"],
}

export default function RBICompliancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RBI Compliance & Regulations</h1>
          <p className="text-xl text-blue-100">Meeting all regulatory requirements for fintech operations in India</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Regulatory Framework</h2>
          <div className="space-y-6">
            {[
              {
                title: "AEPS (Aadhaar Enabled Payment System)",
                description:
                  "Fully compliant with NPCI AEPS guidelines for secure biometric-based payments. All transactions encrypted and logged.",
                icon: Shield,
              },
              {
                title: "NEFT/RTGS Protocols",
                description:
                  "Direct integration with RBI's NEFT and RTGS systems for electronic fund transfers. Real-time settlement and reconciliation.",
                icon: CheckCircle2,
              },
              {
                title: "KYC/AML Compliance",
                description:
                  "Strict Know Your Customer and Anti-Money Laundering procedures. All users verified against NCRB and international databases.",
                icon: FileCheck,
              },
              {
                title: "Data Security Standards",
                description:
                  "End-to-end encryption, PCI DSS Level 1 compliance, regular security audits, and ISO 27001 certification for information security.",
                icon: Lock,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Approvals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Startup India (DPIIT) Recognition",
              "ISO 27001:2013 Information Security",
              "PCI DSS Level 1 Compliance",
              "NPCI AEPS Certification",
              "RBI-Regulated Payment System",
              "Clean GST Registration",
            ].map((cert) => (
              <Card key={cert}>
                <CardContent className="pt-6 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Data Privacy & Protection</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>GDPR Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  While operating primarily in India, BuyNswipe adheres to international data privacy standards
                  including GDPR principles for data protection and user rights.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>User data encrypted at rest and in transit</li>
                  <li>Right to data access and deletion</li>
                  <li>Data processing agreements with all vendors</li>
                  <li>Regular privacy impact assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Enterprise-grade security infrastructure protecting user data and financial transactions.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>256-bit AES encryption for data storage</li>
                  <li>SSL/TLS for all data transmission</li>
                  <li>Annual third-party penetration testing</li>
                  <li>24/7 security monitoring and incident response</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Regulatory Due Diligence Ready</h2>
          <p className="text-xl mb-8 text-blue-100">
            BuyNswipe maintains complete compliance documentation and audit trails for regulatory review and acquisition
            due diligence
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 font-semibold">
            Request Compliance Documentation
          </button>
        </div>
      </section>
    </main>
  )
}
