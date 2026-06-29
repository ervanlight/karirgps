import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tes Minat Bakat & Rekomendasi Jurusan untuk Siswa SMA',
  description: 'KarirGPS membaca minat, cara berpikir, motivasi, dan kondisi nyatamu untuk merumuskan pilihan jurusan dan profesi paling realistis. Bukan sekadar hasil tes umum.',
}

const FAQ = [
  { q: 'Berapa lama tesnya?', a: 'Sekitar 15-20 menit untuk 4 bagian: minat (RIASEC), kecerdasan (Multiple Intelligences), nilai kerja, dan kondisi personal. Kerjakan dengan santai, tidak ada batas waktu.' },
  { q: 'Berapa harganya?', a: 'Tes awal dan ringkasan profil bisa diakses gratis. Untuk membuka roadmap lengkap dan rekomendasi strategis, biayanya Rp 59.000 (sekali bayar).' },
  { q: 'Hasil lengkap isinya apa saja?', a: 'Kamu akan mendapat arah terbaik (Kuliah/Kerja), alasan di balik keputusan itu, 3 jalur karier spesifik, roadmap 6-12 bulan ke depan, serta risiko jika kamu salah ambil langkah.' },
  { q: 'Apakah ini menggantikan tes psikologi?', a: 'Tidak. KarirGPS adalah alat bantu untuk memetakan arah karier secara cepat. Untuk kebutuhan psikologis yang mendalam, tetap disarankan ke konselor atau psikolog.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-50 text-ink font-sans overflow-x-hidden relative selection:bg-brand-500 selection:text-white">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-300/30 rounded-full blur-[100px] animate-pulse-slow pointer-events-none -z-10"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-accent-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none -z-10" style={{ animationDelay: '2s' }}></div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass">
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
              Mulai Tes Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-xs font-semibold mb-8 border border-brand-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            Gratis untuk dicoba · ~20 menit
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.1]">
            Bukan sekadar tes bakat.<br className="hidden md:block" />
            <span className="text-gradient"> Peta perjalananmu.</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-light mb-10 max-w-2xl leading-relaxed">
            Belum yakin mau ambil jurusan apa setelah lulus? Itu wajar.
            KarirGPS membantu memetakan cara berpikirmu, kondisi finansial, dan minat aslimu menjadi rekomendasi langkah paling logis untuk masa depanmu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Link href="/auth/register" className="w-full sm:w-auto bg-brand-600 text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)]">
              Mulai Tes Sekarang
            </Link>
            <Link href="/auth/login" className="w-full sm:w-auto bg-white border border-surface-200 text-ink rounded-full px-8 py-4 text-base font-medium hover:bg-surface-50 hover:border-surface-300 transition-all duration-300">
              Masuk
            </Link>
          </div>
          
          <p className="text-sm text-ink-light/70 mt-6 font-medium">
            87% mahasiswa Indonesia merasa salah jurusan. Jangan sampai itu kamu.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 pt-16 border-t border-surface-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {[
            { val: '4 Bagian', label: 'Cek minat, cara berpikir, & kondisi nyata' },
            { val: '15 Menit', label: 'Waktu santai untuk menyelesaikan tes' },
            { val: 'Rp 59rb', label: 'Untuk membuka roadmap karier utuh' },
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-surface-200/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-ink mb-3">{s.val}</div>
              <div className="text-sm text-ink-light leading-relaxed font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* How it Works Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Cara Kerjanya</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Perjalanan menemukan arahmu</h3>
          </div>

          <div className="grid gap-6">
            {[
              { n: '1', title: 'Kerjakan Tes Dasar', desc: 'Jawab pertanyaan sederhana tentang kebiasaanmu, minatmu, dan prioritas hidupmu tanpa ada jawaban yang salah.' },
              { n: '2', title: 'Lihat Hasil Awal', desc: 'Langsung dapatkan profil singkat karaktermu dan top 2 jurusan atau profesi secara gratis.' },
              { n: '3', title: 'Buka Roadmap Lengkap', desc: 'Buka akses ke roadmap karier, strategi terarah, dan risiko jika salah ambil jalan.' },
            ].map((s, i) => (
              <div key={i} className="group flex flex-col sm:flex-row gap-6 p-8 bg-surface-50 border border-surface-200 rounded-3xl hover:bg-white hover:border-brand-200 hover:shadow-soft transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center text-xl font-bold text-brand-600 shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {s.n}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ink mb-2 group-hover:text-brand-600 transition-colors">{s.title}</h4>
                  <p className="text-ink-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/auth/register" className="inline-block bg-ink text-white rounded-full px-10 py-4 text-base font-semibold hover:bg-brand-600 hover:shadow-float transition-all duration-300 hover:-translate-y-1">
              Coba Tes Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Pertanyaan yang sering diajukan</h3>
          </div>

          <div className="grid gap-4">
            {FAQ.map((f, i) => (
              <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6 md:p-8 hover:shadow-soft transition-shadow">
                <h4 className="text-lg font-bold text-ink mb-3">{f.q}</h4>
                <p className="text-ink-light leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-surface-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm font-medium text-ink-light">
          <p>© {new Date().getFullYear()} KarirGPS. Membantu pelajar Indonesia menemukan jalannya.</p>
        </div>
      </footer>

    </div>
  )
}
