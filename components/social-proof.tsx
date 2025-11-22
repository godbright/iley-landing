'use client'

import { useState, useEffect } from 'react'

// Cache configuration - COMMENTED OUT
// const CACHE_KEY = 'socialProof_stats'
// const ANIMATION_VIEWED_KEY = 'socialProof_animationViewed'
// const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

// interface CachedData {
//   data: {
//     totalUsers: number
//     totalVisuals: number
//     recentUsers: Array<{ 
//       initials: string; 
//       full_name: string | null;
//       avatar_url: string | null;
//       created_at: string 
//     }>
//   }
//   timestamp: number
// }

// Cache utility functions - COMMENTED OUT
// const getCachedData = (): CachedData | null => {
//   if (typeof window === 'undefined') return null
//   
//   try {
//     const cached = localStorage.getItem(CACHE_KEY)
//     if (!cached) return null
//     
//     const parsedCache: CachedData = JSON.parse(cached)
//     const now = Date.now()
//     
//     // Check if cache is still valid
//     if (now - parsedCache.timestamp > CACHE_DURATION) {
//       localStorage.removeItem(CACHE_KEY)
//       return null
//     }
//     
//     return parsedCache
//   } catch (error) {
//     console.error('Error reading cache:', error)
//     localStorage.removeItem(CACHE_KEY)
//     return null
//   }
// }

// const setCachedData = (data: CachedData['data']): void => {
//   if (typeof window === 'undefined') return
//   
//   try {
//     const cacheObject: CachedData = {
//       data,
//       timestamp: Date.now()
//     }
//     localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject))
//   } catch (error) {
//     console.error('Error setting cache:', error)
//   }
// }

// Animation state utility functions - COMMENTED OUT
// const hasViewedAnimation = (): boolean => {
//   if (typeof window === 'undefined') return false
//   return localStorage.getItem(ANIMATION_VIEWED_KEY) === 'true'
// }

// const markAnimationAsViewed = (): void => {
//   if (typeof window === 'undefined') return
//   localStorage.setItem(ANIMATION_VIEWED_KEY, 'true')
// }

interface SocialProofProps {
  showAvatars?: boolean
  className?: string
}

export default function SocialProof({ showAvatars = false, className = "" }: SocialProofProps) {
  // Dummy static values instead of dynamic counting
  const usersCount = 100
  const visualsCount = 100
  
  const [recentUsers, setRecentUsers] = useState<Array<{ 
    initials: string; 
    full_name: string | null;
    avatar_url: string;
    created_at: string 
  }>>([
    // Static dummy avatars
    { initials: 'AM', full_name: 'Alex Morgan', avatar_url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face&auto=format&q=80', created_at: new Date().toISOString() },
    { initials: 'MK', full_name: 'Maya Kumar', avatar_url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face&auto=format&q=80', created_at: new Date().toISOString() },
    { initials: 'MR', full_name: 'Mike Rodriguez', avatar_url: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=150&h=150&fit=crop&crop=face&auto=format&q=80', created_at: new Date().toISOString() },
    { initials: 'EW', full_name: 'Emma Wilson', avatar_url: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face&auto=format&q=80', created_at: new Date().toISOString() },
    { initials: 'JD', full_name: 'James Davis', avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80', created_at: new Date().toISOString() }
  ])

  // ALL DYNAMIC LOGIC COMMENTED OUT BELOW:

  // Function to process stats data (used for both cached and fresh data) - COMMENTED OUT
  // const processStatsData = (stats: any, isMounted: boolean) => {
  //   console.log('📊 [SocialProof] Processing stats data:', {
  //     totalUsers: stats.totalUsers,
  //     totalVisuals: stats.totalVisuals,
  //     recentUsersCount: stats.recentUsers.length
  //   })
  //   
  //   if (!isMounted) return
  //   
  //   console.log('👥 [SocialProof] Using placeholder avatars with real user count:', stats.totalUsers)
  //   
  //   const targetUsers = stats.totalUsers > 0 ? stats.totalUsers : 100
  //   
  //   console.log('🎯 [SocialProof] Target values:', {
  //     targetUsers,
  //     usingFallback: stats.totalUsers === 0
  //   })

  //   // Check if user has seen the animation before
  //   const shouldAnimate = !hasViewedAnimation()
  //   
  //   if (shouldAnimate) {
  //     console.log('🎬 [SocialProof] First time viewing - showing counting animation')
  //     markAnimationAsViewed()
  //     
  //     const duration = 2000 // Animation duration in ms
  //     const interval = 50 // Update interval in ms
  //     const steps = duration / interval

  //     const usersIncrement = targetUsers / steps

  //     let currentStep = 0
  //     const timer = setInterval(() => {
  //       if (!isMounted) {
  //         clearInterval(timer)
  //         return
  //       }
  //       
  //       currentStep++
  //       setUsersCount(Math.floor(usersIncrement * currentStep))

  //       if (currentStep >= steps) {
  //         setUsersCount(targetUsers)
  //         clearInterval(timer)
  //       }
  //     }, interval)

  //     return () => clearInterval(timer)
  //   } else {
  //     console.log('⚡ [SocialProof] Animation already viewed - showing final values immediately')
  //     setUsersCount(targetUsers)
  //   }
  // }

  // Animated counter effect with real database data and caching - COMMENTED OUT
  // useEffect(() => {
  //   let isMounted = true
  //   
  //   // Check cache first
  //   const cachedData = getCachedData()
  //   if (cachedData) {
  //     console.log('💾 [SocialProof] Using cached data')
  //     processStatsData(cachedData.data, isMounted)
  //     return
  //   }
  //   
  //   // Fetch real stats from API
  //   const fetchStats = async () => {
  //     try {
  //       console.log('🚀 [SocialProof] Fetching stats from API...')
  //       const response = await fetch('/api/stats')
  //       
  //       console.log('📡 [SocialProof] API response status:', response.status, response.statusText)
  //       
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`)
  //       }
  //       
  //       const stats = await response.json()
  //       console.log('📥 [SocialProof] Raw API response:', stats)
  //       
  //       // Cache the successful response
  //       setCachedData(stats)
  //       
  //       processStatsData(stats, isMounted)
  //     } catch (error) {
  //       console.error('❌ [SocialProof] Error fetching stats from API:', error)
  //       // Fallback to minimal values on error
  //       if (isMounted) {
  //         console.log('🔄 [SocialProof] Using fallback values due to API error')
  //         setUsersCount(100)
  //       }
  //     }
  //   }

  //   fetchStats()
  //   
  //   return () => {
  //     isMounted = false
  //   }
  // }, [])

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 ${className}`}>
      {/* Avatar row - only show if showAvatars is true */}
      {showAvatars && (
        <div className="flex items-center order-2 sm:order-1">
          {recentUsers.length > 0 ? recentUsers.slice(0, 5).map((user, index) => (
            <div 
              key={index}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-md -ml-2 sm:-ml-3 first:ml-0 hover:scale-105 transition-transform duration-200 relative"
              style={{ zIndex: recentUsers.length - index }}
              title={user.full_name || 'Anonymous User'}
            >
              <img 
                src={user.avatar_url}
                alt={user.full_name || 'User avatar'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Hide avatar if image fails to load
                  const target = e.target as HTMLImageElement
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.display = 'none'
                  }
                }}
              />
            </div>
          )) : null}
        </div>
      )}
      
      {/* Simple stats text with dummy numbers */}
      <div className="text-base sm:text-lg lg:text-xl text-zinc-400 text-center order-1 sm:order-2 px-2">
        Trusted by <span className="font-semibold text-[#a3e635]">{usersCount.toLocaleString()}</span> + happy customers
      </div>
      
      {/* Commented out detailed stats */}
      {/* 
      <div className="flex items-center gap-6 text-center">
        <div className="flex flex-col">
          <div className="text-xs text-gray-600 mb-1">Loved by</div>
          <div className="text-lg font-semibold text-gray-900">
            {usersCount.toLocaleString()}+
          </div>
          <div className="text-xs text-gray-600">creators</div>
        </div>
        <div className="w-px h-8 bg-gray-300"></div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-900">
            {visualsCount.toLocaleString()}+
          </div>
          <div className="text-xs text-gray-600">visuals created</div>
        </div>
      </div>
      */}
    </div>
  )
}