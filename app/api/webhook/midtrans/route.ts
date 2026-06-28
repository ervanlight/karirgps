import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createAdminClient } from '@/lib/supabase'
import { kirimLaporan } from '@/lib/email'
import { generateLaporanLengkap } from '@/lib/laporan'
import type { ProfilData, RiasecCode, MICode, WorkValueCode } from '@/types'

// ============================================================
// MIDTRANS PAYMENT WEBHOOK
// Docs: https://docs.midtrans.com/reference/handling-notifications
//
// Laporan AI lengkap (2x panggilan Claude, ~60-90 detik) sengaja
// di-generate DI SINI — bukan saat user klik "Bayar" — karena ini
// berjalan server-to-server tanpa user menunggu di browser.
// ============================================================

export const maxDuration = 180

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!

function verifySignature(orderId: string, statusCode: string, grossAmount: string, signatureKey: string): boolean {
  const expected = crypto
    .createHash('sha512')
    .update(orderId + statusCode + grossAmount + MIDTRANS_SERVER_KEY)
    .digest('hex')
  return expected === signatureKey
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      order_id,
      status_code,
      transaction_status,
      payment_type,
      transaction_id,
      signature_key,
      gross_amount,
    } = body

    // 1. Validasi signature — wajib cocok, baik sandbox maupun production.
    if (!signature_key || !verifySignature(order_id, status_code, gross_amount, signature_key)) {
      console.error('Invalid Midtrans signature for order_id:', order_id)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Ambil session_id dari order_id format: KARIRGPS-{session_id}-{timestamp}
    // Log original order_id untuk debugging di Vercel Logs
    console.log('Original order_id from Midtrans:', order_id)

    const parts = order_id?.split('-')
    if (!parts || parts.length < 3) {
      console.error('Invalid order_id format:', order_id)
      return NextResponse.json({ error: 'Invalid order_id' }, { status: 400 })
    }

    // Mengambil bagian UUID (antara KARIRGPS dan timestamp)
    const sessionId = parts.slice(1, -1).join('-')

    // Validasi akhir sessionId
    if (!sessionId || sessionId.length < 30) {
      console.error('Parsed sessionId is invalid/short:', sessionId)
      return NextResponse.json({ error: 'Invalid sessionId' }, { status: 400 })
    }

    const supabase = createAdminClient()

    // 3. Hanya proses jika settlement atau capture (pembayaran berhasil)
    if (transaction_status === 'settlement' || transaction_status === 'capture') {

      // Idempotency — Midtrans bisa mengirim notifikasi yang sama berkali-kali.
      // Kalau sudah pernah diproses sebagai 'paid', jangan generate ulang & kirim email dobel.
      const { data: existingReport } = await supabase
        .from('reports')
        .select('id, payment_status')
        .eq('session_id', sessionId)
        .maybeSingle()

      if (existingReport?.payment_status === 'paid') {
        return NextResponse.json({ status: 'ok', action: 'already_paid' })
      }

      // Ambil profil_data yang disimpan saat user menyelesaikan tes
      const { data: sessionData, error: sessionError } = await supabase
        .from('test_sessions')
        .select('user_id, profil_data')
        .eq('id', sessionId)
        .single()

      if (sessionError || !sessionData?.profil_data) {
        console.error('Session/profil tidak ditemukan untuk sessionId:', sessionId, sessionError)
        return NextResponse.json({ error: 'Session tidak ditemukan' }, { status: 404 })
      }

      const profil = sessionData.profil_data as ProfilData

      // 4. Generate laporan AI lengkap (siswa + orang tua) — proses lambat (~60-90s),
      //    aman dilakukan di sini karena ini server-to-server, bukan menunggu klik user.
      const { laporanSiswa, laporanOrtu } = await generateLaporanLengkap(profil)

      const reportPayload = {
        laporan_siswa: laporanSiswa,
        laporan_ortu: laporanOrtu,
        payment_status: 'paid' as const,
        payment_id: transaction_id,
        payment_method: payment_type,
        paid_at: new Date().toISOString(),
      }

      const reportError = existingReport
        ? (await supabase.from('reports').update(reportPayload).eq('id', existingReport.id)).error
        : (await supabase.from('reports').insert({ session_id: sessionId, ...reportPayload })).error

      if (reportError) {
        console.error('Report save error:', reportError)
        return NextResponse.json({ error: 'Report save failed' }, { status: 500 })
      }

      // Update session status
      await supabase
        .from('test_sessions')
        .update({ status: 'paid' })
        .eq('id', sessionId)

      // 5. Kirim email laporan ke user
      if (sessionData.user_id) {
        const { data: userData } = await supabase.auth.admin.getUserById(sessionData.user_id)
        const email = userData?.user?.email

        if (email) {
          const hollandCode = profil.d1_riasec?.holland_code || []
          const miProfile = profil.d2_mi?.mi_profile || []
          const wvProfile = profil.d3_workvalues?.values_profile || []

          const emailResult = await kirimLaporan({
            toEmail: email,
            laporan: laporanSiswa,
            laporanOrtu,
            hollandCode: hollandCode as RiasecCode[],
            miProfile: miProfile as MICode[],
            wvProfile: wvProfile as WorkValueCode[],
          })

          if (!emailResult.success) {
            console.error('Email send failed:', emailResult.error)
          } else {
            console.log(`Email terkirim ke ${email}`)
          }
        }
      }

      return NextResponse.json({ status: 'ok', action: 'paid_and_emailed' })
    }

    console.log(`Midtrans notification: ${order_id} → ${transaction_status}`)
    return NextResponse.json({ status: 'ok', action: 'logged' })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'webhook active' })
}