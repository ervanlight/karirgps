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

export const ExploreLayerSchema = z.object({
  why_this_fits_you: z.string(),
  compare_paths: z.string(),
  what_if_scenario: z.string(),
  skill_gap: z.array(z.string()),
})

export const FreeReportSchema = z.object({
  decision: z.string(),
  personality_insight: z.string(),
  reasoning: z.string(),
  career_fit: z.array(z.string()).max(3),
  roadmap: z.string(),
  risk_statement: z.string(),
  viral_hook: z.string(),
  explore_layer: ExploreLayerSchema,
})

export type FreeReportParsed = z.infer<typeof FreeReportSchema>
