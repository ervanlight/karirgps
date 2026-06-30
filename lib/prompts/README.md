# KarirGPS — Engine Laporan: Metode Pikir, Mode, dan Free vs Paid

Dokumen ini adalah satu-satunya sumber kebenaran untuk bagaimana laporan KarirGPS dibuat, apa yang membedakan gratis dan berbayar, dan kenapa sistem ini bukan sekadar "satu file prompt yang bisa di-copy-paste". Kalau ada perubahan ke engine laporan, update dokumen ini juga.

## Kenapa ini bukan "cuma prompt"

Siapa pun bisa meniru teks instruksi di `premium-report-v3.ts`. Yang tidak bisa ditiru tanpa kerja yang sama adalah **rangkaian keputusan dan data yang terjadi sebelum teks itu dikirim ke model**:

1. **Anxiety Framework** (`lib/knowledge/anxiety-framework.ts`) — fungsi `getAnxietyContext()` membaca 7 jawaban D4 dan menyimpulkan kegelisahan utama siswa (10 tipe, termasuk dua tipe khusus SMK: `SMK_JALUR_GANDA` dan `SMK_SKILL_VS_GELAR`) lewat aturan eksplisit, bukan ditebak model dari nol tiap kali.
2. **Decision Engine** (`lib/knowledge/decision-engine.ts`) — fungsi `tentukanJalurFokus()` menentukan kerangka laporan (`kuliah` / `kerja` / `hybrid`) secara **deterministik** dari jawaban jalur D4, SEBELUM satu token pun dikirim ke AI. Ini yang membuat siswa lulusan SMK yang memilih kerja langsung mendapat laporan berisi jalur kerja nyata + sertifikasi — bukan dipaksa rekomendasi 3 jurusan kuliah seperti template generik.
3. **Database Grounding** (`lib/db-knowledge.ts`) — kandidat jurusan/profesi diambil dari tabel Supabase yang dikurasi manual (`jurusan`, `profesi`), diranking lewat skor overlap Holland/MI/Work-Values, dan untuk mode kerja/hybrid disaring lagi lewat kolom `jenjang_masuk` supaya hanya profesi yang realistis dimasuki dari SMA/SMK yang muncul. AI tidak menebak dari memorinya — ia memilih dari kandidat yang sudah kita siapkan.
4. **RAG pgvector** (`fetchRagContext`) — pencarian semantik ke knowledge base markdown (`assets/knowledge/majors/*.md`) untuk konteks tambahan yang relevan ke profil spesifik.
5. **Combination Tables** (`lib/knowledge/combination-tables.ts`) — fallback referensi RIASEC×MI×Work-Values, hanya disisipkan ke prompt kalau grounding database tipis (lihat `buildGroundingContext` di `lib/laporan.ts`) — bukan selalu-include, supaya hemat token saat data kuat.
6. **Brand Voice & Style Guide** (`lib/knowledge/brand-voice.ts`, `style-guide.ts`) — kerangka suara yang konsisten di semua output, ditulis dari riset tone yang spesifik untuk audiens siswa SMA/SMK Indonesia (bukan default suara generik chatbot).

Kalau orang lain copy teks prompt kita, mereka tetap tidak punya tabel `jurusan`/`profesi` yang dikurasi, tidak punya fungsi `tentukanJalurFokus()`, dan tidak punya logika anxiety detection ini. Itu yang membuat hasilnya tidak bisa direplikasi 1:1 hanya dari prompt.

## Mode laporan (kuliah / kerja / hybrid)

Ditentukan oleh `tentukanJalurFokus()` berdasarkan jawaban D4 `jalur`:

| Jawaban `jalur` | Mode | Struktur laporan |
|---|---|---|
| Hanya PTN/PTS/Kedinasan/LN | `kuliah` | 3 jurusan kuliah + 5 profesi (struktur lama, dipertahankan) |
| Hanya KERJA | `kerja` | 3-5 jalur kerja entry-level (`jalur_vokasi`) + 5 profesi — TIDAK ada rekomendasi jurusan kuliah sama sekali |
| Campuran KERJA + jalur kuliah, atau BELUM_TAHU murni | `hybrid` | 2 jurusan kuliah + 2-3 jalur kerja + 5 profesi — dua arah ditampilkan proporsional |

Field `jalur_fokus` disertakan di JSON output supaya frontend (`PremiumReportV3Renderer.tsx`) tahu blok mana yang harus dirender.

## Free vs Paid

### Gratis (free-report.ts, dipanggil di `/api/laporan-gratis`)
- Pakai: Brand Voice + Style Guide (trimmed) + Anxiety Framework.
- **Tidak** pakai: database grounding, RAG, combination tables — lebih ringan secara token, dan memang tidak perlu untuk laporan ringkas.
- Output: pembuka personal, identity mirror (3-4 kalimat refleksi), arah karir (Kuliah/Kerja/Hybrid) + alasan, 3 opsi karir spesifik, roadmap 6 bulan, 1 risiko utama, 1 insight, dan teaser halus ke premium.
- Kenapa tetap terasa beda dari ChatGPT/Gemini generik: anxiety detection membuat pembukanya langsung menyasar kegelisahan spesifik siswa (bukan template umum), dan arah karir sudah disesuaikan kondisi nyata (biaya, akademik, lokasi) dari D4 — bukan saran generik "ikuti passionmu".

### Berbayar — Rp 99.000 (premium-report-v3.ts + parent-report.ts, dipanggil setelah pembayaran sukses)
- Pakai: semua yang dipakai gratis, DITAMBAH database grounding + RAG + combination tables (fallback) + mode-aware structure (kuliah/kerja/hybrid).
- Output: laporan 9+ bagian (profil kepribadian, nilai kerja, jurusan ATAU jalur vokasi sesuai mode, 5 profesi, kekuatan, blind spot, langkah selanjutnya, penutup) + laporan terpisah khusus orang tua + akses permanen via `/laporan/[id]`.
- Harga tetap Rp 99.000, tidak diubah di fase ini.

## Efisiensi token (tanpa mengorbankan kualitas)
- Style guide dipangkas dari versi UI-microcopy lengkap (~73 baris, sebagian besar soal tombol/modal yang tidak relevan untuk teks naratif) ke versi khusus narasi panjang (~17 baris).
- Combination tables hanya disisipkan kalau grounding database+RAG kosong (siswa dengan profil yang datanya belum terwakili kuat di database kurasi).
- Mode `kerja` melewati query `ambilKandidatJurusan` sama sekali (tidak relevan, hemat 1 query + tokennya).
- **Prompt caching Claude**: instruksi laporan + brand voice + style guide (yang SELALU sama persis untuk mode yang sama) ditaruh di `system` dengan `cache_control: {type: 'ephemeral'}` — panggilan kedua dst dengan mode yang sama cuma bayar ~10% harga normal untuk bagian itu. Data yang berubah per siswa (profil, anxiety, kandidat DB) selalu di pesan `user`, supaya cache tidak pernah invalid.

## Engine AI: Claude (Anthropic), bukan Gemini
Sejak migrasi, `lib/laporan.ts` dan `app/api/laporan-gratis/route.ts` memanggil **Claude Sonnet 4.6** (`lib/claude-client.ts`) — bukan Gemini lagi. Alasan: Gemini API key di project ini berulang kali kena `limit: 0` di free tier (masalah di level akun Google, bukan project/key), sementara biaya Claude untuk laporan kita sangat kecil (~Rp1.000/siklus penuh dengan Sonnet 4.6).
- Sengaja **tidak** memakai Opus (terlalu mahal untuk tugas output JSON terstruktur ini) dan **tidak** mengaktifkan extended thinking (`thinking` param sengaja tidak diisi — tugas ini bukan reasoning panjang).
- `GEMINI_API_KEY` masih ada di `.env.local` HANYA untuk embedding RAG di `lib/db-knowledge.ts` (`fetchRagContext`) — kalau itu juga limit:0, fungsinya gagal lembut (return string kosong), tidak menggagalkan laporan.

## Mengembangkan basis pengetahuan ke depan
- Tambah jurusan baru: buat file markdown baru di `assets/knowledge/majors/` mengikuti pola persis `teknik-informatika.md`, lalu jalankan `node scripts/import-jurusan.mjs` (idempotent, aman dijalankan ulang).
- Tambah profesi/kampus: edit array `PROFESI`/`KAMPUS` di `scripts/seed-profesi-kampus.mjs`, lalu jalankan ulang.
- Tambah profesi jalur SMK/vokasi: isi `jenjang_masuk` (mis. `['SMA','SMK']`) dan `sertifikasi_terkait` supaya otomatis ikut tersaring di mode `kerja`/`hybrid` (kolom dari `supabase-migration-004-vokasi.sql`).
