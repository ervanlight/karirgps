'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

interface SessionRow {
  id: string
  created_at: string
  status: string
  paid: boolean
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
        .select('id, created_at, status')
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

      setSessions(testSessions.map((s) => ({
        id: s.id,
        created_at: s.created_at,
        status: s.status,
        paid: paidSet.has(s.id),
      })))
      setLoading(false)
    }
    load()
    return () => { active = false }
  }, [router])

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

  return (
    <div className="min-h-screen bg-surface-50 text-ink font-sans selection:bg-brand-500 selection:text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-100/50 to-transparent pointer-events-none -z-10"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-surface-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-ink">KarirGPS</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-ink-light hidden sm:block">{email}</span>
            <button onClick={handleLogout} className="text-sm font-medium text-ink hover:text-brand-600 transition-colors">
              Keluar
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 pb-24">
        
        <header className="mb-10 animate-fade-up">
          <h1 className="text-3xl font-bold text-ink tracking-tight mb-2">Halo, {nama || 'Penjelajah'}! 👋</h1>
          <p className="text-ink-light">Selamat datang di ruang kerjamu. Lanjutkan perjalanan karirmu di sini.</p>
        </header>

        {/* Daftar Tes Section */}
        <section className="mb-14 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest">Riwayat Tes</h2>
            {sessions.length > 0 && (
              <Link href="/tes/d1" className="text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline">
                + Tes Baru
              </Link>
            )}
          </div>

          {sessions.length === 0 ? (
            <div className="bg-white border border-surface-200 rounded-3xl p-10 text-center shadow-sm">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🧭
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">Belum ada aktivitas tes</h3>
              <p className="text-ink-light mb-6">Mulai tes pertama untuk memetakan potensimu.</p>
              <Link href="/tes/d1" className="inline-block bg-brand-600 text-white rounded-full px-8 py-3 text-sm font-semibold hover:bg-brand-700 hover:-translate-y-0.5 transition-all shadow-soft">
                Mulai Tes Sekarang
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {sessions.map((s) => (
                <div key={s.id} className="group bg-white border border-surface-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-soft transition-all duration-300">
                  <div>
                    <div className="text-base font-bold text-ink mb-1.5 group-hover:text-brand-600 transition-colors">
                      {new Date(s.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    {s.paid ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold border border-brand-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Laporan Lengkap
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-100 text-ink-light text-xs font-semibold border border-surface-200">
                        Versi Gratis
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/laporan/${s.id}`} className={`w-full sm:w-auto text-center px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    s.paid 
                      ? 'bg-surface-50 text-ink border border-surface-200 hover:bg-white hover:border-surface-300 hover:shadow-sm' 
                      : 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-soft hover:-translate-y-0.5'
                  }`}>
                    {s.paid ? 'Buka Laporan' : 'Beli Laporan'}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Pengaturan Profil */}
        <section className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-6">Pengaturan Profil</h2>

          <div className="grid gap-5">
            {/* Nama */}
            <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
              <form onSubmit={handleSaveNama}>
                <label className="block text-sm font-semibold text-ink mb-3">Nama Lengkap</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text" value={nama} onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan namamu"
                    className="flex-1 border border-surface-200 bg-surface-50 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                  <button type="submit" disabled={savingNama} className="bg-ink text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-brand-600 transition-colors disabled:opacity-50">
                    {savingNama ? 'Menyimpan...' : 'Simpan'}
                  </button>
                </div>
                {namaMsg && <div className="text-sm font-medium text-brand-600 mt-3">{namaMsg}</div>}
              </form>
            </div>

            {/* Email */}
            <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
              <form onSubmit={handleChangeEmail}>
                <label className="block text-sm font-semibold text-ink mb-3">Alamat Email</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required
                    className="flex-1 border border-surface-200 bg-surface-50 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                  <button type="submit" disabled={savingEmail || newEmail === email} className="bg-ink text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-brand-600 transition-colors disabled:opacity-50">
                    {savingEmail ? 'Memproses...' : 'Perbarui Email'}
                  </button>
                </div>
                {emailMsg && <div className="text-sm font-medium text-brand-600 mt-3">{emailMsg}</div>}
              </form>
            </div>

            {/* Kata Sandi */}
            <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
              <form onSubmit={handleChangePassword}>
                <label className="block text-sm font-semibold text-ink mb-3">Kata Sandi Baru</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimal 8 karakter"
                    className="flex-1 border border-surface-200 bg-surface-50 rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                  <button type="submit" disabled={savingPassword || !newPassword} className="bg-ink text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-brand-600 transition-colors disabled:opacity-50">
                    {savingPassword ? 'Memproses...' : 'Perbarui Kata Sandi'}
                  </button>
                </div>
                {passwordMsg && <div className="text-sm font-medium text-brand-600 mt-3">{passwordMsg}</div>}
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
