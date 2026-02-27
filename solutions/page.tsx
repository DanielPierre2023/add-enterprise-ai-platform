import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const solutions = [
  {
    title: 'RAG Knowledge Hub',
    desc: 'Enterprise search + chat over your docs with citations, RBAC and audit logs.',
    bullets: ['Doc ingestion', 'RBAC', 'Citations', 'Feedback + evals'],
  },
  {
    title: 'AI Operations Automation',
    desc: 'Workflow automations that triage, route and resolve requests using AI with approvals.',
    bullets: ['Agentic workflows', 'Approvals', 'Integrations', 'Observability'],
  },
  {
    title: 'Customer Support Copilot',
    desc: 'Assist agents with context, suggested replies, and ticket summarisation.',
    bullets: ['CRM integration', 'Tone control', 'PII safety', 'Analytics'],
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Featured Solutions</h1>
        <p className="mt-2 max-w-3xl text-white/70">
          Packaged solution blueprints that we tailor to your data, security, and workflows.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-brand-primary">
                Request a demo →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
