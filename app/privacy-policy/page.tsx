import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - BuyNswipe",
  description: "BuyNswipe Privacy Policy - How we protect your personal data and information",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: December 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              BuyNswipe Technology Pvt. Ltd. ("Company", "we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect information in several ways:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personal identification information (name, email, phone number, address)</li>
              <li>Financial information (bank details, income, credit score)</li>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, interactions)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Process loan and credit applications</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Communicate with you about your account</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures including 256-bit SSL encryption, secure servers, and
              regular security audits. However, no method of transmission over the Internet is 100% secure. While we
              strive to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@buynswipe.com
              <br />
              Phone: +91-8171169007
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
