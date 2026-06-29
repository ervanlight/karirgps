export default function ReportPreviewSection() {
  return (
    <section id="preview" className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Explanatory Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.25]">
              Hasil yang mudah dipahami, senyata produk digital.
            </h2>
            <p className="text-base text-slate-600 leading-[1.8] mb-8">
              KarirGPS merangkum datamu ke dalam *dashboard* visual. Tidak ada lagi hasil tes yang berbentuk dokumen teks panjang dan membingungkan.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <span className="text-sm text-slate-700 leading-snug">Visualisasi persentase kecocokan yang presisi</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <span className="text-sm text-slate-700 leading-snug">Target profesi dan pendidikan yang spesifik</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <span className="text-sm text-slate-700 leading-snug">Timeline eksekusi bulan per bulan</span>
              </li>
            </ul>
          </div>
          
          {/* Right: Large Mockup Composite */}
          <div className="lg:col-span-7 relative mt-10 lg:mt-0 px-4 md:px-8">
            
            {/* Macbook Frame */}
            <div className="relative mx-auto w-full max-w-[600px] z-10 drop-shadow-2xl">
              {/* Top Lid */}
              <div className="bg-slate-800 rounded-t-3xl p-3 md:p-4 pb-6 shadow-2xl relative border-t-2 border-x-2 border-slate-600/50">
                {/* Webcam */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full border border-slate-700"></div>
                
                {/* Screen */}
                <div className="bg-slate-50 rounded-lg overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] relative border border-slate-900 flex flex-col p-4 md:p-6 shadow-inner">
                  
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
                
                {/* Macbook brand logo */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[8px] text-slate-400 tracking-widest font-bold">KARIRGPS</div>
              </div>
              
              {/* Keyboard Base */}
              <div className="bg-slate-300 h-4 md:h-5 rounded-b-3xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-[110%] -ml-[5%] relative flex justify-center border-b-[6px] border-slate-400 z-0">
                {/* Trackpad notch */}
                <div className="w-20 md:w-28 h-1.5 md:h-2 bg-slate-400 rounded-b-xl shadow-inner"></div>
              </div>
            </div>

            {/* iPhone Frame Overlapping */}
            <div className="absolute -bottom-8 md:-bottom-12 -right-2 md:-right-8 w-32 md:w-44 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2rem] md:rounded-[2.5rem]">
              <div className="relative">
                {/* iPhone Side Buttons */}
                <div className="absolute -left-[6px] top-12 w-1 h-6 bg-slate-800 rounded-l-md border-y border-l border-slate-700"></div>
                <div className="absolute -left-[6px] top-20 w-1 h-6 bg-slate-800 rounded-l-md border-y border-l border-slate-700"></div>
                <div className="absolute -right-[6px] top-16 w-1 h-8 bg-slate-800 rounded-r-md border-y border-r border-slate-700"></div>

                {/* iPhone Body */}
                <div className="border-[6px] md:border-[8px] border-slate-900 rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 overflow-hidden relative h-[250px] md:h-[340px] ring-1 ring-slate-700">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 inset-x-0 h-4 md:h-5 bg-black rounded-full w-14 md:w-16 mx-auto z-20 flex justify-end items-center px-1.5 shadow-inner">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-800 border border-slate-700/50"></div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="p-3 md:p-4 pt-8 md:pt-10 bg-slate-50 h-full flex flex-col gap-3 rounded-[1.4rem] md:rounded-[1.8rem] overflow-hidden">
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
