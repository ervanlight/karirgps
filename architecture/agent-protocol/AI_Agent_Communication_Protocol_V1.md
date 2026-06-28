# AI Agent Communication Protocol V1

**Product:** KarirGPS  
**Document Type:** Multi-Agent Communication and Coordination Architecture Blueprint  
**Version:** 1.0  
**Status:** Protocol Design Baseline  
**Governing Document:** `governance/ai-constitution/AI_Constitution_V1.md`  
**Applies To:** Seluruh AI Agent, orchestrator, engine, human reviewer, dan external intelligence adapter KarirGPS  
**Target Path:** `architecture/agent-protocol/AI_Agent_Communication_Protocol_V1.md`

---

## 0. Status dan Kedudukan Protocol

AI Agent Communication Protocol V1, selanjutnya disebut ACP, adalah standar resmi komunikasi internal seluruh komponen kecerdasan KarirGPS.

ACP mengatur cara agent:

- mengenali identitas dan kewenangan satu sama lain;
- mengirim permintaan;
- menyampaikan evidence;
- meneruskan konteks;
- melaporkan confidence dan uncertainty;
- menyatakan hasil;
- mengelola conflict;
- melakukan escalation;
- memublikasikan event;
- mencatat reasoning trace;
- menghentikan proses secara aman;
- berinteraksi dengan manusia dan sistem eksternal.

ACP tunduk pada AI Constitution V1. Protocol tidak dapat memberi kewenangan yang dilarang oleh konstitusi. Pesan yang valid secara struktural tetap dianggap tidak sah jika melanggar prinsip konstitusional, privacy scope, purpose limitation, fairness, atau user agency.

### 0.1 Hierarki Kepatuhan

Urutan kepatuhan seluruh komunikasi agent adalah:

1. keselamatan, hak pengguna, dan hukum yang berlaku;
2. consent, privacy, purpose limitation, dan data sensitivity;
3. AI Constitution V1;
4. authority dan scope agent;
5. aturan ACP;
6. aturan domain pada engine terkait;
7. instruksi task saat ini;
8. optimasi efisiensi, kecepatan, atau biaya.

Tidak ada agent yang boleh menggunakan efisiensi operasional sebagai alasan untuk melewati authority check, constitutional check, evidence check, atau privacy check.

### 0.2 Sifat Normatif

ACP membedakan tiga kelas aturan:

- **Protocol invariant**  
  Aturan yang wajib berlaku pada seluruh message dan seluruh agent.

- **Required behavior**  
  Tindakan yang wajib dilakukan jika kondisi tertentu muncul.

- **Recommended pattern**  
  Pola yang disarankan untuk meningkatkan reliabilitas, tetapi dapat disesuaikan selama tidak melanggar invariant.

### 0.3 Prinsip Akuntabilitas

Setiap agent tetap bertanggung jawab atas pesan yang dibuatnya.

Agent tidak boleh:

- mengirim kesimpulan yang tidak dapat dipertanggungjawabkan lalu menyerahkan seluruh tanggung jawab kepada Orchestrator;
- menyamarkan inference sebagai fakta;
- menggunakan confidence agent lain tanpa memeriksa ruang lingkupnya;
- menghapus conflict agar output terlihat konsisten;
- memperluas tujuan penggunaan data saat meneruskan context;
- menganggap pesan dari agent lain otomatis benar.

Orchestrator bertanggung jawab atas koordinasi, bukan atas penghapusan tanggung jawab masing-masing agent.

---

# 1. Executive Summary

## 1.1 Apa Itu ACP

ACP adalah bahasa komunikasi konseptual yang memungkinkan seluruh AI Agent KarirGPS bekerja sebagai satu Career Intelligence Operating System.

Protocol ini mendefinisikan:

- siapa yang mengirim pesan;
- kepada siapa pesan ditujukan;
- untuk tujuan apa pesan dibuat;
- konteks apa yang boleh dibawa;
- evidence apa yang mendukung isi pesan;
- seberapa yakin agent terhadap kesimpulannya;
- tindakan apa yang diminta;
- batas kewenangan apa yang berlaku;
- bagaimana respons dikorelasikan;
- bagaimana conflict dan kegagalan ditangani;
- bagaimana seluruh proses dapat diaudit.

ACP bukan sekadar format pesan. ACP adalah kontrak semantik, kewenangan, provenance, dan tanggung jawab antar-agent.

## 1.2 Mengapa ACP Diperlukan

Tanpa protocol bersama, agent dapat menghasilkan komunikasi yang terlihat benar tetapi tidak dapat dipercaya.

Contoh risiko tanpa ACP:

- Assessment Agent mengirim skor tanpa menjelaskan sumber dan batas interpretasi.
- Recommendation Agent menerima memory lama tanpa mengetahui bahwa memory tersebut sudah superseded.
- Roadmap Agent membuat rencana berdasarkan goal yang tidak lagi aktif.
- Report Agent menyajikan inference seolah-olah fakta.
- Reflection Agent menggunakan kegagalan lama di luar tujuan yang disetujui.
- Knowledge Agent mengirim data pasar kerja tanpa freshness.
- Orchestrator menggabungkan dua kesimpulan yang memakai definisi confidence berbeda.
- Recruiter Agent menerima data personal yang seharusnya hanya tersedia untuk Career Partner.
- Agent masuk ke loop permintaan tanpa stop condition.
- Proses gagal tetapi tidak ada pihak yang mengetahui bagian mana yang gagal.

ACP mencegah masalah tersebut dengan mewajibkan identitas, context boundary, evidence lineage, authority, confidence, version, lifecycle state, dan audit trace pada setiap komunikasi material.

## 1.3 Perbedaan ACP dengan API

API menjelaskan cara suatu sistem memanggil fungsi atau bertukar data secara teknis.

ACP menjelaskan makna, kewenangan, dan tanggung jawab komunikasi.

API biasanya menjawab:

- endpoint apa yang dipanggil;
- parameter apa yang dikirim;
- respons teknis apa yang diterima.

ACP menjawab:

- apakah sender berwenang meminta tindakan tersebut;
- apakah receiver berwenang melakukannya;
- evidence apa yang mendukung permintaan;
- apakah data boleh dipakai untuk tujuan itu;
- bagaimana uncertainty harus diteruskan;
- bagaimana conflict diperlakukan;
- apakah hasil dapat digunakan untuk keputusan material;
- bagaimana human escalation dilakukan;
- apa yang harus tercatat dalam audit trail.

Satu implementasi ACP dapat menggunakan berbagai teknologi. ACP tetap berlaku meskipun teknologi komunikasi berubah.

## 1.4 Perbedaan ACP dengan Prompt

Prompt adalah instruksi kepada model pada suatu proses tertentu.

ACP adalah standar komunikasi lintas-agent yang tidak bergantung pada prompt tertentu.

Prompt dapat berubah karena model, task, bahasa, atau eksperimen. ACP mempertahankan:

- identitas agent;
- authority;
- context lineage;
- evidence semantics;
- message type;
- confidence semantics;
- conflict rules;
- escalation rules;
- auditability;
- version compatibility.

Prompt tidak boleh mengubah atau mengabaikan ACP.

## 1.5 Tujuan Utama

ACP memiliki sepuluh tujuan:

1. membuat komunikasi agent konsisten;
2. menjaga context tetap relevan dan terbatas;
3. mempertahankan provenance evidence;
4. mencegah privilege escalation;
5. memisahkan fakta, inference, rekomendasi, dan tindakan;
6. memastikan uncertainty tidak hilang saat pesan berpindah;
7. mengelola conflict tanpa menyembunyikannya;
8. mencegah loop, duplikasi, dan recursion tanpa batas;
9. menyediakan audit trail yang dapat ditelusuri;
10. memungkinkan agent baru bergabung tanpa merusak arsitektur lama.

## 1.6 Hasil yang Diharapkan

Ketika ACP diterapkan dengan benar:

- setiap pesan material dapat dijelaskan;
- setiap kesimpulan memiliki evidence lineage;
- setiap agent bekerja dalam authority yang jelas;
- context tidak menyebar secara berlebihan;
- perubahan state dapat dilacak;
- conflict terlihat dan dapat diselesaikan;
- kegagalan berhenti secara aman;
- agent baru dapat diintegrasikan melalui capability dan authority contract;
- manusia dapat meninjau keputusan tanpa membaca seluruh percakapan internal;
- KarirGPS dapat berkembang menjadi sistem multi-agent dan multi-model yang tetap konsisten.

---

# 2. Scope dan Non-Scope

## 2.1 Scope

ACP V1 mencakup desain konseptual untuk:

- agent identity;
- capability declaration;
- authority and scope;
- message envelope;
- message semantics;
- context propagation;
- evidence passing;
- task coordination;
- event publication;
- conflict handling;
- escalation;
- agent lifecycle;
- delivery reliability;
- loop prevention;
- error handling;
- audit trail;
- privacy and security;
- versioning;
- external agent boundary;
- human review communication;
- protocol conformance.

## 2.2 Non-Scope

ACP V1 tidak menetapkan:

- kode;
- format API;
- struktur database;
- format JSON;
- vendor message broker;
- model AI tertentu;
- prompt;
- bahasa pemrograman;
- desain antarmuka pengguna;
- konfigurasi deployment;
- detail jaringan;
- metode enkripsi tertentu;
- teknologi observability tertentu.

Detail tersebut dapat ditentukan pada dokumen implementasi terpisah. Implementasi wajib mempertahankan semantik ACP.

## 2.3 Komponen yang Wajib Mengikuti ACP

Komponen berikut wajib mengikuti ACP:

- Assessment Agent;
- Memory Agent;
- Recommendation Agent;
- Reflection Agent;
- Report Agent;
- Roadmap Agent;
- Knowledge Agent;
- Orchestrator Agent;
- AI Coach;
- AI Mentor;
- AI Learning Agent;
- AI Interviewer;
- AI Recruiter;
- agent baru;
- model spesialis;
- external AI adapter;
- human review interface;
- proses otomatis yang mengubah state, memory, recommendation, roadmap, atau report.

---

# 3. Design Principles

## 3.1 Constitution-aligned

Semua komunikasi harus mengikuti AI Constitution.

Pesan tidak boleh menjadi sarana untuk:

- melampaui authority;
- menggunakan data tanpa purpose;
- menyembunyikan uncertainty;
- mengunci pilihan pengguna;
- memindahkan sensitive memory ke audience yang tidak berhak;
- mengubah recommendation menjadi keputusan paksa.

## 3.2 Explainable

Setiap pesan material harus menjelaskan alasan keberadaannya.

Receiver harus dapat mengetahui:

- mengapa pesan dikirim;
- evidence apa yang mendukungnya;
- confidence apa yang dimiliki sender;
- tindakan apa yang diharapkan;
- batas penggunaan apa yang berlaku.

## 3.3 Stateless Message, Stateful Journey

Setiap message harus dapat dipahami sebagai unit mandiri yang memiliki reference ke state yang relevan.

Message tidak boleh mengandalkan ingatan tersembunyi receiver.

Perjalanan pengguna tetap stateful melalui:

- Context ID;
- timeline;
- memory references;
- decision records;
- artifact references;
- state version.

Pesan membawa context yang cukup, tetapi tidak membawa seluruh riwayat.

## 3.4 Context-aware

Message harus membawa context yang material terhadap task.

Context harus:

- relevan;
- purpose-bound;
- fresh;
- minimal;
- memiliki lineage;
- memiliki sensitivity classification.

## 3.5 Versioned

Agent, capability, message contract, evidence, context capsule, dan artifact harus memiliki version.

Versioning memastikan receiver dapat:

- memahami semantik;
- mendeteksi incompatibility;
- menolak pesan yang tidak aman;
- menggunakan adapter yang disetujui;
- menjaga audit trail saat protocol berubah.

## 3.6 Auditable

Setiap komunikasi material harus menghasilkan trace yang cukup untuk menjawab:

- siapa yang meminta;
- siapa yang memproses;
- kapan diproses;
- data apa yang digunakan;
- authority apa yang dipakai;
- keputusan apa yang dibuat;
- conflict apa yang muncul;
- bagaimana hasil akhir dibentuk.

## 3.7 Human-readable and Machine-readable

Semantik ACP harus jelas bagi manusia dan konsisten untuk sistem.

Human-readable berarti:

- istilah stabil;
- field memiliki definisi;
- reason code dapat dipahami;
- trace dapat ditinjau;
- confidence tidak berupa angka tanpa arti.

Machine-readable berarti:

- tipe pesan konsisten;
- status dapat dibedakan;
- references dapat diikuti;
- version dapat dibandingkan;
- authority dapat diperiksa.

ACP V1 menetapkan makna, bukan format serialisasi.

## 3.8 Secure by Default

Akses tidak diasumsikan.

Setiap pesan harus melalui:

- sender identity check;
- receiver scope check;
- purpose check;
- sensitivity check;
- authority check;
- data minimization check.

## 3.9 Least Privilege

Agent hanya menerima context dan melakukan tindakan yang diperlukan untuk mandatnya.

Orchestrator tidak otomatis memiliki akses penuh ke seluruh data. Orchestrator hanya menerima data yang diperlukan untuk mengoordinasikan task.

## 3.10 Modular

Agent dapat diganti atau ditingkatkan tanpa mengubah seluruh protocol.

Modularitas dicapai melalui:

- stable message semantics;
- capability declaration;
- authority boundary;
- artifact contract;
- version compatibility;
- clear lifecycle state.

## 3.11 Extensible

ACP dapat menerima:

- agent baru;
- message type baru;
- evidence type baru;
- external model;
- human reviewer;
- jurisdiction baru;
- domain baru.

Ekstensi tidak boleh mengubah makna field lama secara diam-diam.

## 3.12 Evidence-preserving

Evidence tidak boleh kehilangan:

- source;
- timestamp;
- freshness;
- reliability;
- scope;
- transformation history;
- uncertainty.

## 3.13 Uncertainty-preserving

Confidence tidak boleh meningkat hanya karena pesan melewati beberapa agent.

Setiap transformasi harus mencatat:

- confidence input;
- confidence output;
- alasan perubahan;
- uncertainty yang masih tersisa.

## 3.14 Idempotent Intent

Permintaan yang sama tidak boleh menghasilkan tindakan material berulang hanya karena message dikirim ulang.

Protocol harus membedakan:

- retry atas task yang sama;
- task baru dengan tujuan sama;
- update terhadap task lama;
- duplicate delivery.

## 3.15 Bounded Autonomy

Agent dapat bekerja mandiri hanya dalam scope, authority, time horizon, dan stop condition yang jelas.

## 3.16 Fail Explicitly

Kegagalan tidak boleh disamarkan sebagai hasil kosong atau confidence rendah tanpa penjelasan.

Agent harus menyatakan:

- apa yang gagal;
- bagian mana yang berhasil;
- dampak terhadap hasil;
- apakah retry layak;
- apakah escalation diperlukan.

## 3.17 Conflict-visible

Perbedaan antar-agent adalah bagian dari intelligence.

Conflict tidak boleh dihapus hanya untuk menghasilkan satu jawaban.

## 3.18 Purpose-preserving

Ketika data berpindah antar-agent, tujuan penggunaan awal harus ikut berpindah.

Receiver tidak boleh memperluas tujuan tanpa consent atau authority baru.

## 3.19 Separation of Observation and Action

Pesan yang menyatakan kondisi harus dibedakan dari pesan yang meminta perubahan.

Contoh:

- "goal pengguna berubah" adalah event atau observation;
- "perbarui active goal" adalah request;
- "active goal sudah diperbarui" adalah confirmation.

## 3.20 No Silent Side Effects

Tindakan yang mengubah state harus menghasilkan confirmation, trace, dan version change.

---

# 4. Conceptual Protocol Model

ACP membedakan beberapa objek komunikasi. Pemisahan ini mencegah semua informasi diperlakukan sebagai message biasa.

## 4.1 Message

Message adalah unit komunikasi antar-actor.

Message membawa:

- intent;
- context;
- evidence;
- requested action;
- authority;
- trace;
- status.

Message bersifat immutable setelah dikirim. Koreksi dilakukan melalui message baru yang merujuk message lama.

## 4.2 Task

Task adalah pekerjaan yang memiliki tujuan, owner, lifecycle, dependencies, stop condition, dan outcome.

Satu task dapat memiliki banyak message.

Contoh:

- menyusun ranking karier;
- memperbarui roadmap;
- memvalidasi memory;
- menghasilkan report;
- menginvestigasi conflict.

## 4.3 Event

Event menyatakan sesuatu yang telah terjadi.

Event tidak meminta tindakan secara langsung. Subscriber dapat memutuskan apakah event relevan bagi mandatnya.

Contoh:

- Assessment Completed;
- Goal Changed;
- Certificate Verified;
- Memory Superseded.

## 4.4 Artifact

Artifact adalah hasil kerja yang dapat dirujuk.

Contoh:

- assessment profile;
- recommendation set;
- learning roadmap;
- career roadmap;
- reflection summary;
- knowledge snapshot;
- report;
- evidence bundle;
- decision record.

Artifact memiliki owner, version, status, purpose, dan provenance.

## 4.5 Evidence Bundle

Evidence Bundle adalah kumpulan evidence yang dipilih untuk suatu keputusan.

Bundle tidak berarti seluruh data pengguna.

Bundle menjelaskan:

- evidence yang disertakan;
- evidence yang dikecualikan;
- alasan relevansi;
- freshness;
- conflict;
- reliability;
- sensitivity;
- allowed purpose.

## 4.6 Context Capsule

Context Capsule adalah paket context minimum yang dibutuhkan receiver untuk menyelesaikan task.

Context Capsule dapat berisi:

- current decision;
- active goal;
- current user state;
- relevant historical memory;
- constraint;
- audience;
- jurisdiction;
- time horizon;
- current artifact versions;
- unresolved questions.

## 4.7 Decision Record

Decision Record menyimpan alasan keputusan agent atau Orchestrator.

Decision Record mencatat:

- decision question;
- alternatives;
- evidence used;
- counterevidence;
- constraints;
- uncertainty;
- chosen action;
- rejected actions;
- reason;
- authority;
- human involvement;
- outcome expectation.

## 4.8 Control Signal

Control Signal mengatur eksekusi, bukan isi domain.

Contoh:

- start;
- pause;
- resume;
- retry;
- cancel;
- stop;
- escalate;
- recover;
- acknowledge.

## 4.9 Human Review Package

Human Review Package adalah paket khusus untuk reviewer manusia.

Paket ini harus cukup untuk keputusan review, tetapi tidak boleh membuka data yang tidak relevan.

Isinya mencakup:

- issue;
- material evidence;
- unresolved conflict;
- proposed options;
- risk;
- required decision;
- deadline;
- privacy scope;
- trace reference.

---

# 5. Agent Identity

## 5.1 Tujuan Agent Identity

Agent Identity memastikan setiap pesan dapat dikaitkan dengan actor yang sah dan kemampuan yang diketahui.

Identity tidak hanya berupa nama agent. Identity adalah deklarasi tanggung jawab dan batas tindakan.

## 5.2 Atribut Wajib Agent

### Agent ID

Identitas stabil dan unik untuk jenis atau instance agent.

Fungsi:

- attribution;
- routing;
- audit;
- conflict analysis;
- lifecycle tracking.

Agent ID tidak boleh berubah hanya karena model internal berubah.

### Agent Version

Menjelaskan versi behavior contract agent.

Fungsi:

- compatibility check;
- performance comparison;
- incident analysis;
- rollback;
- audit.

### Agent Type

Kategori fungsi agent.

Contoh:

- assessment;
- memory;
- recommendation;
- reflection;
- report;
- roadmap;
- knowledge;
- orchestrator;
- reviewer;
- external adapter.

### Capability

Daftar kemampuan yang benar-benar dapat dilakukan agent.

Capability harus spesifik.

Contoh:

- interpret assessment evidence;
- retrieve relevant career knowledge;
- compare career candidates;
- produce learning roadmap;
- identify memory conflict.

Capability bukan authority.

Agent dapat mampu melakukan suatu tindakan secara teknis tetapi tidak memiliki authority untuk melakukannya pada context tertentu.

### Authority

Batas keputusan yang boleh dibuat agent.

Authority menjawab:

- kesimpulan apa yang boleh dibuat;
- state apa yang boleh diubah;
- evidence apa yang boleh digunakan;
- audience apa yang boleh dilayani;
- kapan human approval diperlukan.

### Scope

Ruang lingkup kerja agent saat ini.

Scope dapat dibatasi oleh:

- user;
- task;
- domain;
- time period;
- jurisdiction;
- audience;
- data sensitivity;
- decision impact.

### Allowed Actions

Tindakan yang diizinkan.

Contoh:

- membaca assessment artifact;
- mengusulkan recommendation;
- membuat memory candidate;
- memublikasikan event;
- meminta clarification;
- membuat warning.

### Forbidden Actions

Tindakan yang dilarang.

Contoh:

- mengubah memory tanpa provenance;
- mengakses reflection memory untuk employer screening;
- menyatakan diagnosis;
- membuat keputusan final untuk pengguna;
- menaikkan authority sendiri;
- meneruskan sensitive context ke receiver yang tidak berhak.

### Data Access Class

Jenis data yang boleh diakses agent.

Access class tidak sama dengan data aktual yang diterima. Data tetap harus relevan terhadap purpose.

### Audience Boundary

Audience yang boleh menerima output agent.

Contoh:

- user only;
- user and counselor;
- school with consent;
- internal agent only;
- employer-approved scope.

### Risk Class

Tingkat risiko tindakan agent.

Risk class memengaruhi:

- required checks;
- confidence threshold;
- human review;
- audit depth;
- escalation.

### Lifecycle Status

Status operasional agent:

- registered;
- active;
- paused;
- degraded;
- suspended;
- retired.

## 5.3 Identity Verification

Sebelum memproses message material, receiver harus memeriksa:

1. sender dikenal;
2. sender version didukung;
3. sender memiliki capability terkait;
4. sender memiliki authority untuk mengirim permintaan;
5. message sesuai scope;
6. purpose sah;
7. data access sesuai sensitivity.

## 5.4 Capability Is Not Trust

Agent dengan capability tinggi tidak otomatis memiliki trust tinggi.

Trust harus mempertimbangkan:

- conformance history;
- calibration;
- incident history;
- domain performance;
- version;
- context;
- recency of evaluation.

## 5.5 Authority Cannot Be Self-declared

Agent tidak boleh memperluas authority melalui isi message.

Perubahan authority memerlukan governance process dan versioned registration.

---

# 6. Authority and Scope Model

## 6.1 Authority Layers

ACP menggunakan lima lapis authority:

1. **Observe**  
   Agent boleh membaca atau mendeteksi kondisi.

2. **Interpret**  
   Agent boleh membentuk inference terbatas.

3. **Recommend**  
   Agent boleh menyarankan tindakan atau pilihan.

4. **Execute reversible action**  
   Agent boleh melakukan perubahan yang dapat dibatalkan dan telah diizinkan.

5. **Execute consequential action**  
   Tindakan berdampak tinggi. Membutuhkan authority khusus dan sering memerlukan persetujuan manusia.

Sebagian besar agent KarirGPS berada pada lapisan observe, interpret, dan recommend.

## 6.2 Scope Dimensions

Setiap task harus mendefinisikan scope pada dimensi berikut:

- subject;
- purpose;
- domain;
- audience;
- time horizon;
- data class;
- geography;
- decision impact;
- allowed outputs;
- prohibited outputs.

## 6.3 Scope Inheritance

Child task dapat mewarisi scope parent hanya jika:

- scope inheritance dinyatakan;
- child purpose konsisten;
- data sensitivity tetap sesuai;
- authority child tidak lebih besar;
- no-expansion rule dipenuhi.

Child task tidak boleh memperluas audience atau purpose.

## 6.4 Scope Narrowing

Receiver boleh mempersempit scope jika:

- data terlalu sensitif;
- evidence tidak cukup;
- conflict terlalu tinggi;
- authority terbatas;
- task terlalu luas;
- constitutional risk ditemukan.

Receiver harus menjelaskan narrowing tersebut.

## 6.5 Scope Expiration

Scope berakhir ketika:

- task selesai;
- user mencabut consent;
- deadline berakhir;
- purpose tidak lagi berlaku;
- agent dihentikan;
- escalation mengambil alih;
- data access berubah.

---

# 7. Message Structure

Message Structure adalah kontrak konseptual. Dokumen ini tidak menetapkan format serialisasi.

## 7.1 Identification Fields

### Message ID

Identitas unik message.

Fungsi:

- deduplication;
- audit;
- correlation;
- correction;
- retry control.

### Protocol Version

Versi ACP yang digunakan.

Receiver harus memeriksa compatibility sebelum memproses.

### Message Version

Versi dari message yang telah dikoreksi atau diperbarui.

Message lama tetap dipertahankan.

### Message Type

Menjelaskan fungsi komunikasi, seperti REQUEST, RESPONSE, EVENT, atau WARNING.

### Created Timestamp

Waktu message dibuat.

### Effective Timestamp

Waktu isi message mulai berlaku.

Created time dan effective time dapat berbeda.

### Expiration

Batas waktu message boleh digunakan.

Message yang expired tidak boleh dipakai sebagai current instruction tanpa revalidation.

## 7.2 Routing Fields

### Sender

Agent atau actor yang membuat message.

### Receiver

Agent, group, orchestrator, atau human reviewer yang dituju.

### Reply To

Reference ke message yang sedang dijawab.

### Correlation ID

Menghubungkan seluruh message dalam satu task atau decision process.

### Causation ID

Menunjukkan message atau event yang menyebabkan message ini dibuat.

### Context ID

Menghubungkan message dengan decision context yang sama.

### Task ID

Menghubungkan message dengan lifecycle task.

### User ID Concept

Reference terhadap subject pengguna tanpa harus membuka identitas langsung kepada semua receiver.

Fungsinya adalah menjaga continuity dan separation antar-user.

## 7.3 Intent Fields

### Intent

Tujuan semantik utama message.

Contoh:

- evaluate;
- retrieve;
- compare;
- validate;
- update;
- summarize;
- explain;
- escalate;
- confirm;
- revoke.

### Decision Question

Pertanyaan keputusan yang sedang diselesaikan.

Field ini mencegah agent menjawab pertanyaan yang berbeda dari task.

### Required Action

Tindakan spesifik yang diminta kepada receiver.

### Expected Output

Jenis hasil yang diharapkan.

### Stop Condition

Kondisi yang menandakan task cukup dan harus berhenti.

### Deadline or Time Sensitivity

Menjelaskan urgensi dan kapan hasil kehilangan nilai.

## 7.4 Context Fields

### Context Summary

Ringkasan context yang dibutuhkan receiver.

### Context References

Reference ke Context Capsule, memory, assessment, recommendation, roadmap, atau artifact terkait.

### Current State Version

Versi current state yang digunakan sender.

Receiver harus mendeteksi jika state telah berubah.

### Historical Context

Memory lama yang material.

Historical context harus menjelaskan alasan relevansi.

### Constraints

Batas nyata yang harus dipertimbangkan.

Contoh:

- ekonomi;
- lokasi;
- waktu;
- akses pendidikan;
- kesehatan yang telah disetujui untuk digunakan;
- prerequisite;
- family responsibility.

### User Goal

Goal aktif yang relevan.

### Audience

Pihak yang akan melihat hasil akhir.

### Jurisdiction and Locale

Konteks wilayah, bahasa, hukum, sistem pendidikan, dan pasar kerja.

## 7.5 Evidence Fields

### Evidence

Daftar evidence material atau reference ke Evidence Bundle.

### Evidence Type

Klasifikasi:

- verified fact;
- user self-report;
- assessment result;
- behavior observation;
- document evidence;
- external knowledge;
- expert review;
- inference;
- projection.

### Provenance

Asal evidence dan transformasi yang telah terjadi.

### Freshness

Seberapa baru evidence dan apakah masih relevan.

### Reliability

Kualitas evidence berdasarkan sumber dan metode.

### Conflict Status

Apakah evidence konsisten, sebagian bertentangan, atau unresolved.

### Counterevidence

Evidence yang mengurangi atau menentang kesimpulan sender.

### Missing Evidence

Data penting yang belum tersedia.

## 7.6 Confidence Fields

### Confidence

Tingkat keyakinan sender terhadap kesimpulan dalam scope tertentu.

Confidence tidak boleh dipakai tanpa definisi.

### Confidence Basis

Alasan confidence:

- evidence volume;
- evidence reliability;
- consistency;
- freshness;
- domain coverage;
- model calibration;
- unresolved conflict.

### Confidence Scope

Bagian mana yang confidence-nya berlaku.

Contoh:

- confidence tinggi pada skill evidence;
- confidence rendah pada long-term preference;
- confidence sedang pada feasibility.

### Uncertainty

Hal yang belum diketahui atau dapat berubah.

### Assumptions

Asumsi yang digunakan.

Assumption harus terlihat dan dapat diuji.

## 7.7 Priority and Risk Fields

### Priority

Urutan penanganan message.

Priority tidak boleh hanya ditentukan oleh sender. Receiver dan Orchestrator dapat menyesuaikan berdasarkan risk.

### Impact Level

Dampak jika message salah atau terlambat.

### Risk Flags

Contoh:

- privacy risk;
- fairness risk;
- stale knowledge;
- high conflict;
- low evidence;
- emotional sensitivity;
- consequential decision;
- external sharing.

### Reversibility

Apakah tindakan dapat dibatalkan.

### Human Review Requirement

Apakah manusia harus meninjau sebelum hasil dipakai.

## 7.8 Dependency Fields

### Dependencies

Task, artifact, approval, atau evidence yang harus tersedia.

### Dependency Status

Status setiap dependency.

### Blocking Condition

Kondisi yang mencegah proses berlanjut.

### Optional Inputs

Input yang berguna tetapi tidak wajib.

## 7.9 Status Fields

### Processing Status

Status message atau task:

- received;
- accepted;
- rejected;
- in progress;
- waiting;
- completed;
- partially completed;
- failed;
- canceled;
- superseded.

### Outcome Status

Status hasil:

- valid;
- provisional;
- needs confirmation;
- conflicted;
- expired;
- withdrawn.

### Acknowledgement

Konfirmasi bahwa receiver menerima dan memahami tanggung jawab.

## 7.10 Trace Fields

### Trace

Reference terhadap rangkaian reasoning dan tindakan.

### Constitutional Check

Hasil pemeriksaan prinsip konstitusi.

### Authority Check

Hasil pemeriksaan kewenangan.

### Privacy Check

Hasil pemeriksaan purpose dan sensitivity.

### Decision Record Reference

Reference ke alasan keputusan material.

### Transformation Record

Perubahan yang dilakukan receiver terhadap input.

### Artifact References

Hasil yang dibuat atau digunakan.

## 7.11 Sensitivity and Use Fields

### Sensitivity

Kelas sensitivitas isi message.

### Allowed Purpose

Tujuan penggunaan yang diizinkan.

### Allowed Audience

Pihak yang boleh menerima.

### Retention Class

Berapa lama message atau trace perlu dipertahankan secara konseptual.

### Redaction Requirement

Bagian yang harus disembunyikan bagi audience tertentu.

### User Control Status

Consent, opt-out, correction, deletion, atau restriction yang berlaku.

---

# 8. Message Types

## 8.1 REQUEST

Meminta receiver melakukan evaluasi, retrieval, transformasi, validasi, atau tindakan lain.

REQUEST wajib memiliki:

- intent;
- required action;
- scope;
- authority;
- expected output;
- stop condition;
- dependencies.

REQUEST bukan izin otomatis. Receiver tetap melakukan authority dan constitutional check.

## 8.2 RESPONSE

Jawaban terhadap REQUEST.

RESPONSE harus:

- merujuk request;
- menyatakan status;
- menyampaikan outcome;
- menyertakan evidence dan confidence;
- menjelaskan batas hasil;
- mencatat unresolved issue.

## 8.3 UPDATE

Menyampaikan perubahan terhadap task, context, artifact, atau state yang masih berjalan.

UPDATE tidak otomatis mengganti versi lama. Supersession harus dinyatakan.

## 8.4 EVENT

Menyatakan sesuatu telah terjadi.

EVENT harus:

- bersifat faktual sejauh mungkin;
- memiliki effective timestamp;
- memiliki provenance;
- tidak mengandung required action tersembunyi.

## 8.5 OBSERVATION

Menyampaikan sinyal atau kondisi yang terdeteksi.

OBSERVATION belum tentu merupakan fakta yang telah diverifikasi.

Contoh:

- engagement menurun;
- preferensi mungkin berubah;
- terdapat pola skill improvement;
- dua assessment menunjukkan conflict.

## 8.6 INFERENCE

Menyampaikan interpretasi yang dibentuk dari evidence.

INFERENCE wajib menyertakan:

- evidence basis;
- assumption;
- confidence;
- alternatives;
- scope;
- expiration atau revalidation need.

## 8.7 RECOMMENDATION

Menyampaikan pilihan yang disarankan.

RECOMMENDATION harus memuat:

- decision question;
- alternatives;
- reasons;
- counterevidence;
- risks;
- tradeoffs;
- confidence;
- user agency boundary.

## 8.8 REFLECTION

Menyampaikan interpretasi longitudinal untuk membantu pengguna memahami perkembangan.

REFLECTION harus:

- non-judgmental;
- evidence-based;
- correction-friendly;
- tidak mengubah memory secara otomatis;
- tidak berubah menjadi diagnosis.

## 8.9 WARNING

Menyampaikan risiko yang tidak selalu menghentikan proses.

Contoh:

- knowledge stale;
- confidence rendah;
- context incomplete;
- privacy scope mendekati batas;
- recommendation sangat sensitif terhadap satu assumption.

## 8.10 ERROR

Menyatakan proses gagal memenuhi contract.

ERROR harus membedakan:

- input error;
- authority error;
- dependency error;
- reasoning error;
- compatibility error;
- timeout;
- policy violation;
- privacy violation;
- unrecoverable failure.

## 8.11 CONFIRMATION

Menyatakan tindakan atau perubahan state telah selesai dan terverifikasi.

CONFIRMATION wajib untuk side effect material.

## 8.12 ACKNOWLEDGEMENT

Menyatakan message diterima.

ACKNOWLEDGEMENT tidak berarti task selesai atau hasil disetujui.

## 8.13 CLARIFICATION REQUEST

Meminta informasi tambahan yang material.

Agent tidak boleh meminta klarifikasi yang tidak dapat mengubah keputusan.

## 8.14 VALIDATION REQUEST

Meminta agent atau manusia memeriksa evidence, artifact, atau inference.

## 8.15 VALIDATION RESULT

Menyampaikan hasil validasi:

- confirmed;
- partially confirmed;
- rejected;
- inconclusive;
- expired.

## 8.16 CONFLICT NOTICE

Menyatakan terdapat disagreement material.

CONFLICT NOTICE harus menjelaskan:

- objek conflict;
- agent atau evidence yang berbeda;
- sumber perbedaan;
- dampak;
- proposed resolution path.

## 8.17 ESCALATION REQUEST

Meminta Orchestrator atau manusia mengambil alih sebagian keputusan.

## 8.18 CONTROL

Mengatur lifecycle:

- start;
- pause;
- resume;
- retry;
- cancel;
- stop;
- recover.

## 8.19 STATE CHANGE PROPOSAL

Mengusulkan perubahan current state, memory, goal, roadmap, atau status artifact.

Proposal tidak boleh diperlakukan sebagai perubahan selesai.

## 8.20 STATE CHANGE CONFIRMATION

Menyatakan perubahan state telah diterapkan secara sah.

## 8.21 REVOCATION

Mencabut message, artifact, consent, authority, atau recommendation.

Revocation tidak menghapus history. Status lama berubah menjadi revoked atau withdrawn.

## 8.22 HEARTBEAT

Menyatakan agent atau long-running task masih aktif tanpa menambahkan reasoning baru.

HEARTBEAT tidak boleh memicu task baru.

---

# 9. Intent Taxonomy

Intent harus stabil dan tidak ambigu.

## 9.1 Retrieval Intent

Digunakan untuk mengambil knowledge, memory, evidence, artifact, atau context.

Contoh:

- retrieve current goal;
- retrieve relevant memories;
- retrieve career candidates;
- retrieve current roadmap.

## 9.2 Evaluation Intent

Digunakan untuk menilai:

- fit;
- quality;
- freshness;
- consistency;
- feasibility;
- risk;
- progress;
- confidence.

## 9.3 Transformation Intent

Digunakan untuk mengubah representasi tanpa mengubah fakta.

Contoh:

- normalize assessment;
- summarize context;
- compress memory;
- prepare audience-specific report.

## 9.4 Decision Support Intent

Digunakan untuk:

- compare alternatives;
- rank candidates;
- identify tradeoffs;
- identify next action;
- propose validation.

## 9.5 State Management Intent

Digunakan untuk:

- propose update;
- confirm update;
- supersede;
- archive;
- expire;
- correct;
- revoke.

## 9.6 Governance Intent

Digunakan untuk:

- validate authority;
- inspect conflict;
- perform constitutional check;
- request human review;
- audit;
- investigate incident.

---

# 10. Context Propagation

## 10.1 Tujuan

Context propagation memastikan receiver memahami task tanpa menerima seluruh history pengguna.

Protocol harus menghindari dua kegagalan:

- context starvation, ketika agent kekurangan informasi;
- context flooding, ketika agent menerima data berlebihan dan sensitif.

## 10.2 Context Capsule

Setiap task material menggunakan Context Capsule.

Capsule berisi context minimum yang material:

1. decision question;
2. current user state;
3. active goal;
4. relevant constraints;
5. relevant historical memory;
6. relevant assessment;
7. current artifact versions;
8. audience;
9. time horizon;
10. unresolved conflict;
11. allowed purpose;
12. sensitivity.

## 10.3 Context Relevance Test

Sebelum context diteruskan, sender atau Orchestrator harus menjawab:

- Apakah informasi ini dapat mengubah hasil?
- Apakah receiver memiliki authority untuk melihatnya?
- Apakah informasi masih fresh?
- Apakah informasi sesuai purpose?
- Apakah ringkasan cukup?
- Apakah detail sensitif dapat diganti reference?
- Apakah informasi membawa bias yang tidak relevan?

Context yang gagal pada test harus dikeluarkan atau diringkas.

## 10.4 Context Inheritance

Child task menerima:

- Context ID;
- current state version;
- allowed purpose;
- audience;
- sensitivity ceiling;
- relevant references.

Child task tidak otomatis menerima seluruh Context Capsule parent.

## 10.5 Context Narrowing

Setiap handoff dapat mempersempit context.

Contoh:

Recommendation Agent membutuhkan work values dan constraints. Report Agent untuk sekolah mungkin hanya membutuhkan summary hasil dan tidak membutuhkan dream memory atau failure memory.

## 10.6 Context Compression

Context yang panjang diringkas menjadi:

- active facts;
- active goals;
- material changes;
- unresolved questions;
- relevant history;
- excluded context note.

Compression harus mempertahankan references ke sumber.

## 10.7 Context Freshness

Context memiliki validity window.

Receiver harus memeriksa perubahan pada:

- goal;
- current education status;
- location;
- economic constraint;
- assessment;
- consent;
- memory status;
- knowledge snapshot.

Jika state berubah selama task, receiver harus:

- pause;
- revalidate;
- melanjutkan dengan version baru;
- atau menyelesaikan sebagai provisional.

## 10.8 Context Contamination Prevention

Context dari satu user tidak boleh masuk ke task user lain.

Context dari satu audience tidak boleh digunakan untuk audience lain.

Context dari employer-facing task tidak boleh menyerap reflection atau private coaching memory.

## 10.9 Context Provenance

Setiap ringkasan context harus menyimpan:

- sumber;
- siapa yang meringkas;
- kapan diringkas;
- transformation;
- omissions;
- confidence;
- version.

## 10.10 Context Loss Detection

Receiver harus memberi WARNING jika context yang diterima:

- tidak memiliki active goal;
- tidak memiliki current state version;
- tidak menjelaskan audience;
- tidak memiliki consent status;
- kehilangan evidence lineage;
- berbeda dengan artifact terbaru.

## 10.11 Context Merge

Jika dua Context Capsule digabungkan, Orchestrator harus:

1. membandingkan state version;
2. mendeteksi duplicate;
3. mempertahankan source lineage;
4. mendeteksi conflict;
5. menerapkan sensitivity tertinggi;
6. mempertahankan purpose paling sempit;
7. mencatat merge decision.

---

# 11. Evidence Passing

## 11.1 Evidence Is Not Narrative

Evidence tidak boleh diteruskan hanya sebagai kesimpulan naratif.

Setiap evidence material membutuhkan:

- type;
- source;
- timestamp;
- provenance;
- freshness;
- reliability;
- scope;
- sensitivity;
- status.

## 11.2 Evidence Classes

### Verified Evidence

Fakta atau dokumen yang telah diverifikasi.

### User-declared Evidence

Pernyataan eksplisit pengguna.

Pernyataan ini penting, tetapi dapat berubah dan tidak selalu menggambarkan perilaku aktual.

### Assessment Evidence

Hasil assessment dengan instrument version, date, context, dan interpretation limits.

### Behavioral Evidence

Tindakan yang teramati.

Behavior tidak boleh langsung ditafsirkan sebagai trait.

### Outcome Evidence

Hasil nyata dari keputusan atau tindakan.

Contoh:

- nilai;
- project completion;
- internship outcome;
- course completion;
- application result.

### External Knowledge Evidence

Informasi tentang jurusan, karier, skill, pasar kerja, dan AI impact.

Harus memiliki source version dan freshness.

### Inferred Evidence

Interpretasi yang dibuat agent.

Authority inference lebih rendah daripada fakta dan user declaration.

### Forecast Evidence

Proyeksi masa depan.

Forecast harus memiliki scenario, horizon, dan uncertainty.

## 11.3 Provenance Chain

Provenance harus menunjukkan:

1. sumber asli;
2. metode capture;
3. transformasi;
4. normalisasi;
5. interpretasi;
6. agent yang memproses;
7. version;
8. validation;
9. current status.

## 11.4 Evidence Transformation

Ketika evidence ditransformasikan, receiver harus membedakan:

- raw evidence;
- normalized evidence;
- summary;
- inference;
- recommendation.

Transformasi tidak boleh menghapus source.

## 11.5 Evidence Selection

Evidence Bundle harus menjelaskan mengapa evidence tertentu dipilih.

Evidence tidak dipilih hanya karena mendukung kesimpulan.

Counterevidence yang material harus ikut disertakan.

## 11.6 Confidence Passing

Confidence harus diteruskan sebagai multidimensional signal.

Minimal mencakup:

- source confidence;
- interpretation confidence;
- decision confidence;
- freshness confidence;
- coverage confidence.

## 11.7 Confidence Aggregation

Receiver tidak boleh menghitung confidence akhir dengan sekadar merata-ratakan confidence dari agent lain.

Receiver harus mempertimbangkan:

- dependence antar-evidence;
- duplicate source;
- shared model;
- common upstream error;
- conflict;
- missing dimension;
- authority.

## 11.8 Confidence Cannot Increase by Repetition

Kesimpulan yang dikirim lima agent dari evidence sama tidak menjadi lima kali lebih kuat.

Protocol harus mendeteksi common provenance.

## 11.9 Evidence Expiration

Evidence dapat:

- tetap berlaku;
- memerlukan review;
- expired;
- superseded;
- revoked;
- invalidated.

Expired evidence tetap dapat digunakan untuk historical reasoning, tetapi tidak sebagai current fact tanpa revalidation.

## 11.10 Evidence Challenge

Receiver boleh mengirim VALIDATION REQUEST jika:

- provenance tidak lengkap;
- confidence tidak sesuai;
- source terlalu lama;
- evidence bertentangan;
- evidence terlalu sensitif;
- transformation tidak jelas.

## 11.11 No Evidence Laundering

Inference tidak boleh diteruskan melalui beberapa agent lalu dianggap verified fact.

Type dan provenance harus tetap terlihat.

---

# 12. Communication Patterns

## 12.1 Direct Request and Response

Satu agent meminta agent lain menyelesaikan subtask yang jelas.

Cocok untuk:

- retrieval;
- validation;
- focused evaluation;
- artifact transformation.

## 12.2 Orchestrated Coordination

Orchestrator membagi decision question menjadi beberapa task.

Orchestrator mengelola:

- order;
- dependency;
- context;
- conflict;
- completion;
- constitutional check.

Orchestrator tidak mengubah evidence untuk memaksakan konsistensi.

## 12.3 Event Publication

Agent memublikasikan event setelah sesuatu terjadi.

Subscriber menentukan relevansi berdasarkan:

- capability;
- scope;
- user;
- purpose;
- event type.

Event tidak boleh memicu semua agent secara otomatis.

## 12.4 Parallel Evaluation

Beberapa agent atau model menilai pertanyaan yang sama untuk:

- risk check;
- disagreement detection;
- calibration;
- specialist review.

Parallel evaluation harus mencatat common evidence agar hasil tidak dianggap independen secara salah.

## 12.5 Adjudication

Digunakan saat conflict material tidak dapat diselesaikan melalui evidence comparison biasa.

Adjudicator dapat berupa:

- Orchestrator;
- specialist agent;
- policy agent;
- human reviewer.

## 12.6 Human-in-the-loop

Manusia dilibatkan ketika:

- decision impact tinggi;
- evidence sensitif;
- conflict unresolved;
- policy mengharuskan;
- user meminta;
- agent authority tidak cukup;
- fairness risk tinggi.

## 12.7 Human-on-the-loop

Manusia mengawasi dan dapat menghentikan proses, tetapi tidak harus menyetujui setiap task.

## 12.8 Human-out-of-the-loop

Hanya diperbolehkan untuk task rendah risiko, reversible, dan berada dalam authority agent.

## 12.9 Broadcast Restriction

Broadcast hanya digunakan untuk event yang benar-benar lintas-domain.

Sensitive payload tidak boleh disertakan. Subscriber mengambil detail melalui authority-controlled retrieval.

## 12.10 Consultation

Agent meminta pendapat tanpa menyerahkan ownership task.

Consulted agent mengirim inference atau warning. Owner tetap bertanggung jawab.

---

# 13. Task and Dependency Coordination

## 13.1 Task Contract

Setiap task harus memiliki:

- objective;
- owner;
- scope;
- authority;
- inputs;
- dependencies;
- expected artifact;
- deadline;
- risk level;
- stop condition;
- escalation route.

## 13.2 Task Ownership

Satu task memiliki satu accountable owner.

Beberapa agent dapat berkontribusi, tetapi ownership tidak boleh ambigu.

## 13.3 Parent and Child Task

Parent task dapat membuat child task.

Child task harus:

- lebih sempit;
- memiliki purpose konsisten;
- tidak melebihi authority parent;
- memiliki stop condition;
- mengembalikan outcome ke parent.

## 13.4 Dependency Types

- evidence dependency;
- artifact dependency;
- approval dependency;
- state dependency;
- temporal dependency;
- external dependency;
- human dependency.

## 13.5 Blocking and Non-blocking Dependencies

Blocking dependency menghentikan proses.

Non-blocking dependency memungkinkan hasil provisional.

## 13.6 Partial Completion

Agent boleh mengembalikan partial result jika:

- sebagian task selesai;
- bagian yang belum selesai jelas;
- dampak terhadap confidence dijelaskan;
- tidak ada klaim bahwa task lengkap.

## 13.7 Cancellation Propagation

Jika parent task dibatalkan:

- child task yang tidak lagi memiliki purpose harus berhenti;
- artifact provisional harus ditandai;
- side effect yang belum dikonfirmasi tidak boleh diterapkan;
- cancellation trace harus dicatat.

## 13.8 Supersession

Task baru dapat menggantikan task lama jika:

- decision question berubah;
- state version berubah material;
- goal berubah;
- policy berubah;
- artifact baru tersedia.

Task lama tidak dihapus. Status menjadi superseded.

---

# 14. Conflict Handling

## 14.1 Conflict Is a First-class Object

Conflict harus direpresentasikan secara eksplisit, bukan disembunyikan dalam confidence.

## 14.2 Jenis Conflict

### Evidence Conflict

Dua evidence menyatakan kondisi berbeda.

### Temporal Conflict

Pernyataan lama dan current state berbeda.

### Interpretation Conflict

Agent menggunakan evidence sama tetapi menghasilkan inference berbeda.

### Recommendation Conflict

Agent menyarankan pilihan berbeda.

### Authority Conflict

Agent meminta atau melakukan tindakan di luar kewenangan.

### Scope Conflict

Dua task menggunakan purpose atau audience yang tidak konsisten.

### Policy Conflict

Instruksi task bertentangan dengan AI Constitution atau governance rule.

### Version Conflict

Agent menggunakan artifact atau protocol version berbeda.

### User Preference Conflict

Dua preferensi pengguna sulit dipenuhi bersamaan.

### Objective Conflict

Optimasi yang berbeda, seperti gaji, stabilitas, lokasi, dan minat.

## 14.3 Conflict Notice

Agent yang mendeteksi conflict wajib mengirim CONFLICT NOTICE jika conflict dapat mengubah outcome material.

## 14.4 Conflict Resolution Order

Orchestrator atau owner memeriksa:

1. constitutional hierarchy;
2. authority;
3. current state;
4. provenance;
5. source reliability;
6. freshness;
7. scope;
8. decision objective;
9. evidence independence;
10. uncertainty;
11. user preference;
12. need for human review.

## 14.5 Temporal Conflict Resolution

Pernyataan terbaru tidak otomatis benar.

Engine harus menilai:

- apakah perubahan eksplisit;
- apakah context berbeda;
- apakah sumber baru lebih reliable;
- apakah goal benar-benar berubah;
- apakah old state masih relevan sebagai history.

## 14.6 Interpretation Conflict Resolution

Jika dua inference sama-sama masuk akal:

- pertahankan kedua inference;
- jelaskan assumption masing-masing;
- identifikasi evidence pembeda;
- turunkan confidence;
- usulkan validation step.

## 14.7 Recommendation Conflict Resolution

Rekomendasi tidak selalu perlu dipaksa menjadi satu pilihan.

Protocol dapat menghasilkan:

- alternative set;
- scenario-dependent ranking;
- unresolved tradeoff;
- user decision point.

## 14.8 Authority Conflict

Jika authority conflict ditemukan:

- proses harus dihentikan pada tindakan yang tidak sah;
- issue dieskalasikan;
- tidak ada agent yang boleh menyetujui privilege escalation sendiri.

## 14.9 Conflict Severity

Conflict diklasifikasikan:

- low, tidak mengubah outcome;
- medium, mengubah detail atau ranking;
- high, mengubah rekomendasi utama;
- critical, menyangkut privacy, fairness, safety, atau unauthorized action.

## 14.10 Conflict Outcome

Status akhir conflict:

- resolved;
- partially resolved;
- accepted ambiguity;
- requires validation;
- human decision required;
- blocked;
- superseded.

---

# 15. Escalation

## 15.1 Tujuan Escalation

Escalation memindahkan issue ke actor dengan authority, context, atau judgment yang lebih sesuai.

Escalation bukan kegagalan. Escalation adalah mekanisme keselamatan.

## 15.2 Escalation ke Orchestrator

Orchestrator dipanggil ketika:

- dependencies lintas-agent tidak sinkron;
- dua agent berbeda pendapat;
- state version bertabrakan;
- context ownership tidak jelas;
- task masuk loop;
- priority perlu diatur ulang;
- satu agent gagal dan perlu replacement;
- output perlu constitutional synthesis;
- conflict dapat diselesaikan tanpa human judgment.

## 15.3 Escalation ke Human Reviewer

Human reviewer dipanggil ketika:

- user meminta review manusia;
- keputusan berdampak tinggi;
- conflict menyangkut nilai pribadi;
- consent ambigu;
- fairness risk tinggi;
- external sharing sensitif;
- recruiter decision memerlukan oversight;
- evidence tidak cukup tetapi keputusan tidak dapat ditunda;
- agent tidak memiliki authority;
- policy mewajibkan;
- terjadi constitutional uncertainty.

## 15.4 Escalation Package

Escalation harus membawa:

- issue summary;
- decision required;
- current state;
- relevant evidence;
- counterevidence;
- conflict;
- actions already attempted;
- risk;
- urgency;
- allowed options;
- prohibited options;
- recommended next step;
- trace references.

## 15.5 No Context Dump

Escalation tidak boleh mengirim seluruh history.

Reviewer hanya menerima context yang material.

## 15.6 Escalation Levels

- **Level 0:** agent self-resolution dalam scope;
- **Level 1:** specialist consultation;
- **Level 2:** Orchestrator coordination;
- **Level 3:** policy or governance review;
- **Level 4:** human decision;
- **Level 5:** process suspension dan incident review.

## 15.7 Escalation Stop Rule

Setelah human atau governance decision diberikan:

- agent harus mengikuti decision dalam scope;
- decision tidak boleh diperluas;
- trace harus mencatat authority;
- jika state berubah, task harus direvalidasi.

---

# 16. Event System

## 16.1 Fungsi Event

Event System membuat agent dapat merespons perubahan tanpa coupling langsung.

Event menyatakan perubahan atau kejadian. Event tidak memerintahkan semua agent untuk bertindak.

## 16.2 Event Principles

Event harus:

- immutable;
- timestamped;
- versioned;
- provenance-preserving;
- purpose-aware;
- minimal;
- deduplicated;
- auditable.

## 16.3 Event Categories

### User State Events

- Profile Updated
- Goal Changed
- Preference Changed
- Constraint Changed
- Location Changed
- Education Status Changed
- Employment Status Changed

### Assessment Events

- Assessment Started
- Assessment Completed
- Assessment Invalidated
- Assessment Reinterpreted
- Assessment Expired
- Assessment Conflict Detected

### Memory Events

- Memory Candidate Created
- Memory Confirmed
- Memory Updated
- Memory Corrected
- Memory Superseded
- Memory Expired
- Memory Archived
- Memory Deleted
- Memory Access Restricted

### Learning Events

- Learning Goal Created
- Course Started
- Course Completed
- Skill Improved
- Skill Evidence Added
- Skill Decayed
- Learning Roadmap Updated
- Learning Roadmap Completed
- Learning Roadmap Abandoned

### Career Events

- Career Explored
- Career Shortlisted
- Career Goal Selected
- Career Goal Changed
- Career Switched
- Internship Started
- Internship Completed
- Job Application Submitted
- Interview Completed
- Offer Received
- Employment Started
- Employment Ended
- Promotion Achieved
- Founder Journey Started

### Evidence Events

- CV Uploaded
- CV Updated
- LinkedIn Connected
- GitHub Connected
- Portfolio Added
- Certificate Added
- Certificate Verified
- Report Card Added
- Project Added
- Project Verified
- Feedback Received

### Recommendation Events

- Recommendation Requested
- Recommendation Generated
- Recommendation Accepted
- Recommendation Rejected
- Recommendation Saved
- Recommendation Expired
- Recommendation Recalculated
- Recommendation Outcome Recorded

### Roadmap Events

- Roadmap Generated
- Roadmap Activated
- Roadmap Updated
- Milestone Completed
- Milestone Missed
- Roadmap Paused
- Roadmap Completed
- Roadmap Replanned

### Governance Events

- Consent Granted
- Consent Revoked
- Data Correction Requested
- Data Deletion Requested
- Human Review Requested
- Human Review Completed
- Fairness Warning Raised
- Privacy Warning Raised
- Constitutional Violation Detected
- Incident Opened
- Incident Resolved

### Agent Events

- Agent Registered
- Agent Started
- Agent Paused
- Agent Degraded
- Agent Failed
- Agent Recovered
- Agent Suspended
- Agent Retired
- Agent Version Changed

## 16.4 Event Payload Principle

Event membawa ringkasan minimum dan references.

Sensitive detail diambil melalui retrieval terkontrol setelah authority check.

## 16.5 Event Subscription

Agent hanya boleh subscribe event yang:

- relevan dengan capability;
- sesuai authority;
- sesuai purpose;
- sesuai data class;
- dibutuhkan untuk mandat.

## 16.6 Event Trigger Rules

Event tidak boleh memicu tindakan consequential tanpa:

- authority;
- current state check;
- duplicate check;
- stop condition;
- constitutional check.

## 16.7 Event Ordering

Protocol harus mempertahankan causal order dalam context yang sama.

Jika event datang di luar urutan:

- receiver tidak boleh menebak;
- receiver harus menggunakan effective time dan state version;
- conflict atau reprocessing dapat dilakukan.

## 16.8 Event Replay

Event lama dapat digunakan untuk recovery atau audit.

Replay tidak boleh menghasilkan duplicate side effect.

## 16.9 Event Retraction

Event yang salah tidak dihapus diam-diam.

Dibuat correction atau revocation event yang merujuk event lama.

---

# 17. Agent Lifecycle

## 17.1 Registered

Agent telah memiliki identity, capability, authority, scope template, version, risk class, dan owner.

Agent belum menerima task sampai status active.

## 17.2 Start

Agent dapat start jika:

- identity valid;
- version supported;
- policy loaded;
- required dependencies tersedia;
- health check lulus;
- scope task jelas.

## 17.3 Active

Agent menerima dan memproses task dalam authority.

## 17.4 Pause

Agent berhenti sementara karena:

- dependency belum tersedia;
- human review;
- state changed;
- rate limit;
- conflict;
- consent change;
- maintenance.

Pause harus mempertahankan task state.

## 17.5 Resume

Sebelum resume, agent harus memeriksa:

- current state version;
- consent;
- dependency;
- artifact freshness;
- deadline;
- policy version.

## 17.6 Retry

Retry digunakan jika kegagalan bersifat sementara.

Retry harus:

- menggunakan task identity yang sama;
- menjaga idempotency;
- memiliki retry reason;
- memiliki retry budget;
- tidak mengulang side effect yang telah dikonfirmasi.

## 17.7 Degraded

Agent dapat menghasilkan output terbatas.

Status degraded harus terlihat oleh Orchestrator dan memengaruhi confidence.

## 17.8 Fail

Agent menyatakan fail jika contract tidak dapat dipenuhi.

Fail harus menghasilkan ERROR dengan:

- failure class;
- completed work;
- incomplete work;
- recoverability;
- impact;
- recommended action.

## 17.9 Recover

Recovery dapat:

- melanjutkan task;
- memulai ulang dari checkpoint;
- mengganti agent;
- menggunakan artifact terakhir yang valid;
- menurunkan scope.

## 17.10 Stop

Agent berhenti setelah:

- task selesai;
- stop condition tercapai;
- cancel;
- escalation mengambil alih;
- authority dicabut;
- policy violation;
- retry budget habis.

## 17.11 Suspend

Agent dinonaktifkan karena:

- incident;
- calibration failure;
- privacy violation;
- authority violation;
- repeated non-conformance.

## 17.12 Retire

Agent version tidak lagi digunakan.

Artifact dan trace lama tetap dapat diaudit.

---

# 18. Reliability Principles

## 18.1 No Silent Message Loss

Setiap message material harus memiliki lifecycle yang dapat diketahui:

- received;
- accepted;
- rejected;
- completed;
- failed;
- expired.

Pengirim tidak boleh menganggap message diproses tanpa acknowledgement atau outcome.

## 18.2 Delivery Semantics

Protocol mengasumsikan duplicate delivery dapat terjadi.

Karena itu, tindakan material harus dirancang idempotent secara konseptual.

## 18.3 Deduplication

Duplicate dideteksi melalui:

- Message ID;
- Task ID;
- intent;
- state version;
- side effect reference;
- time window.

## 18.4 Duplicate Reasoning Prevention

Agent tidak perlu mengulang reasoning jika:

- decision question sama;
- evidence bundle sama;
- agent version sama;
- state version sama;
- artifact masih valid.

Agent dapat mengembalikan existing artifact dengan freshness confirmation.

## 18.5 Loop Prevention

Setiap task harus memiliki:

- parent reference;
- depth;
- visited agents;
- hop count;
- recursion budget;
- stop condition;
- deadline.

## 18.6 Infinite Recursion Prevention

Agent tidak boleh memanggil dirinya sendiri secara tidak langsung tanpa:

- explicit recursive capability;
- bounded depth;
- progress measure;
- stop condition.

## 18.7 Circular Dependency Detection

Orchestrator harus mendeteksi dependency graph yang melingkar.

Jika ditemukan:

- freeze task terkait;
- identifikasi dependency yang dapat diputus;
- escalate jika tidak dapat diselesaikan.

## 18.8 Retry Budget

Retry memiliki batas berdasarkan:

- risk;
- urgency;
- failure type;
- side effect;
- external dependency.

Retry tanpa perubahan condition tidak boleh dilakukan terus-menerus.

## 18.9 Timeout and Expiration

Setiap task memiliki deadline atau validity window.

Hasil terlambat harus ditandai expired atau stale.

## 18.10 Checkpoint

Long-running task harus memiliki checkpoint konseptual agar recovery tidak mengulang seluruh proses.

## 18.11 Partial Failure Isolation

Kegagalan satu child task tidak otomatis menggagalkan seluruh parent task.

Orchestrator menilai:

- apakah child material;
- apakah substitute tersedia;
- apakah hasil provisional masih berguna;
- apakah confidence harus diturunkan.

## 18.12 Backpressure

Ketika volume event atau task terlalu tinggi:

- priority diterapkan;
- low-value task ditunda;
- duplicate disaring;
- non-material observation diringkas;
- high-risk message didahulukan.

## 18.13 Graceful Degradation

Jika specialist agent tidak tersedia:

- gunakan fallback yang memiliki authority;
- kurangi scope;
- nyatakan limitation;
- jangan mengganti specialist dengan kepastian palsu.

## 18.14 Consistency Check

Sebelum artifact final diterbitkan, owner harus memeriksa:

- state version;
- evidence version;
- goal;
- audience;
- unresolved conflict;
- consent;
- agent outputs;
- constitutional conformance.

## 18.15 Exactly-once Outcome Principle

Protocol tidak menjanjikan satu kali delivery. Protocol menuntut satu kali outcome material yang sah untuk satu task identity dan state version.

---

# 19. Error and Warning Model

## 19.1 Error Classes

### Validation Error

Input tidak memenuhi contract.

### Authority Error

Sender atau receiver tidak memiliki kewenangan.

### Privacy Error

Purpose, consent, sensitivity, atau audience tidak sesuai.

### Context Error

Context tidak cukup, stale, contaminated, atau version conflict.

### Evidence Error

Provenance hilang, source tidak valid, atau evidence revoked.

### Dependency Error

Dependency tidak tersedia atau gagal.

### Compatibility Error

Protocol, agent, atau artifact version tidak kompatibel.

### Reasoning Error

Agent gagal menghasilkan hasil yang memenuhi standard.

### Policy Error

Permintaan bertentangan dengan AI Constitution.

### Execution Error

Proses teknis atau operasional gagal.

### Timeout Error

Task tidak selesai dalam validity window.

## 19.2 Warning Classes

- low confidence;
- incomplete context;
- stale knowledge;
- weak evidence;
- high sensitivity;
- high conflict;
- limited authority;
- provisional output;
- degraded agent;
- human review recommended.

## 19.3 Recoverability

Error diklasifikasikan:

- recoverable through retry;
- recoverable through new evidence;
- recoverable through scope reduction;
- recoverable through alternative agent;
- requires human review;
- non-recoverable under current task.

## 19.4 Error Propagation

Receiver tidak boleh meneruskan error sebagai empty result.

Error harus tetap terlihat sampai owner task menanganinya.

## 19.5 Error Containment

Error pada satu user, context, atau task tidak boleh memengaruhi task lain.

---

# 20. Audit Trail

## 20.1 Tujuan Audit Trail

Audit Trail memungkinkan KarirGPS menjelaskan apa yang terjadi tanpa membuka seluruh internal reasoning model.

Audit berfokus pada decision-relevant trace, bukan private chain of thought.

## 20.2 Audit Objects

Audit mencatat:

- message;
- task;
- event;
- artifact;
- evidence bundle;
- context capsule;
- decision record;
- validation;
- conflict;
- escalation;
- human action;
- state change;
- consent change;
- error;
- recovery.

## 20.3 Minimum Audit Record

Untuk setiap keputusan material, audit harus menunjukkan:

1. decision question;
2. requester;
3. responsible agent;
4. agent version;
5. state version;
6. evidence used;
7. evidence excluded;
8. confidence;
9. conflicts;
10. authority check;
11. privacy check;
12. constitutional check;
13. alternative considered;
14. action taken;
15. human involvement;
16. artifact produced;
17. outcome status.

## 20.4 Trace Levels

### Operational Trace

Status dan lifecycle message.

### Decision Trace

Evidence, alternatives, confidence, dan rationale.

### Governance Trace

Authority, privacy, fairness, constitutional checks.

### Incident Trace

Failure, blast radius, recovery, dan corrective action.

## 20.5 Trace Immutability

Trace lama tidak diubah diam-diam.

Correction dibuat sebagai record baru.

## 20.6 Trace Minimization

Audit tidak berarti menyimpan semua data.

Sensitive data dapat diganti reference, summary, hash concept, atau redacted view pada implementasi.

## 20.7 Audience-specific Audit View

- user melihat data dan alasan yang memengaruhi dirinya;
- counselor melihat scope yang disetujui;
- internal reviewer melihat governance trace;
- employer tidak melihat private career partner memory;
- external auditor menerima data minimum yang diperlukan.

## 20.8 Audit Query Questions

Sistem harus dapat menjawab:

- Mengapa recommendation ini dibuat?
- Memory mana yang digunakan?
- Knowledge version mana yang digunakan?
- Agent mana yang berbeda pendapat?
- Apakah user goal berubah?
- Apakah data lama memengaruhi hasil?
- Mengapa human review dipanggil?
- Apakah consent berlaku?
- Apakah output pernah dikoreksi?
- Apakah agent bekerja di luar authority?

---

# 21. Security Principles

## 21.1 Authentication

Setiap sender dan receiver harus memiliki identity yang dapat diverifikasi.

## 21.2 Authorization

Identity tidak cukup. Setiap tindakan memerlukan authority sesuai task dan scope.

## 21.3 Least Privilege

Agent menerima akses minimum.

## 21.4 Purpose Limitation

Data hanya digunakan untuk tujuan yang dinyatakan.

## 21.5 Data Minimization

Message membawa informasi minimum.

## 21.6 Sensitivity Classification

Data dan message diklasifikasikan berdasarkan sensitivity.

Contoh conceptual classes:

- public domain knowledge;
- internal operational;
- user personal;
- user sensitive;
- highly restricted;
- employer-restricted;
- governance-only.

## 21.7 Audience Isolation

Output user-facing, school-facing, counselor-facing, dan employer-facing harus dipisahkan.

## 21.8 Role Separation

Career Partner dan Recruiter Agent tidak boleh berbagi private memory secara otomatis.

Recruiter Agent hanya menerima data yang:

- relevan terhadap role;
- disetujui;
- job-related;
- sesuai fairness policy;
- memiliki purpose employer-facing.

## 21.9 Privilege Escalation Prevention

Agent tidak boleh:

- meminta scope lebih luas tanpa governance;
- meneruskan message ke agent lebih berkuasa untuk melewati restriction;
- mengubah purpose;
- mengubah audience;
- menghapus sensitivity label.

## 21.10 Secure Delegation

Delegasi harus membawa:

- task scope;
- authority ceiling;
- allowed data;
- prohibited action;
- expiration;
- return obligation.

## 21.11 External AI Boundary

External AI dianggap untrusted sampai:

- capability dinilai;
- data policy diperiksa;
- purpose dibatasi;
- payload diminimalkan;
- output divalidasi;
- audit aktif.

External AI tidak boleh menerima raw longitudinal memory kecuali ada dasar yang sangat kuat dan persetujuan yang sesuai.

## 21.12 Prompt Injection and Instruction Contamination

Konten pengguna, CV, web, dokumen, atau external knowledge dapat berisi instruksi yang tidak sah.

Agent harus memperlakukan konten tersebut sebagai data, bukan authority.

## 21.13 Confidentiality Across Tasks

Agent tidak boleh membawa context dari task sebelumnya kecuali retrieval disahkan melalui Memory Engine dan scope saat ini.

## 21.14 Revocation Propagation

Jika consent atau access dicabut:

- active tasks diperiksa;
- cached context tidak lagi digunakan;
- subscriber menerima event pembatasan;
- artifact baru mengikuti restriction;
- audit mencatat perubahan.

## 21.15 Security Failure

Security atau privacy failure harus:

- menghentikan tindakan terkait;
- menghasilkan critical error;
- mengaktifkan incident process;
- membatasi blast radius;
- memerlukan review.

---

# 22. Privacy and User Control in Communication

## 22.1 User Visibility

Pengguna harus dapat mengetahui kategori informasi yang dipakai untuk keputusan material.

## 22.2 Correction

Ketika pengguna mengoreksi data:

- correction event dibuat;
- affected context ditandai;
- artifact material dapat direview;
- recommendation dapat dihitung ulang;
- history tidak dipalsukan.

## 22.3 Deletion

Deletion request harus dipropagasikan ke komponen yang memiliki data atau derivative yang relevan sesuai kebijakan.

## 22.4 Personalization Level

Context propagation harus mengikuti tingkat personalisasi yang dipilih pengguna.

## 22.5 No Hidden Audience Expansion

Data yang diberikan untuk coaching tidak boleh muncul dalam employer report tanpa consent terpisah.

## 22.6 Sensitive Inference

Inference sensitif tidak boleh dikirim sebagai memory atau fact tanpa justification, confidence, dan user control.

## 22.7 Minors and Guardians

Untuk pengguna anak atau remaja, protocol harus membedakan:

- user agency;
- guardian role;
- school role;
- confidentiality;
- legal requirement;
- best interest.

ACP tidak menetapkan hukum wilayah tertentu, tetapi mewajibkan jurisdiction-aware handling.

---

# 23. Orchestrator Rules

## 23.1 Mandat

Orchestrator mengatur koordinasi, bukan menjadi sumber fakta otomatis.

## 23.2 Tanggung Jawab

Orchestrator wajib:

- memecah task secara tepat;
- menentukan accountable owner;
- memilih agent berdasarkan capability dan authority;
- membentuk Context Capsule;
- menjaga purpose;
- mengelola dependencies;
- mendeteksi conflict;
- mencegah loop;
- mengelola retries;
- memeriksa final consistency;
- memicu escalation;
- membentuk orchestration trace.

## 23.3 Larangan

Orchestrator dilarang:

- memperluas access;
- menghapus disagreement;
- menyamarkan failure;
- menaikkan confidence tanpa dasar;
- mengubah inference menjadi fact;
- mengirim sensitive data ke semua agent;
- menulis ulang history;
- melampaui keputusan pengguna.

## 23.4 Agent Selection

Pemilihan agent mempertimbangkan:

- capability;
- authority;
- version;
- health;
- calibration;
- risk class;
- data access;
- context;
- latency need;
- prior incident.

## 23.5 Final Synthesis

Orchestrator boleh menyatukan hasil, tetapi synthesis harus:

- mempertahankan provenance;
- membedakan consensus dan disagreement;
- menunjukkan unresolved uncertainty;
- menjaga confidence per dimension;
- tidak menghilangkan minority evidence yang material.

## 23.6 Orchestrator Failure

Jika Orchestrator gagal:

- task tidak boleh diteruskan secara liar;
- child task dihentikan atau dipause;
- checkpoint digunakan;
- fallback orchestrator dapat mengambil alih;
- human review dilakukan jika perlu.

---

# 24. Protocol Versioning and Compatibility

## 24.1 Versioned Contract

ACP memiliki version yang menjelaskan perubahan semantik.

## 24.2 Jenis Perubahan

### Compatible Extension

Menambah field opsional atau message type tanpa mengubah makna lama.

### Controlled Change

Mengubah rule operasional yang memerlukan adaptation.

### Breaking Change

Mengubah meaning, authority, lifecycle, atau security contract.

## 24.3 Compatibility Check

Receiver memeriksa:

- protocol version;
- message type support;
- required field;
- evidence semantics;
- authority model;
- sensitivity class;
- artifact version.

## 24.4 Unknown Field

Field yang tidak dikenal tidak boleh otomatis diabaikan jika berkaitan dengan:

- authority;
- privacy;
- sensitivity;
- risk;
- consent;
- constitutional check.

Receiver harus reject atau escalate.

## 24.5 Deprecation

Version lama dapat tetap didukung selama transition.

Deprecation harus memiliki:

- status;
- reason;
- replacement;
- compatibility window;
- migration rule;
- audit impact.

## 24.6 Semantic Stability

Nama field boleh berubah pada implementasi, tetapi makna ACP tidak boleh berubah tanpa version governance.

## 24.7 Agent Upgrade

Upgrade agent harus mengevaluasi:

- conformance;
- calibration;
- authority;
- output compatibility;
- conflict behavior;
- privacy behavior;
- audit completeness.

---

# 25. Observability and Protocol Health

## 25.1 Tujuan

Protocol health menunjukkan apakah agent berkomunikasi secara benar, bukan hanya cepat.

## 25.2 Core Metrics

### Delivery Completeness

Persentase message material yang memiliki outcome status.

### Trace Completeness

Persentase keputusan material yang memiliki evidence, confidence, authority, dan constitutional trace.

### Context Precision

Proporsi context yang benar-benar material terhadap task.

### Context Leakage Rate

Frekuensi context diteruskan di luar purpose atau audience.

### Conflict Detection Rate

Kemampuan mendeteksi disagreement material.

### Conflict Resolution Quality

Proporsi conflict yang diselesaikan dengan trace dan tanpa menghapus uncertainty.

### Duplicate Task Rate

Frekuensi reasoning atau side effect berulang.

### Loop Prevention Rate

Kemampuan menghentikan circular workflow sebelum berdampak.

### Escalation Precision

Apakah escalation dilakukan pada issue yang tepat.

### Escalation Recall

Apakah issue yang seharusnya dieskalasikan benar-benar dieskalasikan.

### Evidence Lineage Completeness

Persentase evidence yang dapat ditelusuri.

### Confidence Calibration

Kesesuaian confidence dengan outcome nyata.

### Authority Violation Rate

Jumlah tindakan di luar authority.

### Privacy Violation Rate

Jumlah penggunaan data di luar purpose, consent, atau audience.

### Recovery Success Rate

Kemampuan task pulih tanpa kehilangan state atau membuat duplicate side effect.

## 25.3 Health States

Protocol atau agent dapat berada pada:

- healthy;
- monitored;
- degraded;
- restricted;
- suspended.

## 25.4 Alert Conditions

Alert diperlukan jika:

- loop meningkat;
- message hilang;
- authority violation;
- privacy leak;
- conflict tidak dilaporkan;
- trace hilang;
- confidence inflation;
- version incompatibility;
- retry storm;
- external AI anomaly.

---

# 26. Future Expansion

## 26.1 AI Coach

AI Coach membutuhkan:

- longitudinal context;
- habit and progress events;
- bounded nudging;
- user-defined goals;
- non-manipulation rule;
- clear separation antara support dan control.

Coach tidak boleh mengubah goal tanpa konfirmasi.

## 26.2 AI Mentor

AI Mentor dapat memberi strategic perspective.

Protocol harus menjaga:

- opinion versus evidence;
- mentor scope;
- domain expertise;
- uncertainty;
- no authority theater.

## 26.3 AI Recruiter

AI Recruiter membutuhkan protocol paling ketat untuk:

- employer purpose;
- job relevance;
- fairness;
- consent;
- audience separation;
- explainable screening;
- human oversight.

Recruiter tidak boleh mengakses dream memory, reflection memory, failure memory, private journal, atau coaching history tanpa dasar yang sah dan persetujuan spesifik.

## 26.4 AI Interviewer

AI Interviewer menghasilkan:

- interview event;
- evidence of response;
- structured evaluation;
- uncertainty;
- question fairness trace.

Interview performance tidak boleh dianggap sebagai identitas permanen.

## 26.5 AI Learning Agent

AI Learning Agent menggunakan:

- learning goals;
- skill gap;
- progress;
- assessment;
- roadmap;
- feedback.

Agent tidak boleh menganggap completion sebagai mastery tanpa evidence.

## 26.6 AI Career Partner

AI Career Partner dapat mengorkestrasi perjalanan panjang, tetapi tetap tunduk pada:

- user agency;
- purpose limitation;
- current state priority;
- bounded memory influence;
- correction and deletion.

## 26.7 External AI

External AI wajib masuk melalui adapter dengan:

- limited capability;
- limited data;
- output validation;
- no direct state mutation;
- audit;
- revocation.

## 26.8 Multi-model AI

Beberapa model dapat digunakan untuk:

- specialist reasoning;
- cross-check;
- cost optimization;
- language;
- safety review.

Protocol harus mencatat model family, version, task role, dan dependence agar consensus palsu dapat dideteksi.

## 26.9 Human Reviewer

Human reviewer diperlakukan sebagai actor dengan:

- identity;
- role;
- authority;
- scope;
- audience;
- decision trace;
- conflict of interest declaration.

## 26.10 Institutional Agents

Sekolah, universitas, training provider, dan employer dapat memiliki agent sendiri.

Mereka tidak otomatis mendapat akses ke user memory.

## 26.11 Autonomous Agent Networks

Jika KarirGPS berkembang menjadi agent network yang lebih otonom, ACP harus mempertahankan:

- bounded autonomy;
- explicit authority;
- task budget;
- recursion limit;
- purpose;
- human stop control;
- trace;
- conformance check.

---

# 27. End-to-End Protocol Scenarios

Bagian ini menjelaskan penggunaan ACP secara konseptual. Bagian ini bukan workflow implementasi.

## 27.1 Assessment to Recommendation

1. Assessment Agent menyelesaikan assessment.
2. Agent memublikasikan Assessment Completed.
3. Event membawa artifact reference, instrument version, date, confidence, dan limits.
4. Orchestrator membuat recommendation task.
5. Memory Agent diminta mengambil memory yang relevan saja.
6. Knowledge Agent diminta mengambil candidate dan current domain evidence.
7. Recommendation Agent menerima Context Capsule, Evidence Bundle, dan decision question.
8. Recommendation Agent menghasilkan ranking, alternatives, tradeoffs, dan uncertainty.
9. Orchestrator memeriksa conflict, state version, privacy, dan constitutional conformance.
10. Report Agent menyusun audience-specific explanation.
11. Recommendation Generated dipublikasikan.
12. Decision trace menyimpan seluruh lineage.

## 27.2 Goal Changed

1. Pengguna menyatakan goal baru.
2. Memory Agent membuat State Change Proposal.
3. Current goal dan historical goal tidak langsung digabung.
4. Jika perubahan eksplisit, perubahan dikonfirmasi.
5. Goal Changed dipublikasikan.
6. Active roadmap ditinjau.
7. Recommendation lama ditandai perlu review jika material.
8. History tetap disimpan sebagai career evolution.

## 27.3 Conflicting Assessment and Behavior

1. Assessment menunjukkan minat tinggi pada analisis.
2. Behavioral evidence menunjukkan pengguna menghindari tugas analitis.
3. Conflict Notice dibuat.
4. Agent memeriksa context, skill level, confidence, dan learning environment.
5. Sistem tidak menyimpulkan pengguna "tidak cocok".
6. Recommendation dapat tetap memasukkan jalur terkait sebagai near atau stretch match.
7. Validation step dapat berupa project kecil.
8. Conflict tetap terlihat sampai evidence baru tersedia.

## 27.4 Memory Correction

1. Pengguna menyatakan memory lama salah.
2. Correction request dikirim.
3. Memory Agent memeriksa source dan affected relationships.
4. Memory lama ditandai corrected atau revoked.
5. Memory baru dibuat dengan provenance pengguna.
6. Artifact yang terpengaruh ditandai.
7. Recommendation material dapat dihitung ulang.
8. Audit menunjukkan sebelum dan sesudah tanpa menyembunyikan koreksi.

## 27.5 Recruiter Access Restriction

1. Recruiter Agent meminta profile kandidat.
2. Authority check memeriksa employer purpose.
3. Context Capsule hanya memuat job-relevant evidence.
4. Reflection, dream, failure, dan private coaching memory tidak diteruskan.
5. Jika recruiter meminta data terlarang, Authority Error dibuat.
6. Incident dapat dieskalasikan jika permintaan berulang.
7. User-facing Career Partner tetap terpisah.

## 27.6 Agent Failure and Recovery

1. Knowledge Agent gagal mengambil knowledge snapshot.
2. ERROR menyatakan dependency failure.
3. Orchestrator memeriksa apakah artifact valid sebelumnya masih fresh.
4. Jika masih layak, task dilanjutkan sebagai provisional.
5. Jika tidak, recommendation task dipause.
6. Retry dilakukan dalam budget.
7. Jika gagal, specialist atau human review dipanggil.
8. Tidak ada recommendation pasti berdasarkan knowledge yang tidak tersedia.

## 27.7 Duplicate Event

1. Certificate Verified diterima dua kali.
2. Message ID dan evidence reference menunjukkan event sama.
3. Receiver mengakui duplicate.
4. Skill evidence tidak ditambahkan dua kali.
5. Audit mencatat duplicate delivery tanpa duplicate outcome.

## 27.8 High-impact Conflict

1. Recommendation Agent menyarankan pilihan yang sesuai minat.
2. Constraint Agent menunjukkan biaya tidak terjangkau dalam current condition.
3. Sistem tidak langsung menghapus pilihan.
4. Orchestrator membentuk scenario:
   - current feasible path;
   - financial preparation path;
   - scholarship path;
   - alternative near match.
5. User menerima tradeoff dan validation steps.
6. Keputusan tetap berada pada pengguna.

---

# 28. Agent-specific Communication Obligations

## 28.1 Assessment Agent

Wajib mengirim:

- instrument;
- date;
- normalized result;
- interpretation limits;
- confidence;
- conflict;
- validity period.

Dilarang mengirim trait label sebagai fakta permanen.

## 28.2 Memory Agent

Wajib mengirim:

- memory type;
- status;
- valid time;
- source;
- confidence;
- relevance;
- sensitivity;
- supersession.

Dilarang meneruskan memory hanya karena tersedia.

## 28.3 Recommendation Agent

Wajib mengirim:

- decision question;
- candidate set;
- ranking basis;
- fit dimensions;
- confidence;
- counterevidence;
- alternatives;
- risks;
- tradeoffs;
- next validation.

Dilarang mengirim verdict tunggal tanpa alternatives.

## 28.4 Reflection Agent

Wajib mengirim:

- time range;
- evidence;
- observed change;
- alternative interpretation;
- user correction option.

Dilarang mengubah reflection menjadi diagnosis atau label.

## 28.5 Roadmap Agent

Wajib mengirim:

- target;
- baseline;
- milestones;
- dependencies;
- assumptions;
- review points;
- adaptation rules;
- feasibility.

Dilarang menganggap roadmap sebagai kewajiban moral pengguna.

## 28.6 Report Agent

Wajib mengirim:

- audience;
- source artifact;
- redaction;
- confidence representation;
- privacy check;
- version.

Dilarang menambahkan kesimpulan baru yang tidak ada dalam source artifact.

## 28.7 Knowledge Agent

Wajib mengirim:

- knowledge object;
- source version;
- geography;
- effective date;
- freshness;
- evidence class;
- uncertainty;
- conflicts.

Dilarang menyajikan projection sebagai fact.

## 28.8 Orchestrator Agent

Wajib mengirim:

- task plan;
- delegated scope;
- dependency;
- conflict status;
- final synthesis;
- constitutional trace;
- escalation decision.

Dilarang menghapus lineage atau memperluas authority.

---

# 29. Protocol Governance

## 29.1 Ownership

ACP harus memiliki governance owner yang bertanggung jawab atas:

- version;
- conformance;
- exception;
- incident learning;
- amendment;
- deprecation.

## 29.2 Change Proposal

Perubahan ACP harus menjelaskan:

- problem;
- affected agents;
- semantic impact;
- privacy impact;
- fairness impact;
- reliability impact;
- migration;
- backward compatibility;
- audit impact.

## 29.3 Review

Perubahan material memerlukan review dari:

- AI architecture;
- AI ethics;
- privacy;
- security;
- product domain;
- operations;
- human-centered design.

## 29.4 Exception

Exception harus:

- terbatas;
- memiliki owner;
- memiliki reason;
- memiliki expiration;
- memiliki risk control;
- dapat diaudit.

Exception tidak boleh melewati constitutional invariant.

## 29.5 Conformance Testing

Setiap agent version harus diuji terhadap:

- message completeness;
- authority;
- context minimization;
- evidence preservation;
- confidence preservation;
- conflict behavior;
- lifecycle;
- loop prevention;
- error behavior;
- audit trace;
- privacy;
- version compatibility.

## 29.6 Incident Learning

Incident harus menghasilkan:

- root cause;
- affected messages;
- affected users;
- authority or context failure;
- corrective action;
- protocol update need;
- regression test.

---

# 30. Evaluation Framework

## 30.1 Semantic Accuracy

Apakah receiver memahami maksud sender dengan benar.

## 30.2 Context Relevance

Apakah context yang diteruskan cukup dan tidak berlebihan.

## 30.3 Evidence Integrity

Apakah source, transformation, dan status evidence tetap terjaga.

## 30.4 Confidence Integrity

Apakah uncertainty tidak hilang atau meningkat tanpa dasar.

## 30.5 Authority Compliance

Apakah agent bekerja dalam mandat.

## 30.6 Privacy Compliance

Apakah purpose, consent, audience, dan sensitivity dipertahankan.

## 30.7 Conflict Quality

Apakah disagreement terdeteksi dan dijelaskan.

## 30.8 Reliability

Apakah task selesai tanpa message loss, duplicate outcome, loop, atau recursion.

## 30.9 Recoverability

Apakah proses dapat pulih dari failure.

## 30.10 Auditability

Apakah keputusan material dapat ditelusuri.

## 30.11 Extensibility

Apakah agent baru dapat bergabung tanpa mengubah kontrak inti.

## 30.12 Human Comprehensibility

Apakah reviewer manusia dapat memahami trace tanpa membaca seluruh komunikasi mentah.

## 30.13 Longitudinal Consistency

Apakah komunikasi mempertahankan perubahan state dan timeline pengguna dengan benar.

---

# 31. Success Criteria

ACP dianggap berhasil ketika kondisi berikut tercapai.

## 31.1 Communication Integrity

Setiap message material memiliki:

- identity;
- intent;
- scope;
- context;
- evidence;
- confidence;
- authority;
- status;
- trace;
- version.

## 31.2 No Hidden Authority

Tidak ada agent yang mengubah state atau membuat keputusan di luar mandate.

## 31.3 Context Discipline

Agent menerima context yang cukup, relevan, dan purpose-bound.

## 31.4 Evidence Traceability

Setiap kesimpulan material dapat ditelusuri ke evidence source dan transformation.

## 31.5 Uncertainty Preservation

Confidence dan conflict tidak hilang saat pesan berpindah.

## 31.6 Reliable Coordination

Task tidak hilang, tidak menghasilkan duplicate outcome, tidak masuk infinite loop, dan memiliki stop condition.

## 31.7 Safe Failure

Kegagalan menghasilkan error yang jelas, scope yang dipersempit, recovery, atau escalation.

## 31.8 Auditable Decisions

Reviewer dapat memahami:

- siapa melakukan apa;
- menggunakan data apa;
- berdasarkan authority apa;
- dengan confidence apa;
- menghasilkan dampak apa.

## 31.9 Privacy Preservation

Data tidak berpindah ke agent atau audience yang tidak berhak.

## 31.10 Modular Growth

AI Coach, Mentor, Recruiter, Interviewer, Learning Agent, external AI, dan human reviewer dapat ditambahkan tanpa mengubah prinsip inti.

## 31.11 Constitutional Conformance

Seluruh komunikasi mendukung:

- user agency;
- fairness;
- explainability;
- privacy;
- evidence over assumption;
- growth over labeling;
- transparency over certainty.

## 31.12 User Outcome

ACP membantu KarirGPS menghasilkan keputusan yang:

- lebih konsisten;
- lebih relevan;
- lebih dapat dijelaskan;
- lebih aman;
- lebih mudah dikoreksi;
- lebih adaptif terhadap perubahan manusia.

---

# 32. Mandatory Conformance Checklist

Sebelum message material dikirim, sender harus memastikan:

- [ ] Agent identity dan version jelas.
- [ ] Receiver memiliki capability yang sesuai.
- [ ] Sender dan receiver memiliki authority.
- [ ] Intent hanya memiliki satu tujuan utama.
- [ ] Decision question jelas.
- [ ] Context minimum tersedia.
- [ ] Current state version disebutkan.
- [ ] Evidence memiliki provenance.
- [ ] Fakta dan inference dibedakan.
- [ ] Confidence memiliki basis dan scope.
- [ ] Counterevidence material tidak disembunyikan.
- [ ] Missing evidence disebutkan.
- [ ] Purpose dan audience sesuai.
- [ ] Sensitivity telah diperiksa.
- [ ] Dependencies dan stop condition jelas.
- [ ] Message dapat dideduplicasi.
- [ ] Risk dan escalation route tersedia.
- [ ] Constitutional check dilakukan.
- [ ] Audit trace dapat dibuat.

Sebelum receiver menyelesaikan task, receiver harus memastikan:

- [ ] Message version didukung.
- [ ] Scope tidak melebar.
- [ ] Context tidak stale.
- [ ] Consent masih berlaku.
- [ ] Evidence tidak expired atau revoked.
- [ ] Conflict telah diperiksa.
- [ ] Output berada dalam authority.
- [ ] Confidence tidak dinaikkan tanpa dasar.
- [ ] Side effect menghasilkan confirmation.
- [ ] Artifact memiliki version dan provenance.
- [ ] Unresolved issue tetap terlihat.
- [ ] Human escalation dilakukan jika diperlukan.
- [ ] Task berhenti pada stop condition.

---

# 33. Closing Principle

ACP membuat seluruh AI Agent KarirGPS dapat bekerja sebagai satu sistem tanpa kehilangan identitas, authority, evidence, uncertainty, privacy, dan tanggung jawab.

Protocol ini tidak bertujuan membuat agent berbicara lebih banyak. Protocol ini membuat setiap komunikasi memiliki makna yang tepat, tujuan yang sah, batas yang jelas, dan jejak yang dapat dipertanggungjawabkan.

KarirGPS hanya dapat menjadi Career Intelligence Operating System jika seluruh agent:

- memahami siapa dirinya;
- mengetahui apa yang boleh dilakukan;
- membawa context secukupnya;
- mempertahankan evidence;
- mengakui uncertainty;
- menghormati conflict;
- berhenti ketika batas tercapai;
- mengeskalasi ketika judgment manusia diperlukan;
- menjaga pengguna sebagai pemilik keputusan.

AI Agent Communication Protocol V1 menjadi fondasi agar kecerdasan KarirGPS tetap konsisten, modular, aman, dan dapat berkembang selama bertahun-tahun.
