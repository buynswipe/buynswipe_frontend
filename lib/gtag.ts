// Google Tag Manager / Google Analytics tracking utility

export function gtag(command: string, action: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag(command, action, params || {})
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  gtag("event", eventName, params)
}

export const trackPageView = (path: string, title: string) => {
  gtag("event", "page_view", {
    page_path: path,
    page_title: title,
  })
}

export const trackConversion = (conversionId: string, value: number) => {
  gtag("event", "conversion", {
    conversion_id: conversionId,
    conversion_value: value,
    conversion_currency: "INR",
  })
}
