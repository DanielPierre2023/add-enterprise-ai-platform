import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const dynamic = 'force-static'

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-2 max-w-3xl text-white/70">
          Notes from the field: building, scaling and governing enterprise AI.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <div className="text-xs text-white/60">{new Date(p.date).toLocaleDateString()}</div>
              <div className="mt-2 text-xl font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 text-sm font-semibold text-brand-primary">Read →</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
