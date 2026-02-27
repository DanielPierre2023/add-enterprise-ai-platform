import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Cookie Policy</h1>
        <p className="mt-4 text-white/70">
          If you enable analytics or marketing tags, document the cookies here (purpose, duration, provider).
        </p>
      </main>
      <Footer />
    </div>
  )
}
