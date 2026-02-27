import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceLayout } from '@/components/ServiceLayout'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceLayout
        title="Enterprise LLM Systems"
        subtitle="RAG, agents and evaluation pipelines with governance, observability and cost controls — built for real production environments."
        outcomes={[
          'Retrieval-augmented generation (RAG) over your enterprise knowledge',
          'Agentic workflows with guardrails and approvals',
          'Evaluation harness + regression tests for quality',
          'Observability (tracing, feedback loops, cost and latency metrics)',
        ]}
        phases={[
          {
            name: '1) Design',
            items: ['Knowledge sources + permissions model', 'Vector search strategy', 'Prompt + tool design', 'Threat modeling + privacy'],
          },
          {
            name: '2) Implement',
            items: ['Ingestion + indexing pipeline', 'RAG endpoints + caching', 'Evals + golden datasets', 'UI/UX for citations + control'],
          },
          {
            name: '3) Operate',
            items: ['Drift monitoring', 'Cost budgets + rate limits', 'Human-in-the-loop workflows', 'Incident response playbooks'],
          },
        ]}
      />
      <Footer />
    </div>
  )
}
