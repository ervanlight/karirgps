'use client'

interface Opsi {
  teks: string
  kode: string
}

interface SkenarioCardProps {
  nomor: number
  pertanyaan: string
  konteks?: string
  opsi: Opsi[]
  selected: string | null
  onSelect: (kode: string) => void
  soalId: string
}

export default function SkenarioCard({
  nomor, pertanyaan, konteks, opsi, selected, onSelect,
}: SkenarioCardProps) {
  return (
    <div className="mb-10 bg-white border border-surface-200 rounded-3xl p-6 md:p-8 shadow-sm transition-shadow hover:shadow-soft">
      <div className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3">
        Skenario {nomor}
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-ink mb-2 leading-relaxed">
        {pertanyaan}
      </h3>
      
      {konteks && (
        <p className="text-sm md:text-base text-ink-light mb-6 leading-relaxed italic border-l-2 border-surface-200 pl-4">
          {konteks}
        </p>
      )}
      
      <div className="grid gap-3 mt-6">
        {opsi.map((o) => {
          const isSelected = selected === o.kode
          return (
            <button
              key={o.kode}
              onClick={() => onSelect(o.kode)}
              className={`w-full text-left p-4 md:p-5 rounded-2xl text-sm md:text-base leading-relaxed transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 ${
                isSelected
                  ? 'bg-brand-50 border-2 border-brand-500 text-brand-700 font-medium shadow-sm'
                  : 'bg-surface-50 border-2 border-transparent hover:bg-surface-100 hover:border-surface-200 text-ink'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  isSelected ? 'border-brand-500 bg-brand-500' : 'border-surface-300 bg-white'
                }`}>
                  {isSelected && (
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="white">
                      <path d="M5.5 10.5L2 7l1.4-1.4 2.1 2.1 5.1-5.1L12 4.5l-6.5 6z" />
                    </svg>
                  )}
                </div>
                <span>{o.teks}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
