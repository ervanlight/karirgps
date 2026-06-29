import { GoogleGenAI, Type } from '@google/genai'
import { ambilKandidatJurusan, ambilKandidatProfesi } from '@/lib/db-knowledge'
import type { ProfilData, MVPDecision } from '@/types'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

const SYSTEM_PROMPT_MVP = `Kamu adalah KarirGPS, asisten karir cerdas untuk siswa SMA/SMK di Indonesia.
Tugasmu: membaca profil siswa dari empat dimensi (D1=Minat, D2=Cara Berpikir, D3=Prioritas, D4=Kondisi Nyata) dan menghasilkan REKOMENDASI KEPUTUSAN yang sangat aplikatif, realistis, dan berempati.

PENTING - ATURAN GAYA BAHASA (WAJIB DIIKUTI):
1. Gunakan bahasa Indonesia yang natural, mengalir, dan hangat (seperti gaya ChatGPT yang baik).
2. Bicara langsung kepada siswa menggunakan kata "kamu" dan sapa sebagai teman atau mentor yang peduli.
3. Hindari bahasa kaku, mekanis, atau birokratis (jangan gunakan kata seperti "berdasarkan data", "analisis menunjukkan", "mengoptimalkan").
4. Jangan pernah menyalahkan keadaan siswa (misal: ekonomi sulit). Validasi perjuangan mereka dengan empati.

KODE:
D1: R=Realistic, I=Investigative, A=Artistic, S=Social, E=Enterprising, C=Conventional
D2: L=Linguistik, LM=Logis-Matematis, SP=Spasial, MU=Musikal, BK=Kinestetik, N=Naturalis, IP=Interpersonal, IA=Intrapersonal
D3: ST=Stabilitas, DA=Dampak, OT=Otonomi, KR=Kreativitas, KM=Kemakmuran, FL=Fleksibilitas
D4 (Penting): PRIORITAS_HEMAT → arahkan ke SNBT/KIP/Kedinasan/Kerja; LANGSUNG_KERJA → arahkan ke kerja/bootcamp/vokasi; ATAS → boleh sarankan jurusan ketat.`

async function buildGroundingContext(profil: ProfilData): Promise<string> {
  const [jurusanKandidat, profesiKandidat] = await Promise.all([
    ambilKandidatJurusan(profil),
    ambilKandidatProfesi(profil),
  ])
  if (!jurusanKandidat && !profesiKandidat) return ''

  const parts: string[] = []
  if (jurusanKandidat) parts.push(`KANDIDAT JURUSAN:\n${jurusanKandidat}`)
  if (profesiKandidat) parts.push(`KANDIDAT PROFESI:\n${profesiKandidat}`)
  return `\n\nREFERENSI KARIR (Pilih yang paling realistis dengan kondisi D4):\n${parts.join('\n\n')}`
}

export async function generateDecisionMVP(profil: ProfilData): Promise<MVPDecision> {
  const grounding = await buildGroundingContext(profil)
  const promptData = `PROFIL SISWA:\n\n${JSON.stringify(profil, null, 2)}${grounding}`
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: promptData,
    config: {
      systemInstruction: SYSTEM_PROMPT_MVP,
      temperature: 0.7,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          rekomendasi_utama: { type: Type.STRING },
          alasan: { type: Type.STRING },
          karir: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                nama: { type: Type.STRING },
                deskripsi: { type: Type.STRING },
                jalur_masuk: { type: Type.STRING }
              },
              required: ["nama", "deskripsi", "jalur_masuk"]
            }
          },
          roadmap: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                fase: { type: Type.STRING },
                kegiatan: { type: Type.STRING }
              },
              required: ["fase", "kegiatan"]
            }
          },
          risiko_antisipasi: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                risiko: { type: Type.STRING },
                solusi: { type: Type.STRING }
              },
              required: ["risiko", "solusi"]
            }
          }
        },
        required: ["rekomendasi_utama", "alasan", "karir", "roadmap", "risiko_antisipasi"]
      }
    }
  })

  const text = response.text
  if (!text) throw new Error("Empty response from Gemini")
  
  return JSON.parse(text) as MVPDecision
}

export async function generateRingkasan(profil: ProfilData) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: JSON.stringify(profil),
    config: {
      systemInstruction: 'Tulis ringkasan profil dalam 2 kalimat personal bahasa Indonesia. Kembalikan JSON dengan key "profil_singkat".',
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          profil_singkat: { type: Type.STRING }
        },
        required: ["profil_singkat"]
      }
    }
  })
  
  const text = response.text
  return JSON.parse(text || '{}')
}
