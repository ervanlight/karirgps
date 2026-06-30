export default function PainPointsSection() {
  const painPoints = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      title: 'Takut salah jurusan',
      desc: 'Khawatir membuang waktu dan biaya untuk prodi atau pekerjaan yang ternyata tidak sesuai dengan karaktermu.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Bingung kuliah atau kerja',
      desc: 'Sulit menimbang antara tuntutan finansial saat ini atau mengejar gelar akademik untuk masa depan.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      title: 'Belum punya arah jelas',
      desc: 'Merasa tidak punya bakat atau minat spesifik, sehingga menunda untuk mengambil keputusan penting.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-surface-50 border-y border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((p, i) => (
            <div key={i} className="h-full rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-surface-100 text-ink rounded-xl flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 leading-tight">{p.title}</h3>
              <p className="text-ink-light text-sm leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg font-medium text-ink leading-relaxed">
            KarirGPS membantu mengubah kebingungan itu menjadi arah yang lebih jelas dan bisa langsung ditindaklanjuti.
          </p>
        </div>

      </div>
    </section>
  )
}
