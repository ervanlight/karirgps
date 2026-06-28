// ============================================================
// EMAIL ENGINE — KarirGPS
// Menggunakan Resend (resend.com) untuk kirim laporan ke user
// ============================================================

import type { LaporanSiswa, LaporanOrangTua, KonteksPersonal } from '@/types'
import { RIASEC_LABELS, MI_LABELS, WV_LABELS } from './scoring'
import type { RiasecCode, MICode, WorkValueCode } from '@/types'

const RESEND_API_KEY = process.env.RESEND_API_KEY!
const FROM_EMAIL = process.env.EMAIL_FROM || 'laporan@karirgps.id'
const RESEND_URL = 'https://api.resend.com/emails'

// ── HTML Templates ─────────────────────────────────────────────

function renderLaporanHTML(
  laporan: LaporanSiswa,
  laporanOrtu: LaporanOrangTua,
  hollandCode: RiasecCode[],
  miProfile: MICode[],
  wvProfile: WorkValueCode[]
): string {
  const codeLabels = [
    ...hollandCode.slice(0, 2).map(c => RIASEC_LABELS[c]),
    ...miProfile.slice(0, 2).map(c => MI_LABELS[c]),
    ...wvProfile.slice(0, 2).map(c => WV_LABELS[c]),
  ]

  const pillsHTML = codeLabels.map((l, i) => {
    const colors = [
      ['#E1F5EE', '#0F6E56'], ['#E1F5EE', '#0F6E56'],
      ['#EEEDFE', '#3C3489'], ['#EEEDFE', '#3C3489'],
      ['#FAEEDA', '#633806'], ['#FAEEDA', '#633806'],
    ]
    const [bg, color] = colors[i] || ['#F0F0EE', '#555']
    return `<span style="background:${bg};color:${color};padding:3px 10px;border-radius:20px;font-size:12px;font-weight:500;margin-right:6px;display:inline-block;margin-bottom:4px;">${l}</span>`
  }).join('')

  const jurusanHTML = laporan.jurusan.map((j, i) => `
    <div style="margin-bottom:20px;padding:16px 18px;background:#F8F7F4;border-radius:8px;border-left:3px solid #1D9E75;">
      <div style="font-size:15px;font-weight:500;color:#2C2C2A;margin-bottom:6px;">${i + 1}. ${j.nama}</div>
      <div style="font-size:13px;color:#555;line-height:1.65;margin-bottom:8px;">${j.reasoning}</div>
      <div style="font-size:12px;color:#888;"><strong>Kampus:</strong> ${j.kampus_rekomendasi}</div>
      <div style="font-size:12px;color:#888;margin-top:3px;"><strong>Tingkat persaingan:</strong> ${j.keketatan}</div>
    </div>
  `).join('')

  const profesiHTML = laporan.profesi.map((p) => `
    <div style="margin-bottom:16px;padding:14px 16px;background:#fff;border:0.5px solid #E0DDD6;border-radius:8px;">
      <div style="font-size:14px;font-weight:500;color:#2C2C2A;margin-bottom:5px;">${p.nama}</div>
      <div style="font-size:13px;color:#555;line-height:1.6;margin-bottom:4px;">${p.gambaran_nyata}</div>
      <div style="font-size:12px;color:#888;">Jalur masuk: ${p.jalur_masuk}</div>
      ${p.catatan ? `<div style="font-size:12px;color:#1D9E75;margin-top:4px;font-style:italic;">→ ${p.catatan}</div>` : ''}
    </div>
  `).join('')

  const kekuatanHTML = laporan.kekuatan.map(k => `
    <div style="display:flex;gap:10px;margin-bottom:12px;align-items:flex-start;">
      <span style="color:#1D9E75;font-size:16px;flex-shrink:0;line-height:1.5;">✓</span>
      <span style="font-size:14px;color:#2C2C2A;line-height:1.65;">${k}</span>
    </div>
  `).join('')

  const waspadaiHTML = laporan.perlu_diwaspadai.map(w => `
    <div style="display:flex;gap:10px;margin-bottom:12px;align-items:flex-start;">
      <span style="color:#BA7517;font-size:14px;flex-shrink:0;line-height:1.6;">→</span>
      <span style="font-size:14px;color:#2C2C2A;line-height:1.65;">${w}</span>
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
      Laporan Profil Karir & Jurusan
    </div>
  </div>

  <!-- CONTENT -->
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">

    <!-- PROFIL SINGKAT -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Profil singkatmu</div>
      <div style="margin-bottom:12px;">${pillsHTML}</div>
      <div style="font-size:14px;color:#2C2C2A;line-height:1.7;">${laporan.profil_singkat}</div>
    </div>

    <!-- PEMBUKA -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:14px;color:#2C2C2A;line-height:1.75;font-style:italic;border-left:2px solid #1D9E75;padding-left:14px;">
        ${laporan.pembuka}
      </div>
    </div>

    <!-- PROFIL KEPRIBADIAN -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">Tentang cara kamu berpikir dan bergerak</div>
      <div style="font-size:14px;color:#2C2C2A;line-height:1.8;">
        ${laporan.profil_kepribadian.replace(/\n\n/g, '</div><div style="font-size:14px;color:#2C2C2A;line-height:1.8;margin-top:12px;">')}
      </div>
    </div>

    <!-- NILAI KERJA -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#BA7517;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">Apa yang menggerakkanmu</div>
      <div style="font-size:14px;color:#2C2C2A;line-height:1.8;">
        ${laporan.nilai_kerja.replace(/\n\n/g, '</div><div style="font-size:14px;color:#2C2C2A;line-height:1.8;margin-top:12px;">')}
      </div>
    </div>

    <!-- JURUSAN -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">Tiga kluster jurusan yang direkomendasikan</div>
      ${jurusanHTML}
    </div>

    <!-- PROFESI -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#534AB7;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">Lima profesi yang cocok</div>
      ${profesiHTML}
    </div>

    <!-- KEKUATAN -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">Kekuatanmu</div>
      ${kekuatanHTML}
    </div>

    <!-- PERLU DIWASPADAI -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#BA7517;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">Yang perlu kamu waspadai</div>
      ${waspadaiHTML}
    </div>

    <!-- LANGKAH SELANJUTNYA -->
    <div style="background:#E1F5EE;border:0.5px solid #9FE1CB;border-radius:14px;padding:24px;margin-bottom:16px;">
      <div style="font-size:11px;font-weight:500;color:#0F6E56;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px;">Langkah selanjutnya</div>
      <div style="font-size:14px;color:#085041;line-height:1.8;">
        ${laporan.langkah_selanjutnya.replace(/\n\n/g, '</div><div style="font-size:14px;color:#085041;line-height:1.8;margin-top:12px;">')}
      </div>
    </div>

    <!-- PENUTUP -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:24px;">
      <div style="font-size:14px;color:#2C2C2A;line-height:1.8;font-style:italic;">
        ${laporan.penutup}
      </div>
    </div>

    <!-- DIVIDER ORANG TUA -->
    <div style="text-align:center;margin:32px 0 24px;">
      <div style="height:0.5px;background:#E0DDD6;margin-bottom:20px;"></div>
      <div style="font-size:13px;color:#888;font-style:italic;">Bagian berikut untuk orang tua</div>
    </div>

    <!-- VERSI ORANG TUA -->
    <div style="background:#fff;border:0.5px solid #E0DDD6;border-radius:14px;padding:24px;margin-bottom:24px;">
      <div style="font-size:14px;font-weight:500;color:#2C2C2A;margin-bottom:4px;">Untuk Orang Tua</div>
      <div style="font-size:12px;color:#888;margin-bottom:20px;">Laporan ini ditulis dengan bahasa yang berbeda — langsung untuk kamu yang mendukung perjalanan anak.</div>

      ${[
        ['Bagaimana cara anak Anda berpikir', laporanOrtu.cara_berpikir_anak],
        ['Apa yang memotivasinya', laporanOrtu.apa_yang_memotivasi],
        ['Dukungan yang paling dibutuhkan', laporanOrtu.dukungan_yang_dibutuhkan],
        ['Cara mendiskusikan pilihan karir', laporanOrtu.cara_berdiskusi],
        ['Satu hal terpenting yang perlu dipahami', laporanOrtu.hal_terpenting],
      ].map(([title, content]) => `
        <div style="margin-bottom:18px;padding-bottom:18px;border-bottom:0.5px solid #F0EDE6;">
          <div style="font-size:12px;font-weight:500;color:#1D9E75;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px;">${title}</div>
          <div style="font-size:14px;color:#2C2C2A;line-height:1.75;">${content}</div>
        </div>
      `).join('')}
    </div>

    <!-- FOOTER -->
    <div style="text-align:center;padding:20px 0;border-top:0.5px solid #E0DDD6;">
      <div style="font-size:12px;color:#888;line-height:1.6;">
        Laporan ini dibuat oleh <strong>KarirGPS</strong> dan bersifat personal.<br>
        Tidak untuk disebarluaskan tanpa izin. Datamu tidak dijual ke siapapun.<br>
        <a href="https://karirgps.id" style="color:#1D9E75;text-decoration:none;">karirgps.id</a>
      </div>
    </div>

  </div>
</body>
</html>`
}

// ── Email Sender ───────────────────────────────────────────────

interface SendLaporanParams {
  toEmail: string
  laporan: LaporanSiswa
  laporanOrtu: LaporanOrangTua
  hollandCode: RiasecCode[]
  miProfile: MICode[]
  wvProfile: WorkValueCode[]
}

export async function kirimLaporan({
  toEmail, laporan, laporanOrtu, hollandCode, miProfile, wvProfile,
}: SendLaporanParams): Promise<{ success: boolean; id?: string; error?: string }> {
  const html = renderLaporanHTML(laporan, laporanOrtu, hollandCode, miProfile, wvProfile)

  const topCode = hollandCode.slice(0, 2).map(c => RIASEC_LABELS[c]).join(' + ')

  const payload = {
    from: `KarirGPS <${FROM_EMAIL}>`,
    to: [toEmail],
    subject: `Laporan KarirGPSmu sudah siap — ${topCode}`,
    html,
    // Plain text fallback
    text: `
Laporan KarirGPS kamu sudah siap!

${laporan.profil_singkat}

Kunjungi karirgps.id untuk melihat versi lengkap online.

—
KarirGPS · karirgps.id
    `.trim(),
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
          <a href="https://karirgps.id/tes/d1" style="display:inline-block;margin-top:16px;background:#1D9E75;color:white;text-decoration:none;padding:11px 22px;border-radius:8px;font-size:14px;font-weight:500;">
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
