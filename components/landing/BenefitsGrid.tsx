export default function BenefitsGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Hasil yang akan kamu dapatkan
          </h2>
          <p className="text-slate-600 text-lg">
            Bukan sekadar tes kepribadian. Ini adalah rancangan masa depan yang siap dieksekusi.
          </p>
        </div>

        {/* CSS Grid (3+2 layout on XL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 md:gap-6">
          
          {/* Row 1 (3 equal cards on XL) */}
          
          {/* Card 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm md:col-span-1 xl:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
              </div>
              <h3 className="font-bold text-slate-900">Jalur Utama Keputusan</h3>
            </div>
            <p className="text-slate-600 text-sm leading-[1.7]">
              Sistem akan memilihkan satu prioritas paling logis: Kuliah, Kerja, atau Hybrid.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm md:col-span-1 xl:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </div>
              <h3 className="font-bold text-slate-900">Alasan Logis</h3>
            </div>
            <p className="text-slate-600 text-sm leading-[1.7]">
              Penjelasan transparan mengapa sistem merekomendasikan arah tersebut untuk profilmu.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm md:col-span-1 xl:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="font-bold text-slate-900">3 Rekomendasi Karir</h3>
            </div>
            <p className="text-slate-600 text-sm leading-[1.7]">
              Dapatkan opsi spesifik bidang atau jalur yang bisa kamu jadikan target realistis.
            </p>
          </div>

          {/* Row 2 (2 wider cards on XL) */}

          {/* Card 4 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm md:col-span-1 xl:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="font-bold text-slate-900">Simulasi Risiko</h3>
            </div>
            <p className="text-slate-600 text-sm leading-[1.7] max-w-lg">
              Ketahui tantangan utama dan potensi kegagalan dari opsi yang kamu pilih agar bisa bersiap lebih awal.
            </p>
          </div>

          {/* Card 5 (Premium Focus) */}
          <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-md md:col-span-2 xl:col-span-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 border border-slate-700 text-brand-300 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="font-bold text-white">Roadmap 6–12 Bulan</h3>
              </div>
              <p className="text-slate-300 text-sm leading-[1.7] max-w-lg">
                Panduan aksi per bulan yang konkrit. Kamu akan tahu harus fokus belajar apa bulan ini, dan persiapan apa untuk bulan berikutnya.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
