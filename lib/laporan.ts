import { getClaudeClient, CLAUDE_MODEL, extractJsonText } from '@/lib/claude-client'
import { ambilKandidatJurusan, ambilKandidatProfesi, fetchRagContext } from '@/lib/db-knowledge'
import { BRAND_VOICE } from '@/lib/knowledge/brand-voice'
import { STYLE_GUIDE } from '@/lib/knowledge/style-guide'
import { KOMBINASI_TABLES } from '@/lib/knowledge/combination-tables'
import { getAnxietyContext } from '@/lib/knowledge/anxiety-framework'
import { tentukanJalurFokus } from '@/lib/knowledge/decision-engine'
import { buildPremiumPrompt } from '@/lib/prompts/premium-report-v3'
import { parentReportPrompt } from '@/lib/prompts/parent-report'
import type { ProfilData, PremiumReportV3, ParentReport } from '@/types'

async function buildGroundingContext(profil: ProfilData): Promise<string> {
  const mode = tentukanJalurFokus(profil.d4_konteks)

  // Mode 'kerja': jurusan kuliah tidak relevan sama sekali -- skip query & token-nya.
  // Mode 'kuliah'/'hybrid': tetap ambil kandidat jurusan seperti biasa.
  const [kandidatJurusan, kandidatProfesi, ragContext] = await Promise.all([
    mode === 'kerja' ? Promise.resolve(null) : ambilKandidatJurusan(profil),
    ambilKandidatProfesi(profil, 10, mode === 'kerja' || mode === 'hybrid'),
    fetchRagContext(profil)
  ])

  const anxiety = getAnxietyContext(profil.d4_konteks)
  const asalSekolah = profil.d4_konteks.asal_sekolah === 'SMK'
    ? `SMK${profil.d4_konteks.jurusan_smk ? ` (jurusan ${profil.d4_konteks.jurusan_smk})` : ''}`
    : 'SMA/MA'

  const jurusanBlock = mode === 'kerja'
    ? '[KANDIDAT JURUSAN DARI DATABASE]\nTidak relevan -- siswa memilih jalur kerja langsung, bukan kuliah.\n'
    : `[KANDIDAT JURUSAN DARI DATABASE (Relevan dengan profil ini)]\n${kandidatJurusan || 'Tidak ada data spesifik'}\n`

  return `
[DATA PROFIL SISWA]
- D1 (RIASEC): ${profil.d1_riasec.holland_code.join('')} (${profil.d1_riasec.deskripsi_primer}, ${profil.d1_riasec.deskripsi_sekunder})
- D2 (MI): ${profil.d2_mi.mi_profile.join(', ')} (${profil.d2_mi.deskripsi_primer}, ${profil.d2_mi.deskripsi_sekunder})
- D3 (Work Values): ${profil.d3_workvalues.values_profile.join(', ')} (${profil.d3_workvalues.deskripsi_primer}, ${profil.d3_workvalues.deskripsi_sekunder})
- D4 Konteks (Tahap): ${profil.d4_konteks.tahap}
- D4 Konteks (Asal Sekolah): ${asalSekolah}
- D4 Konteks (Domisili): ${profil.d4_konteks.domisili}
- D4 Konteks (Jalur): ${profil.d4_konteks.jalur.join(', ')}
- D4 Konteks (Biaya): ${profil.d4_konteks.kondisi_biaya}
- D4 Konteks (Tanggungan): ${profil.d4_konteks.tanggungan_keluarga}
- D4 Konteks (Akademik): ${profil.d4_konteks.kemampuan_akademik}
- D4 Konteks (Mobilitas): ${profil.d4_konteks.mobilitas}

[JALUR FOKUS LAPORAN]: ${mode}

[KONTEKS KEGELISAHAN/ANXIETY USER]
- Primary Anxiety: ${anxiety.primaryAnxiety}
- Secondary Anxiety: ${anxiety.secondaryAnxiety || 'N/A'}
- Analisis Konteks: ${anxiety.contextDescription}
Gunakan ini untuk mengatur tone pembuka dan langkah selanjutnya agar tepat sasaran!

${jurusanBlock}
[KANDIDAT PROFESI/JALUR KERJA DARI DATABASE (Relevan dengan profil ini)]
${kandidatProfesi || 'Tidak ada data spesifik'}

[KNOWLEDGE BASE RAG (Info spesifik terkait jurusan/profesi di atas)]
${ragContext || ''}
${kandidatJurusan || kandidatProfesi ? '' : `\n[TABEL KOMBINASI REFERENSI -- dipakai karena data database tipis]\n${KOMBINASI_TABLES}\n`}`
}

export async function generateDecisionMVP(profil: ProfilData): Promise<PremiumReportV3> {
  const mode = tentukanJalurFokus(profil.d4_konteks)
  const groundingContext = await buildGroundingContext(profil)

  // System prompt (instruksi laporan + brand voice + style guide) SELALU SAMA
  // persis untuk mode yang sama, terlepas dari siapa siswanya -- kandidat
  // sempurna untuk prompt caching: cache_control bikin panggilan berikutnya
  // dengan mode yang sama cuma bayar ~10% harga normal untuk bagian ini.
  // Data yang berubah per siswa (profil, anxiety, kandidat DB) ada di pesan
  // user, bukan di sini, supaya cache tidak pernah invalid.
  const systemPrompt = `${buildPremiumPrompt(mode)}

IDENTITAS & TONE VOICE (WAJIB DIIKUTI)
${BRAND_VOICE}

STYLE GUIDE BAHASA (WAJIB DIIKUTI)
${STYLE_GUIDE}`

  try {
    const client = getClaudeClient()
    const response = await client.messages.create({
      model: CLAUDE_MODEL,
      // Minimal 8000: laporan premium butuh 3 jurusan + 5 profesi + narasi panjang.
      // Dengan 4000 output SELALU kepotong (stop_reason: max_tokens) -> JSON gagal
      // di-parse -> laporan gagal total. max_tokens hanya menagih token yang benar2
      // dihasilkan, jadi ceiling tinggi ini gratis sebagai pengaman.
      max_tokens: 8000,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: groundingContext }],
    })

    const json = JSON.parse(extractJsonText(response))
    json.report_type = 'premium_report_v3'
    json.jalur_fokus = json.jalur_fokus || mode
    return json as PremiumReportV3
  } catch (error) {
    console.error('Failed to generate full report:', error)
    return { _error: true } as unknown as PremiumReportV3
  }
}

export async function generateParentReport(profil: ProfilData, laporanSiswa: PremiumReportV3): Promise<ParentReport> {
  const systemPrompt = `${parentReportPrompt}

IDENTITAS & TONE VOICE (WAJIB DIIKUTI)
${BRAND_VOICE}

STYLE GUIDE BAHASA (WAJIB DIIKUTI)
${STYLE_GUIDE}`

  const userContent = `[DATA PROFIL SISWA]
- D1 (RIASEC): ${profil.d1_riasec.holland_code.join('')} (${profil.d1_riasec.deskripsi_primer})
- D2 (MI): ${profil.d2_mi.mi_profile.join(', ')} (${profil.d2_mi.deskripsi_primer})
- D3 (Work Values): ${profil.d3_workvalues.values_profile.join(', ')} (${profil.d3_workvalues.deskripsi_primer})
- D4 Konteks (Biaya): ${profil.d4_konteks.kondisi_biaya}
- D4 Konteks (Tanggungan): ${profil.d4_konteks.tanggungan_keluarga}

[LAPORAN SISWA YANG SUDAH JADI SEBAGAI KONTEKS]
${JSON.stringify(laporanSiswa, null, 2)}`

  try {
    const client = getClaudeClient()
    const response = await client.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 2500,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: userContent }],
    })

    const json = JSON.parse(extractJsonText(response))
    return json.untuk_orang_tua as ParentReport
  } catch (error) {
    console.error('Failed to generate parent report:', error)
    return { _error: true } as unknown as ParentReport
  }
}
