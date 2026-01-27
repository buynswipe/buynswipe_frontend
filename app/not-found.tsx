import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              <Home className="w-5 h-5 mr-2" />
              Go to Home
            </Button>
          </Link>
          <Link href="/credit">
            <Button variant="outline" className="w-full text-lg py-6 bg-transparent">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Browse Loans & Credit
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-gray-600 mb-4">Need help?</p>
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  )
}
