'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface TesLayoutProps {
  children: React.ReactNode
  dimensi: 1 | 2 | 3 | 4
  judul: string
  subjudul: string
  intro: string
  hrefBack: string
  hrefNext: string
  labelNext?: string
  onNext?: () => void
  canProceed?: boolean
}

const DIMENSI_META = [
  { label: 'RIASEC', waktu: '~5 menit', soal: '18 soal' },
  { label: 'Multiple Intelligences', waktu: '~8 menit', soal: '24 soal' },
  { label: 'Nilai Kerja', waktu: '~5 menit', soal: '18 soal' },
  { label: 'Konteks Personal', waktu: '~3 menit', soal: '7 pertanyaan' },
]

export default function TesLayout({
  children, dimensi, judul, subjudul, intro,
  hrefBack, hrefNext, labelNext = 'Lanjut →',
  onNext, canProceed = true,
}: TesLayoutProps) {
  const router = useRouter()
  const meta = DIMENSI_META[dimensi - 1]
  const progress = (dimensi / 4) * 100

  function handleNext() {
    if (onNext) onNext()
    router.push(hrefNext)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
      {/* TOP NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', background: '#fff',
        borderBottom: '0.5px solid rgba(44,44,42,0.12)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none',
        }}>
          <div style={{
            width: 26, height: 26, background: '#1D9E75', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
              <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A' }}>KarirGPS</span>
        </Link>

        {/* Progress track */}
        <div style={{ flex: 1, maxWidth: 240, margin: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#888780', marginBottom: 5 }}>
            <span>Dimensi {dimensi} dari 4</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 3, background: 'rgba(44,44,42,0.1)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${progress}%`,
              background: '#1D9E75', borderRadius: 2,
              transition: 'width 0.5s ease',
            }}/>
          </div>
        </div>

        <div style={{ fontSize: 12, color: '#888780' }}>{meta.waktu}</div>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px 80px' }}>
        {/* Dimension header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: '#E1F5EE', borderRadius: 20, padding: '3px 10px',
            fontSize: 11, color: '#0F6E56', fontWeight: 500, marginBottom: 10,
          }}>
            Dimensi {dimensi} — {meta.label} · {meta.soal}
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 500, color: '#2C2C2A', marginBottom: 6, letterSpacing: '-0.4px' }}>
            {judul}
          </h1>
          <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.6 }}>{subjudul}</p>
        </div>

        {/* Instructor note */}
        <div style={{
          background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)',
          borderLeft: '2.5px solid #1D9E75', borderRadius: '0 10px 10px 0',
          padding: '13px 16px', marginBottom: 28,
          fontSize: 13, color: '#888780', lineHeight: 1.65, fontStyle: 'italic',
        }}>
          "{intro}"
        </div>

        {/* Questions */}
        {children}

        {/* Navigation buttons */}
        <div style={{
          display: 'flex', gap: 10, marginTop: 36,
          paddingTop: 20, borderTop: '0.5px solid rgba(44,44,42,0.12)',
        }}>
          <Link href={hrefBack} style={{
            background: 'none', border: '0.5px solid rgba(44,44,42,0.15)',
            borderRadius: 8, padding: '10px 18px', fontSize: 14,
            color: '#888780', textDecoration: 'none',
          }}>
            ← Kembali
          </Link>
          <button
            onClick={handleNext}
            disabled={!canProceed}
            style={{
              background: canProceed ? '#1D9E75' : '#9FE1CB',
              color: 'white', border: 'none', borderRadius: 8,
              padding: '10px 24px', fontSize: 14, fontWeight: 500,
              cursor: canProceed ? 'pointer' : 'not-allowed', flex: 1,
            }}
          >
            {labelNext}
          </button>
        </div>
      </div>
    </div>
  )
}
