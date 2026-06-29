'use client'
import { useState } from 'react'
import TesLayout from '@/components/tes/TesLayout'
import SkenarioCard from '@/components/tes/SkenarioCard'
import SkalaItem from '@/components/tes/SkalaItem'
import { D1_SKENARIO, D1_SKALA } from '@/lib/soal-d1'
import { useTesStore } from '@/lib/store'
import type { RiasecCode } from '@/types'

export default function TesD1Page() {
  const { d1_skenario, d1_skala, setD1Skenario, setD1Skala } = useTesStore()

  const skenarioAnswered = Object.keys(d1_skenario).length
  const skalaAnswered = Object.keys(d1_skala).length
  const totalAnswered = skenarioAnswered + skalaAnswered
  const totalSoal = D1_SKENARIO.length + D1_SKALA.length

  return (
    <TesLayout
      dimensi={1}
      judul="Minat & Ketertarikan"
      subjudul="Langkah pertama ini memetakan bidang apa yang secara alami paling menarik buatmu."
      intro="Tidak ada jawaban benar atau salah. Jawab dengan jujur sesuai apa yang benar-benar kamu suka, bukan apa yang orang lain anggap keren."
      hrefBack="/"
      hrefNext="/tes/d2"
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
            {skenarioAnswered} / {D1_SKENARIO.length}
          </div>
        </div>
        
        {D1_SKENARIO.map((soal, i) => (
          <SkenarioCard
            key={soal.id}
            soalId={soal.id}
            nomor={i + 1}
            pertanyaan={soal.pertanyaan}
            konteks={soal.konteks}
            opsi={soal.opsi}
            selected={d1_skenario[soal.id] || null}
            onSelect={(kode) => setD1Skenario(soal.id, kode as RiasecCode)}
          />
        ))}
      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-14">
        <div className="flex-1 h-px bg-surface-200"></div>
        <span className="text-sm font-medium text-ink-light italic">
          Bagian selanjutnya tentang prioritasmu
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
            {skalaAnswered} / {D1_SKALA.length}
          </div>
        </div>

        {D1_SKALA.map((soal) => (
          <SkalaItem
            key={soal.id}
            id={soal.id}
            pernyataan={soal.pernyataan}
            nilai={d1_skala[soal.id] || null}
            onSelect={setD1Skala}
          />
        ))}
      </div>
    </TesLayout>
  )
}
