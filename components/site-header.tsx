"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LottieAnimation } from "@/components/ui/lottie-animation"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-black/10" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <LottieAnimation 
            animationPath="/Loading Bubbles.json"
            width={40}
            height={40}
            className="opacity-80"
          />
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white py-1 rounded-md">
            iley
          </Link>
          
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/usecases" className="hover:text-white transition-colors">
            Use Cases
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
      
          <a href="https://workspace.iley.app/auth">
            <Button className="bg-[#a3e635] text-black hover:bg-[#8cd32a] font-semibold rounded-full px-4 sm:px-6 text-sm py-2">
             Sign in
            </Button>
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-black/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link 
              href="/features" 
              className="text-zinc-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/usecases" 
              className="text-zinc-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              href="/pricing" 
              className="text-zinc-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/faq" 
              className="text-zinc-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="border-t border-zinc-700 pt-4 mt-2">
              <a 
                href="https://workspace.iley.app/auth" 
                className="text-zinc-300 hover:text-white transition-colors py-2 text-lg block"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </a>
              <a 
                href="https://workspace.iley.app/auth"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="bg-[#a3e635] text-black hover:bg-[#8cd32a] font-semibold rounded-full px-6 py-3 mt-4 w-full">
                  Get iley
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}



