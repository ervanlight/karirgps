import Link from 'next/link'

export default function LandingHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Hero Left: Free-first, calm copy */}
        <div className="animate-fade-up order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-ink mb-6 leading-[1.15] text-balance">
            Temukan arah karier yang jelas untuk <span className="text-brand-600">masa depanmu.</span>
          </h1>

          <p className="text-base md:text-lg text-ink-light mb-10 leading-[1.8] max-w-lg mx-auto lg:mx-0">
            Pahami apakah kamu lebih cocok untuk fokus <strong>kuliah, kerja, atau menempuh jalur hybrid.</strong> Tidak perlu menebak-nebak lagi, mari kita petakan langkah pertamamu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full mb-8">
            <Link 
              href="/auth/register" 
              className="w-full sm:w-auto bg-brand-600 text-white rounded-2xl px-10 py-4 text-base font-bold hover:bg-brand-700 hover:-translate-y-0.5 transition-all duration-300 shadow-soft text-center"
            >
              Mulai Analisis Gratis
            </Link>
            <a 
              href="#preview" 
              className="w-full sm:w-auto bg-white border border-surface-200 text-ink rounded-2xl px-10 py-4 text-base font-bold hover:bg-surface-50 transition-all duration-300 text-center"
            >
              Lihat Contoh Hasil
            </a>
          </div>

          {/* Low-pressure Trust Chips */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-ink-light pt-2">
            <div className="flex items-center gap-2">
              <svg className="text-brand-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 
              Gratis untuk mulai
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-brand-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 
              Tanpa komitmen
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-brand-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 
              Cocok untuk SMA/SMK
            </div>
          </div>
        </div>
        
        {/* Hero Right: Real UI Mockup */}
        <div className="relative animate-fade-in z-0 order-1 lg:order-2">
          {/* Calm background glow */}
          <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full scale-100 pointer-events-none"></div>
          
          <div className="relative mx-auto max-w-[320px] lg:max-w-sm transform rotate-1 hover:rotate-0 transition-transform duration-700 select-none">
            {/* iPhone 15 Pro Titanium Hardware Frame */}
            <div className="relative">
              {/* Side Buttons (Titanium) */}
              <div className="absolute -left-[14px] top-24 w-1.5 h-12 bg-slate-400 rounded-l-md border-y border-l border-slate-300 shadow-inner"></div>
              <div className="absolute -left-[14px] top-40 w-1.5 h-12 bg-slate-400 rounded-l-md border-y border-l border-slate-300 shadow-inner"></div>
              <div className="absolute -right-[14px] top-32 w-1.5 h-16 bg-slate-400 rounded-r-md border-y border-r border-slate-300 shadow-inner"></div>
              
              {/* Main Body (Titanium Edge + Black Bezel) */}
              <div className="rounded-[3rem] bg-black p-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative ring-1 ring-slate-400 border-[3px] border-slate-300 overflow-hidden">
                {/* Glare effect on the edge */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-[3rem]"></div>
                
                {/* Dynamic Island */}
                <div className="absolute top-2 inset-x-0 h-7 bg-black rounded-full w-28 mx-auto z-20 flex justify-end items-center px-3 shadow-inner">
                   <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700/50"></div>
                </div>
                
                {/* Phone Screen Content */}
                <div className="p-5 lg:p-6 pt-14 h-[600px] overflow-hidden bg-slate-50 relative rounded-[2.2rem] border border-black/10">
                  {/* Screen Glare */}
                  <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-br from-white/10 to-transparent pointer-events-none transform -rotate-12 translate-x-1/4 -translate-y-1/4 z-10"></div>
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 font-bold text-sm flex items-center justify-center border border-brand-100 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-ink-light uppercase tracking-widest font-semibold">Hasil Analisis</div>
                      <div className="text-sm font-bold text-ink">Profil Siswa #842</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest rounded-full border border-emerald-100 flex-shrink-0">
                    Selesai
                  </div>
                </div>

                {/* Core Decision */}
                <div className="bg-surface-50 rounded-2xl p-5 border border-surface-200 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] uppercase tracking-widest text-ink-light font-bold">Rekomendasi</div>
                    <div className="flex items-center gap-1 bg-brand-50 text-brand-700 px-2 py-1 rounded-md text-[10px] font-bold border border-brand-100">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      Tinggi
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-ink mb-2">Jalur Hybrid</div>
                  <div className="text-xs text-ink-light leading-relaxed">
                    Mulai bekerja sambil mengikuti kuliah online untuk menyeimbangkan finansial dan akademik.
                  </div>
                </div>

                {/* Grid of Mini Insights */}
                <div className="flex flex-col gap-3">
                  <div className="bg-white border border-surface-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] uppercase tracking-widest text-ink-light font-bold">Kecocokan</div>
                      <div className="text-lg font-bold text-brand-600">84%</div>
                    </div>
                    <div className="w-full h-1.5 bg-surface-100 rounded-full overflow-hidden">
                      <div className="w-[84%] h-full bg-brand-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white border border-surface-200 rounded-xl p-4 shadow-sm">
                    <div className="text-[10px] uppercase tracking-widest text-ink-light font-bold mb-1">Fokus Awal</div>
                    <div className="text-sm font-bold text-ink leading-snug">Magang & Bootcamp</div>
                    <div className="text-[11px] text-ink-light mt-2 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Dalam 30 hari
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
