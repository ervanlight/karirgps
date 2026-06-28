// Seed awal tabel `profesi` dan `kampus` + relasi `kampus_jurusan` dasar.
// Idempotent (upsert by slug). Jalankan SETELAH import-jurusan.mjs supaya
// jurusan_relevan_ids dan kampus_jurusan bisa di-link dengan benar.
//
// Jalankan dari root project: node scripts/seed-profesi-kampus.mjs

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const env = fs.readFileSync('.env.local', 'utf8')
const get = (k) => { const m = env.match(new RegExp(`^${k}=(.*)$`, 'm')); return m ? m[1].trim() : null }
const supabase = createClient(get('NEXT_PUBLIC_SUPABASE_URL'), get('SUPABASE_SERVICE_ROLE_KEY'))

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// ============================================================
// PROFESI — dikurasi dari "Prospek Karier" di 10 jurusan yang sudah ada,
// + fit tags disesuaikan dengan holland/mi/nilai jurusan asalnya.
// ============================================================
const PROFESI = [
  { nama: 'Software Engineer', deskripsi_singkat: 'Merancang dan membangun aplikasi/sistem perangkat lunak, dari backend, frontend, hingga infrastruktur.', gaji_entry_range: 'Rp 6-10 juta', gaji_mid_range: 'Rp 15-30 juta', skill_utama: ['Pemrograman', 'Struktur data', 'Debugging', 'Git'], holland_fit: ['I', 'R'], mi_fit: ['LM', 'SP'], nilai_fit: ['KM', 'OT'], trend_ai_impact: 'AI coding assistant mengurangi kerja coding rutin, tapi kebutuhan arsitektur sistem dan code review tetap tinggi.' },
  { nama: 'Data Scientist', deskripsi_singkat: 'Menganalisis data besar untuk insight bisnis dan membangun model prediktif/machine learning.', gaji_entry_range: 'Rp 7-12 juta', gaji_mid_range: 'Rp 18-35 juta', skill_utama: ['Python/R', 'Statistik', 'SQL', 'Machine learning'], holland_fit: ['I'], mi_fit: ['LM'], nilai_fit: ['KM', 'KR'], trend_ai_impact: 'Permintaan tinggi karena AI butuh data terstruktur dan model yang diawasi manusia.' },
  { nama: 'Cybersecurity Analyst', deskripsi_singkat: 'Melindungi sistem dan data perusahaan dari ancaman keamanan siber.', gaji_entry_range: 'Rp 6-10 juta', gaji_mid_range: 'Rp 15-28 juta', skill_utama: ['Network security', 'Penetration testing', 'Risk assessment'], holland_fit: ['I', 'C'], mi_fit: ['LM'], nilai_fit: ['ST', 'KM'], trend_ai_impact: 'Makin krusial karena serangan berbasis AI makin canggih; profesi ini relatif tahan otomasi.' },
  { nama: 'UX Designer', deskripsi_singkat: 'Merancang pengalaman & antarmuka digital yang mudah dipakai berdasarkan riset pengguna.', gaji_entry_range: 'Rp 6-9 juta', gaji_mid_range: 'Rp 14-25 juta', skill_utama: ['User research', 'Wireframing', 'Prototyping', 'Figma'], holland_fit: ['A', 'I'], mi_fit: ['SP', 'IP'], nilai_fit: ['KR', 'OT'], trend_ai_impact: 'AI generative membantu drafting cepat, tapi riset & empati pengguna tetap perlu manusia.' },
  { nama: 'Dokter Umum', deskripsi_singkat: 'Memberikan layanan medis dasar, diagnosis, dan rujukan di klinik, puskesmas, atau rumah sakit.', gaji_entry_range: 'Rp 8-15 juta', gaji_mid_range: 'Rp 20-40 juta', skill_utama: ['Diagnosis klinis', 'Komunikasi pasien', 'Manajemen kasus'], holland_fit: ['I', 'S'], mi_fit: ['N', 'IP'], nilai_fit: ['DA', 'ST'], trend_ai_impact: 'AI membantu diagnosis & administrasi, tapi keputusan klinis dan empati tetap tugas dokter.' },
  { nama: 'Psikolog Klinis', deskripsi_singkat: 'Memberikan asesmen dan terapi psikologis untuk individu dengan masalah kesehatan mental.', gaji_entry_range: 'Rp 5-9 juta (sebelum profesi)', gaji_mid_range: 'Rp 15-30 juta (setelah profesi & praktik mandiri)', skill_utama: ['Asesmen psikologis', 'Konseling', 'Terapi'], holland_fit: ['S', 'I'], mi_fit: ['IP', 'IA'], nilai_fit: ['DA', 'OT'], trend_ai_impact: 'Hubungan terapeutik antar-manusia sulit digantikan AI; AI lebih cocok sebagai alat bantu screening.' },
  { nama: 'HR / Talent Acquisition Specialist', deskripsi_singkat: 'Mengelola rekrutmen, pengembangan, dan kesejahteraan karyawan di perusahaan.', gaji_entry_range: 'Rp 5-8 juta', gaji_mid_range: 'Rp 12-22 juta', skill_utama: ['Rekrutmen', 'Interview', 'People analytics'], holland_fit: ['S', 'E'], mi_fit: ['IP'], nilai_fit: ['DA', 'ST'], trend_ai_impact: 'AI mengotomasi screening CV, tapi keputusan akhir & hubungan kandidat tetap perlu manusia.' },
  { nama: 'Akuntan / Auditor', deskripsi_singkat: 'Mencatat, memeriksa, dan melaporkan keuangan perusahaan sesuai standar akuntansi.', gaji_entry_range: 'Rp 5-8 juta', gaji_mid_range: 'Rp 12-25 juta (setelah sertifikasi)', skill_utama: ['Pembukuan', 'Audit', 'Perpajakan', 'Excel'], holland_fit: ['C'], mi_fit: ['LM'], nilai_fit: ['ST', 'KM'], trend_ai_impact: 'Tugas pencatatan rutin makin terotomasi; nilai tambah bergeser ke analisis & advisory.' },
  { nama: 'Legal Officer / Corporate Lawyer', deskripsi_singkat: 'Menangani aspek hukum perusahaan: kontrak, kepatuhan, dan litigasi.', gaji_entry_range: 'Rp 6-10 juta', gaji_mid_range: 'Rp 15-35 juta', skill_utama: ['Drafting kontrak', 'Riset hukum', 'Negosiasi'], holland_fit: ['E', 'C'], mi_fit: ['L'], nilai_fit: ['ST', 'KM'], trend_ai_impact: 'AI legal-research mempercepat riset, tapi penalaran hukum & strategi tetap perlu pengacara.' },
  { nama: 'Content Writer / Copywriter', deskripsi_singkat: 'Menulis konten persuasif dan informatif untuk brand, media, atau kampanye marketing.', gaji_entry_range: 'Rp 4.5-7 juta', gaji_mid_range: 'Rp 10-20 juta', skill_utama: ['Menulis', 'SEO', 'Riset', 'Storytelling'], holland_fit: ['A', 'S'], mi_fit: ['L'], nilai_fit: ['KR', 'FL'], trend_ai_impact: 'AI generative menggeser kerja draft awal; nilai tambah manusia ada di ide, riset, dan suara brand otentik.' },
  { nama: 'Public Relations Officer', deskripsi_singkat: 'Mengelola citra publik organisasi melalui media dan komunikasi strategis.', gaji_entry_range: 'Rp 5-8 juta', gaji_mid_range: 'Rp 12-22 juta', skill_utama: ['Media relations', 'Crisis communication', 'Writing'], holland_fit: ['S', 'E'], mi_fit: ['L', 'IP'], nilai_fit: ['DA', 'FL'], trend_ai_impact: 'Monitoring media terotomasi, tapi strategi komunikasi dan relasi tetap butuh manusia.' },
  { nama: 'Business Analyst', deskripsi_singkat: 'Menganalisis proses bisnis dan memberi rekomendasi perbaikan berbasis data.', gaji_entry_range: 'Rp 6-9 juta', gaji_mid_range: 'Rp 15-28 juta', skill_utama: ['Analisis data', 'Process mapping', 'Komunikasi stakeholder'], holland_fit: ['E', 'I'], mi_fit: ['LM'], nilai_fit: ['KM', 'OT'], trend_ai_impact: 'AI mempercepat analisis data; peran bergeser ke interpretasi dan keputusan strategis.' },
  { nama: 'Marketing Executive / Digital Marketer', deskripsi_singkat: 'Merancang dan menjalankan kampanye marketing untuk meningkatkan penjualan/brand awareness.', gaji_entry_range: 'Rp 5-8 juta', gaji_mid_range: 'Rp 12-25 juta', skill_utama: ['Digital advertising', 'Analytics', 'Content strategy'], holland_fit: ['E', 'A'], mi_fit: ['L', 'IP'], nilai_fit: ['KM', 'KR'], trend_ai_impact: 'AI mengotomasi optimasi iklan; strategi kreatif dan brand positioning tetap human-led.' },
  { nama: 'Civil Engineer / Site Engineer', deskripsi_singkat: 'Merancang dan mengawasi pembangunan infrastruktur seperti jalan, gedung, dan jembatan.', gaji_entry_range: 'Rp 5.5-9 juta', gaji_mid_range: 'Rp 14-25 juta', skill_utama: ['AutoCAD', 'Perhitungan struktur', 'Manajemen proyek'], holland_fit: ['R', 'I'], mi_fit: ['SP', 'LM'], nilai_fit: ['ST', 'KM'], trend_ai_impact: 'AI membantu simulasi & desain, tapi pengawasan lapangan tetap perlu manusia.' },
  { nama: 'Industrial / Process Engineer', deskripsi_singkat: 'Mengoptimalkan proses produksi dan rantai pasok agar lebih efisien.', gaji_entry_range: 'Rp 5.5-9 juta', gaji_mid_range: 'Rp 14-26 juta', skill_utama: ['Lean manufacturing', 'Data analysis', 'Project management'], holland_fit: ['I', 'C'], mi_fit: ['LM'], nilai_fit: ['ST', 'KM'], trend_ai_impact: 'AI/IoT mempercepat optimasi proses; peran bergeser ke desain sistem dan continuous improvement.' },
  { nama: 'Graphic / Brand Designer', deskripsi_singkat: 'Membuat identitas visual dan materi kreatif untuk brand atau kampanye.', gaji_entry_range: 'Rp 4.5-7.5 juta', gaji_mid_range: 'Rp 10-20 juta', skill_utama: ['Adobe Creative Suite', 'Tipografi', 'Branding'], holland_fit: ['A'], mi_fit: ['SP'], nilai_fit: ['KR', 'FL'], trend_ai_impact: 'AI image generation mempercepat eksplorasi visual; arah kreatif & kurasi tetap perlu desainer.' },
  { nama: 'Management Trainee / Business Development', deskripsi_singkat: 'Program rotasi lintas divisi untuk membentuk calon manajer masa depan perusahaan.', gaji_entry_range: 'Rp 6-9 juta', gaji_mid_range: 'Rp 15-30 juta', skill_utama: ['Leadership', 'Analisis bisnis', 'Adaptabilitas'], holland_fit: ['E'], mi_fit: ['IP', 'LM'], nilai_fit: ['KM', 'DA'], trend_ai_impact: 'Peran manajerial dan pengambilan keputusan strategis relatif tahan otomasi AI.' },
  { nama: 'DevOps / Cloud Engineer', deskripsi_singkat: 'Mengelola infrastruktur cloud dan pipeline deployment aplikasi agar stabil dan scalable.', gaji_entry_range: 'Rp 7-11 juta', gaji_mid_range: 'Rp 18-32 juta', skill_utama: ['Cloud platform (AWS/GCP)', 'CI/CD', 'Containerization'], holland_fit: ['R', 'I'], mi_fit: ['LM'], nilai_fit: ['KM', 'ST'], trend_ai_impact: 'Permintaan tinggi karena makin banyak sistem AI butuh infrastruktur skalabel & reliable.' },
  { nama: 'Konselor Pendidikan / Karir', deskripsi_singkat: 'Membantu siswa/klien memahami diri dan membuat keputusan pendidikan atau karir.', gaji_entry_range: 'Rp 4.5-7 juta', gaji_mid_range: 'Rp 9-18 juta', skill_utama: ['Konseling', 'Asesmen minat-bakat', 'Komunikasi empatik'], holland_fit: ['S'], mi_fit: ['IP', 'IA'], nilai_fit: ['DA', 'ST'], trend_ai_impact: 'AI bisa bantu asesmen awal, tapi proses konseling personal tetap butuh kehadiran manusia.' },
  { nama: 'Quality Assurance / QA Engineer', deskripsi_singkat: 'Menguji perangkat lunak untuk memastikan kualitas sebelum dirilis ke pengguna.', gaji_entry_range: 'Rp 5.5-9 juta', gaji_mid_range: 'Rp 13-24 juta', skill_utama: ['Test case design', 'Automation testing', 'Ketelitian'], holland_fit: ['C', 'I'], mi_fit: ['LM'], nilai_fit: ['ST', 'KM'], trend_ai_impact: 'AI mengotomasi sebagian testing rutin; desain skenario uji kompleks tetap perlu manusia.' },
]

// ============================================================
// KAMPUS — PTN/PTS ternama Indonesia (fakta dasar: nama/kota/tipe relatif aman;
// biaya/akreditasi sengaja digeneralisasi, perlu verifikasi berkala sebelum
// ditampilkan sebagai klaim presisi ke pengguna).
// ============================================================
const KAMPUS = [
  { nama: 'Universitas Indonesia', singkatan: 'UI', kota: 'Depok', provinsi: 'Jawa Barat', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Institut Teknologi Bandung', singkatan: 'ITB', kota: 'Bandung', provinsi: 'Jawa Barat', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Gadjah Mada', singkatan: 'UGM', kota: 'Yogyakarta', provinsi: 'D.I. Yogyakarta', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Institut Teknologi Sepuluh Nopember', singkatan: 'ITS', kota: 'Surabaya', provinsi: 'Jawa Timur', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Institut Pertanian Bogor', singkatan: 'IPB', kota: 'Bogor', provinsi: 'Jawa Barat', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Airlangga', singkatan: 'Unair', kota: 'Surabaya', provinsi: 'Jawa Timur', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Padjadjaran', singkatan: 'Unpad', kota: 'Bandung', provinsi: 'Jawa Barat', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Diponegoro', singkatan: 'Undip', kota: 'Semarang', provinsi: 'Jawa Tengah', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Sebelas Maret', singkatan: 'UNS', kota: 'Surakarta', provinsi: 'Jawa Tengah', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Brawijaya', singkatan: 'UB', kota: 'Malang', provinsi: 'Jawa Timur', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Sumatera Utara', singkatan: 'USU', kota: 'Medan', provinsi: 'Sumatera Utara', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Hasanuddin', singkatan: 'Unhas', kota: 'Makassar', provinsi: 'Sulawesi Selatan', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Andalas', singkatan: 'Unand', kota: 'Padang', provinsi: 'Sumatera Barat', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Negeri Semarang', singkatan: 'Unnes', kota: 'Semarang', provinsi: 'Jawa Tengah', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Negeri Yogyakarta', singkatan: 'UNY', kota: 'Yogyakarta', provinsi: 'D.I. Yogyakarta', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Udayana', singkatan: 'Unud', kota: 'Denpasar', provinsi: 'Bali', tipe: 'PTN', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Telkom', singkatan: 'Tel-U', kota: 'Bandung', provinsi: 'Jawa Barat', tipe: 'PTS', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Bina Nusantara', singkatan: 'Binus', kota: 'Jakarta', provinsi: 'DKI Jakarta', tipe: 'PTS', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Trisakti', singkatan: 'Usakti', kota: 'Jakarta', provinsi: 'DKI Jakarta', tipe: 'PTS', akreditasi: 'A (Unggul)' },
  { nama: 'Universitas Atma Jaya Yogyakarta', singkatan: 'UAJY', kota: 'Yogyakarta', provinsi: 'D.I. Yogyakarta', tipe: 'PTS', akreditasi: 'A (Unggul)' },
]

let profesiCount = 0
for (const p of PROFESI) {
  const { error } = await supabase.from('profesi').upsert({ ...p, slug: slugify(p.nama) }, { onConflict: 'slug' })
  if (error) console.error('FAILED profesi', p.nama, error.message)
  else profesiCount++
}
console.log(`Profesi: ${profesiCount}/${PROFESI.length} berhasil diimpor.`)

let kampusCount = 0
for (const k of KAMPUS) {
  const { error } = await supabase.from('kampus').upsert({ ...k, slug: slugify(k.nama) }, { onConflict: 'slug' })
  if (error) console.error('FAILED kampus', k.nama, error.message)
  else kampusCount++
}
console.log(`Kampus: ${kampusCount}/${KAMPUS.length} berhasil diimpor.`)
