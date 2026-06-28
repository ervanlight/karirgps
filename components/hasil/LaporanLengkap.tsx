'use client'
import type { LaporanSiswa, LaporanOrangTua } from '@/types'

interface LaporanLengkapProps {
  laporan: LaporanSiswa
  laporanOrtu: LaporanOrangTua
}

function Card({ children, accent = '#1D9E75' }: { children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderLeft: `3px solid ${accent}`, borderRadius: 14, padding: 24, marginBottom: 14 }}>
      {children}
    </div>
  )
}

function SectionLabel({ children, color = '#1D9E75' }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 500, color, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
      {children}
    </div>
  )
}

function Paragraphs({ text, color = '#2C2C2A' }: { text: string; color?: string }) {
  return (
    <>
      {text.split('\n\n').map((p, i) => (
        <p key={i} style={{ fontSize: 14, color, lineHeight: 1.8, margin: i === 0 ? 0 : '12px 0 0' }}>{p}</p>
      ))}
    </>
  )
}

export default function LaporanLengkap({ laporan, laporanOrtu }: LaporanLengkapProps) {
  return (
    <div id="laporan-print-area">
      <Card>
        <SectionLabel>Laporan lengkapmu</SectionLabel>
        <p style={{ fontSize: 15, color: '#2C2C2A', lineHeight: 1.8, fontStyle: 'italic', borderLeft: '2px solid #1D9E75', paddingLeft: 14, margin: 0 }}>
          {laporan.pembuka}
        </p>
      </Card>

      <Card>
        <SectionLabel>Tentang cara kamu berpikir dan bergerak</SectionLabel>
        <Paragraphs text={laporan.profil_kepribadian} />
      </Card>

      <Card accent="#BA7517">
        <SectionLabel color="#BA7517">Apa yang menggerakkanmu</SectionLabel>
        <Paragraphs text={laporan.nilai_kerja} />
      </Card>

      <Card>
        <SectionLabel>Tiga kluster jurusan yang direkomendasikan</SectionLabel>
        {laporan.jurusan.map((j, i) => (
          <div key={j.nama} style={{ marginBottom: i === laporan.jurusan.length - 1 ? 0 : 18, paddingBottom: i === laporan.jurusan.length - 1 ? 0 : 18, borderBottom: i === laporan.jurusan.length - 1 ? 'none' : '0.5px solid rgba(44,44,42,0.08)' }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>{i + 1}. {j.nama}</div>
            <div style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.7, marginBottom: 8 }}>{j.reasoning}</div>
            <div style={{ fontSize: 12, color: '#888780' }}><strong>Kampus:</strong> {j.kampus_rekomendasi}</div>
            <div style={{ fontSize: 12, color: '#888780', marginTop: 3 }}><strong>Tingkat persaingan:</strong> {j.keketatan}</div>
          </div>
        ))}
      </Card>

      <Card accent="#534AB7">
        <SectionLabel color="#534AB7">Lima profesi yang cocok</SectionLabel>
        {laporan.profesi.map((p, i) => (
          <div key={p.nama} style={{ marginBottom: i === laporan.profesi.length - 1 ? 0 : 14, paddingBottom: i === laporan.profesi.length - 1 ? 0 : 14, borderBottom: i === laporan.profesi.length - 1 ? 'none' : '0.5px solid rgba(44,44,42,0.08)' }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>{p.nama}</div>
            <div style={{ fontSize: 13, color: '#2C2C2A', lineHeight: 1.65, marginBottom: 4 }}>{p.gambaran_nyata}</div>
            <div style={{ fontSize: 12, color: '#888780' }}>Jalur masuk: {p.jalur_masuk}</div>
            {p.catatan && <div style={{ fontSize: 12, color: '#1D9E75', marginTop: 4, fontStyle: 'italic' }}>→ {p.catatan}</div>}
          </div>
        ))}
      </Card>

      <Card>
        <SectionLabel>Kekuatanmu</SectionLabel>
        {laporan.kekuatan.map((k, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
            <span style={{ color: '#1D9E75', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.65 }}>{k}</span>
          </div>
        ))}
      </Card>

      <Card accent="#BA7517">
        <SectionLabel color="#BA7517">Yang perlu kamu waspadai</SectionLabel>
        {laporan.perlu_diwaspadai.map((w, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
            <span style={{ color: '#BA7517', flexShrink: 0 }}>→</span>
            <span style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.65 }}>{w}</span>
          </div>
        ))}
      </Card>

      <div style={{ background: '#E1F5EE', border: '0.5px solid #9FE1CB', borderRadius: 14, padding: 24, marginBottom: 14 }}>
        <SectionLabel color="#0F6E56">Langkah selanjutnya</SectionLabel>
        <Paragraphs text={laporan.langkah_selanjutnya} color="#085041" />
      </div>

      <Card>
        <p style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>{laporan.penutup}</p>
      </Card>

      <div style={{ textAlign: 'center', margin: '32px 0 20px' }}>
        <div style={{ height: '0.5px', background: 'rgba(44,44,42,0.12)', marginBottom: 18 }} />
        <span style={{ fontSize: 13, color: '#888780', fontStyle: 'italic' }}>Bagian berikut untuk orang tua</span>
      </div>

      <Card>
        <div style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>Untuk Orang Tua</div>
        <div style={{ fontSize: 12, color: '#888780', marginBottom: 18 }}>Ditulis dengan bahasa berbeda — langsung untuk yang mendukung perjalanan anak.</div>
        {[
          ['Bagaimana cara anak Anda berpikir', laporanOrtu.cara_berpikir_anak],
          ['Apa yang memotivasinya', laporanOrtu.apa_yang_memotivasi],
          ['Dukungan yang paling dibutuhkan', laporanOrtu.dukungan_yang_dibutuhkan],
          ['Cara mendiskusikan pilihan karir', laporanOrtu.cara_berdiskusi],
          ['Satu hal terpenting yang perlu dipahami', laporanOrtu.hal_terpenting],
        ].map(([title, content], i, arr) => (
          <div key={title} style={{ marginBottom: i === arr.length - 1 ? 0 : 18, paddingBottom: i === arr.length - 1 ? 0 : 18, borderBottom: i === arr.length - 1 ? 'none' : '0.5px solid rgba(44,44,42,0.08)' }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 6 }}>{title}</div>
            <div style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.75 }}>{content}</div>
          </div>
        ))}
      </Card>
    </div>
  )
}
