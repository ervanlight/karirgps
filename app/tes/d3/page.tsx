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
      judul="Apa yang Paling Penting Bagimu"
      subjudul="Dari sekian karir yang cocok denganmu — versi yang mana yang akan membuatmu benar-benar puas? Ini yang Dimensi 3 coba jawab."
      intro="Hampir selesai. Bagian terakhir ini sedikit berbeda dari sebelumnya — tidak ada jawaban yang bisa terasa benar secara otomatis, karena semua pilihannya memang bagus. Yang kami cari adalah prioritasmu."
      hrefBack="/tes/d2"
      hrefNext="/tes/d4"
      labelNext={`Lanjut ke bagian terakhir → ${totalAnswered > 0 ? `(${totalAnswered}/${totalSoal} dijawab)` : ''}`}
    >
      {/* BLOK A: TRADE-OFF */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Blok A — Semua pilihan terdengar bagus. Pilih yang paling kamu prioritaskan.
          </div>
          <div style={{ fontSize: 11, color: '#888780' }}>{tradeoffAnswered}/{D3_TRADEOFF.length}</div>
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
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 28px',
      }}>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(44,44,42,0.12)' }}/>
        <span style={{ fontSize: 12, color: '#888780', fontStyle: 'italic' }}>
          Beberapa pernyataan terakhir. Jawab sesuai kondisimu sekarang.
        </span>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(44,44,42,0.12)' }}/>
      </div>

      {/* BLOK B: SKALA */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Blok B — Jawab sesuai kenyataan, bukan siapa yang ingin kamu jadi
          </div>
          <div style={{ fontSize: 11, color: '#888780' }}>{skalaAnswered}/{D3_SKALA.length}</div>
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
