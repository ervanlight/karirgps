// ============================================================
// KARIRGPS — TYPE DEFINITIONS
// ============================================================

// --- DIMENSI 1: RIASEC ---
export type RiasecCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C'
export type RiasecScores = Record<RiasecCode, number>

// --- DIMENSI 2: MULTIPLE INTELLIGENCES ---
export type MICode = 'L' | 'LM' | 'SP' | 'MU' | 'BK' | 'N' | 'IP' | 'IA'
export type MIScores = Record<MICode, number>

// --- DIMENSI 3: WORK VALUES ---
export type WorkValueCode = 'ST' | 'DA' | 'OT' | 'KR' | 'KM' | 'FL'
export type WorkValueScores = Record<WorkValueCode, number>

// --- DIMENSI 4: KONTEKS PERSONAL ---
export type TahapCode = 'SMA10' | 'SMA11' | 'SMA12' | 'LULUS' | 'MABA'
export type DomisiliCode =
  | 'JABODETABEK'
  | 'JAWA_BESAR'
  | 'JAWA_MENENGAH'
  | 'SUMATERA'
  | 'KALIMANTAN'
  | 'SULAWESI'
  | 'BALI_NT'
  | 'MALUKU_PAPUA'
export type JalurCode = 'PTN' | 'PTS' | 'KEDINASAN' | 'LN' | 'KERJA' | 'BELUM_TAHU'
export type KondisiBiayaCode = 'BEBAS' | 'PERTIMBANGAN' | 'PRIORITAS_HEMAT' | 'LANGSUNG_KERJA'
export type TanggunganKeluargaCode = 'PERTAMA' | 'HARAPAN' | 'TIDAK_BERAT' | 'MANDIRI'
export type KemampuanAkademikCode = 'ATAS' | 'MENENGAH' | 'RATA' | 'PERLU_USAHA'
export type MobilitasCode = 'TERBUKA' | 'PREFERENSI' | 'TETAP'

export interface KonteksPersonal {
  tahap: TahapCode
  domisili: DomisiliCode
  jalur: JalurCode[]
  kondisi_biaya: KondisiBiayaCode
  tanggungan_keluarga: TanggunganKeluargaCode
  kemampuan_akademik: KemampuanAkademikCode
  mobilitas: MobilitasCode
}

// --- SESSION STATE (Zustand store) ---
export interface TesSession {
  // Jawaban mentah per dimensi
  d1_skenario: Partial<Record<string, RiasecCode>>
  d1_skala: Partial<Record<string, number>>
  d2_skenario: Partial<Record<string, MICode>>
  d2_skala: Partial<Record<string, number>>
  d3_tradeoff: Partial<Record<string, WorkValueCode>>
  d3_skala: Partial<Record<string, number>>
  d4_konteks: Partial<KonteksPersonal>

  // Skor yang sudah dihitung
  riasec_scores: RiasecScores
  mi_scores: MIScores
  wv_scores: WorkValueScores

  // Output profil
  holland_code: RiasecCode[]
  mi_profile: MICode[]
  wv_profile: WorkValueCode[]

  // Status
  current_step: 'd1' | 'd2' | 'd3' | 'd4' | 'hasil'
  session_id: string | null
}

// --- PROFIL DATA (dikirim ke API) ---
export interface ProfilData {
  d1_riasec: {
    skor: RiasecScores
    holland_code: RiasecCode[]
    deskripsi_primer: string
    deskripsi_sekunder: string
  }
  d2_mi: {
    skor: MIScores
    mi_profile: MICode[]
    deskripsi_primer: string
    deskripsi_sekunder: string
  }
  d3_workvalues: {
    skor: WorkValueScores
    values_profile: WorkValueCode[]
    deskripsi_primer: string
    deskripsi_sekunder: string
  }
  d4_konteks: KonteksPersonal
}

// --- LAPORAN OUTPUT ---
export interface JurusanItem {
  nama: string
  reasoning: string
  kampus_rekomendasi: string
  keketatan: string
}

export interface ProfesiItem {
  nama: string
  gambaran_nyata: string
  jalur_masuk: string
  catatan?: string
}

export interface LaporanSiswa {
  profil_singkat: string
  pembuka: string
  profil_kepribadian: string
  nilai_kerja: string
  jurusan: JurusanItem[]
  profesi: ProfesiItem[]
  kekuatan: string[]
  perlu_diwaspadai: string[]
  langkah_selanjutnya: string
  penutup: string
}

export interface LaporanOrangTua {
  cara_berpikir_anak: string
  apa_yang_memotivasi: string
  dukungan_yang_dibutuhkan: string
  cara_berdiskusi: string
  hal_terpenting: string
}

export interface LaporanLengkap {
  siswa: LaporanSiswa
  orang_tua: LaporanOrangTua
}

// --- DATABASE TYPES (Supabase) ---
export interface DbUser {
  id: string
  email: string
  created_at: string
}

export interface DbTestSession {
  id: string
  user_id: string | null
  session_token: string
  profil_data: ProfilData
  status: 'in_progress' | 'completed' | 'paid'
  created_at: string
  completed_at: string | null
}

export interface DbReport {
  id: string
  session_id: string
  user_id: string | null
  laporan_siswa: LaporanSiswa
  laporan_orang_tua: LaporanOrangTua
  payment_status: 'unpaid' | 'paid'
  payment_id: string | null
  created_at: string
}

// --- SOAL TYPES ---
export interface SoalSkenario {
  id: string
  pertanyaan: string
  konteks?: string
  opsi: {
    teks: string
    kode: RiasecCode | MICode | WorkValueCode
  }[]
}

export interface SoalSkala {
  id: string
  pernyataan: string
  kode: RiasecCode | MICode | WorkValueCode
}

export interface SoalTradeoff {
  id: string
  situasi: string
  konteks?: string
  opsi: {
    teks: string
    kode: WorkValueCode
  }[]
}
