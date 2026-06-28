import { NextRequest, NextResponse } from 'next/server'

// ============================================================
// MIDTRANS PAYMENT API
// Docs: https://docs.midtrans.com/reference/snap-api
// ============================================================

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!
const MIDTRANS_IS_PRODUCTION = process.env.NODE_ENV === 'production'
const MIDTRANS_BASE_URL = MIDTRANS_IS_PRODUCTION
  ? 'https://app.midtrans.com/snap/v1/transactions'
  : 'https://app.sandbox.midtrans.com/snap/v1/transactions'

// Buat Snap transaction token
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { session_id, email, nama } = body

    if (!session_id) {
      return NextResponse.json({ error: 'session_id diperlukan' }, { status: 400 })
    }

    // Parameter transaksi Midtrans
    const transactionParams = {
      transaction_details: {
        order_id: `KARIRGPS-${session_id}-${Date.now()}`,
        gross_amount: 59000, // Rp 59.000
      },
      customer_details: {
        email: email || 'user@karirgps.id',
        first_name: nama || 'Pengguna',
      },
      item_details: [
        {
          id: 'laporan-lengkap',
          price: 59000,
          quantity: 1,
          name: 'Laporan KarirGPS Lengkap',
          category: 'Edtech',
        },
      ],
      // Payment methods yang diizinkan
      enabled_payments: [
        'qris',
        'bank_transfer',
        'bca_va',
        'bni_va',
        'bri_va',
        'mandiri_va',
        'permata_va',
        'gopay',
        'ovo',
        'dana',
        'shopeepay',
        'akulaku',
      ],
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_BASE_URL}/hasil?session=${session_id}&status=paid`,
        error: `${process.env.NEXT_PUBLIC_BASE_URL}/hasil?session=${session_id}&status=error`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/hasil?session=${session_id}&status=pending`,
      },
      // Expiry: 24 jam
      expiry: {
        start_time: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' +0700',
        unit: 'hours',
        duration: 24,
      },
    }

    // Call Midtrans Snap API
    const credentials = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64')
    const response = await fetch(MIDTRANS_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(transactionParams),
    })

    if (!response.ok) {
      const errData = await response.json()
      console.error('Midtrans error:', errData)
      return NextResponse.json(
        { error: 'Gagal membuat transaksi pembayaran' },
        { status: 500 }
      )
    }

    const data = await response.json()
    return NextResponse.json({
      token: data.token,
      redirect_url: data.redirect_url,
    })
  } catch (error) {
    console.error('Payment route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Midtrans payment notification webhook
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      order_id,
      transaction_status,
      payment_type,
      transaction_id,
    } = body

    // Verifikasi dari Midtrans (validasi signature_key)
    // Di production: verifikasi hash SHA512
    // Lihat: https://docs.midtrans.com/reference/handling-notifications

    const sessionId = order_id?.split('-')[1] // KARIRGPS-{session_id}-{timestamp}

    if (transaction_status === 'settlement' || transaction_status === 'capture') {
      // Payment sukses — update Supabase
      const { createClient } = await import('@/lib/supabase')
      const supabase = createClient()

      await supabase
        .from('reports')
        .update({
          payment_status: 'paid',
          payment_id: transaction_id,
          payment_method: payment_type,
          paid_at: new Date().toISOString(),
        })
        .eq('session_id', sessionId)

      await supabase
        .from('test_sessions')
        .update({ status: 'paid' })
        .eq('id', sessionId)
    }

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 })
  }
}
