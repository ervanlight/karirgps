# AI Orchestrator Architecture V1

**Product:** KarirGPS  
**Document Type:** Distributed AI Orchestration Architecture Blueprint  
**Version:** 1.0  
**Status:** Design Baseline  
**Governing Constitution:** `governance/ai-constitution/AI_Constitution_V1.md`  
**Communication Standard:** `architecture/agent-protocol/AI_Agent_Communication_Protocol_V1.md`  
**Decision Model:** `architecture/decision-engine/Career_Decision_Graph_V1.md`  
**Target Path:** `architecture/orchestrator/AI_Orchestrator_Architecture_V1.md`

---

## 0. Status dan Kedudukan Arsitektur

AI Orchestrator Architecture V1 menetapkan blueprint konseptual untuk komponen koordinasi seluruh AI Agent KarirGPS.

Orchestrator bertanggung jawab mengatur:

- penerimaan dan pembingkaian task;
- pemilihan agent;
- pembagian subtask;
- context assembly;
- dependency management;
- urutan eksekusi reasoning;
- validasi contract hasil;
- conflict handling;
- retry;
- fallback;
- escalation;
- completion;
- audit coordination.

Orchestrator tidak bertanggung jawab melakukan reasoning domain.

Reasoning domain tetap dilakukan oleh specialized agent, seperti:

- Assessment Agent;
- Memory Agent;
- Recommendation Agent;
- Reflection Agent;
- Roadmap Agent;
- Knowledge Agent;
- Report Agent;
- Learning Agent;
- Interviewer Agent;
- Recruiter Agent;
- agent spesialis lain.

### 0.1 Kedudukan Normatif

Orchestrator tunduk pada urutan berikut:

1. hak, keselamatan, martabat, dan agency pengguna;
2. consent, privacy, purpose limitation, dan fairness;
3. AI Constitution V1;
4. authority dan scope setiap agent;
5. AI Agent Communication Protocol V1;
6. Career Decision Graph V1;
7. engine-specific contract;
8. task-specific objective;
9. optimasi latency, biaya, dan throughput.

Orchestrator tidak dapat memberi izin kepada agent untuk melanggar aturan yang lebih tinggi.

### 0.2 Architectural Invariants

Seluruh implementasi Orchestrator wajib mempertahankan invariant berikut:

1. Satu task memiliki satu logical coordinator yang accountable.
2. Orchestrator tidak menghasilkan domain conclusion sendiri.
3. Setiap delegasi memiliki scope, authority ceiling, input, output, dan stop condition.
4. Setiap agent dipilih berdasarkan capability dan authority, bukan hanya availability.
5. Context diberikan secara minimum dan purpose-bound.
6. Evidence lineage tidak boleh hilang selama orchestration.
7. Confidence tidak boleh dinaikkan karena consensus semu.
8. Conflict material harus terlihat.
9. Side effect tidak boleh terjadi tanpa authority dan confirmation.
10. Retry tidak boleh menghasilkan duplicate outcome.
11. Task tidak boleh berjalan tanpa batas.
12. Completion harus berbasis contract, bukan sekadar seluruh agent merespons.
13. Human escalation harus tersedia.
14. Seluruh keputusan koordinasi material harus dapat diaudit.
15. Failure harus berhenti secara aman dan eksplisit.

### 0.3 Logical Single Coordinator

"Single coordinator" berarti satu owner koordinasi logis untuk satu task atau decision context.

Prinsip ini tidak berarti seluruh KarirGPS bergantung pada satu proses fisik.

Arsitektur tetap dapat mendukung:

- banyak task secara paralel;
- distribusi lintas node;
- redundancy;
- failover;
- regional deployment;
- horizontal scaling;
- model dan agent yang berbeda.

Namun, dua Orchestrator tidak boleh menjadi decision owner aktif untuk task identity dan state version yang sama tanpa mekanisme takeover yang sah.

---

# 1. Executive Summary

## 1.1 Apa Itu AI Orchestrator

AI Orchestrator adalah control layer yang mengoordinasikan specialized agent agar dapat menyelesaikan satu tujuan pengguna secara konsisten, aman, dan dapat diaudit.

Orchestrator memahami:

- task apa yang sedang dikerjakan;
- capability apa yang diperlukan;
- agent mana yang berwenang;
- context apa yang perlu diberikan;
- dependency apa yang harus dipenuhi;
- hasil apa yang diharapkan;
- conflict apa yang muncul;
- kapan retry diperlukan;
- kapan human review diperlukan;
- kapan task cukup untuk dinyatakan selesai.

Orchestrator tidak perlu mengetahui semua detail reasoning domain. Orchestrator hanya perlu memahami contract dan kualitas hasil domain.

## 1.2 Mengapa Dibutuhkan

Tanpa Orchestrator, agent dapat bekerja secara terpisah tanpa koordinasi yang cukup.

Risiko utamanya:

- agent menerima pertanyaan yang bukan kewenangannya;
- beberapa agent mengulang pekerjaan yang sama;
- context pengguna dikirim terlalu luas;
- agent menggunakan state version berbeda;
- hasil assessment lama dipakai sebagai current state;
- knowledge yang sudah stale digunakan;
- conflict antar-agent tidak diketahui;
- retry menghasilkan side effect ganda;
- workflow berhenti tanpa completion yang jelas;
- output akhir menyatukan conclusion yang tidak kompatibel;
- human review terlambat dipanggil;
- audit tidak dapat menjelaskan proses.

Orchestrator mengatasi risiko tersebut melalui ownership, routing, context control, dependency coordination, validation, dan lifecycle governance.

## 1.3 Apa yang Bukan Tugas Orchestrator

Orchestrator bukan:

- career expert;
- psychologist;
- assessment interpreter;
- labor market analyst;
- memory author;
- recommendation scorer;
- roadmap designer;
- report writer;
- coach;
- recruiter;
- source of truth;
- super-agent yang boleh mengabaikan specialized agent.

Orchestrator tidak boleh:

- menyimpulkan kecocokan karier;
- memberi skor fit;
- menafsirkan personality;
- mengubah memory secara langsung;
- menentukan user goal;
- mengubah confidence domain;
- membuat market projection;
- menulis explanation domain;
- memutuskan untuk pengguna.

## 1.4 Mandat Utama

Mandat Orchestrator adalah memastikan specialized reasoning terjadi:

- pada agent yang benar;
- dengan context yang benar;
- dalam authority yang benar;
- pada state version yang benar;
- dengan dependency yang benar;
- melalui protocol yang benar;
- dengan validation yang proporsional;
- hingga mencapai completion yang sah.

## 1.5 Hasil yang Diharapkan

Ketika Orchestrator bekerja dengan benar:

- setiap task memiliki owner;
- setiap agent mengetahui tanggung jawabnya;
- context tidak berlebihan;
- reasoning tidak duplikatif;
- dependency tidak terlewat;
- conflict terlihat;
- failure dapat dipulihkan;
- result memenuhi contract;
- human oversight terjadi pada saat yang tepat;
- pengguna menerima hasil yang konsisten dan explainable.

---

# 2. Scope dan Non-Scope

## 2.1 Scope

Dokumen ini mencakup desain konseptual untuk:

- orchestration authority;
- agent registry;
- task intake;
- task contract;
- lifecycle state;
- context assembly;
- routing;
- dependency planning;
- event coordination;
- result validation;
- conflict management;
- retry;
- fallback;
- escalation;
- completion;
- observability;
- governance;
- failure recovery;
- future federation.

## 2.2 Non-Scope

Dokumen ini tidak menetapkan:

- kode;
- API;
- database;
- queue technology;
- message broker;
- cloud vendor;
- model provider;
- prompt;
- serialisasi;
- deployment topology;
- endpoint;
- implementation workflow;
- programming language;
- user interface.

## 2.3 Orchestrated Work

Orchestrator dapat mengoordinasikan:

- assessment interpretation;
- education recommendation;
- career recommendation;
- career transition analysis;
- learning roadmap;
- career roadmap;
- memory update proposal;
- reflection;
- report generation;
- CV analysis;
- portfolio analysis;
- scholarship matching;
- company matching;
- interview evaluation;
- outcome review.

## 2.4 Non-orchestrated Decisions

Tindakan sederhana dapat ditangani satu agent tanpa graph orchestration penuh jika:

- risk rendah;
- scope jelas;
- tidak membutuhkan cross-agent evidence;
- tidak mengubah state material;
- tidak memerlukan human approval;
- tidak memiliki conflict atau dependency kompleks.

Meski demikian, agent tetap mengikuti ACP dan AI Constitution.

---

# 3. Core Principles

## 3.1 Single Logical Coordinator

Satu task memiliki satu accountable orchestration owner.

## 3.2 Specialized Reasoning

Reasoning domain dilakukan oleh agent spesialis.

Orchestrator hanya menilai contract, completeness, provenance, consistency, authority, dan policy conformance.

## 3.3 Stateless Execution, Stateful Task

Setiap execution unit sebaiknya tidak bergantung pada hidden context.

State perjalanan task dipertahankan melalui:

- Task ID;
- Context ID;
- current state version;
- dependency state;
- artifact references;
- event history;
- checkpoint;
- audit trace.

## 3.4 Event-driven

Perubahan state dan artifact dikomunikasikan melalui event yang terdefinisi.

Orchestrator tidak perlu memeriksa semua sistem secara terus-menerus.

## 3.5 Context-aware

Orchestrator memahami context yang diperlukan untuk routing, bukan seluruh isi personal pengguna.

## 3.6 Least Context

Agent menerima context minimum yang mampu menyelesaikan subtask.

## 3.7 Authority-aware

Capability tidak sama dengan authority.

Agent hanya dipanggil jika:

- capable;
- authorized;
- healthy;
- compatible;
- appropriate for the risk.

## 3.8 Explainable Coordination

Orchestrator harus dapat menjelaskan:

- mengapa agent dipilih;
- mengapa agent lain tidak dipilih;
- mengapa routing sequential atau parallel;
- mengapa retry dilakukan;
- mengapa human review dipanggil;
- mengapa task dinyatakan selesai.

## 3.9 Fail-safe

Ketika ragu, Orchestrator mempersempit scope, menahan side effect, atau mengeskalasi.

## 3.10 Human Oversight

Orchestrator tidak boleh mengoptimalkan automasi dengan menghapus human control.

## 3.11 Modular

Agent dapat diganti tanpa mengubah seluruh arsitektur.

## 3.12 Extensible

Agent, model, event, dan domain baru dapat ditambahkan melalui registration dan conformance.

## 3.13 Version-aware

Orchestrator memeriksa version:

- agent;
- protocol;
- artifact;
- context;
- knowledge;
- assessment;
- policy.

## 3.14 Evidence-preserving

Orchestrator tidak menyederhanakan evidence hingga provenance hilang.

## 3.15 Uncertainty-preserving

Orchestrator tidak mengubah hasil berbeda menjadi consensus palsu.

## 3.16 Idempotent Coordination

Replay, retry, dan duplicate event tidak boleh menghasilkan perubahan material berulang.

## 3.17 Bounded Execution

Setiap task memiliki:

- scope;
- budget;
- deadline;
- maximum depth;
- retry limit;
- completion criteria;
- stop condition.

## 3.18 Graceful Degradation

Jika agent tertentu tidak tersedia, Orchestrator dapat:

- menggunakan fallback yang sah;
- mempersempit scope;
- memberikan partial result;
- menunda completion;
- mengeskalasi.

## 3.19 Separation of Control and Domain Planes

Orchestrator berada pada control plane.

Specialized agents berada pada domain reasoning plane.

Knowledge, memory, assessment, dan artifact menjadi intelligence resources.

## 3.20 No Silent Side Effects

Perubahan memory, goal, roadmap, report publication, atau external action memerlukan confirmation dan trace.

## 3.21 Purpose Preservation

Purpose awal task harus tetap dibawa ke setiap delegation.

## 3.22 Minimal Sufficient Orchestration

Orchestrator tidak boleh memanggil agent hanya karena tersedia.

Setiap invocation harus memberi nilai material.

## 3.23 Cost and Latency Aware, Not Cost Dominated

Biaya dan latency boleh dioptimalkan setelah safety, quality, authority, dan completeness terpenuhi.

## 3.24 Recovery by Design

Task harus dapat dilanjutkan dari checkpoint tanpa mengulang seluruh reasoning.

## 3.25 Contestable

User atau human reviewer dapat menolak, mengoreksi, atau meminta rerun dengan objective berbeda.

---

# 4. Architectural Model

## 4.1 Control Plane

Control Plane mengelola:

- task ownership;
- routing;
- lifecycle;
- dependencies;
- retry;
- escalation;
- completion;
- policy checks;
- audit coordination.

## 4.2 Domain Reasoning Plane

Domain Reasoning Plane terdiri dari specialized agent yang menghasilkan:

- assessment interpretation;
- memory retrieval;
- recommendation;
- reflection;
- roadmap;
- knowledge analysis;
- report;
- domain validation.

## 4.3 Event Plane

Event Plane menyampaikan perubahan:

- task;
- user state;
- memory;
- artifact;
- agent health;
- consent;
- outcome;
- governance.

## 4.4 Context Plane

Context Plane menyiapkan Context Capsule yang relevan untuk setiap agent.

## 4.5 Governance Plane

Governance Plane menetapkan:

- constitutional rules;
- authority;
- privacy;
- fairness;
- human review;
- audit requirements;
- version compatibility.

## 4.6 Artifact Plane

Artifact Plane menyimpan dan merujuk hasil kerja yang dapat dipakai kembali:

- assessment profile;
- memory snapshot;
- recommendation set;
- decision graph;
- roadmap;
- report;
- evidence bundle;
- decision record.

## 4.7 Human Oversight Plane

Human Oversight Plane menerima issue yang membutuhkan:

- value judgment;
- high-impact approval;
- policy review;
- sensitive data handling;
- unresolved conflict;
- exception.

## 4.8 Separation Benefits

Pemisahan ini mencegah:

- Orchestrator menjadi monolithic super-agent;
- agent domain mengubah orchestration state secara liar;
- knowledge menjadi instruction;
- user content menjadi authority;
- external AI mengubah state tanpa review;
- audit kehilangan ownership.

---

# 5. Responsibilities and Boundaries

## 5.1 Responsibilities

Orchestrator bertanggung jawab untuk:

1. menerima request atau event;
2. memvalidasi source dan intent;
3. menetapkan task identity;
4. menentukan decision question;
5. menetapkan owner dan scope;
6. memeriksa authority;
7. mengklasifikasikan risk;
8. menentukan required capabilities;
9. membaca Agent Registry;
10. memilih routing pattern;
11. membentuk Context Capsule;
12. membuat delegation contract;
13. mengelola dependencies;
14. mengontrol concurrency;
15. memantau progress;
16. memvalidasi output contract;
17. mendeteksi stale state;
18. mendeteksi conflict;
19. mengelola retry dan fallback;
20. memicu escalation;
21. menyatukan references, bukan melakukan domain synthesis;
22. meminta synthesis dari agent yang berwenang;
23. memeriksa completion criteria;
24. mencatat Decision Record;
25. memublikasikan completion event.

## 5.2 Allowed Actions

Orchestrator boleh:

- memilih agent;
- memanggil agent;
- membatalkan task;
- mempause task;
- melanjutkan task;
- mengulangi invocation;
- mengganti agent;
- mempersempit scope;
- meminta clarification;
- memicu human review;
- menolak output yang tidak memenuhi contract;
- menandai artifact provisional;
- menandai conflict unresolved;
- mengakhiri task secara partial;
- menghentikan side effect.

## 5.3 Forbidden Actions

Orchestrator dilarang:

- menginterpretasikan assessment;
- menilai kecocokan career;
- memberi bobot domain;
- menulis recommendation;
- mengubah memory content;
- membuat user preference;
- menafsirkan nilai atau personality;
- membuat knowledge claim;
- mengubah confidence domain;
- menghapus counterevidence;
- memilih pihak dalam conflict tanpa adjudication rule;
- mengakses data di luar purpose;
- menaikkan authority;
- membuat keputusan final bagi user;
- memaksa consensus.

## 5.4 Coordination Judgment

Orchestrator boleh membuat coordination judgment.

Contoh:

- Knowledge Agent perlu dipanggil karena candidate data stale.
- Memory Agent tidak perlu dipanggil karena task tidak membutuhkan history.
- Dua agent dapat berjalan paralel karena tidak saling bergantung.
- Human review diperlukan karena audience employer-facing.

Coordination judgment bukan domain judgment.

## 5.5 Result Validation Boundary

Orchestrator memvalidasi:

- format semantik;
- required fields;
- source lineage;
- version;
- completeness;
- authority;
- scope;
- confidence presence;
- uncertainty presence;
- conflict declaration;
- policy compliance.

Orchestrator tidak memvalidasi apakah domain conclusion benar secara substantif. Validasi substantif dilakukan specialized validator atau human expert.

---

# 6. Agent Registry

## 6.1 Tujuan

Agent Registry adalah katalog resmi seluruh agent yang dapat digunakan Orchestrator.

Registry bukan sekadar daftar nama. Registry adalah contract operasional dan governance.

## 6.2 Agent Registration Record

Setiap agent harus memiliki:

### Agent ID

Identitas stabil.

### Agent Name

Nama manusiawi.

### Agent Type

Kategori fungsi.

### Version

Versi behavior contract.

### Capability

Kemampuan spesifik.

### Authority

Keputusan dan tindakan yang diizinkan.

### Scope

Domain, audience, data class, region, dan risk scope.

### Allowed Actions

Tindakan yang diperbolehkan.

### Forbidden Actions

Tindakan yang dilarang.

### Accepted Inputs

Tipe message, artifact, evidence, dan context yang dapat diproses.

### Produced Outputs

Tipe response dan artifact yang dapat dibuat.

### Required Context

Context minimum.

### Optional Context

Context yang dapat meningkatkan kualitas.

### Dependencies

Knowledge, model, tool, artifact, approval, atau agent lain.

### Compatibility

ACP version, CDG version, artifact version, dan policy version.

### Risk Class

Risk level agent dan outputnya.

### Data Access Class

Sensitivity yang dapat diterima.

### Audience Boundary

Audience yang boleh dilayani.

### Human Review Rule

Kondisi yang mewajibkan review.

### Latency Profile

Kelas waktu respons yang diharapkan.

### Cost Profile

Kelas resource yang digunakan.

### Capacity Profile

Jumlah task yang dapat ditangani secara sehat.

### Health Status

Status operasional.

### Quality Status

Calibration dan conformance terbaru.

### Fallback Eligibility

Apakah agent dapat menggantikan agent lain.

### Owner

Pihak yang bertanggung jawab.

### Lifecycle Status

Registered, active, degraded, suspended, retired.

## 6.3 Health Status

Health status mencakup:

- Healthy;
- Monitored;
- Degraded;
- Unavailable;
- Suspended;
- Retired.

## 6.4 Quality Status

Health tidak sama dengan quality.

Agent dapat sehat secara teknis tetapi buruk secara kualitas.

Quality status dapat mencakup:

- Qualified;
- Limited;
- Under Review;
- Restricted;
- Disqualified.

## 6.5 Capability Matching

Orchestrator mencocokkan task dengan capability berdasarkan:

- intent;
- decision question;
- domain;
- expected output;
- risk;
- language;
- region;
- data sensitivity;
- required artifact.

## 6.6 Authority Check

Setelah capability cocok, Orchestrator memeriksa authority.

Agent yang capable tetapi tidak authorized tidak boleh dipilih.

## 6.7 Version Selection

Jika beberapa version tersedia, Orchestrator memilih berdasarkan:

- compatibility;
- approved status;
- quality;
- risk;
- domain;
- rollback state;
- experiment policy.

## 6.8 Registry Updates

Perubahan registry harus versioned dan auditable.

Perubahan material:

- authority;
- data access;
- capability;
- forbidden action;
- risk class;
- human review requirement.

## 6.9 Registry Failure

Jika Registry tidak tersedia atau tidak konsisten:

- task high-risk tidak boleh berjalan;
- cached approved registry dapat digunakan jika masih valid;
- low-risk task dapat degraded jika policy mengizinkan;
- incident harus dicatat.

---

# 7. Task Contract

## 7.1 Tujuan

Task Contract mengubah request menjadi unit kerja yang dapat dikoordinasikan.

## 7.2 Core Fields

Setiap task memiliki:

- Task ID;
- Context ID;
- requester;
- accountable owner;
- user reference;
- intent;
- decision question;
- objective;
- scope;
- audience;
- risk class;
- authority;
- current state version;
- input artifacts;
- expected output;
- dependencies;
- deadline;
- budget;
- retry allowance;
- completion criteria;
- stop condition;
- escalation route;
- retention class.

## 7.3 Task Classes

### Inquiry Task

Meminta informasi atau retrieval.

### Evaluation Task

Meminta penilaian domain.

### Recommendation Task

Meminta decision support.

### State Change Task

Mengusulkan atau mengonfirmasi perubahan state.

### Roadmap Task

Membentuk action path.

### Reflection Task

Menginterpretasikan longitudinal change.

### Reporting Task

Menyusun audience-specific artifact.

### Validation Task

Memeriksa evidence atau output.

### Governance Task

Memeriksa authority, privacy, fairness, atau policy.

## 7.4 Parent and Child Tasks

Parent task dapat dipecah menjadi child task.

Child task harus:

- memiliki objective lebih sempit;
- memiliki owner;
- memiliki dependency;
- memiliki expected output;
- mewarisi purpose;
- tidak melebihi authority parent;
- memiliki stop condition.

## 7.5 Task Ownership

Satu task hanya memiliki satu accountable owner.

Contributor dapat banyak.

Ownership berpindah hanya melalui explicit handover atau failover.

## 7.6 Task Identity

Task yang tampak sama dapat dianggap berbeda jika:

- user berbeda;
- objective berbeda;
- state version berbeda;
- audience berbeda;
- decision horizon berbeda;
- constraint berubah.

## 7.7 Task Deduplication

Task dapat dianggap duplicate jika:

- decision question sama;
- state version sama;
- input artifact sama;
- objective sama;
- expected output sama;
- valid artifact sudah tersedia.

---

# 8. Task Lifecycle

## 8.1 Created

Task telah dibuat tetapi belum divalidasi penuh.

Pada status ini:

- identity tersedia;
- intent awal tersedia;
- owner belum tentu ditetapkan;
- side effect belum boleh dilakukan.

## 8.2 Validating

Orchestrator memeriksa:

- source;
- intent;
- authority;
- risk;
- scope;
- consent;
- dependencies;
- duplicate;
- current state.

## 8.3 Queued

Task valid dan menunggu kapasitas, dependency, atau priority slot.

Queued harus memiliki:

- reason;
- priority;
- deadline;
- expiration.

## 8.4 Running

Satu atau lebih agent sedang menjalankan subtask.

Running tidak berarti seluruh dependency tersedia.

## 8.5 Waiting

Task berhenti sementara karena:

- dependency;
- human input;
- clarification;
- external evidence;
- consent;
- cooldown;
- time condition.

Waiting harus memiliki resume condition.

## 8.6 Paused

Task dihentikan sementara secara terkontrol karena:

- user request;
- governance review;
- incident;
- state change;
- maintenance;
- policy update.

Paused berbeda dari Waiting. Paused membutuhkan control decision untuk resume.

## 8.7 Retry

Task atau subtask sedang dijalankan ulang setelah failure yang dinilai recoverable.

Retry harus membawa:

- failure reason;
- retry number;
- changed condition;
- idempotency protection.

## 8.8 Fallback

Primary agent tidak digunakan dan fallback agent sedang mengambil alih.

Fallback harus dicatat karena dapat memengaruhi quality dan confidence.

## 8.9 Validating Result

Output agent sedang diperiksa terhadap contract.

Pemeriksaan mencakup:

- required output;
- evidence;
- confidence;
- uncertainty;
- version;
- authority;
- policy;
- conflict;
- stale state.

## 8.10 Conflicted

Task memiliki conflict material yang belum diselesaikan.

Task tidak boleh langsung dianggap failed.

## 8.11 Escalated

Task telah dipindahkan ke:

- specialist adjudicator;
- governance reviewer;
- human expert;
- user decision point.

## 8.12 Partially Completed

Sebagian hasil valid tersedia, tetapi sebagian objective belum terpenuhi.

Status ini harus menjelaskan:

- completed scope;
- incomplete scope;
- impact;
- limitations;
- next option.

## 8.13 Completed

Completion criteria terpenuhi dan outcome valid.

## 8.14 Cancelled

Task dihentikan sebelum completion karena:

- user request;
- supersession;
- loss of purpose;
- consent revocation;
- dependency no longer relevant.

## 8.15 Failed

Task tidak dapat memenuhi contract dalam current condition.

Failure harus eksplisit dan classified.

## 8.16 Expired

Task atau result kehilangan relevansi karena time window berakhir.

## 8.17 Superseded

Task digantikan task baru karena:

- goal berubah;
- state berubah;
- input baru material;
- policy berubah;
- decision question berubah.

## 8.18 Terminal States

Terminal state:

- Completed;
- Partially Completed;
- Cancelled;
- Failed;
- Expired;
- Superseded.

Escalated bukan terminal jika review masih berjalan.

## 8.19 State Transition Principles

Transition harus:

- memiliki reason;
- memiliki actor;
- memiliki timestamp;
- mempertahankan prior state;
- memicu event jika material;
- tidak melompati required checks.

---

# 9. Task Intake and Framing

## 9.1 Intake Sources

Task dapat berasal dari:

- user request;
- event;
- scheduled review;
- agent request;
- human reviewer;
- outcome update;
- consent update;
- external authorized system.

## 9.2 Intent Resolution

Orchestrator menentukan intent operasional, bukan jawaban domain.

Contoh:

Request "Saya cocok jadi apa?" dapat menjadi:

- decision framing task;
- current profile retrieval;
- candidate retrieval;
- recommendation task;
- explanation task.

## 9.3 Decision Question

Setiap complex task harus memiliki decision question yang eksplisit.

Contoh:

- Pilihan jurusan mana yang layak dipertimbangkan untuk kondisi pengguna saat ini?
- Career path mana yang sesuai dengan objective lima tahun?
- Apa next learning priority untuk menutup gap menuju role target?

## 9.4 Ambiguity Handling

Orchestrator meminta clarification hanya jika jawaban dapat mengubah:

- routing;
- scope;
- objective;
- audience;
- risk;
- output.

Jika tidak, Orchestrator menggunakan safe bounded assumption dan menandainya.

## 9.5 Risk Classification

Risk mempertimbangkan:

- decision impact;
- reversibility;
- sensitivity;
- external sharing;
- minor status;
- employer use;
- financial consequence;
- privacy;
- fairness;
- uncertainty.

## 9.6 Objective Freeze

Sebelum domain reasoning, objective harus cukup stabil.

Jika objective berubah saat task berjalan:

- task dipause;
- impact dianalisis;
- graph dan context diperbarui;
- affected subtask dapat diulang;
- task lama dapat superseded.

---

# 10. Context Assembly

## 10.1 Tujuan

Context Assembly memilih informasi minimum yang dibutuhkan agent untuk menyelesaikan subtask.

## 10.2 Context Sources

Context dapat berasal dari:

- current user profile;
- active goal;
- assessment artifact;
- relevant memory;
- Career Decision Graph instance;
- Knowledge Object;
- prior recommendation;
- roadmap;
- constraints;
- user preferences;
- consent and audience;
- external evidence;
- task state.

## 10.3 Context Assembly Principles

Context harus:

- relevant;
- current;
- purpose-bound;
- minimal;
- source-linked;
- versioned;
- sensitivity-aware;
- agent-specific.

## 10.4 Context Relevance Test

Setiap item context harus menjawab minimal satu pertanyaan:

- Apakah ini mengubah routing?
- Apakah ini mengubah domain conclusion?
- Apakah ini menjadi hard constraint?
- Apakah ini diperlukan untuk explainability?
- Apakah ini diperlukan untuk authority atau safety?
- Apakah ini diperlukan untuk conflict resolution?

Jika tidak, item tidak dikirim.

## 10.5 Current State First

Untuk immediate decision, current state menjadi default.

Historical state hanya ditambahkan jika material.

## 10.6 Selective Memory Retrieval

Orchestrator tidak membaca seluruh memory.

Orchestrator meminta Memory Agent mengambil memory berdasarkan:

- decision question;
- goal;
- time range;
- memory category;
- relevance threshold;
- sensitivity;
- allowed purpose.

## 10.7 Knowledge Context

Knowledge Agent memberikan:

- candidate data;
- requirement;
- market context;
- AI impact;
- region;
- freshness;
- uncertainty.

Orchestrator tidak mengambil knowledge bebas tanpa source contract.

## 10.8 Context Capsule

Setiap delegation menerima Context Capsule yang dapat mencakup:

- task summary;
- decision question;
- current state reference;
- active goal;
- active constraints;
- relevant history;
- evidence bundle;
- graph subset;
- audience;
- locale;
- time horizon;
- current versions;
- unresolved questions;
- prohibited use.

## 10.9 Sensitive Context

Sensitive context hanya disertakan jika:

- material;
- authorized;
- consented jika diperlukan;
- receiver eligible;
- no less-sensitive substitute exists.

## 10.10 Context Version Lock

Agent harus tahu state version yang digunakan.

Jika state berubah selama execution:

- output ditandai stale candidate;
- Orchestrator menentukan reuse, revalidation, atau rerun.

## 10.11 Context Merge

Ketika context berasal dari beberapa agent, Orchestrator memeriksa:

- duplicate evidence;
- version conflict;
- temporal conflict;
- sensitivity;
- purpose;
- provenance;
- missing links.

## 10.12 Context Exclusion Record

Untuk high-impact task, Orchestrator mencatat kategori context yang sengaja tidak digunakan dan alasannya.

Hal ini membantu audit bias dan privacy.

---

# 11. Routing Strategy

## 11.1 Routing Objectives

Routing mengoptimalkan:

1. correctness;
2. authority;
3. safety;
4. quality;
5. completeness;
6. latency;
7. cost.

Urutan ini tidak boleh dibalik untuk high-impact task.

## 11.2 Single Agent Routing

Digunakan jika:

- satu capability cukup;
- dependency sederhana;
- risk rendah atau sedang;
- tidak perlu cross-validation;
- context kecil;
- output domain tunggal.

## 11.3 Sequential Routing

Digunakan jika output agent pertama menjadi input agent berikutnya.

Contoh konseptual:

- Memory Agent menyiapkan relevant history;
- Recommendation Agent menggunakan history tersebut;
- Report Agent menyusun explanation.

Sequential routing dipakai hanya ketika dependency nyata.

## 11.4 Parallel Routing

Digunakan jika subtask independen.

Contoh:

- Knowledge Agent mengevaluasi market;
- Assessment Agent mengevaluasi current profile;
- Memory Agent mengambil longitudinal context.

Parallel routing mengurangi latency tetapi tidak boleh mengabaikan dependency.

## 11.5 Conditional Routing

Agent dipanggil hanya jika condition terpenuhi.

Contoh:

- Human Reviewer dipanggil jika risk tinggi.
- Memory Agent dipanggil jika historical context material.
- Knowledge refresh dipanggil jika artifact stale.
- Fairness Reviewer dipanggil untuk employer-facing decision.

## 11.6 Fallback Routing

Digunakan ketika primary agent:

- unavailable;
- degraded;
- incompatible;
- timeout;
- failed;
- suspended.

Fallback harus memenuhi minimum authority dan compatibility.

## 11.7 Ensemble Routing

Beberapa agent atau model diminta mengevaluasi subtask yang sama.

Digunakan untuk:

- high-risk validation;
- disagreement detection;
- uncertain domain;
- model calibration.

Ensemble tidak boleh menghasilkan majority vote tanpa evidence analysis.

## 11.8 Specialist Adjudication

Digunakan ketika conflict membutuhkan expertise tertentu.

## 11.9 Human Review Routing

Digunakan jika:

- policy mewajibkan;
- impact tinggi;
- conflict value-based;
- consent ambigu;
- fairness risk;
- external sharing;
- agent authority tidak cukup;
- user meminta.

## 11.10 Routing Selection Factors

Orchestrator mempertimbangkan:

- capability match;
- authority;
- health;
- quality;
- version;
- risk;
- context sensitivity;
- region;
- language;
- latency;
- cost;
- capacity;
- prior failure;
- data residency;
- model diversity;
- conflict of interest.

## 11.11 No Route Condition

Task tidak dijalankan jika:

- tidak ada agent authorized;
- context minimum tidak tersedia;
- consent tidak ada;
- policy melarang;
- risk tidak dapat dikendalikan;
- required human role tidak tersedia.

---

# 12. Delegation Contract

## 12.1 Tujuan

Delegation Contract memberi specialized agent batas kerja yang jelas.

## 12.2 Required Elements

Setiap delegation harus memiliki:

- sender;
- receiver;
- task ID;
- child task ID;
- intent;
- required action;
- decision question;
- scope;
- allowed context;
- prohibited actions;
- evidence references;
- expected output;
- required confidence;
- uncertainty requirement;
- dependency;
- deadline;
- stop condition;
- escalation route;
- artifact ownership.

## 12.3 Authority Ceiling

Child agent tidak boleh memiliki authority lebih luas dari delegation.

## 12.4 No Subdelegation by Default

Agent tidak boleh mendelegasikan kembali task kecuali capability dan contract mengizinkan.

## 12.5 Result Obligation

Agent harus mengembalikan:

- status;
- output;
- evidence;
- confidence;
- uncertainty;
- limitation;
- conflict;
- artifact reference;
- error jika gagal.

## 12.6 Cancellation Obligation

Agent harus berhenti jika menerima cancel atau purpose revoked, kecuali proses penghentian aman membutuhkan langkah penutupan terbatas.

---

# 13. Dependency and Concurrency Management

## 13.1 Dependency Types

- evidence dependency;
- context dependency;
- artifact dependency;
- state dependency;
- approval dependency;
- temporal dependency;
- external dependency;
- agent dependency.

## 13.2 Dependency Graph

Orchestrator memelihara dependency graph konseptual untuk task.

Dependency graph tidak sama dengan Career Decision Graph.

Dependency graph menjelaskan kebutuhan eksekusi. CDG menjelaskan reasoning domain.

## 13.3 Blocking Dependency

Task tidak dapat melanjutkan tanpa dependency.

## 13.4 Non-blocking Dependency

Task dapat melanjutkan dengan limitation.

## 13.5 Concurrency Safety

Parallel task diperbolehkan jika:

- tidak mengubah state yang sama;
- tidak memiliki hidden dependency;
- tidak memiliki authority conflict;
- result dapat digabung secara jelas.

## 13.6 Write Coordination

Perubahan state material harus memiliki satu active writer per object dan version.

## 13.7 Race Condition Handling

Jika dua event mengubah state secara bersamaan:

- current version diperiksa;
- perubahan yang stale ditolak atau direview;
- conflict event dibuat;
- tidak ada silent overwrite.

## 13.8 Circular Dependency

Jika dependency membentuk lingkaran:

- affected task dipause;
- loop didiagnosis;
- dependency diputus melalui narrowed scope, provisional artifact, atau escalation.

---

# 14. Event Bus

## 14.1 Tujuan

Event Bus memungkinkan komponen KarirGPS merespons perubahan tanpa coupling langsung.

## 14.2 Event Properties

Setiap event harus:

- immutable;
- versioned;
- timestamped;
- source-attributed;
- deduplicable;
- scoped;
- purpose-aware;
- sensitivity-classified;
- auditable.

## 14.3 Core User Events

- ProfileUpdated
- GoalChanged
- PreferenceChanged
- ConstraintChanged
- LocationChanged
- EducationStatusChanged
- EmploymentStatusChanged
- ConsentGranted
- ConsentRevoked

## 14.4 Assessment Events

- AssessmentStarted
- AssessmentCompleted
- AssessmentInvalidated
- AssessmentExpired
- AssessmentReinterpreted
- AssessmentConflictDetected

## 14.5 Memory Events

- MemoryCandidateCreated
- MemoryConfirmed
- MemoryUpdated
- MemoryCorrected
- MemorySuperseded
- MemoryExpired
- MemoryRestricted
- MemoryDeleted

## 14.6 Knowledge Events

- KnowledgeObjectUpdated
- CareerRequirementChanged
- LaborMarketUpdated
- AIImpactUpdated
- KnowledgeExpired
- KnowledgeConflictDetected

## 14.7 Recommendation Events

- RecommendationRequested
- RecommendationStarted
- RecommendationGenerated
- RecommendationValidated
- RecommendationAccepted
- RecommendationRejected
- RecommendationExpired
- RecommendationRecalculationRequired

## 14.8 Roadmap Events

- RoadmapRequested
- RoadmapGenerated
- RoadmapActivated
- RoadmapUpdated
- MilestoneCompleted
- MilestoneMissed
- RoadmapPaused
- RoadmapCompleted
- RoadmapReplanningRequired

## 14.9 Evidence Events

- CVUploaded
- CVUpdated
- PortfolioAdded
- CertificateAdded
- CertificateVerified
- ProjectVerified
- ReportCardUploaded
- LinkedInConnected
- GitHubConnected
- FeedbackReceived

## 14.10 Outcome Events

- OutcomeRecorded
- CourseCompleted
- InternshipCompleted
- InterviewCompleted
- OfferReceived
- EmploymentStarted
- EmploymentEnded
- CareerSwitched
- SkillImproved
- GoalAchieved
- DecisionRegretRecorded

## 14.11 Agent Events

- AgentRegistered
- AgentActivated
- AgentDegraded
- AgentTimeout
- AgentFailed
- AgentRecovered
- AgentSuspended
- AgentVersionChanged
- AgentRetired

## 14.12 Task Events

- TaskCreated
- TaskQueued
- TaskStarted
- TaskWaiting
- TaskRetried
- TaskConflicted
- TaskEscalated
- TaskPartiallyCompleted
- TaskCompleted
- TaskCancelled
- TaskFailed
- TaskExpired
- TaskSuperseded

## 14.13 Governance Events

- ConstitutionalWarningRaised
- PrivacyWarningRaised
- FairnessWarningRaised
- HumanReviewRequested
- HumanReviewCompleted
- AuthorityViolationDetected
- IncidentOpened
- IncidentResolved

## 14.14 Event Subscription

Agent hanya boleh menerima event yang sesuai:

- capability;
- authority;
- purpose;
- user scope;
- sensitivity;
- region;
- lifecycle status.

## 14.15 Event Trigger Policy

Event tidak otomatis menjadi task.

Orchestrator mengevaluasi:

- relevansi;
- duplicate;
- state version;
- user preferences;
- consent;
- urgency;
- materiality;
- existing active task.

## 14.16 Event Ordering

Causal order harus dipertahankan pada Context ID yang sama.

## 14.17 Event Replay

Replay digunakan untuk:

- recovery;
- audit;
- rebuilding task state;
- validating sequence.

Replay tidak boleh mengulang side effect.

## 14.18 Lost Event Detection

Lost event dapat dideteksi melalui:

- missing sequence;
- unmatched state version;
- expected confirmation tidak muncul;
- checkpoint mismatch;
- reconciliation process.

## 14.19 Event Storm Control

Orchestrator mencegah event storm melalui:

- deduplication;
- aggregation;
- debounce;
- priority;
- relevance threshold;
- circuit breaker;
- task coalescing.

---

# 15. Result Validation

## 15.1 Validation Layers

### Structural Validation

Apakah output memiliki field yang diwajibkan.

### Contract Validation

Apakah output menjawab expected output.

### Authority Validation

Apakah agent menghasilkan output dalam kewenangannya.

### Context Validation

Apakah output memakai state dan context yang benar.

### Evidence Validation

Apakah provenance, freshness, dan counterevidence tersedia.

### Confidence Validation

Apakah confidence memiliki basis dan scope.

### Policy Validation

Apakah output memenuhi Constitution, privacy, fairness, dan audience rule.

### Domain Validation

Dilakukan oleh specialized validator atau human expert.

## 15.2 Validation Outcome

- Accepted;
- Accepted with Warning;
- Provisional;
- Needs Revision;
- Rejected;
- Requires Adjudication;
- Requires Human Review.

## 15.3 No Domain Rewriting

Jika output domain tidak memenuhi contract, Orchestrator tidak memperbaiki conclusion sendiri.

Orchestrator:

- meminta revision;
- memanggil validator;
- memilih fallback;
- mengeskalasi.

## 15.4 Stale Result Check

Sebelum menerima result, Orchestrator memeriksa:

- current state version;
- goal version;
- consent;
- knowledge version;
- artifact validity.

## 15.5 Partial Result

Partial result dapat diterima jika:

- bagian valid dapat dipisahkan;
- limitation jelas;
- downstream agent diberi warning;
- completion policy mengizinkan.

---

# 16. Conflict Resolution

## 16.1 Orchestrator Role

Orchestrator mendeteksi, mengklasifikasikan, dan mengarahkan penyelesaian conflict.

Orchestrator tidak menentukan conclusion domain berdasarkan preferensinya sendiri.

## 16.2 Conflict Types

- evidence conflict;
- temporal conflict;
- interpretation conflict;
- recommendation conflict;
- version conflict;
- authority conflict;
- objective conflict;
- policy conflict;
- state conflict;
- agent output conflict.

## 16.3 Conflict Detection Signals

Conflict dapat dideteksi dari:

- explicit CONFLICT NOTICE;
- contradictory edge;
- incompatible confidence;
- different current state;
- different objective;
- different knowledge snapshot;
- incompatible recommendation category;
- missing counterevidence;
- version mismatch.

## 16.4 Conflict Classification

Conflict diklasifikasikan:

- low;
- medium;
- high;
- critical.

## 16.5 Resolution Sequence

Orchestrator memeriksa:

1. apakah decision question sama;
2. apakah objective sama;
3. apakah state version sama;
4. apakah evidence source sama;
5. apakah timeframe sama;
6. apakah authority sama;
7. apakah definisi istilah sama;
8. apakah conflict hanya apparent;
9. apakah evidence tambahan dapat menyelesaikan;
10. apakah specialist adjudication diperlukan;
11. apakah human judgment diperlukan.

## 16.6 Apparent Conflict

Dua agent dapat terlihat berbeda karena:

- horizon berbeda;
- scenario berbeda;
- objective berbeda;
- confidence scope berbeda.

Orchestrator menyelaraskan framing sebelum escalation.

## 16.7 Evidence Conflict

Diteruskan ke:

- evidence validator;
- source verifier;
- Memory Agent;
- Knowledge Agent;
- human reviewer jika material.

## 16.8 Interpretation Conflict

Diteruskan ke:

- domain adjudicator;
- independent specialist;
- ensemble review.

## 16.9 Recommendation Conflict

Recommendation Agent atau Decision Synthesis Agent yang authorized diminta menghasilkan:

- scenario comparison;
- tradeoff;
- alternative set;
- unresolved ambiguity.

## 16.10 Authority Conflict

Tindakan dihentikan dan governance review dipanggil.

## 16.11 Conflict Preservation

Jika conflict tidak dapat diselesaikan:

- status tetap unresolved;
- confidence diturunkan secara proporsional;
- user menerima alternatives;
- human decision point dapat dibuat.

## 16.12 Majority Is Not Resolution

Jumlah agent yang setuju tidak menentukan kebenaran jika:

- evidence sama;
- model family sama;
- prompt lineage sama;
- common upstream error;
- authority berbeda.

---

# 17. Retry Policy

## 17.1 Tujuan

Retry digunakan untuk failure yang bersifat sementara atau dapat diperbaiki.

Retry bukan cara menyembunyikan kelemahan reasoning.

## 17.2 Retryable Conditions

- timeout sementara;
- capacity unavailable;
- transient dependency failure;
- incomplete response;
- recoverable validation failure;
- temporary external source failure;
- version negotiation yang dapat diperbaiki;
- corrupted transfer dengan source artifact masih valid.

## 17.3 Non-retryable Conditions

- authority denied;
- consent revoked;
- policy violation;
- unsupported capability;
- invalid decision objective;
- required evidence tidak ada dan tidak dapat diperoleh;
- human judgment required;
- permanent incompatibility;
- agent suspended;
- task no longer relevant.

## 17.4 Retry Preconditions

Sebelum retry, harus ada minimal satu perubahan:

- waktu;
- agent;
- context;
- dependency;
- version;
- scope;
- validation instruction;
- capacity.

Retry identik tanpa perubahan condition tidak diperbolehkan.

## 17.5 Retry Budget

Retry dibatasi oleh:

- task risk;
- deadline;
- cost;
- side effect;
- user experience;
- failure type.

## 17.6 Backoff Principle

Retry tidak dilakukan terus-menerus dalam interval yang sama.

## 17.7 Retry and Side Effects

Jika invocation sebelumnya mungkin telah melakukan side effect:

- confirmation diperiksa;
- idempotency key digunakan secara konseptual;
- duplicate change dicegah;
- human review dapat diperlukan.

## 17.8 Fallback Before Repeated Retry

Setelah retry tertentu, Orchestrator mempertimbangkan:

- fallback agent;
- scope reduction;
- partial completion;
- human review.

## 17.9 Stop Conditions

Retry dihentikan ketika:

- budget habis;
- deadline habis;
- risk meningkat;
- task superseded;
- state berubah material;
- repeated same failure;
- no authorized fallback;
- human review diperlukan.

---

# 18. Context Window Strategy

## 18.1 Tujuan

Context Window Strategy menjaga agent menerima informasi cukup tanpa overload, leakage, atau distraction.

## 18.2 Context Layers

### Layer 1: Task Core

Selalu tersedia:

- task objective;
- required action;
- expected output;
- scope;
- stop condition.

### Layer 2: Current Decision State

- current goal;
- active constraints;
- current profile;
- current graph nodes;
- active artifact versions.

### Layer 3: Material Evidence

Evidence yang langsung memengaruhi subtask.

### Layer 4: Relevant History

Historical memory yang material.

### Layer 5: Supporting Detail

Hanya diminta jika agent memerlukan elaboration.

## 18.3 Progressive Disclosure

Agent menerima core context terlebih dahulu.

Detail tambahan diberikan melalui bounded retrieval jika diperlukan.

## 18.4 Context Summarization

Context lama dapat diringkas menjadi:

- stable facts;
- active changes;
- unresolved conflict;
- prior decisions;
- outcome;
- reference to source.

## 18.5 Summary Provenance

Setiap summary harus memiliki:

- source references;
- version;
- summarizer;
- omissions;
- confidence;
- effective time.

## 18.6 Context Ranking

Informasi diprioritaskan berdasarkan:

1. constitutional and authority relevance;
2. decision objective;
3. hard constraints;
4. current state;
5. evidence materiality;
6. unresolved conflict;
7. historical relevance;
8. explanatory value.

## 18.7 Token or Capacity Pressure

Jika context melebihi kapasitas:

- hapus duplicate;
- gunakan references;
- ringkas low-priority history;
- pecah task;
- gunakan specialist retrieval;
- jangan menghapus constraint atau counterevidence material.

## 18.8 Context Isolation

Context antar-user, audience, dan purpose harus terisolasi.

## 18.9 Context Cache Validity

Context yang digunakan ulang harus diperiksa terhadap:

- state version;
- consent;
- goal;
- freshness;
- task purpose;
- audience.

## 18.10 Context Poisoning Protection

Content dari CV, web, email, atau external source diperlakukan sebagai data.

Instruksi di dalam content tidak boleh mengubah Orchestrator authority atau protocol.

---

# 19. Completion Policy

## 19.1 Completion Is Contract-based

Task selesai jika completion criteria terpenuhi.

Task tidak selesai hanya karena seluruh agent telah mengirim response.

## 19.2 Minimum Completion Conditions

Untuk task material:

- required subtask selesai atau ditangani;
- output valid;
- current state masih sesuai;
- evidence lineage lengkap;
- confidence tersedia;
- uncertainty tersedia;
- conflict material resolved atau disclosed;
- policy checks lulus;
- human approval tersedia jika wajib;
- artifact version dibuat;
- completion event siap dipublikasikan.

## 19.3 Completion Classes

### Full Completion

Seluruh objective terpenuhi.

### Conditional Completion

Output valid hanya pada scenario atau condition tertentu.

### Partial Completion

Sebagian objective terpenuhi.

### Deferred Completion

Output final menunggu event atau date tertentu.

### Human-decided Completion

Human reviewer memberikan keputusan yang dibutuhkan.

## 19.4 Completion Quality Gate

Completion gate memeriksa:

- relevance;
- completeness;
- consistency;
- freshness;
- explainability;
- authority;
- privacy;
- fairness;
- actionability.

## 19.5 Non-completion Conditions

Task tidak boleh Completed jika:

- state version stale;
- mandatory conflict disembunyikan;
- required human review belum selesai;
- evidence lineage hilang;
- output dibuat oleh agent tidak authorized;
- completion hanya berupa empty result;
- side effect belum terkonfirmasi;
- policy violation terbuka.

## 19.6 Completion Artifact

Task material menghasilkan completion artifact atau reference yang mencakup:

- outcome;
- status;
- contributing agent;
- versions;
- limitations;
- confidence;
- unresolved items;
- next action;
- review trigger.

## 19.7 Completion and User Agency

Untuk recommendation task, completion berarti decision support tersedia.

Completion tidak berarti pengguna telah membuat keputusan.

---

# 20. Observability and Auditability

## 20.1 Tujuan

Observability memungkinkan operator dan reviewer mengetahui kondisi sistem tanpa membuka private chain of thought.

## 20.2 Observable Objects

- task;
- subtask;
- message;
- event;
- agent;
- context capsule;
- evidence bundle;
- artifact;
- validation;
- conflict;
- retry;
- escalation;
- completion;
- failure.

## 20.3 Operational Trace

Menjelaskan:

- status;
- timing;
- dependency;
- retry;
- route;
- health;
- capacity.

## 20.4 Decision Coordination Trace

Menjelaskan:

- decision question;
- objective;
- agent selected;
- selection reason;
- context provided;
- output contract;
- conflict;
- final validation.

## 20.5 Governance Trace

Menjelaskan:

- authority check;
- privacy check;
- consent check;
- fairness check;
- constitutional check;
- human review.

## 20.6 No Chain of Thought Requirement

Audit tidak membutuhkan private token-level reasoning.

Audit membutuhkan:

- evidence references;
- decision factors;
- rules applied;
- alternatives considered;
- conflict;
- confidence;
- outcome.

## 20.7 Key Metrics

### Task Completion Rate

Proporsi task yang mencapai terminal state yang benar.

### Valid Completion Rate

Proporsi completed task yang benar-benar memenuhi contract.

### Routing Accuracy

Kesesuaian agent dengan capability dan authority.

### Context Precision

Proporsi context yang material.

### Context Recall

Kemampuan menyertakan informasi penting.

### Duplicate Invocation Rate

Frekuensi invocation yang tidak diperlukan.

### Retry Success Rate

Proporsi retry yang pulih.

### Fallback Success Rate

Kualitas fallback.

### Conflict Detection Rate

Kemampuan menemukan conflict material.

### Escalation Precision

Ketepatan human atau specialist escalation.

### Escalation Recall

Kemampuan tidak melewatkan escalation wajib.

### Stale State Error Rate

Frekuensi output memakai state lama.

### Authority Violation Rate

Frekuensi agent bekerja di luar authority.

### Privacy Violation Rate

Frekuensi context keluar dari purpose.

### Completion Latency

Waktu dari Created ke terminal state.

### Cost per Valid Outcome

Resource per hasil yang lolos quality gate.

### Human Review Burden

Beban review yang diperlukan.

## 20.8 Health Dashboard Concepts

Dashboard konseptual harus dapat menunjukkan:

- active tasks;
- blocked tasks;
- failed tasks;
- conflict queue;
- human review queue;
- agent health;
- event lag;
- stale context;
- retry storm;
- authority incident;
- privacy incident.

## 20.9 Audit Questions

Sistem harus dapat menjawab:

- Mengapa agent ini dipilih?
- Context apa yang diberikan?
- Context apa yang tidak diberikan?
- Mengapa routing dibuat parallel?
- Mengapa task diulang?
- Mengapa fallback dipakai?
- Apa sumber conflict?
- Mengapa human review dipanggil?
- Siapa menyatakan task selesai?
- Policy check apa yang dilakukan?
- Apakah result menggunakan state terbaru?

---

# 21. Human Oversight

## 21.1 Prinsip

Human oversight adalah bagian native dari architecture, bukan exception.

## 21.2 Human Roles

- user;
- parent or guardian;
- counselor;
- career expert;
- school reviewer;
- domain expert;
- privacy reviewer;
- fairness reviewer;
- governance reviewer;
- employer reviewer;
- system operator.

Setiap role memiliki authority berbeda.

## 21.3 Mandatory Human Review

Human review wajib jika:

- high-impact employer decision;
- conflict menyangkut nilai personal;
- sensitive inference;
- consent ambigu;
- legal atau regulatory requirement;
- fairness concern tinggi;
- no authorized agent;
- critical policy exception;
- irreversible external action;
- user meminta review manusia.

## 21.4 Human Review Package

Orchestrator menyiapkan:

- issue summary;
- decision required;
- relevant evidence;
- counterevidence;
- current state;
- conflict;
- options;
- risk;
- prior attempts;
- recommended coordination action;
- prohibited action;
- deadline;
- privacy boundary.

## 21.5 No Context Dump

Reviewer tidak menerima seluruh history.

## 21.6 Human Decision Recording

Human decision harus memiliki:

- actor;
- authority;
- scope;
- reason;
- effective time;
- affected artifact;
- follow-up;
- conflict of interest jika relevan.

## 21.7 User Decision Point

Untuk tradeoff personal, Orchestrator dapat menghentikan orchestration dan mengembalikan pilihan kepada user.

## 21.8 Human Override

Human override boleh:

- menerima;
- menolak;
- mempersempit;
- meminta revisi;
- memilih scenario;
- mengubah objective;
- menghentikan task.

Override tidak boleh melanggar hak pengguna atau policy yang lebih tinggi.

---

# 22. Integration Architecture

## 22.1 AI Constitution

AI Constitution menjadi policy root.

Orchestrator menerapkan:

- user agency;
- evidence proportionality;
- privacy;
- fairness;
- explainability;
- failure behavior;
- human oversight;
- role separation.

## 22.2 AI Agent Communication Protocol

ACP menetapkan:

- message contract;
- task semantics;
- event semantics;
- context capsule;
- evidence bundle;
- trace;
- escalation message;
- lifecycle control.

Orchestrator wajib menggunakan ACP untuk seluruh komunikasi material.

## 22.3 Career Decision Graph

CDG menentukan reasoning structure.

Orchestrator:

- membentuk Decision Graph Instance request;
- memastikan agent memakai graph subset yang relevan;
- menjaga decision question;
- memeriksa node dan edge references tersedia;
- tidak membuat domain edge sendiri;
- meminta Recommendation Agent atau Decision Agent melakukan synthesis.

## 22.4 Knowledge Engine

Orchestrator meminta Knowledge Agent:

- mengambil domain knowledge;
- memeriksa freshness;
- menyatakan region;
- menyatakan uncertainty;
- menyediakan candidate and requirement.

Orchestrator tidak menafsirkan knowledge.

## 22.5 Assessment Engine

Orchestrator:

- meminta assessment artifact;
- memeriksa version dan validity;
- tidak menafsirkan score;
- memanggil Assessment Agent jika interpretation diperlukan.

## 22.6 Memory Engine

Orchestrator:

- meminta selective retrieval;
- tidak membaca seluruh memory;
- memastikan purpose dan sensitivity;
- memeriksa current versus historical state;
- tidak mengubah memory tanpa Memory Agent.

## 22.7 Recommendation Engine

Recommendation Agent menerima:

- decision question;
- graph subset;
- evidence bundle;
- objectives;
- constraints;
- knowledge;
- current state.

Orchestrator memvalidasi contract hasil, bukan ranking content.

## 22.8 Roadmap Engine

Roadmap Agent menerima:

- chosen target atau scenario;
- gap;
- constraints;
- horizon;
- learning resources;
- review trigger.

## 22.9 Reflection Engine

Reflection Agent menerima:

- relevant timeline;
- outcome;
- prior expectation;
- current reflection context.

## 22.10 Report Engine

Report Agent menerima approved artifacts dan audience rules.

Report Agent tidak boleh menciptakan conclusion baru.

## 22.11 Specialized Agents

Setiap specialized agent harus:

- registered;
- versioned;
- scoped;
- authorized;
- ACP-compliant;
- auditable;
- replaceable.

## 22.12 External Systems

External source hanya terhubung melalui adapter yang:

- memvalidasi source;
- membatasi data;
- menetapkan purpose;
- mempertahankan provenance;
- mencegah direct state mutation.

---

# 23. Failure Modes and Responses

## 23.1 Agent Timeout

### Risiko

Task tertahan atau result tidak tersedia.

### Response

- tandai timeout;
- periksa apakah agent masih bekerja;
- gunakan retry jika aman;
- gunakan fallback;
- gunakan existing valid artifact;
- partial completion;
- escalation.

## 23.2 Agent Failure

### Risiko

Subtask tidak selesai.

### Response

- classify failure;
- preserve partial output;
- isolate failure;
- retry jika recoverable;
- fallback;
- specialist review;
- fail explicitly jika tidak dapat dipulihkan.

## 23.3 Insufficient Data

### Risiko

Recommendation palsu atau terlalu yakin.

### Response

- identify missing evidence;
- request material clarification;
- use scenario;
- lower confidence;
- output Explore First;
- defer;
- human review jika impact tinggi.

## 23.4 Lost Event

### Risiko

State tidak sinkron.

### Response

- detect sequence gap;
- reconcile checkpoint;
- replay event;
- compare state version;
- block side effect sampai state valid.

## 23.5 Duplicate Event

### Risiko

Duplicate task atau side effect.

### Response

- deduplicate;
- acknowledge duplicate;
- preserve one valid outcome;
- audit duplicate delivery.

## 23.6 Corrupted Context

### Risiko

Agent menggunakan data salah.

### Response

- reject context;
- rebuild Context Capsule;
- verify source and version;
- invalidate affected output;
- rerun if material;
- incident review jika leakage.

## 23.7 Stale Context

### Risiko

Recommendation tidak sesuai current state.

### Response

- compare version;
- revalidate;
- rerun affected subtask;
- mark old artifact superseded.

## 23.8 Agent Conflict

### Risiko

Output akhir tidak konsisten.

### Response

- classify conflict;
- align framing;
- compare evidence;
- call adjudicator;
- preserve alternatives;
- human review.

## 23.9 Registry Failure

### Risiko

Agent tidak dapat dipilih secara aman.

### Response

- use approved cached registry if valid;
- block high-risk task;
- degraded operation for low-risk task;
- incident escalation.

## 23.10 Orchestrator Failure

### Risiko

Task kehilangan coordinator.

### Response

- recover from checkpoint;
- verify ownership;
- elect or assign replacement coordinator;
- prevent dual ownership;
- resume only after state validation.

## 23.11 Infinite Loop

### Risiko

Agent saling memanggil tanpa progress.

### Response

- enforce hop limit;
- detect repeated state;
- stop child tasks;
- inspect dependency;
- escalate.

## 23.12 Retry Storm

### Risiko

Resource exhaustion dan duplicate output.

### Response

- circuit breaker;
- backoff;
- task aggregation;
- agent health downgrade;
- manual review.

## 23.13 Context Leakage

### Risiko

Privacy violation.

### Response

- stop affected task;
- revoke context;
- isolate recipient;
- incident process;
- notify governance;
- reassess artifacts.

## 23.14 Authority Violation

### Risiko

Unauthorized action atau conclusion.

### Response

- reject output;
- suspend action;
- log critical incident;
- review registry;
- potentially suspend agent.

## 23.15 Model Drift

### Risiko

Agent masih healthy tetapi kualitas menurun.

### Response

- quality downgrade;
- restrict risk class;
- parallel validation;
- fallback;
- recalibration;
- suspension.

## 23.16 Knowledge Staleness

### Risiko

Outdated recommendation.

### Response

- request refresh;
- lower confidence;
- mark provisional;
- prevent high-impact completion jika freshness mandatory.

## 23.17 Human Review Delay

### Risiko

Task tertahan.

### Response

- notify;
- reprioritize;
- partial result jika aman;
- alternate authorized reviewer;
- expiration if decision window closes.

## 23.18 Cost Exhaustion

### Risiko

Task tidak dapat menyelesaikan seluruh plan.

### Response

- prioritize critical subtask;
- reduce redundancy;
- reuse valid artifact;
- narrow scope;
- partial completion;
- never remove safety checks.

## 23.19 Conflicting State Updates

### Risiko

Memory atau goal overwritten.

### Response

- version check;
- single writer rule;
- conflict event;
- human or Memory Agent resolution.

## 23.20 External AI Untrusted Output

### Risiko

Fabrication, policy conflict, atau injection.

### Response

- treat output as unverified;
- validate;
- restrict state change;
- require provenance;
- discard if unsafe.

---

# 24. Reliability and Distributed Coordination

## 24.1 Logical Ownership Lease

Task ownership harus memiliki batas waktu dan renewal concept agar failover dapat terjadi tanpa dual coordinator.

## 24.2 Checkpoint

Checkpoint mencatat:

- lifecycle status;
- completed subtask;
- pending dependency;
- active agent;
- context version;
- artifact references;
- retry count;
- escalation state.

## 24.3 Recovery

Replacement coordinator harus:

1. memverifikasi prior owner tidak aktif;
2. membaca checkpoint;
3. memeriksa current state;
4. memeriksa event after checkpoint;
5. mendeteksi side effect;
6. melanjutkan dari safe boundary.

## 24.4 Idempotency

Setiap material action memiliki identity yang dapat digunakan untuk mencegah pengulangan.

## 24.5 At-least-once Communication Assumption

Message atau event dapat diterima lebih dari sekali.

Orchestrator harus menghasilkan one valid material outcome.

## 24.6 Partial Ordering

Event yang saling bergantung harus diproses berdasarkan causation dan version, bukan waktu kedatangan saja.

## 24.7 Backpressure

Jika kapasitas menurun:

- high-risk and high-priority task didahulukan;
- non-urgent task di-queue;
- duplicate task digabung;
- low-value event diringkas;
- human review queue diprioritaskan berdasarkan impact.

## 24.8 Circuit Breaker

Agent yang gagal berulang tidak terus dipanggil.

## 24.9 Bulkhead Isolation

Failure satu agent, model, region, atau tenant tidak boleh merusak seluruh Orchestrator.

## 24.10 Graceful Shutdown

Sebelum coordinator berhenti:

- task state dicheckpoint;
- new delegation dihentikan;
- active side effect diperiksa;
- ownership dilepas secara sah.

---

# 25. Priority, Budget, and Resource Policy

## 25.1 Priority Factors

Priority mempertimbangkan:

- user urgency;
- deadline;
- impact;
- risk;
- dependency;
- fairness;
- age of task;
- human review SLA;
- event criticality.

## 25.2 Priority Abuse Prevention

Sender tidak boleh menjadikan semua task high priority.

Orchestrator dapat menyesuaikan priority.

## 25.3 Task Budget

Budget dapat mencakup:

- maximum agent invocation;
- maximum parallelism;
- maximum retry;
- time;
- cost;
- context size;
- human review effort.

## 25.4 Budget Protection

Safety, privacy, dan mandatory validation tidak boleh dihapus untuk menghemat budget.

## 25.5 Adaptive Budget

High uncertainty atau conflict dapat memerlukan budget tambahan jika:

- decision impact tinggi;
- evidence dapat diperoleh;
- user menyetujui;
- governance mengizinkan.

## 25.6 Early Stop

Task dapat berhenti lebih awal jika:

- answer sudah stabil;
- tambahan agent tidak mengubah outcome;
- uncertainty tersisa tidak material;
- valid artifact tersedia.

---

# 26. Security and Privacy Controls

## 26.1 Authentication

Semua actor dan agent memiliki identity terverifikasi.

## 26.2 Authorization

Setiap delegation diperiksa terhadap authority.

## 26.3 Least Privilege

Agent hanya menerima data dan action permission minimum.

## 26.4 Purpose Limitation

Purpose dibawa dari parent ke child task.

## 26.5 Audience Isolation

User-facing, school-facing, parent-facing, dan employer-facing task dipisahkan.

## 26.6 Sensitive Data Routing

Sensitive data tidak dikirim melalui broad event payload.

## 26.7 Consent Change Handling

ConsentRevoked memicu:

- review active task;
- stop unauthorized processing;
- context revocation;
- artifact restriction;
- audit.

## 26.8 External AI Boundary

External AI:

- tidak menjadi task owner;
- tidak mengubah state langsung;
- menerima minimized context;
- output dianggap unverified;
- harus melalui validator.

## 26.9 Prompt Injection Resistance

Content instruction tidak menjadi orchestration command.

## 26.10 Secret and Internal Policy Protection

Agent hanya menerima policy detail yang dibutuhkan.

## 26.11 Data Residency and Jurisdiction

Routing dapat dibatasi berdasarkan:

- region;
- institution;
- legal context;
- data residency;
- user consent.

---

# 27. Orchestration Decision Record

## 27.1 Tujuan

Orchestration Decision Record menjelaskan keputusan koordinasi material.

## 27.2 Required Content

- task;
- decision question;
- risk;
- agents considered;
- agent selected;
- selection reason;
- context scope;
- routing pattern;
- dependencies;
- validation performed;
- conflicts;
- retries;
- fallback;
- escalation;
- completion reason;
- policy checks;
- artifact references.

## 27.3 What It Does Not Contain

Record tidak harus memuat private chain of thought.

## 27.4 Correction

Record lama tidak diubah diam-diam.

Correction menghasilkan version baru.

---

# 28. Orchestrator Governance

## 28.1 Ownership

Harus ada governance owner untuk:

- architecture;
- registry;
- routing policy;
- retry policy;
- human oversight;
- incident response;
- versioning;
- conformance.

## 28.2 Policy Versioning

Routing dan completion policy harus versioned.

## 28.3 Change Review

Perubahan material memerlukan review dari:

- AI architecture;
- AI ethics;
- security;
- privacy;
- domain;
- reliability;
- product;
- human-centered design.

## 28.4 Exception

Exception harus:

- scoped;
- time-bound;
- approved;
- auditable;
- reversible;
- tidak melanggar constitutional invariant.

## 28.5 Conformance Testing

Orchestrator harus diuji untuk:

- correct routing;
- authority enforcement;
- context minimization;
- stale state detection;
- retry safety;
- duplicate handling;
- conflict handling;
- completion;
- human escalation;
- failover;
- audit completeness.

## 28.6 Red Team Scenarios

Pengujian harus mencakup:

- malicious agent output;
- conflicting consent;
- stale memory;
- duplicate completion;
- registry poisoning;
- prompt injection in CV;
- external AI hallucination;
- event storm;
- split-brain coordinator;
- unauthorized recruiter access;
- hidden conflict;
- false confidence consensus.

---

# 29. Future Expansion

## 29.1 Multi-model AI

Orchestrator dapat memilih model berbeda berdasarkan:

- capability;
- risk;
- language;
- cost;
- latency;
- calibration;
- context capacity.

Model diversity harus dicatat agar consensus palsu dapat dideteksi.

## 29.2 External AI

External AI bergabung melalui controlled adapter dan tidak menerima full authority.

## 29.3 Human Experts

Human expert dapat diregistrasikan sebagai review actor dengan:

- domain;
- authority;
- availability;
- conflict of interest;
- audience;
- privacy clearance.

## 29.4 Company AI

Company AI hanya menerima employer-purpose data yang sah.

Company AI tidak dapat mengakses private Career Partner memory.

## 29.5 School AI

School AI dapat berkolaborasi untuk:

- learning support;
- academic planning;
- counselor review.

Akses harus berdasarkan role dan consent.

## 29.6 Parent or Guardian AI

Parent AI harus menghormati:

- user age;
- legal requirement;
- confidentiality;
- user agency;
- best interest.

## 29.7 Mentor AI

Mentor AI memberikan perspective, bukan authoritative fact.

## 29.8 Federated Orchestration

KarirGPS dapat berinteraksi dengan Orchestrator eksternal.

Federation memerlukan:

- trust boundary;
- identity;
- authority;
- task ownership;
- data minimization;
- contract compatibility;
- audit;
- dispute handling.

## 29.9 Regional Orchestrators

Regional Orchestrator dapat menangani:

- language;
- education system;
- labor market;
- regulation;
- data residency.

Logical task ownership tetap tunggal.

## 29.10 Autonomous Long-running Career Agent

Untuk agent jangka panjang, Orchestrator harus menetapkan:

- objective;
- allowed events;
- action boundary;
- time horizon;
- budget;
- check-in;
- human stop control;
- memory use;
- expiration.

## 29.11 Marketplace of Specialized Agents

Agent pihak ketiga hanya dapat masuk setelah:

- certification;
- capability verification;
- privacy review;
- conformance testing;
- monitoring;
- revocation capability.

## 29.12 Institutional Collaboration

Orchestrator dapat mendukung kolaborasi:

- school;
- university;
- training provider;
- employer;
- government;
- scholarship provider.

Data boundary tetap dipertahankan.

---

# 30. Evaluation Framework

## 30.1 Routing Quality

Apakah agent yang dipilih benar.

## 30.2 Coordination Efficiency

Apakah agent invocation proporsional.

## 30.3 Context Quality

Apakah context cukup, relevan, dan tidak berlebihan.

## 30.4 Contract Compliance

Apakah input dan output memenuhi ACP.

## 30.5 Authority Compliance

Apakah tidak ada privilege escalation.

## 30.6 Conflict Quality

Apakah conflict terdeteksi dan diselesaikan secara tepat.

## 30.7 Recovery Quality

Apakah failure dapat dipulihkan tanpa duplicate outcome.

## 30.8 Completion Accuracy

Apakah task hanya dinyatakan selesai ketika criteria terpenuhi.

## 30.9 Human Oversight Quality

Apakah manusia dilibatkan secara tepat, tidak terlalu cepat dan tidak terlambat.

## 30.10 Auditability

Apakah keputusan koordinasi dapat direkonstruksi.

## 30.11 Scalability

Apakah concurrency meningkat tanpa kehilangan task ownership.

## 30.12 Modularity

Apakah agent dapat diganti tanpa mengubah semantic core.

## 30.13 Privacy and Fairness

Apakah context dan routing menghormati policy.

## 30.14 Longitudinal Consistency

Apakah task memakai current state dan memory secara benar.

## 30.15 User Experience

Apakah coordination menghasilkan respons yang konsisten, tidak berulang, dan tidak membebani user dengan pertanyaan yang tidak perlu.

---

# 31. Success Criteria

AI Orchestrator dianggap berhasil ketika:

## 31.1 Correct Agent Selection

Setiap subtask diarahkan ke agent yang capable dan authorized.

## 31.2 Domain Separation

Orchestrator tidak mengambil alih reasoning domain.

## 31.3 Single Accountable Ownership

Setiap task memiliki satu logical coordinator.

## 31.4 Context Discipline

Agent menerima context minimum yang cukup.

## 31.5 Reliable Lifecycle

Task dapat dilacak dari Created hingga terminal state.

## 31.6 Conflict Visibility

Perbedaan agent tidak disembunyikan.

## 31.7 Safe Retry and Recovery

Retry tidak menghasilkan duplicate outcome.

## 31.8 Valid Completion

Completion terjadi berdasarkan contract.

## 31.9 Human Control

Human review tersedia dan digunakan pada kondisi yang tepat.

## 31.10 Auditability

Seluruh coordination decision material dapat dijelaskan.

## 31.11 Constitutional Compliance

Orchestration mempertahankan:

- user agency;
- privacy;
- fairness;
- evidence;
- uncertainty;
- explainability;
- role separation.

## 31.12 Modular Growth

Agent dan model baru dapat ditambahkan melalui registry tanpa mengubah architecture core.

## 31.13 Distributed Resilience

Failure coordinator, agent, event, atau region tidak menyebabkan kehilangan task state atau dual ownership.

## 31.14 Outcome Quality

Orchestration meningkatkan:

- consistency;
- relevance;
- completeness;
- trust;
- recovery;
- scalability.

---

# 32. Mandatory Orchestration Checklist

Sebelum task dijalankan:

- [ ] Requester dan user context valid.
- [ ] Intent dipahami.
- [ ] Decision question jelas.
- [ ] Objective dan audience jelas.
- [ ] Risk telah diklasifikasikan.
- [ ] Consent dan purpose telah diperiksa.
- [ ] Task owner telah ditetapkan.
- [ ] Current state version tersedia.
- [ ] Required capability telah diidentifikasi.
- [ ] Agent Registry telah diperiksa.
- [ ] Capability dan authority agent sesuai.
- [ ] Routing pattern memiliki alasan.
- [ ] Context Capsule minimum tersedia.
- [ ] Dependencies telah diidentifikasi.
- [ ] Completion criteria tersedia.
- [ ] Stop condition tersedia.
- [ ] Retry dan escalation route tersedia.

Sebelum delegation dikirim:

- [ ] Child scope tidak lebih luas.
- [ ] Purpose dipertahankan.
- [ ] Sensitive context diminimalkan.
- [ ] Expected output jelas.
- [ ] Prohibited action jelas.
- [ ] Version compatibility lulus.
- [ ] Deadline dan status return jelas.

Sebelum result diterima:

- [ ] Agent identity dan version valid.
- [ ] Output sesuai contract.
- [ ] Evidence lineage tersedia.
- [ ] Confidence dan uncertainty tersedia.
- [ ] State belum stale.
- [ ] Conflict telah diperiksa.
- [ ] Authority tidak dilampaui.
- [ ] Policy checks lulus.
- [ ] Domain validation dilakukan jika wajib.

Sebelum task diselesaikan:

- [ ] Completion criteria terpenuhi.
- [ ] Mandatory subtask selesai.
- [ ] Partial scope dinyatakan jika ada.
- [ ] Conflict resolved atau disclosed.
- [ ] Human review selesai jika wajib.
- [ ] Side effect terkonfirmasi.
- [ ] Completion artifact tersedia.
- [ ] Audit record lengkap.
- [ ] Completion event dipublikasikan.
- [ ] Review trigger tersedia jika relevan.

---

# 33. Closing Principle

AI Orchestrator adalah pengatur kerja kecerdasan KarirGPS, bukan sumber kecerdasan domain.

Nilai Orchestrator tidak berasal dari kemampuannya menjawab semua pertanyaan.

Nilainya berasal dari kemampuannya memastikan bahwa:

- pertanyaan dibingkai dengan benar;
- agent yang tepat dipilih;
- context yang tepat diberikan;
- authority dijaga;
- evidence tidak hilang;
- conflict tidak disembunyikan;
- failure tidak menjadi kekacauan;
- manusia dipanggil ketika diperlukan;
- task berhenti pada waktu yang tepat;
- completion dapat dipertanggungjawabkan.

Orchestrator yang baik tidak membuat specialized agent kehilangan otonomi domain.

Orchestrator yang baik membuat seluruh agent bekerja sebagai satu Career Intelligence Operating System yang konsisten, modular, aman, explainable, dan scalable.

AI Orchestrator Architecture V1 menjadi fondasi control layer KarirGPS agar sistem dapat berkembang dari beberapa agent internal menjadi ekosistem distributed intelligence yang melibatkan multi-model AI, external AI, institusi, dan manusia tanpa kehilangan user agency, governance, atau accountability.
