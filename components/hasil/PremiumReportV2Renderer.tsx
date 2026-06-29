'use client'

import type { PremiumReportV2, PremiumReportSection } from '@/types'
import { useEffect, useState } from 'react'

export default function PremiumReportV2Renderer({ laporan }: { laporan: PremiumReportV2 }) {
  const [activeSection, setActiveSection] = useState(laporan.sections[0]?.id || '')

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

    laporan.sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [laporan.sections])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const renderComponent = (section: PremiumReportSection) => {
    switch (section.type) {
      case 'text_block':
        return (
          <div className="mb-6 p-6 md:p-8 bg-surface-50 border border-surface-200 rounded-2xl">
            <p className="text-[16px] md:text-[18px] leading-[1.8] font-medium text-ink">{section.content}</p>
          </div>
        )

      case 'visual_card':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {section.cards?.map((card, i) => (
              <div key={i} className="p-5 border border-surface-200 rounded-xl bg-white shadow-sm">
                <div className="text-[10px] font-bold text-ink-light uppercase tracking-widest mb-2">{card.label}</div>
                <div className="text-[15px] font-bold text-ink">{card.value}</div>
              </div>
            ))}
          </div>
        )

      case 'visual_ranking':
        return (
          <div className="space-y-4 mb-6">
            {section.items?.map((item, i) => (
              <div key={i} className="p-5 border border-surface-200 rounded-xl bg-white shadow-sm flex flex-col md:flex-row md:items-center gap-4">
                <div className="shrink-0 w-16 h-16 rounded-full bg-surface-50 flex items-center justify-center font-bold text-lg text-ink border border-surface-200">
                  {item.score}%
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-ink mb-1">{item.path}</h4>
                  <p className="text-sm text-ink-light leading-relaxed">{item.description}</p>
                  <div className="mt-3 w-full bg-surface-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-ink h-full rounded-full" style={{ width: `${item.score}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'tree_diagram':
        return (
          <div className="mb-6 bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200 overflow-x-auto">
            <div className="flex flex-col items-center min-w-[600px]">
              <div className="px-6 py-3 bg-ink text-white font-bold rounded-lg shadow-md mb-8 relative z-10 text-sm">
                {section.tree?.root}
              </div>
              
              <div className="relative w-full flex justify-between px-10">
                {/* Connecting Lines */}
                <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-surface-300 -translate-y-8" />
                <div className="absolute top-0 left-[10%] w-0.5 h-8 bg-surface-300 -translate-y-8" />
                <div className="absolute top-0 left-[50%] w-0.5 h-8 bg-surface-300 -translate-y-8" />
                <div className="absolute top-0 right-[10%] w-0.5 h-8 bg-surface-300 -translate-y-8" />

                {section.tree?.branches.map((branch, i) => (
                  <div key={i} className="flex flex-col items-center w-1/3 px-2">
                    <div className="px-4 py-2 bg-white border-2 border-brand-500 text-brand-700 font-bold rounded-lg shadow-sm mb-4 text-xs uppercase tracking-wider">
                      {branch.label}
                    </div>
                    <div className="text-[13px] text-center text-ink leading-relaxed">
                      {branch.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'timeline':
        return (
          <div className="mb-6 p-6 md:p-8 bg-white border border-surface-200 rounded-2xl shadow-sm relative pl-12 md:pl-16">
            <div className="absolute left-6 md:left-8 top-10 bottom-10 w-0.5 bg-surface-200"></div>
            <div className="space-y-8">
              {section.timeline?.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[35px] md:-left-[43px] top-1 w-4 h-4 rounded-full bg-brand-500 border-4 border-white shadow-sm z-10" />
                  <h4 className="text-[12px] font-bold text-brand-600 uppercase tracking-widest mb-1">{item.period}</h4>
                  <p className="text-[15px] font-medium text-ink leading-relaxed">{item.action}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'warning_block':
        return (
          <div className="mb-6 p-6 border-l-4 border-red-500 bg-red-50/50 rounded-r-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">⚠️</span>
              <div>
                <p className="text-[15px] font-medium text-red-900 leading-[1.8]">{section.content}</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 font-sans bg-white text-ink">
      {/* LEFT: STICKY NAV (Hidden in print) */}
      <div className="hidden md:block w-48 shrink-0 print:hidden">
        <div className="sticky top-24 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink-light mb-4">Table of Contents</div>
          {laporan.sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`block text-left text-sm w-full transition-colors ${
                activeSection === s.id 
                  ? 'text-brand-600 font-bold' 
                  : 'text-ink-light hover:text-ink font-medium'
              }`}
            >
              {s.title}
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
            .shadow-sm, .shadow-md { box-shadow: none !important; }
          }
        `}</style>

        {/* HERO TITLE */}
        <div className="border-b-2 border-ink pb-4 mb-8 print-break-inside-avoid">
          <h1 className="text-3xl md:text-[32px] font-bold tracking-tight uppercase text-ink">
            Career Intelligence Report
          </h1>
        </div>
        
        {/* METADATA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm print-break-inside-avoid">
          <div>
            <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Klien</span>
            <span className="font-semibold">{laporan.user_profile.name || 'User'}</span>
          </div>
          <div>
            <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Tanggal</span>
            <span className="font-semibold">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <div className="col-span-2">
            <span className="block text-ink-light uppercase text-[10px] tracking-widest font-bold mb-1">Kecenderungan</span>
            <span className="font-bold text-brand-700">{laporan.user_profile.decision_type.toUpperCase()}</span>
          </div>
        </div>

        {/* DYNAMIC SECTIONS RENDERER */}
        {laporan.sections.map((section) => (
          <div key={section.id} id={section.id} className="mb-12 scroll-mt-24 print-break-inside-avoid">
            <h2 className="text-xl font-bold uppercase tracking-tight text-ink border-b-2 border-surface-200 pb-3 mb-6">
              {section.title}
            </h2>
            {renderComponent(section)}
          </div>
        ))}
      </div>
    </div>
  )
}
