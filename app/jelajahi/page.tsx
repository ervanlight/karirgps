import Link from 'next/link'
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Jelajahi Jurusan Kuliah — Database Jurusan Indonesia',
  description: 'Jelajahi jurusan kuliah di Indonesia: cocok untuk siapa, mata kuliah, prospek karier, kisaran gaji, dan kampus rekomendasi. Berdasarkan riset RIASEC, Multiple Intelligences, dan Work Values.',
}

export const revalidate = 3600

interface JurusanRow {
  slug: string
  nama: string
  rumpun_ilmu: string
  deskripsi_singkat: string | null
  holland_fit: string[]
  rata_gaji_awal: string | null
}

async function getJurusan(): Promise<JurusanRow[]> {
  const supabase = createAdminClient()
  const { data } = await supabase.from('jurusan').select('slug, nama, rumpun_ilmu, deskripsi_singkat, holland_fit, rata_gaji_awal').order('nama')
  return data || []
}

export default async function JelajahiPage() {
  const jurusan = await getJurusan()
  const grouped = jurusan.reduce<Record<string, JurusanRow[]>>((acc, j) => {
    (acc[j.rumpun_ilmu] ||= []).push(j)
    return acc
  }, {})

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', background: '#fff',
        borderBottom: '0.5px solid rgba(44,44,42,0.12)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
          <div style={{ width: 26, height: 26, background: '#1D9E75', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A' }}>KarirGPS</span>
        </Link>
        <Link href="/auth/register" style={{ background: '#1D9E75', color: 'white', borderRadius: 7, padding: '8px 16px', fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>
          Mulai tes gratis
        </Link>
      </nav>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px 80px' }}>
        <h1 style={{ fontSize: 28, fontWeight: 500, color: '#2C2C2A', marginBottom: 10, letterSpacing: '-0.5px' }}>
          Jelajahi Jurusan
        </h1>
        <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.7, marginBottom: 32, maxWidth: 540 }}>
          {jurusan.length} jurusan, lengkap dengan siapa yang cocok, mata kuliah, prospek karier, dan kisaran gaji fresh graduate di Indonesia. Mau tahu jurusan mana yang paling cocok untukmu secara personal? <Link href="/auth/register" style={{ color: '#1D9E75' }}>Coba tes gratis →</Link>
        </p>

        {Object.entries(grouped).map(([rumpun, list]) => (
          <div key={rumpun} style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
              {rumpun}
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {list.map((j) => (
                <Link key={j.slug} href={`/jelajahi/${j.slug}`} style={{
                  background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 12,
                  padding: '16px 18px', textDecoration: 'none', display: 'block',
                }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>{j.nama}</div>
                  <div style={{ fontSize: 13, color: '#888780', lineHeight: 1.6, marginBottom: 8 }}>
                    {(j.deskripsi_singkat || '').slice(0, 140)}{(j.deskripsi_singkat?.length || 0) > 140 ? '…' : ''}
                  </div>
                  {j.rata_gaji_awal && (
                    <div style={{ fontSize: 12, color: '#0F6E56' }}>Gaji awal: {j.rata_gaji_awal.split(/(?<=per bulan)\.?/)[0]}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {jurusan.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', fontSize: 13, color: '#888780' }}>
            Database jurusan sedang disiapkan.
          </div>
        )}
      </div>
    </div>
  )
}
