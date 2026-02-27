import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const services = [
  {
    title: 'Custom AI Software Development',
    href: '/services/custom-ai-software',
    bullets: ['Product discovery', 'Full‑stack build', 'Integrations', 'Security + compliance'],
  },
  {
    title: 'AI Consulting & Strategy',
    href: '/services/ai-consulting',
    bullets: ['AI roadmap', 'Governance', 'Vendor selection', 'ROI + business case'],
  },
  {
    title: 'Enterprise LLM Systems',
    href: '/services/enterprise-llm',
    bullets: ['RAG + agents', 'Evaluation harness', 'Observability', 'Cost controls'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="mt-2 max-w-3xl text-white/70">
          End‑to‑end delivery: from discovery to production and long‑term operations.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <div className="text-lg font-semibold">{s.title}</div>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-semibold text-brand-primary">Details →</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
