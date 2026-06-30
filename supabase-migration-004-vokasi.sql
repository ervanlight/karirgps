-- ============================================================
-- KARIRGPS — MIGRASI 004: Dimensi Vokasi/SMK pada tabel profesi
-- Mendukung percabangan laporan mode 'kerja' (lulusan SMK / jalur langsung kerja)
-- tanpa mengubah data yang sudah ada — murni additive.
-- Jalankan SEKALI di Supabase SQL Editor.
-- ============================================================

alter table public.profesi
  add column if not exists jenjang_masuk text[] default '{}',   -- contoh: ['SMA','SMK','D3','S1'] — jenjang pendidikan minimal yang realistis untuk masuk profesi ini
  add column if not exists sertifikasi_terkait text[] default '{}'; -- contoh: ['BNSP Juru Las', 'CCNA'] — sertifikasi resmi yang relevan/menaikkan daya saing

comment on column public.profesi.jenjang_masuk is 'Jenjang pendidikan minimal yang realistis untuk masuk profesi ini. Dipakai engine untuk memfilter kandidat profesi pada mode laporan "kerja" (lulusan SMK/langsung kerja tanpa kuliah dulu).';
comment on column public.profesi.sertifikasi_terkait is 'Sertifikasi/lisensi resmi (BNSP, SKKNI, vendor, dll) yang relevan untuk profesi ini.';

create index if not exists profesi_jenjang_masuk_idx on public.profesi using gin (jenjang_masuk);
