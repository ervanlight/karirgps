-- ============================================================
-- KARIRGPS — DATABASE SCHEMA
-- Jalankan ini di Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- TABEL: test_sessions
-- Menyimpan jawaban dan status tes per sesi
-- ============================================================
create table if not exists public.test_sessions (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references auth.users(id) on delete set null,
  session_token text unique not null,        -- untuk user yang belum login
  profil_data   jsonb,                        -- ProfilData lengkap setelah selesai
  jawaban_raw   jsonb default '{}',          -- backup jawaban mentah per dimensi
  status        text not null default 'in_progress'
                check (status in ('in_progress', 'completed', 'paid')),
  created_at    timestamptz default now(),
  completed_at  timestamptz
);

-- RLS: user hanya bisa baca session miliknya sendiri
alter table public.test_sessions enable row level security;

create policy "Users can view own sessions"
  on public.test_sessions for select
  using (auth.uid() = user_id or session_token = current_setting('app.session_token', true));

create policy "Anyone can insert sessions"
  on public.test_sessions for insert
  with check (true);

create policy "Users can update own sessions"
  on public.test_sessions for update
  using (auth.uid() = user_id or session_token = current_setting('app.session_token', true));

-- Index untuk query cepat
create index if not exists test_sessions_user_id_idx on public.test_sessions(user_id);
create index if not exists test_sessions_token_idx on public.test_sessions(session_token);
create index if not exists test_sessions_status_idx on public.test_sessions(status);

-- ============================================================
-- TABEL: reports
-- Menyimpan laporan AI yang sudah di-generate
-- ============================================================
create table if not exists public.reports (
  id              uuid primary key default uuid_generate_v4(),
  session_id      uuid references public.test_sessions(id) on delete cascade,
  user_id         uuid references auth.users(id) on delete set null,
  laporan_siswa   jsonb,                      -- LaporanSiswa JSON
  laporan_ortu    jsonb,                      -- LaporanOrangTua JSON
  payment_status  text not null default 'unpaid'
                  check (payment_status in ('unpaid', 'paid', 'refunded')),
  payment_id      text,                       -- Midtrans transaction ID
  payment_method  text,                       -- qris, bank_transfer, gopay, dll
  paid_at         timestamptz,
  amount          integer default 59000,      -- dalam rupiah
  created_at      timestamptz default now()
);

alter table public.reports enable row level security;

create policy "Users can view own reports"
  on public.reports for select
  using (auth.uid() = user_id);

create policy "Service role can insert reports"
  on public.reports for insert
  with check (true);

create policy "Service role can update reports"
  on public.reports for update
  using (true);

-- Index
create index if not exists reports_session_id_idx on public.reports(session_id);
create index if not exists reports_user_id_idx on public.reports(user_id);
create index if not exists reports_payment_status_idx on public.reports(payment_status);

-- ============================================================
-- TABEL: profiles
-- Data tambahan user di luar auth.users
-- ============================================================
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  nama        text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- TABEL: waitlist (opsional — untuk pre-launch)
-- ============================================================
create table if not exists public.waitlist (
  id         uuid primary key default uuid_generate_v4(),
  email      text unique not null,
  source     text default 'landing',
  created_at timestamptz default now()
);

alter table public.waitlist enable row level security;

create policy "Anyone can join waitlist"
  on public.waitlist for insert with check (true);

-- ============================================================
-- VIEWS (helper queries)
-- ============================================================

-- Semua sesi yang sudah selesai dan belum punya laporan
create or replace view public.pending_reports as
select
  ts.id as session_id,
  ts.user_id,
  ts.profil_data,
  ts.completed_at
from public.test_sessions ts
left join public.reports r on r.session_id = ts.id
where ts.status = 'completed'
  and r.id is null;

-- Revenue summary (untuk dashboard admin)
create or replace view public.revenue_summary as
select
  date_trunc('day', paid_at) as tanggal,
  count(*) as jumlah_transaksi,
  sum(amount) as total_rupiah,
  payment_method
from public.reports
where payment_status = 'paid'
group by 1, 4
order by 1 desc;
