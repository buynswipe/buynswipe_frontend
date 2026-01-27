import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - BuyNswipe",
  description: "BuyNswipe Cookie Policy - Information about cookies and tracking technologies",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: December 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700">
              Cookies are small text files that are stored on your browser or device when you visit websites. They help
              websites remember information about your visit, such as your preferences and browsing history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>
            <p className="text-gray-700 mb-4">BuyNswipe uses the following types of cookies:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Essential Cookies:</strong> Required for website functionality and security
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how users interact with our site
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track user behavior for targeted advertising
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookies from Third Parties</h2>
            <p className="text-gray-700">
              We use third-party services that may place cookies on your device, including Google Analytics, social
              media platforms, and advertising networks. These companies have their own privacy policies governing their
              cookie use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">You can control cookies through:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Browser settings (consult your browser's help menu)</li>
              <li>Cookie consent management tools on our website</li>
              <li>Opting out of specific cookie tracking services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time. Changes become effective when posted to our website.
              Your continued use of BuyNswipe after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about our cookie usage, please contact us at:
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
