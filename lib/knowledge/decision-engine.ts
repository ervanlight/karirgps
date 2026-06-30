import type { KonteksPersonal } from '@/types'

// ============================================================
// DECISION ENGINE — Jalur Fokus Laporan
// Logika DETERMINISTIK (bukan AI) yang menentukan kerangka laporan
// sebelum satu token pun dikirim ke model. Ini bagian dari "metode pikir"
// KarirGPS: keputusan struktural dibuat oleh aturan eksplisit yang bisa
// diuji & diaudit, bukan diserahkan ke interpretasi model tiap kali.
// ============================================================

export type JalurFokus = 'kuliah' | 'kerja' | 'hybrid'

const JALUR_KULIAH = ['PTN', 'PTS', 'KEDINASAN', 'LN'] as const

export function tentukanJalurFokus(konteks: KonteksPersonal): JalurFokus {
  const jalur = konteks.jalur || []
  const adaKuliah = jalur.some((j) => (JALUR_KULIAH as readonly string[]).includes(j))
  const adaKerja = jalur.includes('KERJA')

  if (adaKuliah && adaKerja) return 'hybrid'
  if (adaKerja && !adaKuliah) return 'kerja'
  if (adaKuliah && !adaKerja) return 'kuliah'

  // BELUM_TAHU murni (tidak pilih jalur lain): default ke hybrid supaya
  // laporan membuka dua arah sekaligus, bukan menutup salah satu prematur.
  return 'hybrid'
}
