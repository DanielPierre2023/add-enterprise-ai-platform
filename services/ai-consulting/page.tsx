import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceLayout } from '@/components/ServiceLayout'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceLayout
        title="AI Consulting & Strategy"
        subtitle="A pragmatic AI strategy: governance, architecture decisions, risk management and a clear execution roadmap aligned with business outcomes."
        outcomes={[
          'AI roadmap + prioritised backlog',
          'Governance model (ownership, data, security, compliance)',
          'Reference architecture + build/buy recommendations',
          'ROI model + rollout plan for teams',
        ]}
        phases={[
          {
            name: '1) Stakeholder alignment',
            items: ['Executive workshop', 'Business process mapping', 'Use-case scoring (impact × feasibility)', 'Success metrics'],
          },
          {
            name: '2) Technical assessment',
            items: ['Data + systems inventory', 'Security/compliance requirements', 'Vendor landscape evaluation', 'Architecture options'],
          },
          {
            name: '3) Roadmap & governance',
            items: ['Delivery plan (90 days → 12 months)', 'Operating model + RACI', 'Evals and monitoring strategy', 'Budget and resourcing'],
          },
        ]}
      />
      <Footer />
    </div>
  )
}
