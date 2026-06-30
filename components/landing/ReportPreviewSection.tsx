export default function ReportPreviewSection() {
  return (
    <section id="preview" className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Explanatory Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6 leading-[1.25]">
              Hasilnya gampang dibaca — bukan dokumen panjang yang bikin tambah bingung.
            </h2>
            <p className="text-base text-ink-light leading-[1.8] mb-8">
              Semua rangkuman jadi tampilan yang jelas: arahnya apa, kenapa, dan langkah berikutnya gimana. Tinggal dibaca, bukan ditafsirkan sendiri.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <span className="text-sm text-ink leading-snug">Persentase kecocokan yang jelas, bukan label kabur</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <span className="text-sm text-ink leading-snug">Target jurusan atau jalur kerja yang spesifik</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <span className="text-sm text-ink leading-snug">Langkah per bulan, bukan saran abstrak</span>
              </li>
            </ul>
          </div>
          
          {/* Right: Large Mockup Composite */}
          <div className="lg:col-span-7 relative mt-10 lg:mt-0 px-4 md:px-8">
            
            {/* Macbook Frame */}
            <div className="relative mx-auto w-full max-w-[600px] z-10 drop-shadow-2xl">
              {/* Top Lid (Silver Aluminum) */}
              <div className="bg-slate-300 rounded-t-[1.5rem] p-2 md:p-3 pb-4 shadow-2xl relative border-t border-x border-white/50">
                {/* Webcam Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-md z-20 flex justify-center items-center">
                  <div className="w-1.5 h-1.5 bg-slate-800 rounded-full border border-slate-700/50"></div>
                </div>
                
                {/* Screen Bezel (Black) */}
                <div className="bg-black rounded-lg p-2 md:p-3 shadow-inner relative">
                  
                  {/* Screen Content (The App) */}
                  <div className="bg-slate-50 rounded overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] relative border border-slate-800 flex flex-col p-4 md:p-6">
                    {/* Screen Glare */}
                    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-br from-white/10 to-transparent pointer-events-none transform -rotate-12 translate-x-1/4 -translate-y-1/4 z-10"></div>
                  
                  {/* Dashboard Content - Desktop */}
                  <div className="flex gap-4 mb-4 md:mb-6">
                    <div className="flex-1 bg-white border border-slate-200 p-3 md:p-4 rounded-xl shadow-sm">
                      <div className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Rekomendasi Utama</div>
                      <div className="text-base md:text-lg font-bold text-slate-900">Jalur Profesional</div>
                    </div>
                    <div className="flex-1 bg-white border border-slate-200 p-3 md:p-4 rounded-xl shadow-sm">
                      <div className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Kecocokan</div>
                      <div className="text-base md:text-lg font-bold text-brand-600">92%</div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 md:p-5 rounded-xl shadow-sm mb-4 md:mb-6">
                    <div className="text-xs font-bold text-slate-900 mb-3">Top 3 Pilihan Jurusan/Bidang</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        <div className="text-sm font-medium text-slate-700 flex-1">Digital Marketing</div>
                        <div className="text-[10px] md:text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">Tinggi</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                        <div className="text-sm font-medium text-slate-700 flex-1">Business Administration</div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">Sedang</div>
                      </div>
                    </div>
                  </div>

                  {/* Locked area */}
                  <div className="bg-white border border-slate-200 p-4 md:p-5 rounded-xl shadow-sm flex-1 relative overflow-hidden">
                    <div className="w-1/3 h-2 md:h-3 bg-slate-100 rounded mb-3 md:mb-4"></div>
                    <div className="w-full h-1.5 md:h-2 bg-slate-100 rounded mb-2"></div>
                    <div className="w-4/5 h-1.5 md:h-2 bg-slate-100 rounded"></div>
                    
                    {/* Blur Overlay */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px] flex items-center justify-center rounded-xl">
                      <div className="bg-white border border-slate-200 shadow-md px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2">
                        <span className="text-xs md:text-sm">🔒</span>
                        <span className="text-[10px] md:text-xs font-bold text-slate-900">Fitur Laporan Lengkap</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                
                {/* Macbook brand logo (MacBook Pro text) */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[6px] text-slate-500 tracking-widest font-semibold">MacBook Pro</div>
              </div>
              
              {/* Keyboard Base (Silver Aluminum) */}
              <div className="bg-gradient-to-b from-slate-200 to-slate-400 h-5 md:h-6 rounded-b-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[114%] -ml-[7%] relative flex justify-center border-t border-slate-300 z-0">
                {/* Trackpad notch */}
                <div className="w-24 md:w-32 h-2 md:h-2.5 bg-slate-300 rounded-b-xl shadow-inner border-b border-slate-400/50"></div>
              </div>
            </div>

            {/* iPhone Frame Overlapping (Titanium Design) */}
            <div className="absolute -bottom-8 md:-bottom-12 -right-2 md:-right-8 w-32 md:w-44 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2rem] md:rounded-[2.5rem]">
              <div className="relative">
                {/* Side Buttons (Titanium) */}
                <div className="absolute -left-[6px] top-12 w-1 h-6 bg-slate-400 rounded-l-md border-y border-l border-slate-300 shadow-inner"></div>
                <div className="absolute -left-[6px] top-20 w-1 h-6 bg-slate-400 rounded-l-md border-y border-l border-slate-300 shadow-inner"></div>
                <div className="absolute -right-[6px] top-16 w-1 h-8 bg-slate-400 rounded-r-md border-y border-r border-slate-300 shadow-inner"></div>

                {/* iPhone Body */}
                <div className="rounded-[2rem] md:rounded-[2.5rem] bg-black p-[6px] md:p-[8px] overflow-hidden relative ring-1 ring-slate-400 border-[2px] md:border-[3px] border-slate-300 h-[250px] md:h-[340px]">
                  {/* Glare effect on the edge */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-[2rem] md:rounded-[2.5rem]"></div>
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-2 inset-x-0 h-4 md:h-5 bg-black rounded-full w-14 md:w-16 mx-auto z-20 flex justify-end items-center px-1.5 shadow-inner">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-800 border border-slate-700/50"></div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="p-3 md:p-4 pt-8 md:pt-10 bg-slate-50 h-full flex flex-col gap-3 rounded-[1.6rem] md:rounded-[2rem] overflow-hidden border border-black/10 relative">
                    {/* Screen Glare */}
                    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-br from-white/10 to-transparent pointer-events-none transform -rotate-12 translate-x-1/4 -translate-y-1/4 z-10"></div>
                    <div className="bg-white border border-slate-200 p-2 md:p-3 rounded-lg shadow-sm">
                      <div className="text-[7px] md:text-[8px] text-slate-500 font-bold uppercase tracking-wider mb-1">Rekomendasi</div>
                      <div className="text-xs md:text-sm font-bold text-slate-900">Jalur Profesional</div>
                    </div>
                    <div className="bg-white border border-slate-200 p-2 md:p-3 rounded-lg shadow-sm">
                      <div className="text-[7px] md:text-[8px] text-slate-500 font-bold uppercase tracking-wider mb-1">Kecocokan</div>
                      <div className="text-xs md:text-sm font-bold text-brand-600">92%</div>
                    </div>
                    <div className="bg-white border border-slate-200 p-2 md:p-3 rounded-lg shadow-sm flex-1 relative overflow-hidden">
                       <div className="w-full h-1 bg-slate-100 rounded mb-1.5"></div>
                       <div className="w-4/5 h-1 bg-slate-100 rounded mb-1.5"></div>
                       <div className="w-1/2 h-1 bg-slate-100 rounded"></div>
                       <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                          <div className="bg-slate-900 text-white shadow-md px-2 py-1 rounded-full flex items-center gap-1">
                            <span className="text-[8px]">🔒</span>
                          </div>
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
