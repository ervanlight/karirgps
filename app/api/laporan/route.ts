import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase'
import { kirimLaporan } from '@/lib/email'
import type { ProfilData, LaporanSiswa, LaporanOrangTua, RiasecCode, MICode, WorkValueCode } from '@/types'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

const SYSTEM_PROMPT_SISWA = `Kamu adalah konselor karir dan pendidikan yang menulis laporan personal untuk seorang siswa Indonesia.

Tugasmu: membaca profil psikometri siswa dari empat dimensi, lalu menulis laporan yang terasa seperti ditulis oleh seseorang yang benar-benar mengenal mereka — bukan seperti output dari mesin atau formulir.

IDENTITAS DAN SUARA: Kamu adalah kakak yang lebih tua, bicara langsung dengan "kamu". Tone hangat tapi tidak memuji-muji, jujur tapi tidak menghakimi, spesifik.

Yang TIDAK boleh: kalimat generik, tanda seru berlebihan, "komprehensif"/"holistik"/"optimal", pujian kosong.
Yang harus ada: kekhususan, kejujuran, konteks Indonesia yang bisa dieksekusi.

KODE: R=Realistic, I=Investigative, A=Artistic, S=Social, E=Enterprising, C=Conventional | L=Linguistik, LM=Logis-Matematis, SP=Spasial, MU=Musikal, BK=Kinestetik, N=Naturalis, IP=Interpersonal, IA=Intrapersonal | ST=Stabilitas, DA=Dampak, OT=Otonomi, KR=Kreativitas, KM=Kemakmuran, FL=Fleksibilitas

ATURAN INDONESIA: ST tinggi = keputusan rasional, hormati. KM tinggi = tanggung jawab keluarga, bukan materialisme. OT tinggi = sertakan catatan risiko awal karir. DA+KM = tunjukkan bisa bersamaan. Luar Jawa = wajib sebut PTN lokal.

FILTER D4: PRIORITAS_HEMAT → SNBT/beasiswa/KIP-Kuliah/kedinasan, JANGAN swasta mahal. LANGSUNG_KERJA → D3/bootcamp/sertifikasi BNSP, BUKAN S1 4 tahun. ATAS → boleh FK/ITB/UI/ITS. PERLU_USAHA → hindari jurusan sangat kompetitif. SMA12/LULUS → operasional konkret. SMA10-11 → eksploratif. MABA → konfirmasi atau koreksi arah.

KOMBINASI PANDUAN: I+LM=Data Science/Fisika, I+SP=Arsitektur/UX, A+SP=DKV/Film, A+L=Sastra/Skenario, S+IP=Psikologi/HR, E+L=Hukum/PR, E+LM=Keuangan/Konsultansi, E+IP=Manajemen/Wirausaha sosial, R+BK=Teknik/Fisioterapi, R+N=Pertanian/Lingkungan | A+OT=Creative director/Freelance, A+KM=UX Lead/Art Director, S+ST=Guru PNS/Konselor BK, S+DA=NGO/Komunitas, E+OT=Founder/Konsultan mandiri, E+KM=Investment banker/Sales Director

STRUKTUR OUTPUT JSON:
{"profil_singkat":"3 kalimat free","pembuka":"1 paragraf tone-setting","profil_kepribadian":"2-3 paragraf D1+D2","nilai_kerja":"1-2 paragraf D3","jurusan":[{"nama":"...","reasoning":"2-3 kalimat kenapa cocok untuk profil INI","kampus_rekomendasi":"2-4 kampus realistis berdasar D4","keketatan":"..."}],"profesi":[{"nama":"...","gambaran_nyata":"2 kalimat kerja nyata di Indonesia","jalur_masuk":"1-2 kalimat","catatan":"1 kalimat spesifik untuk profil ini (opsional)"}],"kekuatan":["2-3 kalimat per item"],"perlu_diwaspadai":["2-3 kalimat per item, jujur tidak menghakimi"],"langkah_selanjutnya":"1-2 paragraf konkret","penutup":"1 paragraf hangat tidak kosong"}

LARANGAN ABSOLUT: jangan kalimat berlaku untuk siapapun, jangan frame nilai rendah sebagai kekurangan, jangan sebut nama dimensi/kode/skor dalam laporan, jangan penutup kosong ("Semangat!", "apapun pilihanmu"), output harus valid JSON tanpa backtick atau teks di luar JSON.`

const SYSTEM_PROMPT_ORTU = `Kamu menulis laporan untuk ORANG TUA dari siswa yang baru menyelesaikan tes profil karir di KarirGPS.

Tone: satu level lebih tenang, lebih faktual, tetap hangat. Gunakan "anak Anda". Jangan ulangi informasi laporan siswa. Jangan rekomendasikan jurusan spesifik. Jangan sebut nama dimensi atau kode.

Fokus pada: cara anak berpikir, apa yang memotivasinya, lingkungan dukungan yang dibutuhkan, cara berdiskusi pilihan karir, satu hal terpenting.

Output JSON: {"untuk_orang_tua":{"cara_berpikir_anak":"2 paragraf","apa_yang_memotivasi":"1-2 paragraf","dukungan_yang_dibutuhkan":"1-2 paragraf konkret","cara_berdiskusi":"1 paragraf panduan praktis","hal_terpenting":"1 paragraf insight paling berharga"}}`

async function callClaude(system: string, userMsg: string, maxTokens: number): Promise<string> {
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: maxTokens,
    system,
    messages: [{ role: 'user', content: userMsg }],
  })
  return response.content[0].type === 'text' ? response.content[0].text : ''
}

function parseJSON<T>(text: string): T {
  const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
  return JSON.parse(clean) as T
}

function validateLaporan(l: LaporanSiswa): string[] {
  const required = ['profil_singkat','pembuka','profil_kepribadian','nilai_kerja','jurusan','profesi','kekuatan','perlu_diwaspadai','langkah_selanjutnya','penutup']
  const missing = required.filter(k => !(l as unknown as Record<string, unknown>)[k])
  if (l.jurusan?.length !== 3) missing.push('jurusan harus tepat 3')
  if (l.profesi?.length !== 5) missing.push('profesi harus tepat 5')
  return missing
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { profil, mode, session_id, email } = body as {
      profil: ProfilData; mode: 'ringkasan' | 'full'; session_id?: string; email?: string
    }

    if (!profil) return NextResponse.json({ error: 'profil diperlukan' }, { status: 400 })

    if (mode === 'ringkasan') {
      const sys = `Tulis ringkasan profil karir dalam format JSON: {"profil_singkat":"3 kalimat personal spesifik","jurusan_top":["...","..."],"profesi_top":["...","...","..."]}. Bahasa Indonesia, jangan sebut kode, output valid JSON.`
      const text = await callClaude(sys, JSON.stringify(profil), 500)
      return NextResponse.json({ ringkasan: parseJSON(text) })
    }

    if (mode === 'full') {
      // Generate laporan siswa
      let siswaText = await callClaude(SYSTEM_PROMPT_SISWA, `Tulis laporan lengkap untuk profil berikut:\n\n${JSON.stringify(profil, null, 2)}`, 4000)
      let laporanSiswa = parseJSON<LaporanSiswa>(siswaText)

      // Validasi + retry jika perlu
      const missing = validateLaporan(laporanSiswa)
      if (missing.length > 0) {
        siswaText = await callClaude(
          SYSTEM_PROMPT_SISWA + '\n\nKRITIS: Output HARUS valid JSON dengan semua key. jurusan harus tepat 3 item, profesi tepat 5 item.',
          `Tulis laporan lengkap:\n\n${JSON.stringify(profil, null, 2)}`, 4000
        )
        laporanSiswa = parseJSON<LaporanSiswa>(siswaText)
        const retryMissing = validateLaporan(laporanSiswa)
        if (retryMissing.length > 0) {
          return NextResponse.json({ error: 'Report validation failed', missing: retryMissing }, { status: 500 })
        }
      }

      // Generate laporan orang tua
      const ortuText = await callClaude(
        SYSTEM_PROMPT_ORTU,
        `Profil siswa:\n${JSON.stringify(profil, null, 2)}\n\nRingkasan kepribadian dari laporan siswa:\n${laporanSiswa.profil_kepribadian}`,
        1500
      )
      const laporanOrtu = parseJSON<{ untuk_orang_tua: LaporanOrangTua }>(ortuText).untuk_orang_tua

      // Simpan ke Supabase
      if (session_id) {
        const supabase = createClient()
        await supabase.from('reports').upsert({ session_id, laporan_siswa: laporanSiswa, laporan_ortu: laporanOrtu, payment_status: 'paid' })
        await supabase.from('test_sessions').update({ status: 'paid', profil_data: profil }).eq('id', session_id)
      }

      // Kirim email (fire-and-forget)
      if (email) {
        kirimLaporan({
          toEmail: email, laporan: laporanSiswa, laporanOrtu,
          hollandCode: profil.d1_riasec.holland_code as RiasecCode[],
          miProfile: profil.d2_mi.mi_profile as MICode[],
          wvProfile: profil.d3_workvalues.values_profile as WorkValueCode[],
        }).catch(err => console.error('Email error:', err))
      }

      return NextResponse.json({ laporan_siswa: laporanSiswa, laporan_orang_tua: laporanOrtu })
    }

    return NextResponse.json({ error: 'mode tidak valid' }, { status: 400 })
  } catch (error) {
    console.error('Laporan route error:', error)
    return NextResponse.json({ error: 'Gagal generate laporan. Coba lagi.' }, { status: 500 })
  }
}
