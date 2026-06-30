export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-50 border-y border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">Gambaran reaksi yang sering muncul</h2>
          <p className="text-sm text-ink-light max-w-xl mx-auto">
            Contoh ilustratif dari jenis kebingungan yang biasanya terjawab — bukan kutipan pengguna terverifikasi.
          </p>
        </div>

        {/* Testimonials (ilustratif) */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-200 shadow-sm">
            <p className="text-ink leading-[1.7] mb-6 text-sm">
              &ldquo;Awalnya bingung banget mau kuliah atau kerja. Analisis ini ngasih aku plan yang jelas buat coba magang dulu setahun tanpa ngerasa bersalah karena itu memang pilihan paling logis buat kondisiku.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center font-bold text-ink-light text-sm">R</div>
              <div>
                <div className="text-sm font-bold text-ink">Raka A.</div>
                <div className="text-xs text-ink-light">Siswa SMK - Lulusan 2024</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-200 shadow-sm">
            <p className="text-ink leading-[1.7] mb-6 text-sm">
              &ldquo;Hasilnya bikin saya bisa ngobrol rasional sama anak. Nggak cuma berasumsi, tapi kita jadi tahu mana jalan yang secara finansial dan skill paling masuk akal buat dia ke depannya.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center font-bold text-ink-light text-sm">B</div>
              <div>
                <div className="text-sm font-bold text-ink">Bapak Budi</div>
                <div className="text-xs text-ink-light">Orang Tua Siswa SMA/SMK</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-200 shadow-sm">
            <p className="text-ink leading-[1.7] mb-6 text-sm">
              &ldquo;Jauh lebih ngebantu dibanding tes psikologi standar yang cuma ngasih tau kepribadian. Ini ngasih roadmap bulan demi bulan yang benar-benar bisa dipraktekkan.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-surface-100 rounded-full flex items-center justify-center font-bold text-ink-light text-sm">N</div>
              <div>
                <div className="text-sm font-bold text-ink">Nabila S.</div>
                <div className="text-xs text-ink-light">Gap Year</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
