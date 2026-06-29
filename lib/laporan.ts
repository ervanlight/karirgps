import { GoogleGenAI, Type, Schema } from '@google/genai'
import { ambilKandidatJurusan, ambilKandidatProfesi, fetchRagContext } from '@/lib/db-knowledge'
import { KOMBINASI_RIASEC_MI, KOMBINASI_RIASEC_WV } from '@/lib/scoring'
import type { ProfilData, MVPDecision, PremiumReportV1 } from '@/types'
import fs from 'fs'
import path from 'path'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

function getPremiumPrompt(): string {
  try {
    const promptPath = path.join(process.cwd(), 'lib', 'prompts', 'premium-report-v1.md')
    return fs.readFileSync(promptPath, 'utf8')
  } catch (error) {
    console.error('Failed to load premium-report-v1.md', error)
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
          executive_summary: {
            type: Type.OBJECT,
            properties: {
              user_identity: { type: Type.STRING },
              core_direction: { type: Type.STRING },
              truth_statement: { type: Type.STRING }
            },
            required: ['user_identity', 'core_direction', 'truth_statement']
          },
          cognitive_profile: {
            type: Type.OBJECT,
            properties: {
              thinking_style: { type: Type.STRING },
              learning_style: { type: Type.STRING },
              decision_style: { type: Type.STRING },
              strengths_blindspots: { type: Type.STRING }
            },
            required: ['thinking_style', 'learning_style', 'decision_style', 'strengths_blindspots']
          },
          career_fit: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                path_name: { type: Type.STRING },
                why_it_fits: { type: Type.STRING },
                thrive_environment: { type: Type.STRING },
                avoid_environment: { type: Type.STRING }
              },
              required: ['path_name', 'why_it_fits', 'thrive_environment', 'avoid_environment']
            }
          },
          path_simulation: {
            type: Type.OBJECT,
            properties: {
              college_scenario: {
                type: Type.OBJECT,
                properties: { lifestyle: { type: Type.STRING }, skill_trajectory: { type: Type.STRING }, risks: { type: Type.STRING }, outcome: { type: Type.STRING } },
                required: ['lifestyle', 'skill_trajectory', 'risks', 'outcome']
              },
              work_scenario: {
                type: Type.OBJECT,
                properties: { lifestyle: { type: Type.STRING }, skill_trajectory: { type: Type.STRING }, risks: { type: Type.STRING }, outcome: { type: Type.STRING } },
                required: ['lifestyle', 'skill_trajectory', 'risks', 'outcome']
              },
              hybrid_scenario: {
                type: Type.OBJECT,
                properties: { lifestyle: { type: Type.STRING }, skill_trajectory: { type: Type.STRING }, risks: { type: Type.STRING }, outcome: { type: Type.STRING } },
                required: ['lifestyle', 'skill_trajectory', 'risks', 'outcome']
              }
            },
            required: ['college_scenario', 'work_scenario', 'hybrid_scenario']
          },
          real_world_outcome: {
            type: Type.OBJECT,
            properties: {
              income_range: { type: Type.STRING },
              likely_roles: { type: Type.ARRAY, items: { type: Type.STRING } },
              industry_positioning: { type: Type.STRING },
              career_ceiling: { type: Type.STRING }
            },
            required: ['income_range', 'likely_roles', 'industry_positioning', 'career_ceiling']
          },
          risk_analysis: {
            type: Type.OBJECT,
            properties: {
              wrong_direction_impact: { type: Type.STRING },
              stagnation_causes: { type: Type.STRING },
              growth_blockers: { type: Type.STRING }
            },
            required: ['wrong_direction_impact', 'stagnation_causes', 'growth_blockers']
          },
          strategic_roadmap: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                timeline: { type: Type.STRING },
                action: { type: Type.STRING },
                skill_focus: { type: Type.STRING },
                learning_priority: { type: Type.STRING }
              },
              required: ['timeline', 'action', 'skill_focus', 'learning_priority']
            }
          },
          final_diagnosis: { type: Type.STRING }
        },
        required: [
          'executive_summary', 'cognitive_profile', 'career_fit', 'path_simulation', 
          'real_world_outcome', 'risk_analysis', 'strategic_roadmap', 'final_diagnosis'
        ]
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
