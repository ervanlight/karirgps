import type { SoalSkenario, SoalSkala } from '@/types'

// ============================================================
// DIMENSI 2 — MULTIPLE INTELLIGENCES
// Bank Soal Lengkap: 8 Skenario + 16 Skala = 24 soal
// ============================================================

export const D2_SKENARIO: SoalSkenario[] = [
  {
    id: 'S1',
    pertanyaan: 'Kamu baru saja mulai belajar hal yang sama sekali baru.',
    konteks:
      'Misalnya kamu baru mulai belajar ekonomi, coding, atau biologi molekuler. Cara yang paling alami buatmu adalah...',
    opsi: [
      {
        teks: 'Baca dulu sebanyak mungkin — artikel, buku, atau thread panjang. Aku baru merasa benar-benar paham kalau sudah bisa menjelaskannya kembali dengan kata-kataku sendiri.',
        kode: 'L',
      },
      {
        teks: 'Cari pola dan logikanya dari awal. Begitu aku ngerti strukturnya — kenapa A menyebabkan B — semuanya jadi lebih masuk akal dan mudah diingat.',
        kode: 'LM',
      },
      {
        teks: 'Cari diagram, peta konsep, atau video yang menunjukkan bagaimana bagian-bagiannya terhubung. Teks panjang tanpa visual sulit aku ikuti sampai tuntas.',
        kode: 'SP',
      },
    ],
  },
  {
    id: 'S2',
    pertanyaan: 'Setengah hari bebas, tidak ada agenda.',
    konteks:
      'Kamu keluar sendirian. Tidak ada yang harus diselesaikan. Dari tiga pilihan ini, mana yang paling terasa seperti "mengisi ulang" energimu?',
    opsi: [
      {
        teks: 'Dengerin playlist yang sudah lama aku susun, atau cari tempat yang punya suasana akustik yang nyaman — kafe yang musiknya pas, masjid setelah Magrib, atau taman yang ada suara airnya.',
        kode: 'MU',
      },
      {
        teks: 'Gerak. Jalan kaki panjang, main basket, renang, atau coba aktivitas fisik yang belum pernah aku lakukan. Diam terlalu lama justru bikin aku lebih lelah.',
        kode: 'BK',
      },
      {
        teks: 'Pergi ke tempat yang dekat alam — sungai, kebun, bukit, atau sekadar taman kota yang ada tanamannya. Aku suka mengamati sesuatu yang tumbuh, bergerak, atau hidup secara alami.',
        kode: 'N',
      },
    ],
  },
  {
    id: 'S3',
    pertanyaan: 'Malam sebelum ujian besar.',
    konteks:
      'Besok ujian penting. Malamnya kamu butuh menjernihkan pikiran sebelum tidur. Apa yang paling mungkin kamu lakukan?',
    opsi: [
      {
        teks: 'Ngobrol sama seseorang — teman, kakak, atau siapapun yang mau dengerin. Setelah cerita dan mendengar pendapat orang lain, pikiranku biasanya jadi lebih tenang dan jernih.',
        kode: 'IP',
      },
      {
        teks: 'Diam sendiri. Aku duduk dengan pikiranku sendiri, mungkin nulis sedikit di buku harian, sampai semuanya terasa lebih tertata dari dalam.',
        kode: 'IA',
      },
      {
        teks: 'Baca atau tulis sesuatu yang tidak berhubungan dengan pelajaran — cerpen pendek, blog yang menarik, atau puisi. Kata-kata entah bagaimana menenangkan pikiranku.',
        kode: 'L',
      },
    ],
  },
  {
    id: 'S4',
    pertanyaan: 'Guru memberi proyek bebas — format apapun, tema apapun.',
    konteks:
      'Tidak ada template, tidak ada batasan. Kamu bebas sepenuhnya. Kamu paling tertarik untuk membuat...',
    opsi: [
      {
        teks: 'Analisis. Data nyata, perbandingan yang terstruktur, atau argumen yang dibangun dari premis ke kesimpulan dengan logika yang bisa diuji.',
        kode: 'LM',
      },
      {
        teks: 'Sesuatu yang bisa dilihat — infografis, peta pikiran besar, model 3D dari karton, atau layout visual yang informatif sekaligus enak dipandang.',
        kode: 'SP',
      },
      {
        teks: 'Karya yang punya dimensi suara atau ritme — puisi yang punya irama kuat, video dengan soundtrack yang aku pilih sendiri, atau presentasi yang aku rancang seperti pertunjukan kecil.',
        kode: 'MU',
      },
    ],
  },
  {
    id: 'S5',
    pertanyaan: 'Proyek kelompok — pilih peranmu.',
    konteks:
      'Kelompokmu harus menyelesaikan proyek besar dengan berbagai peran yang dibutuhkan. Kamu paling enjoy kalau dapat peran sebagai...',
    opsi: [
      {
        teks: 'Eksekutor lapangan — yang bikin prototipe, demo langsung di depan kelas, atau presentasi fisik yang melibatkan gerakan. Aku lebih suka bergerak daripada duduk merencanakan terus.',
        kode: 'BK',
      },
      {
        teks: 'Peneliti konteks — yang turun ke lapangan, cari narasumber, atau analisis kondisi lingkungan sekitar secara sistematis dan detail.',
        kode: 'N',
      },
      {
        teks: 'Penghubung tim — yang baca dinamika kelompok, tahu siapa yang sedang tidak nyaman, dan pastikan semua orang bisa berkontribusi dengan baik.',
        kode: 'IP',
      },
    ],
  },
  {
    id: 'S6',
    pertanyaan: 'Menghadapi keputusan besar.',
    konteks:
      'Kamu harus buat keputusan yang benar-benar penting — soal jurusan, hubungan, atau pilihan hidup lainnya. Apa yang paling sering kamu andalkan untuk sampai pada keputusan?',
    opsi: [
      {
        teks: 'Aku duduk dengan keputusan itu sendiri. Kenali apa yang aku rasakan, timbang nilai-nilai yang penting buatku, dan percaya pada kesimpulan yang muncul dari dalam — bukan dari tekanan luar.',
        kode: 'IA',
      },
      {
        teks: 'Aku tulis semua yang aku pikirkan. Kadang aku butuh melihat pikiran sendiri dalam bentuk kata-kata di atas kertas sebelum bisa benar-benar memutuskan.',
        kode: 'L',
      },
      {
        teks: 'Aku buat perbandingan yang terstruktur. Ada kriteria, ada bobot, kadang ada spreadsheet sederhana. Keputusan yang baik harus bisa dipertanggungjawabkan secara logika.',
        kode: 'LM',
      },
    ],
  },
  {
    id: 'S7',
    pertanyaan: 'Cara terbaikmu menghafal untuk presentasi.',
    konteks: 'Kamu harus hafal materi panjang untuk besok. Cara yang paling efektif buatmu adalah...',
    opsi: [
      {
        teks: 'Visualisasikan dulu. Aku buat peta pikiran atau skema dengan warna berbeda, lalu "foto" tampilannya di kepala. Kalau aku bisa bayangkan halaman atau diagramnya, aku ingat.',
        kode: 'SP',
      },
      {
        teks: 'Baca keras-keras atau buat ritme kecil dari poin-poin utamanya. Informasi yang masuk lewat telinga — apalagi yang punya irama — jauh lebih mudah aku ingat.',
        kode: 'MU',
      },
      {
        teks: 'Hafal sambil bergerak. Aku ingat lebih baik kalau sambil jalan, gestikulasi, atau bahkan pura-pura presentasi di depan cermin. Duduk diam di meja justru bikin aku cepat lupa.',
        kode: 'BK',
      },
    ],
  },
  {
    id: 'S8',
    pertanyaan: 'Topik yang paling sering bikin kamu lupa waktu.',
    konteks:
      'Kalau kamu tiba-tiba jatuh ke rabbit hole konten atau buku, topik apa yang paling sering bikin kamu tidak sadar jam sudah larut?',
    opsi: [
      {
        teks: 'Alam dan kehidupan: bagaimana ekosistem bekerja, kenapa hewan berevolusi seperti itu, fenomena geologi, atau sekadar video time-lapse tumbuhan yang tumbuh.',
        kode: 'N',
      },
      {
        teks: 'Manusia dan hubungannya: psikologi sosial, kenapa orang membuat keputusan tertentu, dinamika komunitas, atau kisah hidup seseorang yang perjalanannya tidak biasa.',
        kode: 'IP',
      },
      {
        teks: 'Makna dan eksistensi: filsafat, pertanyaan tentang identitas, kenapa hidup terasa seperti ini buat banyak orang, atau bagaimana orang dari latar yang sangat berbeda memaknai hal yang sama.',
        kode: 'IA',
      },
    ],
  },
]

export const D2_SKALA: SoalSkala[] = [
  // LINGUISTIK
  {
    id: 'SK-L1',
    pernyataan:
      'Ketika ingin memproses sesuatu yang kompleks, aku cenderung menuliskannya — di buku harian, catatan di HP, atau bahkan sekadar mengartikulasikannya dalam kepala dalam bentuk kalimat.',
    kode: 'L',
  },
  {
    id: 'SK-L2',
    pernyataan:
      'Aku lebih mudah mengingat sesuatu yang pernah aku baca atau dengar dalam bentuk kalimat yang menarik daripada dalam bentuk angka, tabel, atau gambar.',
    kode: 'L',
  },
  // LOGIS-MATEMATIS
  {
    id: 'SK-LM1',
    pernyataan:
      'Aku cepat merasa tidak nyaman kalau argumen atau penjelasan seseorang tidak memiliki logika yang konsisten — bahkan dalam percakapan santai sekalipun.',
    kode: 'LM',
  },
  {
    id: 'SK-LM2',
    pernyataan:
      'Aku lebih suka mengurai masalah menjadi bagian-bagian yang lebih kecil, mencari polanya, dan bekerja secara bertahap dari premis ke kesimpulan.',
    kode: 'LM',
  },
  // SPASIAL
  {
    id: 'SK-SP1',
    pernyataan:
      'Aku sering berpikir dalam bentuk gambaran atau bayangan visual — sering kali "melihat" solusi atau ide di kepala sebelum bisa mengungkapkannya dengan kata-kata.',
    kode: 'SP',
  },
  {
    id: 'SK-SP2',
    pernyataan:
      'Aku mudah membaca peta, denah, atau diagram — dan sering memperhatikan tata letak, komposisi, atau proporsi visual dari sesuatu yang orang lain mungkin tidak sadar.',
    kode: 'SP',
  },
  // MUSIKAL
  {
    id: 'SK-MU1',
    pernyataan:
      'Aku sangat sensitif dengan suasana suara di sekitarku — musik yang tidak cocok atau kebisingan tertentu bisa benar-benar mempengaruhi konsentrasi dan suasana hatiku secara signifikan.',
    kode: 'MU',
  },
  {
    id: 'SK-MU2',
    pernyataan:
      'Aku lebih mudah menghafal sesuatu kalau ada ritme atau melodinya — dan sering tanpa sadar menciptakan irama kecil atau senandung saat sedang berpikir atau mengerjakan sesuatu.',
    kode: 'MU',
  },
  // KINESTETIK
  {
    id: 'SK-BK1',
    pernyataan:
      'Aku belajar jauh lebih cepat dengan langsung melakukan daripada sekadar menonton atau membaca — satu kali mencoba sendiri lebih efektif dari instruksi sepanjang apapun.',
    kode: 'BK',
  },
  {
    id: 'SK-BK2',
    pernyataan:
      'Duduk diam dalam waktu lama terasa melelahkan bagiku — aku cenderung lebih fokus dan produktif ketika ada pergerakan fisik, sesederhana apapun itu.',
    kode: 'BK',
  },
  // NATURALIS
  {
    id: 'SK-N1',
    pernyataan:
      'Aku mudah memperhatikan detail di lingkungan sekitar yang orang lain sering lewatkan — perubahan cuaca, perbedaan tekstur tanah, atau jenis tanaman tertentu yang tidak biasa.',
    kode: 'N',
  },
  {
    id: 'SK-N2',
    pernyataan:
      'Aku tertarik pada pola-pola yang ada di alam — bagaimana makhluk hidup beradaptasi, saling bergantung, atau berevolusi dalam satu ekosistem yang kompleks.',
    kode: 'N',
  },
  // INTERPERSONAL
  {
    id: 'SK-IP1',
    pernyataan:
      'Aku cukup cepat membaca suasana hati seseorang atau dinamika dalam kelompok — sering kali sebelum mereka mengatakannya sendiri.',
    kode: 'IP',
  },
  {
    id: 'SK-IP2',
    pernyataan:
      'Aku merasa lebih mudah memahami sesuatu ketika mendiskusikannya dengan orang lain daripada ketika mempelajarinya sendirian dalam diam.',
    kode: 'IP',
  },
  // INTRAPERSONAL
  {
    id: 'SK-IA1',
    pernyataan:
      'Aku punya pemahaman yang cukup jelas tentang apa yang aku nilai, apa yang membuatku termotivasi, dan apa yang tidak — dan aku tidak mudah terpengaruh opini orang lain kalau sudah tahu apa yang aku inginkan.',
    kode: 'IA',
  },
  {
    id: 'SK-IA2',
    pernyataan:
      'Aku butuh waktu sendiri untuk benar-benar memproses pengalaman baru — tanpa momen refleksi itu, bahkan peristiwa yang besar pun terasa belum "selesai" dan masih menggantung.',
    kode: 'IA',
  },
]
