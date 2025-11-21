import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getUseCaseBySlug, getAllUseCases } from '@/app/data/usecases-landing'
import UseCaseLandingComponent from '@/components/usecases/UseCaseLanding'

interface UseCasePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const useCases = getAllUseCases()
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }))
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)

  if (!useCase) {
    return {
      title: 'Use Case Not Found | iley',
      description: 'The requested use case could not be found.',
    }
  }

  return {
    title: useCase.seo.title,
    description: useCase.seo.description,
    keywords: useCase.seo.keywords,
    openGraph: {
      title: useCase.seo.title,
      description: useCase.seo.description,
      type: 'website',
      url: `https://iley.app/usecases/${useCase.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: useCase.seo.title,
      description: useCase.seo.description,
    },
    alternates: {
      canonical: `https://iley.app/usecases/${useCase.slug}`,
    },
  }
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)

  if (!useCase) {
    notFound()
  }

  return <UseCaseLandingComponent useCase={useCase} />
}