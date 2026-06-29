import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { getAuthenticatedUser } from '@/lib/supabase-server'
import { generateDecisionMVP, generateParentReport } from '@/lib/laporan'
import { kirimLaporan } from '@/lib/email'
import type { ProfilData, PremiumReportV3, ParentReport } from '@/types'

// Maksimal 60 detik di Vercel Hobby, cukup untuk Gemini 2.5 Pro (Flash untuk parent report sangat cepat)
export const maxDuration = 60

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser()
    if (!user) {
      return NextResponse.json({ error: 'Sesi login tidak ditemukan.' }, { status: 401 })
    }

    const { session_id } = await request.json()
    if (!session_id) {
      return NextResponse.json({ error: 'session_id diperlukan' }, { status: 400 })
    }

    const supabase = createAdminClient()
    
    // Verifikasi sesi dan kepemilikan
    const { data: session } = await supabase
      .from('test_sessions')
      .select('user_id, profil_data')
      .eq('id', session_id)
      .single()

    if (!session || session.user_id !== user.id) {
      return NextResponse.json({ error: 'Sesi tidak valid.' }, { status: 403 })
    }

    // Verifikasi status pembayaran dan belum ada laporan
    const { data: existingReport } = await supabase
      .from('reports')
      .select('id, payment_status, laporan_siswa, laporan_orang_tua')
      .eq('session_id', session_id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    if (existingReport?.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Sesi belum dibayar.' }, { status: 403 })
    }

    const hasValidStudentReport = existingReport?.laporan_siswa && !(existingReport.laporan_siswa as any)._error
    const hasValidParentReport = existingReport?.laporan_orang_tua && !(existingReport.laporan_orang_tua as any)._error

    if (hasValidStudentReport && hasValidParentReport) {
      return NextResponse.json({ status: 'ok', laporan_siswa: existingReport.laporan_siswa })
    }

    console.log('🚀 Menjalankan AI Generation Premium V3 (Siswa & Orang Tua)...')
    const profil = session.profil_data as ProfilData
    
    let laporanSiswa = existingReport?.laporan_siswa as PremiumReportV3
    let laporanOrtu = existingReport?.laporan_orang_tua as ParentReport

    // 1. Generate Laporan Siswa if not exists
    if (!hasValidStudentReport) {
      laporanSiswa = await generateDecisionMVP(profil)
    }

    // 2. Generate Laporan Orang Tua if not exists
    if (laporanSiswa && !hasValidParentReport) {
      laporanOrtu = await generateParentReport(profil, laporanSiswa)
    }

    // 3. Simpan ke database
    await supabase
      .from('reports')
      .update({ 
        laporan_siswa: laporanSiswa,
        laporan_orang_tua: laporanOrtu
      })
      .eq('id', existingReport.id)

    console.log('✅ AI Generation Premium sukses.')

    // Kirim Email
    const { data: userData } = await supabase.auth.admin.getUserById(session.user_id)
    if (userData?.user?.email) {
      const hollandCode = profil.d1_riasec.holland_code
      const miProfile = profil.d2_mi.mi_profile
      const wvProfile = profil.d3_workvalues.values_profile
      
      await kirimLaporan({
        toEmail: userData.user.email,
        laporan: laporanSiswa,
        laporanOrtu: laporanOrtu,
        hollandCode,
        miProfile,
        wvProfile
      })
      console.log('✅ Email Premium terkirim ke', userData.user.email)
    }

    return NextResponse.json({ status: 'ok', laporan_siswa: laporanSiswa })

  } catch (error) {
    console.error('❌ Generate Premium AI Error:', error)
    return NextResponse.json({ error: 'Gagal merakit laporan AI. Coba beberapa saat lagi.' }, { status: 500 })
  }
}
