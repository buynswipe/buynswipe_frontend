import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface RelatedProduct {
  title: string
  description: string
  href: string
  icon: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
  title?: string
}

export function RelatedProducts({ products, title = "Related Products" }: RelatedProductsProps) {
  return (
    <section className="py-12 px-4 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.href} href={product.href}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
