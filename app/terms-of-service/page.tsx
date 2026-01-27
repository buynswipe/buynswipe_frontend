import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - BuyNswipe",
  description: "BuyNswipe Terms of Service - Conditions and policies for using our platform",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: December 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700">
              By accessing and using BuyNswipe's website and services, you agree to be bound by these Terms of Service.
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials for personal, non-commercial
              transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-700">
              The materials on BuyNswipe's website are provided on an 'as is' basis. BuyNswipe makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-700">
              In no event shall BuyNswipe or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on BuyNswipe's website, even if BuyNswipe or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Loan Application Terms</h2>
            <p className="text-gray-700 mb-4">When applying for loans or credit products through BuyNswipe:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>You must provide accurate and truthful information</li>
              <li>You agree to undergo credit and background checks</li>
              <li>Loan approval depends on lender decisions</li>
              <li>Interest rates may vary based on creditworthiness</li>
              <li>You are responsible for repayment according to agreed terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Not engage in unlawful activities</li>
              <li>Not provide false or misleading information</li>
              <li>Not attempt to breach security systems</li>
              <li>Not infringe on intellectual property rights</li>
              <li>Maintain confidentiality of login credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications to Terms</h2>
            <p className="text-gray-700">
              BuyNswipe may revise these terms of service at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-700">
              For any questions regarding these Terms of Service, please contact us at:
              <br />
              Email: legal@buynswipe.com
              <br />
              Phone: +91-8171169007
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
