import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-white/70">
          This policy is a practical template for an EU-based business. Replace placeholders and have legal counsel review
          before publishing.
        </p>
        <h2 className="mt-10 text-xl font-semibold">Controller</h2>
        <p className="mt-2 text-white/70">ADD Individual Solutions Ltd, Pyla, Cyprus (European Union).</p>
        <h2 className="mt-10 text-xl font-semibold">What we collect</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-white/70">
          <li>Contact form data (name, email, message).</li>
          <li>Newsletter subscriptions (email address).</li>
          <li>Basic analytics (aggregated) if enabled.</li>
        </ul>
        <h2 className="mt-10 text-xl font-semibold">Legal basis</h2>
        <p className="mt-2 text-white/70">Consent and legitimate interest (GDPR Art. 6).</p>
        <h2 className="mt-10 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-white/70">Email: privacy@add-individual-solutions.com</p>
      </main>
      <Footer />
    </div>
  )
}
