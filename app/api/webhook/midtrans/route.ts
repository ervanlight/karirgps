import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createAdminClient } from '@/lib/supabase'
import { kirimLaporan } from '@/lib/email'
import type { LaporanSiswa, LaporanOrangTua, RiasecCode, MICode, WorkValueCode } from '@/types'

// ============================================================
// MIDTRANS PAYMENT WEBHOOK
// Docs: https://docs.midtrans.com/reference/handling-notifications
// ============================================================

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
      
      // Update report status
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

      // Update session status
      await supabase
        .from('test_sessions')
        .update({ status: 'paid' })
        .eq('id', sessionId)

      // 4. Ambil user email + profil data untuk pengiriman laporan
      const { data: sessionData } = await supabase
        .from('test_sessions')
        .select('user_id, profil_data')
        .eq('id', sessionId)
        .single()

      if (sessionData?.user_id) {
        const { data: userData } = await supabase.auth.admin.getUserById(sessionData.user_id)
        const email = userData?.user?.email

        if (email && reportData?.laporan_siswa && reportData?.laporan_ortu) {
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