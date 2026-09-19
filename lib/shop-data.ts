export type ShopItem = {
  slug: string
  name: string
  merchant: string
  category: string
  price: number
  mrp: number
  discount: number
  cashback: number
  verified: boolean
  accent: string
}

export const shopItems: ShopItem[] = [
  { slug: "noise-cancelling-headphones", name: "QuietTone Wireless Headphones", merchant: "SoundCart", category: "Electronics", price: 4999, mrp: 7999, discount: 38, cashback: 250, verified: true, accent: "from-blue-600 to-cyan-400" },
  { slug: "everyday-sneakers", name: "Everyday Knit Sneakers", merchant: "UrbanStep", category: "Fashion", price: 2199, mrp: 3499, discount: 37, cashback: 120, verified: true, accent: "from-violet-600 to-fuchsia-400" },
  { slug: "smart-watch-pro", name: "Pulse Pro Smartwatch", merchant: "TechBazaar", category: "Electronics", price: 3299, mrp: 5999, discount: 45, cashback: 180, verified: true, accent: "from-emerald-600 to-lime-400" },
  { slug: "workday-backpack", name: "Workday Laptop Backpack", merchant: "CarryHouse", category: "Travel", price: 1499, mrp: 2499, discount: 40, cashback: 75, verified: false, accent: "from-amber-500 to-orange-400" },
]

export const categories = ["Electronics", "Fashion", "Travel", "Home", "Beauty", "Food"]

export const coupons = [
  { merchant: "SoundCart", code: "SOUND250", offer: "₹250 off headphones", expiry: "30 Sep 2026", status: "VERIFIED", minimum: "₹2,999" },
  { merchant: "UrbanStep", code: "STEP10", offer: "10% off selected styles", expiry: "05 Oct 2026", status: "RECENTLY VERIFIED", minimum: "₹1,499" },
  { merchant: "TechBazaar", code: "TECH150", offer: "₹150 off smart devices", expiry: "12 Oct 2026", status: "VERIFIED", minimum: "₹2,000" },
]

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value)
}

export function calculateSavings(price: number, coupon = 250, cashback = 180) {
  const total = coupon + cashback
  return { coupon, cashback, total, effective: Math.max(price - total, 0) }
}
