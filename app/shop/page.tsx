import type { Metadata } from "next"
import { ShopNdealHome } from "@/components/shopn-deal-home"

export const metadata: Metadata = { title: "ShopNdeal | Find the Best Way to Buy & Save", description: "Compare products, deals, coupons, cashback and eligible BuyNswipe benefits in one place." }

export default function ShopPage() { return <ShopNdealHome /> }
