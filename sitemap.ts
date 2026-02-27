import { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = site.url
  const staticRoutes = ['/', '/services', '/solutions', '/case-studies', '/blog', '/contact', '/legal/privacy', '/legal/terms', '/legal/cookies']

  const entries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${base}${p === '/' ? '' : p}`,
    lastModified: now,
    changeFrequency: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : 0.7,
  }))

  for (const post of getAllPosts()) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    })
  }

  return entries
}
