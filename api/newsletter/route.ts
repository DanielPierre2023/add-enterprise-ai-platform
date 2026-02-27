import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  email: z.string().email().max(200),
})

export async function POST(req: Request) {
  const form = await req.formData()
  const parsed = schema.safeParse({ email: form.get('email') })
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!resendKey || !audienceId) {
    // Keep graceful for MVP
    return NextResponse.redirect(new URL('/contact?subscribed=0', req.url), 303)
  }

  const resend = new Resend(resendKey)

  await resend.contacts.create({
    audienceId,
    email: parsed.data.email,
  })

  return NextResponse.redirect(new URL('/contact?subscribed=1', req.url), 303)
}
