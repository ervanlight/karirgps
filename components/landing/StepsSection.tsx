export default function StepsSection() {
  const steps = [
    { n: '1', title: 'Isi Profilmu', desc: 'Jawab pertanyaan interaktif tentang minat, kondisi real, dan prioritasmu saat ini.' },
    { n: '2', title: 'Kami Baca Polanya', desc: 'Jawabanmu dicocokkan dengan kondisi nyata dunia kerja & akademik di Indonesia — bukan tebak-tebakan generik.' },
    { n: '3', title: 'Dapatkan Arah & Roadmap', desc: 'Terima hasil instan berupa arah yang jelas dan langkah konkrit yang bisa langsung kamu jalankan.' }
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Tiga langkah, tidak ada yang rumit</h2>
        </div>

        <div className="relative">
          {/* Subtle Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-px bg-surface-200 z-0"></div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border border-surface-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative group-hover:border-brand-300 group-hover:shadow-md transition-all">
                  {/* Faint large number behind */}
                  <span className="text-5xl font-extrabold text-surface-100 absolute pointer-events-none select-none">{s.n}</span>
                  {/* Sharp small number in front */}
                  <div className="text-xl font-bold text-brand-600 relative z-10">
                    {s.n}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-light leading-[1.7] max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
