import { NextResponse } from 'next/server'
import { createRouteClient } from '@/lib/supabase-server'
import { GoogleGenAI, Type, Schema } from '@google/genai'
import type { ProfilData } from '@/types'
import { getAnxietyContext } from '@/lib/knowledge/anxiety-framework'
import { freeReportPrompt } from '@/lib/prompts/free-report'
import { BRAND_VOICE } from '@/lib/knowledge/brand-voice'
import { STYLE_GUIDE } from '@/lib/knowledge/style-guide'

export const maxDuration = 60

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!
})

function getFreePrompt(): string {
  return freeReportPrompt
}

// Schema for Gemini Structured Output
const freeReportSchemaGenAI: Schema = {
  type: Type.OBJECT,
  properties: {
    pembuka_personal: { type: Type.STRING, description: "1 kalimat pembuka yang langsung 'kena' dan empatik" },
    identity_mirror: { type: Type.STRING, description: "3-4 kalimat refleksi psikologis mendalam (gaya belajar, pengambilan keputusan, nilai kerja). Harus terasa seperti cermin." },
    career_direction: { type: Type.STRING, description: "Firm decision: Kuliah, Kerja, or Hybrid" },
    direction_reasoning: { type: Type.STRING, description: "2-3 kalimat alasan strategis di balik arah tersebut, hubungkan dengan kondisi nyata mereka (biaya/akademik)." },
    career_options: { 
      type: Type.ARRAY, 
      items: { 
        type: Type.OBJECT,
        properties: {
          nama: { type: Type.STRING },
          deskripsi_singkat: { type: Type.STRING }
        },
        required: ["nama", "deskripsi_singkat"]
      }, 
      description: "Tepat 3 opsi karir yang sangat spesifik" 
    },
    roadmap: { type: Type.STRING, description: "2-3 kalimat langkah konkret untuk 6 bulan ke depan" },
    key_risk: { type: Type.STRING, description: "1-2 kalimat menyoroti blind spot psikologis atau strategis yang harus diwaspadai" },
    insight_moment: { type: Type.STRING, description: "1 kalimat puitis dan powerful yang memvalidasi potensi atau struggle mereka" },
    premium_curious_gap: { type: Type.STRING, description: "1-2 kalimat secara halus menyinggung bahwa simulasi 5 tahun dan jurusan spesifik ada di laporan premium" }
  },
  required: [
    "pembuka_personal", "identity_mirror", "career_direction", "direction_reasoning", "career_options", 
    "roadmap", "key_risk", "insight_moment", "premium_curious_gap"
  ]
}

export async function POST(req: Request) {
  try {
    const supabase = createRouteClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { session_id } = await req.json()
    if (!session_id) return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })

    const { data: session, error } = await supabase
      .from('test_sessions')
      .select('profil_data')
      .eq('id', session_id)
      .eq('user_id', user.id)
      .single()

    if (error || !session) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

    const profilData = session.profil_data as ProfilData
    
    if (profilData.free_report) {
      return NextResponse.json({ report: profilData.free_report })
    }

    const anxiety = getAnxietyContext(profilData.d4_konteks)

    const promptText = `---
IDENTITAS & TONE VOICE (WAJIB DIIKUTI)
${BRAND_VOICE}

STYLE GUIDE BAHASA (WAJIB DIIKUTI)
${STYLE_GUIDE}
---

[DATA PROFIL SISWA]
- D1 (RIASEC): ${profilData.d1_riasec.holland_code.join('')} (${profilData.d1_riasec.deskripsi_primer}, ${profilData.d1_riasec.deskripsi_sekunder})
- D2 (MI): ${profilData.d2_mi.mi_profile.join(', ')} (${profilData.d2_mi.deskripsi_primer}, ${profilData.d2_mi.deskripsi_sekunder})
- D3 (Work Values): ${profilData.d3_workvalues.values_profile.join(', ')} (${profilData.d3_workvalues.deskripsi_primer}, ${profilData.d3_workvalues.deskripsi_sekunder})
- D4 Konteks (Tahap): ${profilData.d4_konteks.tahap}
- D4 Konteks (Domisili): ${profilData.d4_konteks.domisili}
- D4 Konteks (Jalur): ${profilData.d4_konteks.jalur.join(', ')}
- D4 Konteks (Biaya): ${profilData.d4_konteks.kondisi_biaya}
- D4 Konteks (Tanggungan): ${profilData.d4_konteks.tanggungan_keluarga}
- D4 Konteks (Akademik): ${profilData.d4_konteks.kemampuan_akademik}
- D4 Konteks (Mobilitas): ${profilData.d4_konteks.mobilitas}

[KONTEKS KEGELISAHAN/ANXIETY USER]
- Primary Anxiety: ${anxiety.primaryAnxiety}
- Secondary Anxiety: ${anxiety.secondaryAnxiety || 'N/A'}
- Analisis Konteks: ${anxiety.contextDescription}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: promptText,
      config: {
        systemInstruction: getFreePrompt(),
        responseMimeType: 'application/json',
        responseSchema: freeReportSchemaGenAI,
        temperature: 0.7
      }
    })

    const resultText = response.text || ''
    const reportData = JSON.parse(resultText)

    // Ensure array is capped to 3
    if (Array.isArray(reportData.career_options)) {
      reportData.career_options = reportData.career_options.slice(0, 3)
    }

    // Save back to database
    const updatedProfil = {
      ...profilData,
      free_report: reportData
    }

    await supabase
      .from('test_sessions')
      .update({ profil_data: updatedProfil })
      .eq('id', session_id)

    return NextResponse.json({ report: reportData })
  } catch (error) {
    console.error('Laporan Gratis Error:', error)
    return NextResponse.json({ error: 'Gagal memproses laporan gratis' }, { status: 500 })
  }
}
