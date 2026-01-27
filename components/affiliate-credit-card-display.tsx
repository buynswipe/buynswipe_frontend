import Link from "next/link"
import { CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AffiliateCreditCardProps {
  id: string
  name: string
  description: string
  type: string
  fees: string
  benefits: string[]
  cashback: string
  category: string
  affiliateLink: string
}

export function AffiliateCreditCardDisplay({
  name,
  description,
  type,
  fees,
  benefits,
  cashback,
  category,
  affiliateLink,
}: AffiliateCreditCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <Badge variant="outline">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y">
          <div>
            <p className="text-sm text-gray-600">Annual Fee</p>
            <p className="text-lg font-bold text-purple-600">{fees}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Cashback</p>
            <p className="text-lg font-bold text-purple-600">{cashback}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Top Benefits:</p>
          <ul className="space-y-1">
            {benefits.slice(0, 4).map((benefit) => (
              <li key={benefit} className="text-sm text-gray-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
          <Link href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Apply Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
