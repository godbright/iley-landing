import Link from "next/link"
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 mb-12 md:mb-24">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold mb-6 block text-white">
              iley
            </Link>
            <p className="text-zinc-600 max-w-xs mb-8">
              Empowering creatives with the next generation of AI tools. Free, flexible, and designed for you.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-600 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-600 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-600 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-600 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6">Product</h4>
            <ul className="space-y-4 text-zinc-600 text-sm">
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/usecases" className="hover:text-white">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6">Resources</h4>
            <ul className="space-y-4 text-zinc-600 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 md:mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-600 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-sm text-zinc-500">
          <p>© 2025 iley Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
