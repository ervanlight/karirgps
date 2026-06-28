import { createAdminClient } from '@/lib/supabase'
import type { ProfilData } from '@/types'

// ============================================================
// DATABASE PENGETAHUAN — Jurusan, Kampus, Profesi
// Dipanggil SEBELUM Claude API untuk "grounding": AI memilih dari kandidat
// nyata yang sudah kita kurasi, bukan menebak dari memori model.
// Didesain untuk gagal dengan lembut (return null) kalau tabel belum ada
// atau masih kosong -- supaya generate laporan tetap jalan seperti biasa.
// ============================================================

interface JurusanRow {
  nama: string
  rumpun_ilmu: string
  holland_fit: string[]
  mi_fit: string[]
  nilai_fit: string[]
  deskripsi_singkat: string | null
  prospek_kerja: string | null
  rata_gaji_awal: string | null
  kampus_terkait: string[]
}

interface ProfesiRow {
  nama: string
  deskripsi_singkat: string | null
  gaji_entry_range: string | null
  skill_utama: string[]
  holland_fit: string[]
  mi_fit: string[]
  nilai_fit: string[]
  trend_ai_impact: string | null
}

function skor(fitHolland: string[], fitMi: string[], fitNilai: string[], hollandCode: string[], miProfile: string[], wvProfile: string[]): number {
  const overlap = (a: string[], b: string[]) => a.filter((x) => b.includes(x)).length
  return overlap(fitHolland, hollandCode) * 2 + overlap(fitMi, miProfile) + overlap(fitNilai, wvProfile)
}

export async function ambilKandidatJurusan(profil: ProfilData, limit = 8): Promise<string | null> {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase.from('jurusan').select('nama, rumpun_ilmu, holland_fit, mi_fit, nilai_fit, deskripsi_singkat, prospek_kerja, rata_gaji_awal, kampus_terkait')
    if (error || !data || data.length === 0) return null

    const hollandCode = profil.d1_riasec.holland_code
    const miProfile = profil.d2_mi.mi_profile
    const wvProfile = profil.d3_workvalues.values_profile

    const ranked = (data as JurusanRow[])
      .map((j) => ({ j, s: skor(j.holland_fit, j.mi_fit, j.nilai_fit, hollandCode, miProfile, wvProfile) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)

    if (ranked.length === 0) return null

    return ranked.map(({ j }) => {
      const kampus = j.kampus_terkait?.length ? ` | Kampus: ${j.kampus_terkait.slice(0, 5).join(', ')}` : ''
      const gaji = j.rata_gaji_awal ? ` | Gaji awal: ${j.rata_gaji_awal}` : ''
      return `- ${j.nama} (${j.rumpun_ilmu}): ${j.deskripsi_singkat || ''}${gaji}${kampus}`
    }).join('\n')
  } catch {
    return null
  }
}

export async function ambilKandidatProfesi(profil: ProfilData, limit = 10): Promise<string | null> {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase.from('profesi').select('nama, deskripsi_singkat, gaji_entry_range, skill_utama, holland_fit, mi_fit, nilai_fit, trend_ai_impact')
    if (error || !data || data.length === 0) return null

    const hollandCode = profil.d1_riasec.holland_code
    const miProfile = profil.d2_mi.mi_profile
    const wvProfile = profil.d3_workvalues.values_profile

    const ranked = (data as ProfesiRow[])
      .map((p) => ({ p, s: skor(p.holland_fit, p.mi_fit, p.nilai_fit, hollandCode, miProfile, wvProfile) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)

    if (ranked.length === 0) return null

    return ranked.map(({ p }) => {
      const gaji = p.gaji_entry_range ? ` | Gaji entry: ${p.gaji_entry_range}` : ''
      const ai = p.trend_ai_impact ? ` | Dampak AI: ${p.trend_ai_impact}` : ''
      return `- ${p.nama}: ${p.deskripsi_singkat || ''}${gaji}${ai}`
    }).join('\n')
  } catch {
    return null
  }
}
