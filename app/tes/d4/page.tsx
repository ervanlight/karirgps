'use client'
import { useRouter } from 'next/navigation'
import TesLayout from '@/components/tes/TesLayout'
import { D4_PERTANYAAN } from '@/lib/soal-d4'
import { useTesStore } from '@/lib/store'
import type { JalurCode } from '@/types'

export default function TesD4Page() {
  const router = useRouter()
  const { d4_konteks, setD4, hitungSemua } = useTesStore()

  const totalAnswered = D4_PERTANYAAN.filter((p) => {
    const v = d4_konteks[p.id as keyof typeof d4_konteks]
    return p.multiple ? Array.isArray(v) && v.length > 0 : !!v
  }).length
  const totalSoal = D4_PERTANYAAN.length
  const canProceed = totalAnswered === totalSoal

  function handleSelect(pertanyaanId: string, kode: string, multiple: boolean) {
    if (multiple) {
      const current = (d4_konteks.jalur as JalurCode[]) || []
      const next = current.includes(kode as JalurCode)
        ? current.filter((k) => k !== kode)
        : [...current, kode as JalurCode]
      setD4(pertanyaanId as keyof typeof d4_konteks, next)
    } else {
      setD4(pertanyaanId as keyof typeof d4_konteks, kode)
    }
  }

  function handleNext() {
    hitungSemua()
    router.push('/hasil')
  }

  return (
    <TesLayout
      dimensi={4}
      judul="Konteks Personal"
      subjudul="Bagian terakhir — bukan psikometri, tapi penting agar rekomendasi yang kamu terima realistis sesuai kondisimu."
      intro="Tidak ada jawaban yang lebih baik atau lebih buruk di sini. Ini membantu kami menyesuaikan rekomendasi — bukan menilai kamu."
      hrefBack="/tes/d3"
      hrefNext="/hasil"
      labelNext={`Lihat hasilku → ${totalAnswered > 0 ? `(${totalAnswered}/${totalSoal} dijawab)` : ''}`}
      onNext={handleNext}
      canProceed={canProceed}
    >
      {D4_PERTANYAAN.map((p, i) => {
        const value = d4_konteks[p.id as keyof typeof d4_konteks]
        return (
          <div key={p.id} style={{ marginBottom: 32 }}>
            <div style={{
              fontSize: 11, fontWeight: 500, color: '#888780',
              textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8,
            }}>
              Pertanyaan {i + 1} dari {totalSoal}{p.multiple ? ' · bisa pilih lebih dari satu' : ''}
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', marginBottom: 4, lineHeight: 1.5 }}>
              {p.label}
            </div>
            {p.hint && (
              <div style={{ fontSize: 13, color: '#888780', marginBottom: 14, lineHeight: 1.6, fontStyle: 'italic' }}>
                {p.hint}
              </div>
            )}
            <div style={{ display: 'grid', gap: 8 }}>
              {p.opsi.map((o) => {
                const selected = p.multiple
                  ? Array.isArray(value) && (value as string[]).includes(o.kode)
                  : value === o.kode
                return (
                  <button
                    key={o.kode}
                    onClick={() => handleSelect(p.id, o.kode, !!p.multiple)}
                    style={{
                      width: '100%', textAlign: 'left',
                      background: selected ? '#E1F5EE' : '#fff',
                      border: `0.5px solid ${selected ? '#1D9E75' : 'rgba(44,44,42,0.12)'}`,
                      borderRadius: 10, padding: '14px 16px',
                      fontSize: 14, color: selected ? '#0F6E56' : '#2C2C2A',
                      lineHeight: 1.5, cursor: 'pointer', transition: 'all 0.15s',
                    }}
                  >
                    {selected && <span style={{ color: '#1D9E75', fontWeight: 600, marginRight: 6 }}>✓</span>}
                    <span style={{ fontWeight: 500 }}>{o.label}</span>
                    {o.deskripsi && (
                      <div style={{ fontSize: 12, color: selected ? '#0F6E56' : '#888780', marginTop: 3 }}>
                        {o.deskripsi}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </TesLayout>
  )
}
