import Link from 'next/link'
import { ArrowLeft, Search, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getAllUseCases } from '@/app/data/usecases-landing'

export default function UseCaseNotFound() {
  const featuredUseCases = getAllUseCases().slice(0, 3)

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <SiteHeader />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          {/* 404 Content */}
          <div className="mb-12">
            <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-zinc-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Use Case Not Found
            </h1>
            
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              The use case you're looking for doesn't exist or has been moved. 
              Explore our available AI-powered solutions below.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/usecases"
                className="inline-flex items-center gap-2 bg-[#a3e635] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#8cd32a] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Use Cases
              </Link>
              
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Try AI Image Editor
              </Link>
            </div>
          </div>

          {/* Featured Use Cases */}
          <div className="border-t border-zinc-800 pt-12">
            <h2 className="text-2xl font-semibold text-white mb-8">Popular Use Cases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredUseCases.map((useCase) => (
                <Link
                  key={useCase.id}
                  href={`/usecases/${useCase.slug}`}
                  className="group text-left p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <div className="w-10 h-10 bg-[#a3e635] rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>
                  
                  <h3 className="font-semibold text-white mb-2 group-hover:text-[#a3e635] transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
                    {useCase.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span>Learn more</span>
                    <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}