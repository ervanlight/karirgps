# Assessment and Recommendation Engine V1

**Product:** KarirGPS  
**Document Type:** AI Brain Architecture Blueprint  
**Version:** 1.0  
**Status:** Design Baseline  
**Target Path:** `architecture/assessment-engine/Assessment_Recommendation_Engine_V1.md`

---

## 0. Executive Summary

Assessment and Recommendation Engine V1 adalah otak pengambilan keputusan KarirGPS. Engine ini mengubah data asesmen, preferensi, kemampuan, batasan, tujuan, dan konteks pengguna menjadi rekomendasi pendidikan serta karier yang terstruktur, dapat dijelaskan, dan dapat ditindaklanjuti.

Engine tidak berfungsi sebagai mesin pencocokan sederhana. Engine juga tidak menganggap satu hasil tes sebagai kebenaran tunggal. Engine membangun kesimpulan dari banyak sumber bukti, memeriksa konsistensi antarjawaban, mengelola konflik data, menilai tingkat ketidakpastian, lalu menghasilkan beberapa pilihan yang masuk akal.

Output utama engine meliputi:

- ranking jurusan;
- ranking karier;
- tingkat kecocokan dan confidence;
- alasan cocok dan kurang cocok;
- risiko dan tradeoff;
- alternatif yang berdekatan;
- kategori safe match, near match, dan stretch match;
- learning roadmap;
- career roadmap;
- langkah validasi berikutnya;
- pertanyaan lanjutan saat data belum cukup.

Prinsip utama engine:

1. **Multi-evidence**  
   Keputusan tidak bergantung pada satu tes atau satu indikator.

2. **Human-centered**  
   Engine membantu pengguna berpikir. Engine tidak mengambil keputusan final untuk pengguna.

3. **Explainable**  
   Setiap rekomendasi harus memiliki alasan, bukti, risiko, dan langkah tindak lanjut.

4. **Context-aware**  
   Kondisi ekonomi, lokasi, akses pendidikan, target gaji, dan preferensi hidup ikut memengaruhi rekomendasi.

5. **Uncertainty-aware**  
   Engine membedakan fakta, indikasi, asumsi, dan area yang belum diketahui.

6. **Future-proof**  
   Engine dapat menerima sumber data baru tanpa mengubah logika inti secara total.

7. **Decision intelligence**  
   Engine tidak hanya mencari pilihan terbaik secara teoritis, tetapi membantu pengguna memahami konsekuensi setiap pilihan.

---

## 1. Scope dan Batasan Engine

### 1.1 Scope

Engine V1 mencakup proses berikut:

1. menerima dan mengelompokkan input pengguna;
2. memeriksa kualitas dan kelengkapan data;
3. menormalisasi berbagai skala asesmen;
4. membentuk profil keputusan pengguna;
5. mengambil kandidat jurusan dan karier dari Knowledge Object V2;
6. menghitung kecocokan multidimensi;
7. memeriksa konflik, hambatan, dan syarat minimum;
8. menyusun ranking;
9. menghasilkan penjelasan;
10. membuat roadmap belajar dan karier;
11. menampilkan ketidakpastian dan kebutuhan validasi;
12. menyimpan rationale keputusan untuk evaluasi lanjutan.

### 1.2 Batasan

Engine V1 tidak melakukan hal berikut:

- mendiagnosis kondisi psikologis;
- menyatakan kepribadian pengguna secara mutlak;
- menjamin keberhasilan pendidikan atau karier;
- menggantikan konselor, guru BK, psikolog, orang tua, atau penasihat akademik;
- memutuskan jurusan atau karier atas nama pengguna;
- menganggap skor asesmen sebagai identitas permanen;
- memberi rekomendasi diskriminatif berdasarkan gender, suku, agama, kondisi keluarga, atau status sosial;
- menghilangkan pilihan hanya karena pengguna berasal dari kondisi ekonomi terbatas;
- menyamakan popularitas profesi dengan kualitas pilihan.

---

## 2. Posisi Engine dalam Arsitektur KarirGPS

Assessment and Recommendation Engine berada di antara lapisan input pengguna dan Knowledge Object V2.

### 2.1 Sumber Data Utama

1. **User Assessment Data**  
   Hasil tes, questionnaire, self-report, nilai akademik, preferensi, dan target.

2. **Knowledge Object V2**  
   Structured Profile, Fit Profile, Career Graph, Skills Graph, AI Impact, Decision Factors, Recommendation Logic, Relationship, Retrieval Keywords, dan objek relevan lain.

3. **Decision Context**  
   Tahap pendidikan, usia, negara, wilayah, kondisi ekonomi, waktu, dan tujuan keputusan.

4. **Interaction Evidence**  
   Respons pengguna terhadap rekomendasi, pilihan yang disimpan, perbandingan, penolakan, dan perubahan preferensi.

### 2.2 Lapisan Engine

Engine dibagi menjadi sembilan lapisan fungsional:

1. Input Engine
2. Data Quality and Normalization Engine
3. Candidate Retrieval Engine
4. Scoring and Constraint Engine
5. Weighting and Calibration Engine
6. Reasoning Engine
7. Recommendation and Explanation Engine
8. Roadmap and Decision Support Engine
9. Uncertainty, Feedback, and Learning Engine

### 2.3 Alur Keputusan Utama

Urutan proses konseptual:

1. Kumpulkan bukti pengguna.
2. Nilai kualitas bukti.
3. Normalisasi setiap sinyal.
4. Bentuk profil inti, profil preferensi, dan profil batasan.
5. Ambil kandidat relevan dari Knowledge Object V2.
6. Hitung kecocokan pada beberapa dimensi.
7. Terapkan syarat minimum dan constraint.
8. Periksa konflik antarindikator.
9. Sesuaikan bobot berdasarkan konteks keputusan.
10. Kelompokkan kandidat menjadi safe, near, dan stretch.
11. Susun ranking dan confidence.
12. Hasilkan alasan, risiko, tradeoff, dan roadmap.
13. Tawarkan langkah validasi berikutnya.

---

# 3. Input Engine

## 3.1 Tujuan

Input Engine mengubah data mentah pengguna menjadi kumpulan evidence yang dapat dipakai oleh engine lain. Setiap input harus memiliki sumber, waktu, tingkat kepercayaan, dan konteks.

Input Engine tidak hanya mencatat isi jawaban. Engine juga mencatat bagaimana data diperoleh, seberapa baru data tersebut, dan apakah data itu konsisten dengan data lain.

## 3.2 Kelompok Input

### A. Identity and Decision Context

Data ini menentukan konteks penggunaan rekomendasi.

- usia;
- jenjang pendidikan;
- kelas atau semester;
- status siswa, mahasiswa, pencari kerja, atau pekerja;
- negara dan wilayah;
- keputusan yang sedang dihadapi;
- batas waktu keputusan;
- pilihan yang sudah dipertimbangkan;
- pihak yang ikut memengaruhi keputusan;
- tingkat urgensi keputusan.

### B. Interest Profile

Menggambarkan aktivitas, topik, masalah, dan lingkungan yang disukai.

- Holland Code;
- bidang pelajaran yang disukai;
- aktivitas yang dinikmati;
- topik yang sering dicari;
- jenis masalah yang ingin diselesaikan;
- minat terhadap manusia, data, ide, benda, proses, atau lingkungan;
- minat jangka pendek dan jangka panjang;
- intensitas minat;
- konsistensi minat dari waktu ke waktu.

### C. Cognitive and Learning Profile

Menggambarkan cara pengguna memahami, memproses, dan mempelajari sesuatu.

- Multiple Intelligence;
- preferensi belajar;
- kecepatan belajar;
- kemampuan analitis;
- kemampuan verbal;
- kemampuan numerik;
- kemampuan spasial;
- kemampuan memori;
- kemampuan problem solving;
- kemampuan memahami konsep abstrak;
- kemampuan belajar mandiri;
- kebutuhan struktur dan arahan.

### D. Academic Evidence

Menggambarkan kesiapan akademik saat ini.

- nilai mata pelajaran;
- tren nilai;
- nilai ujian;
- peringkat atau percentile;
- mata pelajaran kuat;
- mata pelajaran lemah;
- konsistensi performa;
- tingkat kesulitan kurikulum;
- riwayat remedial;
- prestasi akademik;
- konteks sekolah dan kualitas akses belajar.

### E. Skill Profile

Menggambarkan kemampuan yang telah dimiliki atau sedang berkembang.

- hard skills;
- digital skills;
- communication skills;
- collaboration skills;
- leadership skills;
- research skills;
- creative skills;
- practical skills;
- technical skills;
- language skills;
- evidence level dari setiap skill;
- sumber evidence, seperti proyek, sertifikat, nilai, atau self-report.

### F. Personality and Behavioral Tendencies

Data ini digunakan sebagai kecenderungan, bukan label tetap.

- Big Five pada tahap berikutnya;
- toleransi risiko;
- ketelitian;
- kebutuhan interaksi sosial;
- kebutuhan variasi;
- respons terhadap tekanan;
- pola pengambilan keputusan;
- persistence;
- self-discipline;
- adaptability;
- emotional regulation;
- preferensi kerja mandiri atau kolaboratif.

### G. Work Values

Menggambarkan hal yang dianggap penting dalam pekerjaan.

- stabilitas;
- penghasilan;
- dampak sosial;
- kreativitas;
- status;
- otonomi;
- fleksibilitas;
- keamanan kerja;
- keseimbangan hidup;
- peluang belajar;
- mobilitas karier;
- kepemimpinan;
- lingkungan etis;
- makna kerja.

### H. Work Environment Preferences

- kerja indoor atau outdoor;
- kerja lapangan atau kantor;
- kerja individual atau tim;
- struktur ketat atau fleksibel;
- rutinitas atau variasi;
- interaksi tinggi atau rendah;
- remote, hybrid, atau onsite;
- perusahaan besar, startup, pemerintahan, NGO, atau mandiri;
- tempo kerja;
- tingkat tekanan;
- toleransi terhadap perjalanan;
- preferensi jadwal.

### I. Career Aspiration

- cita-cita;
- profesi yang menarik;
- industri yang diminati;
- figur panutan;
- alasan memilih cita-cita;
- target peran;
- target level tanggung jawab;
- target penghasilan;
- target gaya hidup;
- target lokasi;
- target waktu pencapaian;
- alternatif yang sudah dipertimbangkan.

### J. Economic and Access Constraints

- kemampuan biaya pendidikan;
- kebutuhan beasiswa;
- kewajiban membantu keluarga;
- kebutuhan bekerja sambil belajar;
- akses transportasi;
- akses perangkat dan internet;
- waktu yang tersedia;
- lokasi pendidikan yang memungkinkan;
- durasi pendidikan yang mampu ditempuh;
- toleransi terhadap biaya tambahan;
- akses pada mentor, kursus, laboratorium, atau komunitas.

### K. Geographic Preferences

- lokasi tinggal;
- lokasi pendidikan yang diinginkan;
- kesediaan pindah;
- jarak maksimum;
- preferensi kota atau daerah;
- kebutuhan dekat keluarga;
- bahasa lokal;
- hambatan visa atau legal;
- akses ke industri terkait.

### L. Motivation and Readiness

- tingkat motivasi;
- alasan mengejar pilihan tertentu;
- kesiapan berkomitmen;
- ketahanan menghadapi kesulitan;
- kesediaan belajar materi yang belum disukai;
- kesiapan memperbaiki skill gap;
- dukungan sosial;
- self-efficacy;
- kemampuan menjalankan rencana;
- rekam jejak menyelesaikan target.

### M. Constraints and Non-negotiables

Hal yang tidak dapat atau tidak ingin dikompromikan.

- batas biaya;
- batas lokasi;
- batas waktu;
- kondisi kesehatan yang relevan;
- kewajiban keluarga;
- persyaratan agama atau budaya;
- kebutuhan aksesibilitas;
- larangan jenis pekerjaan tertentu;
- target minimum penghasilan;
- preferensi yang sangat kuat.

### N. Negative Preferences

Data tentang hal yang tidak disukai sering lebih informatif daripada minat umum.

- aktivitas yang dihindari;
- mata pelajaran yang sangat tidak disukai;
- lingkungan kerja yang tidak diinginkan;
- jenis tekanan yang sulit ditoleransi;
- interaksi yang ingin dihindari;
- nilai kerja yang tidak dapat diterima;
- tugas yang cepat menurunkan motivasi.

### O. Evidence from Experience

- proyek sekolah;
- organisasi;
- volunteer;
- lomba;
- magang;
- pekerjaan paruh waktu;
- usaha kecil;
- kontribusi komunitas;
- pengalaman mengajar;
- pengalaman memimpin;
- portofolio;
- kegagalan dan pembelajaran.

### P. User Feedback on Recommendations

- kandidat yang disukai;
- kandidat yang ditolak;
- alasan penolakan;
- perubahan prioritas;
- pilihan yang dibandingkan;
- rekomendasi yang dianggap tidak relevan;
- hasil eksplorasi setelah rekomendasi;
- outcome aktual.

## 3.3 Metadata untuk Setiap Input

Setiap input perlu memiliki metadata konseptual berikut:

- **source:** asesmen, self-report, rapor, CV, observasi, atau behavior;
- **timestamp:** kapan data dikumpulkan;
- **recency:** masih relevan atau sudah lama;
- **confidence:** seberapa kuat bukti tersebut;
- **evidence type:** objektif, teramati, atau persepsi diri;
- **context:** situasi saat data muncul;
- **consistency:** konsisten atau bertentangan dengan sinyal lain;
- **sensitivity:** apakah data memerlukan perlindungan khusus;
- **decision relevance:** seberapa relevan terhadap keputusan saat ini.

## 3.4 Input Priority

Input dibagi menjadi tiga kelas.

### Core Input

Diperlukan agar engine dapat menghasilkan rekomendasi awal yang layak.

- tahap pendidikan;
- tujuan keputusan;
- minat;
- kemampuan atau evidence akademik;
- work values;
- preferensi lingkungan;
- constraints utama;
- kondisi ekonomi dasar;
- lokasi;
- motivasi dan kesiapan.

### Enrichment Input

Meningkatkan ketepatan, tetapi tidak wajib pada penggunaan pertama.

- Holland Code;
- Multiple Intelligence;
- pengalaman proyek;
- detail skill;
- target gaji;
- gaya belajar;
- toleransi risiko;
- dukungan keluarga;
- portofolio.

### Advanced Input

Dipakai untuk personalisasi lanjutan.

- Big Five;
- behavioral tracking;
- CV;
- LinkedIn;
- riwayat kerja;
- feedback dari mentor;
- outcome historis;
- preferensi yang berubah dari waktu ke waktu.

---

# 4. Data Quality and Normalization Engine

## 4.1 Tujuan Normalisasi

Data pengguna berasal dari banyak skala dan sumber. Ada skor tes, pilihan kategori, jawaban terbuka, nilai sekolah, dan batasan nyata. Normalization Engine mengubah semua data tersebut menjadi representasi yang dapat dibandingkan tanpa menghilangkan makna aslinya.

Normalisasi tidak berarti menyamakan semua data. Engine tetap mempertahankan asal, kualitas, dan konteks setiap sinyal.

## 4.2 Langkah Normalisasi

### A. Scale Alignment

Semua skor dipetakan ke tingkat interpretasi bersama, misalnya:

- sangat rendah;
- rendah;
- sedang;
- tinggi;
- sangat tinggi.

Skor asli tetap disimpan untuk audit. Tingkat interpretasi digunakan untuk reasoning lintas instrumen.

### B. Direction Alignment

Semua indikator harus memiliki arah makna yang jelas.

Contoh:

- skor tinggi pada minat sosial berarti ketertarikan tinggi pada aktivitas sosial;
- skor tinggi pada aversi terhadap konflik berarti toleransi konflik rendah;
- skor tinggi pada kebutuhan stabilitas berarti preferensi tinggi terhadap kepastian.

Engine harus mencegah kesalahan saat satu skala menggunakan arti positif dan skala lain menggunakan arti negatif.

### C. Percentile and Context Adjustment

Nilai akademik tidak dinilai hanya dari angka absolut. Engine memperhatikan:

- standar sekolah;
- tingkat kesulitan mata pelajaran;
- tren nilai;
- kesempatan belajar;
- konsistensi performa;
- bukti lain yang mendukung.

Nilai 80 di dua sekolah berbeda belum tentu mewakili tingkat kemampuan yang sama.

### D. Evidence Strength Normalization

Setiap sinyal diberi kelas kekuatan bukti.

1. **Strong Evidence**  
   Nilai konsisten, portofolio terverifikasi, proyek nyata, atau perilaku berulang.

2. **Moderate Evidence**  
   Satu hasil tes yang valid, observasi terbatas, atau pengalaman singkat.

3. **Weak Evidence**  
   Self-report tunggal, jawaban tidak konsisten, atau klaim tanpa contoh.

### E. Recency Adjustment

Data lama tidak otomatis dibuang. Bobotnya dikurangi jika:

- minat pengguna sudah berubah;
- fase pendidikan berbeda;
- skill sudah berkembang;
- konteks hidup sudah berubah.

### F. Missing Value Handling

Data kosong tidak boleh diperlakukan sebagai skor rendah.

Engine membedakan:

- belum ditanyakan;
- pengguna tidak tahu;
- pengguna memilih tidak menjawab;
- data tidak relevan;
- data gagal diproses.

### G. Open Text Structuring

Jawaban terbuka diubah menjadi evidence terstruktur, seperti:

- minat;
- nilai kerja;
- motivasi;
- hambatan;
- aspirasi;
- penolakan;
- pengalaman;
- tingkat kepastian.

Interpretasi jawaban terbuka harus tetap menyimpan kutipan atau ringkasan sumber agar penjelasan dapat dilacak.

### H. Contradiction Tagging

Engine menandai konflik, bukan langsung memilih salah satu data.

Contoh:

- mengaku tidak suka interaksi, tetapi aktif memimpin organisasi;
- ingin pendapatan sangat tinggi, tetapi hanya bersedia bekerja dengan tekanan rendah dan jam sangat pendek;
- minat tinggi pada arsitektur, tetapi tidak mau mengerjakan tugas visual atau teknis;
- menyatakan menyukai matematika, tetapi selalu menghindari aktivitas numerik.

### I. Constraint Normalization

Constraint dibedakan berdasarkan tingkat kekakuan.

- **Hard Constraint:** tidak dapat dilanggar saat ini;
- **Strong Preference:** sangat diutamakan, tetapi masih dapat dinegosiasikan;
- **Soft Preference:** hanya menjadi pembeda saat kandidat relatif setara;
- **Temporary Constraint:** berlaku pada periode tertentu;
- **Unverified Constraint:** perlu klarifikasi lebih lanjut.

## 4.3 Pembentukan Decision Profile

Hasil normalisasi membentuk lima profil internal.

### 1. Capability Profile

Apa yang saat ini dapat dilakukan pengguna.

### 2. Potential Profile

Apa yang mungkin dapat dikembangkan berdasarkan motivasi, pola belajar, dan kemampuan dasar.

### 3. Preference Profile

Jenis aktivitas, lingkungan, dan hasil yang diinginkan.

### 4. Constraint Profile

Batas nyata yang memengaruhi pilihan.

### 5. Aspiration Profile

Arah masa depan yang ingin dicapai pengguna.

Kelima profil ini tidak boleh digabung menjadi satu skor tunggal terlalu awal. Engine perlu melihat perbedaan antara kemampuan saat ini, potensi, preferensi, batasan, dan aspirasi.

---

# 5. Candidate Retrieval Engine

## 5.1 Tujuan

Candidate Retrieval Engine memilih kandidat awal dari Knowledge Object V2 sebelum dilakukan scoring mendalam. Tujuannya mengurangi ruang pencarian tanpa membuang pilihan penting.

## 5.2 Sumber Kandidat dari Knowledge Object V2

Kandidat dapat diambil melalui:

- Structured Profile;
- Fit Profile;
- Career Graph;
- Skills Graph;
- Relationship;
- Retrieval Keywords;
- Recommendation Logic;
- Decision Factors;
- AI Impact;
- jurusan terkait;
- profesi terkait;
- jalur masuk alternatif;
- skill adjacency;
- career transition paths.

## 5.3 Strategi Retrieval

Engine menggunakan beberapa jalur retrieval secara paralel.

### A. Direct Fit Retrieval

Mengambil kandidat yang langsung sesuai dengan minat, skill, dan preferensi utama.

### B. Adjacency Retrieval

Mengambil pilihan yang berdekatan secara skill, lingkungan, atau fungsi kerja.

Contoh:

- pengguna tertarik psikologi, tetapi tidak ingin praktik klinis;
- kandidat berdekatan dapat mencakup HR, UX research, consumer insight, atau pendidikan.

### C. Aspiration Retrieval

Mengambil kandidat yang sesuai dengan cita-cita, meskipun kesiapan saat ini belum tinggi.

### D. Constraint-aware Retrieval

Mengambil kandidat yang tetap realistis dalam batas biaya, lokasi, durasi, dan akses.

### E. Opportunity Retrieval

Mengambil pilihan yang belum dikenal pengguna tetapi memiliki kecocokan tinggi.

### F. Alternative Path Retrieval

Mengambil jalur nonlinier, seperti:

- jurusan berbeda menuju karier yang sama;
- diploma atau sertifikasi sebelum sarjana;
- pendidikan lokal dengan spesialisasi lanjutan;
- entry role yang dapat berkembang menuju target utama.

## 5.4 Candidate Pool

Sebelum ranking final, engine membangun empat pool:

1. **Primary Candidate Pool**  
   Kandidat dengan sinyal fit awal kuat.

2. **Adjacent Candidate Pool**  
   Kandidat yang dekat tetapi berbeda pada satu atau dua dimensi.

3. **Aspirational Candidate Pool**  
   Kandidat yang menarik tetapi membutuhkan pengembangan lebih besar.

4. **Constraint-Compatible Pool**  
   Kandidat yang paling mungkin dilakukan dalam kondisi pengguna saat ini.

---

# 6. Scoring Engine

## 6.1 Prinsip Scoring

Scoring tidak bertujuan menemukan satu profesi sempurna. Scoring bertujuan membandingkan kandidat berdasarkan banyak dimensi yang relevan.

Engine mempertahankan skor per dimensi. Engine tidak hanya menampilkan skor total. Dua kandidat dengan skor total sama dapat memiliki profil risiko dan tradeoff yang berbeda.

## 6.2 Dimensi Scoring Utama

### A. Interest Match

Menilai apakah aktivitas inti jurusan atau karier sesuai dengan minat pengguna.

Pertanyaan utama:

- Apakah pengguna menyukai jenis masalah yang dihadapi?
- Apakah pengguna tertarik pada objek kerja utama?
- Apakah minat bersifat stabil atau hanya rasa penasaran singkat?
- Apakah minat didukung oleh aktivitas nyata?

### B. Trait Match

Menilai kesesuaian kecenderungan perilaku dengan tuntutan lingkungan.

Trait Match tidak digunakan untuk melarang pilihan. Trait Match digunakan untuk mengidentifikasi kebutuhan adaptasi.

Contoh:

- kebutuhan interaksi tinggi;
- ketelitian;
- toleransi tekanan;
- keterbukaan terhadap pengalaman baru;
- konsistensi;
- persistence;
- kebutuhan struktur.

### C. Skill Match

Menilai hubungan antara skill pengguna saat ini dan skill inti kandidat.

Skill Match membedakan:

- skill sudah dimiliki;
- skill dasar tersedia;
- skill dapat dikembangkan;
- skill gap besar;
- skill gap kritis.

### D. Academic Readiness Match

Menilai kesiapan akademik untuk memasuki dan menyelesaikan jalur pendidikan.

Faktor:

- mata pelajaran prasyarat;
- tren nilai;
- kemampuan dasar;
- konsistensi;
- learning gap;
- kualitas dukungan belajar;
- tingkat kompetisi jalur masuk.

### E. Learning Match

Menilai apakah cara belajar dan ketahanan belajar pengguna sesuai dengan pola pendidikan kandidat.

Contoh:

- teori intensif;
- praktikum tinggi;
- hafalan;
- penalaran matematis;
- penulisan;
- kerja proyek;
- pembelajaran mandiri;
- pembelajaran berbasis studio;
- evaluasi berulang.

### F. Work Values Match

Menilai apakah hasil dan nilai yang ditawarkan kandidat sesuai dengan prioritas pengguna.

Contoh:

- stabilitas;
- penghasilan;
- dampak sosial;
- kreativitas;
- fleksibilitas;
- status;
- otonomi;
- work-life balance.

### G. Environment Match

Menilai kecocokan lingkungan kerja atau pendidikan.

Contoh:

- interaksi sosial;
- kerja tim;
- struktur organisasi;
- lokasi kerja;
- tempo;
- paparan risiko;
- kerja lapangan;
- perjalanan;
- jam kerja;
- tekanan target.

### H. Motivation Match

Menilai kekuatan alasan pengguna memilih kandidat.

Motivasi intrinsik lebih stabil dibanding motivasi yang hanya berasal dari tekanan eksternal. Namun motivasi eksternal tetap dapat relevan jika pengguna menyadari konsekuensinya.

### I. Aspiration Match

Menilai kedekatan kandidat dengan tujuan hidup dan identitas masa depan yang diinginkan.

### J. Economic Feasibility Match

Menilai keterjangkauan jalur.

Faktor:

- biaya pendidikan;
- durasi;
- peluang beasiswa;
- biaya hidup;
- kebutuhan alat;
- waktu sebelum memperoleh penghasilan;
- kemungkinan bekerja sambil belajar;
- risiko utang.

Economic Feasibility tidak boleh menjadi satu-satunya alasan menutup pilihan. Engine harus mencari jalur alternatif.

### K. Geographic Feasibility Match

Menilai kesesuaian kandidat dengan preferensi dan batas lokasi.

### L. Career Outcome Match

Menilai apakah jalur pendidikan memiliki hubungan yang cukup jelas dengan outcome karier yang diinginkan.

Faktor:

- hubungan jurusan dan karier;
- variasi entry role;
- peluang transisi;
- kebutuhan sertifikasi;
- jalur promosi;
- fleksibilitas lintas industri.

### M. Labor Market Match

Menilai relevansi dengan kebutuhan pasar kerja, tetapi tidak mengutamakan tren sesaat.

Faktor:

- breadth of opportunity;
- entry-level accessibility;
- regional availability;
- skill portability;
- career mobility;
- persaingan;
- kebutuhan pengalaman;
- kualitas jalur masuk.

### N. AI Future Match

Menilai hubungan kandidat dengan perubahan teknologi dan AI.

Komponen:

- tingkat automasi tugas;
- tingkat augmentasi oleh AI;
- kebutuhan human judgment;
- kebutuhan interpersonal;
- kebutuhan kreativitas;
- kemampuan adaptasi skill;
- peluang munculnya role baru;
- risiko perubahan struktur pekerjaan.

AI Future Match tidak boleh disederhanakan menjadi profesi aman atau tidak aman. Engine harus memisahkan tugas yang berisiko, tugas yang meningkat nilainya, dan skill yang perlu diperkuat.

### O. Transferability Match

Menilai apakah skill dari jalur tersebut dapat digunakan pada beberapa karier.

Transferability penting bagi pengguna yang belum yakin atau ingin fleksibilitas.

### P. Accessibility Match

Menilai kemungkinan pengguna benar-benar dapat memasuki jalur tersebut.

Faktor:

- syarat masuk;
- kebutuhan lisensi;
- ketersediaan institusi;
- akses kursus;
- hambatan bahasa;
- hambatan fisik;
- kebutuhan jaringan;
- peluang entry-level.

### Q. Lifestyle Match

Menilai kesesuaian dengan gaya hidup yang diinginkan.

### R. Risk Match

Menilai apakah tingkat risiko kandidat sesuai dengan toleransi risiko pengguna.

Risiko dapat meliputi:

- biaya tinggi;
- masa studi panjang;
- pasar kerja sempit;
- ketidakpastian penghasilan;
- kebutuhan relokasi;
- kompetisi tinggi;
- paparan tekanan;
- kebutuhan sertifikasi;
- perubahan teknologi.

### S. Development Potential

Menilai peluang pengguna untuk menutup gap.

Kandidat tidak boleh dinilai hanya dari kondisi hari ini. Engine perlu melihat:

- motivasi;
- growth evidence;
- kualitas kebiasaan;
- dukungan;
- waktu tersedia;
- ukuran skill gap;
- keberhasilan belajar sebelumnya.

### T. Identity and Meaning Match

Menilai apakah kandidat terasa bermakna bagi pengguna tanpa menganggap identitas saat ini sebagai sesuatu yang tetap.

## 6.3 Penalty dan Constraint Logic

Scoring positif perlu dilengkapi dengan penalty.

### A. Hard Requirement Failure

Contoh:

- profesi membutuhkan lisensi yang tidak dapat diakses;
- jurusan membutuhkan prasyarat yang belum terpenuhi;
- kondisi pengguna tidak memungkinkan lokasi wajib;
- biaya melampaui batas tanpa jalur alternatif.

Kandidat tidak selalu dihapus. Kandidat dapat dipindah menjadi aspirational atau deferred option.

### B. Critical Mismatch

Kandidat memiliki konflik besar pada aktivitas inti.

Contoh:

- pengguna sangat menghindari interaksi intensif, sedangkan pekerjaan hampir seluruhnya berbasis negosiasi tatap muka;
- pengguna tidak bersedia belajar matematika dasar, sedangkan jalur memiliki tuntutan matematis yang terus-menerus.

### C. Fragile Fit

Kandidat tampak cocok karena satu sinyal kuat, tetapi tidak didukung bukti lain.

### D. External-pressure Risk

Pilihan didorong terutama oleh keluarga, status, atau tren, sementara minat dan kesiapan rendah.

### E. Unrealistic Expectation Risk

Target gaji, kecepatan karier, atau gaya hidup tidak sesuai dengan jalur yang dipilih.

### F. Overqualification or Underchallenge Risk

Kandidat terlalu sempit atau tidak memberi ruang berkembang bagi pengguna tertentu.

## 6.4 Score Output

Setiap kandidat menghasilkan:

- overall fit band;
- dimension profile;
- strongest fit dimensions;
- weakest fit dimensions;
- critical risks;
- development gaps;
- feasibility status;
- evidence strength;
- confidence;
- recommendation category.

---

# 7. Weighting Engine

## 7.1 Prinsip Weighting

Bobot tidak boleh statis untuk semua pengguna dan semua keputusan. Bobot menyesuaikan:

- jenis keputusan;
- tahap hidup;
- kualitas data;
- constraint;
- horizon waktu;
- tingkat kepastian pengguna;
- tujuan utama.

## 7.2 Hierarki Bobot Default

### Tier 1: Paling Penting

1. **Interest and Activity Fit**  
   Pengguna perlu dapat menerima aktivitas inti, bukan hanya menyukai nama profesi.

2. **Capability and Learning Readiness**  
   Jalur harus masuk akal berdasarkan kesiapan saat ini atau potensi pengembangan.

3. **Work Values and Environment Fit**  
   Ketidakcocokan nilai dan lingkungan sering menjadi sumber ketidakpuasan jangka panjang.

4. **Hard Constraints and Feasibility**  
   Rekomendasi harus dapat dilakukan atau memiliki jalur alternatif yang jelas.

5. **Motivation and Commitment**  
   Motivasi memengaruhi kemampuan pengguna menutup gap.

### Tier 2: Sangat Penting

- career outcome fit;
- economic feasibility;
- geographic feasibility;
- skill match;
- development potential;
- risk tolerance;
- lifestyle fit.

### Tier 3: Penting sebagai Pembeda

- AI future match;
- labor market match;
- transferability;
- status preference;
- prestige;
- target gaji jangka pendek;
- popularity.

### Tier 4: Opsional atau Enrichment

- MBTI;
- DISC;
- preferensi ringan;
- figur panutan;
- tren media sosial;
- satu pengalaman singkat;
- satu jawaban yang tidak konsisten.

## 7.3 Bobot Berdasarkan Jenis Keputusan

### A. Memilih Jurusan Sekolah atau Kuliah

Bobot lebih tinggi pada:

- learning match;
- academic readiness;
- interest;
- economic feasibility;
- transferability;
- relationship antara jurusan dan beberapa outcome karier.

### B. Memilih Karier Pertama

Bobot lebih tinggi pada:

- skill match;
- entry accessibility;
- work environment;
- values;
- labor market;
- development potential.

### C. Career Switching

Bobot lebih tinggi pada:

- transferable skills;
- reskilling cost;
- financial runway;
- transition path;
- opportunity cost;
- prior experience.

### D. Eksplorasi Dini

Bobot lebih tinggi pada:

- breadth;
- curiosity;
- learning exposure;
- low-cost experiments;
- reversibility.

## 7.4 Bobot Berdasarkan Evidence Quality

Skor dari evidence kuat memiliki pengaruh lebih besar. Self-report tidak diabaikan, tetapi harus dikalibrasi.

Contoh:

- pengguna mengatakan suka desain;
- portofolio menunjukkan konsistensi membuat karya;
- pengguna mengikuti komunitas desain;
- pengguna menyelesaikan proyek desain mandiri.

Empat bukti tersebut lebih kuat dibanding satu jawaban questionnaire.

## 7.5 Personal Weight Override

Pengguna dapat menentukan prioritas. Namun engine harus memeriksa konsekuensi.

Contoh:

- pengguna menempatkan gaji sebagai prioritas tertinggi;
- engine tetap menampilkan kandidat dengan potensi gaji tinggi;
- engine juga menjelaskan tuntutan, kompetisi, waktu, dan risiko yang terkait.

## 7.6 Anti-bias Weighting Rules

Engine tidak boleh memberi bobot negatif pada karakteristik yang tidak relevan terhadap kompetensi atau feasibility.

Engine juga harus mencegah pola berikut:

- menganggap perempuan kurang cocok di bidang teknik;
- menganggap siswa dari keluarga berpenghasilan rendah tidak layak mengejar profesi tertentu;
- menganggap introvert tidak dapat memimpin;
- menganggap nilai rendah saat ini berarti potensi rendah permanen;
- menganggap sekolah asal menentukan kualitas pengguna.

---

# 8. Reasoning Engine

## 8.1 Tujuan

Reasoning Engine mengubah skor dan evidence menjadi kesimpulan yang logis. Engine memeriksa hubungan sebab, konflik, prasyarat, tradeoff, dan jalur pengembangan.

Reasoning tidak boleh berupa generalisasi kepribadian. Reasoning harus terikat pada aktivitas, konteks, dan bukti.

## 8.2 Jenis Reasoning

### A. Convergent Reasoning

Beberapa evidence mengarah pada kesimpulan yang sama.

Contoh:

- minat tinggi pada investigasi;
- nilai sains stabil;
- menikmati eksperimen;
- tertarik memecahkan masalah teknis.

Kesimpulan: terdapat evidence kuat untuk jalur investigatif dan analitis.

### B. Contradiction Reasoning

Dua atau lebih evidence saling bertentangan.

Engine harus menentukan apakah konflik berasal dari:

- perbedaan konteks;
- definisi yang tidak sama;
- jawaban aspiratif;
- perubahan minat;
- bias self-report;
- pengalaman terbatas;
- salah memahami aktivitas profesi.

### C. Compensatory Reasoning

Kelemahan pada satu dimensi dapat dikompensasi oleh kekuatan lain.

Contoh:

- kemampuan akademik sedang;
- motivasi tinggi;
- kebiasaan belajar kuat;
- waktu persiapan cukup;
- dukungan mentor tersedia.

Engine dapat mempertahankan kandidat sebagai stretch match yang realistis.

### D. Non-compensatory Reasoning

Beberapa requirement tidak dapat digantikan oleh kekuatan lain.

Contoh:

- jalur membutuhkan sertifikasi wajib;
- pengguna tidak dapat memenuhi syarat legal;
- profesi memiliki aktivitas inti yang sepenuhnya ditolak pengguna.

### E. Temporal Reasoning

Membedakan kondisi sekarang dengan potensi masa depan.

- ready now;
- ready with preparation;
- possible later;
- not recommended under current constraints.

### F. Counterfactual Reasoning

Engine menguji perubahan kondisi.

Contoh:

- jika biaya bukan kendala, apakah ranking berubah?
- jika pengguna bersedia pindah kota, pilihan apa yang terbuka?
- jika skill matematika meningkat, kandidat mana yang naik?
- jika target gaji diturunkan, tradeoff apa yang membaik?

### G. Path Reasoning

Engine mencari jalur menuju target, bukan hanya mencocokkan posisi akhir.

Contoh:

- target: Data Scientist;
- jalur langsung belum siap;
- jalur antara: data analyst, statistics foundation, portfolio project, internship.

### H. Causal Risk Reasoning

Engine menjelaskan mengapa suatu faktor meningkatkan risiko.

Contoh:

- pengguna membutuhkan stabilitas tinggi;
- karier berbasis proyek freelance memiliki pendapatan tidak tetap;
- risiko utama bukan kurang mampu, tetapi ketidakcocokan dengan toleransi ketidakpastian.

## 8.3 Reasoning Patterns untuk Konflik Umum

### Kasus 1: Suka Logika tetapi Tidak Suka Matematika

Engine tidak langsung menyimpulkan bahwa pengguna tidak cocok dengan bidang analitis.

Langkah reasoning:

1. Bedakan logika konseptual dari matematika formal.
2. Periksa bagian matematika yang tidak disukai.
3. Tentukan apakah ketidaksukaan berasal dari cara belajar, pengalaman buruk, atau kesulitan dasar.
4. Periksa kebutuhan matematika pada setiap kandidat.
5. Pisahkan bidang analitis dengan kebutuhan matematika rendah, sedang, dan tinggi.
6. Tawarkan eksperimen belajar singkat.

Output mungkin:

- cocok untuk jalur analisis verbal, hukum, policy, UX research, business analysis, atau quality assurance;
- near match untuk bidang dengan statistik dasar;
- stretch match untuk teknik, data science, aktuaria, atau matematika murni;
- tidak menutup kandidat matematis jika pengguna bersedia memperbaiki dasar.

### Kasus 2: Introvert tetapi Ingin Menjadi Public Relations

Engine tidak menggunakan introversi sebagai veto.

Langkah reasoning:

1. Periksa jenis introversi dan kebutuhan recovery sosial.
2. Periksa kemampuan komunikasi aktual.
3. Bedakan komunikasi satu lawan satu, presentasi, networking, dan crisis communication.
4. Nilai toleransi terhadap interaksi tinggi dan perubahan cepat.
5. Periksa motivasi terhadap pekerjaan PR.
6. Identifikasi strategi adaptasi.

Output mungkin:

- PR tetap mungkin jika komunikasi, writing, listening, dan preparation kuat;
- risiko muncul pada networking intensif, event berulang, dan respons krisis;
- alternatif berdekatan dapat berupa corporate communication, content strategy, media monitoring, internal communication, atau public affairs research;
- roadmap perlu memasukkan public speaking, media handling, dan energy management.

### Kasus 3: Nilai Biasa tetapi Motivasi Sangat Tinggi

Engine membedakan performa saat ini dari kapasitas berkembang.

Langkah reasoning:

1. Periksa tren nilai.
2. Periksa kualitas kebiasaan belajar.
3. Periksa penyebab nilai biasa.
4. Periksa besarnya gap akademik.
5. Periksa waktu dan dukungan.
6. Klasifikasikan kandidat sebagai realistic stretch jika gap dapat ditutup.

Output mungkin:

- jangan menolak kandidat hanya karena nilai saat ini;
- tampilkan prasyarat yang perlu dikuasai;
- buat checkpoint objektif;
- sediakan jalur alternatif jika target utama tidak tercapai.

### Kasus 4: Minat Tinggi tetapi Skill Rendah

Reasoning:

- tentukan apakah skill merupakan entry requirement atau dapat dipelajari;
- ukur evidence motivasi;
- lihat pengalaman mencoba;
- klasifikasikan sebagai development match atau aspirational match;
- buat roadmap validasi sebelum komitmen besar.

### Kasus 5: Skill Tinggi tetapi Minat Rendah

Reasoning:

- skill tinggi tidak otomatis berarti pilihan baik;
- periksa apakah pengguna bosan, lelah, atau benar-benar tidak tertarik;
- lihat nilai kerja dan konteks;
- kandidat dapat menjadi backup, bukan rekomendasi utama.

### Kasus 6: Cita-cita Tinggi tetapi Constraint Berat

Reasoning:

- jangan menghapus cita-cita;
- pisahkan target jangka panjang dan jalur jangka pendek;
- cari jalur biaya rendah;
- cari scholarship path;
- cari skill entry point;
- jelaskan waktu dan risiko.

### Kasus 7: Target Gaji Tinggi tetapi Menghindari Kompetisi

Reasoning:

- jelaskan hubungan antara scarcity, expertise, responsibility, dan compensation;
- cari jalur penghasilan tinggi dengan pola kompetisi yang lebih sesuai;
- periksa toleransi belajar jangka panjang;
- tampilkan tradeoff secara eksplisit.

### Kasus 8: Menyukai Banyak Bidang

Reasoning:

- jangan memaksa satu identitas;
- cari pola aktivitas bersama;
- prioritaskan jalur yang memberi optionality;
- gunakan proyek eksplorasi;
- tampilkan kombinasi mayor, minor, sertifikasi, atau role hybrid.

### Kasus 9: Tidak Memiliki Minat yang Jelas

Reasoning:

- gunakan negative preferences;
- gunakan aktivitas yang pernah memberi energi;
- gunakan skill evidence;
- berikan exploration set, bukan ranking final;
- turunkan confidence;
- prioritaskan eksperimen murah dan reversibel.

### Kasus 10: Orang Tua dan Siswa Berbeda Pilihan

Reasoning:

- pisahkan tujuan siswa dan kekhawatiran orang tua;
- cari faktor yang dapat dibandingkan;
- tampilkan konsekuensi masing-masing pilihan;
- jangan memihak secara otomatis;
- buat decision matrix bersama.

## 8.4 Reasoning Guardrails

Engine harus:

- menjelaskan bukti yang digunakan;
- tidak membuat kesimpulan dari satu label;
- tidak memperlakukan korelasi sebagai kepastian;
- membedakan kemampuan, preferensi, dan constraint;
- menyebutkan asumsi;
- menyebutkan informasi yang belum tersedia;
- memberi ruang perubahan;
- menghindari bahasa deterministik.

---

# 9. Recommendation Engine

## 9.1 Tujuan

Recommendation Engine menyusun kandidat menjadi urutan yang berguna. Ranking bukan daftar popularitas. Ranking menunjukkan kandidat yang paling sesuai berdasarkan konteks pengguna saat ini.

## 9.2 Output Ranking

Engine dapat menghasilkan:

- Top 5 jurusan;
- Top 10 jurusan;
- Top 5 karier;
- Top 10 karier;
- alternatif terdekat;
- pilihan aspiratif;
- pilihan realistis;
- pilihan paling fleksibel;
- pilihan paling sesuai constraint;
- pilihan yang perlu divalidasi.

## 9.3 Kategori Rekomendasi

### A. Safe Match

Kandidat dengan:

- kecocokan cukup kuat;
- prasyarat dapat dipenuhi;
- risiko terkendali;
- constraint kompatibel;
- jalur masuk jelas.

Safe tidak berarti mudah atau pasti berhasil. Safe berarti risiko relatif lebih terukur.

### B. Near Match

Kandidat yang cocok pada banyak dimensi tetapi memiliki satu atau dua gap yang dapat diperbaiki.

### C. Stretch Match

Kandidat yang menarik dan masuk akal, tetapi membutuhkan usaha, waktu, skill, biaya, atau perubahan kondisi lebih besar.

### D. Aspirational Match

Kandidat yang sejalan dengan cita-cita jangka panjang tetapi belum feasible saat ini.

### E. Conditional Match

Kandidat cocok hanya jika kondisi tertentu terpenuhi.

Contoh:

- memperoleh beasiswa;
- meningkatkan nilai prasyarat;
- bersedia relokasi;
- menyelesaikan sertifikasi;
- mengembangkan komunikasi.

### F. Backup Match

Kandidat yang lebih mudah diakses atau lebih fleksibel, tetapi tetap mendukung tujuan utama.

### G. Exploration Match

Kandidat yang perlu diuji melalui pengalaman sebelum dimasukkan ke ranking utama.

## 9.4 Ranking Logic

Ranking dilakukan dalam beberapa tahap.

### Tahap 1: Eligibility Check

Periksa syarat minimum dan hard constraint.

### Tahap 2: Multi-dimensional Fit

Nilai kecocokan pada semua dimensi utama.

### Tahap 3: Risk and Tradeoff Adjustment

Sesuaikan posisi berdasarkan risiko yang relevan bagi pengguna.

### Tahap 4: Confidence Adjustment

Kandidat dengan skor tinggi tetapi evidence lemah tidak boleh tampil seolah pasti.

### Tahap 5: Diversity Control

Top 10 tidak boleh berisi kandidat yang hampir sama seluruhnya. Engine perlu menjaga variasi jalur agar pengguna dapat membandingkan kategori keputusan.

### Tahap 6: Strategic Ordering

Ranking akhir mempertimbangkan:

- fit;
- feasibility;
- confidence;
- long-term option value;
- reversibility;
- risk;
- user priority.

## 9.5 Confidence

Confidence menunjukkan keyakinan engine terhadap kualitas rekomendasi, bukan peluang sukses pengguna.

### High Confidence

- data cukup lengkap;
- evidence konsisten;
- kandidat memiliki fit jelas;
- sedikit asumsi;
- constraint diketahui.

### Medium Confidence

- data cukup untuk rekomendasi awal;
- terdapat beberapa konflik atau area kosong;
- ranking masih dapat berubah setelah validasi.

### Low Confidence

- data penting belum tersedia;
- jawaban sangat bertentangan;
- minat belum terbentuk;
- kandidat bergantung pada asumsi besar;
- constraint belum jelas.

## 9.6 Recommendation Diversity

Top recommendation perlu mencakup variasi berikut bila relevan:

- pilihan paling sesuai;
- pilihan paling realistis;
- pilihan paling fleksibel;
- pilihan dengan potensi tinggi;
- pilihan alternatif yang mungkin belum diketahui pengguna.

## 9.7 Jurusan ke Karier dan Karier ke Jurusan

Engine harus mendukung dua arah.

### Jurusan ke Karier

- karier langsung;
- karier berdekatan;
- karier lintas industri;
- karier yang membutuhkan sertifikasi tambahan;
- karier yang memanfaatkan transferable skills.

### Karier ke Jurusan

- jurusan utama;
- jurusan alternatif;
- diploma;
- sertifikasi;
- apprenticeship;
- self-directed portfolio path;
- transisi dari bidang lain.

---

# 10. Explanation Engine

## 10.1 Tujuan

Explanation Engine membuat hasil dapat dipahami dan dipertanggungjawabkan. Penjelasan harus memberi pengguna kemampuan untuk memeriksa logika engine.

## 10.2 Struktur Penjelasan per Kandidat

Setiap kandidat minimal memiliki:

1. **Ringkasan Fit**  
   Mengapa kandidat muncul pada posisi tersebut.

2. **Alasan Cocok**  
   Hubungan antara evidence pengguna dan karakteristik kandidat.

3. **Alasan Kurang Cocok**  
   Gap, mismatch, atau ketidakpastian.

4. **Risiko Utama**  
   Hal yang dapat menurunkan keberhasilan atau kepuasan.

5. **Tradeoff**  
   Apa yang didapat dan apa yang harus dikorbankan.

6. **Skill Gap**  
   Kemampuan yang perlu diperkuat.

7. **Feasibility**  
   Kesesuaian biaya, lokasi, waktu, dan akses.

8. **AI and Future Outlook**  
   Dampak AI pada tugas dan skill.

9. **Next Validation Step**  
   Tindakan untuk menguji kecocokan.

10. **Confidence and Missing Data**  
    Tingkat keyakinan dan informasi yang masih kurang.

## 10.3 Prinsip Bahasa Penjelasan

Penjelasan harus:

- spesifik;
- singkat tetapi informatif;
- menggunakan evidence pengguna;
- membedakan fakta dan asumsi;
- tidak deterministik;
- tidak menggunakan jargon psikologi tanpa penjelasan;
- tidak menyebut skor tanpa makna;
- tidak menyembunyikan kelemahan kandidat;
- tidak memberi kesan engine mengetahui masa depan.

## 10.4 Contoh Pola Penjelasan

### Mengapa Cocok

"Pilihan ini muncul tinggi karena Anda menunjukkan minat kuat pada pemecahan masalah, menikmati pekerjaan terstruktur, dan memiliki evidence akademik yang stabil pada mata pelajaran analitis. Lingkungan kerjanya juga sesuai dengan preferensi Anda terhadap tugas fokus dan interaksi yang terukur."

### Mengapa Kurang Cocok

"Kecocokan berkurang karena jalur ini menuntut presentasi rutin dan kolaborasi intensif, sementara Anda lebih nyaman bekerja mandiri. Hal ini bukan penghalang mutlak, tetapi perlu diuji melalui pengalaman proyek tim."

### Risiko

"Risiko utama terdapat pada biaya pendidikan dan masa studi. Pilihan ini lebih aman jika Anda memiliki jalur beasiswa atau alternatif institusi dengan biaya lebih rendah."

### Tradeoff

"Jalur ini menawarkan stabilitas dan jalur karier jelas, tetapi fleksibilitas lokasi lebih rendah karena peluang kerja terkonsentrasi di wilayah tertentu."

## 10.5 Explanation by Audience

Penjelasan dapat disesuaikan untuk:

- siswa;
- mahasiswa;
- orang tua;
- guru BK;
- konselor;
- pencari kerja;
- pekerja yang ingin beralih karier.

Isi inti tetap sama. Tingkat detail dan fokus berubah sesuai audience.

## 10.6 Explanation Traceability

Setiap alasan harus dapat ditelusuri ke:

- input pengguna;
- dimensi scoring;
- Knowledge Object;
- constraint;
- rule atau relationship yang relevan.

---

# 11. Learning Roadmap Engine

## 11.1 Tujuan

Learning Roadmap Engine mengubah skill gap menjadi rencana belajar yang realistis. Roadmap tidak boleh berupa daftar kursus umum. Roadmap harus terhubung dengan target jurusan atau karier.

## 11.2 Input Roadmap

- target utama;
- target alternatif;
- skill gap;
- academic gap;
- learning preference;
- waktu tersedia;
- budget;
- access constraint;
- deadline;
- evidence level;
- motivation;
- prior knowledge.

## 11.3 Struktur Roadmap

### Phase 1: Exploration

Tujuan: memastikan pengguna memahami aktivitas nyata bidang tersebut.

Aktivitas:

- membaca role profile;
- melihat contoh tugas;
- mengikuti mini project;
- berbicara dengan praktisi;
- mengikuti kelas pengantar;
- mencatat respons pribadi.

### Phase 2: Foundation

Tujuan: membangun prasyarat dasar.

Komponen:

- konsep inti;
- literasi digital;
- numerasi;
- komunikasi;
- bahasa;
- study habits;
- tools dasar.

### Phase 3: Core Skill Development

Tujuan: menguasai skill utama.

Komponen:

- skill teknis;
- skill analitis;
- domain knowledge;
- tool proficiency;
- problem solving;
- komunikasi bidang.

### Phase 4: Applied Practice

Tujuan: mengubah pengetahuan menjadi evidence.

Aktivitas:

- proyek;
- studi kasus;
- volunteer;
- lomba;
- simulasi;
- internship;
- kontribusi komunitas.

### Phase 5: Proof of Capability

Tujuan: menunjukkan kemampuan.

Evidence:

- portofolio;
- sertifikat relevan;
- hasil proyek;
- rekomendasi mentor;
- presentasi;
- nilai;
- assessment ulang.

### Phase 6: Transition Readiness

Tujuan: siap masuk ke jurusan, internship, atau entry role.

Komponen:

- application preparation;
- CV;
- interview;
- entrance test;
- networking;
- pilihan institusi;
- scholarship plan.

## 11.4 Prioritas Roadmap

Roadmap mengurutkan aktivitas berdasarkan:

1. critical prerequisite;
2. high-impact gap;
3. low-cost validation;
4. evidence creation;
5. long-term enhancement.

## 11.5 Roadmap Horizon

Engine dapat menghasilkan:

- 7-day exploration plan;
- 30-day validation plan;
- 3-month foundation plan;
- 6-month skill plan;
- 1-year preparation plan;
- multi-year education pathway.

## 11.6 Roadmap Checkpoint

Setiap fase perlu memiliki checkpoint:

- apa yang harus dipahami;
- apa yang harus dapat dilakukan;
- evidence yang harus dibuat;
- keputusan lanjut atau berhenti;
- indikator kesulitan;
- opsi perbaikan.

## 11.7 Adaptive Roadmap

Roadmap berubah jika:

- minat menurun setelah mencoba;
- skill berkembang lebih cepat;
- constraint berubah;
- target berubah;
- pengguna gagal mencapai checkpoint;
- opportunity baru muncul.

---

# 12. Career Roadmap Engine

## 12.1 Tujuan

Career Roadmap Engine menyusun jalur dari kondisi pengguna saat ini menuju target karier. Engine perlu menunjukkan lebih dari satu jalur.

## 12.2 Struktur Career Roadmap

### A. Target Role Definition

- nama peran;
- fungsi utama;
- aktivitas inti;
- lingkungan kerja;
- skill inti;
- entry requirement;
- kemungkinan spesialisasi;
- AI impact;
- risiko.

### B. Entry Path

- pendidikan yang relevan;
- sertifikasi;
- pengalaman awal;
- entry-level role;
- proyek pembuktian;
- jaringan awal.

### C. Early Career Stage

- skill yang harus diperdalam;
- jenis tanggung jawab;
- indikator performa;
- common mistakes;
- transisi yang mungkin.

### D. Mid Career Stage

- spesialisasi;
- leadership path;
- professional credential;
- domain expertise;
- portfolio of impact;
- strategic networking.

### E. Long-term Options

- expert track;
- management track;
- entrepreneurship;
- consulting;
- research;
- teaching;
- cross-functional transition.

## 12.3 Multiple Path Design

Engine minimal dapat menunjukkan:

1. **Direct Path**  
   Jalur paling langsung.

2. **Affordable Path**  
   Jalur dengan biaya lebih rendah.

3. **Fast Entry Path**  
   Jalur untuk memperoleh pengalaman atau pendapatan lebih cepat.

4. **Flexible Path**  
   Jalur yang mempertahankan banyak pilihan.

5. **Alternative Transition Path**  
   Jalur dari pendidikan atau pengalaman yang berbeda.

## 12.4 Milestone Career

Setiap roadmap harus memiliki milestone yang dapat diamati.

Contoh:

- memahami aktivitas role;
- menyelesaikan proyek pertama;
- memperoleh pengalaman tim;
- mendapatkan mentor;
- menyusun portfolio;
- lulus sertifikasi;
- memperoleh internship;
- mendapatkan role awal;
- mengembangkan spesialisasi.

## 12.5 Career Risk Map

Engine menampilkan risiko per tahap:

- risiko masuk;
- risiko belajar;
- risiko biaya;
- risiko employability;
- risiko burnout;
- risiko ketidakcocokan lingkungan;
- risiko teknologi;
- risiko stagnasi.

## 12.6 Career Pivot Map

Setiap target perlu memiliki jalur pivot.

Contoh:

- dari data science ke data analyst, business intelligence, product analytics, atau research;
- dari psikologi ke HR, UX research, education, community development, atau consumer insight;
- dari desain komunikasi visual ke UI, branding, content, motion, atau creative strategy.

---

# 13. Decision Support Engine

## 13.1 Tujuan

Decision Support Engine membantu pengguna membandingkan pilihan. Engine tidak memberi perintah final.

## 13.2 Decision Modes

### A. Explore Mode

Untuk pengguna yang belum memiliki pilihan.

Output:

- cluster minat;
- candidate set;
- aktivitas eksplorasi;
- pertanyaan refleksi;
- confidence rendah atau sedang.

### B. Compare Mode

Untuk membandingkan dua sampai lima pilihan.

Output:

- perbandingan dimensi;
- strength;
- weakness;
- cost;
- risk;
- reversibility;
- long-term option value;
- recommendation under different priorities.

### C. Validate Mode

Untuk menguji pilihan yang sudah disukai pengguna.

Output:

- evidence yang mendukung;
- evidence yang bertentangan;
- asumsi tersembunyi;
- eksperimen validasi;
- red flags.

### D. Plan Mode

Untuk menyusun tindakan setelah pilihan mulai terbentuk.

### E. Reconsider Mode

Untuk pengguna yang merasa salah jurusan atau salah karier.

## 13.3 Decision Criteria

Engine membantu pengguna membandingkan:

- fit;
- feasibility;
- affordability;
- risk;
- reversibility;
- time to outcome;
- lifestyle;
- growth;
- optionality;
- AI impact;
- personal meaning.

## 13.4 Tradeoff Matrix

Engine perlu menampilkan tradeoff eksplisit.

Contoh:

| Pilihan | Keuntungan Utama | Pengorbanan Utama | Risiko | Reversibility |
|---|---|---|---|---|
| Pilihan A | Stabilitas tinggi | Masa studi panjang | Biaya dan kompetisi | Sedang |
| Pilihan B | Masuk kerja lebih cepat | Jalur promosi awal lebih sempit | Skill cepat usang | Tinggi |
| Pilihan C | Kreativitas dan otonomi | Penghasilan awal tidak stabil | Ketidakpastian pasar | Tinggi |

## 13.5 Scenario Analysis

Engine dapat membuat skenario:

- best realistic case;
- base case;
- difficult case;
- jika constraint berubah;
- jika prioritas berubah;
- jika target utama gagal.

## 13.6 Reversibility Principle

Untuk pengguna muda atau belum yakin, engine memberi nilai lebih pada pilihan yang:

- mudah diuji;
- biaya eksplorasinya rendah;
- tidak menutup terlalu banyak jalur;
- menghasilkan transferable skills;
- dapat diputar ke alternatif lain.

## 13.7 Decision Readiness

Engine menilai apakah pengguna siap memutuskan.

Kategori:

- not ready to decide;
- ready to narrow options;
- ready for validation;
- ready for commitment;
- ready for execution.

## 13.8 Final Decision Support Output

Engine tidak mengatakan, "Anda harus memilih X."

Engine mengatakan:

- "X adalah pilihan terkuat jika prioritas utama Anda adalah A dan B."
- "Y lebih sesuai jika biaya dan lokasi menjadi batas utama."
- "Z memiliki upside tinggi, tetapi membutuhkan persiapan C dan D."
- "Data saat ini belum cukup untuk membedakan X dan Y. Lakukan validasi berikut."

---

# 14. Uncertainty Handling

## 14.1 Jenis Ketidakpastian

### A. Data Missing

Informasi penting belum tersedia.

### B. Data Conflict

Dua sumber memberi sinyal berbeda.

### C. Data Quality Uncertainty

Sumber data lemah, lama, atau tidak terverifikasi.

### D. Knowledge Uncertainty

Knowledge Object belum memiliki detail yang cukup.

### E. Future Uncertainty

Pasar kerja, teknologi, biaya, dan kondisi hidup dapat berubah.

### F. User Preference Uncertainty

Pengguna belum memahami preferensinya sendiri.

## 14.2 Missing Data Strategy

Jika data kurang, engine harus:

1. tetap memberi rekomendasi awal jika memungkinkan;
2. menurunkan confidence;
3. menyebutkan data yang belum tersedia;
4. menjelaskan potensi perubahan ranking;
5. meminta input yang paling bernilai;
6. tidak meminta semua data sekaligus.

## 14.3 Contradiction Handling

Jika jawaban bertabrakan:

1. identifikasi sumber konflik;
2. lihat konteks dan recency;
3. prioritaskan evidence perilaku yang berulang;
4. pertahankan kedua hipotesis jika belum dapat dibedakan;
5. buat eksperimen validasi;
6. turunkan confidence pada dimensi terkait.

## 14.4 Low Confidence Output

Saat confidence rendah, output harus berubah dari keputusan menjadi eksplorasi.

Engine menampilkan:

- rekomendasi sementara;
- alasan confidence rendah;
- pertanyaan paling penting;
- aktivitas validasi;
- kandidat yang sensitif terhadap jawaban baru.

## 14.5 Confidence Decomposition

Confidence harus dapat dijelaskan melalui:

- data completeness;
- evidence strength;
- consistency;
- knowledge coverage;
- constraint clarity;
- ranking stability.

## 14.6 Ranking Stability

Engine perlu memeriksa apakah ranking berubah besar saat bobot sedikit berubah.

- **Stable Ranking:** urutan tetap relatif sama.
- **Sensitive Ranking:** urutan mudah berubah.
- **Indeterminate Ranking:** data belum cukup untuk membedakan kandidat.

## 14.7 Safe Failure

Jika engine tidak memiliki cukup dasar, engine harus mengatakan bahwa rekomendasi belum kuat. Engine tidak boleh mengisi kekosongan dengan bahasa meyakinkan.

---

# 15. AI Future and Labor Change Reasoning

## 15.1 Tujuan

AI Impact dalam Knowledge Object V2 harus digunakan untuk membantu pengguna memahami perubahan tugas, bukan menakut-nakuti pengguna.

## 15.2 Tiga Kategori Dampak

### A. Task Automation

Tugas yang dapat dikurangi atau diotomatisasi.

### B. Task Augmentation

Tugas yang menjadi lebih cepat atau lebih kuat dengan AI.

### C. Human Differentiation

Tugas yang tetap memerlukan:

- judgment;
- accountability;
- empathy;
- negotiation;
- physical interaction;
- domain context;
- ethical reasoning;
- complex coordination.

## 15.3 Output AI Future Match

Setiap kandidat dapat memiliki:

- tugas yang berisiko;
- tugas yang berkembang;
- skill yang harus ditambah;
- skill manusia yang menjadi lebih penting;
- strategi adaptasi;
- peluang role baru;
- tingkat ketidakpastian.

## 15.4 AI Resilience Strategy

Engine merekomendasikan kombinasi:

- domain expertise;
- AI literacy;
- data literacy;
- communication;
- problem framing;
- judgment;
- creativity;
- ethics;
- continuous learning.

---

# 16. Knowledge Object V2 Utilization

## 16.1 Structured Profile

Digunakan untuk memahami karakteristik inti jurusan dan karier:

- aktivitas;
- skill;
- nilai;
- lingkungan;
- entry requirement;
- outcome;
- risiko.

## 16.2 Fit Profile

Digunakan sebagai peta dimensi kecocokan, bukan sebagai hasil final.

## 16.3 Career Graph

Digunakan untuk:

- jalur masuk;
- perpindahan role;
- role adjacency;
- progression;
- pivot;
- hubungan jurusan dan karier.

## 16.4 Skills Graph

Digunakan untuk:

- skill gap;
- prerequisite;
- skill adjacency;
- transferability;
- learning sequence;
- evidence mapping.

## 16.5 AI Impact

Digunakan untuk menilai perubahan tugas dan kebutuhan reskilling.

## 16.6 Decision Factors

Digunakan untuk menyusun tradeoff dan comparison matrix.

## 16.7 Recommendation Logic

Digunakan sebagai domain rule yang dapat mendukung atau membatasi rekomendasi.

Recommendation Logic tidak boleh menggantikan scoring multidimensi. Logic berfungsi sebagai guardrail dan reasoning support.

## 16.8 Relationship

Digunakan untuk membangun hubungan:

- jurusan ke karier;
- karier ke skill;
- skill ke course;
- role ke industry;
- role ke adjacent role;
- constraint ke alternative path.

## 16.9 Retrieval Keywords

Digunakan untuk menemukan kandidat dan knowledge yang relevan dari istilah pengguna yang tidak terstruktur.

---

# 17. Personalization Strategy

## 17.1 Session Personalization

Menyesuaikan rekomendasi berdasarkan keputusan saat ini.

## 17.2 Longitudinal Personalization

Melihat perubahan:

- minat;
- nilai;
- skill;
- tujuan;
- constraint;
- respons terhadap eksplorasi;
- outcome.

## 17.3 Stage-aware Personalization

Engine harus membedakan rekomendasi untuk:

- siswa SMP;
- siswa SMA atau SMK;
- mahasiswa;
- fresh graduate;
- early career;
- career switcher;
- return-to-work user.

## 17.4 Preference Learning

Engine belajar dari tindakan pengguna, tetapi tidak boleh menganggap klik sebagai preferensi final.

Behavioral signal perlu dibedakan menjadi:

- curiosity;
- serious interest;
- comparison behavior;
- avoidance;
- commitment.

---

# 18. Fairness, Safety, and Human-Centered Guardrails

## 18.1 Fairness Principles

Engine harus:

- menilai kompetensi dan feasibility yang relevan;
- tidak menggunakan atribut sensitif sebagai proxy kemampuan;
- tidak mempersempit pilihan berdasarkan stereotip;
- menawarkan jalur alternatif saat constraint membatasi akses;
- menjelaskan jika data eksternal memiliki bias.

## 18.2 Youth Safety

Untuk pengguna usia sekolah:

- gunakan bahasa yang tidak mengunci identitas;
- tekankan eksplorasi;
- hindari keputusan permanen;
- libatkan orang dewasa tepercaya jika keputusan berisiko tinggi;
- jangan mengeksploitasi kecemasan masa depan.

## 18.3 Psychological Safety

Engine tidak boleh mengatakan:

- "Anda tidak berbakat";
- "Anda pasti gagal";
- "Kepribadian Anda tidak cocok";
- "Pilihan ini bukan untuk orang seperti Anda."

Engine sebaiknya mengatakan:

- "Evidence saat ini belum menunjukkan kesiapan yang cukup.";
- "Gap utama berada pada...";
- "Pilihan ini tetap mungkin jika...";
- "Kecocokan perlu diuji melalui...".

## 18.4 User Agency

Pengguna dapat:

- mengubah prioritas;
- menolak recommendation factor;
- melihat alasan ranking;
- membandingkan skenario;
- memperbarui data;
- meminta alternatif;
- melihat dampak perubahan constraint.

---

# 19. Evaluation Framework

## 19.1 Tujuan Evaluasi

Engine tidak cukup dinilai dari apakah pengguna menyukai rekomendasi. Engine harus dinilai dari kualitas keputusan dan hasil jangka panjang.

## 19.2 Evaluation Dimensions

### A. Relevance

Apakah rekomendasi dianggap relevan oleh pengguna dan ahli.

### B. Explanation Quality

Apakah pengguna memahami alasan, risiko, dan tradeoff.

### C. Decision Usefulness

Apakah engine membantu mempersempit pilihan atau meningkatkan kejelasan.

### D. Calibration

Apakah confidence sesuai dengan kualitas data dan stabilitas ranking.

### E. Diversity

Apakah engine memberi pilihan yang cukup beragam tanpa menjadi acak.

### F. Fairness

Apakah kelompok pengguna yang berbeda menerima kualitas rekomendasi yang setara.

### G. Longitudinal Outcome

- apakah pengguna bertahan pada jalur;
- apakah skill berkembang;
- apakah kepuasan meningkat;
- apakah pengguna melakukan pivot yang sehat;
- apakah roadmap dapat dijalankan.

### H. Regret Reduction

Apakah engine mengurangi keputusan yang dibuat tanpa informasi penting.

## 19.3 Human Review

Evaluasi perlu melibatkan:

- konselor karier;
- guru BK;
- ahli pendidikan;
- praktisi industri;
- psikolog asesmen;
- pengguna;
- orang tua untuk konteks siswa.

## 19.4 Error Taxonomy

Kesalahan engine perlu diklasifikasikan:

- false fit;
- missed fit;
- overconfidence;
- underconfidence;
- constraint failure;
- explanation mismatch;
- outdated knowledge;
- biased recommendation;
- roadmap infeasibility;
- ranking instability.

---

# 20. Future Improvement

## 20.1 Big Five Integration

Big Five digunakan untuk memperkaya trait dan environment fit.

Penggunaan yang tepat:

- kecenderungan terhadap struktur;
- ketelitian;
- kebutuhan stimulasi sosial;
- keterbukaan terhadap pengalaman;
- respons terhadap tekanan.

Big Five tidak boleh menjadi veto karier.

## 20.2 DISC Integration

DISC dapat digunakan sebagai bahasa komunikasi dan kecenderungan kerja tim. Pengaruhnya harus lebih rendah daripada evidence perilaku dan skill.

## 20.3 MBTI Integration

MBTI hanya digunakan sebagai self-reflection signal. Bobotnya rendah. Engine tidak boleh menggunakan tipe MBTI untuk menentukan profesi secara langsung.

## 20.4 School Grade and Report Card Integration

Engine dapat:

- membaca tren;
- membandingkan mata pelajaran;
- mendeteksi konsistensi;
- mengidentifikasi prasyarat;
- menilai academic readiness;
- membedakan kemampuan dan kesempatan belajar.

## 20.5 Portfolio Integration

Portofolio menjadi evidence kuat untuk:

- skill;
- persistence;
- quality progression;
- domain interest;
- project complexity;
- communication.

## 20.6 CV Integration

CV digunakan untuk:

- pengalaman;
- transferable skills;
- progression;
- gap;
- role adjacency;
- achievement evidence.

## 20.7 LinkedIn Integration

LinkedIn dapat memperkaya:

- role history;
- skill claims;
- network exposure;
- industry interest;
- learning activity.

Data LinkedIn tidak boleh dianggap sepenuhnya objektif.

## 20.8 Work History Integration

Engine dapat menganalisis:

- role satisfaction;
- repeated strengths;
- burnout pattern;
- promotion pattern;
- skill accumulation;
- environment fit;
- reason for leaving;
- career anchors.

## 20.9 Behavior Tracking Integration

Behavioral tracking dapat mencakup:

- kandidat yang sering dibandingkan;
- konten yang dibaca sampai selesai;
- roadmap yang dijalankan;
- eksperimen yang diselesaikan;
- perubahan prioritas;
- rekomendasi yang diabaikan.

Behavior tracking harus:

- transparan;
- dapat dinonaktifkan;
- tidak manipulatif;
- tidak menjadi satu-satunya sumber preferensi.

## 20.10 Outcome Learning

Engine dapat belajar dari outcome:

- jurusan yang dipilih;
- performa;
- kepuasan;
- dropout;
- pindah jurusan;
- pekerjaan pertama;
- retention;
- skill progress;
- correction feedback.

Outcome learning perlu dikontrol agar tidak memperkuat bias historis.

## 20.11 Dynamic Labor Market Integration

Pada versi berikutnya, engine dapat menggunakan data pasar kerja untuk:

- tren demand;
- skill growth;
- regional opportunity;
- salary range;
- automation exposure;
- entry barriers.

Data pasar kerja harus diberi timestamp dan confidence.

## 20.12 Multi-agent Expert Reasoning

Masa depan engine dapat memisahkan perspektif:

- assessment expert;
- education pathway expert;
- career expert;
- labor market expert;
- financial feasibility expert;
- uncertainty reviewer.

Hasil akhir tetap perlu disatukan oleh Decision Intelligence layer agar pengguna tidak menerima rekomendasi yang saling bertentangan tanpa sintesis.

## 20.13 Continuous Calibration

Bobot, confidence, dan category threshold perlu dikalibrasi berdasarkan:

- expert review;
- user feedback;
- longitudinal outcome;
- fairness audit;
- ranking stability;
- domain changes.

---

# 21. End-to-End Decision Flow

## Step 1: Understand the Decision

Engine menentukan keputusan yang sedang dihadapi, waktu, dan tingkat urgensi.

## Step 2: Build Evidence Map

Engine mengelompokkan semua input menjadi capability, potential, preference, constraint, dan aspiration.

## Step 3: Assess Data Quality

Engine menilai kelengkapan, konsistensi, recency, dan evidence strength.

## Step 4: Retrieve Candidate Set

Engine mengambil kandidat langsung, adjacent, aspirational, dan constraint-compatible.

## Step 5: Score Each Candidate

Engine menilai interest, trait, skill, learning, academic, values, environment, feasibility, outcome, AI future, risk, dan development potential.

## Step 6: Apply Requirements and Constraints

Engine memeriksa hard requirement, critical mismatch, dan feasibility.

## Step 7: Reason Through Conflicts

Engine memeriksa kontradiksi, compensating factors, dan temporal potential.

## Step 8: Rank and Categorize

Engine menyusun safe, near, stretch, aspirational, conditional, backup, dan exploration matches.

## Step 9: Generate Explanation

Engine menjelaskan fit, mismatch, risk, tradeoff, gap, dan confidence.

## Step 10: Generate Roadmaps

Engine menghasilkan learning roadmap dan career roadmap.

## Step 11: Support Comparison

Engine membantu pengguna membandingkan pilihan berdasarkan prioritas.

## Step 12: Ask for High-value Validation

Engine mengidentifikasi satu sampai tiga data atau eksperimen yang paling dapat meningkatkan kualitas keputusan.

## Step 13: Update Recommendation

Ranking diperbarui setelah evidence baru masuk.

---

# 22. Standard Output Structure

## 22.1 User Decision Snapshot

- keputusan yang sedang dihadapi;
- prioritas utama;
- constraint utama;
- kekuatan evidence;
- area yang belum jelas.

## 22.2 Top Recommendation

Untuk setiap kandidat:

- ranking;
- category;
- overall fit;
- confidence;
- why fit;
- why not fully fit;
- risk;
- tradeoff;
- critical gap;
- next validation;
- roadmap summary.

## 22.3 Alternative Set

- near match;
- stretch match;
- safe match;
- backup;
- exploration option.

## 22.4 Comparison View

Perbandingan dimensi utama dan tradeoff.

## 22.5 Learning Roadmap

Roadmap berdasarkan gap dan target.

## 22.6 Career Roadmap

Jalur langsung dan alternatif.

## 22.7 Uncertainty Statement

- confidence;
- missing data;
- unstable ranking factors;
- assumptions.

## 22.8 Next Best Action

Satu sampai tiga langkah yang paling bernilai.

---

# 23. Design Decisions V1

## 23.1 No Single Test Dominance

Tidak ada satu instrumen yang boleh mendominasi seluruh rekomendasi.

## 23.2 No Single Composite Score as Final Truth

Overall score hanya digunakan untuk ordering. Keputusan harus melihat profil dimensi.

## 23.3 Constraints Do Not Equal Capability

Keterbatasan biaya atau lokasi tidak boleh diinterpretasikan sebagai rendahnya potensi.

## 23.4 Personality Does Not Act as Gatekeeper

Kepribadian membantu memahami adaptasi, bukan menutup akses.

## 23.5 Motivation Can Increase Development Potential

Motivasi tidak menggantikan prasyarat, tetapi memengaruhi kemungkinan menutup gap.

## 23.6 Recommendations Must Be Actionable

Setiap rekomendasi utama harus memiliki langkah validasi dan roadmap.

## 23.7 Confidence Must Be Visible

Engine harus menunjukkan tingkat ketidakpastian.

## 23.8 Alternative Paths Are Mandatory

Engine harus memberi jalur alternatif ketika target utama sulit diakses.

## 23.9 User Priority Can Change Ranking

Ranking harus dapat berubah ketika pengguna mengubah prioritas.

## 23.10 Human Decision Remains Final

Engine mendukung keputusan. Pengguna tetap menjadi pemilik keputusan.

---

# 24. V1 Success Criteria

Assessment and Recommendation Engine V1 dinyatakan berhasil jika:

1. dapat menerima input heterogen;
2. tidak bergantung pada satu tes;
3. menghasilkan ranking jurusan dan karier;
4. membedakan safe, near, stretch, dan conditional match;
5. menjelaskan alasan cocok dan kurang cocok;
6. menampilkan risiko dan tradeoff;
7. menangani data kosong dan bertentangan;
8. menghasilkan roadmap yang terhubung dengan gap;
9. menunjukkan confidence;
10. memberi langkah validasi;
11. dapat menggunakan Knowledge Object V2 secara terstruktur;
12. menjaga agency pengguna;
13. dapat dikembangkan dengan sumber data baru;
14. dapat diaudit oleh manusia;
15. tidak membuat klaim deterministik.

---

# 25. Final Architecture Statement

Assessment and Recommendation Engine V1 harus diperlakukan sebagai sistem Decision Intelligence, bukan mesin prediksi tunggal.

Kualitas engine tidak ditentukan oleh seberapa cepat engine menyebut satu jurusan atau karier. Kualitas engine ditentukan oleh kemampuannya menggabungkan bukti, melihat konflik, memahami constraint, membandingkan tradeoff, mengelola ketidakpastian, dan membantu pengguna mengambil langkah yang lebih baik.

KarirGPS harus memberi pengguna tiga hal:

1. **clarity**, agar pengguna memahami dirinya dan pilihan yang tersedia;
2. **comparability**, agar pengguna dapat membandingkan pilihan secara adil;
3. **actionability**, agar pengguna mengetahui langkah berikutnya.

Dengan prinsip tersebut, engine dapat berkembang dari assessment-based recommendation menjadi AI Career Decision System yang terus belajar dari evidence, perubahan pengguna, dan perubahan dunia kerja tanpa mengambil alih keputusan manusia.
