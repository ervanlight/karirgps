// Catatan: versi sebelumnya menempelkan seluruh UI microcopy style guide
// (aturan tombol, modal, form, dashboard, dst — lihat claude.md di root)
// apa adanya ke prompt laporan AI. Sebagian besar tidak relevan untuk teks
// naratif panjang (laporan bukan tombol/toast), jadi di sini hanya bagian
// yang benar-benar dipakai saat menulis narasi panjang -- lebih hemat token,
// kualitas instruksi sama relevannya.
export const STYLE_GUIDE = `Gaya Bahasa Indonesia untuk Teks Naratif Panjang

Prinsip: Jelas, ringkas, natural, ramah, profesional. Tidak kaku, tidak terlalu formal, tidak terasa seperti hasil terjemahan mesin, tidak membuat pembaca merasa disalahkan.

Pola menulis:
1. Mulai dari kebutuhan pembaca, bukan dari fitur/data.
2. Kalimat pendek sampai sedang -- setiap kalimat satu ide utama.
3. Hindari istilah teknis/akademis yang tidak perlu (lihat larangan kata di bawah).
4. Kalau membahas risiko, sampaikan dengan jelas tapi tidak menakut-nakuti.

Sapaan: utamakan "kamu" untuk siswa (sesuai brand voice), "Anda"/"anak Anda" untuk laporan orang tua. Jangan pakai "gue", "lu", "bro". Jangan memakai "mohon" berlebihan -- terasa kaku.

Kata yang dihindari karena terasa seperti dokumen formulir, bukan tulisan manusia:
komprehensif, holistik, optimal, mengeksekusi, dieksekusi, "telah dilakukan proses", "berdasarkan hasil analisis menunjukkan bahwa".`;
