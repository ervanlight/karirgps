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
    <div className="mb-14 pb-8 border-b border-surface-200/50 last:border-0 transition-opacity">
      <div className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-4">
        Skenario {nomor}
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-ink mb-2 leading-relaxed">
        {pertanyaan}
      </h3>
      
      {konteks && (
        <p className="text-sm md:text-base text-ink-light mb-6 leading-relaxed bg-white/50 p-4 rounded-2xl">
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
              className={`w-full text-left p-4 md:p-5 rounded-3xl text-sm md:text-base leading-relaxed transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 ${
                isSelected
                  ? 'bg-brand-600 text-white shadow-md -translate-y-0.5'
                  : 'bg-white hover:bg-surface-100 text-ink border border-surface-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? 'border-white bg-transparent' : 'border-surface-300 bg-white'
                }`}>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
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
