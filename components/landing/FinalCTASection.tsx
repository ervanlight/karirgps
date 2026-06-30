import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-brand-50 relative z-10 overflow-hidden">
      {/* Soft decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-200/50 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mb-6 leading-tight text-balance">
          Satu analisis untuk langkah awalmu.
        </h2>
        
        <p className="text-lg text-ink leading-[1.8] mb-10 max-w-xl mx-auto text-balance">
          Kamu tidak harus tahu semua jawabannya sekarang. Mulai saja dari merapikan apa yang sudah ada di kepalamu menjadi sebuah arah yang jelas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/auth/register" 
            className="w-full sm:w-auto bg-brand-600 text-white rounded-2xl px-12 py-5 text-base font-bold hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            Mulai Analisis Gratis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-ink-light font-medium">
          Dibutuhkan waktu sekitar 5 menit untuk mengisi asesmen.
        </p>

      </div>
    </section>
  )
}
