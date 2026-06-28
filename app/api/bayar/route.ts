import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

// ============================================================
// MIDTRANS PAYMENT API
// Docs: https://docs.midtrans.com/reference/snap-api
//
// Notifikasi pembayaran (webhook) ditangani di /api/webhook/midtrans,
// BUKAN di handler PUT lawas — itu sudah dihapus agar tidak ada dua
// jalur penanganan webhook yang berbeda.
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

    // Pastikan sesi tes benar-benar ada dan sudah punya profil_data — laporan AI
    // sendiri akan di-generate oleh webhook SETELAH pembayaran terkonfirmasi.
    const supabase = createAdminClient()
    const { data: session } = await supabase
      .from('test_sessions')
      .select('id, profil_data')
      .eq('id', session_id)
      .maybeSingle()

    if (!session || !session.profil_data) {
      return NextResponse.json({ error: 'Sesi tes tidak ditemukan. Coba muat ulang halaman hasil.' }, { status: 400 })
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
