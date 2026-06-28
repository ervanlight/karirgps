import type { SoalSkenario, SoalSkala } from '@/types'

// ============================================================
// DIMENSI 1 — RIASEC
// Bank Soal Lengkap: 6 Skenario + 12 Skala = 18 soal
// ============================================================

export const D1_SKENARIO: SoalSkenario[] = [
  {
    id: 'S1',
    pertanyaan: 'Libur panjang tanpa kewajiban.',
    konteks:
      'Kamu dapat libur 5 hari penuh. Tidak ada PR, tidak ada agenda. Dari tiga pilihan ini, mana yang paling mungkin kamu lakukan?',
    opsi: [
      {
        teks: 'Bantu orang tua atau tetangga beres-beres sesuatu di rumah, coba rakit furnitur baru, atau jalan-jalan ke tempat outdoor yang belum pernah dikunjungi.',
        kode: 'R',
      },
      {
        teks: 'Habiskan waktu menyelami topik yang selama ini bikin penasaran — baca, nonton dokumenter, atau cari tahu sampai benar-benar ngerti cara kerjanya.',
        kode: 'I',
      },
      {
        teks: 'Bikin sesuatu dari nol tanpa brief atau aturan — gambar, tulisan, edit video, atau eksperimen visual yang selama ini ditunda.',
        kode: 'A',
      },
    ],
  },
  {
    id: 'S2',
    pertanyaan: 'Ada lowongan relawan di sekolah.',
    konteks:
      'Sekolahmu butuh tiga orang untuk peran berbeda. Kamu hanya bisa pilih satu. Mana yang paling kamu pilih?',
    opsi: [
      {
        teks: 'Tutor teman — bantu yang kesulitan di mata pelajaran tertentu, satu-satu atau kelompok kecil.',
        kode: 'S',
      },
      {
        teks: 'Koordinator acara tahunan — pegang tanggung jawab penuh, atur tim, dan pastikan semua berjalan sesuai target.',
        kode: 'E',
      },
      {
        teks: 'Bendahara dan admin OSIS — kelola kas, arsip dokumen, dan buat laporan keuangan tiap kegiatan.',
        kode: 'C',
      },
    ],
  },
  {
    id: 'S3',
    pertanyaan: 'Proyek kelompok yang mandek.',
    konteks:
      'Kelompokmu lagi kacau. Tenggat tinggal 3 hari, tapi semua orang bingung dan tidak ada yang bergerak. Apa yang paling mungkin kamu lakukan?',
    opsi: [
      {
        teks: 'Langsung ambil alih — susun pembagian tugas yang jelas, tentukan deadline mini, dan pastikan semua orang tahu apa yang harus dikerjakan.',
        kode: 'E',
      },
      {
        teks: 'Ngobrol sama anggota satu per satu, cari tahu kenapa mereka mandek, dan coba bantu tiap orang nemuin cara kerjanya sendiri.',
        kode: 'S',
      },
      {
        teks: 'Kerjakan dulu bagian yang bisa dikerjakan sendiri — terutama yang sifatnya fisik atau teknis — sambil nunggu tim lain siap.',
        kode: 'R',
      },
    ],
  },
  {
    id: 'S4',
    pertanyaan: 'Guru minta bikin proyek bebas.',
    konteks:
      'Tidak ada format yang ditentukan. Tidak ada tema wajib. Kamu bebas bikin apapun. Kamu paling tertarik untuk...',
    opsi: [
      {
        teks: 'Riset satu fenomena nyata yang bikin penasaran, kumpulkan data, dan sajikan temuanmu dalam laporan yang detail dan terstruktur.',
        kode: 'I',
      },
      {
        teks: 'Bikin karya — ilustrasi, cerpen, video pendek, atau instalasi — yang mengekspresikan sesuatu yang selama ini tidak bisa diungkapkan lewat kata-kata biasa.',
        kode: 'A',
      },
      {
        teks: 'Bikin sistem — spreadsheet, template, atau panduan terstruktur — yang bisa membantu teman-teman mengelola sesuatu lebih efisien.',
        kode: 'C',
      },
    ],
  },
  {
    id: 'S5',
    pertanyaan: 'Tiga teman minta tolong di hari yang sama.',
    konteks: 'Kamu hanya punya waktu untuk satu. Mana yang pertama kamu bantu?',
    opsi: [
      {
        teks: 'Teman yang lagi galau berat, butuh seseorang untuk dengerin ceritanya tanpa menghakimi.',
        kode: 'S',
      },
      {
        teks: 'Teman yang mau perbaiki motor atau rakit sesuatu di rumahnya, tapi tidak tahu caranya dan minta kamu temenin.',
        kode: 'R',
      },
      {
        teks: 'Teman yang keuangannya berantakan dan minta bantuan untuk rancang ulang pengeluaran bulanannya.',
        kode: 'C',
      },
    ],
  },
  {
    id: 'S6',
    pertanyaan: 'Pilih konten yang paling sering kamu cari sendiri.',
    konteks:
      'Dari tiga jenis konten ini — semuanya berkualitas — mana yang paling sering kamu cari sendiri?',
    opsi: [
      {
        teks: 'Konten strategi: bagaimana seseorang membangun bisnis, memenangkan negosiasi, atau mengubah situasi sulit jadi peluang.',
        kode: 'E',
      },
      {
        teks: 'Konten penjelasan: ilmu pengetahuan, psikologi, sejarah, atau ekonomi — yang bikin kamu ngerti kenapa dunia bekerja seperti ini.',
        kode: 'I',
      },
      {
        teks: 'Konten kreatif: proses pembuatan sesuatu yang indah — film, musik, ilustrasi, desain — dan bagaimana seseorang menemukan suaranya sendiri.',
        kode: 'A',
      },
    ],
  },
]

export const D1_SKALA: SoalSkala[] = [
  // REALISTIC
  {
    id: 'SK-R1',
    pernyataan:
      'Aku lebih mudah belajar sesuatu kalau bisa langsung coba dan sentuh sendiri — bukan sekadar baca atau dengerin penjelasan.',
    kode: 'R',
  },
  {
    id: 'SK-R2',
    pernyataan:
      'Kalau ada sesuatu yang rusak atau tidak berfungsi di sekitarku, aku suka coba perbaiki atau utak-atik sendiri sebelum minta bantuan orang lain.',
    kode: 'R',
  },
  // INVESTIGATIVE
  {
    id: 'SK-I1',
    pernyataan:
      'Kalau menemukan sesuatu yang belum aku mengerti, aku sulit berhenti sebelum benar-benar tahu cara kerjanya.',
    kode: 'I',
  },
  {
    id: 'SK-I2',
    pernyataan:
      'Aku lebih menikmati pertanyaan yang butuh waktu dan usaha untuk dijawab daripada yang jawabannya bisa langsung dicari di Google.',
    kode: 'I',
  },
  // ARTISTIC
  {
    id: 'SK-A1',
    pernyataan:
      'Aku sering punya cara pandang atau pendapat yang berbeda dari orang-orang sekitarku — dan aku tidak selalu merasa perlu menyembunyikannya.',
    kode: 'A',
  },
  {
    id: 'SK-A2',
    pernyataan:
      'Kalau tidak ada ruang untuk mengekspresikan ide sendiri, suatu pekerjaan atau kegiatan terasa hambar buatku — bahkan kalau hasilnya "sukses" di mata orang lain.',
    kode: 'A',
  },
  // SOCIAL
  {
    id: 'SK-S1',
    pernyataan:
      'Aku merasa paling energik ketika bisa melihat seseorang berkembang atau berhasil karena bantuan yang aku berikan.',
    kode: 'S',
  },
  {
    id: 'SK-S2',
    pernyataan:
      'Dalam kerja kelompok, aku cenderung lebih memperhatikan bagaimana perasaan anggota tim daripada sekadar apakah tugasnya selesai.',
    kode: 'S',
  },
  // ENTERPRISING
  {
    id: 'SK-E1',
    pernyataan:
      'Aku lebih nyaman kalau aku yang pegang kendali dan bikin keputusan, daripada harus terus-terusan menunggu arahan dari orang lain.',
    kode: 'E',
  },
  {
    id: 'SK-E2',
    pernyataan:
      'Aku cukup percaya diri ketika harus meyakinkan orang lain tentang sesuatu — baik di presentasi, diskusi, maupun debat.',
    kode: 'E',
  },
  // CONVENTIONAL
  {
    id: 'SK-C1',
    pernyataan:
      'Aku lebih produktif dan nyaman di lingkungan yang aturan dan strukturnya jelas — ketidakpastian itu melelahkan buatku.',
    kode: 'C',
  },
  {
    id: 'SK-C2',
    pernyataan:
      'Aku menyukai tugas atau pekerjaan yang hasilnya bisa diukur dengan jelas: ada angka, ada checklist, ada target yang konkret.',
    kode: 'C',
  },
]

// Mapping distribusi skenario untuk scoring
export const D1_SKENARIO_MAP: Record<string, Record<string, string>> = {
  S1: { A: 'R', B: 'I', C: 'A' },
  S2: { A: 'S', B: 'E', C: 'C' },
  S3: { A: 'E', B: 'S', C: 'R' },
  S4: { A: 'I', B: 'A', C: 'C' },
  S5: { A: 'S', B: 'R', C: 'C' },
  S6: { A: 'E', B: 'I', C: 'A' },
}
