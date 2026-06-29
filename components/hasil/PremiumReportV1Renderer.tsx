'use client'
import type { PremiumReportV1 } from '@/types'
import { useEffect, useState, useRef } from 'react'

const SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'personality', label: 'Personality' },
  { id: 'career-fit', label: 'Career Fit' },
  { id: 'simulation', label: 'Simulation' },
  { id: 'income', label: 'Income Projection' },
  { id: 'risk', label: 'Risk' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'final', label: 'Final Insight' },
]

export default function PremiumReportV1Renderer({ laporan, userName = 'Penjelajah' }: { laporan: PremiumReportV1, userName?: string }) {
  const { 
    executive_summary, 
    cognitive_profile, 
    career_fit, 
    path_simulation, 
    real_world_outcome, 
    risk_analysis, 
    strategic_roadmap, 
    final_diagnosis 
  } = laporan

  const [activeSection, setActiveSection] = useState('summary')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Formatting helpers
  const isKerja = executive_summary.core_direction.toLowerCase().includes('kerja')
  const isKuliah = executive_summary.core_direction.toLowerCase().includes('kuliah')
  const decisionColor = isKerja ? 'text-amber-700' : isKuliah ? 'text-brand-700' : 'text-indigo-700'

  return (
    <div className="flex flex-col md:flex-row gap-12 font-sans bg-white text-ink">
      {/* LEFT: STICKY NAV (Hidden in print) */}
      <div className="hidden md:block w-48 shrink-0 print:hidden">
        <div className="sticky top-24 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink-light mb-4">Table of Contents</div>
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block text-left text-sm w-full transition-colors ${
                activeSection === s.id 
                  ? 'text-brand-600 font-bold' 
                  : 'text-ink-light hover:text-ink font-medium'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: MAIN CONTENT (A4 Print optimized) */}
      <div className="flex-1 max-w-3xl pb-32">
        <style>{`
          @media print {
            @page { size: A4; margin: 2cm; }
            body { background: #ffffff !important; }
            .print-break-inside-avoid { break-inside: avoid; }
            .print-break-before { break-before: page; }
          }
        `}</style>

        {/* SECTION 0: HERO (SUMMARY) */}
        <div id="summary" className="mb-16 print-break-inside-avoid scroll-mt-24">
          <div className="border-b-2 border-ink pb-4 mb-8">
            <h1 className="text-3xl md:text-[32px] font-bold tracking-tight uppercase text-ink">
              Career Intelligence Report
            </h1>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div>
              <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Nama Klien</span>
              <span className="font-semibold">{userName}</span>
            </div>
            <div>
              <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Tanggal Analisis</span>
              <span className="font-semibold">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div>
              <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Arah Utama</span>
              <span className={`font-bold ${decisionColor}`}>{executive_summary.core_direction.toUpperCase()}</span>
            </div>
            <div>
              <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Confidence Level</span>
              <span className="font-semibold">Berdasarkan pola psikometrik</span>
            </div>
          </div>

          <p className="text-[15px] leading-[1.8] text-ink mb-6">
            {executive_summary.user_identity}
          </p>

          <div className="bg-brand-50/50 border-l-4 border-brand-500 p-6 rounded-r-xl">
            <div className="text-[10px] font-bold text-brand-700 uppercase tracking-widest mb-2">Core Truth</div>
            <p className="text-[15px] font-medium leading-relaxed text-ink">
              "{executive_summary.truth_statement}"
            </p>
          </div>
        </div>

        {/* SECTION 1: PERSONALITY */}
        <div id="personality" className="mb-16 print-break-inside-avoid scroll-mt-24">
          <h2 className="text-xl font-bold uppercase tracking-tight text-ink border-b-2 border-surface-200 pb-3 mb-6">
            🧠 Personality & Cognitive Profile
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-light mb-2">Pola Pikir (Thinking Style)</h3>
              <p className="text-[15px] leading-[1.8]">{cognitive_profile.thinking_style}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-light mb-2">Gaya Belajar (Learning Style)</h3>
              <p className="text-[15px] leading-[1.8]">{cognitive_profile.learning_style}</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-light mb-2">Pengambilan Keputusan (Decision Style)</h3>
              <p className="text-[15px] leading-[1.8]">{cognitive_profile.decision_style}</p>
            </div>
            
            <div className="bg-surface-50 p-6 border border-surface-200 rounded-xl">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink mb-2">💡 Insight Utama: Kekuatan & Blind Spots</h3>
              <p className="text-[15px] leading-[1.8]">{cognitive_profile.strengths_blindspots}</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CAREER FIT */}
        <div id="career-fit" className="mb-16 print-break-inside-avoid scroll-mt-24 print-break-before">
          <h2 className="text-xl font-bold uppercase tracking-tight text-ink border-b-2 border-surface-200 pb-3 mb-6">
            💼 Career Fit Analysis
          </h2>
          
          <div className="space-y-8">
            {career_fit.map((fit, i) => (
              <div key={i}>
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-lg font-bold">{fit.path_name}</h3>
                  <span className="text-xs font-bold text-ink-light">{90 - (i * 7)}% MATCH</span>
                </div>
                
                {/* Visual Bar Chart */}
                <div className="w-full bg-surface-100 h-2 rounded-full mb-3 overflow-hidden">
                  <div className="bg-ink h-full rounded-full" style={{ width: `${90 - (i * 7)}%` }}></div>
                </div>

                <p className="text-[15px] leading-[1.8] mb-4">{fit.why_it_fits}</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-[13px] leading-relaxed pl-3 border-l-2 border-emerald-500">
                    <strong className="block text-emerald-700 mb-1">Lingkungan Optimal:</strong>
                    {fit.thrive_environment}
                  </div>
                  <div className="text-[13px] leading-relaxed pl-3 border-l-2 border-red-400">
                    <strong className="block text-red-600 mb-1">Hindari Lingkungan:</strong>
                    {fit.avoid_environment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: SIMULATION */}
        <div id="simulation" className="mb-16 print-break-inside-avoid scroll-mt-24">
          <h2 className="text-xl font-bold uppercase tracking-tight text-ink border-b-2 border-surface-200 pb-3 mb-6">
            🔮 Career Simulation
          </h2>
          
          <div className="space-y-6">
            {Object.entries(path_simulation).map(([key, scenario]) => {
              const title = key.split('_')[0].toUpperCase()
              return (
                <div key={key} className="border border-surface-200 rounded-xl p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand-600 mb-3">Jika memilih {title}</h3>
                  <ul className="space-y-3 text-[14px] leading-relaxed">
                    <li><strong className="text-ink">Lifestyle:</strong> {scenario.lifestyle}</li>
                    <li><strong className="text-ink">Skill Trajectory:</strong> {scenario.skill_trajectory}</li>
                    <li><strong className="text-ink">Risks:</strong> {scenario.risks}</li>
                    <li><strong className="text-ink">Outcome:</strong> {scenario.outcome}</li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* SECTION 4: INCOME PROJECTION */}
        <div id="income" className="mb-16 print-break-inside-avoid scroll-mt-24 print-break-before">
          <h2 className="text-xl font-bold uppercase tracking-tight text-ink border-b-2 border-surface-200 pb-3 mb-6">
            💰 Estimasi Karier (Real-World)
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-light mb-2">Proyeksi Pendapatan</h3>
              <div className="text-xl font-bold text-ink">{real_world_outcome.income_range}</div>
              <p className="text-[11px] text-ink-light mt-1">⚠️ Berdasarkan range realistis di Indonesia.</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink-light mb-2">Batas Atas (Ceiling)</h3>
              <div className="text-xl font-bold text-ink">{real_world_outcome.career_ceiling}</div>
            </div>
          </div>
          
          <div className="bg-surface-50 p-6 rounded-xl border border-surface-200">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-ink mb-3">Posisi Industri & Peran Potensial</h3>
            <p className="text-[15px] leading-[1.8] mb-4">{real_world_outcome.industry_positioning}</p>
            <div className="flex flex-wrap gap-2">
              {real_world_outcome.likely_roles.map((role, i) => (
                <span key={i} className="bg-white border border-surface-300 px-3 py-1 text-[13px] font-semibold rounded-md">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: RISK ANALYSIS */}
        <div id="risk" className="mb-16 print-break-inside-avoid scroll-mt-24">
          <h2 className="text-xl font-bold uppercase tracking-tight text-red-700 border-b-2 border-red-200 pb-3 mb-6">
            ⚠ Risiko Utama & Kegagalan
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50/50 p-5 rounded-xl border-l-4 border-red-500">
              <strong className="block text-red-700 mb-1 text-[13px]">Jika salah memilih arah:</strong>
              <p className="text-[15px] leading-[1.8]">{risk_analysis.wrong_direction_impact}</p>
            </div>
            <div className="p-5">
              <strong className="block text-ink mb-1 text-[13px] uppercase tracking-widest">Penyebab Stagnasi</strong>
              <p className="text-[15px] leading-[1.8]">{risk_analysis.stagnation_causes}</p>
            </div>
            <div className="p-5 bg-surface-50 rounded-xl">
              <strong className="block text-ink mb-1 text-[13px] uppercase tracking-widest">Kebiasaan Penghalang (Blockers)</strong>
              <p className="text-[15px] leading-[1.8]">{risk_analysis.growth_blockers}</p>
            </div>
          </div>
        </div>

        {/* SECTION 6: ROADMAP */}
        <div id="roadmap" className="mb-16 print-break-inside-avoid scroll-mt-24 print-break-before">
          <h2 className="text-xl font-bold uppercase tracking-tight text-ink border-b-2 border-surface-200 pb-3 mb-6">
            🗺 Roadmap Strategis (6–12 Bulan)
          </h2>
          
          <div className="space-y-8">
            {strategic_roadmap.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <div className="w-5 h-5 rounded border-2 border-ink flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-ink" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-ink mb-2">{step.timeline}</h3>
                  <p className="text-[15px] leading-[1.8] mb-3">{step.action}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-[13px] bg-surface-50 p-4 rounded-xl">
                    <div><strong className="block text-ink-light mb-1">Fokus Skill:</strong> {step.skill_focus}</div>
                    <div><strong className="block text-ink-light mb-1">Prioritas Belajar:</strong> {step.learning_priority}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: FINAL INSIGHT */}
        <div id="final" className="mb-16 print-break-inside-avoid scroll-mt-24">
          <h2 className="text-xl font-bold uppercase tracking-tight text-brand-600 border-b-2 border-brand-200 pb-3 mb-6">
            🔥 Final Diagnosis
          </h2>
          
          <p className="text-[18px] md:text-[20px] font-bold leading-[1.6] text-ink p-8 bg-surface-50 border border-surface-200 rounded-2xl">
            "{final_diagnosis}"
          </p>
        </div>

      </div>
    </div>
  )
}
