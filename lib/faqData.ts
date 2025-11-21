import type { FAQItem } from '@/components/FAQSchema'

export const aiImageEditingFAQ: FAQItem[] = [
  {
    question: "How does AI image generation work?",
    answer: "AI image generation uses advanced machine learning models like FLUX, DALL-E, and Stable Diffusion to create images from text descriptions. These models are trained on millions of images and can understand natural language to generate unique visual content based on your prompts."
  },
  {
    question: "What's the difference between FLUX, DALL-E, and Stable Diffusion?",
    answer: "FLUX excels at photorealistic images and detailed textures, DALL-E is great for creative and artistic interpretations, while Stable Diffusion offers excellent control over style and composition. Each model has strengths for different types of image generation."
  },
  {
    question: "How accurate is AI background removal?",
    answer: "Our AI background removal achieves 95%+ accuracy for most images, especially portraits and products with clear subject boundaries. The AI can handle complex edges like hair and fur, though manual touch-ups may be needed for very complex scenes."
  },
  {
    question: "Can I upscale images without losing quality?",
    answer: "Yes, our AI upscaling technology can increase image resolution up to 8x while enhancing details and maintaining quality. It works best with clear, well-lit images and can significantly improve low-resolution photos."
  },
  {
    question: "Is there a limit to how many images I can generate?",
    answer: "Free users get 10 credits per month. Creator plan includes 500 credits monthly, and Pro plan offers 2000 credits. Each image generation, edit, or enhancement typically uses 1-3 credits depending on complexity."
  },
  {
    question: "What image formats are supported?",
    answer: "We support JPG, PNG, and WebP formats for uploads up to 10MB. Generated images can be downloaded in high-resolution PNG or JPG format up to 4K resolution."
  },
  {
    question: "How long does image processing take?",
    answer: "Image generation typically takes 10-30 seconds, background removal 5-15 seconds, and upscaling 30-60 seconds depending on image size and complexity. Processing times may vary during peak usage."
  },
  {
    question: "Can I use generated images commercially?",
    answer: "Yes, images generated with paid plans can be used for commercial purposes. Free plan images are for personal use only. Check our terms of service for complete usage rights and restrictions."
  },
  {
    question: "How do I write better prompts for AI image generation?",
    answer: "Use descriptive language including style, colors, composition, lighting, and mood. Be specific about what you want (e.g., 'watercolor painting of a sunset over mountains with purple and orange sky') rather than vague descriptions."
  },
  {
    question: "What makes iley different from other AI image tools?",
    answer: "iley combines multiple AI models in one platform, offers professional editing tools, provides high-quality outputs up to 4K, has competitive pricing, and includes advanced features like batch processing and API access for developers."
  }
]

export const pricingFAQ: FAQItem[] = [
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 10 credits per month, access to basic AI image generation, standard resolution outputs, and core editing features like background removal and basic filters."
  },
  {
    question: "How do credits work?",
    answer: "Credits are used for AI operations: text-to-image generation (1-2 credits), background removal (1 credit), image upscaling (2-3 credits), and style transfer (1-2 credits). Credits reset monthly on your billing date."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to paid features until the end of your current billing period."
  },
  {
    question: "Do unused credits roll over?",
    answer: "No, unused credits don't roll over to the next month. We recommend upgrading your plan if you consistently use all your credits before the month ends."
  },
  {
    question: "Is there a discount for annual subscriptions?",
    answer: "Yes, annual subscriptions receive a 20% discount compared to monthly billing. This is automatically applied when you select annual billing during signup or plan changes."
  }
]