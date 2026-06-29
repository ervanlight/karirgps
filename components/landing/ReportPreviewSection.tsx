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
          
          {/* Right: Large Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
              
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Rekomendasi Utama</div>
                  <div className="text-lg font-bold text-slate-900">Jalur Profesional</div>
                </div>
                <div className="flex-1 bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Kecocokan</div>
                  <div className="text-lg font-bold text-brand-600">92%</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm mb-6">
                <div className="text-xs font-bold text-slate-900 mb-3">Top 3 Pilihan Jurusan/Bidang</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                    <div className="text-sm font-medium text-slate-700 flex-1">Digital Marketing</div>
                    <div className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">Tinggi</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    <div className="text-sm font-medium text-slate-700 flex-1">Business Administration</div>
                    <div className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">Sedang</div>
                  </div>
                </div>
              </div>

              {/* Locked area */}
              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm h-32 relative">
                <div className="w-1/3 h-3 bg-slate-100 rounded mb-4"></div>
                <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                <div className="w-4/5 h-2 bg-slate-100 rounded"></div>
                
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px] flex items-center justify-center rounded-xl">
                  <div className="bg-white border border-slate-200 shadow-md px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="text-sm">🔒</span>
                    <span className="text-xs font-bold text-slate-900">Fitur Laporan Lengkap</span>
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
