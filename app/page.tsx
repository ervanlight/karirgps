import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KarirGPS - Temukan Arah Karier yang Paling Masuk Akal Buat Kamu',
  description: 'Sistem inteligensi karier yang memproses minat, kondisi, dan tujuanmu untuk menghasilkan satu keputusan rasional.',
}

const FAQ = [
  { q: 'Apakah ini tes psikologi?', a: 'Bukan. KarirGPS bukan pengganti tes klinis. Ini adalah sistem pemetaan karier (Career Decision Engine) yang dirancang untuk membantumu mengambil keputusan rasional berdasarkan data pribadimu saat ini.' },
  { q: 'Apakah hasilnya pasti akurat?', a: 'Tidak ada alat yang bisa memprediksi masa depan 100%. Namun, KarirGPS secara drastis mengurangi tebak-tebakan dengan memberikan arah yang logis, bisa ditindaklanjuti, dan didukung alasan kuat.' },
  { q: 'Apakah harus bayar dari awal?', a: 'Tidak. Kamu bisa mencoba tahap analisis pertama secara gratis untuk melihat gambaran umum arahmu. Laporan Lengkap berbayar (Rp59.000) opsional jika kamu butuh roadmap detail.' },
  { q: 'Cocok untuk siapa?', a: 'Siswa SMA/SMK kelas akhir, gap year, atau siapa pun yang sedang bingung memilih antara kuliah, kerja, atau mencari alternatif lain.' }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-50 text-ink font-sans overflow-x-hidden relative selection:bg-brand-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass border-b border-surface-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-float transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">KarirGPS</span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/auth/login" className="hidden sm:block text-sm font-semibold text-ink-light hover:text-brand-600 transition-colors">
              Masuk
            </Link>
            <Link href="/auth/register" className="bg-ink text-white rounded-full px-7 py-3 text-sm font-bold hover:bg-brand-600 hover:-translate-y-0.5 transition-all duration-300 shadow-soft">
              Mulai Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (Split Layout) */}
      <main className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Hero Left: Copy & CTA */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-ink mb-6 leading-[1.15] text-balance">
              Pilih arah karier dengan <span className="text-brand-600">data, bukan asumsi.</span>
            </h1>

            <p className="text-base md:text-lg text-ink-light mb-10 leading-[1.8] max-w-lg">
              Sistem inteligensi karier yang memproses minat, kondisi nyata, dan tujuanmu untuk menghasilkan satu keputusan rasional: <strong>Kuliah, Kerja, atau Hybrid.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto mb-8">
              <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-10 py-4 text-base font-bold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-float text-center">
                Mulai Analisis Gratis
              </Link>
              <a href="#preview" className="w-full sm:w-auto bg-white border border-surface-200 text-ink rounded-full px-10 py-4 text-base font-bold hover:bg-surface-50 hover:border-surface-300 transition-all duration-300 text-center shadow-sm">
                Lihat Contoh Hasil
              </a>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center gap-4 text-[13px] font-semibold text-ink-light">
              <div className="flex items-center gap-1.5"><svg className="text-brand-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Mulai gratis</div>
              <div className="flex items-center gap-1.5"><svg className="text-brand-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Hasil instan</div>
              <div className="flex items-center gap-1.5"><svg className="text-brand-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Cocok untuk SMA/SMK</div>
            </div>
          </div>
          
          {/* Hero Right: Interactive Mockup */}
          <div className="relative hidden lg:block animate-fade-in z-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full scale-110 pointer-events-none"></div>
            
            {/* The Mockup Frame */}
            <div className="relative bg-white border border-surface-200 rounded-3xl shadow-float p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 select-none">
              
              {/* Fake Nav */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-700 font-bold text-xs flex items-center justify-center">ER</div>
                  <div>
                    <div className="text-[10px] text-ink-light uppercase tracking-widest font-bold">Klien</div>
                    <div className="text-sm font-bold text-ink">Ervanna</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest rounded-full border border-emerald-100">Selesai</div>
              </div>

              {/* Main Decision Block Mockup */}
              <div className="bg-brand-600 rounded-2xl p-6 text-white relative overflow-hidden mb-4 shadow-inner">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-400/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="text-[10px] uppercase tracking-widest text-white/70 font-bold mb-2">Arah Utama Keputusan</div>
                <div className="text-2xl font-extrabold mb-1">Hybrid (Kerja + Kuliah)</div>
                <div className="text-xs text-white/90 leading-relaxed max-w-[90%]">Rasional karena kebutuhan finansial mendesak namun potensimu untuk jenjang akademik masih tinggi.</div>
              </div>

              {/* Grid Data Mockup */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-50 border border-surface-100 rounded-xl">
                  <div className="text-[10px] uppercase tracking-widest text-ink-light font-bold mb-1">Kejelasan</div>
                  <div className="text-xl font-bold text-ink">84%</div>
                  <div className="w-full h-1.5 bg-surface-200 rounded-full mt-2 overflow-hidden"><div className="w-[84%] h-full bg-brand-500 rounded-full"></div></div>
                </div>
                <div className="p-4 bg-surface-50 border border-surface-100 rounded-xl flex flex-col justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-ink-light font-bold mb-1">Prioritas</div>
                  <div className="text-sm font-bold text-ink leading-tight">Mulai Freelance</div>
                  <div className="text-[10px] text-ink-light mt-1 font-semibold">Tugas Bulan 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 2. PROBLEM SECTION (Visual Pain Cards) */}
      <section className="py-24 md:py-32 bg-surface-100 border-y border-surface-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
                title: 'Takut Salah Jurusan',
                desc: 'Membuang waktu dan biaya untuk prodi yang ternyata tidak sesuai ekspektasi.'
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
                title: 'Kuliah atau Kerja?',
                desc: 'Bingung mengatur prioritas antara tuntutan finansial atau mengejar gelar akademik.'
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                title: 'Merasa Tidak Punya Arah',
                desc: 'Menunda keputusan karena merasa tidak punya bakat atau *passion* yang spesifik.'
              }
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-surface-200">
                <div className="w-12 h-12 bg-surface-100 text-ink rounded-2xl flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-ink-light text-sm leading-[1.8]">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl border border-surface-200 shadow-sm">
            <p className="text-lg md:text-xl font-bold text-ink text-balance leading-[1.6]">
              KarirGPS membantu mengubah kebingungan tersebut menjadi arah yang jauh lebih jelas dan bisa langsung ditindaklanjuti.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Visual Step Cards) */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Cara kerja yang sangat mudah</h2>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-surface-200 z-0"></div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { n: '1', title: 'Isi Profilmu', desc: 'Jawab pertanyaan interaktif tentang minat, kondisi real, dan tujuanmu.' },
                { n: '2', title: 'Sistem Membaca Pola', desc: 'Sistem AI kami mengalkulasi probabilitas keberhasilan untuk setiap skenario.' },
                { n: '3', title: 'Dapatkan Arah & Roadmap', desc: 'Hasil instant berupa keputusan utama dan langkah konkrit yang bisa dijalankan.' }
              ].map((s, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-surface-50 border-[6px] border-white rounded-full shadow-sm flex items-center justify-center mb-8 relative">
                    <span className="text-6xl font-extrabold text-surface-200 select-none absolute">{s.n}</span>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-surface-100 z-10 flex items-center justify-center text-brand-600 font-bold">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-sm text-ink-light leading-[1.8] max-w-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS (Bento Grid) */}
      <section className="py-24 md:py-32 bg-surface-50 border-y border-surface-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Yang kamu dapatkan</h2>
            <p className="text-ink-light text-lg">Bukan sekadar label, tapi rencana aksi nyata.</p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Benefit 1: Wide Card */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-surface-200 shadow-sm flex flex-col justify-center">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Jalur Utama Keputusan</h3>
              <p className="text-ink-light text-sm leading-[1.8] max-w-md">Kesimpulan tegas yang paling rasional untukmu: apakah sebaiknya memprioritaskan Kuliah, mencari Kerja, atau mengambil jalur Hybrid.</p>
            </div>

            {/* Benefit 2: Square Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-surface-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Alasan Logis</h3>
              <p className="text-ink-light text-sm leading-[1.8]">Penjelasan transparan mengapa sistem merekomendasikan arah tersebut untuk profilmu.</p>
            </div>

            {/* Benefit 3: Square Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-surface-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">3 Rekomendasi</h3>
              <p className="text-ink-light text-sm leading-[1.8]">Opsi spesifik bidang atau jalur yang bisa kamu jadikan target realistis.</p>
            </div>

            {/* Benefit 4: Square Card */}
            <div className="bg-[#FFFBEB] p-8 md:p-10 rounded-3xl border border-[#FDE68A] shadow-sm">
              <div className="w-12 h-12 bg-white/50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Risiko Kegagalan</h3>
              <p className="text-ink-light text-sm leading-[1.8]">Simulasi risiko utama jika kamu memaksakan jalur yang salah.</p>
            </div>

            {/* Benefit 5: Square Premium Card */}
            <div className="bg-ink p-8 md:p-10 rounded-3xl border border-ink shadow-float text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 border border-white/20 text-brand-300 rounded-xl flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Roadmap 12 Bulan</h3>
                <p className="text-white/80 text-sm leading-[1.8]">Panduan step-by-step untuk 12 bulan ke depan yang jelas dan aplikatif.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. REPORT PREVIEW (The Anchor) */}
      <section id="preview" className="py-24 md:py-32 bg-white relative z-10 border-b border-surface-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="text-[11px] font-bold text-brand-600 uppercase tracking-widest mb-4">Preview Hasil</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6 leading-[1.25]">
                Inilah yang akan kamu dapatkan di akhir sesi.
              </h2>
              <p className="text-base text-ink-light leading-[1.8] mb-10">
                KarirGPS memvisualisasikan datamu menjadi dasbor yang sangat terstruktur. Tidak ada lagi hasil tes yang membingungkan. Semua dibuat spesifik, rasional, dan dirancang untuk membantumu melangkah.
              </p>
              <Link href="/auth/register" className="inline-flex bg-ink text-white rounded-full px-8 py-4 text-sm font-bold hover:bg-brand-600 transition-all duration-300 shadow-soft">
                Cek Arah Kariermu
              </Link>
            </div>
            
            <div className="lg:col-span-7">
              {/* Massive Dashboard Mockup */}
              <div className="bg-surface-50 border border-surface-200 rounded-[2rem] p-6 shadow-sm relative overflow-hidden">
                {/* Header Mockup */}
                <div className="border-b border-surface-200 pb-4 mb-6">
                  <div className="w-1/3 h-4 bg-surface-200 rounded mb-2"></div>
                  <div className="w-1/4 h-3 bg-surface-200 rounded"></div>
                </div>

                {/* Hero Block Mockup */}
                <div className="bg-brand-600 rounded-2xl p-8 text-white mb-6">
                  <div className="w-24 h-3 bg-white/30 rounded mb-4"></div>
                  <div className="text-3xl font-extrabold mb-3">Fokus Jalur Karier Profesional</div>
                  <div className="w-3/4 h-2 bg-white/20 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                </div>

                {/* Row Grid Mockup */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-5 rounded-xl border border-surface-200">
                    <div className="w-16 h-2 bg-surface-200 rounded mb-3"></div>
                    <div className="text-xl font-bold text-ink mb-2">Digital Mktg.</div>
                    <div className="w-full h-1 bg-surface-100 rounded-full"><div className="w-4/5 h-full bg-brand-500 rounded-full"></div></div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-surface-200">
                    <div className="w-16 h-2 bg-surface-200 rounded mb-3"></div>
                    <div className="text-xl font-bold text-ink mb-2">Data Analyst</div>
                    <div className="w-full h-1 bg-surface-100 rounded-full"><div className="w-3/5 h-full bg-brand-500 rounded-full"></div></div>
                  </div>
                </div>

                {/* Lock Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-8 backdrop-blur-[2px]">
                  <div className="bg-white border border-surface-200 shadow-float px-6 py-4 rounded-full flex items-center gap-3">
                    <span className="text-lg">🔒</span>
                    <span className="text-sm font-bold text-ink">Premium Report Locked</span>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF SECTION */}
      <section className="py-24 bg-surface-50 relative z-10 border-b border-surface-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-ink mb-6">Dipercaya untuk mengambil keputusan penting</h2>
            {/* Stat Row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-surface-200 py-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-brand-600 mb-1">10k+</div>
                <div className="text-xs font-bold text-ink-light uppercase tracking-widest">Siswa Dianalisis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-brand-600 mb-1">92%</div>
                <div className="text-xs font-bold text-ink-light uppercase tracking-widest">Merasa Lebih Yakin</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-brand-600 mb-1">3.5k+</div>
                <div className="text-xs font-bold text-ink-light uppercase tracking-widest">Orang Tua Terbantu</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial Cards */}
            <div className="bg-white p-8 rounded-2xl border border-surface-200 shadow-sm">
              <p className="text-ink font-medium leading-[1.7] mb-6">&ldquo;Awalnya bingung banget mau kuliah atau kerja. Laporan ini ngasih aku plan yang jelas buat coba freelance dulu setahun tanpa ngerasa bersalah.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700 text-sm">RA</div>
                <div>
                  <div className="text-sm font-bold text-ink">Raka A.</div>
                  <div className="text-xs text-ink-light">Siswa SMK - Lulusan 2024</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-surface-200 shadow-sm">
              <p className="text-ink font-medium leading-[1.7] mb-6">&ldquo;Reportnya bikin saya bisa ngobrol rasional sama anak. Nggak cuma berasumsi, tapi kita jadi tahu mana jalan yang secara finansial dan skill masuk akal buat dia.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700 text-sm">B</div>
                <div>
                  <div className="text-sm font-bold text-ink">Bapak Budi</div>
                  <div className="text-xs text-ink-light">Orang Tua Siswa SMA</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-200 shadow-sm">
              <p className="text-ink font-medium leading-[1.7] mb-6">&ldquo;Jauh lebih ngebantu dibanding tes psikologi standar yang cuma ngasih tau kepribadian. Ini ngasih roadmap bulan demi bulan yang bisa dipraktekkan.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700 text-sm">NS</div>
                <div>
                  <div className="text-sm font-bold text-ink">Nabila S.</div>
                  <div className="text-xs text-ink-light">Gap Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING SECTION (2 High Contrast Cards) */}
      <section className="py-24 md:py-32 bg-white relative z-10 border-b border-surface-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Investasi sekali, jelas selamanya.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Card */}
            <div className="bg-surface-50 p-10 rounded-3xl border border-surface-200 flex flex-col">
              <h3 className="text-2xl font-bold text-ink mb-2">Mulai Gratis</h3>
              <p className="text-sm text-ink-light mb-8">Cocok untuk mulai memahami posisi kamu sekarang.</p>
              
              <ul className="space-y-5 mb-10 flex-1">
                <li className="flex items-start gap-3">
                  <div className="text-brand-500 font-bold shrink-0 mt-0.5">✓</div>
                  <span className="text-sm text-ink font-medium">Isi analisis profil secara penuh</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-brand-500 font-bold shrink-0 mt-0.5">✓</div>
                  <span className="text-sm text-ink font-medium">Dapat kesimpulan arah utama</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-brand-500 font-bold shrink-0 mt-0.5">✓</div>
                  <span className="text-sm text-ink font-medium">Laporan disimpan di dashboard</span>
                </li>
              </ul>
              <Link href="/auth/register" className="block text-center w-full bg-white border border-surface-200 text-ink rounded-full px-6 py-4 text-sm font-bold hover:bg-surface-100 transition-colors">
                Mulai Tes Gratis
              </Link>
            </div>

            {/* Premium Card */}
            <div className="bg-ink text-white p-10 rounded-3xl border border-ink shadow-float relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl">Rekomendasi</div>
              
              <h3 className="text-2xl font-bold mb-2">Laporan Lengkap</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold">Rp 59.000</span>
              </div>
              
              <ul className="space-y-5 mb-10 flex-1">
                {[
                  'Keputusan rasional (Kuliah/Kerja/Hybrid)',
                  'Alasan transparan & logis',
                  '3 target karier realistis',
                  'Roadmap eksekusi 6–12 bulan',
                  'Simulasi risiko (Blind-spots)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="text-brand-400 font-bold shrink-0 mt-0.5">✓</div>
                    <span className="text-white/90 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/auth/register" className="block text-center w-full bg-brand-600 text-white rounded-full px-6 py-4 text-sm font-bold hover:bg-brand-500 transition-colors shadow-soft">
                Buka Laporan Lengkap
              </Link>
              <div className="text-center mt-4 text-xs text-white/50 font-medium">Bayar sekali. Tanpa langganan.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Clean Accordion) */}
      <section className="py-24 bg-surface-50 relative z-10 border-b border-surface-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink tracking-tight">Hal yang sering ditanyakan</h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((f, i) => (
              <details key={i} className="group bg-white border border-surface-200 rounded-2xl p-6 cursor-pointer open:shadow-sm transition-all">
                <summary className="flex items-center justify-between font-bold text-ink text-base md:text-lg outline-none select-none">
                  {f.q}
                  <span className="text-brand-500 transition-transform group-open:rotate-180 shrink-0 ml-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-surface-100 text-sm md:text-base text-ink-light leading-[1.8]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-32 bg-ink text-white relative z-10 text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/2"></div>
        
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Arah kariermu tidak harus ditebak.
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-[1.8] mb-10">
            Mulai analisis gratis hari ini dan dapatkan kejelasan langkah pertamamu dalam waktu kurang dari 10 menit.
          </p>
          <Link href="/auth/register" className="inline-block bg-brand-600 text-white rounded-full px-12 py-5 text-base font-bold hover:bg-brand-500 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(47,107,255,0.6)]">
            Temukan Jalurmu Sekarang
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-12 relative z-10 border-t border-surface-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold text-ink-light">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
            </div>
            <span className="text-ink">KarirGPS</span>
          </div>
          <p>© {new Date().getFullYear()} KarirGPS. Career Decision Engine.</p>
        </div>
      </footer>

    </div>
  )
}
