'use client'
import { Suspense, useEffect, useState } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { RIASEC_LABELS, MI_LABELS, WV_LABELS } from '@/lib/scoring'
import { RIASEC_COLOR, WV_COLOR, MI_COLOR, getProfilText, getRekomendasi, ScoreBar, FITUR_PAID, HOLLAND_DESC } from '@/lib/rekomendasi-gratis'
import LaporanLengkap from '@/components/hasil/LaporanLengkap'
import type { RiasecCode, MICode, WorkValueCode, MVPDecision, ProfilData } from '@/types'

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
  const router = useRouter()
  const sessionId = params.id as string
  const searchParams = useSearchParams()
  const paymentStatus = searchParams.get('status')

  const [status, setStatus] = useState<Status>('loading')
  const [profil, setProfil] = useState<ProfilData | null>(null)
  const [paymentPaid, setPaymentPaid] = useState(false)
  const [laporanLengkap, setLaporanLengkap] = useState<MVPDecision | null>(null)
  
  const [checkingLaporan, setCheckingLaporan] = useState(false)
  const [laporanTimedOut, setLaporanTimedOut] = useState(false)
  
  const [paying, setPaying] = useState(false)
  const [payError, setPayError] = useState('')
  const [payStep, setPayStep] = useState('')
  const [userEmail, setUserEmail] = useState<string | null>(null)

  // TAB STATE
  const [activeTab, setActiveTab] = useState<'awal' | 'lengkap'>('lengkap')

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
        .select('payment_status, laporan_siswa')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (!active) return
      if (report?.payment_status === 'paid') {
        setPaymentPaid(true)
        if (report.laporan_siswa) {
          setLaporanLengkap(report.laporan_siswa as MVPDecision)
        }
      }
      setStatus('ready')
    }
    load()
    return () => { active = false }
  }, [sessionId])

  useEffect(() => {
    if (status !== 'ready' || (!paymentPaid && paymentStatus !== 'paid') || laporanLengkap) return
    let active = true
    let attempts = 0
    const maxAttempts = 70

    async function checkLaporan() {
      try {
        const res = await fetch(`/api/check-laporan/${sessionId}`)
        const json = await res.json()
        const data = json.data

        if (!active) return
        if (data?.payment_status === 'paid' && data.laporan_siswa) {
          setLaporanLengkap(data.laporan_siswa as MVPDecision)
          setCheckingLaporan(false)
          return
        }
      } catch (err) {
        console.error('Polling error:', err)
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
        onSuccess: () => { router.push(`/laporan/${sessionId}?status=paid`, { scroll: false }) },
        onPending: () => {
          setPaying(false)
          setPayStep('')
          setPayError('Pembayaran pending — cek emailmu untuk konfirmasi.')
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
      setPayError(err instanceof Error ? err.message : 'Terjadi kendala. Coba lagi.')
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-brand-500 animate-pulse"></div>
          <div className="text-sm font-medium text-ink-light">Memuat laporan...</div>
        </div>
      </div>
    )
  }

  if (status === 'not_found' || !profil) {
    return (
      <div className="min-h-screen bg-surface-50 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-lg font-bold text-ink mb-2">Laporan tidak ditemukan</h2>
        <p className="text-sm text-ink-light mb-6 max-w-sm">
          Link ini mungkin tidak valid, atau laporan ini bukan milik akun yang sedang login.
        </p>
        <Link href="/tes/d1" className="inline-block bg-brand-600 text-white rounded-full px-8 py-3 text-sm font-semibold hover:bg-brand-700 transition-all">
          Mulai Tes Baru
        </Link>
      </div>
    )
  }

  const hollandCode = profil.d1_riasec.holland_code
  const miProfile = profil.d2_mi.mi_profile
  const wvProfile = profil.d3_workvalues.values_profile
  const riasecScores = profil.d1_riasec.skor
  const miScores = profil.d2_mi.skor
  const wvScores = profil.d3_workvalues.skor

  const top2Holland = hollandCode.slice(0, 2) as RiasecCode[]
  const { jurusan, profesi } = getRekomendasi(top2Holland)

  const riasecSorted = (Object.entries(riasecScores) as [RiasecCode, number][]).sort((a, b) => b[1] - a[1])
  const wvSorted = (Object.entries(wvScores) as [WorkValueCode, number][]).sort((a, b) => b[1] - a[1])

  const renderHasilAwal = () => (
    <div className="space-y-4 animate-fade-up">
      {/* PROFIL SINGKAT */}
      <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
        <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">Profil Singkatmu</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {top2Holland.map(c => (
            <span key={c} className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-semibold">
              {RIASEC_LABELS[c]}
            </span>
          ))}
          {miProfile.slice(0, 2).map(c => (
            <span key={c} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
              {MI_LABELS[c as MICode]}
            </span>
          ))}
          {wvProfile.slice(0, 2).map(c => (
            <span key={c} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
              {WV_LABELS[c as WorkValueCode]}
            </span>
          ))}
        </div>
        <p className="text-sm text-ink leading-relaxed">
          {getProfilText(top2Holland, RIASEC_LABELS)}
        </p>
      </div>

      {/* GAMBARAN AWAL */}
      <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
        <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-5">Gambaran Awal: Jurusan & Profesi</div>
        
        <p className="text-sm text-ink-light mb-6 leading-relaxed">
          <strong>Kerja bagus! Mengisi tes panjang seperti ini membuktikan kamu benar-benar peduli dengan masa depanmu.</strong><br/>
          Sebagai hadiahnya, ini adalah daftar singkat rekomendasi profesi dan kluster jurusan yang paling sejajar dengan kekuatan alimiahmu. 
        </p>
        
        <div className="mb-6">
          <div className="text-xs font-semibold text-ink mb-3">Top 3 Kluster Jurusan</div>
          {jurusan.map(([nama, desc]) => (
            <div key={nama} className="flex gap-3 mb-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"/>
              <div>
                <span className="text-sm font-semibold text-ink">{nama}</span>
                <span className="text-sm text-ink-light"> — {desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-xs font-semibold text-ink mb-3">Top 5 Profesi</div>
          <div className="flex flex-wrap gap-2">
            {profesi.map(p => (
              <span key={p} className="bg-surface-50 border border-surface-200 rounded-full px-3 py-1 text-xs text-ink font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SCORE BARS — 3 Dimensi */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-1">Dimensi 1 · Minat</div>
          <div className="text-[11px] text-ink-light mb-4 leading-relaxed">
            <strong>Holland Code (RIASEC)</strong> — 6 tipe minat yang menentukan lingkungan kerja dan tugas yang paling kamu nikmati secara alami.
          </div>
          <div className="space-y-3">
            {riasecSorted.map(([k, v]) => (
              <ScoreBar key={k} label={HOLLAND_DESC[k].split(':')[0]} skor={v} warna={RIASEC_COLOR[k]} />
            ))}
          </div>
        </div>
        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Dimensi 3 · Nilai Kerja</div>
          <div className="text-[11px] text-ink-light mb-4 leading-relaxed">
            <strong>Work Values</strong> — prinsip kerja yang diam-diam mengendalikan keputusanmu. Ini yang membuatmu betah atau muak di tempat kerja.
          </div>
          <div className="space-y-3">
            {wvSorted.map(([k, v]) => (
              <ScoreBar key={k} label={WV_LABELS[k as WorkValueCode]} skor={v} warna={WV_COLOR[k as WorkValueCode]} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
        <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Dimensi 2 · Cara Berpikir</div>
        <div className="text-[11px] text-ink-light mb-4 leading-relaxed">
          <strong>Multiple Intelligences</strong> — 8 jenis kecerdasan yang menunjukkan cara berpikirmu yang paling alami dan efektif. Bukan ukuran &quot;sepintar apa kamu&quot;, tapi &quot;kamu pintar di bidang apa&quot;.
        </div>
        <div className="grid md:grid-cols-2 gap-x-6">
          {(Object.entries(miScores) as [MICode, number][]).sort((a, b) => b[1] - a[1]).map(([k, v]) => (
            <ScoreBar key={k} label={MI_LABELS[k]} skor={v} warna={MI_COLOR[k]} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-surface-50 selection:bg-brand-500 selection:text-white font-sans">
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

      <nav className="glass sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-surface-200 no-print">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
          </div>
          <span className="text-sm font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">KarirGPS</span>
        </Link>
        <Link href="/dashboard" className="text-sm font-medium text-ink-light hover:text-brand-600 transition-colors">
          Dashboard
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 pb-32">

        {paymentStatus === 'paid' && !laporanLengkap && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 text-sm text-emerald-800 animate-fade-up">
            <strong className="font-semibold block mb-1">Pembayaran berhasil.</strong> 
            AI sedang menyiapkan laporan lengkapmu (sekitar 1-2 menit). Halaman ini otomatis memuat hasilnya setelah selesai.
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-3 bg-white/60 rounded-xl border border-emerald-200">
                <span className="text-xs font-bold block mb-2 text-emerald-900">🛠️ [DEV MODE] Midtrans tidak bisa mengirim Webhook ke localhost. Klik tombol ini untuk simulasi Webhook:</span>
                <button
                  onClick={async () => {
                    alert('Memulai simulasi webhook di background. Tunggu beberapa saat sampai AI selesai generate (liat terminal console).')
                    await fetch('/api/webhook/midtrans', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        transaction_status: 'settlement',
                        order_id: `KG-${sessionId}-sim`,
                        status_code: '200',
                        dev_simulate: true
                      })
                    })
                  }}
                  className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-emerald-700"
                >
                  Simulasi Webhook Midtrans
                </button>
              </div>
            )}
          </div>
        )}
        {paymentStatus === 'pending' && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-sm text-amber-800 animate-fade-up">
            <strong className="font-semibold block mb-1">Pembayaran tertunda.</strong> 
            Selesaikan pembayaranmu. Laporan otomatis dikirim ke email setelah terkonfirmasi.
          </div>
        )}
        {paymentStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 text-sm text-red-800 animate-fade-up">
            <strong className="font-semibold block mb-1">Pembayaran gagal.</strong> 
            Coba klik tombol bayar lagi di bawah.
          </div>
        )}

        {(!laporanLengkap || activeTab === 'awal') && (
          <header className="text-center mb-10 pb-8 border-b border-surface-200 animate-fade-up">
            <h1 className="text-3xl font-extrabold text-ink mb-3 tracking-tight">Ini bukan vonis.</h1>
            <p className="text-base text-ink-light leading-relaxed max-w-lg mx-auto">
              Ini lebih seperti cermin — menunjukkan potensimu yang sebenarnya berdasarkan caramu berpikir dan prioritas hidupmu.
            </p>
          </header>
        )}

        {checkingLaporan && !laporanLengkap && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="w-10 h-10 border-4 border-brand-100 border-t-brand-600 rounded-full animate-spin"></div>
            <div className="text-sm font-medium text-ink-light text-center max-w-sm">
              Menganalisis jawabanmu...<br/>
              <span className="text-xs font-normal">Hasil ditulis khusus untukmu, bukan template.</span>
            </div>
          </div>
        )}
        
        {laporanTimedOut && !laporanLengkap && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 text-sm text-amber-800 animate-fade-up flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <strong className="font-semibold block mb-1">Laporan butuh waktu lebih lama.</strong> 
              Pembayaran aman. AI masih memproses datamu di latar belakang.
            </div>
            <button onClick={() => window.location.reload()} className="bg-white border border-amber-300 text-amber-800 rounded-xl px-4 py-2 font-semibold hover:bg-amber-100 shrink-0 transition-colors">
              Muat Ulang
            </button>
          </div>
        )}

        {!laporanLengkap && paymentStatus !== 'paid' && !checkingLaporan && (
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {renderHasilAwal()}
            
            <div className="mt-8 bg-gradient-to-b from-brand-600 to-brand-700 rounded-3xl p-8 shadow-xl text-white">
              <div className="text-brand-100 text-xs font-bold uppercase tracking-widest mb-2">Buka Laporan Lengkap</div>
              <h2 className="text-2xl font-bold mb-3">Ini baru permukaannya.</h2>
              <p className="text-brand-50 text-sm leading-relaxed mb-8 max-w-md">
                Buka hasil analisis mendalam (Arah Kuliah/Kerja, Roadmap 6 Bulan, & Risiko Karier) yang ditulis AI secara personal khusus untukmu.
              </p>

              <div className="grid gap-3 mb-8">
                {FITUR_PAID.map(f => (
                  <div key={f} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-500/50 flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</div>
                    <span className="text-sm text-brand-50 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 text-center">
                <div className="text-3xl font-extrabold mb-1">Rp 59.000</div>
                <div className="text-xs text-brand-100 mb-5">Sekali bayar · Dikirim ke email · Akses selamanya</div>
                
                <button
                  onClick={handleBayar}
                  disabled={paying}
                  className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
                    paying 
                    ? 'bg-brand-400/50 text-brand-100 cursor-not-allowed' 
                    : 'bg-white text-brand-600 hover:bg-brand-50 hover:-translate-y-1 hover:shadow-float'
                  }`}
                >
                  {paying ? (payStep || 'Memproses...') : 'Buka Laporan Lengkap'}
                </button>
                {payError && <div className="mt-4 text-xs text-red-200 bg-red-500/20 p-2 rounded-lg">{payError}</div>}
              </div>
            </div>
          </div>
        )}

        {laporanLengkap && (
          <div className="animate-fade-up">
            <div className="flex bg-surface-200/50 p-1 rounded-2xl mb-8 no-print max-w-sm mx-auto shadow-inner">
              <button
                onClick={() => setActiveTab('awal')}
                className={`flex-1 text-sm font-semibold py-2.5 rounded-xl transition-all ${activeTab === 'awal' ? 'bg-white text-ink shadow-sm' : 'text-ink-light hover:text-ink'}`}
              >
                Hasil Awal
              </button>
              <button
                onClick={() => setActiveTab('lengkap')}
                className={`flex-1 text-sm font-semibold py-2.5 rounded-xl transition-all ${activeTab === 'lengkap' ? 'bg-white text-brand-600 shadow-sm' : 'text-ink-light hover:text-ink'}`}
              >
                Hasil Lengkap
              </button>
            </div>

            {activeTab === 'awal' ? (
              renderHasilAwal()
            ) : (
              <div id="laporan-print-area">
                <div className="no-print flex items-center justify-between mb-6">
                  <div className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full border border-brand-100">
                    Mode Laporan Lengkap
                  </div>
                  <button onClick={handleDownloadPdf} className="text-sm font-semibold text-ink-light hover:text-ink transition-colors flex gap-2 items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                    Simpan PDF
                  </button>
                </div>
                <LaporanLengkap laporan={laporanLengkap} />
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-12 no-print">
          <Link href="/tes/d1" className="text-sm font-semibold text-ink-light hover:text-ink transition-colors">
            ← Ulangi Tes dari Awal
          </Link>
        </div>
      </main>
    </div>
  )
}
