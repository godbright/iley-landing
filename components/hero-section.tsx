"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import GoogleIcon from "@/components/ui/google-icon"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import React from "react"
import { PromptInput } from "@/components/prompt-input"
import SocialProof from "@/components/social-proof"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-20 px-4 sm:pt-20 sm:pb-32">
      {/* Scattered Background Images */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-60 sm:opacity-80">
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute top-[10%] left-[2%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-2xl rotate-[-6deg] sm:top-[15%] sm:left-[5%]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image src="/abstract-colorful-nature.jpg" alt="Art sample" fill className="object-cover" />
          </motion.div>
        </motion.div>

        {/* Top Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[8%] right-[2%] w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-2xl rotate-[4deg] sm:top-[10%] sm:right-[8%]"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="w-full h-full"
          >
            <Image src="/vibrant-portrait.png" alt="Art sample" fill className="object-cover" />
          </motion.div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-[20%] left-[1%] w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-2xl rotate-[12deg] sm:bottom-[15%] sm:left-[10%]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            className="w-full h-full"
          >
            <Image src="/surreal-digital-art.jpg" alt="Art sample" fill className="object-cover" />
          </motion.div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-[18%] right-[1%] w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl rotate-[-8deg] sm:bottom-[20%] sm:right-[5%]"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            className="w-full h-full"
          >
            <Image src="/3d-abstract-shapes.jpg" alt="Art sample" fill className="object-cover" />
          </motion.div>
        </motion.div>

     
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold tracking-tight leading-[0.9] mb-6 sm:mb-8 text-white"
        >
          Creative 
          <br />
          <span className="text-zinc-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal italic">
            (Ai Workspace)
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6 sm:gap-8 mt-8 sm:mt-12"
        >
          <p className="text-base sm:text-lg text-zinc-400 max-w-xs sm:max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
       Build everything, from logo design to full branding, social content, print materials, mockups, and video creation, powered by AI.
          </p>

          <div className="w-full max-w-2xl px-4 sm:px-0">
            <PromptInput 
              onTransform={() => alert('Transform clicked!')}
              onUploadClick={() => alert('Upload clicked!')}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
            <a 
              href="https://workspace.iley.app/auth"
              className="bg-[#a3e635] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-[#8cd32a] transition-all hover:scale-105 flex items-center gap-3 text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <GoogleIcon className="w-5 h-5 shrink-0" />
              <span className="truncate">Start Creating Now</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
          </div>

          {/* Social proof */}
          <div className="w-full max-w-4xl">
            <SocialProof showAvatars={true} className="mt-6 sm:mt-8" />
          </div>
        </motion.div>
      </div>

  

    
    </section>
  )
}
