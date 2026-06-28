#!/usr/bin/env python3
"""
KarirGPS — Test Runner untuk 6 Profil Uji
Menjalankan AI report engine dan mengevaluasi output secara otomatis.

Jalankan: python3 test_profiles.py
Butuh: ANTHROPIC_API_KEY di environment
"""

import os
import json
import time
import sys
from datetime import datetime

try:
    import anthropic
except ImportError:
    print("Install dulu: pip install anthropic")
    sys.exit(1)

# ── System Prompt (dari AI_ReportEngine.md) ───────────────────
SYSTEM_PROMPT = """Kamu adalah konselor karir dan pendidikan yang menulis laporan personal untuk seorang siswa Indonesia.

Tugasmu: membaca profil psikometri siswa dari empat dimensi, lalu menulis laporan yang terasa seperti ditulis oleh seseorang yang benar-benar mengenal mereka — bukan seperti output dari mesin atau formulir.

IDENTITAS DAN SUARA

Kamu bukan konselor formal yang bicara dari balik meja. Kamu adalah kakak yang lebih tua — seseorang yang sudah melewati persimpangan yang sama, pernah bingung, dan sekarang mau jujur tentang apa yang sebenarnya membantu. Kamu bicara langsung ke orang yang membaca, menggunakan "kamu."

Tone: hangat tapi tidak memuji-muji. Jujur tapi tidak menghakimi. Spesifik tapi tidak menghakimi.

Yang TIDAK boleh muncul:
- Kalimat seperti "Kamu pasti bisa!" atau "Raih masa depanmu!"
- Tanda seru berlebihan
- Kata "komprehensif", "holistik", "optimal"
- Pujian yang terasa kosong atau tidak spesifik
- Generalisasi yang bisa berlaku untuk siapapun

Yang harus selalu ada:
- Kekhususan — setiap paragraf harus terasa ditulis untuk orang ini, bukan template
- Kejujuran — termasuk soal hal yang perlu diwaspadai
- Konteks Indonesia — rekomendasi yang nyata dan bisa dieksekusi di sini

KERANGKA INTERPRETASI PROFIL

DIMENSI 1 — RIASEC: R=Realistic, I=Investigative, A=Artistic, S=Social, E=Enterprising, C=Conventional
DIMENSI 2 — MI: L=Linguistik, LM=Logis-Matematis, SP=Spasial, MU=Musikal, BK=Kinestetik, N=Naturalis, IP=Interpersonal, IA=Intrapersonal
DIMENSI 3 — Work Values: ST=Stabilitas, DA=Dampak, OT=Otonomi, KR=Kreativitas, KM=Kemakmuran, FL=Fleksibilitas
DIMENSI 4 — Konteks: tahap/domisili/jalur/kondisi_biaya/tanggungan_keluarga/kemampuan_akademik/mobilitas

ATURAN KONTEKS INDONESIA:
1. Stabilitas (ST) tinggi bukan tanda ambisi rendah. Hormati ini, jangan siratkan "kamu harusnya lebih berani."
2. Kemakmuran (KM) tinggi sering bentuk tanggung jawab keluarga. Frame sebagai motivasi yang sah.
3. Otonomi (OT) tinggi: sertakan catatan realistis soal risiko di usia awal karir.
4. DA + KM bukan dikotomi — tunjukkan bidang yang menawarkan keduanya.
5. PERLU_USAHA/RATA: fokus pada jalur yang bisa dimasuki DAN dikuasai.
6. Luar Jawa: wajib sebut PTN berkualitas di wilayah domisili.

FILTER KONTEKS (D4):
- PRIORITAS_HEMAT: fokus SNBT ke PTN, kedinasan, KIP-Kuliah, Beasiswa Unggulan. JANGAN rekomendasikan kampus swasta mahal.
- LANGSUNG_KERJA: fokus D3, bootcamp bersertifikat BNSP, magang terstruktur. Bukan S1 4 tahun.
- TETAP: hanya kampus di wilayah domisili.
- ATAS: boleh sebut FK, Teknik Informatika UI/ITB/ITS.
- PERLU_USAHA: hindari jurusan dengan persaingan sangat ketat.

TABEL KOMBINASI (panduan, bukan script):
RIASEC+MI → arah: I+LM=Data Science/Fisika, I+SP=Arsitektur/UX, A+SP=DKV/Animasi, A+L=Sastra/Skenario, S+IP=Psikologi/HR, E+L=Hukum/PR, E+LM=Keuangan/Konsultansi, E+IP=Manajemen/Wirausaha, R+BK=Teknik/Fisioterapi, R+N=Pertanian/Lingkungan
RIASEC+WV → peran: A+OT=Freelance/Creative director, A+KM=UX Lead/Art Director, S+ST=Guru PNS/Konselor BK, S+DA=NGO/Komunitas, E+OT=Founder/Konsultan mandiri, E+KM=Investment banker/Sales Director, R+ST=Teknisi BUMN, R+KM=Minyak&Gas/Pilot

STRUKTUR OUTPUT — JSON dengan key:
profil_singkat (3 kalimat, free), pembuka (1 paragraf), profil_kepribadian (2-3 paragraf D1+D2),
nilai_kerja (1-2 paragraf D3), jurusan (array 3: nama/reasoning/kampus_rekomendasi/keketatan),
profesi (array 5: nama/gambaran_nyata/jalur_masuk/catatan), kekuatan (array 2-3 string),
perlu_diwaspadai (array 2 string), langkah_selanjutnya (1-2 paragraf), penutup (1 paragraf)

LARANGAN ABSOLUT:
1. Jangan kalimat yang berlaku untuk siapapun — setiap kalimat harus terikat ke profil ini.
2. Jangan frame nilai kerja rendah sebagai kekurangan.
3. Jangan rekomendasikan kampus swasta mahal jika PRIORITAS_HEMAT.
4. Jangan penutup kosong ("Semangat terus!", "Apapun pilihanmu, itu yang terbaik!").
5. Jangan sebut nama dimensi, kode, atau skor dalam laporan.
6. Output harus valid JSON — tidak ada backtick atau teks di luar JSON."""

# ── 6 Profil Uji ──────────────────────────────────────────────
PROFIL_UJI = [
    {
        "nomor": 1,
        "label": "Profil ideal baseline",
        "yang_diuji": "Output kualitas penuh, tidak ada constraint",
        "data": {
            "d1_riasec": {
                "skor": {"R": 4, "I": 11, "A": 16, "S": 8, "E": 14, "C": 3},
                "holland_code": ["A", "E", "I"],
                "deskripsi_primer": "Artistik",
                "deskripsi_sekunder": "Enterprising"
            },
            "d2_mi": {
                "skor": {"L": 14, "LM": 7, "SP": 12, "MU": 9, "BK": 4, "N": 3, "IP": 8, "IA": 11},
                "mi_profile": ["L", "SP", "IA"],
                "deskripsi_primer": "Linguistik",
                "deskripsi_sekunder": "Spasial"
            },
            "d3_workvalues": {
                "skor": {"ST": 3, "DA": 8, "OT": 16, "KR": 14, "KM": 9, "FL": 10},
                "values_profile": ["OT", "KR"],
                "deskripsi_primer": "Otonomi",
                "deskripsi_sekunder": "Kreativitas"
            },
            "d4_konteks": {
                "tahap": "SMA12", "domisili": "JABODETABEK",
                "jalur": ["PTN", "PTS"], "kondisi_biaya": "BEBAS",
                "tanggungan_keluarga": "MANDIRI", "kemampuan_akademik": "ATAS",
                "mobilitas": "TERBUKA"
            }
        }
    },
    {
        "nomor": 2,
        "label": "Constraints ketat, luar Jawa",
        "yang_diuji": "Filter PRIORITAS_HEMAT + domisili Sulawesi — harus sebut PTN lokal & beasiswa",
        "data": {
            "d1_riasec": {
                "skor": {"R": 5, "I": 14, "A": 6, "S": 16, "E": 7, "C": 10},
                "holland_code": ["S", "I", "C"],
                "deskripsi_primer": "Social",
                "deskripsi_sekunder": "Investigative"
            },
            "d2_mi": {
                "skor": {"L": 9, "LM": 6, "SP": 5, "MU": 4, "BK": 7, "N": 8, "IP": 15, "IA": 14},
                "mi_profile": ["IP", "IA", "L"],
                "deskripsi_primer": "Interpersonal",
                "deskripsi_sekunder": "Intrapersonal"
            },
            "d3_workvalues": {
                "skor": {"ST": 15, "DA": 14, "OT": 5, "KR": 4, "KM": 6, "FL": 8},
                "values_profile": ["ST", "DA"],
                "deskripsi_primer": "Stabilitas",
                "deskripsi_sekunder": "Dampak"
            },
            "d4_konteks": {
                "tahap": "SMA12", "domisili": "SULAWESI",
                "jalur": ["PTN", "KEDINASAN"], "kondisi_biaya": "PRIORITAS_HEMAT",
                "tanggungan_keluarga": "PERTAMA", "kemampuan_akademik": "RATA",
                "mobilitas": "PREFERENSI"
            }
        }
    },
    {
        "nomor": 3,
        "label": "Mahasiswa mempertimbangkan ulang",
        "yang_diuji": "Tone MABA — konfirmasi atau koreksi arah, bukan pilih dari nol",
        "data": {
            "d1_riasec": {
                "skor": {"R": 8, "I": 9, "A": 7, "S": 6, "E": 16, "C": 13},
                "holland_code": ["E", "C", "R"],
                "deskripsi_primer": "Enterprising",
                "deskripsi_sekunder": "Conventional"
            },
            "d2_mi": {
                "skor": {"L": 8, "LM": 15, "SP": 9, "MU": 5, "BK": 6, "N": 4, "IP": 13, "IA": 7},
                "mi_profile": ["LM", "IP", "SP"],
                "deskripsi_primer": "Logis-Matematis",
                "deskripsi_sekunder": "Interpersonal"
            },
            "d3_workvalues": {
                "skor": {"ST": 7, "DA": 6, "OT": 13, "KR": 5, "KM": 16, "FL": 9},
                "values_profile": ["KM", "OT"],
                "deskripsi_primer": "Kemakmuran",
                "deskripsi_sekunder": "Otonomi"
            },
            "d4_konteks": {
                "tahap": "MABA", "domisili": "JAWA_BESAR",
                "jalur": ["PTN"], "kondisi_biaya": "PERTIMBANGAN",
                "tanggungan_keluarga": "HARAPAN", "kemampuan_akademik": "MENENGAH",
                "mobilitas": "PREFERENSI"
            }
        }
    },
    {
        "nomor": 4,
        "label": "Tidak kuliah dulu — langsung kerja",
        "yang_diuji": "Filter LANGSUNG_KERJA — JANGAN rekomendasikan S1 4 tahun sebagai jalur utama",
        "data": {
            "d1_riasec": {
                "skor": {"R": 16, "I": 5, "A": 6, "S": 4, "E": 7, "C": 9},
                "holland_code": ["R", "C", "E"],
                "deskripsi_primer": "Realistic",
                "deskripsi_sekunder": "Conventional"
            },
            "d2_mi": {
                "skor": {"L": 5, "LM": 8, "SP": 7, "MU": 3, "BK": 15, "N": 14, "IP": 6, "IA": 9},
                "mi_profile": ["BK", "N", "LM"],
                "deskripsi_primer": "Kinestetik",
                "deskripsi_sekunder": "Naturalis"
            },
            "d3_workvalues": {
                "skor": {"ST": 14, "DA": 7, "OT": 8, "KR": 6, "KM": 9, "FL": 13},
                "values_profile": ["ST", "FL"],
                "deskripsi_primer": "Stabilitas",
                "deskripsi_sekunder": "Fleksibilitas"
            },
            "d4_konteks": {
                "tahap": "LULUS", "domisili": "KALIMANTAN",
                "jalur": ["KERJA"], "kondisi_biaya": "LANGSUNG_KERJA",
                "tanggungan_keluarga": "PERTAMA", "kemampuan_akademik": "PERLU_USAHA",
                "mobilitas": "TETAP"
            }
        }
    },
    {
        "nomor": 5,
        "label": "Eksplorasi — SMA 11, belum urgent",
        "yang_diuji": "Tone eksploratif — bukan action steps yang terlalu operasional",
        "data": {
            "d1_riasec": {
                "skor": {"R": 5, "I": 10, "A": 15, "S": 9, "E": 6, "C": 4},
                "holland_code": ["A", "S", "I"],
                "deskripsi_primer": "Artistik",
                "deskripsi_sekunder": "Social"
            },
            "d2_mi": {
                "skor": {"L": 9, "LM": 5, "SP": 13, "MU": 16, "BK": 8, "N": 6, "IP": 10, "IA": 7},
                "mi_profile": ["MU", "SP", "IP"],
                "deskripsi_primer": "Musikal",
                "deskripsi_sekunder": "Spasial"
            },
            "d3_workvalues": {
                "skor": {"ST": 4, "DA": 9, "OT": 10, "KR": 16, "KM": 7, "FL": 14},
                "values_profile": ["KR", "FL"],
                "deskripsi_primer": "Kreativitas",
                "deskripsi_sekunder": "Fleksibilitas"
            },
            "d4_konteks": {
                "tahap": "SMA11", "domisili": "SUMATERA",
                "jalur": ["PTN", "BELUM_TAHU"], "kondisi_biaya": "BEBAS",
                "tanggungan_keluarga": "TIDAK_BERAT", "kemampuan_akademik": "ATAS",
                "mobilitas": "TERBUKA"
            }
        }
    },
    {
        "nomor": 6,
        "label": "DA + KM tension test",
        "yang_diuji": "Harus tunjukkan DA & KM bisa bersamaan — jangan biarkan user merasa harus memilih",
        "data": {
            "d1_riasec": {
                "skor": {"R": 4, "I": 9, "A": 8, "S": 16, "E": 13, "C": 5},
                "holland_code": ["S", "E", "A"],
                "deskripsi_primer": "Social",
                "deskripsi_sekunder": "Enterprising"
            },
            "d2_mi": {
                "skor": {"L": 14, "LM": 8, "SP": 6, "MU": 5, "BK": 4, "N": 7, "IP": 16, "IA": 9},
                "mi_profile": ["IP", "L", "IA"],
                "deskripsi_primer": "Interpersonal",
                "deskripsi_sekunder": "Linguistik"
            },
            "d3_workvalues": {
                "skor": {"ST": 5, "DA": 16, "OT": 9, "KR": 7, "KM": 15, "FL": 8},
                "values_profile": ["DA", "KM"],
                "deskripsi_primer": "Dampak",
                "deskripsi_sekunder": "Kemakmuran"
            },
            "d4_konteks": {
                "tahap": "SMA12", "domisili": "JABODETABEK",
                "jalur": ["PTN", "PTS"], "kondisi_biaya": "PERTIMBANGAN",
                "tanggungan_keluarga": "HARAPAN", "kemampuan_akademik": "MENENGAH",
                "mobilitas": "TERBUKA"
            }
        }
    }
]

# ── Evaluasi kriteria ──────────────────────────────────────────
FORBIDDEN_WORDS = [
    "komprehensif", "holistik", "optimal", "Kamu pasti bisa",
    "Raih masa depan", "Semangat terus", "apapun pilihanmu",
    "RIASEC", "Holland Code", "Multiple Intelligences", "Work Values",
    "Dimensi 1", "Dimensi 2", "Dimensi 3", "Dimensi 4",
    "kode OT", "kode KR", "kode ST", "kode DA", "kode KM", "kode FL"
]

REQUIRED_KEYS = [
    "profil_singkat", "pembuka", "profil_kepribadian", "nilai_kerja",
    "jurusan", "profesi", "kekuatan", "perlu_diwaspadai",
    "langkah_selanjutnya", "penutup"
]

def evaluate_laporan(laporan: dict, profil: dict) -> dict:
    """Evaluasi output laporan terhadap checklist kualitas."""
    issues = []
    passes = []

    # 1. Cek semua key wajib ada
    missing = [k for k in REQUIRED_KEYS if k not in laporan]
    if missing:
        issues.append(f"❌ Key hilang: {missing}")
    else:
        passes.append("✅ Semua key wajib ada")

    # 2. Cek jurusan = 3, profesi = 5
    if len(laporan.get("jurusan", [])) == 3:
        passes.append("✅ Tepat 3 jurusan")
    else:
        issues.append(f"❌ Jurusan: {len(laporan.get('jurusan', []))} (harus 3)")

    if len(laporan.get("profesi", [])) == 5:
        passes.append("✅ Tepat 5 profesi")
    else:
        issues.append(f"❌ Profesi: {len(laporan.get('profesi', []))} (harus 5)")

    # 3. Cek kata terlarang
    full_text = json.dumps(laporan, ensure_ascii=False)
    found_forbidden = [w for w in FORBIDDEN_WORDS if w.lower() in full_text.lower()]
    if found_forbidden:
        issues.append(f"❌ Kata terlarang ditemukan: {found_forbidden}")
    else:
        passes.append("✅ Tidak ada kata terlarang")

    # 4. Cek filter PRIORITAS_HEMAT — tidak ada kampus swasta mahal
    if profil["d4_konteks"]["kondisi_biaya"] == "PRIORITAS_HEMAT":
        kampus_text = " ".join(j.get("kampus_rekomendasi", "") for j in laporan.get("jurusan", []))
        swasta_mahal = ["Binus", "Prasetiya Mulya", "Ciputra", "Pelita Harapan", "SGU"]
        found_swasta = [s for s in swasta_mahal if s in kampus_text]
        if found_swasta:
            issues.append(f"❌ PRIORITAS_HEMAT tapi merekomendasikan swasta mahal: {found_swasta}")
        else:
            passes.append("✅ Filter PRIORITAS_HEMAT dipatuhi")
        # Cek ada mention beasiswa
        if any(w in kampus_text.lower() for w in ["kip", "beasiswa", "bidikmisi", "snbt", "snbp"]):
            passes.append("✅ Beasiswa/jalur hemat disebutkan")
        else:
            issues.append("⚠️ PRIORITAS_HEMAT tapi tidak menyebut beasiswa/KIP-Kuliah")

    # 5. Cek filter LANGSUNG_KERJA — tidak pakai S1 4 tahun sebagai utama
    if profil["d4_konteks"]["kondisi_biaya"] == "LANGSUNG_KERJA":
        langkah = laporan.get("langkah_selanjutnya", "")
        if any(w in langkah.lower() for w in ["d3", "bootcamp", "bnsp", "sertifikasi", "magang", "kursus"]):
            passes.append("✅ Filter LANGSUNG_KERJA dipatuhi — ada D3/bootcamp/sertifikasi")
        else:
            issues.append("⚠️ LANGSUNG_KERJA tapi langkah tidak menyebut D3/bootcamp/sertifikasi")

    # 6. Cek luar Jawa menyebut PTN lokal
    domisili = profil["d4_konteks"]["domisili"]
    luar_jawa_map = {
        "SULAWESI": ["Unhas", "Unsrat", "UNM", "Untad"],
        "SUMATERA": ["USU", "Unand", "Unsri", "UNRI", "Unja"],
        "KALIMANTAN": ["Unmul", "Untan", "ULM", "Unib"],
        "MALUKU_PAPUA": ["Unpatti", "Uncen", "IAIN"],
        "BALI_NT": ["Unud", "Undiksha", "Mataram"],
    }
    if domisili in luar_jawa_map:
        kampus_text = " ".join(j.get("kampus_rekomendasi", "") for j in laporan.get("jurusan", []))
        local_ptns = luar_jawa_map[domisili]
        found_local = [p for p in local_ptns if p in kampus_text]
        if found_local:
            passes.append(f"✅ PTN lokal {domisili} disebutkan: {found_local}")
        else:
            issues.append(f"❌ Domisili {domisili} tapi tidak ada PTN lokal di rekomendasi")

    # 7. Profil singkat minimal 3 kalimat
    ps = laporan.get("profil_singkat", "")
    kalimat = [s.strip() for s in ps.split(".") if s.strip()]
    if len(kalimat) >= 3:
        passes.append(f"✅ profil_singkat: {len(kalimat)} kalimat")
    else:
        issues.append(f"⚠️ profil_singkat terlalu pendek: {len(kalimat)} kalimat")

    # 8. Tidak ada penutup kosong
    penutup = laporan.get("penutup", "")
    if any(p in penutup for p in ["Semangat!", "pasti bisa", "apapun pilihan"]):
        issues.append("❌ Penutup terasa kosong/generik")
    elif len(penutup) > 100:
        passes.append("✅ Penutup substantif")

    score = len(passes) / (len(passes) + len(issues)) * 100 if (passes or issues) else 0
    return {"passes": passes, "issues": issues, "score": round(score)}


def run_single_profile(client, profil_uji: dict) -> dict:
    """Jalankan satu profil uji dan kembalikan hasilnya."""
    print(f"\n{'='*60}")
    print(f"PROFIL {profil_uji['nomor']}: {profil_uji['label']}")
    print(f"Yang diuji: {profil_uji['yang_diuji']}")
    print(f"{'='*60}")

    start = time.time()
    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4000,
            system=SYSTEM_PROMPT,
            messages=[{
                "role": "user",
                "content": f"Tulis laporan lengkap untuk profil berikut:\n\n{json.dumps(profil_uji['data'], indent=2, ensure_ascii=False)}"
            }]
        )
        elapsed = round(time.time() - start, 1)
        text = response.content[0].text
        clean = text.strip()
        if clean.startswith("```"):
            lines = clean.split("\n")
            clean = "\n".join(lines[1:-1]) if lines[-1] == "```" else "\n".join(lines[1:])

        laporan = json.loads(clean)
        eval_result = evaluate_laporan(laporan, profil_uji["data"])

        print(f"\n⏱  Selesai dalam {elapsed}s")
        print(f"📊 Skor kualitas: {eval_result['score']}%")
        print(f"\n✅ Yang lulus ({len(eval_result['passes'])}):")
        for p in eval_result["passes"]:
            print(f"   {p}")
        if eval_result["issues"]:
            print(f"\n⚠️  Issues ({len(eval_result['issues'])}):")
            for i in eval_result["issues"]:
                print(f"   {i}")

        # Preview profil singkat
        print(f"\n📝 Profil singkat:")
        print(f"   {laporan.get('profil_singkat', '')[:200]}...")

        # Preview jurusan
        print(f"\n🎓 Jurusan yang direkomendasikan:")
        for j in laporan.get("jurusan", []):
            print(f"   • {j['nama']} — {j['kampus_rekomendasi'][:60]}")

        # Preview profesi
        print(f"\n💼 Profesi:")
        for p in laporan.get("profesi", []):
            print(f"   • {p['nama']}")

        # Token usage
        print(f"\n🔢 Token: {response.usage.input_tokens} input, {response.usage.output_tokens} output")
        biaya_rp = round((response.usage.input_tokens * 3 / 1_000_000 + response.usage.output_tokens * 15 / 1_000_000) * 15_500)
        print(f"💰 Estimasi biaya: ~Rp {biaya_rp}")

        return {
            "nomor": profil_uji["nomor"],
            "label": profil_uji["label"],
            "score": eval_result["score"],
            "issues": eval_result["issues"],
            "passes": eval_result["passes"],
            "elapsed": elapsed,
            "tokens_in": response.usage.input_tokens,
            "tokens_out": response.usage.output_tokens,
            "biaya_rp": biaya_rp,
            "laporan": laporan,
            "status": "OK"
        }

    except json.JSONDecodeError as e:
        elapsed = round(time.time() - start, 1)
        print(f"❌ JSON parse error setelah {elapsed}s: {e}")
        return {"nomor": profil_uji["nomor"], "label": profil_uji["label"],
                "status": "JSON_ERROR", "error": str(e), "score": 0}
    except Exception as e:
        elapsed = round(time.time() - start, 1)
        print(f"❌ Error setelah {elapsed}s: {e}")
        return {"nomor": profil_uji["nomor"], "label": profil_uji["label"],
                "status": "ERROR", "error": str(e), "score": 0}


def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("❌ Set ANTHROPIC_API_KEY dulu!")
        print("   export ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    print("🚀 KarirGPS — Test Runner: 6 Profil Uji")
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"🤖 Model: claude-sonnet-4-6")
    print("\nMenjalankan 6 profil... ini akan membutuhkan ~3-5 menit.")

    results = []
    for profil in PROFIL_UJI:
        result = run_single_profile(client, profil)
        results.append(result)
        if len(results) < len(PROFIL_UJI):
            time.sleep(2)  # Rate limit buffer

    # ── SUMMARY ──────────────────────────────────────────────
    print(f"\n{'='*60}")
    print("RINGKASAN HASIL — 6 PROFIL UJI")
    print(f"{'='*60}")

    ok = [r for r in results if r["status"] == "OK"]
    avg_score = round(sum(r["score"] for r in ok) / len(ok)) if ok else 0
    total_biaya = sum(r.get("biaya_rp", 0) for r in ok)
    total_elapsed = sum(r.get("elapsed", 0) for r in ok)

    print(f"\n{'#':<4} {'Label':<35} {'Score':<8} {'Waktu':<8} {'Status'}")
    print("-" * 70)
    for r in results:
        status_icon = "✅" if r["status"] == "OK" and r["score"] >= 80 else ("⚠️" if r["status"] == "OK" else "❌")
        print(f"{r['nomor']:<4} {r['label']:<35} {r.get('score', 0):<7}% {r.get('elapsed', 0):<8}s {status_icon} {r['status']}")

    print(f"\n📊 Rata-rata skor kualitas: {avg_score}%")
    print(f"⏱  Total waktu: {total_elapsed:.0f}s")
    print(f"💰 Total biaya 6 laporan: ~Rp {total_biaya:,}")
    print(f"💰 Estimasi biaya per laporan: ~Rp {round(total_biaya/max(len(ok),1)):,}")

    # Issues summary
    all_issues = []
    for r in results:
        for issue in r.get("issues", []):
            all_issues.append(f"Profil {r['nomor']}: {issue}")

    if all_issues:
        print(f"\n⚠️  ISSUES YANG PERLU DIPERBAIKI ({len(all_issues)}):")
        for issue in all_issues:
            print(f"   {issue}")
    else:
        print("\n✅ Semua profil lulus tanpa issues!")

    # Go/No-Go recommendation
    print(f"\n{'='*60}")
    if avg_score >= 85 and len(ok) == 6:
        print("✅ GO FOR LAUNCH — Semua profil lulus, kualitas di atas threshold")
    elif avg_score >= 70:
        print("⚠️  PERBAIKAN MINOR — Skor cukup tapi ada beberapa issues untuk di-fix")
    else:
        print("❌ PERLU ITERASI — Prompt perlu diperbaiki sebelum launch")
    print(f"{'='*60}")

    # Save full results
    output_file = f"/home/claude/test_results_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(output_file, "w", encoding="utf-8") as f:
        # Don't save full laporan text to keep file manageable
        summary = [{**r, "laporan": "[omitted]"} for r in results]
        json.dump(summary, f, ensure_ascii=False, indent=2)
    print(f"\n💾 Detail hasil disimpan ke: {output_file}")


if __name__ == "__main__":
    main()
