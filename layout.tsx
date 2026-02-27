import type { Metadata } from 'next'
import './globals.css'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og/og-cover.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
