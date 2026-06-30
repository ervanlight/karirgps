import Link from 'next/link'

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
            Mulai dari yang gratis dulu.
          </h2>
          <p className="text-ink-light text-lg max-w-xl mx-auto">
            Tidak ada paksaan upgrade. Coba analisis awal dulu — kalau terasa membantu dan kamu butuh lebih detail, opsi laporan lengkap baru muncul setelahnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">

          {/* Free Card */}
          <div className="bg-white border border-surface-200 p-8 md:p-10 rounded-3xl shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-ink mb-2">Analisis Awal</h3>
            <p className="text-sm text-ink-light mb-8">Pahami posisi dan kecenderungan utamamu saat ini.</p>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3">
                <div className="text-ink-light font-bold shrink-0 mt-0.5">✓</div>
                <span className="text-sm text-ink">Analisis profil dasar & prioritas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-ink-light font-bold shrink-0 mt-0.5">✓</div>
                <span className="text-sm text-ink">Kesimpulan arah utama (Kuliah/Kerja/Hybrid)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-ink-light font-bold shrink-0 mt-0.5">✓</div>
                <span className="text-sm text-ink">1 insight kepribadian</span>
              </li>
            </ul>

            <Link
              href="/auth/register"
              className="block text-center w-full bg-surface-50 border border-surface-200 text-ink rounded-2xl px-6 py-4 text-sm font-bold hover:bg-surface-100 transition-colors"
            >
              Coba Gratis Sekarang
            </Link>
          </div>

          {/* Laporan Lengkap — sengaja tanpa angka harga, supaya tidak terasa jualan di awal. Harga muncul kontekstual di /hasil setelah user dapat nilai dari versi gratis. */}
          <div className="bg-surface-50 border border-surface-200 p-8 md:p-10 rounded-3xl flex flex-col">
            <div className="inline-flex w-fit items-center gap-1.5 bg-white border border-surface-200 text-ink-light text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Kalau kamu butuh lebih
            </div>

            <h3 className="text-xl font-bold text-ink mb-2">Laporan Lengkap</h3>
            <p className="text-sm text-ink-light mb-8">Untuk yang sudah coba versi gratis dan ingin rencana yang lebih konkret.</p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                'Alasan logis & rasionalisasi data',
                'Jurusan kuliah atau jalur kerja spesifik — sesuai pilihanmu',
                'Roadmap eksekusi 6–12 bulan',
                'Simulasi risiko & versi khusus untuk orang tua',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="text-brand-600 font-bold shrink-0 mt-0.5">✓</div>
                  <span className="text-ink text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/auth/register"
              className="block text-center w-full bg-white border border-surface-300 text-ink rounded-2xl px-6 py-4 text-sm font-bold hover:bg-surface-100 transition-colors"
            >
              Coba Gratis Dulu
            </Link>

            <p className="text-center mt-4 text-xs text-ink-light">
              Detail & harga laporan lengkap baru ditampilkan setelah kamu lihat hasil analisis awalmu.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
