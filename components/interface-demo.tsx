"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const tabs = ["Vector", "Pixel", "Layout", "Customized"]

const slideshowImages = [
  {
    src: "/images/screenshot-202025-11-21-20at-2014.webp",
    alt: "iley Design Studio - Creative Interface",
  },
  {
    src: "/images/Screenshot 2025-11-21 at 16.52.55.webp", 
    alt: "iley AI Image Editing Interface",
  },
  {
    src: "/images/Screenshot 2025-11-21 at 16.54.23.webp",
    alt: "iley Creative Workspace",
  },
]

export function InterfaceDemo() {
  const [activeTab, setActiveTab] = useState("Vector")
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">
          An app that understands you,
          <br />
          not the other way around
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
          iley comes with built-in canvas design tools giving you access to a design intensive screen. For simplicity you can use the grid design tool.
        </p>

      

        <div className="relative mx-auto max-w-7xl rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 p-8">
          <div className="relative bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={slideshowImages[currentSlide].src}
                  alt={slideshowImages[currentSlide].alt}
                  width={1400}
                  height={900}
                  className="w-full h-auto object-contain max-h-[70vh]"
                  quality={100}
                  priority={currentSlide === 0}
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 85vw, 1400px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  index === currentSlide ? "w-12 bg-[#a3e635]" : "w-1.5 bg-zinc-400 hover:bg-zinc-600",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
