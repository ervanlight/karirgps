import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createAdminClient } from '@/lib/supabase'
import { kirimLaporan } from '@/lib/email'
import { generateDecisionMVP } from '@/lib/laporan'
import type { ProfilData, RiasecCode, MICode, WorkValueCode } from '@/types'

// ============================================================
// MIDTRANS PAYMENT WEBHOOK
// Docs: https://docs.midtrans.com/reference/handling-notifications
// ============================================================

export const maxDuration = 290

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
      dev_simulate
    } = body

    const isDevSimulation = process.env.NODE_ENV === 'development' && dev_simulate === true;

    if (!isDevSimulation && (!signature_key || !verifySignature(order_id, status_code, gross_amount, signature_key))) {
      console.error('Invalid Midtrans signature for order_id:', order_id)
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (isDevSimulation) {
      console.log('🛠️ Bypassing signature verification for local DEV simulation');
    }

    console.log('Original order_id from Midtrans:', order_id)

    const parts = order_id?.split('-')
    if (!parts || parts.length < 3) {
      console.error('Invalid order_id format:', order_id)
      return NextResponse.json({ error: 'Invalid order_id' }, { status: 400 })
    }

    const sessionId = parts.slice(1, -1).join('-')

    if (!sessionId || sessionId.length < 30) {
      console.error('Parsed sessionId is invalid/short:', sessionId)
      return NextResponse.json({ error: 'Invalid sessionId' }, { status: 400 })
    }

    const supabase = createAdminClient()

    if (transaction_status === 'settlement' || transaction_status === 'capture') {

      const { data: existingReport } = await supabase
        .from('reports')
        .select('id, payment_status')
        .eq('session_id', sessionId)
        .maybeSingle()

      if (existingReport?.payment_status === 'paid') {
        return NextResponse.json({ status: 'ok', action: 'already_paid' })
      }

      const { data: sessionData, error: sessionError } = await supabase
        .from('test_sessions')
        .select('user_id, profil_data')
        .eq('id', sessionId)
        .single()

      if (sessionError || !sessionData?.profil_data) {
        console.error('Session/profil tidak ditemukan untuk sessionId:', sessionId, sessionError)
        return NextResponse.json({ error: 'Session tidak ditemukan' }, { status: 404 })
      }

      // 1. Simpan status pembayaran terlebih dahulu agar UI frontend segera update (tidak delay)
      const reportPayload = {
        payment_status: 'paid' as const,
        payment_id: transaction_id,
        payment_method: payment_type,
        paid_at: new Date().toISOString(),
        user_id: sessionData.user_id,
      }

      const reportError = existingReport
        ? (await supabase.from('reports').update(reportPayload).eq('id', existingReport.id)).error
        : (await supabase.from('reports').insert({ session_id: sessionId, ...reportPayload })).error

      if (reportError) {
        console.error('Report save error:', reportError)
        return NextResponse.json({ error: 'Report save failed' }, { status: 500 })
      }

      await supabase
        .from('test_sessions')
        .update({ status: 'paid' })
        .eq('id', sessionId)

      // 2. Jalankan AI Generation secara inline (Gemini 2.5 Flash sangat cepat, 1-3 detik, aman dari Vercel 10s timeout)
      console.log('🚀 Menjalankan AI Generation...')
      try {
        const profil = sessionData.profil_data as ProfilData
        const laporanSiswa = await generateDecisionMVP(profil)
        await supabase.from('reports').update({ laporan_siswa: laporanSiswa }).eq('session_id', sessionId)
        console.log('✅ AI Generation sukses.')
      } catch (e) {
        console.error('❌ AI Generation gagal:', e)
      }

      return NextResponse.json({ status: 'ok', action: 'paid_and_dispatched' })
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