import { createAdminClient } from '../lib/supabase'
import { generateDecisionMVP } from '../lib/laporan'
import { kirimLaporan } from '../lib/email'
import type { ProfilData, RiasecCode, MICode, WorkValueCode } from '../types'

// Load env for local testing with `npx tsx scripts/worker-generate.ts`
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

async function run() {
  const sessionId = process.env.SESSION_ID
  if (!sessionId) {
    console.error('Missing SESSION_ID in environment')
    process.exit(1)
  }

  console.log(`[WORKER] Starting generation for session: ${sessionId}`)
  const supabase = createAdminClient()
  
  const { data: sessionData, error: sessionError } = await supabase
    .from('test_sessions')
    .select('user_id, profil_data')
    .eq('id', sessionId)
    .single()

  if (sessionError || !sessionData?.profil_data) {
    console.error('[WORKER] Session tidak ditemukan atau tidak memiliki profil:', sessionError)
    process.exit(1)
  }

  const profil = sessionData.profil_data as ProfilData

  console.log('[WORKER] Memanggil Gemini 1.5 Pro...')
  
  try {
    const laporanSiswa = await generateDecisionMVP(profil)
    console.log('[WORKER] Laporan berhasil dibuat!')

    const { error: updateError } = await supabase
      .from('reports')
      .update({ laporan_siswa: laporanSiswa })
      .eq('session_id', sessionId)
      
    if (updateError) {
       console.error('[WORKER] Gagal mengupdate tabel reports:', updateError)
       process.exit(1)
    }

    if (sessionData.user_id) {
      const { data: userData } = await supabase.auth.admin.getUserById(sessionData.user_id)
      const email = userData?.user?.email

      if (email) {
        console.log(`[WORKER] Mengirim email laporan ke ${email}...`)
        const emailResult = await kirimLaporan({
          toEmail: email,
          laporan: laporanSiswa,
          laporanOrtu: null as any,
          hollandCode: (profil.d1_riasec?.holland_code || []) as RiasecCode[],
          miProfile: (profil.d2_mi?.mi_profile || []) as MICode[],
          wvProfile: (profil.d3_workvalues?.values_profile || []) as WorkValueCode[],
        })
        if (!emailResult.success) {
          console.error('[WORKER] Gagal kirim email:', emailResult.error)
        } else {
          console.log('[WORKER] Email berhasil dikirim.')
        }
      }
    }
    
    console.log('[WORKER] Tugas selesai sempurna.')
    process.exit(0)
  } catch (err) {
    console.error('[WORKER] AI Generation Gagal (mungkin timeout/quota):', err)
    process.exit(1)
  }
}

run()
