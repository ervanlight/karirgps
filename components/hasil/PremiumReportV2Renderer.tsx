import type { PremiumReportV2, PremiumReportSection } from '@/types'
import { useEffect, useState } from 'react'
import DecisionCard from './DecisionCard'
import InsightCard from './InsightCard'
import CareerBarChart from './CareerBarChart'
import CareerGrid from './CareerGrid'
import FlowDiagram from './FlowDiagram'
import Timeline from './Timeline'
import RiskCard from './RiskCard'

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
        // Specifically check for Executive Summary vs Insight
        if (section.id === 'executive_summary') {
          return <DecisionCard recommendation={laporan.user_profile.decision_type.toUpperCase()} subtitle={section.content} />
        }
        return <InsightCard title={section.title} content={section.content || ''} />

      case 'visual_card':
        // Identity Map - we can reuse InsightCard for cards or build inline
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.cards?.map((card, i) => (
              <div key={i} className="p-8 bg-white border border-surface-200 rounded-3xl shadow-sm h-full flex flex-col justify-between">
                <div className="text-xs font-bold text-ink-light uppercase tracking-widest mb-4">{card.label}</div>
                <div className="text-xl font-bold text-ink leading-tight">{card.value}</div>
              </div>
            ))}
          </div>
        )

      case 'visual_ranking':
        return <CareerBarChart title={section.title} items={section.items || []} />

      case 'tree_diagram':
        return <FlowDiagram root={section.tree?.root || ''} branches={section.tree?.branches || []} />

      case 'timeline':
        return <Timeline title={section.title} items={section.timeline || []} />

      case 'warning_block':
        return <RiskCard title={section.title} content={section.content || ''} />

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 font-sans bg-surface-50 min-h-screen text-ink">
      {/* LEFT: STICKY NAV (Hidden in print) */}
      <div className="hidden md:block w-48 shrink-0 print:hidden py-12 pl-8">
        <div className="sticky top-12 space-y-3">
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
      <div className="flex-1 max-w-4xl py-12 pr-8 pb-32">
        <style>{`
          @media print {
            @page { size: A4; margin: 2cm; }
            body { background: #F8FAFC !important; }
            .print-break-inside-avoid { break-inside: avoid; }
            .print-break-before { break-before: page; }
            .shadow-sm, .shadow-md, .shadow-lg { box-shadow: none !important; }
          }
        `}</style>
        
        {/* DYNAMIC SECTIONS RENDERER */}
        <div className="space-y-8">
          {laporan.sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-12 print-break-inside-avoid">
              {/* Skip title for specific highly visual components */}
              {!['executive_summary', 'career_paths', 'tree_diagram', 'timeline', 'warning_block'].includes(section.id) && section.id !== 'identity_map' && (
                <h2 className="text-xl font-bold uppercase tracking-tight text-ink mb-6">
                  {section.title}
                </h2>
              )}
              {renderComponent(section)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
