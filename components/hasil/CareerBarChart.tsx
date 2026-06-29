export default function CareerBarChart({ title, items }: { title: string, items: { path: string; score: number }[] }) {
  return (
    <div className="p-8 md:p-10 bg-white border border-surface-200 rounded-3xl shadow-sm h-full flex flex-col">
      <h3 className="text-xs font-bold text-ink-light uppercase tracking-widest mb-6">{title}</h3>
      <div className="space-y-6 flex-1 flex flex-col justify-center">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-ink">{item.path}</span>
              <span className="text-sm font-bold text-brand-600">{item.score}%</span>
            </div>
            <div className="w-full h-2.5 bg-surface-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-500 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${item.score}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
