import Link from "next/link"
import { CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AffiliateLoantCardProps {
  id: string
  name: string
  description: string
  amount: string
  rate: string
  tenure: string
  features: string[]
  category: string
  affiliateLink: string
}

export function AffiliateLoanCard({
  name,
  description,
  amount,
  rate,
  tenure,
  features,
  category,
  affiliateLink,
}: AffiliateLoantCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y">
          <div>
            <p className="text-sm text-gray-600">Loan Amount</p>
            <p className="text-lg font-bold text-blue-600">{amount}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Interest Rate</p>
            <p className="text-lg font-bold text-blue-600">{rate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Tenure</p>
            <p className="text-lg font-bold text-blue-600">{tenure}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature} className="text-sm text-gray-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Apply Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
