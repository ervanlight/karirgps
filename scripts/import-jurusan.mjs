// Import knowledge object jurusan (assets/knowledge/majors/*.md) ke tabel `jurusan` di Supabase.
// Idempotent: upsert berdasarkan `slug`, aman dijalankan berkali-kali.
//
// Jalankan dari root project: node scripts/import-jurusan.mjs
//
// Prasyarat: migrasi supabase-migration-002-jurusan-profesi.sql sudah dijalankan di Supabase SQL Editor.

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

const env = fs.readFileSync('.env.local', 'utf8')
const get = (k) => { const m = env.match(new RegExp(`^${k}=(.*)$`, 'm')); return m ? m[1].trim() : null }
const supabase = createClient(get('NEXT_PUBLIC_SUPABASE_URL'), get('SUPABASE_SERVICE_ROLE_KEY'))

// --- mapping Indonesian MI term -> MICode kita ---
const MI_MAP = {
  'logis-matematis': 'LM', 'logika-matematis': 'LM',
  'linguistik': 'L', 'visual-spasial': 'SP', 'spasial': 'SP',
  'musikal': 'MU', 'kinestetik': 'BK', 'naturalis': 'N',
  'interpersonal': 'IP', 'intrapersonal': 'IA',
}

// --- mapping O*NET-style work value term -> WorkValueCode kita (best-effort, bukan 1:1 presisi) ---
const WV_MAP = {
  achievement: 'DA', independence: 'OT', recognition: 'KM',
  relationships: 'DA', support: 'ST', working_conditions: 'FL',
  responsibility: 'OT', continuous_learning: 'KR', problem_solving: 'KR',
}

const RUMPUN_LABEL = {
  'sains-teknologi': 'Sains & Teknologi',
  kesehatan: 'Kesehatan',
  'sosial-humaniora': 'Sosial Humaniora',
  ekonomi: 'Ekonomi & Bisnis',
  hukum: 'Hukum',
  pendidikan: 'Pendidikan',
  seni: 'Seni & Desain',
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return null
  const [, fm, body] = match
  const meta = {}
  fm.split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    meta[key] = value
  })
  return { meta, body }
}

function section(body, heading) {
  const re = new RegExp(`## ${heading}\\n([\\s\\S]*?)(?=\\n## |$)`, 'i')
  const m = body.match(re)
  return m ? m[1].trim() : ''
}

function bulletList(text) {
  return text.split('\n').map((l) => l.replace(/^-\s*/, '').trim()).filter(Boolean)
}

function hollandToArray(holland) {
  if (!holland) return []
  return holland.split('').filter((c) => 'RIASEC'.includes(c))
}

function miToArray(body, frontmatterMi) {
  const found = new Set()
  const miSection = section(body, 'Multiple Intelligence')
  for (const [term, code] of Object.entries(MI_MAP)) {
    if (miSection.toLowerCase().includes(term)) found.add(code)
  }
  if (frontmatterMi && MI_MAP[frontmatterMi.trim()]) found.add(MI_MAP[frontmatterMi.trim()])
  return Array.from(found)
}

function wvToArray(frontmatterWv) {
  if (!frontmatterWv) return []
  const found = new Set()
  frontmatterWv.split(',').map((s) => s.trim().toLowerCase().replace(/\s+/g, '_')).forEach((term) => {
    if (WV_MAP[term]) found.add(WV_MAP[term])
  })
  return Array.from(found)
}

function jenjangToEnum(jenjang) {
  if (!jenjang) return 'S1'
  if (jenjang.includes('d3')) return 'D3'
  if (jenjang.includes('d4')) return 'D4'
  return 'S1'
}

const dir = path.join(process.cwd(), 'assets/knowledge/majors')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md')

let success = 0
for (const file of files) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8')
  const parsed = parseFrontmatter(raw)
  if (!parsed) { console.warn('skip (no frontmatter):', file); continue }
  const { meta, body } = parsed

  const namaMatch = body.match(/^#\s+(.+)$/m)
  const nama = namaMatch ? namaMatch[1].trim() : meta.slug

  const prospekKerja = bulletList(section(body, 'Prospek Karier')).join('\n')
  const kampusTerkait = bulletList(section(body, 'Kampus Indonesia yang Terkenal'))

  const detail = {
    mata_kuliah: bulletList(section(body, 'Mata Kuliah Utama')),
    hard_skills: bulletList(section(body, 'Hard Skills yang Dipelajari')),
    soft_skills: bulletList(section(body, 'Soft Skills yang Berkembang')),
    kelebihan: bulletList(section(body, 'Kelebihan Jurusan')),
    tantangan: bulletList(section(body, 'Tantangan Jurusan')),
    cocok_jika: bulletList(section(body, 'Cocok Jika...')),
    kurang_cocok_jika: bulletList(section(body, 'Kurang Cocok Jika...')),
    jurusan_mirip: bulletList(section(body, 'Jurusan Mirip')),
    kata_kunci: bulletList(section(body, 'Kata Kunci')),
    siapa_yang_cocok: section(body, 'Siapa yang Cocok'),
    tren_ai: section(body, 'Tren AI'),
  }

  const row = {
    slug: meta.slug,
    nama,
    jenjang: jenjangToEnum(meta.jenjang),
    rumpun_ilmu: RUMPUN_LABEL[meta.rumpun] || meta.rumpun || 'Lainnya',
    holland_fit: hollandToArray(meta.holland),
    mi_fit: miToArray(body, meta.multiple_intelligence),
    nilai_fit: wvToArray(meta.work_values),
    deskripsi_singkat: section(body, 'Ringkasan'),
    prospek_kerja: prospekKerja,
    rata_gaji_awal: section(body, 'Kisaran Gaji Fresh Graduate Indonesia'),
    kampus_terkait: kampusTerkait,
    detail,
    sumber: `assets/knowledge/majors/${file}`,
  }

  const { error } = await supabase.from('jurusan').upsert(row, { onConflict: 'slug' })
  if (error) {
    console.error('FAILED', file, error.message)
  } else {
    console.log('OK', file, '->', nama)
    success++
  }
}

console.log(`\nDone. ${success}/${files.length} jurusan berhasil diimpor.`)
