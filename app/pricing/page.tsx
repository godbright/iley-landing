'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import FAQSchema from "@/components/FAQSchema"
import { pricingFAQ } from "@/lib/faqData"
import { useState } from "react"

export default function PricingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <FAQSchema faqItems={pricingFAQ} />
      <SiteHeader />
      
      {/* Hero Section for Pricing */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose the perfect plan for your creative needs. Start free, upgrade when you're ready.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection 
        onGetStarted={() => setShowAuthModal(true)} 
        showWatchDemo={false} 
      />

      <SiteFooter />
    </div>
  )
}