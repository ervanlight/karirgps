import { GoogleGenAI, Type, Schema } from '@google/genai'
import { ambilKandidatJurusan, ambilKandidatProfesi, fetchRagContext } from '@/lib/db-knowledge'
import { KOMBINASI_RIASEC_MI, KOMBINASI_RIASEC_WV } from '@/lib/scoring'
import type { ProfilData, MVPDecision, PremiumReportV1 } from '@/types'
import fs from 'fs'
import path from 'path'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

function getPremiumPrompt(): string {
  try {
    const promptPath = path.join(process.cwd(), 'lib', 'prompts', 'premium-report-v2.md')
    return fs.readFileSync(promptPath, 'utf8')
  } catch (error) {
    console.error('Failed to load premium-report-v2.md', error)
    return 'You are a Senior Career Strategy Consultant AI...' // Fallback
  }
}


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
      systemInstruction: getPremiumPrompt(),
      temperature: 0.8,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          report_type: { type: Type.STRING },
          version: { type: Type.STRING },
          user_profile: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              decision_type: { type: Type.STRING }
            },
            required: ['name', 'decision_type']
          },
          sections: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                type: { type: Type.STRING },
                title: { type: Type.STRING },
                content: { type: Type.STRING },
                cards: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: { label: { type: Type.STRING }, value: { type: Type.STRING } },
                    required: ['label', 'value']
                  }
                },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: { path: { type: Type.STRING }, score: { type: Type.NUMBER }, description: { type: Type.STRING } },
                    required: ['path', 'score', 'description']
                  }
                },
                tree: {
                  type: Type.OBJECT,
                  properties: {
                    root: { type: Type.STRING },
                    branches: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: { label: { type: Type.STRING }, result: { type: Type.STRING } },
                        required: ['label', 'result']
                      }
                    }
                  },
                  required: ['root', 'branches']
                },
                timeline: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: { period: { type: Type.STRING }, action: { type: Type.STRING } },
                    required: ['period', 'action']
                  }
                }
              },
              required: ['id', 'type', 'title']
            }
          }
        },
        required: ['report_type', 'version', 'user_profile', 'sections']
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
