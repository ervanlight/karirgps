# Career Object Generator V1

**Product:** KarirGPS  
**Document Type:** Career Knowledge Generation Engineering Specification  
**Version:** 1.0  
**Status:** Normative Generator Baseline  
**Governing Ontology:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`  
**Governing Object Contract:** `assets/knowledge/specification/Knowledge_Object_Specification_V1.md`  
**Production Pipeline:** `architecture/knowledge-production/Knowledge_Production_Pipeline_V1.md`  
**Target Path:** `assets/knowledge/generators/career/Career_Object_Generator_V1.md`

---

## 0. Status, Scope, and Normative Language

### 0.1 Purpose

Career Object Generator V1, selanjutnya disebut COG, adalah specification resmi yang mengatur bagaimana AI atau human-assisted generator menghasilkan Draft Career Object KarirGPS secara konsisten.

COG tidak menghasilkan data profesi pada dokumen ini.

COG menetapkan:

- input yang wajib tersedia;
- urutan konseptual pembentukan object;
- struktur output yang identik;
- evidence minimum;
- relationship minimum;
- confidence treatment;
- validation requirements;
- quality rules;
- failure behavior;
- acceptance criteria.

### 0.2 Applies To

Specification ini berlaku untuk:

- AI Knowledge Generator;
- GPT;
- Claude Code;
- future AI models;
- batch generation system;
- human-assisted generation process;
- institutional generation process;
- correction and revision generator.

### 0.3 Normative Terms

- **WAJIB** berarti requirement yang harus dipenuhi.
- **DILARANG** berarti kondisi yang tidak boleh terjadi.
- **SEBAIKNYA** berarti requirement yang harus diikuti kecuali terdapat alasan terdokumentasi.
- **BOLEH** berarti opsi yang diizinkan.
- **KONDISIONAL** berarti requirement menjadi wajib ketika kondisi yang dijelaskan terpenuhi.

### 0.4 Generator Boundary

Generator hanya boleh menghasilkan:

- Draft Career Entity Object;
- proposed relationships;
- proposed contextual assertion references;
- uncertainty declarations;
- evidence mappings;
- generation record;
- validation preparation metadata.

Generator DILARANG:

- mengubah object menjadi Active;
- mengesahkan evidence;
- menyetujui ontology extension;
- menentukan quality approval akhir;
- menulis user-specific recommendation;
- membuat data profesi tanpa source;
- menyelesaikan conflict secara diam-diam.

### 0.5 Generator Invariants

Setiap generated Career Object WAJIB memenuhi invariant berikut:

1. Merepresentasikan satu semantic Career identity.
2. Berstatus `draft`.
3. Menggunakan object kind `entity`.
4. Menggunakan entity type `career`.
5. Menggunakan ontology class Career yang approved.
6. Memiliki career purpose, scope, task structure, competency structure, environment structure, dan family relationship.
7. Memisahkan Career dari Role, Job Title, Position, Industry, Major, Tool, dan Skill.
8. Tidak menyimpan salary, labor demand, regulation, atau AI impact sebagai universal intrinsic fact.
9. Memiliki evidence mapping untuk setiap material claim.
10. Memiliki uncertainty jika evidence belum lengkap atau berbeda.
11. Menggunakan relationship vocabulary resmi.
12. Memiliki identity proposal yang telah melalui duplicate check.
13. Tidak mengandung source yang dibuat-buat.
14. Memiliki canonical section order yang identik.
15. Dapat diproses oleh validator tanpa hidden context.
16. Dapat diregistrasikan ke Knowledge Graph setelah review dan activation.
17. Dapat digunakan AI Reasoning setelah mencapai Reasoning Ready Profile.
18. Tidak mengandung keputusan normatif tentang siapa yang cocok atau tidak cocok dengan Career tersebut.

### 0.6 System Impact

COG memastikan ratusan atau ribuan Career Object yang dibuat oleh model berbeda memiliki semantic structure, quality expectation, and validation behavior yang sama.

---

# 1. Executive Summary

## 1.1 Purpose

Career Object Generator Specification mendefinisikan aturan produksi untuk menghasilkan Draft Career Object yang:

- mengikuti Career Knowledge Ontology;
- mengikuti Knowledge Object Specification;
- memiliki urutan field yang sama;
- mempertahankan evidence lineage;
- membentuk relationship yang valid;
- dapat divalidasi secara otomatis dan manual;
- siap dikembangkan menjadi Graph Ready dan Reasoning Ready object.

## 1.2 Why a Dedicated Career Generator Is Required

Universal KOS menjelaskan contract seluruh Knowledge Object.

Career Ontology menjelaskan makna entity Career.

Generator specification diperlukan karena produksi Career Object memiliki risiko khusus:

- career sering tertukar dengan job title;
- career sering dibuat terlalu sempit atau terlalu luas;
- task sering tertukar dengan skill;
- major sering dianggap satu-satunya pathway;
- personality sering dipakai sebagai requirement;
- market demand sering dicampur ke definition;
- AI impact sering dibuat sebagai label absolut;
- role variants sering dibuat sebagai Career baru;
- evidence sering hanya mendukung job advertisement, bukan career structure.

COG menetapkan cara menghindari kesalahan tersebut sebelum Draft masuk validation pipeline.

## 1.3 Difference from Career Object

COG adalah aturan pembentukan.

Career Object adalah hasil produksi berdasarkan aturan tersebut.

Dokumen ini tidak berisi Career Object aktual dan tidak boleh digunakan sebagai data profesi.

## 1.4 Difference from Prompt

COG adalah model-neutral engineering contract.

Prompt dapat dibuat dari COG, tetapi prompt tidak boleh mengubah:

- mandatory input;
- field semantics;
- forbidden claims;
- relationship rules;
- confidence rules;
- acceptance criteria.

## 1.5 Production Target

Output generator harus cukup konsisten sehingga:

- backend dapat membaca object tanpa per-career exceptions;
- validator dapat menjalankan checks identik;
- graph registration dapat memetakan node and edges;
- Reasoning Agent dapat membandingkan Career secara multidimensional;
- Human Reviewer dapat menemukan source, uncertainty, dan common errors dengan cepat.

## 1.6 Constraints

- Generator tidak boleh mengisi data dengan memory model semata.
- Generator tidak boleh mengaktifkan object.
- Generator tidak boleh mengubah Ontology.
- Generator tidak boleh menyimpulkan Career fit untuk user.
- Generator tidak boleh menghasilkan satu narrative block tanpa structured contract.

## 1.7 Rationale

Career knowledge bersifat multi-relational dan sering contextual. Dedicated generator mengurangi semantic drift.

## 1.8 System Impact

Career library dapat berkembang secara horizontal tanpa merusak retrieval, graph reasoning, dan recommendation consistency.

---

# 2. Generator Responsibilities

## 2.1 Purpose

Menetapkan kewenangan dan tanggung jawab generator.

## 2.2 Primary Responsibilities

Generator WAJIB:

1. membaca Generator Request;
2. memverifikasi target object adalah Career;
3. menggunakan resolved entity identity;
4. menggunakan approved Ontology and KOS versions;
5. membaca normalized evidence bundle;
6. memetakan evidence ke claim;
7. membentuk Draft Career Object;
8. menggunakan canonical section order;
9. mengisi mandatory universal fields;
10. mengisi mandatory Career fields;
11. mengusulkan relationships yang evidence-supported;
12. menandai missing fields;
13. menandai uncertainty;
14. menandai evidence conflict;
15. menjaga canonical and contextual separation;
16. membuat generation record;
17. menjalankan pre-validation checklist;
18. mengembalikan Draft atau explicit failure.

## 2.3 Secondary Responsibilities

Generator SEBAIKNYA:

- mendeteksi kemungkinan duplicate identity;
- mendeteksi Career versus Role ambiguity;
- mendeteksi Career versus Job Title ambiguity;
- mendeteksi source yang terlalu regional;
- mengusulkan need for Contextual Assertion Object;
- mengusulkan candidate relationship objects;
- mengusulkan localization gaps;
- mengusulkan ontology review jika mapping tidak tersedia;
- mempersempit claim jika evidence tidak memadai.

## 2.4 Allowed Actions

Generator BOLEH:

- mengusulkan alias;
- mengusulkan taxonomy path;
- mengusulkan Career Family mapping;
- mengusulkan Work Task relationships;
- mengusulkan Skill and Competency relationships;
- mengusulkan Work Environment relationships;
- mengusulkan Industry context relationships;
- mengusulkan Major pathway relationships;
- mengusulkan Tool and Technology relationships;
- mengusulkan AI Trend references;
- mengusulkan Labor Market Assertion references;
- menghasilkan multiple Draft candidates jika identity ambiguity belum selesai, dengan status blocked.

## 2.5 Forbidden Actions

Generator DILARANG:

- menetapkan object `validated` atau `active`;
- menciptakan `entity_id` final tanpa identity authority;
- menulis personal suitability statement;
- menulis personality requirement;
- menulis universal salary;
- menulis universal demand;
- menulis universal work environment;
- menulis guaranteed career outcome;
- menulis one-path-only education requirement kecuali regulated evidence mendukung dan scope jelas;
- mengubah evidence class;
- menghapus counterevidence;
- menganggap model consensus sebagai evidence;
- mengisi missing field dengan speculative prose;
- menggunakan `related_to` jika predicate lebih spesifik tersedia;
- menyisipkan prompt, chain of thought, atau implementation instruction ke object.

## 2.6 Generator Accountability

Setiap output WAJIB memiliki `generation_record` yang menyatakan:

- generator identity;
- generator version;
- generation timestamp;
- request ID;
- source bundle reference;
- ontology version;
- KOS version;
- generator specification version;
- prior revision jika ada;
- known limitations;
- unresolved questions;
- generation mode.

## 2.7 Constraints

Generator tidak boleh memperluas scope dari request tanpa Scope Revision Record.

## 2.8 Rationale

Generator harus menjadi controlled producer, bukan autonomous publisher.

## 2.9 System Impact

Kualitas output dapat ditelusuri per generator, model, version, dan evidence set.

---

# 3. Input Requirements

## 3.1 Purpose

Mendefinisikan input minimum sebelum Career Object dapat digenerasikan.

## 3.2 Mandatory Input Package

Generator WAJIB menerima satu **Career Generation Input Package**.

Package minimal berisi:

### 3.2.1 Generation Request

- request ID;
- production case ID;
- generation mode;
- intended readiness target;
- default locale;
- requested locales;
- geography scope;
- risk class;
- deadline;
- expected output status.

### 3.2.2 Identity Resolution Input

- resolved or proposed `entity_id`;
- proposed canonical name;
- entity type;
- ontology class;
- identity status;
- duplicate candidates;
- disambiguation notes;
- Career versus Role decision;
- Career versus Job Title decision;
- Career Family candidate.

### 3.2.3 Scope Resolution Input

- career scope;
- inclusion criteria;
- exclusion criteria;
- expected level of abstraction;
- included role variants;
- excluded adjacent careers;
- temporal scope;
- geographic applicability;
- contextual claims to exclude from core object.

### 3.2.4 Contract Versions

- supported KOS version;
- supported Ontology version;
- Career Generator version;
- relationship vocabulary version;
- quality method version.

### 3.2.5 Normalized Evidence Bundle

Evidence Bundle WAJIB memiliki:

- source IDs;
- normalized evidence entries;
- claim categories;
- source dates;
- source types;
- geography;
- methodology notes;
- primary or secondary status;
- evidence confidence;
- conflict status;
- transformation lineage;
- usage restrictions.

### 3.2.6 Existing Knowledge References

Jika tersedia:

- existing Career candidate;
- prior object revision;
- Career Family objects;
- Role objects;
- Job Title mappings;
- Work Task objects;
- Skill objects;
- Competency objects;
- Knowledge Domain objects;
- Work Environment objects;
- Industry objects;
- Major objects;
- Certification objects;
- Tool objects;
- Technology objects;
- AI Trend objects;
- Labor Market Assertions.

### 3.2.7 Generation Policy

- allowed fields;
- forbidden fields;
- target profile;
- maximum assumption level;
- source minimum;
- language style;
- audience;
- review requirements.

## 3.3 Conditional Inputs

### Localization Input

Wajib jika Localized Profile ditargetkan:

- locale terminology;
- approved translations;
- local job titles;
- local regulatory context;
- reviewer authority;
- equivalence notes.

### Regulated Career Input

Wajib jika Career regulated:

- jurisdiction;
- Authority reference;
- Regulation reference;
- License or Qualification requirement;
- effective period.

### Revision Input

Wajib untuk update:

- prior object ID;
- prior revision ID;
- change class;
- change request;
- affected fields;
- known downstream dependencies.

## 3.4 Input Quality Gate

Generator boleh mulai jika:

- object target confirmed as Career;
- identity status resolved or explicitly provisional;
- scope locked;
- Ontology and KOS versions supported;
- evidence bundle available;
- source coverage includes work purpose, task, and competency;
- duplicate check completed;
- generation policy available.

## 3.5 Invalid Input Conditions

Generator harus menolak atau mengembalikan blocked result jika:

- request hanya berisi nama Career tanpa scope and evidence;
- target sebenarnya Role or Job Title;
- identity duplicates existing Career;
- evidence bundle tidak tersedia;
- source tidak dapat ditelusuri;
- Ontology class tidak valid;
- source hanya berupa unsourced narrative;
- requested fields bertentangan dengan KOS;
- license melarang penggunaan;
- locale requirement tidak memiliki terminology basis;
- request meminta Active object.

## 3.6 Input Sufficiency Levels

### Sufficient

Semua mandatory evidence categories tersedia.

### Partially Sufficient

Core identity dapat didraft, tetapi relationship atau optional sections incomplete.

### Insufficient

Work purpose, task, competency, atau identity tidak dapat didukung.

### Conflicted

Evidence material saling bertentangan.

## 3.7 Constraints

Generator tidak boleh mengisi missing input dari internal model memory tanpa menandainya sebagai unsupported.

## 3.8 Rationale

Input contract mencegah model menghasilkan object berdasarkan name completion.

## 3.9 System Impact

Batch generation dapat dijalankan hanya pada production cases yang siap.

---

# 4. Output Requirements

## 4.1 Purpose

Menetapkan bentuk output Career Object yang identik dan dapat divalidasi.

## 4.2 Output Types

Generator hanya boleh mengembalikan salah satu:

1. `draft_career_object`;
2. `blocked_generation_result`;
3. `insufficient_evidence_result`;
4. `identity_conflict_result`;
5. `ontology_mismatch_result`;
6. `generation_failure_result`.

## 4.3 Draft Status Requirements

Draft Career Object WAJIB:

- `object_kind`: Entity Object;
- `entity_type`: Career;
- `status`: Draft;
- `readiness_profiles`: tidak boleh mengklaim Published atau Reasoning Ready sebagai approved;
- `review_status`: not_started;
- `evidence_status`: sesuai evidence, tidak otomatis verified;
- `conflict_status`: explicit;
- `blocking_issues`: explicit list;
- `warnings`: explicit list.

## 4.4 Canonical Section Order

Setiap generated Career Object WAJIB mengikuti urutan konseptual berikut. Urutan ini harus tetap sama pada semua Career Object.

1. Contract and Identity
2. Naming and Localization
3. Definition and Scope
4. Career Core Semantics
5. Task Structure
6. Competency and Skill Structure
7. Knowledge and Technology Context
8. Work Environment
9. Career Family and Role Structure
10. Entry and Development Pathways
11. Industry and Application Context
12. Transferability and Adjacent Careers
13. Contextual Knowledge References
14. Evidence and Sources
15. Confidence, Conflict, and Uncertainty
16. Governance and Lifecycle
17. Quality and Readiness
18. Generation and Audit Record

Generator may serialize sections differently in implementation, but semantic order and field grouping must remain identifiable.

## 4.5 Section 1: Contract and Identity

Mandatory fields:

- `kos_version`;
- `ontology_version`;
- `generator_specification_version`;
- `object_id`;
- `revision_id`;
- `object_kind`;
- `entity_id`;
- `entity_type`;
- `ontology_class`;
- `status`;
- `version`;
- `change_class`;
- `compatibility`.

Validation requirements:

- IDs must be unique or valid proposals.
- Entity type must equal Career.
- Status must equal Draft.
- No lifecycle field may imply publication.

## 4.6 Section 2: Naming and Localization

Mandatory fields:

- `canonical_name`;
- `display_name`;
- `canonical_language`;
- `default_locale`;
- `available_locales`.

Conditional fields:

- aliases;
- abbreviations;
- former names;
- localizations;
- disambiguation note;
- localization notes.

Rules:

- canonical name identifies Career, not organization title;
- aliases must have locale and alias type;
- role names and job titles must not be added as exact aliases unless semantically equivalent;
- localized name must not change career scope.

## 4.7 Section 3: Definition and Scope

Mandatory fields:

- `definition`;
- `summary`;
- `purpose`;
- `scope`;
- `inclusion_criteria`;
- `exclusion_criteria`;
- `career_boundary_note`.

Definition must answer:

- what professional purpose the Career serves;
- what broad activities characterize it;
- what distinguishes it from adjacent Careers.

Definition must not contain:

- salary;
- market demand;
- personality fit;
- education guarantee;
- AI replacement forecast;
- geographic availability unless Career is jurisdiction-defined.

## 4.8 Section 4: Career Core Semantics

Mandatory domain attributes:

- `career_scope`;
- `primary_work_purpose`;
- `core_task_categories`;
- `core_competency_refs`;
- `typical_work_environment_refs`;
- `career_family_refs`;
- `entry_pathway_summary`;
- `career_boundary_note`.

Optional attributes:

- ethical considerations;
- regulatory notes;
- physical demand category;
- schedule pattern;
- remote pattern;
- lifestyle characteristics;
- transferability summary.

Rules:

- each attribute must be supported or explicitly provisional;
- stable core only;
- volatile claims must be references.

## 4.9 Section 5: Task Structure

Mandatory:

- at least one relationship to Work Task or Work Activity;
- task categories;
- evidence references;
- relationship confidence;
- task scope rationale.

Recommended:

- distinguish core task, common task, and context-dependent task;
- map task to Role when task is not universal across Career;
- identify task variability.

Forbidden:

- listing skills as tasks;
- treating one organization job description as universal Career task;
- embedding AI automation score as task property without contextual assertion.

## 4.10 Section 6: Competency and Skill Structure

Mandatory:

- at least one Competency or Skill relationship;
- relationship level: required, commonly required, preferred, or beneficial;
- evidence;
- confidence;
- context if role or industry specific.

Recommended:

- separate Competency, Hard Skill, Soft Skill, and Foundational Skill;
- use Competency for combined performance expectation;
- use Skill for observable capability.

Forbidden:

- personality trait as Skill;
- tool name as Skill without capability mapping;
- universal proficiency level without role or seniority context.

## 4.11 Section 7: Knowledge and Technology Context

Optional but required when materially relevant:

- Knowledge Domain relationships;
- Tool relationships;
- Technology relationships;
- Standard relationships;
- regulatory knowledge references.

Rules:

- Tool and Technology must be separated;
- branded Tool must not become universal requirement unless evidence supports contextual use;
- Knowledge Domain must not be written as observable Skill.

## 4.12 Section 8: Work Environment

Mandatory:

- at least one typical Work Environment reference or explicit evidence gap;
- variability note;
- confidence;
- source.

Possible dimensions:

- collaboration;
- autonomy;
- structure;
- pace;
- client interaction;
- physical setting;
- schedule;
- travel;
- remote pattern.

Forbidden:

- one environment declared universal;
- personality fit statement;
- organization-specific condition treated as career-wide.

## 4.13 Section 9: Career Family and Role Structure

Mandatory:

- at least one Career Family relationship;
- relationship rationale;
- confidence.

Conditional:

- Role variant references;
- common Job Title mappings;
- progression role references.

Rules:

- Role must not be embedded as new Career identity;
- Job Title must be mapped as label or local market term;
- Career Family membership must state grouping basis.

## 4.14 Section 10: Entry and Development Pathways

Mandatory:

- `entry_pathway_summary`.

Optional relationships:

- Major;
- Education Program category;
- Qualification;
- Certification;
- License;
- Learning Path;
- Experience;
- Internship;
- Project.

Rules:

- pathway must be plural or conditional when multiple routes exist;
- regulated Career may have legal requirements scoped by jurisdiction;
- Major relation cannot be `guarantees`;
- Certification cannot be treated as equivalent to Competency unless assessed scope supports it.

Forbidden:

- one fixed educational path as universal;
- entry promise;
- guaranteed career progression.

## 4.15 Section 11: Industry and Application Context

Optional relationships:

- Industry;
- Sector;
- Organization type;
- application domain;
- public, private, nonprofit, education, or institutional context.

Rules:

- Career may operate across multiple Industries;
- Industry must not define Career identity unless Career is industry-specific;
- organization examples must not be embedded as canonical data unless represented by references.

## 4.16 Section 12: Transferability and Adjacent Careers

Optional but strongly recommended for Reasoning Ready:

- adjacent Career relationships;
- transferable Skill relationships;
- transfer path references;
- overlap rationale;
- distinction note.

Rules:

- adjacency must not imply equivalence;
- transferability must identify shared capability or task;
- evidence or ontology rationale required.

## 4.17 Section 13: Contextual Knowledge References

References may include:

- Labor Market Assertions;
- Salary Observations;
- Regulation;
- AI Trend;
- Future of Work Signal;
- geographic variants;
- opportunity classes;
- local recognition.

Rules:

- contextual knowledge must remain external reference;
- Career Object may summarize availability of contextual references but not copy volatile values as intrinsic facts;
- every reference must include target object and revision or accepted current resolution behavior.

## 4.18 Section 14: Evidence and Sources

Mandatory:

- claims;
- evidence;
- sources;
- provenance;
- evidence status;
- source coverage;
- conflict status;
- provenance chain.

Each material Career claim must map to evidence.

Minimum claim categories:

- identity and definition;
- primary work purpose;
- core task structure;
- competency or skill structure;
- Career Family relationship;
- Work Environment characterization;
- pathway summary.

## 4.19 Section 15: Confidence, Conflict, and Uncertainty

Mandatory:

- object-level confidence;
- confidence basis;
- scoped confidence;
- uncertainties;
- conflict status;
- counterevidence if applicable;
- assumptions if used;
- forbidden interpretations.

Career forbidden interpretations should include at least:

- not a personal fit verdict;
- not a guaranteed outcome;
- not a universal salary or demand statement;
- not a deterministic personality mapping;
- not a timeless AI risk statement.

## 4.20 Section 16: Governance and Lifecycle

Mandatory:

- owner;
- maintainer;
- created_at;
- created_by;
- updated_at;
- status;
- review_status;
- license;
- usage restrictions;
- allowed purposes;
- prohibited uses;
- sensitivity class;
- retention class.

Draft-specific requirements:

- no published_at;
- no activated_by;
- approval absent or pending;
- review history may be empty but field available.

## 4.21 Section 17: Quality and Readiness

Mandatory:

- completeness score;
- consistency score;
- freshness score;
- evidence quality score;
- explainability score;
- validation score;
- quality method version;
- quality notes;
- readiness profiles;
- blocking issues;
- warnings.

Generator-generated scores must be marked `provisional` until validator assessment.

## 4.22 Section 18: Generation and Audit Record

Mandatory:

- generation record;
- input package references;
- evidence bundle reference;
- generator identity and version;
- generation timestamp;
- transformation history;
- audit references;
- unresolved questions;
- pre-validation result.

## 4.23 Output Determinism

For identical:

- input package;
- source bundle;
- ontology version;
- KOS version;
- generator version;
- generation policy;

the generator should produce semantically equivalent output.

Text phrasing may vary, but:

- entity identity;
- mandatory sections;
- claim classes;
- relationship types;
- evidence mapping;
- missing fields;
- conflict status;

must remain stable.

## 4.24 Constraints

Output may not omit a canonical section. Empty optional sections must be represented as not available, not assessed, or no supported relationship, according to KOS semantics.

## 4.25 Rationale

Canonical ordering removes ambiguity between generator implementations.

## 4.26 System Impact

Validator and backend can treat all Career Objects uniformly.

---

# 5. Mandatory Validation Checklist

## 5.1 Purpose

Mendefinisikan pre-validation yang harus dilakukan generator sebelum mengembalikan Draft.

## 5.2 Contract Validation

- [ ] KOS version supported.
- [ ] Ontology version supported.
- [ ] Generator specification version declared.
- [ ] Object kind is Entity Object.
- [ ] Entity type is Career.
- [ ] Status is Draft.
- [ ] Object ID present.
- [ ] Revision ID present.
- [ ] Entity ID resolved or marked provisional.
- [ ] Canonical section order complete.

## 5.3 Identity Validation

- [ ] Career is not a Role.
- [ ] Career is not a Job Title.
- [ ] Career is not a Position.
- [ ] Career is not an Industry.
- [ ] Career is not a Major.
- [ ] Career is not a Tool or Technology.
- [ ] Duplicate candidate checked.
- [ ] Canonical name does not encode seniority only.
- [ ] Definition distinguishes adjacent Careers.
- [ ] Inclusion and exclusion criteria align.

## 5.4 Career Core Validation

- [ ] Career scope available.
- [ ] Primary work purpose available.
- [ ] Core task categories available.
- [ ] At least one task relationship available or blocking gap declared.
- [ ] At least one Competency or Skill relationship available or blocking gap declared.
- [ ] Work Environment reference available or gap declared.
- [ ] Career Family relationship available or gap declared.
- [ ] Entry pathway summary available.
- [ ] Career boundary note available.

## 5.5 Relationship Validation

- [ ] Every predicate exists in Ontology.
- [ ] Source and target types are compatible.
- [ ] Relationship direction is correct.
- [ ] Requirement level is present when applicable.
- [ ] Context is present for contextual relationship.
- [ ] Evidence reference is present.
- [ ] Confidence is present.
- [ ] No unsupported `related_to` shortcut.
- [ ] No duplicate contradictory edge without conflict status.

## 5.6 Evidence Validation

- [ ] Every material claim has evidence mapping.
- [ ] Source IDs resolve.
- [ ] Source date is available.
- [ ] Source type is available.
- [ ] Primary and secondary sources are distinguished.
- [ ] Source scope supports claim scope.
- [ ] Geography and time are preserved.
- [ ] No fabricated citation.
- [ ] Counterevidence retained.
- [ ] Evidence conflict declared.
- [ ] Source usage restrictions respected.

## 5.7 Temporal and Context Validation

- [ ] Stable core separated from volatile assertions.
- [ ] Salary not stored as intrinsic field.
- [ ] Market demand not stored as intrinsic field.
- [ ] Regulation scoped by jurisdiction and time.
- [ ] AI Trend scoped by task, geography or market, and horizon.
- [ ] Work Environment variability declared.
- [ ] Pathways not treated as universal unless legally required.

## 5.8 Localization Validation

- [ ] Canonical language declared.
- [ ] Default locale declared.
- [ ] Available locales match localization entries.
- [ ] Aliases have language and type.
- [ ] Job Title aliases are not mistaken for Career identity.
- [ ] Localized definition preserves scope.
- [ ] Machine translation is not marked approved without review.

## 5.9 Safety and Constitutional Validation

- [ ] No personal suitability verdict.
- [ ] No personality exclusion.
- [ ] No gender, race, religion, disability, or protected attribute stereotype.
- [ ] No guaranteed success.
- [ ] No unsupported prestige or superiority claim.
- [ ] No universal AI replacement label.
- [ ] No hidden commercial promotion.
- [ ] No personal data.

## 5.10 Lifecycle and Audit Validation

- [ ] Generation record complete.
- [ ] Created by and created at available.
- [ ] Review status not_started.
- [ ] No activation fields present.
- [ ] Change class correct.
- [ ] Prior revision referenced if update.
- [ ] Blocking issues explicit.
- [ ] Warnings explicit.
- [ ] Pre-validation result stored.

## 5.11 Generator Decision

Generator returns `draft_career_object` only if:

- no generator-level blocker;
- identity sufficiently resolved;
- core fields available;
- all unsupported areas marked;
- no fabricated evidence.

Otherwise generator returns an explicit failure result.

## 5.12 Rationale

Pre-validation catches generator defects before formal validator cost is incurred.

## 5.13 System Impact

Batch rejection and human review burden decrease.

---

# 6. Evidence Requirements

## 6.1 Purpose

Menentukan evidence minimum dan claim-evidence discipline.

## 6.2 Evidence Categories

Career generation should seek evidence for:

1. identity and naming;
2. definition and career scope;
3. primary work purpose;
4. work tasks;
5. competencies and skills;
6. work environment;
7. Career Family;
8. entry pathways;
9. regulated requirements;
10. contextual variants;
11. tool and technology use;
12. adjacent Careers and transferability.

## 6.3 Minimum Evidence Threshold

A Draft Career Object may be generated only when evidence supports at minimum:

- identity;
- primary work purpose;
- at least one core task category;
- at least one competency or skill category;
- career boundary.

For intended Reasoning Ready production, evidence should also support:

- Career Family;
- Work Environment;
- pathways;
- relationship strengths;
- key uncertainties;
- adjacent or transfer relationships if included.

## 6.4 Source Preference Order

Depending on claim type, preferred sources may include:

1. official occupational or professional standards;
2. regulator or licensing authority;
3. government labor or education sources;
4. recognized professional association;
5. institutional competency framework;
6. academic research;
7. structured labor market datasets;
8. verified employer evidence for organization-specific context;
9. reputable secondary synthesis;
10. expert review.

Source order is not absolute. Claim-source fit is required.

## 6.5 Source Diversity

Generator should avoid relying on one source for all dimensions when independent evidence is available.

Identity and task evidence may come from different sources than market or regulation evidence.

## 6.6 Source Independence

Multiple pages repeating one upstream source count as one evidence lineage.

## 6.7 Evidence Scope

Source scope must match claim:

- local source cannot support universal claim;
- role-specific source cannot support entire Career without qualification;
- senior role description cannot define entry-level Career;
- one organization cannot define all work environments.

## 6.8 Evidence Recency

Stable definition may use older authoritative sources.

Volatile context requires current evidence and should be externalized as Contextual Assertion.

## 6.9 Evidence Extraction Rules

Generator must separate:

- source statement;
- normalized evidence;
- editorial synthesis;
- generated definition;
- inference;
- projection.

## 6.10 Claim Granularity

One material claim should be narrow enough to map to evidence.

A paragraph containing several unsupported subclaims is invalid even if one sentence has a source.

## 6.11 Evidence Conflict

When evidence conflicts, generator must:

- retain all material sources;
- identify conflict dimension;
- avoid forced synthesis;
- lower scoped confidence;
- create uncertainty or conflict note;
- recommend review.

## 6.12 Missing Evidence

Generator must use explicit states:

- unknown;
- not found;
- not applicable;
- disputed;
- insufficient evidence;
- source unavailable.

Missing evidence must not be replaced by model knowledge.

## 6.13 Regulatory Evidence

Legal or regulated requirements require:

- authority source;
- jurisdiction;
- effective period;
- current status;
- regulation or official requirement reference.

## 6.14 AI Impact Evidence

AI impact must be represented through:

- affected Work Task;
- AI capability or adoption scope;
- time horizon;
- geography or market;
- evidence;
- confidence;
- uncertainty.

Career Object only references AI Trend or Assertion Objects.

## 6.15 Evidence Quality Statement

Generator proposes evidence quality but cannot approve final evidence quality.

## 6.16 Constraints

Citation count alone cannot satisfy evidence requirements.

## 6.17 Rationale

Career object quality depends more on claim-source alignment than narrative detail.

## 6.18 System Impact

Knowledge Graph relationships become defensible and Reasoning Agent can inspect evidence strength.

---

# 7. Relationship Requirements

## 7.1 Purpose

Menetapkan relationship structure yang membuat Career Object graph-ready.

## 7.2 Required Relationship Classes

A Career Draft must propose, at minimum:

1. Career Family relationship;
2. Work Task or Work Activity relationship;
3. Competency or Skill relationship;
4. Work Environment relationship.

If any category is unsupported, a blocking evidence gap must be declared.

## 7.3 Recommended Relationship Classes

For Reasoning Ready target, generator should evaluate:

- Knowledge Domain;
- Role;
- Job Title mapping;
- Industry;
- Major;
- Qualification;
- Certification;
- License;
- Learning Path;
- Tool;
- Technology;
- adjacent Career;
- Transfer Path;
- AI Trend;
- Labor Market Assertion;
- Regulation.

## 7.4 Relationship Entry Requirements

Every proposed relationship must include:

- relationship ID or proposal ID;
- predicate;
- target entity ID;
- target entity type;
- direction;
- relationship status;
- strength;
- requirement level if applicable;
- context if applicable;
- evidence references;
- confidence;
- rationale;
- source object ID.

## 7.5 Career Family Rule

Allowed conceptual predicates include:

- belongs_to;
- member_of;
- classified_under.

The generator must state grouping basis.

## 7.6 Task Rule

Allowed conceptual predicates include:

- performs;
- characterized_by;
- includes_activity.

Task relationships should distinguish:

- core;
- common;
- role-specific;
- industry-specific;
- emerging;
- historical.

## 7.7 Skill and Competency Rule

Allowed levels:

- legally_required;
- required;
- commonly_required;
- preferred;
- beneficial.

Generator must not label all associated skills as required.

## 7.8 Knowledge Domain Rule

Use relationship meaning such as:

- applies;
- draws_on;
- requires_knowledge_of.

Knowledge Domain must not be substituted with Skill.

## 7.9 Tool and Technology Rule

Use relationships such as:

- uses;
- may_use;
- enabled_by.

A Tool should be contextual if not universal.

## 7.10 Industry Rule

Use:

- operates_in;
- commonly_found_in;
- applied_in.

Career can relate to multiple Industries.

## 7.11 Work Environment Rule

Use:

- occurs_in;
- commonly_occurs_in;
- compatible_with_environment;
- varies_by_context.

Generator must include variability note.

## 7.12 Major and Education Rule

Use:

- accessible_through;
- common_path_from;
- prepared_for_by.

Forbidden predicates:

- guarantees;
- always_requires, unless legal and scoped;
- only_path_from.

## 7.13 Credential Rule

Use:

- validated_by;
- commonly_supported_by;
- legally_requires_license;
- benefits_from_certification.

Credential scope and jurisdiction must be clear.

## 7.14 AI Trend Rule

Career may be `affected_by` AI Trend only when:

- affected task is identified;
- relationship is contextual;
- time horizon is present;
- evidence supports the path.

## 7.15 Labor Market Rule

Career does not directly contain demand value.

Use Contextual Assertion references such as:

- observed_in_labor_market;
- has_market_observation.

## 7.16 Adjacent Career Rule

Use adjacency only when shared:

- tasks;
- skills;
- knowledge;
- pathway;
- work environment;
- industry function.

Adjacency does not mean equivalence.

## 7.17 Relationship Strength Rules

- **essential:** central to Career identity.
- **strong:** broadly characteristic.
- **common:** frequently observed but not universal.
- **possible:** valid in some contexts.
- **emerging:** recently developing.
- **disputed:** evidence conflict exists.

## 7.18 Forbidden Relationship Patterns

- Career `requires` Personality Trait.
- Career `guarantees` Salary.
- Career `guarantees` Employment.
- Major `guarantees` Career.
- Career `is_safe_from` AI.
- Career `only_exists_in` Industry without scope evidence.
- Skill `same_as` Tool.
- Job Title `same_as` Career without identity review.
- Organization-specific Task treated as Career essential.

## 7.19 Circular Reference Control

Generator uses references only. Full target objects are not embedded.

## 7.20 Constraints

Relationship count is not a quality metric. Precision is required.

## 7.21 Rationale

Career Reasoning depends on typed relationships, not descriptive prose alone.

## 7.22 System Impact

Graph registration can occur without manual reinterpretation of narrative.

---

# 8. Quality Rules

## 8.1 Purpose

Menetapkan minimum quality behavior during generation.

## 8.2 Accuracy Rule

Generator must not state more than evidence supports.

## 8.3 Coverage Rule

Draft should cover all mandatory Career dimensions, but unsupported areas must remain gaps rather than invented content.

## 8.4 Completeness Rule

All mandatory sections must exist.

Completeness is structural and does not imply correctness.

## 8.5 Consistency Rule

The following must be internally consistent:

- definition and scope;
- task and competency;
- Career Family and career boundary;
- pathway and regulated requirement;
- relationship strength and confidence;
- uncertainty and evidence status.

## 8.6 Freshness Rule

Stable Career core can use durable evidence.

Volatile claims must be referenced, versioned, and current.

## 8.7 Evidence Quality Rule

Generator must prefer authoritative, direct, transparent, and relevant evidence.

## 8.8 Relationship Quality Rule

Each relationship must use the most specific valid predicate and retain context.

## 8.9 Localization Quality Rule

Localized labels must preserve semantic identity.

## 8.10 Explainability Rule

Human reviewer must be able to answer:

- what this Career is;
- what it is not;
- what work it performs;
- what competencies are involved;
- what environments are common;
- what pathways exist;
- what is uncertain;
- which source supports each claim.

## 8.11 Reasoning Utility Rule

A Reasoning Ready candidate Draft should expose enough structure for:

- task matching;
- skill gap analysis;
- academic pathway analysis;
- environment matching;
- transferability;
- market context lookup;
- AI impact lookup.

## 8.12 Retrieval Quality Rule

Object should contain:

- canonical name;
- aliases;
- disambiguation;
- summary;
- taxonomy path;
- retrieval keywords;
- local labels.

## 8.13 Reusability Rule

Career core must not be written for one user, school, employer, or country unless Career identity itself is scoped.

## 8.14 Maintainability Rule

Volatile data should be external references to allow independent updates.

## 8.15 Auditability Rule

Every generated claim must be traceable to source or declared unsupported.

## 8.16 Provisional Quality Scores

Generator may propose:

- completeness;
- consistency;
- freshness;
- evidence quality;
- explainability;
- retrieval quality;
- reasoning utility.

Each proposed score must:

- use approved method version;
- be marked provisional;
- include rationale;
- never override blockers.

## 8.17 Minimum Quality Behavior

Draft is acceptable for formal validation only if:

- core identity is stable;
- core purpose, task, and competency evidence exist;
- no fabricated source;
- no ontology mismatch;
- no forbidden claim;
- gaps and conflict are explicit.

## 8.18 Constraints

Longer content is not higher quality.

## 8.19 Rationale

Quality rules prevent generator optimization toward verbosity.

## 8.20 System Impact

Human review focuses on substantive issues instead of format repair.

---

# 9. Naming Convention

## 9.1 Purpose

Menjamin stable identity and retrieval across languages and markets.

## 9.2 Canonical Name Rules

Canonical Career name must:

- refer to the professional Career concept;
- use the most neutral and widely recognized form;
- avoid employer branding;
- avoid seniority marker unless Career identity changes;
- avoid location unless semantic scope requires it;
- avoid marketing adjectives;
- avoid salary, prestige, or trend labels;
- use singular conceptual form.

## 9.3 Display Name Rules

Display name may vary by locale.

It must not change Career scope.

## 9.4 Alias Types

Allowed alias types:

- synonym;
- common label;
- localized label;
- historical label;
- spelling variant;
- abbreviation;
- market title;
- related job title.

Each alias must include:

- locale;
- alias type;
- validity;
- mapping confidence;
- source if material.

## 9.5 Job Title Handling

Job Titles must not automatically become aliases.

A Job Title may be recorded as:

- exact equivalent;
- common title;
- narrower role title;
- broader market title;
- organization-specific title;
- ambiguous title.

## 9.6 Seniority Handling

Senior, Lead, Principal, Junior, Entry-level, and similar markers usually represent Role or Position variants, not separate Career identity.

## 9.7 Specialization Handling

Specialization becomes:

- Role;
- Career subtype;
- adjacent Career;
- or alias;

based on Ontology Resolution, not name pattern alone.

## 9.8 Acronym Handling

Acronym may be stored as abbreviation if:

- meaning is stable;
- collision is assessed;
- locale is stated.

## 9.9 Disambiguation

Disambiguation note is mandatory if:

- name overlaps with Industry;
- name overlaps with Academic Field;
- name overlaps with Tool or Technology;
- same title maps to multiple Careers;
- local term differs in scope.

## 9.10 Identifier Rules

- `entity_id` must not be derived only from mutable display name.
- `object_id` identifies representation, not semantic concept.
- `revision_id` identifies one immutable revision.
- Generator may propose IDs but final identity authority belongs to registry or steward.

## 9.11 Forbidden Names

Names must not include:

- "best";
- "future-proof";
- "high salary";
- "AI safe";
- "for introverts";
- "for women" or other protected-group targeting unless the entity is a formally scoped program, not Career;
- company-specific branding as canonical Career.

## 9.12 Rationale

Naming errors create duplicates and false graph nodes.

## 9.13 System Impact

Search, localization, and entity resolution remain reliable.

---

# 10. Confidence Rules

## 10.1 Purpose

Menetapkan confidence semantics agar Draft tidak terlihat lebih pasti daripada evidence.

## 10.2 Confidence Layers

Generator must distinguish:

### Evidence Confidence

Confidence in source reliability and applicability.

### Claim Confidence

Confidence that a specific claim is supported.

### Relationship Confidence

Confidence that a relationship is valid at stated strength and context.

### Identity Confidence

Confidence that the entity is correctly resolved as a distinct Career.

### Coverage Confidence

Confidence that major Career dimensions are sufficiently represented.

### Object Confidence

Summary confidence for current Draft scope.

## 10.3 Confidence Levels

Allowed levels:

- high;
- medium_high;
- medium;
- medium_low;
- low;
- indeterminate.

Numeric representation may be derived by implementation, but human-readable level and basis remain required.

## 10.4 Confidence Basis

Every confidence value must cite factors such as:

- source authority;
- source directness;
- source independence;
- recency;
- geographic fit;
- methodology;
- cross-source consistency;
- evidence coverage;
- unresolved conflict;
- identity clarity.

## 10.5 Confidence Ceiling

Generated inference cannot have confidence higher than its strongest required evidence chain unless independent confirming evidence exists.

## 10.6 No Confidence by Repetition

Repeated claims from the same source lineage do not increase confidence.

## 10.7 Scoped Confidence

Confidence should be field- or claim-specific when uneven.

Example conceptual distinction:

- high identity confidence;
- medium task coverage confidence;
- low environment confidence.

This is not Career data. It illustrates confidence scope only.

## 10.8 Conflict Adjustment

Material conflict lowers affected claim confidence, not necessarily all object confidence.

## 10.9 Missing Evidence

Missing evidence results in:

- low or indeterminate confidence;
- explicit gap;
- no negative conclusion.

## 10.10 Localization Confidence

Localized content has separate confidence based on translation and terminology review.

## 10.11 Object Confidence Rule

Object-level confidence cannot be high if any mandatory core dimension has low or indeterminate confidence.

## 10.12 Generator Limitation

Generator confidence is provisional.

Validator and Reviewer may revise it.

## 10.13 Forbidden Confidence Patterns

- confidence without basis;
- confidence copied from source without scope;
- one score for all sections;
- high confidence with unresolved identity conflict;
- high confidence because model is strong;
- high confidence because content is detailed.

## 10.14 Rationale

Confidence must represent epistemic strength, not presentation quality.

## 10.15 System Impact

Reasoning Agent can use knowledge proportionally and expose uncertainty.

---

# 11. Common Failure Modes

## 11.1 Purpose

Mendefinisikan defects yang harus dideteksi dan ditangani.

## 11.2 Career-Role Collapse

### Failure

A specific Role is generated as a distinct Career without functional justification.

### Detection

Scope is narrower than Career, tied to team function or seniority.

### Handling

Return to Ontology Resolution.

## 11.3 Career-Job Title Collapse

### Failure

Market title becomes semantic identity.

### Handling

Create Job Title mapping or disambiguation.

## 11.4 Career-Industry Collapse

### Failure

Industry name is generated as Career.

### Handling

Resolve Career function separately.

## 11.5 Career-Major Collapse

### Failure

Academic field or Major is treated as Career.

### Handling

Create relationship rather than identity equivalence.

## 11.6 Task-Skill Confusion

### Failure

Activity is written as Skill or capability as Task.

### Handling

Reclassify through Ontology.

## 11.7 Tool-Skill Confusion

### Failure

Tool name is treated as Skill without observable capability.

### Handling

Reference Tool and generate Skill relationship separately.

## 11.8 Universal Environment Claim

### Failure

One organization or role environment is presented as universal Career environment.

### Handling

Narrow relationship and add variability.

## 11.9 Universal Pathway Claim

### Failure

One Major, Qualification, or Certification is presented as the only route.

### Handling

Scope by jurisdiction or rewrite as common pathway.

## 11.10 Market Data Contamination

### Failure

Salary or demand is embedded into Career definition or stable attributes.

### Handling

Move to Contextual Assertion reference.

## 11.11 AI Absolutism

### Failure

Career is labeled safe, obsolete, replaceable, or future-proof.

### Handling

Replace with task-level AI Trend references and uncertainty.

## 11.12 Personality Determinism

### Failure

Career is described as requiring introversion, extroversion, or a personality type.

### Handling

Remove deterministic claim. Use Work Environment dimensions if relevant.

## 11.13 Source Hallucination

### Failure

Source locator, title, or claim is invented.

### Handling

Hard failure. Reject Draft and record incident.

## 11.14 Evidence Laundering

### Failure

Secondary synthesis is presented as primary evidence.

### Handling

Restore source lineage and downgrade evidence status.

## 11.15 Scope Inflation

### Failure

A local or role-specific source supports a universal Career claim.

### Handling

Narrow claim, add context, or collect broader evidence.

## 11.16 Duplicate Entity

### Failure

Alias or specialization becomes a new Career.

### Handling

Identity resolution, merge, mapping, or subtype review.

## 11.17 Missing Counterevidence

### Failure

Generator selects only supporting source.

### Handling

Flag evidence imbalance and require review.

## 11.18 Over-complete Draft

### Failure

Generator fills every optional section with weak speculation.

### Handling

Remove unsupported content and preserve explicit gaps.

## 11.19 Narrative-only Output

### Failure

Output is readable but lacks structured fields and relationships.

### Handling

Fail KOS pre-validation.

## 11.20 Unsupported Relationship Strength

### Failure

All relationships marked required or strong.

### Handling

Reassess level based on evidence and context.

## 11.21 Localization Drift

### Failure

Translated label changes Career scope.

### Handling

Reject localization and request terminology review.

## 11.22 Revision Overwrite

### Failure

Existing object is modified without new revision.

### Handling

Hard failure. Create immutable revision.

## 11.23 Hidden Generator Assumption

### Failure

Assumption appears as fact.

### Handling

Move to assumptions and lower confidence.

## 11.24 Quality Score Masking

### Failure

High aggregate score hides identity or evidence blocker.

### Handling

Reject acceptance. Blockers are non-compensatory.

## 11.25 Rationale

Known failure taxonomy increases validator consistency.

## 11.26 System Impact

Model-specific errors can be measured and corrected systematically.

---

# 12. Generation Constraints

## 12.1 Purpose

Menetapkan hard boundaries bagi generator.

## 12.2 Semantic Constraints

Generator must not:

- create ontology classes;
- create unofficial predicates;
- merge entity types;
- use generic `related_to` without justification;
- infer universal characteristics from examples;
- create a Career from an organization-specific title without identity review.

## 12.3 Evidence Constraints

Generator must not:

- rely on internal model memory as source;
- fabricate citation;
- omit source conflict;
- use source beyond license;
- broaden claim beyond evidence;
- treat search result snippets as full evidence without verification.

## 12.4 Content Constraints

Generator must not include:

- personal advice;
- user fit;
- salary guarantee;
- demand guarantee;
- prestige ranking;
- deterministic personality fit;
- protected-class stereotypes;
- promotional copy;
- unsupported forecast;
- full copyrighted source content;
- chain of thought;
- prompt instructions;
- implementation code.

## 12.5 Lifecycle Constraints

Generator output status is always Draft.

## 12.6 Revision Constraints

Existing Active revision is never overwritten.

## 12.7 Context Constraints

Volatile claims must be externalized or explicitly contextual.

## 12.8 Scope Constraints

Generator must stay within resolved career boundary.

## 12.9 Localization Constraints

Unreviewed localization must be marked unapproved.

## 12.10 Length Constraints

No fixed word count defines quality.

Each section should be:

- sufficient for meaning;
- concise enough for maintenance;
- free of repeated content.

## 12.11 Batch Generation Constraints

In batch mode:

- each Career receives independent identity resolution;
- evidence cannot be copied across Careers unless truly shared and referenced;
- relationship values cannot be inferred from neighboring objects;
- failure in one object must not contaminate others;
- duplicate detection runs across batch and registry;
- generator version remains recorded per object.

## 12.12 Model Diversity Constraints

Outputs from multiple models may be compared, but majority agreement is not evidence.

## 12.13 Safety Constraints

If generator cannot distinguish Career from Role or Job Title, it must stop and return ambiguity.

## 12.14 Rationale

Constraints preserve trust under automated scale.

## 12.15 System Impact

Production throughput cannot silently lower semantic quality.

---

# 13. Acceptance Criteria

## 13.1 Purpose

Menentukan kapan generated Draft dapat diteruskan ke formal KOS Validation.

## 13.2 Required Acceptance Conditions

A Draft is accepted from generator only if:

1. Output type is `draft_career_object`.
2. Status is Draft.
3. Identity is resolved or explicitly provisional without duplicate blocker.
4. Career type and ontology class are valid.
5. Canonical section order is complete.
6. Universal mandatory fields are present.
7. Career mandatory fields are present.
8. Definition and scope distinguish Career from adjacent entities.
9. Primary work purpose is evidence-supported.
10. At least one Work Task or Work Activity relationship is proposed.
11. At least one Competency or Skill relationship is proposed.
12. Career Family relationship is proposed.
13. Work Environment relationship or explicit blocking gap exists.
14. Entry pathway summary exists.
15. Every material claim maps to evidence.
16. No fabricated source exists.
17. Volatile knowledge is externalized.
18. Relationship predicates are valid.
19. Confidence and uncertainty are explicit.
20. No forbidden content is present.
21. Generation Record is complete.
22. Pre-validation checklist passes.
23. Blocking issues are either empty or correctly prevent acceptance.

## 13.3 Conditional Acceptance

A Draft may be accepted with warnings if:

- optional relationship categories are missing;
- localization is incomplete;
- adjacent Career mapping is incomplete;
- Tool or Technology mapping is incomplete;
- evidence coverage is adequate for Draft but not Reasoning Ready.

Warnings must be explicit.

## 13.4 Rejection Conditions

Reject generated Draft if:

- identity conflict unresolved;
- Career type wrong;
- evidence missing for core fields;
- source fabricated;
- ontology predicate invalid;
- object contains user-specific advice;
- scope is mixed;
- Career and Role are collapsed;
- revision overwrite attempted;
- license violation exists;
- mandatory sections omitted;
- conflict hidden;
- object claims Active or approved state.

## 13.5 Acceptance Does Not Mean Validation

Acceptance means only that Draft is eligible for formal pipeline validation.

It does not mean:

- accurate;
- approved;
- Active;
- Graph Ready;
- Reasoning Ready.

## 13.6 Rationale

Clear acceptance criteria prevent low-quality Drafts from consuming downstream resources.

## 13.7 System Impact

Generator performance can be measured objectively.

---

# 14. Generation Flow (Conceptual)

## 14.1 Purpose

Menjelaskan reasoning sequence generator tanpa menetapkan workflow implementation.

## 14.2 Step 1: Confirm Generation Contract

Generator confirms:

- target is Career;
- target output is Draft;
- versions are supported;
- scope and evidence package exist.

## 14.3 Step 2: Resolve Semantic Identity

Generator reads:

- proposed identity;
- duplicate candidates;
- Career versus Role boundary;
- aliases;
- disambiguation.

If identity remains ambiguous, generation stops.

## 14.4 Step 3: Establish Career Boundary

Generator defines:

- what is included;
- what is excluded;
- level of abstraction;
- adjacent concepts;
- role variants.

## 14.5 Step 4: Build Claim Inventory

Before writing prose, generator identifies planned claims:

- identity;
- purpose;
- tasks;
- competencies;
- environment;
- family;
- pathways;
- contextual references.

Each claim receives evidence status.

## 14.6 Step 5: Map Evidence

Generator maps each claim to:

- source;
- evidence;
- time;
- geography;
- confidence;
- conflict.

Unsupported claims are removed or marked as gaps.

## 14.7 Step 6: Build Relationship Plan

Generator identifies:

- mandatory relationships;
- recommended relationships;
- contextual relationships;
- missing targets;
- invalid or ambiguous predicates.

## 14.8 Step 7: Separate Stable Core and Context

Stable core remains in Career Object.

Volatile or regional knowledge becomes:

- Contextual Assertion reference;
- Regulation reference;
- Labor Market reference;
- AI Trend reference;
- Salary Observation reference.

## 14.9 Step 8: Populate Canonical Sections

Generator fills all 18 canonical sections in fixed order.

## 14.10 Step 9: Assign Confidence and Uncertainty

Confidence is assigned per claim and relationship, then summarized at object level.

## 14.11 Step 10: Run Common Failure Scan

Generator checks known failure modes.

## 14.12 Step 11: Run Mandatory Checklist

Generator runs pre-validation checklist.

## 14.13 Step 12: Produce Outcome

Generator returns:

- Draft Career Object;
- or explicit blocked or failure result.

## 14.14 Constraints

Generator may not skip identity, evidence mapping, or stable-context separation to accelerate generation.

## 14.15 Rationale

Conceptual flow makes outputs stable even when implementation changes.

## 14.16 System Impact

Different models can follow the same production logic.

---

# 15. Example Generation Sequence

## 15.1 Purpose

Menunjukkan urutan kerja generator tanpa membuat Career Object atau data profesi.

## 15.2 Sequence

### Sequence Step A: Receive Target

Generator receives a resolved request to create one Career Entity Object.

No professional data is assumed at this step.

### Sequence Step B: Verify Identity Package

Generator checks:

- canonical identity proposal;
- duplicate candidates;
- neighboring Role and Job Title concepts;
- Career Family candidate;
- exclusion boundary.

### Sequence Step C: Verify Evidence Package

Generator checks that evidence exists for:

- professional purpose;
- core task categories;
- competency categories;
- typical environment;
- entry pathway.

If any mandatory evidence category is absent, it records an evidence gap.

### Sequence Step D: Create Claim Map

Generator creates an internal production map such as:

- Claim category 1 → Evidence group A
- Claim category 2 → Evidence group B
- Relationship category 1 → Evidence group C
- Contextual claim → separate assertion reference

This is a production map, not Career data.

### Sequence Step E: Resolve Relationships

Generator selects approved predicates for:

- Career Family;
- Work Task;
- Competency or Skill;
- Work Environment;
- optional pathways and contextual references.

### Sequence Step F: Build Stable Core

Generator drafts only stable semantic content:

- definition;
- scope;
- purpose;
- task structure;
- competency structure;
- boundary;
- family.

### Sequence Step G: Externalize Volatile Context

Generator does not embed:

- current salary;
- current demand;
- current vacancy;
- future AI forecast;
- current regulation details.

It adds approved references or declares missing contextual objects.

### Sequence Step H: Populate Fixed Structure

Generator populates all canonical sections in the required order.

### Sequence Step I: Assign Confidence

Each claim and relationship receives provisional confidence and basis.

### Sequence Step J: Run Failure Scan

Generator checks:

- Career versus Role;
- Career versus Job Title;
- task versus skill;
- market contamination;
- personality determinism;
- source hallucination;
- relationship validity.

### Sequence Step K: Run Pre-validation

Generator applies the mandatory checklist.

### Sequence Step L: Return Draft or Failure

If all generator-level requirements pass, it returns Draft.

If a blocker exists, it returns a typed failure result and does not produce a misleading complete object.

## 15.3 Constraints

This sequence must not be interpreted as technical service orchestration.

## 15.4 Rationale

The example demonstrates generator discipline without creating profession data.

## 15.5 System Impact

Engineering teams can translate the specification into model instructions, validators, and production controls without semantic guesswork.

---

# 16. Success Criteria

## 16.1 Structural Consistency

All generated Career Objects contain the same canonical sections and field semantics.

## 16.2 Ontology Compliance

No accepted Draft uses invalid class, predicate, or entity-type mapping.

## 16.3 KOS Compliance

All accepted Drafts contain required universal and Career-specific fields.

## 16.4 Identity Integrity

Aliases, Roles, Job Titles, Positions, Majors, Industries, Tools, and Technologies are not incorrectly generated as Career identities.

## 16.5 Evidence Integrity

Every material claim is traceable to evidence and source.

## 16.6 No Hallucinated Sources

Source fabrication rate is zero for accepted Drafts.

## 16.7 Stable-Context Separation

Salary, labor market, regulation, AI impact, and opportunity data remain contextual objects or references.

## 16.8 Relationship Readiness

Accepted Drafts contain precise, typed, evidence-supported relationships.

## 16.9 Confidence Integrity

Confidence is scoped, evidence-based, and provisional.

## 16.10 Review Efficiency

Human reviewers spend time on domain judgment, not format repair.

## 16.11 Batch Scalability

Hundreds of Career Drafts can be generated without cross-object identity drift or copied assumptions.

## 16.12 Model Independence

Different approved models produce semantically equivalent contract output from the same input package.

## 16.13 Graph Readiness Potential

After validation and publication, objects can be mapped to nodes and edges without manually extracting meaning from prose.

## 16.14 Reasoning Readiness Potential

After validation, objects support:

- task analysis;
- skill and competency reasoning;
- environment reasoning;
- pathway reasoning;
- transferability;
- contextual market lookup;
- AI trend lookup.

## 16.15 Auditability

Every accepted Draft can be traced to:

- request;
- scope;
- identity resolution;
- evidence bundle;
- generator;
- version;
- claims;
- relationships;
- pre-validation decision.

## 16.16 Governance Compliance

Generator never self-publishes, bypasses review, or creates unsupported ontology extensions.

---

# 17. Mandatory Generator Conformance Summary

Before an implementation may be called a compliant Career Object Generator, it must demonstrate that it:

- [ ] Accepts only valid Career Generation Input Packages.
- [ ] Produces only Draft or typed failure outcomes.
- [ ] Uses Career Ontology and KOS versions explicitly.
- [ ] Preserves semantic identity.
- [ ] Produces the 18 canonical sections.
- [ ] Separates Career from Role, Job Title, Position, Major, Industry, Tool, and Technology.
- [ ] Requires evidence for purpose, task, competency, environment, family, and pathway.
- [ ] Produces typed relationships.
- [ ] Externalizes volatile context.
- [ ] Preserves provenance and conflict.
- [ ] Uses scoped confidence.
- [ ] Declares uncertainty.
- [ ] Runs mandatory pre-validation.
- [ ] Rejects fabricated sources.
- [ ] Never outputs Active status.
- [ ] Produces a complete Generation Record.
- [ ] Remains compatible with Knowledge Production Pipeline V1.

---

# 18. Closing Specification

Career Object Generator V1 defines how KarirGPS produces Career knowledge at scale without turning AI generation into uncontrolled content creation.

A compliant generator does not attempt to write the most complete narrative.

A compliant generator must produce the most defensible Draft that current evidence allows.

When evidence is strong, the generator creates structured claims and relationships.

When evidence is weak, the generator declares uncertainty.

When identity is ambiguous, the generator stops.

When knowledge is contextual, the generator externalizes it.

When a relationship is unsupported, the generator does not invent it.

When a source is unavailable, the generator records a gap.

This specification ensures that every Career Object begins its lifecycle with:

- stable semantic identity;
- consistent structure;
- explicit evidence;
- precise relationships;
- bounded confidence;
- visible uncertainty;
- complete audit record;
- clear separation between universal Career knowledge and contextual market knowledge.

Career Object Generator V1 is therefore the production contract that allows KarirGPS to generate hundreds or thousands of Career Objects with identical semantics, consistent quality controls, and direct compatibility with Ontology, KOS, Knowledge Graph, and AI Reasoning.
