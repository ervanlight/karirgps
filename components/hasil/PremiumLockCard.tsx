import Link from 'next/link'

export default function PremiumLockCard() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pt-32 pb-12 px-6">
      {/* Heavy Blur Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[12px] -z-10" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%)' }}></div>
      
      <div className="max-w-md w-full bg-white border border-surface-200 rounded-3xl p-8 md:p-10 shadow-float text-center">
        <div className="w-12 h-12 bg-surface-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-surface-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-ink mb-4 leading-tight">Simulasi Karier Terkunci</h3>
        <p className="text-sm text-ink-light mb-8 leading-relaxed">
          Buka Laporan Lengkap untuk melihat peta jalan 12 bulan ke depan, simulasi keputusan spesifik, dan analisis risiko mendalam untuk profilmu.
        </p>
        
        <Link 
          href="/auth/register" 
          className="block w-full bg-ink text-white rounded-full py-4 text-sm font-bold hover:bg-brand-600 transition-all duration-300 shadow-soft hover:shadow-float hover:-translate-y-0.5"
        >
          Buka Akses Penuh — Rp 59.000
        </Link>
        <p className="text-[11px] text-ink-light mt-4 uppercase tracking-widest font-bold">Sekali Bayar · Akses Selamanya</p>
      </div>
    </div>
  )
}
