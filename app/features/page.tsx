'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeatureGrid } from "@/components/feature-grid"
import CTASection from "@/components/cta-section"
import HowToSchema from "@/components/HowToSchema"
import { imageGenerationHowTo, backgroundRemovalHowTo, imageUpscalingHowTo } from "@/lib/howToSchemas"
import { useState } from "react"

export default function FeaturesPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <HowToSchema {...imageGenerationHowTo} />
      <HowToSchema {...backgroundRemovalHowTo} />
      <HowToSchema {...imageUpscalingHowTo} />
      <SiteHeader />
      
      {/* Hero Section for Features */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Powerful AI Features
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Explore the comprehensive suite of AI-powered design tools that make professional 
            creativity accessible to everyone.
          </p>
        </div>
      </section>

      {/* Feature Grid Section */}
      <FeatureGrid />

      {/* CTA Section */}
      <CTASection 
        onGetStarted={() => setShowAuthModal(true)} 
        showWatchDemo={true} 
      />

      <SiteFooter />
    </div>
  )
}