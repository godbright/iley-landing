import { HowToSchemaProps } from '@/components/HowToSchema'

// Common HowTo schemas for image editing workflows
export const imageGenerationHowTo: Omit<HowToSchemaProps, 'children'> = {
  name: "How to Generate AI Images from Text with iley",
  description: "Learn how to create stunning AI-generated images from text prompts using iley's advanced AI models including FLUX, DALL-E, and Stable Diffusion.",
  image: "https://iley.app/land_images/opt_anime.webp",
  totalTime: "PT2M",
  supply: [
    "Text description or prompt",
    "Internet connection",
    "Web browser"
  ],
  tool: [
    "iley AI Image Generator",
    "FLUX AI Model",
    "DALL-E Integration",
    "Stable Diffusion"
  ],
  steps: [
    {
      name: "Sign up for iley",
      text: "Create a free account on iley.app to access AI image generation tools. You'll get free credits to start creating images immediately.",
      image: "https://iley.app/media/signup-step.webp",
      url: "https://iley.app"
    },
    {
      name: "Enter your text prompt",
      text: "Describe the image you want to create in detail. Be specific about style, colors, composition, and mood. For example: 'A serene mountain landscape with cherry blossoms in anime style'",
      image: "https://iley.app/media/prompt-step.webp",
      url: "https://iley.app/home"
    },
    {
      name: "Choose AI model and settings",
      text: "Select from FLUX, DALL-E, or Stable Diffusion models. Adjust image dimensions, style parameters, and quality settings based on your needs.",
      image: "https://iley.app/media/model-selection.webp"
    },
    {
      name: "Generate your image",
      text: "Click the generate button and wait 10-30 seconds for the AI to create your image. The advanced models will interpret your prompt and create unique visual content.",
      image: "https://iley.app/media/generation-process.webp"
    },
    {
      name: "Download and share",
      text: "Once generated, download your image in high resolution (up to 4K). You can also generate variations or edit the image further using iley's editing tools.",
      image: "https://iley.app/media/download-step.webp"
    }
  ],
  estimatedCost: {
    currency: "USD",
    value: "0.00"
  },
  yield: "One high-quality AI-generated image"
}

export const backgroundRemovalHowTo: Omit<HowToSchemaProps, 'children'> = {
  name: "How to Remove Background from Images with AI",
  description: "Step-by-step guide to automatically remove backgrounds from photos using iley's AI-powered background removal tool.",
  image: "https://iley.app/land_images/opt_background_removal.webp",
  totalTime: "PT1M",
  supply: [
    "Image file (JPG, PNG, or WebP)",
    "Internet connection"
  ],
  tool: [
    "iley Background Remover",
    "AI Segmentation Technology",
    "Edge Detection AI"
  ],
  steps: [
    {
      name: "Upload your image",
      text: "Click the upload button and select the image you want to remove the background from. Supported formats include JPG, PNG, and WebP up to 10MB.",
      image: "https://iley.app/media/upload-image.webp",
      url: "https://iley.app/home"
    },
    {
      name: "Select background removal tool",
      text: "Click on the 'Remove Background' option in the editing toolbar. The AI will automatically detect the main subject in your image.",
      image: "https://iley.app/media/bg-removal-tool.webp"
    },
    {
      name: "AI processes the image",
      text: "Wait 5-15 seconds while the AI analyzes your image and precisely removes the background while preserving fine details like hair and edges.",
      image: "https://iley.app/media/ai-processing.webp"
    },
    {
      name: "Review and refine",
      text: "Check the result and use manual touch-up tools if needed to perfect the edges or add back any incorrectly removed areas.",
      image: "https://iley.app/media/refine-edges.webp"
    },
    {
      name: "Download transparent image",
      text: "Download your image with transparent background as a PNG file, ready to use in any design project or application.",
      image: "https://iley.app/media/download-transparent.webp"
    }
  ],
  estimatedCost: {
    currency: "USD",
    value: "0.10"
  },
  yield: "Image with transparent background"
}

export const imageUpscalingHowTo: Omit<HowToSchemaProps, 'children'> = {
  name: "How to Upscale Images with AI for Better Quality",
  description: "Learn how to enhance and upscale low-resolution images using AI to improve quality and increase resolution up to 4K.",
  image: "https://iley.app/land_images/opt_upscaling.webp",
  totalTime: "PT3M",
  supply: [
    "Low-resolution image",
    "iley account"
  ],
  tool: [
    "iley AI Upscaler",
    "Real-ESRGAN Technology",
    "Super Resolution AI"
  ],
  steps: [
    {
      name: "Upload low-resolution image",
      text: "Upload the image you want to upscale. The AI works best with images that are at least 100x100 pixels and can upscale up to 16x the original size.",
      url: "https://iley.app/home"
    },
    {
      name: "Select upscaling factor",
      text: "Choose the upscaling factor (2x, 4x, or 8x) based on your needs. Higher factors take longer but provide more detail enhancement."
    },
    {
      name: "Choose enhancement type",
      text: "Select the type of enhancement: Photo (for realistic images), Art (for illustrations), or Anime (for cartoon/anime style images)."
    },
    {
      name: "Process with AI",
      text: "The AI analyzes your image and intelligently adds detail and sharpness while maintaining the original quality and characteristics."
    },
    {
      name: "Download enhanced image",
      text: "Download your high-resolution, enhanced image. The result will have improved clarity and detail compared to simple scaling methods."
    }
  ],
  estimatedCost: {
    currency: "USD",
    value: "0.20"
  },
  yield: "High-resolution enhanced image"
}

export const styleTransferHowTo: Omit<HowToSchemaProps, 'children'> = {
  name: "How to Apply Artistic Styles to Photos with AI",
  description: "Transform your photos into artistic masterpieces by applying various art styles using AI style transfer technology.",
  image: "https://iley.app/land_images/opt_style_transfer.webp",
  totalTime: "PT2M",
  supply: [
    "Source photo",
    "Style preference"
  ],
  tool: [
    "iley Style Transfer",
    "Neural Style Transfer AI",
    "Artistic Filter Engine"
  ],
  steps: [
    {
      name: "Upload your photo",
      text: "Upload the photo you want to transform. Portrait photos and landscape images work particularly well for style transfer.",
      url: "https://iley.app/home"
    },
    {
      name: "Choose artistic style",
      text: "Select from pre-defined styles like Van Gogh, Picasso, Oil Painting, Watercolor, or Anime style. Each style will transform your photo differently."
    },
    {
      name: "Adjust style intensity",
      text: "Use the intensity slider to control how strongly the style is applied. Lower values preserve more of the original photo, higher values create more dramatic transformations."
    },
    {
      name: "Generate styled image",
      text: "Click generate and wait while the AI applies the artistic style to your photo. The process typically takes 15-45 seconds depending on image size."
    },
    {
      name: "Fine-tune and download",
      text: "Review the result and make any final adjustments to colors or contrast before downloading your artistic transformation."
    }
  ],
  estimatedCost: {
    currency: "USD",
    value: "0.15"
  },
  yield: "Artistically styled image"
}

export type { HowToSchemaProps }