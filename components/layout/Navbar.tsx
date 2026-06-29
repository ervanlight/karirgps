import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-700 transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="white">
              <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 transition-colors">KarirGPS</span>
        </Link>
        <div className="flex gap-4 sm:gap-6 items-center">
          <Link href="/auth/login" className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Masuk
          </Link>
          <Link href="/auth/register" className="bg-slate-900 text-white rounded-xl px-5 sm:px-7 py-2.5 text-sm font-bold hover:bg-slate-800 transition-all duration-300 shadow-sm">
            Mulai Gratis
          </Link>
        </div>
      </div>
    </nav>
  )
}
