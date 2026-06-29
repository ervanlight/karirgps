export default function Timeline({ title, items }: { title: string, items: { period: string; action: string }[] }) {
  return (
    <div className="w-full p-8 md:p-12 bg-white border border-surface-200 rounded-3xl shadow-sm relative">
      <h3 className="text-xs font-bold text-ink-light uppercase tracking-widest mb-10">{title}</h3>
      
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-surface-200" />
        
        <div className="space-y-10">
          {items.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[32px] md:-left-[36px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-brand-500 shadow-sm z-10" />
              <h4 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-2">{item.period}</h4>
              <p className="text-base text-ink leading-[1.8] font-medium">{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
