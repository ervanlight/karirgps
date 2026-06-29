import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KarirGPS - Temukan Arah Karier yang Paling Masuk Akal Buat Kamu',
  description: 'KarirGPS membantu kamu memilih jalur yang paling cocok — kuliah, kerja, atau jalur hybrid — berdasarkan minat, kekuatan, kondisi, dan tujuanmu.',
}

const FAQ = [
  { q: 'Apakah ini tes psikologi?', a: 'Bukan. KarirGPS bukan pengganti tes psikologi profesional. Ini adalah alat bantu analisis arah karier untuk membantu kamu melihat opsi yang paling masuk akal berdasarkan profil dan kondisi kamu saat ini.' },
  { q: 'Apakah hasilnya pasti 100% benar?', a: 'Tidak ada alat yang bisa menjamin masa depanmu 100%. Tapi KarirGPS membantu kamu mengambil keputusan dengan dasar yang lebih jelas dibanding sekadar menebak, ikut teman, atau ikut tekanan sekitar.' },
  { q: 'Kalau aku masih bingung setelah lihat hasilnya?', a: 'Itu wajar. Hasil KarirGPS bisa jadi titik awal yang lebih terarah untuk diskusi, riset lanjutan, atau ngobrol dengan orang tua dan guru BK.' },
  { q: 'Apakah aku harus bayar dari awal?', a: 'Tidak. Kamu bisa mulai gratis. Kalau kamu merasa hasil awalnya relevan dan ingin melihat analisis lengkapnya, baru buka full report.' },
  { q: 'Ini cocok untuk siapa?', a: 'Cocok untuk siswa SMA/SMK, gap year, atau siapa pun yang sedang bingung menentukan langkah setelah lulus.' },
  { q: 'Kenapa harus coba sekarang?', a: 'Karena makin lama kamu menunda, makin besar kemungkinan kamu mengambil keputusan karena tekanan, bukan karena arah yang benar-benar cocok.' }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-50 text-ink font-sans overflow-x-hidden relative selection:bg-brand-500 selection:text-white">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-300/30 rounded-full blur-[100px] animate-pulse-slow pointer-events-none -z-10"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-accent-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none -z-10" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass border-b border-surface-200/50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-float transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">KarirGPS</span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/auth/login" className="hidden sm:block text-base font-medium text-ink-light hover:text-brand-600 transition-colors">
              Masuk
            </Link>
            <Link href="/auth/register" className="bg-ink text-white rounded-full px-7 py-3 text-sm font-semibold hover:bg-brand-600 hover:-translate-y-0.5 transition-all duration-300 shadow-soft hover:shadow-float">
              Mulai Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <main className="pt-48 pb-32 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <div className="animate-fade-up">
          {/* Sub-headline / Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 rounded-full px-5 py-2 text-sm font-bold mb-10 border border-brand-100 shadow-sm tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse"></span>
            Bingung Setelah Lulus SMA/SMK?
          </div>

          {/* Main Headline (H1) */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-8 leading-[1.2] text-balance">
            Temukan Arah Karier yang <span className="text-brand-600">Paling Masuk Akal</span> Buat Kamu.
          </h1>

          {/* Body Text (P) */}
          <p className="text-base md:text-lg text-ink-light mb-14 max-w-2xl mx-auto leading-[1.8] text-balance">
            KarirGPS membantu kamu memilih jalur yang paling cocok — kuliah, kerja, atau jalur hybrid — berdasarkan minat, kekuatan, kondisi, dan tujuanmu. Bukan sekadar tes kepribadian generik, melainkan analisis untuk mengambil keputusan nyata.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto mb-8">
            <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-10 py-4 text-base font-bold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(29,158,117,0.6)]">
              Mulai Analisis Gratis
            </Link>
            <a href="#output-preview" className="w-full sm:w-auto bg-white border-2 border-surface-200 text-ink rounded-full px-10 py-4 text-base font-bold hover:bg-surface-50 hover:border-surface-300 transition-all duration-300">
              Lihat Contoh Hasil
            </a>
          </div>
          
          <p className="text-sm font-medium text-ink-light/80">
            Gratis untuk mulai. Bayar sekali saja jika ingin buka laporan lengkap. Tanpa langganan.
          </p>
        </div>
      </main>

      {/* 2. PROBLEM SECTION */}
      <section className="py-32 bg-white relative z-10 border-y border-surface-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Section Headline (H2) */}
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 tracking-tight leading-[1.3] text-balance">
            Menentukan arah setelah lulus itu sulit kalau kamu cuma disuruh <span className="italic text-brand-600">“pilih yang terbaik”</span> tanpa tahu terbaiknya buat siapa.
          </h2>
          {/* Body Text (P) */}
          <div className="text-base md:text-lg text-ink-light leading-[1.8] space-y-8 max-w-2xl mx-auto text-left">
            <p>Banyak siswa bingung bukan karena tidak punya potensi, tapi karena pilihannya terlalu banyak. Kuliah takut salah jurusan. Kerja takut mentok. Gap year takut tertinggal.</p>
            <p>Akhirnya, banyak yang memilih karena ikut teman, ikut tekanan, atau menunda terus sampai makin stres.</p>
            <div className="p-8 bg-surface-50 rounded-2xl border border-surface-200 shadow-sm mt-4">
              <p className="font-bold text-ink m-0">
                KarirGPS membantu kamu berhenti menebak-nebak. Kamu akan dapat arah yang lebih jelas, alasan di baliknya, dan langkah realistis yang bisa kamu ambil setelah ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POSITIONING SECTION */}
      <section className="py-32 relative z-10 bg-ink text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-6">Pembeda Kami</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 leading-[1.2]">Bukan sekadar tes &quot;kamu cocok jadi apa&quot;.</h2>
          <p className="text-base md:text-lg text-white/80 leading-[1.8] mb-8">
            KarirGPS membantu kamu memetakan keputusan karier secara lebih logis dan terstruktur dengan melihat kombinasi dari minat, kekuatan, kesiapan, kondisi nyata, dan tujuan pribadi.
          </p>
          <p className="text-xl md:text-2xl font-bold text-brand-300 leading-[1.5]">
            Jadi hasilnya bukan cuma label seperti &quot;cocok di bidang X&quot;, tapi arah yang bisa benar-benar dijalankan di dunia nyata.
          </p>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section id="cara-kerja" className="py-32 relative z-10 bg-surface-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Langkah Mudah</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Cara kerjanya sederhana.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { n: '1', title: 'Isi analisis singkat tentang dirimu', desc: 'Jawab pertanyaan tentang minat, kebiasaan, preferensi belajar atau kerja, dan kondisi yang relevan.' },
              { n: '2', title: 'Kami petakan arah paling rasional', desc: 'Sistem membaca pola jawabanmu untuk melihat jalur yang paling cocok dan paling realistis untuk dieksekusi.' },
              { n: '3', title: 'Dapatkan hasil yang bisa ditindaklanjuti', desc: 'Kamu akan tahu jalur utama yang direkomendasikan, alasan di baliknya, pilihan alternatif, dan langkah berikutnya.' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col text-center p-10 bg-white border border-surface-200 rounded-3xl hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 flex items-center justify-center text-2xl font-bold text-brand-600 mb-8 shadow-sm">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-ink mb-4">{s.title}</h3>
                <p className="text-base text-ink-light leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/auth/register" className="inline-flex bg-ink text-white rounded-full px-10 py-4 text-base font-bold hover:bg-brand-600 hover:-translate-y-1 transition-all duration-300 shadow-soft">
              Coba Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-32 relative z-10 bg-white border-y border-surface-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <div className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Keuntungan</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-8 leading-[1.3]">
              Yang kamu dapatkan bukan cuma hasil tes, tapi arah yang lebih jelas.
            </h2>
            <p className="text-base md:text-lg text-ink-light leading-[1.8]">Dengan KarirGPS, kamu akan mendapatkan:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: 'Keputusan utama yang paling cocok untukmu', desc: 'Apakah kamu lebih masuk akal untuk fokus ke kuliah, kerja, atau jalur hybrid.' },
              { title: 'Alasan kenapa jalur itu paling relevan', desc: 'Supaya kamu paham logikanya, bukan sekadar menerima hasil mentah tanpa penjelasan.' },
              { title: 'Tiga rekomendasi jalur yang dipertimbangkan', desc: 'Termasuk opsi utama dan alternatif yang masih realistis untuk dijalankan.' },
              { title: 'Roadmap 6–12 bulan ke depan', desc: 'Agar kamu tahu harus mulai dari mana, bukan cuma disuruh “semangat”.' },
              { title: 'Risiko jika mengambil jalur yang kurang cocok', desc: 'Biar kamu bisa menghindari salah langkah sejak awal sebelum menyesal di kemudian hari.' }
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-5 p-8 rounded-2xl bg-surface-50 border border-surface-200 hover:border-brand-300 transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-1">
                  <svg width="14" height="12" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3 3L11 1" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-3 leading-[1.4]">{b.title}</h3>
                  <p className="text-base text-ink-light leading-[1.8]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUTPUT PREVIEW SECTION */}
      <section id="output-preview" className="py-32 relative z-10 bg-surface-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Preview Hasil</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-[1.2]">Lihat seperti apa hasilnya.</h2>
            <p className="text-ink-light text-base md:text-lg leading-[1.8] mb-10">
              Bayangkan setelah selesai analisis, kamu langsung mendapatkan ringkasan yang mudah dipahami seperti ini. KarirGPS membantumu melihat gambaran besarnya sebelum kamu telanjur mengambil keputusan yang salah.
            </p>
            
            <Link href="/auth/register" className="inline-flex bg-brand-600 text-white rounded-full px-10 py-4 text-base font-bold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-soft">
              Lihat Arahmu Sekarang
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-transparent rounded-3xl blur-2xl transform translate-y-6 translate-x-6"></div>
            <div className="bg-white border border-surface-200 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 transform md:-rotate-1 hover:rotate-0 transition-all duration-500">
              
              <div className="mb-8 pb-8 border-b border-surface-200">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2 block">Jalur Utama Rekomendasi</span>
                <div className="text-3xl font-bold text-ink">Kuliah Terstruktur</div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="text-xs font-bold text-ink-light uppercase tracking-widest mb-3">Kenapa ini cocok:</div>
                  <div className="text-base text-ink leading-[1.8] font-medium bg-surface-50 p-5 rounded-xl border border-surface-100">
                    Kamu kuat di pembelajaran terstruktur, suka mengeksplorasi ide, dan punya potensi berkembang lebih maksimal lewat jalur akademik yang tepat dibanding langsung masuk ke pasar kerja kasar.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-ink-light uppercase tracking-widest mb-3">Alternatif Fleksibel:</div>
                  <div className="flex items-center gap-3 text-base text-ink font-medium mb-3">
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                    Kuliah sambil freelance / magang
                  </div>
                  <div className="flex items-center gap-3 text-base text-ink font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                    Langsung kerja di bidang operasional tertentu
                  </div>
                </div>

                <div className="p-5 bg-brand-50 border border-brand-100 rounded-xl">
                  <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3">Langkah 30 Hari:</div>
                  <div className="text-base text-brand-900 font-medium leading-[1.8]">
                    Riset jurusan prioritas, shortlist kampus yang sesuai budget, evaluasi biaya hidup, dan mulai bangun skill pendukung (seperti bahasa Inggris / dasar komputer).
                  </div>
                </div>

                <div className="p-5 border-l-4 border-red-500 bg-red-50/50 rounded-r-xl">
                  <div className="text-xs font-bold text-red-800 uppercase tracking-widest mb-2">Risiko Utama:</div>
                  <div className="text-base text-red-900 font-medium leading-[1.6]">
                    Salah pilih jurusan murni karena ikut teman atau memenuhi ekspektasi orang lain.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. URGENCY & PARENT ANGLE SECTION */}
      <section className="py-32 bg-white relative z-10 border-t border-surface-200">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="bg-surface-50 p-10 md:p-12 rounded-3xl border border-surface-200">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 leading-[1.3]">Semakin lama ditunda...</h2>
            <div className="text-base md:text-lg text-ink-light leading-[1.8] space-y-6">
              <p>
                Semakin besar kemungkinan kamu memilih karena tekanan — bukan karena arah yang benar-benar cocok.
              </p>
              <p>
                Banyak orang salah langkah bukan karena kurang pintar, tapi karena terlalu lama bingung. Akhirnya keputusan diambil saat sudah mepet, panik, atau sekadar ikut arus.
              </p>
              <p className="font-bold text-brand-700">
                Mulai dari beberapa menit hari ini bisa membuat langkahmu jauh lebih jelas.
              </p>
            </div>
          </div>

          <div className="bg-brand-900 text-white p-10 md:p-12 rounded-3xl border border-brand-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl"></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Untuk Orang Tua</h2>
            <div className="text-base md:text-lg text-white/80 leading-[1.8] space-y-6 relative z-10">
              <p>
                Tidak semua anak siap menjawab pertanyaan <em>"mau jadi apa?"</em> dengan cepat. Kadang mereka bukan tidak punya potensi, tapi belum punya peta.
              </p>
              <p>
                KarirGPS bisa menjadi titik awal diskusi yang lebih objektif antara anak dan orang tua, supaya keputusan setelah lulus tidak hanya berdasarkan asumsi atau ikut-ikutan.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section className="py-32 bg-surface-100 relative z-10 border-y border-surface-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Investasi Masa Depan</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Mulai gratis. Buka penuh bila terbukti membantu.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white p-10 rounded-3xl border border-surface-200 shadow-sm flex flex-col">
              <h3 className="text-3xl font-bold text-ink mb-3">Gratis</h3>
              <p className="text-base text-ink-light mb-10 leading-[1.6]">Cocok untuk mulai memahami posisi kamu sekarang.</p>
              
              <ul className="space-y-6 mb-10 flex-1">
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold shrink-0">✓</div>
                  <span className="text-base text-ink font-medium">Isi analisis awal secara penuh</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold shrink-0">✓</div>
                  <span className="text-base text-ink font-medium">Dapat gambaran dasar arah kariermu</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold shrink-0">✓</div>
                  <span className="text-base text-ink font-medium">Disimpan di dashboard selamanya</span>
                </li>
              </ul>
              
              <div className="pt-8 border-t border-surface-100">
                <span className="text-sm font-medium text-ink-light">Tidak perlu kartu kredit.</span>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-ink text-white p-10 rounded-3xl border border-ink shadow-2xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-bl-2xl rounded-tr-3xl">Paling Bernilai</div>
              
              <h3 className="text-3xl font-bold mb-3">Laporan Lengkap</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-extrabold">Rp 59.000</span>
                <span className="text-white/60 text-base font-medium">/ sekali bayar</span>
              </div>
              <p className="text-white/80 mb-10 text-base leading-[1.8] border-b border-white/10 pb-8">
                Satu keputusan yang lebih jelas hari ini bisa menyelamatkan kamu dari salah langkah berbulan-bulan, bahkan bertahun-tahun.
              </p>
              
              <ul className="space-y-5 mb-10 flex-1">
                {[
                  'Keputusan utama yang direkomendasikan',
                  'Penjelasan kenapa jalur itu cocok',
                  '3 rekomendasi jalur yang spesifik',
                  'Roadmap langkah demi langkah 6–12 bulan',
                  'Risiko spesifik salah arah untukmu',
                  'Akses selamanya tanpa biaya langganan'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold shrink-0 mt-0.5">✓</div>
                    <span className="text-white/90 font-medium text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/auth/register" className="block text-center w-full bg-brand-600 text-white rounded-full px-8 py-5 text-base font-bold hover:bg-brand-500 transition-colors shadow-[0_0_20px_rgba(29,158,117,0.3)]">
                Mulai Gratis Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Hal yang sering ditanyakan</h2>
          </div>

          <div className="space-y-5">
            {FAQ.map((f, i) => (
              <details key={i} className="group bg-white border border-surface-200 rounded-2xl p-8 cursor-pointer open:shadow-md transition-all">
                <summary className="flex items-center justify-between font-bold text-ink text-lg outline-none select-none">
                  {f.q}
                  <span className="text-brand-500 transition-transform group-open:rotate-180 shrink-0 ml-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="mt-6 pt-6 border-t border-surface-100 text-base text-ink-light leading-[1.8]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 bg-ink text-white relative z-10 text-center border-t border-surface-200 overflow-hidden">
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[800px] h-[300px] bg-brand-500/20 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 leading-[1.25] text-balance">
            Kamu tidak harus punya semua jawaban sekarang. Tapi kamu bisa mulai punya arah hari ini.
          </h2>
          <p className="text-base md:text-xl text-white/70 leading-[1.8] mb-14 max-w-3xl mx-auto">
            Kalau kamu sedang bingung antara kuliah, kerja, atau jalur lain setelah lulus, KarirGPS bisa membantu kamu melihat pilihanmu dengan lebih jernih. Mulai gratis sekarang, pahami arahmu, lalu putuskan langkah berikutnya dengan lebih yakin.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-12 py-5 text-base font-bold hover:bg-brand-500 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(29,158,117,0.6)]">
              Mulai Analisis Gratis
            </Link>
            <a href="#output-preview" className="w-full sm:w-auto bg-white/10 border-2 border-white/20 text-white rounded-full px-12 py-5 text-base font-bold hover:bg-white/20 transition-all duration-300">
              Lihat Contoh Hasil
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-surface-200 bg-white py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-base font-medium text-ink-light">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-lg flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="font-bold text-ink">KarirGPS</span>
          </div>
          <p>© {new Date().getFullYear()} KarirGPS. Membantu menentukan arah yang paling masuk akal.</p>
        </div>
      </footer>

    </div>
  )
}
