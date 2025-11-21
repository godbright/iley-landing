export interface UseCaseLanding {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  heroTitle: string
  heroSubtitle: string
  features: string[]
  prompt: string
  benefits: {
    title: string
    description: string
    icon: string
  }[]
  examples: {
    title: string
    description: string
  }[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const useCasesLanding: UseCaseLanding[] = [
  {
    id: "background-remover",
    slug: "background-remover",
    title: "AI Background Remover",
    subtitle: "Remove backgrounds from any image instantly",
    description: "Professional background removal powered by AI. Perfect for product photos, portraits, and social media content.",
    heroTitle: "Remove Backgrounds Instantly",
    heroSubtitle: "Transform any image with professional background removal in seconds",
    features: [
      "One-click background removal",
      "Preserve fine details like hair and edges",
      "Transparent PNG output",
      "Batch processing support"
    ],
    prompt: "Remove the background from this image, keeping only the main subject with clean edges and transparent background",
    benefits: [
      {
        title: "Professional Quality",
        description: "AI-powered precision that rivals manual editing",
        icon: "🎯"
      },
      {
        title: "Lightning Fast",
        description: "Process images in seconds, not hours",
        icon: "⚡"
      },
      {
        title: "Perfect Edges",
        description: "Maintain fine details like hair and complex shapes",
        icon: "✨"
      }
    ],
    examples: [
      {
        title: "Product Photography",
        description: "Create clean product images for e-commerce"
      },
      {
        title: "Portrait Enhancement",
        description: "Remove distracting backgrounds from photos"
      },
      {
        title: "Social Media Content",
        description: "Create engaging posts with transparent subjects"
      }
    ],
    seo: {
      title: "AI Background Remover - Remove Backgrounds Instantly | iley",
      description: "Remove backgrounds from images instantly with AI. Perfect for product photos, portraits, and social media. Professional quality in seconds.",
      keywords: ["background remover", "remove background", "AI background removal", "transparent background", "product photos"]
    }
  },
  {
    id: "photo-enhancer",
    slug: "photo-enhancer",
    title: "AI Photo Enhancer",
    subtitle: "Enhance photo quality with artificial intelligence",
    description: "Automatically improve photo quality, sharpness, and clarity using advanced AI algorithms.",
    heroTitle: "Enhance Photos Automatically",
    heroSubtitle: "Transform blurry, low-quality images into stunning high-resolution photos",
    features: [
      "Automatic quality enhancement",
      "Noise reduction and sharpening",
      "Color correction and vibrance",
      "Upscaling to higher resolutions"
    ],
    prompt: "Enhance this photo by improving sharpness, reducing noise, correcting colors, and increasing overall quality while maintaining natural appearance",
    benefits: [
      {
        title: "Restore Old Photos",
        description: "Bring new life to vintage and damaged images",
        icon: "📸"
      },
      {
        title: "Professional Results",
        description: "Studio-quality enhancement in one click",
        icon: "🌟"
      },
      {
        title: "Smart Processing",
        description: "AI understands what makes photos look better",
        icon: "🧠"
      }
    ],
    examples: [
      {
        title: "Family Photos",
        description: "Restore and enhance precious memories"
      },
      {
        title: "Business Headshots",
        description: "Create professional-quality portraits"
      },
      {
        title: "Social Media",
        description: "Make your posts stand out with enhanced images"
      }
    ],
    seo: {
      title: "AI Photo Enhancer - Improve Image Quality Instantly | iley",
      description: "Enhance photo quality automatically with AI. Improve sharpness, reduce noise, and correct colors for professional results.",
      keywords: ["photo enhancer", "image enhancement", "AI photo improvement", "upscale images", "photo quality"]
    }
  },
  {
    id: "portrait-generator",
    slug: "portrait-generator",
    title: "AI Portrait Generator",
    subtitle: "Create stunning AI-generated portraits",
    description: "Generate professional portraits and headshots using advanced AI technology.",
    heroTitle: "Generate Perfect Portraits",
    heroSubtitle: "Create professional headshots and artistic portraits with AI",
    features: [
      "Multiple artistic styles",
      "Professional headshot generation",
      "Customizable features and poses",
      "High-resolution output"
    ],
    prompt: "Generate a professional portrait with natural lighting, clean background, and photorealistic quality suitable for business use",
    benefits: [
      {
        title: "Professional Headshots",
        description: "Business-ready portraits without a photographer",
        icon: "👔"
      },
      {
        title: "Artistic Styles",
        description: "Choose from various artistic and realistic styles",
        icon: "🎨"
      },
      {
        title: "Instant Results",
        description: "Get professional portraits in minutes",
        icon: "⏱️"
      }
    ],
    examples: [
      {
        title: "LinkedIn Profiles",
        description: "Professional headshots for career advancement"
      },
      {
        title: "Creative Projects",
        description: "Artistic portraits for personal branding"
      },
      {
        title: "Team Photos",
        description: "Consistent professional images for organizations"
      }
    ],
    seo: {
      title: "AI Portrait Generator - Create Professional Headshots | iley",
      description: "Generate professional portraits and headshots with AI. Perfect for LinkedIn, business profiles, and creative projects.",
      keywords: ["AI portrait generator", "headshot generator", "professional portraits", "AI headshots", "portrait creation"]
    }
  },
  {
    id: "product-photography",
    slug: "product-photography",
    title: "AI Product Photography",
    subtitle: "Create stunning product images for e-commerce",
    description: "Generate professional product photos with perfect lighting, backgrounds, and composition.",
    heroTitle: "Perfect Product Photos",
    heroSubtitle: "Create e-commerce ready product images that sell",
    features: [
      "Studio-quality lighting",
      "Multiple background options",
      "360-degree product views",
      "Lifestyle scene generation"
    ],
    prompt: "Create a professional product photo with studio lighting, clean white background, and optimal composition for e-commerce listing",
    benefits: [
      {
        title: "Increase Sales",
        description: "Professional photos convert 30% better",
        icon: "📈"
      },
      {
        title: "Cost Effective",
        description: "No need for expensive photo studios",
        icon: "💰"
      },
      {
        title: "Consistent Style",
        description: "Maintain brand consistency across all products",
        icon: "🎯"
      }
    ],
    examples: [
      {
        title: "Amazon Listings",
        description: "High-converting product images for marketplaces"
      },
      {
        title: "Shopify Stores",
        description: "Professional photos for online stores"
      },
      {
        title: "Social Commerce",
        description: "Eye-catching images for social media sales"
      }
    ],
    seo: {
      title: "AI Product Photography - E-commerce Photo Generator | iley",
      description: "Create professional product photos for e-commerce with AI. Studio-quality images that increase sales and conversions.",
      keywords: ["product photography", "e-commerce photos", "AI product images", "online store photos", "product photo generator"]
    }
  },
  {
    id: "logo-maker",
    slug: "logo-maker",
    title: "AI Logo Maker",
    subtitle: "Design professional logos with artificial intelligence",
    description: "Create unique, professional logos for your business using AI-powered design technology.",
    heroTitle: "Create Your Perfect Logo",
    heroSubtitle: "Professional logo design powered by artificial intelligence",
    features: [
      "Unlimited design variations",
      "Vector and raster formats",
      "Brand guideline generation",
      "Commercial use license"
    ],
    prompt: "Design a modern, professional logo that is memorable, scalable, and suitable for business use across all media",
    benefits: [
      {
        title: "Professional Design",
        description: "Designer-quality logos without the cost",
        icon: "🏆"
      },
      {
        title: "Instant Creation",
        description: "Get your logo in minutes, not days",
        icon: "🚀"
      },
      {
        title: "Unlimited Revisions",
        description: "Refine until it's perfect",
        icon: "🔄"
      }
    ],
    examples: [
      {
        title: "Startup Branding",
        description: "Professional identity for new businesses"
      },
      {
        title: "Rebranding Projects",
        description: "Fresh looks for established companies"
      },
      {
        title: "Personal Brands",
        description: "Unique logos for individuals and creators"
      }
    ],
    seo: {
      title: "AI Logo Maker - Professional Logo Design Generator | iley",
      description: "Create professional logos with AI. Design unique, memorable logos for your business in minutes with our AI logo maker.",
      keywords: ["logo maker", "AI logo design", "logo generator", "business logo", "professional logo creation"]
    }
  },
  {
    id: "image-upscaler",
    slug: "image-upscaler",
    title: "AI Image Upscaler",
    subtitle: "Increase image resolution without quality loss",
    description: "Upscale images to higher resolutions while preserving and enhancing detail quality.",
    heroTitle: "Upscale Images Perfectly",
    heroSubtitle: "Increase resolution 4x while maintaining crisp, clear details",
    features: [
      "4x resolution increase",
      "Detail preservation and enhancement",
      "Batch processing capability",
      "Multiple output formats"
    ],
    prompt: "Upscale this image to 4x resolution while preserving all details, enhancing sharpness, and maintaining natural appearance",
    benefits: [
      {
        title: "Print Ready",
        description: "Transform images for large format printing",
        icon: "🖨️"
      },
      {
        title: "AI Enhancement",
        description: "Smart upscaling that adds realistic detail",
        icon: "🔍"
      },
      {
        title: "Preserve Quality",
        description: "No pixelation or blurriness",
        icon: "✨"
      }
    ],
    examples: [
      {
        title: "Print Media",
        description: "Prepare images for high-resolution printing"
      },
      {
        title: "Digital Displays",
        description: "Crisp images for large screens and billboards"
      },
      {
        title: "Archive Restoration",
        description: "Enhance old photos for preservation"
      }
    ],
    seo: {
      title: "AI Image Upscaler - Increase Resolution Without Quality Loss | iley",
      description: "Upscale images to higher resolutions with AI. Increase image size 4x while preserving quality and detail.",
      keywords: ["image upscaler", "AI upscaling", "increase resolution", "enhance image quality", "photo enlarger"]
    }
  },
  {
    id: "art-generator",
    slug: "art-generator",
    title: "AI Art Generator",
    subtitle: "Create unique digital artwork with artificial intelligence",
    description: "Generate original digital art, illustrations, and creative visuals using AI technology.",
    heroTitle: "Generate Stunning Art",
    heroSubtitle: "Create unique digital artwork and illustrations with AI",
    features: [
      "Multiple artistic styles",
      "Custom composition control",
      "High-resolution artwork",
      "Commercial licensing available"
    ],
    prompt: "Create an original digital artwork with vibrant colors, dynamic composition, and artistic flair suitable for modern digital media",
    benefits: [
      {
        title: "Unique Creations",
        description: "Every piece is completely original",
        icon: "🎨"
      },
      {
        title: "Style Variety",
        description: "From abstract to photorealistic",
        icon: "🌈"
      },
      {
        title: "Instant Inspiration",
        description: "Overcome creative blocks instantly",
        icon: "💡"
      }
    ],
    examples: [
      {
        title: "Digital Marketing",
        description: "Eye-catching visuals for campaigns"
      },
      {
        title: "Wall Art",
        description: "Custom artwork for homes and offices"
      },
      {
        title: "Book Covers",
        description: "Unique illustrations for publications"
      }
    ],
    seo: {
      title: "AI Art Generator - Create Digital Artwork Instantly | iley",
      description: "Generate unique digital art and illustrations with AI. Create original artwork for marketing, decoration, and creative projects.",
      keywords: ["AI art generator", "digital art creation", "AI illustration", "artwork generator", "creative AI"]
    }
  },
  {
    id: "style-transfer",
    slug: "style-transfer",
    title: "AI Style Transfer",
    subtitle: "Apply artistic styles to any image",
    description: "Transform photos by applying the style of famous artworks or create custom artistic effects.",
    heroTitle: "Transform with Style",
    heroSubtitle: "Apply artistic styles from masters to your photos",
    features: [
      "Famous artwork styles",
      "Custom style creation",
      "Adjustable style intensity",
      "Multiple output variations"
    ],
    prompt: "Apply an artistic style to this image while preserving the original subject and composition, creating a beautiful artistic interpretation",
    benefits: [
      {
        title: "Artistic Transformation",
        description: "Turn photos into masterpieces",
        icon: "🖼️"
      },
      {
        title: "Style Library",
        description: "Hundreds of artistic styles to choose from",
        icon: "📚"
      },
      {
        title: "Custom Effects",
        description: "Create your own unique artistic filters",
        icon: "🎭"
      }
    ],
    examples: [
      {
        title: "Social Media",
        description: "Stand out with artistic photo posts"
      },
      {
        title: "Home Decor",
        description: "Create personalized artistic prints"
      },
      {
        title: "Gift Creation",
        description: "Transform memories into art gifts"
      }
    ],
    seo: {
      title: "AI Style Transfer - Apply Artistic Styles to Photos | iley",
      description: "Transform photos with AI style transfer. Apply famous artwork styles to create unique artistic images.",
      keywords: ["style transfer", "AI art filter", "artistic photo effects", "neural style transfer", "photo to art"]
    }
  },
  {
    id: "object-remover",
    slug: "object-remover",
    title: "AI Object Remover",
    subtitle: "Remove unwanted objects from photos seamlessly",
    description: "Intelligently remove people, objects, or elements from images with perfect background filling.",
    heroTitle: "Remove Anything Seamlessly",
    heroSubtitle: "Delete unwanted objects and people from photos perfectly",
    features: [
      "Intelligent object detection",
      "Seamless background filling",
      "Batch object removal",
      "Preserve image quality"
    ],
    prompt: "Remove the specified object from this image and intelligently fill the background to create a natural, seamless result",
    benefits: [
      {
        title: "Perfect Cleanup",
        description: "No trace of removed objects",
        icon: "🧹"
      },
      {
        title: "Smart Filling",
        description: "AI recreates missing background perfectly",
        icon: "🧠"
      },
      {
        title: "Save Photos",
        description: "Rescue photos with unwanted elements",
        icon: "💾"
      }
    ],
    examples: [
      {
        title: "Travel Photos",
        description: "Remove tourists from vacation shots"
      },
      {
        title: "Real Estate",
        description: "Clean up property photos"
      },
      {
        title: "Event Photography",
        description: "Remove unwanted guests or objects"
      }
    ],
    seo: {
      title: "AI Object Remover - Remove Unwanted Objects from Photos | iley",
      description: "Remove objects, people, and unwanted elements from photos with AI. Seamless background filling for perfect results.",
      keywords: ["object remover", "remove objects from photos", "AI photo cleanup", "unwanted object removal", "photo editing"]
    }
  },
  {
    id: "face-enhancer",
    slug: "face-enhancer",
    title: "AI Face Enhancer",
    subtitle: "Enhance facial features and skin quality",
    description: "Improve facial appearance with natural-looking enhancements and skin smoothing.",
    heroTitle: "Enhance Faces Naturally",
    heroSubtitle: "Perfect portraits with AI-powered facial enhancement",
    features: [
      "Natural skin smoothing",
      "Feature enhancement",
      "Blemish removal",
      "Professional retouching"
    ],
    prompt: "Enhance the facial features in this photo with natural skin smoothing, blemish removal, and subtle improvements while maintaining authenticity",
    benefits: [
      {
        title: "Natural Results",
        description: "Enhancements that look completely natural",
        icon: "🌿"
      },
      {
        title: "Professional Quality",
        description: "Studio-level retouching at home",
        icon: "💄"
      },
      {
        title: "Preserve Identity",
        description: "Enhance while keeping your unique look",
        icon: "👤"
      }
    ],
    examples: [
      {
        title: "Profile Photos",
        description: "Perfect headshots for social media"
      },
      {
        title: "Dating Apps",
        description: "Attractive photos that still look like you"
      },
      {
        title: "Professional Portraits",
        description: "Polished images for business use"
      }
    ],
    seo: {
      title: "AI Face Enhancer - Natural Facial Enhancement | iley",
      description: "Enhance facial features naturally with AI. Smooth skin, remove blemishes, and improve portraits while maintaining authenticity.",
      keywords: ["face enhancer", "AI facial enhancement", "skin smoothing", "portrait retouching", "face improvement"]
    }
  },
  {
    id: "color-palette-generator",
    slug: "color-palette-generator",
    title: "AI Color Palette Generator",
    subtitle: "Generate beautiful color schemes from images",
    description: "Extract and generate harmonious color palettes from any image for design projects.",
    heroTitle: "Extract Perfect Colors",
    heroSubtitle: "Generate beautiful color palettes from any image",
    features: [
      "Automatic color extraction",
      "Harmonious palette creation",
      "Multiple palette variations",
      "Export in various formats"
    ],
    prompt: "Analyze this image and generate a harmonious color palette that captures the mood and aesthetic, suitable for design projects",
    benefits: [
      {
        title: "Design Harmony",
        description: "Perfect color combinations every time",
        icon: "🎨"
      },
      {
        title: "Instant Inspiration",
        description: "Find colors from any source image",
        icon: "💡"
      },
      {
        title: "Professional Palettes",
        description: "Designer-quality color schemes",
        icon: "🏆"
      }
    ],
    examples: [
      {
        title: "Web Design",
        description: "Create cohesive website color schemes"
      },
      {
        title: "Branding Projects",
        description: "Develop brand color palettes"
      },
      {
        title: "Interior Design",
        description: "Plan room color combinations"
      }
    ],
    seo: {
      title: "AI Color Palette Generator - Extract Colors from Images | iley",
      description: "Generate beautiful color palettes from images with AI. Perfect for design projects, branding, and creative work.",
      keywords: ["color palette generator", "extract colors from image", "AI color scheme", "design colors", "palette creation"]
    }
  },
  {
    id: "texture-generator",
    slug: "texture-generator",
    title: "AI Texture Generator",
    subtitle: "Create seamless textures and patterns",
    description: "Generate high-quality textures and patterns for 3D modeling, design, and creative projects.",
    heroTitle: "Generate Perfect Textures",
    heroSubtitle: "Create seamless textures and patterns for any project",
    features: [
      "Seamless tiling patterns",
      "Various material types",
      "High-resolution output",
      "Commercial use licensing"
    ],
    prompt: "Generate a seamless, high-quality texture that tiles perfectly and captures realistic material properties suitable for professional use",
    benefits: [
      {
        title: "Seamless Tiling",
        description: "Perfect patterns that repeat flawlessly",
        icon: "🔄"
      },
      {
        title: "Material Variety",
        description: "Wood, metal, fabric, stone, and more",
        icon: "🏗️"
      },
      {
        title: "High Quality",
        description: "Professional-grade texture resolution",
        icon: "🔍"
      }
    ],
    examples: [
      {
        title: "3D Modeling",
        description: "Realistic materials for 3D scenes"
      },
      {
        title: "Game Development",
        description: "Custom textures for game assets"
      },
      {
        title: "Graphic Design",
        description: "Background textures for designs"
      }
    ],
    seo: {
      title: "AI Texture Generator - Create Seamless Patterns | iley",
      description: "Generate high-quality seamless textures and patterns with AI. Perfect for 3D modeling, game development, and design.",
      keywords: ["texture generator", "seamless patterns", "AI textures", "material generation", "pattern creation"]
    }
  },
  {
    id: "cartoon-converter",
    slug: "cartoon-converter",
    title: "AI Cartoon Converter",
    subtitle: "Turn photos into cartoon illustrations",
    description: "Transform realistic photos into cartoon-style illustrations with various artistic styles.",
    heroTitle: "Cartoonify Your Photos",
    heroSubtitle: "Transform photos into fun cartoon illustrations",
    features: [
      "Multiple cartoon styles",
      "Adjustable stylization levels",
      "Preserve facial features",
      "Batch processing available"
    ],
    prompt: "Convert this photo into a cartoon illustration with vibrant colors, simplified features, and an artistic animated style while preserving recognizable characteristics",
    benefits: [
      {
        title: "Fun Transformations",
        description: "Turn ordinary photos into playful art",
        icon: "😄"
      },
      {
        title: "Multiple Styles",
        description: "Choose from various cartoon aesthetics",
        icon: "🎭"
      },
      {
        title: "Keep Identity",
        description: "Maintain recognizable features",
        icon: "👥"
      }
    ],
    examples: [
      {
        title: "Avatar Creation",
        description: "Cartoon profile pictures and avatars"
      },
      {
        title: "Gift Ideas",
        description: "Unique cartoon portraits as gifts"
      },
      {
        title: "Social Media",
        description: "Eye-catching cartoon posts"
      }
    ],
    seo: {
      title: "AI Cartoon Converter - Turn Photos into Cartoons | iley",
      description: "Convert photos to cartoon illustrations with AI. Create fun animated-style images from realistic photos.",
      keywords: ["cartoon converter", "photo to cartoon", "AI cartoon filter", "cartoon illustration", "animated photo effect"]
    }
  },
  {
    id: "watermark-remover",
    slug: "watermark-remover",
    title: "AI Watermark Remover",
    subtitle: "Remove watermarks and logos seamlessly",
    description: "Intelligently remove watermarks, logos, and text overlays from images while preserving quality.",
    heroTitle: "Remove Watermarks Perfectly",
    heroSubtitle: "Clean images by removing watermarks and overlays",
    features: [
      "Intelligent watermark detection",
      "Seamless content filling",
      "Preserve image quality",
      "Batch processing support"
    ],
    prompt: "Remove all watermarks and text overlays from this image while intelligently filling the background to create a clean, natural result",
    benefits: [
      {
        title: "Clean Results",
        description: "No trace of removed watermarks",
        icon: "🧽"
      },
      {
        title: "Smart Restoration",
        description: "AI reconstructs missing image areas",
        icon: "🔧"
      },
      {
        title: "Quality Preservation",
        description: "Maintain original image sharpness",
        icon: "💎"
      }
    ],
    examples: [
      {
        title: "Stock Photos",
        description: "Clean preview watermarks from images"
      },
      {
        title: "Archival Work",
        description: "Restore old photos with stamps"
      },
      {
        title: "Content Creation",
        description: "Prepare images for professional use"
      }
    ],
    seo: {
      title: "AI Watermark Remover - Remove Logos and Text Overlays | iley",
      description: "Remove watermarks and logos from images with AI. Clean, seamless results that preserve image quality.",
      keywords: ["watermark remover", "remove watermarks", "logo removal", "text overlay removal", "clean images"]
    }
  },
  {
    id: "image-colorizer",
    slug: "image-colorizer",
    title: "AI Image Colorizer",
    subtitle: "Add realistic colors to black and white photos",
    description: "Bring old black and white photos to life with realistic, historically accurate colorization.",
    heroTitle: "Bring Photos to Life",
    heroSubtitle: "Add realistic colors to black and white photographs",
    features: [
      "Historically accurate colors",
      "Natural skin tone rendering",
      "Intelligent object recognition",
      "Adjustable color intensity"
    ],
    prompt: "Colorize this black and white photo with realistic, natural colors that are historically appropriate and enhance the original mood",
    benefits: [
      {
        title: "Restore Memories",
        description: "Bring vintage photos into the modern era",
        icon: "📷"
      },
      {
        title: "Historical Accuracy",
        description: "Colors based on historical knowledge",
        icon: "📚"
      },
      {
        title: "Natural Results",
        description: "Realistic colorization that looks authentic",
        icon: "🌈"
      }
    ],
    examples: [
      {
        title: "Family Archives",
        description: "Colorize precious family memories"
      },
      {
        title: "Historical Documents",
        description: "Bring historical photos to life"
      },
      {
        title: "Art Restoration",
        description: "Enhance vintage artwork and photos"
      }
    ],
    seo: {
      title: "AI Image Colorizer - Add Color to Black and White Photos | iley",
      description: "Colorize black and white photos with AI. Add realistic, historically accurate colors to vintage photographs.",
      keywords: ["image colorizer", "colorize black and white photos", "AI photo colorization", "vintage photo restoration", "add color to photos"]
    }
  },
  {
    id: "sketch-to-image",
    slug: "sketch-to-image",
    title: "AI Sketch to Image",
    subtitle: "Turn sketches into realistic images",
    description: "Transform hand-drawn sketches and drawings into photorealistic images or detailed illustrations.",
    heroTitle: "Sketches to Reality",
    heroSubtitle: "Transform drawings into photorealistic images",
    features: [
      "Sketch recognition and interpretation",
      "Multiple output styles",
      "Color and detail enhancement",
      "Maintain original composition"
    ],
    prompt: "Transform this sketch into a detailed, realistic image while preserving the original composition and adding appropriate colors, textures, and lighting",
    benefits: [
      {
        title: "Bring Ideas to Life",
        description: "See your concepts as realistic images",
        icon: "💭"
      },
      {
        title: "Design Iteration",
        description: "Quickly visualize design concepts",
        icon: "🔄"
      },
      {
        title: "Creative Freedom",
        description: "From simple sketches to detailed art",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Product Design",
        description: "Visualize product concepts from sketches"
      },
      {
        title: "Architecture",
        description: "Transform building sketches to renderings"
      },
      {
        title: "Character Design",
        description: "Bring character drawings to life"
      }
    ],
    seo: {
      title: "AI Sketch to Image - Turn Drawings into Photos | iley",
      description: "Transform sketches and drawings into realistic images with AI. Convert hand-drawn concepts to photorealistic visuals.",
      keywords: ["sketch to image", "drawing to photo", "AI sketch converter", "concept visualization", "sketch enhancement"]
    }
  },
  {
    id: "image-combiner",
    slug: "image-combiner",
    title: "AI Image Combiner",
    subtitle: "Seamlessly merge multiple images",
    description: "Combine multiple images into cohesive compositions with intelligent blending and matching.",
    heroTitle: "Merge Images Perfectly",
    heroSubtitle: "Combine multiple photos into seamless compositions",
    features: [
      "Intelligent image blending",
      "Perspective and lighting matching",
      "Seamless edge transitions",
      "Multiple composition layouts"
    ],
    prompt: "Combine these images into a cohesive composition with matching lighting, perspective, and seamless blending between elements",
    benefits: [
      {
        title: "Perfect Blending",
        description: "No visible seams or mismatches",
        icon: "🔗"
      },
      {
        title: "Smart Matching",
        description: "AI adjusts lighting and perspective",
        icon: "🎯"
      },
      {
        title: "Creative Freedom",
        description: "Build impossible or fantastic scenes",
        icon: "🌟"
      }
    ],
    examples: [
      {
        title: "Fantasy Scenes",
        description: "Create imaginative compositions"
      },
      {
        title: "Product Mockups",
        description: "Combine products with lifestyle scenes"
      },
      {
        title: "Event Collages",
        description: "Merge photos from special occasions"
      }
    ],
    seo: {
      title: "AI Image Combiner - Merge Photos Seamlessly | iley",
      description: "Combine multiple images with AI. Create seamless compositions with intelligent blending and lighting matching.",
      keywords: ["image combiner", "merge photos", "combine images", "AI photo blending", "image composition"]
    }
  },
  {
    id: "lighting-enhancer",
    slug: "lighting-enhancer",
    title: "AI Lighting Enhancer",
    subtitle: "Perfect lighting and exposure in any photo",
    description: "Automatically adjust lighting, exposure, and shadows to create perfectly lit photographs.",
    heroTitle: "Perfect Every Photo's Lighting",
    heroSubtitle: "Professional lighting adjustments with artificial intelligence",
    features: [
      "Automatic exposure correction",
      "Shadow and highlight recovery",
      "Natural lighting enhancement",
      "HDR-style processing"
    ],
    prompt: "Enhance the lighting in this photo by adjusting exposure, recovering shadows and highlights, and creating natural, well-balanced illumination",
    benefits: [
      {
        title: "Rescue Dark Photos",
        description: "Brighten underexposed images naturally",
        icon: "🔆"
      },
      {
        title: "Professional Results",
        description: "Studio-quality lighting adjustment",
        icon: "📸"
      },
      {
        title: "Preserve Detail",
        description: "Enhance without losing image information",
        icon: "🔍"
      }
    ],
    examples: [
      {
        title: "Indoor Photography",
        description: "Fix poorly lit interior shots"
      },
      {
        title: "Outdoor Adventures",
        description: "Balance harsh sunlight and shadows"
      },
      {
        title: "Event Photos",
        description: "Improve lighting in challenging conditions"
      }
    ],
    seo: {
      title: "AI Lighting Enhancer - Perfect Photo Exposure | iley",
      description: "Enhance photo lighting automatically with AI. Fix exposure, recover shadows, and create perfectly lit images.",
      keywords: ["lighting enhancer", "photo exposure correction", "AI lighting adjustment", "shadow recovery", "photo brightening"]
    }
  },
  {
    id: "panorama-creator",
    slug: "panorama-creator",
    title: "AI Panorama Creator",
    subtitle: "Create stunning panoramic images",
    description: "Stitch multiple photos together to create seamless, wide-angle panoramic views.",
    heroTitle: "Create Breathtaking Panoramas",
    heroSubtitle: "Stitch photos into seamless wide-angle masterpieces",
    features: [
      "Automatic image alignment",
      "Seamless stitching technology",
      "Perspective correction",
      "Multiple projection formats"
    ],
    prompt: "Stitch these photos together into a seamless panoramic image with perfect alignment, exposure matching, and natural perspective",
    benefits: [
      {
        title: "Capture More",
        description: "Show the full scope of scenic views",
        icon: "🌄"
      },
      {
        title: "Perfect Alignment",
        description: "AI ensures seamless photo connections",
        icon: "🔗"
      },
      {
        title: "Professional Quality",
        description: "Gallery-worthy panoramic images",
        icon: "🖼️"
      }
    ],
    examples: [
      {
        title: "Landscape Photography",
        description: "Capture sweeping natural vistas"
      },
      {
        title: "Real Estate",
        description: "Show entire rooms or property views"
      },
      {
        title: "Travel Documentation",
        description: "Preserve complete scenic memories"
      }
    ],
    seo: {
      title: "AI Panorama Creator - Stitch Photos into Panoramas | iley",
      description: "Create stunning panoramic images with AI. Automatically stitch multiple photos into seamless wide-angle views.",
      keywords: ["panorama creator", "photo stitching", "AI panorama", "wide-angle photos", "panoramic images"]
    }
  },
  {
    id: "vintage-filter",
    slug: "vintage-filter",
    title: "AI Vintage Filter",
    subtitle: "Add authentic vintage effects to modern photos",
    description: "Transform modern photos with authentic vintage and retro effects from different eras.",
    heroTitle: "Travel Back in Time",
    heroSubtitle: "Add authentic vintage effects to your photos",
    features: [
      "Era-specific vintage styles",
      "Film grain and aging effects",
      "Color grading presets",
      "Adjustable intensity levels"
    ],
    prompt: "Apply authentic vintage effects to this photo, including period-appropriate color grading, film grain, and aging characteristics",
    benefits: [
      {
        title: "Authentic Aesthetics",
        description: "True-to-era vintage characteristics",
        icon: "📼"
      },
      {
        title: "Nostalgic Appeal",
        description: "Create emotionally engaging images",
        icon: "💭"
      },
      {
        title: "Artistic Style",
        description: "Stand out with timeless aesthetics",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Social Media",
        description: "Vintage-style posts that get attention"
      },
      {
        title: "Wedding Photography",
        description: "Romantic, timeless wedding photos"
      },
      {
        title: "Brand Marketing",
        description: "Nostalgic campaigns that resonate"
      }
    ],
    seo: {
      title: "AI Vintage Filter - Add Retro Effects to Photos | iley",
      description: "Transform photos with authentic vintage filters. Add retro effects, film grain, and period-appropriate styling with AI.",
      keywords: ["vintage filter", "retro photo effects", "AI vintage style", "film grain effect", "nostalgic photo filter"]
    }
  },
  {
    id: "lifestyle-product-scene",
    slug: "lifestyle-product-scene",
    title: "Lifestyle Product Scene",
    subtitle: "Create product lifestyle images from simple object photos",
    description: "Transform basic product photos into engaging lifestyle scenes that show products in real-world contexts.",
    heroTitle: "Bring Products to Life",
    heroSubtitle: "Create compelling lifestyle scenes for better marketing",
    features: [
      "Real-world context placement",
      "Natural lighting integration",
      "Lifestyle scene generation",
      "Brand storytelling enhancement"
    ],
    prompt: "Place this product in a realistic lifestyle setting that showcases its use and appeals to the target audience with natural lighting and composition",
    benefits: [
      {
        title: "Better Conversions",
        description: "Lifestyle images convert 40% better than plain product shots",
        icon: "📈"
      },
      {
        title: "Brand Storytelling",
        description: "Show products in their natural environment",
        icon: "📖"
      },
      {
        title: "Emotional Connection",
        description: "Help customers visualize product use",
        icon: "💫"
      }
    ],
    examples: [
      {
        title: "Fashion Marketing",
        description: "Show clothing in real-world scenarios"
      },
      {
        title: "Tech Products",
        description: "Demonstrate gadgets in daily life"
      },
      {
        title: "Home Goods",
        description: "Display items in beautiful home settings"
      }
    ],
    seo: {
      title: "Lifestyle Product Photography - Create Marketing Scenes | iley",
      description: "Transform product photos into engaging lifestyle scenes. Create compelling marketing images that show products in real-world contexts.",
      keywords: ["lifestyle product photography", "product marketing images", "lifestyle scenes", "product in context", "marketing photography"]
    }
  },
  {
    id: "color-variation-mockup",
    slug: "color-variation-mockup",
    title: "Color Variation Generator",
    subtitle: "Quickly generate color variations for product catalogs",
    description: "Create multiple color variants of products instantly while maintaining realistic textures and lighting.",
    heroTitle: "Infinite Color Options",
    heroSubtitle: "Generate product color variants instantly",
    features: [
      "Maintain texture realism",
      "Preserve lighting and shadows",
      "Multiple color combinations",
      "Batch color processing"
    ],
    prompt: "Change the color of this product while maintaining all original textures, reflections, and lighting for a realistic appearance",
    benefits: [
      {
        title: "Catalog Efficiency",
        description: "Create entire color ranges without reshooting",
        icon: "🎨"
      },
      {
        title: "Cost Savings",
        description: "No need for physical samples",
        icon: "💰"
      },
      {
        title: "Customer Choice",
        description: "Show all available options instantly",
        icon: "🔄"
      }
    ],
    examples: [
      {
        title: "Fashion Retail",
        description: "Show clothes in all available colors"
      },
      {
        title: "Car Dealerships",
        description: "Display vehicles in every paint option"
      },
      {
        title: "Furniture Stores",
        description: "Showcase items in different finishes"
      }
    ],
    seo: {
      title: "Product Color Variation Generator - Create Color Options | iley",
      description: "Generate realistic color variations of products instantly. Perfect for e-commerce catalogs and product visualization.",
      keywords: ["color variation generator", "product colors", "e-commerce variants", "color mockups", "product visualization"]
    }
  },
  {
    id: "branded-social-banner",
    slug: "branded-social-banner",
    title: "Social Media Banner Creator",
    subtitle: "Generate high-converting ad banners with legible text",
    description: "Create professional social media banners and ad creatives with perfect text placement and brand consistency.",
    heroTitle: "Create Scroll-Stopping Banners",
    heroSubtitle: "Professional social media graphics that convert",
    features: [
      "Text legibility optimization",
      "Brand color integration",
      "Multiple platform formats",
      "High-conversion layouts"
    ],
    prompt: "Create a professional social media banner with clear, readable text and eye-catching design that drives engagement and conversions",
    benefits: [
      {
        title: "Higher Engagement",
        description: "Professional designs get 3x more clicks",
        icon: "📊"
      },
      {
        title: "Brand Consistency",
        description: "Maintain visual identity across platforms",
        icon: "🎯"
      },
      {
        title: "Quick Creation",
        description: "Professional banners in minutes",
        icon: "⚡"
      }
    ],
    examples: [
      {
        title: "Product Launches",
        description: "Announce new products with impact"
      },
      {
        title: "Sales Promotions",
        description: "Create urgency with compelling designs"
      },
      {
        title: "Event Marketing",
        description: "Drive attendance with attractive banners"
      }
    ],
    seo: {
      title: "Social Media Banner Creator - Professional Ad Graphics | iley",
      description: "Create high-converting social media banners and ad graphics. Professional designs with perfect text placement and brand consistency.",
      keywords: ["social media banner", "ad banner creator", "social graphics", "marketing banners", "promotional graphics"]
    }
  },
  {
    id: "3d-packaging-design",
    slug: "3d-packaging-design",
    title: "3D Packaging Visualizer",
    subtitle: "Visualize new 3D product packaging mockups",
    description: "Create realistic 3D packaging mockups and visualizations for product development and marketing.",
    heroTitle: "Visualize Perfect Packaging",
    heroSubtitle: "3D mockups for product packaging design",
    features: [
      "Photorealistic 3D rendering",
      "Multiple packaging types",
      "Environmental lighting",
      "Marketing-ready visuals"
    ],
    prompt: "Generate a photorealistic 3D mockup of product packaging that showcases design elements clearly with professional lighting and presentation",
    benefits: [
      {
        title: "Pre-Production Testing",
        description: "See packaging before manufacturing",
        icon: "🔍"
      },
      {
        title: "Marketing Ready",
        description: "Use mockups for promotional materials",
        icon: "📢"
      },
      {
        title: "Cost Effective",
        description: "No need for physical prototypes",
        icon: "💡"
      }
    ],
    examples: [
      {
        title: "Consumer Goods",
        description: "Visualize product boxes and containers"
      },
      {
        title: "Food Packaging",
        description: "Show labels and wrapper designs"
      },
      {
        title: "Electronics",
        description: "Present tech product packaging"
      }
    ],
    seo: {
      title: "3D Packaging Design Visualizer - Product Mockups | iley",
      description: "Create photorealistic 3D packaging mockups and visualizations. Perfect for product development and marketing materials.",
      keywords: ["3D packaging design", "packaging mockup", "product packaging visualization", "3D mockups", "packaging preview"]
    }
  },
  {
    id: "consistent-character",
    slug: "consistent-character",
    title: "Character Consistency Tool",
    subtitle: "Maintain character identity across diverse scenes",
    description: "Keep AI-generated characters consistent across different scenes and situations, perfect for storytelling and brand mascots.",
    heroTitle: "Consistent Characters Everywhere",
    heroSubtitle: "Maintain character identity across any scene",
    features: [
      "Facial feature consistency",
      "Cross-scene character matching",
      "Style preservation",
      "Expression variation"
    ],
    prompt: "Place this character in a new scene while maintaining exact facial features, proportions, and distinctive characteristics for perfect consistency",
    benefits: [
      {
        title: "Brand Characters",
        description: "Consistent mascots across all content",
        icon: "🎭"
      },
      {
        title: "Storytelling",
        description: "Characters that audiences recognize",
        icon: "📚"
      },
      {
        title: "Marketing Unity",
        description: "Cohesive character-based campaigns",
        icon: "🎯"
      }
    ],
    examples: [
      {
        title: "AI Influencers",
        description: "Consistent virtual personalities"
      },
      {
        title: "Brand Mascots",
        description: "Reliable character representation"
      },
      {
        title: "Story Characters",
        description: "Consistent heroes and protagonists"
      }
    ],
    seo: {
      title: "AI Character Consistency - Maintain Identity Across Scenes | iley",
      description: "Keep AI characters consistent across different scenes. Perfect for storytelling, brand mascots, and content creation.",
      keywords: ["character consistency", "AI character", "consistent identity", "character recognition", "brand mascot"]
    }
  },
  {
    id: "virtual-outfit-tryon",
    slug: "virtual-outfit-tryon",
    title: "Virtual Outfit Try-On",
    subtitle: "Simulate virtual try-on for fashion e-commerce",
    description: "Allow customers to see how clothes look on them without physically trying them on.",
    heroTitle: "Try Before You Buy",
    heroSubtitle: "Virtual fashion fitting for perfect purchases",
    features: [
      "Realistic fabric draping",
      "Body shape adaptation",
      "Multiple clothing types",
      "Size visualization"
    ],
    prompt: "Show this person wearing the selected outfit with realistic fit, draping, and proportions while preserving their natural appearance",
    benefits: [
      {
        title: "Reduce Returns",
        description: "See fit before purchasing",
        icon: "📦"
      },
      {
        title: "Increase Confidence",
        description: "Know how clothes will look",
        icon: "✨"
      },
      {
        title: "Better Sales",
        description: "Customers buy with confidence",
        icon: "💰"
      }
    ],
    examples: [
      {
        title: "Online Fashion",
        description: "E-commerce virtual fitting rooms"
      },
      {
        title: "Personal Styling",
        description: "Test outfit combinations"
      },
      {
        title: "Fashion Apps",
        description: "Mobile try-on experiences"
      }
    ],
    seo: {
      title: "Virtual Outfit Try-On - AI Fashion Fitting | iley",
      description: "Try on clothes virtually with AI. See how outfits look before buying with realistic virtual fitting technology.",
      keywords: ["virtual try-on", "AI fashion fitting", "virtual clothing", "outfit simulator", "fashion technology"]
    }
  },
  {
    id: "career-transformation",
    slug: "career-transformation",
    title: "Career Transformation Visualizer",
    subtitle: "Visualize yourself in different professions",
    description: "See how you would look in various career roles and professional settings.",
    heroTitle: "Explore Your Career Potential",
    heroSubtitle: "Visualize yourself in any profession",
    features: [
      "Professional attire adaptation",
      "Industry-appropriate settings",
      "Realistic workplace environments",
      "Maintain personal identity"
    ],
    prompt: "Show this person in a professional setting appropriate for the specified career while maintaining their facial features and natural appearance",
    benefits: [
      {
        title: "Career Exploration",
        description: "Visualize potential career paths",
        icon: "🔍"
      },
      {
        title: "Professional Branding",
        description: "See yourself in various roles",
        icon: "👔"
      },
      {
        title: "Motivation Tool",
        description: "Inspire career development",
        icon: "🎯"
      }
    ],
    examples: [
      {
        title: "Students",
        description: "Explore future career options"
      },
      {
        title: "Career Changers",
        description: "Visualize new professional paths"
      },
      {
        title: "Personal Branding",
        description: "Create industry-specific profiles"
      }
    ],
    seo: {
      title: "Career Visualization Tool - See Yourself in Any Profession | iley",
      description: "Visualize yourself in different careers and professional settings. Explore career options with AI-powered transformation.",
      keywords: ["career visualization", "professional transformation", "career exploration", "job visualization", "professional imaging"]
    }
  },
  {
    id: "era-transformation",
    slug: "era-transformation",
    title: "Time Era Transformation",
    subtitle: "See yourself in different decades or historical eras",
    description: "Transform photos to show how you would look in different time periods and historical settings.",
    heroTitle: "Travel Through Time",
    heroSubtitle: "Experience yourself in any historical era",
    features: [
      "Period-accurate styling",
      "Historical fashion adaptation",
      "Era-appropriate backgrounds",
      "Authentic time period effects"
    ],
    prompt: "Transform this person to appear as if they lived in the specified historical era with period-appropriate clothing, styling, and setting",
    benefits: [
      {
        title: "Historical Fun",
        description: "Experience different time periods",
        icon: "🕰️"
      },
      {
        title: "Educational Tool",
        description: "Learn about historical fashion",
        icon: "📚"
      },
      {
        title: "Creative Projects",
        description: "Perfect for themed content",
        icon: "🎭"
      }
    ],
    examples: [
      {
        title: "Family History",
        description: "See ancestors' time periods"
      },
      {
        title: "Educational Content",
        description: "Historical period visualization"
      },
      {
        title: "Themed Events",
        description: "Period costume previews"
      }
    ],
    seo: {
      title: "Historical Era Transformation - Time Period Photo Effects | iley",
      description: "Transform photos to different historical eras. See yourself in any time period with authentic styling and settings.",
      keywords: ["era transformation", "historical photo effects", "time period filter", "vintage transformation", "period styling"]
    }
  },
  {
    id: "pose-expression-editor",
    slug: "pose-expression-editor",
    title: "Pose & Expression Editor",
    subtitle: "Adjust subject pose and facial expression naturally",
    description: "Modify poses and expressions in photos while maintaining natural appearance and authenticity.",
    heroTitle: "Perfect Every Pose",
    heroSubtitle: "Natural pose and expression adjustments",
    features: [
      "Natural pose modification",
      "Expression fine-tuning",
      "Body language adjustment",
      "Maintain photo realism"
    ],
    prompt: "Adjust the pose and expression of this person to be more natural and appealing while maintaining realistic body proportions and facial features",
    benefits: [
      {
        title: "Better Portraits",
        description: "Perfect pose in every photo",
        icon: "📸"
      },
      {
        title: "Natural Results",
        description: "Adjustments look completely authentic",
        icon: "🌿"
      },
      {
        title: "Professional Quality",
        description: "Studio-level pose perfection",
        icon: "⭐"
      }
    ],
    examples: [
      {
        title: "Portrait Photography",
        description: "Perfect poses for headshots"
      },
      {
        title: "Social Media",
        description: "Confident poses for profiles"
      },
      {
        title: "Professional Photos",
        description: "Ideal business portrait poses"
      }
    ],
    seo: {
      title: "AI Pose & Expression Editor - Perfect Portrait Adjustments | iley",
      description: "Adjust poses and expressions in photos naturally. Perfect portrait photography with AI-powered pose correction.",
      keywords: ["pose editor", "expression editor", "portrait adjustment", "AI pose correction", "photo pose enhancement"]
    }
  },
  {
    id: "group-photo-blending",
    slug: "group-photo-blending",
    title: "Group Photo Creator",
    subtitle: "Combine multiple people from separate photos",
    description: "Seamlessly blend people from different photos into natural-looking group compositions.",
    heroTitle: "Perfect Group Photos Always",
    heroSubtitle: "Combine people from separate photos naturally",
    features: [
      "Seamless person integration",
      "Lighting and shadow matching",
      "Natural group positioning",
      "Perspective correction"
    ],
    prompt: "Combine these people from separate photos into a natural group photo with matching lighting, shadows, and realistic positioning",
    benefits: [
      {
        title: "Never Miss Anyone",
        description: "Include everyone even if they weren't there",
        icon: "👥"
      },
      {
        title: "Perfect Timing",
        description: "Everyone looks their best",
        icon: "⏰"
      },
      {
        title: "Natural Results",
        description: "Groups that look completely real",
        icon: "✨"
      }
    ],
    examples: [
      {
        title: "Family Reunions",
        description: "Include distant family members"
      },
      {
        title: "Team Photos",
        description: "Combine remote and local employees"
      },
      {
        title: "Event Photography",
        description: "Perfect group shots from events"
      }
    ],
    seo: {
      title: "AI Group Photo Creator - Combine People Seamlessly | iley",
      description: "Create perfect group photos by combining people from separate images. Natural blending and lighting matching.",
      keywords: ["group photo creator", "combine people photos", "AI photo blending", "group photo editing", "photo composition"]
    }
  },
  {
    id: "hair-makeup-changer",
    slug: "hair-makeup-changer",
    title: "Hair & Makeup Transformer",
    subtitle: "Experiment with new hairstyles and makeup looks",
    description: "Try different hairstyles and makeup styles virtually before making real changes.",
    heroTitle: "Transform Your Look",
    heroSubtitle: "Try new hairstyles and makeup virtually",
    features: [
      "Realistic hair styling",
      "Natural makeup application",
      "Color and cut variations",
      "Professional beauty effects"
    ],
    prompt: "Change the hairstyle and apply makeup to this person while maintaining natural appearance and realistic beauty enhancement",
    benefits: [
      {
        title: "Risk-Free Testing",
        description: "Try looks before committing",
        icon: "🔄"
      },
      {
        title: "Style Inspiration",
        description: "Discover new looks for yourself",
        icon: "💡"
      },
      {
        title: "Professional Quality",
        description: "Salon-level visualization",
        icon: "💄"
      }
    ],
    examples: [
      {
        title: "Salon Consultations",
        description: "Preview cuts and colors"
      },
      {
        title: "Special Events",
        description: "Plan perfect looks for occasions"
      },
      {
        title: "Style Experimentation",
        description: "Try bold new looks safely"
      }
    ],
    seo: {
      title: "Virtual Hair & Makeup Transformer - Try New Looks | iley",
      description: "Experiment with hairstyles and makeup virtually. See how you look with different hair cuts, colors, and makeup styles.",
      keywords: ["virtual makeover", "hair style changer", "makeup simulator", "virtual beauty", "hairstyle preview"]
    }
  },
  {
    id: "comic-panel-creator",
    slug: "comic-panel-creator",
    title: "Comic Panel Creator",
    subtitle: "Design sequential art comic panels with accurate text",
    description: "Create professional comic book panels with speech bubbles, captions, and dynamic visual storytelling.",
    heroTitle: "Create Comic Masterpieces",
    heroSubtitle: "Professional comic panels with text and effects",
    features: [
      "Speech bubble integration",
      "Dynamic panel layouts",
      "Text legibility optimization",
      "Comic art styling"
    ],
    prompt: "Create a comic book panel with dramatic composition, clear text placement, and professional comic art styling suitable for storytelling",
    benefits: [
      {
        title: "Professional Comics",
        description: "Publishing-ready comic panels",
        icon: "📚"
      },
      {
        title: "Perfect Text",
        description: "Clear, readable speech and captions",
        icon: "💬"
      },
      {
        title: "Dynamic Storytelling",
        description: "Engaging visual narrative flow",
        icon: "🎭"
      }
    ],
    examples: [
      {
        title: "Webcomics",
        description: "Create engaging online comic series"
      },
      {
        title: "Graphic Novels",
        description: "Professional sequential art pages"
      },
      {
        title: "Educational Comics",
        description: "Learning content in comic format"
      }
    ],
    seo: {
      title: "Comic Panel Creator - Professional Sequential Art | iley",
      description: "Create professional comic book panels with speech bubbles and dynamic layouts. Perfect for webcomics and graphic novels.",
      keywords: ["comic panel creator", "sequential art", "comic book maker", "graphic novel panels", "webcomic creator"]
    }
  },
  {
    id: "surreal-fantasy-art",
    slug: "surreal-fantasy-art",
    title: "Surreal Fantasy Art Generator",
    subtitle: "Generate surreal dreamscape portraits and fantasy art",
    description: "Transform photos into otherworldly surreal art with dreamlike elements and fantasy aesthetics.",
    heroTitle: "Enter Dreamlike Worlds",
    heroSubtitle: "Surreal and fantasy art transformations",
    features: [
      "Dreamscape environments",
      "Fantasy creature integration",
      "Ethereal lighting effects",
      "Surreal composition elements"
    ],
    prompt: "Transform this into a surreal fantasy artwork with dreamlike elements, ethereal lighting, and mystical atmosphere that captures imagination",
    benefits: [
      {
        title: "Unique Art",
        description: "One-of-a-kind surreal creations",
        icon: "🌟"
      },
      {
        title: "Creative Expression",
        description: "Explore impossible visual concepts",
        icon: "🎨"
      },
      {
        title: "Fantasy Worlds",
        description: "Bring imaginary realms to life",
        icon: "🦄"
      }
    ],
    examples: [
      {
        title: "Album Covers",
        description: "Surreal artwork for music releases"
      },
      {
        title: "Book Illustrations",
        description: "Fantasy novel cover art"
      },
      {
        title: "Digital Art",
        description: "Unique pieces for galleries"
      }
    ],
    seo: {
      title: "Surreal Fantasy Art Generator - Dreamscape Transformations | iley",
      description: "Create surreal fantasy art and dreamscape portraits. Transform photos into otherworldly artistic masterpieces.",
      keywords: ["surreal art generator", "fantasy art creator", "dreamscape art", "ethereal portraits", "mystical art"]
    }
  },
  {
    id: "mythological-portrait",
    slug: "mythological-portrait",
    title: "Mythological Deity Portrait",
    subtitle: "Reimagine people as mythological deities or heroes",
    description: "Transform portraits into powerful mythological figures with divine attributes and celestial elements.",
    heroTitle: "Become a Divine Being",
    heroSubtitle: "Transform into mythological deities and heroes",
    features: [
      "Divine attribute integration",
      "Celestial lighting effects",
      "Mythological costume design",
      "Sacred symbol incorporation"
    ],
    prompt: "Transform this person into a majestic mythological deity with divine attributes, celestial lighting, and powerful symbolic elements",
    benefits: [
      {
        title: "Epic Transformations",
        description: "Become legendary mythological figures",
        icon: "⚡"
      },
      {
        title: "Cultural Exploration",
        description: "Explore diverse mythological traditions",
        icon: "🌍"
      },
      {
        title: "Artistic Power",
        description: "Create awe-inspiring portrait art",
        icon: "👑"
      }
    ],
    examples: [
      {
        title: "Personal Art",
        description: "Divine versions of yourself"
      },
      {
        title: "Character Design",
        description: "Mythological game characters"
      },
      {
        title: "Fantasy Portraits",
        description: "Epic deity artwork"
      }
    ],
    seo: {
      title: "Mythological Portrait Generator - Divine Transformations | iley",
      description: "Transform portraits into mythological deities and heroes. Create divine artwork with celestial attributes and power.",
      keywords: ["mythological portrait", "deity transformation", "divine portrait", "mythological art", "legendary character"]
    }
  },
  {
    id: "vintage-polaroid-effect",
    slug: "vintage-polaroid-effect",
    title: "Vintage Polaroid Effect",
    subtitle: "Convert photos into authentic vintage Polaroid snapshots",
    description: "Apply realistic Polaroid camera effects with film grain, color grading, and classic instant photo aesthetics.",
    heroTitle: "Instant Vintage Memories",
    heroSubtitle: "Authentic Polaroid photo effects and styling",
    features: [
      "Realistic film grain texture",
      "Authentic color grading",
      "Classic Polaroid borders",
      "Vintage aging effects"
    ],
    prompt: "Transform this photo into an authentic vintage Polaroid snapshot with realistic film characteristics, grain, and classic instant photo aesthetics",
    benefits: [
      {
        title: "Nostalgic Appeal",
        description: "Evoke warm vintage memories",
        icon: "📷"
      },
      {
        title: "Authentic Look",
        description: "True-to-life Polaroid characteristics",
        icon: "✨"
      },
      {
        title: "Timeless Style",
        description: "Classic instant photo aesthetics",
        icon: "🕰️"
      }
    ],
    examples: [
      {
        title: "Social Media",
        description: "Vintage-style Instagram posts"
      },
      {
        title: "Memory Books",
        description: "Nostalgic photo albums"
      },
      {
        title: "Gift Projects",
        description: "Vintage photo collections"
      }
    ],
    seo: {
      title: "Vintage Polaroid Effect - Instant Photo Filter | iley",
      description: "Transform photos with authentic Polaroid effects. Create vintage instant photo aesthetics with realistic film grain and styling.",
      keywords: ["vintage polaroid effect", "instant photo filter", "retro camera effect", "polaroid snapshot", "vintage photography"]
    }
  },
  {
    id: "16bit-game-character",
    slug: "16bit-game-character",
    title: "16-Bit Game Character Creator",
    subtitle: "Transform subjects into retro video game characters",
    description: "Convert photos into classic 16-bit video game sprites with pixel art styling and retro gaming aesthetics.",
    heroTitle: "Level Up to Pixel Art",
    heroSubtitle: "Retro 16-bit game character transformations",
    features: [
      "Authentic pixel art conversion",
      "16-bit color palette",
      "Game sprite optimization",
      "Retro gaming aesthetics"
    ],
    prompt: "Transform this into a 16-bit video game character sprite with authentic pixel art styling and classic retro gaming aesthetics",
    benefits: [
      {
        title: "Gaming Nostalgia",
        description: "Relive classic gaming eras",
        icon: "🎮"
      },
      {
        title: "Pixel Perfect",
        description: "Authentic retro game art style",
        icon: "🔲"
      },
      {
        title: "Creative Fun",
        description: "Unique digital art experiences",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Gaming Profiles",
        description: "Retro avatars for gaming platforms"
      },
      {
        title: "Game Development",
        description: "Character sprites for indie games"
      },
      {
        title: "Digital Art",
        description: "Nostalgic pixel art creations"
      }
    ],
    seo: {
      title: "16-Bit Game Character Creator - Pixel Art Generator | iley",
      description: "Transform photos into 16-bit video game characters. Create retro pixel art sprites with authentic gaming aesthetics.",
      keywords: ["16-bit character creator", "pixel art generator", "retro game sprite", "video game character", "pixel art converter"]
    }
  },
  {
    id: "time-scene-changer",
    slug: "time-scene-changer",
    title: "Time & Scene Transformer",
    subtitle: "Change time of day and atmospheric lighting",
    description: "Transform the lighting and atmosphere of any scene to different times of day or weather conditions.",
    heroTitle: "Master Time and Light",
    heroSubtitle: "Transform scenes with perfect lighting control",
    features: [
      "Golden hour lighting",
      "Weather condition changes",
      "Atmospheric mood control",
      "Natural light simulation"
    ],
    prompt: "Transform the lighting and atmosphere of this scene to capture the specified time of day with realistic shadows, colors, and mood",
    benefits: [
      {
        title: "Perfect Timing",
        description: "Capture any moment's ideal lighting",
        icon: "🌅"
      },
      {
        title: "Mood Control",
        description: "Set the perfect emotional atmosphere",
        icon: "🎭"
      },
      {
        title: "Weather Effects",
        description: "Add dramatic weather elements",
        icon: "⛈️"
      }
    ],
    examples: [
      {
        title: "Real Estate",
        description: "Show properties in best lighting"
      },
      {
        title: "Travel Photos",
        description: "Perfect vacation memories"
      },
      {
        title: "Event Photography",
        description: "Enhance special moments"
      }
    ],
    seo: {
      title: "Time & Scene Transformer - Perfect Lighting Control | iley",
      description: "Transform scene lighting and atmosphere. Change time of day, weather, and mood for perfect photographic results.",
      keywords: ["time of day changer", "lighting transformer", "atmospheric effects", "scene lighting", "mood adjustment"]
    }
  },
  {
    id: "photo-restoration",
    slug: "photo-restoration",
    title: "AI Photo Restoration",
    subtitle: "Restore and colorize old, faded photographs",
    description: "Bring old, damaged photos back to life with advanced restoration and intelligent colorization.",
    heroTitle: "Restore Precious Memories",
    heroSubtitle: "Bring old photos back to perfect condition",
    features: [
      "Damage repair and cleanup",
      "Intelligent colorization",
      "Quality enhancement",
      "Historical accuracy"
    ],
    prompt: "Restore this old photograph by repairing damage, enhancing quality, and adding natural colors while preserving historical authenticity",
    benefits: [
      {
        title: "Preserve History",
        description: "Save family memories for future generations",
        icon: "🏛️"
      },
      {
        title: "Professional Quality",
        description: "Museum-level restoration results",
        icon: "🎯"
      },
      {
        title: "Emotional Value",
        description: "Bring loved ones back to life",
        icon: "❤️"
      }
    ],
    examples: [
      {
        title: "Family Archives",
        description: "Restore precious family photos"
      },
      {
        title: "Historical Documents",
        description: "Preserve important historical images"
      },
      {
        title: "Memorial Projects",
        description: "Honor departed loved ones"
      }
    ],
    seo: {
      title: "AI Photo Restoration - Repair and Colorize Old Photos | iley",
      description: "Restore old, damaged photographs with AI. Repair, enhance, and colorize vintage photos to preserve precious memories.",
      keywords: ["photo restoration", "old photo repair", "photo colorization", "vintage photo enhancement", "family photo restoration"]
    }
  },
  {
    id: "saas-product-mockup",
    slug: "saas-product-mockup",
    title: "SaaS Product Mockup Generator",
    subtitle: "Generate realistic product mockup images for SaaS dashboards",
    description: "Create professional product mockups for e-commerce, SaaS widgets, and dashboard interfaces with minimal input.",
    heroTitle: "Create Professional SaaS Mockups",
    heroSubtitle: "Transform your SaaS ideas into stunning visual mockups",
    features: [
      "High-resolution photo-realistic output",
      "Multiple device variations (desktop, mobile, tablet)",
      "Professional lighting and shadows",
      "Minimalistic office backgrounds"
    ],
    prompt: "A high-resolution photo-realistic mockup of a modern SaaS dashboard, displayed on a 27-inch monitor on a wooden desk, soft natural lighting, minimalistic office background",
    benefits: [
      {
        title: "Professional Marketing",
        description: "Stunning visuals for your SaaS product presentations",
        icon: "💼"
      },
      {
        title: "Multiple Variations",
        description: "Create mockups for different devices and scenarios",
        icon: "📱"
      },
      {
        title: "Quick Turnaround",
        description: "Generate professional mockups in minutes",
        icon: "⚡"
      }
    ],
    examples: [
      {
        title: "SaaS Marketing",
        description: "Product demos and sales presentations"
      },
      {
        title: "Investor Pitches",
        description: "Professional visuals for funding rounds"
      },
      {
        title: "Website Headers",
        description: "Eye-catching hero images for landing pages"
      }
    ],
    seo: {
      title: "SaaS Product Mockup Generator - Professional Dashboard Mockups | iley",
      description: "Generate realistic SaaS product mockups and dashboard interfaces. Perfect for marketing, presentations, and investor pitches.",
      keywords: ["SaaS mockup", "product mockup generator", "dashboard mockup", "SaaS marketing", "product visualization"]
    }
  },
  {
    id: "automated-background-removal",
    slug: "automated-background-removal",
    title: "Automated Background Removal for SaaS",
    subtitle: "Remove backgrounds and replace with brand-appropriate settings",
    description: "Automatically remove backgrounds from software screenshots and replace with professional, brand-aligned environments.",
    heroTitle: "Perfect SaaS Screenshots Every Time",
    heroSubtitle: "Professional background replacement for software marketing",
    features: [
      "Intelligent screenshot detection",
      "Brand-appropriate background library",
      "4K resolution output",
      "Batch processing for multiple images"
    ],
    prompt: "Remove the background from this screenshot of a software dashboard and place it on a gradient blue background with subtle shadows, 4K resolution",
    benefits: [
      {
        title: "Brand Consistency",
        description: "Maintain visual identity across all marketing materials",
        icon: "🎨"
      },
      {
        title: "Professional Quality",
        description: "Studio-quality results without expensive photography",
        icon: "⭐"
      },
      {
        title: "Marketing Ready",
        description: "Instantly usable for websites and sales materials",
        icon: "🚀"
      }
    ],
    examples: [
      {
        title: "SaaS Marketing",
        description: "Clean product screenshots for websites"
      },
      {
        title: "Sales Decks",
        description: "Professional visuals for presentations"
      },
      {
        title: "Social Media",
        description: "Eye-catching posts with branded backgrounds"
      }
    ],
    seo: {
      title: "Automated Background Removal for SaaS - Professional Screenshots | iley",
      description: "Remove backgrounds from SaaS screenshots and replace with professional, brand-appropriate environments. Perfect for marketing materials.",
      keywords: ["background removal", "SaaS screenshots", "software marketing", "professional backgrounds", "brand consistency"]
    }
  },
  {
    id: "social-media-ad-creatives",
    slug: "social-media-ad-creatives",
    title: "Social Media Ad Creative Generator",
    subtitle: "Create multiple ad creative variants for social media testing",
    description: "Generate eye-catching social media ad creatives in multiple sizes for A/B testing across different platforms.",
    heroTitle: "Ads That Convert",
    heroSubtitle: "Professional social media creatives for maximum impact",
    features: [
      "Multiple platform sizes (Instagram, Facebook, Stories)",
      "A/B testing variations",
      "Brand-consistent design",
      "High-conversion layouts"
    ],
    prompt: "An eye-catching Instagram ad image for a SaaS tool that helps teams collaborate remotely, illustrated in flat design, vibrant colours, with headline text graphic reading 'Collaborate anytime, everywhere'",
    benefits: [
      {
        title: "Higher Conversions",
        description: "Professional designs that drive more clicks and sales",
        icon: "📈"
      },
      {
        title: "Multi-Platform Ready",
        description: "Perfect sizing for all major social platforms",
        icon: "📱"
      },
      {
        title: "A/B Test Ready",
        description: "Multiple variations for performance optimization",
        icon: "🔬"
      }
    ],
    examples: [
      {
        title: "SaaS Growth",
        description: "User acquisition campaigns"
      },
      {
        title: "Product Launches",
        description: "Feature announcement campaigns"
      },
      {
        title: "Agency Marketing",
        description: "Client campaign creatives"
      }
    ],
    seo: {
      title: "Social Media Ad Creative Generator - High-Converting Ads | iley",
      description: "Create professional social media ad creatives for Instagram, Facebook, and Stories. Multiple sizes and A/B testing variations.",
      keywords: ["social media ads", "ad creative generator", "Instagram ads", "Facebook ads", "social media marketing"]
    }
  },
  {
    id: "blog-featured-images",
    slug: "blog-featured-images",
    title: "AI Blog Featured Image Creator",
    subtitle: "Generate unique featured images for blog posts",
    description: "Create custom featured images for blog posts to avoid stock image repetition and improve SEO performance.",
    heroTitle: "Stand Out Blog Images",
    heroSubtitle: "Unique featured images that boost engagement",
    features: [
      "SEO-optimized dimensions",
      "Brand-consistent styling",
      "High-quality flat-lay compositions",
      "Copy space for text overlays"
    ],
    prompt: "A modern flat-lay scene of a laptop, smartphone and coffee cup on a marble desk, top-view, warm tones, subtle shadows, copy space on right",
    benefits: [
      {
        title: "Better SEO",
        description: "Unique images improve search rankings",
        icon: "🔍"
      },
      {
        title: "Brand Recognition",
        description: "Consistent style builds brand awareness",
        icon: "🎨"
      },
      {
        title: "Higher Engagement",
        description: "Custom images get more social shares",
        icon: "📈"
      }
    ],
    examples: [
      {
        title: "Content Marketing",
        description: "SaaS blog posts and articles"
      },
      {
        title: "Thought Leadership",
        description: "Industry insights and trends"
      },
      {
        title: "Tutorial Content",
        description: "How-to guides and tutorials"
      }
    ],
    seo: {
      title: "AI Blog Featured Image Creator - Unique Blog Graphics | iley",
      description: "Create unique featured images for blog posts. Improve SEO and engagement with custom blog graphics that match your brand.",
      keywords: ["blog featured images", "blog graphics", "content marketing", "SEO images", "blog post images"]
    }
  },
  {
    id: "ui-screenshot-enhancement",
    slug: "ui-screenshot-enhancement",
    title: "UI Screenshot Enhancement Tool",
    subtitle: "Enhance SaaS product screenshots for marketing materials",
    description: "Improve software screenshots by removing clutter, enhancing resolution, and highlighting key features for professional presentations.",
    heroTitle: "Perfect Product Screenshots",
    heroSubtitle: "Professional enhancement for software marketing",
    features: [
      "4K resolution simulation",
      "Selective feature highlighting",
      "UI noise removal",
      "Professional lighting effects"
    ],
    prompt: "Enhance this screenshot of the dashboard: sharpen text, simulate 4K resolution, highlight the analytics widget with light glow effect, remove UI noise in background",
    benefits: [
      {
        title: "Professional Quality",
        description: "Transform basic screenshots into marketing gold",
        icon: "✨"
      },
      {
        title: "Feature Focus",
        description: "Draw attention to key product capabilities",
        icon: "🎯"
      },
      {
        title: "Sales Ready",
        description: "Perfect for presentations and websites",
        icon: "💼"
      }
    ],
    examples: [
      {
        title: "Product Marketing",
        description: "Website and sales deck screenshots"
      },
      {
        title: "Feature Announcements",
        description: "Highlight new product capabilities"
      },
      {
        title: "Case Studies",
        description: "Professional customer success visuals"
      }
    ],
    seo: {
      title: "UI Screenshot Enhancement - Professional Software Visuals | iley",
      description: "Enhance SaaS product screenshots for marketing. Remove clutter, highlight features, and create professional software visuals.",
      keywords: ["UI screenshot enhancement", "software screenshots", "product marketing", "SaaS visuals", "feature highlighting"]
    }
  },
  {
    id: "event-marketing-banners",
    slug: "event-marketing-banners",
    title: "Event Marketing Banner Generator",
    subtitle: "Create large-scale banners for digital conferences and webinars",
    description: "Generate professional hero images and banners for virtual conferences, webinars, and product launches with perfect branding.",
    heroTitle: "Event Banners That Impress",
    heroSubtitle: "Professional event marketing visuals",
    features: [
      "Wide hero image formats (2560×1440px)",
      "Multiple ratio variants for web/mobile",
      "Abstract futuristic design elements",
      "Brand color integration"
    ],
    prompt: "Wide hero image 2560 × 1440px for a virtual SaaS summit, abstract futuristic network nodes, blue & green palette, overlay space for logo and date",
    benefits: [
      {
        title: "Professional Events",
        description: "Create memorable first impressions",
        icon: "🎆"
      },
      {
        title: "Multi-Platform",
        description: "Perfect for web, mobile, and social media",
        icon: "📱"
      },
      {
        title: "Brand Consistency",
        description: "Maintain visual identity across all events",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Virtual Conferences",
        description: "SaaS summits and industry events"
      },
      {
        title: "Product Launches",
        description: "Feature release announcements"
      },
      {
        title: "Webinar Series",
        description: "Educational and training events"
      }
    ],
    seo: {
      title: "Event Marketing Banner Generator - Professional Event Visuals | iley",
      description: "Create stunning banners for virtual conferences, webinars, and product launches. Professional event marketing visuals that convert.",
      keywords: ["event marketing banners", "conference banners", "webinar graphics", "event visuals", "digital event marketing"]
    }
  },
  {
    id: "brand-style-transfer",
    slug: "brand-style-transfer",
    title: "Brand Style Transfer Tool",
    subtitle: "Apply brand visual style to any image automatically",
    description: "Convert images to match your brand's visual style with consistent colors, fonts, and design elements for unified marketing campaigns.",
    heroTitle: "Perfect Brand Consistency",
    heroSubtitle: "Automatic style transfer for brand unity",
    features: [
      "Brand color palette application",
      "Flat-design style conversion",
      "Composition preservation",
      "Consistent visual identity"
    ],
    prompt: "Apply brand colour palette (#00A3E8, #F7F8FA) to this photo of a team meeting, convert to flat-design illustration style, maintain original composition",
    benefits: [
      {
        title: "Brand Unity",
        description: "Consistent visuals across all campaigns",
        icon: "🎨"
      },
      {
        title: "Time Saving",
        description: "Automatic style application",
        icon: "⚡"
      },
      {
        title: "Professional Results",
        description: "Designer-quality brand consistency",
        icon: "⭐"
      }
    ],
    examples: [
      {
        title: "SaaS Branding",
        description: "Consistent marketing materials"
      },
      {
        title: "Campaign Assets",
        description: "Unified visual campaigns"
      },
      {
        title: "Content Marketing",
        description: "Brand-consistent blog visuals"
      }
    ],
    seo: {
      title: "Brand Style Transfer Tool - Consistent Visual Identity | iley",
      description: "Apply your brand's visual style to any image automatically. Ensure consistent colors, design, and visual identity across all marketing.",
      keywords: ["brand style transfer", "visual identity", "brand consistency", "marketing visuals", "brand colors"]
    }
  },
  {
    id: "youtube-thumbnail-generator",
    slug: "youtube-thumbnail-generator",
    title: "YouTube Thumbnail Generator",
    subtitle: "Create eye-catching thumbnails for SaaS tutorial videos",
    description: "Generate series of YouTube thumbnails for SaaS product tutorials with consistent visual themes and high click-through rates.",
    heroTitle: "Thumbnails That Get Clicks",
    heroSubtitle: "Professional YouTube thumbnails for SaaS content",
    features: [
      "1280 × 720px optimization",
      "A/B testing variations",
      "Consistent visual branding",
      "High-contrast readable text"
    ],
    prompt: "YouTube thumbnail 1280 × 720px, title text 'How to automate onboarding', stylised cartoon of a robot handing a laptop to a user, bright background, bold font",
    benefits: [
      {
        title: "Higher CTR",
        description: "Eye-catching thumbnails get 10x more clicks",
        icon: "📈"
      },
      {
        title: "Brand Recognition",
        description: "Consistent style builds channel authority",
        icon: "🎨"
      },
      {
        title: "A/B Testing",
        description: "Multiple variants for optimization",
        icon: "🔬"
      }
    ],
    examples: [
      {
        title: "Product Tutorials",
        description: "How-to guides and feature walkthroughs"
      },
      {
        title: "Growth Content",
        description: "Marketing and growth strategy videos"
      },
      {
        title: "Customer Success",
        description: "Case studies and success stories"
      }
    ],
    seo: {
      title: "YouTube Thumbnail Generator - SaaS Video Marketing | iley",
      description: "Create professional YouTube thumbnails for SaaS tutorials and marketing videos. Increase click-through rates with eye-catching designs.",
      keywords: ["YouTube thumbnails", "video marketing", "SaaS tutorials", "thumbnail design", "video thumbnails"]
    }
  },
  {
    id: "user-persona-illustrations",
    slug: "user-persona-illustrations",
    title: "User Persona Illustration Generator",
    subtitle: "Create illustrations representing different SaaS user personas",
    description: "Generate professional illustrations for startup founders, marketers, developers, and other SaaS user personas for websites and marketing materials.",
    heroTitle: "Visualize Your Users",
    heroSubtitle: "Professional persona illustrations for SaaS marketing",
    features: [
      "Diverse professional personas",
      "Modern office environments",
      "Minimal line-art style",
      "Brand color integration"
    ],
    prompt: "Illustration of a young female startup founder in a bright open-office, laptop open showing SaaS analytics, minimal line-art style, pastel colours",
    benefits: [
      {
        title: "User Connection",
        description: "Help audiences see themselves in your product",
        icon: "🤝"
      },
      {
        title: "Marketing Clarity",
        description: "Clear visual representation of target users",
        icon: "🎯"
      },
      {
        title: "Professional Design",
        description: "Consistent, modern illustration style",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Website About Pages",
        description: "Show who your product serves"
      },
      {
        title: "Marketing Materials",
        description: "Sales decks and presentations"
      },
      {
        title: "User Documentation",
        description: "Help guides and tutorials"
      }
    ],
    seo: {
      title: "User Persona Illustrations - SaaS Marketing Visuals | iley",
      description: "Create professional illustrations for SaaS user personas. Visualize startup founders, marketers, developers, and enterprise users.",
      keywords: ["user persona illustrations", "SaaS personas", "user illustrations", "persona design", "SaaS marketing"]
    }
  },
  {
    id: "email-campaign-visuals",
    slug: "email-campaign-visuals",
    title: "Email Campaign Visual Generator",
    subtitle: "Create custom email header visuals for SaaS campaigns",
    description: "Generate professional email headers and visuals for SaaS email campaigns to increase open rates and engagement.",
    heroTitle: "Emails That Stand Out",
    heroSubtitle: "Professional email visuals that convert",
    features: [
      "600 × 200px email optimization",
      "Mobile-responsive designs",
      "Brand color integration",
      "High-contrast readability"
    ],
    prompt: "Email header 600 × 200px: smiling diverse team around a laptop showing analytics dashboard, warm lighting, brand colours subtle overlay",
    benefits: [
      {
        title: "Higher Open Rates",
        description: "Professional visuals increase email engagement",
        icon: "📧"
      },
      {
        title: "Brand Consistency",
        description: "Unified visual identity in all communications",
        icon: "🎨"
      },
      {
        title: "Mobile Optimized",
        description: "Perfect rendering on all devices",
        icon: "📱"
      }
    ],
    examples: [
      {
        title: "Product Updates",
        description: "Feature announcement emails"
      },
      {
        title: "Marketing Campaigns",
        description: "Promotional and growth emails"
      },
      {
        title: "Customer Success",
        description: "Onboarding and retention emails"
      }
    ],
    seo: {
      title: "Email Campaign Visual Generator - Professional Email Graphics | iley",
      description: "Create custom email headers and visuals for SaaS campaigns. Increase open rates with professional email marketing graphics.",
      keywords: ["email campaign visuals", "email headers", "email marketing graphics", "SaaS email design", "email templates"]
    }
  },
  {
    id: "landing-page-heroes",
    slug: "landing-page-heroes",
    title: "Landing Page Hero Generator",
    subtitle: "Create compelling hero images for SaaS landing pages",
    description: "Generate professional hero images that visually convey your SaaS value proposition and convert visitors in under 10 seconds.",
    heroTitle: "Heroes That Convert",
    heroSubtitle: "Landing page visuals that drive action",
    features: [
      "1920 × 1080px hero optimization",
      "Value proposition visualization",
      "Brand gradient integration",
      "Conversion-optimized layouts"
    ],
    prompt: "Hero image 1920 × 1080px: a futuristic dashboard floating above a cloud, overlay brand tagline 'Scale from 0 to 1000 users', gradient blue-purple background, subtle glow effects",
    benefits: [
      {
        title: "Higher Conversions",
        description: "Professional heroes convert 25% better",
        icon: "📈"
      },
      {
        title: "Instant Clarity",
        description: "Communicate value in under 10 seconds",
        icon: "⚡"
      },
      {
        title: "Brand Impact",
        description: "Create memorable first impressions",
        icon: "🎆"
      }
    ],
    examples: [
      {
        title: "Product Landing Pages",
        description: "Feature-specific conversion pages"
      },
      {
        title: "Campaign Pages",
        description: "Promotional and launch pages"
      },
      {
        title: "Conversion Optimization",
        description: "A/B testing different hero concepts"
      }
    ],
    seo: {
      title: "Landing Page Hero Generator - High-Converting SaaS Heroes | iley",
      description: "Create compelling hero images for SaaS landing pages. Professional visuals that communicate value and drive conversions.",
      keywords: ["landing page heroes", "SaaS landing pages", "hero images", "conversion optimization", "landing page design"]
    }
  },
  {
    id: "concept-art-ideation",
    slug: "concept-art-ideation",
    title: "Product Concept Art Generator",
    subtitle: "Generate concept visuals for new product features",
    description: "Create multiple concept visuals for new SaaS features and UI themes to kickstart design sprints and brainstorming sessions.",
    heroTitle: "Visualize Your Next Feature",
    heroSubtitle: "Concept art that sparks innovation",
    features: [
      "Futuristic UI concepts",
      "Multiple design variations",
      "3D isometric perspectives",
      "Modern design aesthetics"
    ],
    prompt: "A futuristic mobile app UI concept for a team-collaboration tool, dark mode, neon accents, 3D isometric perspective, floating icons, ultra-detailed",
    benefits: [
      {
        title: "Design Inspiration",
        description: "Spark creativity in design teams",
        icon: "💡"
      },
      {
        title: "Rapid Prototyping",
        description: "Quickly visualize multiple concepts",
        icon: "⚡"
      },
      {
        title: "Team Alignment",
        description: "Help teams visualize shared vision",
        icon: "🎯"
      }
    ],
    examples: [
      {
        title: "Product Design",
        description: "New feature conceptualization"
      },
      {
        title: "Design Sprints",
        description: "Brainstorming visual aids"
      },
      {
        title: "Innovation Labs",
        description: "Future product exploration"
      }
    ],
    seo: {
      title: "Product Concept Art Generator - Design Innovation Tools | iley",
      description: "Generate concept art for new product features and UI designs. Perfect for design sprints and innovation brainstorming.",
      keywords: ["concept art", "product design", "UI concepts", "design sprints", "innovation visualization"]
    }
  },
  {
    id: "screenshot-anonymization",
    slug: "screenshot-anonymization",
    title: "Screenshot Anonymization Tool",
    subtitle: "Remove sensitive data from product screenshots",
    description: "Automatically remove usernames, emails, and sensitive information from screenshots while maintaining realistic appearance for marketing materials.",
    heroTitle: "Safe Screenshots for Marketing",
    heroSubtitle: "Protect privacy while showcasing features",
    features: [
      "Intelligent data detection",
      "Realistic replacement content",
      "High-resolution preservation",
      "Batch processing support"
    ],
    prompt: "This screenshot of user dashboard: blur names and email addresses, maintain resolution, simulate branding overlay so still polished",
    benefits: [
      {
        title: "Compliance Ready",
        description: "Meet privacy and security requirements",
        icon: "🔒"
      },
      {
        title: "Realistic Results",
        description: "Maintain professional appearance",
        icon: "✨"
      },
      {
        title: "Marketing Safe",
        description: "Use in case studies and public materials",
        icon: "📢"
      }
    ],
    examples: [
      {
        title: "Case Studies",
        description: "Customer success stories with privacy"
      },
      {
        title: "Marketing Materials",
        description: "Safe screenshots for websites"
      },
      {
        title: "Public Demos",
        description: "Conference and presentation visuals"
      }
    ],
    seo: {
      title: "Screenshot Anonymization - Privacy-Safe Marketing Visuals | iley",
      description: "Remove sensitive data from screenshots while maintaining professional appearance. Perfect for case studies and marketing materials.",
      keywords: ["screenshot anonymization", "privacy protection", "data removal", "marketing compliance", "safe screenshots"]
    }
  },
  {
    id: "presentation-slide-visuals",
    slug: "presentation-slide-visuals",
    title: "Interactive Presentation Visual Generator",
    subtitle: "Create unique slide visuals for SaaS pitch decks",
    description: "Generate professional slide backgrounds and visuals for investor presentations and pitch decks to avoid stock-photo appearance.",
    heroTitle: "Presentations That Impress",
    heroSubtitle: "Professional slide visuals for winning pitches",
    features: [
      "1920 × 1080px slide optimization",
      "Abstract network visualizations",
      "Brand color integration",
      "Multiple theme variations"
    ],
    prompt: "Slide background 1920 × 1080px: abstract network visualization, nodes connecting, brand colour #00A3E8 highlight, central blank space for title",
    benefits: [
      {
        title: "Investor Ready",
        description: "Professional quality for funding rounds",
        icon: "💼"
      },
      {
        title: "Brand Consistent",
        description: "Unified visual identity throughout deck",
        icon: "🎨"
      },
      {
        title: "Multiple Variants",
        description: "Different themes for same content",
        icon: "🔄"
      }
    ],
    examples: [
      {
        title: "Investor Relations",
        description: "Funding round presentations"
      },
      {
        title: "Sales Decks",
        description: "Client and prospect presentations"
      },
      {
        title: "Growth Teams",
        description: "Strategy and planning decks"
      }
    ],
    seo: {
      title: "Presentation Visual Generator - Professional Pitch Decks | iley",
      description: "Create unique slide visuals for SaaS presentations and pitch decks. Professional backgrounds that avoid stock-photo appearance.",
      keywords: ["presentation visuals", "pitch deck design", "slide backgrounds", "investor presentations", "professional slides"]
    }
  },
  {
    id: "onboarding-tutorial-frames",
    slug: "onboarding-tutorial-frames",
    title: "Onboarding Tutorial Frame Generator",
    subtitle: "Create consistent visual frames for SaaS tutorials",
    description: "Generate a cohesive set of tutorial illustrations for user onboarding guides with consistent style and branding.",
    heroTitle: "Guide Users to Success",
    heroSubtitle: "Professional onboarding visuals that convert",
    features: [
      "Consistent illustration style",
      "Step-by-step visual narrative",
      "Brand palette integration",
      "Multi-format export (web, PDF)"
    ],
    prompt: "Set of 5 illustrations: user clicking 'Start', team collaborating on dashboard, analytics chart rising, mobile view, celebration check-mark on completion, flat vector style, brand palette",
    benefits: [
      {
        title: "Better Onboarding",
        description: "Visual guides improve user success rates",
        icon: "📈"
      },
      {
        title: "Consistent Experience",
        description: "Unified visual language across tutorials",
        icon: "🎯"
      },
      {
        title: "Versatile Output",
        description: "Perfect for web and print materials",
        icon: "📱"
      }
    ],
    examples: [
      {
        title: "Customer Success",
        description: "User onboarding and training"
      },
      {
        title: "Product Teams",
        description: "Feature introduction guides"
      },
      {
        title: "Support Documentation",
        description: "Help articles and tutorials"
      }
    ],
    seo: {
      title: "Onboarding Tutorial Frames - User Guide Visuals | iley",
      description: "Create consistent visual frames for SaaS onboarding tutorials. Professional illustrations that guide users to success.",
      keywords: ["onboarding visuals", "tutorial frames", "user guides", "customer success", "SaaS onboarding"]
    }
  },
  {
    id: "product-photography-retouching",
    slug: "product-photography-retouching",
    title: "Product Photography Retouching",
    subtitle: "Enhance product photos for SaaS merchandise",
    description: "Professional retouching for SaaS-related hardware, merchandise, or physical products to match brand standards.",
    heroTitle: "Perfect Product Photos",
    heroSubtitle: "Professional retouching for brand consistency",
    features: [
      "Dust and imperfection removal",
      "Brand color correction",
      "Edge smoothing and enhancement",
      "High-resolution output (3000px+)"
    ],
    prompt: "Retouch this product photo: remove dust particles, smooth edges, correct colour to brand palette, output 3000px width",
    benefits: [
      {
        title: "Professional Quality",
        description: "Studio-level product photography",
        icon: "📷"
      },
      {
        title: "Brand Consistency",
        description: "Match exact brand color palette",
        icon: "🎨"
      },
      {
        title: "Multiple Backgrounds",
        description: "White background and lifestyle variants",
        icon: "🔄"
      }
    ],
    examples: [
      {
        title: "SaaS Merchandise",
        description: "T-shirts, mugs, and branded items"
      },
      {
        title: "Hardware Products",
        description: "Tech accessories and devices"
      },
      {
        title: "Brand Teams",
        description: "Marketing and promotional materials"
      }
    ],
    seo: {
      title: "Product Photography Retouching - Professional Brand Visuals | iley",
      description: "Enhance product photos with professional retouching. Remove imperfections and ensure brand color consistency.",
      keywords: ["product retouching", "photo enhancement", "brand photography", "product photos", "professional retouching"]
    }
  },
  {
    id: "website-background-patterns",
    slug: "website-background-patterns",
    title: "Website Background Pattern Generator",
    subtitle: "Create custom abstract patterns for SaaS websites",
    description: "Generate seamless background patterns and textures that maintain your brand's unique visual identity across web sections.",
    heroTitle: "Unique Website Backgrounds",
    heroSubtitle: "Custom patterns that set you apart",
    features: [
      "Seamless tileable patterns",
      "Brand color integration",
      "Light and dark theme versions",
      "Subtle texture and depth"
    ],
    prompt: "Seamless tileable background pattern, abstract network nodes, brand colours #00A3E8/#004577, light lines, dark background, subtle texture",
    benefits: [
      {
        title: "Unique Identity",
        description: "Stand out from template-based competitors",
        icon: "✨"
      },
      {
        title: "Brand Consistent",
        description: "Perfect integration with your color scheme",
        icon: "🎨"
      },
      {
        title: "Theme Ready",
        description: "Light and dark mode variants included",
        icon: "🌙"
      }
    ],
    examples: [
      {
        title: "Web Design",
        description: "SaaS website section backgrounds"
      },
      {
        title: "UI Teams",
        description: "Application interface patterns"
      },
      {
        title: "Brand Identity",
        description: "Consistent visual language"
      }
    ],
    seo: {
      title: "Website Background Patterns - Custom SaaS Web Design | iley",
      description: "Create custom abstract background patterns for SaaS websites. Unique, brand-consistent designs for web sections.",
      keywords: ["website backgrounds", "background patterns", "web design", "SaaS website", "custom patterns"]
    }
  },
  {
    id: "app-icon-design",
    slug: "app-icon-design",
    title: "App Icon Design Explorer",
    subtitle: "Generate creative variations of app icons and favicons",
    description: "Create multiple app icon concepts and favicon variations for your SaaS product with professional design standards.",
    heroTitle: "Icons That Convert",
    heroSubtitle: "Professional app icons that stand out",
    features: [
      "Multiple size variants (512px to 128px)",
      "Flat design and gradient options",
      "Brand color integration",
      "Platform-specific optimizations"
    ],
    prompt: "Generate square icon 512 × 512px: simplified abstract cloud plus arrow upward, flat design, brand gradient from #00A3E8 to #004577, long shadow",
    benefits: [
      {
        title: "App Store Ready",
        description: "Professional quality for store listings",
        icon: "📱"
      },
      {
        title: "Multiple Sizes",
        description: "All required icon sizes included",
        icon: "📏"
      },
      {
        title: "Brand Aligned",
        description: "Perfect integration with visual identity",
        icon: "🎯"
      }
    ],
    examples: [
      {
        title: "Product Design",
        description: "Mobile and desktop app icons"
      },
      {
        title: "UI Teams",
        description: "Favicon and interface icons"
      },
      {
        title: "Brand Identity",
        description: "Consistent icon family"
      }
    ],
    seo: {
      title: "App Icon Design - Professional SaaS Icons | iley",
      description: "Generate creative app icons and favicons for SaaS products. Multiple sizes and design variations for all platforms.",
      keywords: ["app icon design", "favicon generator", "SaaS icons", "mobile app icons", "icon design"]
    }
  },
  {
    id: "magazine-cover-mockups",
    slug: "magazine-cover-mockups",
    title: "Magazine Cover Mockup Creator",
    subtitle: "Transform SaaS features into stylized magazine covers",
    description: "Create eye-catching magazine-style covers featuring your SaaS product for PR campaigns and social media sharing.",
    heroTitle: "Make Headlines",
    heroSubtitle: "Magazine-worthy visuals for your SaaS success",
    features: [
      "Magazine format (3000 × 4000px)",
      "Professional typography",
      "Brand accent color integration",
      "Multiple cover title variations"
    ],
    prompt: "Magazine cover 3000 × 4000px: headline 'SaaS Growth Secrets 2025', image of team celebrating in modern office, bold typography, brand accent colours",
    benefits: [
      {
        title: "PR Impact",
        description: "Professional visuals for media campaigns",
        icon: "📢"
      },
      {
        title: "Social Sharing",
        description: "Eye-catching content for social media",
        icon: "📱"
      },
      {
        title: "Brand Authority",
        description: "Position your SaaS as industry leader",
        icon: "🏆"
      }
    ],
    examples: [
      {
        title: "PR & Marketing",
        description: "Press releases and media kits"
      },
      {
        title: "Social Media",
        description: "LinkedIn and Twitter announcements"
      },
      {
        title: "Internal Comms",
        description: "Team achievement celebrations"
      }
    ],
    seo: {
      title: "Magazine Cover Mockups - SaaS PR Visuals | iley",
      description: "Create magazine-style covers for SaaS products. Professional PR visuals for social media and marketing campaigns.",
      keywords: ["magazine covers", "PR visuals", "SaaS marketing", "social media graphics", "press materials"]
    }
  },
  {
    id: "holiday-campaign-visuals",
    slug: "holiday-campaign-visuals",
    title: "Holiday Campaign Visuals",
    subtitle: "Create themed visuals for holiday campaigns",
    description: "Generate festive and holiday-themed visuals for special event campaigns like Black Friday, Christmas, or seasonal promotions.",
    heroTitle: "Holiday & Seasonal Campaign Graphics",
    heroSubtitle: "Create engaging holiday-themed visuals that boost campaign engagement",
    features: [
      "Holiday-themed design templates",
      "Multiple format variations",
      "Brand color integration",
      "Seasonal elements and effects"
    ],
    prompt: "Holiday promo image 1200 × 628px: Black Friday theme, big '75% off' text, SaaS dashboard screenshot in the background, dark matte finish, accent orange highlight",
    benefits: [
      {
        title: "Seasonal Engagement",
        description: "Higher engagement with timely, relevant visuals",
        icon: "🎯"
      },
      {
        title: "Multi-Platform Ready",
        description: "Optimized for all social media platforms",
        icon: "📱"
      },
      {
        title: "Brand Consistency",
        description: "Maintain brand identity in holiday themes",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Black Friday Campaigns",
        description: "High-impact promotional graphics"
      },
      {
        title: "Holiday Greetings",
        description: "Seasonal brand messaging"
      },
      {
        title: "Year-End Promotions",
        description: "Special offer announcements"
      }
    ],
    seo: {
      title: "Holiday Campaign Graphics - Seasonal Marketing Visuals | iley",
      description: "Create holiday-themed visuals for marketing campaigns. Black Friday, Christmas, and seasonal promotional graphics.",
      keywords: ["holiday graphics", "seasonal campaigns", "Black Friday visuals", "Christmas marketing", "promotional graphics"]
    }
  },
  {
    id: "photo-restoration",
    slug: "photo-restoration",
    title: "Historical Photo Restoration",
    subtitle: "Restore and enhance old or damaged photos",
    description: "Bring new life to vintage photos by removing scratches, improving resolution, and adding color to black and white images.",
    heroTitle: "Restore Vintage Photos with AI",
    heroSubtitle: "Transform old, damaged photos into crisp, colorful memories",
    features: [
      "Scratch and damage removal",
      "Resolution enhancement",
      "Colorization of B&W photos",
      "Vintage aesthetic preservation"
    ],
    prompt: "Old photograph of founders in 2005 office: remove scratches, colorise black & white, improve resolution to 3000px, maintain vintage look",
    benefits: [
      {
        title: "Preserve Memories",
        description: "Save family and business history",
        icon: "📸"
      },
      {
        title: "Professional Quality",
        description: "Museum-grade restoration results",
        icon: "🏆"
      },
      {
        title: "Multiple Formats",
        description: "Output in various resolutions and styles",
        icon: "📊"
      }
    ],
    examples: [
      {
        title: "Family Photos",
        description: "Restore precious family memories"
      },
      {
        title: "Business History",
        description: "Company milestone documentation"
      },
      {
        title: "Historical Archive",
        description: "Preserve cultural heritage"
      }
    ],
    seo: {
      title: "AI Photo Restoration - Vintage Photo Enhancement | iley",
      description: "Restore old and damaged photos with AI. Remove scratches, enhance resolution, and colorize black & white images.",
      keywords: ["photo restoration", "vintage photos", "AI colorization", "image enhancement", "damaged photo repair"]
    }
  },
  {
    id: "training-course-visuals",
    slug: "training-course-visuals",
    title: "Training Course Visuals",
    subtitle: "Create consistent visuals for online courses",
    description: "Generate professional course thumbnails, lesson graphics, and educational materials with consistent branding.",
    heroTitle: "Professional Course Graphics",
    heroSubtitle: "Create engaging visuals for online training and education",
    features: [
      "Course thumbnail templates",
      "Lesson graphic consistency",
      "Brand alignment",
      "Multiple resolution outputs"
    ],
    prompt: "Course image 1920×1080px: 'Mastering SaaS Growth', illustration of rocket launching from laptop, flat-style, brand colours, simple iconography",
    benefits: [
      {
        title: "Professional Look",
        description: "Polished, educational aesthetic",
        icon: "🎓"
      },
      {
        title: "Brand Consistency",
        description: "Unified visual identity across courses",
        icon: "🎨"
      },
      {
        title: "Engagement Boost",
        description: "Visual appeal increases completion rates",
        icon: "📈"
      }
    ],
    examples: [
      {
        title: "Online Courses",
        description: "E-learning platform graphics"
      },
      {
        title: "Training Materials",
        description: "Corporate training visuals"
      },
      {
        title: "Educational Content",
        description: "Tutorial and guide graphics"
      }
    ],
    seo: {
      title: "Training Course Graphics - Educational Visuals | iley",
      description: "Create professional graphics for online courses and training materials. Course thumbnails and educational visuals.",
      keywords: ["course graphics", "educational visuals", "training materials", "e-learning graphics", "course thumbnails"]
    }
  },
  {
    id: "social-proof-imagery",
    slug: "social-proof-imagery",
    title: "Social Proof Imagery",
    subtitle: "Enhance customer testimonial visuals",
    description: "Transform customer-provided images into branded testimonial graphics while maintaining authenticity.",
    heroTitle: "Authentic Social Proof Graphics",
    heroSubtitle: "Transform customer photos into powerful testimonial visuals",
    features: [
      "Customer photo enhancement",
      "Brand overlay integration",
      "Testimonial quote styling",
      "Multi-platform formatting"
    ],
    prompt: "This customer photo: crop and adjust to 1080 × 1080, enhance lighting, apply subtle brand colour overlay (#00A3E8 at 10% opacity), add handwritten quote overlay",
    benefits: [
      {
        title: "Authentic Appeal",
        description: "Real customer stories with visual impact",
        icon: "💝"
      },
      {
        title: "Brand Integration",
        description: "Seamless brand element incorporation",
        icon: "🎯"
      },
      {
        title: "Trust Building",
        description: "Visual testimonials increase credibility",
        icon: "🤝"
      }
    ],
    examples: [
      {
        title: "Customer Testimonials",
        description: "Success story graphics"
      },
      {
        title: "Case Studies",
        description: "Client achievement visuals"
      },
      {
        title: "Review Graphics",
        description: "Social media testimonials"
      }
    ],
    seo: {
      title: "Social Proof Graphics - Customer Testimonial Visuals | iley",
      description: "Create branded testimonial graphics from customer photos. Authentic social proof visuals for marketing.",
      keywords: ["social proof", "testimonial graphics", "customer stories", "review visuals", "case study graphics"]
    }
  },
  {
    id: "merchandise-design",
    slug: "merchandise-design",
    title: "Merchandise Design",
    subtitle: "Create branded swag and merchandise graphics",
    description: "Design print-ready graphics for t-shirts, mugs, stickers, and other branded merchandise.",
    heroTitle: "Brand Merchandise Graphics",
    heroSubtitle: "Create stunning designs for all your branded swag",
    features: [
      "Print-ready designs",
      "Multiple product templates",
      "Vector format output",
      "Color variation options"
    ],
    prompt: "T-shirt front print design: stylised rocket logo with 'Scale with us' tagline, flat vector style, two-colour print, brand palette",
    benefits: [
      {
        title: "Print Ready",
        description: "High-resolution, production-ready files",
        icon: "🖨️"
      },
      {
        title: "Versatile Designs",
        description: "Adaptable to multiple product types",
        icon: "🎯"
      },
      {
        title: "Brand Consistency",
        description: "Unified merchandise identity",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Apparel Design",
        description: "T-shirts, hoodies, hats"
      },
      {
        title: "Office Accessories",
        description: "Mugs, notebooks, stickers"
      },
      {
        title: "Promotional Items",
        description: "Giveaway and event swag"
      }
    ],
    seo: {
      title: "Merchandise Design - Branded Swag Graphics | iley",
      description: "Create print-ready designs for branded merchandise. T-shirt designs, mugs, stickers, and promotional items.",
      keywords: ["merchandise design", "branded swag", "t-shirt design", "promotional items", "print design"]
    }
  },
  {
    id: "dynamic-email-heroes",
    slug: "dynamic-email-heroes",
    title: "Dynamic Email Heroes",
    subtitle: "Create animated email header sequences",
    description: "Generate sequential frames for subtle email hero animations that improve open rates and engagement.",
    heroTitle: "Animated Email Graphics",
    heroSubtitle: "Create engaging email headers with subtle animation effects",
    features: [
      "Sequential frame generation",
      "Email-optimized sizing",
      "GIF compilation ready",
      "Brand-consistent styling"
    ],
    prompt: "Frame1: rocket on launch pad, Frame2: rocket launching, Frame3: rocket in mid-air with dashboard overlay, flat style, brand colours",
    benefits: [
      {
        title: "Higher Open Rates",
        description: "Animated content captures attention",
        icon: "📧"
      },
      {
        title: "Professional Quality",
        description: "Smooth, branded animations",
        icon: "🎬"
      },
      {
        title: "Easy Implementation",
        description: "Ready-to-use GIF sequences",
        icon: "⚡"
      }
    ],
    examples: [
      {
        title: "Product Launches",
        description: "Animated announcement headers"
      },
      {
        title: "Newsletter Graphics",
        description: "Engaging email content"
      },
      {
        title: "Campaign Promotions",
        description: "Attention-grabbing visuals"
      }
    ],
    seo: {
      title: "Animated Email Headers - Dynamic Email Graphics | iley",
      description: "Create animated email headers with sequential frames. Improve email open rates with engaging visuals.",
      keywords: ["animated emails", "email headers", "dynamic graphics", "email marketing", "animated GIFs"]
    }
  },
  {
    id: "press-kit-visuals",
    slug: "press-kit-visuals",
    title: "Press Kit Visuals",
    subtitle: "Professional press and media materials",
    description: "Create high-quality visuals for press kits including founder portraits, product images, and media backgrounds.",
    heroTitle: "Professional Press Materials",
    heroSubtitle: "High-quality visuals for media and press coverage",
    features: [
      "High-resolution outputs",
      "Professional retouching",
      "Multiple format options",
      "Media-ready quality"
    ],
    prompt: "Founder portrait: retouch skin, correct colour temperature, ensure consistent lighting, output 4000px height, high resolution",
    benefits: [
      {
        title: "Media Ready",
        description: "Publication-quality images",
        icon: "📰"
      },
      {
        title: "Professional Polish",
        description: "Flawless, high-resolution results",
        icon: "✨"
      },
      {
        title: "Versatile Usage",
        description: "Print and digital ready",
        icon: "🔄"
      }
    ],
    examples: [
      {
        title: "Founder Portraits",
        description: "Professional headshots for media"
      },
      {
        title: "Product Photography",
        description: "High-quality product images"
      },
      {
        title: "Company Backgrounds",
        description: "Office and team photography"
      }
    ],
    seo: {
      title: "Press Kit Visuals - Media-Ready Photography | iley",
      description: "Create professional press kit visuals. High-quality founder portraits and product photography for media.",
      keywords: ["press kit", "media visuals", "founder portraits", "professional photography", "press materials"]
    }
  },
  {
    id: "blog-infographic-visuals",
    slug: "blog-infographic-visuals",
    title: "Blog Infographic Visuals",
    subtitle: "Custom graphics for blog content",
    description: "Generate engaging infographic backgrounds and elements that perfectly complement your blog post content.",
    heroTitle: "Blog Content Graphics",
    heroSubtitle: "Create custom visuals that enhance your blog posts",
    features: [
      "Infographic templates",
      "Data visualization elements",
      "Brand-consistent styling",
      "SEO-optimized sizing"
    ],
    prompt: "Infographic base 1920×1080px: clean layout, icons of growth ladder, analytics chart rising, SaaS logo bottom right, minimal flat design",
    benefits: [
      {
        title: "Content Enhancement",
        description: "Visuals that support your message",
        icon: "📊"
      },
      {
        title: "SEO Benefits",
        description: "Optimized for search and sharing",
        icon: "🔍"
      },
      {
        title: "Reader Engagement",
        description: "Visual content increases retention",
        icon: "📖"
      }
    ],
    examples: [
      {
        title: "Data Visualizations",
        description: "Charts, graphs, and statistics"
      },
      {
        title: "Process Flows",
        description: "Step-by-step illustrations"
      },
      {
        title: "Comparison Graphics",
        description: "Feature and benefit comparisons"
      }
    ],
    seo: {
      title: "Blog Infographic Graphics - Content Visuals | iley",
      description: "Create custom infographic visuals for blog posts. Data visualization and content enhancement graphics.",
      keywords: ["blog graphics", "infographics", "content visuals", "data visualization", "blog illustrations"]
    }
  },
  {
    id: "onboarding-splash-screens",
    slug: "onboarding-splash-screens",
    title: "Onboarding Splash Screens",
    subtitle: "Engaging app onboarding visuals",
    description: "Create captivating splash screen visuals for app onboarding flows and update announcements.",
    heroTitle: "App Onboarding Graphics",
    heroSubtitle: "Create engaging splash screens that welcome new users",
    features: [
      "Mobile-optimized designs",
      "Animated-style illustrations",
      "Brand color integration",
      "Multiple screen sizes"
    ],
    prompt: "Splash screen 1080 × 2340px (mobile): animated illustration of cloud sync icon orbiting data nodes, soft gradient background brand colours",
    benefits: [
      {
        title: "First Impressions",
        description: "Welcome users with stunning visuals",
        icon: "👋"
      },
      {
        title: "User Engagement",
        description: "Reduce onboarding drop-off rates",
        icon: "🎯"
      },
      {
        title: "Brand Recognition",
        description: "Reinforce brand identity early",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "App Launch Screens",
        description: "Welcome and loading graphics"
      },
      {
        title: "Update Announcements",
        description: "Feature introduction visuals"
      },
      {
        title: "Tutorial Intros",
        description: "Onboarding flow graphics"
      }
    ],
    seo: {
      title: "App Splash Screens - Onboarding Graphics | iley",
      description: "Create engaging splash screen visuals for mobile app onboarding. Welcome screens and update graphics.",
      keywords: ["splash screens", "app onboarding", "mobile graphics", "welcome screens", "app visuals"]
    }
  },
  {
    id: "screenshot-localization",
    slug: "screenshot-localization",
    title: "Screenshot Localization",
    subtitle: "Adapt screenshots for global markets",
    description: "Localize product screenshots by adapting UI text, imagery, and cultural context for different markets.",
    heroTitle: "Global Screenshot Adaptation",
    heroSubtitle: "Localize your product visuals for international markets",
    features: [
      "Multi-language text adaptation",
      "Cultural context adjustment",
      "Regional imagery updates",
      "Consistent quality across languages"
    ],
    prompt: "Take this screenshot and change UI text to French, adjust background to Paris office scene, colour correct, output 2560px width",
    benefits: [
      {
        title: "Global Reach",
        description: "Connect with international audiences",
        icon: "🌍"
      },
      {
        title: "Cultural Relevance",
        description: "Adapted to local contexts",
        icon: "🏛️"
      },
      {
        title: "Consistent Quality",
        description: "Professional results across all languages",
        icon: "✨"
      }
    ],
    examples: [
      {
        title: "European Markets",
        description: "French, German, Spanish adaptations"
      },
      {
        title: "Asian Markets",
        description: "Chinese, Japanese, Korean versions"
      },
      {
        title: "Regional Contexts",
        description: "Cultural and environmental adjustments"
      }
    ],
    seo: {
      title: "Screenshot Localization - Global Product Visuals | iley",
      description: "Localize product screenshots for international markets. Multi-language UI and cultural adaptations.",
      keywords: ["screenshot localization", "global marketing", "multi-language visuals", "international adaptation", "cultural localization"]
    }
  },
  {
    id: "podcast-cover-art",
    slug: "podcast-cover-art",
    title: "Podcast Cover Art",
    subtitle: "Professional podcast artwork design",
    description: "Create compelling podcast cover art that stands out in podcast directories and improves discoverability.",
    heroTitle: "Podcast Cover Design",
    heroSubtitle: "Create eye-catching artwork that attracts listeners",
    features: [
      "Square format optimization",
      "Text readability at small sizes",
      "Genre-appropriate styling",
      "Multiple size variants"
    ],
    prompt: "Podcast cover 3000 × 3000px: microphone icon, waveforms, laptop showing SaaS dashboard, dark mode background, brand gradient, title 'Scale Up with SaaS'",
    benefits: [
      {
        title: "Discoverability",
        description: "Stand out in podcast directories",
        icon: "🔍"
      },
      {
        title: "Professional Quality",
        description: "High-resolution, crisp artwork",
        icon: "✨"
      },
      {
        title: "Brand Consistency",
        description: "Aligned with your overall brand",
        icon: "🎨"
      }
    ],
    examples: [
      {
        title: "Business Podcasts",
        description: "Professional, clean designs"
      },
      {
        title: "Tech Shows",
        description: "Modern, digital aesthetics"
      },
      {
        title: "Interview Series",
        description: "People-focused artwork"
      }
    ],
    seo: {
      title: "Podcast Cover Art - Professional Podcast Design | iley",
      description: "Create professional podcast cover art that attracts listeners. High-quality podcast artwork design.",
      keywords: ["podcast cover art", "podcast design", "audio branding", "podcast artwork", "cover design"]
    }
  },
  {
    id: "report-cover-visuals",
    slug: "report-cover-visuals",
    title: "Report Cover Visuals",
    subtitle: "Professional report and white paper covers",
    description: "Design sophisticated cover pages for annual reports, white papers, and business documents.",
    heroTitle: "Business Report Design",
    heroSubtitle: "Create professional covers for important documents",
    features: [
      "Print-ready resolution",
      "Corporate aesthetics",
      "Data visualization elements",
      "Multiple format options"
    ],
    prompt: "Report cover 2480 × 3508px (A4): modern dual-tone (brand colours), abstract data-flow lines, light overlay of team meeting photo blurred, title '2025 SaaS Growth Trends'",
    benefits: [
      {
        title: "Professional Image",
        description: "Credible, authoritative appearance",
        icon: "📊"
      },
      {
        title: "Print Quality",
        description: "High-resolution, publication-ready",
        icon: "🖨️"
      },
      {
        title: "Brand Authority",
        description: "Reinforce thought leadership",
        icon: "🏆"
      }
    ],
    examples: [
      {
        title: "Annual Reports",
        description: "Corporate financial documents"
      },
      {
        title: "White Papers",
        description: "Industry research publications"
      },
      {
        title: "Case Studies",
        description: "Client success documentation"
      }
    ],
    seo: {
      title: "Report Cover Design - Professional Document Visuals | iley",
      description: "Create professional covers for business reports and white papers. High-quality document design.",
      keywords: ["report covers", "white paper design", "document covers", "business reports", "corporate design"]
    }
  },
  {
    id: "email-signature-banners",
    slug: "email-signature-banners",
    title: "Email Signature Banners",
    subtitle: "Professional email signature graphics",
    description: "Create branded email signature banners that reinforce your company identity in every message.",
    heroTitle: "Email Signature Design",
    heroSubtitle: "Professional banners for consistent email branding",
    features: [
      "Email client compatibility",
      "Mobile responsive design",
      "Brand color integration",
      "Contact information styling"
    ],
    prompt: "Email signature banner 600 × 100px: team photo background blurred, brand colour overlay #00A3E8 at 50% opacity, white text 'Scaling Your Team Together'",
    benefits: [
      {
        title: "Brand Consistency",
        description: "Every email reinforces your brand",
        icon: "📧"
      },
      {
        title: "Professional Image",
        description: "Polished, consistent communication",
        icon: "✨"
      },
      {
        title: "Marketing Value",
        description: "Passive promotion in every email",
        icon: "📈"
      }
    ],
    examples: [
      {
        title: "Corporate Teams",
        description: "Company-wide email branding"
      },
      {
        title: "Sales Teams",
        description: "Promotional signature elements"
      },
      {
        title: "Executive Staff",
        description: "Professional leadership branding"
      }
    ],
    seo: {
      title: "Email Signature Banners - Professional Email Branding | iley",
      description: "Create branded email signature banners. Professional email graphics for consistent communication.",
      keywords: ["email signatures", "email branding", "signature banners", "corporate email", "professional signatures"]
    }
  },
  {
    id: "web-app-hero-animations",
    slug: "web-app-hero-animations",
    title: "Web App Hero Animations",
    subtitle: "Dynamic hero section graphics",
    description: "Generate frame sequences for hero animations that showcase your web application's dynamic value proposition.",
    heroTitle: "Animated Hero Graphics",
    heroSubtitle: "Create engaging web app hero animations",
    features: [
      "Sequential frame generation",
      "CSS animation ready",
      "Brand-consistent styling",
      "Optimized file sizes"
    ],
    prompt: "Hero animation frame 1: dashboard loads with particles, frame 2: chart grows, frame 3: team of avatars appear, flat 3-D style, brand palette",
    benefits: [
      {
        title: "User Engagement",
        description: "Dynamic visuals capture attention",
        icon: "👁️"
      },
      {
        title: "Modern Aesthetic",
        description: "Contemporary, professional animations",
        icon: "✨"
      },
      {
        title: "Conversion Focus",
        description: "Guide users toward key actions",
        icon: "🎯"
      }
    ],
    examples: [
      {
        title: "SaaS Dashboards",
        description: "Data visualization animations"
      },
      {
        title: "Product Demos",
        description: "Feature showcase sequences"
      },
      {
        title: "Landing Pages",
        description: "Value proposition animations"
      }
    ],
    seo: {
      title: "Web App Hero Animations - Dynamic Landing Graphics | iley",
      description: "Create animated hero graphics for web applications. Dynamic landing page animations.",
      keywords: ["hero animations", "web app graphics", "landing page animations", "dynamic visuals", "CSS animations"]
    }
  },
  {
    id: "brand-story-visuals",
    slug: "brand-story-visuals",
    title: "Brand Story Visuals",
    subtitle: "Visual storytelling graphics",
    description: "Create compelling visuals that tell your brand's journey, mission, and vision for about pages and presentations.",
    heroTitle: "Visual Brand Storytelling",
    heroSubtitle: "Bring your brand story to life with compelling graphics",
    features: [
      "Narrative-driven design",
      "Timeline visualization",
      "Emotional connection",
      "Brand value representation"
    ],
    prompt: "Illustration of founder handshake at sunrise, silhouettes of team behind, minimal style, warm golden tone, caption space",
    benefits: [
      {
        title: "Emotional Connection",
        description: "Connect with audiences through story",
        icon: "❤️"
      },
      {
        title: "Brand Authority",
        description: "Establish credibility and trust",
        icon: "🏆"
      },
      {
        title: "Memorable Impact",
        description: "Stories stick better than facts",
        icon: "🧠"
      }
    ],
    examples: [
      {
        title: "About Pages",
        description: "Company origin and mission"
      },
      {
        title: "Investor Decks",
        description: "Founding story presentations"
      },
      {
        title: "Team Pages",
        description: "Culture and values visualization"
      }
    ],
    seo: {
      title: "Brand Story Visuals - Company Storytelling Graphics | iley",
      description: "Create visual brand storytelling graphics. Company history and mission visualization.",
      keywords: ["brand storytelling", "company visuals", "about page graphics", "brand history", "mission visuals"]
    }
  },
  {
    id: "community-post-visuals",
    slug: "community-post-visuals",
    title: "Community Post Visuals",
    subtitle: "User-generated content optimization",
    description: "Transform user-generated content into branded community visuals while maintaining authenticity.",
    heroTitle: "Community Content Graphics",
    heroSubtitle: "Enhance user content while preserving authenticity",
    features: [
      "UGC enhancement",
      "Brand overlay integration",
      "Authenticity preservation",
      "Social media optimization"
    ],
    prompt: "User photo: crop to square 1080 × 1080, apply brand colour overlay #00A3E8 at 15% opacity, add subtle vignette, embed quote text",
    benefits: [
      {
        title: "Authentic Appeal",
        description: "Real community stories enhanced",
        icon: "👥"
      },
      {
        title: "Brand Integration",
        description: "Subtle branding without overpowering",
        icon: "🎨"
      },
      {
        title: "Social Proof",
        description: "Leveraged community engagement",
        icon: "💪"
      }
    ],
    examples: [
      {
        title: "Customer Stories",
        description: "Success testimonials"
      },
      {
        title: "Community Highlights",
        description: "User achievement features"
      },
      {
        title: "Event Recaps",
        description: "Community gathering visuals"
      }
    ],
    seo: {
      title: "Community Post Graphics - UGC Enhancement | iley",
      description: "Enhance user-generated content for community marketing. Authentic social media visuals.",
      keywords: ["community graphics", "UGC enhancement", "social media visuals", "user content", "community marketing"]
    }
  },
  {
    id: "social-story-backgrounds",
    slug: "social-story-backgrounds",
    title: "Social Story Backgrounds",
    subtitle: "Animated social media story graphics",
    description: "Create dynamic backgrounds for Instagram and Facebook stories that enhance your social media presence.",
    heroTitle: "Dynamic Story Backgrounds",
    heroSubtitle: "Engaging backgrounds for social media stories",
    features: [
      "Vertical story format",
      "Animation-ready design",
      "Brand color integration",
      "Text overlay space"
    ],
    prompt: "Vertical 1080 × 1920px: animated style loops of data-dots moving upward, brand gradient from #00A3E8 to #004577, minimal overlay space for text",
    benefits: [
      {
        title: "Story Engagement",
        description: "Higher story completion rates",
        icon: "📱"
      },
      {
        title: "Brand Consistency",
        description: "Unified social media presence",
        icon: "🎨"
      },
      {
        title: "Professional Polish",
        description: "Elevated content quality",
        icon: "✨"
      }
    ],
    examples: [
      {
        title: "Instagram Stories",
        description: "Daily content backgrounds"
      },
      {
        title: "Facebook Stories",
        description: "Business story graphics"
      },
      {
        title: "LinkedIn Stories",
        description: "Professional content backgrounds"
      }
    ],
    seo: {
      title: "Social Story Backgrounds - Instagram Story Graphics | iley",
      description: "Create dynamic backgrounds for social media stories. Animated Instagram and Facebook story graphics.",
      keywords: ["story backgrounds", "Instagram stories", "social media graphics", "story templates", "animated backgrounds"]
    }
  },
  {
    id: "persona-webinar-thumbnails",
    slug: "persona-webinar-thumbnails",
    title: "Persona Webinar Thumbnails",
    subtitle: "Audience-specific webinar graphics",
    description: "Create tailored webinar thumbnails featuring specific audience personas to increase registration rates.",
    heroTitle: "Targeted Webinar Graphics",
    heroSubtitle: "Persona-based thumbnails that resonate with your audience",
    features: [
      "Persona-specific design",
      "Professional illustration",
      "Clear value proposition",
      "Multi-format output"
    ],
    prompt: "Webinar thumbnail 1280 × 720px: illustrated CMO character pointing to dashboard analytics, title 'How CMOs reduce churn with SaaS', bright bold colours",
    benefits: [
      {
        title: "Targeted Appeal",
        description: "Speak directly to your audience",
        icon: "🎯"
      },
      {
        title: "Higher Registration",
        description: "Relevant visuals increase sign-ups",
        icon: "📈"
      },
      {
        title: "Professional Quality",
        description: "Credible, authoritative appearance",
        icon: "✨"
      }
    ],
    examples: [
      {
        title: "Executive Webinars",
        description: "C-suite focused content"
      },
      {
        title: "Technical Sessions",
        description: "Developer and IT audience"
      },
      {
        title: "Marketing Events",
        description: "Marketing professional focus"
      }
    ],
    seo: {
      title: "Webinar Thumbnails - Persona-Based Event Graphics | iley",
      description: "Create persona-specific webinar thumbnails. Targeted event graphics for higher registration rates.",
      keywords: ["webinar thumbnails", "persona graphics", "event marketing", "audience targeting", "webinar design"]
    }
  },
  {
    id: "responsive-screenshot-variants",
    slug: "responsive-screenshot-variants",
    title: "Responsive Screenshot Variants",
    subtitle: "Multi-device screenshot generation",
    description: "Automatically generate screenshot variants for desktop, tablet, and mobile with consistent styling.",
    heroTitle: "Multi-Device Screenshots",
    heroSubtitle: "Consistent visuals across all device types",
    features: [
      "Multi-device formatting",
      "Consistent styling",
      "Responsive layouts",
      "Brand overlay options"
    ],
    prompt: "Screenshot 2560×1440 (desktop), 1920×1080 (tablet), 1080×2340 (mobile), each with brand gradient overlay, same composition",
    benefits: [
      {
        title: "Device Coverage",
        description: "Optimized for all screen sizes",
        icon: "📱"
      },
      {
        title: "Consistent Branding",
        description: "Unified look across devices",
        icon: "🎨"
      },
      {
        title: "Time Efficiency",
        description: "Automated multi-format generation",
        icon: "⚡"
      }
    ],
    examples: [
      {
        title: "Product Demos",
        description: "Multi-device app showcases"
      },
      {
        title: "Website Previews",
        description: "Responsive design displays"
      },
      {
        title: "App Store Assets",
        description: "Platform-specific screenshots"
      }
    ],
    seo: {
      title: "Responsive Screenshots - Multi-Device App Visuals | iley",
      description: "Generate responsive screenshot variants for all devices. Multi-device app and website visuals.",
      keywords: ["responsive screenshots", "multi-device visuals", "app screenshots", "device mockups", "mobile responsive"]
    }
  },
  {
    id: "company-culture-visuals",
    slug: "company-culture-visuals",
    title: "Company Culture Visuals",
    subtitle: "Internal culture and team graphics",
    description: "Generate illustrations showcasing your company culture for careers pages and internal communications.",
    heroTitle: "Culture & Team Graphics",
    heroSubtitle: "Showcase your company culture with authentic visuals",
    features: [
      "Team collaboration themes",
      "Remote work representation",
      "Diversity and inclusion",
      "Company value visualization"
    ],
    prompt: "Illustration of remote team in a video-call with cheerful interaction, pastel palette, minimal line art style, size 1920×1080",
    benefits: [
      {
        title: "Employer Branding",
        description: "Attract top talent with culture visuals",
        icon: "🌟"
      },
      {
        title: "Team Unity",
        description: "Reinforce shared values and culture",
        icon: "🤝"
      },
      {
        title: "Authentic Appeal",
        description: "Genuine representation of your team",
        icon: "❤️"
      }
    ],
    examples: [
      {
        title: "Careers Pages",
        description: "Recruitment and hiring visuals"
      },
      {
        title: "Internal Comms",
        description: "Team building and culture content"
      },
      {
        title: "About Sections",
        description: "Company values illustration"
      }
    ],
    seo: {
      title: "Company Culture Graphics - Team & Workplace Visuals | iley",
      description: "Create company culture visuals for careers pages. Team collaboration and workplace graphics.",
      keywords: ["company culture", "team graphics", "workplace visuals", "career page graphics", "employee branding"]
    }
  }
]

export function getUseCaseBySlug(slug: string): UseCaseLanding | undefined {
  return useCasesLanding.find(useCase => useCase.slug === slug)
}

export function getAllUseCases(): UseCaseLanding[] {
  return useCasesLanding
}