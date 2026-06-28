'use client'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 32px', background: '#fff',
        borderBottom: '0.5px solid rgba(44,44,42,0.12)',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, background: '#1D9E75', borderRadius: 7,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
            </svg>
          </div>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', letterSpacing: '-0.3px' }}>
            KarirGPS
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Link href="/auth/login" style={{
            background: 'none', border: '0.5px solid rgba(44,44,42,0.12)',
            borderRadius: 6, padding: '6px 14px', fontSize: 13, color: '#2C2C2A',
            textDecoration: 'none',
          }}>Masuk</Link>
          <Link href="/tes/d1" style={{
            background: '#1D9E75', color: 'white', borderRadius: 6,
            padding: '7px 16px', fontSize: 13, fontWeight: 500, textDecoration: 'none',
          }}>Mulai tes gratis</Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '72px 32px 56px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: '#E1F5EE', borderRadius: 20, padding: '4px 12px',
          fontSize: 12, color: '#0F6E56', fontWeight: 500, marginBottom: 24,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}/>
          Gratis untuk dicoba · ~20 menit
        </div>

        <h1 style={{
          fontSize: 40, fontWeight: 500, lineHeight: 1.18, letterSpacing: '-0.9px',
          color: '#2C2C2A', marginBottom: 20,
        }}>
          Bukan sekadar tes bakat.<br />
          <span style={{ color: '#1D9E75' }}>Peta perjalananmu.</span>
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#888780', marginBottom: 32, maxWidth: 520 }}>
          Kelas 12 dan masih belum tahu mau ambil apa — itu lebih normal dari yang kamu kira.
          KarirGPS membaca cara kamu berpikir, apa yang memotivasimu, dan kondisi nyatamu — lalu
          menulis laporan yang terasa seperti dari konselor yang benar-benar mengenalmu.
        </p>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/tes/d1" style={{
            background: '#1D9E75', color: 'white', borderRadius: 9,
            padding: '13px 26px', fontSize: 15, fontWeight: 500, textDecoration: 'none',
            display: 'inline-block',
          }}>
            Mulai tes — gratis, ~20 menit
          </Link>
          <Link href="/auth/login" style={{
            background: 'none', border: '0.5px solid rgba(44,44,42,0.15)',
            borderRadius: 9, padding: '12px 20px', fontSize: 14, color: '#2C2C2A',
            textDecoration: 'none',
          }}>
            Sudah punya akun
          </Link>
        </div>

        <p style={{ fontSize: 12, color: '#888780', marginTop: 14 }}>
          87% mahasiswa Indonesia merasa salah jurusan. KarirGPS hadir supaya kamu tidak masuk statistik itu.
        </p>

        {/* STATS */}
        <div style={{
          display: 'flex', gap: 40, marginTop: 48, paddingTop: 32,
          borderTop: '0.5px solid rgba(44,44,42,0.12)',
        }}>
          {[
            { val: '4 dimensi', label: 'Minat, cara berpikir,\nnilai kerja, konteks nyata' },
            { val: '~20 menit', label: 'Waktu pengerjaan\ntotal keseluruhan' },
            { val: 'Rp 59rb', label: 'Laporan lengkap\n+ versi untuk orang tua' },
          ].map(s => (
            <div key={s.val}>
              <div style={{ fontSize: 22, fontWeight: 500, color: '#2C2C2A' }}>{s.val}</div>
              <div style={{ fontSize: 12, color: '#888780', marginTop: 3, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px 80px' }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16 }}>
          Cara kerjanya
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { n: '1', title: 'Kerjakan 4 dimensi tes', desc: 'Minat (RIASEC), cara berpikir (Multiple Intelligences), nilai kerja, dan form konteks personal. Bukan ujian — tidak ada jawaban benar atau salah.' },
            { n: '2', title: 'Lihat ringkasan gratis', desc: 'Profil singkat dan top 2 jurusan + 3 profesi yang cocok langsung bisa dilihat, gratis, tanpa perlu bayar.' },
            { n: '3', title: 'Buka laporan lengkap (Rp 59rb)', desc: 'Laporan naratif 5–7 halaman yang terasa seperti ditulis khusus untukmu — plus versi terpisah untuk orang tua. Dikirim ke emailmu.' },
          ].map(s => (
            <div key={s.n} style={{
              display: 'flex', gap: 16, padding: '18px 20px',
              background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)',
              borderRadius: 12,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', background: '#E1F5EE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 500, color: '#0F6E56', flexShrink: 0,
              }}>{s.n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#888780', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Link href="/tes/d1" style={{
            background: '#1D9E75', color: 'white', borderRadius: 9,
            padding: '13px 32px', fontSize: 15, fontWeight: 500, textDecoration: 'none',
            display: 'inline-block',
          }}>
            Mulai sekarang — gratis
          </Link>
        </div>
      </div>
    </div>
  )
}
