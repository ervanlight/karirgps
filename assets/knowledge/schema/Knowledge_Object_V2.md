# Knowledge Object V2 KarirGPS

## 1. Tujuan Template

Knowledge Object V2 adalah standar struktur data untuk merepresentasikan satu jurusan sebagai objek pengetahuan yang dapat dipakai oleh AI Report Engine, Recommendation Engine, Career Graph, SchoolGPS, CollegeGPS, CareerGPS, dan TalentGPS.

Template ini tidak dirancang sebagai artikel. Template ini dirancang sebagai kombinasi antara:

- dokumen referensi manusia
- sumber retrieval untuk RAG
- node dalam knowledge graph
- basis reasoning untuk rekomendasi personal
- struktur data yang dapat diskalakan ke ribuan file

Setiap file jurusan V2 idealnya tetap mudah dibaca manusia, tetapi prioritas utamanya adalah konsistensi, keterukuran, relasi, dan kemampuan diproses mesin.

## 2. Prinsip Desain

- Satu file merepresentasikan satu jurusan sebagai knowledge object.
- Informasi naratif dipisahkan dari informasi terstruktur.
- Semua atribut penting untuk reasoning diberi skala atau kategori.
- Relasi antarjurusan, skill, karier, industri, dan tipe siswa dibuat eksplisit.
- Field yang sering dipakai untuk filtering harus machine-readable.
- Field yang dipakai untuk laporan personal harus memiliki alasan singkat.
- Template harus stabil walau tren pekerjaan dan AI berubah.

## 3. Struktur Utama

Urutan section disarankan sebagai berikut:

1. Metadata
2. Identity
3. Core Summary
4. Structured Profile
5. Fit Profile
6. Cognitive and Interest Model
7. Learning Profile
8. Curriculum Map
9. Skills Graph
10. Career Graph
11. Industry and Market Outlook
12. AI Impact and Automation
13. Career Economics
14. Work Environment
15. Decision Factors
16. Relationships
17. Recommendations Logic
18. Retrieval Keywords
19. Human-Readable Report Blocks
20. Maintenance Notes

## 4. Metadata

Status: Wajib

Metadata adalah identitas teknis object. Bagian ini harus berada di YAML front matter paling atas agar mudah diparsing.

### Field

```yaml
---
object_type: major
schema_version: 2.0.0
id: major_teknik_informatika
slug: teknik-informatika
canonical_name: Teknik Informatika
aliases:
  - Informatika
  - Computer Science
  - Ilmu Komputer
status: active
country_context: Indonesia
education_level: sarjana
degree_type: S1
domain_cluster: sains-teknologi
knowledge_domains:
  - komputasi
  - software
  - data
created_at: 2026-06-28
updated_at: 2026-06-28
version: 2.0.0
owner: KarirGPS
review_status: draft
---
```

### Mengapa Penting

Metadata membantu versioning, deduplication, routing retrieval, filtering berdasarkan negara atau jenjang, dan migrasi schema di masa depan.

## 5. Identity

Status: Wajib

Bagian ini menjelaskan identitas jurusan secara ringkas dan stabil.

### Template

```yaml
identity:
  name: ""
  short_definition: ""
  long_definition: ""
  primary_domain: ""
  secondary_domains: []
  typical_degree_titles: []
  common_misconceptions: []
```

### Penjelasan

- `short_definition`: definisi satu kalimat untuk snippet retrieval.
- `long_definition`: definisi 80 sampai 150 kata untuk laporan.
- `common_misconceptions`: membantu AI mengoreksi ekspektasi user.

### Contoh Singkat

```yaml
identity:
  name: "Teknik Informatika"
  short_definition: "Jurusan yang mempelajari komputasi, pemrograman, algoritma, dan pembangunan sistem digital."
  common_misconceptions:
    - "Disamakan dengan sekadar memakai komputer."
    - "Dianggap tidak membutuhkan matematika sama sekali."
```

## 6. Core Summary

Status: Wajib

Bagian naratif pendek untuk dibaca manusia dan dipakai sebagai fallback RAG.

### Template

```markdown
## Core Summary

### Ringkasan

...

### Esensi Jurusan

...

### Output Pembelajaran Utama

- ...
- ...
```

### Mengapa Penting

RAG sering membutuhkan konteks natural language. Bagian ini menjadi blok utama untuk menjawab pertanyaan umum tanpa harus membaca seluruh object.

## 7. Structured Profile

Status: Wajib

Bagian ini mengubah karakter jurusan menjadi atribut numerik dan kategorikal.

### Skala Standar

Gunakan skala 1 sampai 5.

- 1: sangat rendah
- 2: rendah
- 3: sedang
- 4: tinggi
- 5: sangat tinggi

### Template

```yaml
structured_profile:
  difficulty_level: 4
  learning_curve: steep
  theory_intensity: 4
  practice_intensity: 5
  mathematics_intensity: 4
  memorization_intensity: 2
  reading_intensity: 3
  writing_intensity: 2
  creativity_intensity: 3
  communication_intensity: 3
  teamwork_intensity: 4
  field_work_intensity: 1
  lab_work_intensity: 4
  tool_dependency: 5
  portfolio_importance: 5
  certification_importance: 3
  internship_importance: 5
```

### Mengapa Penting

Atribut ini memungkinkan AI menjawab pertanyaan seperti:

- "Saya suka logika tetapi tidak suka matematika."
- "Saya introvert."
- "Saya tidak suka kerja lapangan."
- "Saya ingin jurusan yang portofolionya penting."

## 8. Fit Profile

Status: Wajib

Bagian ini menjelaskan kecocokan siswa dengan jurusan secara eksplisit.

### Template

```yaml
fit_profile:
  best_fit_traits:
    - trait: ""
      reason: ""
      weight: 5
  moderate_fit_traits:
    - trait: ""
      reason: ""
      weight: 3
  poor_fit_traits:
    - trait: ""
      reason: ""
      severity: high
  personality_fit:
    introvert_fit: 4
    extrovert_fit: 3
    structured_person_fit: 5
    exploratory_person_fit: 4
    people_oriented_fit: 3
    object_oriented_fit: 4
    idea_oriented_fit: 5
  motivation_fit:
    income_oriented: 4
    stability_oriented: 3
    impact_oriented: 4
    creativity_oriented: 3
    autonomy_oriented: 5
    prestige_oriented: 3
```

### Mengapa Penting

Bagian ini membantu AI membuat reasoning personal, bukan sekadar mencocokkan keyword. AI dapat menimbang trait user terhadap trait jurusan.

## 9. Cognitive and Interest Model

Status: Wajib

Bagian ini memetakan jurusan ke model psikometrik dan minat.

### Template

```yaml
cognitive_interest_model:
  holland_code:
    primary: I
    secondary: R
    tertiary: C
    code: IRC
    explanation: ""
  multiple_intelligence:
    dominant:
      - logis-matematis
    supporting:
      - visual-spasial
      - intrapersonal
    explanation: ""
  cognitive_styles:
    abstract_reasoning: 5
    numerical_reasoning: 4
    verbal_reasoning: 3
    spatial_reasoning: 3
    social_reasoning: 2
    systems_thinking: 5
```

### Mengapa Penting

Field ini menjadi jembatan antara hasil asesmen siswa dan knowledge object jurusan.

## 10. Learning Profile

Status: Wajib

Bagian ini menjelaskan pengalaman belajar yang akan dialami siswa.

### Template

```yaml
learning_profile:
  dominant_learning_modes:
    - problem_solving
    - project_based
    - lab_practice
  assessment_types:
    - exam
    - project
    - practicum
    - presentation
  common_struggle_points:
    - topic: ""
      why_difficult: ""
      mitigation: ""
  success_factors:
    - ""
  early_warning_signs:
    - ""
```

### Mengapa Penting

AI dapat menjelaskan bukan hanya apakah siswa cocok, tetapi apa risiko adaptasinya dan bagaimana mengatasinya.

## 11. Curriculum Map

Status: Wajib

Bagian ini membuat kurikulum lebih mudah dipakai untuk reasoning.

### Template

```yaml
curriculum_map:
  foundational_courses:
    - name: ""
      purpose: ""
      difficulty: 4
  core_courses:
    - name: ""
      skill_outputs: []
      related_careers: []
  advanced_courses:
    - name: ""
      specialization_link: ""
  elective_clusters:
    - cluster_name: ""
      courses: []
      career_direction: []
```

### Mengapa Penting

Kurikulum tidak hanya menjadi daftar mata kuliah, tetapi dapat ditautkan ke skill, spesialisasi, dan karier.

## 12. Skills Graph

Status: Wajib

Bagian ini mendefinisikan skill sebagai node yang memiliki relasi, level, dan output.

### Template

```yaml
skills_graph:
  hard_skills:
    - skill_id: skill_programming
      name: ""
      category: technical
      proficiency_target: intermediate
      importance: 5
      learned_from:
        - ""
      used_in_careers:
        - ""
      prerequisites:
        - ""
  soft_skills:
    - skill_id: skill_problem_solving
      name: ""
      importance: 5
      evidence_in_learning: ""
      used_in_careers:
        - ""
  transferable_skills:
    - skill_id: ""
      name: ""
      transferable_to_majors: []
      transferable_to_industries: []
```

### Mengapa Penting

Skills Graph memungkinkan AI menjawab:

- skill apa yang perlu dikuatkan
- jurusan mana yang overlap
- karier apa yang terbuka dari satu skill
- gap siswa terhadap jurusan

## 13. Career Graph

Status: Wajib

Bagian ini menghubungkan jurusan ke pekerjaan, jalur karier, dan progresi.

### Template

```yaml
career_graph:
  entry_level_roles:
    - role_id: ""
      title: ""
      match_strength: 5
      required_skills: []
      recommended_portfolio: []
      typical_industries: []
  mid_level_roles:
    - role_id: ""
      title: ""
      progression_from: []
      additional_skills: []
  long_term_roles:
    - role_id: ""
      title: ""
      leadership_track: true
      specialist_track: true
  non_linear_paths:
    - path_name: ""
      description: ""
      bridge_skills: []
  career_progression_examples:
    - stage_1: ""
      stage_2: ""
      stage_3: ""
      estimated_timeline: ""
```

### Mengapa Penting

AI dapat memberi laporan yang lebih realistis: bukan hanya "prospek kerja", tetapi urutan perkembangan karier.

## 14. Industry and Market Outlook

Status: Wajib

Bagian ini menyimpan sinyal pasar kerja secara terstruktur.

### Template

```yaml
market_outlook:
  indonesia_demand: 4
  global_demand: 4
  industry_growth: growing
  demand_stability: medium
  competition_level: high
  hiring_barrier: medium
  geographic_concentration:
    - kota_besar
    - remote_global
  key_industries:
    - ""
  emerging_specializations:
    - name: ""
      maturity: emerging
      relevance_score: 4
  future_outlook_5_years: positive
  future_outlook_10_years: positive_with_change
```

### Mengapa Penting

Bagian ini membantu AI membedakan jurusan yang demand-nya lokal, global, stabil, musiman, atau sangat kompetitif.

## 15. AI Impact and Automation

Status: Wajib

Bagian ini mengukur dampak AI terhadap jurusan dan karier turunannya.

### Template

```yaml
ai_impact:
  ai_impact_score: 5
  demand_effect: increases_demand
  automation_risk: medium
  augmentation_level: high
  task_displacement_risk:
    routine_tasks: high
    analytical_tasks: medium
    interpersonal_tasks: low
    creative_tasks: medium
  ai_resilient_skills:
    - ""
  ai_vulnerable_tasks:
    - ""
  recommended_ai_tools:
    - ""
  ai_readiness_advice: ""
```

### Mengapa Penting

AI Report Engine perlu membedakan antara jurusan yang terancam, berubah, atau justru makin kuat karena AI.

## 16. Career Economics

Status: Wajib

Bagian ini menyimpan informasi ekonomi karier tanpa membuat klaim terlalu presisi.

### Template

```yaml
career_economics:
  fresh_graduate_salary_range_idr:
    low: 0
    median: 0
    high: 0
    note: ""
  salary_growth_potential: 4
  income_ceiling: high
  time_to_stable_income: medium
  freelance_income_potential: 3
  entrepreneurship_opportunity: 4
  capital_requirement_for_business: low
  certification_roi: medium
```

### Mengapa Penting

User sering bertanya tentang gaji, stabilitas, bisnis, dan peluang naik kelas ekonomi. Bagian ini membuat jawaban lebih terarah.

## 17. Work Environment

Status: Wajib

Bagian ini menjelaskan realitas kerja setelah lulus.

### Template

```yaml
work_environment:
  remote_work_opportunity: 4
  field_work_requirement: 1
  office_work_requirement: 4
  client_facing_intensity: 3
  teamwork_intensity: 4
  individual_work_intensity: 4
  schedule_predictability: medium
  stress_level: 4
  work_life_balance: medium
  travel_requirement: low
  physical_risk: low
  emotional_labor: medium
```

### Mengapa Penting

AI dapat menjawab preferensi gaya hidup: introvert, remote, tidak suka lapangan, ingin stabil, atau menghindari stres tinggi.

## 18. Certifications, Tools, and Portfolio

Status: Wajib untuk jurusan yang memiliki tooling kuat, opsional untuk jurusan yang sangat teoritis.

### Template

```yaml
professional_assets:
  certifications:
    - name: ""
      provider: ""
      importance: 3
      stage: student_or_fresh_graduate
  software_tools:
    - name: ""
      category: ""
      importance: 5
  portfolio_assets:
    - asset_type: ""
      description: ""
      career_relevance: []
  competitions_or_projects:
    - name: ""
      value_for_student: ""
```

### Mengapa Penting

Bagian ini membantu AI memberi saran aksi konkret: belajar tool, membuat portofolio, ikut lomba, atau mengambil sertifikasi.

## 19. Decision Factors

Status: Wajib

Bagian ini adalah inti reasoning rekomendasi.

### Template

```yaml
decision_factors:
  choose_if:
    - condition: ""
      strength: high
      explanation: ""
  avoid_if:
    - condition: ""
      severity: high
      explanation: ""
  tradeoffs:
    - positive: ""
      negative: ""
      who_should_accept: ""
  deal_breakers:
    - ""
  compensating_factors:
    - weakness: ""
      can_be_offset_by: ""
```

### Mengapa Penting

Bagian ini memungkinkan AI memberi rekomendasi yang jujur, bukan hanya cocok atau tidak cocok.

## 20. Relationships

Status: Wajib

Bagian ini membangun graph antar object.

### Template

```yaml
relationships:
  similar_majors:
    - major_id: ""
      similarity_score: 0.8
      similarity_reason: ""
      key_difference: ""
  complementary_majors:
    - major_id: ""
      relationship_type: skill_complement
      reason: ""
  feeder_subjects:
    - subject_id: ""
      importance: 5
  related_careers:
    - career_id: ""
      match_strength: 5
  related_industries:
    - industry_id: ""
      relevance: 5
  related_school_tracks:
    - track_id: ""
      fit_strength: 4
```

### Mengapa Penting

Knowledge graph membutuhkan relasi eksplisit agar Recommendation Engine dapat membuat alternatif dan jalur transisi.

## 21. Recommendations Logic

Status: Wajib

Bagian ini menyimpan aturan reasoning tingkat object.

### Template

```yaml
recommendation_logic:
  strong_recommendation_rules:
    - if_user_profile:
        likes:
          - ""
        strengths:
          - ""
        values:
          - ""
      recommendation_reason: ""
  caution_rules:
    - if_user_profile:
        dislikes:
          - ""
        constraints:
          - ""
      caution_reason: ""
      mitigation: ""
  alternative_rules:
    - if_user_needs: ""
      consider_instead:
        - major_id: ""
      reason: ""
```

### Mengapa Penting

Ini membuat AI dapat menjawab pertanyaan personal dengan pola reasoning yang konsisten.

## 22. Retrieval Keywords

Status: Wajib

Bagian ini dipakai untuk indexing dan retrieval.

### Template

```yaml
retrieval_keywords:
  primary_keywords: []
  secondary_keywords: []
  user_language_keywords: []
  misconception_keywords: []
  career_keywords: []
  skill_keywords: []
  negative_keywords: []
```

### Mengapa Penting

User tidak selalu memakai istilah akademik. Field ini menjembatani bahasa user seperti "suka ngoding", "tidak mau banyak ngomong", atau "ingin kerja dari rumah" dengan object yang benar.

## 23. Human-Readable Report Blocks

Status: Wajib

Bagian ini menyediakan blok naratif siap pakai untuk laporan.

### Template

```markdown
## Human-Readable Report Blocks

### Untuk Siswa yang Sangat Cocok

...

### Untuk Siswa yang Cukup Cocok tetapi Berisiko

...

### Untuk Siswa yang Kurang Cocok

...

### Narasi Prospek Masa Depan

...

### Narasi Dampak AI

...
```

### Mengapa Penting

Structured data bagus untuk scoring, tetapi laporan personal tetap membutuhkan bahasa natural yang halus, jelas, dan tidak terasa seperti template mentah.

## 24. Maintenance Notes

Status: Wajib

Bagian ini membantu quality control jangka panjang.

### Template

```yaml
maintenance:
  data_confidence: medium
  last_reviewed_by: ""
  review_cycle: annual
  fields_to_review_regularly:
    - salary
    - ai_impact
    - market_outlook
    - tools
  source_policy: "Use synthesized, non-copied, periodically reviewed information."
  change_log:
    - version: 2.0.0
      date: 2026-06-28
      changes:
        - "Initial V2 template."
```

### Mengapa Penting

Knowledge base yang dipakai bertahun-tahun perlu mekanisme update, audit, dan confidence.

## 25. Field Wajib dan Opsional

### Wajib

- Metadata
- Identity
- Core Summary
- Structured Profile
- Fit Profile
- Cognitive and Interest Model
- Learning Profile
- Curriculum Map
- Skills Graph
- Career Graph
- Industry and Market Outlook
- AI Impact and Automation
- Career Economics
- Work Environment
- Decision Factors
- Relationships
- Recommendations Logic
- Retrieval Keywords
- Human-Readable Report Blocks
- Maintenance Notes

### Opsional

- Certification detail untuk jurusan yang belum memiliki sertifikasi umum
- Professional license untuk jurusan tanpa jalur profesi formal
- Field work hazard untuk jurusan tanpa kerja lapangan
- Entrepreneurship path detail untuk jurusan dengan peluang bisnis rendah
- Global mobility detail untuk jurusan yang sangat lokal
- Regulatory requirement untuk jurusan non-regulatif

## 26. Contoh Singkat Pengisian

Contoh ini hanya ilustrasi parsial, bukan isi jurusan lengkap.

```yaml
structured_profile:
  mathematics_intensity: 4
  creativity_intensity: 3
  communication_intensity: 3
  field_work_intensity: 1
  portfolio_importance: 5

fit_profile:
  best_fit_traits:
    - trait: "Suka memecahkan masalah logis"
      reason: "Jurusan ini banyak berisi pemecahan masalah bertahap."
      weight: 5
  poor_fit_traits:
    - trait: "Tidak nyaman belajar mandiri"
      reason: "Perkembangan tool dan teknologi menuntut pembelajaran terus-menerus."
      severity: high

work_environment:
  remote_work_opportunity: 4
  teamwork_intensity: 4
  stress_level: 4
  work_life_balance: medium

ai_impact:
  ai_impact_score: 5
  demand_effect: increases_demand
  automation_risk: medium
  augmentation_level: high
```

## 27. Best Practice untuk AI Retrieval

### Chunking

- Pisahkan chunk berdasarkan section, bukan berdasarkan panjang karakter saja.
- Simpan metadata `section_name`, `object_id`, `schema_version`, dan `field_path` pada setiap chunk.
- Untuk YAML besar, buat chunk per object subtree seperti `skills_graph`, `career_graph`, dan `decision_factors`.

### Naming

- Gunakan slug stabil dan lowercase.
- Gunakan id eksplisit untuk major, skill, career, industry, dan school track.
- Hindari mengganti id ketika nama tampilan berubah.

### Retrieval Strategy

- Gunakan hybrid retrieval: semantic search untuk narasi, metadata filtering untuk field terstruktur.
- Untuk pertanyaan personal, prioritaskan `fit_profile`, `structured_profile`, `decision_factors`, dan `recommendation_logic`.
- Untuk pertanyaan karier, prioritaskan `career_graph`, `career_economics`, `market_outlook`, dan `ai_impact`.
- Untuk pertanyaan jurusan mirip, prioritaskan `relationships`.
- Untuk pertanyaan "saya tidak suka X", gunakan juga `negative_keywords`, `avoid_if`, dan `deal_breakers`.

### Reasoning Strategy

- Jangan hanya mencocokkan satu trait. Gunakan weighted reasoning.
- Bedakan hard mismatch, soft mismatch, dan mismatch yang bisa dikompensasi.
- Selalu jelaskan tradeoff, terutama untuk gaji, stres, matematika, komunikasi, dan peluang remote.
- Gunakan structured score untuk ranking, lalu gunakan narasi untuk explanation.

### Quality Control

- Setiap field numerik harus memakai skala yang sama.
- Setiap score penting harus memiliki alasan naratif.
- Jangan mengisi field dengan klaim absolut.
- Gaji, demand, AI impact, dan tools harus direview berkala.
- Hindari copy dari website kampus atau lowongan kerja.
- Gunakan bahasa stabil, bukan bahasa tren sesaat.

## 28. Rekomendasi Format File Final

Setiap jurusan V2 sebaiknya tetap berupa markdown dengan YAML front matter dan blok YAML terstruktur di dalam section.

Format ini dipilih karena:

- mudah dibaca manusia
- mudah di-diff di version control
- mudah dipecah menjadi chunk retrieval
- mudah dikonversi ke JSON
- tetap fleksibel untuk penjelasan naratif

## 29. Catatan Arsitektur

Knowledge Object V2 sebaiknya dianggap sebagai sumber canonical. Jika di masa depan KarirGPS membuat database, API, atau graph engine, struktur ini dapat menjadi basis transformasi ke:

- JSON document
- vector index
- graph database
- feature store rekomendasi
- prompt context untuk AI Report Engine
- rules engine untuk rekomendasi personal

Dengan desain ini, setiap jurusan tidak hanya menjawab "apa jurusan ini", tetapi juga "untuk siapa jurusan ini cocok", "mengapa cocok", "apa risikonya", "bagaimana jalur kariernya", dan "bagaimana masa depannya berubah karena AI".
