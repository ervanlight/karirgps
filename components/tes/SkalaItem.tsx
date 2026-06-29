'use client'

interface SkalaItemProps {
  id: string
  pernyataan: string
  nilai: number | null
  onSelect: (id: string, nilai: number) => void
}

export default function SkalaItem({ id, pernyataan, nilai, onSelect }: SkalaItemProps) {
  return (
    <div className="bg-white border border-surface-200 rounded-2xl p-6 md:p-8 mb-6 shadow-sm hover:shadow-soft transition-shadow">
      <div className="text-base md:text-lg text-ink font-medium leading-relaxed mb-6 text-center text-balance">
        &quot;{pernyataan}&quot;
      </div>
      
      <div className="flex justify-between text-xs font-semibold text-ink-light uppercase tracking-wider mb-3">
        <span>Sangat tidak setuju</span>
        <span>Sangat setuju</span>
      </div>
      
      <div className="flex gap-2 md:gap-4">
        {[1, 2, 3, 4, 5].map((n) => {
          const isSelected = nilai === n
          return (
            <button
              key={n}
              onClick={() => onSelect(id, n)}
              className={`flex-1 h-14 md:h-16 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 ${
                isSelected
                  ? 'bg-brand-600 text-white shadow-md scale-105'
                  : 'bg-white text-ink-light border border-surface-200 hover:bg-surface-100 hover:text-ink hover:scale-105'
              }`}
            >
              {n}
            </button>
          )
        })}
      </div>
    </div>
  )
}
