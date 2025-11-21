import Link from 'next/link'
import { ArrowLeft, Search, BookOpen } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
export default function BlogPostNotFound() {
  // Note: This is a static component, no dynamic data fetching
  const featuredBlogPosts = [] // Could be populated with static examples or removed

  return (
    <div className="min-h-screen bg-black selection:bg-[#a3e635] selection:text-black">
      <SiteHeader />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* 404 Content */}
          <div className="mb-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Use Case Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The use case you're looking for doesn't exist or may have been moved. 
              Let's help you find what you're looking for.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Blog
              </Link>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Search className="w-4 h-4" />
                Search Blog
              </Link>
            </div>
          </div>

          {/* Featured Blog */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-light text-gray-900 mb-8">
              You might be interested in these use cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogPosts.map((blogPost) => (
                <Link
                  key={blogPost.id}
                  href={`/blog/${blogPost.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {blogPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blogPost.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{blogPost.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPost.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <SiteFooter />
    </div>
  )
}