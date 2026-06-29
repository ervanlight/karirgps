import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://karirgps.id'),
  title: {
    default: 'KarirGPS — Tes Minat Bakat & Bimbingan Pilih Jurusan untuk Siswa SMA',
    template: '%s · KarirGPS',
  },
  description: 'Tes minat bakat online untuk siswa SMA Indonesia. Kenali RIASEC, kecerdasan, dan nilai kerjamu lalu dapatkan rekomendasi jurusan dan profesi yang relevan dengan kondisimu — bukan template generik.',
  keywords: ['tes minat bakat', 'pilih jurusan', 'bimbingan karir', 'tes RIASEC', 'jurusan kuliah', 'tes bakat SMA', 'konseling karir siswa'],
  openGraph: {
    title: 'KarirGPS — Tes Minat Bakat & Bimbingan Pilih Jurusan',
    description: 'Kenali cara berpikir dan nilai kerjamu, lalu dapatkan rekomendasi jurusan & profesi yang relevan dengan kondisi nyatamu.',
    url: '/',
    siteName: 'KarirGPS',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KarirGPS — Tes Minat Bakat & Bimbingan Pilih Jurusan',
    description: 'Kenali cara berpikir dan nilai kerjamu, lalu dapatkan rekomendasi jurusan & profesi yang relevan dengan kondisi nyatamu.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body style={{ margin: 0, padding: 0 }} className="font-sans">
        {children}
      </body>
    </html>
  )
}
