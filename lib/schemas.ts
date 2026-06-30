import { z } from 'zod'

export const KarirItemSchema = z.object({
  nama: z.string().min(1),
  deskripsi: z.string().min(10),
  jalur_masuk: z.string().min(5),
  fit_score: z.number().min(0).max(100),
  emoji: z.string(),
  income_range: z.string(),
})

export const RoadmapItemSchema = z.object({
  fase: z.string().min(1),
  kegiatan: z.string().min(5),
})

export const RisikoItemSchema = z.object({
  risiko: z.string().min(5),
  solusi: z.string().min(5),
})

export const MVPDecisionSchema = z.object({
  rekomendasi_utama: z.enum(['Kuliah', 'Kerja', 'Hybrid']),
  confidence_score: z.number().min(0).max(100),
  alasan: z.string().min(20),
  personality_mapping: z.string(),
  karir: z.array(KarirItemSchema).length(3, 'karir harus tepat 3 item'),
  roadmap: z.array(RoadmapItemSchema).min(3).max(5),
  risiko_antisipasi: z.array(RisikoItemSchema).min(1).max(3),
  alternative_scenario: z.string(),
})

export type MVPDecisionParsed = z.infer<typeof MVPDecisionSchema>

export const FreeReportSchema = z.object({
  identity_mirror: z.string(),
  career_direction: z.string(),
  direction_reasoning: z.string(),
  career_options: z.array(z.string()).length(3),
  roadmap: z.string(),
  key_risk: z.string(),
  insight_moment: z.string(),
  premium_curious_gap: z.string(),
})

export type FreeReportParsed = z.infer<typeof FreeReportSchema>

export const FreeReportV2Schema = z.object({
  pembuka_personal: z.string(),
  identity_mirror: z.string(),
  career_direction: z.enum(['Kuliah', 'Kerja', 'Hybrid']),
  direction_reasoning: z.string(),
  career_options: z.array(z.object({
    nama: z.string(),
    deskripsi_singkat: z.string(),
  })).length(3),
  roadmap: z.string(),
  key_risk: z.string(),
  insight_moment: z.string(),
  premium_curious_gap: z.string(),
})

export type FreeReportV2Parsed = z.infer<typeof FreeReportV2Schema>

export const JurusanRekomendasiSchema = z.object({
  nama: z.string(),
  reasoning: z.string(),
  kampus_rekomendasi: z.string(),
  keketatan: z.string(),
})

export const ProfesiRekomendasiSchema = z.object({
  nama: z.string(),
  gambaran_nyata: z.string(),
  jalur_masuk: z.string(),
  catatan: z.string().optional(),
})

export const JalurVokasiItemSchema = z.object({
  nama: z.string(),
  gambaran_nyata: z.string(),
  cara_masuk: z.string(),
  sertifikasi_pendukung: z.string(),
  potensi_naik_kelas: z.string(),
})

export const PremiumReportV3Schema = z.object({
  jalur_fokus: z.enum(['kuliah', 'kerja', 'hybrid']).optional(),
  profil_singkat: z.string(),
  pembuka: z.string(),
  profil_kepribadian: z.string(),
  nilai_kerja: z.string(),
  jurusan: z.array(JurusanRekomendasiSchema).min(2).max(3).optional(),
  jalur_vokasi: z.array(JalurVokasiItemSchema).min(2).max(5).optional(),
  profesi: z.array(ProfesiRekomendasiSchema).length(5),
  kekuatan: z.array(z.string()).min(2).max(3),
  perlu_diwaspadai: z.array(z.string()).length(2),
  langkah_selanjutnya: z.string(),
  penutup: z.string(),
}).refine((data) => !!data.jurusan || !!data.jalur_vokasi, {
  message: 'Laporan harus berisi jurusan (mode kuliah/hybrid) atau jalur_vokasi (mode kerja/hybrid)',
})

export type PremiumReportV3Parsed = z.infer<typeof PremiumReportV3Schema>

export const ParentReportSchema = z.object({
  untuk_orang_tua: z.object({
    cara_berpikir_anak: z.string(),
    apa_yang_memotivasi: z.string(),
    dukungan_yang_dibutuhkan: z.string(),
    cara_berdiskusi: z.string(),
    hal_terpenting: z.string(),
  })
})

export type ParentReportParsed = z.infer<typeof ParentReportSchema>['untuk_orang_tua']
