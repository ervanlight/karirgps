// ============================================================
// KARIRGPS — TYPE DEFINITIONS
// ============================================================
import type { FreeReportParsed } from '@/lib/schemas'

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
  free_report?: FreeReportParsed
}

// --- LAPORAN OUTPUT (MVP) ---
export interface KarirItem {
  nama: string
  deskripsi: string
  jalur_masuk: string
  fit_score: number // Skor kecocokan 0-100 berdasarkan profil (nyata, bukan fake)
  emoji: string     // Emoji representasi karir (misal: 🩺 🎨 💻)
  income_range: string // Rentang gaji riil di Indonesia, e.g. "Rp 4.5 Jt - Rp 7 Jt"
}

export interface RoadmapItem {
  fase: string
  kegiatan: string
}

export interface RisikoItem {
  risiko: string
  probabilitas?: string
  solusi: string
}

// --- NEW V1 PREMIUM REPORT ---
export interface PremiumCareerFit {
  path_name: string
  why_it_fits: string
  thrive_environment: string
  avoid_environment: string
}

export interface PathScenario {
  lifestyle: string
  skill_trajectory: string
  risks: string
  outcome: string
}

export interface RoadmapStep {
  timeline: string
  action: string
  skill_focus: string
  learning_priority: string
}

export interface PremiumReportV1 {
  executive_summary: {
    user_identity: string
    core_direction: string
    truth_statement: string
  }
  cognitive_profile: {
    thinking_style: string
    learning_style: string
    decision_style: string
    strengths_blindspots: string
  }
  career_fit: PremiumCareerFit[]
  path_simulation: {
    college_scenario: PathScenario
    work_scenario: PathScenario
    hybrid_scenario: PathScenario
  }
  real_world_outcome: {
    income_range: string
    likely_roles: string[]
    industry_positioning: string
    career_ceiling: string
  }
  risk_analysis: {
    wrong_direction_impact: string
    stagnation_causes: string
    growth_blockers: string
  }
  strategic_roadmap: RoadmapStep[]
  final_diagnosis: string
}

// --- NEW V2 PREMIUM REPORT (DYNAMIC VISUAL SECTIONS) ---
export interface PremiumReportSection {
  id: string
  type: 'text_block' | 'visual_card' | 'visual_ranking' | 'tree_diagram' | 'timeline' | 'warning_block'
  title: string
  content?: string
  cards?: { label: string; value: string }[]
  items?: { path: string; score: number; description: string }[]
  tree?: { root: string; branches: { label: string; result: string }[] }
  timeline?: { period: string; action: string }[]
}

export type PremiumReportV2 = {
  report_type: 'career_intelligence_visual_report'
  version: '2.0'
  user_profile: {
    holland_code: string
    mi_profile: string
    work_values: string
    decision_type?: string
  }
  sections: PremiumReportSection[]
}

// ----------------------------------------------------------------------------
// TIPE KEPUTUSAN (V3 - TERBARU)
// ----------------------------------------------------------------------------
export type JurusanRekomendasi = {
  nama: string
  reasoning: string
  kampus_rekomendasi: string
  keketatan: string
}

export type ProfesiRekomendasi = {
  nama: string
  gambaran_nyata: string
  jalur_masuk: string
  catatan?: string
}

export type PremiumReportV3 = {
  report_type: 'premium_report_v3'
  profil_singkat: string
  pembuka: string
  profil_kepribadian: string
  nilai_kerja: string
  jurusan: JurusanRekomendasi[]
  profesi: ProfesiRekomendasi[]
  kekuatan: string[]
  perlu_diwaspadai: string[]
  langkah_selanjutnya: string
  penutup: string
}

export type ParentReport = {
  cara_berpikir_anak: string
  apa_yang_memotivasi: string
  dukungan_yang_dibutuhkan: string
  cara_berdiskusi: string
  hal_terpenting: string
}

export type FreeReportV2 = {
  pembuka_personal: string
  identity_mirror: string
  career_direction: 'Kuliah' | 'Kerja' | 'Hybrid'
  direction_reasoning: string
  career_options: { nama: string, deskripsi_singkat: string }[]
  roadmap: string
  key_risk: string
  insight_moment: string
  premium_curious_gap: string
}

export interface OldMVPDecision {
  pesan_pembuka?: string          // Hook emosional pembuka, 1-2 kalimat tajam dan personal
  profil_naratif?: string         // Refleksi kepribadian 2-3 paragraf, tulis seperti mentor
  kekuatan?: string[]             // 3-4 kekuatan alami berdasarkan data, bukan generik

  // 🎯 KEPUTUSAN UTAMA
  rekomendasi_utama?: 'Kuliah' | 'Kerja' | 'Hybrid'
  confidence_score?: number       // AI confidence level 0-100%
  alasan?: string                 // Reasoning dalam format narasi, bukan poin-poin kaku

  // 🧭 PILIHAN & RENCANA
  karir?: KarirItem[]
  roadmap?: RoadmapItem[]         // Life trajectory (3-5 tahun)
  risiko_antisipasi?: RisikoItem[] // Skenario kegagalan
  alternative_scenario?: string   // Skenario jalan alternatif jika plan A gagal
}

export type MVPDecision = OldMVPDecision | PremiumReportV1 | PremiumReportV2 | PremiumReportV3

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
  profil_data: ProfilData | null
  status: 'in_progress' | 'completed' | 'paid'
  created_at: string
  completed_at: string | null
}

export interface DbReport {
  id: string
  user_id: string
  session_id: string
  laporan_siswa: MVPDecision | null
  laporan_orang_tua: ParentReport | null
  payment_status: 'pending' | 'paid' | 'failed'
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
