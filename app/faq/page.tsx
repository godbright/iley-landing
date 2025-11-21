'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import { useState } from "react"

export default function FAQPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <SiteHeader />
      
      {/* Hero Section for FAQ */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about iley. Can't find the answer you're looking for? 
            <a href="#" className="text-[#a3e635] hover:underline ml-1">Get in touch</a>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection 
        onGetStarted={() => setShowAuthModal(true)} 
        showWatchDemo={true} 
      />

      <SiteFooter />
    </div>
  )
}