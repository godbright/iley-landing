import { UseCase, UseCaseCategory } from '@/types/usecase'
import { queryFromSanity } from '@/lib/sanity-browser'
import { useCases as staticUseCases, useCaseCategories as staticCategories } from './usecases'

// Helper function to transform Sanity image to URL
function transformSanityImage(sanityImage: any): string {
  if (!sanityImage?.asset?._ref) {
    return '/land_images/opt_anime.webp' // fallback image
  }
  // For now, just return the ref - in production you'd use Sanity's CDN
  return sanityImage.asset._ref || '/land_images/opt_anime.webp'
}

// Helper function to transform Sanity use case data
function transformUseCaseForDisplay(sanityUseCase: any): UseCase {
  return {
    ...sanityUseCase,
    id: sanityUseCase._id,
    slug: sanityUseCase.slug?.current || sanityUseCase.slug,
    category: typeof sanityUseCase.category === 'string' 
      ? sanityUseCase.category 
      : sanityUseCase.category?.slug?.current || sanityUseCase.category?.name,
    hero: {
      image: transformSanityImage(sanityUseCase.hero?.image),
      alt: sanityUseCase.hero?.alt || sanityUseCase.title
    },
    examples: sanityUseCase.examples?.map((example: any) => ({
      ...example,
      id: example._key,
      beforeImage: transformSanityImage(example.beforeImage),
      afterImage: transformSanityImage(example.afterImage),
    })) || [],
    content: {
      ...sanityUseCase.content,
      sections: sanityUseCase.content?.sections?.map((section: any) => ({
        ...section,
        id: section._key,
        image: section.image ? {
          src: transformSanityImage(section.image.src),
          alt: section.image.alt || '',
          caption: section.image.caption
        } : undefined,
        comparison: section.comparison ? {
          before: {
            ...section.comparison.before,
            image: section.comparison.before?.image 
              ? transformSanityImage(section.comparison.before.image)
              : undefined
          },
          after: {
            ...section.comparison.after,
            image: section.comparison.after?.image 
              ? transformSanityImage(section.comparison.after.image)
              : undefined
          }
        } : undefined
      })) || []
    },
    relatedUseCases: sanityUseCase.relatedUseCases?.map((related: any) => related._id) || [],
    seo: {
      metaTitle: sanityUseCase.seo?.metaTitle || `${sanityUseCase.title} | iley`,
      metaDescription: sanityUseCase.seo?.metaDescription || sanityUseCase.description,
      keywords: sanityUseCase.seo?.keywords || sanityUseCase.tags || []
    }
  }
}

// Helper function to transform Sanity category data
function transformCategoryForDisplay(sanityCategory: any): UseCaseCategory {
  return {
    ...sanityCategory,
    id: sanityCategory.slug?.current || sanityCategory._id
  }
}

// Hybrid data fetching functions with fallbacks
export async function getUseCasesData(): Promise<UseCase[]> {
  try {
    const sanityUseCases = await queryFromSanity(`*[_type == "useCase"] | order(featured desc, publishDate desc) {
      _id,
      slug,
      title,
      subtitle,
      description,
      category,
      featured,
      readTime,
      publishDate,
      author,
      hero,
      tags
    }`)
    
    if (sanityUseCases && sanityUseCases.length > 0) {
      console.log('✅ Found Sanity use cases:', sanityUseCases.length)
      return sanityUseCases.map(transformUseCaseForDisplay)
    }
  } catch (error) {
    console.warn('Failed to fetch from Sanity, using static data:', error)
  }
  
  console.log('📁 Using static data fallback')
  // Fallback to static data
  return staticUseCases
}

export async function getUseCaseBySlugData(slug: string): Promise<UseCase | undefined> {
  try {
    const sanityUseCase = await queryFromSanity(`*[_type == "useCase" && slug.current == $slug][0] {
      _id,
      slug,
      title,
      subtitle,
      description,
      category,
      featured,
      readTime,
      publishDate,
      author,
      hero,
      content,
      examples,
      tags
    }`, { slug })
    
    if (sanityUseCase) {
      return transformUseCaseForDisplay(sanityUseCase)
    }
  } catch (error) {
    console.warn('Failed to fetch use case from Sanity, using static data:', error)
  }
  
  // Fallback to static data
  return staticUseCases.find(useCase => useCase.slug === slug)
}

export async function getFeaturedUseCasesData(): Promise<UseCase[]> {
  try {
    const sanityUseCases = await queryFromSanity(`*[_type == "useCase" && featured == true] | order(publishDate desc) [0...6] {
      _id,
      slug,
      title,
      subtitle,
      description,
      category,
      featured,
      readTime,
      publishDate,
      author,
      hero,
      tags
    }`)
    
    if (sanityUseCases && sanityUseCases.length > 0) {
      return sanityUseCases.map(transformUseCaseForDisplay)
    }
  } catch (error) {
    console.warn('Failed to fetch featured use cases from Sanity, using static data:', error)
  }
  
  // Fallback to static data
  return staticUseCases.filter(useCase => useCase.featured)
}

export async function getUseCasesByCategoryData(category: string): Promise<UseCase[]> {
  try {
    const sanityUseCases = await queryFromSanity(`*[_type == "useCase" && category->slug.current == $category] | order(featured desc, publishDate desc) {
      _id,
      slug,
      title,
      subtitle,
      description,
      category,
      featured,
      readTime,
      publishDate,
      author,
      hero,
      tags
    }`, { category })
    
    if (sanityUseCases && sanityUseCases.length > 0) {
      return sanityUseCases.map(transformUseCaseForDisplay)
    }
  } catch (error) {
    console.warn('Failed to fetch use cases by category from Sanity, using static data:', error)
  }
  
  // Fallback to static data
  return staticUseCases.filter(useCase => useCase.category === category)
}

export async function getCategoriesData(): Promise<UseCaseCategory[]> {
  try {
    const sanityCategories = await queryFromSanity(`*[_type == "useCaseCategory"] | order(order asc) {
      _id,
      name,
      description,
      icon,
      color,
      slug
    }`)
    
    if (sanityCategories && sanityCategories.length > 0) {
      console.log('✅ Found Sanity categories:', sanityCategories.length)
      return sanityCategories.map(transformCategoryForDisplay)
    }
  } catch (error) {
    console.warn('Failed to fetch categories from Sanity, using static data:', error)
  }
  
  console.log('📁 Using static categories fallback')
  // Fallback to static data
  return staticCategories
}

export async function getRelatedUseCasesData(useCaseId: string): Promise<UseCase[]> {
  try {
    const allUseCases = await getUseCasesData()
    const currentUseCase = allUseCases.find(uc => uc.id === useCaseId || uc._id === useCaseId)
    
    if (!currentUseCase) return []
    
    // Get related use cases by category or explicit relations
    return allUseCases.filter(uc => 
      (uc.id !== useCaseId && uc._id !== useCaseId) &&
      (uc.category === currentUseCase.category || 
       currentUseCase.relatedUseCases?.includes(uc.id) ||
       currentUseCase.relatedUseCases?.includes(uc._id))
    ).slice(0, 3)
  } catch (error) {
    console.warn('Failed to fetch related use cases:', error)
    return []
  }
}