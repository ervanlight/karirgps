# Knowledge Object Specification V1

**Product:** KarirGPS  
**Document Type:** Engineering Specification and Knowledge Contract  
**Version:** 1.0  
**Status:** Normative Design Baseline  
**Governing Ontology:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`  
**Governing Constitution:** `governance/ai-constitution/AI_Constitution_V1.md`  
**Decision Model:** `architecture/decision-engine/Career_Decision_Graph_V1.md`  
**Communication Standard:** `architecture/agent-protocol/AI_Agent_Communication_Protocol_V1.md`  
**Orchestration Standard:** `architecture/orchestrator/AI_Orchestrator_Architecture_V1.md`  
**Target Path:** `assets/knowledge/specification/Knowledge_Object_Specification_V1.md`

---

## 0. Status, Authority, and Normative Language

### 0.1 Purpose

Knowledge Object Specification V1, selanjutnya disebut KOS, menetapkan contract resmi untuk pembentukan, validasi, publikasi, penggunaan, perubahan, dan audit seluruh Knowledge Object KarirGPS.

KOS berlaku untuk objek yang dibuat oleh:

- Knowledge Generator;
- Human Editor;
- AI Knowledge Agent;
- Knowledge Reviewer;
- Knowledge Validator;
- Claude Code;
- GPT;
- future AI models;
- institutional contributors;
- community contributors;
- external knowledge adapters.

### 0.2 Normative Terms

Dokumen ini menggunakan istilah normatif berikut:

- **WAJIB** berarti requirement yang harus dipenuhi.
- **DILARANG** berarti kondisi yang tidak boleh terjadi.
- **SEBAIKNYA** berarti requirement yang sangat direkomendasikan dan hanya boleh dikecualikan dengan alasan terdokumentasi.
- **BOLEH** berarti opsi yang diperbolehkan.
- **KONDISIONAL** berarti field atau aturan menjadi wajib ketika kondisi yang disebutkan terpenuhi.

### 0.3 Authority Order

Jika terjadi konflik, urutan authority adalah:

1. hak pengguna, hukum, keselamatan, privacy, dan fairness;
2. AI Constitution V1;
3. Career Knowledge Ontology V1;
4. KOS V1;
5. AI Agent Communication Protocol V1;
6. Career Decision Graph V1;
7. AI Orchestrator Architecture V1;
8. engine-specific contract;
9. generator, editor, atau model instruction.

KOS tidak boleh digunakan untuk melegitimasi knowledge yang melanggar Constitution atau Ontology.

### 0.4 Contract Invariants

Setiap Knowledge Object WAJIB mempertahankan invariant berikut:

1. Memiliki semantic identity yang stabil.
2. Merepresentasikan satu subject utama atau satu assertion atomik.
3. Memisahkan fakta, inference, projection, dan recommendation.
4. Memiliki provenance untuk setiap claim material.
5. Memiliki temporal scope jika knowledge dapat berubah.
6. Memiliki geographic scope jika knowledge bergantung wilayah.
7. Menggunakan entity type dan relationship yang sah menurut Ontology.
8. Tidak memuat user-specific fit, diagnosis, atau keputusan personal.
9. Tidak mengubah missing data menjadi negative claim.
10. Tidak menyembunyikan conflict evidence.
11. Tidak menimpa revision lama.
12. Dapat dibaca manusia dan diproses mesin.
13. Dapat divalidasi tanpa mengandalkan hidden prompt.
14. Dapat diaudit dari published claim menuju source.
15. Dapat diperluas tanpa mengubah makna field lama secara diam-diam.

### 0.5 System Impact

KOS menjadi boundary resmi antara semantic knowledge dan seluruh sistem yang mengonsumsi knowledge. Objek yang tidak memenuhi KOS tidak boleh dipakai sebagai authoritative input bagi recommendation, roadmap, report, atau high-impact reasoning.

---

# 1. Executive Summary

## 1.1 Purpose

KOS mendefinisikan format konseptual, field contract, lifecycle, validation gate, quality model, composition rule, dan packaging rule untuk seluruh Knowledge Object KarirGPS.

KOS menjawab:

- field apa yang harus tersedia;
- makna setiap field;
- kapan field wajib;
- jenis value yang sah;
- bagaimana evidence ditautkan;
- bagaimana relationship dibentuk;
- bagaimana version dan revision dikelola;
- bagaimana object dinyatakan layak untuk retrieval dan reasoning;
- bagaimana object dikoreksi, dideprecate, atau di-supersede;
- bagaimana human reviewer mengaudit object tanpa ambiguity.

## 1.2 KOS Versus Ontology

### Ontology

Career Knowledge Ontology mendefinisikan:

- entitas apa yang ada;
- makna entitas;
- relationship yang sah;
- batas semantik;
- inheritance;
- contextual assertion.

### KOS

KOS mendefinisikan:

- bagaimana satu entitas atau assertion dikemas menjadi Knowledge Object;
- field apa yang wajib;
- bagaimana version, review, evidence, quality, dan localization direpresentasikan;
- bagaimana object dinilai siap digunakan.

**Rationale:** Ontology menjelaskan dunia pengetahuan. KOS menetapkan contract representasinya.

**System impact:** Ontology dapat berkembang secara semantik tanpa memaksa semua consumer memahami format yang berbeda.

## 1.3 KOS Versus Database Schema

Database schema mengatur penyimpanan teknis, index, constraint, dan physical relation.

KOS mengatur semantic contract yang harus tetap sama pada teknologi penyimpanan apa pun.

KOS tidak menentukan:

- tabel;
- collection;
- graph store;
- index;
- partition;
- storage engine;
- query language.

**Rationale:** Backend dapat mengganti storage tanpa mengubah meaning Knowledge Object.

**System impact:** KOS menjadi source of truth lintas relational database, document store, graph store, vector store, dan file package.

## 1.4 KOS Versus JSON Schema

JSON Schema atau serialization schema memvalidasi bentuk payload tertentu.

KOS lebih luas. KOS menetapkan:

- semantik;
- lifecycle;
- role authority;
- evidence quality;
- relationship rules;
- temporal rules;
- quality gates;
- packaging;
- governance.

Implementasi boleh menghasilkan JSON Schema, class, type, atau validator dari KOS. Implementasi tersebut adalah turunan, bukan pengganti KOS.

## 1.5 KOS Versus Prompt

Prompt adalah instruction untuk menghasilkan atau memproses content.

KOS adalah contract independen dari model.

Prompt:

- dapat berubah;
- dapat berbeda antar-model;
- dapat bersifat task-specific.

KOS:

- versioned;
- model-neutral;
- auditable;
- enforceable;
- stable.

Output model tetap tidak valid jika melanggar KOS meskipun mengikuti prompt.

## 1.6 Rules

- Semua Knowledge Object baru WAJIB menyatakan `kos_version`.
- Semua generator WAJIB menghasilkan object minimal berstatus `draft`.
- Hanya object `active` dan memenuhi readiness profile yang boleh digunakan sebagai authoritative knowledge.
- Ontology class dan field semantics tidak boleh dibuat sendiri oleh generator.
- Human-readable content dan machine-readable identifiers harus hidup bersama.

## 1.7 Constraints

- KOS tidak berisi data domain aktual.
- KOS tidak menentukan storage implementation.
- KOS tidak menentukan scoring recommendation.
- KOS tidak menyimpan personal memory atau assessment result pengguna.

## 1.8 System Impact

KOS memungkinkan backend engineer, AI model, human editor, dan validator bekerja pada contract yang sama. Hal ini mengurangi format drift, semantic duplication, hidden assumptions, dan object yang tidak dapat diaudit.

---

# 2. Core Design Principles

## 2.1 Purpose

Prinsip desain menetapkan karakter yang wajib dipertahankan oleh seluruh object, validator, dan implementation profile.

## 2.2 Single Semantic Identity

Satu konsep memiliki satu `entity_id` yang stabil.

Nama, bahasa, source, atau revision tidak membuat identity baru selama makna konsep tetap sama.

**Constraint:** Sinonim DILARANG dibuat sebagai entity baru.

**Rationale:** Mencegah duplicate graph node.

**System impact:** Retrieval dan relationship resolution menjadi konsisten.

## 2.3 Atomic Knowledge

Satu object memiliki satu subject utama. Satu contextual assertion material memiliki satu proposition utama.

**Constraint:** Object DILARANG menggabungkan beberapa entitas independen hanya untuk mengurangi jumlah file.

**Rationale:** Atomicity memudahkan review, update, dan evidence tracing.

## 2.4 Evidence-first

Claim material WAJIB memiliki evidence.

**Constraint:** Narasi yang meyakinkan tidak menggantikan source.

**System impact:** Agent dapat membedakan established knowledge, inference, dan projection.

## 2.5 Human-readable

Definition, scope, relationship label, validation result, dan quality note harus dapat dibaca reviewer manusia.

## 2.6 Machine-readable

Identity, type, status, version, relationship type, locale, timestamp, dan reference harus memiliki controlled representation.

## 2.7 AI-native

Object harus mendukung:

- structured retrieval;
- graph reasoning;
- RAG;
- claim-level evidence;
- confidence;
- uncertainty;
- multi-agent exchange;
- automated validation.

## 2.8 Versioned and Immutable by Revision

Published revision tidak diubah in place.

Perubahan membuat `revision_id` baru.

## 2.9 Composable

Object dapat dirangkai melalui references tanpa menyalin seluruh object lain.

## 2.10 Explainable

Object harus menyediakan definition, scope, evidence, dan relationship rationale yang cukup untuk explanation.

## 2.11 Extensible

Field extension diperbolehkan melalui namespaced extension profile tanpa mengubah core field meaning.

## 2.12 Localization-ready

Identity dipisahkan dari label bahasa dan regional representation.

## 2.13 Backward Compatible

Consumer lama harus dapat mengabaikan compatible optional extensions tanpa kehilangan core meaning.

## 2.14 Contextual, Not Universal by Default

Salary, labor demand, regulation, AI impact, program availability, dan recognition WAJIB memiliki context waktu dan wilayah.

## 2.15 Fact-Inference Separation

Object harus membedakan:

- observation;
- verified fact;
- editorial synthesis;
- inference;
- projection;
- normative statement.

## 2.16 Relationship Precision

`related_to` hanya boleh digunakan jika relationship yang lebih spesifik tidak tersedia.

## 2.17 Reference-first Composition

Canonical entity lain direferensikan melalui ID. Full nested entity tidak menjadi default.

## 2.18 Non-compensatory Quality Gates

High completeness tidak dapat menutupi identity error, unsupported claim, authority violation, atau expired critical knowledge.

## 2.19 Retrieval-safe

Object harus memiliki label, aliases, scope, dan disambiguation yang mencegah retrieval salah.

## 2.20 Reasoning-ready

Object yang dipakai untuk reasoning harus memiliki relationship, evidence, context, confidence, dan uncertainty yang memadai.

## 2.21 Governed Generation

AI boleh menghasilkan Draft. AI tidak boleh menandai object high-impact sebagai Active tanpa validation dan authority yang ditetapkan.

## 2.22 System Impact

Prinsip ini memastikan knowledge tidak hanya konsisten secara format, tetapi juga aman digunakan sebagai reasoning substrate selama lebih dari satu dekade.

---

# 3. Knowledge Object Kinds and Compliance Profiles

## 3.1 Purpose

Bagian ini membedakan bentuk Knowledge Object agar entity, assertion, source, dan package tidak dicampur.

## 3.2 Object Kinds

### 3.2.1 Entity Object

Merepresentasikan satu entity sesuai Ontology.

Contoh konseptual:

- satu Career;
- satu Skill;
- satu University;
- satu Technology.

**Primary identity:** `entity_id`.

### 3.2.2 Contextual Assertion Object

Merepresentasikan satu claim yang berlaku dalam context tertentu.

Contoh konseptual:

- demand Career tertentu pada wilayah dan periode;
- recognition Credential pada jurisdiction;
- AI trend memengaruhi task tertentu pada horizon tertentu.

**Primary identity:** `assertion_id`.

### 3.2.3 Relationship Object

Merepresentasikan relationship material yang membutuhkan lifecycle, evidence, atau context independen.

Digunakan jika relationship tidak cukup direpresentasikan sebagai lightweight reference.

### 3.2.4 Evidence Object

Merepresentasikan evidence, observation, study result, dataset observation, atau editorial evidence assessment.

### 3.2.5 Source Object

Merepresentasikan source yang dapat digunakan banyak claim.

### 3.2.6 Package Object

Merepresentasikan release package yang berisi root object, dependency lock, validation report, dan manifest.

### 3.2.7 Collection Object

Merepresentasikan curated collection atau taxonomy view.

Collection tidak menciptakan semantic identity baru bagi member.

## 3.3 Compliance Profiles

### Core Profile

Memenuhi universal mandatory identity, lifecycle, version, dan provenance field.

### Published Profile

Memenuhi Core Profile, review, validation, license, source, dan audit requirement.

### Reasoning Ready Profile

Memenuhi Published Profile serta memiliki:

- semantic relationships;
- evidence coverage;
- confidence;
- uncertainty;
- temporal and geographic scope;
- explanation fields;
- no unresolved blocker.

### Retrieval Ready Profile

Memiliki:

- canonical name;
- display name;
- aliases;
- disambiguation;
- taxonomy paths;
- retrieval keywords;
- locale data.

### Localized Profile

Memiliki reviewed localization untuk locale tertentu.

### Volatile Knowledge Profile

Digunakan untuk labor market, salary, regulation, scholarship, opportunity, AI trend, dan data yang cepat berubah.

Wajib memiliki:

- effective period;
- expiry or review due;
- source recency;
- geography;
- freshness status.

## 3.4 Rules

- Satu object WAJIB menyatakan `object_kind`.
- Satu object BOLEH memenuhi lebih dari satu compliance profile.
- `active` tidak otomatis berarti `reasoning_ready`.
- Consumer WAJIB meminta profile yang sesuai dengan task.

## 3.5 Constraints

Entity Object DILARANG digunakan untuk menaruh semua market observations sebagai universal attributes.

## 3.6 Rationale

Pemisahan kind mencegah object besar, temporal contamination, dan evidence laundering.

## 3.7 System Impact

Backend dapat membangun class hierarchy, validator profile, dan storage projection dari contract yang sama.

---

# 4. Knowledge Object Lifecycle

## 4.1 Purpose

Lifecycle mengontrol siapa yang dapat mengubah object, kapan object dapat digunakan, dan jejak audit yang wajib tersedia.

## 4.2 Lifecycle Roles

- **Generator:** membuat Draft.
- **Editor:** mengubah Draft dan menanggapi review.
- **Reviewer:** menilai domain, evidence, language, dan localization.
- **Validator:** menjalankan validation contract.
- **Steward:** bertanggung jawab atas entity class atau domain.
- **Approver:** mengaktifkan object sesuai authority.
- **Maintainer:** menjaga freshness dan corrective update.
- **Governance Reviewer:** menangani exception, dispute, dan high-impact issue.

## 4.3 State: Draft

### Purpose

Menampung object yang belum siap digunakan.

### Allowed Changes

Generator dan Editor boleh mengubah seluruh field non-audit.

### Allowed Transitions

- Draft → Review
- Draft → Deleted
- Draft → Archived, jika pekerjaan dihentikan tetapi perlu disimpan

### Audit Requirements

- creator;
- created_at;
- kos_version;
- ontology_version;
- generation method;
- initial sources;
- change history.

### Constraints

Draft DILARANG menjadi authoritative reasoning source.

### System Impact

AI generator dapat bekerja cepat tanpa langsung mencemari active knowledge.

## 4.4 State: Review

### Purpose

Menunjukkan object sedang menjalani human atau authorized review.

### Allowed Changes

Editor boleh melakukan correction. Reviewer boleh menambahkan findings. Generator tidak boleh mengubah object tanpa review cycle reference.

### Allowed Transitions

- Review → Draft, jika perlu revisi besar
- Review → Validated
- Review → Archived
- Review → Deleted, jika object invalid dan tidak pernah dipublikasikan

### Audit Requirements

- reviewer identity;
- review scope;
- findings;
- decision;
- timestamp;
- conflict of interest;
- requested changes.

### Constraints

Review object DILARANG dipakai sebagai active source kecuali explicit experimental environment.

## 4.5 State: Validated

### Purpose

Menunjukkan object telah lulus validator yang diwajibkan, tetapi belum dipublikasikan.

### Allowed Changes

Hanya correction yang tidak membatalkan validation. Perubahan material mengembalikan object ke Draft atau Review.

### Allowed Transitions

- Validated → Active
- Validated → Review
- Validated → Archived
- Validated → Deleted, jika belum pernah Active

### Audit Requirements

- validation run;
- validator versions;
- results;
- unresolved warnings;
- readiness profiles;
- approval requirement.

### Constraints

Validated tidak berarti approved untuk seluruh use case.

## 4.6 State: Active

### Purpose

Menjadi revision yang sah untuk consumer sesuai compliance profile.

### Allowed Changes

Active revision immutable. Perubahan membuat revision baru.

### Allowed Transitions

- Active → Deprecated
- Active → Superseded
- Active → Archived, hanya melalui governance exception
- Active → Deleted, hanya untuk legal, privacy, security, atau invalid accidental publication

### Audit Requirements

- activated_by;
- activation date;
- approved profiles;
- effective period;
- validation report;
- source lock;
- integrity record.

### Constraints

Hanya satu revision boleh menjadi default Active untuk object profile dan context yang sama, kecuali explicit concurrent variants.

## 4.7 State: Deprecated

### Purpose

Menandai object masih dapat dibaca, tetapi tidak boleh digunakan untuk object atau reasoning baru.

### Allowed Changes

Hanya metadata, deprecation note, dan successor reference.

### Allowed Transitions

- Deprecated → Superseded
- Deprecated → Archived
- Deprecated → Active, hanya melalui revalidation dan governance approval

### Audit Requirements

- reason;
- date;
- replacement guidance;
- affected consumers.

### Constraints

Deprecated object harus menghasilkan warning ketika diretrieval.

## 4.8 State: Superseded

### Purpose

Menandai revision atau object telah digantikan.

### Allowed Changes

Hanya audit, successor reference, dan correction metadata.

### Allowed Transitions

- Superseded → Archived
- Superseded → Active, hanya untuk rollback formal

### Audit Requirements

- superseded_by;
- effective date;
- migration note;
- compatibility note;
- reason.

### Constraints

Superseded object tetap tersedia untuk historical reasoning dan audit.

## 4.9 State: Archived

### Purpose

Menyimpan object untuk historical, audit, atau research reference.

### Allowed Changes

Hanya archival metadata dan legal correction.

### Allowed Transitions

- Archived → Review, jika dipertimbangkan untuk reactivation
- Archived → Deleted, jika retention policy mengharuskan

### Audit Requirements

- archived_by;
- reason;
- retention class;
- access restriction.

### Constraints

Archived object tidak masuk default retrieval.

## 4.10 State: Deleted

### Purpose

Menandai object tidak lagi tersedia untuk normal use.

### Allowed Changes

Tidak ada perubahan content. Tombstone minimum dapat dipertahankan.

### Allowed Transitions

Tidak ada, kecuali restoration process formal yang membuat object baru atau revision baru.

### Audit Requirements

- deletion authority;
- reason;
- legal basis jika relevan;
- deletion date;
- affected dependencies;
- tombstone policy.

### Constraints

Active historical truth tidak boleh dihapus hanya karena outdated. Gunakan Superseded atau Archived.

## 4.11 Lifecycle Transition Matrix

| From | Allowed To | Primary Authority |
|---|---|---|
| Draft | Review, Archived, Deleted | Editor or Steward |
| Review | Draft, Validated, Archived, Deleted | Reviewer or Steward |
| Validated | Active, Review, Archived, Deleted | Approver |
| Active | Deprecated, Superseded, Archived, Deleted | Steward or Governance |
| Deprecated | Superseded, Archived, Active | Steward and Validator |
| Superseded | Archived, Active | Governance |
| Archived | Review, Deleted | Governance |
| Deleted | None | Not applicable |

## 4.12 Rationale

Lifecycle mencegah AI-generated content berpindah langsung menjadi authoritative knowledge.

## 4.13 System Impact

Backend dapat menerapkan permissions, publication gates, rollback, dan retrieval filters secara konsisten.

---

# 5. Universal Knowledge Object Contract

## 5.1 Purpose

Universal Contract mendefinisikan field yang tersedia pada seluruh object. Field identifiers menggunakan `snake_case` sebagai canonical machine name. Ini adalah semantic naming, bukan implementation code.

## 5.2 Requirement Levels

- **M:** Mandatory untuk semua object.
- **C:** Conditional, wajib pada kondisi tertentu.
- **O:** Optional.

## 5.3 Identity and Classification Fields

| Field | Level | Purpose | Validation | Ontology Relation |
|---|---:|---|---|---|
| `kos_version` | M | Menyatakan versi KOS | Harus merupakan versi supported | Mengikat object ke contract |
| `object_id` | M | Identitas stabil Knowledge Object | Unik, immutable, tidak berasal dari display name | Object-level identity |
| `revision_id` | M | Identitas immutable revision | Unik untuk setiap perubahan published atau reviewable | Version lineage |
| `object_kind` | M | Entity, assertion, relationship, evidence, source, package, atau collection | Harus dari controlled vocabulary | Menentukan validation profile |
| `entity_id` | C | Identitas semantik subject entity | Wajib untuk Entity Object dan relation ke entity | Mengacu Ontology entity |
| `entity_type` | C | Kelas entity | Wajib untuk Entity Object, harus valid pada Ontology | Ontology class |
| `ontology_class` | C | Canonical class path | Harus compatible dengan entity_type | Inheritance resolution |
| `assertion_id` | C | Identity assertion atomik | Wajib untuk Assertion Object | Contextual assertion model |
| `relationship_id` | C | Identity relationship material | Wajib untuk Relationship Object | Ontology predicate instance |
| `source_id` | C | Identity Source Object | Wajib untuk Source Object | Evidence model |
| `canonical_name` | C | Nama netral utama | Wajib untuk named entity | Ontology naming |
| `display_name` | C | Nama untuk locale utama | Wajib untuk published named entity | Localization |
| `object_title` | O | Judul manusiawi package atau assertion | Tidak boleh mengganti canonical_name | Presentation |
| `definition` | C | Definisi pembeda | Wajib untuk entity type, tidak circular | Ontology definition |
| `summary` | C | Ringkasan retrieval dan human scan | Wajib untuk Published Profile | Knowledge presentation |
| `description` | O | Penjelasan lebih lengkap | Tidak boleh memuat unsupported claims | Narrative layer |
| `purpose` | M | Fungsi object dalam knowledge system | Harus spesifik | Scope control |
| `scope` | M | Batas meaning dan applicability | Harus menyebut inclusion boundary | Ontology scope |
| `inclusion_criteria` | O | Kondisi masuk dalam konsep | Harus konsisten dengan definition | Identity resolution |
| `exclusion_criteria` | O | Kondisi yang bukan bagian konsep | Direkomendasikan untuk ambiguous entity | Disambiguation |
| `taxonomy_paths` | O | Jalur klasifikasi | Harus menggunakan taxonomy valid | Taxonomy projection |
| `tags` | O | Metadata discovery terkontrol | Tidak boleh mengganti relationship | Retrieval support |
| `retrieval_keywords` | O | Kata pencarian | Harus multilingual-aware | Retrieval support |
| `external_identifiers` | O | Mapping identifier eksternal | Harus menyebut namespace dan mapping type | Ontology alignment |

### Rules

- `object_id` dan `entity_id` DILARANG dipakai bergantian.
- Satu `entity_id` BOLEH memiliki beberapa `object_id` untuk representation profile, jurisdictional extension, atau contextual package yang sah.
- Satu `object_id` memiliki banyak `revision_id`.
- `canonical_name` tidak boleh memuat slogan, ranking, atau prediction.

### System Impact

Identity resolution dapat berlangsung lintas bahasa, source, dan version tanpa duplicate entity.

## 5.4 Language and Localization Fields

| Field | Level | Purpose | Validation | Ontology Relation |
|---|---:|---|---|---|
| `canonical_language` | M | Bahasa canonical content | Harus menggunakan language identity valid | Language entity |
| `default_locale` | M | Locale default object | Harus language-region compatible | Localization scope |
| `available_locales` | M | Locale yang tersedia | Harus sesuai localization entries | Localization availability |
| `localizations` | C | Localized label dan content | Wajib untuk Localized Profile | Local representation |
| `aliases` | O | Sinonim atau common labels | Harus memiliki language, type, dan status | Identity resolution |
| `abbreviations` | O | Singkatan | Harus disambiguated | Naming convention |
| `former_names` | O | Nama historis | Harus memiliki valid period | Temporal naming |
| `transliteration` | O | Representasi lintas script | Harus menyebut source script | Language support |
| `disambiguation_note` | C | Pembeda dari entity serupa | Wajib jika collision risk tinggi | Identity validation |
| `localization_notes` | O | Catatan equivalence dan cultural use | Tidak boleh mengubah semantic core | Local extension |

### Localization Entry Contract

Setiap localization entry minimal memiliki:

- locale;
- display_name;
- localized_definition atau reviewed summary;
- translation_status;
- reviewer;
- reviewed_at;
- source atau terminology authority;
- equivalence_note jika tidak exact.

### Constraints

Machine translation tanpa review tidak boleh berstatus `approved`.

## 5.5 Lifecycle and Version Fields

| Field | Level | Purpose | Validation |
|---|---:|---|---|
| `status` | M | Lifecycle state | Harus mengikuti transition rules |
| `version` | M | Human-readable object version | Harus meningkat sesuai change class |
| `ontology_version` | M | Ontology contract | Harus supported |
| `created_at` | M | Waktu object dibuat | Immutable |
| `created_by` | M | Actor pembuat | Identity atau generator record |
| `updated_at` | M | Waktu revision dibuat | Sama dengan revision creation |
| `effective_from` | C | Awal berlaku | Wajib untuk temporal knowledge |
| `effective_to` | C | Akhir berlaku | Wajib jika known |
| `published_at` | C | Waktu Active | Wajib untuk Active |
| `last_reviewed_at` | C | Review terakhir | Wajib untuk Validated dan Active |
| `next_review_due` | C | Jadwal review | Wajib untuk volatile object |
| `supersedes` | O | Revision atau object yang diganti | Harus valid reference |
| `superseded_by` | C | Successor | Wajib untuk Superseded |
| `deprecated_at` | C | Waktu deprecation | Wajib untuk Deprecated |
| `archived_at` | C | Waktu archive | Wajib untuk Archived |
| `deleted_at` | C | Waktu deletion | Wajib untuk Deleted |
| `change_class` | M | Editorial, compatible, semantic, breaking, context refresh | Harus sesuai version increment |
| `change_summary` | M | Ringkasan perubahan | Harus specific |
| `compatibility` | M | Backward compatibility state | Must declare compatible or breaking |

## 5.6 Semantic Content Fields

| Field | Level | Purpose | Validation | Ontology Relation |
|---|---:|---|---|---|
| `attributes` | M | Domain attributes | Keys harus terdaftar untuk entity profile | Entity attributes |
| `relationships` | C | Lightweight relationship references | Wajib untuk Reasoning Ready jika relationships material tersedia | Ontology predicates |
| `contextual_assertions` | O | References ke claims temporal atau regional | Assertion must have scope | Context model |
| `dependencies` | O | Object yang diperlukan untuk meaning atau validation | Harus typed | Composition |
| `related_objects` | O | Nonsemantic operational references | Tidak boleh mengganti ontology relationship | Packaging |
| `assumptions` | O | Assumption eksplisit | Wajib untuk projection atau derived claim | Epistemic model |
| `uncertainties` | C | Unknown dan limitation | Wajib jika confidence tidak high atau data disputed | Explainability |
| `counterevidence` | C | Evidence yang menentang | Wajib jika material conflict exists | Evidence model |
| `applicability` | C | Condition penggunaan claim | Wajib untuk contextual object | Context scope |
| `forbidden_interpretations` | O | Misuse yang harus dicegah | Direkomendasikan pada trait, market, dan AI object | Constitutional guardrail |

## 5.7 Evidence and Provenance Fields

| Field | Level | Purpose | Validation |
|---|---:|---|---|
| `claims` | C | Daftar claim material | Wajib untuk assertion dan evidence-rich entity |
| `evidence` | C | Evidence entries atau references | Wajib untuk Published Profile |
| `sources` | C | Source references | Wajib jika evidence tersedia |
| `provenance` | M | Lineage pembentukan object | Harus mencakup source, transformation, dan actor |
| `confidence` | M | Confidence object-level dan scoped | Harus memiliki basis |
| `evidence_status` | M | verified, supported, mixed, weak, disputed, unknown | Controlled vocabulary |
| `source_coverage` | C | Claim yang tercakup source | Wajib untuk Reasoning Ready |
| `methodology_notes` | O | Metode source atau synthesis | Wajib untuk quantitative derived data |
| `editorial_synthesis` | O | Ringkasan hasil synthesis | Harus dipisahkan dari source statement |
| `conflict_status` | M | none, minor, material, unresolved | Harus konsisten dengan counterevidence |
| `provenance_chain` | C | Tahap import, normalize, map, review | Wajib untuk generated or transformed content |

## 5.8 Relationship Entry Contract

Setiap relationship entry WAJIB atau KONDISIONAL memiliki:

| Field | Level | Purpose |
|---|---:|---|
| `relationship_id` | M | Identity relationship |
| `predicate` | M | Ontology relationship type |
| `target_entity_id` | M | Entity target |
| `target_entity_type` | M | Validation target class |
| `direction` | M | Outbound atau inbound representation |
| `relationship_status` | M | active, disputed, deprecated, superseded |
| `strength` | C | essential, strong, common, possible, emerging, disputed |
| `requirement_level` | C | legally_required, required, commonly_required, preferred, beneficial |
| `context` | C | Geography, time, industry, role, or scenario |
| `evidence_refs` | C | Evidence supporting relationship |
| `confidence` | M | Confidence scoped to relationship |
| `valid_from` | C | Temporal start |
| `valid_to` | C | Temporal end |
| `inverse_predicate` | O | Ontology-defined inverse |
| `rationale` | C | Human-readable explanation |
| `source_object_id` | M | Object declaring relationship |

### Relationship Constraints

- Full target object DILARANG di-embed secara default.
- `predicate` harus valid untuk source dan target type.
- Requirement relationship harus menyatakan level.
- Contextual relationship tidak boleh kehilangan geography atau time.

## 5.9 Claim Entry Contract

Setiap claim material WAJIB memiliki:

- `claim_id`;
- subject reference;
- predicate atau claim type;
- object, value, atau statement;
- claim class: observation, fact, synthesis, inference, projection, normative;
- geography jika relevant;
- valid time jika relevant;
- evidence references;
- source references;
- confidence;
- uncertainty;
- status;
- reviewer status.

### Claim Constraints

- Projection DILARANG diberi class fact.
- Editorial synthesis DILARANG dikutip seolah-olah source asli.
- Claim scope tidak boleh lebih luas daripada evidence.

## 5.10 Source Entry Contract

Setiap Source Object atau source entry minimal memiliki:

- `source_id`;
- source type;
- title;
- author or publisher;
- publication or issuance date;
- access or verification date;
- source locator;
- language;
- jurisdiction jika relevant;
- methodology summary jika relevant;
- primary or secondary status;
- license or usage terms;
- credibility assessment;
- source status;
- version atau edition jika tersedia.

## 5.11 Governance and Ownership Fields

| Field | Level | Purpose |
|---|---:|---|
| `owner` | M | Accountable domain or team |
| `maintainer` | M | Current maintenance actor |
| `contributors` | O | Creation contributors |
| `review_status` | M | not_started, in_review, changes_requested, approved, rejected |
| `review_history` | C | Audit reviews | 
| `validation_results` | C | Validator outputs |
| `approval` | C | Activation approval |
| `license` | M | Legal use terms |
| `usage_restrictions` | M | Allowed and prohibited use |
| `sensitivity_class` | M | Public, internal, restricted, highly_restricted |
| `allowed_purposes` | M | Authorized use classes |
| `prohibited_uses` | M | Explicit misuse constraints |
| `retention_class` | M | Retention treatment |
| `governance_notes` | O | Exception or decision notes |
| `conflict_of_interest` | C | Required for sponsored or interested review |

## 5.12 Quality and Readiness Fields

| Field | Level | Purpose |
|---|---:|---|
| `quality_score` | M | Aggregate quality summary |
| `accuracy_score` | C | Correctness assessment |
| `coverage_score` | C | Domain coverage |
| `completeness_score` | M | Mandatory and expected content coverage |
| `consistency_score` | M | Internal and cross-object consistency |
| `freshness_score` | M | Currentness relative to volatility |
| `evidence_quality_score` | M | Source and evidence quality |
| `relationship_quality_score` | C | Relationship precision and support |
| `localization_quality_score` | C | Localized content quality |
| `explainability_score` | M | Human explanation readiness |
| `reasoning_utility_score` | C | Utility for graph reasoning |
| `retrieval_quality_score` | C | Discoverability and disambiguation |
| `validation_score` | M | Validator result summary |
| `quality_method_version` | M | Scoring methodology version |
| `quality_notes` | M | Strengths, limitations, and blockers |
| `readiness_profiles` | M | Core, Published, Reasoning Ready, Retrieval Ready, Localized, Volatile |
| `blocking_issues` | M | Unresolved non-compensatory issues |
| `warnings` | M | Nonblocking limitations |

### Constraints

- `quality_score` DILARANG menggantikan component scores.
- Null atau not assessed harus dibedakan dari score 0.
- No blocker adalah requirement Active, bukan hasil average.

## 5.13 Integrity Fields

| Field | Level | Purpose |
|---|---:|---|
| `content_integrity_reference` | O | Mendeteksi perubahan revision |
| `dependency_lock` | C | Version references untuk package |
| `generation_record` | C | Model, method, or editor generation context |
| `transformation_history` | C | Import, normalize, merge, mapping steps |
| `audit_references` | M | References ke review, validation, dan change records |

## 5.14 Universal Forbidden Content

Knowledge Object DILARANG memuat sebagai canonical knowledge:

- user-specific recommendation score;
- user personal profile;
- hidden model instruction;
- prompt;
- private chain of thought;
- unsupported superlative;
- commercial ranking tanpa evidence dan scope;
- universal salary;
- universal job demand;
- deterministic personality-career mapping;
- universal AI replacement score;
- credential guarantee;
- program outcome guarantee;
- personal diagnosis;
- raw secret or credential;
- copied full external content without rights;
- source claim without attribution.

## 5.15 Rationale

Universal Contract memastikan object dari manusia, model, institution, dan ingestion pipeline dapat diproses dengan meaning yang sama.

## 5.16 System Impact

Backend dapat menurunkan class, validator, event, audit view, graph projection, RAG chunk, dan review UI dari satu specification.

---

# 6. Entity-Specific Templates

## 6.1 General Rules

Setiap template di bawah mewarisi Universal Contract.

Istilah:

- **Inherited fields:** seluruh mandatory universal fields yang applicable.
- **Mandatory domain fields:** field di dalam `attributes` atau reference yang wajib untuk entity.
- **Optional domain fields:** enrichment yang sah.
- **Forbidden fields:** content yang tidak boleh menjadi intrinsic entity attribute.
- **Relationship rules:** allowed atau required relationships.
- **Common mistakes:** error yang harus ditangkap reviewer atau validator.

---

## 6.2 Career

**Purpose:** Merepresentasikan jalur aktivitas profesional yang memiliki work purpose, task pattern, competency, dan progression.

**Inherited fields:** Seluruh Entity Object Core, Published, dan Reasoning Ready fields.

**Mandatory domain fields:**

- `career_scope`;
- `primary_work_purpose`;
- `core_task_categories`;
- `core_competency_refs`;
- `typical_work_environment_refs`;
- `career_family_refs`;
- `entry_pathway_summary`;
- `career_boundary_note`.

**Optional domain fields:**

- role variants;
- progression paths;
- education pathways;
- credential pathways;
- industry contexts;
- transferability;
- physical demand;
- work schedule pattern;
- remote pattern;
- ethical and regulatory notes.

**Forbidden fields:**

- universal salary;
- universal demand;
- guaranteed outcome;
- personality type requirement;
- one fixed education path;
- absolute AI safety label.

**Relationship rules:**

- WAJIB memiliki `performs` atau `characterized_by` Work Task relationship.
- WAJIB memiliki competency or skill relationship.
- BOLEH berhubungan dengan Major melalui `prepares_for` atau `common_path_to`, bukan `guarantees`.
- AI Trend relationship WAJIB menunjuk task or capability context.

**Validation rules:**

- Career harus berbeda dari Role, Job Title, dan Position.
- Definition harus menjelaskan work purpose.
- Minimal satu source mendukung task and competency structure.

**Common mistakes:**

- menggunakan job vacancy title sebagai Career;
- mencampur market observation ke definition;
- menulis "cocok untuk introvert" sebagai fact.

---

## 6.3 Career Family

**Purpose:** Mengelompokkan Career berdasarkan shared purpose, task pattern, atau competency foundation.

**Mandatory domain fields:** `grouping_basis`, `membership_rule`, `member_career_refs`.

**Optional domain fields:** subfamilies, common competency, common environment, cross-family mappings.

**Forbidden fields:** ranking quality, salary summary as intrinsic property.

**Relationship rules:** WAJIB memiliki `contains` Career. Member dapat berada pada lebih dari satu family jika grouping basis berbeda.

**Validation rules:** Grouping basis harus eksplisit dan tidak hanya berdasarkan popular label.

**Common mistakes:** Menggunakan Industry sebagai Career Family atau membuat family hanya karena nama career mirip.

---

## 6.4 Role

**Purpose:** Merepresentasikan fungsi kerja yang lebih spesifik dalam Career atau Organization context.

**Mandatory domain fields:** `role_scope`, `functional_distinction`, `task_refs`, `competency_refs`, `career_refs`.

**Optional domain fields:** seniority range, team context, authority level, industry variants, reporting pattern.

**Forbidden fields:** organization-specific compensation sebagai intrinsic attribute.

**Relationship rules:** WAJIB `specialization_of` atau `part_of` Career. WAJIB memiliki task relationship.

**Validation rules:** Perbedaan Role harus berdasarkan fungsi, bukan hanya seniority atau title wording.

**Common mistakes:** Membuat "Senior X" sebagai Role baru tanpa functional distinction.

---

## 6.5 Job Title

**Purpose:** Merepresentasikan label posisi yang digunakan oleh market atau organization.

**Mandatory domain fields:** `title_label`, `language`, `usage_context`, `mapped_role_or_career_refs`, `source`.

**Optional domain fields:** seniority markers, organization-specific meaning, valid period, alternative title.

**Forbidden fields:** task and skill assumptions tanpa mapping evidence.

**Relationship rules:** WAJIB `labels` Role atau Position.

**Validation rules:** Title yang sama dapat memiliki mapping berbeda menurut organization atau region.

**Common mistakes:** Menjadikan title sebagai semantic Career identity.

---

## 6.6 Position

**Purpose:** Merepresentasikan instance pekerjaan tertentu pada organization, time, dan location.

**Mandatory domain fields:** `organization_ref`, `role_or_career_ref`, `location_ref`, `effective_period`.

**Optional domain fields:** employment type, schedule, compensation observation, reporting line, vacancy state.

**Forbidden fields:** permanent availability, universal requirement.

**Relationship rules:** WAJIB `instance_of` Role atau Career dan `offered_by` Organization.

**Validation rules:** Position harus temporal dan instance-specific.

**Common mistakes:** Menggunakan Position sebagai Career canonical object.

---

## 6.7 Work Task

**Purpose:** Merepresentasikan unit aktivitas kerja dengan outcome yang dapat diamati.

**Mandatory domain fields:** `action_scope`, `expected_outcome`, `task_category`, `task_boundary`.

**Optional domain fields:** frequency, complexity, autonomy, physical demand, cognitive demand, collaboration demand, automation exposure.

**Forbidden fields:** trait labels, salary, generic skill name as task.

**Relationship rules:** BOLEH `requires` Skill, `uses` Tool, `produces` Work Output, `affected_by` AI Trend.

**Validation rules:** Nama harus berbentuk aktivitas. Task harus memiliki outcome.

**Common mistakes:** "Communication" ditulis sebagai task tanpa action dan output.

---

## 6.8 Work Activity

**Purpose:** Mengelompokkan beberapa Work Task dalam area aktivitas.

**Mandatory domain fields:** `activity_scope`, `included_task_rule`, `task_refs`.

**Optional domain fields:** common outputs, common skills, automation exposure.

**Forbidden fields:** career identity atau single task duplication.

**Relationship rules:** WAJIB `contains` Work Task.

**Validation rules:** Scope lebih luas dari Task dan lebih sempit dari Career.

**Common mistakes:** Menyamakan Work Activity dengan Career Family.

---

## 6.9 Work Output

**Purpose:** Merepresentasikan hasil yang diproduksi oleh Task atau Role.

**Mandatory domain fields:** `output_form`, `output_definition`.

**Optional domain fields:** quality criteria, audience, verification method, lifecycle.

**Forbidden fields:** process description tanpa output.

**Relationship rules:** WAJIB `produced_by` Work Task atau Role.

**Validation rules:** Output harus dapat dibedakan dari activity.

**Common mistakes:** Menyimpan meeting atau collaboration sebagai output.

---

## 6.10 Major

**Purpose:** Merepresentasikan bidang studi formal yang menjadi fokus Education Program.

**Mandatory domain fields:** `academic_field_ref`, `learning_outcome_categories`, `knowledge_domain_refs`, `core_skill_refs`, `education_level_applicability`.

**Optional domain fields:** concentrations, curriculum themes, admission patterns, assessment modes, progression paths, related career refs.

**Forbidden fields:** provider-specific tuition, ranking, fixed employment guarantee, faculty identity.

**Relationship rules:** WAJIB `specialization_of` Academic Field. Career relation harus `prepares_for`, `common_path_to`, atau `related_to`.

**Validation rules:** Harus dibedakan dari Education Program, Qualification, Faculty, dan Course.

**Common mistakes:** Menyatukan Major dan program di satu University.

---

## 6.11 Academic Field

**Purpose:** Merepresentasikan domain keilmuan yang lebih luas daripada Major.

**Mandatory domain fields:** `disciplinary_scope`, `field_boundary`.

**Optional domain fields:** subfields, research themes, applied domains.

**Forbidden fields:** provider-specific curriculum.

**Relationship rules:** BOLEH `contains` Major dan Knowledge Domain.

**Validation rules:** Field harus memiliki boundary dan tidak hanya nama department.

**Common mistakes:** Menggunakan program name sebagai Academic Field.

---

## 6.12 Education Program

**Purpose:** Merepresentasikan program formal atau terstruktur yang diselenggarakan provider.

**Mandatory domain fields:** `provider_ref`, `program_type`, `education_level_ref`, `major_or_field_ref`, `learning_outcomes`, `delivery_mode`, `offering_geography`, `offering_status`.

**Optional domain fields:** duration, tuition observations, admission requirements, accreditation, language, schedule, curriculum refs, credential awarded.

**Forbidden fields:** current offering tanpa date, accreditation tanpa source, guaranteed career outcome.

**Relationship rules:** WAJIB `offered_by` Education Institution dan `awards` Qualification or Credential jika applicable.

**Validation rules:** Program harus memiliki provider dan temporal status.

**Common mistakes:** Menganggap Major dan Education Program sama.

---

## 6.13 Education Level

**Purpose:** Menstandarkan level pendidikan dalam framework tertentu.

**Mandatory domain fields:** `framework_context`, `level_definition`, `ordering_scope`.

**Optional domain fields:** local equivalent, international mapping, typical duration, entry expectation.

**Forbidden fields:** universal equivalence tanpa mapping class.

**Relationship rules:** BOLEH `maps_to` Qualification Framework dengan exact, close, or partial mapping.

**Validation rules:** Level identity harus tied to framework.

**Common mistakes:** Menyamakan dua level lintas negara secara absolut.

---

## 6.14 Qualification

**Purpose:** Merepresentasikan pengakuan formal atas completion level atau education program.

**Mandatory domain fields:** `qualification_type`, `awarding_framework`, `level_ref`, `award_definition`.

**Optional domain fields:** local labels, recognition, progression rights, regulated status.

**Forbidden fields:** certification competence claim yang tidak menjadi qualification scope.

**Relationship rules:** `awarded_by` Education Program atau Institution, `recognized_by` Authority.

**Validation rules:** Qualification harus dibedakan dari Certification dan License.

**Common mistakes:** Menyebut semua credential sebagai degree.

---

## 6.15 Curriculum Component

**Purpose:** Merepresentasikan bagian pembelajaran dalam Education Program.

**Mandatory domain fields:** `component_type`, `learning_objective`.

**Optional domain fields:** sequence, credits, prerequisite, assessment mode, knowledge and skill refs.

**Forbidden fields:** provider-independent universal status untuk component aktual.

**Relationship rules:** WAJIB `part_of` Education Program.

**Validation rules:** Provider dan curriculum version diperlukan untuk actual component.

**Common mistakes:** Membuat Curriculum Component sebagai Course canonical tanpa provider context.

---

## 6.16 Course

**Purpose:** Merepresentasikan unit pembelajaran terstruktur.

**Mandatory domain fields:** `provider_ref`, `learning_outcomes`, `subject_scope`, `delivery_mode`, `availability_status`.

**Optional domain fields:** duration, level, prerequisites, cost observations, credential, language, schedule, quality evidence.

**Forbidden fields:** mastery guarantee, timeless availability, providerless actual offering.

**Relationship rules:** `teaches` Knowledge Domain, `develops` Skill, BOLEH `part_of` Education Program.

**Validation rules:** Completion dan competence harus dipisahkan.

**Common mistakes:** Course title generik dibuat tanpa membedakan concept dan offering.

---

## 6.17 University

**Purpose:** Merepresentasikan institution pendidikan tinggi dengan identity legal atau recognized.

**Mandatory domain fields:** `official_name`, `institution_type`, `recognized_identity`, `headquarters_geography`, `operational_status`.

**Optional domain fields:** campus refs, accreditation assertions, governance type, founding year, delivery modes, facilities, external identifiers.

**Forbidden fields:** timeless ranking, all-program quality claim, campus as separate university tanpa legal identity.

**Relationship rules:** `subtype_of` Education Institution, `offers` Education Program, `has` Campus, `recognized_by` Authority.

**Validation rules:** Official identity, former names, and status require evidence.

**Common mistakes:** Menyimpan program attributes pada University root.

---

## 6.18 Education Institution

**Purpose:** Parent entity untuk University, School, Academy, dan Training Institution.

**Mandatory domain fields:** `official_name`, `institution_type`, `geography`, `operational_status`, `identity_evidence`.

**Optional domain fields:** legal identity, accreditation assertions, provider categories, coverage.

**Forbidden fields:** course-specific outcome as institution-wide fact.

**Relationship rules:** BOLEH `offers` Education Program atau Learning Resource.

**Validation rules:** Institution type harus valid menurut Ontology.

**Common mistakes:** Brand learning platform dan legal provider tidak dibedakan.

---

## 6.19 Campus

**Purpose:** Merepresentasikan lokasi operasional institution.

**Mandatory domain fields:** `institution_ref`, `location_ref`, `campus_identity`, `operational_status`.

**Optional domain fields:** facilities, hosted programs, accessibility, housing.

**Forbidden fields:** independent institution identity jika bukan legal entity terpisah.

**Relationship rules:** WAJIB `part_of` Education Institution.

**Validation rules:** Program availability harus temporal.

**Common mistakes:** Menyalin seluruh University object ke Campus.

---

## 6.20 Skill

**Purpose:** Merepresentasikan kemampuan untuk melakukan aktivitas atau menghasilkan outcome.

**Mandatory domain fields:** `observable_capability`, `skill_category`, `proficiency_scope`, `skill_boundary`.

**Optional domain fields:** subskills, parent skill, transferability, learning difficulty, decay, verification methods, task refs.

**Forbidden fields:** tool name, subject name tanpa capability, personality trait, certificate name.

**Relationship rules:** BOLEH `required_by` Career, `used_in` Task, `developed_by` Major, `validated_by` Certification.

**Validation rules:** Capability harus observable dan proficiency contextual.

**Common mistakes:** "Python" dicatat tanpa membedakan Technology, Tool, Knowledge, dan Skill use.

---

## 6.21 Hard Skill

**Purpose:** Subtype Skill untuk kemampuan technical, methodological, atau domain-specific.

**Mandatory domain fields:** inherited Skill fields, `technical_scope`, `verification_mode`.

**Optional domain fields:** tool dependency, formal standard, domain constraint.

**Forbidden fields:** claim bahwa hard skill selalu lebih penting.

**Relationship rules:** Mengikuti Skill.

**Validation rules:** Harus menjelaskan aktivitas yang dapat dilakukan.

**Common mistakes:** Menulis software brand sebagai Hard Skill tanpa capability phrase.

---

## 6.22 Soft Skill

**Purpose:** Subtype Skill untuk interpersonal, intrapersonal, communication, leadership, dan self-management capability.

**Mandatory domain fields:** inherited Skill fields, `behavioral_manifestation`, `context_variability`.

**Optional domain fields:** observation method, team context, cultural context.

**Forbidden fields:** personality label, moral judgement.

**Relationship rules:** Mengikuti Skill dan BOLEH `interacts_with` Work Environment.

**Validation rules:** Harus observable melalui behavior atau output.

**Common mistakes:** "Extrovert" dimasukkan sebagai Soft Skill.

---

## 6.23 Foundational Skill

**Purpose:** Subtype Skill yang mendukung banyak domain.

**Mandatory domain fields:** inherited Skill fields, `cross_domain_role`.

**Optional domain fields:** level frameworks, dependency relationships.

**Forbidden fields:** universal proficiency requirement.

**Relationship rules:** BOLEH `prerequisite_for` Skill atau Learning Path.

**Validation rules:** Foundational status harus memiliki rationale lintas-domain.

**Common mistakes:** Semua basic course outcome dianggap Foundational Skill.

---

## 6.24 Skill Cluster

**Purpose:** Mengelompokkan Skill yang sering digunakan bersama.

**Mandatory domain fields:** `grouping_rule`, `member_skill_refs`, `cluster_purpose`.

**Optional domain fields:** typical careers, task relationships, proficiency profile.

**Forbidden fields:** menyatakan cluster sebagai single Skill.

**Relationship rules:** WAJIB `contains` Skill.

**Validation rules:** Grouping rule harus jelas.

**Common mistakes:** Cluster dibuat dari kata yang mirip tanpa shared use.

---

## 6.25 Competency

**Purpose:** Merepresentasikan kombinasi Skill, Knowledge, behavior, dan performance standard.

**Mandatory domain fields:** `performance_context`, `component_refs`, `expected_outcome`, `competency_boundary`.

**Optional domain fields:** proficiency levels, assessment criteria, role context, standard owner.

**Forbidden fields:** reduction menjadi satu Skill tanpa rationale.

**Relationship rules:** WAJIB `composed_of` Skill or Knowledge dan BOLEH `required_by` Role.

**Validation rules:** Performance context dan outcome wajib.

**Common mistakes:** Skill dan Competency dipakai sebagai sinonim.

---

## 6.26 Knowledge Domain

**Purpose:** Merepresentasikan body of knowledge yang dapat dipelajari dan diterapkan.

**Mandatory domain fields:** `domain_scope`, `knowledge_boundary`.

**Optional domain fields:** subdomains, concepts, related disciplines, application contexts, learning sequence.

**Forbidden fields:** observable capability sebagai definition utama.

**Relationship rules:** BOLEH `taught_by` Major or Course, `applied_by` Career, `supports` Skill.

**Validation rules:** Knowledge harus dibedakan dari Skill.

**Common mistakes:** Menyimpan "data analysis" tanpa membedakan knowledge domain dan skill.

---

## 6.27 Certification

**Purpose:** Merepresentasikan credential yang memvalidasi competency atau standard tertentu.

**Mandatory domain fields:** `official_name`, `issuer_ref`, `credential_type`, `validated_competency_refs`, `assessment_requirement`, `recognition_scope`, `credential_status`.

**Optional domain fields:** expiration, renewal, prerequisite, cost observation, exam language, career relevance, regulatory relevance.

**Forbidden fields:** universal recognition, skill guarantee di luar assessed scope, course attendance as certification.

**Relationship rules:** `subtype_of` Credential, `issued_by` Certification Body, `validates` Competency or Skill.

**Validation rules:** Issuer, assessment, recognition scope, dan current status wajib.

**Common mistakes:** Menyamakan certificate of completion dengan Certification.

---

## 6.28 Credential

**Purpose:** Parent entity untuk Qualification, Certification, License, Badge, dan Microcredential.

**Mandatory domain fields:** `credential_type`, `issuer_ref`, `award_criteria`, `credential_status`.

**Optional domain fields:** validity, recognition, digital verification, level.

**Forbidden fields:** holder competence claim melebihi award criteria.

**Relationship rules:** WAJIB `issued_by` Organization.

**Validation rules:** Attendance, completion, assessment, dan authorization credential harus dibedakan.

**Common mistakes:** Semua document award diperlakukan setara.

---

## 6.29 License

**Purpose:** Merepresentasikan authorization formal untuk aktivitas regulated.

**Mandatory domain fields:** `issuer_authority_ref`, `regulated_scope`, `jurisdiction_ref`, `validity`, `legal_basis_source`.

**Optional domain fields:** renewal, prerequisite, continuing education, restricted activities.

**Forbidden fields:** global validity, nonlegal recommendation.

**Relationship rules:** `authorizes` Career or Task, `issued_by` Authority.

**Validation rules:** Jurisdiction dan legal status harus current.

**Common mistakes:** Certification professional disebut License tanpa legal authority.

---

## 6.30 Industry

**Purpose:** Merepresentasikan domain aktivitas ekonomi atau produksi.

**Mandatory domain fields:** `economic_activity_scope`, `classification_context`, `industry_boundary`.

**Optional domain fields:** subindustries, value chain, products, services, technology refs, regulatory contexts.

**Forbidden fields:** occupation list sebagai definition, timeless growth claim.

**Relationship rules:** BOLEH `contains` Organization, `employs` Career, `uses` Technology.

**Validation rules:** Classification source harus dicatat.

**Common mistakes:** Career domain dan Industry dicampur.

---

## 6.31 Sector

**Purpose:** Mengelompokkan Industry atau Organization pada level lebih luas.

**Mandatory domain fields:** `grouping_basis`, `sector_scope`.

**Optional domain fields:** member industry refs, institutional context.

**Forbidden fields:** superiority judgement.

**Relationship rules:** `contains` Industry or Organization.

**Validation rules:** Classification context harus jelas.

**Common mistakes:** Public sector dan industry classification dicampur tanpa basis.

---

## 6.32 Organization

**Purpose:** Merepresentasikan company, institution, authority, association, atau provider nyata.

**Mandatory domain fields:** `official_name`, `organization_type`, `recognized_identity`, `headquarters_geography`, `operational_status`.

**Optional domain fields:** alternative names, industry refs, size observations, ownership type, operating geography, brands, parent organization.

**Forbidden fields:** permanent employee experience claim, unscoped reputation score.

**Relationship rules:** BOLEH `belongs_to` Industry, `offers` Position, `issues` Credential, `provides` Learning Resource.

**Validation rules:** Organization, brand, unit, dan product harus dibedakan.

**Common mistakes:** Brand dibuat sebagai Organization tanpa legal mapping.

---

## 6.33 Tool

**Purpose:** Merepresentasikan alat yang digunakan untuk melakukan Task.

**Mandatory domain fields:** `tool_category`, `primary_use`, `tool_boundary`.

**Optional domain fields:** maker, versions, platform, licensing model, task refs, skill refs, alternatives, lifecycle.

**Forbidden fields:** user ability, skill proficiency, timeless version claim.

**Relationship rules:** BOLEH `used_in` Work Task, `implements` Technology, `produced_by` Organization.

**Validation rules:** Generic tool concept dan branded product harus dibedakan.

**Common mistakes:** Tool dan Technology disamakan.

---

## 6.34 Technology

**Purpose:** Merepresentasikan technological concept, system, method, atau capability.

**Mandatory domain fields:** `technology_category`, `functional_scope`, `technology_boundary`.

**Optional domain fields:** maturity assertions, dependencies, implementations, industry refs, skill implications, standards.

**Forbidden fields:** product marketing claim, timeless maturity.

**Relationship rules:** BOLEH `implemented_by` Tool, `used_in` Industry, `enables` Task.

**Validation rules:** Technology concept harus dibedakan dari Tool dan product.

**Common mistakes:** Satu software product dibuat sebagai Technology universal.

---

## 6.35 Standard

**Purpose:** Merepresentasikan formal atau accepted specification atau framework.

**Mandatory domain fields:** `official_name`, `standard_owner_ref`, `standard_scope`, `standard_version`, `standard_status`.

**Optional domain fields:** jurisdiction, compliance requirements, related certification, effective period.

**Forbidden fields:** adoption claim tanpa context.

**Relationship rules:** BOLEH `governs` Competency, Technology, or Process.

**Validation rules:** Version dan owner wajib.

**Common mistakes:** Best practice informal disebut Standard formal.

---

## 6.36 Learning Resource

**Purpose:** Merepresentasikan resource yang membantu memperoleh Knowledge atau Skill.

**Mandatory domain fields:** `resource_type`, `provider_or_author_ref`, `learning_objectives`, `target_level`, `language_ref`, `availability_status`.

**Optional domain fields:** cost, duration, delivery mode, prerequisites, quality evidence, credential, accessibility, update date.

**Forbidden fields:** mastery guarantee, timeless availability, unverified quality superlative.

**Relationship rules:** BOLEH `teaches` Knowledge, `develops` Skill, `prepares_for` Certification.

**Validation rules:** Learning objective dan current availability wajib.

**Common mistakes:** Resource description hanya marketing copy.

---

## 6.37 Learning Provider

**Purpose:** Merepresentasikan Organization atau person yang menyediakan learning.

**Mandatory domain fields:** `provider_type`, `recognized_identity`, `operating_scope`.

**Optional domain fields:** accreditation assertions, languages, delivery modes, quality evidence, geography.

**Forbidden fields:** universal quality claim.

**Relationship rules:** `provides` Learning Resource, BOLEH `issues` Credential.

**Validation rules:** Provider claim dan third-party assessment dipisahkan.

**Common mistakes:** Platform, provider, dan course dicampur.

---

## 6.38 Learning Path

**Purpose:** Merepresentasikan urutan konseptual mencapai Skill, Credential, atau readiness.

**Mandatory domain fields:** `target_ref`, `starting_assumptions`, `milestones`, `prerequisite_refs`, `completion_condition`.

**Optional domain fields:** alternative routes, effort class, resources, assessments, geography, cost class.

**Forbidden fields:** guarantee, user-specific roadmap stored as universal path.

**Relationship rules:** `develops` Skill, `prepares_for` Career, `includes` Learning Resource.

**Validation rules:** Baseline dan target harus jelas.

**Common mistakes:** Learning Path universal berisi timeline personal.

---

## 6.39 Scholarship

**Purpose:** Merepresentasikan funding opportunity untuk education atau learning.

**Mandatory domain fields:** `funding_organization_ref`, `opportunity_type`, `eligibility`, `benefit_scope`, `geography_ref`, `application_period`, `opportunity_status`.

**Optional domain fields:** amount, covered costs, service obligation, target program, selection stages, documents, renewal.

**Forbidden fields:** current availability tanpa period, inferred eligibility, guaranteed award.

**Relationship rules:** `subtype_of` Opportunity, `funded_by` Organization, `supports` Education Program.

**Validation rules:** Volatile Knowledge Profile wajib.

**Common mistakes:** Deadline lama tetap Active.

---

## 6.40 Opportunity

**Purpose:** Parent entity untuk scholarship, internship, fellowship, competition, mentorship, project, dan vacancy.

**Mandatory domain fields:** `opportunity_type`, `provider_ref`, `eligibility`, `availability_period`, `opportunity_status`.

**Optional domain fields:** benefits, costs, geography, target, application process, capacity.

**Forbidden fields:** user fit score, timeless availability.

**Relationship rules:** `offered_by` Organization, BOLEH `develops` Skill or `supports` Career.

**Validation rules:** Temporal context wajib.

**Common mistakes:** Opportunity object digunakan sebagai generic concept tanpa offering status.

---

## 6.41 Internship

**Purpose:** Merepresentasikan structured work-based learning opportunity.

**Mandatory domain fields:** `provider_ref`, `role_or_domain_ref`, `learning_purpose`, `period`, `location_ref`, `opportunity_status`.

**Optional domain fields:** compensation observation, eligibility, mentor, task refs, skill refs, conversion claim.

**Forbidden fields:** guaranteed employment conversion.

**Relationship rules:** `subtype_of` Opportunity, `provides` Experience, `develops` Skill.

**Validation rules:** Conversion claim membutuhkan evidence dan context.

**Common mistakes:** Internship dan full employment tidak dibedakan.

---

## 6.42 Project

**Purpose:** Merepresentasikan unit work atau learning activity yang menghasilkan output dan evidence competency.

**Mandatory domain fields:** `project_purpose`, `project_scope`, `expected_output`, `role_context`, `project_status`.

**Optional domain fields:** team, duration, tools, skills, domain, verification, portfolio reference.

**Forbidden fields:** skill mastery claim hanya dari participation.

**Relationship rules:** `demonstrates` Skill jika evidence tersedia, `applies` Knowledge, `produces` Work Output.

**Validation rules:** Role dan contribution harus jelas untuk evidence claim.

**Common mistakes:** Team result dianggap individual competence penuh.

---

## 6.43 Work Environment

**Purpose:** Merepresentasikan kondisi tempat dan cara kerja.

**Mandatory domain fields:** `environment_dimensions`, `environment_scope`.

**Optional domain fields:** collaboration intensity, autonomy, pace, structure, physical setting, schedule, client interaction, travel, remote pattern.

**Forbidden fields:** universal career environment, deterministic personality compatibility.

**Relationship rules:** BOLEH `characteristic_of` Career dalam context, `provided_by` Organization, `interacts_with` Work Value.

**Validation rules:** Variation note wajib jika environment berbeda antar-organization.

**Common mistakes:** "Career X selalu remote" tanpa scope.

---

## 6.44 Personality Trait

**Purpose:** Merepresentasikan construct trait atau behavioral tendency dalam framework tertentu.

**Mandatory domain fields:** `framework_ref`, `dimension`, `trait_definition`, `interpretation_boundaries`.

**Optional domain fields:** behavioral indicators, context sensitivity, assessment instrument refs, environment interactions.

**Forbidden fields:** career exclusion, moral judgement, fixed identity statement.

**Relationship rules:** `measured_by` Assessment Instrument, BOLEH `interacts_with` Work Environment.

**Validation rules:** Framework dan limitation wajib.

**Common mistakes:** Assessment result disimpan sebagai Trait entity.

---

## 6.45 Work Value

**Purpose:** Merepresentasikan quality atau outcome kerja yang dianggap penting.

**Mandatory domain fields:** `value_dimension`, `value_definition`.

**Optional domain fields:** indicators, related environments, potential tradeoffs, cultural notes.

**Forbidden fields:** universal importance or ranking.

**Relationship rules:** BOLEH `satisfied_by` Work Environment dan `trades_off_with` Work Value.

**Validation rules:** Value concept harus terpisah dari user priority.

**Common mistakes:** Preferensi personal disimpan sebagai universal Work Value fact.

---

## 6.46 Interest Domain

**Purpose:** Merepresentasikan domain aktivitas atau subject yang dapat menarik perhatian.

**Mandatory domain fields:** `activity_or_subject_scope`, `interest_boundary`.

**Optional domain fields:** task refs, academic field refs, exploration activities, assessment mappings.

**Forbidden fields:** capability or skill claim.

**Relationship rules:** BOLEH `related_to` Major, Career, Project, dan Assessment Instrument.

**Validation rules:** Interest relationship bersifat probabilistic.

**Common mistakes:** Interest tinggi dianggap readiness tinggi.

---

## 6.47 Labor Market

**Purpose:** Merepresentasikan market context pada geography, time, occupation, atau industry scope.

**Mandatory domain fields:** `geography_ref`, `time_period`, `market_scope`, `observation_type`, `source_refs`.

**Optional domain fields:** demand, supply, compensation, vacancy, growth, shortage, competition, methodology.

**Forbidden fields:** timeless market state, universal demand.

**Relationship rules:** `observes` Career or Industry dan `measured_by` Labor Market Indicator.

**Validation rules:** Volatile Knowledge Profile, geography, time, dan methodology wajib.

**Common mistakes:** Labor market observation dipasang sebagai Career intrinsic attribute.

---

## 6.48 Labor Market Indicator

**Purpose:** Merepresentasikan ukuran atau signal market.

**Mandatory domain fields:** `indicator_definition`, `unit`, `methodology`, `time_period`, `geography_ref`, `source_refs`.

**Optional domain fields:** coverage, confidence interval, revision state, forecast horizon.

**Forbidden fields:** comparison tanpa harmonization.

**Relationship rules:** `measures` Labor Market, Career demand, or Industry condition.

**Validation rules:** Unit, denominator, method, dan scope wajib.

**Common mistakes:** Vacancy count dari source berbeda dibandingkan langsung.

---

## 6.49 Salary Observation

**Purpose:** Merepresentasikan compensation observation yang contextual.

**Mandatory domain fields:** `career_role_or_position_ref`, `geography_ref`, `time_period`, `currency`, `compensation_basis`, `source_refs`.

**Optional domain fields:** percentile, experience level, industry, employment type, benefits, sample size, methodology.

**Forbidden fields:** single universal salary, unlabelled gross or net amount.

**Relationship rules:** `observes` Career, Role, or Position dan `belongs_to` Labor Market.

**Validation rules:** Currency, period, basis, location, dan source wajib.

**Common mistakes:** Monthly and annual values dicampur.

---

## 6.50 Economic Trend

**Purpose:** Merepresentasikan perubahan ekonomi yang memengaruhi Industry, Market, atau Opportunity.

**Mandatory domain fields:** `trend_definition`, `geography_ref`, `time_horizon`, `evidence_refs`, `trend_status`.

**Optional domain fields:** affected industries, affected careers, direction, scenarios, confidence.

**Forbidden fields:** causal certainty tanpa evidence.

**Relationship rules:** BOLEH `affects` Industry, Labor Market, or Opportunity.

**Validation rules:** Observation dan forecast dipisahkan.

**Common mistakes:** News headline dijadikan long-term trend tanpa triangulation.

---

## 6.51 AI Trend

**Purpose:** Merepresentasikan perubahan AI capability, adoption, regulation, atau use yang memengaruhi work.

**Mandatory domain fields:** `trend_definition`, `ai_capability_or_adoption_scope`, `affected_task_refs`, `time_horizon`, `geography_or_market_scope`, `evidence_refs`, `confidence`.

**Optional domain fields:** affected careers, skill implications, augmentation potential, automation potential, new task creation, adoption barriers, scenarios.

**Forbidden fields:** profession extinction claim, universal replacement score, capability-adoption conflation.

**Relationship rules:** WAJIB `affects` Work Task. Career relationship harus derived through task or work activity.

**Validation rules:** Projection label, horizon, scenario, evidence, dan uncertainty wajib.

**Common mistakes:** Menganggap model capability langsung berarti market adoption.

---

## 6.52 Future of Work Signal

**Purpose:** Parent entity untuk AI, demographic, policy, technology, dan work design signal.

**Mandatory domain fields:** `signal_definition`, `source_refs`, `time_horizon`, `affected_scope`, `confidence`.

**Optional domain fields:** scenarios, geography, implications, leading indicators.

**Forbidden fields:** certainty language tanpa basis.

**Relationship rules:** BOLEH `affects` Career, Skill, Industry, Work Environment.

**Validation rules:** Signal bukan fact masa depan.

**Common mistakes:** Forecast dan observation tidak dipisahkan.

---

## 6.53 Geography

**Purpose:** Merepresentasikan wilayah yang menjadi scope knowledge.

**Mandatory domain fields:** `geography_type`, `recognized_identity`, `parent_geography_ref`.

**Optional domain fields:** codes, local names, languages, currency, education system, labor jurisdiction, historical boundaries.

**Forbidden fields:** current boundary tanpa effective period jika berubah.

**Relationship rules:** BOLEH `contains` Geography, `scope_of` Labor Market, Regulation, Opportunity.

**Validation rules:** Administrative dan market geography harus dibedakan jika material.

**Common mistakes:** City, metropolitan market, dan province dianggap sama.

---

## 6.54 Language

**Purpose:** Merepresentasikan bahasa yang digunakan dalam labels, resources, programs, atau requirements.

**Mandatory domain fields:** `recognized_identity`, `canonical_name`.

**Optional domain fields:** codes, local names, writing systems, regional variants.

**Forbidden fields:** proficiency assumption.

**Relationship rules:** `used_by` Learning Resource or Program, `spoken_in` Geography.

**Validation rules:** Requirement harus merujuk proficiency framework jika material.

**Common mistakes:** Language entity dan language proficiency dicampur.

---

## 6.55 Regulation

**Purpose:** Merepresentasikan aturan formal yang memengaruhi Career, Education, Credential, atau Market.

**Mandatory domain fields:** `official_name`, `issuer_authority_ref`, `jurisdiction_ref`, `regulatory_scope`, `effective_period`, `regulation_status`, `source_refs`.

**Optional domain fields:** affected career refs, institution refs, requirements, replacement regulation.

**Forbidden fields:** legal advice, outdated rule as current.

**Relationship rules:** BOLEH `governs` Career, License, Institution, or Industry.

**Validation rules:** Volatile Profile, current status, amendment, and repeal tracking wajib.

**Common mistakes:** Summary editorial dianggap text regulation.

---

## 6.56 Authority

**Purpose:** Merepresentasikan institution dengan kewenangan formal.

**Mandatory domain fields:** `official_name`, `jurisdiction_ref`, `authority_scope`, `operational_status`.

**Optional domain fields:** parent authority, legal basis, recognized identifiers.

**Forbidden fields:** authority beyond jurisdiction.

**Relationship rules:** BOLEH `issues` License, `recognizes` Qualification, `accredits` Institution, `publishes` Regulation.

**Validation rules:** Scope dan jurisdiction wajib.

**Common mistakes:** Professional association dianggap regulator tanpa legal authority.

---

## 6.57 Assessment Instrument

**Purpose:** Merepresentasikan instrument yang mengukur construct.

**Mandatory domain fields:** `construct_refs`, `instrument_framework`, `instrument_version`, `administration_scope`, `interpretation_limits`.

**Optional domain fields:** reliability evidence, validity evidence, target population, scoring model, language adaptation, publisher.

**Forbidden fields:** user result, diagnostic authority yang tidak dimiliki, career mapping as intrinsic fact.

**Relationship rules:** `measures` Personality Trait, Interest Domain, Skill, or Work Value.

**Validation rules:** Construct, instrument, version, dan population harus jelas.

**Common mistakes:** Instrument name dan result type dicampur.

---

## 6.58 Assessment Result Type

**Purpose:** Mendefinisikan semantic type hasil assessment, bukan personal result.

**Mandatory domain fields:** `measured_construct_ref`, `scale_meaning`, `interpretation_boundaries`, `result_structure`.

**Optional domain fields:** norm reference, temporal stability, confidence semantics.

**Forbidden fields:** user score, permanent label, direct career verdict.

**Relationship rules:** `produced_by` Assessment Instrument dan `maps_to` construct.

**Validation rules:** Mapping ke Career harus dilakukan di reasoning layer.

**Common mistakes:** Result category menjadi personality entity.

---

## 6.59 Experience

**Purpose:** Merepresentasikan category pengalaman yang dapat membangun evidence.

**Mandatory domain fields:** `experience_type`, `activity_scope`, `outcome_category`.

**Optional domain fields:** duration, context, role, verification mode, related skills.

**Forbidden fields:** quality inference hanya dari duration.

**Relationship rules:** BOLEH `demonstrates` Skill, `informs` Interest, `prepares_for` Career.

**Validation rules:** Evidence strength dan participation role harus jelas.

**Common mistakes:** Lama pengalaman dianggap proficiency otomatis.

---

# 7. Object Composition Rules

## 7.1 Purpose

Composition rules mengatur bagaimana object saling menggunakan tanpa duplication, recursive payload, atau semantic drift.

## 7.2 Reference as Default

Canonical Knowledge Object lain WAJIB direferensikan melalui:

- `entity_id`;
- `object_id` jika representation-specific;
- accepted version range atau exact revision;
- expected entity type;
- relationship type.

## 7.3 Embedding Rules

Embedding BOLEH digunakan untuk bounded value objects:

- localized label;
- address fragment;
- temporal period;
- quantitative value with unit;
- confidence summary;
- validation finding;
- source citation summary.

Full canonical Entity Object DILARANG di-embed secara recursive.

## 7.4 Snapshot Embedding

Snapshot BOLEH digunakan jika consumer membutuhkan reproducibility.

Snapshot entry WAJIB memiliki:

- source object ID;
- source revision ID;
- captured_at;
- selected fields;
- reason;
- stale behavior.

Snapshot tidak menjadi source of truth baru.

## 7.5 Relationship Embedding

Lightweight relationship BOLEH berada dalam `relationships`.

Relationship yang memiliki evidence, lifecycle, temporal context, atau dispute kompleks SEBAIKNYA menjadi Relationship Object tersendiri.

## 7.6 Assertion Composition

Entity Object BOLEH mereferensikan Contextual Assertion Object.

Salary, market demand, regulation recognition, and AI impact SEBAIKNYA menjadi assertions terpisah.

## 7.7 Dependency Types

Dependencies harus diklasifikasikan:

- semantic dependency;
- evidence dependency;
- localization dependency;
- validation dependency;
- package dependency;
- presentation dependency.

## 7.8 Circular Reference Avoidance

- Full nested object tidak boleh membentuk recursion.
- Inverse relationship SEBAIKNYA derived, bukan duplicated.
- Graph cycle BOLEH ada secara semantik, tetapi object serialization menggunakan references.
- Dependency cycle DILARANG jika object tidak dapat divalidasi secara independen.
- Validator harus mendeteksi circular mandatory dependencies.

## 7.9 Composition Depth

Canonical package harus dapat dibaca tanpa recursive expansion tidak terbatas.

Consumer menentukan expansion depth sesuai use case.

## 7.10 Duplication Rule

Jika data yang sama muncul pada beberapa object:

- satu lokasi menjadi authoritative source;
- lokasi lain menggunakan reference atau derived view;
- update path harus jelas.

## 7.11 Constraint

Embedding tidak boleh digunakan untuk menghindari lifecycle dan evidence rules entity lain.

## 7.12 Rationale

Reference-first composition menjaga atomicity dan mengurangi update inconsistency.

## 7.13 System Impact

Graph projection, document retrieval, dan backend model dapat menggunakan representasi berbeda tanpa kehilangan semantic linkage.

---

# 8. Validation Framework

## 8.1 Purpose

Validation Framework menetapkan validator konseptual yang wajib dijalankan sesuai object kind dan lifecycle gate.

## 8.2 Validation Result Model

Setiap validator menghasilkan:

- validator name;
- validator version;
- run timestamp;
- object and revision;
- result: pass, pass_with_warnings, fail, indeterminate;
- findings;
- severity;
- affected fields;
- remediation;
- evidence;
- reviewer requirement.

## 8.3 Severity Levels

### Blocker

Mencegah Validated dan Active.

Contoh:

- duplicate entity identity;
- invalid ontology class;
- unsupported material claim;
- missing mandatory source pada volatile object;
- unauthorized content.

### Error

Mencegah Active dan biasanya mencegah Validated.

### Warning

Tidak memblokir, tetapi harus terlihat dan dapat memengaruhi readiness.

### Information

Catatan nonblocking.

## 8.4 Identity Validation

### Purpose

Memastikan object mewakili subject yang benar dan tidak duplicate.

### Checks

- Object ID unique.
- Entity ID resolves.
- Canonical name dan definition consistent.
- Alias collision diperiksa.
- Concept dan instance dipisahkan.
- Organization, brand, campus, program, dan position dibedakan.
- New identity justification tersedia.

### Failure Impact

Identity error adalah non-compensatory blocker.

## 8.5 Ontology Validation

### Purpose

Memastikan object sesuai Ontology.

### Checks

- entity_type valid;
- ontology_class valid;
- inheritance correct;
- required ontology attributes tersedia;
- forbidden category mixing tidak terjadi;
- ontology version compatible.

## 8.6 Relationship Validation

### Purpose

Memastikan relationship semantically valid.

### Checks

- predicate exists;
- source and target type allowed;
- direction correct;
- target resolves;
- requirement level present;
- context present when required;
- evidence present;
- inverse compatible;
- no duplicate contradictory relationship without conflict status.

## 8.7 Evidence Validation

### Purpose

Memastikan claim didukung evidence proporsional.

### Checks

- claim-source mapping;
- source identity;
- source status;
- primary versus secondary;
- directness;
- methodology;
- independence;
- conflict;
- scope;
- license;
- quotation or attribution compliance.

### Constraint

Evidence count tidak sama dengan evidence quality.

## 8.8 Temporal Validation

### Purpose

Memastikan time-sensitive knowledge digunakan secara benar.

### Checks

- effective period;
- publication and review date;
- expiry;
- current status;
- supersession;
- future projection horizon;
- no temporal overlap yang tidak dijelaskan.

## 8.9 Localization Validation

### Purpose

Memastikan label dan meaning benar pada locale.

### Checks

- language identity;
- translation status;
- terminology authority;
- semantic equivalence;
- local framework mapping;
- currency and unit;
- legal name;
- reviewer.

## 8.10 Completeness Validation

### Purpose

Memastikan mandatory dan expected fields tersedia.

### Checks

- universal mandatory;
- object-kind mandatory;
- entity-specific mandatory;
- profile-specific mandatory;
- conditionally required fields.

### Constraint

Completeness tidak menilai correctness.

## 8.11 Consistency Validation

### Purpose

Memastikan tidak ada contradiction internal atau cross-object yang tidak dijelaskan.

### Checks

- definition versus attributes;
- status versus dates;
- relationship versus target type;
- aliases versus identity;
- source versus claim;
- score versus blocker;
- successor references;
- duplicate assertions.

## 8.12 Explainability Validation

### Purpose

Memastikan manusia dapat memahami object dan penggunaannya.

### Checks

- definition clear;
- scope clear;
- limitations visible;
- confidence explained;
- uncertainty visible;
- relationship rationale available;
- jargon controlled;
- no score-only claim.

## 8.13 Reasoning Readiness Validation

### Purpose

Menilai apakah object aman digunakan oleh Decision Graph dan Recommendation Engine.

### Checks

- entity identity stable;
- material relationships present;
- evidence coverage adequate;
- temporal and geographic scope correct;
- uncertainty represented;
- no unresolved blocker;
- forbidden interpretations declared for high-risk entities;
- relationship strength and requirement level explicit.

### Output

- reasoning_ready;
- reasoning_ready_with_constraints;
- not_reasoning_ready.

## 8.14 Knowledge Retrieval Validation

### Purpose

Menilai discoverability dan false retrieval risk.

### Checks

- canonical name;
- aliases;
- disambiguation;
- taxonomy;
- retrieval keywords;
- locale labels;
- collision;
- summary quality;
- deprecated alias handling.

## 8.15 Quantitative Validation

### Checks

- unit;
- currency;
- denominator;
- sample;
- methodology;
- geography;
- time;
- range;
- missing value semantics.

## 8.16 Privacy and Constitutional Validation

### Checks

- no personal data;
- no stereotype;
- no deterministic trait mapping;
- no commercial manipulation;
- no prohibited sensitive inference;
- license and usage restrictions;
- fair representation of uncertainty.

## 8.17 Validation Gate by Lifecycle

| Transition | Required Validation |
|---|---|
| Draft → Review | Identity precheck, Ontology precheck, Completeness precheck |
| Review → Validated | All mandatory validators for kind and profile |
| Validated → Active | No blocker or error, approval, freshness, license, audit completeness |
| Active → Superseded | Successor validation, dependency impact |
| Deprecated → Active | Full revalidation |
| Archived → Review | Identity and source recheck |

## 8.18 Rationale

Validator separation memungkinkan diagnosis yang jelas dan automated class generation.

## 8.19 System Impact

Claude Code dapat menurunkan validator modules. Human reviewer dapat melihat finding berdasarkan domain yang tepat.

---

# 9. Knowledge Quality Framework

## 9.1 Purpose

Quality Framework menilai kualitas secara multidimensional. Aggregate score hanya summary, bukan pengganti quality gates.

## 9.2 Accuracy

**Definition:** Tingkat kesesuaian claim dengan evidence terbaik yang tersedia.

**Constraint:** Accuracy tidak dapat dinilai hanya dari format valid.

**System impact:** Menentukan reliability penggunaan object.

## 9.3 Coverage

**Definition:** Seberapa luas aspek penting domain tercakup sesuai scope object.

Coverage tidak berarti object harus mencakup seluruh dunia.

## 9.4 Completeness

**Definition:** Persentase mandatory dan expected content yang tersedia.

## 9.5 Consistency

**Definition:** Kesesuaian internal dan lintas-object.

## 9.6 Freshness

**Definition:** Kesesuaian review dan evidence dengan volatility knowledge.

## 9.7 Evidence Quality

**Definition:** Authority, directness, methodology, recency, coverage, independence, dan transparency source.

## 9.8 Relationship Quality

**Definition:** Precision predicate, target correctness, context, evidence, dan strength classification.

## 9.9 Localization Quality

**Definition:** Akurasi language, terminology, equivalence, legal context, dan cultural context.

## 9.10 Explainability

**Definition:** Kemampuan object menjelaskan meaning, scope, evidence, limitations, dan relationship.

## 9.11 Reasoning Utility

**Definition:** Kemampuan object mendukung candidate retrieval, prerequisite analysis, skill gap, pathway, tradeoff, dan explanation.

## 9.12 Reusability

**Definition:** Kemampuan object digunakan lintas-agent dan use case tanpa copy-modification.

## 9.13 Maintainability

**Definition:** Kemudahan review, update, dependency tracing, dan successor management.

## 9.14 Auditability

**Definition:** Kemampuan menelusuri creation, source, transformation, review, validation, dan publication.

## 9.15 Retrieval Quality

**Definition:** Kemampuan object ditemukan dengan query yang relevan dan tidak sering muncul pada query yang salah.

## 9.16 Quality Score Scale

Setiap component score menggunakan skala 0 sampai 100.

- **Not assessed:** nilai tidak tersedia, bukan 0.
- **0–39:** critical deficiency.
- **40–59:** limited.
- **60–74:** usable with caution.
- **75–89:** strong.
- **90–100:** exemplary.

## 9.17 Aggregate Quality Score

Aggregate score:

- menggunakan method yang versioned;
- dapat berbeda menurut object type;
- harus menyimpan component scores;
- tidak boleh menutupi blocker;
- tidak boleh digunakan sebagai truth probability.

## 9.18 Freshness Classes

### Stable

Review interval panjang. Contoh conceptual: definition atau taxonomy stable.

### Moderate

Review berkala. Contoh conceptual: certification structure atau tool.

### Volatile

Review sering. Contoh conceptual: scholarship, regulation, salary, labor market, AI trend.

## 9.19 Quality Gate Rules

Object Active WAJIB:

- 100 percent universal mandatory fields;
- tidak memiliki blocker atau error;
- evidence requirement terpenuhi;
- license and usage clear;
- current review;
- quality notes tersedia.

Reasoning Ready WAJIB:

- explainability memadai;
- relationship quality memadai;
- evidence coverage memadai;
- no unresolved material identity or ontology conflict;
- uncertainty visible.

## 9.20 Rationale

Multidimensional quality menghindari false precision dari satu score.

## 9.21 System Impact

System dapat memilih object berdasarkan use case. Retrieval mungkin menerima object dengan coverage rendah, sementara recommendation membutuhkan Reasoning Ready.

---

# 10. Knowledge Packaging

## 10.1 Purpose

Packaging menetapkan unit release, dependency lock, rollback, dan distribution.

## 10.2 Package Contents

Satu Package Object dapat memuat:

- package manifest;
- root object references;
- included revision references;
- dependency lock;
- ontology version;
- KOS version;
- source bundle references;
- validation reports;
- review reports;
- change log;
- license summary;
- release status;
- integrity references.

## 10.3 Root Object

Setiap package WAJIB memiliki satu atau lebih root object yang jelas.

## 10.4 Dependency Lock

Package yang digunakan untuk reproducible reasoning WAJIB mengunci revision dependency material.

## 10.5 Version Strategy

### Patch

Editorial correction, typo, formatting, atau evidence metadata correction yang tidak mengubah semantic conclusion.

### Minor

Compatible enrichment, new optional relationship, source refresh, atau context update yang tidak memutus consumer.

### Major

Breaking semantic change, identity split, scope change, ontology remapping, atau contract incompatibility.

## 10.6 Revision Strategy

Setiap perubahan menghasilkan `revision_id` baru, termasuk Patch.

## 10.7 Release Channels

BOLEH tersedia:

- draft;
- review;
- validated;
- production active;
- experimental;
- archived.

Experimental content DILARANG masuk production reasoning tanpa explicit policy.

## 10.8 Change Process

1. Create new revision.
2. Declare change class.
3. Update change summary.
4. Run impacted validators.
5. Review affected relationships and dependencies.
6. Approve.
7. Activate new revision.
8. Supersede prior revision jika applicable.
9. Publish update event.
10. Preserve rollback path.

## 10.9 Rollback

Rollback tidak mengubah revision lama.

Rollback:

- mengaktifkan prior valid revision;
- membuat governance record;
- menandai failed revision;
- mengevaluasi downstream artifacts;
- mempertahankan full audit.

## 10.10 Merge and Split

### Merge

Digunakan jika dua object ternyata satu identity.

Wajib memiliki:

- canonical survivor;
- alias migration;
- relationship migration;
- provenance preservation;
- deprecated IDs.

### Split

Digunakan jika satu object memuat dua identity.

Wajib memiliki:

- new entity IDs;
- split rationale;
- relationship allocation;
- source allocation;
- compatibility note.

## 10.11 Package Constraints

- Package tidak boleh menyalin object tanpa revision references.
- Package version tidak menggantikan object version.
- Source bundle tidak boleh menghilangkan usage restriction.

## 10.12 System Impact

Deployment knowledge dapat direproduksi, dirollback, dan diaudit pada snapshot yang sama dengan reasoning output.

---

# 11. Integration Contract

## 11.1 Career Knowledge Ontology

### Purpose

Ontology menentukan allowed entity, attribute, and relationship semantics.

### KOS Rule

Setiap Entity Object WAJIB memetakan `entity_type` dan `ontology_class`.

### Constraint

KOS tidak boleh menambah semantic class tanpa ontology change atau namespaced experimental extension.

### System Impact

Meaning tetap konsisten lintas-object.

## 11.2 Career Decision Graph

### Purpose

CDG menggunakan Knowledge Object untuk membangun opportunity, prerequisite, market, risk, dan pathway nodes.

### KOS Rule

Reasoning consumer hanya boleh menggunakan object dengan appropriate readiness profile.

### Constraint

User-specific graph state tidak ditulis kembali sebagai universal Knowledge Object.

## 11.3 Assessment Engine

Assessment Instrument dan Result Type mengikuti KOS.

Personal assessment result tetap berada di assessment data layer, bukan universal knowledge.

## 11.4 Memory Engine

Memory menyimpan user-specific reference ke `entity_id`, `object_id`, dan revision bila perlu.

Memory tidak menyalin canonical object.

## 11.5 Recommendation Engine

Recommendation Engine:

- mengambil Active and Reasoning Ready object;
- menyimpan revision references;
- mempertahankan evidence and confidence;
- tidak mengubah universal object.

Feedback recommendation dapat menjadi review signal, bukan automatic truth update.

## 11.6 AI Constitution

KOS wajib mendukung:

- evidence over assumption;
- transparency over certainty;
- no stereotype;
- no permanent labeling;
- privacy;
- contestability;
- regional context;
- causal humility.

## 11.7 ACP

ACP membawa:

- object references;
- revision references;
- evidence bundle;
- confidence;
- version;
- status;
- allowed purpose.

Full object hanya dikirim jika diperlukan.

## 11.8 AI Orchestrator

Orchestrator:

- memeriksa KOS and ontology version;
- memilih readiness profile;
- menolak stale or invalid object;
- menjaga dependency lock;
- tidak mengubah domain knowledge.

## 11.9 Knowledge Generator

Generator WAJIB:

- menghasilkan Draft;
- menggunakan valid entity template;
- menyatakan source;
- menandai uncertainty;
- tidak membuat unsupported field;
- menghasilkan generation record.

Generator DILARANG mengaktifkan object.

## 11.10 Knowledge Reviewer

Reviewer WAJIB:

- memeriksa semantic identity;
- memeriksa common mistakes;
- memeriksa claim-source alignment;
- mencatat review scope dan decision;
- mengungkap conflict of interest.

## 11.11 Knowledge Validator

Validator WAJIB:

- versioned;
- deterministic sejauh applicable;
- menghasilkan findings;
- tidak memperbaiki domain claim diam-diam;
- membedakan blocker dan warning.

## 11.12 Backend Implementation

Backend boleh menurunkan:

- interfaces;
- classes;
- validation rules;
- event types;
- storage models;
- indexes;
- graph edges;
- RAG document projections.

Implementation DILARANG mengubah field semantics.

---

# 12. Future Expansion

## 12.1 Knowledge Graph

KOS relationships menjadi graph edges. Entity Object menjadi nodes. Assertion dan Evidence Object menjadi claim and provenance subgraph.

## 12.2 Vector Database

Embedding adalah derived artifact.

Embedding record harus menyimpan:

- object ID;
- revision ID;
- chunk ID;
- source field paths;
- locale;
- embedding model version;
- created time;
- access restriction.

Embedding tidak menjadi canonical truth.

## 12.3 RAG

RAG chunk harus:

- berasal dari Active object;
- memiliki object and revision reference;
- mempertahankan claim and source refs;
- menyatakan locale;
- menghormati restriction;
- expire ketika source revision superseded.

## 12.4 Multi-Agent AI

Agent bertukar references dan bounded object views melalui ACP.

## 12.5 Knowledge Marketplace

Marketplace contribution membutuhkan:

- contributor identity;
- license;
- trust tier;
- source;
- validation;
- conflict of interest;
- update obligation;
- revocation path.

Marketplace content tidak otomatis Active.

## 12.6 Community Contribution

Community dapat mengusulkan:

- aliases;
- correction;
- new source;
- outdated signal;
- localization.

Community tidak langsung mengubah canonical object.

## 12.7 Institutional Contribution

Institution dapat mengelola object yang menjadi authoritative untuk identity dan offering-nya, tetapi claim quality atau ranking tetap membutuhkan independent governance jika dipakai lintas-domain.

## 12.8 International Expansion

KOS mendukung:

- multilingual labels;
- local regulation;
- qualification mapping;
- local labor markets;
- currency;
- education systems;
- geographic variants;
- cross-border recognition.

## 12.9 New Entity Types

Entity baru ditambahkan melalui ontology governance dan entity template extension.

## 12.10 Model Evolution

Future model tetap harus menghasilkan contract-compliant object. Model-specific metadata disimpan pada generation record, bukan core semantics.

## 12.11 Research-grade Knowledge

KOS dapat diperluas dengan:

- hypothesis objects;
- dataset objects;
- method objects;
- replication status;
- systematic review evidence;
- causal evidence class.

## 12.12 Real-time Knowledge

Real-time signals dapat menggunakan volatile assertion stream, tetapi canonical Entity Object tetap stabil.

---

# 13. Specification Governance

## 13.1 Purpose

Mengelola perubahan KOS tanpa semantic drift.

## 13.2 Governance Roles

- KOS Owner;
- Ontology Owner;
- Backend Architecture Reviewer;
- AI Systems Reviewer;
- Evidence Governance Reviewer;
- Localization Reviewer;
- Security and Privacy Reviewer;
- Domain Steward.

## 13.3 Change Proposal Requirements

Perubahan KOS WAJIB menjelaskan:

- problem;
- proposed semantics;
- affected fields;
- affected entity templates;
- backward compatibility;
- migration;
- validator changes;
- agent impact;
- audit impact;
- localization impact;
- rollout and rollback.

## 13.4 Extension Namespace

Experimental field harus berada dalam approved extension namespace dan tidak boleh menggunakan nama core field.

## 13.5 Deprecation Policy

Field deprecated:

- tetap dapat dibaca selama transition;
- memiliki replacement;
- memiliki migration note;
- tidak dihapus pada minor version.

## 13.6 Breaking Change

Breaking change membutuhkan major KOS version.

## 13.7 Exception

Exception:

- harus documented;
- time-bound;
- object-specific atau profile-specific;
- approved;
- tidak boleh melanggar Constitution atau Ontology invariant.

## 13.8 Audit

Sistem harus dapat menjawab:

- KOS version apa yang menghasilkan object;
- validator version apa yang digunakan;
- siapa mengaktifkan;
- field apa yang berubah;
- consumer apa yang terdampak;
- apakah migration selesai.

---

# 14. Success Criteria

## 14.1 Contract Consistency

Object dari manusia, GPT, Claude Code, dan pipeline memiliki struktur dan semantics yang sama.

## 14.2 Implementation Readiness

Backend engineer dapat menurunkan:

- model;
- class;
- validator;
- lifecycle permission;
- event;
- graph mapping;
- audit interface.

Tanpa menebak meaning field.

## 14.3 Generation Reliability

AI dapat menghasilkan ribuan Draft dengan:

- valid entity template;
- stable identity proposal;
- source references;
- explicit uncertainty;
- consistent field names.

## 14.4 Review Clarity

Reviewer dapat mengetahui:

- apa yang wajib;
- apa yang salah;
- claim mana yang unsupported;
- relationship mana yang invalid;
- perubahan apa yang diperlukan.

## 14.5 Validation Determinism

Validator yang memakai KOS version sama menghasilkan classification finding yang konsisten.

## 14.6 Ontology Compliance

Tidak ada object Active yang menggunakan class atau relationship di luar Ontology tanpa approved extension.

## 14.7 Evidence Traceability

Setiap claim material dapat ditelusuri ke source.

## 14.8 Lifecycle Integrity

Tidak ada Draft yang dipakai sebagai authoritative production knowledge.

## 14.9 Version Integrity

Tidak ada published revision yang ditimpa.

## 14.10 Localization Integrity

Satu semantic identity dapat digunakan di Indonesia dan global tanpa duplicate entity.

## 14.11 Reasoning Safety

Recommendation dan Decision Graph hanya menggunakan object dengan appropriate readiness profile.

## 14.12 Auditability

Setiap object Active memiliki:

- creator;
- sources;
- review;
- validation;
- approval;
- version;
- change history;
- quality status.

## 14.13 Maintainability

Outdated, deprecated, disputed, dan superseded object dapat dikelola tanpa kehilangan historical trace.

## 14.14 Future Compatibility

Knowledge Graph, vector database, RAG, multi-agent, marketplace, dan institutional contribution dapat menggunakan contract yang sama.

---

# 15. Mandatory Conformance Checklist

## 15.1 Generator Checklist

- [ ] `kos_version` tersedia.
- [ ] `object_kind` benar.
- [ ] `object_id` dan `revision_id` tersedia.
- [ ] `entity_id` proposal tidak duplicate.
- [ ] `entity_type` valid.
- [ ] Definition dan scope jelas.
- [ ] Mandatory entity fields tersedia.
- [ ] Source dan provenance tersedia.
- [ ] Claim class dibedakan.
- [ ] Geography dan time tersedia jika required.
- [ ] Uncertainty dinyatakan.
- [ ] Status adalah Draft.
- [ ] Tidak ada forbidden content.

## 15.2 Reviewer Checklist

- [ ] Identity benar.
- [ ] Ontology class benar.
- [ ] Concept dan instance tidak bercampur.
- [ ] Mandatory fields lengkap.
- [ ] Relationship valid.
- [ ] Requirement level tepat.
- [ ] Claim sesuai evidence.
- [ ] Counterevidence terlihat.
- [ ] Temporal scope benar.
- [ ] Geographic scope benar.
- [ ] Localization tepat.
- [ ] Common mistakes tidak terjadi.
- [ ] Usage restrictions benar.
- [ ] Quality notes memadai.

## 15.3 Validator Checklist

- [ ] Identity Validation lulus.
- [ ] Ontology Validation lulus.
- [ ] Relationship Validation lulus.
- [ ] Evidence Validation lulus.
- [ ] Temporal Validation lulus.
- [ ] Localization Validation lulus jika applicable.
- [ ] Completeness Validation lulus.
- [ ] Consistency Validation lulus.
- [ ] Explainability Validation lulus.
- [ ] Reasoning Readiness ditentukan.
- [ ] Retrieval Readiness ditentukan.
- [ ] Tidak ada blocker tersembunyi.
- [ ] Validator versions tercatat.

## 15.4 Activation Checklist

- [ ] Status Validated.
- [ ] No blocker or error.
- [ ] Approval tersedia.
- [ ] License tersedia.
- [ ] Freshness current.
- [ ] Review history lengkap.
- [ ] Quality component scores tersedia.
- [ ] Active profiles dinyatakan.
- [ ] Dependency lock tersedia jika package.
- [ ] Prior revision ditangani.
- [ ] Audit record lengkap.
- [ ] Activation event siap.

---

# 16. Closing Contract

Knowledge Object Specification V1 adalah contract representasi resmi seluruh knowledge KarirGPS.

KOS memastikan bahwa sebuah object tidak dianggap layak hanya karena:

- formatnya rapi;
- narasinya panjang;
- dibuat oleh model kuat;
- berasal dari institution terkenal;
- memiliki banyak source;
- memiliki quality score tinggi.

Sebuah Knowledge Object layak digunakan ketika:

- identity-nya benar;
- ontology-nya benar;
- scope-nya jelas;
- claims-nya atomik;
- evidence-nya proporsional;
- relationship-nya valid;
- context waktu dan wilayahnya tepat;
- uncertainty-nya terlihat;
- version-nya dapat dilacak;
- review dan validation-nya sah;
- penggunaannya sesuai Constitution;
- readiness-nya sesuai task.

KOS memisahkan semantic truth, representation, evidence, lifecycle, dan implementation. Pemisahan ini memungkinkan KarirGPS membangun knowledge foundation yang dapat dipakai oleh backend systems, AI agents, human experts, dan future models selama lebih dari sepuluh tahun tanpa kehilangan consistency, explainability, auditability, dan global extensibility.
