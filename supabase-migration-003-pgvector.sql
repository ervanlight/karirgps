-- ============================================================
-- KARIRGPS — DATABASE MIGRATION 003: VECTOR RAG
-- Jalankan ini di Supabase SQL Editor
-- ============================================================

-- 1. Enable ekstensi vector
create extension if not exists vector
with schema extensions;

-- 2. Buat tabel knowledge_chunks
create table if not exists public.knowledge_chunks (
    id bigserial primary key,
    source_file text not null,       -- Nama dokumen sumber (misal: Knowledge_Graph_Engine.md)
    content text not null,           -- Potongan teks/paragraf
    embedding vector(768) not null,  -- Vektor embedding (Gemini text-embedding-004 = 768 dimensi)
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Beri hak akses (RLS)
alter table public.knowledge_chunks enable row level security;

-- Hanya service role / admin yang bisa read/write
create policy "Allow service role read knowledge_chunks" 
on public.knowledge_chunks for select using (true);

create policy "Allow service role insert knowledge_chunks" 
on public.knowledge_chunks for insert with check (true);

create policy "Allow service role update knowledge_chunks" 
on public.knowledge_chunks for update using (true);

create policy "Allow service role delete knowledge_chunks" 
on public.knowledge_chunks for delete using (true);

-- 4. Buat fungsi untuk mencari dokumen paling relevan (Cosine Similarity)
create or replace function match_knowledge_chunks (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  source_file text,
  content text,
  similarity float
)
language sql stable
as $$
  select
    knowledge_chunks.id,
    knowledge_chunks.source_file,
    knowledge_chunks.content,
    1 - (knowledge_chunks.embedding <=> query_embedding) as similarity
  from knowledge_chunks
  where 1 - (knowledge_chunks.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
