'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import CTASection from "@/components/cta-section"
import { getAllUseCases } from "@/app/data/usecases-landing"

const ITEMS_PER_PAGE = 9

export default function UseCasesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const allUseCases = getAllUseCases()
  
  const totalPages = Math.ceil(allUseCases.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentUseCases = allUseCases.slice(startIndex, endIndex)

  const handleGetStarted = () => {
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            AI Use Cases
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover powerful AI tools for every image editing need. From background removal to artistic transformations, 
            find the perfect solution for your creative projects.
          </p>
          <div className="text-sm text-zinc-500 mt-8">
            Showing {startIndex + 1}-{Math.min(endIndex, allUseCases.length)} of {allUseCases.length} use cases
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentUseCases.map((useCase) => (
              <Link
                key={useCase.id}
                href={`/usecases/${useCase.slug}`}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-500">
                      Use Case
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-[#a3e635] transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#a3e635] transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-zinc-400 mb-4 line-clamp-2 text-sm">
                  {useCase.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {useCase.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300"
                    >
                      {feature}
                    </span>
                  ))}
                  {useCase.features.length > 2 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-700 text-zinc-400">
                      +{useCase.features.length - 2} more
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-[#a3e635] text-black'
                        : 'text-zinc-300 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
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