-- ============================================================
-- KARIRGPS — MIGRASI 002: Database Jurusan, Kampus, Profesi, Beasiswa
-- Fase 2 Task 2.2 (DevPlan) — Database Moat
-- Jalankan SEKALI di Supabase SQL Editor: https://supabase.com/dashboard/project/ayetmozirilwrskrshni/sql/new
-- ============================================================

create table if not exists public.jurusan (
  id               uuid primary key default uuid_generate_v4(),
  slug             text unique,                -- untuk upsert idempotent dari file sumber
  nama             text not null,
  kode_prodi       text,
  jenjang          text not null default 'S1' check (jenjang in ('S1', 'D3', 'D4')),
  rumpun_ilmu      text not null,              -- contoh: 'Teknik', 'Kesehatan', 'Sosial Humaniora'
  holland_fit      text[] not null default '{}',   -- contoh: ['I','A']
  mi_fit           text[] not null default '{}',   -- contoh: ['LM','SP']
  nilai_fit        text[] not null default '{}',   -- contoh: ['KR','OT']
  deskripsi_singkat text,
  prospek_kerja    text,                       -- daftar profesi, dipisah newline
  rata_gaji_awal   text,                       -- range deskriptif, contoh: 'Rp 5–8 juta'
  kampus_terkait   text[] default '{}',         -- nama kampus mentah dari sumber, sebelum dilink ke tabel kampus
  detail           jsonb default '{}',          -- mata_kuliah, hard_skills, soft_skills, kelebihan,
                                                 -- tantangan, cocok_jika, kurang_cocok_jika, jurusan_mirip, kata_kunci
  sumber           text,                        -- path file markdown asal, untuk traceability
  created_at       timestamptz default now()
);

create table if not exists public.kampus (
  id              uuid primary key default uuid_generate_v4(),
  slug            text unique,
  nama            text not null,
  singkatan       text,
  kota            text not null,
  provinsi        text not null,
  tipe            text not null check (tipe in ('PTN', 'PTS', 'Kedinasan')),
  akreditasi      text,
  url_pmb         text,
  biaya_kuliah_range text,                      -- deskriptif per semester/tahun
  created_at      timestamptz default now()
);

create table if not exists public.kampus_jurusan (
  id                  uuid primary key default uuid_generate_v4(),
  kampus_id           uuid references public.kampus(id) on delete cascade,
  jurusan_id          uuid references public.jurusan(id) on delete cascade,
  passing_grade_range text,                     -- deskriptif, contoh: '550-620 (UTBK)'
  daya_tampung        integer,
  jalur_masuk         text[] default '{}',       -- contoh: ['SNBP','SNBT','Mandiri']
  biaya_per_semester  text,
  created_at          timestamptz default now(),
  unique (kampus_id, jurusan_id)
);

create table if not exists public.profesi (
  id              uuid primary key default uuid_generate_v4(),
  slug            text unique,
  nama            text not null,
  deskripsi_singkat text,
  gaji_entry_range  text,
  gaji_mid_range    text,
  skill_utama     text[] default '{}',
  holland_fit     text[] not null default '{}',
  mi_fit          text[] not null default '{}',
  nilai_fit       text[] not null default '{}',
  trend_ai_impact text,                          -- deskripsi kualitatif risiko/peluang otomasi AI
  jurusan_relevan_ids uuid[] default '{}',
  created_at      timestamptz default now()
);

create table if not exists public.beasiswa (
  id                uuid primary key default uuid_generate_v4(),
  nama              text not null,
  penyelenggara     text,
  sasaran           text,                        -- contoh: 'Siswa SMA kurang mampu berprestasi'
  nilai_per_tahun   text,
  syarat_akademik   text,
  url_info          text,
  deadline_tahunan  text,                         -- deskriptif, contoh: 'Biasanya dibuka Mei-Juli'
  created_at        timestamptz default now()
);

-- RLS: data referensi ini PUBLIK untuk dibaca (dipakai AI engine + nanti bisa ditampilkan
-- di web), tapi hanya service role yang bisa menulis (lewat admin client / script seed).
alter table public.jurusan enable row level security;
alter table public.kampus enable row level security;
alter table public.kampus_jurusan enable row level security;
alter table public.profesi enable row level security;
alter table public.beasiswa enable row level security;

create policy "Anyone can read jurusan" on public.jurusan for select using (true);
create policy "Anyone can read kampus" on public.kampus for select using (true);
create policy "Anyone can read kampus_jurusan" on public.kampus_jurusan for select using (true);
create policy "Anyone can read profesi" on public.profesi for select using (true);
create policy "Anyone can read beasiswa" on public.beasiswa for select using (true);

-- Index untuk query AI engine (filter by holland_fit/mi_fit/nilai_fit array overlap)
create index if not exists jurusan_holland_fit_idx on public.jurusan using gin (holland_fit);
create index if not exists jurusan_mi_fit_idx on public.jurusan using gin (mi_fit);
create index if not exists profesi_holland_fit_idx on public.profesi using gin (holland_fit);
create index if not exists profesi_mi_fit_idx on public.profesi using gin (mi_fit);
create index if not exists kampus_jurusan_kampus_idx on public.kampus_jurusan(kampus_id);
create index if not exists kampus_jurusan_jurusan_idx on public.kampus_jurusan(jurusan_id);
