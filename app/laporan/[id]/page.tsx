'use client'
import { Suspense, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { RIASEC_LABELS, MI_LABELS, WV_LABELS } from '@/lib/scoring'
import { RIASEC_COLOR, WV_COLOR, getProfilText, getRekomendasi, ScoreBar, FITUR_PAID } from '@/lib/rekomendasi-gratis'
import LaporanLengkap from '@/components/hasil/LaporanLengkap'
import type { RiasecCode, MICode, WorkValueCode, LaporanSiswa, LaporanOrangTua, ProfilData } from '@/types'

type Status = 'loading' | 'not_found' | 'ready'

export default function LaporanPage() {
  return (
    <Suspense fallback={null}>
      <LaporanContent />
    </Suspense>
  )
}

function LaporanContent() {
  const params = useParams()
  const sessionId = params.id as string
  const searchParams = useSearchParams()
  const paymentStatus = searchParams.get('status')

  const [status, setStatus] = useState<Status>('loading')
  const [profil, setProfil] = useState<ProfilData | null>(null)
  const [paymentPaid, setPaymentPaid] = useState(false)
  const [laporanLengkap, setLaporanLengkap] = useState<{ siswa: LaporanSiswa; ortu: LaporanOrangTua } | null>(null)
  const [checkingLaporan, setCheckingLaporan] = useState(false)
  const [laporanTimedOut, setLaporanTimedOut] = useState(false)
  const [paying, setPaying] = useState(false)
  const [payError, setPayError] = useState('')
  const [payStep, setPayStep] = useState('')
  const [userEmail, setUserEmail] = useState<string | null>(null)

  // Muat profil_data + status laporan langsung dari Supabase — TIDAK bergantung
  // pada Zustand/localStorage, supaya laporan bisa diakses kapan saja dari device manapun.
  useEffect(() => {
    let active = true
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!active) return
      setUserEmail(user?.email ?? null)

      const { data: session } = await supabase
        .from('test_sessions')
        .select('id, profil_data')
        .eq('id', sessionId)
        .maybeSingle()

      if (!active) return
      if (!session || !session.profil_data) {
        setStatus('not_found')
        return
      }
      setProfil(session.profil_data as ProfilData)

      const { data: report } = await supabase
        .from('reports')
        .select('payment_status, laporan_siswa, laporan_ortu')
        .eq('session_id', sessionId)
        .maybeSingle()

      if (!active) return
      if (report?.payment_status === 'paid') {
        setPaymentPaid(true)
        if (report.laporan_siswa && report.laporan_ortu) {
          setLaporanLengkap({ siswa: report.laporan_siswa as LaporanSiswa, ortu: report.laporan_ortu as LaporanOrangTua })
        }
      }
      setStatus('ready')
    }
    load()
    return () => { active = false }
  }, [sessionId])

  // Kalau sudah bayar tapi laporan belum jadi, polling — AI butuh ~1-2 menit di webhook.
  useEffect(() => {
    if (status !== 'ready' || !paymentPaid || laporanLengkap) return
    let active = true
    let attempts = 0
    const maxAttempts = 70 // ~5 menit

    async function checkLaporan() {
      const supabase = createClient()
      const { data } = await supabase
        .from('reports')
        .select('payment_status, laporan_siswa, laporan_ortu')
        .eq('session_id', sessionId)
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
        setLaporanTimedOut(true)
        return
      }
      setCheckingLaporan(true)
      setTimeout(checkLaporan, 4500)
    }
    checkLaporan()
    return () => { active = false }
  }, [status, paymentPaid, laporanLengkap, sessionId])

  function handleDownloadPdf() {
    window.print()
  }

  async function handleBayar() {
    setPaying(true)
    setPayError('')
    try {
      setPayStep('Membuka pembayaran...')
      const bayarRes = await fetch('/api/bayar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, email: userEmail }),
      })
      const data = await bayarRes.json()
      if (!bayarRes.ok || !data.token) {
        throw new Error(data.error || 'Gagal membuka pembayaran. Coba lagi.')
      }
      // @ts-expect-error Midtrans Snap global
      window.snap?.pay(data.token, {
        onSuccess: () => { window.location.href = `/laporan/${sessionId}?status=paid` },
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

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', background: '#F8F7F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 13, color: '#888780' }}>Memuat laporan...</div>
      </div>
    )
  }

  if (status === 'not_found' || !profil) {
    return (
      <div style={{ minHeight: '100vh', background: '#F8F7F4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 500, color: '#2C2C2A', marginBottom: 8 }}>Laporan tidak ditemukan</div>
        <p style={{ fontSize: 13, color: '#888780', marginBottom: 18, maxWidth: 320, lineHeight: 1.6 }}>
          Link ini mungkin salah, atau laporan ini bukan milik akun yang sedang login.
        </p>
        <Link href="/tes/d1" style={{ fontSize: 13, color: '#1D9E75', textDecoration: 'none' }}>Mulai tes baru →</Link>
      </div>
    )
  }

  const hollandCode = profil.d1_riasec.holland_code
  const miProfile = profil.d2_mi.mi_profile
  const wvProfile = profil.d3_workvalues.values_profile
  const riasecScores = profil.d1_riasec.skor
  const wvScores = profil.d3_workvalues.skor

  const top2Holland = hollandCode.slice(0, 2) as RiasecCode[]
  const { jurusan, profesi } = getRekomendasi(top2Holland)

  const riasecSorted = (Object.entries(riasecScores) as [RiasecCode, number][]).sort((a, b) => b[1] - a[1])
  const wvSorted = (Object.entries(wvScores) as [WorkValueCode, number][]).sort((a, b) => b[1] - a[1])

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #laporan-print-area, #laporan-print-area * { visibility: visible; }
          #laporan-print-area { position: absolute; left: 0; top: 0; width: 100%; padding: 24px; }
          .no-print { display: none !important; }
        }
      `}</style>

      <script
        type="text/javascript"
        src={process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === 'true'
          ? 'https://app.midtrans.com/snap/snap.js'
          : 'https://app.sandbox.midtrans.com/snap/snap.js'}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ''}
        async
      />

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
        <Link href="/tes/d1" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>
          Ulangi tes
        </Link>
      </nav>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px 80px' }}>

        {paymentStatus === 'paid' && !laporanLengkap && (
          <div style={{ background: '#E1F5EE', border: '0.5px solid #9FE1CB', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#0F6E56', lineHeight: 1.6 }}>
            <strong>Pembayaran berhasil.</strong> Laporan lengkapmu sedang disiapkan oleh AI (biasanya 2-4 menit). Halaman ini otomatis menampilkan laporannya begitu selesai — sekaligus dikirim ke emailmu juga.
          </div>
        )}
        {paymentStatus === 'pending' && (
          <div style={{ background: '#FAEEDA', border: '0.5px solid #E8C98A', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#633806', lineHeight: 1.6 }}>
            <strong>Pembayaran masih pending.</strong> Begitu pembayaran terkonfirmasi, laporan lengkap otomatis muncul di sini dan dikirim ke emailmu.
          </div>
        )}
        {paymentStatus === 'error' && (
          <div style={{ background: '#FCEBEB', border: '0.5px solid #F7C1C1', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#A32D2D', lineHeight: 1.6 }}>
            <strong>Pembayaran gagal.</strong> Coba klik tombol bayar di bawah lagi.
          </div>
        )}

        <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '0.5px solid rgba(44,44,42,0.12)' }}>
          <h1 style={{ fontSize: 26, fontWeight: 500, color: '#2C2C2A', marginBottom: 10, letterSpacing: '-0.4px' }}>
            Ini bukan vonis.
          </h1>
          <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.7, maxWidth: 440, margin: '0 auto' }}>
            Ini lebih seperti cermin — yang untuk pertama kalinya mungkin menunjukkan sesuatu yang sudah lama ada, tapi belum pernah kamu lihat dengan jelas.
          </p>
        </div>

        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
            Profil singkatmu
          </div>
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

        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
            Skor dimensi 1 — minat
          </div>
          {riasecSorted.map(([k, v]) => (
            <ScoreBar key={k} label={RIASEC_LABELS[k]} skor={v} warna={RIASEC_COLOR[k]} />
          ))}
        </div>

        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
            Skor dimensi 3 — nilai kerja
          </div>
          {wvSorted.map(([k, v]) => (
            <ScoreBar key={k} label={WV_LABELS[k as WorkValueCode]} skor={v} warna={WV_COLOR[k as WorkValueCode]} />
          ))}
        </div>

        {!laporanLengkap && (
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
          </div>
        )}

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

        {!laporanLengkap && !paymentPaid && (
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
                disabled={paying}
                style={{
                  background: paying ? '#9FE1CB' : '#1D9E75',
                  color: 'white', border: 'none', borderRadius: 10,
                  padding: '14px 0', fontSize: 16, fontWeight: 500,
                  cursor: paying ? 'not-allowed' : 'pointer',
                  width: '100%', transition: 'background 0.15s',
                }}
              >
                {paying ? (payStep || 'Memproses...') : 'Bayar Rp 59.000'}
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

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/tes/d1" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>
            ← Ulangi tes dari awal
          </Link>
        </div>
      </div>
    </div>
  )
}
