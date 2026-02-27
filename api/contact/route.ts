import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
})

export async function POST(req: Request) {
  const form = await req.formData()
  const parsed = schema.safeParse({
    name: form.get('name'),
    email: form.get('email'),
    message: form.get('message'),
  })

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || 'contact@add-individual-solutions.com'
  const from = process.env.CONTACT_FROM_EMAIL || 'info@add-individual-solutions.com'

  if (!resendKey) {
    return NextResponse.json(
      { ok: false, error: 'RESEND_API_KEY not configured' },
      { status: 501 }
    )
  }

  const resend = new Resend(resendKey)

  await resend.emails.send({
    from,
    to,
    subject: `New website inquiry from ${parsed.data.name}`,
    replyTo: parsed.data.email,
    text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
  })

  return NextResponse.redirect(new URL('/contact?sent=1', req.url), 303)
}
