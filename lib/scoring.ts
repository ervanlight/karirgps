import type {
  RiasecCode, RiasecScores,
  MICode, MIScores,
  WorkValueCode, WorkValueScores,
  TesSession, ProfilData,
} from '@/types'

// ============================================================
// SCORING ENGINE — KarirGPS
// Menghitung skor dari jawaban mentah → profil lengkap
// ============================================================

// --- Labels ---
export const RIASEC_LABELS: Record<RiasecCode, string> = {
  R: 'Realistic', I: 'Investigative', A: 'Artistic',
  S: 'Social', E: 'Enterprising', C: 'Conventional',
}
export const RIASEC_DESC: Record<RiasecCode, string> = {
  R: 'Praktis, teknis, kerja tangan, fisik, alam',
  I: 'Analitis, riset, sains, pemecahan masalah',
  A: 'Kreatif, ekspresif, estetis, orisinal',
  S: 'Membantu, mengajar, interpersonal, komunitas',
  E: 'Memimpin, persuasif, bisnis, ambisius',
  C: 'Terstruktur, sistematis, detail, administratif',
}

export const MI_LABELS: Record<MICode, string> = {
  L: 'Linguistik', LM: 'Logis-Matematis', SP: 'Spasial',
  MU: 'Musikal', BK: 'Kinestetik', N: 'Naturalis',
  IP: 'Interpersonal', IA: 'Intrapersonal',
}
export const MI_DESC: Record<MICode, string> = {
  L: 'Berpikir lewat kata — membaca, menulis, bercerita, berdebat',
  LM: 'Berpikir lewat pola dan logika — angka, sistem, sebab-akibat',
  SP: 'Berpikir lewat gambar dan ruang — visual, desain, orientasi',
  MU: 'Berpikir lewat suara dan ritme — melodi, nada, irama',
  BK: 'Berpikir lewat gerakan — fisik, tangan, koordinasi tubuh',
  N: 'Berpikir lewat pola alam — klasifikasi, ekosistem, lingkungan',
  IP: 'Berpikir lewat orang lain — empati, membaca dinamika sosial',
  IA: 'Berpikir lewat diri sendiri — refleksi, nilai, kesadaran diri',
}

export const WV_LABELS: Record<WorkValueCode, string> = {
  ST: 'Stabilitas', DA: 'Dampak', OT: 'Otonomi',
  KR: 'Kreativitas', KM: 'Kemakmuran', FL: 'Fleksibilitas',
}
export const WV_DESC: Record<WorkValueCode, string> = {
  ST: 'Keamanan kerja, penghasilan tetap, masa depan yang bisa direncanakan',
  DA: 'Kontribusi nyata, membantu orang lain, kerja yang bermakna',
  OT: 'Kebebasan memutuskan, tidak bergantung arahan orang lain',
  KR: 'Ruang untuk berinovasi, menciptakan sesuatu yang baru',
  KM: 'Penghasilan tinggi, kebebasan finansial',
  FL: 'Keseimbangan hidup-kerja, waktu yang bisa diatur sendiri',
}

// --- RIASEC Scoring ---
export function hitungRiasec(
  skenario: Partial<Record<string, RiasecCode>>,
  skala: Partial<Record<string, number>>
): RiasecScores {
  const scores: RiasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }

  // Skenario: setiap pilihan = +2 poin
  for (const [, kode] of Object.entries(skenario)) {
    if (kode && kode in scores) {
      scores[kode as RiasecCode] += 2
    }
  }

  // Skala mapping (soal ID → tipe)
  const skalaMap: Record<string, RiasecCode> = {
    'SK-R1': 'R', 'SK-R2': 'R',
    'SK-I1': 'I', 'SK-I2': 'I',
    'SK-A1': 'A', 'SK-A2': 'A',
    'SK-S1': 'S', 'SK-S2': 'S',
    'SK-E1': 'E', 'SK-E2': 'E',
    'SK-C1': 'C', 'SK-C2': 'C',
  }

  for (const [id, nilai] of Object.entries(skala)) {
    const tipe = skalaMap[id]
    if (tipe && nilai) {
      scores[tipe] += nilai
    }
  }

  return scores
}

// --- MI Scoring ---
export function hitungMI(
  skenario: Partial<Record<string, MICode>>,
  skala: Partial<Record<string, number>>
): MIScores {
  const scores: MIScores = { L: 0, LM: 0, SP: 0, MU: 0, BK: 0, N: 0, IP: 0, IA: 0 }

  for (const [, kode] of Object.entries(skenario)) {
    if (kode && kode in scores) {
      scores[kode as MICode] += 2
    }
  }

  const skalaMap: Record<string, MICode> = {
    'SK-L1': 'L', 'SK-L2': 'L',
    'SK-LM1': 'LM', 'SK-LM2': 'LM',
    'SK-SP1': 'SP', 'SK-SP2': 'SP',
    'SK-MU1': 'MU', 'SK-MU2': 'MU',
    'SK-BK1': 'BK', 'SK-BK2': 'BK',
    'SK-N1': 'N', 'SK-N2': 'N',
    'SK-IP1': 'IP', 'SK-IP2': 'IP',
    'SK-IA1': 'IA', 'SK-IA2': 'IA',
  }

  for (const [id, nilai] of Object.entries(skala)) {
    const tipe = skalaMap[id]
    if (tipe && nilai) {
      scores[tipe] += nilai
    }
  }

  return scores
}

// --- Work Values Scoring ---
export function hitungWorkValues(
  tradeoff: Partial<Record<string, WorkValueCode>>,
  skala: Partial<Record<string, number>>
): WorkValueScores {
  const scores: WorkValueScores = { ST: 0, DA: 0, OT: 0, KR: 0, KM: 0, FL: 0 }

  for (const [, kode] of Object.entries(tradeoff)) {
    if (kode && kode in scores) {
      scores[kode as WorkValueCode] += 2
    }
  }

  const skalaMap: Record<string, WorkValueCode> = {
    'SK-ST1': 'ST', 'SK-ST2': 'ST',
    'SK-DA1': 'DA', 'SK-DA2': 'DA',
    'SK-OT1': 'OT', 'SK-OT2': 'OT',
    'SK-KR1': 'KR', 'SK-KR2': 'KR',
    'SK-KM1': 'KM', 'SK-KM2': 'KM',
    'SK-FL1': 'FL', 'SK-FL2': 'FL',
  }

  for (const [id, nilai] of Object.entries(skala)) {
    const tipe = skalaMap[id]
    if (tipe && nilai) {
      scores[tipe] += nilai
    }
  }

  return scores
}

// --- Sort scores, return top N ---
function sortedTop<T extends string>(
  scores: Record<T, number>,
  n: number
): T[] {
  return (Object.entries(scores) as [T, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k]) => k)
}

// --- Build ProfilData from TesSession ---
export function buildProfil(session: TesSession): ProfilData {
  const riasecScores = hitungRiasec(session.d1_skenario, session.d1_skala)
  const miScores = hitungMI(session.d2_skenario, session.d2_skala)
  const wvScores = hitungWorkValues(session.d3_tradeoff, session.d3_skala)

  const hollandCode = sortedTop<RiasecCode>(riasecScores, 3)
  const miProfile = sortedTop<MICode>(miScores, 3)
  const wvProfile = sortedTop<WorkValueCode>(wvScores, 2)

  return {
    d1_riasec: {
      skor: riasecScores,
      holland_code: hollandCode,
      deskripsi_primer: RIASEC_LABELS[hollandCode[0]],
      deskripsi_sekunder: RIASEC_LABELS[hollandCode[1]],
    },
    d2_mi: {
      skor: miScores,
      mi_profile: miProfile,
      deskripsi_primer: MI_LABELS[miProfile[0]],
      deskripsi_sekunder: MI_LABELS[miProfile[1]],
    },
    d3_workvalues: {
      skor: wvScores,
      values_profile: wvProfile,
      deskripsi_primer: WV_LABELS[wvProfile[0]],
      deskripsi_sekunder: WV_LABELS[wvProfile[1]],
    },
    d4_konteks: session.d4_konteks as Required<typeof session.d4_konteks>,
  }
}

// --- Score percentage helper (for UI bars) ---
export function persen(skor: number, maxPerTipe: number = 16): number {
  return Math.round((skor / maxPerTipe) * 100)
}

// --- Combination table: RIASEC × MI → recommended direction ---
export const KOMBINASI_RIASEC_MI: Record<string, string> = {
  'I-LM': 'Matematika, Statistika, Data Science, Fisika',
  'I-L': 'Jurnalisme sains, Filsafat, Sastra, Ilmu Komunikasi',
  'I-SP': 'Arsitektur, Teknik, UX Research, Radiologi',
  'I-N': 'Kedokteran, Biologi, Farmasi, Lingkungan',
  'A-SP': 'DKV, Animasi, Arsitektur interior, Film',
  'A-MU': 'Musik, Produksi audio, Seni pertunjukan',
  'A-L': 'Sastra, Penulisan kreatif, Skenario, Jurnalistik',
  'A-BK': 'Tari, Teater fisik, Kriya, Kedokteran gigi',
  'S-IP': 'Psikologi, Konseling, HR, Pekerjaan sosial',
  'S-L': 'Komunikasi, Pendidikan bahasa, Diplomasi',
  'S-IA': 'Psikologi klinis, Penelitian perilaku, Konseling',
  'E-L': 'Hukum, PR, Politik, Pemasaran konten',
  'E-LM': 'Keuangan, Strategi bisnis, Konsultansi',
  'E-IP': 'Manajemen, Negosiasi, Wirausaha sosial',
  'C-LM': 'Akuntansi, Audit, Sistem Informasi',
  'C-SP': 'Desain sistem, Manajemen arsip visual, Kartografi',
  'R-BK': 'Teknik mesin, Fisioterapi, Olahraga, Kedokteran gigi',
  'R-N': 'Pertanian modern, Kehutanan, Teknik lingkungan',
  'R-SP': 'Teknik sipil, Arsitektur, Desain produk',
}

// --- Combination table: RIASEC × Work Values → role direction ---
export const KOMBINASI_RIASEC_WV: Record<string, string> = {
  'S-ST': 'Guru PNS, Konselor BK, Penyuluh sosial pemerintah',
  'S-DA': 'Pekerja sosial NGO, Relawan profesional, Pendidik komunitas',
  'S-OT': 'Coach independen, Psikolog praktik mandiri',
  'S-KM': 'HR Director, Psikolog korporat, Konsultan SDM',
  'E-ST': 'Manajer BUMN, Pejabat birokrasi, Eksekutif korporat',
  'E-DA': 'Wirausaha sosial, Aktivis kebijakan, Political strategist',
  'E-OT': 'Founder startup, Pengusaha, Konsultan mandiri',
  'E-KM': 'Investment banker, Konsultan strategi, Sales Director',
  'I-ST': 'Peneliti lembaga pemerintah, Dosen tetap, Analis BUMN',
  'I-DA': 'Peneliti kesehatan, Ilmuwan lingkungan, Epidemiolog',
  'I-OT': 'Peneliti independen, Konsultan riset, Akademisi freelance',
  'I-KR': 'Data Scientist, R&D specialist, Pengembang teknologi',
  'A-ST': 'Desainer in-house, Content creator media besar, PNS budaya',
  'A-OT': 'Freelance designer, Seniman independen, Creative director',
  'A-KM': 'UX Lead teknologi, Art Director brand besar',
  'A-FL': 'Remote creative, Digital nomad, Illustrator freelance',
  'R-ST': 'Teknisi BUMN, PNS teknik, Engineer korporat besar',
  'R-KM': 'Engineer minyak & gas, Pilot, Dokter spesialis',
  'R-OT': 'Kontraktor independen, Petani modern, Wirausaha teknik',
  'C-ST': 'Akuntan pemerintah, Auditor BUMN, Administrator publik',
  'C-KM': 'Akuntan Big4, Analis keuangan investasi, Aktuaris',
  'C-OT': 'Konsultan keuangan mandiri, Bookkeeper freelance',
}
