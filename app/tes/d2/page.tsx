'use client'
import TesLayout from '@/components/tes/TesLayout'
import SkenarioCard from '@/components/tes/SkenarioCard'
import SkalaItem from '@/components/tes/SkalaItem'
import { D2_SKENARIO, D2_SKALA } from '@/lib/soal-d2'
import { useTesStore } from '@/lib/store'
import type { MICode } from '@/types'

export default function TesD2Page() {
  const { d2_skenario, d2_skala, setD2Skenario, setD2Skala } = useTesStore()

  const skenarioAnswered = Object.keys(d2_skenario).length
  const skalaAnswered = Object.keys(d2_skala).length
  const totalAnswered = skenarioAnswered + skalaAnswered
  const totalSoal = D2_SKENARIO.length + D2_SKALA.length

  return (
    <TesLayout
      dimensi={2}
      judul="Cara Berpikirmu"
      subjudul="Ini bukan tentang apa yang kamu minati, tapi bagaimana kamu memproses dunia. Ini yang sering membedakan dua orang dengan minat sama ke arah karir yang berbeda."
      intro="Menarik. Minatmu sudah mulai terlihat. Sekarang, mari kita lihat bagaimana otakmu memproses masalah..."
      hrefBack="/tes/d1"
      hrefNext="/tes/d3"
      labelNext={totalAnswered > 0 ? `Lanjutkan (${totalAnswered}/${totalSoal})` : 'Lanjutkan'}
      answered={totalAnswered}
      total={totalSoal}
    >
      {/* BLOK A */}
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-6">
          <div className="text-sm font-bold text-brand-600 uppercase tracking-widest">
            Bagian A — Skenario Pilihan
          </div>
          <div className="text-sm font-medium text-ink-light bg-surface-100 px-3 py-1 rounded-full">
            {skenarioAnswered} / {D2_SKENARIO.length}
          </div>
        </div>
        
        {D2_SKENARIO.map((soal, i) => (
          <SkenarioCard
            key={soal.id}
            soalId={soal.id}
            nomor={i + 1}
            pertanyaan={soal.pertanyaan}
            konteks={soal.konteks}
            opsi={soal.opsi}
            selected={d2_skenario[soal.id] || null}
            onSelect={(kode) => setD2Skenario(soal.id, kode as MICode)}
          />
        ))}
      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-14">
        <div className="flex-1 h-px bg-surface-200"></div>
        <span className="text-sm font-medium text-ink-light italic">
          Beberapa pernyataan singkat terakhir untuk bagian ini
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
            {skalaAnswered} / {D2_SKALA.length}
          </div>
        </div>
        
        {D2_SKALA.map((soal) => (
          <SkalaItem
            key={soal.id}
            id={soal.id}
            pernyataan={soal.pernyataan}
            nilai={d2_skala[soal.id] || null}
            onSelect={setD2Skala}
          />
        ))}
      </div>
    </TesLayout>
  )
}
