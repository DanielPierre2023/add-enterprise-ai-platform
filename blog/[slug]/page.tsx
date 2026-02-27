import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAllPosts, getPost, renderMarkdown } from '@/lib/blog'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  const url = `${site.url}/blog/${post.slug}`
  const og = `/blog/${post.slug}/opengraph-image`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [og],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return notFound()
  const html = await renderMarkdown(post.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'ADD Individual Solutions' },
    publisher: { '@type': 'Organization', name: 'ADD Individual Solutions' },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <div className="text-xs text-white/60">{new Date(post.date).toLocaleDateString()}</div>
        <h1 className="mt-2 text-3xl font-semibold">{post.title}</h1>
        <p className="mt-3 text-white/70">{post.description}</p>

        <article className="prose prose-invert mt-10 max-w-none" dangerouslySetInnerHTML={{ __html: html }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  )
}
