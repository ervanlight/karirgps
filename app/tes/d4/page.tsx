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
      judul="Kondisi Nyata"
      subjudul="Agar rekomendasi yang kami berikan benar-benar bisa kamu jalani, bukan cuma bagus di atas kertas."
      intro="Tujuh pertanyaan terakhir ini bukan tes. Kami hanya ingin tahu kondisimu sekarang supaya hasil yang keluar nanti realistis untukmu."
      hrefBack="/tes/d3"
      hrefNext="/hasil"
      labelNext={totalAnswered > 0 ? `Selesai & Lihat Hasil (${totalAnswered}/${totalSoal})` : 'Selesai & Lihat Hasil'}
      onNext={handleNext}
      canProceed={canProceed}
    >
      <div className="space-y-8">
        {D4_PERTANYAAN.map((p, i) => {
          const value = d4_konteks[p.id as keyof typeof d4_konteks]
          return (
            <div key={p.id} className="bg-white border border-surface-200 rounded-3xl p-6 md:p-8 shadow-sm transition-shadow hover:shadow-soft">
              <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3">
                Pertanyaan {i + 1} dari {totalSoal}{p.multiple ? ' · Pilih yang sesuai' : ''}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-ink mb-2 leading-relaxed">
                {p.label}
              </h3>
              
              {p.hint && (
                <p className="text-sm md:text-base text-ink-light mb-6 leading-relaxed italic border-l-2 border-surface-200 pl-4">
                  {p.hint}
                </p>
              )}
              
              <div className="grid gap-3 mt-6">
                {p.opsi.map((o) => {
                  const selected = p.multiple
                    ? Array.isArray(value) && (value as string[]).includes(o.kode)
                    : value === o.kode
                  return (
                    <button
                      key={o.kode}
                      onClick={() => handleSelect(p.id, o.kode, !!p.multiple)}
                      className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 ${
                        selected
                          ? 'bg-brand-50 border-2 border-brand-500 shadow-sm'
                          : 'bg-surface-50 border-2 border-transparent hover:bg-surface-100 hover:border-surface-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          selected ? 'border-brand-500 bg-brand-500' : 'border-surface-300 bg-white'
                        }`}>
                          {selected && (
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
                              <path d="M5.5 10.5L2 7l1.4-1.4 2.1 2.1 5.1-5.1L12 4.5l-6.5 6z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <span className={`block font-bold text-sm md:text-base mb-1 ${selected ? 'text-brand-700' : 'text-ink'}`}>
                            {o.label}
                          </span>
                          {o.deskripsi && (
                            <span className={`block text-xs md:text-sm leading-relaxed ${selected ? 'text-brand-600' : 'text-ink-light'}`}>
                              {o.deskripsi}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </TesLayout>
  )
}
