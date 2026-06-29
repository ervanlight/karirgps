'use client'
import type { MVPDecision } from '@/types'
import Link from 'next/link'
import { useTesStore } from '@/lib/store'

interface LaporanLengkapProps {
  laporan: MVPDecision
}

function FitScoreBar({ score }: { score: number }) {
  const color =
    score >= 80 ? 'bg-emerald-500' :
    score >= 60 ? 'bg-brand-500' :
    'bg-amber-500'

  const label =
    score >= 80 ? 'Sangat Cocok' :
    score >= 60 ? 'Cocok' :
    'Perlu Usaha'

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold text-ink-light">Tingkat Kecocokan</span>
        <span className="text-xs font-bold text-ink">{score}% · {label}</span>
      </div>
      <div className="h-1.5 bg-surface-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

function ConfidenceGauge({ score }: { score: number }) {
  const isHigh = score >= 85
  const color = isHigh ? 'text-emerald-500' : 'text-amber-500'
  const text = isHigh ? 'Keyakinan AI Tinggi' : 'Banyak Variabel Abu-abu'
  
  return (
    <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-white/40">
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
          <path
            className="text-surface-200"
            strokeDasharray="100, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke="currentColor" strokeWidth="3" fill="none"
          />
          <path
            className={color}
            strokeDasharray={`${score}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke="currentColor" strokeWidth="3" fill="none"
          />
        </svg>
        <span className="absolute text-[10px] font-extrabold text-ink">{score}%</span>
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-ink-light mb-0.5">Confidence Score</div>
        <div className="text-xs font-semibold text-ink">{text}</div>
      </div>
    </div>
  )
}

export default function LaporanLengkap({ laporan }: LaporanLengkapProps) {
  const isKerja = laporan.rekomendasi_utama === 'Kerja'
  const isKuliah = laporan.rekomendasi_utama === 'Kuliah'

  const decisionColor = isKerja ? 'text-amber-700' : isKuliah ? 'text-brand-700' : 'text-indigo-700'
  const decisionBg = isKerja ? 'bg-amber-50 border-amber-200' : isKuliah ? 'bg-brand-50 border-brand-200' : 'bg-indigo-50 border-indigo-200'
  const decisionAccent = isKerja ? 'bg-amber-500' : isKuliah ? 'bg-brand-500' : 'bg-indigo-500'

  // Backward compatibility untuk laporan lama yang belum punya field baru
  const pesanPembuka = laporan.pesan_pembuka || "Jelajahi potensi terbaikmu berdasarkan kombinasi profil unikmu."
  const profilNaratif = laporan.profil_naratif || "Profilmu menunjukkan perpaduan unik antara minat, nilai kerja, dan cara berpikir. Berdasarkan data tersebut, kami telah menyusun rekomendasi langkah ke depan yang paling sesuai dengan kondisimu."
  const kekuatan = laporan.kekuatan || []
  const confidenceScore = laporan.confidence_score || 85
  const alternativeScenario = laporan.alternative_scenario || "Jika rencana awal tidak berjalan sesuai harapan, pertimbangkan untuk mengambil kursus atau sertifikasi pendek yang mendukung profesi incaranmu."

  return (
    <div className="space-y-6 md:space-y-8 pb-10" id="laporan-print-area">

      {/* ═══════════════════════════════════════════════════
          SECTION 1: PESAN PEMBUKA — Hook Emosional
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-ink/80 p-8 md:p-10 text-white animate-fade-up shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-brand-500 rounded-lg flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">KarirGPS · Laporan AI Spesifik</span>
          </div>

          <blockquote className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-white">
            &ldquo;{pesanPembuka}&rdquo;
          </blockquote>

          <div className="text-sm text-white/50 font-medium">— Evaluasi 4 Dimensi Profil</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: KEPUTUSAN UTAMA + CONFIDENCE
      ═══════════════════════════════════════════════════ */}
      <div className={`rounded-3xl p-6 md:p-8 shadow-sm border animate-fade-up ${decisionBg}`} style={{ animationDelay: '0.1s' }}>
        <div className={`absolute w-1.5 h-full left-0 top-0 ${decisionAccent} rounded-l-3xl`} />
        <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${decisionColor} opacity-70`}>
              🎯 Keputusan Terbaik Untukmu
            </div>
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${decisionColor} tracking-tight text-balance leading-tight`}>
              {laporan.rekomendasi_utama}
            </h2>
            <p className="text-sm text-ink-light max-w-lg">
              Berdasarkan kombinasi minat, kecerdasan, nilai kerja, dan kondisi ekonomi/nyata saat ini.
            </p>
          </div>
          
          <div className="shrink-0">
            <ConfidenceGauge score={confidenceScore} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: CERMIN DIRIMU & REASONING
      ═══════════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center text-xl">🪞</div>
            <div>
              <h3 className="text-base font-bold text-ink">Pemetaan Psikologis</h3>
              <p className="text-xs text-ink-light">Cerminan pola perilakumu</p>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            {profilNaratif.split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className="text-sm text-ink leading-relaxed">{para}</p>
            ))}
          </div>
          {kekuatan.length > 0 && (
            <div className="bg-surface-50 rounded-2xl p-4 border border-surface-200">
              <div className="text-[10px] font-bold text-brand-700 uppercase tracking-widest mb-3">Kekuatan Tersembunyi</div>
              <ul className="space-y-2">
                {kekuatan.map((k, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink font-medium">
                    <span className="text-brand-500 mt-0.5">✦</span> {k}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-surface-50 rounded-2xl flex items-center justify-center text-xl">🧠</div>
            <div>
              <h3 className="text-base font-bold text-ink">Logika Keputusan</h3>
              <p className="text-xs text-ink-light">Mengapa ini jalur terbaik?</p>
            </div>
          </div>
          <div className="space-y-4">
            {(laporan.alasan || '').split('\n\n').filter(Boolean).map((para, i) => (
              <p key={i} className="text-sm text-ink leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: PILIHAN KARIER & SALARY PROJECTION
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-surface-50 rounded-2xl flex items-center justify-center text-xl">🧭</div>
          <div>
            <h3 className="text-base font-bold text-ink">Simulasi 3 Jalur Karier Optimal</h3>
            <p className="text-xs text-ink-light">Lengkap dengan rentang gaji dan jalur masuk riil</p>
          </div>
        </div>
        <div className="space-y-4">
          {laporan.karir?.map((k, i) => (
            <div key={i} className="bg-surface-50 rounded-2xl p-5 border border-surface-200 relative overflow-hidden">
              {i === 0 && <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">Rekomendasi #1</div>}
              
              <div className="flex items-start gap-3 mb-3 pr-24">
                <div className="text-3xl shrink-0 mt-0.5">{k.emoji || '🎯'}</div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-ink">{k.nama}</h4>
                  <p className="text-sm text-ink-light leading-relaxed mt-1">{k.deskripsi}</p>
                </div>
              </div>

              {/* Data Grid: Income & Jalur */}
              <div className="grid grid-cols-2 gap-4 my-4 p-4 bg-white rounded-xl border border-surface-200">
                <div>
                  <div className="text-[10px] font-bold uppercase text-ink-light mb-1">Rentang Gaji (Est)</div>
                  <div className="text-sm font-semibold text-emerald-700">{k.income_range || 'Tergantung Negosiasi'}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-ink-light mb-1">Jalur Masuk</div>
                  <div className="text-sm font-semibold text-ink">{k.jalur_masuk}</div>
                </div>
              </div>

              <FitScoreBar score={k.fit_score || Math.max(70, 92 - (i * 8))} />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: LIFE TRAJECTORY SIMULATION (ROADMAP)
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.25s' }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center text-xl text-brand-600">📈</div>
          <div>
            <h3 className="text-base font-bold text-ink">Simulasi Alur Hidup (3-5 Tahun)</h3>
            <p className="text-xs text-ink-light">Proyeksi langkah konkret dari sekarang hingga sukses</p>
          </div>
        </div>
        
        <div className="space-y-0 relative">
          {laporan.roadmap?.map((r, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold shadow-sm z-10">
                  {i + 1}
                </div>
                {i !== (laporan.roadmap?.length || 0) - 1 && (
                  <div className="w-0.5 flex-1 bg-brand-100 my-1 min-h-[40px]" />
                )}
              </div>
              <div className={`pb-8 flex-1`}>
                <div className="text-sm font-bold text-brand-700 mb-2">{r.fase}</div>
                <div className="space-y-2">
                  {(r.kegiatan || '').split('\n').filter(Boolean).map((item, kIdx) => (
                    <div key={kIdx} className="flex gap-2 items-start bg-surface-50 p-3 rounded-xl border border-surface-100">
                      <span className="text-brand-400 mt-0.5 shrink-0">→</span>
                      <span className="text-sm text-ink leading-relaxed">{item.replace(/^[-*]\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: FAILURE SCENARIOS & ALTERNATIVE PATH
      ═══════════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 shadow-sm border border-red-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center text-xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-red-700">Analisis Kegagalan Fatal</h3>
              <p className="text-xs text-red-400">Risiko yang bisa merusak rencana di atas</p>
            </div>
          </div>
          <div className="space-y-4">
            {laporan.risiko_antisipasi?.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
                <div className="flex gap-3">
                  <span className="text-red-400 shrink-0 text-lg">⚡</span>
                  <div className="flex-1">
                    {r.probabilitas && (
                      <div className="inline-block bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 rounded mb-2">
                        {r.probabilitas}
                      </div>
                    )}
                    <p className="text-sm font-semibold text-ink leading-relaxed mb-3">{r.risiko}</p>
                    <div className="pt-3 border-t border-red-100">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">Mitigasi:</span>
                      <p className="text-sm text-ink-light leading-relaxed">{r.solusi}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 rounded-3xl p-6 md:p-8 shadow-sm border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-xl">🔄</div>
            <div>
              <h3 className="text-base font-bold text-indigo-700">Plan B: Jalan Alternatif</h3>
              <p className="text-xs text-indigo-400">Jika rencana A tidak berjalan mulus</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm h-full">
            <p className="text-sm text-ink leading-relaxed">
              {alternativeScenario}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="no-print bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up text-center" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-lg font-bold text-ink mb-2">Simpan Hasil Simulasimu</h3>
        <p className="text-sm text-ink-light mb-6">
          Gunakan blueprint ini sebagai peta hidupmu 3 tahun ke depan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto bg-brand-600 text-white font-semibold rounded-xl px-6 py-3.5 hover:bg-brand-700 transition-all shadow-soft hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Simpan Blueprint (PDF)
          </button>
          <Link
            href="/tes/d1"
            onClick={() => useTesStore.getState().reset()}
            className="w-full sm:w-auto bg-surface-50 border border-surface-200 text-ink font-semibold rounded-xl px-6 py-3.5 hover:bg-white hover:border-surface-300 transition-all"
          >
            Mulai Sesi Baru
          </Link>
        </div>
      </div>

    </div>
  )
}
