import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KarirGPS - Temukan Arah Karier Terbaikmu',
  description: 'Membantu siswa SMA/SMK memetakan arah karier (kuliah atau kerja) secara logis dan terstruktur berdasarkan profil unik mereka.',
}

const FAQ = [
  { q: 'Apakah ini tes psikologi?', a: 'Tidak. KarirGPS adalah alat bantu pemetaan arah karier berbasis kombinasi profil. Untuk kebutuhan klinis atau psikologis mendalam, kami tetap menyarankan konsultasi dengan psikolog profesional.' },
  { q: 'Apakah hasilnya akurat?', a: 'Hasilnya dirancang se-realistis mungkin berdasarkan jawabanmu tentang minat, cara berpikir, nilai kerja, dan kondisi finansial saat ini.' },
  { q: 'Apakah cocok untuk semua jurusan?', a: 'Sangat cocok untuk siswa SMA, SMK, maupun MA yang sedang bingung menentukan langkah setelah lulus, baik itu ingin kuliah, kerja, maupun mengambil sertifikasi/bootcamp.' },
  { q: 'Bagaimana prosesnya?', a: 'Kamu hanya perlu menjawab beberapa pertanyaan singkat dan terpandu mengenai dirimu. Setelah selesai, sistem kami akan langsung menyusun profil karier komprehensif untukmu.' },
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
              Mulai Analisis
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (NO PRICE) */}
      <main className="pt-40 pb-20 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-xs font-semibold mb-8 border border-brand-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Panduan karier untuk siswa SMA/SMK
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.15] text-balance">
            Menentukan arah setelah SMA <span className="text-gradient">tidak harus membingungkan.</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Pahami potensi alamimu, temukan jalur yang paling realistis dengan kondisimu, dan buat keputusan masa depan dengan lebih tenang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)]">
              Mulai Analisis Karier
            </Link>
            <a href="#cara-kerja" className="w-full sm:w-auto bg-white border border-surface-200 text-ink rounded-full px-8 py-4 text-base font-medium hover:bg-surface-50 hover:border-surface-300 transition-all duration-300">
              Lihat cara kerja
            </a>
          </div>
        </div>
      </main>

      {/* 2. PROBLEM AWARENESS SECTION */}
      <section className="py-20 bg-white relative z-10 border-y border-surface-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 tracking-tight">Merasa salah arah adalah hal yang wajar.</h2>
          <p className="text-lg text-ink-light leading-relaxed mb-10">
            Banyak siswa bingung setelah lulus karena merasa tidak punya bakat khusus, takut salah memilih jurusan kuliah, atau bimbang antara langsung bekerja atau melanjutkan studi. KarirGPS hadir untuk mengurai kebingungan tersebut secara logis.
          </p>
        </div>
      </section>

      {/* 3. HOW IT WORKS (SIMPLE 3 STEP) */}
      <section id="cara-kerja" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Langkah Mudah</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Bagaimana KarirGPS membantu?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Isi kondisi kamu', desc: 'Jawab pertanyaan ringan seputar minat, cara belajarmu, dan prioritas hidupmu tanpa ada jawaban benar atau salah.' },
              { n: '2', title: 'Sistem menganalisis', desc: 'Mesin kami akan memetakan kecenderungan terkuatmu dan mencari benang merah yang mungkin tidak kamu sadari.' },
              { n: '3', title: 'Dapatkan rekomendasi', desc: 'Terima panduan terstruktur tentang pilihan yang paling masuk akal untuk masa depanmu.' },
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
        </div>
      </section>

      {/* 4. WHAT YOU WILL GET (OUTPUT PREVIEW) */}
      <section className="py-24 bg-ink text-white relative z-10 overflow-hidden">
        {/* Background glow for dark mode */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-3">Yang Kamu Dapatkan</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Peta masa depan yang konkret dan personal</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Di akhir analisis, kamu tidak hanya mendapatkan skor angka, melainkan laporan lengkap layaknya sesi diskusi dengan seorang mentor.
            </p>
            <ul className="space-y-5">
              {[
                'Keputusan utama yang logis (Kerja / Kuliah / Hybrid)',
                'Alasan sederhana mengapa jalur tersebut paling pas',
                '3 rekomendasi jalur karier spesifik',
                'Roadmap langkah demi langkah 6–12 bulan ke depan',
                'Risiko yang perlu diantisipasi jika salah arah'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="brand-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/90 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
              <div className="w-12 h-12 bg-white/10 rounded-xl mb-6 flex items-center justify-center text-2xl">🪞</div>
              <h4 className="text-xl font-bold mb-3">Cermin Dirimu</h4>
              <p className="text-white/60 leading-relaxed text-sm mb-6">
                &quot;Kamu lebih suka membangun sesuatu yang berdampak nyata daripada hanya duduk menyusun teori. Ini bukan berarti kamu tidak akademis, tapi jenis kecerdasanmu lebih berfokus pada hasil praktis.&quot;
              </p>
              <div className="h-px bg-white/10 w-full mb-6"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-white/80">Jalur Terbaik: Kuliah</span>
                <span className="text-xs bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full">Sangat Cocok (92%)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION (REDESIGNED) */}
      <section className="py-24 relative z-10">
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
                  <span className="text-brand-500 transition-transform group-open:rotate-180">
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

      {/* 6. FINAL CTA SECTION (CALM) */}
      <section className="py-24 bg-surface-100 relative z-10 text-center border-t border-surface-200">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">Siap menemukan jalanmu?</h2>
          <p className="text-lg text-ink-light leading-relaxed mb-10">
            Mulai petakan arah masa depanmu sekarang juga dengan KarirGPS. Tanpa rasa takut salah langkah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/auth/register" className="w-full sm:w-auto bg-ink text-white rounded-full px-10 py-4 text-base font-semibold hover:bg-brand-600 hover:shadow-float transition-all duration-300 hover:-translate-y-1">
              Mulai Analisis
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-surface-200 bg-white py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm font-medium text-ink-light">
          <p>© {new Date().getFullYear()} KarirGPS. Memandu langkah pelajar Indonesia ke arah yang benar.</p>
        </div>
      </footer>

    </div>
  )
}
