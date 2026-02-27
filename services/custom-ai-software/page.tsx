import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceLayout } from '@/components/ServiceLayout'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceLayout
        title="Custom AI Software Development"
        subtitle="Enterprise-grade full-stack engineering with AI as a core capability: secure APIs, workflows, integrations, and measurable outcomes."
        outcomes={[
          'Production-ready AI features integrated into your core product',
          'Secure architecture (RBAC, audit trails, rate limiting)',
          'Automated workflows that reduce manual ops and cost',
          'Monitoring, evals, and continuous improvement loops',
        ]}
        phases={[
          {
            name: '1) Discovery (1–2 weeks)',
            items: ['Use-case mapping + KPI definition', 'Data readiness review', 'Risk + compliance constraints', 'Architecture proposal + milestones'],
          },
          {
            name: '2) Build (2–8+ weeks)',
            items: ['Frontend + backend implementation', 'AI pipeline (RAG/agents) + evals', 'Integrations (CRM, ERP, SSO)', 'QA + security hardening'],
          },
          {
            name: '3) Launch (1–2 weeks)',
            items: ['Production deployment', 'Observability + alerts', 'Runbooks + incident response', 'Team enablement + docs'],
          },
          {
            name: '4) Operate (ongoing)',
            items: ['Performance tuning', 'Cost controls', 'Model/Prompt iteration', 'Governance + reporting'],
          },
        ]}
      />
      <Footer />
    </div>
  )
}
