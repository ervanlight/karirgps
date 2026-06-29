export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-500">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
          </div>
          <span className="text-slate-900 font-bold">KarirGPS</span>
        </div>
        <p>© {new Date().getFullYear()} KarirGPS. EduTech Decision Engine.</p>
      </div>
    </footer>
  )
}
