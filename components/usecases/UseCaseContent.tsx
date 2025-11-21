'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Copy, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import CTASection from '@/components/cta-section'
import { UseCase } from '@/types/usecase'
import { useCaseCategories, getRelatedUseCases } from '@/app/data/usecases'

interface UseCaseContentProps {
  useCase: UseCase
}

export default function UseCaseContent({ useCase }: UseCaseContentProps) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  
  const category = useCaseCategories.find(cat => cat.id === useCase.category)
  const relatedUseCases = getRelatedUseCases(useCase.id)

  const copyPrompt = async (prompt: string, exampleId: string) => {
    await navigator.clipboard.writeText(prompt)
    setCopiedPrompt(exampleId)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/usecases" className="hover:text-gray-900 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Use Cases
            </Link>
            <span>/</span>
            <span className="text-gray-900">{useCase.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{category?.icon}</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category?.color} text-white`}>
              {category?.name}
            </span>
            {useCase.featured && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
            {useCase.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {useCase.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-gray-700">{useCase.author.name}</span>
              <span>•</span>
              <span>{useCase.author.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(useCase.publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{useCase.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="aspect-[21/9] relative overflow-hidden">
        <Image
          src={useCase.hero.image}
          alt={useCase.hero.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {useCase.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {useCase.content.sections.map((section, index) => (
              <ContentSection key={section.id} section={section} index={index} />
            ))}
          </div>

          {/* Examples */}
          {useCase.examples.length > 0 && (
            <section className="mt-16 pt-16 border-t border-gray-200">
              <h2 className="text-3xl font-light text-gray-900 mb-8">Practical Examples</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {useCase.examples.map((example) => (
                  <ExampleCard 
                    key={example.id} 
                    example={example} 
                    onCopyPrompt={(prompt) => copyPrompt(prompt, example.id)}
                    copied={copiedPrompt === example.id}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Conclusion */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Key Takeaways</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {useCase.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          {useCase.tags && useCase.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Use Cases */}
      {relatedUseCases.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Related Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedUseCases.map((relatedUseCase) => (
                <RelatedUseCaseCard key={relatedUseCase.id} useCase={relatedUseCase} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection 
        onGetStarted={() => setShowAuthModal(true)} 
        showWatchDemo={false}
      />
      
      <SiteFooter />
    </div>
  )
}

function ContentSection({ section, index }: { section: any; index: number }) {
  return (
    <section className="scroll-mt-24" id={section.id}>
      <h2 className="text-3xl font-light text-gray-900 mb-6">{section.title}</h2>
      
      {section.type === 'text' && (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>
          {section.image && (
            <figure className="my-8">
              <div className="aspect-[16/10] relative overflow-hidden rounded-xl">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {section.image.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      )}
      
      {section.type === 'steps' && (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>
          <ol className="space-y-4">
            {section.steps.map((step: string, stepIndex: number) => (
              <li key={stepIndex} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {stepIndex + 1}
                </span>
                <span className="text-gray-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      
      {section.type === 'tips' && (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <ul className="space-y-3">
              {section.tips.map((tip: string, tipIndex: number) => (
                <li key={tipIndex} className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {section.type === 'comparison' && (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 mb-3">{section.comparison.before.title}</h4>
              <p className="text-red-700 mb-4">{section.comparison.before.description}</p>
              {section.comparison.before.image && (
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={section.comparison.before.image}
                    alt="Before comparison"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 mb-3">{section.comparison.after.title}</h4>
              <p className="text-green-700 mb-4">{section.comparison.after.description}</p>
              {section.comparison.after.image && (
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={section.comparison.after.image}
                    alt="After comparison"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ExampleCard({ example, onCopyPrompt, copied }: { 
  example: any; 
  onCopyPrompt: (prompt: string) => void;
  copied: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="grid grid-cols-2 gap-0">
        <div className="aspect-square relative">
          <Image
            src={example.beforeImage}
            alt="Before"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
            Before
          </div>
        </div>
        <div className="aspect-square relative">
          <Image
            src={example.afterImage}
            alt="After"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
            After
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{example.description}</p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Prompt:</span>
            <button
              onClick={() => onCopyPrompt(example.prompt)}
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-800 font-mono leading-relaxed">
            "{example.prompt}"
          </p>
        </div>
        
        {example.settings && (
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">Model: {example.settings.model}</span>
            {example.settings.strength && (
              <span className="bg-gray-100 px-2 py-1 rounded">Strength: {example.settings.strength}</span>
            )}
            {example.settings.steps && (
              <span className="bg-gray-100 px-2 py-1 rounded">Steps: {example.settings.steps}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function RelatedUseCaseCard({ useCase }: { useCase: UseCase }) {
  const category = useCaseCategories.find(cat => cat.id === useCase.category)
  
  return (
    <Link 
      href={`/usecases/${useCase.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={useCase.hero.image}
          alt={useCase.hero.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm">{category?.icon}</span>
          <span className="text-xs font-medium text-gray-600">{category?.name}</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {useCase.title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {useCase.description}
        </p>
        
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <span>{useCase.readTime}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}