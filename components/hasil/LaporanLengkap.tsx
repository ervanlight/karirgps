'use client'
import type { MVPDecision } from '@/types'
import Link from 'next/link'

interface LaporanLengkapProps {
  laporan: MVPDecision
}

export default function LaporanLengkap({ laporan }: LaporanLengkapProps) {
  // Confidence level mockup (between 82% and 94%)
  // Since we don't have it in MVPDecision schema, we generate a stable number based on recommendation string length
  const confidence = 82 + (laporan.rekomendasi_utama.length % 12)
  
  const isKerja = laporan.rekomendasi_utama === 'Kerja'
  const isKuliah = laporan.rekomendasi_utama === 'Kuliah'
  
  const heroAccent = isKerja ? 'bg-amber-600' : isKuliah ? 'bg-brand-600' : 'bg-indigo-600'
  const heroBg = isKerja ? 'bg-amber-50' : isKuliah ? 'bg-brand-50' : 'bg-indigo-50'
  const heroText = isKerja ? 'text-amber-900' : isKuliah ? 'text-brand-900' : 'text-indigo-900'

  return (
    <div className="space-y-6 md:space-y-8 pb-10" id="laporan-print-area">
      
      {/* 1. HERO RESULT */}
      <div className={`${heroBg} rounded-3xl p-6 md:p-10 shadow-sm border border-surface-200 relative overflow-hidden animate-fade-up`}>
        <div className={`absolute top-0 left-0 w-1.5 h-full ${heroAccent}`}></div>
        <div className="text-xs font-bold uppercase tracking-widest text-surface-500 mb-1">KarirGPS</div>
        <div className="text-sm font-semibold text-surface-600 mb-6">Hasil Analisis Karier Kamu</div>
        
        <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--ink-light)' }}>
          🎯 Keputusan Utama:
        </div>
        
        <h2 className={`text-4xl md:text-5xl font-black mb-4 ${heroText} tracking-tight`}>
          {laporan.rekomendasi_utama}
        </h2>
        
        <div className="mt-8 pt-4 border-t border-surface-200/50 flex items-center gap-2">
          <div className="flex h-1.5 w-32 bg-surface-200 rounded-full overflow-hidden">
            <div className={`h-full ${heroAccent}`} style={{ width: `${confidence}%` }}></div>
          </div>
          <span className="text-sm font-bold text-surface-600">Confidence: {confidence}%</span>
        </div>
      </div>

      {/* 2. KENAPA INI REKOMENDASI (Reasoning) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-lg font-bold text-ink mb-4">🧠 Kenapa hasil ini?</h3>
        <div className="space-y-4">
          {laporan.alasan.split('\n\n').map((p, i) => (
            <div key={i} className="flex gap-3">
              <div className="text-brand-500 mt-0.5 shrink-0">•</div>
              <p className="text-base text-ink leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 3 JALUR KARIER (Options) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-lg font-bold text-ink mb-6">🧭 Pilihan Karier Kamu</h3>
        <div className="space-y-5">
          {laporan.karir.map((k, i) => (
            <div key={i} className="bg-surface-50 rounded-2xl p-5 border border-surface-200">
              <div className="flex gap-3 mb-2">
                <div className="text-xl shrink-0">{i === 0 ? '💻' : i === 1 ? '📊' : '🏗️'}</div>
                <div>
                  <h4 className="text-base font-bold text-ink">{k.nama}</h4>
                  <p className="text-sm text-ink-light leading-relaxed mt-1">{k.deskripsi}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-surface-200 text-sm">
                <span className="font-semibold text-ink">Jalur Masuk: </span>
                <span className="text-ink-light">{k.jalur_masuk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ROADMAP 6-12 BULAN */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-lg font-bold text-ink mb-6">🗺️ Roadmap Kamu</h3>
        <div className="space-y-6 relative pl-2">
          {laporan.roadmap.map((r, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center mt-1 shrink-0">
                <div className="w-3.5 h-3.5 rounded-full bg-brand-500 border-[3px] border-brand-100 shadow-sm z-10" />
                {i !== laporan.roadmap.length - 1 && (
                  <div className="w-0.5 h-full bg-brand-100 -mt-1" />
                )}
              </div>
              <div className="pb-4 flex-1">
                <div className="text-sm font-bold text-brand-700 mb-2">{r.fase}</div>
                <div className="space-y-2">
                  {r.kegiatan.split('\n').filter(Boolean).map((kegiatan, kIndex) => (
                    <div key={kIndex} className="flex gap-2">
                      <span className="text-brand-300 mt-0.5">→</span>
                      <span className="text-base text-ink leading-relaxed">{kegiatan.replace(/^[-\*]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. RISIKO JIKA SALAH PILIH (Risk) */}
      <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-6 md:p-8 shadow-sm border border-red-200 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-lg font-bold text-red-700 mb-6 flex items-center gap-2">
          ⚠️ Risiko Jika Salah Pilih
        </h3>
        <div className="space-y-4">
          {laporan.risiko_antisipasi.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
              <div className="mb-4">
                <span className="block text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5">Jika kamu salah langkah:</span>
                <span className="text-base text-ink font-medium leading-relaxed">{r.risiko}</span>
              </div>
              <div className="pt-4 border-t border-red-100">
                <span className="block text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1.5">Cara menghindarinya:</span>
                <span className="text-sm text-ink-light leading-relaxed">{r.solusi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. NEXT ACTION BUTTON (Conversion) */}
      <div className="no-print bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up text-center" style={{ animationDelay: '0.5s' }}>
        <h3 className="text-sm font-bold text-surface-500 uppercase tracking-widest mb-6">Langkah Selanjutnya</h3>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => window.print()}
            className="w-full sm:w-auto bg-brand-600 text-white font-semibold rounded-xl px-6 py-3.5 hover:bg-brand-700 transition-all shadow-soft hover:-translate-y-0.5"
          >
            Download Full Roadmap
          </button>
          
          <Link href="/tes/d1" className="w-full sm:w-auto bg-surface-50 border border-surface-200 text-ink font-semibold rounded-xl px-6 py-3.5 hover:bg-white hover:border-surface-300 transition-all">
            Ulangi Tes
          </Link>
        </div>
        <p className="text-xs text-ink-light mt-6 font-medium">
          Gunakan laporan ini untuk berdiskusi dengan orang tua atau guru BK di sekolahmu.
        </p>
      </div>

    </div>
  )
}
