/* =============================================================
   GOOGLE ANALYTICS TRACKING HOOK
   Track user interactions, conversions, and custom events
   ============================================================= */

/**
 * Track page views automatically
 * Call this in useEffect on page load
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-LTVW2K4KSE", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track custom events (button clicks, form submissions, etc.)
 * @param eventName - Name of the event (e.g., "contact_form_submit")
 * @param eventData - Additional data to track (optional)
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData || {});
  }
};

/**
 * Track CTA button clicks
 * @param buttonName - Name of the button (e.g., "call_dean_hero")
 */
export const trackCTAClick = (buttonName: string) => {
  trackEvent("cta_click", {
    button_name: buttonName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form (e.g., "contact_form")
 */
export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", {
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track service clicks
 * @param serviceName - Name of the service (e.g., "voice_agent")
 */
export const trackServiceClick = (serviceName: string) => {
  trackEvent("service_click", {
    service_name: serviceName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track pricing tier selection
 * @param tier - Pricing tier (e.g., "genesis", "kinetic", "vanguard")
 */
export const trackPricingTierClick = (tier: string) => {
  trackEvent("pricing_tier_click", {
    tier: tier,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track blog post views
 * @param postTitle - Title of the blog post
 */
export const trackBlogPostView = (postTitle: string) => {
  trackEvent("blog_post_view", {
    post_title: postTitle,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track voice demo plays
 * @param voiceName - Name of the voice (e.g., "Kate", "Ben", "Lee")
 */
export const trackVoiceDemoPlay = (voiceName: string) => {
  trackEvent("voice_demo_play", {
    voice_name: voiceName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track chat widget interactions
 * @param action - Action type (e.g., "open", "close", "message_sent")
 */
export const trackChatWidgetInteraction = (action: string) => {
  trackEvent("chat_widget_interaction", {
    action: action,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track scroll depth
 * @param percentage - Percentage of page scrolled (0-100)
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    scroll_percentage: percentage,
    timestamp: new Date().toISOString(),
  });
};

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}
