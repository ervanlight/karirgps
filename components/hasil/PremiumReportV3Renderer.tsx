import type { PremiumReportV3 } from '@/types'

export default function PremiumReportV3Renderer({ laporan }: { laporan: PremiumReportV3 }) {
  return (
    <div className="space-y-6 md:space-y-8 pb-10 font-sans text-ink">
      
      {/* ═══════════════════════════════════════════════════
          SECTION 1: PEMBUKA & PROFIL SINGKAT
      ═══════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-8 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm">🧭</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-100">Laporan Personal V3</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-6 text-white text-balance">
            {laporan.profil_singkat}
          </h2>

          <div className="bg-black/20 p-5 rounded-2xl border border-white/10">
            <p className="text-sm text-brand-50 leading-relaxed italic">
              &quot;{laporan.pembuka}&quot;
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 2: PROFIL KEPRIBADIAN & NILAI KERJA
      ═══════════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-xl">🪞</div>
            <div>
              <h3 className="text-base font-bold text-ink">Cermin Kepribadian</h3>
              <p className="text-xs text-ink-light">Minat & Cara Berpikir</p>
            </div>
          </div>
          <div className="space-y-4">
            {laporan.profil_kepribadian.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-amber-50 rounded-2xl flex items-center justify-center text-xl">⚓</div>
            <div>
              <h3 className="text-base font-bold text-ink">Nilai & Prioritas</h3>
              <p className="text-xs text-ink-light">Apa yang sebenarnya kamu cari</p>
            </div>
          </div>
          <div className="space-y-4">
            {laporan.nilai_kerja.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: KEKUATAN & BLIND SPOT
      ═══════════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50/50 rounded-3xl p-6 md:p-8 shadow-sm border border-emerald-100">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-lg">✨</span> Kekuatan Alami
          </h3>
          <ul className="space-y-4">
            {laporan.kekuatan.map((k, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm">
                <span className="text-emerald-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{k}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-50/50 rounded-3xl p-6 md:p-8 shadow-sm border border-amber-100">
          <h3 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="text-lg">⚠️</span> Perlu Diwaspadai
          </h3>
          <ul className="space-y-4">
            {laporan.perlu_diwaspadai.map((k, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink bg-white p-4 rounded-2xl border border-amber-100 shadow-sm">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: JURUSAN & KAMPUS (mode kuliah/hybrid)
      ═══════════════════════════════════════════════════ */}
      {laporan.jurusan && laporan.jurusan.length > 0 && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-50 rounded-2xl flex items-center justify-center text-xl">🎓</div>
            <div>
              <h3 className="text-base font-bold text-ink">Rekomendasi Jurusan Realistis</h3>
              <p className="text-xs text-ink-light">Disesuaikan dengan kondisi keuangan dan lokasimu</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {laporan.jurusan.map((j, i) => (
              <div key={i} className="bg-surface-50 p-5 rounded-2xl border border-surface-200 flex flex-col h-full">
                <div className="text-[10px] font-bold text-brand-600 uppercase mb-1">Rekomendasi #{i+1}</div>
                <h4 className="text-lg font-extrabold text-ink leading-tight mb-3">{j.nama}</h4>
                <p className="text-sm text-ink-light leading-relaxed mb-4 flex-1">
                  {j.reasoning}
                </p>
                <div className="bg-white p-3 rounded-xl border border-surface-100">
                  <div className="text-[10px] font-bold text-ink-light uppercase mb-1">Opsi Kampus</div>
                  <div className="text-sm font-semibold text-ink leading-snug mb-2">{j.kampus_rekomendasi}</div>
                  <div className="text-[10px] font-bold text-ink-light uppercase mb-1 mt-3">Persaingan</div>
                  <div className="text-xs text-ink bg-surface-100 px-2 py-1 rounded inline-block">{j.keketatan}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          SECTION 4B: JALUR VOKASI / KERJA LANGSUNG (mode kerja/hybrid)
      ═══════════════════════════════════════════════════ */}
      {laporan.jalur_vokasi && laporan.jalur_vokasi.length > 0 && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal-50 rounded-2xl flex items-center justify-center text-xl">🛠️</div>
            <div>
              <h3 className="text-base font-bold text-ink">Jalur Kerja Langsung yang Realistis</h3>
              <p className="text-xs text-ink-light">Tanpa kuliah dulu — lengkap dengan cara masuk & sertifikasi pendukung</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {laporan.jalur_vokasi.map((v, i) => (
              <div key={i} className="bg-surface-50 p-5 rounded-2xl border border-surface-200 flex flex-col h-full">
                <div className="text-[10px] font-bold text-teal-600 uppercase mb-1">Jalur #{i + 1}</div>
                <h4 className="text-lg font-extrabold text-ink leading-tight mb-3">{v.nama}</h4>
                <p className="text-sm text-ink-light leading-relaxed mb-4 flex-1">{v.gambaran_nyata}</p>
                <div className="bg-white p-3 rounded-xl border border-surface-100 space-y-3">
                  <div>
                    <div className="text-[10px] font-bold text-ink-light uppercase mb-1">Cara Masuk</div>
                    <div className="text-sm font-medium text-ink leading-snug">{v.cara_masuk}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-ink-light uppercase mb-1">Sertifikasi Pendukung</div>
                    <div className="text-sm font-medium text-ink leading-snug">{v.sertifikasi_pendukung}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-teal-700 uppercase mb-1">Potensi Naik Kelas</div>
                    <div className="text-sm font-medium text-ink leading-snug">{v.potensi_naik_kelas}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          SECTION 5: PROFESI & JALUR
      ═══════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-xl">💼</div>
          <div>
            <h3 className="text-base font-bold text-ink">Peta Karier Jangka Panjang</h3>
            <p className="text-xs text-ink-light">Proyeksi profesi di dunia nyata</p>
          </div>
        </div>
        <div className="space-y-4">
          {laporan.profesi.map((p, i) => (
            <div key={i} className="bg-surface-50 p-5 rounded-2xl border border-surface-200">
              <h4 className="text-base font-bold text-ink mb-2">{p.nama}</h4>
              <p className="text-sm text-ink-light leading-relaxed mb-4">{p.gambaran_nyata}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white p-3 rounded-xl border border-surface-100 flex-1">
                  <div className="text-[10px] font-bold text-indigo-600 uppercase mb-1">Jalur Masuk</div>
                  <div className="text-sm font-medium text-ink leading-snug">{p.jalur_masuk}</div>
                </div>
                {p.catatan && (
                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 flex-1">
                    <div className="text-[10px] font-bold text-amber-700 uppercase mb-1">Catatan Khusus</div>
                    <div className="text-sm font-medium text-amber-900 leading-snug">{p.catatan}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: LANGKAH SELANJUTNYA & PENUTUP
      ═══════════════════════════════════════════════════ */}
      <div className="bg-brand-50 rounded-3xl p-6 md:p-8 shadow-sm border border-brand-100 text-center">
        <h3 className="text-lg font-bold text-brand-900 mb-4">Langkah Selanjutnya</h3>
        <div className="text-sm text-brand-800 leading-relaxed mb-6 max-w-2xl mx-auto text-left space-y-3">
          {laporan.langkah_selanjutnya.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="w-12 h-1 bg-brand-200 mx-auto rounded-full mb-6"></div>
        <p className="text-sm font-medium text-ink-light italic max-w-xl mx-auto">
          &quot;{laporan.penutup}&quot;
        </p>
      </div>

    </div>
  )
}
