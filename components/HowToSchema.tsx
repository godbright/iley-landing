'use client'

import { useEffect } from 'react'

interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

export interface HowToSchemaProps {
  name: string
  description: string
  image?: string
  totalTime?: string
  supply?: string[]
  tool?: string[]
  steps: HowToStep[]
  estimatedCost?: {
    currency: string
    value: string
  }
  yield?: string
  video?: {
    name: string
    description: string
    thumbnailUrl: string
    contentUrl: string
    embedUrl: string
    uploadDate: string
    duration: string
  }
}

export default function HowToSchema({
  name,
  description,
  image,
  totalTime,
  supply = [],
  tool = [],
  steps,
  estimatedCost,
  yield: howToYield,
  video
}: HowToSchemaProps) {
  
  useEffect(() => {
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": name,
      "description": description,
      "image": image ? [image] : undefined,
      "totalTime": totalTime,
      "estimatedCost": estimatedCost ? {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      } : undefined,
      "supply": supply.map(item => ({
        "@type": "HowToSupply",
        "name": item
      })),
      "tool": tool.map(item => ({
        "@type": "HowToTool",
        "name": item
      })),
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        "image": step.image ? [step.image] : undefined,
        "url": step.url
      })),
      "yield": howToYield,
      "video": video ? {
        "@type": "VideoObject",
        "name": video.name,
        "description": video.description,
        "thumbnailUrl": video.thumbnailUrl,
        "contentUrl": video.contentUrl,
        "embedUrl": video.embedUrl,
        "uploadDate": video.uploadDate,
        "duration": video.duration
      } : undefined
    }

    // Remove undefined properties
    const cleanSchema = JSON.parse(JSON.stringify(howToSchema))

    // Create or update the schema script tag
    const existingScript = document.querySelector('script[data-howto-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-howto-schema', 'true')
    script.textContent = JSON.stringify(cleanSchema)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector('script[data-howto-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [name, description, image, totalTime, supply, tool, steps, estimatedCost, howToYield, video])

  // This component doesn't render anything visible
  return null
}