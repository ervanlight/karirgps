import type { RiasecCode, WorkValueCode } from '@/types'
import { persen } from '@/lib/scoring'

// ── colour per tipe ──────────────────────────────────────────
export const RIASEC_COLOR: Record<RiasecCode, string> = {
  R: '#1D9E75', I: '#534AB7', A: '#D4537E',
  S: '#185FA5', E: '#BA7517', C: '#639922',
}
export const WV_COLOR: Record<WorkValueCode, string> = {
  ST: '#185FA5', DA: '#1D9E75', OT: '#534AB7',
  KR: '#D4537E', KM: '#BA7517', FL: '#639922',
}

// ── simple free-text summaries per Holland top-pair ──────────
const PROFIL_TEXT: Record<string, string> = {
  'A,E': 'Cara kamu memproses dunia lebih banyak lewat ekspresi dan inisiatif. Kamu punya dorongan untuk menciptakan sesuatu yang orisinal — tapi bukan sekadar untuk diri sendiri. Ada bagian dari kamu yang juga ingin karya itu dikenal dan berdampak. Kombinasi ini (Artistic & Enterprising) membedakanmu dari tipe artistik murni, karena kamu memikirkan sisi bisnis dan audiens dari karyamu.',
  'E,A': 'Kamu bergerak dengan visi yang jelas dan tidak sungkan untuk memimpin — tapi cara kamu memimpin sering kali lewat ide dan kreasi, bukan sekadar otoritas. Itu kombinasi yang langka: pemimpin yang juga pencipta. (Enterprising & Artistic)',
  'I,A': 'Kamu memiliki rasa ingin tahu yang dalam dan cara berpikir yang tidak konvensional. Kamu menikmati memahami sesuatu sampai ke akarnya — lalu menyampaikannya kembali dengan cara yang tidak biasa. (Investigative & Artistic)',
  'A,I': 'Ada kecerdasan analitis di balik kreativitasmu. Kamu tidak hanya membuat — kamu juga memahami mengapa sesuatu berhasil atau tidak. Itu yang membuat karyamu lebih dari sekadar estetis. (Artistic & Investigative)',
  'S,E': 'Kamu paling hidup ketika ada orang yang bisa dibantu atau digerakkan. Ada energi kepemimpinan di kamu, tapi yang paling memotivasimu bukan kuasanya — melainkan dampaknya pada orang lain. (Social & Enterprising)',
  'E,S': 'Kamu punya naluri untuk memimpin yang didasarkan pada kepedulian terhadap orang sekitarmu. Bukan pemimpin yang dingin — tapi pemimpin yang tahu kapan harus mendengar. (Enterprising & Social)',
  'I,S': 'Kamu menggabungkan rasa ingin tahu yang dalam dengan empati yang kuat. Itu kombinasi yang jarang — dan sangat dibutuhkan di bidang yang bersinggungan antara ilmu pengetahuan dan manusia. (Investigative & Social)',
  'S,I': 'Cara kamu membantu orang lain selalu didasari oleh pemahaman yang mendalam, bukan sekadar niat baik. Itu yang membuat kontribusimu lebih dari sekadar kata-kata penyemangat. (Social & Investigative)',
  'E,I': 'Kamu punya ambisi yang didukung oleh kecerdasan analitis. Kamu tidak hanya ingin mencapai sesuatu — kamu ingin memahami cara terbaik untuk mencapainya. (Enterprising & Investigative)',
  'I,E': 'Rasa ingin tahumu bukan hanya akademis — ada bagian dari kamu yang juga ingin menerapkan apa yang kamu pelajari untuk hasil yang nyata. (Investigative & Enterprising)',
  'C,I': 'Kamu punya kombinasi yang kuat antara ketelitian dan kemampuan berpikir analitis. Orang seperti kamu yang biasanya menjaga sistem tetap berjalan dengan baik tanpa banyak drama. (Conventional & Investigative)',
  'R,I': 'Kamu berpikir dengan tanganmu — dalam arti yang baik. Kamu memahami dunia lewat mengerjakan sesuatu secara langsung, dan lebih suka fakta konkret daripada teori abstrak. (Realistic & Investigative)',
}

// ── Holland Code Explanations ───────────────────────────────
export const HOLLAND_DESC: Record<RiasecCode, string> = {
  R: 'Realistic (Si Praktis): Suka bekerja dengan objek nyata, mesin, alam, alat, atau aktivitas fisik luar ruangan.',
  I: 'Investigative (Si Pemikir): Suka mengobservasi, menganalisis, mengevaluasi, dan memecahkan masalah kompleks.',
  A: 'Artistic (Si Kreator): Intuitif, imajinatif, suka bekerja dalam situasi tidak terstruktur untuk menciptakan sesuatu.',
  S: 'Social (Si Penolong): Suka mencerahkan, membantu, melatih, atau menyembuhkan orang lain.',
  E: 'Enterprising (Si Persuasif): Suka bekerja dengan orang lain untuk mempengaruhi, memimpin, atau mencapai tujuan organisasi.',
  C: 'Conventional (Si Pengatur): Suka bekerja dengan data, angka, atau hal-hal yang terstruktur dengan detail yang sangat rapi.'
}

export function getProfilText(top2: RiasecCode[], labels: Record<RiasecCode, string>): string {
  const key = top2.slice(0, 2).join(',')
  const rev = top2.slice(0, 2).reverse().join(',')
  return PROFIL_TEXT[key] || PROFIL_TEXT[rev] ||
    `Profilmu menunjukkan dominasi pada ${labels[top2[0]]} yang dikombinasikan dengan ${labels[top2[1]]}. Artinya, kamu memadukan pendekatan "${HOLLAND_DESC[top2[0]].split(':')[0]}" dengan gaya "${HOLLAND_DESC[top2[1]].split(':')[0]}". Kombinasi ini membentuk kekuatan unikmu dalam dunia kerja, laporan lengkap akan membedah jalur karir apa yang paling butuh profil seperti ini.`
}

// ── free top jurusan per Holland top-pair ──────────────────────
const JURUSAN_MAP: Record<string, [string, string][]> = {
  'A,E': [['Desain Komunikasi Visual (DKV)', 'Cocok untuk kamu yang berpikir lewat visual dan ingin dampak nyata di dunia komunikasi.'], ['Ilmu Komunikasi', 'Jembatan antara kreativitas dan kemampuanmu menggerakkan orang lewat pesan yang kuat.'], ['Seni Rupa / Desain Produk', 'Jalur yang memberimu kebebasan ekspresi dengan prospek pasar yang semakin luas.']],
  'E,A': [['Manajemen & Bisnis Kreatif', 'Menggabungkan kemampuan strategimu dengan kecenderungan kreatif.'], ['Desain Komunikasi Visual', 'Otonomi kreatif penuh dengan prospek karir yang solid.'], ['Komunikasi Pemasaran', 'Tempat strategi dan kreativitas bertemu.']],
  'I,A': [['Arsitektur', 'Menggabungkan rigor analitis dengan ekspresi spasial.'], ['Desain Produk / UX Design', 'Riset dan desain yang berpusat pada manusia.'], ['Ilmu Komputer', 'Fondasi untuk membangun hal-hal baru yang belum ada.']],
  'S,E': [['Psikologi', 'Memahami manusia secara mendalam — fondasi untuk berbagai karir yang berdampak.'], ['Manajemen SDM / HI', 'Bergerak dengan dan untuk orang lain, tapi dengan otoritas yang nyata.'], ['Ilmu Komunikasi', 'Menjembatani manusia dan pesan dengan cara yang efektif.']],
  'I,S': [['Psikologi', 'Ilmu tentang manusia yang didekati secara ilmiah — persis kombinasimu.'], ['Kesehatan Masyarakat', 'Riset yang langsung berdampak pada kehidupan orang banyak.'], ['Pendidikan / Kedokteran', 'Bidang yang menggabungkan kedalaman ilmu dengan kontribusi nyata.']],
  'E,I': [['Ekonomi / Manajemen', 'Strategi yang didukung oleh pemahaman mendalam tentang bagaimana sistem bekerja.'], ['Hukum', 'Membutuhkan logika kuat sekaligus kemampuan berargumen.'], ['Teknik Informatika', 'Fondasi teknis untuk membangun bisnis atau karir berbasis teknologi.']],
}
const PROFESI_MAP: Record<string, string[]> = {
  'A,E': ['Creative Director', 'Brand Strategist', 'UX Designer', 'Art Director', 'Content Creator'],
  'E,A': ['Founder / Entrepreneur', 'Marketing Strategist', 'Creative Director', 'Product Manager', 'Brand Consultant'],
  'I,A': ['UX Researcher', 'Arsitek', 'Data Visualizer', 'UI/UX Designer', 'Peneliti'],
  'S,E': ['HR Director', 'Konselor Pendidikan', 'Community Manager', 'Program Manager', 'Social Entrepreneur'],
  'I,S': ['Psikolog', 'Dokter', 'Peneliti Kesehatan', 'Konselor', 'Epidemiolog'],
  'E,I': ['Business Analyst', 'Konsultan Strategi', 'Pengacara', 'Product Manager', 'Investment Analyst'],
}

export function getRekomendasi(top2: RiasecCode[]) {
  const key = top2.slice(0, 2).join(',')
  const rev = top2.slice(0, 2).reverse().join(',')
  const jurusan = JURUSAN_MAP[key] || JURUSAN_MAP[rev] || [
    ['Ilmu Komputer', 'Bidang luas dengan banyak jalur karir yang relevan.'],
    ['Psikologi', 'Cocok untuk profil yang punya kecerdasan interpersonal kuat.'],
    ['Manajemen', 'Jalur serbaguna yang bisa diarahkan ke berbagai industri.'],
  ] as [string, string][]
  const profesi = PROFESI_MAP[key] || PROFESI_MAP[rev] || ['Konsultan', 'Analis', 'Manajer', 'Peneliti', 'Wirausaha']
  return { jurusan, profesi }
}

// ── Score bar ──────────────────────────────────────────────────
export function ScoreBar({ label, skor, warna, max = 16 }: { label: string; skor: number; warna: string; max?: number }) {
  const pct = persen(skor, max)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <div style={{ fontSize: 12, color: '#888780', width: 110, flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, height: 6, background: 'rgba(44,44,42,0.08)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: warna, borderRadius: 3, transition: 'width 0.8s ease' }}/>
      </div>
      <div style={{ fontSize: 12, color: '#888780', width: 24, textAlign: 'right' }}>{skor}</div>
    </div>
  )
}

// ── MI Color Map ──────────────────────────────────────────────
import type { MICode } from '@/types'
export const MI_COLOR: Record<MICode, string> = {
  L: '#534AB7', LM: '#1D9E75', SP: '#D4537E',
  MU: '#BA7517', BK: '#185FA5', N: '#639922',
  IP: '#E07B39', IA: '#7B61FF',
}

// ── Paywall feature list (hanya fitur yang benar-benar ada) ────
export const FITUR_PAID = [
  'Cermin kepribadian: refleksi 2–3 paragraf yang terasa seperti mentor yang kenal kamu',
  'Kekuatan alami spesifik yang mungkin belum pernah ada yang memberitahumu',
  'Tiga jalur karier dengan skor kecocokan nyata (bukan generik)',
  'Roadmap 4 fase konkret yang bisa kamu mulai besok',
  'Risiko yang perlu diwaspadai + cara mengatasinya (jujur, tidak menghakimi)',
  'Pesan pembuka personal — kalimat pertama yang langsung "kena"',
]
