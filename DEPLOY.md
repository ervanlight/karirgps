# KarirGPS — Panduan Deploy & Launch

## Checklist Sebelum Launch

### 1. Credentials (wajib semua)

```
✅ Supabase project dibuat
✅ Schema SQL dijalankan (supabase-schema.sql)
✅ Anthropic API key aktif
✅ Midtrans Sandbox diuji (test payment)
✅ Resend account + domain email diverifikasi
✅ .env.local terisi semua
```

### 2. Uji AI Engine

```bash
# Pastikan ANTHROPIC_API_KEY sudah di-export
export ANTHROPIC_API_KEY=sk-ant-...

# Jalankan 6 profil uji (butuh ~4-5 menit)
cd karirgps
python3 test_profiles.py
```

Target: skor rata-rata ≥ 85% sebelum launch.

### 3. Uji Payment Flow (Sandbox)

1. Jalankan `npm run dev`
2. Selesaikan tes D1–D4
3. Klik "Buka laporan lengkap"
4. Gunakan kartu test Midtrans Sandbox:
   - **QRIS**: scan QR, approve di simulator
   - **Kartu kredit**: `4811 1111 1111 1114`, CVV `123`, exp `01/25`
   - **BCA VA**: bayar di simulator Midtrans
5. Cek email diterima setelah bayar ✅
6. Cek Supabase → tabel `reports` → `payment_status = 'paid'` ✅

---

## Deploy ke Vercel

### Cara A — CLI (tercepat)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (dari folder karirgps/)
vercel

# Set semua env vars
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add ANTHROPIC_API_KEY production
vercel env add MIDTRANS_SERVER_KEY production
vercel env add NEXT_PUBLIC_MIDTRANS_CLIENT_KEY production
vercel env add RESEND_API_KEY production
vercel env add EMAIL_FROM production
vercel env add NEXT_PUBLIC_BASE_URL production
# NEXT_PUBLIC_BASE_URL = https://karirgps.id (domain kamu)

# Deploy ulang setelah env vars diisi
vercel --prod
```

### Cara B — GitHub + Vercel Dashboard

1. Push ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: KarirGPS MVP"
   git remote add origin https://github.com/username/karirgps.git
   git push -u origin main
   ```

2. Buka [vercel.com/new](https://vercel.com/new)
3. Import repository
4. Di "Environment Variables", tambahkan semua variabel dari `.env.example`
5. Klik Deploy

---

## Setup Domain Kustom

1. Di Vercel Dashboard → Settings → Domains
2. Tambahkan `karirgps.id` (atau domain kamu)
3. Update DNS di registrar:
   ```
   A     @    76.76.21.21
   CNAME www  cname.vercel-dns.com
   ```
4. Tunggu propagasi (5-30 menit)
5. SSL otomatis aktif ✅

---

## Setup Midtrans Webhook

Di dashboard Midtrans → Settings → Configuration:

```
Payment Notification URL:
https://karirgps.id/api/webhook/midtrans

Finish Redirect URL:
https://karirgps.id/hasil

Unfinish Redirect URL:
https://karirgps.id/hasil

Error Redirect URL:
https://karirgps.id/hasil
```

**Penting:** Ganti ke Production key saat siap live:
- Server Key: `Mid-server-...` (bukan `SB-Mid-server-...`)
- Client Key: `Mid-client-...`

---

## Setup Email Domain (Resend)

1. Daftar di [resend.com](https://resend.com)
2. Domain → Add Domain → `karirgps.id`
3. Tambahkan DNS records yang diberikan Resend:
   ```
   TXT  resend._domainkey  v=DKIM1; k=rsa; p=...
   TXT  @                  v=spf1 include:resend.com ~all
   ```
4. Verifikasi domain ✅
5. Isi `EMAIL_FROM=laporan@karirgps.id` di env vars

---

## Monitoring Post-Launch

### Pantau di Supabase Dashboard

```sql
-- Revenue hari ini
SELECT * FROM revenue_summary ORDER BY tanggal DESC LIMIT 7;

-- Laporan yang belum terkirim email
SELECT session_id, created_at FROM pending_reports ORDER BY created_at DESC;

-- Total transaksi
SELECT COUNT(*), SUM(amount) FROM reports WHERE payment_status = 'paid';
```

### Error monitoring (opsional, gratis tier)

Tambahkan [Sentry](https://sentry.io) untuk track errors di production:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## Skenario Edge Case yang Sudah Ditangani

| Skenario | Penanganan |
|----------|-----------|
| AI generate JSON invalid | Retry otomatis 1x |
| Email gagal kirim | Log error, tidak fail payment |
| User bayar tapi tidak ada akun | Session token tersimpan, laporan tetap dibuat |
| Midtrans timeout | User diarahkan ke halaman `?status=pending` |
| Tes tidak selesai (D4 < 5 jawaban) | Tombol "Lihat hasilku" disabled |
| Scoring semua 0 (tes belum dikerjakan) | Store persist, halaman hasil tetap render |

---

## Scaling (saat traffic naik)

| Kondisi | Solusi |
|---------|--------|
| >1000 laporan/hari | Upgrade Supabase ke Pro ($25/bulan) |
| API Anthropic lambat | Queue dengan Redis (Upstash, gratis 10k/hari) |
| Email bounce rate tinggi | Tambahkan unsubscribe link, monitor di Resend |
| Vercel timeout (>10s) | Pisah laporan generation ke Background Job |

---

## Estimasi Biaya Operasional Bulanan

| Traffic | Laporan/bulan | Revenue | Biaya Infra | Margin |
|---------|---------------|---------|-------------|--------|
| Awal    | 100           | Rp 5.9jt | ~Rp 200rb  | 96.6%  |
| Sedang  | 1.000         | Rp 59jt  | ~Rp 1.1jt  | 98.1%  |
| Ramai   | 5.000         | Rp 295jt | ~Rp 5jt    | 98.3%  |

---

## Quick Reference: URL Penting

| Service | URL |
|---------|-----|
| Supabase Dashboard | https://supabase.com/dashboard/project/[project-id] |
| Vercel Dashboard | https://vercel.com/dashboard |
| Midtrans Dashboard | https://dashboard.midtrans.com |
| Resend Dashboard | https://resend.com/emails |
| Anthropic Console | https://console.anthropic.com |
