'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useTesStore } from '@/lib/store'
import { createClient } from '@/lib/supabase'
import { buildProfil, RIASEC_LABELS, MI_LABELS, WV_LABELS } from '@/lib/scoring'
import { RIASEC_COLOR, WV_COLOR, getProfilText, getRekomendasi, ScoreBar, FITUR_PAID } from '@/lib/rekomendasi-gratis'
import LaporanLengkap from '@/components/hasil/LaporanLengkap'
import type { RiasecCode, MICode, WorkValueCode, LaporanSiswa, LaporanOrangTua } from '@/types'

export default function HasilPage() {
  return (
    <Suspense fallback={null}>
      <HasilContent />
    </Suspense>
  )
}

function HasilContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentStatus = searchParams.get('status')
  const store = useTesStore()
  const [paying, setPaying] = useState(false)
  const [payError, setPayError] = useState('')
  const [payStep, setPayStep] = useState('')
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [sessionReady, setSessionReady] = useState(false)
  const creatingSession = useRef(false)
  const [laporanLengkap, setLaporanLengkap] = useState<{ siswa: LaporanSiswa; ortu: LaporanOrangTua } | null>(null)
  const [checkingLaporan, setCheckingLaporan] = useState(false)
  const [laporanTimedOut, setLaporanTimedOut] = useState(false)

  // Build profil from store
  const profil = buildProfil({
    ...store,
    d4_konteks: store.d4_konteks as Required<typeof store.d4_konteks>,
  } as Parameters<typeof buildProfil>[0])

  // Pastikan ada akun + sesi tersimpan di Supabase sebelum apapun bisa dibayar.
  // session_id WAJIB berupa UUID asli dari tabel test_sessions — bukan placeholder.
  useEffect(() => {
    let active = true
    async function ensureSession() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/register?next=/hasil')
        return
      }
      if (!active) return
      setUserEmail(user.email ?? null)

      if (store.session_id) {
        setSessionReady(true)
        return
      }
      if (creatingSession.current) return
      creatingSession.current = true

      const { data, error } = await supabase
        .from('test_sessions')
        .insert({
          user_id: user.id,
          session_token: crypto.randomUUID(),
          profil_data: profil,
          status: 'completed',
          completed_at: new Date().toISOString(),
        })
        .select('id')
        .single()

      if (!active) return
      if (error || !data) {
        setPayError('Gagal menyimpan sesi tesmu. Coba muat ulang halaman ini.')
        return
      }
      store.setSessionId(data.id)
      setSessionReady(true)
    }
    ensureSession()
    return () => { active = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Cek apakah laporan lengkap sudah jadi & dibayar. Kalau baru selesai bayar
  // (?status=paid), polling beberapa kali karena AI butuh ~1-2 menit di webhook.
  useEffect(() => {
    if (!sessionReady || !store.session_id) return
    let active = true
    let attempts = 0
    const maxAttempts = paymentStatus === 'paid' ? 70 : 1 // ~5 menit kalau baru bayar (laporan AI bisa >2 menit), sekali kalau cuma mampir

    async function checkLaporan() {
      const supabase = createClient()
      const { data } = await supabase
        .from('reports')
        .select('payment_status, laporan_siswa, laporan_ortu')
        .eq('session_id', store.session_id as string)
        .maybeSingle()

      if (!active) return

      if (data?.payment_status === 'paid' && data.laporan_siswa && data.laporan_ortu) {
        setLaporanLengkap({ siswa: data.laporan_siswa as LaporanSiswa, ortu: data.laporan_ortu as LaporanOrangTua })
        setCheckingLaporan(false)
        return
      }

      attempts += 1
      if (attempts >= maxAttempts) {
        setCheckingLaporan(false)
        if (paymentStatus === 'paid') setLaporanTimedOut(true)
        return
      }
      setCheckingLaporan(true)
      setTimeout(checkLaporan, 4500)
    }
    checkLaporan()
    return () => { active = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionReady, store.session_id, paymentStatus])

  function handleDownloadPdf() {
    window.print()
  }

  const hollandCode = profil.d1_riasec.holland_code
  const miProfile = profil.d2_mi.mi_profile
  const wvProfile = profil.d3_workvalues.values_profile
  const riasecScores = profil.d1_riasec.skor
  const miScores = profil.d2_mi.skor
  const wvScores = profil.d3_workvalues.skor

  const top2Holland = hollandCode.slice(0, 2) as RiasecCode[]
  const { jurusan, profesi } = getRekomendasi(top2Holland)

  // Sorted scores for bars
  const riasecSorted = (Object.entries(riasecScores) as [RiasecCode, number][])
    .sort((a, b) => b[1] - a[1])
  const wvSorted = (Object.entries(wvScores) as [WorkValueCode, number][])
    .sort((a, b) => b[1] - a[1])

  async function handleBayar() {
    if (!store.session_id) {
      setPayError('Sesi belum siap. Coba muat ulang halaman ini sebentar lagi.')
      return
    }
    setPaying(true)
    setPayError('')

    try {
      // Buat transaksi Midtrans. Laporan AI lengkap baru di-generate oleh webhook
      // SETELAH pembayaran terkonfirmasi — bukan di sini — supaya tidak menunggu
      // proses AI (60-90 detik) sebelum sempat bayar.
      setPayStep('Membuka pembayaran...')
      const bayarRes = await fetch('/api/bayar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: store.session_id, email: userEmail }),
      })
      const data = await bayarRes.json()
      if (!bayarRes.ok || !data.token) {
        throw new Error(data.error || 'Gagal membuka pembayaran. Coba lagi.')
      }

      // 3. Tampilkan Midtrans Snap popup
      // @ts-expect-error Midtrans Snap global
      window.snap?.pay(data.token, {
        onSuccess: () => { window.location.href = `/laporan/${store.session_id}?status=paid` },
        onPending: () => {
          setPaying(false)
          setPayStep('')
          setPayError('Pembayaran pending — cek emailmu untuk konfirmasi setelah selesai dibayar.')
        },
        onError: () => {
          setPaying(false)
          setPayStep('')
          setPayError('Pembayaran gagal. Coba lagi.')
        },
        onClose: () => { setPaying(false); setPayStep('') },
      })
    } catch (err) {
      setPaying(false)
      setPayStep('')
      setPayError(err instanceof Error ? err.message : 'Terjadi kesalahan. Coba lagi.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
      {/* Print isolation -- saat "Download PDF" diklik, hanya #laporan-print-area yang tercetak */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #laporan-print-area, #laporan-print-area * { visibility: visible; }
          #laporan-print-area { position: absolute; left: 0; top: 0; width: 100%; padding: 24px; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Midtrans Snap script */}
      <script
        type="text/javascript"
        src={process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === 'true'
          ? 'https://app.midtrans.com/snap/snap.js'
          : 'https://app.sandbox.midtrans.com/snap/snap.js'}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ''}
        async
      />

      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', background: '#fff',
        borderBottom: '0.5px solid rgba(44,44,42,0.12)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
          <div style={{ width: 26, height: 26, background: '#1D9E75', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A' }}>KarirGPS</span>
        </Link>
        <Link href="/dashboard" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>
          Dashboard
        </Link>
      </nav>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px 80px' }}>

        {/* STATUS PEMBAYARAN (redirect dari Midtrans) */}
        {paymentStatus === 'paid' && !laporanLengkap && (
          <div style={{ background: '#E1F5EE', border: '0.5px solid #9FE1CB', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#0F6E56', lineHeight: 1.6 }}>
            <strong>Pembayaran berhasil.</strong> Laporan lengkapmu sedang disiapkan oleh AI (biasanya 2-4 menit). Halaman ini otomatis menampilkan laporannya begitu selesai — sekaligus dikirim ke emailmu juga.
          </div>
        )}
        {paymentStatus === 'pending' && (
          <div style={{ background: '#FAEEDA', border: '0.5px solid #E8C98A', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#633806', lineHeight: 1.6 }}>
            <strong>Pembayaran masih pending.</strong> Begitu pembayaran terkonfirmasi, laporan lengkap otomatis dikirim ke emailmu.
          </div>
        )}
        {paymentStatus === 'error' && (
          <div style={{ background: '#FCEBEB', border: '0.5px solid #F7C1C1', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#A32D2D', lineHeight: 1.6 }}>
            <strong>Pembayaran gagal.</strong> Coba klik tombol bayar di bawah lagi.
          </div>
        )}

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '0.5px solid rgba(44,44,42,0.12)' }}>
          <h1 style={{ fontSize: 26, fontWeight: 500, color: '#2C2C2A', marginBottom: 10, letterSpacing: '-0.4px' }}>
            Ini bukan vonis.
          </h1>
          <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.7, maxWidth: 440, margin: '0 auto' }}>
            Ini lebih seperti cermin — yang untuk pertama kalinya mungkin menunjukkan sesuatu yang sudah lama ada, tapi belum pernah kamu lihat dengan jelas.
          </p>
        </div>

        {/* PROFIL SINGKAT */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
            Profil singkatmu
          </div>
          {/* Code pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
            {top2Holland.map(c => (
              <span key={c} style={{ background: '#E1F5EE', color: '#0F6E56', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                {RIASEC_LABELS[c]}
              </span>
            ))}
            {miProfile.slice(0, 2).map(c => (
              <span key={c} style={{ background: '#EEEDFE', color: '#3C3489', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                {MI_LABELS[c as MICode]}
              </span>
            ))}
            {wvProfile.slice(0, 2).map(c => (
              <span key={c} style={{ background: '#FAEEDA', color: '#633806', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                {WV_LABELS[c as WorkValueCode]}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.75 }}>
            {getProfilText(top2Holland, RIASEC_LABELS)}
          </p>
        </div>

        {/* RIASEC SCORE BARS */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
            Skor dimensi 1 — minat
          </div>
          {riasecSorted.map(([k, v]) => (
            <ScoreBar key={k} label={RIASEC_LABELS[k]} skor={v} warna={RIASEC_COLOR[k]} />
          ))}
          <div style={{ fontSize: 12, color: '#888780', marginTop: 10, lineHeight: 1.5 }}>
            Skor tertinggi bukan berarti satu-satunya bidang yang cocok — Holland Code membaca kombinasi, bukan satu puncak tertinggi.
          </div>
        </div>

        {/* NILAI KERJA BARS */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
            Skor dimensi 3 — nilai kerja
          </div>
          {wvSorted.map(([k, v]) => (
            <ScoreBar key={k} label={WV_LABELS[k as WorkValueCode]} skor={v} warna={WV_COLOR[k as WorkValueCode]} />
          ))}
          <div style={{ fontSize: 12, color: '#888780', marginTop: 10, lineHeight: 1.5 }}>
            Nilai yang skornya rendah bukan berarti tidak penting — bisa jadi memang sudah cukup terpenuhi oleh bidang yang kamu pilih.
          </div>
        </div>

        {/* FREE REKOMENDASI */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 16 }}>
            Gambaran awal — jurusan & profesi
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 10 }}>Top 3 kluster jurusan</div>
            {jurusan.map(([nama, desc]) => (
              <div key={nama} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', marginTop: 7, flexShrink: 0 }}/>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A' }}>{nama}</span>
                  {' '}<span style={{ fontSize: 13, color: '#888780' }}>— {desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 10 }}>Top 5 profesi</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {profesi.map(p => (
                <span key={p} style={{ background: '#F8F7F4', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 20, padding: '5px 12px', fontSize: 13, color: '#2C2C2A' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, padding: '12px 14px', background: '#F8F7F4', borderRadius: 8, fontSize: 12, color: '#888780', lineHeight: 1.6 }}>
            Ini hanya gambaran awal. Laporan lengkap menjabarkan reasoning di balik setiap rekomendasi dan menyesuaikannya dengan kondisi nyatamu — kampus yang realistis, jalur masuk yang konkret, dan langkah selanjutnya yang bisa kamu eksekusi sekarang.
          </div>
        </div>

        {/* LAPORAN LENGKAP (kalau sudah dibayar & selesai diproses) */}
        {laporanLengkap && (
          <>
            <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, gap: 10 }}>
              <div style={{ fontSize: 13, color: '#0F6E56', fontWeight: 500 }}>✓ Laporan lengkapmu sudah siap</div>
              <button
                onClick={handleDownloadPdf}
                style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.15)', borderRadius: 8, padding: '8px 14px', fontSize: 13, color: '#2C2C2A', cursor: 'pointer' }}
              >
                ↓ Download PDF
              </button>
            </div>
            <LaporanLengkap laporan={laporanLengkap.siswa} laporanOrtu={laporanLengkap.ortu} />
          </>
        )}

        {checkingLaporan && !laporanLengkap && (
          <div style={{ textAlign: 'center', padding: '24px 0', fontSize: 13, color: '#888780', lineHeight: 1.6, maxWidth: 380, margin: '0 auto' }}>
            Kami sedang membaca semua yang kamu jawab tadi. Ini butuh sedikit waktu karena kami tidak pakai template — hasilnya ditulis khusus untuk kamu.
          </div>
        )}

        {laporanTimedOut && !laporanLengkap && (
          <div style={{ background: '#FAEEDA', border: '0.5px solid #E8C98A', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#633806', lineHeight: 1.6 }}>
            <strong>Laporanmu butuh waktu lebih lama dari biasanya.</strong> Pembayaranmu sudah kami terima — laporan sedang diproses di belakang dan akan otomatis dikirim ke emailmu begitu selesai. Coba muat ulang halaman ini dalam beberapa menit.
            <div style={{ marginTop: 10 }}>
              <button
                onClick={() => window.location.reload()}
                style={{ background: '#fff', border: '0.5px solid #E8C98A', borderRadius: 7, padding: '8px 14px', fontSize: 13, color: '#633806', cursor: 'pointer' }}
              >
                Muat ulang halaman
              </button>
            </div>
          </div>
        )}

        {/* PAYWALL */}
        {!laporanLengkap && (
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginTop: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 6 }}>
            Laporan lengkap
          </div>
          <div style={{ fontSize: 16, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>
            Semua yang ada di atas baru permukaannya.
          </div>
          <p style={{ fontSize: 14, color: '#888780', marginBottom: 18, lineHeight: 1.65 }}>
            Laporan lengkap masuk jauh lebih dalam — ditulis seperti oleh konselor yang benar-benar mengenalmu, bukan template.
          </p>

          <div style={{ display: 'grid', gap: 8, marginBottom: 22 }}>
            {FITUR_PAID.map(f => (
              <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#1D9E75', flexShrink: 0, fontSize: 15 }}>✓</span>
                <span style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '20px 0 4px' }}>
            <div style={{ fontSize: 30, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>Rp 59.000</div>
            <div style={{ fontSize: 13, color: '#888780', marginBottom: 18 }}>Satu kali bayar · dikirim ke emailmu · bisa diakses kapan saja</div>
            <button
              onClick={handleBayar}
              disabled={paying || !sessionReady}
              style={{
                background: (paying || !sessionReady) ? '#9FE1CB' : '#1D9E75',
                color: 'white', border: 'none', borderRadius: 10,
                padding: '14px 0', fontSize: 16, fontWeight: 500,
                cursor: (paying || !sessionReady) ? 'not-allowed' : 'pointer',
                width: '100%', transition: 'background 0.15s',
              }}
            >
              {paying ? (payStep || 'Memproses...') : (sessionReady ? 'Bayar Rp 59.000' : 'Menyiapkan sesi...')}
            </button>
            {payError && (
              <div style={{ background: '#FCEBEB', border: '0.5px solid #F7C1C1', borderRadius: 7, padding: '10px 12px', fontSize: 13, color: '#A32D2D', marginTop: 12, textAlign: 'left' }}>
                {payError}
              </div>
            )}
            <div style={{ fontSize: 12, color: '#888780', marginTop: 10 }}>
              QRIS · Transfer bank · GoPay · OVO · Dana · ShopeePay
            </div>
          </div>
        </div>
        )}

        {/* RESTART */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/tes/d1" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>
            ← Ulangi tes dari awal
          </Link>
        </div>
      </div>
    </div>
  )
}
