'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Email atau password salah. Coba lagi.')
      setLoading(false)
    } else {
      router.push('/tes/d1')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', marginBottom: 32 }}>
        <div style={{ width: 28, height: 28, background: '#1D9E75', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
        </div>
        <span style={{ fontSize: 16, fontWeight: 500, color: '#2C2C2A' }}>KarirGPS</span>
      </Link>

      <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 32, width: '100%', maxWidth: 380 }}>
        <h1 style={{ fontSize: 20, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>Masuk</h1>
        <p style={{ fontSize: 13, color: '#888780', marginBottom: 24, lineHeight: 1.5 }}>
          Lanjutkan ke tes atau akses laporan yang sudah kamu bayar.
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 5 }}>Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="nama@email.com" required
              style={{ width: '100%', border: '0.5px solid rgba(44,44,42,0.15)', borderRadius: 7, padding: '9px 12px', fontSize: 14, color: '#2C2C2A', outline: 'none', background: 'white' }}
            />
          </div>
          <div style={{ marginBottom: 6 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 5 }}>Password</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Password kamu" required
              style={{ width: '100%', border: '0.5px solid rgba(44,44,42,0.15)', borderRadius: 7, padding: '9px 12px', fontSize: 14, color: '#2C2C2A', outline: 'none', background: 'white' }}
            />
          </div>

          {error && (
            <div style={{ background: '#FCEBEB', border: '0.5px solid #F7C1C1', borderRadius: 7, padding: '10px 12px', fontSize: 13, color: '#A32D2D', marginBottom: 14 }}>
              {error}
            </div>
          )}

          <button
            type="submit" disabled={loading}
            style={{ width: '100%', background: loading ? '#9FE1CB' : '#1D9E75', color: 'white', border: 'none', borderRadius: 8, padding: '11px', fontSize: 14, fontWeight: 500, cursor: loading ? 'not-allowed' : 'pointer', marginTop: 8 }}
          >
            {loading ? 'Masuk...' : 'Masuk'}
          </button>
        </form>

        <div style={{ textAlign: 'center', fontSize: 13, color: '#888780', marginTop: 16 }}>
          Belum punya akun?{' '}
          <Link href="/auth/register" style={{ color: '#1D9E75', textDecoration: 'none' }}>Daftar</Link>
        </div>
        <div style={{ textAlign: 'center', fontSize: 13, marginTop: 8 }}>
          <Link href="/tes/d1" style={{ color: '#888780', textDecoration: 'none' }}>
            Lanjut tanpa akun →
          </Link>
        </div>
      </div>
    </div>
  )
}
