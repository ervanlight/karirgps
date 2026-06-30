export default function FAQSection() {
  const faqs = [
    {
      q: 'Apakah ini tes psikologi klinis?',
      a: 'Bukan, dan ini bukan pengganti psikolog atau konselor sekolah. KarirGPS membaca pola dari jawabanmu untuk membantu memetakan arah karier — bukan mendiagnosis kepribadian.'
    },
    {
      q: 'Apakah hasilnya pasti akurat?',
      a: 'Tidak ada yang bisa menjamin masa depan 100%. Yang kami coba lakukan adalah mengurangi tebak-tebakan — hasilnya dihubungkan ke kondisi nyatamu (biaya, lokasi, kemampuan akademik), bukan saran generik yang berlaku untuk siapa saja.'
    },
    { 
      q: 'Apakah saya harus bayar dari awal?', 
      a: 'Sama sekali tidak. Kamu bisa mencoba fitur analisis awal secara gratis untuk melihat kesimpulan utama. Jika kamu merasa hasilnya membantumu dan butuh roadmap lebih detail, baru kamu bisa melakukan upgrade opsional.' 
    },
    { 
      q: 'Ini cocok untuk siapa saja?', 
      a: 'Sangat cocok untuk siswa SMA/SMK (terutama kelas 12), gap year, atau siapa pun yang saat ini sedang bingung memilih antara melanjutkan kuliah, langsung mencari kerja, atau jalur keduanya.' 
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-surface-50 border-t border-surface-200 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">Hal yang sering ditanyakan</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white border border-surface-200 rounded-2xl p-6 cursor-pointer open:shadow-sm transition-all">
              <summary className="flex items-center justify-between font-bold text-ink text-base outline-none select-none">
                {f.q}
                <span className="text-ink-light transition-transform group-open:rotate-180 shrink-0 ml-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-surface-100 text-sm text-ink-light leading-[1.8]">
                {f.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  )
}
