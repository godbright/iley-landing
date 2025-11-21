'use client'

import { useState } from 'react'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import CTASection from '@/components/cta-section'
import FAQ from '@/components/faq'
import { UseCaseLanding } from '@/app/data/usecases-landing'

interface UseCaseLandingProps {
  useCase: UseCaseLanding
}

// Generate use case specific FAQs
const generateUseCaseFAQs = (useCase: UseCaseLanding) => {
  const commonFAQs = [
    {
      question: `How does AI ${useCase.title.toLowerCase()} work?`,
      answer: `Our AI ${useCase.title.toLowerCase()} uses advanced machine learning algorithms to analyze your input and generate professional results. The AI understands context, style, and composition to deliver high-quality outputs that meet your specific needs.`
    },
    {
      question: `Is the ${useCase.title.toLowerCase()} free to use?`,
      answer: `Yes! You can start using our ${useCase.title.toLowerCase()} for free with our generous trial credits. For unlimited access and advanced features, check out our affordable subscription plans.`
    },
    {
      question: `What file formats are supported?`,
      answer: `We support all major image formats including JPG, PNG, WebP, and more. Output formats are optimized for web use, print, and social media sharing.`
    },
    {
      question: `How long does it take to process?`,
      answer: `Most ${useCase.title.toLowerCase()} operations complete in under 30 seconds. Complex transformations may take up to 2 minutes depending on image size and complexity.`
    },
    {
      question: `Can I use the results commercially?`,
      answer: `Yes! All results generated with our ${useCase.title.toLowerCase()} tool can be used for commercial purposes. You retain full rights to your processed images.`
    }
  ]
  return commonFAQs
}

// Generate how-to steps for each use case
const generateHowToSteps = (useCase: UseCaseLanding) => {
  const baseSteps = [
    {
      step: 1,
      title: "Upload Your Image",
      description: `Upload your photo or image to our ${useCase.title.toLowerCase()} tool. We support all major formats and sizes up to 50MB.`
    },
    {
      step: 2,
      title: "Describe Your Vision",
      description: `Enter a detailed prompt describing exactly what you want to achieve. Be specific about style, mood, and desired outcome.`
    },
    {
      step: 3,
      title: "AI Processing",
      description: `Our advanced AI analyzes your image and prompt, then applies intelligent transformations to create your desired result.`
    },
    {
      step: 4,
      title: "Download & Share",
      description: `Review your result and download in high quality. Share directly to social media or save for later use.`
    }
  ]
  return baseSteps
}

// Generate industry applications
const generateIndustryApplications = (useCase: UseCaseLanding) => {
  const applications = {
    'background-remover': [
      { industry: "E-commerce", description: "Clean product photos for online stores" },
      { industry: "Marketing", description: "Professional headshots and portraits" },
      { industry: "Real Estate", description: "Property photos with clean backgrounds" },
      { industry: "Fashion", description: "Model photography and catalog images" }
    ],
    'photo-enhancer': [
      { industry: "Photography", description: "Professional photo retouching and enhancement" },
      { industry: "Social Media", description: "Instagram-ready photos and content" },
      { industry: "Family Archives", description: "Restore old family photos and memories" },
      { industry: "Business", description: "Professional headshots and corporate imagery" }
    ],
    'portrait-generator': [
      { industry: "LinkedIn", description: "Professional profile pictures" },
      { industry: "Gaming", description: "Avatar creation and character design" },
      { industry: "Art", description: "Creative portraits and artistic expressions" },
      { industry: "Entertainment", description: "Character concepts and creative projects" }
    ],
    'watermark-remover': [
      { industry: "Content Creation", description: "Remove watermarks from stock images and media" },
      { industry: "Journalism", description: "Clean up images for professional publication" },
      { industry: "Social Media", description: "Remove logos and overlays from viral content" },
      { industry: "Education", description: "Clean academic and research images" }
    ]
  }
  
  return applications[useCase.id as keyof typeof applications] || applications['background-remover']
}

export default function UseCaseLandingComponent({ useCase }: UseCaseLandingProps) {
  const [promptText, setPromptText] = useState(useCase.prompt)
  const [activeTab, setActiveTab] = useState<'how-to' | 'faq' | 'industry'>('how-to')

  const useCaseFAQs = generateUseCaseFAQs(useCase)
  const howToSteps = generateHowToSteps(useCase)
  const industryApplications = generateIndustryApplications(useCase)

  const handleGetStarted = () => {
    // Handle getting started action
  }

  const handleTransform = () => {
    // Handle transform action
  }

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#a3e635]" />
              <span className="text-zinc-300 text-sm font-medium">AI-Powered {useCase.title}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {useCase.heroTitle.split(' ').map((word, index, array) => {
                const isLastWord = index === array.length - 1
                const keyWords = ['Instantly', 'Perfect', 'Professional', 'Stunning', 'Amazing', 'Beautiful', 'Transform', 'Create', 'Generate']
                const shouldHighlight = isLastWord || keyWords.includes(word)
                
                if (shouldHighlight) {
                  return (
                    <span key={index} className="text-[#a3e635]">{word} </span>
                  )
                }
                return <span key={index}>{word} </span>
              })}
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              {useCase.heroSubtitle}
            </p>
            
            {/* Enhanced Input with Prompt */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl focus-within:border-[#a3e635] transition-all relative">
                <div className="relative">
                  <textarea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder={`Try: "${useCase.prompt}"`}
                    className="w-full p-6 text-lg placeholder-zinc-500 resize-none focus:outline-none bg-transparent leading-relaxed text-white"
                    style={{ 
                      height: '110px',
                      minHeight: '90px'
                    }}
                    aria-label={`Describe your ${useCase.title.toLowerCase()} transformation`}
                  />
                  
                  {/* Transform button */}
                  <div className="absolute bottom-4 right-4">
                    <button 
                      onClick={handleTransform}
                      disabled={!promptText.trim()}
                      className="w-12 h-12 bg-[#a3e635] text-black rounded-full hover:bg-[#8cd32a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      aria-label={`Start ${useCase.title.toLowerCase()} transformation`}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-[#a3e635] text-black rounded-lg font-medium hover:bg-[#8cd32a] transition-colors text-base"
              >
                Start Creating - Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Combined Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our{' '}
              <span className="text-[#a3e635]">{useCase.title}?</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              {useCase.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {useCase.benefits.map((benefit, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 font-light">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="border-t border-zinc-800 pt-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Key{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#a3e635]">Features</span>
                </span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">Everything you need to create professional results</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCase.features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 h-full hover:border-zinc-700 transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-700 transition-colors">
                        <Check className="w-4 h-4 text-[#a3e635]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-sm leading-relaxed">{feature}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Perfect{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium text-[#a3e635]">For</span>
              </span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Discover how {useCase.title.toLowerCase()} can transform your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCase.examples.map((example, index) => (
              <div key={index} className="group">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full hover:border-zinc-700 transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">{example.title}</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{example.description}</p>
                  </div>
                  
                  {/* Subtle bottom accent */}
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <div className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#a3e635] rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

        {/* Comprehensive Information Section - Dark theme */}
        <section className="py-16 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Everything You Need to{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium text-[#a3e635]">Know</span>
                </span>
              </h2>
              <p className="text-lg text-zinc-400 font-light max-w-3xl mx-auto">
                Comprehensive guides, frequently asked questions, and industry applications for {useCase.title.toLowerCase()}
              </p>
            </div>

            {/* Tab Navigation - Dark theme */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveTab('how-to')}
                className={`px-6 py-3 rounded-lg font-light transition-all duration-200 ${
                  activeTab === 'how-to'
                    ? 'bg-[#a3e635] text-black'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                How-To Guide
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-6 py-3 rounded-lg font-light transition-all duration-200 ${
                  activeTab === 'faq'
                    ? 'bg-[#a3e635] text-black'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveTab('industry')}
                className={`px-6 py-3 rounded-lg font-light transition-all duration-200 ${
                  activeTab === 'industry'
                    ? 'bg-[#a3e635] text-black'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                Applications
              </button>
            </div>

            {/* Tab Content - Dark theme styling */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8">
              {activeTab === 'how-to' && (
                <div>
                  <h3 className="text-2xl font-light text-white mb-6">
                    Step-by-Step Guide: How to Use {useCase.title}
                  </h3>
                  <p className="text-zinc-400 mb-8 text-lg font-light">
                    Follow this comprehensive guide to master {useCase.title.toLowerCase()} and achieve professional results every time.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {howToSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="shrink-0">
                          <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
                            <span className="text-[#a3e635] font-bold text-lg">{step.step}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-black bg-[#a3e635] px-3 py-1 rounded-lg">
                              STEP {step.step}
                            </span>
                          </div>
                          <h4 className="text-lg font-medium text-white mb-2">{step.title}</h4>
                          <p className="text-zinc-400 leading-relaxed font-light">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pro Tips - Dark styling */}
                  <div className="mt-12 bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                    <h4 className="text-lg font-medium text-white mb-3">
                      Pro Tips for Best Results
                    </h4>
                    <ul className="space-y-2 text-zinc-300">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] mt-1 shrink-0" />
                        <span className="font-light">Use high-resolution images (at least 1024x1024) for best quality results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] mt-1 shrink-0" />
                        <span className="font-light">Be specific in your prompts - describe exactly what you want to achieve</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] mt-1 shrink-0" />
                        <span className="font-light">Experiment with different prompt styles to find your preferred aesthetic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] mt-1 shrink-0" />
                        <span className="font-light">Save successful prompts for future use and consistency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div>
                  <h3 className="text-2xl font-light text-white mb-6">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-zinc-400 mb-8 text-lg font-light">
                    Get answers to the most common questions about {useCase.title.toLowerCase()}.
                  </p>
                  
                  <div className="space-y-6">
                    {useCaseFAQs.map((faq, index) => (
                      <div key={index} className="border border-zinc-700 rounded-xl p-6 hover:border-zinc-600 transition-colors">
                        <h4 className="text-lg font-medium text-white mb-3 flex items-start gap-2">
                          <span className="text-[#a3e635] text-xl font-light">Q:</span>
                          {faq.question}
                        </h4>
                        <div className="text-zinc-400 leading-relaxed pl-6 font-light">
                          <span className="text-[#a3e635] font-medium">A:</span> {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Support - Dark styling */}
                  <div className="mt-12 bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                    <h4 className="text-lg font-medium text-white mb-3">
                      Need More Help?
                    </h4>
                    <p className="text-zinc-300 mb-4 font-light">
                      Can&apos;t find the answer you&apos;re looking for? Our support team is here to help!
                    </p>
                    <button 
                      onClick={handleGetStarted}
                      className="bg-[#a3e635] text-black px-6 py-3 rounded-lg hover:bg-[#8cd32a] transition-colors font-light"
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'industry' && (
                <div>
                  <h3 className="text-2xl font-light text-white mb-6">
                    Industry Applications & Use Cases
                  </h3>
                  <p className="text-zinc-400 mb-8 text-lg font-light">
                    Discover how professionals across different industries use {useCase.title.toLowerCase()} to enhance their work.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {industryApplications.map((app, index) => (
                      <div key={index} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                        <div className="flex items-center gap-3 mb-4">
                          <h4 className="text-xl font-medium text-white">{app.industry}</h4>
                        </div>
                        <p className="text-zinc-400 leading-relaxed font-light">{app.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Business Benefits - Dark styling */}
                  <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
                    <h4 className="text-xl font-medium text-white mb-6">
                      Business Benefits & ROI
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <h5 className="font-medium text-white mb-2">Save Time</h5>
                        <p className="text-zinc-400 text-sm font-light">Reduce editing time from hours to minutes</p>
                      </div>
                      <div className="text-center">
                        <h5 className="font-medium text-white mb-2">Professional Quality</h5>
                        <p className="text-zinc-400 text-sm font-light">Studio-level results without the cost</p>
                      </div>
                      <div className="text-center">
                        <h5 className="font-medium text-white mb-2">Scale Efficiently</h5>
                        <p className="text-zinc-400 text-sm font-light">Process hundreds of images consistently</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technical Specifications Section - Dark design */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Technical{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium text-[#a3e635]">Specifications</span>
                </span>
              </h2>
              <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
                Detailed technical information about our {useCase.title.toLowerCase()} capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-medium text-white">Input Requirements</h3>
                </div>
                <ul className="space-y-2 text-zinc-400 font-light">
                  <li>• <strong>Formats:</strong> JPG, PNG, WebP, HEIC</li>
                  <li>• <strong>Max Size:</strong> 50MB per image</li>
                  <li>• <strong>Resolution:</strong> Up to 8K (7680×4320)</li>
                  <li>• <strong>Aspect Ratio:</strong> Any ratio supported</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-medium text-white">Performance</h3>
                </div>
                <ul className="space-y-2 text-zinc-400 font-light">
                  <li>• <strong>Processing Time:</strong> 15-60 seconds</li>
                  <li>• <strong>Batch Processing:</strong> Up to 100 images</li>
                  <li>• <strong>Uptime:</strong> 99.9% availability</li>
                  <li>• <strong>Quality:</strong> Lossless processing</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-medium text-white">Output Options</h3>
                </div>
                <ul className="space-y-2 text-zinc-400 font-light">
                  <li>• <strong>Formats:</strong> JPG, PNG, WebP</li>
                  <li>• <strong>Quality:</strong> 90-100% quality settings</li>
                  <li>• <strong>Resolution:</strong> Original or enhanced</li>
                  <li>• <strong>Download:</strong> Instant download links</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section - Dark theme like Halloween page */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {useCase.seo.title.split('|')[0].trim()}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {useCase.seo.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-400">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  {useCase.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-400">Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  {useCase.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-lg">{benefit.icon}</span>
                      <div>
                        <div className="font-medium">{benefit.title}</div>
                        <div className="text-sm text-gray-400 font-light">{benefit.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-400">Use Cases</h3>
                <ul className="space-y-2 text-gray-300">
                  {useCase.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{example.title}</div>
                        <div className="text-sm text-gray-400 font-light">{example.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-light">
                Join thousands of professionals who use our {useCase.title.toLowerCase()} to create stunning results.
                Start your free trial today and experience the power of AI-driven image processing.
              </p>
              <button 
                onClick={handleGetStarted}
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <FAQ />
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