'use client'

import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
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
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => 
        (prev + 1) % twitterTestimonials.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = twitterTestimonials[currentTestimonialIndex]

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? twitterTestimonials.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => 
      (prev + 1) % twitterTestimonials.length
    )
  }

  return (
    <section className="py-32 bg-[#f0f0f0] text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-1/3 flex flex-col justify-center sticky top-32 h-fit">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12">Made in iley</h2>

            <blockquote className="text-2xl md:text-3xl font-serif leading-tight mb-8">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="mb-12">
              <p className="font-bold">{currentTestimonial.author.name}</p>
              <p className="text-zinc-500">@{currentTestimonial.author.username}</p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  )
}
