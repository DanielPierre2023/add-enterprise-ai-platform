import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/blog'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  const title = post?.title ?? 'ADD Individual Solutions'
  const desc = post?.description ?? 'Enterprise AI engineering & full-stack delivery.'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 56,
          background: 'linear-gradient(135deg, #0b0f14 0%, #121a24 60%, rgba(244,182,62,0.15) 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 700 }}>
            <span style={{ color: '#F4B63E' }}>ADD</span> Individual Solutions
          </div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)' }}>Blog</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 26, color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>{desc}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: 'rgba(255,255,255,0.75)' }}>
          <div>our vision your way</div>
          <div style={{ color: '#E63946' }}>add-individual-solutions.com</div>
        </div>
      </div>
    ),
    size
  )
}
