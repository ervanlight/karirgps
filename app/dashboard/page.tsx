'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { useTesStore } from '@/lib/store'

interface SessionRow {
  id: string
  created_at: string
  status: string
  paid: boolean
  freeReportReady: boolean
  generatingFreeReport: boolean
}

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [nama, setNama] = useState('')
  const [sessions, setSessions] = useState<SessionRow[]>([])

  // Settings form state
  const [savingNama, setSavingNama] = useState(false)
  const [namaMsg, setNamaMsg] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [savingEmail, setSavingEmail] = useState(false)
  const [emailMsg, setEmailMsg] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [savingPassword, setSavingPassword] = useState(false)
  const [passwordMsg, setPasswordMsg] = useState('')

  useEffect(() => {
    let active = true
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/register?next=/dashboard')
        return
      }
      if (!active) return
      setEmail(user.email ?? '')
      setNewEmail(user.email ?? '')

      const { data: profile } = await supabase.from('profiles').select('nama').eq('id', user.id).maybeSingle()
      if (active && profile?.nama) setNama(profile.nama)

      const { data: testSessions } = await supabase
        .from('test_sessions')
        .select('id, created_at, status, profil_data')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (!active) return

      if (!testSessions || testSessions.length === 0) {
        setSessions([])
        setLoading(false)
        return
      }

      const { data: reports } = await supabase
        .from('reports')
        .select('session_id, payment_status')
        .in('session_id', testSessions.map((s) => s.id))

      if (!active) return
      const paidSet = new Set((reports || []).filter((r) => r.payment_status === 'paid').map((r) => r.session_id))

      setSessions(testSessions.map((s, index) => ({
        id: s.id,
        created_at: s.created_at,
        status: s.status,
        paid: paidSet.has(s.id),
        freeReportReady: !!(s.profil_data as any)?.free_report,
        generatingFreeReport: index === 0 ? !(s.profil_data as any)?.free_report : false,
      })))
      setLoading(false)
    }
    load()
    return () => { active = false }
  }, [router])

  // Background fetch for free report if not ready
  useEffect(() => {
    const unreadySession = sessions.find(s => !s.freeReportReady && s.generatingFreeReport)
    if (!unreadySession) return

    let active = true

    async function generateFreeReport(sessionId: string) {
      try {
        const res = await fetch('/api/laporan-gratis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId })
        })
        const data = await res.json()
        if (active) {
          if (data.report || data.error) {
            // Either success or error (like 429), we stop the loading state
            // If it's a 429 error, user might need to retry, but let's just make it ready so they can click and see the error on /hasil or we can handle it here.
            // Actually, if we want them to retry here, we can set generatingFreeReport to false.
            setSessions(prev => prev.map(s => 
              s.id === sessionId ? { ...s, freeReportReady: !!data.report, generatingFreeReport: false } : s
            ))
          }
        }
      } catch (err) {
        console.error('Failed generating free report in background', err)
        if (active) {
          setSessions(prev => prev.map(s => 
            s.id === sessionId ? { ...s, generatingFreeReport: false } : s
          ))
        }
      }
    }

    generateFreeReport(unreadySession.id)

    return () => { active = false }
  }, [sessions])

  async function handleSaveNama(e: React.FormEvent) {
    e.preventDefault()
    setSavingNama(true)
    setNamaMsg('')
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { error } = await supabase.from('profiles').update({ nama, updated_at: new Date().toISOString() }).eq('id', user.id)
    setSavingNama(false)
    setNamaMsg(error ? 'Gagal menyimpan nama.' : 'Berhasil disimpan.')
    if (!error) setTimeout(() => setNamaMsg(''), 3000)
  }

  async function handleChangeEmail(e: React.FormEvent) {
    e.preventDefault()
    setSavingEmail(true)
    setEmailMsg('')
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ email: newEmail })
    setSavingEmail(false)
    setEmailMsg(error ? (error.message || 'Gagal mengganti email.') : 'Cek inbox emailmu yang baru untuk konfirmasi.')
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault()
    if (newPassword.length < 8) { setPasswordMsg('Kata sandi minimal 8 karakter.'); return }
    setSavingPassword(true)
    setPasswordMsg('')
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    setSavingPassword(false)
    setPasswordMsg(error ? (error.message || 'Gagal mengubah kata sandi.') : 'Kata sandi berhasil diperbarui.')
    if (!error) {
      setNewPassword('')
      setTimeout(() => setPasswordMsg(''), 3000)
    }
  }

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-brand-500 animate-pulse"></div>
          <div className="text-sm font-medium text-ink-light">Menyiapkan ruang kerja...</div>
        </div>
      </div>
    )
  }

  // Helper untuk inisial nama
  const initial = nama ? nama.charAt(0).toUpperCase() : email.charAt(0).toUpperCase()

  return (
    <div className="min-h-screen bg-surface-50 text-ink font-sans selection:bg-brand-500 selection:text-white">
      
      {/* Navbar Minimalis */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-ink">KarirGPS</span>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={handleLogout} className="text-sm font-medium text-ink-light hover:text-ink transition-colors">
              Keluar
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 pb-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================
              KOLOM KIRI: PROFILE & QUICK ACTIONS
          ========================================= */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Profil Card - Calm Intelligence style */}
            <div className="bg-white border border-surface-200 shadow-sm rounded-3xl p-8 text-center text-ink mt-0">
              <div className="w-24 h-24 mx-auto rounded-full bg-brand-50 flex items-center justify-center text-4xl font-black text-brand-600 mb-5">
                {initial}
              </div>
              <h1 className="text-2xl font-bold tracking-tight mb-1">{nama || 'Penjelajah'}</h1>
              <p className="text-ink-light text-sm mb-6">{email}</p>
              
              <Link href="/tes/d1" onClick={() => useTesStore.getState().reset()} className="block w-full bg-ink text-white rounded-xl px-6 py-3.5 text-sm font-bold hover:bg-brand-600 hover:shadow-lg transition-all duration-300">
                + Mulai Analisis Baru
              </Link>
            </div>

            {/* Statistik Singkat */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-surface-200">
              <h2 className="text-xs font-bold text-ink-light uppercase tracking-widest mb-4">Statistik Kamu</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-ink">Total Tes Diambil</span>
                <span className="text-xl font-bold text-brand-600">{sessions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-ink">Laporan Lengkap</span>
                <span className="text-xl font-bold text-emerald-600">{sessions.filter(s => s.paid).length}</span>
              </div>
            </div>

          </div>


          {/* =========================================
              KOLOM KANAN: RIWAYAT & PENGATURAN
          ========================================= */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Riwayat Tes Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-ink tracking-tight">Riwayat Analisis</h2>
              </div>

              {sessions.length === 0 ? (
                <div className="bg-white border border-surface-200 rounded-3xl p-12 text-center shadow-sm">
                  <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl shadow-inner">
                    🧭
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Belum ada aktivitas tes</h3>
                  <p className="text-ink-light mb-8 max-w-md mx-auto">Mulai perjalananmu memetakan karier impian dengan algoritma AI kami.</p>
                  <Link href="/tes/d1" onClick={() => useTesStore.getState().reset()} className="inline-block bg-brand-600 text-white rounded-2xl px-8 py-3.5 text-sm font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30">
                    Mulai Tes Sekarang
                  </Link>
                </div>
              ) : (
                <div className="grid gap-4">
                  {sessions.map((s) => (
                    <div key={s.id} className="group bg-white border border-surface-200 rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                      
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${s.paid ? 'bg-gradient-to-tr from-emerald-500 to-emerald-300 text-white' : 'bg-surface-100 text-ink-light'}`}>
                          {s.paid ? '👑' : '📄'}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-ink-light mb-1">
                            {new Date(s.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </div>
                          {s.paid ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Laporan Lengkap
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-100 text-ink-light text-xs font-bold border border-surface-200">
                              Versi Gratis
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        {!s.freeReportReady && s.generatingFreeReport ? (
                          <div className="w-full md:w-auto text-center px-6 py-3 rounded-2xl text-sm font-bold bg-amber-50 text-amber-700 flex justify-center items-center gap-2 border border-amber-100">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span> AI sedang menyusun laporan...
                          </div>
                        ) : !s.freeReportReady && !s.generatingFreeReport ? (
                          <button onClick={() => setSessions(prev => prev.map(p => p.id === s.id ? {...p, generatingFreeReport: true} : p))} className="w-full md:w-auto text-center px-6 py-3 rounded-2xl text-sm font-bold bg-surface-100 text-ink hover:bg-surface-200 transition-colors">
                            Generate Laporan Gratis
                          </button>
                        ) : (
                          <Link href={`/hasil?session_id=${s.id}`} onClick={() => useTesStore.getState().setSessionId(s.id)} className={`block w-full md:w-auto text-center px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                            s.paid 
                              ? 'bg-brand-50 text-brand-700 hover:bg-brand-100' 
                              : 'bg-ink text-white hover:bg-brand-600 hover:shadow-lg'
                          }`}>
                            {s.paid ? 'Buka Laporan' : 'Buka Hasil'}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Pengaturan Profil Section (Modern Form Layout) */}
            <section className="bg-white rounded-3xl shadow-sm border border-surface-200 overflow-hidden">
              <div className="bg-surface-50 border-b border-surface-200 px-8 py-5">
                <h2 className="text-base font-bold text-ink">Pengaturan Akun</h2>
                <p className="text-xs text-ink-light">Kelola data personal dan keamanan akunmu.</p>
              </div>
              
              <div className="p-8 space-y-8 divider-y divide-surface-100">
                {/* Nama */}
                <form onSubmit={handleSaveNama} className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3 shrink-0">
                    <label className="block text-sm font-bold text-ink">Nama Lengkap</label>
                    <p className="text-xs text-ink-light">Akan ditampilkan di laporan</p>
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row gap-3">
                    <input
                      type="text" value={nama} onChange={(e) => setNama(e.target.value)}
                      placeholder="Masukkan namamu"
                      className="flex-1 border border-surface-200 bg-surface-50 rounded-2xl px-4 py-3 text-sm text-ink outline-none focus:border-brand-400 focus:bg-white transition-all"
                    />
                    <button type="submit" disabled={savingNama} className="shrink-0 bg-white border border-surface-200 text-ink rounded-2xl px-6 py-3 text-sm font-bold hover:bg-surface-50 transition-colors disabled:opacity-50">
                      {savingNama ? 'Menyimpan...' : 'Simpan'}
                    </button>
                  </div>
                  {namaMsg && <div className="w-full text-xs font-bold text-brand-600 md:ml-auto">{namaMsg}</div>}
                </form>

                <hr className="border-surface-100" />

                {/* Email */}
                <form onSubmit={handleChangeEmail} className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3 shrink-0">
                    <label className="block text-sm font-bold text-ink">Alamat Email</label>
                    <p className="text-xs text-ink-light">Email untuk login & notifikasi</p>
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row gap-3">
                    <input
                      type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required
                      className="flex-1 border border-surface-200 bg-surface-50 rounded-2xl px-4 py-3 text-sm text-ink outline-none focus:border-brand-400 focus:bg-white transition-all"
                    />
                    <button type="submit" disabled={savingEmail || newEmail === email} className="shrink-0 bg-white border border-surface-200 text-ink rounded-2xl px-6 py-3 text-sm font-bold hover:bg-surface-50 transition-colors disabled:opacity-50">
                      {savingEmail ? 'Memproses...' : 'Ubah Email'}
                    </button>
                  </div>
                  {emailMsg && <div className="w-full text-xs font-bold text-brand-600">{emailMsg}</div>}
                </form>

                <hr className="border-surface-100" />

                {/* Password */}
                <form onSubmit={handleChangePassword} className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3 shrink-0">
                    <label className="block text-sm font-bold text-ink">Kata Sandi</label>
                    <p className="text-xs text-ink-light">Buat kata sandi baru yang kuat</p>
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row gap-3">
                    <input
                      type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimal 8 karakter"
                      className="flex-1 border border-surface-200 bg-surface-50 rounded-2xl px-4 py-3 text-sm text-ink outline-none focus:border-brand-400 focus:bg-white transition-all"
                    />
                    <button type="submit" disabled={savingPassword || !newPassword} className="shrink-0 bg-white border border-surface-200 text-ink rounded-2xl px-6 py-3 text-sm font-bold hover:bg-surface-50 transition-colors disabled:opacity-50">
                      {savingPassword ? 'Memproses...' : 'Ubah Sandi'}
                    </button>
                  </div>
                  {passwordMsg && <div className="w-full text-xs font-bold text-brand-600">{passwordMsg}</div>}
                </form>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  )
}
