'use client'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterForm />
    </Suspense>
  )
}

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    if (password.length < 8) { 
      setError('Kata sandi minimal 8 karakter.')
      return 
    }
    setLoading(true)
    setError('')

    const next = searchParams.get('next') || '/tes/d1'
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { emailRedirectTo: `${window.location.origin}${next}` },
    })

    if (error) {
      setError(error.message || 'Gagal membuat akun. Coba lagi.')
      setLoading(false)
    } else {
      router.push(next)
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
        <h1 className="text-xl font-bold text-ink mb-1">Buat Akun</h1>
        <p className="text-sm text-ink-light mb-6 leading-relaxed">
          Biar hasilmu tersimpan dan bisa diakses kapan saja — termasuk setelah bayar.
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
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
              placeholder="Minimal 8 karakter" 
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
            {loading ? 'Membuat akun...' : 'Buat Akun & Mulai Tes'}
          </button>
        </form>

        <div className="text-center text-xs text-ink-light/70 mt-6 font-medium">
          Datamu tidak dijual ke siapapun. Tidak ada iklan. Tidak ada drama.
        </div>
        
        <div className="text-center text-sm text-ink-light mt-4">
          Sudah punya akun?{' '}
          <Link href="/auth/login" className="text-brand-600 font-semibold hover:text-brand-700">Masuk</Link>
        </div>
      </div>
    </div>
  )
}
