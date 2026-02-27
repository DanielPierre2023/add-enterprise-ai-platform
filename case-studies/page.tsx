import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const cases = [
  {
    title: 'Latency & scaling for AI content workloads',
    industry: 'Media / Content',
    result: 'Reduced p95 latency, improved cache hit-rates, predictable costs.',
  },
  {
    title: 'Enterprise RAG with governance',
    industry: 'Professional Services',
    result: 'Search + chat over internal knowledge with RBAC and audit trail.',
  },
  {
    title: 'Automation pipeline for customer operations',
    industry: 'SaaS',
    result: 'Faster ticket resolution with human-in-the-loop approvals.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Case Studies</h1>
        <p className="mt-2 max-w-3xl text-white/70">
          Representative examples. We can share detailed writeups under NDA.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">{c.industry}</div>
              <div className="mt-2 text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-white/70">{c.result}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
            Ask for a tailored plan
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
