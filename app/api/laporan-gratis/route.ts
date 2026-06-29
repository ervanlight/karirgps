import { NextResponse } from 'next/server'
import { createRouteClient } from '@/lib/supabase-server'
import { GoogleGenAI, Type, Schema } from '@google/genai'
import type { ProfilData } from '@/types'
import { RIASEC_LABELS, MI_LABELS, WV_LABELS } from '@/lib/scoring'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!
})

// Schema for Gemini Structured Output
const freeReportSchemaGenAI: Schema = {
  type: Type.OBJECT,
  properties: {
    decision: { type: Type.STRING, description: "Firm decision: Work, College, or Hybrid" },
    personality_insight: { type: Type.STRING, description: "Simple language describing user behavior pattern" },
    reasoning: { type: Type.STRING, description: "Short reasoning why this makes sense" },
    career_fit: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Realistic Indonesian context, exactly 3 items" },
    roadmap: { type: Type.STRING, description: "Practical steps for the next 6-12 months" },
    risk_statement: { type: Type.STRING, description: "Honest but not scary risk if wrong decision is taken" },
    viral_hook: { type: Type.STRING, description: "One sentence that feels like 'wow this is me'" }
  },
  required: ["decision", "personality_insight", "reasoning", "career_fit", "roadmap", "risk_statement", "viral_hook"]
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

    const prompt = `You are a senior career mentor AI for Indonesian high school students.
Your job is to give HIGHLY INSIGHTFUL, emotionally accurate, and simple career guidance based on limited user data.

You must:
- infer deeper personality traits from minimal input
- avoid generic answers
- sound like a human mentor, not AI system
- be very clear, structured, and decisive

------------------------------------------------------------
USER DATA:
- Jurusan: ${jurusan}
- Minat: ${minat}
- Gaya belajar: ${gayaBelajar}
- Preferensi: ${preferensi}
- Nilai: ${nilai}
------------------------------------------------------------

TASK:
Generate the output based on the provided schema.

1. DECISION (Work / College / Hybrid) -> Must be firm, not vague
8. PERSONALITY INSIGHT (very important) -> describe user behavior pattern (simple language)
9. REASONING -> why this makes sense
10. CAREER FIT (3 options only) -> realistic Indonesian context
11. 6-12 MONTH ROADMAP -> practical steps
12. RISK STATEMENT -> what happens if wrong decision is taken
13. VIRAL INSIGHT HOOK -> Tulis 1 kalimat mutlak yang membongkar sifat asli siswa secara psikologis. Gunakan pola kontradiksi: "[Sifat yang terlihat di luar], tapi sebenarnya [Kebenaran yang disembunyikan/Kekuatan uniknya]". Kalimat ini harus memicu reaksi "Sial, kok AI ini tahu banget gue kayak gini?!".

OUTPUT STYLE (MANDATORY):
- Indonesian Mentor Mode
- calm, clear, structured
- NO slang (no gue/lu)
- not robotic
- not academic
- short paragraphs

IMPORTANT RULES:
- Do NOT be generic
- Do NOT repeat user input
- Always infer deeper meaning
- Always give decisive recommendation
- Think like a human career mentor

GOAL: Make the user feel: "This AI understands me better than I understand myself"`

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: freeReportSchemaGenAI,
        temperature: 0.7
      }
    })

    const resultText = response.text || ''
    const reportData = JSON.parse(resultText)

    // Ensure array is capped to 3
    if (Array.isArray(reportData.career_fit)) {
      reportData.career_fit = reportData.career_fit.slice(0, 3)
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
