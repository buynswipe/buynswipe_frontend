export type ShopItem = {
  slug: string
  name: string
  merchant: string
  brand: string
  category: string
  price: number
  mrp: number
  discount: number
  cashback: number
  rating: number
  reviewCount: number
  verified: boolean
  dealType: "deal" | "coupon" | "price-drop"
  accent: string
}

export const shopItems: ShopItem[] = [
  { slug: "noise-cancelling-headphones", name: "QuietTone Wireless Headphones", merchant: "SoundCart", brand: "QuietTone", category: "Electronics", price: 4999, mrp: 7999, discount: 38, cashback: 250, rating: 4.5, reviewCount: 1842, verified: true, dealType: "coupon", accent: "from-blue-600 to-cyan-400" },
  { slug: "everyday-sneakers", name: "Everyday Knit Sneakers", merchant: "UrbanStep", brand: "UrbanStep", category: "Fashion", price: 2199, mrp: 3499, discount: 37, cashback: 120, rating: 4.3, reviewCount: 926, verified: true, dealType: "deal", accent: "from-violet-600 to-fuchsia-400" },
  { slug: "smart-watch-pro", name: "Pulse Pro Smartwatch", merchant: "TechBazaar", brand: "Pulse", category: "Electronics", price: 3299, mrp: 5999, discount: 45, cashback: 180, rating: 4.4, reviewCount: 2310, verified: true, dealType: "price-drop", accent: "from-emerald-600 to-lime-400" },
  { slug: "workday-backpack", name: "Workday Laptop Backpack", merchant: "CarryHouse", brand: "CarryHouse", category: "Travel", price: 1499, mrp: 2499, discount: 40, cashback: 75, rating: 4.2, reviewCount: 614, verified: false, dealType: "deal", accent: "from-amber-500 to-orange-400" },
  { slug: "air-purifier-mini", name: "BreatheEasy Mini Air Purifier", merchant: "HomeKind", brand: "BreatheEasy", category: "Home", price: 2899, mrp: 4499, discount: 36, cashback: 150, rating: 4.1, reviewCount: 488, verified: true, dealType: "coupon", accent: "from-sky-600 to-teal-400" },
  { slug: "daily-skin-set", name: "Daily Barrier Skin Set", merchant: "GlowBasket", brand: "Nourish Lab", category: "Beauty", price: 899, mrp: 1299, discount: 31, cashback: 45, rating: 4.6, reviewCount: 1204, verified: true, dealType: "deal", accent: "from-rose-500 to-pink-300" },
  { slug: "coffee-maker", name: "BrewMate Compact Coffee Maker", merchant: "HomeKind", brand: "BrewMate", category: "Home", price: 3799, mrp: 5499, discount: 31, cashback: 200, rating: 4.4, reviewCount: 735, verified: true, dealType: "price-drop", accent: "from-stone-700 to-amber-500" },
  { slug: "meal-kit-box", name: "Weeknight Meal Kit Box", merchant: "FreshBasket", brand: "FreshBasket", category: "Food", price: 699, mrp: 999, discount: 30, cashback: 35, rating: 4.0, reviewCount: 310, verified: false, dealType: "coupon", accent: "from-lime-600 to-emerald-400" },
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

export function searchShopItems(query = "", category = "") {
  const normalizedQuery = query.trim().toLowerCase()
  const normalizedCategory = category.trim().toLowerCase()
  return shopItems.filter((item) => {
    const matchesQuery = !normalizedQuery || `${item.name} ${item.merchant} ${item.brand} ${item.category}`.toLowerCase().includes(normalizedQuery)
    const matchesCategory = !normalizedCategory || item.category.toLowerCase() === normalizedCategory
    return matchesQuery && matchesCategory
  })
}

export function sortShopItems(items: ShopItem[], sort = "featured") {
  return [...items].sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "discount" ? b.discount - a.discount : sort === "rating" ? b.rating - a.rating : Number(b.verified) - Number(a.verified) || b.discount - a.discount)
}
