import { GoogleGenAI, Type } from '@google/genai'
import { ambilKandidatJurusan, ambilKandidatProfesi, fetchRagContext } from '@/lib/db-knowledge'
import { KOMBINASI_RIASEC_MI, KOMBINASI_RIASEC_WV } from '@/lib/scoring'
import type { ProfilData, MVPDecision } from '@/types'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

// ============================================================
// SYSTEM PROMPT — MENTOR MODE
// Didesain untuk menghasilkan "wow, ini gue banget" bukan "AI report"
// ============================================================
const SYSTEM_PROMPT_MENTOR = `Kamu adalah mentor karir pribadi yang duduk berhadapan langsung dengan seorang siswa SMA/SMK Indonesia yang sedang bingung tentang masa depannya.

Kamu bukan robot. Kamu bukan sistem. Kamu orang yang peduli, tajam, dan jujur.

---

KONTEKS DATA:
Kamu menerima profil lengkap siswa dari 4 dimensi:
- D1 (Holland Code/RIASEC): tipe minat kerja — R=Realistic, I=Investigative, A=Artistic, S=Social, E=Enterprising, C=Conventional
- D2 (Multiple Intelligences): cara siswa berpikir paling alami — L=Linguistik, LM=Logis-Matematis, SP=Spasial, MU=Musikal, BK=Kinestetik, N=Naturalis, IP=Interpersonal, IA=Intrapersonal
- D3 (Work Values): nilai kerja yang paling penting bagi siswa — ST=Stabilitas, DA=Dampak, OT=Otonomi, KR=Kreativitas, KM=Kemakmuran, FL=Fleksibilitas
- D4 (Konteks Personal): kondisi nyata — kondisi_biaya, domisili, kemampuan_akademik, dll

ATURAN D4 YANG WAJIB DIIKUTI:
- kondisi_biaya=PRIORITAS_HEMAT → prioritaskan jalur SNBT/KIP/Kedinasan/Beasiswa/Kerja
- kondisi_biaya=LANGSUNG_KERJA → arahkan ke kerja/bootcamp/politeknik/vokasi
- kondisi_biaya=BEBAS atau PERTIMBANGAN → bebas sarankan, tapi tetap realistis
- kemampuan_akademik=ATAS → boleh sarankan PTN favorit atau jurusan ketat
- kemampuan_akademik=PERLU_USAHA → hindari jurusan yang butuh persaingan sangat ketat

---

ATURAN MENULIS (WAJIB DIPATUHI):
1. Gunakan "kamu" bukan "Anda", "gue", "lu", atau "bro"
2. Tulis seperti MENTOR BICARA, bukan laporan akademis
3. MULAI pesan_pembuka dengan observasi yang tajam dan spesifik — bukan generik
4. profil_naratif harus terasa seperti seseorang yang benar-benar MENGENAL kamu
5. JANGAN pernah menyebut "berdasarkan data", "analisis menunjukkan", "mengoptimalkan"
6. VALIDASI kondisi siswa sebelum memberi saran — terutama jika ada keterbatasan finansial
7. alasan harus BERCERITA, bukan menjelaskan. Gunakan perumpamaan jika perlu
8. Setiap karir WAJIB punya fit_score (0-100) yang jujur berdasarkan overlap profil siswa
9. emoji pada karir harus relevan dengan bidang karir tersebut

---

CONTOH KALIMAT YANG BENAR (Mentor Mode):
- "Kamu bukan tipe yang bisa duduk diam menunggu. Kamu lebih suka membangun sesuatu."
- "Dari caramu menjawab, jelas kamu lebih cocok kerja dengan tangan daripada kerja dengan spreadsheet."
- "Ini bukan berarti kamu tidak pintar. Ini berarti kamu punya jenis kecerdasan yang berbeda."

CONTOH KALIMAT YANG SALAH (jangan dipakai):
- "Berdasarkan analisis profil Anda..." ❌
- "Hasil tes menunjukkan bahwa..." ❌
- "Anda direkomendasikan untuk..." ❌`

async function buildGroundingContext(profil: ProfilData): Promise<string> {
  const [jurusanKandidat, profesiKandidat, ragContext] = await Promise.all([
    ambilKandidatJurusan(profil),
    ambilKandidatProfesi(profil),
    fetchRagContext(profil)
  ])

  const parts: string[] = []

  if (jurusanKandidat) parts.push(`KANDIDAT JURUSAN (berdasarkan database KarirGPS):\n${jurusanKandidat}`)
  if (profesiKandidat) parts.push(`KANDIDAT PROFESI (berdasarkan database KarirGPS):\n${profesiKandidat}`)
  if (ragContext) parts.push(ragContext)

  // Tambahkan kombinasi RIASEC×MI yang relevan
  const topRiasec = profil.d1_riasec.holland_code.slice(0, 2)
  const topMI = profil.d2_mi.mi_profile.slice(0, 2)
  const relevantRiasecMI: string[] = []
  for (const r of topRiasec) {
    for (const m of topMI) {
      const key = `${r}-${m}`
      if (KOMBINASI_RIASEC_MI[key]) {
        relevantRiasecMI.push(`${key}: ${KOMBINASI_RIASEC_MI[key]}`)
      }
    }
  }
  if (relevantRiasecMI.length > 0) {
    parts.push(`KOMBINASI MINAT×CARA BERPIKIR yang relevan:\n${relevantRiasecMI.join('\n')}`)
  }

  // Tambahkan kombinasi RIASEC×WV yang relevan
  const topWV = profil.d3_workvalues.values_profile.slice(0, 2)
  const relevantRiasecWV: string[] = []
  for (const r of topRiasec) {
    for (const w of topWV) {
      const key = `${r}-${w}`
      if (KOMBINASI_RIASEC_WV[key]) {
        relevantRiasecWV.push(`${key}: ${KOMBINASI_RIASEC_WV[key]}`)
      }
    }
  }
  if (relevantRiasecWV.length > 0) {
    parts.push(`KOMBINASI MINAT×NILAI KERJA yang relevan:\n${relevantRiasecWV.join('\n')}`)
  }

  if (parts.length === 0) return ''
  return `\n\nREFERENSI KARIR (pilih yang paling realistis dengan kondisi D4):\n${parts.join('\n\n')}`
}

export async function generateDecisionMVP(profil: ProfilData): Promise<MVPDecision> {
  const grounding = await buildGroundingContext(profil)
  const promptData = `PROFIL SISWA:\n\n${JSON.stringify(profil, null, 2)}${grounding}`

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: promptData,
    config: {
      systemInstruction: SYSTEM_PROMPT_MENTOR,
      temperature: 0.8,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          // 🪞 PERSONAL MIRROR
          pesan_pembuka: {
            type: Type.STRING,
            description: 'Hook emosional 1-2 kalimat yang sangat personal dan tajam. Mulai dengan observasi spesifik tentang siswa, bukan pernyataan generik. Contoh: "Kamu bukan tipe yang cocok duduk diam dan menunggu perintah."'
          },
          profil_naratif: {
            type: Type.STRING,
            description: '2-3 paragraf yang mencerminkan kepribadian siswa seperti seorang mentor yang benar-benar mengenal mereka. Bahas cara berpikir, kekuatan tersembunyi, dan pola perilaku berdasarkan kombinasi D1+D2+D3. Jangan menyebut kode seperti RIASEC/MI — ceritakan orangnya.'
          },
          kekuatan: {
            type: Type.ARRAY,
            description: '3-4 kekuatan alami yang sangat spesifik dan berbasis data. Bukan pujian generik seperti "kamu kreatif". Contoh: "Kamu bisa melihat pola dalam data ketika orang lain masih kebingungan."',
            items: { type: Type.STRING }
          },
          // 🎯 KEPUTUSAN
          rekomendasi_utama: {
            type: Type.STRING,
            description: 'Hanya isi dengan: Kuliah, Kerja, atau Hybrid'
          },
          confidence_score: {
            type: Type.NUMBER,
            description: 'Tingkat keyakinan AI atas keputusan ini (0-100%). Harus realistis berdasarkan kekuatan sinyal dari profil D1-D4. Jangan selalu 95+ jika sinyalnya ambigu.'
          },
          alasan: {
            type: Type.STRING,
            description: 'Narasi 2-3 paragraf yang menjelaskan MENGAPA ini keputusan terbaik untuk siswa ini secara spesifik. Bercerita, bukan menjelaskan. Hubungkan dengan profil, kondisi, dan potensi nyata siswa. Pisahkan paragraf dengan \\n\\n.'
          },
          // 🧭 PILIHAN KARIR
          karir: {
            type: Type.ARRAY,
            description: 'Tepat 3 pilihan karir yang paling cocok, diurutkan dari yang paling sesuai ke yang ke-3',
            items: {
              type: Type.OBJECT,
              properties: {
                nama: { type: Type.STRING, description: 'Nama karir/profesi yang spesifik' },
                deskripsi: { type: Type.STRING, description: '2-3 kalimat yang menjelaskan apa yang dikerjakan dan mengapa cocok untuk siswa ini secara spesifik — bukan deskripsi generik' },
                jalur_masuk: { type: Type.STRING, description: 'Jalur masuk yang realistis sesuai kondisi D4 siswa (SNBT/mandiri/bootcamp/kerja langsung/dll)' },
                fit_score: { type: Type.NUMBER, description: 'Skor kecocokan 0-100 berdasarkan overlap profil D1+D2+D3 dengan kebutuhan karir. Jangan semua > 85.' },
                emoji: { type: Type.STRING, description: 'Satu emoji representatif (misal: 🩺, 💻, 🎨)' },
                income_range: { type: Type.STRING, description: 'Estimasi rentang gaji riil profesi ini di Indonesia (misal: "Rp 4 Jt - Rp 7 Jt" atau "Rp 7 Jt - Rp 15 Jt"). Harus realistis.' },
              },
              required: ['nama', 'deskripsi', 'jalur_masuk', 'fit_score', 'emoji', 'income_range']
            }
          },
          // 🗺️ ROADMAP
          roadmap: {
            type: Type.ARRAY,
            description: 'Tepat 3-5 fase roadmap karir yang mensimulasikan alur hidup 3-5 tahun ke depan (misal: Tahun 1 (Kuliah), Tahun 2-3 (Magang), Tahun 4 (Lulus & Kerja))',
            items: {
              type: Type.OBJECT,
              properties: {
                fase: { type: Type.STRING, description: 'Label fase waktu yang jelas, contoh: Tahun 1 (Masa Transisi)' },
                kegiatan: { type: Type.STRING, description: '2-3 langkah konkret di fase tersebut, pisahkan dengan \\n. Harus actionable dan simulatif.' },
              },
              required: ['fase', 'kegiatan']
            }
          },
          // ⚠️ RISIKO
          risiko_antisipasi: {
            type: Type.ARRAY,
            description: 'Analisis Skenario Kegagalan: Tepat 3 skenario nyata yang bisa merusak roadmap ini. Buat senyata mungkin untuk memicu loss aversion (kesadaran akan risiko).',
            items: {
              type: Type.OBJECT,
              properties: {
                risiko: { type: Type.STRING, description: 'Risiko kegagalan spesifik dan fatal yang mungkin terjadi' },
                probabilitas: { type: Type.STRING, description: 'Estimasi probabilitas terjadinya risiko ini (Contoh: "Tingkat Risiko: TINGGI (78%)" atau "MENENGAH (45%)")' },
                solusi: { type: Type.STRING, description: 'Mitigasi konkret untuk mencegah skenario kegagalan ini' },
              },
              required: ['risiko', 'probabilitas', 'solusi']
            }
          },
          alternative_scenario: {
            type: Type.STRING,
            description: 'Skenario Jalan Alternatif: Jika Plan A hancur (misal: tidak lulus ujian, kehabisan biaya, dll), apa Plan B yang masuk akal dan aman untuk siswa ini? Tulis 1-2 paragraf padat.'
          }
        },
        required: ['pesan_pembuka', 'profil_naratif', 'kekuatan', 'rekomendasi_utama', 'confidence_score', 'alasan', 'karir', 'roadmap', 'risiko_antisipasi', 'alternative_scenario']
      }
    }
  })

  const text = response.text
  if (!text) throw new Error('Empty response from Gemini')

  return JSON.parse(text) as MVPDecision
}

export async function generateRingkasan(profil: ProfilData) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: JSON.stringify(profil),
    config: {
      systemInstruction: 'Tulis ringkasan profil dalam 2 kalimat personal bahasa Indonesia menggunakan gaya mentor. Gunakan "kamu". Kembalikan JSON dengan key "profil_singkat".',
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          profil_singkat: { type: Type.STRING }
        },
        required: ['profil_singkat']
      }
    }
  })

  const text = response.text
  return JSON.parse(text || '{}')
}
