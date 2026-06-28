'use client'
import { useRouter } from 'next/navigation'
import TesLayout from '@/components/tes/TesLayout'
import { D4_PERTANYAAN } from '@/lib/soal-d4'
import { useTesStore } from '@/lib/store'
import type { KonteksPersonal } from '@/types'

export default function TesD4Page() {
  const router = useRouter()
  const { d4_konteks, setD4, hitungSemua } = useTesStore()

  // Count answered (jalur is array, others are string)
  const answered = Object.keys(d4_konteks).filter(k => {
    const v = d4_konteks[k as keyof typeof d4_konteks]
    return v !== undefined && (Array.isArray(v) ? v.length > 0 : true)
  }).length
  const canProceed = answered >= 5 // minimal 5 dari 7

  function handleSelesai() {
    hitungSemua()
    router.push('/hasil')
  }

  return (
    <TesLayout
      dimensi={4}
      judul="Kondisimu Sekarang"
      subjudul="Tujuh pertanyaan terakhir ini berbeda dari sebelumnya — tidak ada yang diukur. Kami hanya ingin tahu kondisimu sekarang, supaya rekomendasinya bisa benar-benar relevan untukmu."
      intro="Bagian ini bukan tentang siapa kamu — tapi tentang kondisimu sekarang. Jawab apa adanya, karena inilah yang akan membuat rekomendasimu terasa relevan dan bisa kamu jalani, bukan sekadar teori."
      hrefBack="/tes/d3"
      hrefNext="/hasil"
      labelNext={canProceed ? 'Lihat hasilku →' : `Jawab minimal 5 pertanyaan (${answered}/7)`}
      onNext={handleSelesai}
      canProceed={canProceed}
    >
      <div style={{ marginBottom: 8 }}>
        {D4_PERTANYAAN.map((p, idx) => {
          const isMultiple = p.multiple
          const currentVal = d4_konteks[p.id as keyof KonteksPersonal]

          return (
            <div key={p.id} style={{ marginBottom: 28 }}>
              {/* Privacy reminder before biaya question */}
              {p.id === 'kondisi_biaya' && (
                <div style={{
                  background: '#F8F7F4', border: '0.5px solid rgba(44,44,42,0.1)',
                  borderRadius: 8, padding: '10px 14px', marginBottom: 14,
                  fontSize: 12, color: '#888780', lineHeight: 1.6,
                }}>
                  🔒 Jawaban ini tidak pernah kami tampilkan ke siapapun. Ini hanya untuk menyesuaikan rekomendasimu.
                </div>
              )}

              <div style={{ fontSize: 11, fontWeight: 500, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>
                Pertanyaan {idx + 1} dari {D4_PERTANYAAN.length}
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', marginBottom: 6, lineHeight: 1.5 }}>
                {p.label}
              </div>
              {p.hint && (
                <div style={{ fontSize: 13, color: '#888780', marginBottom: 12, lineHeight: 1.6, fontStyle: 'italic' }}>
                  {p.hint}
                </div>
              )}
              {isMultiple && (
                <div style={{ fontSize: 12, color: '#1D9E75', marginBottom: 10 }}>
                  Bisa pilih lebih dari satu
                </div>
              )}

              <div style={{ display: 'grid', gap: 7 }}>
                {p.opsi.map((o) => {
                  let isSelected = false
                  if (isMultiple && Array.isArray(currentVal)) {
                    isSelected = (currentVal as string[]).includes(o.kode)
                  } else {
                    isSelected = currentVal === o.kode
                  }

                  return (
                    <button
                      key={o.kode}
                      onClick={() => {
                        if (isMultiple) {
                          const arr = Array.isArray(currentVal) ? [...currentVal] : []
                          const idx = arr.indexOf(o.kode as any)
                          if (idx > -1) arr.splice(idx, 1)
                          else arr.push(o.kode as any)
                          setD4(p.id as keyof KonteksPersonal, arr)
                        } else {
                          setD4(p.id as keyof KonteksPersonal, o.kode)
                        }
                      }}
                      style={{
                        width: '100%', textAlign: 'left',
                        background: isSelected ? '#E1F5EE' : '#fff',
                        border: `0.5px solid ${isSelected ? '#1D9E75' : 'rgba(44,44,42,0.12)'}`,
                        borderRadius: 9, padding: '11px 14px',
                        cursor: 'pointer', transition: 'all 0.12s',
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 500, color: isSelected ? '#0F6E56' : '#2C2C2A' }}>
                        {isSelected && <span style={{ marginRight: 6 }}>✓</span>}
                        {o.label}
                      </div>
                      {o.deskripsi && (
                        <div style={{ fontSize: 12, color: '#888780', marginTop: 2, lineHeight: 1.5 }}>
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
      </div>

      {/* Loading state note */}
      <div style={{
        background: '#E1F5EE', borderRadius: 10, padding: '14px 16px',
        fontSize: 13, color: '#0F6E56', lineHeight: 1.6,
      }}>
        Setelah kamu klik "Lihat hasilku", kami akan membaca semua yang kamu jawab tadi.
        Ini butuh sedikit waktu karena kami tidak pakai template — hasilnya ditulis khusus untuk kamu.
      </div>
    </TesLayout>
  )
}
