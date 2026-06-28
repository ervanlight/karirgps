# Career Knowledge Ontology V1

**Product:** KarirGPS  
**Document Type:** Universal Career Knowledge Ontology Blueprint  
**Version:** 1.0  
**Status:** Ontology Design Baseline  
**Applies To:** Seluruh Knowledge Object, Knowledge Agent, Recommendation Agent, Assessment Agent, Roadmap Agent, Report Agent, Orchestrator, dan specialized agent KarirGPS  
**Target Path:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`

---

## 0. Status dan Kedudukan Ontology

Career Knowledge Ontology V1, selanjutnya disebut CKO, adalah standar semantik universal untuk seluruh pengetahuan KarirGPS.

CKO menetapkan:

- jenis entitas yang dapat direpresentasikan;
- makna setiap entitas;
- atribut yang wajib dan opsional;
- hubungan yang sah antar-entitas;
- aturan evidence dan provenance;
- aturan versioning;
- aturan localization;
- aturan validasi;
- aturan naming;
- aturan lifecycle;
- governance perubahan pengetahuan.

CKO bukan kumpulan data.

CKO tidak berisi daftar jurusan, profesi, universitas, sertifikasi, atau skill. CKO menjelaskan struktur yang harus digunakan ketika data tersebut dibuat.

### 0.1 Kedudukan Arsitektural

CKO menjadi semantic foundation bagi:

- Knowledge Object V2 dan versi berikutnya;
- Career Decision Graph;
- Assessment and Recommendation Engine;
- Memory Engine;
- Learning Roadmap Engine;
- Career Roadmap Engine;
- Knowledge Agent;
- Recommendation Agent;
- Report Agent;
- AI Orchestrator;
- external knowledge adapters;
- human knowledge editors;
- institutional knowledge contributors.

### 0.2 Ontology Invariants

Seluruh Knowledge Object wajib mengikuti invariant berikut:

1. Setiap objek merepresentasikan satu entitas utama yang jelas.
2. Identitas entitas dipisahkan dari nama tampilan.
3. Fakta dipisahkan dari inference, projection, dan recommendation.
4. Hubungan antar-entitas harus memiliki makna yang terdefinisi.
5. Setiap klaim material harus memiliki evidence dan provenance.
6. Informasi yang berubah menurut waktu harus memiliki temporal context.
7. Informasi yang berubah menurut lokasi harus memiliki geographic context.
8. Informasi global tidak boleh diasumsikan berlaku identik di setiap negara.
9. Label tidak boleh digunakan sebagai pengganti definisi.
10. Hierarki tidak boleh digunakan untuk menyiratkan nilai atau superioritas.
11. Entitas lama tidak dihapus diam-diam ketika berubah.
12. Sinonim tidak boleh menghasilkan entitas duplikat.
13. Satu konsep dapat memiliki banyak nama lokal, tetapi satu semantic identity.
14. Requirement harus dibedakan dari preference.
15. Skill harus dibedakan dari task, knowledge, tool, dan credential.
16. Career harus dibedakan dari job title, role, occupation family, dan position.
17. Major harus dibedakan dari course, program, qualification, dan institution.
18. Market data harus dibedakan dari karakteristik intrinsik entitas.
19. AI trend harus direpresentasikan sebagai perubahan task dan capability, bukan label profesi yang absolut.
20. Semua Knowledge Object harus dapat divalidasi, dijelaskan, dan diperbarui.

---

# 1. Executive Summary

## 1.1 Apa Itu Career Knowledge Ontology

Career Knowledge Ontology adalah model konseptual yang menjelaskan jenis pengetahuan yang dipahami KarirGPS dan hubungan antarpengetahuan tersebut.

Ontology memungkinkan KarirGPS memahami bahwa:

- jurusan memiliki learning outcomes;
- learning outcomes membangun knowledge dan skill;
- skill digunakan untuk task;
- task membentuk work activity;
- work activity muncul pada career dan role;
- career berada dalam industry dan work environment;
- certification memvalidasi kompetensi tertentu;
- tool dan technology mendukung task;
- labor market menggambarkan demand pada waktu dan lokasi tertentu;
- AI trend mengubah task, skill demand, dan work design;
- scholarship memberi akses ke program;
- university menyelenggarakan program;
- learning resource membantu menutup skill gap;
- work value dan personality trait dapat berhubungan dengan environment, tetapi tidak menentukan pilihan secara mutlak.

Ontology mengubah pengetahuan yang tersebar menjadi semantic network yang konsisten.

## 1.2 Mengapa Ontology Diperlukan

Tanpa ontology, setiap Knowledge Object dapat memakai definisi berbeda.

Contoh risiko:

- "Data Analysis" dicatat sebagai skill pada satu objek dan career pada objek lain.
- "Computer Science" dicatat sebagai major, faculty, dan field tanpa pembeda.
- "Communication" diperlakukan sebagai soft skill tanpa proficiency atau context.
- certification dianggap sama dengan skill.
- university dianggap sama dengan education provider.
- market demand disimpan sebagai atribut permanen career.
- AI risk diberi satu angka global tanpa task, lokasi, atau time horizon.
- nama lokal dan nama internasional menghasilkan duplicate entity.
- requirement formal dan skill preference bercampur.
- hubungan "related to" dipakai untuk semua hal tanpa makna.

CKO menghilangkan ambiguitas tersebut melalui semantic contract.

## 1.3 Tujuan Utama

CKO memiliki sepuluh tujuan:

1. membangun bahasa pengetahuan bersama;
2. mengurangi duplicate dan semantic conflict;
3. mendukung retrieval yang presisi;
4. mendukung reasoning lintas-entitas;
5. menjaga explainability;
6. menjaga evidence lineage;
7. mendukung localization Indonesia dan global;
8. mendukung perubahan waktu;
9. memungkinkan ekspansi entitas baru;
10. menjaga governance knowledge selama bertahun-tahun.

## 1.4 Hasil yang Diharapkan

Ketika CKO diterapkan:

- setiap entitas memiliki identity yang stabil;
- setiap nama lokal terhubung ke konsep yang benar;
- agent memahami perbedaan antar-entitas;
- recommendation dapat menelusuri hubungan knowledge;
- perubahan market tidak mengubah definisi career;
- data regional dapat hidup bersama data global;
- evidence dapat diaudit;
- entitas baru dapat ditambahkan tanpa merusak struktur lama;
- knowledge dapat digunakan oleh manusia dan AI secara konsisten.

---

# 2. Scope dan Non-Scope

## 2.1 Scope

CKO V1 mengatur:

- core entity types;
- entity inheritance;
- relationship types;
- relationship direction;
- attribute standards;
- evidence and source model;
- temporal model;
- geographic model;
- localization;
- naming;
- identity resolution;
- versioning;
- validation;
- lifecycle;
- governance;
- extensibility.

## 2.2 Non-Scope

CKO V1 tidak menetapkan:

- daftar data aktual;
- daftar major;
- daftar career;
- daftar university;
- daftar certification;
- database schema;
- API;
- code;
- graph query;
- storage technology;
- ETL;
- crawling;
- implementation workflow;
- user interface;
- prompt;
- ranking formula.

## 2.3 Domain Coverage

Ontology dirancang untuk mencakup:

- education;
- career;
- occupation;
- competency;
- skill;
- learning;
- credential;
- organization;
- industry;
- technology;
- labor market;
- scholarship;
- work environment;
- personality;
- work values;
- AI trends;
- geographic context;
- outcomes;
- future entities.

---

# 3. Design Principles

## 3.1 Semantic Clarity

Setiap entity type dan relationship memiliki definisi yang tidak tumpang tindih sejauh mungkin.

## 3.2 Identity Before Label

Entitas ditentukan oleh makna, bukan nama.

## 3.3 Separation of Concerns

Ontology memisahkan:

- entity identity;
- classification;
- description;
- requirements;
- outcomes;
- evidence;
- market context;
- localization;
- temporal state.

## 3.4 Modular

Ontology dibagi menjadi module yang dapat berkembang independen tetapi tetap kompatibel.

## 3.5 Extensible

Entitas dan relationship baru dapat ditambahkan tanpa mengubah makna lama.

## 3.6 Evidence-native

Evidence bukan metadata tambahan. Evidence adalah bagian inti knowledge.

## 3.7 Temporal

Pengetahuan yang berubah memiliki effective period.

## 3.8 Geographic

Pengetahuan yang bergantung lokasi harus memiliki geography.

## 3.9 Localization-aware

Satu konsep dapat memiliki banyak label bahasa dan regional.

## 3.10 Explainable

Agent harus dapat menjelaskan hubungan menggunakan label yang dapat dipahami manusia.

## 3.11 AI-native

Ontology mendukung:

- semantic retrieval;
- graph reasoning;
- evidence tracing;
- confidence;
- uncertainty;
- multi-agent communication;
- contextual recommendation.

## 3.12 Human-readable

Definisi harus dapat dipahami knowledge editor dan reviewer nonteknis.

## 3.13 Non-deterministic Human Modeling

Trait, values, dan environment fit tidak boleh menjadi aturan eksklusi absolut.

## 3.14 Classification Without Ranking

Taxonomy tidak menyatakan kelas tertentu lebih baik.

## 3.15 Global Core, Local Extension

Konsep universal berada pada core. Perbedaan negara berada pada localization layer.

## 3.16 Source Independence

Semantic identity tidak bergantung pada satu provider atau source.

## 3.17 Provenance Preservation

Setiap transformasi knowledge mempertahankan source lineage.

## 3.18 Controlled Redundancy

Informasi dapat muncul melalui view berbeda, tetapi source of meaning tetap satu.

## 3.19 Minimal Mandatory Core

Mandatory attributes dibatasi pada atribut yang diperlukan untuk identity, meaning, validation, dan governance.

## 3.20 No Universal Claims Without Scope

Klaim tentang salary, demand, requirement, atau AI impact harus memiliki scope.

## 3.21 Ontological Humility

Ontology harus dapat menyatakan:

- unknown;
- disputed;
- region-specific;
- time-specific;
- inferred;
- projected.

## 3.22 Backward Compatibility

Perubahan ontology tidak boleh merusak Knowledge Object lama tanpa migration path konseptual.

---

# 4. Ontology Architecture

## 4.1 Upper Ontology

Upper Ontology menyediakan kelas abstrak yang menjadi induk seluruh entitas.

### Knowledge Entity

Induk seluruh entitas knowledge.

### Concept Entity

Konsep abstrak seperti Skill, Work Value, atau Industry.

### Real-world Entity

Entitas nyata seperti University atau Certification Provider.

### Opportunity Entity

Peluang yang dapat diakses pengguna, seperti Scholarship atau Learning Program.

### Context Entity

Entitas yang menjelaskan kondisi, seperti Geography, Labor Market, dan Work Environment.

### Evidence Entity

Sumber dan klaim yang mendukung pengetahuan.

### Event Entity

Perubahan atau kejadian yang memengaruhi knowledge.

## 4.2 Domain Modules

CKO dibagi menjadi module:

1. Career and Work Module
2. Education Module
3. Competency and Skill Module
4. Credential Module
5. Organization Module
6. Industry and Economy Module
7. Learning Module
8. Technology Module
9. Human Preference Module
10. Labor Market Module
11. Opportunity Module
12. AI and Future of Work Module
13. Geography and Localization Module
14. Evidence and Governance Module

## 4.3 Entity Inheritance

Inheritance digunakan jika child entity benar-benar memiliki sifat induk.

Contoh konseptual:

- Hard Skill adalah jenis Skill.
- Soft Skill adalah jenis Skill.
- University adalah jenis Education Institution.
- Scholarship adalah jenis Funding Opportunity.
- Certification adalah jenis Credential.
- AI Trend adalah jenis Future of Work Signal.

Inheritance tidak digunakan hanya karena dua entitas saling berhubungan.

## 4.4 Composition

Composition digunakan ketika satu entitas terdiri dari elemen lain.

Contoh:

- Major memiliki Curriculum Component.
- Career memiliki Work Task.
- Certification memiliki Assessment Requirement.
- Scholarship memiliki Benefit Component.

## 4.5 Contextual Assertion

Banyak knowledge tidak melekat langsung pada entitas.

Contoh:

"Career X memiliki demand tinggi di Indonesia pada 2026."

Klaim tersebut harus direpresentasikan sebagai contextual assertion yang menghubungkan:

- Career;
- Labor Market Indicator;
- Geography;
- Time Period;
- Evidence;
- Confidence.

---

# 5. Universal Entity Standard

Semua entitas harus mengikuti universal standard berikut.

## 5.1 Mandatory Universal Attributes

### Entity ID

Identitas stabil dan unik.

Entity ID tidak berubah ketika nama tampilan berubah.

### Entity Type

Jenis entitas menurut ontology.

### Canonical Name

Nama utama yang dipilih untuk reference internal.

### Definition

Definisi singkat yang membedakan entitas dari konsep lain.

### Status

Status lifecycle:

- draft;
- active;
- deprecated;
- superseded;
- archived;
- disputed.

### Ontology Version

Versi ontology yang digunakan.

### Entity Version

Versi isi entitas.

### Created At

Waktu entitas pertama dibuat.

### Last Reviewed At

Waktu review terakhir.

### Provenance Summary

Ringkasan source dan evidence utama.

### Localization Availability

Bahasa dan wilayah yang tersedia.

## 5.2 Optional Universal Attributes

- alternative names;
- abbreviation;
- description;
- scope note;
- exclusion note;
- parent entity;
- child entities;
- related entities;
- keywords;
- retrieval aliases;
- disambiguation note;
- external identifiers;
- image or media reference;
- editorial note;
- review priority;
- confidence;
- validity period.

## 5.3 Entity Status Rules

### Draft

Belum boleh menjadi source utama recommendation.

### Active

Lolos validasi dan dapat digunakan.

### Deprecated

Masih dapat dibaca, tetapi tidak digunakan untuk object baru.

### Superseded

Digantikan entitas atau version lain.

### Archived

Disimpan untuk historical reference.

### Disputed

Terdapat conflict material yang belum terselesaikan.

---

# 6. Core Entity Types

## 6.1 Career

### Tujuan

Merepresentasikan jalur aktivitas profesional yang memiliki pola task, competency, environment, dan progression tertentu.

Career lebih luas daripada job title dan dapat mencakup beberapa role atau position.

### Mandatory Attributes

- Entity ID;
- canonical name;
- definition;
- career scope;
- primary work purpose;
- core task categories;
- core competency references;
- typical work environment references;
- career family reference;
- evidence status;
- version;
- lifecycle status.

### Optional Attributes

- alternative titles;
- role variants;
- seniority pathways;
- entry routes;
- education pathways;
- credential pathways;
- industry contexts;
- lifestyle characteristics;
- physical demands;
- work schedule patterns;
- remote compatibility;
- transferability;
- AI impact references;
- labor market references;
- geographic variants;
- ethical or regulatory notes.

### Relationships

- belongs to Career Family;
- performs Work Task;
- requires or benefits from Skill;
- applies Knowledge Domain;
- uses Tool;
- uses Technology;
- operates in Industry;
- occurs in Work Environment;
- accessible through Major;
- validated by Certification;
- has Labor Market Observation;
- affected by AI Trend;
- has Career Progression;
- adjacent to Career;
- enables Transfer Path.

### Validation Rules

- harus dibedakan dari job title tunggal;
- definisi harus menjelaskan work purpose;
- minimal memiliki task dan competency;
- market data tidak boleh menjadi atribut universal;
- AI impact harus terhubung ke task atau capability;
- sinonim harus diperiksa agar tidak membuat duplicate.

### Contoh Konseptual

Sebuah Career dapat direpresentasikan sebagai profesi analitis yang bertujuan mengubah data menjadi insight, memiliki beberapa role variant, menggunakan skill statistik, tool digital, dan muncul di berbagai industry.

---

## 6.2 Career Family

### Tujuan

Mengelompokkan career yang berbagi purpose, task pattern, atau competency foundation.

### Mandatory Attributes

- canonical name;
- definition;
- grouping basis;
- member relationship rule;
- version.

### Optional Attributes

- subfamilies;
- common competencies;
- common work environments;
- cross-family relationships.

### Relationships

- contains Career;
- related to Knowledge Domain;
- related to Industry;
- shares Skill Cluster.

### Validation Rules

- grouping basis harus eksplisit;
- family tidak boleh sekadar daftar popular;
- child career dapat memiliki lebih dari satu family jika relationship type berbeda dan dijelaskan.

### Contoh Konseptual

Sekelompok career dapat berada dalam family yang sama karena berfokus pada pengelolaan sistem digital, meskipun role dan industry berbeda.

---

## 6.3 Role

### Tujuan

Merepresentasikan fungsi kerja yang lebih spesifik daripada Career.

### Mandatory Attributes

- canonical name;
- definition;
- role scope;
- task references;
- competency references;
- career relationship.

### Optional Attributes

- seniority;
- team context;
- authority level;
- industry variant;
- organizational context;
- common job titles.

### Relationships

- specialization of Career;
- performs Work Task;
- requires Skill;
- operates in Team Structure;
- reports to Role;
- collaborates with Role.

### Validation Rules

- role harus memiliki functional distinction;
- seniority saja tidak selalu membuat role type baru;
- job title lokal harus dipetakan ke role jika maknanya sama.

### Contoh Konseptual

Sebuah Role dapat mewakili fungsi yang berfokus pada analisis requirement dalam Career yang lebih luas.

---

## 6.4 Job Title

### Tujuan

Merepresentasikan label posisi yang digunakan organisasi atau pasar.

### Mandatory Attributes

- title label;
- language;
- geography or organization context;
- mapped Role or Career;
- source.

### Optional Attributes

- seniority marker;
- organization-specific meaning;
- alternative titles;
- effective period.

### Relationships

- labels Role;
- labels Position;
- used by Organization;
- used in Geography.

### Validation Rules

- job title tidak boleh dianggap semantic identity tanpa mapping;
- title yang sama dapat memiliki meaning berbeda;
- title berbeda dapat memetakan ke role sama.

### Contoh Konseptual

Dua organisasi dapat menggunakan title berbeda untuk fungsi kerja yang serupa.

---

## 6.5 Position

### Tujuan

Merepresentasikan instance pekerjaan tertentu dalam organisasi, waktu, dan lokasi tertentu.

### Mandatory Attributes

- position identity;
- organization;
- role or career mapping;
- location;
- effective period.

### Optional Attributes

- employment type;
- schedule;
- compensation range;
- reporting line;
- vacancy status.

### Relationships

- instance of Role;
- offered by Organization;
- located in Geography;
- belongs to Industry;
- requires Skill;
- has Work Environment.

### Validation Rules

- Position bukan konsep universal;
- data bersifat temporal;
- tidak digunakan sebagai pengganti Career.

### Contoh Konseptual

Sebuah lowongan atau jabatan aktual merupakan Position, bukan Career.

---

## 6.6 Work Task

### Tujuan

Merepresentasikan unit aktivitas yang dilakukan dalam pekerjaan.

### Mandatory Attributes

- canonical name;
- definition;
- action scope;
- expected outcome;
- task category.

### Optional Attributes

- frequency;
- complexity;
- autonomy;
- cognitive demand;
- physical demand;
- collaboration demand;
- automation potential;
- tools;
- technology;
- context.

### Relationships

- performed by Career or Role;
- requires Skill;
- uses Tool;
- uses Technology;
- produces Work Output;
- affected by AI Capability;
- grouped into Work Activity.

### Validation Rules

- task harus berbentuk aktivitas, bukan skill;
- task harus memiliki outcome;
- automation harus contextual dan temporal;
- task tidak boleh terlalu luas hingga sama dengan Career.

### Contoh Konseptual

"Menganalisis kebutuhan pengguna" merupakan task, sedangkan "analytical thinking" merupakan skill.

---

## 6.7 Work Activity

### Tujuan

Mengelompokkan beberapa task yang membentuk area aktivitas kerja.

### Mandatory Attributes

- canonical name;
- definition;
- included task rule.

### Optional Attributes

- common skills;
- common outputs;
- environments;
- automation exposure.

### Relationships

- contains Work Task;
- characteristic of Career;
- supported by Skill Cluster.

### Validation Rules

- activity harus lebih luas dari task;
- tidak boleh menjadi sinonim career.

---

## 6.8 Work Output

### Tujuan

Merepresentasikan hasil yang dihasilkan oleh task atau role.

### Mandatory Attributes

- canonical name;
- definition;
- output form.

### Optional Attributes

- quality criteria;
- audience;
- associated task;
- verification method.

### Relationships

- produced by Work Task;
- requires Skill;
- evaluated by Standard;
- used by Role.

### Validation Rules

- output harus dapat dibedakan dari activity;
- quality standard tidak selalu universal.

---

## 6.9 Major

### Tujuan

Merepresentasikan bidang studi formal yang menjadi fokus suatu education program.

Major bukan institution dan bukan degree.

### Mandatory Attributes

- canonical name;
- definition;
- academic field;
- learning outcome categories;
- knowledge domain references;
- core skill references;
- education level applicability;
- version.

### Optional Attributes

- alternative local names;
- concentration;
- curriculum themes;
- common entry requirements;
- typical assessment modes;
- related careers;
- related certifications;
- progression paths;
- geographic variants;
- accreditation notes.

### Relationships

- specialization of Academic Field;
- offered through Education Program;
- develops Skill;
- teaches Knowledge Domain;
- prepares for Career;
- related to Certification;
- contains Curriculum Component;
- offered by University or Institution.

### Validation Rules

- harus dibedakan dari faculty;
- harus dibedakan dari degree;
- learning outcome harus bersifat konseptual;
- hubungan ke Career tidak boleh dinyatakan sebagai jaminan;
- nama lokal harus dipetakan ke semantic identity.

### Contoh Konseptual

Sebuah Major dapat berfokus pada prinsip komputasi, membangun kemampuan problem solving, dan membuka beberapa jalur career, tanpa menjamin satu profesi tertentu.

---

## 6.10 Academic Field

### Tujuan

Merepresentasikan domain keilmuan yang lebih luas daripada Major.

### Mandatory Attributes

- canonical name;
- definition;
- disciplinary scope.

### Optional Attributes

- subfields;
- related fields;
- research themes;
- applied domains.

### Relationships

- contains Major;
- contains Knowledge Domain;
- related to Industry;
- applied in Career.

### Validation Rules

- harus memiliki batas disiplin yang jelas;
- tidak boleh dipakai sebagai pengganti program.

---

## 6.11 Education Program

### Tujuan

Merepresentasikan program formal atau terstruktur yang memiliki provider, curriculum, duration, dan learning outcome.

### Mandatory Attributes

- program name;
- provider;
- program type;
- education level;
- major or field;
- learning outcomes;
- delivery mode;
- location or coverage;
- status;
- source.

### Optional Attributes

- duration;
- tuition;
- admission requirements;
- accreditation;
- language;
- schedule;
- curriculum;
- credential awarded;
- scholarship eligibility;
- capacity;
- start date.

### Relationships

- offered by Education Institution;
- belongs to Major;
- awards Qualification or Credential;
- teaches Knowledge Domain;
- develops Skill;
- requires Admission Requirement;
- eligible for Scholarship.

### Validation Rules

- harus memiliki provider;
- harus temporal jika offering dapat berubah;
- accreditation harus memiliki source dan period;
- biaya harus memiliki currency, period, dan geography.

### Contoh Konseptual

Program sarjana tertentu yang diselenggarakan sebuah institution adalah Education Program. Major adalah bidang studinya.

---

## 6.12 Education Level

### Tujuan

Menstandarkan jenjang pendidikan secara global dan lokal.

### Mandatory Attributes

- canonical level;
- definition;
- framework context;
- ordering scope.

### Optional Attributes

- local equivalent;
- international mapping;
- entry requirement;
- typical duration.

### Relationships

- classifies Education Program;
- maps to Qualification Framework;
- prerequisite for Program or Career.

### Validation Rules

- equivalence lintas negara harus bersifat mapping, bukan identity mutlak;
- hierarchy harus memiliki framework context.

---

## 6.13 Qualification

### Tujuan

Merepresentasikan pengakuan formal atas penyelesaian level atau program pendidikan.

### Mandatory Attributes

- canonical name;
- qualification type;
- awarding framework;
- level;
- definition.

### Optional Attributes

- local labels;
- recognition;
- typical duration;
- progression rights;
- regulated status.

### Relationships

- awarded by Education Program;
- recognized by Authority;
- prerequisite for Career;
- mapped to Qualification Framework.

### Validation Rules

- qualification tidak sama dengan certification;
- recognition harus regional;
- degree title dapat menjadi localized label.

---

## 6.14 Curriculum Component

### Tujuan

Merepresentasikan komponen pembelajaran dalam program.

### Mandatory Attributes

- canonical name;
- component type;
- learning objective.

### Optional Attributes

- sequence;
- credits;
- prerequisite;
- assessment mode;
- knowledge domain;
- skills developed.

### Relationships

- part of Education Program;
- teaches Knowledge Domain;
- develops Skill;
- assessed by Assessment Method.

### Validation Rules

- komponen bukan Major;
- curriculum aktual bersifat provider dan version-specific.

---

## 6.15 Course

### Tujuan

Merepresentasikan unit pembelajaran terstruktur.

### Mandatory Attributes

- name;
- provider;
- learning outcomes;
- subject scope;
- delivery mode.

### Optional Attributes

- duration;
- level;
- prerequisite;
- cost;
- credential;
- language;
- schedule;
- quality evidence.

### Relationships

- teaches Knowledge Domain;
- develops Skill;
- part of Education Program;
- offered by Learning Provider;
- awards Microcredential.

### Validation Rules

- course aktual harus memiliki provider;
- nama course generik dapat menjadi concept terpisah jika diperlukan;
- completion tidak sama dengan mastery.

---

## 6.16 University

### Tujuan

Merepresentasikan institution pendidikan tinggi yang memiliki identity legal atau institutional yang jelas.

### Mandatory Attributes

- official name;
- institution type;
- legal or recognized identity;
- headquarters geography;
- operational status;
- source;
- version.

### Optional Attributes

- alternative names;
- abbreviation;
- campus locations;
- accreditation;
- governance;
- founding year;
- ownership type;
- language;
- delivery modes;
- rankings;
- facilities;
- student support;
- external identifiers.

### Relationships

- subtype of Education Institution;
- offers Education Program;
- has Campus;
- recognized by Authority;
- belongs to Education System;
- partners with Organization;
- eligible provider for Scholarship.

### Validation Rules

- official identity harus dibedakan dari campus;
- ranking bersifat source, year, dan methodology-specific;
- accreditation dapat berada pada institution atau program;
- nama lama harus disimpan sebagai historical label.

### Contoh Konseptual

Sebuah institution dapat memiliki beberapa campus dan menawarkan banyak program. Institution bukan Major.

---

## 6.17 Education Institution

### Tujuan

Menjadi parent entity untuk university, school, academy, training provider, dan institution lain.

### Mandatory Attributes

- official name;
- institution type;
- geography;
- status;
- identity evidence.

### Optional Attributes

- legal identity;
- accreditation;
- provider categories;
- delivery coverage.

### Relationships

- offers Education Program;
- employs Educator;
- recognized by Authority;
- located in Geography.

### Validation Rules

- jenis institution harus jelas;
- provider online global harus memiliki coverage.

---

## 6.18 Campus

### Tujuan

Merepresentasikan lokasi operasional institution tertentu.

### Mandatory Attributes

- institution reference;
- location;
- campus identity.

### Optional Attributes

- facilities;
- programs;
- accessibility;
- housing;
- operating status.

### Relationships

- part of Education Institution;
- located in Geography;
- hosts Education Program.

### Validation Rules

- campus tidak boleh dibuat sebagai university baru jika legal entity sama.

---

## 6.19 Skill

### Tujuan

Merepresentasikan kemampuan untuk melakukan aktivitas atau menghasilkan outcome.

### Mandatory Attributes

- canonical name;
- definition;
- skill category;
- observable capability;
- proficiency framework or scope;
- version.

### Optional Attributes

- aliases;
- subskills;
- parent skill;
- transferability;
- learning difficulty;
- decay characteristics;
- verification methods;
- related tasks;
- related careers;
- related tools;
- related knowledge;
- emerging status.

### Relationships

- required by Career;
- used in Work Task;
- developed by Major;
- taught by Learning Resource;
- validated by Certification;
- demonstrated by Project;
- related to Skill;
- prerequisite for Skill;
- transferable to Career.

### Validation Rules

- skill harus observable;
- tidak boleh hanya berupa subject name;
- skill tidak boleh sama dengan tool;
- proficiency harus contextual;
- broad skill harus memiliki subskill jika dipakai untuk precise reasoning.

### Contoh Konseptual

Kemampuan menyusun argumen terstruktur adalah Skill. Pengetahuan teori argumentasi adalah Knowledge.

---

## 6.20 Hard Skill

### Tujuan

Merepresentasikan skill teknis, metodologis, atau domain-specific yang dapat dilatih dan diverifikasi.

### Mandatory Attributes

Mengikuti Skill, ditambah:

- technical scope;
- verification mode.

### Optional Attributes

- tool dependency;
- certification;
- formal standard;
- domain constraints.

### Relationships

Mengikuti Skill.

### Validation Rules

- "hard" tidak berarti lebih penting;
- harus menjelaskan aktivitas yang dapat dilakukan.

---

## 6.21 Soft Skill

### Tujuan

Merepresentasikan kemampuan interpersonal, intrapersonal, communication, collaboration, leadership, dan self-management.

### Mandatory Attributes

Mengikuti Skill, ditambah:

- behavioral manifestation;
- context variability.

### Optional Attributes

- observation method;
- team context;
- cultural context;
- role relevance.

### Relationships

Mengikuti Skill.

### Validation Rules

- tidak boleh berupa label kepribadian;
- harus dinilai melalui behavior atau outcome;
- context dan budaya harus dipertimbangkan.

---

## 6.22 Foundational Skill

### Tujuan

Merepresentasikan skill dasar yang mendukung banyak domain.

Contoh konseptual meliputi literacy, numeracy, digital fluency, dan learning skill tanpa membuat daftar data aktual.

### Mandatory Attributes

Mengikuti Skill, ditambah:

- cross-domain role.

### Validation Rules

- foundation tidak berarti universal pada level proficiency sama.

---

## 6.23 Skill Cluster

### Tujuan

Mengelompokkan skill yang sering digunakan bersama untuk purpose tertentu.

### Mandatory Attributes

- canonical name;
- definition;
- grouping rule;
- member skills.

### Optional Attributes

- typical careers;
- proficiency profile;
- task relationships.

### Validation Rules

- cluster bukan skill tunggal;
- grouping basis harus jelas.

---

## 6.24 Competency

### Tujuan

Merepresentasikan kombinasi skill, knowledge, behavior, dan standard performance dalam context tertentu.

### Mandatory Attributes

- canonical name;
- definition;
- performance context;
- component references;
- expected outcome.

### Optional Attributes

- proficiency levels;
- assessment criteria;
- role context;
- standard owner.

### Relationships

- composed of Skill;
- applies Knowledge;
- demonstrated in Task;
- required by Role;
- assessed by Assessment;
- validated by Credential.

### Validation Rules

- competency tidak boleh disamakan dengan skill tunggal;
- context dan performance standard wajib jelas.

---

## 6.25 Knowledge Domain

### Tujuan

Merepresentasikan body of knowledge yang dapat dipelajari dan diterapkan.

### Mandatory Attributes

- canonical name;
- definition;
- domain scope.

### Optional Attributes

- subdomains;
- related disciplines;
- concepts;
- application contexts;
- learning sequence.

### Relationships

- taught by Major;
- applied by Career;
- supports Skill;
- contained in Course;
- prerequisite for Knowledge Domain.

### Validation Rules

- knowledge harus dibedakan dari skill;
- domain boundary harus dijelaskan.

---

## 6.26 Certification

### Tujuan

Merepresentasikan credential yang memvalidasi kompetensi atau memenuhi standard tertentu.

### Mandatory Attributes

- official name;
- credential type;
- issuing organization;
- competency or standard validated;
- assessment requirement;
- validity status;
- geography or recognition scope;
- source.

### Optional Attributes

- expiration;
- renewal;
- prerequisite;
- cost;
- delivery mode;
- exam language;
- career relevance;
- skill coverage;
- regulatory relevance;
- version.

### Relationships

- subtype of Credential;
- issued by Certification Body;
- validates Competency;
- validates Skill;
- required or preferred by Career;
- recognized by Authority;
- requires Training or Assessment.

### Validation Rules

- harus memiliki issuer;
- harus dibedakan dari course completion;
- recognition tidak boleh diasumsikan global;
- skill coverage harus evidence-based;
- status aktif harus diverifikasi.

### Contoh Konseptual

Credential profesional dapat memvalidasi competence pada standard tertentu, tetapi tidak otomatis membuktikan seluruh kemampuan kerja.

---

## 6.27 Credential

### Tujuan

Menjadi parent entity untuk qualification, certification, license, badge, dan microcredential.

### Mandatory Attributes

- official name;
- credential type;
- issuer;
- award criteria;
- status.

### Optional Attributes

- validity;
- recognition;
- digital verification;
- level;
- holder requirement.

### Relationships

- issued by Organization;
- validates Learning Outcome;
- validates Competency;
- required by Career.

### Validation Rules

- award criteria harus jelas;
- attendance certificate harus dibedakan dari competency credential.

---

## 6.28 License

### Tujuan

Merepresentasikan authorization formal untuk menjalankan aktivitas regulated.

### Mandatory Attributes

- official name;
- issuing authority;
- regulated scope;
- jurisdiction;
- validity;
- legal basis evidence.

### Optional Attributes

- renewal;
- prerequisite;
- continuing education;
- restricted activities.

### Relationships

- subtype of Credential;
- authorizes Career or Task;
- issued by Authority;
- requires Qualification or Certification.

### Validation Rules

- jurisdiction wajib;
- status legal harus current;
- tidak boleh disamakan dengan certification nonregulatory.

---

## 6.29 Industry

### Tujuan

Merepresentasikan domain aktivitas ekonomi atau produksi tempat organization dan career beroperasi.

### Mandatory Attributes

- canonical name;
- definition;
- economic activity scope;
- classification context.

### Optional Attributes

- subindustries;
- value chain position;
- products;
- services;
- technologies;
- regulatory context;
- geography;
- trends.

### Relationships

- contains Organization;
- employs Career;
- uses Technology;
- affected by Trend;
- produces Product or Service;
- has Labor Market Observation.

### Validation Rules

- industry tidak boleh disamakan dengan occupation;
- classification source harus dicatat;
- satu organization dapat beroperasi di beberapa industry.

### Contoh Konseptual

Career yang sama dapat muncul pada berbagai Industry.

---

## 6.30 Sector

### Tujuan

Merepresentasikan kelompok ekonomi atau institutional yang lebih luas.

### Mandatory Attributes

- canonical name;
- definition;
- grouping basis.

### Relationships

- contains Industry;
- contains Organization.

### Validation Rules

- sector classification harus memiliki context.

---

## 6.31 Organization

### Tujuan

Merepresentasikan institution, company, authority, association, atau provider nyata.

### Mandatory Attributes

- official name;
- organization type;
- legal or recognized identity;
- headquarters geography;
- status;
- source.

### Optional Attributes

- alternative names;
- industry;
- size;
- ownership;
- operating geography;
- website;
- accreditation;
- services;
- brands;
- parent organization.

### Relationships

- belongs to Industry;
- offers Position;
- issues Credential;
- provides Learning Resource;
- funds Scholarship;
- develops Tool or Technology;
- recognized by Authority.

### Validation Rules

- organization identity harus dibedakan dari brand;
- status dan name changes harus temporal;
- size dan industry dapat berubah.

---

## 6.32 Tool

### Tujuan

Merepresentasikan alat yang digunakan untuk melakukan task.

Tool dapat berupa physical, digital, analytical, or procedural instrument.

### Mandatory Attributes

- canonical name;
- definition;
- tool category;
- primary use;
- maker or standard owner jika relevan.

### Optional Attributes

- versions;
- platform;
- licensing model;
- supported tasks;
- required skills;
- industries;
- alternatives;
- lifecycle status.

### Relationships

- used in Work Task;
- used by Career;
- requires Skill;
- implements Technology;
- produced by Organization;
- alternative to Tool.

### Validation Rules

- tool harus dibedakan dari skill;
- version-specific differences harus temporal;
- brand product dan generic tool concept harus dipisahkan.

### Contoh Konseptual

Spreadsheet application adalah Tool. Kemampuan mengolah data dengan spreadsheet adalah Skill.

---

## 6.33 Technology

### Tujuan

Merepresentasikan technological concept, system, method, atau platform capability yang mendukung task dan product.

### Mandatory Attributes

- canonical name;
- definition;
- technology category;
- functional scope.

### Optional Attributes

- maturity;
- dependencies;
- implementations;
- industries;
- related tools;
- skill implications;
- trend status;
- standards.

### Relationships

- implemented by Tool;
- used in Industry;
- enables Work Task;
- requires Skill;
- affected by AI Trend;
- developed by Organization.

### Validation Rules

- technology tidak boleh disamakan dengan product;
- maturity harus temporal;
- emerging status memerlukan evidence.

---

## 6.34 Standard

### Tujuan

Merepresentasikan formal atau widely accepted requirement, specification, atau framework.

### Mandatory Attributes

- official name;
- standard owner;
- scope;
- version;
- status.

### Optional Attributes

- jurisdiction;
- compliance requirement;
- related certification;
- effective period.

### Relationships

- governs Competency;
- governs Technology;
- assessed by Certification;
- adopted by Organization;
- required in Industry.

### Validation Rules

- version wajib jika standard berubah;
- adoption tidak boleh diasumsikan universal.

---

## 6.35 Learning Resource

### Tujuan

Merepresentasikan resource yang membantu pengguna memperoleh knowledge atau skill.

### Mandatory Attributes

- name;
- resource type;
- provider or author;
- learning objectives;
- target level;
- language;
- availability status.

### Optional Attributes

- cost;
- duration;
- delivery mode;
- prerequisites;
- quality evidence;
- credential;
- accessibility;
- geography;
- update date;
- format.

### Relationships

- teaches Knowledge Domain;
- develops Skill;
- prepares for Certification;
- supports Learning Path;
- offered by Learning Provider;
- uses Tool.

### Validation Rules

- harus memiliki learning objective;
- availability harus current;
- quality claim membutuhkan evidence;
- completion tidak boleh disamakan dengan competence.

### Contoh Konseptual

Sebuah course, book, laboratory exercise, mentoring program, atau project guide dapat menjadi Learning Resource.

---

## 6.36 Learning Provider

### Tujuan

Merepresentasikan organization atau person yang menyediakan learning resource.

### Mandatory Attributes

- official name;
- provider type;
- identity;
- operating scope.

### Optional Attributes

- accreditation;
- languages;
- delivery modes;
- quality evidence;
- geography.

### Relationships

- provides Learning Resource;
- issues Credential;
- offers Course;
- recognized by Authority.

### Validation Rules

- provider claim harus dibedakan dari third-party review;
- legal status dan accreditation harus evidence-based.

---

## 6.37 Learning Path

### Tujuan

Merepresentasikan urutan konseptual untuk mencapai skill, credential, atau career readiness.

### Mandatory Attributes

- target;
- starting assumptions;
- milestone categories;
- prerequisite relationships;
- completion condition.

### Optional Attributes

- alternative routes;
- estimated effort class;
- resources;
- assessments;
- geography;
- cost class.

### Relationships

- develops Skill;
- prepares for Career;
- includes Learning Resource;
- leads to Credential;
- requires Knowledge Domain.

### Validation Rules

- learning path harus menyatakan baseline;
- path bukan janji outcome;
- effort estimate harus contextual.

---

## 6.38 Scholarship

### Tujuan

Merepresentasikan funding opportunity untuk education atau learning.

### Mandatory Attributes

- official name;
- funding organization;
- opportunity type;
- eligibility;
- benefit scope;
- geography;
- application period;
- status;
- source.

### Optional Attributes

- funding amount;
- covered cost;
- service obligation;
- target program;
- target population;
- selection stages;
- required documents;
- renewal;
- language;
- deadline.

### Relationships

- subtype of Funding Opportunity;
- funded by Organization;
- supports Education Program;
- available in Geography;
- requires Eligibility Condition;
- associated with University.

### Validation Rules

- application period dan status wajib current;
- eligibility harus source-based;
- target population tidak boleh diinferensikan;
- benefit harus dibedakan dari estimate.

### Contoh Konseptual

Sebuah funding opportunity dapat membiayai tuition, living cost, atau komponen tertentu, dengan eligibility dan obligation yang jelas.

---

## 6.39 Opportunity

### Tujuan

Menjadi parent entity untuk scholarship, internship, fellowship, competition, mentorship, project, dan vacancy.

### Mandatory Attributes

- official or canonical name;
- opportunity type;
- provider;
- eligibility;
- availability period;
- status.

### Optional Attributes

- benefits;
- costs;
- geography;
- target;
- application process;
- capacity.

### Relationships

- offered by Organization;
- available to Person Profile;
- develops Skill;
- provides Experience;
- supports Career.

### Validation Rules

- opportunity harus temporal;
- status harus diverifikasi;
- fit bukan atribut universal opportunity.

---

## 6.40 Internship

### Tujuan

Merepresentasikan structured work-based learning opportunity.

### Mandatory Attributes

- provider;
- role or domain;
- learning purpose;
- duration or period;
- location;
- status.

### Optional Attributes

- compensation;
- eligibility;
- mentor;
- tasks;
- skills;
- conversion possibility;
- schedule.

### Relationships

- subtype of Opportunity;
- offered by Organization;
- provides Experience;
- develops Skill;
- related to Career.

### Validation Rules

- internship tidak sama dengan employment penuh;
- conversion claim harus evidence-based.

---

## 6.41 Project

### Tujuan

Merepresentasikan unit work atau learning activity yang menghasilkan output dan evidence kompetensi.

### Mandatory Attributes

- project purpose;
- scope;
- expected output;
- role context;
- status.

### Optional Attributes

- team;
- duration;
- tools;
- skills;
- domain;
- verification;
- public portfolio reference.

### Relationships

- demonstrates Skill;
- applies Knowledge Domain;
- uses Tool;
- produces Work Output;
- related to Career.

### Validation Rules

- skill demonstration harus ditautkan ke evidence;
- participation tidak otomatis membuktikan seluruh project competency.

---

## 6.42 Work Environment

### Tujuan

Merepresentasikan kondisi tempat dan cara kerja.

### Mandatory Attributes

- canonical name;
- definition;
- environment dimensions.

### Optional Attributes

- collaboration intensity;
- autonomy;
- pace;
- structure;
- physical setting;
- schedule;
- client interaction;
- travel;
- remote pattern;
- uncertainty.

### Relationships

- characteristic of Career;
- provided by Organization;
- compatible with Work Value;
- interacts with Personality Trait;
- affects Skill use.

### Validation Rules

- environment suatu career tidak boleh diasumsikan seragam;
- organization-specific variation harus dimodelkan;
- compatibility bukan determinism.

### Contoh Konseptual

Sebuah Career dapat muncul dalam lingkungan terstruktur atau fleksibel tergantung organization dan role.

---

## 6.43 Personality Trait

### Tujuan

Merepresentasikan kecenderungan psikologis atau behavioral yang relevan terhadap preferensi dan adaptation.

### Mandatory Attributes

- canonical name;
- definition;
- model or framework;
- dimension;
- interpretation boundaries.

### Optional Attributes

- behavioral indicators;
- context sensitivity;
- related environments;
- related work patterns;
- assessment instruments.

### Relationships

- measured by Assessment;
- may interact with Work Environment;
- may influence Preference;
- not deterministic of Career.

### Validation Rules

- harus memiliki framework;
- tidak boleh dipakai sebagai exclusion rule tunggal;
- assessment result harus dipisahkan dari trait concept;
- trait bukan skill.

---

## 6.44 Work Value

### Tujuan

Merepresentasikan outcome atau quality of work yang dianggap penting.

### Mandatory Attributes

- canonical name;
- definition;
- value dimension.

### Optional Attributes

- indicators;
- related environments;
- potential tradeoffs;
- cultural notes.

### Relationships

- prioritized by User Profile;
- satisfied by Work Environment;
- traded off with Work Value;
- associated with Career Outcome.

### Validation Rules

- value harus dibedakan dari preference;
- importance bersifat user-specific;
- cultural context dapat memengaruhi interpretation.

---

## 6.45 Interest Domain

### Tujuan

Merepresentasikan domain aktivitas atau subject yang dapat menarik perhatian seseorang.

### Mandatory Attributes

- canonical name;
- definition;
- activity or subject scope.

### Optional Attributes

- related tasks;
- related fields;
- assessment mappings;
- exploration activities.

### Relationships

- explored through Project;
- related to Major;
- related to Career;
- measured by Assessment.

### Validation Rules

- interest tidak boleh disamakan dengan skill;
- interest-career relationship bersifat probabilistic.

---

## 6.46 Labor Market

### Tujuan

Merepresentasikan market context tempat supply dan demand kerja terjadi.

### Mandatory Attributes

- geography;
- time period;
- occupational or industry scope;
- data source;
- observation type.

### Optional Attributes

- employment level;
- demand indicator;
- supply indicator;
- compensation;
- vacancy;
- growth;
- shortage;
- competition;
- confidence;
- methodology.

### Relationships

- observes Career;
- observes Industry;
- located in Geography;
- measured by Indicator;
- affected by Economic Trend;
- affected by Policy.

### Validation Rules

- geography dan time wajib;
- methodology wajib untuk claim material;
- data tidak boleh menjadi atribut permanen Career;
- forecast harus dibedakan dari observation.

### Contoh Konseptual

Demand untuk career tertentu adalah observation pada wilayah dan periode tertentu, bukan karakteristik universal career.

---

## 6.47 Labor Market Indicator

### Tujuan

Merepresentasikan ukuran atau signal market.

### Mandatory Attributes

- indicator name;
- definition;
- unit;
- methodology;
- time;
- geography;
- source.

### Optional Attributes

- confidence interval;
- coverage;
- revision status;
- forecast horizon.

### Relationships

- measures Labor Market;
- measures Career demand;
- measures Industry condition.

### Validation Rules

- unit dan methodology wajib;
- cross-source comparison memerlukan harmonization note.

---

## 6.48 Salary Observation

### Tujuan

Merepresentasikan data compensation yang contextual.

### Mandatory Attributes

- role or career scope;
- geography;
- time period;
- currency;
- compensation basis;
- source.

### Optional Attributes

- percentile;
- experience level;
- industry;
- employment type;
- benefits;
- sample size;
- methodology.

### Relationships

- observes Career;
- observes Position;
- belongs to Labor Market;
- adjusted by Cost of Living.

### Validation Rules

- salary tidak boleh disimpan sebagai satu angka universal;
- gross dan net harus dibedakan;
- monthly, annual, hourly harus jelas;
- sample dan source quality harus dinilai.

---

## 6.49 Economic Trend

### Tujuan

Merepresentasikan perubahan ekonomi yang memengaruhi industry, market, atau opportunity.

### Mandatory Attributes

- trend definition;
- geography;
- time horizon;
- evidence;
- status.

### Optional Attributes

- affected industries;
- affected careers;
- direction;
- scenario;
- confidence.

### Relationships

- affects Industry;
- affects Labor Market;
- influences Opportunity.

### Validation Rules

- observation dan forecast harus dipisahkan;
- causal claim membutuhkan evidence.

---

## 6.50 AI Trend

### Tujuan

Merepresentasikan perubahan kemampuan, adopsi, regulation, atau penggunaan AI yang memengaruhi work.

### Mandatory Attributes

- trend definition;
- AI capability or adoption scope;
- affected task categories;
- time horizon;
- geography or market scope;
- evidence;
- confidence.

### Optional Attributes

- affected careers;
- skill implications;
- augmentation potential;
- automation potential;
- new task creation;
- adoption barrier;
- regulatory context;
- scenarios.

### Relationships

- subtype of Future of Work Signal;
- affects Work Task;
- changes Skill Demand;
- enables Tool;
- affects Career;
- affects Industry;
- creates Opportunity.

### Validation Rules

- harus terhubung ke task;
- tidak boleh memberi label "career akan hilang" tanpa scenario;
- adoption dan capability harus dibedakan;
- time horizon wajib;
- projection harus memiliki confidence.

### Contoh Konseptual

Sebuah AI Trend dapat mengurangi waktu pada task rutin, meningkatkan kebutuhan verification skill, dan menciptakan task baru.

---

## 6.51 Future of Work Signal

### Tujuan

Menjadi parent untuk AI trend, demographic trend, policy change, technology adoption, dan work design change.

### Mandatory Attributes

- signal definition;
- source;
- time horizon;
- affected scope;
- confidence.

### Optional Attributes

- scenarios;
- geography;
- implications;
- leading indicators.

### Relationships

- affects Career;
- affects Skill;
- affects Industry;
- affects Work Environment.

### Validation Rules

- signal bukan certainty;
- horizon dan evidence wajib.

---

## 6.52 Geography

### Tujuan

Merepresentasikan wilayah yang menjadi scope knowledge.

### Mandatory Attributes

- canonical name;
- geography type;
- parent geography;
- recognized identity.

### Optional Attributes

- codes;
- local names;
- languages;
- currency;
- education system;
- labor jurisdiction;
- time zone.

### Relationships

- contains Geography;
- location of Institution;
- scope of Labor Market;
- scope of Regulation;
- scope of Opportunity.

### Validation Rules

- administrative dan market geography harus dibedakan jika perlu;
- historical boundary harus temporal.

---

## 6.53 Language

### Tujuan

Merepresentasikan bahasa untuk label, resource, program, dan proficiency requirement.

### Mandatory Attributes

- canonical name;
- recognized code or identity.

### Optional Attributes

- local names;
- writing systems;
- regional variants.

### Relationships

- used by Learning Resource;
- required by Program;
- spoken in Geography;
- label language for Entity.

### Validation Rules

- language requirement harus memiliki proficiency context.

---

## 6.54 Regulation

### Tujuan

Merepresentasikan aturan formal yang memengaruhi career, education, credential, atau market.

### Mandatory Attributes

- official name;
- issuing authority;
- jurisdiction;
- scope;
- effective period;
- status;
- source.

### Optional Attributes

- affected careers;
- affected institutions;
- requirements;
- replacement regulation.

### Relationships

- governs Career;
- governs License;
- governs Institution;
- affects Industry.

### Validation Rules

- current status wajib;
- amendment dan repeal harus versioned;
- interpretasi hukum harus dibedakan dari text source.

---

## 6.55 Authority

### Tujuan

Merepresentasikan institution yang memiliki kewenangan formal dalam domain tertentu.

### Mandatory Attributes

- official name;
- jurisdiction;
- authority scope;
- status.

### Relationships

- issues License;
- recognizes Qualification;
- accredits Institution;
- publishes Regulation.

### Validation Rules

- scope kewenangan harus jelas;
- authority tidak diasumsikan global.

---

## 6.56 Assessment Instrument

### Tujuan

Merepresentasikan instrument yang mengukur construct tertentu.

### Mandatory Attributes

- official name;
- construct measured;
- instrument framework;
- version;
- administration scope;
- interpretation limit.

### Optional Attributes

- reliability evidence;
- validity evidence;
- target population;
- scoring model;
- language adaptation;
- publisher.

### Relationships

- measures Personality Trait;
- measures Interest Domain;
- measures Skill;
- produces Assessment Result.

### Validation Rules

- construct dan instrument harus dibedakan;
- result tidak menjadi entity definition;
- version dan population penting.

---

## 6.57 Assessment Result Type

### Tujuan

Mendefinisikan semantic type hasil assessment, bukan data personal.

### Mandatory Attributes

- result type;
- measured construct;
- scale meaning;
- interpretation boundaries.

### Optional Attributes

- confidence;
- norm reference;
- temporal stability.

### Relationships

- produced by Assessment Instrument;
- maps to Trait, Interest, Skill, or Value.

### Validation Rules

- tidak boleh membuat label permanen;
- mapping ke career harus melalui reasoning layer.

---

## 6.58 Experience

### Tujuan

Merepresentasikan category pengalaman yang dapat membangun evidence.

### Mandatory Attributes

- experience type;
- activity scope;
- outcome category.

### Optional Attributes

- duration;
- context;
- role;
- verification;
- related skills.

### Relationships

- demonstrates Skill;
- informs Interest;
- prepares for Career;
- occurs in Organization.

### Validation Rules

- duration tidak otomatis menunjukkan quality;
- evidence strength harus dibedakan.

---

# 7. Entity Relationships

## 7.1 Relationship Standard

Setiap relationship harus memiliki:

- relationship ID;
- relationship type;
- source entity;
- target entity;
- direction;
- definition;
- evidence;
- confidence;
- status;
- valid period;
- geography jika relevan;
- version;
- cardinality expectation;
- inverse relationship jika tersedia.

## 7.2 Relationship Categories

### Hierarchical Relationships

- is a type of;
- has subtype;
- belongs to family;
- contains member.

### Structural Relationships

- part of;
- composed of;
- includes;
- offered by;
- issued by.

### Requirement Relationships

- requires;
- prefers;
- benefits from;
- prerequisite for;
- authorizes.

### Learning Relationships

- teaches;
- develops;
- prepares for;
- validates;
- demonstrates.

### Work Relationships

- performs;
- uses;
- produces;
- operates in;
- collaborates with.

### Market Relationships

- demanded in;
- observed in;
- affected by;
- growing in;
- regulated in.

### Similarity Relationships

- related to;
- adjacent to;
- alternative to;
- transferable to.

### Temporal Relationships

- supersedes;
- replaces;
- valid during;
- evolved from;
- formerly known as.

### Localization Relationships

- local label of;
- equivalent under framework;
- approximate mapping;
- recognized in.

## 7.3 Relationship Strength

Relationship dapat memiliki class:

- essential;
- strong;
- common;
- possible;
- emerging;
- disputed.

Strength harus evidence-based.

## 7.4 Requirement Semantics

CKO membedakan:

### Requires

Tanpa target entity, function tidak dapat dilakukan atau access tidak sah.

### Commonly Requires

Kebutuhan sering muncul tetapi tidak universal.

### Benefits From

Meningkatkan effectiveness tetapi bukan gate.

### Preferred By Market

Sering diminta pada market tertentu.

### Legally Requires

Diperlukan regulation pada jurisdiction tertentu.

Relationship tersebut tidak boleh digabung.

## 7.5 Causality Rules

Relationship "affects" tidak sama dengan "causes".

Causal relationship hanya digunakan jika evidence cukup.

## 7.6 Symmetric and Asymmetric Relationships

- related to dapat symmetric;
- requires harus asymmetric;
- alternative to dapat symmetric;
- supersedes harus asymmetric;
- taught by adalah inverse dari teaches.

## 7.7 Cardinality

Ontology dapat menyatakan expectation seperti:

- Certification harus memiliki satu atau lebih issuer reference.
- Position harus memiliki satu organization.
- Career dapat muncul pada banyak industry.
- Major dapat berhubungan dengan banyak career.

Cardinality adalah semantic rule, bukan database constraint.

## 7.8 Contextual Relationship

Hubungan yang berubah harus ditempatkan dalam context.

Contoh:

Career A requires Certification B di negara tertentu pada periode tertentu.

---

# 8. Attribute Standards

## 8.1 Attribute Classes

### Identity Attributes

Menentukan siapa atau apa entitas tersebut.

### Descriptive Attributes

Menjelaskan karakteristik.

### Classification Attributes

Menempatkan entitas dalam taxonomy.

### Context Attributes

Menjelaskan geography, time, audience, dan framework.

### Quantitative Attributes

Memuat ukuran.

### Qualitative Attributes

Memuat category atau narrative structured claim.

### Governance Attributes

Memuat status, version, review, dan owner.

### Evidence Attributes

Memuat source dan confidence.

## 8.2 Attribute Definition Standard

Setiap attribute harus memiliki:

- name;
- definition;
- domain entity;
- value type concept;
- mandatory or optional status;
- allowed scope;
- temporal behavior;
- localization behavior;
- validation rule;
- evidence requirement.

## 8.3 Atomicity

Satu attribute harus memiliki satu makna utama.

Contoh buruk:

"Salary and job demand."

Salary dan demand harus dipisahkan.

## 8.4 Controlled Vocabulary

Attribute category menggunakan vocabulary yang dikelola.

Free text digunakan untuk description, scope note, dan explanation.

## 8.5 Quantitative Data

Setiap nilai kuantitatif harus memiliki:

- unit;
- methodology;
- geography;
- time;
- source;
- coverage;
- confidence jika tersedia.

## 8.6 Range

Range lebih baik daripada angka tunggal jika variability tinggi.

## 8.7 Unknown and Not Applicable

CKO membedakan:

- unknown;
- not collected;
- not applicable;
- disputed;
- unavailable;
- expired.

## 8.8 Boolean Limitation

Atribut ya atau tidak tidak boleh digunakan jika realitas bersifat gradual.

Contoh:

"Remote friendly" sebaiknya memiliki scope dan pattern, bukan boolean tanpa context.

## 8.9 Enumerated Attributes

Enumerated values harus memiliki definition dan extension rule.

## 8.10 Derived Attributes

Derived attribute harus memiliki:

- derivation basis;
- source attributes;
- method version;
- confidence;
- expiration.

## 8.11 Sensitive Attributes

Attribute sensitif hanya digunakan jika diperlukan dan sesuai governance.

## 8.12 Attribute Inheritance

Child entity mewarisi universal attributes dan parent attributes yang relevan.

Child dapat memperketat rule, tetapi tidak boleh mengubah makna attribute induk.

---

# 9. Evidence and Source Model

## 9.1 Evidence as First-class Knowledge

Setiap claim material memiliki evidence relationship.

## 9.2 Source Entity

Source direpresentasikan sebagai entity dengan:

- source identity;
- source type;
- publisher or author;
- publication date;
- access date;
- jurisdiction;
- methodology;
- version;
- credibility class;
- status.

## 9.3 Source Types

- official regulation;
- government data;
- institutional source;
- professional standard;
- academic research;
- labor market dataset;
- company publication;
- expert review;
- verified organization website;
- structured user contribution;
- editorial synthesis;
- forecast;
- secondary source.

## 9.4 Claim Entity

Claim adalah assertion yang dapat didukung atau ditentang.

Claim memiliki:

- subject;
- predicate;
- object or value;
- scope;
- time;
- geography;
- evidence;
- confidence;
- status.

## 9.5 Evidence Relationships

- supports claim;
- contradicts claim;
- qualifies claim;
- supersedes evidence;
- derived from;
- independently confirms;
- disputes.

## 9.6 Source Quality Dimensions

- authority;
- methodology;
- transparency;
- recency;
- coverage;
- independence;
- directness;
- reproducibility;
- conflict of interest.

## 9.7 Confidence

Confidence dapat dinyatakan:

- high;
- medium-high;
- medium;
- medium-low;
- low;
- indeterminate.

Confidence harus memiliki basis.

## 9.8 Evidence Independence

Beberapa source yang mengutip data yang sama tidak dianggap independent evidence.

## 9.9 Observation, Inference, and Projection

### Observation

Menjelaskan apa yang terukur atau terdokumentasi.

### Inference

Interpretasi berdasarkan observation.

### Projection

Estimasi masa depan berdasarkan assumption dan scenario.

Ketiganya harus dipisahkan.

## 9.10 Evidence Freshness

Freshness rule bergantung pada entity dan claim.

Contoh:

- definisi Skill dapat stabil;
- salary cepat berubah;
- regulation perlu current verification;
- AI trend perlu review sering;
- university identity relatif stabil;
- program availability berubah berkala.

## 9.11 Conflict

Jika source berbeda:

- conflict disimpan;
- source tidak dihapus;
- claim dapat berstatus disputed;
- geography, methodology, dan time diperiksa;
- reviewer menentukan resolution atau accepted ambiguity.

## 9.12 Citation Readiness

Setiap Knowledge Object harus dapat menghasilkan source trace untuk claim material.

---

# 10. Versioning Strategy

## 10.1 Ontology Version

Ontology version berubah ketika semantic contract berubah.

## 10.2 Entity Version

Entity version berubah ketika isi entitas berubah material.

## 10.3 Claim Version

Claim dapat memiliki version terpisah.

## 10.4 Change Types

### Editorial Change

Perbaikan bahasa tanpa perubahan makna.

### Compatible Enrichment

Menambah attribute atau relationship opsional.

### Semantic Update

Mengubah definition, scope, atau relationship.

### Context Update

Mengubah data time, geography, market, atau status.

### Breaking Change

Mengubah identity atau meaning.

## 10.5 Stable Identity

Entity ID tetap jika konsep masih sama.

Nama berubah tidak otomatis membuat entity baru.

## 10.6 New Identity

Entity baru dibuat jika:

- scope berbeda material;
- definition berbeda;
- function berbeda;
- legal identity berbeda;
- old and new concept perlu hidup bersamaan.

## 10.7 Supersession

Jika entity digantikan:

- old entity tetap disimpan;
- relationship superseded by dibuat;
- effective date dicatat;
- migration note tersedia.

## 10.8 Deprecation

Deprecated entity tidak digunakan untuk object baru tetapi tetap dapat di-resolve.

## 10.9 Snapshot

Knowledge snapshot dibutuhkan untuk reasoning dan audit pada waktu tertentu.

## 10.10 Compatibility

Knowledge Object harus menyatakan ontology version yang digunakan.

---

# 11. Localization Strategy: Indonesia to Global

## 11.1 Global Semantic Core

Core entity definition bersifat language-neutral dan country-neutral sejauh mungkin.

## 11.2 Local Label

Setiap entity dapat memiliki:

- Indonesian label;
- English label;
- regional label;
- formal legal name;
- common name;
- abbreviation.

## 11.3 Translation vs Localization

Translation mengubah bahasa.

Localization menyesuaikan:

- education system;
- qualification;
- regulation;
- job title;
- salary;
- labor market;
- institution type;
- currency;
- geographic structure;
- credential recognition.

## 11.4 Indonesia Layer

Localization Indonesia dapat memuat:

- local education levels;
- local qualification framework;
- local institution types;
- local accreditation;
- Indonesian job titles;
- local regulations;
- provincial and city market data;
- Bahasa Indonesia labels;
- local salary observations;
- local scholarship rules.

Lapisan ini tidak mengubah semantic core.

## 11.5 Global Mapping

Entity lokal dapat memiliki:

- exact equivalent;
- close equivalent;
- partial equivalent;
- broader than;
- narrower than;
- no direct equivalent.

## 11.6 No Forced Equivalence

Jika dua qualification tidak benar-benar sama, ontology harus menggunakan approximate mapping.

## 11.7 Language Metadata

Setiap label dan description harus memiliki language identity.

## 11.8 Multilingual Synonyms

Sinonim lintas bahasa harus mengarah pada entity identity yang sama jika maknanya sama.

## 11.9 Regional Career Variants

Career dapat memiliki:

- regulatory variant;
- task variant;
- title variant;
- education route variant;
- market variant.

## 11.10 Currency and Cost

Cost selalu memiliki:

- currency;
- date;
- geography;
- tax or fee basis jika relevan.

## 11.11 Local Evidence Priority

Untuk claim regional, source lokal authoritative lebih relevan daripada generic global source.

## 11.12 Cross-border Recognition

Credential recognition harus dimodelkan sebagai relationship contextual.

---

# 12. Naming Convention

## 12.1 Entity ID

Entity ID harus:

- stabil;
- unik;
- tidak bergantung pada display name;
- tidak memuat klaim yang dapat berubah;
- tidak menggunakan ranking.

## 12.2 Canonical Name

Canonical name harus:

- singkat;
- tidak ambigu;
- menggunakan bentuk yang paling umum dan netral;
- tidak memasukkan marketing language.

## 12.3 Official Name

Entitas legal atau institutional menggunakan official name terverifikasi.

## 12.4 Display Name

Display name dapat berubah berdasarkan bahasa dan audience.

## 12.5 Alternative Name

Mencakup:

- synonym;
- former name;
- abbreviation;
- local title;
- spelling variant;
- industry term.

## 12.6 Disambiguation

Jika nama sama:

- tambahkan scope note;
- gunakan parent context;
- gunakan geography;
- gunakan entity type.

## 12.7 Singular Concept

Nama entity concept menggunakan bentuk singular secara konseptual.

## 12.8 Acronym

Acronym tidak menjadi canonical name jika meaning tidak universal.

## 12.9 Brand and Generic Concept

Brand product dan generic tool concept harus berbeda.

## 12.10 Historical Name

Former name dipertahankan dengan valid period.

## 12.11 Naming Prohibitions

Nama tidak boleh:

- bersifat promotional;
- memuat prediksi;
- memuat ranking;
- memuat judgement seperti "terbaik";
- menggabungkan dua konsep berbeda tanpa reason.

---

# 13. Taxonomy vs Ontology

## 13.1 Taxonomy

Taxonomy adalah struktur klasifikasi hierarkis.

Contoh konseptual:

- Skill
  - Hard Skill
  - Soft Skill

Taxonomy membantu browsing dan grouping.

## 13.2 Ontology

Ontology mencakup:

- entity types;
- attributes;
- relationships;
- constraints;
- evidence;
- time;
- geography;
- version;
- inference boundaries.

Ontology dapat menjelaskan bahwa:

- Career requires Skill;
- Major develops Skill;
- Certification validates Competency;
- Tool supports Task;
- AI Trend affects Task.

## 13.3 Why Taxonomy Alone Is Insufficient

Taxonomy tidak cukup untuk:

- recommendation;
- cross-domain reasoning;
- requirement analysis;
- pathway generation;
- evidence tracing;
- localization;
- temporal updates.

## 13.4 Taxonomy Role Inside CKO

Taxonomy tetap digunakan untuk:

- parent-child classification;
- navigation;
- aggregation;
- controlled vocabulary.

Taxonomy tidak digunakan untuk menggantikan semantic relationship.

## 13.5 Polyhierarchy

Satu entity dapat berada dalam lebih dari satu taxonomy branch jika grouping basis berbeda.

Polyhierarchy harus dijelaskan.

---

# 14. Knowledge Lifecycle

## 14.1 Discovery

Candidate knowledge ditemukan dari source atau contributor.

## 14.2 Identification

Sistem menentukan apakah knowledge:

- entity baru;
- new label;
- new claim;
- update;
- duplicate;
- conflict.

## 14.3 Drafting

Entity atau claim dibuat dengan status draft.

## 14.4 Evidence Attachment

Source dan provenance ditambahkan.

## 14.5 Semantic Validation

Definition, entity type, attribute, dan relationship diperiksa.

## 14.6 Domain Review

Reviewer domain memeriksa correctness.

## 14.7 Localization Review

Reviewer lokal memeriksa terminology, equivalence, dan regional context.

## 14.8 Governance Review

Perubahan high-impact diperiksa terhadap ontology policy.

## 14.9 Activation

Knowledge menjadi active.

## 14.10 Monitoring

Knowledge dipantau berdasarkan freshness class.

## 14.11 Update

Claim atau entity diperbarui.

## 14.12 Conflict Handling

Conflicting evidence ditambahkan dan dinilai.

## 14.13 Deprecation

Knowledge tidak lagi dianjurkan untuk use baru.

## 14.14 Supersession

Knowledge diganti version atau entity baru.

## 14.15 Archival

Knowledge dipertahankan untuk historical reasoning.

## 14.16 Deletion

Deletion hanya dilakukan untuk:

- duplicate tanpa independent identity;
- illegal content;
- invalid accidental object;
- privacy requirement.

Historical truth tidak dihapus hanya karena outdated.

---

# 15. Validation Rules

## 15.1 Universal Validation

Setiap entity harus:

- memiliki Entity ID;
- memiliki Entity Type;
- memiliki canonical name;
- memiliki definition;
- memiliki status;
- memiliki version;
- memiliki provenance summary;
- tidak duplicate.

## 15.2 Semantic Validation

- entity sesuai type;
- definition tidak circular;
- scope jelas;
- parent benar;
- relationship sah;
- attribute digunakan sesuai meaning.

## 15.3 Identity Validation

- synonym tidak dibuat sebagai entity baru;
- legal entity dibedakan dari brand;
- concept dibedakan dari instance;
- version dibedakan dari entity identity.

## 15.4 Relationship Validation

- source dan target type kompatibel;
- direction benar;
- evidence tersedia;
- context tersedia jika conditional;
- inverse relationship konsisten.

## 15.5 Temporal Validation

- current claim memiliki review date;
- expired offering tidak active;
- regulation memiliki effective period;
- salary memiliki period;
- market data memiliki date.

## 15.6 Geographic Validation

- regional claim memiliki geography;
- global claim memiliki evidence lintas wilayah;
- recognition memiliki jurisdiction.

## 15.7 Evidence Validation

- source dapat diidentifikasi;
- claim tidak lebih luas dari evidence;
- secondary source tidak disamarkan sebagai primary;
- projection diberi label;
- conflict disimpan.

## 15.8 Quantitative Validation

- unit;
- currency;
- denominator;
- methodology;
- sample;
- time;
- geography.

## 15.9 Language Validation

- label memiliki language;
- translation tidak mengubah meaning;
- local terminology diverifikasi.

## 15.10 Career Validation

- memiliki task;
- memiliki competency;
- bukan job title;
- market claim contextual.

## 15.11 Major Validation

- memiliki academic field;
- memiliki learning outcomes;
- bukan faculty atau degree;
- career relation tidak deterministik.

## 15.12 Skill Validation

- observable;
- bukan tool;
- bukan task;
- bukan knowledge topic saja;
- proficiency dapat dijelaskan.

## 15.13 Certification Validation

- issuer;
- award criteria;
- competency scope;
- recognition scope;
- status.

## 15.14 University Validation

- official identity;
- geography;
- institution type;
- operational status;
- program terpisah dari institution.

## 15.15 Learning Resource Validation

- provider;
- learning objective;
- target level;
- current availability;
- quality evidence jika diklaim.

## 15.16 Scholarship Validation

- provider;
- eligibility;
- benefit;
- period;
- status;
- source.

## 15.17 AI Trend Validation

- affected task;
- time horizon;
- evidence;
- scenario;
- confidence;
- capability dan adoption dipisahkan.

## 15.18 Validation Severity

Issue dapat diklasifikasikan:

- warning;
- error;
- critical.

Critical issue mencegah activation.

---

# 16. Extensibility

## 16.1 Extension Principles

Entitas baru dapat ditambahkan jika:

- memiliki distinct semantic purpose;
- dibutuhkan oleh reasoning;
- tidak dapat direpresentasikan sebagai attribute;
- memiliki relationship yang jelas;
- memiliki validation rule;
- memiliki governance owner.

## 16.2 Module Extension

Module baru dapat ditambahkan tanpa mengubah core.

## 16.3 Subtype Extension

Subtype dapat menambah attribute khusus tetapi tetap mewarisi parent semantics.

## 16.4 Relationship Extension

Relationship baru harus memiliki:

- definition;
- direction;
- allowed source types;
- allowed target types;
- inverse;
- evidence rule;
- temporal rule;
- example.

## 16.5 Attribute Extension

Attribute baru harus menghindari overlap.

## 16.6 External Ontology Alignment

CKO dapat memetakan ke standard eksternal melalui:

- exact match;
- close match;
- broader match;
- narrower match;
- related match.

External ontology tidak otomatis menjadi governing definition.

## 16.7 Future Entity Incubation

Entitas eksperimental dapat berada pada extension status sebelum masuk core.

## 16.8 Deprecated Extension

Extension dapat dihentikan tanpa menghapus historical object.

---

# 17. Governance

## 17.1 Governance Roles

### Ontology Owner

Menjaga semantic integrity.

### Domain Steward

Menjaga correctness pada domain tertentu.

### Evidence Reviewer

Menilai source dan claims.

### Localization Steward

Menjaga local terminology dan equivalence.

### Data Quality Reviewer

Menilai completeness dan consistency.

### Ethics and Fairness Reviewer

Menilai misuse risk.

### Change Approver

Menyetujui perubahan material.

## 17.2 Change Proposal

Setiap perubahan ontology harus menjelaskan:

- problem;
- proposed change;
- affected entities;
- semantic impact;
- compatibility;
- migration;
- localization impact;
- reasoning impact;
- governance risk.

## 17.3 Change Classes

- minor editorial;
- compatible extension;
- semantic revision;
- breaking revision.

## 17.4 Review Frequency

Review frequency mengikuti knowledge volatility.

### Low Volatility

Definition dan stable taxonomy.

### Medium Volatility

Program structure, certification, tool.

### High Volatility

Scholarship, market data, regulation, AI trend, salary.

## 17.5 Conflict Governance

Conflict tidak diselesaikan hanya melalui majority.

Reviewer mempertimbangkan:

- source authority;
- directness;
- recency;
- geography;
- methodology;
- independence;
- scope.

## 17.6 Contributor Policy

Contributor dapat:

- mengusulkan entity;
- mengusulkan source;
- mengoreksi label;
- melaporkan outdated knowledge.

Contributor tidak langsung mengaktifkan knowledge high-impact.

## 17.7 Audit

Sistem harus dapat menjawab:

- siapa membuat entity;
- source apa yang digunakan;
- siapa mereview;
- kapan diubah;
- mengapa berubah;
- object mana yang terdampak;
- ontology version apa yang digunakan.

## 17.8 Exception

Exception harus:

- terbatas;
- terdokumentasi;
- memiliki owner;
- memiliki expiration;
- tidak mengubah core meaning secara diam-diam.

---

# 18. Integration with KarirGPS AI Framework

## 18.1 Knowledge Object V2

CKO menentukan semantic contract seluruh field dan relationship dalam Knowledge Object.

## 18.2 Career Decision Graph

CDG menggunakan entity dan relationship CKO untuk membangun decision context.

CKO menjelaskan dunia. CDG menjelaskan keputusan pengguna.

## 18.3 Assessment and Recommendation Engine

Engine menggunakan CKO untuk:

- candidate retrieval;
- skill matching;
- requirement mapping;
- pathway analysis;
- explanation.

## 18.4 Memory Engine

Memory dapat merujuk entity CKO.

Contoh konseptual:

- user learned Skill entity;
- user selected Career entity;
- user completed Certification entity.

Memory tetap menyimpan user-specific state. CKO menyimpan universal concept.

## 18.5 AI Constitution

Constitution membatasi penggunaan knowledge agar:

- tidak deterministik;
- fair;
- explainable;
- privacy-safe;
- uncertainty-aware.

## 18.6 ACP

ACP membawa entity references, claim references, version, confidence, dan provenance antar-agent.

## 18.7 Orchestrator

Orchestrator memastikan agent menggunakan:

- ontology version yang kompatibel;
- active knowledge;
- context yang benar;
- evidence yang current.

## 18.8 Report Agent

Report Agent menggunakan localized labels dan human-readable definitions.

---

# 19. Future Expansion

## 19.1 Occupation Regulation

Entity baru dapat memperinci regulated profession dan authorization.

## 19.2 Company Culture

Dapat ditambahkan sebagai contextual entity dengan evidence dan anti-stereotype safeguards.

## 19.3 Team Structure

Merepresentasikan collaboration pattern, reporting, dan role interaction.

## 19.4 Career Outcome

Merepresentasikan progression, mobility, income trajectory, impact, dan lifestyle outcome.

## 19.5 Mentorship

Merepresentasikan mentor profile, domain, availability, dan relationship scope.

## 19.6 Professional Community

Merepresentasikan association, community, dan network opportunity.

## 19.7 Portfolio Artifact

Merepresentasikan artifact yang menunjukkan competency.

## 19.8 Recruitment Process

Merepresentasikan stage, assessment, requirement, dan fairness constraint.

## 19.9 Company Matching

Memerlukan organization, work environment, role, values, location, and opportunity relationships.

## 19.10 Scholarship Globalization

Memerlukan cross-border eligibility, qualification mapping, and currency.

## 19.11 AI Capability Ontology

Dapat memperinci:

- model capability;
- task capability;
- human oversight;
- risk;
- adoption;
- augmentation.

## 19.12 Green Economy and Emerging Industry

Ontology dapat menambah trend dan industry extension tanpa membuat ulang Career entity.

## 19.13 Informal and Nontraditional Career

Ontology harus mendukung:

- freelance;
- creator;
- portfolio career;
- family business;
- gig work;
- entrepreneurship;
- community work.

## 19.14 Life Role and Care Responsibility

Dapat menjadi contextual entity untuk decision reasoning, bukan career identity.

## 19.15 Accessibility

Dapat menambah accessibility requirement, accommodation, dan inclusive environment.

## 19.16 Policy and Macroeconomic Scenario

Dapat mendukung future scenario tanpa mencampur forecast dengan fact.

---

# 20. Evaluation Framework

## 20.1 Semantic Accuracy

Apakah entity type dan relationship benar.

## 20.2 Completeness

Apakah mandatory attributes tersedia.

## 20.3 Consistency

Apakah object menggunakan standard yang sama.

## 20.4 Identity Resolution

Apakah duplicate dan synonym dapat diselesaikan.

## 20.5 Relationship Precision

Apakah relationship memiliki makna spesifik.

## 20.6 Evidence Coverage

Apakah claim material memiliki source.

## 20.7 Freshness

Apakah volatile knowledge ditinjau tepat waktu.

## 20.8 Localization Quality

Apakah local label dan equivalence akurat.

## 20.9 Explainability

Apakah relationship dapat dijelaskan.

## 20.10 Retrieval Quality

Apakah ontology membantu menemukan entity yang relevan.

## 20.11 Reasoning Utility

Apakah ontology mendukung recommendation dan pathway reasoning.

## 20.12 Extensibility

Apakah entity baru dapat ditambahkan dengan aman.

## 20.13 Governance Compliance

Apakah perubahan mengikuti review.

## 20.14 Uncertainty Integrity

Apakah dispute, projection, dan unknown tetap terlihat.

## 20.15 Cross-agent Consistency

Apakah agent memakai meaning yang sama.

---

# 21. Success Criteria

CKO dianggap berhasil ketika:

## 21.1 Shared Semantic Language

Seluruh Knowledge Object dan agent menggunakan definisi yang konsisten.

## 21.2 Clear Entity Boundaries

Career, Role, Job Title, Major, Program, Skill, Task, Tool, Knowledge, Credential, dan Institution tidak bercampur.

## 21.3 Stable Identity

Nama dan bahasa dapat berubah tanpa kehilangan entity identity.

## 21.4 Evidence Traceability

Setiap claim material dapat ditelusuri.

## 21.5 Temporal Accuracy

Data yang berubah tidak disajikan sebagai fakta permanen.

## 21.6 Geographic Accuracy

Klaim regional memiliki scope.

## 21.7 Localization

Ontology dapat digunakan di Indonesia dan dikembangkan secara global.

## 21.8 Explainable Relationships

Agent dapat menjelaskan mengapa dua entity berhubungan.

## 21.9 Modular Growth

Entitas baru dapat ditambahkan tanpa merusak core.

## 21.10 Decision Utility

Ontology mendukung:

- candidate retrieval;
- fit analysis;
- skill gap;
- learning path;
- career path;
- opportunity matching;
- explanation.

## 21.11 Governance

Perubahan dapat diaudit dan direview.

## 21.12 Human-centered Knowledge

Ontology tidak mengubah trend, trait, atau market data menjadi label permanen terhadap manusia.

---

# 22. Mandatory Knowledge Object Checklist

Sebelum Knowledge Object diaktifkan:

- [ ] Entity ID stabil.
- [ ] Entity Type valid.
- [ ] Canonical name jelas.
- [ ] Definition membedakan entity.
- [ ] Concept dan instance tidak bercampur.
- [ ] Mandatory attributes lengkap.
- [ ] Parent entity benar.
- [ ] Relationships menggunakan vocabulary resmi.
- [ ] Relationship direction benar.
- [ ] Evidence tersedia.
- [ ] Provenance dapat ditelusuri.
- [ ] Time scope tersedia jika diperlukan.
- [ ] Geography tersedia jika diperlukan.
- [ ] Observation, inference, dan projection dipisahkan.
- [ ] Synonym dan duplicate telah diperiksa.
- [ ] Localization metadata tersedia.
- [ ] Quantitative attributes memiliki unit dan methodology.
- [ ] Market data tidak disimpan sebagai universal attribute.
- [ ] Requirement dan preference dibedakan.
- [ ] Tool dan Skill dibedakan.
- [ ] Career dan Job Title dibedakan.
- [ ] Major dan Education Program dibedakan.
- [ ] Credential dan Skill dibedakan.
- [ ] Status dan version tersedia.
- [ ] Review date tersedia.
- [ ] Validation rules lulus.
- [ ] Governance approval tersedia jika diperlukan.

---

# 23. Closing Principle

Career Knowledge Ontology V1 menetapkan bahasa pengetahuan yang memungkinkan seluruh sistem KarirGPS memahami dunia pendidikan dan karier secara konsisten.

Ontology ini tidak bertujuan mengumpulkan sebanyak mungkin data.

Ontology ini bertujuan memastikan bahwa setiap data:

- memiliki identitas;
- memiliki makna;
- memiliki konteks;
- memiliki hubungan;
- memiliki evidence;
- memiliki batas;
- memiliki waktu berlaku;
- memiliki wilayah berlaku;
- dapat diperbarui;
- dapat dijelaskan.

Fondasi knowledge yang baik tidak hanya mengetahui bahwa dua konsep berhubungan.

Fondasi knowledge yang baik mengetahui:

- jenis hubungan;
- mengapa hubungan tersebut ada;
- pada context apa hubungan berlaku;
- evidence apa yang mendukung;
- kapan hubungan berubah;
- bagaimana hubungan digunakan secara aman.

Career Knowledge Ontology V1 menjadi standar universal seluruh Knowledge Object KarirGPS agar Career Intelligence Operating System dapat tumbuh dari Indonesia menuju skala global tanpa kehilangan semantic integrity, explainability, governance, dan human-centered reasoning.
