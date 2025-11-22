"use client"
import { Check } from 'lucide-react'
import { useState } from 'react'
import GoogleIcon from "@/components/ui/google-icon"


export default function PricingSection() {
 
  const [isYearly, setIsYearly] = useState(true)
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pendingPlan, setPendingPlan] = useState<string | null>(null)
  
  // Calculate monthly price from yearly with savings
  const calculateMonthlyFromYearly = (yearlyPrice: number) => {
    return (yearlyPrice / 12).toFixed(2)
  }

  const plans = [
    {
      name: "Basic",
      price: "$2",
      period: "per month",
      credits: "40 credits",
      description: "for casual users",
      features: [
        "40 credits (≈40 images) per month",
        "All AI editing features", 
        "High-resolution output",
        "Access to canvas mode",
        "Unlimited uploads",
        "Access to templates",
        "Email support",
      ],
      cta: "Start Basic",
      popular: false,
      yearlyPrice: 20,
      yearlyPricePerMonth: calculateMonthlyFromYearly(20),
      yearlyCredits: "480 credits",
      savings: "Save ~17%"
    },
    {
      name: "Creator",
      price: "$12",
      period: "per month", 
      credits: "400 credits",
      description: "for founders or small teams",
      features: [
        "400 credits (≈400 images) per month",
        "All AI editing features",
        "High-resolution output",
        "Access to canvas mode",
        "Unlimited uploads",
        "Access to templates",
        "Creative Upscale (enhance detail up to 4K)",
        "Private images and styles",
        "Priority support",
      ],
      cta: "Start Creating",
      popular: true,
      yearlyPrice: 120,
      yearlyPricePerMonth: calculateMonthlyFromYearly(120),
      yearlyCredits: "4,800 credits", 
      savings: "Save ~17%"
    },
    {
      name: "Pro",
      price: "$29", 
      period: "per month",
      credits: "1,200 credits",
      description: "for ecommerce stores and design agencies",
      features: [
        "1,200 credits (≈1,200 images) per month",
        "All professional editing tools",
        "Ultra-high resolution output",
        "Access to canvas mode",
        "Unlimited uploads",
        "Access to templates",
        "Creative Upscale (enhance detail up to 4K)",
        "Private images and styles",
        "Priority processing",
        "24/7 dedicated support",
      ],
      cta: "Go Pro",
      popular: false,
      yearlyPrice: 290,
      yearlyPricePerMonth: calculateMonthlyFromYearly(290),
      yearlyCredits: "14,400 credits",
      savings: "Save ~17%"
    }
  ]

  const handlePlanSelection = (planName: string) => {
    // Redirect to auth page with plan selection
    window.location.href = `https://workspace.iley.app/auth?redirect=/home?plan=${planName.toLowerCase()}`
  }

  const proceedToPayment = (planName: string) => {
    setLoadingPlan(planName)

    // Get the appropriate payment link based on plan and billing period
    const paymentLinks = {
      'Basic': {
        monthly: process.env.NEXT_PUBLIC_STRIPE_BASIC_MONTHLY_PAYMENT_LINK,
        yearly: process.env.NEXT_PUBLIC_STRIPE_BASIC_YEARLY_PAYMENT_LINK
      },
      'Creator': {
        monthly: process.env.NEXT_PUBLIC_STRIPE_CREATOR_MONTHLY_PAYMENT_LINK,
        yearly: process.env.NEXT_PUBLIC_STRIPE_CREATOR_YEARLY_PAYMENT_LINK
      },
      'Pro': {
        monthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PAYMENT_LINK,
        yearly: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PAYMENT_LINK
      }
    }

    const billingPeriod = isYearly ? 'yearly' : 'monthly'
    const paymentUrl = paymentLinks[planName as keyof typeof paymentLinks]?.[billingPeriod]

    if (!paymentUrl || paymentUrl.includes('your_')) {
      // Fallback if payment links aren't configured yet
      alert(`${planName} ${billingPeriod} plan coming soon! Contact support for early access.`)
      setLoadingPlan(null)
      return
    }

    // Small delay to show loading state, then redirect
    setTimeout(() => {
      // Redirect to Stripe payment link with pre-filled customer email and success URL
      const baseUrl = window.location.origin
      const successUrl = `${baseUrl}/home?payment=success&plan=${planName}&billing=${billingPeriod}`
      const cancelUrl = `${baseUrl}?payment=cancelled`
      
      const urlWithParams = `${paymentUrl}?prefilled_email=${encodeURIComponent(user?.email || '')}&success_url=${encodeURIComponent(successUrl)}&cancel_url=${encodeURIComponent(cancelUrl)}`
      
      // Navigate to payment link in same tab
      window.location.href = urlWithParams
      setLoadingPlan(null)
    }, 500)
  }

  const handleLogin = () => {
    setShowAuthModal(false)
    
    // After login, proceed with the pending plan selection
    if (pendingPlan) {
      proceedToPayment(pendingPlan)
      setPendingPlan(null)
    }
  }

  return (
    <section id="pricing" className="py-24 bg-zinc-950 text-white" aria-label="Pricing plans for AI design creation">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-[#a3e635] uppercase tracking-widest mb-4 font-medium">Simple Pricing</p>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your <span className="relative inline-block">
              <span className="relative z-10">Creative Plan</span>
             
            </span>
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Simple pricing that scales with your creativity. No hidden fees, no surprises.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="bg-zinc-800 rounded-full p-1 flex items-center">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
                  isYearly
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-1 bg-[#a3e635] text-black text-xs px-1.5 py-0.5 rounded-full">
                  -17%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-zinc-900 text-white shadow-2xl md:scale-105 border border-[#a3e635]/20' 
                : 'bg-zinc-900 border border-zinc-800 shadow-sm hover:shadow-xl transition-all hover:border-zinc-700'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#a3e635] text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    Most Popular
                  </div>
                </div>
              )}

              {/* October Discount Badge for Creator Plan */}
              {plan.name === 'Creator' && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg transform rotate-12">
                    🎃 BLACKFRIDAY30
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h4 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h4>
                <div className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name === 'Creator' ? (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-2">
                        <span className="line-through text-xl text-gray-400">
                          ${isYearly ? plan.yearlyPricePerMonth : '12'}
                        </span>
                        <span className="text-green-400 font-bold">
                          ${isYearly ? '8.40' : '10'}
                        </span>
                      </div>
                      <span className={`text-base font-normal ${plan.popular ? 'text-zinc-300' : 'text-zinc-400'}`}>
                        /month{isYearly ? ' (billed yearly)' : ''}
                      </span>
                    </div>
                  ) : (
                    <>
                      ${isYearly ? plan.yearlyPricePerMonth : plan.price.replace('$', '')}
                      <span className={`text-base font-normal ${plan.popular ? 'text-zinc-300' : 'text-zinc-400'}`}>
                        /month{isYearly ? ' (billed yearly)' : ''}
                      </span>
                    </>
                  )}
                </div>
                <div className={`text-sm font-medium mb-2 ${plan.popular ? 'text-[#a3e635]' : 'text-[#a3e635]'}`}>
                  {isYearly ? plan.yearlyCredits : plan.credits}
                </div>
                <p className={`text-sm ${plan.popular ? 'text-zinc-300' : 'text-zinc-400'}`}>
                  {plan.description}
                </p>
                {isYearly && (
                  <div className={`text-xs mt-2 ${plan.popular ? 'text-green-300' : 'text-green-600'} font-medium`}>
                    {plan.name === 'Creator' ? 'Save 30% + Annual Discount!' : plan.savings}
                  </div>
                )}
                
                {/* October Discount Info for Creator Plan */}
                {plan.name === 'Creator' && !isYearly && (
                  <div className="text-xs mt-2 text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded-full">
                    🎃 30% OFF with BLACKFRIDAY30
                  </div>
                )}
                
                {/* Limited Availability for Creator Plan */}
                {plan.name === 'Creator' && (
                  <div className="text-xs mt-1 text-orange-500 font-medium flex items-center justify-center gap-1">
                    <span className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></span>
                    Only 50 spots left
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-[#a3e635]' : 'text-[#a3e635]'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-zinc-300' : 'text-zinc-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                onClick={() => handlePlanSelection(plan.name)}
                disabled={loadingPlan === plan.name}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-[#a3e635] text-black hover:bg-[#a3e635]/90 disabled:bg-[#a3e635]/50'
                    : 'bg-white text-black hover:bg-zinc-100 disabled:bg-zinc-300'
                }`}
                aria-label={`Subscribe to ${plan.name} plan for ${isYearly ? plan.yearlyPrice + " per year" : plan.price + " per " + plan.period}`}
              >
                {loadingPlan === plan.name ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                    Redirecting...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    {plan.cta === "Start Creating" && <GoogleIcon className="w-4 h-4" />}
                    {plan.cta}
                  </div>
                )}
              </button>
            </div>
          ))}
                    </div>

      </div>     

      
     
    </section>
  )
}