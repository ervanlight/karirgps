import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase'
import { RIASEC_LABELS, MI_LABELS } from '@/lib/scoring'
import type { RiasecCode, MICode } from '@/types'

export const revalidate = 3600

interface JurusanDetail {
  slug: string
  nama: string
  rumpun_ilmu: string
  jenjang: string
  holland_fit: string[]
  mi_fit: string[]
  deskripsi_singkat: string | null
  prospek_kerja: string | null
  rata_gaji_awal: string | null
  kampus_terkait: string[]
  detail: {
    mata_kuliah?: string[]
    hard_skills?: string[]
    soft_skills?: string[]
    kelebihan?: string[]
    tantangan?: string[]
    cocok_jika?: string[]
    kurang_cocok_jika?: string[]
    jurusan_mirip?: string[]
    siapa_yang_cocok?: string
    tren_ai?: string
  }
}

async function getJurusan(slug: string): Promise<JurusanDetail | null> {
  const supabase = createAdminClient()
  const { data } = await supabase.from('jurusan').select('*').eq('slug', slug).maybeSingle()
  return data as JurusanDetail | null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const j = await getJurusan(params.slug)
  if (!j) return {}
  return {
    title: `${j.nama} — Cocok untuk Siapa, Prospek Karier & Gaji`,
    description: j.deskripsi_singkat?.slice(0, 155) || `Info lengkap jurusan ${j.nama} di Indonesia.`,
  }
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 22, marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {items.map((t) => (
        <span key={t} style={{ background: '#F8F7F4', border: '0.5px solid rgba(44,44,42,0.1)', borderRadius: 20, padding: '4px 11px', fontSize: 12, color: '#2C2C2A' }}>{t}</span>
      ))}
    </div>
  )
}

export default async function JurusanDetailPage({ params }: { params: { slug: string } }) {
  const j = await getJurusan(params.slug)
  if (!j) notFound()

  const d = j.detail || {}

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
        <Link href="/jelajahi" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>← Semua jurusan</Link>
      </nav>

      <div style={{ maxWidth: 680, margin: '0 auto', padding: '32px 24px 80px' }}>
        <div style={{ fontSize: 12, color: '#888780', marginBottom: 6 }}>{j.rumpun_ilmu} · {j.jenjang}</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, color: '#2C2C2A', marginBottom: 14, letterSpacing: '-0.4px' }}>{j.nama}</h1>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
          {j.holland_fit.map((c) => (
            <span key={c} style={{ background: '#E1F5EE', color: '#0F6E56', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>{RIASEC_LABELS[c as RiasecCode]}</span>
          ))}
          {j.mi_fit.map((c) => (
            <span key={c} style={{ background: '#EEEDFE', color: '#3C3489', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>{MI_LABELS[c as MICode]}</span>
          ))}
        </div>

        <Block title="Ringkasan">
          <p style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.75 }}>{j.deskripsi_singkat}</p>
        </Block>

        {d.siapa_yang_cocok && (
          <Block title="Siapa yang cocok">
            <p style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.75 }}>{d.siapa_yang_cocok}</p>
          </Block>
        )}

        {!!d.mata_kuliah?.length && (
          <Block title="Mata kuliah utama"><Tags items={d.mata_kuliah} /></Block>
        )}

        {!!d.hard_skills?.length && (
          <Block title="Hard skills yang dipelajari"><Tags items={d.hard_skills} /></Block>
        )}

        {!!d.soft_skills?.length && (
          <Block title="Soft skills yang berkembang"><Tags items={d.soft_skills} /></Block>
        )}

        {j.prospek_kerja && (
          <Block title="Prospek karier">
            <div style={{ display: 'grid', gap: 8 }}>
              {j.prospek_kerja.split('\n').filter(Boolean).map((p) => (
                <div key={p} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: '#1D9E75' }}>•</span>
                  <span style={{ fontSize: 14, color: '#2C2C2A' }}>{p}</span>
                </div>
              ))}
            </div>
            {j.rata_gaji_awal && (
              <div style={{ marginTop: 14, padding: '10px 14px', background: '#E1F5EE', borderRadius: 8, fontSize: 13, color: '#0F6E56' }}>
                Gaji fresh graduate: {j.rata_gaji_awal}
              </div>
            )}
          </Block>
        )}

        {!!d.kelebihan?.length && (
          <Block title="Kelebihan jurusan">
            <div style={{ display: 'grid', gap: 8 }}>
              {d.kelebihan.map((k) => (
                <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: '#1D9E75' }}>✓</span>
                  <span style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.6 }}>{k}</span>
                </div>
              ))}
            </div>
          </Block>
        )}

        {!!d.tantangan?.length && (
          <Block title="Tantangan jurusan">
            <div style={{ display: 'grid', gap: 8 }}>
              {d.tantangan.map((t) => (
                <div key={t} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: '#BA7517' }}>→</span>
                  <span style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </Block>
        )}

        {(!!d.cocok_jika?.length || !!d.kurang_cocok_jika?.length) && (
          <Block title="Cocok untukmu kalau...">
            {!!d.cocok_jika?.length && (
              <div style={{ marginBottom: d.kurang_cocok_jika?.length ? 14 : 0 }}>
                {d.cocok_jika.map((c) => (
                  <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#1D9E75' }}>✓</span>
                    <span style={{ fontSize: 13, color: '#2C2C2A' }}>{c}</span>
                  </div>
                ))}
              </div>
            )}
            {!!d.kurang_cocok_jika?.length && (
              <div>
                {d.kurang_cocok_jika.map((c) => (
                  <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#A32D2D' }}>✗</span>
                    <span style={{ fontSize: 13, color: '#888780' }}>{c}</span>
                  </div>
                ))}
              </div>
            )}
          </Block>
        )}

        {!!j.kampus_terkait?.length && (
          <Block title="Kampus dengan jurusan ini"><Tags items={j.kampus_terkait} /></Block>
        )}

        {d.tren_ai && (
          <Block title="Tren AI">
            <p style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.75 }}>{d.tren_ai}</p>
          </Block>
        )}

        {!!d.jurusan_mirip?.length && (
          <Block title="Jurusan mirip"><Tags items={d.jurusan_mirip} /></Block>
        )}

        <div style={{ background: '#E1F5EE', border: '0.5px solid #9FE1CB', borderRadius: 14, padding: 22, marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: 14, color: '#0F6E56', marginBottom: 12, fontWeight: 500 }}>
            Mau tahu seberapa cocok {j.nama} untukmu secara personal?
          </div>
          <Link href="/auth/register" style={{ background: '#1D9E75', color: 'white', borderRadius: 9, padding: '11px 24px', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>
            Coba tes gratis →
          </Link>
        </div>
      </div>
    </div>
  )
}
