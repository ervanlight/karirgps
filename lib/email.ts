// ============================================================
// EMAIL ENGINE — KarirGPS
// Menggunakan Resend (resend.com) untuk kirim laporan ke user
// ============================================================

import type { MVPDecision, KonteksPersonal } from '@/types'
import { RIASEC_LABELS, MI_LABELS, WV_LABELS } from './scoring'
import type { RiasecCode, MICode, WorkValueCode } from '@/types'

const RESEND_API_KEY = process.env.RESEND_API_KEY!
const FROM_EMAIL = process.env.EMAIL_FROM || 'laporan@karirgps.id'
const RESEND_URL = 'https://api.resend.com/emails'
// Link di dalam email harus mengarah ke URL situs yang sebenarnya hidup.
// Selama domain custom belum dipasang, ini = URL vercel.app (dari env).
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://karirgps.id'

// ── HTML Templates ─────────────────────────────────────────────

function renderLaporanHTML(
  laporan: MVPDecision,
  hollandCode: RiasecCode[],
  miProfile: MICode[],
  wvProfile: WorkValueCode[]
): string {
  const isPremiumV1 = 'executive_summary' in laporan && !('report_type' in laporan)
  const isPremiumV2 = 'report_type' in laporan && laporan.report_type === 'career_intelligence_visual_report'
  const isPremiumV3 = 'report_type' in laporan && laporan.report_type === 'premium_report_v3'
  
  let karirArray: { nama: string, deskripsi: string, jalur_masuk?: string }[] = []
  let rekomendasiUtama = 'Jalur Khusus'
  let alasan = ''

  if (isPremiumV3) {
    const v3 = laporan as any
    rekomendasiUtama = v3.profil_singkat || 'Rekomendasi Personal V3'
    alasan = v3.pembuka || ''
    karirArray = (v3.profesi || []).map((p: any) => ({
      nama: p.nama,
      deskripsi: p.gambaran_nyata,
      jalur_masuk: p.jalur_masuk
    }))
  } else if (isPremiumV2) {
    const v2 = laporan as any
    const execSummary = v2.sections?.find((s: any) => s.id === 'executive_summary')?.content
    const careerPaths = v2.sections?.find((s: any) => s.id === 'career_paths')?.items || []
    
    rekomendasiUtama = v2.user_profile?.decision_type || 'Rekomendasi Optimal'
    alasan = execSummary || ''
    karirArray = careerPaths.map((c: any) => ({
      nama: c.path,
      deskripsi: c.description,
      jalur_masuk: 'Berdasarkan roadmap & timeline'
    }))
  } else if (isPremiumV1) {
    const v1 = laporan as any
    rekomendasiUtama = v1.executive_summary?.core_direction || 'Rekomendasi Optimal'
    alasan = v1.executive_summary?.truth_statement || ''
    karirArray = (v1.career_fit || []).map((c: any) => ({
      nama: c.path_name,
      deskripsi: c.why_it_fits,
      jalur_masuk: c.thrive_environment
    }))
  } else {
    const old = laporan as any
    rekomendasiUtama = old.rekomendasi_utama || 'Jalur Khusus'
    alasan = old.alasan || ''
    karirArray = old.karir || []
  }

  const karirHTML = karirArray.map((k, i) => `
    <div style="margin-bottom:20px;padding:16px 18px;background:#F8F7F4;border-radius:8px;border-left:3px solid #1D9E75;">
      <div style="font-size:15px;font-weight:500;color:#2C2C2A;margin-bottom:6px;">${i + 1}. ${k.nama}</div>
      <div style="font-size:13px;color:#555;line-height:1.65;margin-bottom:8px;">${k.deskripsi}</div>
      <div style="font-size:12px;color:#888;"><strong>Jalur Masuk:</strong> ${k.jalur_masuk || 'Berdasarkan roadmap'}</div>
    </div>
  `).join('')

  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laporan KarirGPS</title>
</head>
<body style="margin:0;padding:0;background:#F8F7F4;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">

  <!-- HEADER -->
  <div style="background:#1D9E75;padding:24px 32px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="width:28px;height:28px;background:rgba(255,255,255,0.2);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;">
        <span style="color:white;font-size:14px;font-weight:700;">K</span>
      </div>
      <span style="color:white;font-size:16px;font-weight:500;letter-spacing:-0.3px;">KarirGPS</span>
    </div>
    <div style="color:rgba(255,255,255,0.8);font-size:13px;margin-top:8px;">
      Laporan Karir & Keputusan Masa Depan
    </div>
  </div>

  <!-- CONTENT -->
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

    <!-- KEPUTUSAN UTAMA -->
    <div style="background:#fff;border:0.5px solid #1D9E75;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Arah Terbaikmu</div>
      <div style="font-size:24px;font-weight:700;color:#1D9E75;margin-bottom:12px;">${rekomendasiUtama}</div>
      <div style="font-size:14px;color:#2C2C2A;line-height:1.7;">${alasan}</div>
    </div>

    <!-- KARIR -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">Rekomendasi Karir</div>
      ${karirHTML}
    </div>

    <!-- FOOTER -->
    <div style="text-align:center;padding:20px 0;border-top:0.5px solid #E0DDD6;">
      <div style="font-size:12px;color:#888;line-height:1.6;">
        Lihat roadmap lengkapmu di dashboard <br>
        <a href="${BASE_URL}/dashboard" style="color:#1D9E75;text-decoration:none;">Buka Dashboard</a>
      </div>
    </div>

  </div>
</body>
</html>`
}

// ── Email Sender ───────────────────────────────────────────────

interface SendLaporanParams {
  toEmail: string
  laporan: MVPDecision
  laporanOrtu: any
  hollandCode: RiasecCode[]
  miProfile: MICode[]
  wvProfile: WorkValueCode[]
}

export async function kirimLaporan({
  toEmail, laporan, hollandCode, miProfile, wvProfile,
}: SendLaporanParams): Promise<{ success: boolean; id?: string; error?: string }> {
  const html = renderLaporanHTML(laporan, hollandCode, miProfile, wvProfile)

  const topCode = hollandCode.slice(0, 2).map(c => RIASEC_LABELS[c]).join(' + ')

  const isPremiumV1 = 'executive_summary' in laporan && !('report_type' in laporan)
  const isPremiumV2 = 'report_type' in laporan && laporan.report_type === 'career_intelligence_visual_report'
  const isPremiumV3 = 'report_type' in laporan && laporan.report_type === 'premium_report_v3'
  
  let rekomendasiUtama = 'Jalur Khusus'
  if (isPremiumV3) {
    rekomendasiUtama = 'Laporan Spesifik Karir & Jurusan'
  } else if (isPremiumV2) {
    rekomendasiUtama = (laporan as any).user_profile?.decision_type || 'Rekomendasi Optimal'
  } else if (isPremiumV1) {
    rekomendasiUtama = (laporan as any).executive_summary?.core_direction || 'Rekomendasi Optimal'
  } else {
    rekomendasiUtama = (laporan as any).rekomendasi_utama || 'Jalur Khusus'
  }

  const payload = {
    from: `KarirGPS <${FROM_EMAIL}>`,
    to: [toEmail],
    subject: `Arah Terbaik KarirGPSmu sudah siap — ${rekomendasiUtama}`,
    html,
    text: `Laporan KarirGPS kamu sudah siap! Arah terbaikmu: ${rekomendasiUtama}.\n\nKunjungi karirgps.id/dashboard untuk melihat versi lengkap online.\n\n—\nKarirGPS`,
  }

  try {
    const res = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Resend error:', err)
      return { success: false, error: err.message || 'Email gagal terkirim' }
    }

    const data = await res.json()
    return { success: true, id: data.id }
  } catch (err) {
    console.error('Email send error:', err)
    return { success: false, error: 'Network error' }
  }
}

// ── Konfirmasi email setelah daftar ───────────────────────────
export async function kirimWelcome(toEmail: string): Promise<void> {
  await fetch(RESEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `KarirGPS <${FROM_EMAIL}>`,
      to: [toEmail],
      subject: 'Akun KarirGPS berhasil dibuat',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;">
          <div style="font-size:20px;font-weight:500;color:#2C2C2A;margin-bottom:12px;">Halo, selamat datang di KarirGPS.</div>
          <p style="font-size:14px;color:#555;line-height:1.7;">
            Akunmu sudah aktif. Kamu bisa langsung mulai tes — atau kembali kapan saja.<br>
            Hasilmu akan tersimpan otomatis setelah selesai.
          </p>
          <a href="${BASE_URL}/tes/d1" style="display:inline-block;margin-top:16px;background:#1D9E75;color:white;text-decoration:none;padding:11px 22px;border-radius:8px;font-size:14px;font-weight:500;">
            Mulai tes sekarang
          </a>
          <p style="font-size:12px;color:#999;margin-top:24px;">
            KarirGPS · karirgps.id<br>
            Datamu tidak dijual ke siapapun.
          </p>
        </div>
      `,
    }),
  })
}
