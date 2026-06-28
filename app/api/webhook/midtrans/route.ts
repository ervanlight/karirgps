import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'
import { kirimLaporan } from '@/lib/email'
import type { LaporanSiswa, LaporanOrangTua, RiasecCode, MICode, WorkValueCode } from '@/types'

// ============================================================
// MIDTRANS PAYMENT WEBHOOK — Updated dengan Email
// Dipanggil oleh Midtrans setelah status pembayaran berubah
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      order_id,
      transaction_status,
      payment_type,
      transaction_id,
      signature_key,
      gross_amount,
    } = body

    // Validasi signature (production)
    // Di production: verifikasi SHA512 hash
    // hash = SHA512(order_id + status_code + gross_amount + server_key)
    if (process.env.NODE_ENV === 'production' && !signature_key) {
      console.error('Missing signature_key from Midtrans')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Ambil session_id dari order_id format: KARIRGPS-{session_id}-{timestamp}
    const parts = order_id?.split('-')
    const sessionId = parts?.slice(1, -1).join('-') // handle UUID dengan dashes

    if (!sessionId) {
      console.error('Cannot parse session_id from order_id:', order_id)
      return NextResponse.json({ error: 'Invalid order_id' }, { status: 400 })
    }

    const supabase = createClient()

    // Hanya proses jika settlement atau capture (pembayaran berhasil)
    if (transaction_status === 'settlement' || transaction_status === 'capture') {
      // 1. Update report → payment_status = 'paid'
      const { data: reportData, error: reportError } = await supabase
        .from('reports')
        .update({
          payment_status: 'paid',
          payment_id: transaction_id,
          payment_method: payment_type,
          paid_at: new Date().toISOString(),
        })
        .eq('session_id', sessionId)
        .select('laporan_siswa, laporan_ortu, session_id')
        .single()

      if (reportError) {
        console.error('Report update error:', reportError)
        return NextResponse.json({ error: 'Report update failed' }, { status: 500 })
      }

      // 2. Update session → status = 'paid'
      await supabase
        .from('test_sessions')
        .update({ status: 'paid' })
        .eq('id', sessionId)

      // 3. Ambil user email + profil data
      const { data: sessionData } = await supabase
        .from('test_sessions')
        .select('user_id, profil_data')
        .eq('id', sessionId)
        .single()

      if (sessionData?.user_id) {
        const { data: userData } = await supabase.auth.admin.getUserById(sessionData.user_id)
        const email = userData?.user?.email

        if (email && reportData?.laporan_siswa && reportData?.laporan_ortu) {
          // 4. Kirim email laporan
          const profil = sessionData.profil_data
          const hollandCode = profil?.d1_riasec?.holland_code || []
          const miProfile = profil?.d2_mi?.mi_profile || []
          const wvProfile = profil?.d3_workvalues?.values_profile || []

          const emailResult = await kirimLaporan({
            toEmail: email,
            laporan: reportData.laporan_siswa as LaporanSiswa,
            laporanOrtu: reportData.laporan_ortu as LaporanOrangTua,
            hollandCode: hollandCode as RiasecCode[],
            miProfile: miProfile as MICode[],
            wvProfile: wvProfile as WorkValueCode[],
          })

          if (!emailResult.success) {
            // Log error tapi jangan fail webhook — payment tetap valid
            console.error('Email send failed:', emailResult.error)
            // TODO: queue untuk retry email
          } else {
            console.log(`Email terkirim ke ${email}, Resend ID: ${emailResult.id}`)
          }
        }
      }

      return NextResponse.json({ status: 'ok', action: 'paid_and_emailed' })
    }

    // Status lain (pending, expire, cancel) — log saja
    console.log(`Midtrans notification: ${order_id} → ${transaction_status}`)
    return NextResponse.json({ status: 'ok', action: 'logged' })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// GET untuk Midtrans health check
export async function GET() {
  return NextResponse.json({ status: 'webhook active' })
}
