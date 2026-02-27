import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-white/70">
          Email us at <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or use the form.
        </p>

        <form
          className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6"
          action="/api/contact"
          method="post"
        >
          <div>
            <label className="text-sm text-white/70">Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-brand-primary"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-brand-primary"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-brand-primary"
            />
          </div>
          <button className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
            Send
          </button>
          <p className="text-xs text-white/50">
            By submitting, you agree to our <a className="underline" href="/legal/privacy">Privacy Policy</a>.
          </p>
        </form>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
          <div className="text-sm font-semibold">Newsletter</div>
          <p className="mt-2 text-sm text-white/70">Monthly insights on enterprise AI delivery.</p>
          <form className="mt-4 flex gap-2" action="/api/newsletter" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-brand-primary"
            />
            <button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90">Subscribe</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
