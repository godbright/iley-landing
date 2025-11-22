'use client'

import { useEffect, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'

interface LottieAnimationProps {
  animationData?: object
  animationPath?: string
  width?: number
  height?: number
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export function LottieAnimation({
  animationData,
  animationPath,
  width = 50,
  height = 50,
  className = '',
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clean up previous animation
    if (animationRef.current) {
      animationRef.current.destroy()
    }

    // Load animation
    if (animationData || animationPath) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
        path: animationPath,
      })
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [animationData, animationPath, loop, autoplay])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width, height }}
    />
  )
}