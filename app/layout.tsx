import './globals.css' // Penting: Ini yang membuat tampilan Anda muncul!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}