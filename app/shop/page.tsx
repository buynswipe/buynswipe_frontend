import type { Metadata } from "next"
import { ShopNdealHome } from "@/components/shopn-deal-home"

export const metadata: Metadata = {
  title: "ShopNdeal | Compare Products, Deals, Coupons & Cashback",
  description: "ShopNdeal helps you compare products, verified deals, coupons, cashback and eligible BuyNswipe benefits in one place.",
  alternates: { canonical: "/shop" },
  openGraph: { title: "ShopNdeal | Compare Products and Save", description: "Transparent shopping discovery from BuyNswipe.", url: "/shop", type: "website" },
}

export default function ShopPage() { return <ShopNdealHome /> }
