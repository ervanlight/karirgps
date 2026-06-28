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

  // Count answered
  const skenarioAnswered = Object.keys(d1_skenario).length
  const skalaAnswered = Object.keys(d1_skala).length
  const totalAnswered = skenarioAnswered + skalaAnswered
  const totalSoal = D1_SKENARIO.length + D1_SKALA.length

  return (
    <TesLayout
      dimensi={1}
      judul="Minat & Kecenderungan"
      subjudul="Dimensi pertama membantu memetakan bidang mana yang paling cocok dengan caramu bergerak di dunia."
      intro="Tidak ada jawaban yang benar atau salah di sini. Kami bukan menilai kamu — kami hanya ingin mengenal kamu. Jawab sesuai kenyataan, bukan yang kamu rasa 'harusnya' kamu jawab."
      hrefBack="/"
      hrefNext="/tes/d2"
      labelNext={`Lanjut ke Dimensi 2 → ${totalAnswered > 0 ? `(${totalAnswered}/${totalSoal} dijawab)` : ''}`}
    >
      {/* BLOK A: SKENARIO */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16 }}>
          Blok A — Pilih satu yang paling mencerminkan kamu
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
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 28px',
      }}>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(44,44,42,0.12)' }}/>
        <span style={{ fontSize: 12, color: '#888780', fontStyle: 'italic' }}>
          Bagian berikutnya sedikit lebih reflektif — tapi tetap cepat
        </span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(44,44,42,0.12)' }}/>
      </div>

      {/* BLOK B: SKALA */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16 }}>
          Blok B — Pilih angka yang paling jujur mencerminkan dirimu
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
