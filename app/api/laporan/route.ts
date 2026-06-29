import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { getAuthenticatedUser } from '@/lib/supabase-server'
import { generateDecisionMVP } from '@/lib/laporan'
import type { ProfilData } from '@/types'

// ============================================================
// LAPORAN AI — endpoint ini TIDAK lagi dipanggil di jalur pembayaran utama.
// Laporan lengkap kini di-generate oleh webhook Midtrans setelah pembayaran
// terkonfirmasi (lihat app/api/webhook/midtrans/route.ts), supaya user tidak
// menunggu 60-90 detik proses AI di browser sebelum sempat membayar.
// Endpoint ini disisakan untuk regenerasi manual / ringkasan gratis.
// ============================================================

export const maxDuration = 290

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { profil, mode, session_id } = body as {
      profil: ProfilData; mode: 'ringkasan' | 'full'; session_id?: string
    }

    if (!profil) return NextResponse.json({ error: 'profil diperlukan' }, { status: 400 })

    // Endpoint ini bisa memicu panggilan Claude API yang mahal -- wajib login
    // supaya tidak bisa di-spam siapapun.
    const user = await getAuthenticatedUser()
    if (!user) {
      return NextResponse.json({ error: 'Sesi login tidak ditemukan.' }, { status: 401 })
    }

    if (mode === 'ringkasan') {
      return NextResponse.json({ error: 'Endpoint ringkasan sudah tidak digunakan (depreacated). Gunakan endpoint laporan-gratis.' }, { status: 410 })
    }

    if (mode === 'full') {
      if (!session_id) {
        return NextResponse.json({ error: 'session_id diperlukan untuk mode full' }, { status: 400 })
      }

      const supabase = createAdminClient()
      const { data: ownerCheck } = await supabase
        .from('test_sessions')
        .select('user_id')
        .eq('id', session_id)
        .maybeSingle()

      if (!ownerCheck || ownerCheck.user_id !== user.id) {
        return NextResponse.json({ error: 'Sesi ini bukan milikmu.' }, { status: 403 })
      }

      const laporanSiswa = await generateDecisionMVP(profil)

      const { data: existing } = await supabase
        .from('reports')
        .select('id')
        .eq('session_id', session_id)
        .maybeSingle()

      const reportError = existing
        ? (await supabase
            .from('reports')
            .update({ laporan_siswa: laporanSiswa, laporan_orang_tua: null })
            .eq('id', existing.id)).error
        : (await supabase
            .from('reports')
            .insert({ session_id, laporan_siswa: laporanSiswa, laporan_orang_tua: null, payment_status: 'unpaid' })).error

      if (reportError) {
        console.error('Report save error:', reportError)
        return NextResponse.json({ error: 'Gagal menyimpan laporan' }, { status: 500 })
      }
      await supabase.from('test_sessions').update({ profil_data: profil }).eq('id', session_id)

      return NextResponse.json({ laporan_siswa: laporanSiswa, laporan_orang_tua: null })
    }

    return NextResponse.json({ error: 'mode tidak valid' }, { status: 400 })
  } catch (error) {
    console.error('Laporan route error:', error)
    return NextResponse.json({ error: 'Gagal generate laporan. Coba lagi.' }, { status: 500 })
  }
}
