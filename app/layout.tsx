import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KarirGPS — Temukan Arahmu, Bukan Sekadar Jurusan',
  description:
    '87% mahasiswa Indonesia merasa salah jurusan. KarirGPS hadir supaya kamu tidak masuk statistik itu. Tes minat, cara berpikir, dan nilai kerja dalam satu platform — laporan naratif yang terasa ditulis khusus untukmu.',
  keywords: 'tes bakat, tes minat, pilih jurusan, karir, RIASEC, bimbingan karir Indonesia',
  openGraph: {
    title: 'KarirGPS — Temukan Arahmu, Bukan Sekadar Jurusan',
    description: 'Bukan sekadar tes bakat. Peta perjalananmu.',
    url: 'https://karirgps.id',
    siteName: 'KarirGPS',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
