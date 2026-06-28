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
    setNamaMsg(error ? 'Gagal menyimpan nama.' : 'Tersimpan.')
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
    if (newPassword.length < 8) { setPasswordMsg('Password minimal 8 karakter.'); return }
    setSavingPassword(true)
    setPasswordMsg('')
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    setSavingPassword(false)
    setPasswordMsg(error ? (error.message || 'Gagal mengganti password.') : 'Password berhasil diganti.')
    if (!error) setNewPassword('')
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#F8F7F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 13, color: '#888780' }}>Memuat dashboard...</div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
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
        <span style={{ fontSize: 13, color: '#888780' }}>{email}</span>
      </nav>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px 80px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 500, color: '#2C2C2A', marginBottom: 24 }}>Dashboard</h1>

        {/* DAFTAR TES */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
            Tes yang pernah kamu kerjakan
          </div>

          {sessions.length === 0 && (
            <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, textAlign: 'center' }}>
              <p style={{ fontSize: 14, color: '#888780', marginBottom: 14 }}>Kamu belum pernah mengerjakan tes.</p>
              <Link href="/tes/d1" style={{ background: '#1D9E75', color: 'white', borderRadius: 8, padding: '10px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>
                Mulai tes pertamamu
              </Link>
            </div>
          )}

          <div style={{ display: 'grid', gap: 10 }}>
            {sessions.map((s) => (
              <div key={s.id} style={{
                background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 12,
                padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>
                    {new Date(s.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: '2px 10px', borderRadius: 20,
                    background: s.paid ? '#E1F5EE' : '#F8F7F4',
                    color: s.paid ? '#0F6E56' : '#888780',
                  }}>
                    {s.paid ? 'Laporan lengkap' : 'Gratis'}
                  </span>
                </div>
                <Link href={`/laporan/${s.id}`} style={{
                  background: s.paid ? 'none' : '#1D9E75',
                  border: s.paid ? '0.5px solid rgba(44,44,42,0.15)' : 'none',
                  color: s.paid ? '#2C2C2A' : 'white',
                  borderRadius: 8, padding: '0 16px', fontSize: 13, fontWeight: 500,
                  textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                  display: 'flex', alignItems: 'center', minHeight: 44, boxSizing: 'border-box',
                }}>
                  {s.paid ? 'Buka laporan' : 'Beli laporan'}
                </Link>
              </div>
            ))}
          </div>

          {sessions.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <Link href="/tes/d1" style={{ fontSize: 13, color: '#1D9E75', textDecoration: 'none' }}>
                + Kerjakan tes baru
              </Link>
            </div>
          )}
        </div>

        {/* PROFILE SETTINGS */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
            Pengaturan profil
          </div>

          <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 22, marginBottom: 10 }}>
            <form onSubmit={handleSaveNama}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>Nama</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="text" value={nama} onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama lengkapmu"
                  style={{ flex: 1, border: '0.5px solid rgba(44,44,42,0.15)', borderRadius: 7, padding: '9px 12px', fontSize: 14, color: '#2C2C2A', outline: 'none', minHeight: 44, boxSizing: 'border-box' }}
                />
                <button type="submit" disabled={savingNama} style={{ background: '#1D9E75', color: 'white', border: 'none', borderRadius: 7, padding: '0 18px', fontSize: 13, fontWeight: 500, cursor: 'pointer', minHeight: 44 }}>
                  {savingNama ? '...' : 'Simpan'}
                </button>
              </div>
              {namaMsg && <div style={{ fontSize: 12, color: '#1D9E75', marginTop: 8 }}>{namaMsg}</div>}
            </form>
          </div>

          <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 22, marginBottom: 10 }}>
            <form onSubmit={handleChangeEmail}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>Email</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required
                  style={{ flex: 1, border: '0.5px solid rgba(44,44,42,0.15)', borderRadius: 7, padding: '9px 12px', fontSize: 14, color: '#2C2C2A', outline: 'none', minHeight: 44, boxSizing: 'border-box' }}
                />
                <button type="submit" disabled={savingEmail || newEmail === email} style={{ background: '#1D9E75', color: 'white', border: 'none', borderRadius: 7, padding: '0 18px', fontSize: 13, fontWeight: 500, cursor: 'pointer', minHeight: 44, opacity: newEmail === email ? 0.5 : 1 }}>
                  {savingEmail ? '...' : 'Ganti'}
                </button>
              </div>
              {emailMsg && <div style={{ fontSize: 12, color: '#1D9E75', marginTop: 8 }}>{emailMsg}</div>}
            </form>
          </div>

          <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 22 }}>
            <form onSubmit={handleChangePassword}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>Password baru</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimal 8 karakter"
                  style={{ flex: 1, border: '0.5px solid rgba(44,44,42,0.15)', borderRadius: 7, padding: '9px 12px', fontSize: 14, color: '#2C2C2A', outline: 'none', minHeight: 44, boxSizing: 'border-box' }}
                />
                <button type="submit" disabled={savingPassword || !newPassword} style={{ background: '#1D9E75', color: 'white', border: 'none', borderRadius: 7, padding: '0 18px', fontSize: 13, fontWeight: 500, cursor: 'pointer', minHeight: 44 }}>
                  {savingPassword ? '...' : 'Ganti'}
                </button>
              </div>
              {passwordMsg && <div style={{ fontSize: 12, color: '#1D9E75', marginTop: 8 }}>{passwordMsg}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
