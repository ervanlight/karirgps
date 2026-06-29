'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useTesStore } from '@/lib/store'
import { createClient } from '@/lib/supabase'
import { buildProfil } from '@/lib/scoring'
import { FITUR_PAID } from '@/lib/rekomendasi-gratis'
import LaporanLengkap from '@/components/hasil/LaporanLengkap'
import type { MVPDecision } from '@/types'
import type { FreeReportParsed } from '@/lib/schemas'

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
  
  const [laporanLengkap, setLaporanLengkap] = useState<MVPDecision | null>(null)
  const [checkingLaporan, setCheckingLaporan] = useState(false)
  const [laporanTimedOut, setLaporanTimedOut] = useState(false)
  
  const [freeReport, setFreeReport] = useState<FreeReportParsed | null>(null)
  const [loadingFreeReport, setLoadingFreeReport] = useState(false)

  // TAB STATE
  const [activeTab, setActiveTab] = useState<'awal' | 'lengkap'>('lengkap')
  const [exploreOpen, setExploreOpen] = useState(false)

  // Build profil from store
  const profil = buildProfil({
    ...store,
    d4_konteks: store.d4_konteks as Required<typeof store.d4_konteks>,
  } as Parameters<typeof buildProfil>[0])

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
        .select('id, profil_data')
        .single()

      if (!active) return
      if (error || !data) {
        setPayError('Sesi tes gagal disimpan. Muat ulang halaman ini.')
        return
      }
      
      store.setSessionId(data.id)
      setSessionReady(true)
    }
    ensureSession()
    return () => { active = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Fetch Free Report Data via Gemini
  useEffect(() => {
    if (!sessionReady || !store.session_id || freeReport) return
    let active = true

    async function fetchFreeReport() {
      setLoadingFreeReport(true)
      try {
        const res = await fetch('/api/laporan-gratis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: store.session_id })
        })
        const data = await res.json()
        if (active && data.report) {
          setFreeReport(data.report)
        }
      } catch(err) {
        console.error('Failed fetching free report', err)
      } finally {
        if (active) setLoadingFreeReport(false)
      }
    }
    fetchFreeReport()

    return () => { active = false }
  }, [sessionReady, store.session_id, freeReport])


  // Polling for Paid Report
  useEffect(() => {
    if (!sessionReady || !store.session_id) return
    let active = true
    let attempts = 0
    const maxAttempts = paymentStatus === 'paid' ? 70 : 1

    async function checkLaporan() {
      try {
        const res = await fetch(`/api/check-laporan/${store.session_id}`)
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

  async function handleBayar() {
    if (!store.session_id) {
      setPayError('Sesi belum siap. Muat ulang halaman sebentar lagi.')
      return
    }
    setPaying(true)
    setPayError('')

    try {
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

      // @ts-expect-error Midtrans Snap global
      window.snap?.pay(data.token, {
        onSuccess: () => { router.push('/hasil?status=paid', { scroll: false }) },
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

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: 'Hasil KarirGPS',
        text: 'Coba lihat hasil pemetaan karierku dari AI KarirGPS!',
        url: window.location.origin,
      }).catch(console.error)
    } else {
      navigator.clipboard.writeText(window.location.origin)
      alert('Link disalin!')
    }
  }

  const renderHasilAwal = () => {
    if (loadingFreeReport || !freeReport) {
      return (
        <div className="flex flex-col items-center justify-center py-20 gap-6 animate-fade-up">
          <div className="w-12 h-12 border-4 border-brand-100 border-t-brand-600 rounded-full animate-spin"></div>
          <div className="text-sm font-medium text-ink-light text-center max-w-sm">
            <strong className="block text-ink text-base mb-1">AI sedang membaca profilmu...</strong>
            Menyiapkan insight psikologi khusus untukmu (ini hanya butuh beberapa detik).
          </div>
        </div>
      )
    }

    const userName = userEmail ? userEmail.split('@')[0] : 'Sobat'

    return (
      <div className="space-y-6 animate-fade-up">
        {/* 1. RESULT HERO */}
        <div className="bg-white border border-surface-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <span className="text-sm font-semibold text-ink-light">Halo, <span className="capitalize">{userName}</span></span>
          </div>
          <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">🎯 Arah Terbaik Kamu:</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-4">
            👉 {freeReport.decision}
          </h2>
          
          <p className="text-base text-ink-light leading-relaxed mb-6 font-medium">
            &ldquo;{freeReport.explore_layer?.why_this_fits_you || freeReport.reasoning}&rdquo;
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-ink-light uppercase tracking-widest">Kejelasan Arah</span>
              <span className="text-sm font-bold text-ink">72%</span>
            </div>
            <div className="h-2 w-full bg-surface-200 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 rounded-full w-[72%]"></div>
            </div>
          </div>
        </div>

        {/* 2. QUICK INSIGHT STRIP (VIRAL HOOK) */}
        <div className="bg-brand-50 border-l-4 border-brand-500 rounded-xl p-5 shadow-sm">
          <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="text-base">💡</span> INSIGHT TENTANG KAMU
          </div>
          <h3 className="text-base md:text-lg font-semibold text-ink leading-snug">
            &ldquo;{freeReport.viral_hook}&rdquo;
          </h3>
        </div>

        {/* 3. CAREER PATH CARDS */}
        <div className="bg-white border border-surface-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="text-xs font-bold text-ink uppercase tracking-widest mb-4">🧭 JALUR KARIER YANG COCOK</div>
          <div className="space-y-3">
            {freeReport.career_fit.map((c, i) => (
              <div key={i} className="bg-surface-50 border border-surface-200 rounded-xl p-4 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-ink">{c}</span>
                {i === 0 && <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded">Rekomendasi Utama</span>}
              </div>
            ))}
          </div>
        </div>

        {/* 4. ROADMAP MINI */}
        <div className="bg-white border border-surface-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="text-xs font-bold text-ink uppercase tracking-widest mb-4">🗺 ROADMAP 6-12 BULAN</div>
          <div className="bg-surface-50 p-4 rounded-xl border border-surface-200 text-sm text-ink-light leading-relaxed whitespace-pre-line">
            {freeReport.roadmap}
          </div>
        </div>

        {/* 5. RISK TRUTH BLOCK */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="text-lg">⚠️</span> RISIKO JIKA TIDAK FOKUS
          </div>
          <p className="text-sm md:text-base text-ink-light font-medium leading-relaxed">
            {freeReport.risk_statement}
          </p>
        </div>

        {/* 6. ACTION STRIP & 7. EXPLORE LAYER */}
        <div className="bg-white border border-surface-200 rounded-3xl p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setExploreOpen(!exploreOpen)}
              className="w-full bg-surface-50 border border-surface-200 text-ink rounded-xl px-6 py-4 text-sm font-bold hover:bg-surface-100 transition-all flex items-center justify-center gap-2"
            >
              ▼ Jelajahi Lebih Dalam {exploreOpen ? '(Tutup)' : ''}
            </button>
            <button onClick={handleShare} className="w-full bg-ink text-white rounded-xl px-6 py-4 text-sm font-bold hover:bg-ink-dark transition-all flex items-center justify-center gap-2">
              Cocokkah ini dengan asliku? Tanya temanmu.
            </button>
          </div>

          {exploreOpen && freeReport.explore_layer && (
            <div className="mt-6 pt-6 border-t border-surface-200 space-y-6 animate-fade-in">
              <div>
                <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">1. Why This Fits You</div>
                <p className="text-sm text-ink-light">{freeReport.explore_layer.why_this_fits_you}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">2. Compare Paths</div>
                <p className="text-sm text-ink-light">{freeReport.explore_layer.compare_paths}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">3. What If Scenario</div>
                <p className="text-sm text-ink-light">{freeReport.explore_layer.what_if_scenario}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-2">4. Skill Gap</div>
                <ul className="space-y-1">
                  {freeReport.explore_layer.skill_gap.map((skill, idx) => (
                    <li key={idx} className="text-sm text-ink-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

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

      {/* NAVBAR */}
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

        {/* STATUS ALERTS */}
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
                        order_id: `KG-${store.session_id}-sim`,
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

        {/* HEADER */}
        {(!laporanLengkap || activeTab === 'awal') && (
          <header className="text-center mb-10 pb-8 border-b border-surface-200 animate-fade-up">
            <h1 className="text-3xl font-extrabold text-ink mb-3 tracking-tight">Ini bukan vonis.</h1>
            <p className="text-base text-ink-light leading-relaxed max-w-lg mx-auto">
              Ini lebih seperti cermin — menunjukkan potensimu yang sebenarnya berdasarkan caramu berpikir dan prioritas hidupmu.
            </p>
          </header>
        )}
        
        {/* TIMEOUT STATE */}
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

        {/* JIKA BELUM BAYAR -> Tampilkan Hasil Awal + Paywall */}
        {!laporanLengkap && paymentStatus !== 'paid' && !checkingLaporan && (
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            
            {renderHasilAwal()}
            
            {/* PAYWALL UPSELL (Only show when Free Report is loaded) */}
            {!loadingFreeReport && freeReport && (
              <div className="mt-8 bg-ink rounded-3xl p-6 md:p-8 shadow-float text-white relative overflow-hidden border border-white/10">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                <div className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="text-base">🔒</span> PREMIUM INSIGHT
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Lihat simulasi hidup kamu 3–5 tahun ke depan</h2>
                
                <div className="grid gap-3 mb-8 mt-6">
                  <div className="flex gap-3 items-center"><span className="text-brand-400 text-sm">→</span><span className="text-sm font-medium">Income projection (Rentang Gaji)</span></div>
                  <div className="flex gap-3 items-center"><span className="text-brand-400 text-sm">→</span><span className="text-sm font-medium">Career trajectory (Roadmap Lengkap)</span></div>
                  <div className="flex gap-3 items-center"><span className="text-brand-400 text-sm">→</span><span className="text-sm font-medium">Risk modeling (Probabilitas Kegagalan & Plan B)</span></div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                  <div className="text-3xl font-extrabold mb-1">Rp 59.000</div>
                  <div className="text-xs text-white/40 mb-5">Bayar 1x · Kepastian selamanya</div>
                  
                  <button
                    onClick={handleBayar}
                    disabled={paying || !sessionReady}
                    className={`w-full py-4 rounded-xl text-base font-bold transition-all ${
                      paying || !sessionReady 
                      ? 'bg-brand-400/50 text-brand-100 cursor-not-allowed' 
                      : 'bg-white text-brand-600 hover:bg-brand-50 hover:-translate-y-1 hover:shadow-float'
                    }`}
                  >
                    {paying ? (payStep || 'Memproses...') : (sessionReady ? 'Buka Laporan Premium' : 'Menyiapkan sesi...')}
                  </button>
                  {payError && <div className="mt-4 text-xs text-red-200 bg-red-500/20 p-2 rounded-lg">{payError}</div>}
                </div>
              </div>
            )}
          </div>
        )}

        {/* JIKA SUDAH BAYAR -> Tampilkan Tabs */}
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

        {/* RESTART */}
        <div className="text-center mt-12 no-print">
          <Link href="/tes/d1" onClick={() => useTesStore.getState().reset()} className="text-sm font-semibold text-ink-light hover:text-ink transition-colors">
            Mulai Tes Baru
          </Link>
        </div>

      </main>
    </div>
  )
}
