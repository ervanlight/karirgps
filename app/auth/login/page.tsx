'use client'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { ensureFreshSessionForUser } from '@/lib/store'

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Kata sandi salah atau email tidak terdaftar. Periksa kembali dan coba lagi.')
      setLoading(false)
    } else {
      // Kalau akun yang login beda dari yang terakhir dipakai di perangkat ini,
      // bersihkan dulu jawaban tes yang masih nyangkut di localStorage.
      if (data.user) ensureFreshSessionForUser(data.user.id)
      router.push(searchParams.get('next') || '/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-surface-50 flex flex-col items-center justify-center p-6">
      <Link href="/" className="flex items-center gap-2 mb-8 group">
        <div className="w-9 h-9 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-float transition-all duration-300">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="white">
            <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">KarirGPS</span>
      </Link>

      <div className="bg-white border border-surface-200 rounded-2xl p-8 w-full max-w-[380px] shadow-sm">
        <h1 className="text-xl font-bold text-ink mb-1">Masuk</h1>
        <p className="text-sm text-ink-light mb-6">
          Lanjutkan ke tes atau akses laporan yang sudah kamu bayar.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-ink mb-1.5">Email</label>
            <input
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder="contoh@email.com" 
              required
              className="w-full border border-surface-200 rounded-xl px-4 py-2.5 text-ink focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all bg-surface-50 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink mb-1.5">Kata Sandi</label>
            <input
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi" 
              required
              className="w-full border border-surface-200 rounded-xl px-4 py-2.5 text-ink focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all bg-surface-50 focus:bg-white"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit" 
            disabled={loading}
            className={`w-full text-white rounded-xl py-3 text-sm font-semibold transition-all mt-2 ${loading ? 'bg-brand-300 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-float'}`}
          >
            {loading ? 'Masuk...' : 'Masuk'}
          </button>
        </form>

        <div className="text-center text-sm text-ink-light mt-6">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="text-brand-600 font-semibold hover:text-brand-700">Daftar</Link>
        </div>
      </div>
    </div>
  )
}
