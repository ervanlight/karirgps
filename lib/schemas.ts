import { z } from 'zod'

export const KarirItemSchema = z.object({
  nama: z.string().min(1),
  deskripsi: z.string().min(10),
  jalur_masuk: z.string().min(5),
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
  alasan: z.string().min(20),
  karir: z.array(KarirItemSchema).length(3, 'karir harus tepat 3 item'),
  roadmap: z.array(RoadmapItemSchema).min(2).max(4),
  risiko_antisipasi: z.array(RisikoItemSchema).min(1).max(3),
})

export type MVPDecisionParsed = z.infer<typeof MVPDecisionSchema>
