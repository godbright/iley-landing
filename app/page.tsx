'use client'
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { DemoVideo } from "@/components/demo-video" // Import demo video component
import { FeatureGrid } from "@/components/feature-grid"
import { InterfaceDemo } from "@/components/interface-demo"
import { WorkflowSection } from "@/components/workflow-section"
import { CommunityGallery } from "@/components/community-gallery"
import { SiteFooter } from "@/components/site-footer"
import PricingSection from "@/components/pricing-section"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import { SmoothScrollSection, FadeInSection, SlideUpSection } from "@/components/smooth-scroll"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import HowToSchema from "@/components/HowToSchema"
import { imageGenerationHowTo } from "@/lib/howToSchemas"
import { useState, useEffect } from "react"


export default function Home() {
  
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <SmoothScrollProvider>
      <HowToSchema {...imageGenerationHowTo} />
      <SiteHeader />
      <main className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
        
        {/* Hero section - no animation as it's the first thing users see */}
        <HeroSection />
        
        {/* Demo video - no animation to prevent flickering with Lenis */}
        <DemoVideo />
        
        {/* Feature grid with slide up */}
        <SmoothScrollSection delay={0.1}>
          <FeatureGrid />
        </SmoothScrollSection>
        
        {/* Workflow section with slide up */}
        <SmoothScrollSection delay={0.2}>
          <WorkflowSection />
        </SmoothScrollSection>
        
        {/* Interface demo with fade in */}
        <FadeInSection delay={0.1}>
          <InterfaceDemo />
        </FadeInSection>
        
        {/* Pricing section with slide up */}
        <SlideUpSection delay={0.1}>
          <PricingSection />
        </SlideUpSection>
        
        {/* Community gallery with slide up */}
        <SmoothScrollSection delay={0.2}>
          <CommunityGallery />
        </SmoothScrollSection>
        
        {/* FAQ with fade in */}
        <FadeInSection delay={0.1}>
          <FAQ />
        </FadeInSection>
        
        {/* CTA section with slide up */}
        <SlideUpSection delay={0.1}>
          <CTASection onGetStarted={() => setShowAuthModal(true)} showWatchDemo={false} />
        </SlideUpSection>
        
        {/* Footer with fade in */}
        <FadeInSection>
          <SiteFooter />
        </FadeInSection>
      </main>
    </SmoothScrollProvider>
  )
}
