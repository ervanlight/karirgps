export default function InsightCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="p-8 md:p-10 bg-white border border-surface-200 rounded-3xl shadow-sm h-full">
      <h3 className="text-xs font-bold text-ink-light uppercase tracking-widest mb-4">{title}</h3>
      <p className="text-xl md:text-2xl font-bold text-ink leading-[1.6] text-balance">
        {content}
      </p>
    </div>
  )
}
