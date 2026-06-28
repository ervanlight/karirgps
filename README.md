# KarirGPS — Platform Bimbingan Karir & Jurusan

> "Temukan Arahmu, Bukan Sekadar Jurusan"

## Stack

| Layer | Tech | Keterangan |
|-------|------|------------|
| Frontend | Next.js 14 (App Router) | React server components |
| Database & Auth | Supabase | PostgreSQL + Auth + RLS |
| AI Engine | Anthropic API (Claude Sonnet 4.6) | Generate laporan naratif |
| Payment | Midtrans Snap | QRIS, VA, GoPay, OVO, dll |
| State | Zustand + localStorage | Persist sesi tes |
| Hosting | Vercel | Deploy otomatis dari GitHub |
| Email | Resend | Kirim laporan ke user |

## Struktur Folder

```
karirgps/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Design system CSS
│   ├── page.tsx                # Landing page (TODO)
│   ├── auth/
│   │   ├── login/page.tsx      # Login (TODO)
│   │   └── register/page.tsx   # Register (TODO)
│   ├── tes/
│   │   ├── d1/page.tsx         # Dimensi 1 — RIASEC (TODO)
│   │   ├── d2/page.tsx         # Dimensi 2 — Multiple Intelligences (TODO)
│   │   ├── d3/page.tsx         # Dimensi 3 — Work Values (TODO)
│   │   └── d4/page.tsx         # Dimensi 4 — Konteks Personal (TODO)
│   ├── hasil/page.tsx          # Halaman hasil & paywall (TODO)
│   └── api/
│       ├── laporan/route.ts    # ✅ AI Report Engine
│       └── bayar/route.ts      # ✅ Midtrans payment
├── components/
│   ├── ui/                     # Shared UI components (TODO)
│   ├── tes/                    # Tes-specific components (TODO)
│   └── hasil/                  # Result components (TODO)
├── lib/
│   ├── soal-d1.ts              # ✅ Bank soal RIASEC (18 soal)
│   ├── soal-d2.ts              # ✅ Bank soal MI (24 soal)
│   ├── soal-d3.ts              # ✅ Bank soal Work Values (18 soal)
│   ├── soal-d4.ts              # ✅ Form konteks personal (7 pertanyaan)
│   ├── scoring.ts              # ✅ Scoring engine + label + kombinasi table
│   ├── store.ts                # ✅ Zustand state management
│   └── supabase.ts             # ✅ Supabase client
├── types/index.ts              # ✅ TypeScript types lengkap
├── supabase-schema.sql         # ✅ Database schema — jalankan di Supabase
├── .env.example                # ✅ Template env variables
└── package.json                # ✅ Dependencies

✅ = sudah selesai | TODO = perlu dibuild di Minggu 3-4
```

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/kamu/karirgps.git
cd karirgps
npm install
cp .env.example .env.local
# Edit .env.local dengan credentials kamu
```

### 2. Setup Supabase

1. Buat project baru di [supabase.com](https://supabase.com)
2. Buka SQL Editor
3. Copy isi `supabase-schema.sql` dan jalankan
4. Ambil URL dan anon key dari Settings → API
5. Masukkan ke `.env.local`

### 3. Setup Anthropic API

1. Buka [console.anthropic.com](https://console.anthropic.com)
2. Buat API key baru
3. Masukkan ke `.env.local` sebagai `ANTHROPIC_API_KEY`

### 4. Setup Midtrans (Sandbox dulu)

1. Daftar di [dashboard.midtrans.com](https://dashboard.midtrans.com)
2. Ambil Sandbox Server Key dan Client Key
3. Masukkan ke `.env.local`

### 5. Jalankan dev server

```bash
npm run dev
# Buka http://localhost:3000
```

## Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables di Vercel dashboard
# atau via CLI:
vercel env add ANTHROPIC_API_KEY
vercel env add NEXT_PUBLIC_SUPABASE_URL
# ... dll
```

## Estimasi Biaya Operasional (per bulan, 1000 laporan)

| Service | Biaya/bulan |
|---------|-------------|
| Vercel (Hobby/Pro) | Rp 0 – Rp 280rb |
| Supabase (Free tier cukup awal) | Rp 0 |
| Anthropic API (1000 laporan × Rp 385) | ~Rp 385rb |
| Midtrans (fee per transaksi ~1%) | ~Rp 590rb |
| Resend email (10rb email/bulan gratis) | Rp 0 |
| **Total** | **~Rp 975rb** |
| **Revenue (1000 laporan × Rp 59rb)** | **Rp 59jt** |
| **Margin kotor** | **~98.3%** |

## Testing Checklist Pre-Launch

- [ ] 6 profil uji (lihat `AI_ReportEngine.md`) di-run dan dievaluasi
- [ ] Payment flow sandbox diuji end-to-end
- [ ] Email laporan diterima setelah bayar
- [ ] Mobile responsiveness di iOS Safari dan Android Chrome
- [ ] RLS Supabase: user A tidak bisa lihat laporan user B

## Minggu Berikutnya (Minggu 3-4)

1. Build halaman `app/tes/d1/page.tsx` menggunakan `lib/soal-d1.ts` + `lib/store.ts`
2. Repeat untuk d2, d3, d4
3. Build `app/hasil/page.tsx` dengan freemium split + Midtrans popup
4. Build `app/auth/` pages dengan Supabase Auth UI
5. Testing end-to-end

## Referensi Dokumen

- `lib/soal-d1.ts` — Bank Soal RIASEC
- `lib/soal-d2.ts` — Bank Soal Multiple Intelligences
- `lib/soal-d3.ts` — Bank Soal Work Values
- `lib/soal-d4.ts` — Form Konteks Personal
- `lib/scoring.ts` — Scoring engine + tabel kombinasi
- `supabase-schema.sql` — Database schema lengkap
- `app/api/laporan/route.ts` — AI Report Engine dengan master system prompt
- `app/api/bayar/route.ts` — Midtrans payment integration
