import { ArrowRight, ImageIcon, Video, Mic, PenTool, Layers, Sparkles, BookOpen, Shirt, Zap, Package } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const categories = [
  { id: "all", name: "All", icon: Sparkles, active: true },
  { id: "book-covers", name: "Book Covers", icon: BookOpen, active: false },
  { id: "fashion", name: "Fashion", icon: Shirt, active: false },
  { id: "logos", name: "Logos", icon: Zap, active: false },
  { id: "product-design", name: "Products", icon: Package, active: false },
]

const allFeatures = [
  // Book Covers category
  {
    title: "Adventure Book Design",
    image: "/images/book-covers/adv-book.webp",
    color: "from-orange-500/20 to-red-900/20",
    span: "row-span-2",
    category: "book-covers",
    prompt: "adventure book cover design, dramatic typography, epic fantasy artwork, compelling visual storytelling"
  },
  {
    title: "Romance Novel Cover",
    image: "/images/book-covers/between-cover.webp",
    color: "from-pink-500/20 to-rose-900/20",
    span: "row-span-1",
    category: "book-covers",
    prompt: "romantic book cover, elegant typography, emotional imagery, contemporary romance style"
  },
  {
    title: "Sci-Fi Book Cover",
    image: "/images/book-covers/futuristic-cover.webp",
    color: "from-blue-500/20 to-purple-900/20",
    span: "row-span-1",
    category: "book-covers",
    prompt: "futuristic sci-fi book cover, space theme, metallic typography, high-tech design elements"
  },
  {
    title: "Horror Book Design",
    image: "/images/book-covers/ghost-cover.webp",
    color: "from-gray-500/20 to-slate-900/20",
    span: "row-span-1",
    category: "book-covers",
    prompt: "horror book cover, dark atmospheric design, spine-chilling typography, mysterious imagery"
  },
  {
    title: "Halloween Theme",
    image: "/images/book-covers/halloween-book.webp",
    color: "from-orange-500/20 to-amber-900/20",
    span: "row-span-1",
    category: "book-covers",
    prompt: "halloween book cover, spooky design elements, festive orange and black colors, seasonal artwork"
  },
  {
    title: "Love Story Cover",
    image: "/images/book-covers/love-book.webp",
    color: "from-red-500/20 to-pink-900/20",
    span: "row-span-1",
    category: "book-covers",
    prompt: "love story book cover, heartwarming design, romantic color palette, emotional connection"
  },
  {
    title: "Magic & Fantasy",
    image: "/images/book-covers/magic-cover.webp",
    color: "from-purple-500/20 to-indigo-900/20",
    span: "row-span-1",
    category: "book-covers",
    prompt: "magical fantasy book cover, enchanted design, mystical typography, fantasy art elements"
  },

  // Fashion category
  {
    title: "Luxury Fashion Portrait",
    image: "/images/fashion/balenciaga.webp",
    color: "from-gray-500/20 to-slate-900/20",
    span: "row-span-2",
    category: "fashion",
    prompt: "luxury fashion photography, high-end styling, dramatic lighting, editorial composition"
  },
  {
    title: "British Fashion Style",
    image: "/images/fashion/british.webp",
    color: "from-green-500/20 to-emerald-900/20",
    span: "row-span-1",
    category: "fashion",
    prompt: "british fashion style, classic tailoring, sophisticated look, timeless elegance"
  },
  {
    title: "Contemporary Fashion",
    image: "/images/fashion/fashion4.webp",
    color: "from-blue-500/20 to-cyan-900/20",
    span: "row-span-1",
    category: "fashion",
    prompt: "contemporary fashion shoot, modern styling, clean aesthetic, professional photography"
  },
  {
    title: "Gucci Inspired Look",
    image: "/images/fashion/gucci.webp",
    color: "from-red-500/20 to-orange-900/20",
    span: "row-span-1",
    category: "fashion",
    prompt: "luxury designer fashion, bold patterns, high-fashion styling, editorial glamour"
  },
  {
    title: "Urban Street Fashion",
    image: "/images/fashion/urban.webp",
    color: "from-yellow-500/20 to-amber-900/20",
    span: "row-span-1",
    category: "fashion",
    prompt: "urban street fashion, contemporary style, city vibes, modern casual wear"
  },
  {
    title: "Scandinavian Minimalism",
    image: "/images/fashion/scandinavian.webp",
    color: "from-gray-500/20 to-zinc-900/20",
    span: "row-span-1",
    category: "fashion",
    prompt: "scandinavian fashion, minimalist design, clean lines, nordic aesthetic"
  },

  // Logos category
  {
    title: "Modern Brand Logo",
    image: "/images/logoswebp/logo1.webp",
    color: "from-blue-500/20 to-purple-900/20",
    span: "row-span-2",
    category: "logos",
    prompt: "modern logo design, clean typography, professional branding, memorable visual identity"
  },
  {
    title: "Creative Logo Design",
    image: "/images/logoswebp/logo02.webp",
    color: "from-green-500/20 to-teal-900/20",
    span: "row-span-1",
    category: "logos",
    prompt: "creative logo concept, artistic elements, unique design approach, brand storytelling"
  },
  {
    title: "Tech Company Logo",
    image: "/images/logoswebp/logo03.webp",
    color: "from-cyan-500/20 to-blue-900/20",
    span: "row-span-1",
    category: "logos",
    prompt: "technology logo design, modern aesthetic, digital-first approach, innovative branding"
  },
  {
    title: "Elegant Brand Mark",
    image: "/images/logoswebp/logo04.webp",
    color: "from-purple-500/20 to-pink-900/20",
    span: "row-span-1",
    category: "logos",
    prompt: "elegant logo design, sophisticated typography, luxury branding, premium aesthetic"
  },

  // Product Design category
  {
    title: "Coffee Product Design",
    image: "/images/prod-design/cofee.webp",
    color: "from-amber-500/20 to-brown-900/20",
    span: "row-span-2",
    category: "product-design",
    prompt: "coffee product packaging, warm color palette, premium branding, artisanal design"
  },
  {
    title: "Energy Drink Design",
    image: "/images/prod-design/monster.webp",
    color: "from-green-500/20 to-lime-900/20",
    span: "row-span-1",
    category: "product-design",
    prompt: "energy drink packaging, bold graphics, dynamic design, sports-oriented branding"
  },
  {
    title: "Premium Product Line",
    image: "/images/prod-design/prod.webp",
    color: "from-gray-500/20 to-slate-900/20",
    span: "row-span-1",
    category: "product-design",
    prompt: "premium product design, luxury packaging, sophisticated branding, high-end aesthetics"
  },
  {
    title: "Skincare Product",
    image: "/images/prod-design/skincare.webp",
    color: "from-pink-500/20 to-rose-900/20",
    span: "row-span-1",
    category: "product-design",
    prompt: "skincare product design, clean packaging, wellness branding, natural aesthetic"
  },
  {
    title: "Travel Product Design",
    image: "/images/prod-design/travel.webp",
    color: "from-blue-500/20 to-teal-900/20",
    span: "row-span-1",
    category: "product-design",
    prompt: "travel product packaging, adventure theme, outdoor lifestyle, functional design"
  },
]

export function FeatureGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  // Filter features based on active category
  const filteredFeatures = activeCategory === "all" 
    ? [
        // Manually select features to maintain proper grid layout with row spans
        allFeatures[0], // Adventure Book Design (row-span-2)
        allFeatures[7], // Luxury Fashion Portrait (row-span-2) 
        allFeatures[1], // Romance Novel Cover
        allFeatures[8], // British Fashion Style
        allFeatures[14], // Modern Brand Logo (row-span-2)
        allFeatures[17] // Coffee Product Design (row-span-2)
      ]
    : allFeatures.filter(feature => feature.category === activeCategory)

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold max-w-2xl text-white">
            Explore AI Art <span className="relative inline-block">
              <span className="relative z-10">Possibilities</span>
              
            </span>
          </h2>
          <Button
            variant="outline"
            className="rounded-full border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 bg-transparent"
          >
            How to start with AI
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 sticky top-24">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.id ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFeatures.map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 aspect-[4/5]"
              >
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-medium text-white leading-tight max-w-[80%]">{feature.title}</h3>

                  <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a href="https://workspace.iley.app/auth">
                      <Button
                        size="sm"
                        className="rounded-full bg-[#a3e635] text-black hover:bg-[#8cd32a] font-medium"
                      >
                        Try Now <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
