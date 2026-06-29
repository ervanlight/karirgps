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

// New Visual Components
import DecisionCard from '@/components/hasil/DecisionCard'
import InsightCard from '@/components/hasil/InsightCard'
import CareerGrid from '@/components/hasil/CareerGrid'
import RiskCard from '@/components/hasil/RiskCard'

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
  const generatingAiRef = useRef(false)
  
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
          if ((data.laporan_siswa as any)._error) {
            setCheckingLaporan(false)
            setPayError('Sistem AI mengalami kendala saat memproses laporanmu. Harap hubungi admin.')
            return
          }
          setLaporanLengkap(data.laporan_siswa as MVPDecision)
          setCheckingLaporan(false)
          return
        }

        // Trigger AI Generation if paid but no report
        if (data?.payment_status === 'paid' && !data.laporan_siswa && !generatingAiRef.current) {
          generatingAiRef.current = true
          try {
            const genRes = await fetch('/api/laporan/generate-premium', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ session_id: store.session_id })
            })
            const genData = await genRes.json()
            if (active && genData.laporan_siswa) {
              setLaporanLengkap(genData.laporan_siswa as MVPDecision)
              setCheckingLaporan(false)
              return
            }
          } catch (e) {
            console.error('Generation trigger failed', e)
          } finally {
            if (active) generatingAiRef.current = false
          }
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
      <div className="space-y-8 animate-fade-up">
        {/* 1. RESULT HERO (CAREER DIRECTION) */}
        <DecisionCard 
          title="Arah Karier Terbaik" 
          recommendation={freeReport.career_direction} 
          subtitle={freeReport.direction_reasoning} 
        />

        {/* 2. IDENTITY MIRROR */}
        <InsightCard 
          title={`Halo, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`} 
          content={freeReport.identity_mirror} 
        />

        {/* 3. QUICK INSIGHT */}
        <div className="bg-brand-50 border-l-4 border-brand-500 rounded-2xl p-6 shadow-sm">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="text-lg">💡</span> INSIGHT TENTANG KAMU
          </div>
          <h3 className="text-lg font-bold text-ink leading-snug">
            &ldquo;{freeReport.insight_moment}&rdquo;
          </h3>
        </div>

        {/* 4. CAREER PATH CARDS */}
        <CareerGrid 
          title="Jalur Karier Yang Cocok" 
          paths={freeReport.career_options.map(c => ({ name: c, description: '' }))} 
        />

        {/* 5. RISK TRUTH BLOCK */}
        <RiskCard 
          title="Risiko Jika Tidak Fokus" 
          content={freeReport.key_risk} 
        />

        {/* 6. FAKE LOCKED PREMIUM SECTION (Teaser) */}
        <div className="relative mt-12 rounded-3xl overflow-hidden border border-surface-200 bg-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-50 z-0"></div>
          
          {/* Fake content behind blur */}
          <div className="p-8 md:p-12 opacity-30 select-none pointer-events-none blur-[4px]">
            <div className="w-1/3 h-4 bg-surface-300 rounded mb-6"></div>
            <div className="w-full h-32 bg-surface-200 rounded-xl mb-4"></div>
            <div className="w-2/3 h-16 bg-surface-200 rounded-xl"></div>
          </div>

          {/* Premium Lock Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-white/40 backdrop-blur-md">
            <div className="max-w-md w-full bg-white border border-surface-200 rounded-3xl p-8 md:p-10 shadow-float text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4 leading-tight">Simulasi Karier Terkunci</h3>
              <p className="text-sm text-ink-light mb-8 leading-relaxed">
                Buka Laporan Lengkap untuk melihat peta jalan 12 bulan ke depan, simulasi keputusan spesifik, dan analisis risiko mendalam.
              </p>
              
              <button
                onClick={handleBayar}
                disabled={paying || !sessionReady}
                className={`w-full py-4 rounded-full text-sm font-bold transition-all shadow-soft hover:shadow-float hover:-translate-y-0.5 ${
                  paying || !sessionReady 
                  ? 'bg-brand-400/50 text-brand-100 cursor-not-allowed' 
                  : 'bg-ink text-white hover:bg-brand-600'
                }`}
              >
                {paying ? (payStep || 'Memproses...') : (sessionReady ? 'Buka Akses Penuh — Rp 59.000' : 'Menyiapkan sesi...')}
              </button>
              {payError && <div className="mt-4 text-xs text-red-500 bg-red-50 p-2 rounded-lg font-medium">{payError}</div>}
              <p className="text-[11px] text-ink-light mt-6 uppercase tracking-widest font-bold">Sekali Bayar · Akses Selamanya</p>
            </div>
          </div>
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
