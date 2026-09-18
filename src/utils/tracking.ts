/**
 * Conversion Tracking Helper for Google Ads, Google Tag Manager & GA4
 * Ready for production deployment with non-blocking graceful fallbacks.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConversionSource =
  | "topbar"
  | "navbar"
  | "hero_primary"
  | "hero_secondary"
  | "trust_strip"
  | "service_card"
  | "problem_diagnostic"
  | "conversion_break"
  | "process_step"
  | "service_area"
  | "dual_feature_card"
  | "callback_form"
  | "final_cta"
  | "footer"
  | "mobile_bottom_bar"
  | "desktop_floating";

export const trackCallClick = (source: ConversionSource | string) => {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: "call_click",
    event_category: "Conversion",
    event_label: `Phone Call Initiated - ${source}`,
    conversion_source: source,
    timestamp: new Date().toISOString(),
  };

  // Google Tag Manager dataLayer push
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // GA4 / Google Ads gtag call
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/CALL_LABEL", // Replace with real Google Ads conversion label in production
      event_category: "Leads",
      event_label: source,
    });
    window.gtag("event", "call_click", eventPayload);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[TRACKING: CALL_CLICK]", eventPayload);
  }
};

export const trackWhatsAppClick = (source: ConversionSource | string, context?: string) => {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: "whatsapp_click",
    event_category: "Conversion",
    event_label: `WhatsApp Initiated - ${source}${context ? ` (${context})` : ""}`,
    conversion_source: source,
    context: context || "general_inquiry",
    timestamp: new Date().toISOString(),
  };

  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/WHATSAPP_LABEL", // Replace with real Google Ads conversion label
      event_category: "Leads",
      event_label: `${source} - ${context || "general"}`,
    });
    window.gtag("event", "whatsapp_click", eventPayload);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[TRACKING: WHATSAPP_CLICK]", eventPayload);
  }
};

export const trackCallbackSubmit = (data: { area: string; brand?: string }) => {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: "callback_form_submit",
    event_category: "Conversion",
    event_label: `Callback Requested - ${data.area}`,
    area: data.area,
    brand: data.brand || "unspecified",
    timestamp: new Date().toISOString(),
  };

  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/FORM_LABEL", // Replace with real Google Ads conversion label
      event_category: "Leads",
      event_label: `Form Submission - ${data.area}`,
    });
    window.gtag("event", "generate_lead", eventPayload);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[TRACKING: CALLBACK_SUBMIT]", eventPayload);
  }
};
