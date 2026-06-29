export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Membantu ribuan siswa mengambil langkah yang tepat</h2>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-slate-200 py-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600 mb-1">10k+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Siswa mencoba</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600 mb-1">92%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Merasa lebih yakin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-brand-600 mb-1">3.5k+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Akses full report</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-[1.7] mb-6 text-sm">
              &ldquo;Awalnya bingung banget mau kuliah atau kerja. Analisis ini ngasih aku plan yang jelas buat coba magang dulu setahun tanpa ngerasa bersalah karena itu memang pilihan paling logis buat kondisiku.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">R</div>
              <div>
                <div className="text-sm font-bold text-slate-900">Raka A.</div>
                <div className="text-xs text-slate-500">Siswa SMK - Lulusan 2024</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-[1.7] mb-6 text-sm">
              &ldquo;Hasilnya bikin saya bisa ngobrol rasional sama anak. Nggak cuma berasumsi, tapi kita jadi tahu mana jalan yang secara finansial dan skill paling masuk akal buat dia ke depannya.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">B</div>
              <div>
                <div className="text-sm font-bold text-slate-900">Bapak Budi</div>
                <div className="text-xs text-slate-500">Orang Tua Siswa SMA</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-[1.7] mb-6 text-sm">
              &ldquo;Jauh lebih ngebantu dibanding tes psikologi standar yang cuma ngasih tau kepribadian. Ini ngasih roadmap bulan demi bulan yang benar-benar bisa dipraktekkan.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">N</div>
              <div>
                <div className="text-sm font-bold text-slate-900">Nabila S.</div>
                <div className="text-xs text-slate-500">Gap Year</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
