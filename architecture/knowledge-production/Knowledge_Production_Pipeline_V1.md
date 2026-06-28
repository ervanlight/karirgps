# Knowledge Production Pipeline V1

**Product:** KarirGPS  
**Document Type:** Enterprise Knowledge Production Engineering Specification  
**Version:** 1.0  
**Status:** Design Baseline  
**Governing Constitution:** `governance/ai-constitution/AI_Constitution_V1.md`  
**Governing Ontology:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`  
**Knowledge Contract:** `assets/knowledge/specification/Knowledge_Object_Specification_V1.md`  
**Communication Standard:** `architecture/agent-protocol/AI_Agent_Communication_Protocol_V1.md`  
**Orchestration Standard:** `architecture/orchestrator/AI_Orchestrator_Architecture_V1.md`  
**Decision Model:** `architecture/decision-engine/Career_Decision_Graph_V1.md`  
**Target Path:** `architecture/knowledge-production/Knowledge_Production_Pipeline_V1.md`

---

## 0. Status, Scope, and Normative Language

### 0.1 Purpose

Knowledge Production Pipeline V1, selanjutnya disebut KPP, adalah specification resmi untuk memproduksi, memvalidasi, memublikasikan, mendaftarkan, memonitor, dan memperbaiki Knowledge Object KarirGPS secara konsisten dalam skala besar.

KPP mengatur proses konseptual dari permintaan knowledge hingga object siap digunakan oleh:

- Knowledge Engine;
- Career Decision Graph;
- Assessment and Recommendation Engine;
- Roadmap Engine;
- Report Agent;
- Knowledge Agent;
- AI Orchestrator;
- retrieval system;
- knowledge graph;
- vector index;
- human reviewer;
- future AI models.

### 0.2 Normative Terms

Dokumen ini menggunakan istilah berikut:

- **WAJIB** berarti requirement yang harus dipenuhi.
- **DILARANG** berarti kondisi yang tidak boleh terjadi.
- **SEBAIKNYA** berarti requirement yang sangat direkomendasikan dan hanya boleh dikecualikan melalui alasan terdokumentasi.
- **BOLEH** berarti opsi yang diizinkan.
- **KONDISIONAL** berarti requirement menjadi wajib ketika kondisi yang ditentukan terpenuhi.

### 0.3 Scope

KPP mencakup:

- knowledge request;
- scope resolution;
- ontology resolution;
- evidence collection;
- evidence normalization;
- draft generation;
- KOS validation;
- ontology validation;
- quality assessment;
- human review;
- publication;
- graph registration;
- vector index registration;
- monitoring;
- continuous improvement;
- failure handling;
- governance;
- audit;
- metrics;
- contributor expansion.

### 0.4 Non-Scope

KPP tidak menetapkan:

- kode;
- API;
- database;
- queue;
- model provider;
- crawler implementation;
- storage technology;
- deployment topology;
- prompt;
- workflow engine;
- user interface;
- technical ETL sequence.

### 0.5 Pipeline Invariants

Seluruh implementation KPP WAJIB mempertahankan invariant berikut:

1. Tidak ada Knowledge Object yang menjadi Active tanpa melewati lifecycle KOS.
2. Tidak ada source yang berubah menjadi claim tanpa provenance.
3. Tidak ada entity baru yang dibuat sebelum identity resolution.
4. Tidak ada draft yang melewati ontology resolution.
5. Tidak ada score agregat yang dapat menutupi blocker.
6. Tidak ada AI generator yang boleh mengaktifkan object secara mandiri.
7. Tidak ada publication tanpa review dan validation sesuai risk class.
8. Tidak ada graph edge tanpa relationship semantics yang sah.
9. Tidak ada vector chunk tanpa revision reference.
10. Tidak ada update yang menimpa revision published.
11. Tidak ada claim temporal atau regional yang kehilangan scope.
12. Tidak ada evidence conflict yang disembunyikan.
13. Tidak ada pipeline retry yang menghasilkan duplicate object.
14. Tidak ada object yang tetap dianggap fresh setelah review due terlewati tanpa explicit policy.
15. Semua stage material harus menghasilkan audit artifacts.
16. Semua high-impact knowledge harus memiliki human accountability.
17. Seluruh processing harus mengikuti AI Constitution, Ontology, dan KOS.
18. Pipeline harus dapat direproduksi dari request, source set, contract version, dan revision history.
19. Pipeline harus mendukung global core dan local extension.
20. Pipeline harus dapat menghentikan publication secara aman.

### 0.6 System Impact

KPP menjadi production control layer yang memastikan jutaan Knowledge Object dapat dibuat oleh banyak model, editor, institution, dan contributor tanpa kehilangan semantic consistency, evidence integrity, lifecycle governance, dan auditability.

---

# 1. Executive Summary

## 1.1 Purpose

Knowledge Production Pipeline adalah sistem produksi knowledge end-to-end yang mengubah kebutuhan pengetahuan menjadi Knowledge Object yang:

- sesuai Ontology;
- mengikuti KOS;
- didukung evidence;
- melalui validation;
- direview sesuai risk;
- dipublikasikan sebagai revision immutable;
- terdaftar pada graph dan retrieval layer;
- dipantau sepanjang lifecycle.

## 1.2 Why It Is Required

Ontology dan KOS tidak cukup untuk menjamin production quality.

Ontology menjelaskan:

- entitas apa yang ada;
- relationship apa yang sah;
- batas semantik.

KOS menjelaskan:

- format object;
- field;
- lifecycle;
- validation contract;
- quality profile.

KPP menjelaskan:

- bagaimana kebutuhan knowledge diterima;
- bagaimana source dikumpulkan;
- bagaimana object dibentuk;
- bagaimana quality gate diterapkan;
- siapa yang berwenang;
- kapan object dipublikasikan;
- bagaimana object didistribusikan;
- bagaimana object dijaga tetap fresh;
- bagaimana error dan conflict ditangani.

### Rationale

Tanpa KPP, generator berbeda dapat menghasilkan object yang secara format valid tetapi:

- scope tidak konsisten;
- evidence lemah;
- entity duplicate;
- relationship salah;
- review tidak proporsional;
- revision tidak reproducible;
- data outdated tetap digunakan.

### System Impact

KPP mengubah Ontology dan KOS dari specification statis menjadi production discipline yang dapat beroperasi pada skala enterprise.

## 1.3 Relationship with Ontology

Ontology menjadi semantic authority pada tahap:

- scope resolution;
- entity classification;
- relationship resolution;
- validation;
- graph registration;
- future extension.

KPP DILARANG menciptakan semantic class baru secara lokal tanpa ontology governance.

## 1.4 Relationship with KOS

KOS menjadi object contract pada tahap:

- draft generation;
- validation;
- quality assessment;
- publication;
- packaging;
- revision;
- audit.

KPP tidak menggantikan KOS. KPP mengoperasionalkan lifecycle KOS secara konseptual.

## 1.5 Production Outcomes

KPP menghasilkan satu atau lebih outcome berikut:

- Active Entity Object;
- Active Contextual Assertion Object;
- Active Relationship Object;
- Active Evidence Object;
- Active Source Object;
- Active Package Object;
- rejected request;
- deferred request;
- disputed object;
- archived draft;
- remediation task;
- ontology change proposal;
- evidence gap record.

## 1.6 Constraints

- Throughput tidak boleh mengurangi mandatory review.
- Automation tidak boleh memperluas authority.
- AI-generated draft tidak boleh dianggap verified fact.
- Publication tidak otomatis berarti graph-ready atau vector-ready.
- Graph and vector registration require separate readiness checks.

---

# 2. Design Principles

## 2.1 Evidence-first

### Purpose

Memastikan setiap claim material berasal dari evidence yang dapat ditelusuri.

### Constraints

- Source harus teridentifikasi.
- Claim harus memiliki source coverage.
- Projection harus memiliki assumption dan horizon.
- Secondary source tidak boleh disamarkan sebagai primary source.

### Rationale

Knowledge yang tidak memiliki evidence tidak layak menjadi reasoning substrate.

### System Impact

Recommendation dan Decision Graph dapat menelusuri claim ke evidence.

## 2.2 Human-in-the-loop

### Purpose

Menjaga accountability pada identity, semantic ambiguity, source conflict, high-impact claim, dan publication.

### Constraints

- AI boleh menghasilkan Draft.
- Human atau authority-equivalent reviewer wajib untuk Active high-impact object.
- Reviewer tidak boleh diganti hanya karena model consensus tinggi.

### Rationale

Semantic correctness dan normative risk tidak dapat sepenuhnya ditentukan oleh automation.

## 2.3 Reproducible

### Purpose

Memungkinkan object dibuat ulang atau diaudit dari input yang sama.

### Constraints

Pipeline harus mencatat:

- request;
- scope;
- source set;
- source versions;
- KOS version;
- Ontology version;
- generation record;
- validator versions;
- review decisions;
- publication revision.

### System Impact

Incident dapat dianalisis dan prior revision dapat direproduksi.

## 2.4 Versioned

Semua material artifact harus versioned atau revision-linked.

Termasuk:

- request;
- source snapshot;
- normalized evidence;
- draft;
- validator report;
- review report;
- published object;
- graph registration;
- vector registration.

## 2.5 Deterministic Contracts

### Purpose

Memastikan stage transition ditentukan oleh contract, bukan keputusan tersembunyi.

### Constraints

Quality gate harus eksplisit.

### Rationale

Model dan reviewer berbeda tetap bekerja dalam standard yang sama.

## 2.6 Modular

Setiap stage memiliki input, output, owner, quality gate, failure state, dan audit artifact yang jelas.

## 2.7 Scalable

Pipeline harus mendukung:

- ribuan request paralel;
- batch production;
- incremental update;
- regional production;
- institution contribution;
- model diversity;
- priority classes.

## 2.8 AI-native

Pipeline harus mendukung AI untuk:

- candidate source discovery;
- evidence extraction;
- normalization;
- draft generation;
- validation assistance;
- duplicate detection;
- monitoring;
- anomaly detection.

AI tetap bekerja dalam bounded authority.

## 2.9 Atomic Production

Entity, assertion, relationship, source, dan package diproduksi sebagai object kinds terpisah jika lifecycle atau evidence berbeda.

## 2.10 Identity-before-content

Identity resolution dilakukan sebelum object drafting lengkap.

## 2.11 Quality-gated

Object bergerak berdasarkan gate, bukan berdasarkan stage completion semata.

## 2.12 Fail-closed for High-impact Knowledge

Jika mandatory evidence, authority, atau ontology alignment tidak tersedia, publication dihentikan.

## 2.13 Fail-visible

Failure menghasilkan artifact yang menjelaskan:

- apa yang gagal;
- stage;
- reason;
- affected object;
- remediation;
- escalation.

## 2.14 Conflict-preserving

Source conflict dipertahankan sebagai knowledge state.

## 2.15 Localization-aware

Core identity dipisahkan dari local label, local regulation, dan market context.

## 2.16 Continuous, Not One-time

Publication bukan akhir lifecycle. Monitoring dan improvement menjadi bagian pipeline.

## 2.17 Non-destructive Update

Revision lama tidak ditimpa.

## 2.18 Separation of Canonical and Derived Artifacts

Canonical object dipisahkan dari:

- graph projection;
- vector embedding;
- RAG chunk;
- report view;
- model summary.

## 2.19 Purpose-bound Production

Setiap request harus memiliki intended use. Level evidence dan review dapat berbeda berdasarkan impact.

## 2.20 Risk-proportional Governance

Semakin tinggi dampak knowledge, semakin tinggi requirement:

- source;
- human review;
- domain review;
- freshness;
- audit;
- monitoring.

## 2.21 Rationale

Prinsip ini memastikan scale tidak menghasilkan semantic entropy.

## 2.22 System Impact

Production dapat diotomasi secara luas tanpa kehilangan accountability dan human control.

---

# 3. Pipeline Operating Model

## 3.1 Purpose

Mendefinisikan unit kerja, control state, dan production boundaries.

## 3.2 Knowledge Production Case

Satu **Knowledge Production Case** adalah unit kerja yang berasal dari satu request atau satu coherent batch.

Case memiliki:

- case ID;
- request ID;
- purpose;
- object target;
- expected object kind;
- entity type;
- geography;
- locale;
- risk class;
- priority;
- owner;
- evidence plan;
- lifecycle status;
- stage states;
- audit references.

## 3.3 Production Modes

### New Entity Production

Membuat Entity Object baru setelah identity resolution.

### New Assertion Production

Membuat claim temporal, regional, atau contextual untuk existing entity.

### Revision Production

Membuat revision baru dari existing object.

### Localization Production

Membuat localized representation.

### Evidence Refresh

Memperbarui source coverage atau freshness tanpa mengubah identity.

### Relationship Enrichment

Menambah atau memperbaiki relationship.

### Batch Production

Memproduksi banyak object dengan scope dan contract yang sama.

### Corrective Production

Merespons error, dispute, incident, atau user correction.

## 3.4 Risk Classes

### Low Risk

Stable concept, non-sensitive, low decision impact.

### Moderate Risk

Used for retrieval or general explanation.

### High Risk

Used for recommendation, regulation, credential, labor market, scholarship, AI impact, or employer-facing reasoning.

### Critical Risk

Potential legal, fairness, safety, privacy, or large-scale downstream impact.

## 3.5 Readiness Targets

Case harus menyatakan target:

- Draft only;
- Published;
- Retrieval Ready;
- Reasoning Ready;
- Localized;
- Volatile Knowledge;
- Graph Ready;
- Vector Ready.

## 3.6 Constraint

Readiness target tidak boleh ditentukan setelah quality assessment hanya untuk menghindari failed gate.

## 3.7 System Impact

Production resources, review depth, dan monitoring frequency dapat disesuaikan tanpa mengubah semantic contract.

---

# 4. Pipeline Stages

---

## 4.1 Stage 1: Knowledge Request

### Purpose

Menerima dan merekam kebutuhan knowledge secara formal.

### Inputs

- user or system request;
- ontology gap;
- content roadmap;
- update signal;
- incident;
- contributor proposal;
- institutional submission;
- monitoring alert;
- downstream engine requirement.

### Required Request Attributes

- request ID;
- requester;
- requested outcome;
- intended use;
- target audience;
- proposed entity or object kind;
- geography;
- locale;
- time sensitivity;
- priority;
- risk indication;
- known sources;
- deadline;
- expected readiness profile.

### Outputs

- Knowledge Production Case;
- request classification;
- initial risk class;
- duplicate request signal;
- acceptance, rejection, or clarification status.

### Quality Gate

Request boleh lanjut jika:

- purpose jelas;
- requested output dapat dibedakan dari data atau personal recommendation;
- scope awal tersedia;
- requester and authority valid;
- use case tidak melanggar Constitution;
- target artifact dapat dipetakan ke KOS object kind.

### Failure Conditions

- request meminta personal data menjadi universal knowledge;
- purpose tidak sah;
- request duplicate dan existing active case cukup;
- object target tidak dapat diidentifikasi;
- requested output sebenarnya prompt, report, atau application feature;
- source or rights constraint membuat request tidak dapat diproses.

### Audit Artifacts

- original request;
- requester identity;
- request classification;
- risk assessment;
- duplicate check;
- acceptance decision;
- clarification record.

### Constraints

Knowledge Request tidak boleh langsung menghasilkan Draft tanpa Scope Resolution.

### Rationale

Request yang buruk menciptakan downstream ambiguity dan duplicate work.

### System Impact

Pipeline hanya mengalokasikan resource pada knowledge need yang valid.

---

## 4.2 Stage 2: Scope Resolution

### Purpose

Menentukan batas semantic, geographic, temporal, linguistic, dan operational dari production case.

### Inputs

- accepted request;
- relevant existing objects;
- intended use;
- initial risk class;
- localization context;
- downstream consumer requirement.

### Scope Dimensions

- object kind;
- entity type;
- canonical versus contextual knowledge;
- geography;
- jurisdiction;
- locale;
- time horizon;
- source classes;
- included claims;
- excluded claims;
- required readiness profile;
- review depth;
- expected dependencies.

### Outputs

- Scope Resolution Record;
- production target list;
- inclusion criteria;
- exclusion criteria;
- evidence requirement;
- validation profile;
- review profile;
- risk class confirmation.

### Quality Gate

Scope boleh lanjut jika:

- subject boundary jelas;
- concept and instance distinction jelas;
- canonical and contextual data dipisahkan;
- target object count or batch rule tersedia;
- geography and time scope tersedia jika relevant;
- intended use aligned dengan readiness target.

### Failure Conditions

- scope terlalu luas untuk atomic object;
- scope mencampur beberapa entity identity;
- geographic claim dinyatakan universal;
- production target tidak dapat dibedakan dari recommendation output;
- legal or licensing boundary unresolved.

### Audit Artifacts

- scope decision;
- included and excluded content;
- rationale;
- risk classification;
- impacted existing objects;
- reviewer assignment recommendation.

### Constraints

Scope yang berubah material setelah evidence collection harus membuat Scope Revision Record.

### Rationale

Scope resolution mencegah object menjadi content dump.

### System Impact

Evidence collection dan validation menjadi terarah.

---

## 4.3 Stage 3: Ontology Resolution

### Purpose

Menentukan semantic identity, ontology class, object kind, allowed attributes, dan relationships.

### Inputs

- Scope Resolution Record;
- Career Knowledge Ontology;
- KOS entity templates;
- existing entity registry;
- aliases and external identifiers.

### Activities Conceptually Performed

- entity identity lookup;
- duplicate candidate analysis;
- parent-child classification;
- concept versus instance check;
- object-kind resolution;
- relationship vocabulary selection;
- ontology gap detection.

### Outputs

- Ontology Resolution Record;
- resolved `entity_id` or new identity proposal;
- `entity_type`;
- `ontology_class`;
- allowed relationship set;
- mandatory domain field set;
- duplicate status;
- ontology change proposal if needed.

### Quality Gate

Stage boleh lanjut jika:

- identity resolved or approved new identity proposal exists;
- entity type valid;
- KOS template exists;
- no unresolved duplicate blocker;
- allowed relationships known;
- ontology version locked.

### Failure Conditions

- entity has no valid ontology class;
- proposed object combines multiple classes incorrectly;
- duplicate cannot be resolved;
- required relationship does not exist;
- new entity type needed but ontology governance not approved.

### Audit Artifacts

- identity match candidates;
- duplicate decision;
- ontology class decision;
- mapping rationale;
- ontology version;
- extension or change proposal.

### Constraints

Draft Generation DILARANG menciptakan semantic class or predicate yang tidak ada pada resolution record.

### Rationale

Semantic drift paling murah dihentikan sebelum evidence and drafting.

### System Impact

Semua downstream objects tetap compatible dengan graph dan reasoning.

---

## 4.4 Stage 4: Evidence Collection

### Purpose

Mengumpulkan source dan evidence yang cukup untuk claim yang direncanakan.

### Inputs

- scope;
- ontology resolution;
- evidence plan;
- source policy;
- risk class;
- locale and geography;
- existing source objects.

### Evidence Plan Components

- claim categories;
- preferred source classes;
- minimum independent sources;
- primary source requirement;
- recency requirement;
- jurisdiction requirement;
- methodology requirement;
- source diversity requirement;
- licensing requirement.

### Outputs

- Source Candidate Set;
- Evidence Collection Record;
- source snapshots or references;
- coverage map;
- unavailable evidence log;
- source conflict signals.

### Quality Gate

Evidence collection cukup jika:

- mandatory claim categories memiliki source candidate;
- source identity tersedia;
- source date and scope tersedia;
- rights or permitted use jelas;
- minimum evidence requirement terpenuhi;
- known source conflict dicatat;
- volatile knowledge memiliki current source.

### Failure Conditions

- no authoritative source for material claim;
- source inaccessible or unverifiable;
- evidence too old;
- source scope tidak sesuai geography;
- only circular secondary sourcing;
- license prohibits intended use;
- required primary evidence unavailable.

### Audit Artifacts

- search and collection strategy;
- source list;
- rejected sources;
- source selection rationale;
- source access dates;
- coverage gap;
- licensing assessment.

### Constraints

Jumlah source tidak boleh digunakan sebagai pengganti quality.

### Rationale

Evidence plan yang terstruktur mengurangi selective sourcing.

### System Impact

Claim generation dapat dilacak ke source set yang jelas.

---

## 4.5 Stage 5: Evidence Normalization

### Purpose

Mengubah source heterogen menjadi evidence yang dapat dibandingkan, dipetakan, dan digunakan tanpa kehilangan provenance.

### Inputs

- source candidate set;
- source snapshots;
- ontology resolution;
- claim plan;
- localization context.

### Normalization Dimensions

- terminology;
- units;
- currency;
- time period;
- geography;
- entity references;
- source type;
- methodology;
- claim class;
- language;
- confidence;
- primary or secondary status.

### Outputs

- Normalized Evidence Bundle;
- claim-evidence map;
- source lineage;
- harmonization notes;
- unresolved conflicts;
- normalization warnings;
- evidence confidence profile.

### Quality Gate

Normalization lulus jika:

- every normalized datum retains source reference;
- units and currency explicit;
- geography and time preserved;
- transformations recorded;
- source quotation and editorial synthesis separated;
- duplicate source lineage detected;
- conflict not removed.

### Failure Conditions

- provenance lost;
- values cannot be harmonized;
- translation changes meaning;
- source statements cannot be distinguished from editorial interpretation;
- entity mapping unresolved;
- denominator or methodology missing for quantitative evidence.

### Audit Artifacts

- normalization rules;
- transformation history;
- source-to-normalized mapping;
- unresolved mappings;
- harmonization decisions;
- confidence adjustments.

### Constraints

Normalization DILARANG meningkatkan confidence tanpa additional evidence.

### Rationale

Evidence yang tidak normalized menghasilkan comparison dan drafting yang tidak konsisten.

### System Impact

Generator and reviewer bekerja pada evidence bundle yang sama.

---

## 4.6 Stage 6: Knowledge Draft Generation

### Purpose

Membentuk KOS-compliant Draft berdasarkan scope, ontology, dan normalized evidence.

### Inputs

- Scope Resolution Record;
- Ontology Resolution Record;
- Normalized Evidence Bundle;
- entity-specific KOS template;
- generation policy;
- existing revision jika update.

### Outputs

- Draft Knowledge Object;
- Generation Record;
- claim list;
- relationship proposals;
- uncertainties;
- missing fields;
- source coverage map;
- proposed quality profile.

### Draft Generation Rules

- status WAJIB `draft`;
- object kind WAJIB benar;
- mandatory fields harus diisi atau marked missing;
- unsupported claim DILARANG;
- factual language harus sesuai evidence class;
- projection harus memiliki assumption;
- relationship harus menggunakan allowed vocabulary;
- known conflict harus terlihat;
- generation model or editor identity harus tercatat.

### Quality Gate

Draft boleh lanjut jika:

- parses against KOS conceptual contract;
- identity and ontology fields match resolution;
- no invented source;
- mandatory core fields exist;
- all material claims have evidence refs or explicit unsupported status;
- no forbidden content;
- uncertainties recorded.

### Failure Conditions

- hallucinated source;
- claim exceeds evidence;
- wrong object kind;
- missing identity;
- relationship not in ontology;
- personal recommendation inserted;
- canonical and contextual knowledge mixed;
- draft cannot be attributed.

### Audit Artifacts

- generation record;
- model or editor version;
- input bundle references;
- generated draft revision;
- generation warnings;
- source coverage map.

### Constraints

Generator DILARANG memperbaiki evidence conflict dengan memilih source secara diam-diam.

### Rationale

Draft generation harus bounded by resolved contracts.

### System Impact

Multiple models dapat menghasilkan object dengan format dan semantics yang konsisten.

---

## 4.7 Stage 7: KOS Validation

### Purpose

Memastikan Draft memenuhi Knowledge Object Specification.

### Inputs

- Draft Object;
- KOS version;
- object-kind profile;
- entity-specific template;
- target readiness profiles.

### Validator Coverage

- universal mandatory fields;
- lifecycle state;
- identity fields;
- version fields;
- evidence fields;
- localization fields;
- quality fields;
- entity-specific mandatory and forbidden fields;
- composition;
- references;
- readiness profiles.

### Outputs

- KOS Validation Report;
- pass, pass_with_warnings, fail, or indeterminate;
- blocker, error, warning, and information findings;
- remediation list;
- readiness eligibility.

### Quality Gate

Stage lulus jika:

- no KOS blocker;
- no unresolved KOS error;
- mandatory fields complete for intended profile;
- forbidden fields absent;
- composition rules satisfied;
- lifecycle and revision valid.

### Failure Conditions

- invalid field semantics;
- mandatory field missing;
- revision overwrite attempt;
- forbidden content;
- invalid status transition;
- invalid nested object;
- readiness claimed without required fields.

### Audit Artifacts

- validator name and version;
- validation report;
- field-level findings;
- remediation history;
- revalidation records.

### Constraints

Validator DILARANG memperbaiki domain content secara diam-diam.

### Rationale

KOS validation memastikan object contract sebelum semantic review lebih lanjut.

### System Impact

Backend implementation dapat mempercayai object structure.

---

## 4.8 Stage 8: Ontology Validation

### Purpose

Memastikan object konsisten dengan Career Knowledge Ontology.

### Inputs

- KOS-valid Draft;
- ontology version;
- Ontology Resolution Record;
- relationship proposals;
- target entity references.

### Outputs

- Ontology Validation Report;
- class validation;
- identity validation;
- relationship validation;
- taxonomy validation;
- ontology conflict or gap record.

### Quality Gate

Stage lulus jika:

- entity type valid;
- ontology class valid;
- parent-child mapping correct;
- concept and instance not mixed;
- predicates allowed;
- source and target class compatible;
- duplicate identity resolved;
- no unauthorized extension.

### Failure Conditions

- ontology mismatch;
- invalid relationship direction;
- duplicate entity;
- taxonomy misuse;
- unapproved new class;
- skill-task-tool confusion;
- career-role-title confusion;
- major-program-institution confusion.

### Audit Artifacts

- validator report;
- identity resolution evidence;
- relationship findings;
- ontology version;
- ontology change request if needed.

### Constraints

Ontology mismatch cannot be overridden by high quality score.

### Rationale

Structural compliance does not guarantee semantic correctness.

### System Impact

Knowledge graph remains coherent.

---

## 4.9 Stage 9: Quality Assessment

### Purpose

Menilai kualitas object secara multidimensional dan menentukan readiness.

### Inputs

- KOS-valid Draft;
- Ontology Validation Report;
- evidence bundle;
- source quality assessment;
- localization assessment;
- intended use.

### Quality Dimensions

- accuracy;
- coverage;
- completeness;
- consistency;
- freshness;
- evidence quality;
- relationship quality;
- localization quality;
- explainability;
- reasoning utility;
- reusability;
- maintainability;
- auditability;
- retrieval quality.

### Outputs

- Quality Assessment Report;
- component scores;
- aggregate score;
- blocker list;
- warning list;
- readiness profile recommendation;
- review priorities.

### Quality Gate

Object boleh masuk Human Review jika:

- no automatic blocker;
- minimum evidence threshold met;
- quality dimensions assessed or marked not assessed;
- intended use and quality profile aligned;
- critical freshness requirement met.

### Failure Conditions

- evidence quality too low;
- coverage insufficient for requested scope;
- stale critical source;
- explainability insufficient;
- relationship quality too weak for reasoning;
- quality profile cannot be determined;
- aggregate score high but blocker exists.

### Audit Artifacts

- scoring method version;
- component score rationale;
- blocker and warning list;
- readiness recommendation;
- quality assessor identity.

### Constraints

Quality score DILARANG menjadi publication authority.

### Rationale

Quality assessment mengarahkan human reviewer pada area paling material.

### System Impact

Review resources dapat diprioritaskan secara risk-based.

---

## 4.10 Stage 10: Human Review

### Purpose

Memberikan domain, evidence, semantic, localization, ethics, dan governance accountability.

### Inputs

- Draft Object;
- KOS and Ontology reports;
- Quality Assessment;
- Evidence Bundle;
- source snapshots;
- common mistake checklist;
- prior revision if any.

### Review Types

- domain review;
- evidence review;
- ontology review;
- localization review;
- legal or regulatory review;
- fairness review;
- editorial review;
- publication approval review.

### Outputs

- Review Report;
- approved, changes_requested, rejected, or escalated decision;
- field-level findings;
- claim-level decision;
- conflict assessment;
- required corrections;
- readiness approval;
- reviewer attestation.

### Quality Gate

Object boleh lanjut jika:

- required review roles completed;
- no unresolved material review finding;
- conflict of interest disclosed;
- claim and evidence alignment approved;
- readiness profile approved;
- change requests resolved.

### Failure Conditions

- reviewer rejects identity;
- source conflict unresolved and not representable;
- claims exceed evidence;
- localization inaccurate;
- prohibited interpretation risk;
- reviewer authority insufficient;
- required expert unavailable;
- sponsored source bias not disclosed.

### Audit Artifacts

- reviewer identity;
- review type;
- review date;
- findings;
- decision;
- conflict of interest;
- correction cycles;
- approval signature or authority record.

### Constraints

Human review tidak boleh berubah menjadi undocumented rewriting. Setiap change harus menghasilkan revision or change record.

### Rationale

Review mengatasi semantic ambiguity yang tidak dapat diselesaikan oleh validator.

### System Impact

Active knowledge memiliki accountable human or institutional ownership.

---

## 4.11 Stage 11: Publication

### Purpose

Mengubah Validated revision menjadi Active revision sesuai KOS lifecycle.

### Inputs

- approved object;
- completed validations;
- quality report;
- review approval;
- license;
- usage restrictions;
- dependency status;
- publication package.

### Publication Actions Conceptually

- assign publication status;
- lock revision;
- declare effective date;
- set next review due;
- supersede prior revision if needed;
- publish release notes;
- create integrity record;
- emit publication event.

### Outputs

- Active Knowledge Object;
- Publication Record;
- release package;
- successor and predecessor links;
- active readiness profiles;
- published event.

### Quality Gate

Publication lulus jika:

- object status Validated;
- no blocker or error;
- approval complete;
- license and restrictions clear;
- revision immutable;
- dependency references resolve;
- effective period valid;
- next review due assigned;
- prior active revision handled.

### Failure Conditions

- missing approval;
- unresolved dependency;
- stale evidence before publication;
- invalid license;
- revision collision;
- conflicting active revision without variant rule;
- missing audit records.

### Audit Artifacts

- publication decision;
- publisher identity;
- effective date;
- active revision;
- prior revision treatment;
- release notes;
- integrity reference;
- publication event.

### Constraints

Publication DILARANG mengubah content setelah approval tanpa new revision.

### Rationale

Publication is a controlled state transition, not file saving.

### System Impact

Downstream consumers receive stable and auditable knowledge.

---

## 4.12 Stage 12: Graph Registration

### Purpose

Mendaftarkan Active object ke knowledge graph projection.

### Inputs

- Active Knowledge Object;
- active revision;
- ontology mapping;
- relationship objects;
- graph readiness report;
- dependency references.

### Outputs

- Graph Registration Record;
- node registrations;
- edge registrations;
- claim and provenance graph links;
- unresolved target queue;
- graph revision reference.

### Quality Gate

Graph registration lulus jika:

- object is Active;
- Graph Ready profile approved;
- entity identity resolves;
- all mandatory target references resolve;
- predicates valid;
- contextual relationship has scope;
- provenance retained;
- no forbidden graph edge.

### Failure Conditions

- missing target entity;
- invalid predicate;
- duplicate node identity;
- graph cycle caused by dependency error;
- contextual data treated as intrinsic node property;
- provenance lost.

### Audit Artifacts

- graph mapping;
- registered node and edge IDs;
- rejected edges;
- dependency resolution;
- graph registration version;
- registration timestamp.

### Constraints

Graph projection is derived artifact. It must not become canonical source of object content.

### Rationale

Graph registration membutuhkan semantic gate terpisah dari publication.

### System Impact

Career Decision Graph dan Knowledge Agent dapat menggunakan relationships yang valid.

---

## 4.13 Stage 13: Vector Index Registration

### Purpose

Mendaftarkan retrieval representations untuk semantic search dan RAG.

### Inputs

- Active Knowledge Object;
- Vector Ready profile;
- localized content;
- approved chunking view;
- access restrictions;
- embedding model profile;
- revision reference.

### Outputs

- Vector Registration Record;
- chunk records;
- embedding records;
- locale mapping;
- source field paths;
- access control references;
- expiry behavior.

### Quality Gate

Registration lulus jika:

- source object Active;
- chunk has object and revision reference;
- chunk meaning remains coherent;
- evidence and source references preserved;
- locale correct;
- restricted content excluded or protected;
- embedding model version recorded;
- supersession behavior defined.

### Failure Conditions

- chunk detached from source revision;
- mixed entities in one chunk without context;
- restricted content indexed publicly;
- outdated revision indexed as default;
- unsupported localization;
- summary generated without provenance.

### Audit Artifacts

- chunk manifest;
- source field paths;
- embedding model version;
- vector index version;
- registration date;
- access policy;
- stale and deletion policy.

### Constraints

Embedding similarity DILARANG digunakan sebagai evidence atau truth score.

### Rationale

Vector index optimizes retrieval, not semantics.

### System Impact

RAG dapat menemukan knowledge yang tepat tanpa kehilangan source lineage.

---

## 4.14 Stage 14: Monitoring

### Purpose

Memantau freshness, usage, correctness, drift, conflict, dan downstream impact setelah publication.

### Inputs

- Active object;
- publication metadata;
- usage signals;
- source update signals;
- graph and vector registrations;
- review due dates;
- incident reports;
- contributor feedback;
- downstream outcomes.

### Monitoring Dimensions

- freshness;
- source availability;
- ontology compatibility;
- relationship integrity;
- retrieval performance;
- graph consistency;
- usage volume;
- error reports;
- conflict signals;
- downstream impact;
- license change;
- regulation change;
- market change;
- AI trend change.

### Outputs

- Monitoring Record;
- freshness alerts;
- review tasks;
- correction requests;
- deprecation proposals;
- incident records;
- source replacement tasks;
- retrieval tuning signals.

### Quality Gate

Monitoring is healthy if:

- review due tracked;
- stale object identified;
- broken references detected;
- critical changes escalated;
- active object usage can be traced;
- false retrieval and error signals reviewed.

### Failure Conditions

- expired object still served as current;
- source withdrawn without action;
- graph and canonical revision diverge;
- vector index points to superseded revision;
- monitoring alert ignored;
- downstream incident cannot identify source revision.

### Audit Artifacts

- monitoring events;
- alert history;
- review assignments;
- incident linkage;
- stale status;
- remediation status.

### Constraints

Usage popularity does not prove accuracy.

### Rationale

Knowledge decays after publication.

### System Impact

System remains current and trustworthy.

---

## 4.15 Stage 15: Continuous Improvement

### Purpose

Mengubah monitoring, feedback, outcomes, audit, dan research menjadi controlled improvement.

### Inputs

- monitoring signals;
- review findings;
- usage analytics;
- rejected requests;
- contributor corrections;
- new evidence;
- ontology gaps;
- validator false positives;
- retrieval failures;
- downstream reasoning incidents.

### Outputs

- revision case;
- ontology change proposal;
- KOS change proposal;
- validator improvement;
- source policy update;
- reviewer guideline update;
- deprecation or supersession case;
- new production backlog.

### Quality Gate

Improvement action dapat dijalankan jika:

- signal is classified;
- affected objects identified;
- change authority assigned;
- compatibility assessed;
- expected impact defined;
- rollback path available.

### Failure Conditions

- feedback directly changes canonical object without review;
- model behavior becomes source of truth;
- improvement cannot be traced;
- conflicting feedback averaged without analysis;
- change breaks identity without split or merge governance.

### Audit Artifacts

- improvement proposal;
- evidence;
- affected object set;
- impact analysis;
- governance decision;
- revision linkage;
- outcome evaluation.

### Constraints

Downstream outcome may inform review but does not automatically prove universal knowledge.

### Rationale

Pipeline harus belajar tanpa mengubah noise menjadi truth.

### System Impact

KPP berkembang berdasarkan evidence dan operational learning.

---

# 5. Knowledge Roles

## 5.1 Purpose

Mendefinisikan accountability dan separation of duties.

## 5.2 Knowledge Generator

### Purpose

Membentuk Draft dari resolved scope dan evidence.

### Allowed Actions

- generate draft;
- propose claims;
- propose relationships;
- identify missing evidence;
- create generation record.

### Forbidden Actions

- activate object;
- approve own draft;
- invent ontology class;
- hide uncertainty;
- fabricate source.

### Constraints

Generator output selalu Draft.

### System Impact

Automation dapat diperluas dengan risk yang terkontrol.

## 5.3 Knowledge Validator

### Purpose

Menjalankan KOS, ontology, evidence, temporal, localization, consistency, dan readiness checks.

### Allowed Actions

- issue findings;
- pass or fail validation;
- recommend remediation;
- calculate quality components according to versioned method.

### Forbidden Actions

- rewrite claim silently;
- resolve domain conflict without authority;
- approve publication by itself unless explicitly assigned and allowed.

### System Impact

Validation becomes repeatable and auditable.

## 5.4 Knowledge Reviewer

### Purpose

Menilai correctness dan appropriateness melalui human or institution authority.

### Allowed Actions

- approve;
- request changes;
- reject;
- escalate;
- annotate conflict;
- approve readiness profile.

### Forbidden Actions

- alter source record;
- suppress counterevidence;
- approve outside expertise;
- ignore conflict of interest.

## 5.5 Knowledge Steward

### Purpose

Menjaga semantic integrity dan lifecycle pada domain tertentu.

### Responsibilities

- approve identity;
- manage duplicates;
- resolve merge and split;
- maintain ontology alignment;
- assign review;
- oversee freshness;
- coordinate incident correction.

### System Impact

Setiap domain memiliki accountable owner.

## 5.6 Knowledge Publisher

### Purpose

Melakukan lifecycle transition menjadi Active.

### Responsibilities

- verify gate completion;
- lock revision;
- handle prior revision;
- issue publication record;
- emit events.

### Forbidden Actions

- modify approved content;
- bypass missing validation;
- publish without license.

## 5.7 Knowledge Curator

### Purpose

Mengelola collection, coverage, taxonomy views, backlog, and reuse.

### Responsibilities

- identify gaps;
- manage production roadmap;
- avoid duplicate production;
- improve cross-object coherence;
- create curated collections.

### Constraint

Curator does not change canonical claims without review.

## 5.8 Knowledge Auditor

### Purpose

Memeriksa compliance, provenance, quality, lifecycle, and operational integrity.

### Responsibilities

- sample audits;
- incident investigation;
- source trace;
- conflict review;
- access and usage audit;
- publication integrity;
- process conformance.

### Independence

Auditor SEBAIKNYA independen dari generator dan publisher untuk high-risk knowledge.

## 5.9 Separation of Duties

Untuk high-risk object:

- Generator tidak boleh menjadi sole Reviewer.
- Reviewer tidak boleh menjadi sole Publisher jika conflict of interest ada.
- Publisher tidak boleh mengabaikan failed validator.
- Auditor tidak boleh mengaudit perubahan yang dibuatnya sendiri tanpa secondary review.

## 5.10 Rationale

Role separation mencegah automation bias dan self-approval.

## 5.11 System Impact

Accountability tetap jelas pada production scale.

---

# 6. Quality Gates

## 6.1 Purpose

Menetapkan syarat perpindahan stage.

## 6.2 Gate 1: Request Acceptance

Required:

- valid purpose;
- valid requester;
- no constitutional violation;
- target object identifiable;
- no unnecessary duplicate request.

## 6.3 Gate 2: Scope Lock

Required:

- object kind;
- entity class;
- inclusion and exclusion;
- context;
- readiness target;
- risk class;
- evidence plan.

## 6.4 Gate 3: Ontology Resolution

Required:

- identity resolved;
- class valid;
- template available;
- duplicate cleared;
- relationship vocabulary known.

## 6.5 Gate 4: Evidence Sufficiency

Required:

- material claim coverage;
- source identity;
- recency;
- licensing;
- geography and time;
- conflict recorded.

## 6.6 Gate 5: Evidence Integrity

Required:

- provenance preserved;
- normalization documented;
- no unit or methodology ambiguity;
- claim class identified.

## 6.7 Gate 6: Draft Integrity

Required:

- KOS core fields;
- no fabricated source;
- no forbidden content;
- uncertainties visible;
- status Draft.

## 6.8 Gate 7: KOS Compliance

Required:

- no blocker or error;
- intended profile fields complete;
- lifecycle and composition valid.

## 6.9 Gate 8: Ontology Compliance

Required:

- class and relationships valid;
- identity correct;
- no unauthorized extension.

## 6.10 Gate 9: Quality Eligibility

Required:

- component quality assessed;
- no non-compensatory blocker;
- freshness current;
- evidence threshold achieved.

## 6.11 Gate 10: Human Approval

Required:

- assigned reviews complete;
- findings resolved;
- readiness approved;
- conflict of interest disclosed.

## 6.12 Gate 11: Publication

Required:

- Validated status;
- immutable revision;
- approval;
- license;
- dependency resolution;
- review due.

## 6.13 Gate 12: Graph Readiness

Required:

- Active revision;
- valid entity and relationship mapping;
- provenance retained;
- graph targets resolve.

## 6.14 Gate 13: Vector Readiness

Required:

- Active revision;
- coherent chunks;
- source path;
- access control;
- embedding version;
- supersession behavior.

## 6.15 Gate 14: Operational Health

Required:

- monitoring active;
- review schedule;
- source availability;
- graph-vector-canonical consistency.

## 6.16 Non-compensatory Blockers

The following cannot be offset by score:

- duplicate identity;
- invalid ontology class;
- fabricated source;
- missing mandatory evidence;
- privacy or license violation;
- unauthorized publication;
- stale critical regulation;
- unresolved critical conflict;
- unsupported universal claim;
- revision overwrite.

## 6.17 Rationale

Quality gate prevents stage completion from being confused with readiness.

## 6.18 System Impact

Pipeline can run automatically while preserving publication safety.

---

# 7. Failure Handling

## 7.1 Purpose

Menetapkan safe and auditable response terhadap failure.

## 7.2 General Failure Contract

Setiap failure menghasilkan:

- failure ID;
- case ID;
- stage;
- object or source affected;
- failure class;
- severity;
- root cause candidate;
- completed work;
- invalidated work;
- remediation;
- retry eligibility;
- escalation;
- owner;
- status.

## 7.3 Evidence Conflict

### Handling

- preserve all conflicting evidence;
- classify conflict;
- compare time, geography, methodology, and source authority;
- create disputed claim or contextual variants if valid;
- request domain review;
- lower confidence;
- block publication if conflict affects core identity or material claim.

### Stop Condition

Conflict resolved, represented transparently, or escalated.

### Audit Artifact

Evidence Conflict Record.

## 7.4 Ontology Mismatch

### Handling

- stop drafting or publication;
- determine whether mapping error, entity split, or ontology gap;
- return object to Ontology Resolution;
- create ontology change proposal if necessary.

### Constraint

Local workaround using unofficial field or predicate is prohibited.

## 7.5 Duplicated Object

### Handling

- compare identity and scope;
- classify exact duplicate, local representation, contextual variant, or distinct entity;
- merge, link, or reject;
- preserve provenance and aliases;
- update request as reuse if existing object sufficient.

### Audit Artifact

Identity Resolution and Duplicate Decision Record.

## 7.6 Low Confidence

### Handling

- identify cause;
- seek additional evidence;
- narrow claim;
- narrow geography or time;
- classify as provisional or disputed;
- reduce readiness target;
- defer publication if material.

### Constraint

Low confidence is not converted to neutral fact.

## 7.7 Outdated Sources

### Handling

- search for replacement;
- mark object stale or review_due;
- suspend reasoning-ready status if critical;
- retain historical source;
- create revision case;
- deprecate if no valid update available.

## 7.8 Validation Failure

### Handling

- classify KOS, ontology, evidence, temporal, localization, or consistency issue;
- return to relevant upstream stage;
- preserve failed report;
- rerun only affected validators after remediation;
- limit retry cycles.

## 7.9 Human Review Rejection

### Handling

- return to Draft if remediable;
- archive if invalid;
- escalate if reviewers disagree;
- record rejection rationale;
- prevent resubmission without material change.

## 7.10 Publication Failure

### Handling

- preserve Validated revision;
- do not create partial Active state;
- resolve dependency, license, or revision conflict;
- retry publication after gate recheck.

## 7.11 Graph Registration Failure

### Handling

- keep canonical object Active if publication remains valid;
- mark Graph Ready false;
- correct mappings;
- do not create invalid edge.

## 7.12 Vector Registration Failure

### Handling

- keep canonical object Active;
- mark Vector Ready false;
- rebuild chunks or permissions;
- prevent stale chunks from remaining default.

## 7.13 Source Withdrawal

### Handling

- assess claim dependency;
- replace source if possible;
- reduce evidence status;
- trigger review;
- preserve legal audit metadata subject to rights.

## 7.14 Pipeline Retry Policy

Retry allowed when:

- failure is transient;
- input unchanged but resource unavailable;
- validator service unavailable;
- source access temporarily unavailable.

Retry not allowed when:

- ontology mismatch;
- source fabrication;
- missing authority;
- unresolved rights;
- human rejection without change;
- invalid identity.

## 7.15 Failure Escalation

Escalation targets:

- Knowledge Steward;
- Ontology Owner;
- Evidence Reviewer;
- Governance Reviewer;
- Legal or Privacy Reviewer;
- Human Domain Expert;
- AI Orchestrator.

## 7.16 Rationale

Failure handling prevents pressure for throughput from creating silent corruption.

## 7.17 System Impact

Pipeline can recover while preserving trust and lineage.

---

# 8. Governance

## 8.1 Purpose

Menerapkan AI Constitution dan enterprise controls sepanjang production lifecycle.

## 8.2 Constitutional Controls

### Evidence over Assumption

Every material claim requires evidence or explicit uncertainty.

### Transparency over Certainty

Confidence and conflict remain visible.

### Growth over Labeling

Personality, work value, and interest knowledge cannot become deterministic career labels.

### Human Agency

Knowledge cannot encode coercive recommendation.

### Fairness

Knowledge must avoid stereotype, irrelevant protected attributes, and unjustified exclusion.

### Privacy

Universal knowledge cannot contain personal memory, private assessment, or identifiable user data.

### Contestability

Corrections, disputes, and review requests must be supported.

### Longitudinal Integrity

Historical claims remain available without being treated as current.

## 8.3 Governance by Stage

| Stage | Governance Control |
|---|---|
| Request | Purpose, legality, audience, risk |
| Scope | Inclusion, exclusion, regional and temporal bounds |
| Ontology | Semantic authority and identity |
| Evidence | Source rights, bias, independence |
| Normalization | Provenance and transformation transparency |
| Draft | No fabrication, no hidden inference |
| Validation | Contract and semantic checks |
| Quality | Non-compensatory blockers |
| Review | Human accountability and conflict of interest |
| Publication | Approval, license, immutable revision |
| Registration | Access control and source lineage |
| Monitoring | Freshness, incidents, correction |
| Improvement | Controlled change and rollback |

## 8.4 Risk-proportional Review

Critical and high-risk objects may require:

- multiple independent sources;
- specialist review;
- legal review;
- localization review;
- two-person approval;
- shorter review interval;
- stricter monitoring.

## 8.5 Sponsored and Institutional Content

Source affiliation must be declared.

Institution-provided content may be authoritative for:

- official name;
- program offering;
- official requirement;
- institutional status.

It is not automatically authoritative for:

- quality ranking;
- employability claim;
- market demand;
- comparative superiority.

## 8.6 Governance Exceptions

Exception must be:

- explicit;
- scoped;
- approved;
- time-bound;
- auditable;
- reversible;
- non-conflicting with Constitution.

## 8.7 Auditability

Pipeline must answer:

- Why was this object produced?
- Which source set was used?
- Which version of KOS and Ontology applied?
- Which model or editor generated the Draft?
- Which validators ran?
- Who reviewed and approved?
- Which revision is Active?
- Which graph and vector registrations exist?
- What changed after monitoring?

## 8.8 Rationale

Governance must be embedded in production, not added after publication.

## 8.9 System Impact

KarirGPS can accept large-scale contributions without surrendering control of truth and accountability.

---

# 9. Integration

## 9.1 Career Knowledge Ontology

### Purpose

Ontology provides semantic classes, attributes, and relationships.

### Pipeline Contract

- Ontology Resolution must occur before Draft Generation.
- Ontology version must be locked per case.
- New class requires governance proposal.
- Graph registration uses ontology predicates.

### System Impact

Knowledge remains semantically coherent.

## 9.2 Knowledge Object Specification

### Purpose

KOS defines object, lifecycle, quality, validation, and packaging contract.

### Pipeline Contract

- Draft must be KOS-compliant.
- Lifecycle transitions follow KOS.
- Publication creates immutable revision.
- Readiness profiles control downstream use.

## 9.3 Career Decision Graph

### Purpose

CDG consumes reasoning-ready knowledge.

### Pipeline Contract

- CDG receives only Active objects with appropriate profile.
- Contextual assertions retain time and geography.
- Fit or user-specific decision state is not written to canonical knowledge.
- Relationship evidence remains traceable.

## 9.4 Memory Engine

### Purpose

Memory stores user-specific longitudinal state.

### Pipeline Contract

- Memory references canonical `entity_id` and revision when needed.
- Personal memory is not evidence for universal object unless anonymized, aggregated, governed, and separately validated.
- User correction does not directly modify universal knowledge.

## 9.5 AI Orchestrator

### Purpose

Orchestrator coordinates production tasks and agents.

### Pipeline Contract

- each case has one logical coordinator;
- stage tasks use ACP;
- retry, escalation, and completion follow Orchestrator rules;
- Orchestrator does not perform domain reasoning or approval.

## 9.6 AI Agent Communication Protocol

### Purpose

ACP standardizes message, evidence, context, status, conflict, and audit transfer.

### Pipeline Contract

Messages include:

- case ID;
- stage;
- object ID;
- revision ID;
- required action;
- evidence refs;
- confidence;
- status;
- dependencies;
- audit trace.

## 9.7 Assessment and Recommendation Engine

### Pipeline Contract

- consumes only approved knowledge profile;
- stores revision references;
- cannot modify canonical object;
- detected gaps become Knowledge Requests;
- user outcomes become monitoring signals, not direct truth updates.

## 9.8 Knowledge Engine

### Pipeline Contract

Knowledge Engine indexes and serves Active objects according to:

- status;
- readiness;
- locale;
- geography;
- time;
- purpose;
- restriction;
- revision.

## 9.9 Rationale

Integration by contract prevents production pipeline from becoming isolated content operation.

## 9.10 System Impact

All AI agents use the same knowledge revisions and provenance.

---

# 10. Metrics and Service Quality

## 10.1 Purpose

Mengukur capacity, quality, risk, and operational health.

## 10.2 Throughput

**Definition:** Number of objects or revisions reaching defined stage per period.

Must be segmented by:

- object type;
- risk class;
- locale;
- production mode;
- readiness profile.

Throughput alone is not success.

## 10.3 Cycle Time

Time from Request Accepted to terminal outcome.

Segment by stage to identify bottlenecks.

## 10.4 Review Time

Time from Review entry to decision.

## 10.5 First-pass Validation Rate

Percentage of Drafts passing validator without remediation.

## 10.6 Rejection Rate

Percentage of cases rejected at each gate.

High rejection may indicate poor intake or generator quality. Low rejection may indicate weak gates.

## 10.7 Evidence Coverage

Percentage of material claims with adequate evidence.

## 10.8 Evidence Quality Distribution

Distribution of source authority, directness, recency, and independence.

## 10.9 Freshness Compliance

Percentage of Active volatile objects reviewed before due date.

## 10.10 Ontology Consistency Rate

Percentage of objects without ontology or relationship error.

## 10.11 Duplicate Avoidance Rate

Percentage of new requests resolved through reuse, enrichment, or revision instead of duplicate entity creation.

## 10.12 Human Review Load

Number and complexity of review tasks per reviewer or domain.

## 10.13 Remediation Rate

Percentage of objects requiring one or more correction cycles.

## 10.14 Publication Yield

Percentage of accepted cases reaching Active.

## 10.15 Reasoning Ready Yield

Percentage of Active objects approved for reasoning.

## 10.16 Graph Registration Success Rate

Percentage of Graph Ready objects registered without semantic correction.

## 10.17 Vector Registration Success Rate

Percentage of Vector Ready objects registered with valid provenance and access controls.

## 10.18 Reuse Rate

Frequency Active objects or assertions are reused across agents and products.

## 10.19 Retrieval Precision Signal

Rate of relevant retrieval and false retrieval by object class and locale.

## 10.20 Downstream Incident Rate

Number of recommendation, report, or reasoning incidents attributable to knowledge defects.

## 10.21 Correction Latency

Time from confirmed defect to corrected Active revision.

## 10.22 Stale Exposure Rate

Frequency stale object served as current.

## 10.23 Audit Completeness

Percentage of Active objects with complete request-to-publication trace.

## 10.24 Contributor Quality

Quality and rejection pattern by contributor class without using it as the sole decision criterion.

## 10.25 Cost per Valid Object

Resource cost per object that reaches intended readiness profile.

## 10.26 KPI Constraints

- KPI must not incentivize evidence suppression.
- Throughput targets cannot override blockers.
- Reviewer speed must not reduce review depth.
- High reuse is not proof of correctness.
- Low rejection is not automatically desirable.

## 10.27 System Impact

Metrics support capacity planning and quality improvement without corrupting governance.

---

# 11. Future Expansion

## 11.1 Community Contributors

### Requirements

- contributor identity;
- trust tier;
- source declaration;
- license;
- moderation;
- review queue;
- correction and appeal mechanism.

Community submissions enter as Draft or Proposal.

## 11.2 Universities

Universities may contribute:

- official identity;
- programs;
- curriculum;
- admission requirements;
- accreditation references;
- official opportunities.

Institutional contribution does not bypass independent review for comparative or outcome claims.

## 11.3 Companies

Companies may contribute:

- organization identity;
- official role descriptions;
- tools and technologies used;
- internship and position opportunities;
- official credential or learning initiatives.

Company-provided employability, culture, or superiority claims require contextual review.

## 11.4 Government

Government sources may provide:

- regulation;
- institution recognition;
- labor market data;
- qualification framework;
- scholarship;
- official statistics.

Government source remains subject to time, methodology, jurisdiction, and version controls.

## 11.5 Multi-model AI

Different models may specialize in:

- source discovery;
- extraction;
- normalization;
- drafting;
- consistency review;
- localization;
- anomaly detection.

Model consensus does not replace evidence or human approval.

## 11.6 Knowledge Marketplace

Marketplace requires:

- contributor contract;
- licensing;
- provenance;
- trust and quality profile;
- independent validation;
- revenue conflict disclosure;
- withdrawal and revocation;
- version maintenance obligations.

## 11.7 Institutional Federation

Multiple knowledge producers can operate under common KOS and Ontology.

Federation requires:

- identity namespace governance;
- version compatibility;
- source trust model;
- publication authority boundary;
- dispute resolution;
- replication and withdrawal protocol.

## 11.8 International Expansion

Pipeline supports:

- local evidence plans;
- local reviewers;
- qualification mappings;
- regulation;
- multilingual labels;
- local market assertions;
- global semantic identity;
- cross-border recognition claims.

## 11.9 Near-real-time Knowledge

Volatile signals may use accelerated review profiles.

Accelerated publication cannot remove:

- source;
- time;
- geography;
- confidence;
- uncertainty;
- expiration.

## 11.10 Automated Research Synthesis

Future pipeline may support:

- systematic evidence bundle;
- dataset object;
- method object;
- replication status;
- causal evidence class.

## 11.11 Self-monitoring Agents

Monitoring agents may detect:

- stale claims;
- dead sources;
- relationship drift;
- retrieval failure;
- conflicting updates.

They create production cases, not direct canonical changes.

## 11.12 Rationale

Expansion must increase contributor capacity without fragmenting semantics.

## 11.13 System Impact

KPP can evolve from internal pipeline to governed global knowledge ecosystem.

---

# 12. Success Criteria

## 12.1 Consistency

Objects produced by different models, editors, institutions, and countries follow the same KOS and Ontology semantics.

## 12.2 Auditability

Every Active object can be traced from request to publication and registration.

## 12.3 Reproducibility

A published revision can be reconstructed from:

- request;
- source bundle;
- normalized evidence;
- contract versions;
- generation record;
- validation;
- review decisions.

## 12.4 Scalability

Pipeline supports high production volume without relaxing quality gates.

## 12.5 Quality

Active objects meet intended readiness profile and have no non-compensatory blocker.

## 12.6 Governance

No object bypasses Constitutional, Ontology, KOS, review, and publication controls.

## 12.7 Freshness

Volatile objects are reviewed, updated, deprecated, or suspended before stale exposure becomes material.

## 12.8 Identity Integrity

Duplicate entities are rare, detected early, and resolved through merge, mapping, or rejection.

## 12.9 Evidence Integrity

Material claims retain source lineage, scope, time, geography, confidence, and conflict state.

## 12.10 Reasoning Utility

Reasoning Ready objects support:

- candidate retrieval;
- requirement analysis;
- skill gap;
- pathway;
- market context;
- AI impact;
- explanation.

## 12.11 Registration Integrity

Graph and vector projections always point to valid Active revisions and preserve provenance.

## 12.12 Failure Safety

Pipeline failures are visible, recoverable, and do not create partial Active state.

## 12.13 Human Accountability

High-risk publication has identifiable reviewer, steward, and publisher authority.

## 12.14 Global Extensibility

One semantic identity can support multiple locales, legal systems, markets, and evidence contexts.

## 12.15 Continuous Learning

Monitoring and audit findings produce controlled improvements, not uncontrolled knowledge mutation.

---

# 13. Mandatory Pipeline Conformance Checklist

## 13.1 Case Creation

- [ ] Request ID and Case ID available.
- [ ] Purpose and intended use declared.
- [ ] Risk class assigned.
- [ ] Target object kind identified.
- [ ] Target readiness profile identified.
- [ ] Constitutional intake check passed.

## 13.2 Scope and Ontology

- [ ] Inclusion and exclusion criteria defined.
- [ ] Geography and time scope defined where relevant.
- [ ] Entity identity resolved.
- [ ] Duplicate candidates reviewed.
- [ ] Entity type and ontology class valid.
- [ ] KOS template available.
- [ ] Ontology version locked.

## 13.3 Evidence

- [ ] Evidence plan completed.
- [ ] Source identities available.
- [ ] Licensing reviewed.
- [ ] Primary source requirement met where applicable.
- [ ] Recency requirement met.
- [ ] Conflict recorded.
- [ ] Normalization preserves provenance.
- [ ] Quantitative method and units available.

## 13.4 Draft

- [ ] Status is Draft.
- [ ] Generation Record available.
- [ ] KOS mandatory fields present.
- [ ] Claim classes explicit.
- [ ] Evidence references present.
- [ ] Uncertainty visible.
- [ ] No fabricated source.
- [ ] No forbidden content.

## 13.5 Validation and Review

- [ ] KOS Validation passed.
- [ ] Ontology Validation passed.
- [ ] Quality Assessment completed.
- [ ] Required human reviews completed.
- [ ] Conflict of interest disclosed.
- [ ] All blocker and error findings resolved.
- [ ] Readiness profile approved.

## 13.6 Publication

- [ ] Status is Validated before activation.
- [ ] Revision immutable.
- [ ] License and restrictions available.
- [ ] Dependencies resolve.
- [ ] Effective date assigned.
- [ ] Next review due assigned.
- [ ] Prior revision handled.
- [ ] Publication Record complete.

## 13.7 Registration

- [ ] Graph Ready gate passed before graph registration.
- [ ] Vector Ready gate passed before vector registration.
- [ ] Graph predicates valid.
- [ ] Vector chunks reference object and revision.
- [ ] Access restrictions propagated.
- [ ] Supersession behavior defined.

## 13.8 Monitoring

- [ ] Freshness class assigned.
- [ ] Monitoring active.
- [ ] Source availability monitored.
- [ ] Review schedule active.
- [ ] Incident linkage available.
- [ ] Correction and deprecation path available.

---

# 14. Closing Specification

Knowledge Production Pipeline V1 menetapkan bagaimana KarirGPS memproduksi knowledge secara konsisten pada skala enterprise.

Pipeline ini tidak menilai keberhasilan berdasarkan jumlah object yang dibuat.

Pipeline dinilai berhasil ketika setiap object:

- lahir dari kebutuhan yang sah;
- memiliki scope yang jelas;
- memiliki identity yang benar;
- mengikuti Ontology;
- mengikuti KOS;
- menggunakan evidence yang dapat ditelusuri;
- mempertahankan conflict dan uncertainty;
- melewati validation yang sesuai;
- memiliki human accountability;
- dipublikasikan sebagai revision immutable;
- diregistrasikan secara aman;
- dimonitor selama lifecycle;
- dapat diperbaiki tanpa menghapus sejarah.

KPP memastikan bahwa AI, editor manusia, universitas, perusahaan, pemerintah, komunitas, dan future models dapat berkontribusi pada knowledge ecosystem yang sama tanpa menciptakan standard yang berbeda.

Dengan pipeline ini, KarirGPS dapat berkembang dari ribuan menjadi jutaan Knowledge Object tanpa kehilangan semantic integrity, reproducibility, auditability, fairness, global extensibility, dan decision intelligence quality.
