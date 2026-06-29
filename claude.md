# Bahasa Indonesia UI — ChatGPT Style Guide

Tujuan utama:
Seluruh teks web app harus menggunakan Bahasa Indonesia yang natural, rapi, jelas, manusiawi, dan profesional seperti gaya Bahasa Indonesia ChatGPT.

Fokus utama bukan hanya menerjemahkan teks Inggris ke Indonesia, tetapi menulis ulang agar terasa seperti ditulis oleh manusia Indonesia yang komunikatif, ramah, dan paham konteks pengguna.

---

## 1. Prinsip Utama Bahasa

Gunakan gaya bahasa:
- Jelas
- Ringkas
- Natural
- Ramah
- Profesional
- Tidak kaku
- Tidak terlalu formal
- Tidak terlalu santai
- Tidak seperti hasil terjemahan mesin
- Tidak seperti pesan sistem mentah
- Tidak membuat user merasa disalahkan

Bahasa harus terasa membantu, bukan memerintah.

Contoh buruk:
"Input yang Anda masukkan tidak valid."

Contoh bagus:
"Data yang dimasukkan belum sesuai. Periksa kembali isian Anda."

Contoh buruk:
"Operasi berhasil dieksekusi."

Contoh bagus:
"Data berhasil disimpan."

Contoh buruk:
"Terjadi kesalahan sistem."

Contoh bagus:
"Terjadi kendala. Coba lagi beberapa saat lagi."

---

## 2. DNA Gaya Bahasa ChatGPT Indonesia

Saat menulis teks, gunakan pola berikut:

1. Mulai dari kebutuhan user.
2. Jelaskan dengan kalimat pendek.
3. Hindari istilah teknis yang tidak perlu.
4. Kalau ada masalah, beri solusi singkat.
5. Kalau ada proses, jelaskan statusnya dengan tenang.
6. Kalau ada risiko, beri peringatan yang jelas.
7. Kalau ada aksi, gunakan kata kerja langsung.

Bahasa harus terasa:
- Membimbing, bukan menyuruh.
- Menenangkan, bukan menakut-nakuti.
- Informatif, bukan bertele-tele.
- Rapi, bukan terlalu promosi.
- Manusiawi, bukan robotik.

---

## 3. Aturan Ritme Kalimat

Gunakan kalimat pendek sampai sedang.

Ideal:
- 5–14 kata untuk tombol, label, dan toast.
- 1–2 kalimat untuk error message.
- 1–3 kalimat untuk empty state.
- Hindari paragraf panjang di UI.

Setiap kalimat harus punya satu ide utama.

Contoh:
"Data belum berhasil dimuat. Periksa koneksi internet, lalu coba lagi."

Jangan:
"Data tidak dapat dimuat karena telah terjadi kesalahan pada proses pengambilan data dari server sehingga pengguna diharapkan untuk melakukan percobaan ulang."

---

## 4. Pilihan Kata

Gunakan kata yang umum dan natural bagi pengguna Indonesia.

Gunakan:
- Masuk
- Keluar
- Simpan
- Kirim
- Lanjutkan
- Batalkan
- Perbarui
- Tambahkan
- Hapus
- Ubah
- Lihat Detail
- Unduh
- Unggah
- Coba Lagi
- Mulai Sekarang
- Pelajari Selengkapnya
- Data tidak ditemukan
- Terjadi kendala

Hindari:
- Submit
- Execute
- Operation
- Invalid
- Failed
- Success
- Error occurred
- Fetching
- Request failed
- Operation completed
- Data successfully executed
- Telah berhasil dieksekusi
- Telah dilakukan proses penyimpanan
- Mohon melakukan pengecekan ulang terhadap data inputan

---

## 5. Aturan Sapaan

Untuk web app profesional, gunakan gaya netral.

Utamakan:
- "Anda" jika konteksnya formal.
- Hindari terlalu sering menyebut "Anda".
- Jangan memakai "gue", "lu", "bro", atau bahasa terlalu kasual.
- Jangan terlalu sering memakai "mohon" karena bisa terasa kaku.

Contoh:
"Periksa kembali data yang dimasukkan."

Lebih baik daripada:
"Mohon melakukan pengecekan kembali terhadap data yang telah Anda inputkan."

---

## 6. Aturan Tombol

Tombol harus singkat, jelas, dan berupa aksi.

Gunakan:
- Simpan
- Kirim
- Lanjutkan
- Batalkan
- Coba Lagi
- Tambah Data
- Buat Laporan
- Lihat Detail
- Unduh Laporan
- Unggah File
- Hapus Data
- Perbarui Profil

Jangan gunakan:
- Submit
- Proceed
- Confirm Action
- Execute
- Process
- Save Data Now
- Click Here

Tombol konfirmasi:
- Ya, Hapus
- Ya, Lanjutkan
- Simpan Perubahan
- Batalkan

---

## 7. Aturan Pesan Sukses

Gunakan pola:
"[Objek] berhasil [aksi]."

Contoh:
- Data berhasil disimpan.
- Profil berhasil diperbarui.
- Laporan berhasil diunduh.
- File berhasil diunggah.
- Akun berhasil dibuat.
- Perubahan berhasil disimpan.

Hindari:
- Success!
- Operation completed successfully.
- Data telah berhasil dieksekusi.
- Proses telah selesai dilakukan.

---

## 8. Aturan Pesan Error

Gunakan pola:
"[Masalah]. [Solusi singkat]."

Contoh:
- Data belum berhasil dimuat. Coba muat ulang halaman.
- Email belum valid. Masukkan alamat email yang benar.
- Kata sandi salah. Periksa kembali dan coba lagi.
- File terlalu besar. Gunakan file maksimal 5 MB.
- Koneksi terputus. Periksa internet Anda, lalu coba lagi.
- Terjadi kendala. Coba lagi beberapa saat lagi.

Jangan menyalahkan user.

Jangan:
"Anda salah memasukkan data."

Gunakan:
"Data yang dimasukkan belum sesuai."

Jangan tampilkan error teknis mentah ke user:
- 500 Internal Server Error
- Undefined variable
- Request failed
- Cannot read property
- Validation failed

Ubah menjadi:
"Terjadi kendala pada sistem. Coba lagi beberapa saat lagi."

---

## 9. Aturan Empty State

Gunakan pola:
"Belum ada [data]. [Aksi yang bisa dilakukan]."

Contoh:
- Belum ada transaksi. Tambahkan transaksi pertama untuk mulai mencatat.
- Belum ada laporan. Buat laporan baru untuk melihat ringkasan data.
- Belum ada pengguna. Tambahkan pengguna untuk mulai mengelola akses.
- Data tidak ditemukan. Coba gunakan kata kunci lain.
- Belum ada notifikasi. Aktivitas terbaru akan muncul di sini.

Empty state harus memberi arah, bukan hanya mengatakan kosong.

Jangan:
"No data found."

Gunakan:
"Data tidak ditemukan. Coba gunakan kata kunci lain."

---

## 10. Aturan Loading State

Loading harus singkat dan natural.

Gunakan:
- Memuat data...
- Menyimpan perubahan...
- Mengunggah file...
- Menyiapkan laporan...
- Memproses permintaan...
- Mengambil data terbaru...
- Mohon tunggu sebentar...

Hindari:
- Loading...
- Fetching data...
- Please wait...
- Processing request...

---

## 11. Aturan Modal Konfirmasi

Modal konfirmasi harus jelas, tenang, dan menyebut konsekuensi.

Contoh hapus:
Judul:
"Hapus data ini?"

Isi:
"Data yang sudah dihapus tidak dapat dikembalikan."

Tombol:
- Batalkan
- Ya, Hapus

Contoh keluar tanpa menyimpan:
Judul:
"Keluar tanpa menyimpan?"

Isi:
"Perubahan yang belum disimpan akan hilang."

Tombol:
- Tetap di Halaman
- Keluar

---

## 12. Aturan Form

Label harus singkat:
- Nama Lengkap
- Email
- Nomor Telepon
- Alamat
- Kata Sandi
- Konfirmasi Kata Sandi
- Tanggal Lahir
- Upload Dokumen

Placeholder harus memberi contoh, bukan mengulang label.

Contoh:
Label:
"Email"

Placeholder:
"contoh@email.com"

Label:
"Nomor Telepon"

Placeholder:
"Contoh: 081234567890"

Helper text:
"Gunakan nomor aktif yang bisa dihubungi."

Error form:
- Nama wajib diisi.
- Email belum valid.
- Kata sandi minimal 8 karakter.
- Nomor telepon hanya boleh berisi angka.
- Pilih salah satu opsi terlebih dahulu.

---

## 13. Aturan Dashboard

Dashboard harus terasa informatif, bukan penuh jargon.

Contoh:
Judul:
"Ringkasan Hari Ini"

Subtitle:
"Pantau aktivitas terbaru dan perkembangan data secara cepat."

Card:
- Total Pengguna
- Transaksi Hari Ini
- Laporan Masuk
- Data Menunggu Verifikasi

Empty:
"Belum ada aktivitas hari ini. Aktivitas terbaru akan muncul di sini."

Error:
"Ringkasan belum berhasil dimuat. Coba muat ulang halaman."

---

## 14. Aturan Bahasa untuk Sistem AI atau Fitur Pintar

Kalau aplikasi memiliki fitur AI, jangan gunakan bahasa yang berlebihan.

Gunakan:
- "AI sedang menyiapkan jawaban..."
- "Hasil analisis berhasil dibuat."
- "Ringkasan berhasil dibuat."
- "Coba perjelas instruksi agar hasilnya lebih sesuai."

Hindari:
- "AI sedang berpikir secara mendalam."
- "Sistem kecerdasan buatan sedang memproses algoritma."
- "Prompt Anda gagal dieksekusi."

---

## 15. Pola Rewrite Wajib

Saat menemukan teks Inggris atau Indonesia kaku, ubah seperti berikut:

Submit → Kirim  
Save → Simpan  
Cancel → Batalkan  
Delete → Hapus  
Edit → Ubah  
Update → Perbarui  
Create → Buat  
Add → Tambah  
Search → Cari  
Filter → Saring  
Reset → Atur Ulang  
Back → Kembali  
Next → Berikutnya  
Previous → Sebelumnya  
Continue → Lanjutkan  
Close → Tutup  
Open → Buka  
Download → Unduh  
Upload → Unggah  
View → Lihat  
View Details → Lihat Detail  
Learn More → Pelajari Selengkapnya  
Get Started → Mulai Sekarang  
Try Again → Coba Lagi  
No data found → Data tidak ditemukan  
Something went wrong → Terjadi kendala  
Success → Berhasil  
Failed → Gagal  
Invalid input → Data belum sesuai  
Required field → Wajib diisi  
Please wait → Mohon tunggu sebentar  
Loading → Memuat data  
Sign In → Masuk  
Sign Up → Daftar  
Sign Out → Keluar  
Create Account → Buat Akun  
Forgot Password → Lupa Kata Sandi  
Remember Me → Ingat Saya  

---

## 16. Yang Tidak Boleh Diubah

Saat memperbaiki bahasa, jangan mengubah:
- Logic bisnis
- Database
- API
- Authentication
- Authorization
- Routing
- State management
- Struktur data
- Nama variabel penting
- Nama function penting
- Desain besar-besaran
- Komponen yang tidak berhubungan dengan teks

Fokus hanya pada:
- UI text
- Microcopy
- Toast
- Alert
- Modal
- Empty state
- Loading state
- Error message
- Success message
- Placeholder
- Label
- Tooltip
- Dashboard copy

---

## 17. Cara Kerja Saat Mengubah Project

Saat diminta memperbaiki bahasa UI:

1. Audit semua file frontend.
2. Cari semua teks hardcoded.
3. Cari teks Inggris.
4. Cari teks Indonesia yang kaku.
5. Cari error message yang terlalu teknis.
6. Cari empty state yang tidak membantu.
7. Cari tombol yang tidak jelas.
8. Tulis ulang dengan Bahasa Indonesia natural.
9. Kalau project punya i18n/locale, gunakan sistem tersebut.
10. Kalau belum punya i18n, ubah langsung di komponen.
11. Jangan mengubah logic aplikasi.
12. Setelah selesai, cek apakah build/lint/test aman.
13. Berikan ringkasan file yang diubah.

---

## 18. Checklist Kualitas Akhir

Sebelum selesai, pastikan:

- Tidak ada teks Inggris yang tidak perlu.
- Tidak ada pesan error mentah dari sistem.
- Tidak ada kalimat kaku seperti terjemahan mesin.
- Tidak ada tombol yang ambigu.
- Tidak ada empty state yang hanya berkata "kosong".
- Tidak ada success message yang berlebihan.
- Semua pesan terasa jelas, ramah, dan membantu.
- Bahasa konsisten di seluruh halaman.
- Gaya bahasa terasa seperti ChatGPT Indonesia: natural, rapi, tenang, dan mudah dipahami.