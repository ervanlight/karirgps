'use client'
import TesLayout from '@/components/tes/TesLayout'
import SkenarioCard from '@/components/tes/SkenarioCard'
import SkalaItem from '@/components/tes/SkalaItem'
import { D3_TRADEOFF, D3_SKALA } from '@/lib/soal-d3'
import { useTesStore } from '@/lib/store'
import type { WorkValueCode } from '@/types'

export default function TesD3Page() {
  const { d3_tradeoff, d3_skala, setD3Tradeoff, setD3Skala } = useTesStore()

  const tradeoffAnswered = Object.keys(d3_tradeoff).length
  const skalaAnswered = Object.keys(d3_skala).length
  const totalAnswered = tradeoffAnswered + skalaAnswered
  const totalSoal = D3_TRADEOFF.length + D3_SKALA.length

  return (
    <TesLayout
      dimensi={3}
      judul="Prioritas Karir"
      subjudul="Dari sekian karir yang cocok denganmu — versi yang mana yang akan membuatmu benar-benar puas? Inilah yang ingin kita cari tahu."
      intro="Bagian ini sedikit berbeda. Semua pilihan mungkin terasa bagus, tapi kami ingin tahu apa yang paling kamu prioritaskan."
      hrefBack="/tes/d2"
      hrefNext="/tes/d4"
      labelNext={totalAnswered > 0 ? `Lanjutkan (${totalAnswered}/${totalSoal})` : 'Lanjutkan'}
      answered={totalAnswered}
      total={totalSoal}
    >
      {/* BLOK A */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-6">
          <div className="text-sm font-bold text-brand-600 uppercase tracking-widest">
            Bagian A — Pilihan Prioritas
          </div>
          <div className="text-sm font-medium text-ink-light bg-surface-100 px-3 py-1 rounded-full">
            {tradeoffAnswered} / {D3_TRADEOFF.length}
          </div>
        </div>
        
        {D3_TRADEOFF.map((soal, i) => (
          <SkenarioCard
            key={soal.id}
            soalId={soal.id}
            nomor={i + 1}
            pertanyaan={soal.situasi}
            konteks={soal.konteks}
            opsi={soal.opsi}
            selected={d3_tradeoff[soal.id] || null}
            onSelect={(kode) => setD3Tradeoff(soal.id, kode as WorkValueCode)}
          />
        ))}
      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-14">
        <div className="flex-1 h-px bg-surface-200"></div>
        <span className="text-sm font-medium text-ink-light italic">
          Beberapa pernyataan singkat terakhir
        </span>
        <div className="flex-1 h-px bg-surface-200"></div>
      </div>

      {/* BLOK B */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-6">
          <div className="text-sm font-bold text-brand-600 uppercase tracking-widest">
            Bagian B — Skala Setuju
          </div>
          <div className="text-sm font-medium text-ink-light bg-surface-100 px-3 py-1 rounded-full">
            {skalaAnswered} / {D3_SKALA.length}
          </div>
        </div>
        
        {D3_SKALA.map((soal) => (
          <SkalaItem
            key={soal.id}
            id={soal.id}
            pernyataan={soal.pernyataan}
            nilai={d3_skala[soal.id] || null}
            onSelect={setD3Skala}
          />
        ))}
      </div>
    </TesLayout>
  )
}
