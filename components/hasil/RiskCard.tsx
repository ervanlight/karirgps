export default function RiskCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="w-full p-8 md:p-10 bg-white border border-red-200 rounded-3xl shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
      <div className="flex items-start gap-5">
        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <div>
          <h3 className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3">{title}</h3>
          <p className="text-base text-ink leading-[1.8] font-medium text-balance">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
