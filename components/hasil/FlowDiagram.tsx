export default function FlowDiagram({ root, branches }: { root: string, branches: { label: string; result: string }[] }) {
  return (
    <div className="w-full p-8 md:p-12 bg-surface-50 border border-surface-200 rounded-3xl overflow-hidden relative">
      <h3 className="text-xs font-bold text-ink-light uppercase tracking-widest mb-10 text-center">Simulasi Keputusan</h3>
      
      {/* Desktop (Horizontal Tree) */}
      <div className="hidden md:flex flex-col items-center max-w-4xl mx-auto">
        <div className="px-6 py-3 bg-ink text-white font-bold rounded-xl shadow-md mb-12 relative z-10">
          {root}
        </div>
        
        <div className="relative w-full flex justify-between">
          <div className="absolute top-0 left-[15%] right-[15%] h-px bg-surface-300 -translate-y-12" />
          <div className="absolute top-0 left-[15%] w-px h-12 bg-surface-300 -translate-y-12" />
          <div className="absolute top-0 left-[50%] w-px h-12 bg-surface-300 -translate-y-12" />
          <div className="absolute top-0 right-[15%] w-px h-12 bg-surface-300 -translate-y-12" />

          {branches.map((b, i) => (
            <div key={i} className="flex flex-col items-center w-1/3 px-4">
              <div className="px-4 py-2 bg-white border border-brand-200 text-brand-700 font-bold rounded-lg shadow-sm mb-4 text-xs uppercase tracking-wider">
                {b.label}
              </div>
              <p className="text-sm text-center text-ink leading-relaxed">
                {b.result}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile (Vertical Steps) */}
      <div className="flex md:hidden flex-col gap-6 relative">
        <div className="absolute left-6 top-6 bottom-6 w-px bg-surface-200" />
        
        <div className="relative pl-14">
          <div className="absolute left-[20px] top-3 w-2 h-2 rounded-full bg-ink border-2 border-surface-50 shadow-sm" />
          <div className="text-xs font-bold text-ink-light uppercase tracking-widest mb-2">Kondisi Saat Ini</div>
          <div className="font-bold text-ink">{root}</div>
        </div>

        {branches.map((b, i) => (
          <div key={i} className="relative pl-14">
            <div className="absolute left-[20px] top-4 w-2 h-2 rounded-full bg-brand-500 border-2 border-surface-50 shadow-sm" />
            <div className="px-3 py-1 inline-block bg-white border border-brand-200 text-brand-700 font-bold rounded-md shadow-sm mb-2 text-[10px] uppercase tracking-wider">
              Jika: {b.label}
            </div>
            <p className="text-sm text-ink leading-relaxed">
              {b.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
