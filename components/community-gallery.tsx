'use client'

import Image from "next/image"
import { ArrowLeft, ArrowRight, ExternalLink, User } from "lucide-react"
import { useState, useEffect } from "react"

// Import testimonial data from data-for-tweets.tsx
const twitterTestimonials = [
  {
    id: 'thenetrogator_1974726740711755941',
    text: "Totally get this. I built My Morning Brief for that same reason - so I can start the day clear and with purpose. Your product looks smooth 🚀",
    author: {
      name: "Rafal Manka",
      username: "thenetrogator",
      profile_image_url: "https://pbs.twimg.com/profile_images/1952934085447278592/wNUreql3_400x400.jpg"
    },
    created_at: "2025-10-05T08:41:00Z"
  },
  {
    id: 'the_real_buildwithmadhav',
    text: "preety good product btw!",
    author: {
      name: "BuildWithMadhav",
      username: "i_Madhavendr",
      profile_image_url: "https://pbs.twimg.com/profile_images/1906092661142110210/NQMWIIdK_400x400.jpg"
    },
    created_at: "2025-10-15T08:41:00Z"
  },
  {
    id: 'AlielaiaT_1974819785612427319',
    text: "Incredible time-saver! I used iley to create a beautiful product image with just one prompt. The result was so good, I highly recommend trying it!",
    author: {
      name: "AlielaiaT",
      username: "AlielaiaT",
      profile_image_url: "https://pbs.twimg.com/profile_images/1959746274334285824/_X8JdK6h_400x400.jpg"
    },
    created_at: "2025-10-05T14:51:00Z"
  },
  {
    id: '@zannujulius',
    text: "Great tool. now I have a personal brand designer",
    author: {
      name: "Julius Zannu",
      username: "zannujulius",
      profile_image_url: "https://pbs.twimg.com/profile_images/1582816849372274688/0WQ8HWh4_400x400.jpg"
    },
    created_at: "2025-10-07T03:00:00Z"
  },
  {
    id: '@Minard_NG',
    text: "With a single prompt, my photos became crisp, natural, and pro-ready; saving me hours of studio time.",
    author: {
      name: "Minard",
      username: "Minard",
      profile_image_url: "https://pbs.twimg.com/profile_images/1170048471816163333/pHmX1Q27_400x400.jpg"
    },
    created_at: "2025-10-10T10:00:00Z"
  },
  {
    id: 'thenetrogator_1ochiengdev',
    text: "this is amazing bro keep it up",
    author: {
      name: "Ochieng Dev",
      username: "ochiengdev",
      profile_image_url: "https://pbs.twimg.com/profile_images/1974144965945995269/9_bhzTtF_400x400.jpg"
    },
    created_at: "2025-10-05T08:41:00Z"
  }
]

export function CommunityGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(4)

  // Show 4 testimonials on desktop, adjust on mobile
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(2)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(3)
      } else {
        setVisibleTestimonials(4)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, twitterTestimonials.length - visibleTestimonials) : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev >= twitterTestimonials.length - visibleTestimonials ? 0 : prev + 1
    )
  }

  const displayedTestimonials = twitterTestimonials.slice(currentIndex, currentIndex + visibleTestimonials)

  return (
    <>
      {/* Original design commented out */}
      {/*
      <section className="py-16 md:py-32 bg-[#f0f0f0] text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
            <div className="lg:w-1/3 flex flex-col justify-center lg:sticky lg:top-32 h-fit">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 md:mb-12">Made in iley</h2>
              <blockquote className="text-xl md:text-3xl font-serif leading-tight mb-6 md:mb-8">
                "{currentTestimonial.text}"
              </blockquote>
              <div className="mb-8 md:mb-12">
                <p className="font-bold">{currentTestimonial.author.name}</p>
                <p className="text-zinc-500">@{currentTestimonial.author.username}</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                    <Image src="/colorful-illustration-portrait-1.jpg" alt="Artwork" fill className="object-cover" />
                  </div>
                  <div className="aspect-[1/1] rounded-2xl overflow-hidden relative">
                    <Image src="/abstract-geometric-art.png" alt="Artwork" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-6 md:pt-12">
                  <div className="aspect-[1/1] rounded-2xl overflow-hidden relative">
                    <Image src="/surreal-digital-painting.jpg" alt="Artwork" fill className="object-cover" />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                    <Image src="/placeholder.svg?height=800&width=600" alt="Artwork" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* New testimonials design based on screenshot */}
      <section className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
              LOVE FROM THE COMMUNITY
            </h2>
         
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {displayedTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#a3e635]/20 to-[#84cc16]/20 border border-[#a3e635]/30">
                    <Image 
                      src={testimonial.author.profile_image_url} 
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const placeholder = target.parentElement?.querySelector('.placeholder-icon');
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="placeholder-icon absolute inset-0 flex items-center justify-center hidden">
                      <User className="w-6 h-6 text-[#a3e635]" />
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 mt-1" />
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-6">
                  {testimonial.text}
                </p>
                
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.author.name}</p>
                  <p className="text-zinc-500 text-xs">@{testimonial.author.username}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= twitterTestimonials.length - visibleTestimonials}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
