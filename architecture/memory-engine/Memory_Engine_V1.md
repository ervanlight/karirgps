# Memory Engine V1

**Product:** KarirGPS  
**Document Type:** Longitudinal Intelligence Architecture Blueprint  
**Version:** 1.0  
**Status:** Design Baseline  
**Target Path:** `architecture/memory-engine/Memory_Engine_V1.md`

---

## 0. Executive Summary

Memory Engine V1 adalah lapisan longitudinal intelligence pada KarirGPS. Engine ini membuat KarirGPS mampu memahami perjalanan pendidikan, pengembangan keterampilan, keputusan, pengalaman, dan perubahan aspirasi pengguna dalam rentang waktu bertahun-tahun.

Memory Engine tidak menyimpan manusia sebagai profil statis. Engine menyimpan rangkaian bukti yang menunjukkan siapa pengguna pada suatu waktu, apa yang sedang dihadapi, apa yang berubah, mengapa perubahan itu mungkin terjadi, dan seberapa yakin KarirGPS terhadap interpretasi tersebut.

Tujuan utama Memory Engine adalah memastikan setiap rekomendasi baru mempertimbangkan perjalanan pengguna, bukan hanya data terbaru atau hasil asesmen pertama. Sebagai contoh, pengguna dapat memiliki urutan perjalanan berikut:

1. Pada 2026, pengguna ingin menjadi dokter.
2. Pada 2027, pengguna mulai tertarik pada teknologi.
3. Pada 2028, pengguna masuk Teknik Informatika.
4. Pada 2029, performa akademik menurun.
5. Pada 2030, pengguna menyelesaikan magang backend.
6. Pada 2031, pengguna ingin menjadi Product Manager.
7. Pada 2032, pengguna melakukan career switch.
8. Pada 2035, pengguna membangun startup.

Memory Engine tidak menilai urutan tersebut sebagai inkonsistensi semata. Engine membacanya sebagai career evolution. Setiap titik menjadi evidence yang dapat memperbaiki reasoning, rekomendasi, roadmap, dan dukungan keputusan berikutnya.

### 0.1 Mengapa Memory Engine Penting

Tanpa Memory Engine, AI cenderung melakukan tiga kesalahan utama:

- memberikan rekomendasi yang sama berulang kali;
- menggunakan informasi lama seolah masih berlaku;
- gagal memahami perubahan manusia sebagai bagian normal dari perkembangan.

Memory Engine memungkinkan KarirGPS untuk:

- membedakan kondisi saat ini dari riwayat masa lalu;
- mengenali tren, pola, titik balik, dan perubahan arah;
- mengingat keputusan beserta alasan dan hasilnya;
- menghubungkan asesmen dengan tindakan nyata;
- mengukur kemajuan terhadap roadmap;
- mengurangi pertanyaan berulang;
- menunjukkan perkembangan pengguna secara faktual;
- memberikan rekomendasi yang semakin relevan dari waktu ke waktu;
- mempertahankan user agency melalui kontrol, koreksi, dan penghapusan memori.

### 0.2 Perbedaan Memory Engine dan Chat History

Chat History adalah rekaman percakapan. Memory Engine adalah sistem evidence dan reasoning longitudinal.

| Aspek | Chat History | Memory Engine |
|---|---|---|
| Bentuk | Urutan pesan | Memory Object terstruktur dan saling terhubung |
| Fokus | Apa yang pernah dibicarakan | Apa yang relevan untuk memahami perjalanan pengguna |
| Waktu | Waktu percakapan | Waktu kejadian, waktu berlaku, dan waktu pencatatan |
| Perubahan | Sulit membedakan data lama dan baru | Menyimpan versi, perubahan, dan supersession |
| Kualitas | Semua pesan terlihat setara | Setiap memory memiliki source, evidence, confidence, dan importance |
| Konflik | Pernyataan dapat saling bertentangan | Konflik dideteksi, dijelaskan, dan diselesaikan secara temporal |
| Penghapusan | Menghapus percakapan | Menghapus, menonaktifkan, mengoreksi, atau membatasi memory tertentu |
| Retrieval | Mencari teks yang mirip | Mengambil memory yang paling relevan untuk keputusan saat ini |
| Penjelasan | Tidak memiliki reasoning trace | Menjelaskan memory apa yang memengaruhi rekomendasi |
| Tujuan | Kontinuitas percakapan | Longitudinal career intelligence |

Memory Engine tidak harus menyimpan seluruh percakapan. Engine hanya membentuk memory ketika informasi memenuhi kriteria kegunaan, izin, relevansi, dan kualitas evidence.

### 0.3 Peran dalam Career Intelligence Operating System

Memory Engine menjadi penghubung antara:

- pengguna yang terus berkembang;
- Knowledge Object V2 yang memodelkan dunia pendidikan dan karier;
- Assessment & Recommendation Engine V1 yang menghasilkan rekomendasi;
- roadmap yang berubah berdasarkan kemajuan;
- outcome nyata yang menunjukkan apakah keputusan sebelumnya efektif.

Secara konseptual, Memory Engine menjawab lima pertanyaan:

1. Apa yang pernah terjadi?
2. Apa yang masih berlaku sekarang?
3. Apa yang berubah?
4. Bukti apa yang mendukung perubahan tersebut?
5. Memory mana yang relevan untuk keputusan saat ini?

---

## 1. Scope dan Batasan

### 1.1 Scope

Memory Engine V1 mencakup kemampuan konseptual berikut:

1. menangkap memory dari sumber yang diizinkan;
2. mengklasifikasikan memory berdasarkan jenis dan fungsi;
3. menyimpan konteks waktu dan versi;
4. menghubungkan memory dalam graph;
5. mengelola confidence, importance, recency, dan sensitivity;
6. mendeteksi perubahan dan konflik;
7. menentukan memory yang masih aktif, perlu ditinjau ulang, atau tidak lagi berlaku;
8. mengambil memory yang relevan untuk reasoning;
9. meringkas perjalanan panjang tanpa menghapus evidence penting;
10. mendukung reflection, learning, dan career journey;
11. memberikan kontrol kepada pengguna;
12. mengevaluasi kualitas longitudinal intelligence.

### 1.2 Batasan

Memory Engine V1 tidak melakukan hal berikut:

- menganggap memory sebagai kebenaran absolut;
- mendiagnosis kepribadian, kondisi mental, atau kemampuan klinis;
- menyimpan semua interaksi tanpa seleksi;
- menyimpulkan karakter pengguna dari satu kejadian;
- mempertahankan memory sensitif tanpa tujuan yang jelas;
- menggunakan kegagalan masa lalu untuk membatasi kesempatan baru;
- mengubah memory pengguna tanpa provenance;
- menghapus riwayat penting secara diam-diam;
- membuat keputusan pendidikan atau karier atas nama pengguna;
- menyamakan tidak adanya aktivitas dengan tidak adanya motivasi;
- menganggap perubahan tujuan sebagai kegagalan konsistensi.

### 1.3 Hubungan dengan Engine Lain

Memory Engine tidak menggantikan engine lain.

- **Knowledge Object V2** menjelaskan dunia jurusan, karier, keterampilan, hubungan, syarat, risiko, dan dampak AI.
- **Assessment & Recommendation Engine V1** menilai kecocokan dan membantu pengambilan keputusan.
- **Memory Engine V1** menjelaskan perjalanan pengguna, perubahan, konteks, dan bukti longitudinal.

Assessment & Recommendation Engine boleh membaca memory yang relevan. Memory Engine boleh menerima outcome dari rekomendasi, roadmap, dan keputusan. Kedua engine tetap memiliki tanggung jawab terpisah agar reasoning dapat diaudit.

---

## 2. Prinsip Memory

### 2.1 Human Evolves

Manusia berubah. Minat, tujuan, nilai kerja, kemampuan, preferensi, dan batasan dapat berubah karena usia, pengalaman, pendidikan, lingkungan, peluang, atau peristiwa hidup.

Memory Engine harus menyimpan perubahan sebagai bagian normal dari perkembangan. Engine tidak boleh memaksa profil lama tetap menjadi identitas pengguna.

### 2.2 Memory Is Contextual

Pernyataan hanya dapat dipahami bersama konteksnya.

Contoh:

- “Saya tidak suka matematika” dapat berarti tidak menyukai metode pengajaran tertentu.
- “Saya ingin bekerja dari rumah” dapat berlaku saat pengguna sedang merawat keluarga.
- “Saya ingin gaji tinggi” dapat memiliki arti berbeda pada tahap eksplorasi dan tahap career switch.

Setiap memory harus membawa konteks keputusan, waktu, sumber, dan ruang lingkup berlaku.

### 2.3 Memory Is Evidence, Not Absolute Truth

Memory merupakan evidence yang memiliki tingkat kepercayaan. Memory dapat berasal dari self-report, asesmen, perilaku, dokumen, feedback, atau hasil nyata. Kualitas setiap sumber berbeda.

Engine harus membedakan:

- apa yang dikatakan pengguna;
- apa yang diamati sistem;
- apa yang berasal dari dokumen;
- apa yang disimpulkan AI;
- apa yang telah dikonfirmasi pengguna.

### 2.4 Memory Is Explainable

KarirGPS harus dapat menjelaskan:

- memory apa yang digunakan;
- mengapa memory tersebut relevan;
- seberapa baru memory tersebut;
- apakah memory merupakan fakta, preferensi, interpretasi, atau hipotesis;
- bagaimana memory memengaruhi rekomendasi.

### 2.5 Memory Can Change

Memory dapat diperbarui, dikoreksi, dipersempit, diperluas, atau digantikan. Pembaruan tidak selalu berarti data lama salah. Data lama mungkin benar untuk periode sebelumnya.

### 2.6 Memory Can Expire

Sebagian memory kehilangan relevansi setelah waktu tertentu.

Contoh:

- preferensi lokasi sementara;
- target gaji pada tahap magang;
- jadwal belajar semester tertentu;
- kendala perangkat;
- mata pelajaran yang sedang diambil.

Expiration tidak harus menghapus memory. Expiration menurunkan pengaruhnya terhadap reasoning saat ini.

### 2.7 Memory Can Be Corrected

Pengguna memiliki hak untuk mengoreksi memory, termasuk memory yang berasal dari inference AI. Koreksi pengguna harus menjadi evidence utama, tetapi riwayat koreksi dapat tetap dipertahankan jika pengguna mengizinkannya dan jika dibutuhkan untuk memahami perubahan.

### 2.8 Memory Must Preserve Time

Engine harus membedakan:

- kapan informasi dicatat;
- kapan kejadian terjadi;
- sejak kapan informasi berlaku;
- sampai kapan informasi berlaku;
- kapan informasi terakhir dikonfirmasi.

Tanpa perbedaan ini, AI dapat salah menggunakan data lama sebagai kondisi saat ini.

### 2.9 Memory Must Preserve Provenance

Setiap memory harus memiliki sumber yang dapat ditelusuri. Provenance mencegah AI menciptakan “fakta pribadi” tanpa dasar.

### 2.10 Memory Should Be Selective

Tidak semua informasi layak menjadi memory jangka panjang. Memory Engine harus menghindari akumulasi informasi remeh, duplikat, sesaat, dan tidak relevan.

### 2.11 Memory Must Respect User Agency

Pengguna harus dapat:

- melihat memory;
- memahami kegunaannya;
- mengoreksi memory;
- menghapus memory;
- menonaktifkan kategori memory;
- mengatur personalisasi;
- mengetahui ketika memory memengaruhi rekomendasi.

### 2.12 Sensitive Memory Requires Stronger Protection

Memory sensitif harus memiliki alasan penggunaan yang jelas, tingkat akses terbatas, dan kontrol pengguna yang lebih kuat. Sensitivity berbeda dari importance. Memory dapat penting tetapi tidak sensitif, atau sensitif tetapi tidak relevan untuk sebagian besar keputusan.

### 2.13 Negative Events Must Not Become Permanent Labels

Nilai turun, gagal seleksi, berhenti dari proyek, atau mengubah jurusan tidak boleh berubah menjadi label tetap seperti “tidak mampu”, “tidak konsisten”, atau “mudah menyerah”. Engine harus menyimpan kejadian, konteks, respons, dan pelajaran yang muncul.

### 2.14 Recent Does Not Always Mean More Important

Recency penting, tetapi kejadian lama dapat tetap sangat relevan. Contohnya adalah pilihan nilai hidup yang stabil, pencapaian besar, sertifikasi aktif, atau pengalaman yang membentuk arah karier.

### 2.15 Explicit Evidence Has Priority Over Hidden Inference

Ketika pengguna menyatakan preferensi secara jelas dan konsisten, engine tidak boleh menggantinya dengan inference tersembunyi dari perilaku kecil. Inference digunakan untuk mengajukan hipotesis, bukan untuk mengendalikan profil pengguna.

### 2.16 Memory Must Support Reversibility

Pengguna dapat kembali ke jalur lama, memulai jalur baru, atau menilai ulang keputusan. Memory Engine harus mendukung pivot tanpa mengunci pengguna pada masa lalu.

### 2.17 Longitudinal Intelligence Must Produce Utility

Memory hanya bernilai jika meningkatkan kualitas keputusan, mengurangi repetisi, memperjelas perubahan, atau membantu pengguna melihat kemajuan. Memory yang tidak menghasilkan manfaat sebaiknya tidak memiliki pengaruh besar.

---

## 3. Arsitektur Konseptual Memory Engine

Memory Engine terdiri atas sepuluh lapisan fungsional.

### 3.1 Memory Capture Layer

Menerima kandidat memory dari asesmen, interaksi, roadmap, dokumen, aktivitas, feedback, dan outcome.

### 3.2 Memory Qualification Layer

Menilai apakah kandidat memory layak disimpan berdasarkan relevansi, stabilitas, consent, sensitivity, kualitas evidence, dan kemungkinan kegunaan masa depan.

### 3.3 Memory Structuring Layer

Mengubah kandidat memory menjadi Memory Object dengan tipe, waktu, source, evidence, confidence, status, dan hubungan.

### 3.4 Temporal and Versioning Layer

Mengelola waktu kejadian, waktu berlaku, waktu pencatatan, versi, perubahan, dan supersession.

### 3.5 Relationship Graph Layer

Menghubungkan memory dengan goal, skill, project, decision, career, learning activity, achievement, constraint, dan memory lain.

### 3.6 Consolidation and Compression Layer

Menggabungkan memory yang berulang, membentuk pola, membuat summary berlapis, dan mempertahankan event penting.

### 3.7 Retrieval and Relevance Layer

Memilih memory yang berguna untuk konteks reasoning saat ini.

### 3.8 Reflection and Journey Layer

Menghasilkan gambaran perkembangan, titik balik, konsistensi, pertumbuhan, dan area yang masih perlu diuji.

### 3.9 Privacy and Control Layer

Menjalankan preferensi memory, koreksi, penghapusan, pembatasan kategori, dan tingkat personalisasi.

### 3.10 Evaluation and Governance Layer

Mengukur accuracy, relevance, freshness, calibration, trust, fairness, dan manfaat longitudinal.

---

# 4. Jenis Memory

## 4.1 Prinsip Klasifikasi

Satu kejadian dapat menghasilkan lebih dari satu memory, tetapi setiap memory harus memiliki fungsi yang jelas. Klasifikasi tidak hanya berdasarkan topik. Klasifikasi juga mempertimbangkan apakah memory berisi fakta, preferensi, pengalaman, outcome, keputusan, atau inference.

## 4.2 Identity Memory

Menyimpan identitas yang dibutuhkan untuk konteks pendidikan dan karier.

Contoh:

- tahap pendidikan;
- status siswa, mahasiswa, pencari kerja, atau pekerja;
- bidang studi saat ini;
- tahap karier;
- bahasa yang digunakan;
- wilayah umum yang relevan untuk peluang.

Identity Memory harus dibatasi pada informasi yang benar-benar mendukung fungsi KarirGPS. Identitas bukan label kepribadian.

## 4.3 Preference Memory

Menyimpan pilihan atau kecenderungan yang dinyatakan pengguna.

Contoh:

- menyukai kerja hybrid;
- lebih memilih kota tertentu;
- tidak ingin pekerjaan dengan perjalanan intensif;
- menyukai proyek berbasis data;
- menghindari lingkungan yang sangat hierarkis.

Preference Memory harus memiliki stability dan context. Preferensi dapat bersifat sementara, situasional, atau stabil.

## 4.4 Interest Memory

Menyimpan bidang, topik, masalah, aktivitas, atau industri yang menarik perhatian pengguna.

Interest Memory harus membedakan:

- stated interest;
- observed exploration;
- sustained interest;
- declining interest;
- emerging interest.

Satu kali membuka topik bukan sustained interest.

## 4.5 Learning Memory

Menyimpan pengalaman dan pola belajar.

Contoh:

- metode belajar yang efektif;
- topik yang sedang dipelajari;
- kesulitan belajar;
- progress roadmap;
- checkpoint yang diselesaikan;
- pola konsistensi;
- dukungan yang membantu;
- evidence hasil belajar.

Learning Memory tidak boleh menyimpulkan kemampuan permanen hanya dari kecepatan belajar sesaat.

## 4.6 Skill Memory

Menyimpan keterampilan, tingkat penguasaan, evidence, konteks penggunaan, dan freshness.

Skill Memory harus membedakan:

- self-reported skill;
- assessed skill;
- demonstrated skill;
- credentialed skill;
- applied skill;
- dormant skill;
- emerging skill.

Pernyataan “bisa Python” berbeda dari proyek Python yang dapat diverifikasi.

## 4.7 Academic Memory

Menyimpan evidence akademik yang relevan.

Contoh:

- nilai;
- tren performa;
- mata pelajaran kuat dan lemah;
- perubahan kurikulum;
- remedial;
- prestasi;
- konteks sekolah;
- beban belajar;
- alasan penurunan atau peningkatan.

Academic Memory harus menyimpan konteks. Nilai tanpa informasi mata pelajaran, periode, tingkat kesulitan, dan kondisi tidak cukup untuk reasoning kuat.

## 4.8 Career Memory

Menyimpan pengalaman, peran, industri, tanggung jawab, dan transisi karier.

Contoh:

- pekerjaan;
- magang;
- freelance;
- volunteer;
- role shadowing;
- tanggung jawab proyek;
- perubahan jabatan;
- alasan pindah;
- exposure terhadap bidang tertentu.

## 4.9 Decision Memory

Menyimpan keputusan penting beserta konteks dan rationale.

Contoh:

- memilih jurusan;
- menolak beasiswa;
- menerima magang;
- menunda kuliah;
- memilih career switch;
- membatalkan target tertentu.

Decision Memory idealnya memuat:

- pilihan yang dipertimbangkan;
- kriteria keputusan;
- tradeoff;
- alasan pilihan;
- confidence pengguna;
- outcome setelah keputusan.

## 4.10 Goal Memory

Menyimpan tujuan pengguna pada suatu periode.

Goal dapat berupa:

- eksplorasi;
- pembelajaran;
- pendidikan;
- pekerjaan;
- pendapatan;
- lokasi;
- kontribusi;
- kepemimpinan;
- entrepreneurship;
- keseimbangan hidup.

Goal Memory harus memiliki horizon, priority, status, dan dependency.

## 4.11 Dream and Aspiration Memory

Menyimpan kemungkinan masa depan yang diinginkan pengguna, termasuk aspirasi yang belum memiliki rencana konkret.

Dream Memory tidak boleh langsung diperlakukan sebagai target operasional. Engine harus membedakan:

- dream;
- aspiration;
- intention;
- committed goal;
- active plan.

## 4.12 Work Values Memory

Menyimpan nilai yang ingin dipenuhi melalui pendidikan dan pekerjaan.

Contoh:

- stabilitas;
- otonomi;
- pendapatan;
- dampak sosial;
- kreativitas;
- status;
- pembelajaran;
- work-life balance;
- keamanan;
- kebebasan lokasi.

Work Values Memory cenderung lebih stabil daripada preferensi teknis, tetapi tetap dapat berubah.

## 4.13 Constraint Memory

Menyimpan batasan yang memengaruhi feasibility.

Contoh:

- kondisi ekonomi;
- waktu;
- akses pendidikan;
- tanggung jawab keluarga;
- preferensi lokasi;
- keterbatasan perangkat;
- persyaratan masuk;
- batas durasi studi;
- ketersediaan transportasi.

Constraint harus dibedakan menjadi:

- hard constraint;
- soft constraint;
- temporary constraint;
- negotiable constraint;
- unresolved constraint.

Constraint tidak boleh otomatis menjadi identitas permanen.

## 4.14 Project Memory

Menyimpan proyek sebagai evidence perkembangan.

Project Memory mencakup:

- tujuan proyek;
- peran pengguna;
- keterampilan yang digunakan;
- tingkat kesulitan;
- hasil;
- feedback;
- masalah yang dihadapi;
- kontribusi pengguna;
- hubungan dengan target karier.

## 4.15 Achievement Memory

Menyimpan pencapaian yang memiliki evidence dan konteks.

Contoh:

- sertifikasi;
- penghargaan;
- kelulusan;
- milestone roadmap;
- publikasi;
- produk yang diluncurkan;
- kenaikan tanggung jawab;
- keberhasilan menyelesaikan tantangan.

Achievement tidak hanya berarti penghargaan formal. Penyelesaian proyek sulit dapat menjadi achievement jika relevan.

## 4.16 Failure and Setback Memory

Menyimpan kejadian yang tidak mencapai outcome yang diinginkan.

Istilah failure digunakan sebagai kategori kejadian, bukan label pengguna.

Memory ini harus mencakup:

- target awal;
- outcome;
- faktor konteks;
- tindakan setelah kejadian;
- feedback;
- pembelajaran;
- apakah kejadian masih relevan;
- apakah pengguna ingin memory ini dipakai dalam reflection.

## 4.17 Reflection Memory

Menyimpan interpretasi yang dinyatakan pengguna terhadap pengalaman.

Contoh:

- “Saya menyadari saya lebih menikmati koordinasi daripada coding penuh waktu.”
- “Saya gagal bukan karena tidak mampu, tetapi karena persiapan saya terlalu pendek.”
- “Setelah magang, saya tidak lagi tertarik pada bidang klinis.”

Reflection Memory memiliki nilai tinggi karena membantu memahami makna pengalaman dari perspektif pengguna.

## 4.18 Behavior Memory

Menyimpan pola tindakan yang relevan, dengan batas etis ketat.

Contoh:

- konsistensi menyelesaikan roadmap;
- pola menyimpan lowongan tertentu;
- frekuensi mengeksplorasi bidang;
- checkpoint yang sering ditunda;
- pilihan alternatif yang berulang.

Behavior Memory tidak boleh dibentuk dari aktivitas kecil secara berlebihan. Perilaku harus memiliki periode observasi, konteks, dan threshold yang memadai.

## 4.19 Curiosity Memory

Menyimpan topik yang berulang kali dieksplorasi, meskipun belum menjadi minat atau tujuan.

Curiosity penting untuk menemukan emerging direction. Engine harus menghindari mengubah rasa ingin tahu menjadi kesimpulan karier terlalu cepat.

## 4.20 Motivation Memory

Menyimpan tingkat kesiapan, komitmen, alasan bertindak, dan perubahan motivasi.

Motivation harus dipandang sebagai state yang dapat berubah. Engine tidak boleh menjadikan periode motivasi rendah sebagai sifat permanen.

## 4.21 Relationship Memory

Menyimpan hubungan yang relevan terhadap keputusan pendidikan dan karier.

Contoh:

- mentor;
- guru;
- konselor;
- orang tua atau wali;
- rekan proyek;
- referral profesional;
- komunitas belajar.

Relationship Memory harus dibatasi pada fungsi hubungan, pengaruh keputusan, dan consent. Engine tidak perlu menyimpan detail pribadi pihak lain yang tidak relevan.

## 4.22 Feedback Memory

Menyimpan feedback yang diterima pengguna atau diberikan pengguna kepada KarirGPS.

Contoh:

- feedback mentor;
- evaluasi proyek;
- alasan menolak rekomendasi;
- penilaian terhadap roadmap;
- ketepatan rekomendasi sebelumnya;
- feedback setelah mencoba sebuah jalur.

## 4.23 Outcome Memory

Menyimpan hasil nyata dari keputusan atau tindakan.

Contoh:

- diterima atau ditolak;
- lulus atau belum lulus;
- menyelesaikan roadmap;
- mendapat pekerjaan;
- berpindah industri;
- meningkatnya performa;
- target tidak tercapai;
- kepuasan setelah keputusan.

Outcome Memory sangat penting untuk mengukur apakah KarirGPS membantu pengguna secara nyata.

## 4.24 Assessment Memory

Menyimpan hasil asesmen beserta versi instrumen, waktu, kondisi, dan keterbatasan interpretasi.

Assessment Memory harus membedakan:

- raw result;
- normalized result;
- interpretation;
- confidence;
- longitudinal change;
- applicability period.

Hasil asesmen tidak boleh menjadi identitas permanen.

## 4.25 Preference Rejection Memory

Menyimpan apa yang tidak diinginkan pengguna dan alasannya.

Contoh:

- tidak tertarik pada profesi tertentu;
- menolak pekerjaan shift;
- tidak ingin pindah kota;
- tidak memilih jurusan karena biaya;
- menolak rekomendasi karena nilai hidup.

Rejection Memory membantu engine menghindari rekomendasi berulang yang tidak relevan. Memory ini harus ditinjau ulang jika konteks berubah.

## 4.26 Milestone Memory

Menyimpan titik yang menandai perubahan tahap.

Contoh:

- mulai kuliah;
- memilih konsentrasi;
- proyek pertama;
- magang pertama;
- pekerjaan pertama;
- promosi;
- career switch;
- memulai usaha;
- kembali belajar.

## 4.27 Transition Memory

Menyimpan perpindahan dari satu state ke state lain.

Contoh:

- siswa menjadi mahasiswa;
- mahasiswa menjadi pekerja;
- individual contributor menjadi manager;
- employee menjadi founder;
- bidang medis menjadi teknologi kesehatan.

Transition Memory penting karena kebutuhan rekomendasi berubah pada setiap fase.

## 4.28 Hypothesis Memory

Menyimpan dugaan AI yang belum dikonfirmasi.

Contoh:

- kemungkinan minat terhadap product management sedang meningkat;
- kemungkinan kendala utama bukan kemampuan, tetapi kurangnya exposure;
- kemungkinan preferensi remote hanya bersifat sementara.

Hypothesis Memory harus jelas dilabeli sebagai inference, memiliki confidence rendah atau menengah, dan tidak boleh diperlakukan sebagai fakta.

## 4.29 Timeline Memory

Menyimpan urutan event, state, milestone, transition, dan period summary agar perjalanan pengguna dapat direkonstruksi.

Timeline Memory bukan duplikasi seluruh memory. Timeline berfungsi sebagai kerangka temporal yang menghubungkan memory penting.

## 4.30 Meta-Memory

Menyimpan informasi tentang kualitas dan pengelolaan memory itu sendiri.

Contoh:

- kategori memory dinonaktifkan pengguna;
- sumber tertentu tidak diizinkan;
- memory perlu dikonfirmasi ulang;
- tingkat personalisasi yang dipilih;
- memory yang sedang disengketakan;
- preferensi reflection pengguna.

---

# 5. Memory Timeline

## 5.1 Tujuan Timeline

Memory Timeline membuat engine dapat memahami perubahan sebagai urutan temporal, bukan kumpulan fakta tanpa waktu.

Timeline harus mendukung tiga bentuk informasi:

1. **Event**: sesuatu terjadi pada titik waktu tertentu.
2. **State**: kondisi berlaku selama suatu periode.
3. **Transition**: perpindahan dari state sebelumnya ke state baru.

## 5.2 Empat Dimensi Waktu

Setiap memory dapat memiliki empat dimensi waktu.

### A. Event Time

Kapan kejadian terjadi.

Contoh: magang dimulai pada Juli 2030.

### B. Valid Time

Periode ketika informasi dianggap berlaku.

Contoh: preferensi kerja remote berlaku selama 2030 sampai 2031.

### C. Recorded Time

Kapan KarirGPS menerima atau mencatat informasi.

Contoh: pengguna mengunggah sertifikat pada Januari 2031 untuk pelatihan yang selesai pada November 2030.

### D. Confirmed Time

Kapan pengguna atau evidence lain terakhir mengonfirmasi bahwa informasi masih benar.

Keempat waktu ini tidak selalu sama.

## 5.3 Current State dan Historical State

Engine harus dapat menjawab:

- apa kondisi pengguna sekarang;
- apa kondisi pengguna pada periode tertentu;
- apa yang berubah di antara dua periode;
- memory apa yang menyebabkan perubahan state.

Historical state tidak dihapus ketika current state berubah.

## 5.4 Snapshot dan Delta

Timeline menggunakan dua bentuk representasi konseptual.

### Snapshot

Ringkasan kondisi pengguna pada suatu titik atau periode.

Contoh snapshot 2028:

- mahasiswa Teknik Informatika;
- minat utama software engineering;
- kemampuan coding awal;
- target magang dalam dua tahun;
- kendala ekonomi menengah;
- preferensi lokasi fleksibel.

### Delta

Perubahan dari snapshot sebelumnya.

Contoh delta 2029:

- nilai matematika turun;
- beban organisasi meningkat;
- minat coding tetap;
- motivation turun sementara;
- target magang tidak berubah.

Delta lebih informatif daripada mengganti seluruh profil.

## 5.5 Timeline Anchors

Timeline harus mempertahankan anchor yang sulit dihilangkan oleh compression.

Anchor utama:

- keputusan besar;
- perubahan jurusan;
- kelulusan;
- pekerjaan baru;
- career switch;
- proyek signifikan;
- pencapaian utama;
- setback yang mengubah arah;
- perubahan constraint besar;
- perubahan tujuan jangka panjang;
- perubahan nilai kerja;
- user correction penting.

## 5.6 Temporal Status

Setiap memory dapat memiliki status temporal:

- current;
- historical;
- upcoming;
- temporary;
- recurring;
- uncertain period;
- no longer applicable;
- awaiting confirmation.

## 5.7 Contoh Timeline Longitudinal

### 2026

- Assessment Memory: Holland Code menunjukkan Investigative dan Social.
- Dream Memory: ingin menjadi dokter.
- Constraint Memory: biaya pendidikan menjadi perhatian.
- Goal Memory: meningkatkan nilai biologi dan kimia.

### 2027

- Curiosity Memory: eksplorasi teknologi kesehatan meningkat.
- Project Memory: membuat proyek data sederhana.
- Reflection Memory: lebih menikmati analisis daripada interaksi klinis.
- Interest Memory: minat teknologi mulai meningkat.

### 2028

- Decision Memory: memilih Teknik Informatika.
- Transition Memory: siswa menjadi mahasiswa.
- Goal Memory: menguasai programming fundamentals.

### 2029

- Academic Memory: nilai menurun pada dua mata kuliah.
- Constraint Memory: beban kerja paruh waktu meningkat.
- Reflection Memory: kesulitan terjadi karena manajemen waktu, bukan hilangnya minat.

### 2030

- Career Memory: magang backend.
- Skill Memory: API design dan database fundamentals telah diterapkan dalam proyek.
- Feedback Memory: komunikasi lintas fungsi perlu ditingkatkan.

### 2031

- Interest Memory: meningkat pada product strategy.
- Reflection Memory: lebih tertarik menghubungkan pengguna, bisnis, dan teknologi.
- Goal Memory: menjadi Product Manager.

### 2032

- Decision Memory: career switch ke associate product role.
- Transition Memory: engineering track menuju product track.

### 2035

- Career Memory: founder startup.
- Achievement Memory: meluncurkan produk pertama.
- Goal Memory: membangun organisasi dan product leadership.

Timeline tersebut menunjukkan continuity. KarirGPS dapat menjelaskan bahwa Product Manager bukan arah yang muncul tanpa dasar. Arah tersebut berkembang dari technical exposure, feedback komunikasi, minat strategi, dan reflection pengguna.

## 5.8 Temporal Reasoning Rules

1. Memory terbaru memiliki prioritas lebih tinggi untuk state saat ini, kecuali evidence lama lebih stabil atau masih aktif.
2. Historical memory tetap dapat digunakan untuk menjelaskan pola dan perubahan.
3. Memory yang tidak memiliki valid time harus digunakan secara hati-hati.
4. Goal lama tidak boleh diperlakukan sebagai goal aktif tanpa konfirmasi.
5. Assessment lama harus mengalami recency adjustment.
6. Skill yang lama tidak digunakan dapat berstatus dormant, bukan otomatis hilang.
7. Constraint sementara harus ditinjau ulang setelah periode berlaku.
8. Perubahan mendadak membutuhkan context check sebelum dianggap permanen.

---

# 6. Memory Object

## 6.1 Tujuan Memory Object

Memory Object adalah unit konseptual terkecil yang dapat disimpan, dihubungkan, dievaluasi, diambil, dijelaskan, dan dikendalikan pengguna.

Memory Object bukan satu kalimat bebas. Object harus memiliki atribut yang membantu engine memahami isi, kualitas, waktu, risiko, dan fungsi memory.

## 6.2 Atribut Inti

### 1. Memory ID

Identitas unik memory. Digunakan untuk traceability, hubungan, koreksi, dan versioning.

### 2. Memory Type

Kategori memory, seperti Skill Memory, Goal Memory, Decision Memory, atau Reflection Memory.

### 3. Memory Statement

Representasi ringkas mengenai apa yang diingat.

Contoh: “Pengguna memilih Teknik Informatika pada 2028 setelah membandingkan Kedokteran, Sistem Informasi, dan Teknik Informatika.”

### 4. Memory Form

Menjelaskan bentuk pengetahuan:

- fact;
- event;
- preference;
- goal;
- constraint;
- decision;
- outcome;
- reflection;
- pattern;
- hypothesis;
- summary.

### 5. Source

Asal informasi.

Contoh:

- direct user statement;
- assessment;
- document;
- portfolio;
- roadmap activity;
- mentor feedback;
- behavior signal;
- AI inference;
- external verified source.

### 6. Source Reliability

Penilaian konseptual terhadap kekuatan sumber.

Contoh:

- user-confirmed;
- documented;
- assessed;
- observed repeatedly;
- single self-report;
- inferred;
- unverified.

Source reliability tidak menentukan kebenaran secara mutlak. Fungsinya adalah mengkalibrasi confidence.

### 7. Evidence

Bukti yang mendukung memory.

Evidence dapat berupa:

- pernyataan pengguna;
- skor asesmen;
- nilai;
- dokumen;
- link portofolio;
- hasil proyek;
- feedback;
- urutan tindakan;
- outcome.

### 8. Evidence Count

Jumlah evidence independen yang mendukung memory. Banyak evidence dari sumber yang sama tidak selalu berarti evidence independen.

### 9. Timestamp

Waktu memory dibuat atau diterima.

### 10. Event Time

Waktu kejadian yang direpresentasikan.

### 11. Valid From

Waktu mulai memory berlaku.

### 12. Valid Until

Waktu memory berhenti berlaku, jika diketahui.

### 13. Last Confirmed At

Waktu terakhir memory dikonfirmasi oleh pengguna atau evidence kuat.

### 14. Confidence

Tingkat keyakinan engine terhadap representasi memory.

Confidence dipengaruhi oleh:

- kualitas sumber;
- jumlah evidence;
- konsistensi;
- recency;
- kejelasan konteks;
- konfirmasi pengguna;
- kekuatan inference.

### 15. Confidence Basis

Penjelasan singkat mengenai alasan confidence.

Contoh: “High confidence karena dinyatakan langsung oleh pengguna dan didukung keputusan penerimaan program studi.”

### 16. Importance

Seberapa penting memory bagi pemahaman perjalanan pengguna secara umum.

### 17. Decision Relevance

Seberapa relevan memory untuk jenis keputusan tertentu.

Memory dapat memiliki importance tinggi tetapi tidak relevan untuk keputusan saat ini.

### 18. Recency

Seberapa baru memory dibandingkan konteks saat ini.

### 19. Stability

Perkiraan seberapa stabil informasi dari waktu ke waktu.

Contoh:

- stable;
- moderately stable;
- situational;
- volatile;
- unknown.

### 20. Sensitivity

Tingkat sensitivitas informasi.

Contoh:

- standard;
- personal;
- sensitive;
- highly restricted.

### 21. Consent Scope

Menjelaskan izin penggunaan memory.

Contoh:

- use for current session;
- use for personalization;
- use for roadmap;
- use for reflection;
- do not use for recommendations;
- user-disabled.

### 22. User Visibility

Menentukan apakah memory dapat ditampilkan dalam memory viewer dan bagaimana penjelasannya diberikan.

Prinsip default adalah user-visible, kecuali terdapat alasan keselamatan atau keamanan yang sah.

### 23. Status

Status epistemik dan operasional memory.

Nilai konseptual:

- candidate;
- active;
- confirmed;
- inferred;
- disputed;
- superseded;
- expired;
- archived;
- disabled;
- deleted;
- pending review.

### 24. Version

Versi memory setelah koreksi atau pembaruan.

### 25. Supersedes

Referensi ke memory sebelumnya yang digantikan untuk current state.

### 26. Superseded By

Referensi ke memory baru yang menggantikannya.

### 27. Relationships

Hubungan dengan memory atau objek lain.

Contoh:

- supports;
- contradicts;
- caused_by;
- influenced;
- resulted_in;
- depends_on;
- part_of;
- evidence_for;
- changed_from;
- related_to;
- achieved_by;
- blocked_by.

### 28. Dependencies

Kondisi yang harus benar agar memory tetap berlaku.

Contoh: preferensi kerja remote bergantung pada tanggung jawab keluarga yang masih aktif.

### 29. Expiration Policy

Aturan kapan memory perlu ditinjau ulang, diturunkan pengaruhnya, atau dianggap tidak aktif.

### 30. Review Date

Waktu yang disarankan untuk konfirmasi ulang.

### 31. Retention Class

Kelas retensi berdasarkan importance, sensitivity, dan kegunaan longitudinal.

### 32. Tags

Label untuk retrieval dan grouping.

Contoh:

- software-engineering;
- career-switch;
- location;
- financial-constraint;
- high-priority-goal;
- assessment-2028.

### 33. Context

Konteks ketika memory terbentuk.

Contoh:

- memilih jurusan;
- semester berat;
- menjelang kelulusan;
- setelah magang;
- saat pindah kota;
- eksplorasi awal.

### 34. Scope

Batas area penerapan memory.

Contoh: “Tidak menyukai matematika tingkat lanjut” tidak sama dengan “tidak menyukai seluruh aktivitas numerik.”

### 35. Polarity

Menunjukkan apakah memory berisi kecenderungan positif, negatif, netral, atau campuran terhadap objek tertentu.

### 36. Derivation Type

Menjelaskan apakah memory:

- directly asserted;
- extracted;
- computed;
- inferred;
- summarized;
- user-corrected.

### 37. Explanation Trace

Jejak ringkas yang menjelaskan bagaimana memory dibentuk dan mengapa memory digunakan.

### 38. Influence Limit

Batas seberapa kuat memory boleh memengaruhi reasoning.

Hypothesis Memory dan Behavior Memory umumnya memiliki influence limit lebih rendah daripada user-confirmed decision atau documented outcome.

### 39. Related Knowledge Objects

Hubungan dengan objek dalam Knowledge Object V2, seperti career, major, skill, work environment, decision factor, atau roadmap item.

### 40. Owner and Subject

Menjelaskan siapa pemilik dan siapa subjek memory. Hal ini penting ketika memory melibatkan mentor, orang tua, atau anggota tim.

## 6.3 Memory Object Quality Levels

### Level 0: Raw Candidate

Informasi baru yang belum dinilai dan belum boleh memengaruhi reasoning penting.

### Level 1: Structured Candidate

Informasi telah diklasifikasikan, tetapi evidence atau konteks belum cukup.

### Level 2: Active Memory

Memory memenuhi syarat minimum dan dapat digunakan dengan influence terbatas.

### Level 3: Confirmed Memory

Memory telah dikonfirmasi pengguna atau didukung evidence kuat.

### Level 4: Longitudinal Anchor

Memory penting yang menjelaskan milestone, transition, keputusan besar, atau perubahan arah.

## 6.4 Distinction antara Fact, Interpretation, dan Hypothesis

Engine wajib membedakan tiga bentuk berikut.

### Fact

“Pengguna menyelesaikan magang backend pada 2030.”

### Interpretation

“Magang tersebut meningkatkan minat pengguna pada product development.”

### Hypothesis

“Pengguna mungkin lebih cocok pada peran product daripada backend engineering murni.”

Ketiganya dapat terhubung, tetapi tidak boleh dilebur menjadi satu pernyataan tanpa label.

---

# 7. Memory Lifecycle

## 7.1 Tahap 1: Capture

Engine menerima kandidat memory dari sumber yang diizinkan.

Capture tidak berarti memory langsung aktif.

## 7.2 Tahap 2: Qualification

Engine menilai kandidat berdasarkan:

- relevansi jangka panjang;
- kualitas evidence;
- stabilitas;
- sensitivity;
- consent;
- uniqueness;
- potensi penggunaan;
- risiko salah interpretasi.

Kandidat ditolak atau tidak disimpan ketika:

- bersifat remeh dan sesaat;
- tidak relevan dengan fungsi KarirGPS;
- terlalu sensitif tanpa kebutuhan;
- merupakan dugaan lemah;
- duplikat tanpa informasi baru;
- pengguna tidak memberi izin;
- konteksnya terlalu ambigu.

## 7.3 Tahap 3: Structuring

Kandidat yang lolos diubah menjadi Memory Object. Engine menambahkan tipe, waktu, source, evidence, confidence, status, dan hubungan.

## 7.4 Tahap 4: Validation

Engine memeriksa:

- apakah memory bertentangan dengan memory aktif;
- apakah memory memiliki konteks waktu;
- apakah scope terlalu luas;
- apakah inference melampaui evidence;
- apakah memory perlu konfirmasi pengguna;
- apakah sensitivity dan consent sesuai.

## 7.5 Tahap 5: Activation

Memory menjadi aktif ketika memenuhi threshold kualitas sesuai jenisnya.

Aktivasi tidak membuat memory menjadi kebenaran permanen.

## 7.6 Tahap 6: Enrichment

Memory dapat diperkaya oleh evidence baru.

Contoh:

- Skill Memory awal berasal dari self-report.
- Setelah proyek selesai, memory mendapat demonstrated evidence.
- Setelah sertifikasi, memory mendapat credential evidence.
- Setelah enam bulan tanpa penggunaan, freshness menurun.

## 7.7 Tahap 7: Consolidation

Memory yang berulang atau sangat mirip dapat dikonsolidasikan.

Contoh:

- beberapa aktivitas eksplorasi desain;
- beberapa proyek kecil desain;
- feedback berulang tentang visual thinking.

Consolidation dapat menghasilkan pattern memory seperti “minat desain konsisten selama 18 bulan.” Event individual tetap tersedia jika penting.

## 7.8 Tahap 8: Update

Update terjadi ketika informasi lama masih relevan tetapi atributnya berubah.

Contoh:

- tingkat skill berubah dari beginner menjadi intermediate;
- goal berubah deadline;
- constraint ekonomi menjadi lebih ringan;
- preferensi lokasi diperluas.

## 7.9 Tahap 9: Supersession

Supersession digunakan ketika memory baru menggantikan current state lama.

Contoh:

- goal aktif “menjadi dokter” digantikan oleh “menjadi software engineer.”

Memory lama tetap historical. Engine tidak menampilkan goal lama sebagai current goal.

## 7.10 Tahap 10: Reconfirmation

Memory tertentu harus dikonfirmasi ulang berdasarkan:

- usia memory;
- tingkat volatility;
- dampak terhadap keputusan;
- konflik dengan evidence baru;
- perubahan tahap hidup;
- permintaan pengguna.

Pertanyaan konfirmasi harus spesifik dan tidak menghakimi.

Contoh:

“Pada 2028 kamu memilih untuk tidak pindah kota karena biaya. Apakah batasan itu masih berlaku untuk pilihan kerja saat ini?”

## 7.11 Tahap 11: Decay

Decay menurunkan influence memory ketika:

- memory semakin lama;
- tidak ada konfirmasi;
- kondisi konteks telah berubah;
- memory bersifat volatile;
- evidence baru lebih kuat.

Decay tidak selalu menurunkan importance historical.

## 7.12 Tahap 12: Expiration

Memory berstatus expired ketika periode berlaku berakhir atau engine tidak lagi boleh menggunakannya sebagai kondisi aktif.

Expired memory dapat tetap dipakai untuk timeline dan reflection jika diizinkan.

## 7.13 Tahap 13: Archival

Memory diarsipkan ketika jarang dibutuhkan untuk reasoning aktif, tetapi masih memiliki nilai sejarah.

Contoh:

- preferensi kegiatan ekstrakurikuler sekolah setelah pengguna bekerja beberapa tahun;
- roadmap lama yang telah selesai;
- assessment awal yang telah digantikan beberapa assessment baru.

## 7.14 Tahap 14: Disable

Pengguna dapat menonaktifkan memory tanpa menghapusnya. Memory tetap terlihat bagi pengguna, tetapi tidak digunakan untuk personalisasi atau rekomendasi.

## 7.15 Tahap 15: Correction

Koreksi harus menghasilkan:

- nilai yang dikoreksi;
- waktu koreksi;
- pihak yang mengoreksi;
- alasan, jika diberikan;
- status versi lama;
- dampak terhadap summary dan recommendation.

## 7.16 Tahap 16: Deletion

Pengguna dapat menghapus memory. Penghapusan harus berlaku terhadap penggunaan reasoning dan personalisasi.

Dokumen desain ini tidak menentukan mekanisme teknis penyimpanan. Prinsipnya adalah memory yang dihapus tidak boleh terus memengaruhi AI secara tersembunyi.

## 7.17 Tahap 17: Outcome Closure

Goal, decision, roadmap, dan project perlu ditutup dengan outcome jika tersedia.

Closure menghubungkan:

- rencana;
- tindakan;
- hasil;
- reflection;
- pelajaran;
- goal berikutnya.

## 7.18 Lifecycle Berdasarkan Jenis Memory

| Jenis | Pola Lifecycle Utama |
|---|---|
| Identity | update ketika tahap berubah, simpan historical state |
| Preference | recency adjustment, reconfirmation berkala |
| Skill | enrichment melalui evidence, freshness decay |
| Goal | active, paused, completed, abandoned, superseded |
| Constraint | review date, resolved, persistent, superseded |
| Decision | historical anchor, hubungkan ke outcome |
| Assessment | versioned, time-bound interpretation |
| Project | active sampai completion, lalu archive sebagai evidence |
| Outcome | long-term anchor jika berdampak besar |
| Hypothesis | cepat expire jika tidak terkonfirmasi |
| Behavior | membutuhkan observasi berulang dan influence limit |

---

# 8. Memory Relationship Graph

## 8.1 Tujuan Graph

Memory tidak berdiri sendiri. Relationship Graph membuat KarirGPS memahami hubungan sebab, urutan, dukungan, konflik, dependency, dan outcome.

Contoh alur:

`Skill → Project → Feedback → Reflection → Career Interest → New Goal → Learning Roadmap → Achievement`

Graph tersebut menunjukkan bagaimana pengalaman membentuk arah baru.

## 8.2 Node Konseptual

Graph dapat menghubungkan:

- Memory Object;
- user goal;
- career;
- major;
- skill;
- project;
- assessment;
- decision;
- roadmap item;
- outcome;
- constraint;
- relationship;
- Knowledge Object V2 entity.

## 8.3 Jenis Relationship

### Temporal Relationships

- happened_before;
- happened_after;
- overlaps_with;
- active_during;
- changed_from;
- superseded_by.

### Causal and Influence Relationships

- caused_by;
- contributed_to;
- influenced;
- resulted_in;
- triggered;
- reduced;
- increased.

Causal relationship harus digunakan hati-hati. Ketika bukti sebab-akibat lemah, gunakan influenced atau associated_with.

### Evidence Relationships

- evidence_for;
- supported_by;
- contradicted_by;
- confirmed_by;
- inferred_from.

### Goal and Planning Relationships

- supports_goal;
- blocks_goal;
- prerequisite_for;
- part_of_roadmap;
- achieved_by;
- delayed_by;
- replaced_goal.

### Skill and Career Relationships

- skill_used_in;
- skill_required_by;
- skill_developed_through;
- experience_relevant_to;
- transferable_to.

### Decision Relationships

- option_considered;
- option_rejected;
- selected_option;
- rationale_for;
- tradeoff_of;
- outcome_of_decision.

### Reflection Relationships

- reflection_on;
- lesson_from;
- changed_belief_about;
- changed_preference_about.

## 8.4 Graph Reasoning Patterns

### Pattern 1: Evidence Chain

Project selesai → skill diterapkan → feedback positif → confidence skill meningkat.

### Pattern 2: Goal Formation

Curiosity berulang → project eksplorasi → reflection positif → emerging interest → goal baru.

### Pattern 3: Constraint Resolution

Constraint biaya → mencari beasiswa → menerima beasiswa → constraint resolved → pilihan pendidikan diperluas.

### Pattern 4: Career Pivot

Role lama → dissatisfaction pattern → transferable skills → exploration → upskilling → transition role.

### Pattern 5: Setback Recovery

Nilai turun → context evidence → perubahan strategi belajar → nilai pulih → reflection tentang metode belajar.

## 8.5 Graph Guardrails

1. Correlation tidak otomatis menjadi causation.
2. Relationship inference harus memiliki confidence.
3. Satu setback tidak boleh terhubung langsung ke low potential.
4. Satu behavior signal tidak boleh menjadi personality label.
5. Relationship sensitif harus mengikuti consent scope.
6. User correction dapat mengubah atau memutus hubungan yang salah.

---

# 9. Memory Importance

## 9.1 Importance Bukan Satu Skor Tunggal

Memory importance harus dilihat dari beberapa dimensi:

- longitudinal importance;
- decision relevance;
- safety importance;
- user-declared importance;
- causal centrality;
- recency;
- stability;
- uniqueness;
- sensitivity.

## 9.2 Memory yang Harus Selalu Diingat

Selalu diingat tidak berarti selalu digunakan. Artinya memory dipertahankan sebagai anchor selama pengguna tidak menghapus atau menonaktifkannya.

Kategori utama:

- keputusan pendidikan besar;
- perubahan jurusan;
- pekerjaan dan career switch;
- milestone penting;
- achievement utama;
- outcome dari rekomendasi besar;
- user correction penting;
- nilai kerja yang stabil dan terkonfirmasi;
- constraint persisten yang sangat memengaruhi feasibility;
- goal jangka panjang yang aktif;
- evidence keterampilan yang kuat;
- transition antar tahap hidup atau karier.

## 9.3 Memory yang Boleh Dilupakan atau Dikompresi

- pertanyaan eksplorasi satu kali;
- preferensi sesaat tanpa pengulangan;
- duplikasi informasi;
- aktivitas kecil tanpa outcome;
- curiosity yang tidak berlanjut;
- task rutin yang telah selesai;
- detail percakapan yang tidak memengaruhi perjalanan;
- hipotesis yang tidak pernah terkonfirmasi;
- memory lama yang kehilangan konteks dan tidak memiliki nilai historical.

## 9.4 Memory yang Harus Ditanyakan Ulang

- preferensi lokasi lama;
- target gaji lama;
- kondisi ekonomi yang mungkin berubah;
- goal yang tidak pernah diperbarui;
- constraint temporary;
- self-reported skill tanpa evidence baru;
- hasil assessment lama;
- negative preference yang dibentuk sebelum exposure nyata;
- relationship influence yang mungkin telah berubah;
- pilihan pendidikan saat pengguna memasuki tahap baru.

## 9.5 Retention Classes

### Class A: Longitudinal Anchor

Dipertahankan selama relevan dan diizinkan pengguna.

### Class B: Active Decision Memory

Dipertahankan selama keputusan atau roadmap masih berjalan.

### Class C: Contextual Memory

Dipertahankan selama konteks tertentu masih aktif.

### Class D: Reconfirmable Memory

Dapat digunakan dengan syarat telah dikonfirmasi dalam periode yang sesuai.

### Class E: Compressible Memory

Detail dapat digabung menjadi summary.

### Class F: Ephemeral Memory

Hanya digunakan dalam periode pendek dan tidak menjadi personal memory jangka panjang.

## 9.6 Importance Rules

1. User-declared importance harus memiliki pengaruh tinggi.
2. Documented outcome lebih kuat daripada inference perilaku.
3. Historical importance tidak sama dengan current relevance.
4. Sensitivity tidak otomatis menaikkan importance.
5. Memory yang sering disebut tidak otomatis penting jika tidak menghasilkan keputusan atau pola.
6. Memory dengan dampak besar tetapi confidence rendah harus meminta konfirmasi.
7. Memory tentang kelemahan harus memiliki review dan expiration lebih ketat daripada milestone faktual.

---

# 10. Conflict Resolution

## 10.1 Jenis Konflik

### A. Temporal Conflict

Pernyataan lama berbeda dari pernyataan baru.

Contoh:

- 2026: ingin menjadi dokter;
- 2029: ingin menjadi programmer;
- 2031: ingin menjadi AI Engineer.

Ini mungkin evolution, bukan contradiction.

### B. Source Conflict

Self-report berbeda dari assessment, dokumen, atau behavior.

### C. Preference-Behavior Conflict

Pengguna menyatakan minat tinggi tetapi tidak melakukan aktivitas terkait.

### D. Goal-Constraint Conflict

Goal tinggi bertabrakan dengan biaya, waktu, lokasi, atau prerequisite.

### E. Assessment Conflict

Hasil assessment pada waktu berbeda menunjukkan pola berbeda.

### F. Identity-Experience Conflict

Pengguna melabeli diri “tidak kreatif”, tetapi portofolio menunjukkan aktivitas kreatif yang konsisten.

### G. Inference Conflict

Inference AI bertentangan dengan pernyataan pengguna.

Dalam kasus ini, pernyataan pengguna memiliki prioritas. AI dapat meminta klarifikasi, tetapi tidak boleh memaksakan inference.

## 10.2 Urutan Penyelesaian Konflik

### Tahap 1: Validate Time

Periksa apakah dua memory berlaku pada periode berbeda.

### Tahap 2: Validate Scope

Periksa apakah dua pernyataan sebenarnya membahas scope berbeda.

Contoh:

- tidak suka matematika abstrak;
- menikmati analisis data praktis.

Keduanya dapat benar.

### Tahap 3: Validate Source

Periksa kualitas dan independence sumber.

### Tahap 4: Validate Context

Periksa kondisi saat memory dibentuk.

### Tahap 5: Detect Evolution

Tentukan apakah konflik menunjukkan perubahan, eksplorasi, atau transition.

### Tahap 6: Preserve Both When Necessary

Jika kedua memory valid pada periodenya, keduanya disimpan. Memory terbaru menjadi current state. Memory lama menjadi historical state.

### Tahap 7: Ask for Clarification

Jika konflik berpengaruh besar dan tidak dapat diselesaikan dari evidence, engine meminta konfirmasi.

### Tahap 8: Mark Unresolved

Jika pengguna belum menjawab, engine menyimpan konflik sebagai unresolved dan menurunkan confidence recommendation.

## 10.3 Conflict Priority Rules

Urutan prioritas evidence secara umum:

1. user correction eksplisit;
2. user-confirmed current state;
3. documented recent outcome;
4. demonstrated recent behavior dengan konteks kuat;
5. validated assessment;
6. repeated self-report;
7. single self-report;
8. AI inference;
9. weak behavior signal.

Urutan ini bukan aturan mutlak. Konteks dan jenis memory tetap menentukan.

## 10.4 Contoh: Dokter ke Programmer ke AI Engineer

### 2026: Ingin Menjadi Dokter

Status: historical aspiration.

Evidence:

- stated goal;
- minat biologi;
- belum memiliki exposure pekerjaan.

### 2029: Ingin Menjadi Programmer

Status: superseding goal.

Evidence:

- masuk program teknologi;
- proyek coding;
- reflection positif;
- minat klinis menurun.

### 2031: Ingin Menjadi AI Engineer

Status: current specialization goal.

Evidence:

- skill programming;
- course machine learning;
- proyek AI;
- target pekerjaan spesifik.

Reasoning:

- goal 2031 bukan konflik langsung dengan goal programmer;
- AI Engineer merupakan spesialisasi yang berkembang dari software path;
- goal dokter tetap historical karena menjelaskan minat sains dan kemungkinan domain health AI;
- rekomendasi dapat mempertimbangkan health technology sebagai alternative path jika masih relevan.

## 10.5 Contradiction Output

Engine tidak boleh mengatakan:

“Kamu tidak konsisten karena dulu ingin menjadi dokter.”

Engine sebaiknya mengatakan:

“Tujuanmu berkembang dari bidang kesehatan menuju teknologi, lalu menjadi lebih spesifik pada AI. Perubahan ini didukung oleh pengalaman coding dan proyek machine learning. Minat kesehatan lama masih dapat menjadi keunggulan jika kamu ingin masuk ke health AI, tetapi tidak perlu menjadi batas pilihanmu.”

## 10.6 Unresolved Conflict Handling

Ketika konflik belum selesai:

- tampilkan kedua evidence;
- jelaskan mengapa konflik penting;
- turunkan confidence;
- jangan menebak current truth;
- berikan pertanyaan klarifikasi yang kecil dan spesifik;
- buat recommendation scenario untuk masing-masing kemungkinan.

---

# 11. Reflection Engine

## 11.1 Tujuan

Reflection Engine membantu pengguna melihat perkembangan tanpa menghakimi, mempermalukan, atau memaksakan narasi.

Reflection bukan motivasi generik. Reflection harus didasarkan pada evidence longitudinal.

## 11.2 Jenis Reflection

### A. Progress Reflection

Menunjukkan kemajuan yang dapat dibuktikan.

Contoh:

“Tiga tahun lalu kamu menyebut matematika sebagai area yang membuatmu ragu. Sejak itu kamu telah menyelesaikan Calculus, menggunakan statistik dalam dua proyek, dan mempertahankan minat pada data. Ini menunjukkan perubahan kemampuan dan confidence, bukan sekadar perubahan pernyataan.”

### B. Pattern Reflection

Menunjukkan pola berulang.

Contoh:

“Dalam tiga proyek terakhir, kamu paling konsisten menikmati bagian riset pengguna dan penyusunan strategi. Coding tetap menjadi skill penting, tetapi bukan satu-satunya aktivitas yang memberimu energi.”

### C. Turning Point Reflection

Menjelaskan kejadian yang mengubah arah.

Contoh:

“Magang backend menjadi titik penting. Setelah pengalaman tersebut, goal-mu bergeser dari engineering murni menuju product management.”

### D. Decision Reflection

Membandingkan alasan keputusan dengan outcome.

Contoh:

“Kamu memilih program ini karena fleksibilitas lokasi dan biaya. Dua faktor tersebut terpenuhi, tetapi kebutuhan mentorship belum terpenuhi. Faktor mentorship perlu mendapat bobot lebih besar pada keputusan berikutnya.”

### E. Recovery Reflection

Menunjukkan respons terhadap setback.

Contoh:

“Nilaimu sempat turun saat beban kerja meningkat. Setelah mengurangi aktivitas dan mengubah jadwal belajar, performamu pulih. Evidence ini lebih mendukung masalah kapasitas waktu daripada masalah potensi akademik.”

### F. Identity Reflection

Menguji label diri terhadap evidence.

Contoh:

“Kamu pernah menggambarkan diri sebagai orang yang tidak bisa memimpin. Namun, selama dua tahun terakhir kamu memimpin tiga proyek dan menerima feedback positif pada koordinasi. Label lama itu mungkin perlu diperbarui.”

## 11.3 Reflection Tone Rules

Reflection harus:

- menggunakan bahasa observasional;
- menunjukkan evidence;
- membedakan fakta dan interpretasi;
- menghindari label permanen;
- memberi ruang bagi pengguna untuk tidak setuju;
- menghindari perbandingan dengan pengguna lain;
- tidak menggunakan trauma, kegagalan, atau kondisi sensitif sebagai alat persuasi;
- tidak mengklaim mengenal pengguna lebih baik daripada pengguna sendiri.

## 11.4 Reflection Structure

1. **Observation**: apa yang berubah atau berulang.
2. **Evidence**: memory yang mendukung.
3. **Interpretation**: arti yang mungkin.
4. **Uncertainty**: batas interpretasi.
5. **Question**: apakah pengguna setuju.
6. **Implication**: dampak terhadap keputusan atau roadmap.

## 11.5 Reflection Frequency

Reflection tidak perlu muncul pada setiap interaksi. Reflection berguna ketika:

- milestone tercapai;
- goal berubah;
- terjadi konflik memory;
- roadmap tertunda;
- pengguna menghadapi keputusan besar;
- pengguna meminta evaluasi perkembangan;
- pola telah memiliki evidence yang cukup;
- transition baru terjadi.

## 11.6 Anti-Creepiness Rules

Engine tidak boleh:

- menyebut detail lama yang tidak relevan;
- mengungkap memory sensitif secara tiba-tiba;
- menggunakan bahasa “kami terus mengawasi”;
- membuat inference emosional tanpa konfirmasi;
- menyebut pola perilaku kecil secara berlebihan;
- menampilkan informasi pihak ketiga yang tidak perlu.

Reflection harus terasa membantu, bukan mengawasi.

---

# 12. Learning Engine

## 12.1 Tujuan

Learning Engine memperbarui pemahaman KarirGPS berdasarkan tindakan, evidence, feedback, dan outcome. Engine tidak hanya belajar dari chat atau jawaban questionnaire.

## 12.2 Sumber Pembelajaran

- assessment;
- roadmap progress;
- feedback pengguna;
- nilai;
- proyek;
- portofolio;
- sertifikat;
- course completion;
- keputusan;
- outcome;
- internship;
- pekerjaan;
- mentor feedback;
- self-reflection;
- repeated exploration;
- behavior tracking yang diizinkan.

## 12.3 Learning Loop

### 1. Observe

Terima evidence baru.

### 2. Interpret

Tentukan apakah evidence menunjukkan skill, minat, progress, constraint, goal, atau outcome.

### 3. Compare

Bandingkan dengan memory aktif dan timeline.

### 4. Update

Perbarui confidence, status, version, atau relationship.

### 5. Validate

Periksa konflik dan kebutuhan konfirmasi.

### 6. Adapt

Sesuaikan roadmap, rekomendasi, atau pertanyaan berikutnya.

### 7. Measure Outcome

Nilai apakah perubahan menghasilkan hasil yang lebih baik.

## 12.4 Evidence Ladder untuk Skill

Urutan evidence skill dari lemah ke kuat:

1. curiosity;
2. self-report;
3. assessment;
4. course completion;
5. guided exercise;
6. independent project;
7. portfolio evidence;
8. real-world application;
9. external feedback;
10. repeated performance;
11. professional outcome.

Engine tidak harus menghapus evidence lemah. Engine memperbarui confidence saat evidence lebih kuat tersedia.

## 12.5 Learning from Roadmap

Memory Engine mencatat:

- item yang dimulai;
- item yang selesai;
- durasi aktual;
- blocker;
- support yang efektif;
- evidence hasil;
- checkpoint yang gagal;
- perubahan prioritas;
- feedback pengguna;
- outcome roadmap.

Roadmap yang tidak selesai tidak otomatis berarti motivasi rendah. Engine harus memeriksa:

- beban waktu;
- tingkat kesulitan;
- akses;
- kualitas materi;
- relevansi goal;
- perubahan constraint;
- perubahan prioritas.

## 12.6 Learning from Choices

Pilihan pengguna menjadi evidence, tetapi tidak selalu menjadi preference permanen.

Contoh:

- pengguna memilih course murah karena constraint biaya;
- pilihan tersebut tidak berarti pengguna lebih menyukai course murah daripada program premium;
- engine harus menyimpan rationale keputusan.

## 12.7 Learning from Feedback

Feedback pengguna terhadap rekomendasi harus memengaruhi personalisasi.

Contoh:

- “Rekomendasi ini terlalu teknis.”
- “Saya tertarik, tetapi tidak ingin pindah kota.”
- “Roadmap terlalu panjang.”
- “Saya sudah pernah mencoba bidang ini dan tidak menyukainya.”

Feedback harus diubah menjadi memory yang memiliki scope. Satu feedback tidak selalu berlaku untuk semua konteks.

## 12.8 Learning from Non-Action

Tidak melakukan tindakan bukan evidence yang cukup untuk menyimpulkan tidak berminat.

Non-action dapat disebabkan oleh:

- waktu;
- biaya;
- akses;
- kebingungan;
- prioritas lain;
- ketakutan;
- roadmap terlalu sulit;
- goal berubah;
- rekomendasi tidak relevan.

Engine dapat membentuk hypothesis, tetapi harus meminta klarifikasi sebelum memperbarui preference atau motivation secara kuat.

## 12.9 Personalization Learning Boundaries

1. Jangan mengoptimalkan hanya untuk engagement.
2. Jangan mempersempit pilihan karena perilaku masa lalu.
3. Jangan menganggap click sebagai commitment.
4. Jangan menyembunyikan alternative path.
5. Jangan menurunkan aspirasi hanya karena setback.
6. Jangan menggunakan memory sensitif untuk meningkatkan persuasi.
7. Jangan membuat filter bubble karier.

---

# 13. Career Journey Engine

## 13.1 Tujuan

Career Journey Engine menyusun perjalanan pengguna dari eksplorasi hingga berbagai transition karier. Engine menghubungkan milestone, keputusan, skill, project, outcome, dan reflection menjadi peta perjalanan yang dapat digunakan untuk reasoning.

## 13.2 Career Journey Stages

Tahap berikut bersifat fleksibel dan tidak selalu linear:

1. awareness;
2. exploration;
3. education choice;
4. foundational learning;
5. applied learning;
6. first experience;
7. entry transition;
8. early career;
9. specialization;
10. advancement;
11. leadership;
12. career pivot;
13. entrepreneurship;
14. re-entry;
15. portfolio career;
16. lifelong learning.

## 13.3 Journey Object Konseptual

Career Journey memiliki:

- current stage;
- prior stages;
- active goals;
- target roles;
- active constraints;
- skill profile;
- evidence gaps;
- milestone history;
- transition history;
- current confidence;
- unresolved decisions;
- alternative paths;
- next decision points.

## 13.4 Journey Reconstruction

Engine menyusun perjalanan dari memory graph.

Contoh:

`Interest in technology`  
→ `Course in programming`  
→ `First software project`  
→ `Decision to enter Informatics`  
→ `Backend internship`  
→ `Feedback on cross-functional strength`  
→ `Interest in product`  
→ `Product course`  
→ `Career switch`  
→ `Founder goal`

## 13.5 Career Pivot Recognition

Pivot dikenali melalui kombinasi:

- goal baru;
- declining interest pada jalur lama;
- emerging interest;
- transferable skills;
- exploration activity;
- learning investment;
- decision event;
- role transition;
- reflection.

Satu pernyataan “saya ingin pindah karier” belum cukup untuk menyatakan pivot selesai.

## 13.6 Career Continuity

Career Journey Engine harus mencari continuity di balik perubahan.

Contoh:

- dokter → health data analyst → AI engineer dapat memiliki continuity pada sains dan pemecahan masalah kesehatan;
- backend engineer → product manager → founder dapat memiliki continuity pada product building;
- guru → instructional designer → learning technology dapat memiliki continuity pada pendidikan.

Continuity membantu pengguna melihat transferable identity tanpa mengunci pilihan.

## 13.7 Journey Risk Signals

Engine dapat menandai:

- goal tanpa prerequisite;
- repeated abandonment tanpa reflection;
- skill stagnation;
- roadmap overload;
- target role terlalu sempit;
- constraint yang tidak ditangani;
- transition tanpa financial buffer;
- mismatch antara work values dan target environment;
- outdated skill evidence;
- dependency pada satu jalur saja.

Risk signal harus disajikan sebagai area perencanaan, bukan prediksi kegagalan.

## 13.8 Journey Output

Career Journey Engine menghasilkan:

- timeline perjalanan;
- current stage;
- major turning points;
- evidence of growth;
- active direction;
- alternative continuity paths;
- unresolved questions;
- next milestones;
- risk and dependency map;
- reflection prompts.

---

# 14. Memory Retrieval

## 14.1 Tujuan

Retrieval memilih memory yang paling berguna untuk kebutuhan saat ini. Engine tidak boleh memasukkan semua memory ke dalam reasoning.

## 14.2 Retrieval Context

Retrieval dimulai dari konteks tugas:

- keputusan apa yang sedang dibuat;
- tahap pengguna;
- time horizon;
- domain pendidikan atau karier;
- tingkat risiko keputusan;
- output yang diminta;
- sensitivity allowance;
- personalisasi yang diizinkan.

## 14.3 Retrieval Dimensions

### Relevance

Hubungan memory dengan pertanyaan atau keputusan.

### Recency

Kedekatan waktu, terutama untuk preference, constraint, dan current goal.

### Importance

Nilai longitudinal memory.

### Confidence

Kekuatan evidence.

### Specificity

Seberapa langsung memory mendukung konteks.

### Temporal Validity

Apakah memory masih berlaku.

### Relationship Proximity

Kedekatan memory dengan goal, skill, career, atau decision yang sedang dibahas.

### Diversity

Retrieval harus mencakup lebih dari satu jenis evidence agar reasoning tidak bias.

### Sensitivity Fit

Memory sensitif hanya diambil jika relevan dan sesuai consent.

## 14.4 Retrieval Layers

### Layer 1: Current State Memory

Goal aktif, constraint aktif, preference terkini, current skills, current stage.

### Layer 2: Decision-Specific Evidence

Decision memory, rejection, tradeoff, dan outcome yang relevan.

### Layer 3: Longitudinal Pattern

Tren minat, skill growth, repeated feedback, recurring constraints.

### Layer 4: Historical Anchor

Milestone atau turning point yang menjelaskan perjalanan.

### Layer 5: Alternative and Contradictory Evidence

Memory yang menantang kesimpulan awal.

Layer ini penting untuk menghindari confirmation bias.

## 14.5 Memory Pack

Hasil retrieval bukan dump memory. Engine membentuk Memory Pack yang berisi:

- current state summary;
- relevant memories;
- supporting evidence;
- contradictory evidence;
- unresolved conflicts;
- temporal notes;
- confidence notes;
- privacy constraints;
- explanation trace;
- memory gaps.

## 14.6 Retrieval Modes

### A. Recommendation Mode

Fokus pada goal, preference, skill, assessment, constraint, decision history, dan outcome.

### B. Reflection Mode

Fokus pada timeline, turning point, growth, setback, reflection, dan milestone.

### C. Roadmap Mode

Fokus pada current skill, learning history, completed items, blockers, pace, dan goals.

### D. Career Switch Mode

Fokus pada transferable skills, prior roles, dissatisfaction evidence, emerging interest, financial constraints, dan transition readiness.

### E. Compare Mode

Fokus pada decision criteria, prior preference, rejection reasons, outcome, dan tradeoff tolerance.

### F. Reconfirmation Mode

Fokus pada memory yang expired, conflicting, low confidence, atau high impact.

## 14.7 Retrieval Guardrails

1. Ambil memory minimum yang cukup.
2. Jangan mengambil detail sensitif jika tidak diperlukan.
3. Jangan menggunakan historical preference sebagai current preference tanpa pemeriksaan.
4. Sertakan contradictory evidence ketika material.
5. Tampilkan uncertainty ketika memory gap tinggi.
6. Jangan mengambil memory yang dinonaktifkan.
7. Jangan menggunakan deleted memory.
8. Jangan menggunakan inference sebagai fact.
9. Jangan mengulang detail pribadi hanya untuk menunjukkan bahwa AI mengingat.

## 14.8 Retrieval Failure Modes

- recency bias;
- over-personalization;
- retrieval of expired constraints;
- ignoring contradictory evidence;
- excessive memory context;
- missing turning point;
- using low-confidence inference;
- retrieving sensitive but irrelevant data;
- confusing similar goals from different periods.

---

# 15. Memory Compression

## 15.1 Tujuan

Memory Compression mengurangi volume memory aktif tanpa kehilangan informasi yang dibutuhkan untuk reasoning, timeline, audit, dan user reflection.

Compression tidak sama dengan deletion.

## 15.2 Prinsip Compression

1. Pertahankan source dan provenance.
2. Pertahankan timeline anchors.
3. Pertahankan conflicts yang belum selesai.
4. Pertahankan user corrections.
5. Pertahankan decision rationale.
6. Pertahankan outcome.
7. Gabungkan detail berulang.
8. Jangan mengubah uncertainty menjadi certainty.
9. Jangan menghapus minority evidence yang penting.
10. Summary harus dapat ditelusuri ke memory sumber.

## 15.3 Compression Levels

### Level 1: Deduplication

Menghapus pengulangan semantik yang tidak menambah evidence baru.

### Level 2: Event Bundling

Menggabungkan event kecil dalam satu periode.

Contoh:

“Selama semester pertama, pengguna menyelesaikan empat latihan coding dasar.”

### Level 3: Pattern Summary

Meringkas pola berulang.

Contoh:

“Minat pada product research muncul konsisten dalam lima proyek selama dua tahun.”

### Level 4: Period Summary

Membuat ringkasan fase.

Contoh:

“2028 sampai 2030 merupakan fase pembentukan technical foundation dan pengalaman backend.”

### Level 5: Journey Summary

Meringkas perjalanan beberapa tahun dengan milestone, transition, dan current direction.

## 15.4 Information That Must Survive Compression

- milestone;
- transition;
- current active state;
- major decision dan rationale;
- unresolved conflict;
- user correction;
- high-impact constraint;
- documented outcome;
- major achievement;
- major setback dan context;
- goal change;
- evidence of growth;
- confidence and uncertainty.

## 15.5 Compression by Memory Type

### Skill Memory

Ringkas menjadi tingkat, evidence terbaik, context penggunaan, dan freshness. Pertahankan proyek representatif.

### Interest Memory

Ringkas menjadi tren, durasi, intensitas, dan supporting activities.

### Goal Memory

Pertahankan status, perubahan, rationale, dan outcome.

### Project Memory

Pertahankan proyek besar. Proyek kecil dapat digabung berdasarkan skill dan periode.

### Behavior Memory

Pertahankan pattern, bukan setiap click atau aktivitas mikro.

### Assessment Memory

Pertahankan skor penting, versi instrumen, perubahan signifikan, dan interpretasi terbatas.

## 15.6 Compression Validation

Sebelum summary digunakan, engine memeriksa:

- apakah summary terlalu umum;
- apakah perubahan penting hilang;
- apakah nuance positif dan negatif tetap ada;
- apakah uncertainty dipertahankan;
- apakah summary bertentangan dengan source;
- apakah user correction terbaru tercermin;
- apakah source trace tetap tersedia.

## 15.7 Progressive Disclosure

Pengguna dapat melihat memory dalam tiga tingkat:

1. summary;
2. timeline detail;
3. source evidence dan version history.

Hal ini membuat memory mudah dipahami tanpa kehilangan transparansi.

---

# 16. Privacy dan User Control

## 16.1 Prinsip Dasar

Memory adalah milik pengguna dalam konteks pengalaman KarirGPS. Pengguna harus memahami apa yang diingat, mengapa diingat, dan bagaimana memory digunakan.

## 16.2 Memory Viewer

Pengguna harus dapat melihat:

- current memories;
- historical memories;
- inferred memories;
- memory yang perlu dikonfirmasi;
- memory yang memengaruhi recommendation;
- memory yang dinonaktifkan;
- memory yang telah expired;
- source dan waktu;
- confidence dan status;
- relationships utama.

## 16.3 User Actions

### View

Melihat memory dan penjelasannya.

### Correct

Mengubah isi, scope, waktu, atau status memory.

### Confirm

Mengonfirmasi bahwa memory masih benar.

### Dispute

Menandai memory sebagai tidak benar atau menyesatkan.

### Disable

Mencegah memory digunakan tanpa menghapusnya.

### Delete

Menghapus memory dari penggunaan personalisasi.

### Set Expiration

Menentukan batas waktu penggunaan memory tertentu.

### Change Sensitivity

Mengatur kategori atau tingkat pembatasan.

### Limit Purpose

Contoh:

- boleh digunakan untuk roadmap;
- tidak boleh digunakan untuk recommendation;
- boleh digunakan untuk reflection;
- hanya untuk current session.

### Export

Mendapatkan ringkasan memory dalam format yang dapat dipahami.

### Reset Personalization

Menghapus atau menonaktifkan memory personalisasi sesuai pilihan pengguna.

## 16.4 Personalization Levels

### Level 0: No Long-Term Memory

KarirGPS hanya menggunakan konteks sesi aktif.

### Level 1: Essential Memory

Hanya menyimpan milestone, current goal, active constraint, dan keputusan besar.

### Level 2: Standard Personalization

Menambahkan preference, skill, roadmap progress, dan outcome.

### Level 3: Deep Longitudinal Personalization

Menambahkan behavior pattern yang diizinkan, reflection, journey pattern, dan integration sources.

Pengguna dapat memilih level per kategori.

## 16.5 Sensitive Memory Policy

Memory sensitif memerlukan:

- explicit purpose;
- stronger consent;
- limited retrieval;
- clear user visibility;
- shorter review cycle;
- restricted influence;
- deletion support;
- no hidden inference.

## 16.6 Youth and Guardian Context

Untuk pengguna usia sekolah, engine harus menjaga agency pengguna dan menerapkan perlindungan tambahan.

Prinsip:

- jangan menampilkan label permanen;
- jangan menggunakan tekanan orang tua sebagai preferensi pengguna;
- bedakan aspirasi pengguna dan aspirasi wali;
- jangan menyimpan informasi sensitif berlebihan;
- jelaskan ketika rekomendasi dipengaruhi constraint keluarga;
- berikan ruang eksplorasi yang aman;
- ikuti izin dan kebijakan yang berlaku sesuai usia.

## 16.7 Third-Party Memory

Memory tentang mentor, orang tua, guru, atau rekan harus dibatasi.

Simpan:

- peran;
- hubungan dengan keputusan;
- feedback yang relevan;
- waktu dan sumber.

Jangan menyimpan detail pihak ketiga yang tidak diperlukan.

## 16.8 Explainable Personalization

Setiap rekomendasi penting harus dapat menjawab:

- memory mana yang digunakan;
- memory mana yang tidak digunakan;
- memory mana yang perlu diperbarui;
- bagaimana hasil berubah jika memory tertentu dinonaktifkan.

## 16.9 Privacy Failure Modes

- menyimpan terlalu banyak detail;
- menggunakan deleted memory;
- inference sensitif tanpa consent;
- menampilkan memory lama secara mengejutkan;
- menggabungkan profil dua orang;
- menganggap guardian preference sebagai user preference;
- menggunakan behavior tracking untuk manipulasi;
- mempertahankan memory lebih lama daripada kegunaannya.

---

# 17. Interaction dengan Assessment & Recommendation Engine V1

## 17.1 Prinsip Integrasi

Memory Engine menyediakan evidence longitudinal. Assessment & Recommendation Engine tetap bertanggung jawab atas scoring, ranking, reasoning keputusan, explanation, dan roadmap.

## 17.2 Memory yang Relevan untuk Assessment

- hasil assessment sebelumnya;
- perubahan score;
- kondisi saat assessment;
- user feedback terhadap hasil;
- evidence nyata yang mendukung atau menantang interpretasi;
- stability profile;
- assessment fatigue atau response quality, jika relevan dan diizinkan.

## 17.3 Memory yang Relevan untuk Recommendation

- current goals;
- active constraints;
- work values;
- preference history;
- skill evidence;
- academic trends;
- decision rationale;
- rejected options;
- prior recommendation feedback;
- outcome dari keputusan sebelumnya;
- transition readiness;
- unresolved conflicts.

## 17.4 Recommendation Memory Output

Setelah recommendation diberikan, Memory Engine dapat menyimpan:

- recommendation set;
- alasan utama;
- confidence;
- user response;
- option saved;
- option rejected;
- tradeoff accepted;
- planned validation;
- decision outcome.

Engine tidak perlu menyimpan setiap ranking minor sebagai anchor. Anchor dibentuk jika recommendation memengaruhi keputusan atau roadmap.

## 17.5 Preventing Recommendation Lock-In

Memory Engine tidak boleh membuat recommendation lama terus mendominasi recommendation baru.

Aturan:

1. Recommendation lama adalah historical evidence, bukan preference otomatis.
2. User rejection harus dihormati sesuai scope dan recency.
3. Outcome lebih penting daripada ranking lama.
4. Goal baru dapat mengubah weight dan candidate pool.
5. Engine harus tetap menyediakan alternative path.
6. Recommendation tidak boleh menjadi self-fulfilling profile.

## 17.6 Counterfactual Memory Check

Sebelum recommendation penting, engine dapat memeriksa:

- apakah hasil akan berubah jika preference lama dihapus;
- apakah constraint yang sudah resolved masih memengaruhi hasil;
- apakah satu assessment terlalu dominan;
- apakah setback lama menurunkan ranking secara tidak adil;
- apakah goal baru telah mendapat bobot yang benar.

---

# 18. Memory Write Policy

## 18.1 Kapan Memory Dibuat

Memory dibuat ketika informasi:

- relevan untuk perjalanan pendidikan atau karier;
- memiliki kemungkinan digunakan kembali;
- cukup spesifik;
- memiliki source;
- memiliki konteks waktu;
- sesuai consent;
- tidak berlebihan;
- tidak menimbulkan risiko yang tidak perlu.

## 18.2 Kapan Memory Tidak Dibuat

- percakapan ringan;
- emosi sesaat tanpa relevansi;
- spekulasi pihak ketiga;
- detail pribadi yang tidak dibutuhkan;
- statement ambigu tanpa konteks;
- aktivitas mikro tunggal;
- inference sensitif;
- duplikasi tanpa evidence baru;
- informasi yang pengguna minta untuk tidak disimpan.

## 18.3 Explicit vs Implicit Write

### Explicit Write

Pengguna secara langsung menyatakan fakta, preference, goal, atau koreksi.

### Implicit Candidate Write

Engine menemukan pola dari aktivitas atau evidence. Memory ini harus berstatus candidate atau inferred sampai memiliki cukup evidence atau konfirmasi.

## 18.4 Write Confidence Rules

- direct statement tidak selalu high confidence jika ambigu;
- documented evidence meningkatkan confidence;
- repeated evidence meningkatkan stability;
- contradiction menurunkan confidence;
- old evidence menurunkan current applicability;
- user confirmation meningkatkan confidence;
- inference harus memiliki influence limit.

## 18.5 Memory Granularity

Memory harus cukup spesifik untuk berguna, tetapi tidak terlalu granular.

Terlalu luas:

“Pengguna tidak suka teknologi.”

Lebih tepat:

“Pada 2027, pengguna menyatakan tidak menikmati troubleshooting hardware, tetapi tetap tertarik pada aplikasi teknologi untuk kesehatan.”

## 18.6 User Notification

Untuk memory penting atau sensitif, pengguna sebaiknya mengetahui bahwa memory telah dibuat atau diperbarui. Notification dapat dikelompokkan agar tidak mengganggu.

---

# 19. Uncertainty Management

## 19.1 Sumber Ketidakpastian

- source lemah;
- konteks tidak lengkap;
- waktu tidak jelas;
- conflicting memory;
- outdated evidence;
- behavior inference;
- assessment variance;
- user indecision;
- missing outcome;
- compression loss;
- ambiguous relationship.

## 19.2 Confidence Components

Confidence memory dibentuk secara konseptual dari:

- source reliability;
- evidence strength;
- temporal validity;
- consistency;
- specificity;
- user confirmation;
- inference distance;
- context completeness.

## 19.3 Confidence Labels

### High Confidence

Didukung evidence kuat, konteks jelas, dan masih valid.

### Medium Confidence

Cukup didukung tetapi memiliki satu atau lebih keterbatasan.

### Low Confidence

Berasal dari evidence terbatas, inference, konflik, atau data lama.

### Unknown

Belum cukup informasi untuk memberi confidence.

## 19.4 Memory Gap

Engine harus dapat menyatakan area yang belum diketahui.

Contoh:

- tidak ada evidence skill praktis;
- preference lokasi belum dikonfirmasi;
- alasan perubahan goal belum jelas;
- outcome recommendation sebelumnya belum tersedia;
- assessment terlalu lama;
- constraint ekonomi tidak memiliki status terbaru.

## 19.5 Safe Use of Low-Confidence Memory

Low-confidence memory dapat digunakan untuk:

- mengajukan pertanyaan;
- menawarkan eksplorasi;
- membuat scenario;
- menunjukkan kemungkinan alternatif.

Low-confidence memory tidak boleh digunakan untuk:

- menutup pilihan;
- memberi label;
- menurunkan aspirasi secara kuat;
- menyatakan current truth;
- memengaruhi keputusan high-stakes tanpa disclosure.

---

# 20. Future Expansion

## 20.1 Prinsip Ekspansi

Sumber baru tidak boleh langsung menjadi truth. Setiap sumber harus melalui capture, qualification, provenance, consent, temporal alignment, dan confidence calibration.

## 20.2 CV

Memory yang dapat diperkaya:

- education;
- role history;
- project;
- skill claims;
- achievement;
- transition;
- employment gap.

CV merupakan curated self-presentation. Informasinya harus diperlakukan sebagai user-provided evidence, bukan verifikasi penuh.

## 20.3 LinkedIn

Potensi memory:

- career timeline;
- public role history;
- certification;
- project highlight;
- skill endorsement;
- professional interest.

KarirGPS harus membedakan profile branding dan pengalaman faktual.

## 20.4 GitHub

Potensi memory:

- demonstrated technical activity;
- project continuity;
- technology usage;
- collaboration;
- contribution pattern;
- evidence of learning.

Activity count tidak otomatis menunjukkan quality atau capability.

## 20.5 Rapor dan Academic Record

Potensi memory:

- subject performance;
- trend;
- consistency;
- improvement;
- context by semester;
- readiness evidence.

Nilai tidak boleh berdiri tanpa konteks sekolah, kurikulum, dan kondisi.

## 20.6 Sertifikat

Potensi memory:

- learning completion;
- credential;
- issuer;
- issue date;
- expiration;
- related skill;
- evidence level.

Sertifikat tidak otomatis sama dengan demonstrated skill.

## 20.7 Portfolio

Potensi memory:

- project evidence;
- role;
- output;
- skill application;
- domain interest;
- improvement over time;
- external feedback.

## 20.8 Kalender

Potensi memory:

- roadmap activity;
- time allocation;
- deadline;
- interview;
- learning routine;
- milestone.

Kalender sangat sensitif. Engine hanya menggunakan event relevan dan diizinkan.

## 20.9 Jurnal dan Reflection Notes

Potensi memory:

- reflection;
- motivation state;
- decision rationale;
- perceived obstacle;
- evolving values;
- personal insight.

KarirGPS tidak boleh membuat diagnosis emosional dari jurnal.

## 20.10 Behavior Tracking

Potensi memory:

- repeated exploration;
- saved options;
- roadmap adherence;
- recurring rejection;
- decision hesitation;
- learning pace.

Behavior tracking harus opt-in, transparan, minimal, dan tidak digunakan untuk manipulasi.

## 20.11 Email

Potensi memory:

- interview invitation;
- application outcome;
- offer;
- course enrollment;
- certification;
- career correspondence.

Engine hanya mengambil informasi yang relevan dan diizinkan. Isi komunikasi pribadi lain tidak boleh menjadi memory.

## 20.12 Outcome Systems

Outcome dapat berasal dari:

- admission result;
- job application;
- interview result;
- course completion;
- performance review;
- promotion;
- salary change;
- user satisfaction;
- retention in chosen path.

Outcome penting untuk mengkalibrasi recommendation quality.

## 20.13 AI Agent

Future AI Agent dapat menjalankan tugas atas izin pengguna, seperti mengelola roadmap atau membantu pencarian peluang. Setiap tindakan agent harus menghasilkan memory yang jelas:

- action requested;
- action performed;
- result;
- user approval;
- effect on goal;
- pending follow-up.

Agent tidak boleh membuat goal baru atas nama pengguna.

## 20.14 Additional Assessment Models

Memory Engine harus siap menerima:

- Big Five;
- DISC;
- MBTI;
- aptitude assessment;
- work values assessment;
- interest inventory;
- learning assessment;
- skill assessment.

Setiap model harus disimpan sebagai time-bound evidence. Model tidak boleh menjadi identity label permanen.

## 20.15 Cross-Source Reconciliation

Ketika banyak sumber tersedia, engine harus:

1. menyelaraskan waktu;
2. memeriksa duplikasi;
3. membedakan claim dan evidence;
4. mempertahankan provenance;
5. menilai konflik;
6. meminta konfirmasi jika high impact;
7. menghindari profil yang terlalu yakin.

---

# 21. Evaluation Framework

## 21.1 Tujuan Evaluasi

Evaluation Framework mengukur apakah Memory Engine meningkatkan kualitas keputusan tanpa mengurangi kontrol, privasi, dan kepercayaan pengguna.

## 21.2 Accuracy

Mengukur apakah memory merepresentasikan informasi dengan benar.

Indikator:

- tingkat user correction;
- kesesuaian dengan source;
- false memory rate;
- misattribution rate;
- temporal accuracy;
- scope accuracy.

## 21.3 Relevance

Mengukur apakah memory yang diambil berguna untuk konteks saat ini.

Indikator:

- retrieval relevance;
- irrelevant memory exposure;
- user-rated usefulness;
- decision-specific coverage;
- minimal context efficiency.

## 21.4 Freshness

Mengukur apakah current state menggunakan informasi yang masih berlaku.

Indikator:

- outdated memory usage rate;
- reconfirmation completion;
- expired constraint leakage;
- current goal accuracy;
- skill freshness accuracy.

## 21.5 Consistency

Mengukur apakah memory, summary, timeline, dan recommendation selaras.

Indikator:

- unresolved contradiction rate;
- summary-source consistency;
- version consistency;
- cross-session consistency;
- current versus historical state accuracy.

## 21.6 Personalization Quality

Mengukur apakah memory memperbaiki recommendation dan roadmap.

Indikator:

- recommendation acceptance;
- repeated-question reduction;
- roadmap relevance;
- preference alignment;
- improvement against no-memory baseline.

## 21.7 Explainability

Mengukur apakah pengguna memahami bagaimana memory digunakan.

Indikator:

- explanation completeness;
- source trace availability;
- user understanding;
- ability to identify influential memory;
- correction success.

## 21.8 Trust

Mengukur apakah pengguna merasa memory akurat, terkendali, dan tidak mengganggu.

Indikator:

- trust rating;
- memory disable rate;
- deletion rate by reason;
- creepiness reports;
- privacy complaints;
- perceived control.

Deletion rate tidak selalu menunjukkan kegagalan. Pengguna dapat menghapus memory sebagai bagian normal dari kontrol.

## 21.9 User Satisfaction

Mengukur apakah longitudinal personalization memberi nilai.

Indikator:

- reflection usefulness;
- roadmap usefulness;
- reduced repetition;
- decision confidence;
- recommendation clarity;
- user retention with consent.

## 21.10 Longitudinal Intelligence

Mengukur kemampuan engine memahami perubahan dari waktu ke waktu.

Indikator:

- change detection precision;
- transition recognition;
- turning point recall;
- goal evolution accuracy;
- journey reconstruction quality;
- historical context usefulness;
- outcome linkage completeness.

## 21.11 Calibration

Mengukur apakah confidence sesuai dengan accuracy nyata.

Indikator:

- high-confidence error rate;
- low-confidence recovery;
- conflict disclosure;
- uncertainty communication;
- user confirmation alignment.

## 21.12 Privacy and Control

Indikator:

- successful correction rate;
- successful deletion rate;
- consent compliance;
- disabled memory leakage;
- sensitive retrieval violations;
- transparency coverage;
- personalization setting adherence.

## 21.13 Fairness

Mengukur apakah memory tidak mengunci pengguna berdasarkan masa lalu atau latar belakang.

Indikator:

- aspiration suppression rate;
- constraint over-penalization;
- negative event overuse;
- historical lock-in;
- alternative path diversity;
- differential error across user groups.

## 21.14 Compression Quality

Indikator:

- anchor retention;
- source trace preservation;
- summary accuracy;
- conflict retention;
- user correction preservation;
- information loss rate;
- retrieval efficiency.

## 21.15 Outcome Impact

Indikator jangka panjang:

- quality of decisions;
- roadmap completion;
- successful transitions;
- reduced regret;
- improved readiness;
- skill growth;
- career satisfaction;
- recovery from setbacks;
- user-defined success.

KarirGPS tidak boleh menggunakan satu outcome universal untuk semua pengguna.

## 21.16 Evaluation Methods

- offline memory reconstruction tests;
- longitudinal scenario tests;
- human expert review;
- user correction studies;
- retrieval relevance evaluation;
- red-team privacy testing;
- conflict resolution tests;
- compression fidelity tests;
- A/B evaluation with user consent;
- outcome tracking;
- fairness audit;
- adversarial source tests.

## 21.17 Golden Longitudinal Scenarios

Evaluation set harus memiliki scenario seperti:

- goal berubah tiga kali;
- constraint lama resolved;
- user correction terhadap inference;
- skill meningkat tetapi assessment lama rendah;
- setback diikuti recovery;
- career switch dengan transferable skills;
- guardian preference berbeda dari user preference;
- memory sensitif dinonaktifkan;
- source conflict;
- long inactivity lalu re-entry;
- portfolio bertentangan dengan self-label;
- expired preference masih muncul;
- deleted memory tidak boleh digunakan.

---

# 22. Success Criteria

Memory Engine dianggap berhasil ketika memenuhi kriteria berikut.

## 22.1 Functional Success

1. KarirGPS dapat membedakan current state dan historical state.
2. Perubahan goal, skill, preference, dan constraint direpresentasikan sebagai evolution.
3. Version lama tetap dapat ditelusuri tanpa memengaruhi current reasoning secara salah.
4. Memory dapat dikoreksi, dinonaktifkan, dan dihapus.
5. Recommendation menggunakan memory yang relevan, bukan seluruh memory.
6. Conflicts dapat dideteksi dan ditampilkan.
7. Timeline dapat merekonstruksi milestone dan transition utama.
8. Compression mempertahankan evidence penting.
9. Outcome terhubung ke decision dan roadmap.
10. Memory dapat menjelaskan pengaruhnya terhadap recommendation.

## 22.2 Intelligence Success

1. KarirGPS mengenali pola longitudinal tanpa membuat label absolut.
2. KarirGPS membedakan curiosity, interest, goal, dan commitment.
3. KarirGPS mengenali career pivot dan continuity.
4. KarirGPS belajar dari tindakan nyata, bukan hanya jawaban asesmen.
5. KarirGPS tidak menafsirkan non-action sebagai kurangnya motivasi tanpa evidence.
6. KarirGPS menggunakan setback sebagai context dan learning evidence.
7. KarirGPS memperbarui confidence saat evidence berkembang.
8. KarirGPS dapat menyatakan memory gap dan uncertainty.

## 22.3 Human-Centered Success

1. Pengguna merasa dipahami, bukan diawasi.
2. Pengguna dapat melihat dan mengendalikan memory.
3. Reflection membantu pengguna memahami perkembangan tanpa menghakimi.
4. Recommendation tidak mengunci pengguna pada profil lama.
5. Pengguna dapat menolak interpretasi AI.
6. Memory sensitif tidak digunakan secara mengejutkan.
7. Pengguna mengetahui mengapa informasi tertentu diingat.
8. Pengguna dapat mengatur tingkat personalisasi.

## 22.4 Enterprise Success

1. Memory Object memiliki provenance, version, status, dan confidence.
2. Lifecycle dapat diterapkan konsisten pada banyak sumber.
3. Jenis memory baru dapat ditambahkan tanpa mengubah prinsip inti.
4. Evaluation dapat mengukur accuracy, relevance, freshness, trust, dan longitudinal intelligence.
5. Governance dapat meninjau memory use dan failure modes.
6. Memory dapat mendukung jutaan perjalanan berbeda tanpa memaksakan satu career model.
7. Privacy control tetap berlaku ketika sumber eksternal bertambah.
8. Assessment & Recommendation Engine dapat menggunakan memory tanpa kehilangan traceability.

## 22.5 Minimum V1 Acceptance Criteria

V1 layak digunakan ketika:

- identity, goal, preference, skill, assessment, decision, roadmap, outcome, constraint, dan timeline memory telah didukung secara konseptual;
- current dan historical state dapat dibedakan;
- versioning dan supersession bekerja secara konsisten pada desain;
- retrieval memiliki relevance, recency, confidence, sensitivity, dan contradiction control;
- user dapat melihat, mengoreksi, menonaktifkan, dan menghapus memory;
- memory yang expired tidak memengaruhi current recommendation tanpa disclosure;
- inferred memory diberi label dan influence limit;
- recommendation dapat menunjukkan memory yang paling memengaruhi hasil;
- reflection menggunakan evidence dan meminta ruang koreksi;
- evaluasi mencakup privacy, fairness, trust, dan longitudinal quality.

---

# 23. Governance dan Guardrails

## 23.1 Memory Governance Responsibilities

Governance harus memastikan:

- taxonomy tetap konsisten;
- source baru memiliki policy;
- sensitivity classification akurat;
- retention sesuai tujuan;
- model tidak menciptakan false memory;
- user control berfungsi;
- evaluation dijalankan berkala;
- incident dapat ditelusuri;
- memory use sesuai batas produk.

## 23.2 High-Risk Memory Use

Penggunaan high-risk mencakup:

- menurunkan recommendation karena setback lama;
- menyimpulkan kemampuan rendah dari nilai tunggal;
- menyimpulkan personality dari behavior tracking;
- menggunakan kondisi ekonomi sebagai batas permanen;
- menganggap aspirasi wali sebagai aspirasi pengguna;
- menggunakan memory sensitif untuk persuasi;
- menghilangkan pilihan tanpa penjelasan;
- menganggap assessment lama tetap valid.

High-risk use membutuhkan evidence lebih kuat, explanation, dan user control.

## 23.3 Prohibited Memory Behaviors

Memory Engine tidak boleh:

1. membuat memory pribadi tanpa source;
2. menyembunyikan inference sebagai fakta;
3. menyimpan semua chat sebagai memory;
4. menggunakan deleted atau disabled memory;
5. mempermalukan pengguna dengan masa lalu;
6. memprediksi karakter moral;
7. mengunci pengguna pada hasil assessment;
8. melakukan diagnosis psikologis;
9. mencampur memory antar pengguna;
10. mengubah user goal tanpa persetujuan;
11. menggunakan third-party detail yang tidak relevan;
12. mempertahankan false memory setelah koreksi;
13. menyimpulkan ketidakmampuan permanen dari kegagalan;
14. menggunakan behavior tracking tanpa kontrol yang jelas;
15. mengoptimalkan memory untuk membuat pengguna bergantung pada sistem.

## 23.4 Audit Questions

Setiap audit Memory Engine harus menjawab:

- Mengapa memory ini dibuat?
- Siapa sumbernya?
- Kapan memory berlaku?
- Apakah pengguna dapat melihatnya?
- Apakah memory masih relevan?
- Apakah confidence sesuai evidence?
- Apakah memory sensitif?
- Apakah consent scope dipatuhi?
- Apakah memory memengaruhi recommendation?
- Apakah contradictory evidence disertakan?
- Apakah user correction diterapkan?
- Apakah memory perlu dikompresi, diarsipkan, atau dihapus?

---

# 24. Reference Operating Flows

## 24.1 Flow A: Assessment Pertama

1. Pengguna menyelesaikan assessment.
2. Hasil disimpan sebagai Assessment Memory.
3. Engine menyimpan waktu, versi instrumen, confidence, dan context.
4. Interpretation disimpan terpisah dari raw result.
5. Current goals dan constraints disimpan sebagai memory terpisah.
6. Recommendation dibuat oleh Assessment & Recommendation Engine.
7. User feedback terhadap recommendation disimpan.
8. Timeline membuat baseline snapshot.

## 24.2 Flow B: Minat Berubah

1. Pengguna menyatakan minat baru.
2. Engine memeriksa apakah ini curiosity, emerging interest, atau committed goal.
3. Evidence lama tetap dipertahankan.
4. Interest Memory baru dibuat dengan confidence sesuai evidence.
5. Jika perubahan berpengaruh besar, engine meminta konfirmasi.
6. Current profile diperbarui tanpa menghapus historical profile.
7. Recommendation baru membandingkan old path dan new path.

## 24.3 Flow C: Nilai Turun

1. Academic Memory mencatat perubahan nilai.
2. Engine memeriksa durasi, mata pelajaran, dan konteks.
3. Constraint dan workload diperiksa.
4. Engine tidak langsung menurunkan potential profile.
5. Hypothesis dibuat jika penyebab belum jelas.
6. Roadmap disesuaikan dengan support dan recovery plan.
7. Outcome berikutnya digunakan untuk mengonfirmasi interpretasi.

## 24.4 Flow D: Magang Mengubah Arah

1. Career Memory mencatat magang.
2. Project dan Skill Memory diperbarui.
3. Feedback Memory ditambahkan.
4. Reflection Memory menangkap pengalaman pengguna.
5. Emerging Interest terdeteksi.
6. Goal baru dibuat jika pengguna mengonfirmasi.
7. Career Journey menandai turning point.
8. Recommendation memasukkan role adjacent dan transferable skills.

## 24.5 Flow E: Career Switch

1. Goal switch dibuat.
2. Prior role dan skill menjadi historical career evidence.
3. Transferable skills dihubungkan ke target role.
4. Skill gap dan constraints diambil.
5. Decision Memory mencatat alasan switch.
6. Roadmap transition dibuat.
7. Progress dan outcome memperbarui readiness.
8. Transition Memory menjadi anchor setelah switch terjadi.

## 24.6 Flow F: User Mengoreksi Memory

1. Pengguna menandai memory salah.
2. Memory berstatus disputed.
3. Pengguna memberikan correction.
4. Versi baru dibuat atau memory dihapus sesuai pilihan.
5. Summary, graph, dan recommendation trace diperbarui.
6. Engine menilai apakah recommendation sebelumnya terdampak.
7. Jika terdampak, engine menjelaskan perubahan hasil.

## 24.7 Flow G: Memory Lama Kadaluarsa

1. Review date tercapai.
2. Engine menilai importance dan current relevance.
3. Memory high-impact meminta konfirmasi.
4. Memory low-impact mengalami decay atau archive.
5. Jika tidak dikonfirmasi, memory tidak digunakan sebagai current state.
6. Historical value tetap dipertahankan sesuai retention dan consent.

---

# 25. Design Decisions V1

## 25.1 Memory Is Object-Based, Not Transcript-Based

KarirGPS menyimpan unit evidence terstruktur, bukan bergantung pada seluruh riwayat chat.

## 25.2 Current Truth and Historical Truth Are Separate

Sistem tidak menimpa masa lalu. Sistem menentukan apa yang berlaku sekarang dan apa yang benar pada periode sebelumnya.

## 25.3 User-Confirmed Memory Has Strong Priority

Inference AI tidak boleh mengalahkan koreksi atau current statement pengguna tanpa alasan evidence yang jelas.

## 25.4 Memory Influence Is Bounded

Setiap memory memiliki influence limit. Satu memory tidak boleh mendominasi keputusan secara tidak proporsional.

## 25.5 Retrieval Is Task-Specific

Setiap reasoning menggunakan Memory Pack yang relevan. Tidak ada global memory dump.

## 25.6 Reflection Requires Evidence

KarirGPS tidak menghasilkan narasi pertumbuhan tanpa dukungan timeline dan evidence.

## 25.7 Compression Preserves Traceability

Summary harus tetap dapat ditelusuri ke Memory Object asal.

## 25.8 Privacy Is a Core Function

User control bukan fitur tambahan. Kontrol merupakan bagian utama lifecycle memory.

## 25.9 Outcome Closes the Learning Loop

Keputusan dan recommendation harus dihubungkan dengan outcome agar KarirGPS dapat belajar dari hasil nyata.

## 25.10 Human Change Is the Default Assumption

Engine menganggap perubahan sebagai kemungkinan normal, bukan anomali yang harus ditekan.

---

# 26. Final Blueprint Summary

Memory Engine V1 membentuk fondasi longitudinal intelligence KarirGPS melalui enam kemampuan inti.

## 26.1 Remember

Menyimpan evidence penting dengan source, waktu, confidence, status, dan consent.

## 26.2 Understand Change

Membedakan current state, historical state, transition, pattern, dan turning point.

## 26.3 Retrieve Selectively

Mengambil memory minimum yang relevan untuk keputusan saat ini.

## 26.4 Explain

Menunjukkan memory apa yang memengaruhi recommendation dan bagaimana perubahan dipahami.

## 26.5 Learn

Menghubungkan assessment, action, project, feedback, decision, roadmap, dan outcome.

## 26.6 Preserve Agency

Memberi pengguna hak untuk melihat, mengoreksi, menonaktifkan, membatasi, dan menghapus memory.

Dengan desain ini, KarirGPS tidak hanya mengetahui hasil assessment pengguna. KarirGPS memahami perjalanan yang membentuk pengguna, perubahan yang sedang terjadi, bukti yang mendukung arah baru, dan area yang masih belum pasti.

Memory Engine tidak menentukan siapa pengguna. Memory Engine membantu pengguna melihat bagaimana dirinya berkembang dan menggunakan perkembangan tersebut untuk membuat keputusan pendidikan dan karier yang lebih sadar.
