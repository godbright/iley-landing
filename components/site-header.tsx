import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function SiteHeader() {
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
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white py-1 rounded-md">
          iley
        </Link>

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
          <a href="https://app.iley.app/auth" className="text-sm font-medium text-zinc-300 hover:text-white hidden sm:block">
            Sign in
          </a>
          <a href="https://app.iley.app/auth">
            <Button className="bg-[#a3e635] text-black hover:bg-[#8cd32a] font-semibold rounded-full px-6">
              Get iley
            </Button>
          </a>
          <button className="md:hidden text-white">
             <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}



