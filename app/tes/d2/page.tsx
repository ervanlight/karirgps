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
      subjudul="Bukan apa yang kamu minati — tapi bagaimana kamu memproses dan memahami dunia. Ini yang membedakan dua orang dengan minat sama ke jalur karir yang berbeda."
      intro="Bagian pertama sudah selesai. Sekarang kita lihat sesuatu yang sedikit berbeda — bukan apa yang kamu minati, tapi bagaimana cara kamu berpikir."
      hrefBack="/tes/d1"
      hrefNext="/tes/d3"
      labelNext={`Lanjut ke Dimensi 3 → ${totalAnswered > 0 ? `(${totalAnswered}/${totalSoal} dijawab)` : ''}`}
    >
      {/* BLOK A: SKENARIO */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#534AB7', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Blok A — Pilih satu yang paling mencerminkan kamu
          </div>
          <div style={{ fontSize: 11, color: '#888780' }}>{skenarioAnswered}/{D2_SKENARIO.length}</div>
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
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 28px',
      }}>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(44,44,42,0.12)' }}/>
        <span style={{ fontSize: 12, color: '#888780', fontStyle: 'italic' }}>
          Hampir selesai untuk bagian ini. Beberapa pernyataan singkat terakhir.
        </span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(44,44,42,0.12)' }}/>
      </div>

      {/* BLOK B: SKALA — tampilkan dalam 4 grup × 4 soal */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#534AB7', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Blok B — Pilih angka yang paling jujur mencerminkan dirimu sehari-hari, bukan versi idealmu
          </div>
          <div style={{ fontSize: 11, color: '#888780' }}>{skalaAnswered}/{D2_SKALA.length}</div>
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
