import { NextResponse } from 'next/server'
import { createRouteClient } from '@/lib/supabase-server'
import { GoogleGenAI, Type, Schema } from '@google/genai'
import type { ProfilData } from '@/types'
import { RIASEC_LABELS, MI_LABELS, WV_LABELS } from '@/lib/scoring'

import { freeReportPrompt } from '@/lib/prompts/free-report'

export const maxDuration = 30
export const runtime = 'edge'

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
    identity_mirror: { type: Type.STRING, description: "Describe the user in 2-4 sentences. Focus on learning style, decision tendency, work preference." },
    career_direction: { type: Type.STRING, description: "Firm decision: WORK, COLLEGE, or HYBRID" },
    direction_reasoning: { type: Type.STRING, description: "One short explanation WHY this direction fits" },
    career_options: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Provide ONLY 3 career paths, short without explanation" },
    roadmap: { type: Type.STRING, description: "Practical steps for the next 6-12 months. No long-term simulation." },
    key_risk: { type: Type.STRING, description: "One clear risk if direction is ignored or wrong" },
    insight_moment: { type: Type.STRING, description: "One sentence only that makes the user feel understood deeply" },
    premium_curious_gap: { type: Type.STRING, description: "Subtle upgrade hook indicating more depth in Premium" }
  },
  required: [
    "identity_mirror", "career_direction", "direction_reasoning", "career_options", 
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

    // 1. Prepare Data for Prompt
    const d1 = profilData.d1_riasec
    const d2 = profilData.d2_mi
    const d3 = profilData.d3_workvalues
    const d4 = profilData.d4_konteks

    const topRiasec = d1.holland_code.slice(0, 2).map(c => RIASEC_LABELS[c]).join(', ')
    const topMI = d2.mi_profile.slice(0, 2).map(c => MI_LABELS[c]).join(', ')
    const topWV = d3.values_profile.slice(0, 2).map(c => WV_LABELS[c]).join(', ')
    
    const jurusan = `Ketertarikan bidang: ${topRiasec}`
    const minat = `Fokus utama pada: ${d1.deskripsi_primer}`
    const gayaBelajar = `Kecerdasan dominan: ${topMI} (${d2.deskripsi_primer})`
    const preferensi = `Nilai kerja prioritas: ${topWV}. Rencana masuk via: ${d4.jalur.join(',')}. Hambatan biaya: ${d4.kondisi_biaya}.`
    const nilai = `Kemampuan akademik saat ini: ${d4.kemampuan_akademik}`

    const promptText = `PROFIL USER:\n- Jurusan: ${jurusan}\n- Minat: ${minat}\n- Gaya belajar: ${gayaBelajar}\n- Preferensi: ${preferensi}\n- Nilai: ${nilai}`

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
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
