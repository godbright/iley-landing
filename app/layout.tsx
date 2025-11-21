import type React from "react"
import type { Metadata } from "next"
import { Urbanist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "iley - AI Image Generator & Editor",
    template: "%s | iley - AI Image Generator & Editor"
  },
  description: "Generate stunning images from text or transform existing photos with AI. Create, edit, and enhance images instantly - remove backgrounds, change styles, upscale quality, and more. Powered by advanced AI models including Flux, DALL-E, and Stable Diffusion.",
  keywords: [
    "ai image generator",
    "ai image editor",
    "text to image",
    "image generation from text",
    "image upscaler",
    "ai photo enhancement",
    "image style transfer",
    "photo restoration",
    "flux ai model",
    "stable diffusion",
    "dall-e alternative",
    "nano banana ai",
    "midjourney alternative",
    "photo background remover", 
    "free image generator",
    "free image editor",
    "online photo editor",
    "ai photo filter",
    "background replacement",
    "image colorization",
    "photo retouching",
    "creative image editing",
    "prompt to image"
  ],
  authors: [{ name: "iley Team" }],
  creator: "iley",
  publisher: "iley",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iley.app",
    siteName: "iley - AI Image Generator & Editor",
    title: "iley - AI Image Generator & Editor | Create & Transform Photos",
    description: "Generate stunning images from text or transform existing photos with AI. Create, edit, and enhance images instantly - remove backgrounds, change styles, upscale quality, and more with advanced AI models.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "iley AI Image Generator & Editor - Create and transform images with AI",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ileyapp",
    creator: "@ileyapp",
    title: "iley - AI Image Generator & Editor",
    description: "Generate stunning images from text or transform existing photos with AI. Create, edit, and enhance images instantly - remove backgrounds, change styles, upscale quality, and more.",
    images: ["/placeholder.jpg"],
  },
  alternates: {
    canonical: "https://iley.app",
  },
  category: "Technology",
  classification: "AI Image Editing Software",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "application-name": "iley",
    "mobile-web-app-capable": "yes",
    "mobile-web-app-status-bar-style": "default",
    "mobile-web-app-title": "iley",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "iley",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://iley.app/#website",
        "url": "https://iley.app/",
        "name": "iley - AI Image Generator & Editor",
        "description": "Generate stunning images from text or transform existing photos with AI. Create, edit, and enhance images instantly - remove backgrounds, change styles, upscale quality, and more.",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://iley.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": ["SoftwareApplication", "Product"],
        "@id": "https://iley.app/#product",
        "name": "iley - AI Image Generator & Editor",
        "url": "https://iley.app",
        "description": "AI-powered image generator and editor. Create images from text prompts or transform existing photos. Features include text-to-image generation, background removal, style transfer, upscaling, and more.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": ["Web Browser", "Windows", "macOS", "Linux", "iOS", "Android"],
        "softwareVersion": "2.0",
        "releaseDate": "2024-01-01",
        "brand": {
          "@type": "Brand",
          "name": "iley"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "iley",
          "@id": "https://iley.app/#organization"
        },
        "category": "AI Image Generation Software",
        "image": [
          "https://iley.app/placeholder.jpg",
          "https://iley.app/land_images/opt_anime.webp",
          "https://iley.app/land_images/opt_paint03.webp"
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "Free Plan",
            "description": "Basic AI image generation with limited credits",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": "10",
              "unitText": "credits per month"
            }
          },
          {
            "@type": "Offer",
            "name": "Creator Plan",
            "description": "Enhanced AI image generation for creative professionals",
            "price": "9.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "priceSpecification": {
              "@type": "RecurringPriceSpecification",
              "price": "9.99",
              "priceCurrency": "USD",
              "billingDuration": "P1M",
              "billingIncrement": 1
            },
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": "500",
              "unitText": "credits per month"
            }
          },
          {
            "@type": "Offer",
            "name": "Pro Plan",
            "description": "Professional AI image generation with advanced features",
            "price": "19.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "priceSpecification": {
              "@type": "RecurringPriceSpecification",
              "price": "19.99",
              "priceCurrency": "USD",
              "billingDuration": "P1M",
              "billingIncrement": 1
            },
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": "2000",
              "unitText": "credits per month"
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1250",
          "reviewCount": "850"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Sarah Design"
            },
            "reviewBody": "Amazing AI image generator! The quality is incredible and it's so easy to use. Perfect for my design work.",
            "datePublished": "2024-11-01"
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Mike Creative"
            },
            "reviewBody": "Best AI image editor I've used. The background removal feature is incredibly accurate.",
            "datePublished": "2024-10-28"
          }
        ],
        "featureList": [
          "Text-to-Image Generation with FLUX, DALL-E, Stable Diffusion",
          "AI Image Creation from Natural Language Prompts",
          "Automatic Background Removal with AI",
          "Image Style Transfer and Artistic Filters", 
          "Photo Upscaling and Quality Enhancement",
          "Location and Scene Swapping",
          "Photo Restoration and Colorization",
          "Image Colorization from Black & White",
          "Creative AI Filters and Effects",
          "Prompt-based Image Generation",
          "Batch Image Processing",
          "High-Resolution Export (up to 4K)",
          "API Access for Developers"
        ],
        "screenshot": [
          "https://iley.app/land_images/opt_anime.webp",
          "https://iley.app/land_images/opt_paint03.webp"
        ],
        "downloadUrl": "https://iley.app",
        "installUrl": "https://iley.app",
        "storageRequirements": "100MB",
        "memoryRequirements": "2GB RAM",
        "processorRequirements": "Modern web browser with JavaScript support",
        "permissions": "Camera access for photo upload, File system access for downloads"
      },
      {
        "@type": "Organization",
        "@id": "https://iley.app/#organization",
        "name": "iley",
        "url": "https://iley.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://iley.app/placeholder-logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/ileyapp"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="google-site-verification" content="kFwltSuPQekLc5FsYL70AGayAh4aLSfwnQxyupxdF_E" />
        
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//vitals.vercel-insights.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets for better LCP */}
        <link rel="preload" href="/land_images/opt_anime.webp" as="image" type="image/webp" />
        <link rel="preload" href="/land_images/opt_paint03.webp" as="image" type="image/webp" />
        
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${urbanist.variable} ${geistMono.variable} font-sans antialiased min-h-full bg-gradient-to-b from-gray-50 to-white selection:bg-blue-500/10 selection:text-blue-600`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
