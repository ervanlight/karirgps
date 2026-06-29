import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Mulai gratis, upgrade bila perlu.
          </h2>
          <p className="text-slate-600 text-lg">
            Tidak ada paksaan. Coba analisis awal secara gratis, lalu putuskan apakah kamu butuh roadmap lengkap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          
          {/* Free Card */}
          <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Mulai Gratis</h3>
            <p className="text-sm text-slate-600 mb-8">Pahami posisi dan kecenderungan utamamu saat ini.</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3">
                <div className="text-slate-400 font-bold shrink-0 mt-0.5">✓</div>
                <span className="text-sm text-slate-700">Analisis profil dasar & prioritas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-slate-400 font-bold shrink-0 mt-0.5">✓</div>
                <span className="text-sm text-slate-700">Kesimpulan arah utama (Kuliah/Kerja)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-slate-400 font-bold shrink-0 mt-0.5">✓</div>
                <span className="text-sm text-slate-700">1 insight kepribadian</span>
              </li>
            </ul>
            
            <Link 
              href="/auth/register" 
              className="block text-center w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-6 py-4 text-sm font-bold hover:bg-slate-100 transition-colors"
            >
              Coba Gratis Sekarang
            </Link>
          </div>

          {/* Premium Card */}
          <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-md relative flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl">
              Opsional
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Laporan Lengkap</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-extrabold">Rp 59.000</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Alasan logis & rasionalisasi data',
                '3 target profesi/jurusan spesifik',
                'Roadmap eksekusi 6–12 bulan',
                'Simulasi risiko kegagalan & plan B',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="text-brand-400 font-bold shrink-0 mt-0.5">✓</div>
                  <span className="text-white/90 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/auth/register" 
              className="block text-center w-full bg-brand-600 text-white rounded-2xl px-6 py-4 text-sm font-bold hover:bg-brand-500 transition-colors shadow-sm"
            >
              Buka Hasil Lengkap
            </Link>
            
            <div className="text-center mt-4 flex items-center justify-center gap-4 text-xs text-slate-400 font-medium">
              <span>Bayar sekali</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
              <span>Akses selamanya</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
