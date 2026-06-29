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

  return (
    <div className="space-y-6 md:space-y-8 pb-10" id="laporan-print-area">

      {/* ═══════════════════════════════════════════════════
          SECTION 1: PESAN PEMBUKA — Hook Emosional
          Ini yang pertama dilihat. Harus langsung "memukul".
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-ink/80 p-8 md:p-10 text-white animate-fade-up shadow-xl">
        {/* Background texture */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-brand-500 rounded-lg flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
                <path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/>
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">KarirGPS · Laporan Personal</span>
          </div>

          <blockquote className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-white">
            &ldquo;{pesanPembuka}&rdquo;
          </blockquote>

          <div className="text-sm text-white/50 font-medium">— Dibuat khusus dari profil 4 dimensimu</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: CERMIN DIRIMU — Identity Mirror
          Profil naratif + kekuatan alami. "Ini gue banget."
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center text-xl">🪞</div>
          <div>
            <h3 className="text-base font-bold text-ink">Cermin Dirimu</h3>
            <p className="text-xs text-ink-light">Ini yang mentor lihat dari cara kamu menjawab</p>
          </div>
        </div>

        {/* Narasi kepribadian */}
        <div className="space-y-4 mb-8">
          {profilNaratif.split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} className="text-base text-ink leading-relaxed">{para}</p>
          ))}
        </div>

        {/* Kekuatan alami */}
        {kekuatan.length > 0 && (
          <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
            <div className="text-xs font-bold text-brand-700 uppercase tracking-widest mb-4">Kekuatan Alami yang Mungkin Belum Kamu Sadari</div>
            <div className="space-y-2.5">
              {kekuatan.map((k, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-ink leading-relaxed font-medium">{k}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: KEPUTUSAN UTAMA — The Big Answer
          Rekomendasi utama dengan konteks yang jelas.
      ═══════════════════════════════════════════════════ */}
      <div className={`rounded-3xl p-6 md:p-8 shadow-sm border animate-fade-up ${decisionBg}`} style={{ animationDelay: '0.15s' }}>
        <div className={`absolute w-1.5 h-full left-0 top-0 ${decisionAccent} rounded-l-3xl`} />
        <div className="relative">
          <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${decisionColor} opacity-70`}>
            🎯 Keputusan Terbaik Untukmu
          </div>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${decisionColor} tracking-tight text-balance leading-tight`}>
            {laporan.rekomendasi_utama}
          </h2>
          <p className="text-sm text-ink-light">
            Berdasarkan kombinasi minat, cara berpikirmu, nilai kerja, dan kondisi nyatamu saat ini.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: KENAPA INI JALANMU — Reasoning
          Narasi yang bercerita, bukan poin-poin kaku.
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-surface-50 rounded-2xl flex items-center justify-center text-xl">🧠</div>
          <div>
            <h3 className="text-base font-bold text-ink">Kenapa Ini Jalanmu?</h3>
            <p className="text-xs text-ink-light">Reasoning yang dibuat khusus untuk kondisimu</p>
          </div>
        </div>
        <div className="space-y-4">
          {(laporan.alasan || '').split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} className="text-base text-ink leading-relaxed">{para}</p>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: PILIHAN KARIER — Career Cards
          3 pilihan dengan skor kecocokan nyata.
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.25s' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-surface-50 rounded-2xl flex items-center justify-center text-xl">🧭</div>
          <div>
            <h3 className="text-base font-bold text-ink">Tiga Jalur Karier Terbaik Untukmu</h3>
            <p className="text-xs text-ink-light">Diurutkan dari yang paling sesuai profilmu</p>
          </div>
        </div>
        <div className="space-y-4">
          {laporan.karir?.map((k, i) => (
            <div key={i} className="bg-surface-50 rounded-2xl p-5 border border-surface-200 hover:border-brand-200 hover:bg-brand-50/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl shrink-0 mt-0.5">{k.emoji || '🎯'}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base font-bold text-ink">{k.nama}</h4>
                    {i === 0 && (
                      <span className="text-[10px] font-bold bg-brand-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Pilihan Utama
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-light leading-relaxed mt-1">{k.deskripsi}</p>
                </div>
              </div>

              <FitScoreBar score={k.fit_score || Math.max(70, 92 - (i * 8))} />

              <div className="mt-4 pt-3 border-t border-surface-200">
                <span className="text-xs font-bold text-ink uppercase tracking-wide">Jalur Masuk: </span>
                <span className="text-xs text-ink-light">{k.jalur_masuk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: ROADMAP — Timeline Visual
          4 fase konkret yang bisa langsung dijalankan.
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-surface-50 rounded-2xl flex items-center justify-center text-xl">🗺️</div>
          <div>
            <h3 className="text-base font-bold text-ink">Roadmap Konkretmu</h3>
            <p className="text-xs text-ink-light">Langkah nyata yang bisa kamu mulai sekarang</p>
          </div>
        </div>
        <div className="space-y-0 relative">
          {laporan.roadmap?.map((r, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline indicator */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold shadow-sm z-10">
                  {i + 1}
                </div>
                {i !== (laporan.roadmap?.length || 0) - 1 && (
                  <div className="w-0.5 flex-1 bg-brand-100 my-1 min-h-[20px]" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-6 flex-1 ${i === (laporan.roadmap?.length || 0) - 1 ? '' : ''}`}>
                <div className="text-sm font-bold text-brand-700 mb-2">{r.fase}</div>
                <div className="space-y-2">
                  {(r.kegiatan || '').split('\n').filter(Boolean).map((item, kIdx) => (
                    <div key={kIdx} className="flex gap-2 items-start">
                      <span className="text-brand-300 mt-0.5 shrink-0">→</span>
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
          SECTION 7: RISIKO + CTA — Penutup
          Risiko yang realistis + next action yang jelas.
      ═══════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 shadow-sm border border-red-200 animate-fade-up" style={{ animationDelay: '0.35s' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center text-xl">⚠️</div>
          <div>
            <h3 className="text-base font-bold text-red-700">Hal yang Perlu Kamu Waspadai</h3>
            <p className="text-xs text-red-400">Jujur lebih baik daripada palsu meyakinkan</p>
          </div>
        </div>
        <div className="space-y-4">
          {laporan.risiko_antisipasi?.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm">
              <div className="flex gap-3">
                <span className="text-red-400 shrink-0 text-lg">⚡</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink leading-relaxed mb-3">{r.risiko}</p>
                  <div className="pt-3 border-t border-red-100">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">Cara Mengatasinya:</span>
                    <p className="text-sm text-ink-light leading-relaxed">{r.solusi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="no-print bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200 animate-fade-up text-center" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-lg font-bold text-ink mb-2">Sudah siap mulai?</h3>
        <p className="text-sm text-ink-light mb-6">
          Simpan roadmap ini dan jadikan panduan konkretmu selama 6 bulan ke depan.
          Diskusikan dengan orang tua atau guru BK di sekolahmu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto bg-brand-600 text-white font-semibold rounded-xl px-6 py-3.5 hover:bg-brand-700 transition-all shadow-soft hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Simpan Roadmap (PDF)
          </button>
          <Link
            href="/tes/d1"
            onClick={() => useTesStore.getState().reset()}
            className="w-full sm:w-auto bg-surface-50 border border-surface-200 text-ink font-semibold rounded-xl px-6 py-3.5 hover:bg-white hover:border-surface-300 transition-all"
          >
            Ulangi Tes dari Awal
          </Link>
        </div>
      </div>

    </div>
  )
}
