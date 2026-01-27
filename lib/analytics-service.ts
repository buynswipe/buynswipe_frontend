// Analytics event tracking service for BuyNswipe

export const analyticsEvents = {
  // Lead Generation Events
  LEAD_MAGNET_DOWNLOAD: "lead_magnet_download",
  EMAIL_CAPTURED: "email_captured",
  NEWSLETTER_SIGNUP: "newsletter_signup",

  // Form Events
  FORM_START: "form_start",
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",
  FORM_ABANDON: "form_abandon",

  // Product Events
  PRODUCT_VIEW: "product_view",
  PRODUCT_CLICK: "product_click",
  APPLY_NOW_CLICK: "apply_now_click",
  COMPARISON_VIEW: "comparison_view",

  // Video Events
  VIDEO_PLAY: "video_play",
  VIDEO_25_PERCENT: "video_25_percent",
  VIDEO_50_PERCENT: "video_50_percent",
  VIDEO_75_PERCENT: "video_75_percent",
  VIDEO_COMPLETE: "video_complete",

  // Calculator Events
  CALCULATOR_USE: "calculator_use",
  CALCULATOR_RESULT_VIEW: "calculator_result_view",

  // Account Events
  ACCOUNT_CREATED: "account_created",
  LOGIN: "login",
  PROFILE_COMPLETE: "profile_complete",
}

export interface AnalyticsEventParams {
  event: string
  category?: string
  action?: string
  label?: string
  value?: number | string
  [key: string]: any
}

export function trackEvent(params: AnalyticsEventParams) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", params.event, {
      ...params,
    })
  }
}

export function trackPageView(path: string, title: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "page_view", {
      page_path: path,
      page_title: title,
    })
  }
}

export function trackConversion(conversionId: string, value: number) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "conversion", {
      conversion_id: conversionId,
      conversion_value: value,
      conversion_currency: "INR",
    })
  }
}
