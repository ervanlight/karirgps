export default function CareerGrid({ title, paths }: { title: string, paths: { name: string; description: string }[] }) {
  return (
    <div className="w-full">
      <h3 className="text-xs font-bold text-ink-light uppercase tracking-widest mb-6 px-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paths.map((p, i) => (
          <div key={i} className="p-6 bg-white border border-surface-200 rounded-2xl shadow-sm hover:border-brand-300 transition-colors">
            <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-sm font-bold text-ink mb-4">
              {i + 1}
            </div>
            <h4 className="text-lg font-bold text-ink mb-2 leading-[1.3]">{p.name}</h4>
            <p className="text-sm text-ink-light leading-[1.7]">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
