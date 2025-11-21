'use client'

import { useEffect } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqItems: FAQItem[]
}

export default function FAQSchema({ faqItems }: FAQSchemaProps) {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }

    // Create or update the schema script tag
    const existingScript = document.querySelector('script[data-faq-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-faq-schema', 'true')
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector('script[data-faq-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [faqItems])

  // This component doesn't render anything visible
  return null
}

export type { FAQItem, FAQSchemaProps }