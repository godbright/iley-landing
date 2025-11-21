"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SmoothScrollSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SmoothScrollSection({ children, className = "", delay = 0 }: SmoothScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInSection({ children, className = "", delay = 0 }: SmoothScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px", amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideUpSection({ children, className = "", delay = 0 }: SmoothScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}