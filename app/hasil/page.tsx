'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useTesStore } from '@/lib/store'
import { createClient } from '@/lib/supabase'
import { buildProfil, RIASEC_LABELS, MI_LABELS, WV_LABELS, persen } from '@/lib/scoring'
import type { RiasecCode, MICode, WorkValueCode } from '@/types'

// ── colour per tipe ──────────────────────────────────────────
const RIASEC_COLOR: Record<RiasecCode, string> = {
  R: '#1D9E75', I: '#534AB7', A: '#D4537E',
  S: '#185FA5', E: '#BA7517', C: '#639922',
}
const WV_COLOR: Record<WorkValueCode, string> = {
  ST: '#185FA5', DA: '#1D9E75', OT: '#534AB7',
  KR: '#D4537E', KM: '#BA7517', FL: '#639922',
}

// ── simple free-text summaries per Holland top-pair ──────────
const PROFIL_TEXT: Record<string, string> = {
  'A,E': 'Cara kamu memproses dunia lebih banyak lewat ekspresi dan inisiatif. Kamu punya dorongan untuk menciptakan sesuatu yang orisinal — tapi bukan sekadar untuk diri sendiri. Ada bagian dari kamu yang juga ingin karya itu dikenal dan berdampak. Kombinasi itu yang membedakanmu dari tipe artistik murni.',
  'E,A': 'Kamu bergerak dengan visi yang jelas dan tidak sungkan untuk memimpin — tapi cara kamu memimpin sering kali lewat ide dan kreasi, bukan sekadar otoritas. Itu kombinasi yang langka: pemimpin yang juga pencipta.',
  'I,A': 'Kamu memiliki rasa ingin tahu yang dalam dan cara berpikir yang tidak konvensional. Kamu menikmati memahami sesuatu sampai ke akarnya — lalu menyampaikannya kembali dengan cara yang tidak biasa.',
  'A,I': 'Ada kecerdasan analitis di balik kreativitasmu. Kamu tidak hanya membuat — kamu juga memahami mengapa sesuatu berhasil atau tidak. Itu yang membuat karyamu lebih dari sekadar estetis.',
  'S,E': 'Kamu paling hidup ketika ada orang yang bisa dibantu atau digerakkan. Ada energi kepemimpinan di kamu, tapi yang paling memotivasimu bukan kuasanya — melainkan dampaknya pada orang lain.',
  'E,S': 'Kamu punya naluri untuk memimpin yang didasarkan pada kepedulian terhadap orang sekitarmu. Bukan pemimpin yang dingin — tapi pemimpin yang tahu kapan harus mendengar.',
  'I,S': 'Kamu menggabungkan rasa ingin tahu yang dalam dengan empati yang kuat. Itu kombinasi yang jarang — dan sangat dibutuhkan di bidang yang bersinggungan antara ilmu pengetahuan dan manusia.',
  'S,I': 'Cara kamu membantu orang lain selalu didasari oleh pemahaman yang mendalam, bukan sekadar niat baik. Itu yang membuat kontribusimu lebih dari sekadar kata-kata penyemangat.',
  'E,I': 'Kamu punya ambisi yang didukung oleh kecerdasan analitis. Kamu tidak hanya ingin mencapai sesuatu — kamu ingin memahami cara terbaik untuk mencapainya.',
  'I,E': 'Rasa ingin tahumu bukan hanya akademis — ada bagian dari kamu yang juga ingin menerapkan apa yang kamu pelajari untuk hasil yang nyata.',
  'C,I': 'Kamu punya kombinasi yang kuat antara ketelitian dan kemampuan berpikir analitis. Orang seperti kamu yang biasanya menjaga sistem tetap berjalan dengan baik.',
  'R,I': 'Kamu berpikir dengan tanganmu — dalam arti yang baik. Kamu memahami dunia lewat mengerjakan sesuatu secara langsung, dan lebih suka fakta konkret daripada teori abstrak.',
}

function getProfilText(top2: RiasecCode[]): string {
  const key = top2.slice(0, 2).join(',')
  const rev = top2.slice(0, 2).reverse().join(',')
  return PROFIL_TEXT[key] || PROFIL_TEXT[rev] ||
    `Holland Code kamu menunjukkan kecenderungan dominan ke ${RIASEC_LABELS[top2[0]]} dengan nuansa ${RIASEC_LABELS[top2[1]]}. Kombinasi ini punya jalur karir yang lebih spesifik dari yang kamu bayangkan — laporan lengkap akan menjabarkan semuanya.`
}

// ── free top jurusan per Holland top-pair ──────────────────────
const JURUSAN_MAP: Record<string, [string, string][]> = {
  'A,E': [['Desain Komunikasi Visual (DKV)', 'Cocok untuk kamu yang berpikir lewat visual dan ingin dampak nyata di dunia komunikasi.'], ['Ilmu Komunikasi', 'Jembatan antara kreativitas dan kemampuanmu menggerakkan orang lewat pesan yang kuat.'], ['Seni Rupa / Desain Produk', 'Jalur yang memberimu kebebasan ekspresi dengan prospek pasar yang semakin luas.']],
  'E,A': [['Manajemen & Bisnis Kreatif', 'Menggabungkan kemampuan strategimu dengan kecenderungan kreatif.'], ['Desain Komunikasi Visual', 'Otonomi kreatif penuh dengan prospek karir yang solid.'], ['Komunikasi Pemasaran', 'Tempat strategi dan kreativitas bertemu.']],
  'I,A': [['Arsitektur', 'Menggabungkan rigor analitis dengan ekspresi spasial.'], ['Desain Produk / UX Design', 'Riset dan desain yang berpusat pada manusia.'], ['Ilmu Komputer', 'Fondasi untuk membangun hal-hal baru yang belum ada.']],
  'S,E': [['Psikologi', 'Memahami manusia secara mendalam — fondasi untuk berbagai karir yang berdampak.'], ['Manajemen SDM / HI', 'Bergerak dengan dan untuk orang lain, tapi dengan otoritas yang nyata.'], ['Ilmu Komunikasi', 'Menjembatani manusia dan pesan dengan cara yang efektif.']],
  'I,S': [['Psikologi', 'Ilmu tentang manusia yang didekati secara ilmiah — persis kombinasimu.'], ['Kesehatan Masyarakat', 'Riset yang langsung berdampak pada kehidupan orang banyak.'], ['Pendidikan / Kedokteran', 'Bidang yang menggabungkan kedalaman ilmu dengan kontribusi nyata.']],
  'E,I': [['Ekonomi / Manajemen', 'Strategi yang didukung oleh pemahaman mendalam tentang bagaimana sistem bekerja.'], ['Hukum', 'Membutuhkan logika kuat sekaligus kemampuan berargumen.'], ['Teknik Informatika', 'Fondasi teknis untuk membangun bisnis atau karir berbasis teknologi.']],
}
const PROFESI_MAP: Record<string, string[]> = {
  'A,E': ['Creative Director', 'Brand Strategist', 'UX Designer', 'Art Director', 'Content Creator'],
  'E,A': ['Founder / Entrepreneur', 'Marketing Strategist', 'Creative Director', 'Product Manager', 'Brand Consultant'],
  'I,A': ['UX Researcher', 'Arsitek', 'Data Visualizer', 'UI/UX Designer', 'Peneliti'],
  'S,E': ['HR Director', 'Konselor Pendidikan', 'Community Manager', 'Program Manager', 'Social Entrepreneur'],
  'I,S': ['Psikolog', 'Dokter', 'Peneliti Kesehatan', 'Konselor', 'Epidemiolog'],
  'E,I': ['Business Analyst', 'Konsultan Strategi', 'Pengacara', 'Product Manager', 'Investment Analyst'],
}

function getRekomendasi(top2: RiasecCode[]) {
  const key = top2.slice(0, 2).join(',')
  const rev = top2.slice(0, 2).reverse().join(',')
  const jurusan = JURUSAN_MAP[key] || JURUSAN_MAP[rev] || [
    ['Ilmu Komputer', 'Bidang luas dengan banyak jalur karir yang relevan.'],
    ['Psikologi', 'Cocok untuk profil yang punya kecerdasan interpersonal kuat.'],
    ['Manajemen', 'Jalur serbaguna yang bisa diarahkan ke berbagai industri.'],
  ]
  const profesi = PROFESI_MAP[key] || PROFESI_MAP[rev] || ['Konsultan', 'Analis', 'Manajer', 'Peneliti', 'Wirausaha']
  return { jurusan, profesi }
}

// ── Score bar ──────────────────────────────────────────────────
function ScoreBar({ label, skor, warna, max = 16 }: { label: string; skor: number; warna: string; max?: number }) {
  const pct = persen(skor, max)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <div style={{ fontSize: 12, color: '#888780', width: 110, flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, height: 6, background: 'rgba(44,44,42,0.08)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: warna, borderRadius: 3, transition: 'width 0.8s ease' }}/>
      </div>
      <div style={{ fontSize: 12, color: '#888780', width: 24, textAlign: 'right' }}>{skor}</div>
    </div>
  )
}

// ── Paywall feature list ───────────────────────────────────────
const FITUR_PAID = [
  'Profil kepribadian naratif 2–3 paragraf — terasa ditulis khusus untukmu',
  '3 kluster jurusan + reasoning mendalam + kampus yang realistis berdasarkan kondisimu',
  '5 profesi + gambaran kerja nyata di Indonesia + jalur masuk konkret',
  'Kekuatan yang perlu dikembangkan + hal yang perlu diwaspadai (jujur, tidak menghakimi)',
  'Langkah selanjutnya yang disesuaikan dengan tahap dan kondisimu sekarang',
  'Versi laporan terpisah untuk orang tua — bahasa berbeda, fokus mendukung',
]

export default function HasilPage() {
  return (
    <Suspense fallback={null}>
      <HasilContent />
    </Suspense>
  )
}

function HasilContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentStatus = searchParams.get('status')
  const store = useTesStore()
  const [paying, setPaying] = useState(false)
  const [payError, setPayError] = useState('')
  const [payStep, setPayStep] = useState('')
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [sessionReady, setSessionReady] = useState(false)
  const creatingSession = useRef(false)

  // Build profil from store
  const profil = buildProfil({
    ...store,
    d4_konteks: store.d4_konteks as Required<typeof store.d4_konteks>,
  } as Parameters<typeof buildProfil>[0])

  // Pastikan ada akun + sesi tersimpan di Supabase sebelum apapun bisa dibayar.
  // session_id WAJIB berupa UUID asli dari tabel test_sessions — bukan placeholder.
  useEffect(() => {
    let active = true
    async function ensureSession() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/register?next=/hasil')
        return
      }
      if (!active) return
      setUserEmail(user.email ?? null)

      if (store.session_id) {
        setSessionReady(true)
        return
      }
      if (creatingSession.current) return
      creatingSession.current = true

      const { data, error } = await supabase
        .from('test_sessions')
        .insert({
          user_id: user.id,
          session_token: crypto.randomUUID(),
          profil_data: profil,
          status: 'completed',
          completed_at: new Date().toISOString(),
        })
        .select('id')
        .single()

      if (!active) return
      if (error || !data) {
        setPayError('Gagal menyimpan sesi tesmu. Coba muat ulang halaman ini.')
        return
      }
      store.setSessionId(data.id)
      setSessionReady(true)
    }
    ensureSession()
    return () => { active = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hollandCode = profil.d1_riasec.holland_code
  const miProfile = profil.d2_mi.mi_profile
  const wvProfile = profil.d3_workvalues.values_profile
  const riasecScores = profil.d1_riasec.skor
  const miScores = profil.d2_mi.skor
  const wvScores = profil.d3_workvalues.skor

  const top2Holland = hollandCode.slice(0, 2) as RiasecCode[]
  const { jurusan, profesi } = getRekomendasi(top2Holland)

  // Sorted scores for bars
  const riasecSorted = (Object.entries(riasecScores) as [RiasecCode, number][])
    .sort((a, b) => b[1] - a[1])
  const wvSorted = (Object.entries(wvScores) as [WorkValueCode, number][])
    .sort((a, b) => b[1] - a[1])

  async function handleBayar() {
    if (!store.session_id) {
      setPayError('Sesi belum siap. Coba muat ulang halaman ini sebentar lagi.')
      return
    }
    setPaying(true)
    setPayError('')

    try {
      // Buat transaksi Midtrans. Laporan AI lengkap baru di-generate oleh webhook
      // SETELAH pembayaran terkonfirmasi — bukan di sini — supaya tidak menunggu
      // proses AI (60-90 detik) sebelum sempat bayar.
      setPayStep('Membuka pembayaran...')
      const bayarRes = await fetch('/api/bayar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: store.session_id, email: userEmail }),
      })
      const data = await bayarRes.json()
      if (!bayarRes.ok || !data.token) {
        throw new Error(data.error || 'Gagal membuka pembayaran. Coba lagi.')
      }

      // 3. Tampilkan Midtrans Snap popup
      // @ts-expect-error Midtrans Snap global
      window.snap?.pay(data.token, {
        onSuccess: () => { window.location.href = '/hasil?status=paid' },
        onPending: () => {
          setPaying(false)
          setPayStep('')
          setPayError('Pembayaran pending — cek emailmu untuk konfirmasi setelah selesai dibayar.')
        },
        onError: () => {
          setPaying(false)
          setPayStep('')
          setPayError('Pembayaran gagal. Coba lagi.')
        },
        onClose: () => { setPaying(false); setPayStep('') },
      })
    } catch (err) {
      setPaying(false)
      setPayStep('')
      setPayError(err instanceof Error ? err.message : 'Terjadi kesalahan. Coba lagi.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F7F4' }}>
      {/* Midtrans Snap script */}
      <script
        type="text/javascript"
        src={process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === 'true'
          ? 'https://app.midtrans.com/snap/snap.js'
          : 'https://app.sandbox.midtrans.com/snap/snap.js'}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || ''}
        async
      />

      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 24px', background: '#fff',
        borderBottom: '0.5px solid rgba(44,44,42,0.12)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
          <div style={{ width: 26, height: 26, background: '#1D9E75', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="white"><path d="M7 1 L11 5 L9 5 L9 13 L5 13 L5 5 L3 5 Z"/></svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A' }}>KarirGPS</span>
        </Link>
        <Link href="/tes/d1" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>
          Ulangi tes
        </Link>
      </nav>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '32px 24px 80px' }}>

        {/* STATUS PEMBAYARAN (redirect dari Midtrans) */}
        {paymentStatus === 'paid' && (
          <div style={{ background: '#E1F5EE', border: '0.5px solid #9FE1CB', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#0F6E56', lineHeight: 1.6 }}>
            <strong>Pembayaran berhasil.</strong> Laporan lengkapmu sedang disiapkan oleh AI (biasanya 1-2 menit) dan akan dikirim ke emailmu begitu selesai. Tidak perlu menunggu di halaman ini.
          </div>
        )}
        {paymentStatus === 'pending' && (
          <div style={{ background: '#FAEEDA', border: '0.5px solid #E8C98A', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#633806', lineHeight: 1.6 }}>
            <strong>Pembayaran masih pending.</strong> Begitu pembayaran terkonfirmasi, laporan lengkap otomatis dikirim ke emailmu.
          </div>
        )}
        {paymentStatus === 'error' && (
          <div style={{ background: '#FCEBEB', border: '0.5px solid #F7C1C1', borderRadius: 12, padding: '16px 18px', marginBottom: 20, fontSize: 14, color: '#A32D2D', lineHeight: 1.6 }}>
            <strong>Pembayaran gagal.</strong> Coba klik tombol bayar di bawah lagi.
          </div>
        )}

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '0.5px solid rgba(44,44,42,0.12)' }}>
          <h1 style={{ fontSize: 26, fontWeight: 500, color: '#2C2C2A', marginBottom: 10, letterSpacing: '-0.4px' }}>
            Ini bukan vonis.
          </h1>
          <p style={{ fontSize: 14, color: '#888780', lineHeight: 1.7, maxWidth: 440, margin: '0 auto' }}>
            Ini lebih seperti cermin — yang untuk pertama kalinya mungkin menunjukkan sesuatu yang sudah lama ada, tapi belum pernah kamu lihat dengan jelas.
          </p>
        </div>

        {/* PROFIL SINGKAT */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>
            Profil singkatmu
          </div>
          {/* Code pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
            {top2Holland.map(c => (
              <span key={c} style={{ background: '#E1F5EE', color: '#0F6E56', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                {RIASEC_LABELS[c]}
              </span>
            ))}
            {miProfile.slice(0, 2).map(c => (
              <span key={c} style={{ background: '#EEEDFE', color: '#3C3489', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                {MI_LABELS[c as MICode]}
              </span>
            ))}
            {wvProfile.slice(0, 2).map(c => (
              <span key={c} style={{ background: '#FAEEDA', color: '#633806', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
                {WV_LABELS[c as WorkValueCode]}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.75 }}>
            {getProfilText(top2Holland)}
          </p>
        </div>

        {/* RIASEC SCORE BARS */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
            Skor dimensi 1 — minat
          </div>
          {riasecSorted.map(([k, v]) => (
            <ScoreBar key={k} label={RIASEC_LABELS[k]} skor={v} warna={RIASEC_COLOR[k]} />
          ))}
          <div style={{ fontSize: 12, color: '#888780', marginTop: 10, lineHeight: 1.5 }}>
            Skor tertinggi bukan berarti satu-satunya bidang yang cocok — Holland Code membaca kombinasi, bukan satu puncak tertinggi.
          </div>
        </div>

        {/* NILAI KERJA BARS */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14 }}>
            Skor dimensi 3 — nilai kerja
          </div>
          {wvSorted.map(([k, v]) => (
            <ScoreBar key={k} label={WV_LABELS[k as WorkValueCode]} skor={v} warna={WV_COLOR[k as WorkValueCode]} />
          ))}
          <div style={{ fontSize: 12, color: '#888780', marginTop: 10, lineHeight: 1.5 }}>
            Nilai yang skornya rendah bukan berarti tidak penting — bisa jadi memang sudah cukup terpenuhi oleh bidang yang kamu pilih.
          </div>
        </div>

        {/* FREE REKOMENDASI */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 16 }}>
            Gambaran awal — jurusan & profesi
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 10 }}>Top 3 kluster jurusan</div>
            {jurusan.map(([nama, desc]) => (
              <div key={nama} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', marginTop: 7, flexShrink: 0 }}/>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#2C2C2A' }}>{nama}</span>
                  {' '}<span style={{ fontSize: 13, color: '#888780' }}>— {desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#2C2C2A', marginBottom: 10 }}>Top 5 profesi</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {profesi.map(p => (
                <span key={p} style={{ background: '#F8F7F4', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 20, padding: '5px 12px', fontSize: 13, color: '#2C2C2A' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, padding: '12px 14px', background: '#F8F7F4', borderRadius: 8, fontSize: 12, color: '#888780', lineHeight: 1.6 }}>
            Ini hanya gambaran awal. Laporan lengkap menjabarkan reasoning di balik setiap rekomendasi dan menyesuaikannya dengan kondisi nyatamu — kampus yang realistis, jalur masuk yang konkret, dan langkah selanjutnya yang bisa kamu eksekusi sekarang.
          </div>
        </div>

        {/* PAYWALL */}
        <div style={{ background: '#fff', border: '0.5px solid rgba(44,44,42,0.12)', borderRadius: 14, padding: 24, marginTop: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 6 }}>
            Laporan lengkap
          </div>
          <div style={{ fontSize: 16, fontWeight: 500, color: '#2C2C2A', marginBottom: 6 }}>
            Semua yang ada di atas baru permukaannya.
          </div>
          <p style={{ fontSize: 14, color: '#888780', marginBottom: 18, lineHeight: 1.65 }}>
            Laporan lengkap masuk jauh lebih dalam — ditulis seperti oleh konselor yang benar-benar mengenalmu, bukan template.
          </p>

          <div style={{ display: 'grid', gap: 8, marginBottom: 22 }}>
            {FITUR_PAID.map(f => (
              <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#1D9E75', flexShrink: 0, fontSize: 15 }}>✓</span>
                <span style={{ fontSize: 14, color: '#2C2C2A', lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', padding: '20px 0 4px' }}>
            <div style={{ fontSize: 30, fontWeight: 500, color: '#2C2C2A', marginBottom: 4 }}>Rp 59.000</div>
            <div style={{ fontSize: 13, color: '#888780', marginBottom: 18 }}>Satu kali bayar · dikirim ke emailmu · bisa diakses kapan saja</div>
            <button
              onClick={handleBayar}
              disabled={paying || !sessionReady}
              style={{
                background: (paying || !sessionReady) ? '#9FE1CB' : '#1D9E75',
                color: 'white', border: 'none', borderRadius: 10,
                padding: '14px 0', fontSize: 16, fontWeight: 500,
                cursor: (paying || !sessionReady) ? 'not-allowed' : 'pointer',
                width: '100%', transition: 'background 0.15s',
              }}
            >
              {paying ? (payStep || 'Memproses...') : (sessionReady ? 'Bayar Rp 59.000' : 'Menyiapkan sesi...')}
            </button>
            {payError && (
              <div style={{ background: '#FCEBEB', border: '0.5px solid #F7C1C1', borderRadius: 7, padding: '10px 12px', fontSize: 13, color: '#A32D2D', marginTop: 12, textAlign: 'left' }}>
                {payError}
              </div>
            )}
            <div style={{ fontSize: 12, color: '#888780', marginTop: 10 }}>
              QRIS · Transfer bank · GoPay · OVO · Dana · ShopeePay
            </div>
          </div>
        </div>

        {/* RESTART */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/tes/d1" style={{ fontSize: 13, color: '#888780', textDecoration: 'none' }}>
            ← Ulangi tes dari awal
          </Link>
        </div>
      </div>
    </div>
  )
}
