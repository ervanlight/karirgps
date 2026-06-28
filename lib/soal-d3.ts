import type { SoalSkala, SoalTradeoff } from '@/types'

// ============================================================
// DIMENSI 3 — NILAI KERJA (WORK VALUES)
// Bank Soal Lengkap: 6 Trade-off + 12 Skala = 18 soal
// ============================================================

export const D3_TRADEOFF: SoalTradeoff[] = [
  {
    id: 'S1',
    situasi: 'Tiga tawaran kerja setelah lulus — semuanya di bidangmu.',
    konteks:
      'Kamu baru saja lulus. Ada tiga lowongan yang relevan dengan latar belakangmu. Gaji ketiganya hampir sama. Yang membedakan hanya ini:',
    opsi: [
      {
        teks: 'Posisi di BUMN atau instansi pemerintah. Jenjang karir sudah jelas, posisimu tidak akan mudah diguncang kondisi ekonomi, dan masa depan bisa kamu rencanakan dengan tenang.',
        kode: 'ST',
      },
      {
        teks: 'Organisasi sosial atau lembaga yang kerjanya langsung menyentuh komunitas yang butuh bantuan. Gajinya tidak sebesar swasta, tapi kontribusimu terasa nyata setiap harinya.',
        kode: 'DA',
      },
      {
        teks: 'Startup awal yang memberimu kebebasan penuh membentuk peranmu sendiri. Tidak ada prosedur yang kaku — kamu bertanggung jawab langsung, dan keputusanmu benar-benar berpengaruh.',
        kode: 'OT',
      },
    ],
  },
  {
    id: 'S2',
    situasi: 'Gambaran hari kerja idealmu — lupakan dulu soal bidangnya.',
    konteks:
      'Dari sisi bagaimana rasanya bekerja sehari-hari, mana yang paling mendekati versi idealmu?',
    opsi: [
      {
        teks: 'Setiap hari ada tantangan baru yang harus didekati dengan cara yang belum pernah dicoba sebelumnya. Tidak ada hari yang persis sama, dan aku bebas bereksperimen.',
        kode: 'KR',
      },
      {
        teks: 'Beban kerja besar, tanggung jawab tinggi — tapi kompensasinya setara. Aku tidak keberatan kerja keras dan tekanan ekstra, asal reward-nya juga sepadan.',
        kode: 'KM',
      },
      {
        teks: 'Ketika hari kerja selesai, aku benar-benar bisa lepas. Ada waktu untuk keluarga, untuk hal-hal yang aku sukai di luar pekerjaan — tanpa rasa bersalah karena "seharusnya masih kerja."',
        kode: 'FL',
      },
    ],
  },
  {
    id: 'S3',
    situasi: 'Kamu membayangkan dirimu 10 tahun dari sekarang.',
    konteks:
      'Soal gaji dan jabatan dikesampingkan sejenak. Dari ketiga pernyataan ini, mana yang paling kamu harap bisa kamu katakan tentang karirmu nanti?',
    opsi: [
      {
        teks: '"Pekerjaanku membuat perbedaan yang nyata. Ada orang, komunitas, atau masalah besar yang kondisinya lebih baik karena aku ada di sini."',
        kode: 'DA',
      },
      {
        teks: '"Aku sudah menciptakan sesuatu yang benar-benar baru — bukan sekadar menjalankan sistem yang sudah ada. Ada karya atau inovasi yang lahir dari pikiranku sendiri."',
        kode: 'KR',
      },
      {
        teks: '"Aku tidak perlu khawatir soal keberlangsungan karirku. Posisiku stabil, penghasilanku bisa diprediksi, dan hidupku bisa aku rencanakan dengan tenang."',
        kode: 'ST',
      },
    ],
  },
  {
    id: 'S4',
    situasi: 'Dua versi sukses — keduanya nyata dan bisa dicapai.',
    konteks:
      'Kamu diminta membayangkan dua orang yang sama-sama "sukses" menurut standar masing-masing. Versi mana yang lebih kamu inginkan untuk dirimu sendiri?',
    opsi: [
      {
        teks: 'Orang yang punya karir atau usaha yang sepenuhnya dia kendalikan. Tidak ada atasan, tidak ada prosedur yang harus minta izin. Semua keputusan ada di tangannya — termasuk risikonya.',
        kode: 'OT',
      },
      {
        teks: 'Orang yang karirnya tidak menghabiskan hidupnya. Dia punya waktu berkualitas untuk dirinya, keluarganya, dan hal-hal yang benar-benar dia sayangi di luar pekerjaan.',
        kode: 'FL',
      },
      {
        teks: 'Orang yang dikenal bukan karena jabatannya, tapi karena kontribusi nyata yang dia buat untuk orang lain atau bidangnya. Dampaknya masih terasa bahkan setelah dia pergi.',
        kode: 'DA',
      },
    ],
  },
  {
    id: 'S5',
    situasi: 'Satu hal yang bisa dijamin dalam karirmu.',
    konteks:
      'Kalau kamu hanya bisa memilih satu jaminan dari karir yang akan kamu jalani, mana yang paling kamu prioritaskan?',
    opsi: [
      {
        teks: 'Penghasilan yang jauh di atas rata-rata — cukup untuk hidup nyaman, membantu keluarga, dan tidak perlu mengkhawatirkan uang dalam keputusan sehari-hari.',
        kode: 'KM',
      },
      {
        teks: 'Keamanan jangka panjang — posisimu tidak akan mudah terguncang oleh tren ekonomi, teknologi baru, atau perubahan pasar. Kamu bisa rencanakan hidup dengan kepala dingin.',
        kode: 'ST',
      },
      {
        teks: 'Kebebasan untuk terus berinovasi — pekerjaanmu tidak pernah terasa stagnan karena selalu ada ruang untuk mencoba pendekatan baru dan menciptakan sesuatu yang belum ada sebelumnya.',
        kode: 'KR',
      },
    ],
  },
  {
    id: 'S6',
    situasi: 'Pilih kondisi yang paling kamu butuhkan dari tempat kerja.',
    konteks:
      'Semuanya realistis dan bisa terwujud. Kalau kamu hanya bisa memprioritaskan satu dari tiga kondisi kerja ini, mana yang paling tidak bisa kamu kompromikan?',
    opsi: [
      {
        teks: 'Fleksibilitas waktu dan lokasi. Aku bisa kerja dari mana saja, atur ritme harianku sendiri, dan tidak terikat jam kehadiran yang kaku.',
        kode: 'FL',
      },
      {
        teks: 'Otonomi dalam pengambilan keputusan. Aku tidak perlu menunggu izin untuk mencoba pendekatan baru atau memimpin inisiatif yang aku yakini.',
        kode: 'OT',
      },
      {
        teks: 'Kompensasi yang terus tumbuh seiring kontribusiku. Gaji, bonus, dan benefit-ku mencerminkan nilai yang aku bawa — dan semakin besar seiring kemampuanku.',
        kode: 'KM',
      },
    ],
  },
]

export const D3_SKALA: SoalSkala[] = [
  // STABILITAS
  {
    id: 'SK-ST1',
    pernyataan:
      'Ketidakpastian dalam karir — tidak tahu apakah posisi atau penghasilanku aman 2–3 tahun ke depan — adalah sesuatu yang sulit aku abaikan ketika memilih pekerjaan.',
    kode: 'ST',
  },
  {
    id: 'SK-ST2',
    pernyataan:
      'Dibandingkan pekerjaan berisiko tinggi tapi berpotensi besar, aku lebih memilih pekerjaan yang penghasilan dan posisinya bisa aku prediksi dan rencanakan dengan tenang.',
    kode: 'ST',
  },
  // DAMPAK
  {
    id: 'SK-DA1',
    pernyataan:
      'Aku akan merasa ada yang kurang kalau bertahun-tahun kerja keras tapi tidak bisa melihat dampak nyata dari pekerjaanku pada orang lain atau masalah yang lebih besar.',
    kode: 'DA',
  },
  {
    id: 'SK-DA2',
    pernyataan:
      'Salah satu motivasi terbesar dalam karir bagiku adalah bisa bercerita bahwa pekerjaanku membuat perbedaan yang konkret — bukan hanya menghasilkan uang untukku sendiri.',
    kode: 'DA',
  },
  // OTONOMI
  {
    id: 'SK-OT1',
    pernyataan:
      'Aku lebih termotivasi ketika bisa memutuskan sendiri cara kerja terbaikku — bukan sekadar mengikuti prosedur yang sudah ditentukan dari atas.',
    kode: 'OT',
  },
  {
    id: 'SK-OT2',
    pernyataan:
      'Bekerja di bawah kontrol ketat atau birokrasi berlapis secara jangka panjang akan terasa sangat menguras bagiku — bahkan kalau gajinya kompetitif.',
    kode: 'OT',
  },
  // KREATIVITAS
  {
    id: 'SK-KR1',
    pernyataan:
      'Aku akan kehilangan motivasi dengan cepat di pekerjaan yang rutinitas dan tidak memberi ruang untuk pendekatan baru atau ide yang belum pernah dicoba.',
    kode: 'KR',
  },
  {
    id: 'SK-KR2',
    pernyataan:
      'Salah satu ukuran keberhasilan karirku adalah apakah aku sudah menciptakan sesuatu yang orisinal — bukan hanya menjalankan sistem yang sudah ada sebelumku.',
    kode: 'KR',
  },
  // KEMAKMURAN
  {
    id: 'SK-KM1',
    pernyataan:
      'Penghasilan yang tinggi adalah salah satu prioritas nyata dalam karirku — bukan soal gaya hidup mewah, tapi karena aku sadar betapa bebasnya hidup dengan keuangan yang kuat.',
    kode: 'KM',
  },
  {
    id: 'SK-KM2',
    pernyataan:
      'Aku cukup realistis: pekerjaan yang terasa "bermakna" tapi tidak membayar dengan layak adalah sesuatu yang sulit aku pertahankan dalam jangka panjang.',
    kode: 'KM',
  },
  // FLEKSIBILITAS
  {
    id: 'SK-FL1',
    pernyataan:
      'Pekerjaan yang mengharuskan kehadiran fisik setiap hari dari pagi sampai sore tanpa fleksibilitas apapun adalah sesuatu yang sulit aku bayangkan secara jangka panjang.',
    kode: 'FL',
  },
  {
    id: 'SK-FL2',
    pernyataan:
      'Waktu dan energiku di luar jam kerja sama pentingnya dengan prestasi di dalam kerja — aku tidak mau menukar seluruh hidupku, bahkan untuk karir yang terlihat gemilang.',
    kode: 'FL',
  },
]
