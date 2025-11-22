import { usePostHog } from 'posthog-js/react'

export const usePostHogTracking = () => {
  const posthog = usePostHog()

  const trackLandingPageView = (page: string, properties?: Record<string, any>) => {
    posthog?.capture('$pageview', {
      $current_url: window.location.href,
      page_name: page,
      ...properties
    })
  }

  const trackLandingPageClick = (element: string, properties?: Record<string, any>) => {
    posthog?.capture('landing_page_click', {
      element,
      current_url: window.location.href,
      timestamp: new Date().toISOString(),
      ...properties
    })
  }

  const trackCTAClick = (ctaType: 'hero' | 'pricing' | 'footer' | 'demo', location: string) => {
    posthog?.capture('cta_click', {
      cta_type: ctaType,
      location,
      timestamp: new Date().toISOString()
    })
  }

  const trackDemoInteraction = (action: 'play' | 'pause' | 'complete', demoType: string) => {
    posthog?.capture('demo_interaction', {
      action,
      demo_type: demoType,
      timestamp: new Date().toISOString()
    })
  }

  const trackFeatureInterest = (feature: string, section: string) => {
    posthog?.capture('feature_interest', {
      feature,
      section,
      timestamp: new Date().toISOString()
    })
  }

  const trackPricingInteraction = (action: 'view_plan' | 'select_plan' | 'toggle_billing', planType?: string) => {
    posthog?.capture('pricing_interaction', {
      action,
      plan_type: planType,
      timestamp: new Date().toISOString()
    })
  }

  const trackNewsletterSignup = (location: string, success: boolean) => {
    posthog?.capture('newsletter_signup', {
      location,
      success,
      timestamp: new Date().toISOString()
    })
  }

  const trackSocialShare = (platform: string, content: string) => {
    posthog?.capture('social_share', {
      platform,
      content,
      timestamp: new Date().toISOString()
    })
  }

  const isFeatureEnabled = (flagKey: string, defaultValue: boolean = false): boolean => {
    return posthog?.isFeatureEnabled(flagKey) ?? defaultValue
  }

  return {
    trackLandingPageView,
    trackLandingPageClick,
    trackCTAClick,
    trackDemoInteraction,
    trackFeatureInterest,
    trackPricingInteraction,
    trackNewsletterSignup,
    trackSocialShare,
    isFeatureEnabled,
    posthog
  }
}