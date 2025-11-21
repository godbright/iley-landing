'use client'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import CTASection from "@/components/cta-section"

export default function BlogPage() {
  const handleGetStarted = () => {
    // Handle getting started action
  }

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover the latest tips, tutorials, and insights about AI-powered image editing. 
            Learn from experts and explore creative possibilities.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Our blog is currently being developed. Soon you'll find helpful tutorials, 
              AI design tips, and creative inspiration here.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        onGetStarted={handleGetStarted} 
        showWatchDemo={true} 
      />

      <SiteFooter />
    </div>
  )
}

