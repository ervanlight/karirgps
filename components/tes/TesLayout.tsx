'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface TesLayoutProps {
  children: React.ReactNode
  dimensi: 1 | 2 | 3 | 4
  judul: string
  subjudul: string
  intro: string
  hrefBack: string
  hrefNext: string
  labelNext?: string
  onNext?: () => void
  canProceed?: boolean
  answered?: number
  total?: number
}

const DIMENSI_META = [
  { label: 'Minat & Ketertarikan', waktu: '~5 menit', soal: '18 soal' },
  { label: 'Cara Berpikir', waktu: '~8 menit', soal: '24 soal' },
  { label: 'Prioritas Karir', waktu: '~5 menit', soal: '18 soal' },
  { label: 'Kondisi Nyata', waktu: '~3 menit', soal: '7 pertanyaan' },
]

export default function TesLayout({
  children, dimensi, judul, subjudul, intro,
  hrefBack, hrefNext, labelNext = 'Lanjutkan',
  onNext, canProceed = true,
  answered = 0, total = 1,
}: TesLayoutProps) {
  const router = useRouter()
  const meta = DIMENSI_META[dimensi - 1]
  
  // Calculate dynamic local progress (Micro-wins UX)
  // Instead of showing 12% out of the whole test, we show 0-100% for the CURRENT phase.
  const localProgress = total > 0 ? (answered / total) * 100 : 0
  const progress = Math.min(100, localProgress)

  function handleNext() {
    if (onNext) onNext()
    router.push(hrefNext)
  }

  return (
    <div className="min-h-screen bg-surface-50 text-ink font-sans selection:bg-brand-500 selection:text-white pb-24">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-surface-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group outline-none">
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-xl flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="hidden sm:block text-lg font-bold tracking-tight text-ink">KarirGPS</span>
          </Link>

          {/* Progress Bar */}
          <div className="flex-1 max-w-xs mx-4">
            <div className="flex justify-between text-[11px] font-bold text-ink-light uppercase tracking-wider mb-2">
              <span>Fase {dimensi} dari 4</span>
              {/* Persentase disembunyikan agar tidak mengintimidasi */}
            </div>
            <div className="h-1.5 bg-surface-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Link href="/dashboard" className="text-sm font-medium text-ink-light hover:text-ink transition-colors outline-none">
            Tutup
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 mt-12 animate-fade-up">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-100">
            {meta.label} · {meta.soal}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            {judul}
          </h1>
          <p className="text-lg text-ink-light leading-relaxed">
            {subjudul}
          </p>
        </header>

        {/* Intro Alert */}
        <div className="bg-white border border-surface-200 border-l-4 border-l-brand-500 rounded-r-xl p-5 mb-10 shadow-sm text-sm text-ink leading-relaxed">
          {intro}
        </div>

        {/* Children / Questions */}
        <div className="space-y-6">
          {children}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12 pt-8 border-t border-surface-200">
          {hrefBack !== '/' && (
            <Link 
              href={hrefBack} 
              className="px-6 py-4 rounded-xl text-sm font-semibold text-ink-light border border-surface-200 bg-white hover:bg-surface-50 hover:text-ink transition-all flex items-center justify-center outline-none focus:ring-2 focus:ring-brand-500"
            >
              Sebelumnya
            </Link>
          )}
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`flex-1 px-6 py-4 rounded-xl text-sm font-bold transition-all outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-surface-50 ${
              canProceed 
                ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-float hover:-translate-y-0.5' 
                : 'bg-surface-200 text-ink-light cursor-not-allowed'
            }`}
          >
            {labelNext}
          </button>
        </div>
      </main>
    </div>
  )
}
