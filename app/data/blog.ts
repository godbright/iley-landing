// import { BlogPost } from '@/types/blog'
// import { sanityClient } from '@/lib/sanity'

// // Helper function to transform Sanity image to URL
// function transformSanityImage(sanityImage: any): string {
//   if (!sanityImage?.asset?._ref) {
//     return '/land_images/opt_anime.webp' // fallback image
//   }
//   // For now, just return the ref - in production you'd use Sanity's CDN
//   return sanityImage.asset._ref || '/land_images/opt_anime.webp'
// }

// // Helper function to transform Sanity use case data
// function transformBlogPostForDisplay(sanityBlogPost: any): BlogPost {
//   return {
//     ...sanityBlogPost,
//     id: sanityBlogPost._id,
//     slug: sanityBlogPost.slug?.current || sanityBlogPost.slug,
//     category: typeof sanityBlogPost.category === 'string' 
//       ? sanityBlogPost.category 
//       : sanityBlogPost.category?.slug?.current || sanityBlogPost.category?.name,
//     hero: {
//       image: transformSanityImage(sanityBlogPost.hero?.image),
//       alt: sanityBlogPost.hero?.alt || sanityBlogPost.title
//     },
//     examples: sanityBlogPost.examples?.map((example: any) => ({
//       ...example,
//       id: example._key,
//       beforeImage: transformSanityImage(example.beforeImage),
//       afterImage: transformSanityImage(example.afterImage),
//     })) || [],
//     content: {
//       ...sanityBlogPost.content,
//       sections: sanityBlogPost.content?.sections?.map((section: any) => ({
//         ...section,
//         id: section._key,
//         image: section.image ? {
//           src: transformSanityImage(section.image.src),
//           alt: section.image.alt || '',
//           caption: section.image.caption
//         } : undefined,
//         comparison: section.comparison ? {
//           before: {
//             ...section.comparison.before,
//             image: section.comparison.before?.image 
//               ? transformSanityImage(section.comparison.before.image)
//               : undefined
//           },
//           after: {
//             ...section.comparison.after,
//             image: section.comparison.after?.image 
//               ? transformSanityImage(section.comparison.after.image)
//               : undefined
//           }
//         } : undefined
//       })) || []
//     },
//     relatedBlogPosts: sanityBlogPost.relatedBlogPosts?.map((related: any) => related._id) || [],
//     seo: {
//       metaTitle: sanityBlogPost.seo?.metaTitle || `${sanityBlogPost.title} | iley`,
//       metaDescription: sanityBlogPost.seo?.metaDescription || sanityBlogPost.description,
//       keywords: sanityBlogPost.seo?.keywords || sanityBlogPost.tags || []
//     }
//   }
// }

// // Helper function to transform Sanity category data
// function transformCategoryForDisplay(sanityCategory: any): any {
//   return {
//     ...sanityCategory,
//     id: sanityCategory.slug?.current || sanityCategory._id
//   }
// }

// // Fetch blog posts from Sanity CMS
// export async function getBlogPostsData(): Promise<BlogPost[]> {
//   try {
//     const sanityBlogPosts = await sanityClient.fetch(`*[_type == "post"] | order(featured desc, publishDate desc) {
//       _id,
//       slug,
//       title,
//       subtitle,
//       description,
//       category,
//       featured,
//       readTime,
//       publishDate,
//       author,
//       hero,
//       tags
//     }`)
    
//     console.log('✅ Found Sanity blog posts:', sanityBlogPosts.length)
//     return sanityBlogPosts.map(transformBlogPostForDisplay)
//   } catch (error) {
//     console.error('❌ Failed to fetch blog posts from Sanity:', error)
//     return []
//   }
// }

// export async function getBlogPostBySlugData(slug: string): Promise<BlogPost | undefined> {
//   try {
//     const sanityBlogPost = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0] {
//       _id,
//       slug,
//       title,
//       subtitle,
//       description,
//       category,
//       featured,
//       readTime,
//       publishDate,
//       author,
//       hero,
//       content,
//       examples,
//       tags
//     }`, { slug })
    
//     if (sanityBlogPost) {
//       return transformBlogPostForDisplay(sanityBlogPost)
//     }
//     return undefined
//   } catch (error) {
//     console.error('Failed to fetch blog post from Sanity:', error)
//     return undefined
//   }
// }

// export async function getFeaturedBlogPostsData(): Promise<BlogPost[]> {
//   try {
//     const sanityBlogPosts = await sanityClient.fetch(`*[_type == "post" && featured == true] | order(publishDate desc) [0...6] {
//       _id,
//       slug,
//       title,
//       subtitle,
//       description,
//       category,
//       featured,
//       readTime,
//       publishDate,
//       author,
//       hero,
//       tags
//     }`)
    
//     console.log('✅ Found featured blog posts:', sanityBlogPosts.length)
//     return sanityBlogPosts.map(transformBlogPostForDisplay)
//   } catch (error) {
//     console.error('Failed to fetch featured blog posts from Sanity:', error)
//     return []
//   }
// }

// export async function getBlogPostsByCategoryData(category: string): Promise<BlogPost[]> {
//   try {
//     const sanityBlogPosts = await sanityClient.fetch(`*[_type == "post" && category->slug.current == $category] | order(featured desc, publishDate desc) {
//       _id,
//       slug,
//       title,
//       subtitle,
//       description,
//       category,
//       featured,
//       readTime,
//       publishDate,
//       author,
//       hero,
//       tags
//     }`, { category })
    
//     console.log('✅ Found blog posts by category:', sanityBlogPosts.length)
//     return sanityBlogPosts.map(transformBlogPostForDisplay)
//   } catch (error) {
//     console.error('Failed to fetch blog posts by category from Sanity:', error)
//     return []
//   }
// }

// export async function getBlogCategoriesData(): Promise<any[]> {
//   try {
//     const sanityCategories = await sanityClient.fetch(`*[_type == "category"] | order(order asc) {
//       _id,
//       name,
//       description,
//       icon,
//       color,
//       slug
//     }`)
    
//     console.log('✅ Found Sanity categories:', sanityCategories.length)
//     return sanityCategories.map(transformCategoryForDisplay)
//   } catch (error) {
//     console.error('Failed to fetch categories from Sanity:', error)
//     return []
//   }
// }

// export async function getRelatedBlogPostsData(blogPostId: string): Promise<BlogPost[]> {
//   try {
//     const allBlogPosts = await getBlogPostsData()
//     const currentBlogPost = allBlogPosts.find(post => post.id === blogPostId || post._id === blogPostId)
    
//     if (!currentBlogPost) return []
    
//     // Get related blog posts by category or explicit relations
//     return allBlogPosts.filter(post => 
//       (post.id !== blogPostId && post._id !== blogPostId) &&
//       (post.category === currentBlogPost.category || 
//        currentBlogPost.relatedBlogPosts?.includes(post.id) ||
//        currentBlogPost.relatedBlogPosts?.includes(post._id))
//     ).slice(0, 3)
//   } catch (error) {
//     console.error('Failed to fetch related blog posts:', error)
//     return []
//   }
// }