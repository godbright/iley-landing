import { UseCase, UseCaseCategory } from '@/types/usecase'

export const useCaseCategories: UseCaseCategory[] = [
  {
    id: 'digital-art',
    name: 'Digital Art',
    description: 'Create stunning digital artwork with AI',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Enhance and transform your photos',
    icon: '📸',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Create compelling marketing visuals',
    icon: '📈',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description: 'Product images that sell',
    icon: '🛍️',
    color: 'from-brand-500 to-red-500'
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Eye-catching social content',
    icon: '📱',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Professional design assets',
    icon: '✨',
    color: 'from-yellow-500 to-brand-500'
  }
]

export const useCases: UseCase[] = [
  {
    id: 'nano-banana-digital-art-creation',
    slug: 'nano-banana-digital-art-creation',
    title: 'Creating Stunning Digital Art with Nano Banana AI',
    subtitle: 'Transform simple prompts into professional digital artwork',
    description: 'Learn how to leverage Nano Banana AI model to create breathtaking digital art pieces from text descriptions and reference images.',
    category: 'digital-art',
    featured: true,
    readTime: '8 min read',
    publishDate: '2024-01-15',
    author: {
      name: 'Sarah Chen',
      role: 'Digital Artist',
      avatar: '/avatars/sarah.jpg'
    },
    seo: {
      metaTitle: 'Nano Banana AI Digital Art Creation - Complete Guide | iley',
      metaDescription: 'Master digital art creation with Nano Banana AI. Learn techniques, prompts, and workflows to create stunning artwork from text descriptions.',
      keywords: ['nano banana ai', 'digital art creation', 'ai art generator', 'text to image', 'digital painting', 'ai artwork']
    },
    hero: {
      image: '/land_images/opt_anime.webp',
      alt: 'Digital art created with Nano Banana AI showing vibrant anime-style character'
    },
    content: {
      introduction: 'Digital art has evolved tremendously with the advent of AI technology. Nano Banana AI represents the cutting edge of text-to-image generation, offering artists unprecedented creative possibilities. Whether you\'re a professional artist or a creative enthusiast, this guide will show you how to harness the power of Nano Banana for your digital art projects.',
      sections: [
        {
          id: 'understanding-nano-banana',
          title: 'Understanding Nano Banana AI',
          type: 'text',
          content: 'Nano Banana is a state-of-the-art AI model specifically trained for high-quality image generation. Unlike traditional art software, it interprets natural language descriptions and transforms them into visually stunning artwork. The model excels at understanding artistic styles, composition, lighting, and character design.',
          image: {
            src: '/land_images/opt_paint03.webp',
            alt: 'Example of Nano Banana AI generated artwork',
            caption: 'High-quality digital art generated with Nano Banana AI'
          }
        },
        {
          id: 'getting-started',
          title: 'Getting Started with Digital Art Creation',
          type: 'steps',
          content: 'Follow these steps to create your first digital artwork with Nano Banana:',
          steps: [
            'Start with a clear vision of what you want to create',
            'Write a detailed prompt describing your artwork',
            'Include style references (e.g., "anime style", "oil painting", "digital art")',
            'Specify composition elements like lighting and perspective',
            'Generate your first iteration and refine as needed',
            'Use the editing tools to perfect your creation'
          ]
        },
        {
          id: 'prompt-techniques',
          title: 'Advanced Prompt Techniques',
          type: 'tips',
          content: 'Master these techniques to get better results from Nano Banana:',
          tips: [
            'Use specific artistic terminology (chiaroscuro, bokeh, rule of thirds)',
            'Reference famous artists or art movements for style guidance',
            'Include emotional descriptors to convey mood and atmosphere',
            'Specify technical details like camera angles and focal lengths',
            'Combine multiple style references for unique results',
            'Use negative prompts to exclude unwanted elements'
          ]
        },
        {
          id: 'before-after-comparison',
          title: 'Transformation Examples',
          type: 'comparison',
          content: 'See the dramatic difference Nano Banana can make:',
          comparison: {
            before: {
              title: 'Simple Text Prompt',
              description: '"A mystical forest guardian with glowing eyes"',
              image: '/examples/prompt-text.jpg'
            },
            after: {
              title: 'Generated Artwork',
              description: 'Detailed fantasy character with ethereal lighting and magical atmosphere',
              image: '/land_images/opt_anime02.webp'
            }
          }
        }
      ],
      conclusion: 'Nano Banana AI opens up endless possibilities for digital art creation. By mastering prompt engineering and understanding the model\'s capabilities, you can create professional-quality artwork that rivals traditional digital art methods. The key is experimentation and iteration – each prompt teaches you more about the model\'s interpretation of artistic concepts.'
    },
    examples: [
      {
        id: 'fantasy-character',
        title: 'Fantasy Character Design',
        description: 'Creating a mystical elf warrior with intricate armor',
        beforeImage: '/examples/fantasy-before.jpg',
        afterImage: '/land_images/opt_anime03.webp',
        prompt: 'elegant elf warrior, intricate silver armor, mystical forest background, soft ethereal lighting, fantasy art style, highly detailed, 4k resolution',
        settings: {
          model: 'Nano Banana',
          strength: 0.8,
          steps: 50
        }
      },
      {
        id: 'landscape-art',
        title: 'Digital Landscape',
        description: 'Transforming a simple landscape into a dramatic scene',
        beforeImage: '/examples/landscape-before.jpg',
        afterImage: '/land_images/opt_paint02.webp',
        prompt: 'dramatic mountain landscape at sunset, golden hour lighting, epic clouds, digital painting style, cinematic composition',
        settings: {
          model: 'Nano Banana',
          strength: 0.9,
          steps: 40
        }
      }
    ],
    relatedUseCases: ['character-design-workflow', 'concept-art-development'],
    tags: ['nano banana', 'digital art', 'ai generation', 'creative workflow', 'artistic techniques']
  },
  {
    id: 'product-photography-enhancement',
    slug: 'product-photography-enhancement',
    title: 'AI-Powered Product Photography Enhancement',
    subtitle: 'Transform ordinary product photos into professional e-commerce images',
    description: 'Discover how to use AI to enhance product photography, remove backgrounds, and create stunning e-commerce visuals that increase sales.',
    category: 'e-commerce',
    featured: true,
    readTime: '6 min read',
    publishDate: '2024-01-12',
    author: {
      name: 'Marcus Rodriguez',
      role: 'E-commerce Specialist',
      avatar: '/avatars/marcus.jpg'
    },
    seo: {
      metaTitle: 'AI Product Photography Enhancement - Boost E-commerce Sales | iley',
      metaDescription: 'Learn to enhance product photos with AI. Remove backgrounds, improve lighting, and create professional e-commerce images that convert.',
      keywords: ['product photography', 'e-commerce images', 'background removal', 'product enhancement', 'ai photo editing', 'online store visuals']
    },
    hero: {
      image: '/land_images/opt_vin01.webp',
      alt: 'Professional product photography enhanced with AI'
    },
    content: {
      introduction: 'In the competitive world of e-commerce, high-quality product photography can make the difference between a sale and a lost customer. AI-powered enhancement tools now make it possible to transform basic product photos into professional, magazine-quality images without expensive photography equipment or extensive editing skills.',
      sections: [
        {
          id: 'importance-product-photos',
          title: 'Why Product Photography Matters',
          type: 'text',
          content: 'Studies show that 93% of consumers consider visual appearance to be the key deciding factor in a purchasing decision. Professional product photography builds trust, reduces returns, and can increase conversion rates by up to 30%. With AI enhancement, even smartphone photos can be transformed into professional-quality images.'
        },
        {
          id: 'enhancement-workflow',
          title: 'AI Enhancement Workflow',
          type: 'steps',
          content: 'Follow this systematic approach to enhance your product photos:',
          steps: [
            'Capture your product photo in good natural lighting',
            'Upload the image to the AI enhancement tool',
            'Use automatic background removal for clean product isolation',
            'Apply lighting enhancement to improve shadows and highlights',
            'Add a professional background or keep it transparent',
            'Fine-tune colors and contrast for brand consistency',
            'Export in multiple formats for different platforms'
          ]
        },
        {
          id: 'professional-tips',
          title: 'Professional Enhancement Tips',
          type: 'tips',
          content: 'Maximize your results with these expert techniques:',
          tips: [
            'Start with the highest quality source image possible',
            'Use consistent lighting across all product photos',
            'Maintain brand color accuracy throughout enhancement',
            'Create variations for different sales channels',
            'Test different backgrounds to see what converts best',
            'Keep original files for future re-editing needs'
          ]
        }
      ],
      conclusion: 'AI-powered product photography enhancement democratizes professional-quality visuals for businesses of all sizes. By following these techniques and workflows, you can create compelling product images that drive sales and build customer confidence in your brand.'
    },
    examples: [
      {
        id: 'watch-enhancement',
        title: 'Luxury Watch Photography',
        description: 'Enhancing a watch photo with professional lighting and background',
        beforeImage: '/examples/watch-before.jpg',
        afterImage: '/land_images/opt_vin02.webp',
        prompt: 'professional product photography, luxury watch, clean white background, studio lighting, high contrast, commercial photography style',
        settings: {
          model: 'Nano Banana',
          strength: 0.7,
          steps: 30
        }
      }
    ],
    relatedUseCases: ['nano-banana-digital-art-creation', 'social-media-content-creation'],
    tags: ['product photography', 'e-commerce', 'background removal', 'professional photos', 'sales optimization']
  },
  {
    id: 'social-media-content-creation',
    slug: 'social-media-content-creation',
    title: 'Creating Viral Social Media Content with AI',
    subtitle: 'Generate eye-catching visuals that boost engagement',
    description: 'Learn to create scroll-stopping social media content using AI image generation and enhancement techniques.',
    category: 'social-media',
    featured: false,
    readTime: '5 min read',
    publishDate: '2024-01-10',
    author: {
      name: 'Emma Thompson',
      role: 'Social Media Manager',
      avatar: '/avatars/emma.jpg'
    },
    seo: {
      metaTitle: 'AI Social Media Content Creation - Boost Engagement | iley',
      metaDescription: 'Create viral social media content with AI. Generate eye-catching visuals, enhance photos, and boost engagement across all platforms.',
      keywords: ['social media content', 'viral images', 'instagram posts', 'facebook visuals', 'ai content creation', 'social engagement']
    },
    hero: {
      image: '/land_images/opt_anime04.webp',
      alt: 'Vibrant social media content created with AI'
    },
    content: {
      introduction: 'Social media success depends on creating content that stops the scroll. With AI-powered image generation and enhancement, content creators can produce eye-catching visuals that drive engagement, build followers, and create viral moments.',
      sections: [
        {
          id: 'platform-optimization',
          title: 'Platform-Specific Optimization',
          type: 'text',
          content: 'Different social platforms require different visual approaches. Instagram favors high-quality, aesthetically pleasing images, while TikTok thrives on bold, attention-grabbing visuals. Understanding these nuances helps you tailor your AI-generated content for maximum impact on each platform.'
        },
        {
          id: 'content-creation-process',
          title: 'Content Creation Process',
          type: 'steps',
          content: 'Create engaging social content with this workflow:',
          steps: [
            'Identify trending topics and hashtags in your niche',
            'Brainstorm visual concepts that align with trends',
            'Generate multiple image variations with AI',
            'Optimize images for specific platform dimensions',
            'Add text overlays and branding elements',
            'A/B test different versions to find top performers',
            'Schedule posts for optimal engagement times'
          ]
        }
      ],
      conclusion: 'AI-powered content creation gives social media managers and creators a competitive edge in the attention economy. By leveraging these tools strategically, you can maintain a consistent flow of high-quality, engaging content that builds your audience and drives results.'
    },
    examples: [
      {
        id: 'instagram-story',
        title: 'Instagram Story Visual',
        description: 'Creating an eye-catching story background',
        beforeImage: '/examples/story-before.jpg',
        afterImage: '/land_images/opt_anime.webp',
        prompt: 'trendy instagram story background, vibrant colors, modern aesthetic, social media optimized, engaging visual design',
        settings: {
          model: 'Nano Banana',
          strength: 0.8,
          steps: 35
        }
      }
    ],
    relatedUseCases: ['nano-banana-digital-art-creation', 'product-photography-enhancement'],
    tags: ['social media', 'content creation', 'viral content', 'instagram', 'engagement', 'visual marketing']
  }
]

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find(useCase => useCase.slug === slug)
}

export function getUseCasesByCategory(category: string): UseCase[] {
  return useCases.filter(useCase => useCase.category === category)
}

export function getFeaturedUseCases(): UseCase[] {
  return useCases.filter(useCase => useCase.featured)
}

export function getRelatedUseCases(useCaseId: string): UseCase[] {
  const useCase = useCases.find(uc => uc.id === useCaseId)
  if (!useCase) return []
  
  return useCases.filter(uc => 
    useCase.relatedUseCases.includes(uc.id) || 
    (uc.category === useCase.category && uc.id !== useCaseId)
  ).slice(0, 3)
}