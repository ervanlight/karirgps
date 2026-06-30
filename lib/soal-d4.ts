// ============================================================
// DIMENSI 4 — KONTEKS PERSONAL
// 7 pertanyaan form (bukan psikometri)
// ============================================================

export const D4_PERTANYAAN = [
  {
    id: 'tahap',
    label: 'Kamu sekarang ada di tahap mana?',
    hint: 'Ini akan menentukan konteks dan urgensitas rekomendasimu.',
    opsi: [
      { kode: 'SMA10', label: 'SMA/SMK Kelas 10', deskripsi: 'Masih banyak waktu untuk eksplorasi' },
      { kode: 'SMA11', label: 'SMA/SMK Kelas 11', deskripsi: 'Mulai perlu arah yang lebih jelas' },
      { kode: 'SMA12', label: 'SMA/SMK Kelas 12', deskripsi: 'Keputusan sudah sangat dekat' },
      { kode: 'LULUS', label: 'Sudah lulus SMA', deskripsi: 'Belum kuliah, sedang mempertimbangkan langkah berikutnya' },
      { kode: 'MABA', label: 'Mahasiswa semester 1–2', deskripsi: 'Mempertimbangkan apakah jurusan ini memang tepat' },
    ],
  },
  {
    id: 'asal_sekolah',
    label: 'Sekolahmu jurusan SMA atau SMK?',
    hint: 'Latar sekolahmu memengaruhi jalur mana yang paling realistis untuk dibahas — termasuk apakah kompetensi yang sudah kamu pelajari bisa langsung dipakai kerja.',
    opsi: [
      { kode: 'SMA', label: 'SMA / MA', deskripsi: 'Jalur umum, biasanya menyiapkan ke kuliah' },
      { kode: 'SMK', label: 'SMK', deskripsi: 'Punya keahlian spesifik dari jurusan sekolah' },
    ],
  },
  {
    id: 'jurusan_smk',
    label: 'Jurusan SMK kamu apa?',
    hint: 'Hanya muncul kalau kamu pilih SMK. Ini membantu kami mencocokkan rekomendasi dengan kompetensi yang sudah kamu punya.',
    showIf: { id: 'asal_sekolah', kode: 'SMK' },
    opsi: [
      { kode: 'TKJ', label: 'Teknik Komputer & Jaringan', deskripsi: '' },
      { kode: 'RPL', label: 'Rekayasa Perangkat Lunak', deskripsi: '' },
      { kode: 'AKL', label: 'Akuntansi & Keuangan Lembaga', deskripsi: '' },
      { kode: 'MULTIMEDIA', label: 'Multimedia', deskripsi: '' },
      { kode: 'TATA_BOGA', label: 'Tata Boga', deskripsi: '' },
      { kode: 'TATA_BUSANA', label: 'Tata Busana', deskripsi: '' },
      { kode: 'PERHOTELAN', label: 'Perhotelan', deskripsi: '' },
      { kode: 'OTOMOTIF', label: 'Teknik Kendaraan Ringan / Otomotif', deskripsi: '' },
      { kode: 'ELEKTRONIKA', label: 'Teknik Elektronika', deskripsi: '' },
      { kode: 'FARMASI', label: 'Farmasi', deskripsi: '' },
      { kode: 'KEPERAWATAN', label: 'Keperawatan', deskripsi: '' },
      { kode: 'AGRIBISNIS', label: 'Agribisnis', deskripsi: '' },
      { kode: 'DESAIN_GRAFIS', label: 'Desain Komunikasi Visual', deskripsi: '' },
      { kode: 'ADM_PERKANTORAN', label: 'Administrasi Perkantoran', deskripsi: '' },
      { kode: 'PEMASARAN', label: 'Bisnis & Pemasaran', deskripsi: '' },
      { kode: 'LAINNYA', label: 'Lainnya', deskripsi: 'Jurusan SMK lain yang tidak ada di daftar' },
    ],
  },
  {
    id: 'domisili',
    label: 'Kamu tinggal di mana sekarang?',
    hint: 'Ini memengaruhi kampus mana yang realistis dijangkau dan pasar kerja yang relevan.',
    opsi: [
      { kode: 'JABODETABEK', label: 'Jabodetabek', deskripsi: 'Jakarta, Bogor, Depok, Tangerang, Bekasi' },
      { kode: 'JAWA_BESAR', label: 'Kota besar lain di Jawa', deskripsi: 'Surabaya, Bandung, Semarang, Yogyakarta, dll' },
      { kode: 'JAWA_MENENGAH', label: 'Kota menengah atau kabupaten di Jawa', deskripsi: '' },
      { kode: 'SUMATERA', label: 'Sumatera', deskripsi: 'Medan, Padang, Palembang, Pekanbaru, dll' },
      { kode: 'KALIMANTAN', label: 'Kalimantan', deskripsi: 'Balikpapan, Samarinda, Pontianak, dll' },
      { kode: 'SULAWESI', label: 'Sulawesi', deskripsi: 'Makassar, Manado, Palu, dll' },
      { kode: 'BALI_NT', label: 'Bali & Nusa Tenggara', deskripsi: '' },
      { kode: 'MALUKU_PAPUA', label: 'Maluku & Papua', deskripsi: '' },
    ],
  },
  {
    id: 'jalur',
    label: 'Setelah lulus SMA, rencanamu lebih ke arah mana?',
    hint: 'Bisa pilih lebih dari satu. Ini bukan patokan kaku — kalau masih belum tahu, itu juga jawaban yang valid.',
    multiple: true,
    opsi: [
      { kode: 'PTN', label: 'Masuk PTN', deskripsi: 'Lewat SNBT, SNBP, atau jalur mandiri' },
      { kode: 'PTS', label: 'Perguruan tinggi swasta', deskripsi: '' },
      { kode: 'KEDINASAN', label: 'Sekolah kedinasan', deskripsi: 'STAN, IPDN, Akpol, Bintara, dll' },
      { kode: 'LN', label: 'Kuliah di luar negeri', deskripsi: '' },
      { kode: 'KERJA', label: 'Langsung bekerja', deskripsi: 'Setelah lulus SMA' },
      { kode: 'BELUM_TAHU', label: 'Masih belum tahu', deskripsi: 'Dan itu yang bikin bingung' },
    ],
  },
  {
    id: 'kondisi_biaya',
    label: 'Soal biaya pendidikan, kondisimu paling dekat ke yang mana?',
    hint: 'Tidak ada jawaban yang lebih baik atau lebih buruk. Realita keuangan keluarga adalah informasi, bukan penilaian.',
    opsi: [
      { kode: 'BEBAS', label: 'Cukup fleksibel', deskripsi: 'Bisa pilih kampus berdasarkan kualitas, tidak terlalu khawatir biaya' },
      { kode: 'PERTIMBANGAN', label: 'Biaya perlu dipertimbangkan', deskripsi: 'PTS yang terjangkau atau PTN mana saja masih masuk akal' },
      { kode: 'PRIORITAS_HEMAT', label: 'Jalur dengan biaya minimal jadi prioritas', deskripsi: 'Beasiswa, PTN bersubsidi, atau kedinasan yang tidak bayar' },
      { kode: 'LANGSUNG_KERJA', label: 'Kemungkinan besar perlu bekerja dulu', deskripsi: 'Kuliah belum pasti bisa dalam waktu dekat' },
    ],
  },
  {
    id: 'tanggungan_keluarga',
    label: 'Apakah kamu menanggung harapan besar dari keluarga untuk "berhasil lebih dulu"?',
    hint: 'Di banyak keluarga Indonesia, anak pertama atau anak yang masuk perguruan tinggi menanggung beban yang tidak selalu diucapkan — tapi sangat nyata.',
    opsi: [
      { kode: 'PERTAMA', label: 'Ya — aku anak pertama atau satu-satunya yang akan kuliah', deskripsi: '' },
      { kode: 'HARAPAN', label: 'Ada harapan besar, meski bukan anak pertama', deskripsi: 'Keluarga menaruh banyak di pundakku' },
      { kode: 'TIDAK_BERAT', label: 'Tidak terlalu', deskripsi: 'Ada kakak atau anggota keluarga lain yang sudah mapan' },
      { kode: 'MANDIRI', label: 'Aku cukup bebas menentukan sendiri', deskripsi: 'Keluarga mendukung apapun yang aku pilih' },
    ],
  },
  {
    id: 'kemampuan_akademik',
    label: 'Kalau dibandingkan dengan teman-teman di sekolah, kemampuan akademikmu...',
    hint: 'Bukan untuk menilai — tapi untuk menyesuaikan rekomendasi jalur masuk yang realistis.',
    opsi: [
      { kode: 'ATAS', label: 'Di atas rata-rata', deskripsi: 'Biasanya masuk 20–25% terbaik di kelas, pernah berprestasi di olimpiade atau lomba' },
      { kode: 'MENENGAH', label: 'Rata-rata ke atas', deskripsi: 'Tidak selalu menonjol, tapi konsisten dan serius' },
      { kode: 'RATA', label: 'Sekitar rata-rata', deskripsi: 'Ada beberapa mata pelajaran yang kuat, beberapa yang tidak' },
      { kode: 'PERLU_USAHA', label: 'Perlu usaha lebih untuk bersaing di seleksi ketat', deskripsi: 'Lebih kuat di hal praktis atau non-akademis' },
    ],
  },
  {
    id: 'mobilitas',
    label: 'Soal lokasi kuliah atau bekerja nanti, kamu...',
    hint: 'Ini memengaruhi seberapa luas peta pilihan yang bisa kita buka untuk kamu.',
    opsi: [
      { kode: 'TERBUKA', label: 'Terbuka untuk pindah ke kota manapun', deskripsi: 'Termasuk luar Jawa atau luar negeri' },
      { kode: 'PREFERENSI', label: 'Lebih memilih tidak terlalu jauh dari keluarga', deskripsi: 'Tapi bisa berkompromi kalau memang perlu' },
      { kode: 'TETAP', label: 'Perlu atau ingin tetap di kota/wilayah yang sama', deskripsi: 'Dekat dengan keluarga' },
    ],
  },
]
