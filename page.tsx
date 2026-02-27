import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(244,182,62,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(230,57,70,0.18),transparent_35%),radial-gradient(circle_at_40%_90%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Enterprise AI • Full‑stack delivery • EU‑ready
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Enterprise AI systems that ship — fast, secure, governed.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                We build custom AI software and LLM platforms for enterprises, SMBs, public sector and NGOs.
                From strategy to production: data pipelines, RAG, agents, automation and observability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
                >
                  Book a discovery call
                </Link>
                <Link
                  href="/solutions"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore solutions
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 text-xs text-white/65">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white">Security‑first</div>
                  SOC2‑ready patterns, least‑privilege, audit trails.
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white">Latency‑aware</div>
                  Caching, streaming, vector search + tuning.
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white">Governed</div>
                  Guardrails, evals, monitoring and cost controls.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-2xl" />
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <Image
                  src="/og/og-cover.png"
                  alt="ADD Individual Solutions"
                  width={1200}
                  height={630}
                  className="h-auto w-full rounded-2xl"
                  priority
                />
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-white">Use‑case driven</div>
                    Identify ROI, data readiness, and deployment path.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="text-white">Production tooling</div>
                    CI/CD, feature flags, tracing, incident playbooks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">What we do</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            A complete delivery capability: discovery → architecture → implementation → training → ops.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Custom AI Software Development',
                desc: 'Full‑stack apps with AI as a core capability. Secure APIs, workflows, and integrations.',
                href: '/services/custom-ai-software',
              },
              {
                title: 'AI Consulting & Strategy',
                desc: 'Roadmaps, governance, vendor selection, and ROI models for leadership and teams.',
                href: '/services/ai-consulting',
              },
              {
                title: 'Enterprise LLM Systems',
                desc: 'RAG, agents, evaluation harnesses, observability and cost controls.',
                href: '/services/enterprise-llm',
              },
            ].map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <div className="mt-4 text-sm font-semibold text-brand-primary">Learn more →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold">Ready to build something real?</h2>
                <p className="mt-2 text-white/70">
                  Tell us your use case. We’ll propose an architecture, delivery plan and ROI estimate.
                </p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
                >
                  Contact
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  See case studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
