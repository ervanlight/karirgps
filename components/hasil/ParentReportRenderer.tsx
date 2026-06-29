import type { ParentReport } from '@/types'

export default function ParentReportRenderer({ laporan }: { laporan: ParentReport }) {
  return (
    <div className="space-y-6 md:space-y-8 pb-10 font-sans text-ink">
      
      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-indigo-700 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm">👨‍👩‍👧‍👦</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Panduan Orang Tua</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4 text-white text-balance">
            Cara Terbaik Mendukung Anak Anda
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg">
            Anak Anda memiliki pola berpikir dan motivasi yang unik. Laporan ini dirancang khusus untuk membantu Anda memahami sudut pandangnya.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CARA BERPIKIR & MOTIVASI
      ═══════════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center text-xl">🧠</div>
            <div>
              <h3 className="text-base font-bold text-ink">Cara Berpikir Anak</h3>
              <p className="text-xs text-ink-light">Bagaimana ia memproses informasi</p>
            </div>
          </div>
          <div className="space-y-4">
            {laporan.cara_berpikir_anak.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-amber-50 rounded-2xl flex items-center justify-center text-xl">🔥</div>
            <div>
              <h3 className="text-base font-bold text-ink">Apa yang Memotivasi</h3>
              <p className="text-xs text-ink-light">Motor penggerak utamanya</p>
            </div>
          </div>
          <div className="space-y-4">
            {laporan.apa_yang_memotivasi.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          DUKUNGAN & DISKUSI
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center text-xl">🤝</div>
          <div>
            <h3 className="text-base font-bold text-ink">Dukungan yang Dibutuhkan</h3>
            <p className="text-xs text-ink-light">Bantuan paling efektif dari Anda</p>
          </div>
        </div>
        <div className="space-y-4 mb-8 bg-surface-50 p-5 rounded-2xl border border-surface-100">
          {laporan.dukungan_yang_dibutuhkan.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink">{para}</p>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-5 mt-6">
          <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-xl">💬</div>
          <div>
            <h3 className="text-base font-bold text-ink">Cara Berdiskusi yang Tepat</h3>
            <p className="text-xs text-ink-light">Agar komunikasi tidak menjadi konflik</p>
          </div>
        </div>
        <div className="space-y-4">
          {laporan.cara_berdiskusi.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed">{para}</p>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HAL TERPENTING
      ═══════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 shadow-sm border border-amber-200 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 text-6xl opacity-10">✨</div>
        <h3 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-4">Satu Hal Terpenting</h3>
        <p className="text-base md:text-lg font-medium text-amber-900 leading-relaxed max-w-2xl mx-auto italic">
          &quot;{laporan.hal_terpenting}&quot;
        </p>
      </div>

    </div>
  )
}
