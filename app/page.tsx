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
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-float transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">KarirGPS</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/auth/login" className="hidden sm:block text-sm font-medium text-ink-light hover:text-brand-600 transition-colors">
              Masuk
            </Link>
            <Link href="/auth/register" className="bg-ink text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-brand-600 hover:-translate-y-0.5 transition-all duration-300 shadow-soft hover:shadow-float">
              Mulai Analisis Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <main className="pt-40 pb-24 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-xs font-semibold mb-8 border border-brand-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Dalam 10 menit, temukan kejelasan langkahmu
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.15] text-balance">
            Bingung Setelah Lulus SMA/SMK? Temukan Arah Karier yang <span className="text-gradient">Paling Masuk Akal</span> Buat Kamu.
          </h1>

          <p className="text-lg md:text-xl text-ink-light mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            KarirGPS membantu kamu memilih jalur yang paling cocok — kuliah, kerja, atau jalur hybrid — berdasarkan minat, kekuatan, kondisi, dan tujuanmu. Bukan tes kepribadian generik, tapi analisis yang dirancang untuk membantu kamu mengambil keputusan nyata.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mb-6">
            <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)]">
              Mulai Analisis Gratis
            </Link>
            <a href="#output-preview" className="w-full sm:w-auto bg-white border border-surface-200 text-ink rounded-full px-8 py-4 text-base font-medium hover:bg-surface-50 hover:border-surface-300 transition-all duration-300">
              Lihat Contoh Hasil
            </a>
          </div>
          
          <p className="text-sm font-medium text-ink-light/80">
            Gratis untuk mulai. Bayar sekali saja jika ingin buka laporan lengkap. Tanpa langganan.
          </p>
        </div>
      </main>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-white relative z-10 border-y border-surface-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-ink mb-8 tracking-tight leading-tight text-balance">
            Menentukan arah setelah lulus itu sulit kalau kamu cuma disuruh <span className="italic text-brand-600">“pilih yang terbaik”</span> tanpa tahu terbaiknya buat siapa.
          </h2>
          <div className="text-lg text-ink-light leading-relaxed space-y-6 max-w-2xl mx-auto text-left">
            <p>Banyak siswa bingung bukan karena tidak punya potensi, tapi karena pilihannya terlalu banyak. Kuliah takut salah jurusan. Kerja takut mentok. Gap year takut tertinggal.</p>
            <p>Akhirnya, banyak yang memilih karena ikut teman, ikut tekanan, atau menunda terus sampai makin stres.</p>
            <p className="font-semibold text-ink p-6 bg-surface-50 rounded-2xl border border-surface-200">
              KarirGPS membantu kamu berhenti menebak-nebak. Kamu akan dapat arah yang lebih jelas, alasan di baliknya, dan langkah realistis yang bisa kamu ambil setelah ini.
            </p>
          </div>
        </div>
      </section>

      {/* 3. POSITIONING SECTION */}
      <section className="py-24 relative z-10 bg-ink text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-4">Pembeda Kami</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Bukan sekadar tes &quot;kamu cocok jadi apa&quot;.</h3>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
            KarirGPS membantu kamu memetakan keputusan karier secara lebih logis dan terstruktur dengan melihat kombinasi dari minat, kekuatan, kesiapan, kondisi nyata, dan tujuan pribadi.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-brand-300">
            Jadi hasilnya bukan cuma label seperti &quot;cocok di bidang X&quot;, tapi arah yang bisa benar-benar dijalankan di dunia nyata.
          </p>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section id="cara-kerja" className="py-24 relative z-10 bg-surface-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Langkah Mudah</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Cara kerjanya sederhana.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { n: '1', title: 'Isi analisis singkat tentang dirimu', desc: 'Jawab pertanyaan tentang minat, kebiasaan, preferensi belajar atau kerja, dan kondisi yang relevan.' },
              { n: '2', title: 'Kami petakan arah paling rasional', desc: 'Sistem membaca pola jawabanmu untuk melihat jalur yang paling cocok dan paling realistis untuk dieksekusi.' },
              { n: '3', title: 'Dapatkan hasil yang bisa ditindaklanjuti', desc: 'Kamu akan tahu jalur utama yang direkomendasikan, alasan di baliknya, pilihan alternatif, dan langkah berikutnya.' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col text-center p-8 bg-white border border-surface-200 rounded-3xl hover:shadow-soft transition-all duration-300">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-50 flex items-center justify-center text-2xl font-bold text-brand-600 mb-6 shadow-sm">
                  {s.n}
                </div>
                <h4 className="text-xl font-bold text-ink mb-3">{s.title}</h4>
                <p className="text-ink-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/auth/register" className="inline-flex bg-ink text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-brand-600 hover:-translate-y-1 transition-all duration-300 shadow-soft">
              Coba Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-24 relative z-10 bg-white border-y border-surface-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Keuntungan</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">Yang kamu dapatkan bukan cuma hasil tes, tapi arah yang lebih jelas.</h3>
            <p className="text-lg text-ink-light">Dengan KarirGPS, kamu akan mendapatkan:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { title: 'Keputusan utama yang paling cocok untukmu', desc: 'Apakah kamu lebih masuk akal untuk fokus ke kuliah, kerja, atau jalur hybrid.' },
              { title: 'Alasan kenapa jalur itu paling relevan', desc: 'Supaya kamu paham logikanya, bukan sekadar menerima hasil mentah tanpa penjelasan.' },
              { title: 'Tiga rekomendasi jalur yang dipertimbangkan', desc: 'Termasuk opsi utama dan alternatif yang masih realistis untuk dijalankan.' },
              { title: 'Roadmap 6–12 bulan ke depan', desc: 'Agar kamu tahu harus mulai dari mana, bukan cuma disuruh “semangat”.' },
              { title: 'Risiko jika mengambil jalur yang kurang cocok', desc: 'Biar kamu bisa menghindari salah langkah sejak awal sebelum menyesal di kemudian hari.' }
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-surface-50 border border-surface-200 hover:border-brand-300 transition-colors">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-1">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3 3L11 1" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-2">{b.title}</h4>
                  <p className="text-ink-light leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUTPUT PREVIEW SECTION */}
      <section id="output-preview" className="py-24 relative z-10 bg-surface-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Preview Hasil</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Lihat seperti apa hasilnya.</h3>
            <p className="text-ink-light text-lg leading-relaxed mb-8">
              Bayangkan setelah selesai analisis, kamu langsung mendapatkan ringkasan yang mudah dipahami seperti ini. KarirGPS membantumu melihat gambaran besarnya sebelum kamu telanjur mengambil keputusan yang salah.
            </p>
            
            <Link href="/auth/register" className="inline-flex bg-brand-600 text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-soft">
              Lihat Arahmu Sekarang
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-transparent rounded-3xl blur-xl transform translate-y-4 translate-x-4"></div>
            <div className="bg-white border border-surface-200 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10 transform md:-rotate-1 hover:rotate-0 transition-all duration-500">
              
              <div className="mb-6 pb-6 border-b border-surface-200">
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-1 block">Jalur Utama Rekomendasi</span>
                <div className="text-2xl font-bold text-ink">Kuliah Terstruktur</div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-ink-light uppercase tracking-widest mb-2">Kenapa ini cocok:</div>
                  <div className="text-sm text-ink leading-relaxed font-medium bg-surface-50 p-4 rounded-xl">
                    Kamu kuat di pembelajaran terstruktur, suka mengeksplorasi ide, dan punya potensi berkembang lebih maksimal lewat jalur akademik yang tepat dibanding langsung masuk ke pasar kerja kasar.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-ink-light uppercase tracking-widest mb-2">Alternatif Fleksibel:</div>
                  <div className="flex items-center gap-2 text-sm text-ink font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Kuliah sambil freelance / magang
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink font-medium mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Langsung kerja di bidang operasional tertentu
                  </div>
                </div>

                <div className="p-4 bg-brand-50 border border-brand-100 rounded-xl">
                  <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">Langkah 30 Hari:</div>
                  <div className="text-sm text-brand-900 font-medium leading-relaxed">
                    Riset jurusan prioritas, shortlist kampus yang sesuai budget, evaluasi biaya hidup, dan mulai bangun skill pendukung (seperti bahasa Inggris / dasar komputer).
                  </div>
                </div>

                <div className="p-4 border-l-4 border-red-500 bg-red-50/50 rounded-r-xl">
                  <div className="text-xs font-bold text-red-800 uppercase tracking-widest mb-1">Risiko Utama:</div>
                  <div className="text-sm text-red-900 font-medium">
                    Salah pilih jurusan murni karena ikut teman atau memenuhi ekspektasi orang lain.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. URGENCY & PARENT ANGLE SECTION */}
      <section className="py-24 bg-white relative z-10 border-t border-surface-200">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="bg-surface-50 p-8 rounded-3xl border border-surface-200">
            <h3 className="text-2xl font-bold text-ink mb-4">Semakin lama ditunda...</h3>
            <p className="text-ink-light leading-relaxed mb-4">
              Semakin besar kemungkinan kamu memilih karena tekanan — bukan karena arah yang benar-benar cocok.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              Banyak orang salah langkah bukan karena kurang pintar, tapi karena terlalu lama bingung. Akhirnya keputusan diambil saat sudah mepet, panik, atau sekadar ikut arus.
            </p>
            <p className="font-semibold text-brand-700">
              Mulai dari beberapa menit hari ini bisa membuat langkahmu jauh lebih jelas.
            </p>
          </div>

          <div className="bg-brand-900 text-white p-8 rounded-3xl border border-brand-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Untuk Orang Tua</h3>
            <p className="text-white/80 leading-relaxed mb-4 relative z-10">
              Tidak semua anak siap menjawab pertanyaan <em>"mau jadi apa?"</em> dengan cepat. Kadang mereka bukan tidak punya potensi, tapi belum punya peta.
            </p>
            <p className="text-white/80 leading-relaxed relative z-10">
              KarirGPS bisa menjadi titik awal diskusi yang lebih objektif antara anak dan orang tua, supaya keputusan setelah lulus tidak hanya berdasarkan asumsi atau ikut-ikutan.
            </p>
          </div>

        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section className="py-24 bg-surface-100 relative z-10 border-y border-surface-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Investasi Masa Depan</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Mulai gratis. Buka penuh bila terbukti membantu.</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-3xl border border-surface-200 shadow-sm flex flex-col">
              <h4 className="text-2xl font-bold text-ink mb-2">Gratis</h4>
              <p className="text-ink-light mb-8">Cocok untuk mulai memahami posisi kamu sekarang.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">✓</div>
                  <span className="text-ink font-medium">Isi analisis awal secara penuh</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">✓</div>
                  <span className="text-ink font-medium">Dapat gambaran dasar arah kariermu</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">✓</div>
                  <span className="text-ink font-medium">Disimpan di dashboard selamanya</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-surface-100">
                <span className="text-sm text-ink-light">Tidak perlu kartu kredit.</span>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-ink text-white p-8 rounded-3xl border border-ink shadow-2xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl">Paling Bernilai</div>
              
              <h4 className="text-2xl font-bold mb-2">Laporan Lengkap</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-extrabold">Rp 59.000</span>
                <span className="text-white/60 text-sm">/ sekali bayar</span>
              </div>
              <p className="text-white/80 mb-8 text-sm leading-relaxed border-b border-white/10 pb-6">
                Satu keputusan yang lebih jelas hari ini bisa menyelamatkan kamu dari salah langkah berbulan-bulan, bahkan bertahun-tahun.
              </p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Keputusan utama yang direkomendasikan',
                  'Penjelasan kenapa jalur itu cocok',
                  '3 rekomendasi jalur yang spesifik',
                  'Roadmap langkah demi langkah 6–12 bulan',
                  'Risiko spesifik salah arah untukmu',
                  'Akses selamanya tanpa biaya langganan'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">✓</div>
                    <span className="text-white/90 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/auth/register" className="block text-center w-full bg-brand-600 text-white rounded-full px-6 py-4 text-sm font-bold hover:bg-brand-500 transition-colors shadow-[0_0_20px_rgba(29,158,117,0.3)]">
                Mulai Gratis Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Hal yang sering ditanyakan</h3>
          </div>

          <div className="space-y-4">
            {FAQ.map((f, i) => (
              <details key={i} className="group bg-white border border-surface-200 rounded-2xl p-6 cursor-pointer open:shadow-sm transition-all">
                <summary className="flex items-center justify-between font-bold text-ink text-lg outline-none select-none">
                  {f.q}
                  <span className="text-brand-500 transition-transform group-open:rotate-180 shrink-0 ml-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-surface-100 text-ink-light leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 bg-ink text-white relative z-10 text-center border-t border-surface-200 overflow-hidden">
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[800px] h-[300px] bg-brand-500/20 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
            Kamu tidak harus punya semua jawaban sekarang. Tapi kamu bisa mulai punya arah hari ini.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Kalau kamu sedang bingung antara kuliah, kerja, atau jalur lain setelah lulus, KarirGPS bisa membantu kamu melihat pilihanmu dengan lebih jernih. Mulai gratis sekarang, pahami arahmu, lalu putuskan langkah berikutnya dengan lebih yakin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-10 py-4 text-base font-semibold hover:bg-brand-500 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(29,158,117,0.6)]">
              Mulai Analisis Gratis
            </Link>
            <a href="#output-preview" className="w-full sm:w-auto bg-white/10 border border-white/20 text-white rounded-full px-10 py-4 text-base font-medium hover:bg-white/20 transition-all duration-300">
              Lihat Contoh Hasil
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-surface-200 bg-white py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-ink-light">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-md flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 14 14" fill="white">
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
