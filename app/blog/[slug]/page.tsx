// Temporarily commented out due to missing exports in @/app/data/blog

// import { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import UseCaseContent from '@/components/usecases/UseCaseContent'
// import { getBlogPostBySlugData, getBlogPostsData } from '@/app/data/blog'

// interface BlogPostPageProps {
//   params: {
//     slug: string
//   }
// }

// export async function generateStaticParams() {
//   try {
//     const blogPosts = await getBlogPostsData()
//     return blogPosts.map((blogPost) => ({
//       slug: typeof blogPost.slug === 'string' ? blogPost.slug : blogPost.slug?.current,
//     }))
//   } catch (error) {
//     console.error('Error generating static params:', error)
//     return []
//   }
// }

// export async function generateMetadata({
//   params,
// }: BlogPostPageProps): Promise<Metadata> {
//   const blogPost = await getBlogPostBySlugData(params.slug)

//   if (!blogPost) {
//     return {
//       title: 'Use Case Not Found | iley',
//       description: 'The requested use case could not be found.',
//     }
//   }

//   return {
//     title: blogPost.seo?.metaTitle || `${blogPost.title} | iley`,
//     description: blogPost.seo?.metaDescription || blogPost.description,
//     keywords: blogPost.seo?.keywords || blogPost.tags,
//     openGraph: {
//       title: blogPost.seo?.metaTitle || blogPost.title,
//       description: blogPost.seo?.metaDescription || blogPost.description,
//       images: [
//         {
//           url: typeof blogPost.hero.image === 'string' ? blogPost.hero.image : blogPost.hero.image.asset?._ref || '/land_images/opt_anime.webp',
//           width: 1200,
//           height: 630,
//           alt: blogPost.hero.alt,
//         },
//       ],
//       type: 'article',
//       publishedTime: blogPost.publishDate,
//       authors: [blogPost.author.name],
//       tags: blogPost.tags || [],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: blogPost.seo?.metaTitle || blogPost.title,
//       description: blogPost.seo?.metaDescription || blogPost.description,
//       images: [typeof blogPost.hero.image === 'string' ? blogPost.hero.image : blogPost.hero.image.asset?._ref || '/land_images/opt_anime.webp'],
//     },
//     alternates: {
//       canonical: `https://iley.app/blog/${typeof blogPost.slug === 'string' ? blogPost.slug : blogPost.slug?.current}`,
//     },
//   }
// }

// export default async function BlogPostPage({ params }: BlogPostPageProps) {
//   const blogPost = await getBlogPostBySlugData(params.slug)

//   if (!blogPost) {
//     notFound()
//   }

//   // Structured data for SEO
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     "headline": blogPost.title,
//     "description": blogPost.description,
//     "image": typeof blogPost.hero.image === 'string' ? blogPost.hero.image : blogPost.hero.image.asset?._ref || '/land_images/opt_anime.webp',
//     "author": {
//       "@type": "Person",
//       "name": blogPost.author.name,
//       "jobTitle": blogPost.author.role
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "iley",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://iley.app/logo.png"
//       }
//     },
//     "datePublished": blogPost.publishDate,
//     "dateModified": blogPost.publishDate,
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": `https://iley.app/blog/${typeof blogPost.slug === 'string' ? blogPost.slug : blogPost.slug?.current}`
//     },
//     "keywords": blogPost.tags?.join(", ") || "",
//     "articleSection": blogPost.category,
//     "genre": "Technology",
//     "wordCount": (blogPost.content?.introduction?.length || 0) + (blogPost.content?.conclusion?.length || 0) + 
//                  (blogPost.content?.sections?.reduce((acc, section) => acc + (section.content?.length || 0), 0) || 0)
//   }

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(structuredData),
//         }}
//       />
//       <UseCaseContent useCase={blogPost} />
//     </>
//   )
// }

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Blog Post</h1>
        <p className="text-zinc-400">This page is temporarily disabled.</p>
      </div>
    </div>
  )
}