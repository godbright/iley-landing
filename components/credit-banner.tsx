'use client'

import React, { useState } from 'react'
import { X, Sparkles, Zap } from 'lucide-react'
// import { useCredits } from '@/contexts/CreditContext'
// import { useAuth } from '@/contexts/AuthContext'
// import { DatabaseService } from '@/lib/database'
import GoogleIcon from '@/components/ui/google-icon'

interface CreditBannerProps {
  variant?: 'landing' | 'dashboard'
  onUpgrade?: () => void
}

export default function CreditBanner({ variant = 'landing', onUpgrade }: CreditBannerProps) {
  // Initialize visibility based on localStorage to prevent flicker
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('credit-banner-dismissed')
      return dismissed !== 'true'
    }
    return true
  })
  
  // Track if user has scrolled past hero section
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)
  
  // Mock data for demo purposes - replace with actual auth/credits context when available
  const user = null // Simulated user state
  const credits = 5 // Simulated credits
  const loading = false // Simulated loading state
  const [hasPurchasedPlan, setHasPurchasedPlan] = useState(false)
  const [apiQuotaUsed, setApiQuotaUsed] = useState(0)

  // Commented out database calls - uncomment when contexts are available
  // React.useEffect(() => {
  //   if (user) {
  //     DatabaseService.hasUserPurchasedPlan(user.id).then(setHasPurchasedPlan)
  //     DatabaseService.getProfile(user.id).then(profile => {
  //       if (profile) {
  //         setApiQuotaUsed(profile.api_quota_used || 0)
  //       }
  //     })
  //   }
  // }, [user])

  // Scroll detection for landing page variant only
  React.useEffect(() => {
    if (variant !== 'landing') return

    const handleScroll = () => {
      // Hero section is typically around 100vh, but let's use a more conservative 80vh
      const heroHeight = window.innerHeight * 0.8
      const scrollPosition = window.scrollY
      
      const shouldShow = scrollPosition > heroHeight
      setHasScrolledPastHero(shouldShow)
    }

    // Check initial scroll position
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [variant])

  const handleClose = () => {
    setIsVisible(false)
    // Store in localStorage to remember dismissal
    localStorage.setItem('credit-banner-dismissed', 'true')
  }

  // Calculate remaining credits based on api_quota_used
  const remainingCredits = Math.max(0, 5 - apiQuotaUsed)

  // Determine if banner should be shown after all hooks are called
  const shouldShowBanner = React.useMemo(() => {
    if (variant === 'landing') {
      // Show banner only if: not dismissed AND not purchased plan AND scrolled past hero
      return isVisible && !(user && hasPurchasedPlan) && hasScrolledPastHero
    } else {
      // For dashboard variant, only show to logged-in users with free accounts and remaining credits > 0
      return user && !hasPurchasedPlan && isVisible && !loading && apiQuotaUsed < 5
    }
  }, [variant, user, hasPurchasedPlan, isVisible, loading, hasScrolledPastHero, apiQuotaUsed])

  // Return null only after all hooks have been called
  if (!shouldShowBanner) {
    return null
  }

  if (variant === 'landing') {
    return (
      <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-48px)] pointer-events-auto transform transition-all duration-500 ease-in-out animate-in slide-in-from-bottom-4 fade-in">
        <div className="relative bg-zinc-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-zinc-700">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-4">
            {/* FREE badge with brand styling */}
            <div className="inline-block bg-[#a3e635] text-black text-xs font-bold px-2 py-1 rounded-full mb-2">
              FREE
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">
              {user ? `${credits} Credits Left` : 'Get 5 Free Credits!'}
            </h3>
            <p className="text-zinc-300 text-sm mb-3 font-light">
              {user 
                ? `You have ${credits} AI generations remaining`
                : 'Sign up now and get 5 free AI image generations — no payment required!'
              }
            </p>
            
            {/* Progress bar with brand styling */}
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>Free Credits</span>
              <span className="font-semibold">{user ? `${credits} of 5 left` : '5 credits waiting'}</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-[#a3e635] to-[#8cd32a] h-2 rounded-full transition-all duration-300"
                style={{ width: user ? `${(credits / 5) * 100}%` : '100%' }}
              />
            </div>
            
            {/* CTA Button with brand styling */}
            <button
              onClick={onUpgrade}
              className="w-full bg-[#a3e635] hover:bg-[#8cd32a] text-black px-3 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <GoogleIcon className="w-4 h-4" />
              {user ? 'Start Creating Now' : 'Start Creating Free'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Dashboard variant - compact counter
  return (
     <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-48px)] pointer-events-auto transform transition-all duration-500 ease-in-out animate-in slide-in-from-bottom-4 fade-in">
        <div className="relative bg-zinc-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-zinc-700">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-4">
            {/* FREE badge with brand styling */}
            <div className="inline-block bg-[#a3e635] text-black text-xs font-bold px-2 py-1 rounded-full mb-2">
              FREE
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">
              {user ? `${remainingCredits} Credits Left` : 'Get 5 Free Credits!'}
            </h3>
            <p className="text-zinc-300 text-sm mb-3 font-light">
              {user 
                ? `You have ${remainingCredits} AI generations remaining`
                : 'Sign up now and get 5 free AI image generations — no payment required!'
              }
            </p>
            
            {/* Progress bar with brand styling */}
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
              <span>Free Credits</span>
              <span className="font-semibold">{user ? `${remainingCredits} of 5 left` : '5 credits waiting'}</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-[#a3e635] to-[#8cd32a] h-2 rounded-full transition-all duration-300"
                style={{ width: user ? `${(remainingCredits / 5) * 100}%` : '100%' }}
              />
            </div>
            
            {/* CTA Button for dashboard variant */}
            <button
              onClick={onUpgrade}
              className="w-full bg-[#a3e635] hover:bg-[#8cd32a] text-black px-3 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
  )
}