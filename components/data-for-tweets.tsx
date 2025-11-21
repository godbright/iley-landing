'use client'

import { useState, useEffect } from 'react'

interface Tweet {
  id: string
  text: string
  author: {
    name: string
    username: string
    profile_image_url: string
  }
  created_at: string
}

// Real testimonials with actual tweet content
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
        name: "AlielaiaT", // You can update this with the real display name if different
        username: "AlielaiaT",
        profile_image_url: "https://pbs.twimg.com/profile_images/1959746274334285824/_X8JdK6h_400x400.jpg"
      },
      created_at: "2025-10-05T14:51:00Z"
    }
    ,{
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
    },
    
    
  ]

export default function TwitterTestimonials() {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use the real Twitter testimonials
    setTweets(twitterTestimonials)
    setLoading(false)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <section className="  py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className=" bg-white w-full py-12 md:py-16  ">
      <div className="max-w-8xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Loved  <span className="relative inline-block">
            <span className="relative z-10">World wide</span>
            <svg className="absolute -bottom-1 left-0 w-full h-3 text-brand-400/70" viewBox="0 0 100 8" preserveAspectRatio="none">
              <path d="M0 4Q25 1 50 4T100 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            See what people are saying about iley on Twitter
          </p>
        </div>

        {/* Testimonials Grid - 2 rows with horizontal scroll */}
        <div className="overflow-x-auto  ">
          <div className="flex gap-6 md:gap-8 justify-center  " style={{ height: 'fit-content' }}>
            {/* Create columns with exactly 2 testimonials each */}
            {Array.from({ length: Math.ceil(tweets.length / 2) }, (_, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-6 md:gap-8">
                {tweets.slice(columnIndex * 2, columnIndex * 2 + 2).map((tweet) => (
                <div 
                  key={tweet.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-80 md:w-96 flex-shrink-0"
                >
              {/* Tweet Content */}
              <div className="mb-4">
                <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                  {tweet.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    {tweet.author.profile_image_url && tweet.author.profile_image_url.includes('pbs.twimg.com') ? (
                      <img 
                        src={tweet.author.profile_image_url}
                        alt={`${tweet.author.name} avatar`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLElement
                          const parent = target.parentElement
                          if (parent) {
                            const initials = tweet.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)
                            parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">${initials}</div>`
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                        {tweet.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {tweet.author.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      @{tweet.author.username}
                    </div>
                  </div>
                </div>

                {/* Twitter Logo and Date */}
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-xs">
                    {formatDate(tweet.created_at)}
                  </span>
                </div>
              </div>

                </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}