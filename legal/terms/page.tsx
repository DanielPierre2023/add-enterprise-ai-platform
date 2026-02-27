import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-white/70">
          Template terms for the website. Replace placeholders and validate with legal counsel.
        </p>
        <h2 className="mt-10 text-xl font-semibold">Use of the site</h2>
        <p className="mt-2 text-white/70">You agree not to misuse the site or attempt unauthorised access.</p>
        <h2 className="mt-10 text-xl font-semibold">Disclaimers</h2>
        <p className="mt-2 text-white/70">Information is provided as-is without warranties.</p>
      </main>
      <Footer />
    </div>
  )
}
