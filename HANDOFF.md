# KarirGPS — Handoff untuk sesi/chat baru

## Konteks project
Platform tes bakat & rekomendasi jurusan untuk siswa SMA Indonesia. Next.js 14 (App Router) + Supabase (DB & Auth) + Anthropic Claude (generate laporan AI) + Midtrans Snap (pembayaran) + Resend (email).

- **Lokasi kode**: `D:\Aplikasiku\KarirGPS\karirgps`
- **Repo GitHub**: https://github.com/ervanlight/karirgps
- **Live di Vercel**: https://karirgps-ervans-projects-5bd9c2a5.vercel.app (project: `ervans-projects-5bd9c2a5/karirgps`, sudah login via `vercel login` di mesin ini)
- **Supabase project**: `ayetmozirilwrskrshni` — https://supabase.com/dashboard/project/ayetmozirilwrskrshni
- **Midtrans**: masih SANDBOX (lihat `MIDTRANS_SERVER_KEY` di Vercel env vars / `.env.local` — JANGAN ditulis di file ini). Webhook URL sudah disetel di https://dashboard.sandbox.midtrans.com/settings/config_info → Payment Notification URL = `https://karirgps-ervans-projects-5bd9c2a5.vercel.app/api/webhook/midtrans`

## Status saat ini: FUNGSIONAL end-to-end
Alur lengkap sudah berhasil divalidasi: Register/Login (wajib) → isi tes D1-D4 → halaman hasil (ringkasan gratis dihitung lokal) → klik "Bayar Rp 59.000" → Midtrans Snap popup → bayar (sandbox) → webhook generate laporan AI lengkap → **laporan tampil otomatis di halaman /hasil + tombol Download PDF** → (seharusnya) email terkirim via Resend.

## Bug yang sudah diperbaiki (jangan diulang!)
1. `app/tes/d4/page.tsx` dulu isinya copy-paste LandingPage — sudah diganti form Konteks Personal asli (7 pertanyaan dari `lib/soal-d4.ts`).
2. Auth wajib sebelum akses `/tes/*` dan `/hasil` — diimplementasi via `middleware.ts` (cek session Supabase, redirect ke `/auth/register` kalau belum login).
3. `session_id` dulu pakai placeholder `'demo-' + Date.now()` (bukan UUID asli) — sekarang dibuat sebagai row asli di tabel `test_sessions` saat user pertama masuk `/hasil` (lihat `app/hasil/page.tsx` useEffect `ensureSession`).
4. **Generate laporan AI dipindah ke SETELAH pembayaran sukses** (bukan saat klik tombol bayar) — supaya user tidak menunggu 2-4 menit di browser. Sekarang terjadi di webhook (`app/api/webhook/midtrans/route.ts`) secara server-to-server.
5. Semua API route (`api/laporan`, `api/bayar`, `api/webhook/midtrans`) pakai `createAdminClient()` (service role key) dari `lib/supabase.ts`, BUKAN `createClient()` biasa (anon key) — supaya bisa bypass RLS dan pakai `auth.admin.getUserById`.
6. Webhook Midtrans verifikasi signature SHA512 asli (bukan cuma cek field ada/tidak).
7. **`NODE_ENV` JANGAN dipakai untuk deteksi sandbox/production Midtrans** — di Vercel, `NODE_ENV` selalu `'production'` untuk semua deployment termasuk yang masih sandbox. Pakai env var terpisah: `MIDTRANS_IS_PRODUCTION` / `NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION` (sekarang `false`).
8. `order_id` Midtrans dibatasi **maksimal 50 karakter**. Format sekarang: `KG-{uuid session}-{timestamp detik}` = persis 50 char. Jangan pakai prefix panjang atau `Date.now()` (ms, 13 digit) lagi.
9. Env var harus di-set via `printf "value" | vercel env add ...`, JANGAN `echo "value" | ...` — `echo` menambahkan newline tersembunyi di akhir value yang merusak format URL (`callbacks.finish` dkk jadi invalid di mata Midtrans).
10. **`max_tokens` laporan AI siswa harus minimal 8000** (di `lib/laporan.ts`). Dengan 4000, laporan SELALU kepotong (`stop_reason: 'max_tokens'`) karena butuh 3 jurusan + 5 profesi + narasi panjang → JSON gagal di-parse → webhook gagal total. Satu panggilan Claude untuk laporan siswa makan waktu **~130 detik** sendiri (output ~6000+ token) — jangan kaget kalau lambat, itu normal untuk model ini dengan prompt sebesar ini.
11. `maxDuration` di route yang panggil Claude harus besar: `app/api/webhook/midtrans/route.ts` = 290s, `app/api/laporan/route.ts` = 290s. Total proses (laporan siswa + laporan ortu + simpan DB + kirim email) bisa 150-220 detik.
12. Insert/update row `reports` di webhook WAJIB isi `user_id` — kalau kosong, RLS policy `"Users can view own reports" using (auth.uid() = user_id)` tidak akan pernah match, dan user tidak bisa baca laporannya sendiri dari browser.

## FASE 1 (DevPlan) — SELESAI (semua 8 kriteria checklist terpenuhi)
Dikerjakan dalam satu rangkaian sesi, deployed ke production (`https://karirgps-ervans-projects-5bd9c2a5.vercel.app`), dan diverifikasi end-to-end langsung di production (bukan hanya build check).

**Task 1.1 — Web Report Rendering.** Halaman baru `/laporan/[id]` membaca `test_sessions` + `reports` langsung dari Supabase (RLS by `user_id`) — TIDAK bergantung Zustand/localStorage lagi. Laporan bisa diakses kapan saja, dari device manapun, selama login dengan akun yang sama.
- Logika rekomendasi gratis (PROFIL_TEXT, JURUSAN_MAP, PROFESI_MAP, ScoreBar) diekstrak ke `lib/rekomendasi-gratis.tsx` — dipakai bersama oleh `/hasil` dan `/laporan/[id]`.
- Callback Midtrans (`app/api/bayar/route.ts`) sekarang redirect ke `/laporan/{session_id}?status=...` bukan `/hasil?...`.
- `/hasil` tetap dipakai untuk flow tes selesai → preview gratis → bayar (sebelum session "paid"); begitu bayar sukses, redirect ke `/laporan/[id]` untuk akses permanen.
- `middleware.ts` sudah menambahkan `/laporan` ke auth gate.
- Belum dikerjakan: tombol "Kirim Ulang ke Email" (opsional — devplan tulis "Download PDF *atau* Kirim Ulang", Download PDF sudah ada).

**Task 1.2 — Mobile UX Polish.** Semua touch target dinaikkan ke minimal 44px (`SkalaItem`, `SkenarioCard`, tombol nav `TesLayout`, form auth). Progress counter per-blok (Blok A/Blok B) ditambahkan di D1-D3. Teks transisi antar dimensi diganti dengan copy resmi dari devplan (persis, bukan paraphrase) di intro D2/D3/D4. Loading state generate laporan pakai copy brand voice resmi. Diverifikasi visual via screenshot mobile 375px (landing, register, D1-D4) — tidak ada overflow, semua tampil rapi.

**Task 1.3 — Error Handling Robust.** `/api/bayar` dan `/api/laporan` sekarang wajib login (`lib/supabase-server.ts` — cookie-aware server client) + verifikasi ownership session, supaya tidak bisa di-spam orang lain (boros Claude API/Midtrans). Polling laporan di `/hasil` dan `/laporan/[id]` sekarang punya state timeout eksplisit (>5 menit) dengan pesan manusiawi + tombol "Muat ulang halaman" alih-alih diam tanpa keterangan. Idempotency webhook **sudah diverifikasi langsung di production**: kirim webhook 2x dengan session sama → kedua kalinya `action: "already_paid"`, tidak ada laporan dobel atau panggilan Claude API dobel.

**Task 1.4 — Production Midtrans Switch.** Sudah ada sejak sebelumnya (`MIDTRANS_IS_PRODUCTION` / `NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION`, tidak pakai `NODE_ENV`) — diverifikasi ulang, sudah aman, didokumentasikan di `.env.example`. Belum diaktifkan (masih `false` / sandbox) — itu memang keputusan bisnis terpisah, bukan blocker Fase 1.

**Task 1.5 — Landing Page & SEO.** `app/layout.tsx` diubah dari client component jadi server component supaya bisa pakai Next.js Metadata API (title, description, keywords, Open Graph, Twitter card). `app/page.tsx` juga jadi server component (lebih ringan — bundle JS landing page turun dari ~2KB ke 175B) dengan metadata spesifik + section FAQ baru (4 pertanyaan: durasi, harga, isi laporan, bukan pengganti psikolog).

### Verifikasi E2E yang sudah dijalankan (bukan asumsi)
1. `npm run build` sukses di setiap tahap.
2. Screenshot mobile 375px untuk landing, register, D1, D2 (cek teks transisi), D3 (cek teks transisi), D4.
3. Signup + isi sebagian tes via browser preview — konfirmasi UI jalan, lalu data test dihapus dari Supabase.
4. **Simulasi pembayaran sungguhan di production**: insert `test_sessions` dengan `profil_data` lengkap → panggil `/api/webhook/midtrans` dengan signature SHA512 valid → laporan AI ter-generate (3 jurusan, 5 profesi) dan tersimpan dengan `payment_status: 'paid'` dan `user_id` terisi benar.
5. **Tes idempotency sungguhan**: webhook dipanggil ulang untuk session yang sama → `action: "already_paid"`, tidak generate ulang.
6. Semua data test (user, session, report) dihapus lagi setelah verifikasi — tidak ada sisa data QA di production.

## FASE 2 (DevPlan) — Sedang berjalan

**Task 2.1 — User Dashboard: SELESAI.** `/app/dashboard/page.tsx` — daftar tes (gratis/dibayar) + CTA buka/beli laporan + ganti nama/email/password. Ditambahkan ke auth gate.

**Task 2.2 — Database Jurusan/Profesi/Kampus: SEBAGIAN BESAR SELESAI, kontennya kuat tapi jumlah di bawah target devplan (50 jurusan/30 kampus/50 profesi).**
- Skema baru: `jurusan`, `kampus`, `kampus_jurusan`, `profesi`, `beasiswa` (lihat `supabase-migration-002-jurusan-profesi.sql`).
- **10 jurusan** diimpor dari knowledge object berkualitas tinggi yang sudah dibuat user (`assets/knowledge/majors/*.md`) via `scripts/import-jurusan.mjs` — idempotent, bisa rerun kalau ada file baru.
- **20 profesi** + **20 kampus** PTN/PTS ternama via `scripts/seed-profesi-kampus.mjs`.
- `lib/db-knowledge.ts` — query kandidat jurusan/profesi yang match holland/MI/work-values profil user (skor overlap), graceful null kalau data kurang relevan.
- `lib/laporan.ts` — AI Report Engine sekarang **di-ground ke database** sebelum panggil Claude. **Diverifikasi end-to-end di production**: profil uji match kuat ke Teknik Informatika → AI benar-benar memilih Teknik Informatika/Teknik Sipil/Teknik Industri (3 teratas hasil scoring kita) dengan kampus nyata (ITB/UI/ITS/UGM/UNDIP) dan 5 profesi tepat dari tabel kita. Tidak lagi menebak dari memori model.
- **Belum selesai**: jumlah jurusan/kampus/profesi masih jauh di bawah target devplan (50/30/50). User punya pipeline ChatGPT yang sudah menghasilkan 10 major knowledge object berkualitas tinggi (`assets/knowledge/majors/`) — kalau user generate lebih banyak dengan format yang sama, tinggal jalankan ulang `scripts/import-jurusan.mjs` (idempotent by slug). Profesi/kampus tambahan butuh ditulis manual mengikuti pola di `scripts/seed-profesi-kampus.mjs`.
- **Catatan penting**: user juga upload dokumen spesifikasi "Knowledge Operating System" yang sangat besar (ontology, generator framework, Neo4j graph engine, dst — lihat `assets/knowledge/`, `architecture/`) dari sesi ChatGPT terpisah. **Keputusan yang diambil**: konten pengetahuannya (knowledge object jurusan) dipakai, tapi infrastrukturnya (Neo4j/Fastify/microservices) TIDAK diimplementasikan sebagai rebuild — akan membongkar produk Next.js+Supabase yang sudah live tanpa manfaat jelas untuk app tes SMA ini. Kalau sesi baru menemukan dokumen serupa lagi, pertimbangkan dengan logika yang sama: ambil kontennya, jangan rebuild infrastrukturnya.

**Task 2.3 — Referral System: BELUM dikerjakan.**

## Yang BELUM beres / perlu dilanjutkan
1. **Email via Resend belum konfirmasi terkirim** — laporan sudah tampil di web (jalur utama jalan), tapi email belum masuk ke inbox user di test terakhir. Perlu didiagnosis:
   - Cek Resend dashboard (https://resend.com/emails) apakah ada log percobaan kirim & statusnya (delivered/bounced/dll)
   - Cek domain `karirgps.id` di Resend sudah terverifikasi DNS-nya atau belum (`EMAIL_FROM=laporan@karirgps.id` — kalau domain belum diverifikasi di Resend, Resend akan reject/gagal kirim diam-diam)
   - Cek folder spam
   - `lib/email.ts` fungsi `kirimLaporan()` — cek response Resend API untuk error detail
2. **Midtrans masih sandbox** — belum siap terima pembayaran asli. Untuk go-live: ganti `MIDTRANS_SERVER_KEY`/`NEXT_PUBLIC_MIDTRANS_CLIENT_KEY` ke production key, set `MIDTRANS_IS_PRODUCTION=true` & `NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION=true`, lalu setel ulang Payment Notification URL di dashboard PRODUCTION Midtrans (https://dashboard.midtrans.com, beda dari sandbox).
3. **Belum ada domain custom** — masih pakai `karirgps-ervans-projects-5bd9c2a5.vercel.app`. Kalau user sudah punya domain `karirgps.id`, perlu dipasang di Vercel + update `NEXT_PUBLIC_BASE_URL`.
4. **`/api/laporan` (mode `full`) sekarang cuma untuk regenerasi manual** — tidak lagi dipanggil di jalur utama. Bisa dihapus kalau memang tidak dipakai, atau dibiarkan untuk keperluan admin/debug.
5. Webhook idempotency **sudah diverifikasi langsung** (lihat Fase 1 di atas). Yang masih belum: skenario pembayaran pending/gagal lewat Snap UI sungguhan (belum ada akses Chrome extension untuk drive browser saat sesi ini berjalan), dan skenario Claude API benar-benar down (sudah ada UI timeout-nya, tapi belum disimulasikan live).
6. File `test_profiles.py` di root project belum pernah dijalankan ulang untuk validasi kualitas laporan AI (lihat `DEPLOY.md` — target skor rata-rata ≥85% sebelum launch sungguhan).

## File-file kunci untuk dibaca duluan kalau lanjut development
- `app/hasil/page.tsx` — halaman paling kompleks: ringkasan gratis, ensure session, handle bayar, polling status laporan, render laporan lengkap
- `components/hasil/LaporanLengkap.tsx` — komponen render laporan + area print-to-PDF
- `app/api/webhook/midtrans/route.ts` — proses inti setelah pembayaran: verifikasi signature, generate laporan, simpan, kirim email
- `lib/laporan.ts` — system prompt & logic generate laporan AI (siswa + orang tua)
- `lib/supabase.ts` — browser client vs admin client (service role)
- `middleware.ts` — auth gate
- `supabase-schema.sql` — skema DB (tabel `test_sessions`, `reports`, RLS policies)
- `DEPLOY.md` — panduan deploy & checklist pre-launch (sebagian sudah dieksekusi)

## Cara deploy ulang
```bash
cd "D:/Aplikasiku/KarirGPS/karirgps"
npm run build   # selalu build dulu untuk cek error sebelum deploy
git add -A && git commit -m "pesan commit"
git push origin main
npx vercel --prod
```
Env vars dikelola via `npx vercel env add/rm <NAME> production` (gunakan `printf` bukan `echo` untuk menghindari newline tersembunyi).
