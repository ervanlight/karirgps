import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { generateDecisionMVP } from '../lib/laporan'

async function test() {
  try {
    const dummyProfil = {
      d1_riasec: {
        skor: { R: 10, I: 8, A: 6, S: 4, E: 2, C: 0 },
        holland_code: ['R', 'I', 'A'],
        deskripsi_primer: 'Realistic',
        deskripsi_sekunder: 'Investigative'
      },
      d2_mi: {
        skor: { L: 10, LM: 8, SP: 6, MU: 4, BK: 2, N: 0, IP: 0, IA: 0 },
        mi_profile: ['L', 'LM', 'SP'],
        deskripsi_primer: 'Linguistik',
        deskripsi_sekunder: 'Logis-Matematis'
      },
      d3_workvalues: {
        skor: { ST: 10, DA: 8, OT: 6, KR: 4, KM: 2, FL: 0 },
        values_profile: ['ST', 'DA'],
        deskripsi_primer: 'Stabilitas',
        deskripsi_sekunder: 'Dampak'
      },
      d4_konteks: {
        prioritas: 'LANGSUNG_KERJA',
        ekonomi: 'CUKUP',
        akademis: 'MENENGAH'
      }
    }
    
    console.log('Testing Gemini API...')
    const result = await generateDecisionMVP(dummyProfil as any)
    console.log('Result:', JSON.stringify(result, null, 2))
  } catch (err) {
    console.error('Error:', err)
  }
}

test()
