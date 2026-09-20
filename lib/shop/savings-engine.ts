export type SavingsCertainty = "verified" | "potential" | "estimated"

export type SavingsOffer = {
  id: string
  label: string
  amount: number
  type: "discount" | "cashback" | "reward"
  certainty: SavingsCertainty
  startsAt?: string
  expiresAt?: string
  minimumOrder?: number
  stackable?: boolean
  eligible?: boolean
}

export type SavingsInput = {
  price: number
  offers: SavingsOffer[]
  asOf?: Date
}

export type SavingsResult = {
  eligibleOffers: SavingsOffer[]
  totalDiscount: number
  cashback: number
  reward: number
  effectivePrice: number
  potentialSavings: number
  verifiedSavings: number
  explanation: string
}

function isActive(offer: SavingsOffer, asOf: Date) {
  const startsAt = offer.startsAt ? new Date(offer.startsAt).getTime() : -Infinity
  const expiresAt = offer.expiresAt ? new Date(offer.expiresAt).getTime() : Infinity
  const timestamp = asOf.getTime()
  return Number.isFinite(startsAt) && startsAt > timestamp ? false : Number.isFinite(expiresAt) && expiresAt < timestamp ? false : true
}

export function calculateSavings(input: SavingsInput): SavingsResult {
  const asOf = input.asOf ?? new Date()
  const price = Math.max(0, input.price)
  const eligibleOffers = input.offers.filter((offer) => offer.amount > 0 && offer.eligible !== false && isActive(offer, asOf) && (!offer.minimumOrder || price >= offer.minimumOrder))
  const discounts = eligibleOffers.filter((offer) => offer.type === "discount")
  const discountTotal = discounts.reduce((sum, offer) => sum + offer.amount, 0)
  const totalDiscount = Math.min(price, discountTotal)
  const cashback = eligibleOffers.filter((offer) => offer.type === "cashback").reduce((sum, offer) => sum + offer.amount, 0)
  const reward = eligibleOffers.filter((offer) => offer.type === "reward").reduce((sum, offer) => sum + offer.amount, 0)
  const potentialSavings = Math.min(price, totalDiscount + cashback + reward)
  const verifiedSavings = Math.min(price, eligibleOffers.filter((offer) => offer.certainty === "verified").reduce((sum, offer) => sum + offer.amount, 0))
  const certainty = eligibleOffers.some((offer) => offer.certainty === "potential" || offer.certainty === "estimated") ? "Potential savings include offers that may depend on eligibility." : "Savings are based on currently active verified offers."
  return { eligibleOffers, totalDiscount, cashback, reward, effectivePrice: Math.max(price - totalDiscount, 0), potentialSavings, verifiedSavings, explanation: certainty }
}
