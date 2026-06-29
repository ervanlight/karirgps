export default function DecisionCard({ title, recommendation, subtitle }: { title?: string, recommendation: string, subtitle?: string }) {
  return (
    <div className="w-full bg-brand-600 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden flex flex-col justify-center items-center text-center">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-400/30 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-700/50 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
          {title || "Arah Utama"}
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-balance">
          {recommendation}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
