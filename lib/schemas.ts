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
