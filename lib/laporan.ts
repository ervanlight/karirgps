import { GoogleGenAI, Type, Schema } from '@google/genai'
import { ambilKandidatJurusan, ambilKandidatProfesi, fetchRagContext } from '@/lib/db-knowledge'
import { BRAND_VOICE } from '@/lib/knowledge/brand-voice'
import { STYLE_GUIDE } from '@/lib/knowledge/style-guide'
import { KOMBINASI_TABLES } from '@/lib/knowledge/combination-tables'
import { getAnxietyContext } from '@/lib/knowledge/anxiety-framework'
import { premiumReportV3Prompt } from '@/lib/prompts/premium-report-v3'
import { parentReportPrompt } from '@/lib/prompts/parent-report'
import type { ProfilData, PremiumReportV3, ParentReport } from '@/types'

const apiKeys = (process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '').split(',').map(k => k.trim()).filter(Boolean)

function getAvailableAiClient() {
  const randomKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]
  return new GoogleGenAI({ apiKey: randomKey })
}

function getPremiumPrompt(): string {
  return premiumReportV3Prompt
}

function getParentPrompt(): string {
  return parentReportPrompt
}

async function buildGroundingContext(profil: ProfilData): Promise<string> {
  const [kandidatJurusan, kandidatProfesi, ragContext] = await Promise.all([
    ambilKandidatJurusan(profil),
    ambilKandidatProfesi(profil),
    fetchRagContext(profil)
  ])

  const anxiety = getAnxietyContext(profil.d4_konteks)

  return `
[DATA PROFIL SISWA]
- D1 (RIASEC): ${profil.d1_riasec.holland_code.join('')} (${profil.d1_riasec.deskripsi_primer}, ${profil.d1_riasec.deskripsi_sekunder})
- D2 (MI): ${profil.d2_mi.mi_profile.join(', ')} (${profil.d2_mi.deskripsi_primer}, ${profil.d2_mi.deskripsi_sekunder})
- D3 (Work Values): ${profil.d3_workvalues.values_profile.join(', ')} (${profil.d3_workvalues.deskripsi_primer}, ${profil.d3_workvalues.deskripsi_sekunder})
- D4 Konteks (Tahap): ${profil.d4_konteks.tahap}
- D4 Konteks (Domisili): ${profil.d4_konteks.domisili}
- D4 Konteks (Jalur): ${profil.d4_konteks.jalur.join(', ')}
- D4 Konteks (Biaya): ${profil.d4_konteks.kondisi_biaya}
- D4 Konteks (Tanggungan): ${profil.d4_konteks.tanggungan_keluarga}
- D4 Konteks (Akademik): ${profil.d4_konteks.kemampuan_akademik}
- D4 Konteks (Mobilitas): ${profil.d4_konteks.mobilitas}

[KONTEKS KEGELISAHAN/ANXIETY USER]
- Primary Anxiety: ${anxiety.primaryAnxiety}
- Secondary Anxiety: ${anxiety.secondaryAnxiety || 'N/A'}
- Analisis Konteks: ${anxiety.contextDescription}
Gunakan ini untuk mengatur tone pembuka dan langkah selanjutnya agar tepat sasaran!

[KANDIDAT JURUSAN DARI DATABASE (Relevan dengan profil ini)]
${kandidatJurusan || 'Tidak ada data spesifik'}

[KANDIDAT PROFESI DARI DATABASE (Relevan dengan profil ini)]
${kandidatProfesi || 'Tidak ada data spesifik'}

[KNOWLEDGE BASE RAG (Info spesifik terkait jurusan/profesi di atas)]
${ragContext || ''}

[TABEL KOMBINASI REFERENSI]
${KOMBINASI_TABLES}
`
}

export async function generateDecisionMVP(profil: ProfilData): Promise<PremiumReportV3> {
  const groundingContext = await buildGroundingContext(profil)

  const promptText = `
---
IDENTITAS & TONE VOICE (WAJIB DIIKUTI)
${BRAND_VOICE}

STYLE GUIDE BAHASA (WAJIB DIIKUTI)
${STYLE_GUIDE}
---

${groundingContext}
`

  try {
    const ai = getAvailableAiClient()
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: promptText,
      config: {
        systemInstruction: getPremiumPrompt(),
        temperature: 0.8,
        responseMimeType: 'application/json',
      }
    })

    const text = response.text
    if (!text) throw new Error('Empty response from AI')
    
    const json = JSON.parse(text)
    json.report_type = 'premium_report_v3'
    return json as PremiumReportV3
  } catch (error) {
    console.error('Failed to generate full report:', error)
    return { _error: true } as unknown as PremiumReportV3
  }
}

export async function generateParentReport(profil: ProfilData, laporanSiswa: PremiumReportV3): Promise<ParentReport> {
  const promptText = `
---
IDENTITAS & TONE VOICE (WAJIB DIIKUTI)
${BRAND_VOICE}

STYLE GUIDE BAHASA (WAJIB DIIKUTI)
${STYLE_GUIDE}
---

[DATA PROFIL SISWA]
- D1 (RIASEC): ${profil.d1_riasec.holland_code.join('')} (${profil.d1_riasec.deskripsi_primer})
- D2 (MI): ${profil.d2_mi.mi_profile.join(', ')} (${profil.d2_mi.deskripsi_primer})
- D3 (Work Values): ${profil.d3_workvalues.values_profile.join(', ')} (${profil.d3_workvalues.deskripsi_primer})
- D4 Konteks (Biaya): ${profil.d4_konteks.kondisi_biaya}
- D4 Konteks (Tanggungan): ${profil.d4_konteks.tanggungan_keluarga}

[LAPORAN SISWA YANG SUDAH JADI SEBAGAI KONTEKS]
${JSON.stringify(laporanSiswa, null, 2)}
`

  try {
    const ai = getAvailableAiClient()
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: promptText,
      config: {
        systemInstruction: getParentPrompt(),
        temperature: 0.7,
        responseMimeType: 'application/json',
      }
    })

    const text = response.text
    if (!text) throw new Error('Empty response from AI')
    
    const json = JSON.parse(text)
    return json.untuk_orang_tua as ParentReport
  } catch (error) {
    console.error('Failed to generate parent report:', error)
    return { _error: true } as unknown as ParentReport
  }
}
