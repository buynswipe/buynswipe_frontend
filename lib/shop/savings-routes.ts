import type { SavingsOffer } from "./savings-engine"

export type SavingsRoute = {
  id: string
  label: string
  payNow: number
  cashback: number
  potentialNetCost: number
  instantSavings: number
  offerIds: string[]
  status: "eligible"
  explanation: string
}

export function generateSavingsRoutes(price: number, offers: SavingsOffer[]): SavingsRoute[] {
  const safePrice = Number.isFinite(price) ? Math.max(0, price) : 0
  const active = offers.filter((offer) => offer.eligible !== false && offer.amount > 0)
  const discountOffers = active.filter((offer) => offer.type === "discount")
  const cashbackOffers = active.filter((offer) => offer.type === "cashback" || offer.type === "reward")
  const direct: SavingsRoute = { id: "direct", label: "Direct purchase", payNow: safePrice, cashback: 0, potentialNetCost: safePrice, instantSavings: 0, offerIds: [], status: "eligible", explanation: "No offer applied." }
  const routes = [direct]
  for (const offer of discountOffers) {
    const discount = Math.min(safePrice, offer.amount)
    routes.push({ id: offer.id, label: offer.label, payNow: safePrice - discount, cashback: 0, potentialNetCost: safePrice - discount, instantSavings: discount, offerIds: [offer.id], status: "eligible", explanation: `${offer.label} reduces the amount paid now.` })
  }
  for (const discount of discountOffers) {
    for (const cashback of cashbackOffers) {
      if (discount.stackable === false || cashback.stackable === false) continue
      const instantSavings = Math.min(safePrice, discount.amount)
      const payNow = safePrice - instantSavings
      const cashbackAmount = Math.min(payNow, cashback.amount)
      routes.push({ id: `${discount.id}+${cashback.id}`, label: `${discount.label} + ${cashback.label}`, payNow, cashback: cashbackAmount, potentialNetCost: Math.max(payNow - cashbackAmount, 0), instantSavings, offerIds: [discount.id, cashback.id], status: "eligible", explanation: "This combination is shown only because both offers are explicitly stackable." })
    }
  }
  return routes.sort((a, b) => a.payNow - b.payNow || b.cashback - a.cashback)
}

export function routeOffersForItem(price: number, coupon: number, cashback: number): SavingsOffer[] {
  return [
    { id: "catalog-coupon", label: "Verified coupon", amount: coupon, type: "discount", certainty: "verified", stackable: true },
    { id: "catalog-cashback", label: "Potential cashback", amount: cashback, type: "cashback", certainty: "potential", stackable: true },
  ].filter((offer) => offer.amount > 0 && price > 0)
}

