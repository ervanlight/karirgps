import { NextResponse } from 'next/server'
import { createRouteClient } from '@/lib/supabase-server'
import { getClaudeClient, CLAUDE_MODEL, extractJsonText } from '@/lib/claude-client'
import type { ProfilData } from '@/types'
import { getAnxietyContext } from '@/lib/knowledge/anxiety-framework'
import { freeReportPrompt } from '@/lib/prompts/free-report'
import { BRAND_VOICE } from '@/lib/knowledge/brand-voice'
import { STYLE_GUIDE } from '@/lib/knowledge/style-guide'

export const maxDuration = 60

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

    // System prompt statis (instruksi laporan gratis + brand voice + style guide)
    // sama persis di setiap panggilan -- di-cache lewat cache_control supaya
    // hemat token (lihat lib/prompts/README.md).
    const systemPrompt = `${freeReportPrompt}

IDENTITAS & TONE VOICE (WAJIB DIIKUTI)
${BRAND_VOICE}

STYLE GUIDE BAHASA (WAJIB DIIKUTI)
${STYLE_GUIDE}`

    const userContent = `[DATA PROFIL SISWA]
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
- Analisis Konteks: ${anxiety.contextDescription}`

    const client = getClaudeClient()
    const response = await client.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 2000,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      messages: [{ role: 'user', content: userContent }],
    })

    const reportData = JSON.parse(extractJsonText(response))

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
  } catch (error: any) {
    console.error('Laporan Gratis Error:', error)
    if (error?.status === 429) {
      return NextResponse.json({
        error: 'Trafik AI sedang penuh. Harap tunggu sekitar 1 menit, lalu klik Coba Lagi.'
      }, { status: 429 })
    }
    return NextResponse.json({ error: 'Gagal memproses laporan gratis. Coba beberapa saat lagi.' }, { status: 500 })
  }
}
