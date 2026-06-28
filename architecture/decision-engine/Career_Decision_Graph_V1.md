# Career Decision Graph V1

**Product:** KarirGPS  
**Document Type:** Decision Intelligence Architecture Blueprint  
**Version:** 1.0  
**Status:** Design Baseline  
**Governing Document:** `governance/ai-constitution/AI_Constitution_V1.md`  
**Communication Standard:** `architecture/agent-protocol/AI_Agent_Communication_Protocol_V1.md`  
**Applies To:** Assessment, Recommendation, Memory, Reflection, Roadmap, Report, Knowledge, Orchestrator, dan seluruh specialized agent KarirGPS  
**Target Path:** `architecture/decision-engine/Career_Decision_Graph_V1.md`

---

## 0. Status dan Kedudukan Dokumen

Career Decision Graph V1, selanjutnya disebut CDG, adalah model reasoning konseptual yang wajib digunakan oleh seluruh AI Agent KarirGPS ketika:

- menilai pilihan pendidikan;
- menilai pilihan jurusan;
- membandingkan pilihan karier;
- membentuk recommendation;
- menyusun roadmap;
- menilai perubahan goal;
- menjelaskan tradeoff;
- menggunakan historical memory;
- menginterpretasikan outcome;
- memberikan reflection;
- mengevaluasi risiko keputusan;
- memilih evidence yang relevan.

CDG bukan knowledge repository. CDG bukan urutan proses teknis. CDG bukan algoritma ranking tunggal. CDG adalah struktur berpikir bersama yang menghubungkan manusia, evidence, tujuan, kapasitas, constraints, opportunity, uncertainty, dan outcome dalam satu decision space.

### 0.1 Hierarki Kepatuhan

Seluruh reasoning yang menggunakan CDG wajib mengikuti urutan berikut:

1. hak, keselamatan, martabat, dan agency pengguna;
2. consent, privacy, purpose limitation, dan fairness;
3. AI Constitution V1;
4. authority dan scope agent;
5. AI Agent Communication Protocol V1;
6. semantic rules pada CDG;
7. engine-specific logic;
8. optimasi ranking, efisiensi, atau performa.

CDG tidak boleh digunakan untuk melewati batas konstitusional. Jalur reasoning yang secara teknis konsisten tetap tidak sah jika:

- menghilangkan agency pengguna;
- menggunakan memory di luar purpose;
- mengunci identitas pengguna;
- menyembunyikan uncertainty;
- memperlakukan constraint sebagai takdir;
- memperluas audience tanpa consent;
- mengubah recommendation menjadi keputusan paksa.

### 0.2 Kelas Aturan

CDG menggunakan tiga kelas aturan:

- **Graph invariant**  
  Aturan yang tidak boleh dilanggar oleh seluruh agent.

- **Decision rule**  
  Aturan yang harus diterapkan pada kondisi keputusan tertentu.

- **Reasoning pattern**  
  Pola yang disarankan untuk menghasilkan keputusan yang konsisten dan dapat dijelaskan.

### 0.3 Graph Invariants

Seluruh agent wajib mempertahankan invariant berikut:

1. Tidak ada single signal yang boleh menentukan keputusan secara mutlak.
2. Fit dan confidence harus dipisahkan.
3. Current state dan historical state harus dibedakan.
4. Preference dan capability tidak boleh disamakan.
5. Motivation dan readiness tidak boleh disamakan.
6. Constraint dan identity tidak boleh disamakan.
7. Population trend tidak boleh diperlakukan sebagai destiny individu.
8. Evidence, inference, assumption, projection, dan recommendation harus tetap berbeda.
9. Tradeoff material harus terlihat.
10. Counterevidence material tidak boleh dihapus.
11. Missing data tidak boleh diubah menjadi kecocokan rendah tanpa alasan.
12. Recommendation harus bersifat conditional.
13. Jalur reasoning harus dapat direkonstruksi.
14. Outcome harus dapat memperbarui graph tanpa menghukum masa lalu.
15. Pengguna tetap menjadi pemilik keputusan.

---

# 1. Executive Summary

## 1.1 Apa Itu Career Decision Graph

Career Decision Graph adalah representasi konseptual tentang bagaimana KarirGPS memahami dan menilai keputusan pendidikan serta karier.

Graph menghubungkan:

- siapa pengguna saat ini;
- apa yang dianggap penting oleh pengguna;
- apa yang diminati;
- apa yang sudah dikuasai;
- apa yang masih dapat dipelajari;
- apa yang menjadi tujuan;
- apa yang menjadi batas;
- peluang apa yang tersedia;
- risiko apa yang muncul;
- tradeoff apa yang harus dipilih;
- bagaimana kondisi dapat berubah;
- evidence apa yang mendukung kesimpulan;
- seberapa yakin AI terhadap jalur reasoning;
- outcome apa yang terjadi setelah keputusan diambil.

CDG tidak mencari satu jawaban universal. CDG membentuk decision space yang memungkinkan beberapa pilihan tetap valid dalam objective, context, horizon, dan risiko yang berbeda.

## 1.2 Tujuan Utama

CDG memiliki sembilan tujuan utama:

1. menyatukan reasoning seluruh agent;
2. mencegah keputusan berdasarkan satu assessment atau satu trait;
3. menghubungkan profile dengan real-world opportunity;
4. membuat constraint dan tradeoff terlihat;
5. membedakan fit, feasibility, readiness, dan potential;
6. mempertahankan uncertainty;
7. menghasilkan recommendation path yang dapat diuji;
8. belajar dari outcome longitudinal;
9. menjelaskan alasan keputusan secara manusiawi dan dapat diaudit.

## 1.3 Mengapa Berbeda dari Knowledge Graph

Knowledge Graph menjelaskan hubungan antarobjek pengetahuan.

Contoh:

- jurusan membutuhkan mata pelajaran tertentu;
- karier membutuhkan skill tertentu;
- skill dapat dipelajari melalui program tertentu;
- pekerjaan memiliki lingkungan kerja tertentu;
- AI impact memengaruhi task pada profesi tertentu.

Career Decision Graph menjelaskan bagaimana pengetahuan tersebut menjadi relevan terhadap seorang pengguna dan sebuah keputusan.

Perbedaannya:

| Knowledge Graph | Career Decision Graph |
|---|---|
| Menjelaskan dunia | Menjelaskan decision space pengguna |
| Berisi fakta domain | Berisi state, objectives, constraints, evidence, dan alternatives |
| Relatif stabil | Berubah mengikuti waktu dan konteks |
| Menjawab apa yang berhubungan | Menjawab pilihan mana yang layak dipertimbangkan dan mengapa |
| Tidak harus memuat tradeoff personal | Wajib memuat tradeoff personal |
| Tidak harus memuat confidence keputusan | Wajib memuat confidence dan uncertainty |
| Tidak harus memuat outcome pengguna | Wajib belajar dari outcome |

Knowledge Graph memberi bahan. CDG memberi struktur reasoning.

## 1.4 Mengapa Berbeda dari Workflow

Workflow menjelaskan urutan pekerjaan atau eksekusi.

Contoh:

1. ambil assessment;
2. ambil memory;
3. lakukan scoring;
4. buat ranking;
5. buat report.

CDG tidak menjelaskan urutan teknis tersebut.

CDG menjelaskan hubungan reasoning:

- goal mana yang sedang dioptimalkan;
- evidence mana yang relevan;
- constraint mana yang menjadi gate;
- capability mana yang dapat dikembangkan;
- tradeoff mana yang harus diperlihatkan;
- scenario mana yang mengubah ranking;
- outcome mana yang mengubah pemahaman.

Workflow dapat berubah karena implementasi. CDG harus tetap stabil sebagai model keputusan.

## 1.5 Mengapa Berbeda dari Decision Tree

Decision Tree biasanya menggunakan cabang tetap:

- jika kondisi A, pilih B;
- jika tidak, pilih C.

Keputusan karier tidak bersifat sesederhana itu.

Satu pilihan dapat:

- sangat sesuai dengan minat;
- belum sesuai dengan skill saat ini;
- dapat dicapai dengan learning path;
- kurang feasible secara ekonomi saat ini;
- menjadi feasible melalui beasiswa;
- memiliki pasar kerja kuat;
- memiliki AI exposure tinggi;
- tetap menarik karena transferability tinggi.

CDG mendukung:

- banyak objective;
- banyak evidence;
- hubungan non-linear;
- conflict;
- feedback;
- perubahan waktu;
- beberapa jalur valid;
- uncertainty;
- scenario;
- reversible experiments.

Decision Tree memilih cabang. CDG mempertahankan decision landscape.

## 1.6 Posisi dalam Career Intelligence Operating System

CDG menjadi reasoning substrate yang menghubungkan:

- Knowledge Object V2 sebagai domain intelligence;
- Assessment Engine sebagai current evidence;
- Memory Engine sebagai longitudinal evidence;
- Recommendation Engine sebagai candidate evaluation;
- AI Constitution sebagai batas normatif;
- ACP sebagai bahasa komunikasi;
- Orchestrator sebagai pengelola reasoning task;
- specialized agents sebagai evaluator domain;
- outcome sebagai feedback nyata.

## 1.7 Hasil yang Diharapkan

Setiap recommendation KarirGPS harus dapat ditelusuri ke:

- decision objective;
- current user state;
- relevant history;
- candidate opportunity;
- supporting evidence;
- counterevidence;
- constraints;
- tradeoffs;
- confidence;
- uncertainty;
- validation step;
- possible next action.

---

# 2. Scope dan Non-Scope

## 2.1 Scope

CDG V1 mengatur:

- conceptual graph model;
- node taxonomy;
- edge semantics;
- decision state;
- evidence activation;
- objective alignment;
- constraint reasoning;
- candidate comparison;
- tradeoff reasoning;
- confidence propagation;
- uncertainty handling;
- recommendation path;
- outcome feedback;
- explainability;
- multi-agent integration;
- governance;
- evaluation.

## 2.2 Non-Scope

CDG V1 tidak menetapkan:

- kode;
- API;
- database;
- graph storage;
- query language;
- message serialization;
- workflow implementation;
- model vendor;
- prompt;
- mathematical scoring formula;
- user interface;
- deployment architecture.

## 2.3 Keputusan yang Dicakup

CDG dapat digunakan untuk:

- pemilihan jurusan sekolah;
- pemilihan jurusan kuliah;
- pemilihan kampus atau program;
- pemilihan vocational path;
- career exploration;
- career transition;
- specialization;
- upskilling;
- reskilling;
- internship selection;
- project selection;
- scholarship consideration;
- company matching;
- job opportunity comparison;
- founder path;
- geographic mobility;
- global career mapping.

## 2.4 Keputusan yang Tidak Boleh Diambil Sepenuhnya oleh AI

AI tidak boleh menjadi pemilik keputusan untuk:

- memilih hidup pengguna;
- memaksa jurusan;
- menutup pilihan secara permanen;
- memutuskan nilai personal pengguna;
- membuat diagnosis psikologis;
- menentukan kelayakan manusia secara mutlak;
- melakukan employment rejection tanpa governance dan human oversight;
- mengorbankan privacy demi personalization.

---

# 3. Design Principles

## 3.1 Human-centered

Graph harus merepresentasikan pengguna sebagai manusia yang berubah, bukan objek scoring tetap.

## 3.2 Multi-objective

Keputusan karier hampir selalu mengandung beberapa objective:

- minat;
- pendapatan;
- stabilitas;
- pertumbuhan;
- makna;
- lokasi;
- fleksibilitas;
- status;
- keluarga;
- health;
- learning;
- entrepreneurship.

Graph tidak boleh menyatukan semua objective menjadi satu skor tanpa menunjukkan tradeoff.

## 3.3 Evidence-driven

Setiap hubungan material harus memiliki evidence basis.

## 3.4 Explainable

Setiap recommendation path harus dapat dijelaskan sebagai rangkaian hubungan yang relevan.

## 3.5 Tradeoff-aware

Conflict bukan error. Conflict adalah properti keputusan.

## 3.6 Longitudinal

Graph harus memahami perubahan dari waktu ke waktu.

## 3.7 Adaptive

Outcome baru dapat mengubah confidence, state, dan recommendation path.

## 3.8 Constraint-aware

Constraint harus diperhitungkan secara nyata.

Constraint tidak boleh dianggap identitas permanen.

## 3.9 Opportunity-aware

Fit personal tidak cukup. Graph harus mempertimbangkan peluang nyata.

## 3.10 Potential-aware

Current readiness tidak sama dengan long-term potential.

## 3.11 Scenario-aware

Ranking dapat berubah jika objective, constraint, horizon, atau scenario berubah.

## 3.12 Confidence-aware

Graph harus menjelaskan seberapa kuat jalur reasoning, bukan hanya hasilnya.

## 3.13 Uncertainty-preserving

Informasi yang belum diketahui harus tetap terlihat.

## 3.14 Temporal

Setiap node dan edge material dapat memiliki waktu berlaku.

## 3.15 Reversible-first

Jika uncertainty tinggi, graph harus mengutamakan langkah yang dapat diuji dan dibatalkan.

## 3.16 No single signal dominance

Holland Code, personality, nilai, skill, atau market trend tidak boleh menjadi penentu tunggal.

## 3.17 Context-sensitive

Makna suatu evidence bergantung pada context.

Nilai rendah pada periode tertentu tidak otomatis berarti academic ability rendah secara permanen.

## 3.18 Growth-oriented

Gap dapat menjadi learning requirement, bukan exclusion otomatis.

## 3.19 Fairness-aware

Graph tidak boleh menggunakan protected atau irrelevant personal attributes untuk mempersempit peluang secara tidak sah.

## 3.20 Privacy-bound

Node hanya aktif untuk reasoning jika purpose dan authority mengizinkan.

## 3.21 Counterfactual

Graph harus dapat menilai perubahan hasil jika kondisi berubah.

Contoh:

- jika biaya tidak menjadi masalah;
- jika lokasi fleksibel;
- jika skill gap diselesaikan;
- jika target gaji diturunkan sementara;
- jika pengguna memilih horizon lima tahun.

## 3.22 Auditable

Jalur reasoning harus dapat direkonstruksi tanpa membuka private chain of thought.

## 3.23 Modular

Node, edge, agent, dan domain baru dapat ditambahkan tanpa mengubah prinsip inti.

## 3.24 Decision-specific

Graph aktif dibentuk berdasarkan decision question.

Tidak semua node pengguna harus dipakai pada setiap keputusan.

## 3.25 User agency preserving

Graph menyusun pilihan, bukan mengambil alih pilihan.

---

# 4. Conceptual Anatomy of the Graph

## 4.1 Decision Graph Instance

CDG bukan satu graph statis untuk seluruh pengguna.

Setiap keputusan membentuk **Decision Graph Instance**.

Instance memiliki:

- subject;
- decision question;
- current state timestamp;
- active goal;
- decision horizon;
- candidate set;
- active evidence;
- active constraints;
- objectives;
- scenarios;
- confidence;
- unresolved uncertainty;
- outcome status.

## 4.2 Graph Views

Satu Decision Graph Instance dapat dilihat melalui beberapa view.

### Person State View

Menunjukkan kondisi pengguna saat ini.

### Longitudinal View

Menunjukkan perubahan user state dari waktu ke waktu.

### Opportunity View

Menunjukkan jurusan, karier, program, project, scholarship, dan perusahaan yang relevan.

### Fit View

Menunjukkan alignment dan mismatch.

### Feasibility View

Menunjukkan resource, access, prerequisite, dan constraints.

### Growth View

Menunjukkan gap yang dapat dipelajari.

### Risk View

Menunjukkan uncertainty, downside, reversibility, dan exposure.

### Tradeoff View

Menunjukkan objective yang saling bersaing.

### Decision Path View

Menunjukkan jalur dari evidence ke recommendation.

### Outcome View

Menunjukkan hasil nyata dan feedback.

## 4.3 Core Graph Layers

CDG terdiri dari sembilan lapisan konseptual.

1. **Evidence Layer**  
   Fakta, assessment, behavior, document, outcome, dan external knowledge.

2. **User State Layer**  
   Current interests, values, skills, readiness, goals, preferences, dan constraints.

3. **Temporal Layer**  
   Validity, change, supersession, stability, dan trend.

4. **Opportunity Layer**  
   Jurusan, karier, program, role, project, dan pathway.

5. **Objective Layer**  
   Hal yang ingin dioptimalkan.

6. **Constraint Layer**  
   Batas keras, batas lunak, dependency, dan gate.

7. **Decision Layer**  
   candidate, scenario, tradeoff, fit, feasibility, risk, dan recommendation.

8. **Action Layer**  
   next step, experiment, roadmap, validation, dan preparation.

9. **Outcome Layer**  
   result, progress, feedback, regret, satisfaction, dan new evidence.

## 4.4 Node State

Setiap node material memiliki status konseptual:

- active;
- historical;
- provisional;
- inferred;
- confirmed;
- disputed;
- superseded;
- expired;
- blocked;
- dormant;
- scenario-specific.

## 4.5 Node Attributes

Setiap node material dapat memiliki:

- type;
- meaning;
- source;
- effective time;
- current status;
- confidence;
- importance;
- decision relevance;
- sensitivity;
- owner;
- version;
- dependencies;
- relationships;
- expiration;
- correction state.

## 4.6 Decision Horizon

Graph wajib membedakan horizon:

- immediate;
- short-term;
- medium-term;
- long-term;
- exploratory.

Pilihan yang tidak feasible sekarang dapat menjadi feasible pada horizon berbeda.

## 4.7 Decision Objective

Graph harus mendefinisikan pertanyaan yang sedang dijawab.

Contoh:

- Jurusan apa yang paling layak dipertimbangkan sekarang?
- Karier apa yang paling sesuai dengan profile dan target lima tahun?
- Apakah career switch realistis dalam dua tahun?
- Skill apa yang paling bernilai untuk dipelajari berikutnya?
- Pilihan mana yang paling aman jika biaya menjadi constraint utama?
- Pilihan mana yang memberi upside terbesar jika pengguna menerima risiko lebih tinggi?

Tanpa decision question, graph tidak boleh menghasilkan ranking final.

---

# 5. Decision Node Taxonomy

## 5.1 Identity Node

### Fungsi

Menyimpan identity context yang relevan terhadap keputusan.

Contoh:

- stage of life;
- education stage;
- current role;
- language;
- citizenship jika relevan;
- current responsibility.

### Batas

Identity tidak boleh diperlakukan sebagai penentu capability atau destiny.

## 5.2 Interest Node

### Fungsi

Merepresentasikan topik, aktivitas, domain, dan problem yang menarik perhatian pengguna.

Interest dapat berasal dari:

- assessment;
- eksplorasi;
- project;
- curiosity;
- repeated behavior;
- self-report.

### Catatan

Interest tinggi tidak selalu berarti skill tinggi. Interest dapat berubah setelah exposure nyata.

## 5.3 Personality and Behavioral Tendency Node

### Fungsi

Merepresentasikan kecenderungan bekerja, berinteraksi, mengambil risiko, mengatur diri, dan merespons lingkungan.

Sumber dapat mencakup:

- Big Five;
- future personality evidence;
- behavior pattern;
- structured observation.

### Catatan

Personality adalah tendency, bukan larangan.

Introvert dapat berhasil pada Public Relations jika memiliki motivation, skill, strategy, dan environment yang sesuai.

## 5.4 Work Values Node

### Fungsi

Menjelaskan apa yang dianggap penting dalam kerja.

Contoh:

- autonomy;
- stability;
- income;
- social impact;
- recognition;
- creativity;
- mastery;
- flexibility;
- leadership;
- belonging.

### Peran

Values sering menjadi sumber tradeoff utama.

## 5.5 Lifestyle Preference Node

### Fungsi

Menjelaskan bentuk kehidupan yang ingin didukung oleh pilihan karier.

Contoh:

- work hours;
- travel;
- remote work;
- predictable schedule;
- urban or rural life;
- physical demands;
- family time.

## 5.6 Cognitive Preference Node

### Fungsi

Menunjukkan cara problem solving yang lebih disukai.

Contoh:

- verbal;
- numerical;
- spatial;
- interpersonal;
- analytical;
- creative;
- practical;
- systems thinking.

### Batas

Preference bukan ability.

## 5.7 Skill Node

### Fungsi

Menjelaskan kompetensi yang telah memiliki evidence.

Skill dapat berupa:

- foundational;
- technical;
- digital;
- interpersonal;
- management;
- communication;
- creative;
- entrepreneurial;
- domain-specific.

### Atribut penting

- proficiency;
- evidence;
- recency;
- transferability;
- rate of improvement;
- context of use.

## 5.8 Academic Readiness Node

### Fungsi

Menilai kesiapan mengikuti tuntutan akademik atau training tertentu.

Sumber:

- nilai;
- coursework;
- prerequisite;
- test;
- project;
- teacher feedback.

### Catatan

Readiness saat ini tidak sama dengan potential.

## 5.9 Learning Ability Node

### Fungsi

Menilai kemampuan memperoleh kompetensi baru.

Sinyal:

- improvement rate;
- learning strategy;
- persistence;
- transfer;
- response to feedback;
- prior mastery.

### Batas

Learning ability tidak boleh disimpulkan hanya dari satu nilai.

## 5.10 Learning Preference Node

### Fungsi

Menjelaskan format belajar yang paling efektif atau disukai.

Contoh:

- structured class;
- project-based;
- mentor-guided;
- independent;
- visual;
- collaborative;
- practice-intensive.

## 5.11 Motivation Node

### Fungsi

Menunjukkan energi dan kemauan untuk mengejar pilihan tertentu.

Motivation dapat:

- tinggi tetapi tidak stabil;
- tinggi pada satu goal;
- rendah karena constraint;
- meningkat setelah exposure;
- menurun karena mismatch.

### Catatan

Motivation tidak menggantikan prerequisite, tetapi dapat meningkatkan probability of growth.

## 5.12 Self-efficacy Node

### Fungsi

Menjelaskan keyakinan pengguna terhadap kemampuannya menyelesaikan task.

Self-efficacy dapat berbeda dari actual skill.

Graph harus mendeteksi:

- underconfidence;
- calibrated confidence;
- overconfidence.

## 5.13 Aspiration and Dream Node

### Fungsi

Merepresentasikan arah yang ingin dicapai, termasuk aspirasi yang belum feasible.

Aspirasi tidak boleh dihapus hanya karena belum realistis saat ini.

Graph harus mengubah aspirasi menjadi:

- target;
- exploratory path;
- staged path;
- validation plan;
- alternative route.

## 5.14 Career Goal Node

### Fungsi

Menjelaskan outcome karier yang sedang dituju.

Goal harus memiliki:

- status;
- horizon;
- priority;
- specificity;
- source;
- stability;
- dependencies.

## 5.15 Education Goal Node

### Fungsi

Menjelaskan target pendidikan, credential, program, atau specialization.

## 5.16 Decision Objective Node

### Fungsi

Menentukan apa yang sedang dioptimalkan pada keputusan tertentu.

Contoh:

- highest fit;
- fastest employability;
- lowest cost;
- highest long-term upside;
- best location compatibility;
- strongest stability;
- strongest transferability.

## 5.17 Non-negotiable Node

### Fungsi

Merepresentasikan kondisi yang tidak dapat dilanggar menurut pengguna atau governance.

Contoh:

- harus berada di kota tertentu;
- tidak dapat bekerja shift malam;
- program harus terjangkau;
- tidak ingin pekerjaan dengan travel intensif.

Non-negotiable harus dikonfirmasi. AI tidak boleh menciptakannya dari preference lemah.

## 5.18 Preference Node

### Fungsi

Merepresentasikan pilihan yang diinginkan tetapi masih dapat dinegosiasikan.

Preference memiliki priority dan flexibility.

## 5.19 Economic Constraint Node

### Fungsi

Menjelaskan affordability, income need, funding, debt tolerance, dan opportunity cost.

Constraint ekonomi harus dinilai pada horizon waktu dan scenario.

## 5.20 Family Context Node

### Fungsi

Menjelaskan responsibility, support, expectation, dependency, dan conflict keluarga yang relevan.

Family context tidak boleh digunakan untuk menghilangkan agency pengguna.

## 5.21 Geographic Context Node

### Fungsi

Menjelaskan:

- current location;
- mobility;
- migration preference;
- visa;
- regional access;
- cost of living;
- local opportunity;
- remote possibility.

## 5.22 Health and Accessibility Constraint Node

### Fungsi

Merepresentasikan kebutuhan akses atau batas yang memang relevan dan diizinkan untuk digunakan.

Node ini membutuhkan privacy dan sensitivity control tinggi.

## 5.23 Time Constraint Node

### Fungsi

Menjelaskan waktu yang tersedia untuk belajar, transisi, bekerja, atau memenuhi prerequisite.

## 5.24 Resource Node

### Fungsi

Menjelaskan sumber daya yang mendukung pilihan:

- financial support;
- device;
- internet;
- mentor;
- network;
- transportation;
- portfolio access;
- institution access.

## 5.25 Risk Tolerance Node

### Fungsi

Menjelaskan sejauh mana pengguna menerima:

- income uncertainty;
- career volatility;
- relocation;
- long learning period;
- entrepreneurship risk;
- market risk.

Risk tolerance tidak boleh disamakan dengan kemampuan menanggung risiko.

## 5.26 Risk Capacity Node

### Fungsi

Menjelaskan kemampuan nyata menghadapi downside.

Seseorang dapat menyukai risiko tetapi tidak memiliki financial buffer.

## 5.27 Career Candidate Node

### Fungsi

Merepresentasikan profesi, role, specialization, atau career family yang dinilai.

## 5.28 Education Candidate Node

### Fungsi

Merepresentasikan jurusan, program, vocational track, credential, atau learning pathway.

## 5.29 Company and Work Environment Node

### Fungsi

Merepresentasikan karakter organisasi dan lingkungan kerja.

Contoh:

- startup;
- enterprise;
- public sector;
- nonprofit;
- remote;
- field;
- laboratory;
- client-facing.

## 5.30 Opportunity Node

### Fungsi

Merepresentasikan peluang konkret atau kelas peluang.

Contoh:

- internship;
- scholarship;
- project;
- role;
- mentor;
- program;
- community;
- competition.

## 5.31 Prerequisite Node

### Fungsi

Menjelaskan syarat yang harus dipenuhi.

Prerequisite dapat:

- hard;
- soft;
- formal;
- learnable;
- substitutable;
- time-bound.

## 5.32 Skill Gap Node

### Fungsi

Menjelaskan perbedaan antara current skill dan required skill.

Gap harus memiliki:

- size;
- criticality;
- learnability;
- estimated effort class;
- evidence;
- validation method.

## 5.33 Learning Path Node

### Fungsi

Menjelaskan jalur untuk menutup gap.

## 5.34 Labor Market Node

### Fungsi

Merepresentasikan demand, competition, role availability, entry barrier, geographic distribution, dan trend.

Market data adalah context, bukan destiny individu.

## 5.35 Income Node

### Fungsi

Merepresentasikan:

- entry income;
- progression;
- variability;
- ceiling;
- cost-adjusted income;
- uncertainty.

Target gaji harus dibandingkan dengan horizon dan location.

## 5.36 AI Impact Node

### Fungsi

Menilai bagaimana AI memengaruhi:

- task;
- role composition;
- entry barrier;
- productivity;
- skill demand;
- augmentation;
- displacement risk;
- new opportunity.

AI impact tidak boleh disederhanakan menjadi profesi "aman" atau "hilang".

## 5.37 Transferability Node

### Fungsi

Menilai seberapa mudah skill dan experience berpindah ke role lain.

Transferability mengurangi downside dari ketidakpastian pasar.

## 5.38 Stability Node

### Fungsi

Menilai kestabilan employment, income, demand, dan institution.

## 5.39 Growth Potential Node

### Fungsi

Menilai kemungkinan perkembangan:

- skill;
- responsibility;
- income;
- leadership;
- specialization;
- entrepreneurship.

## 5.40 Meaning and Impact Node

### Fungsi

Menilai alignment dengan kontribusi atau purpose yang dianggap penting pengguna.

## 5.41 Reversibility Node

### Fungsi

Menilai seberapa mudah keputusan diuji, diubah, atau ditinggalkan.

Contoh:

- mengikuti project pendek sangat reversible;
- mengambil utang pendidikan besar kurang reversible.

## 5.42 Switching Cost Node

### Fungsi

Menilai biaya berpindah dari satu path ke path lain.

Biaya dapat berupa:

- waktu;
- uang;
- credential;
- identity cost;
- opportunity cost;
- network loss.

## 5.43 Tradeoff Node

### Fungsi

Merepresentasikan konflik nyata antara objective atau alternatives.

Tradeoff harus memiliki:

- competing objectives;
- affected candidates;
- severity;
- user priority;
- scenario;
- possible mitigation.

## 5.44 Scenario Node

### Fungsi

Merepresentasikan kondisi alternatif.

Contoh:

- dengan scholarship;
- tanpa relocation;
- dengan dua tahun preparation;
- target income lebih rendah pada tahun pertama;
- remote work tersedia;
- market demand menurun.

## 5.45 Decision Gate Node

### Fungsi

Menentukan kondisi yang harus dipenuhi sebelum candidate dapat dianggap actionable.

Gate dapat berasal dari:

- governance;
- safety;
- legal requirement;
- prerequisite;
- affordability;
- access;
- user non-negotiable.

Gate bukan skor.

## 5.46 Fit Node

### Fungsi

Merepresentasikan alignment antara user state dan candidate pada dimensi tertentu.

Fit harus multidimensional.

## 5.47 Feasibility Node

### Fungsi

Merepresentasikan kemungkinan candidate dapat diwujudkan dalam horizon dan constraint tertentu.

## 5.48 Readiness Node

### Fungsi

Merepresentasikan kesiapan memulai sekarang.

Candidate dapat memiliki fit tinggi dan readiness rendah.

## 5.49 Potential Node

### Fungsi

Merepresentasikan kemungkinan berkembang menuju requirement pada horizon tertentu.

## 5.50 Risk Node

### Fungsi

Merepresentasikan downside, uncertainty, dependency, dan exposure.

## 5.51 Confidence Node

### Fungsi

Menjelaskan kekuatan evidence dan reasoning.

Confidence bukan fit.

## 5.52 Uncertainty Node

### Fungsi

Menjelaskan apa yang belum diketahui atau tidak dapat dipastikan.

## 5.53 Recommendation Node

### Fungsi

Merepresentasikan candidate yang disarankan beserta category, reason, condition, confidence, risk, dan next action.

## 5.54 Alternative Node

### Fungsi

Merepresentasikan pilihan lain yang valid dengan objective atau tradeoff berbeda.

## 5.55 Action Node

### Fungsi

Merepresentasikan langkah yang dapat dilakukan.

Contoh:

- project trial;
- course;
- conversation;
- shadowing;
- portfolio task;
- application;
- scholarship search;
- prerequisite preparation.

## 5.56 Validation Node

### Fungsi

Merepresentasikan cara mengurangi uncertainty.

## 5.57 Outcome Node

### Fungsi

Merepresentasikan hasil nyata.

Contoh:

- completion;
- performance;
- satisfaction;
- persistence;
- income;
- offer;
- rejection;
- skill growth;
- goal change.

## 5.58 Reflection Node

### Fungsi

Merepresentasikan makna yang diberikan pengguna terhadap outcome.

Outcome dan reflection tidak selalu sama.

## 5.59 Evidence Node

### Fungsi

Menjadi dasar setiap assertion.

## 5.60 Assumption Node

### Fungsi

Menyimpan assumption yang digunakan dalam reasoning.

Assumption harus dapat diuji atau dicabut.

---

# 6. Edge Relationship Taxonomy

## 6.1 Tujuan Edge

Edge menjelaskan makna hubungan antar-node.

Edge bukan sekadar koneksi. Edge harus menjelaskan:

- direction;
- relationship type;
- polarity;
- confidence;
- evidence;
- time;
- scope;
- strength;
- conditionality.

## 6.2 Alignment Edges

### ALIGNS_WITH

Node mendukung kecocokan dengan candidate atau objective.

### PARTIALLY_ALIGNS_WITH

Alignment hanya terjadi pada beberapa dimensi.

### MISALIGNS_WITH

Terdapat mismatch.

Mismatch tidak selalu menjadi exclusion.

### SATISFIES

Candidate memenuhi objective atau requirement.

## 6.3 Evidence Edges

### SUPPORTS

Evidence memperkuat assertion.

### CONTRADICTS

Evidence menentang assertion.

### INDICATES

Evidence memberi sinyal tetapi belum membuktikan.

### VALIDATES

Evidence mengonfirmasi assertion melalui validation.

### WEAKENS

Evidence mengurangi confidence.

### DERIVED_FROM

Node merupakan hasil transformasi atau inference dari evidence.

## 6.4 Capability Edges

### DEMONSTRATES

Outcome atau project menunjukkan skill.

### REQUIRES

Candidate membutuhkan skill, credential, behavior, atau condition.

### BENEFITS_FROM

Candidate akan lebih mudah jika node tersedia, tetapi bukan prerequisite mutlak.

### TRANSFERS_TO

Skill dapat digunakan pada candidate lain.

### COMPENSATES_FOR

Satu strength dapat mengurangi dampak gap tertentu.

Compensation tidak boleh digunakan untuk melewati hard prerequisite.

## 6.5 Constraint Edges

### CONSTRAINS

Node mengurangi feasibility.

### BLOCKS

Node membuat candidate tidak actionable dalam current scenario.

### LIMITS

Node membatasi objective atau scope.

### DELAYS

Node tidak memblokir, tetapi memperpanjang time horizon.

### INCREASES_COST_OF

Node meningkatkan biaya atau effort.

### REQUIRES_MITIGATION

Candidate membutuhkan tindakan mitigasi.

## 6.6 Growth Edges

### CAN_DEVELOP_INTO

Current state dapat berkembang menuju target state.

### LEARNABLE_THROUGH

Gap dapat ditutup melalui learning path.

### PREPARES_FOR

Action meningkatkan readiness.

### ENABLES

Node membuka candidate atau opportunity.

### ACCELERATES

Node mempercepat progress.

## 6.7 Decision Edges

### CANDIDATE_FOR

Opportunity menjadi candidate untuk decision question.

### PREFERRED_OVER

Candidate lebih sesuai pada objective tertentu.

### ALTERNATIVE_TO

Candidate menjadi alternatif meaningful.

### NEAR_MATCH_TO

Candidate memiliki alignment kuat tetapi membutuhkan adaptation.

### STRETCH_PATH_TO

Candidate membutuhkan gap closure atau risiko lebih besar.

### SAFE_PATH_TO

Candidate memiliki readiness dan feasibility relatif kuat.

### DOMINATED_BY

Candidate lebih buruk pada semua objective material dalam scenario yang sama.

Edge ini harus digunakan hati-hati karena objective dapat berubah.

## 6.8 Tradeoff Edges

### TRADES_OFF_WITH

Dua objective sulit dimaksimalkan bersamaan.

### SACRIFICES

Candidate mengurangi objective tertentu.

### PRESERVES

Candidate mempertahankan objective.

### OPTIMIZES

Candidate memprioritaskan objective.

### BALANCES

Candidate memberi kompromi.

## 6.9 Risk Edges

### EXPOSES_TO

Candidate membawa risk tertentu.

### MITIGATES

Action atau resource mengurangi risk.

### AMPLIFIES

Condition meningkatkan risk.

### DEPENDS_ON

Outcome sangat bergantung pada node lain.

### FAILS_IF

Condition tertentu membuat path gagal.

## 6.10 Temporal Edges

### EVOLVES_FROM

State baru berkembang dari state lama.

### SUPERSEDES

State baru menggantikan current validity state lama.

### REMAINS_RELEVANT_FROM

Historical node masih material.

### VALID_DURING

Node berlaku pada periode tertentu.

### OBSERVED_AT

Evidence dicatat pada waktu tertentu.

### CHANGED_AFTER

Perubahan terjadi setelah event tertentu.

### STABILIZED_OVER

Node menunjukkan kestabilan selama periode.

## 6.11 Outcome Edges

### RESULTED_IN

Decision atau action menghasilkan outcome.

### CONTRIBUTED_TO

Node berkontribusi tetapi tidak diklaim sebagai sebab tunggal.

### FAILED_TO_PRODUCE

Action tidak menghasilkan outcome yang diharapkan.

### UPDATED_BY

State berubah karena outcome.

### CONFIRMS_PATH

Outcome memperkuat recommendation path.

### CHALLENGES_PATH

Outcome menantang assumption atau fit.

## 6.12 Reflection Edges

### INTERPRETED_AS

Pengguna atau Reflection Agent memberi makna terhadap outcome.

### REFRAMES

Reflection mengubah cara memahami evidence lama.

### MOTIVATES

Reflection meningkatkan motivation terhadap goal.

### REDUCES_CONFIDENCE_IN

Reflection atau outcome mengurangi confidence.

## 6.13 Governance Edges

### ALLOWED_FOR

Node dapat digunakan untuk purpose tertentu.

### RESTRICTED_FROM

Node tidak boleh digunakan untuk purpose atau audience tertentu.

### REQUIRES_CONSENT

Penggunaan memerlukan consent.

### REQUIRES_HUMAN_REVIEW

Decision path memerlukan reviewer manusia.

## 6.14 Edge Properties

Setiap edge material harus dapat membawa:

- source;
- evidence references;
- confidence;
- strength class;
- direction;
- polarity;
- valid time;
- scenario;
- objective;
- sensitivity;
- status;
- version;
- explanation label.

## 6.15 Edge Precedence

Tidak semua edge memiliki kedudukan sama.

Urutan umum:

1. governance and safety gate;
2. confirmed non-negotiable;
3. hard prerequisite;
4. verified constraint;
5. strong current evidence;
6. relevant longitudinal evidence;
7. inferred tendency;
8. market projection;
9. assumption.

Urutan ini tidak menggantikan judgment. Urutan ini mencegah weak inference mengalahkan hard condition.

---

# 7. Decision State Model

## 7.1 Current State

Current State adalah representasi keadaan pengguna yang berlaku untuk decision question saat ini.

Current State tidak sama dengan seluruh memory.

## 7.2 Desired State

Desired State menjelaskan kondisi yang ingin dicapai.

Desired State dapat berupa:

- role;
- income;
- competence;
- lifestyle;
- location;
- education;
- impact;
- autonomy.

## 7.3 Gap State

Gap State menghubungkan current dan desired state.

Gap dapat:

- learnable;
- resource-dependent;
- time-dependent;
- uncertain;
- blocked;
- substitutable.

## 7.4 Feasible State

Feasible State adalah kondisi yang dapat dicapai dalam scenario dan horizon tertentu.

## 7.5 Decision State

Decision State merangkum:

- current state;
- desired state;
- candidate set;
- active objectives;
- constraints;
- tradeoffs;
- evidence;
- confidence;
- uncertainty;
- next decision point.

## 7.6 State Validity

Decision State harus memiliki:

- effective time;
- source versions;
- current goal version;
- memory snapshot reference;
- knowledge snapshot reference;
- expiration or review trigger.

---

# 8. Decision Flow as Reasoning Movement

Bagian ini menjelaskan gerak reasoning, bukan workflow implementasi.

## 8.1 Frame the Decision

AI harus menentukan:

- keputusan apa yang sedang dibantu;
- siapa pemilik keputusan;
- horizon apa yang berlaku;
- objective apa yang penting;
- constraints apa yang material;
- hasil apa yang tidak sedang diputuskan.

Tanpa framing, ranking tidak sah.

## 8.2 Establish Current State

AI membentuk current state dari evidence yang relevan.

AI harus membedakan:

- what is known;
- what is self-reported;
- what is inferred;
- what is historical;
- what is uncertain.

## 8.3 Activate Relevant Historical Memory

Historical memory digunakan hanya jika dapat mengubah interpretasi.

Contoh penggunaan yang sah:

- minat konsisten selama beberapa tahun;
- skill berkembang;
- goal baru menggantikan goal lama;
- constraint berulang;
- prior decision menghasilkan outcome.

Historical memory tidak digunakan hanya karena tersedia.

## 8.4 Define Objectives and Priorities

AI mengidentifikasi:

- objective utama;
- objective sekunder;
- non-negotiable;
- flexible preference;
- risk tolerance;
- decision horizon.

Jika priority belum jelas, AI mempertahankan beberapa scenario.

## 8.5 Retrieve Candidate Space

Candidate diambil dari Knowledge Engine melalui:

- direct alignment;
- adjacent possibility;
- aspirational path;
- transferability;
- opportunity;
- alternative route;
- constraint-aware route.

Candidate retrieval harus menjaga diversity.

## 8.6 Apply Decision Gates

Sebelum fit comparison, AI memeriksa:

- authority;
- safety;
- legality;
- user non-negotiable;
- hard prerequisite;
- access;
- affordability;
- time criticality.

Gate dapat menghasilkan:

- pass;
- conditional pass;
- deferred;
- blocked;
- requires validation.

## 8.7 Evaluate Multi-dimensional Fit

AI menilai:

- interest fit;
- value fit;
- skill fit;
- academic readiness;
- learning fit;
- environment fit;
- lifestyle fit;
- aspiration fit;
- career outcome fit;
- labor market fit;
- AI future fit;
- transferability.

Fit tidak boleh dijadikan satu klaim tanpa dimensi.

## 8.8 Evaluate Feasibility

AI memeriksa apakah pilihan dapat dilakukan:

- sekarang;
- setelah preparation;
- dengan resource tambahan;
- pada location lain;
- melalui pathway alternatif;
- dalam horizon berbeda.

## 8.9 Evaluate Growth Path

Gap tidak langsung menjadi alasan penolakan.

AI memeriksa:

- learnability;
- motivation;
- evidence of growth;
- prerequisite sequence;
- available learning path;
- time;
- cost;
- validation option.

## 8.10 Evaluate Opportunity and Market Context

AI memeriksa:

- availability;
- competition;
- income;
- geographic distribution;
- employer demand;
- AI impact;
- volatility;
- transferability.

Market context tidak boleh mengalahkan personal objective secara otomatis.

## 8.11 Expose Tradeoffs

AI harus menunjukkan objective mana yang:

- diperkuat;
- dikorbankan;
- ditunda;
- bergantung pada scenario.

## 8.12 Build Scenarios

Jika conflict material tidak dapat diselesaikan dengan satu ranking, AI membangun scenario.

Contoh:

- stability-first;
- growth-first;
- low-cost;
- local-only;
- global-ready;
- short-term employability;
- long-term aspiration.

## 8.13 Classify Recommendation Path

Candidate diklasifikasikan sebagai:

- Safe Match;
- Near Match;
- Stretch Match;
- Explore First;
- Deferred;
- Blocked Under Current Conditions.

Safe, Near, dan Stretch bukan urutan nilai manusia. Kategori menunjukkan hubungan antara fit, readiness, feasibility, gap, dan risk.

## 8.14 Determine Confidence

AI menilai confidence per path berdasarkan:

- evidence quality;
- evidence coverage;
- consistency;
- freshness;
- candidate knowledge;
- scenario stability;
- unresolved uncertainty.

## 8.15 Generate Validation and Next Action

Jika uncertainty material, AI menghasilkan langkah untuk belajar lebih banyak.

Contoh:

- mini project;
- course trial;
- informational interview;
- job shadowing;
- portfolio task;
- academic preparation;
- cost verification;
- scholarship exploration.

## 8.16 Stop Reasoning

Reasoning berhenti ketika:

- decision question telah dijawab secara proporsional;
- alternatives telah tersedia;
- tradeoff telah dijelaskan;
- uncertainty telah dinyatakan;
- next action tersedia;
- additional reasoning tidak memberi nilai material.

---

# 9. Tradeoff Engine

## 9.1 Tujuan

Tradeoff Engine memastikan AI tidak menyembunyikan konflik di balik ranking tunggal.

## 9.2 Struktur Tradeoff

Setiap tradeoff harus menjelaskan:

- objective yang bersaing;
- mengapa konflik terjadi;
- candidate yang terdampak;
- horizon;
- severity;
- reversibility;
- mitigation;
- pihak yang berhak menentukan priority.

## 9.3 Objective Classes

### Outcome Objective

Contoh:

- income;
- stability;
- impact;
- leadership;
- employability.

### Experience Objective

Contoh:

- enjoyment;
- autonomy;
- collaboration;
- creativity;
- work-life balance.

### Constraint Objective

Contoh:

- low cost;
- local access;
- short duration;
- family responsibility.

### Growth Objective

Contoh:

- skill development;
- global mobility;
- entrepreneurship;
- specialization.

## 9.4 Priority Classes

- non-negotiable;
- high priority;
- preferred;
- neutral;
- low priority;
- avoid.

AI tidak boleh menentukan priority personal tanpa evidence.

## 9.5 Passion vs Income

Graph tidak boleh menyimpulkan bahwa pengguna harus memilih salah satu.

AI harus menilai:

- apakah passion dapat menjadi role utama;
- apakah passion dapat menjadi specialization;
- apakah income gap hanya short-term;
- apakah ada adjacent role;
- apakah staged path memungkinkan;
- apakah dual-track option realistis;
- apakah passion telah diuji melalui experience.

Possible paths:

- passion-first;
- income-first;
- staged transition;
- hybrid role;
- portfolio career;
- explore first.

## 9.6 Stability vs Growth

AI menilai:

- risk tolerance;
- risk capacity;
- responsibility;
- financial buffer;
- transferability;
- downside;
- reversibility.

Pilihan growth tinggi dapat menjadi Stretch Match. Pilihan stabil dapat menjadi Safe Match. Keduanya dapat tetap valid.

## 9.7 Local vs Global

AI menilai:

- language;
- credential recognition;
- visa;
- mobility;
- family context;
- cost;
- remote pathway;
- global skill standards;
- timeline.

Global path tidak boleh dipresentasikan sebagai selalu lebih baik.

## 9.8 Family vs Personal Goal

AI harus:

- menghormati family context;
- menjaga user agency;
- memisahkan expectation dan non-negotiable;
- menilai possible compromise;
- mempertimbangkan timing;
- tidak menghakimi keputusan pengguna.

## 9.9 Short-term vs Long-term

AI harus membedakan:

- immediate employability;
- foundational learning;
- long-term ceiling;
- switching cost;
- staged path;
- opportunity cost.

## 9.10 Meaning vs Market Demand

Graph dapat menjaga purpose melalui:

- domain specialization;
- industry choice;
- volunteer track;
- role adjacency;
- later transition;
- impact-oriented employer.

## 9.11 Remote Flexibility vs Career Acceleration

AI menilai apakah remote preference:

- flexible preference;
- current constraint;
- permanent need;
- available in target role;
- limiting mentorship or network;
- increasing geographic access.

## 9.12 Resolution Patterns

### Priority Resolution

Pengguna menyatakan objective utama.

### Scenario Resolution

Ranking berbeda dibuat untuk scenario berbeda.

### Staged Resolution

Objective dipenuhi dalam urutan waktu.

### Mitigation Resolution

Risk dikurangi melalui action.

### Compensation Resolution

Strength lain mengurangi gap.

### Reversible Experiment

Pengguna mencoba pilihan dengan downside kecil.

### Constraint Relaxation

Preference tertentu dilonggarkan setelah dikonfirmasi.

### Decision Deferral

Keputusan ditunda karena evidence belum cukup.

### Accepted Tradeoff

Pengguna menerima downside secara sadar.

## 9.13 Non-compensatory Conditions

Beberapa condition tidak boleh ditutupi oleh score tinggi pada dimensi lain.

Contoh:

- requirement legal;
- safety;
- explicit non-negotiable;
- unaffordable cost tanpa funding path;
- prerequisite yang tidak dapat diganti;
- prohibited data use.

---

# 10. Confidence Propagation

## 10.1 Tujuan

Confidence Propagation menjelaskan bagaimana keyakinan terhadap node, edge, path, dan recommendation dibentuk.

## 10.2 Confidence Levels

CDG dapat menggunakan kelas:

- high;
- medium-high;
- medium;
- medium-low;
- low;
- indeterminate.

Kelas harus disertai alasan.

## 10.3 Local Confidence

Local confidence melekat pada:

- evidence;
- node;
- edge;
- inference.

## 10.4 Path Confidence

Path confidence menilai kekuatan keseluruhan jalur dari evidence menuju recommendation.

Path confidence dipengaruhi oleh titik terlemah yang material.

Contoh:

- interest evidence kuat;
- skill evidence kuat;
- market knowledge stale;
- economic feasibility belum diketahui.

Hasilnya tidak boleh diberi confidence tinggi secara keseluruhan.

## 10.5 Decision Confidence

Decision confidence menjawab:

"Seberapa yakin AI bahwa recommendation set ini relevan untuk decision question saat ini?"

Decision confidence berbeda dari confidence bahwa candidate pasti berhasil.

## 10.6 Propagation Principles

### Provenance Preservation

Confidence harus dapat ditelusuri ke evidence.

### No Confidence Inflation

Confidence tidak naik hanya karena beberapa agent mengulang conclusion yang sama.

### Correlation Awareness

Evidence dari sumber yang sama tidak dianggap independen.

### Bottleneck Awareness

Uncertainty pada gate atau constraint material membatasi confidence.

### Conflict Penalty

Conflict yang belum selesai mengurangi confidence pada bagian yang terdampak.

### Freshness Adjustment

Evidence lama dapat memiliki confidence tinggi sebagai history, tetapi rendah untuk current state.

### Inference Ceiling

Derived inference tidak boleh memiliki confidence lebih tinggi dari basisnya tanpa evidence tambahan.

### Scenario Specificity

Confidence dapat berbeda antar-scenario.

### Dimension Specificity

Confidence harus dinyatakan per dimensi jika berbeda.

## 10.7 Confidence and Fit Separation

Contoh:

- Fit tinggi, confidence rendah  
  Candidate terlihat menjanjikan, tetapi evidence belum cukup.

- Fit sedang, confidence tinggi  
  AI cukup yakin candidate hanya cocok pada beberapa dimensi.

- Fit tinggi, confidence tinggi  
  Banyak evidence konsisten dan current.

- Fit rendah, confidence rendah  
  AI tidak memiliki dasar cukup untuk exclusion.

## 10.8 Confidence Update

Confidence dapat naik jika:

- evidence baru independen;
- behavior mengonfirmasi self-report;
- outcome mengonfirmasi path;
- conflict terselesaikan;
- market knowledge diperbarui;
- user mengonfirmasi priority.

Confidence dapat turun jika:

- state berubah;
- evidence dicabut;
- outcome menantang assumption;
- market berubah;
- candidate requirement berubah;
- memory dikoreksi.

## 10.9 Confidence Communication

Setiap recommendation harus menjelaskan:

- level;
- basis;
- strongest evidence;
- weakest area;
- unresolved uncertainty;
- action yang dapat meningkatkan confidence.

---

# 11. Uncertainty Handling

## 11.1 Uncertainty Is a Graph Object

Uncertainty harus direpresentasikan, bukan disembunyikan sebagai skor tengah.

## 11.2 Jenis Uncertainty

### Data Uncertainty

Data tidak tersedia atau tidak lengkap.

### Measurement Uncertainty

Assessment atau evidence memiliki keterbatasan.

### Interpretation Uncertainty

Evidence dapat memiliki beberapa makna.

### Temporal Uncertainty

State mungkin berubah.

### Market Uncertainty

Demand, income, regulation, atau AI impact belum pasti.

### Outcome Uncertainty

Hasil individual tidak dapat dipastikan.

### Preference Uncertainty

Pengguna belum mengetahui apa yang diinginkan.

### Goal Uncertainty

Goal masih eksploratif.

### Model Uncertainty

AI tidak cukup yakin terhadap interpretasi atau candidate comparison.

### Scenario Uncertainty

Hasil sangat bergantung pada condition yang belum diketahui.

## 11.3 Missing Is Not Negative

Tidak ada evidence skill tidak berarti tidak memiliki skill.

Tidak ada experience tidak berarti tidak cocok.

Tidak ada career goal tidak berarti tidak termotivasi.

## 11.4 Unknown Node Status

Node dapat memiliki status unknown.

Unknown tidak diberi nilai netral secara otomatis jika keputusan sensitif terhadap node tersebut.

## 11.5 Uncertainty Response

AI dapat:

- meminta clarification yang material;
- mempertahankan beberapa scenario;
- memberi provisional recommendation;
- menurunkan confidence;
- menyarankan validation;
- menunda exclusion;
- mempersempit scope;
- melakukan human escalation.

## 11.6 Value of Information

AI harus memprioritaskan pertanyaan atau action yang paling mampu mengubah keputusan.

Contoh:

Menanyakan willingness to relocate dapat lebih penting daripada menambah satu assessment minat jika candidate utama hanya tersedia di kota lain.

## 11.7 Uncertainty Budget

Tidak semua uncertainty harus diselesaikan.

Reasoning berhenti ketika uncertainty tersisa tidak lagi mengubah recommendation secara material atau dapat dikelola melalui next action.

## 11.8 Ambiguity Preservation

Jika dua interpretasi sama-sama valid, graph mempertahankan keduanya.

## 11.9 Uncertainty Expiration

Uncertainty dapat berubah ketika:

- evidence baru masuk;
- user mencoba action;
- time horizon berubah;
- market data diperbarui;
- goal menjadi lebih spesifik.

---

# 12. Recommendation Path

## 12.1 Tujuan

Recommendation Path mengubah graph menjadi sekumpulan pilihan yang dapat dipahami dan ditindaklanjuti.

## 12.2 Safe Match

Safe Match adalah candidate yang secara relatif memiliki:

- alignment cukup kuat;
- readiness memadai;
- feasibility kuat;
- gap kecil atau manageable;
- constraints terkendali;
- downside relatif terbatas;
- confidence cukup;
- path jelas.

Safe tidak berarti pasti berhasil.

Safe juga tidak berarti paling bermakna atau paling menguntungkan.

## 12.3 Near Match

Near Match adalah candidate yang memiliki alignment kuat, tetapi membutuhkan adaptation atau clarification.

Ciri:

- beberapa dimensi fit kuat;
- terdapat mismatch terbatas;
- gap dapat dipelajari;
- feasibility conditional;
- environment adaptation mungkin diperlukan;
- validation berguna.

Near Match sering menjadi alternative yang sangat realistis.

## 12.4 Stretch Match

Stretch Match adalah candidate yang memiliki potential atau aspiration alignment kuat, tetapi:

- readiness belum cukup;
- gap material;
- time horizon lebih panjang;
- risk lebih tinggi;
- resource tambahan diperlukan;
- outcome lebih uncertain.

Stretch tidak boleh ditampilkan sebagai janji.

Stretch harus memiliki:

- gap;
- requirement;
- risk;
- preparation path;
- validation milestone;
- fallback.

## 12.5 Explore First

Candidate menarik tetapi evidence belum cukup.

AI menyarankan exploration sebelum ranking kuat.

## 12.6 Deferred Match

Candidate dapat relevan pada horizon lain, tetapi belum actionable sekarang.

## 12.7 Blocked Under Current Conditions

Candidate tidak dapat dilanjutkan dalam scenario saat ini karena gate material.

Blocked tidak sama dengan "tidak cocok selamanya".

## 12.8 Recommendation Set Composition

Recommendation set yang sehat dapat mencakup:

- beberapa Safe Match;
- beberapa Near Match;
- satu atau lebih Stretch Match;
- alternatif dengan objective berbeda;
- explore-first option;
- deferred path jika relevan.

## 12.9 Ranking Logic

Ranking harus conditional terhadap:

- objective;
- horizon;
- scenario;
- constraints;
- risk preference;
- evidence confidence.

Ranking tidak boleh diklaim universal.

## 12.10 Diversity Requirement

Top recommendation tidak boleh terdiri dari variasi nama yang sebenarnya memiliki jalur sama.

Set harus memberi diversity dalam:

- domain;
- risk;
- pathway;
- objective;
- environment;
- time horizon.

## 12.11 Exclusion Rule

Candidate hanya boleh dikeluarkan secara kuat jika:

- hard gate gagal;
- conflict dengan confirmed non-negotiable;
- evidence mismatch kuat dan current;
- no feasible path dalam horizon;
- user telah menolak secara eksplisit;
- governance melarang.

Low confidence tidak cukup untuk exclusion.

## 12.12 Recommendation Path Object

Setiap path harus menjelaskan:

- candidate;
- category;
- decision objective;
- strongest alignment;
- key mismatch;
- prerequisites;
- constraints;
- tradeoffs;
- confidence;
- uncertainty;
- scenario;
- next action;
- review trigger.

---

# 13. Learning Feedback Loop

## 13.1 Tujuan

Learning Feedback Loop membuat CDG belajar dari tindakan dan outcome nyata.

## 13.2 Feedback Sources

- assessment retake;
- course completion;
- project;
- grade;
- portfolio;
- internship;
- job application;
- interview;
- work performance;
- user satisfaction;
- reflection;
- certificate;
- mentor feedback;
- goal change;
- career switch;
- learning behavior.

## 13.3 Outcome Interpretation

Outcome harus dipisahkan dari identity.

Contoh:

- gagal interview bukan berarti tidak cocok dengan profesi;
- nilai turun bukan berarti ability permanen rendah;
- course tidak selesai dapat menunjukkan mismatch, constraint, atau timing;
- project selesai dapat memperkuat skill evidence;
- career switch dapat menunjukkan evolution, bukan failure.

## 13.4 Feedback Effects

Outcome dapat memperbarui:

- skill confidence;
- motivation;
- interest stability;
- learning preference;
- readiness;
- feasibility;
- goal;
- risk tolerance;
- path confidence;
- candidate ranking;
- roadmap.

## 13.5 Positive Feedback

Success tidak boleh menyebabkan overconfidence.

AI harus memeriksa:

- context;
- repeatability;
- level of difficulty;
- independence;
- external validation.

## 13.6 Negative Feedback

Setback tidak boleh menjadi permanent label.

AI harus memeriksa:

- cause uncertainty;
- temporary constraint;
- preparation gap;
- environment mismatch;
- strategy;
- timing;
- support;
- health or accessibility context jika diizinkan.

## 13.7 Outcome Delay

Beberapa outcome membutuhkan waktu.

Graph tidak boleh menilai path terlalu cepat.

## 13.8 Reflection Integration

User reflection dapat mengubah makna outcome.

Contoh:

Project berhasil tetapi pengguna tidak menikmati proses. Skill evidence naik, interest fit dapat turun.

## 13.9 Closed-loop Decision Intelligence

Siklus longitudinal:

1. recommendation path;
2. user choice;
3. action;
4. outcome;
5. reflection;
6. state update;
7. graph recalibration;
8. new decision.

Siklus ini adalah model pembelajaran, bukan workflow teknis.

---

# 14. Explainability Layer

## 14.1 Tujuan

Explainability Layer menerjemahkan graph menjadi alasan yang dapat dipahami tanpa menyederhanakan keputusan secara berlebihan.

## 14.2 Explanation Units

Setiap explanation dapat dibentuk dari:

- decision question;
- candidate;
- relevant evidence;
- supporting relationship;
- limiting relationship;
- tradeoff;
- confidence;
- uncertainty;
- scenario;
- next action.

## 14.3 Minimum Explanation

Setiap recommendation material harus menjawab:

1. Mengapa pilihan ini masuk?
2. Evidence apa yang paling berpengaruh?
3. Apa yang kurang cocok?
4. Constraint apa yang relevan?
5. Tradeoff apa yang harus diterima?
6. Seberapa yakin AI?
7. Apa yang belum diketahui?
8. Apa yang dapat dilakukan berikutnya?
9. Apa yang dapat mengubah recommendation?

## 14.4 Path Explanation

Explanation harus mengikuti jalur reasoning.

Contoh struktur:

> Minat pada problem solving dan evidence project mendukung jalur ini. Nilai matematika saat ini menunjukkan readiness yang belum kuat, tetapi improvement pattern dan motivation memberi dasar untuk growth path. Pilihan ini termasuk Near Match, bukan Safe Match, karena prerequisite akademik masih perlu diperkuat. Confidence sedang karena pengalaman langsung pada domain masih terbatas.

## 14.5 Counterevidence Explanation

AI wajib menjelaskan evidence yang tidak mendukung.

## 14.6 Counterfactual Explanation

AI dapat menjelaskan:

- jika location fleksibel, ranking berubah;
- jika target income menjadi prioritas utama, candidate lain naik;
- jika skill gap tertutup, Stretch Match dapat berubah menjadi Near Match;
- jika user tidak ingin client-facing work, beberapa role turun.

## 14.7 Historical Explanation

Memory hanya disebut jika relevan.

Contoh:

> Minat ini muncul konsisten dalam tiga periode dan diperkuat oleh project terbaru.

Bukan:

> Kamu selalu seperti ini.

## 14.8 Uncertainty Explanation

AI harus menyebut uncertainty secara spesifik.

Bukan:

> Data belum cukup.

Tetapi:

> Belum ada evidence pengalaman langsung dalam environment kerja yang sangat kolaboratif, sehingga environment fit masih belum pasti.

## 14.9 Tradeoff Explanation

AI tidak boleh menggunakan bahasa moral.

Bukan:

> Kamu harus mengorbankan passion.

Tetapi:

> Pilihan ini lebih kuat untuk income awal, tetapi lebih lemah pada creative autonomy dibanding pilihan kedua.

## 14.10 Audience-specific Explanation

Explanation untuk:

- user;
- parent;
- counselor;
- school;
- recruiter;
- human reviewer

harus menggunakan scope dan privacy berbeda.

## 14.11 Audit Explanation

Audit view harus menunjukkan:

- node aktif;
- edge aktif;
- evidence;
- versions;
- confidence;
- conflict;
- excluded data;
- constitutional checks.

---

# 15. Integration Architecture

## 15.1 Integration with Knowledge Engine

Knowledge Engine menyediakan:

- career objects;
- education objects;
- skill requirements;
- work environment;
- labor market;
- AI impact;
- pathway;
- prerequisite;
- relationship;
- retrieval keywords.

CDG menentukan:

- knowledge mana yang relevan;
- bagaimana knowledge terhubung ke user state;
- bagaimana freshness memengaruhi confidence;
- bagaimana market evidence menjadi context, bukan destiny.

## 15.2 Integration with Assessment Engine

Assessment Engine menyediakan:

- normalized profile;
- fit dimensions;
- assessment evidence;
- contradictions;
- confidence;
- current readiness.

CDG:

- menempatkan assessment sebagai evidence;
- mencegah single assessment dominance;
- menghubungkan assessment dengan behavior dan outcome;
- membedakan preference, trait, skill, dan readiness.

## 15.3 Integration with Recommendation Engine

Recommendation Engine menggunakan CDG untuk:

- candidate retrieval;
- multidimensional comparison;
- gate evaluation;
- tradeoff;
- Safe, Near, Stretch classification;
- confidence;
- explanation;
- alternatives.

Recommendation Engine tidak boleh menghasilkan ranking yang tidak memiliki Decision Graph Instance.

## 15.4 Integration with Memory Engine

Memory Engine menyediakan:

- current state;
- historical state;
- timeline;
- change;
- outcome;
- goal evolution;
- stable pattern;
- conflict;
- memory confidence.

CDG menentukan memory mana yang diaktifkan.

Historical memory tidak otomatis menjadi active node.

## 15.5 Integration with AI Constitution

AI Constitution menentukan:

- human agency;
- fairness;
- privacy;
- no permanent labeling;
- transparency;
- evidence proportionality;
- alternatives;
- reversibility;
- failure behavior.

CDG harus memiliki constitutional gates.

## 15.6 Integration with ACP

ACP membawa:

- Decision Graph Context;
- node references;
- evidence bundle;
- confidence;
- conflict notice;
- decision record;
- recommendation path;
- outcome event.

CDG menetapkan makna reasoning. ACP menetapkan cara makna tersebut dipindahkan antar-agent.

## 15.7 Integration with Orchestrator

Orchestrator:

- membentuk decision question;
- menentukan agent yang diperlukan;
- mengaktifkan relevant graph view;
- menjaga scope;
- menyatukan specialist findings;
- mendeteksi conflict;
- memeriksa graph completeness;
- menghasilkan final Decision Record.

Orchestrator tidak boleh menciptakan edge tanpa evidence.

## 15.8 Integration with Specialized Agents

### Assessment Agent

Menghasilkan evidence dan interpretation node.

### Memory Agent

Menghasilkan temporal state dan historical relationships.

### Knowledge Agent

Menghasilkan opportunity dan external context node.

### Recommendation Agent

Membentuk comparison dan recommendation path.

### Roadmap Agent

Mengubah gap dan action node menjadi staged path.

### Reflection Agent

Menghubungkan outcome, meaning, dan state change.

### Report Agent

Mengubah graph path menjadi audience-specific explanation.

### Learning Agent

Memperbarui skill, progress, dan learning evidence.

### Recruiter Agent

Menggunakan graph subset yang job-relevant dan purpose-bound.

### Interviewer Agent

Menghasilkan structured evidence, bukan identity verdict.

## 15.9 Graph Subset by Agent

Setiap agent hanya menerima graph subset yang sesuai:

- capability;
- authority;
- purpose;
- audience;
- sensitivity;
- decision question.

Tidak ada agent yang otomatis menerima seluruh graph.

---

# 16. Mandatory Reasoning Contract for All Agents

Setiap agent yang menghasilkan interpretation atau recommendation harus menyatakan:

1. **Decision Question**  
   Apa yang sedang dinilai.

2. **Active Objective**  
   Apa yang dioptimalkan.

3. **Active Current State**  
   State mana yang digunakan.

4. **Relevant Historical State**  
   History apa yang material.

5. **Candidate or Target**  
   Objek apa yang dinilai.

6. **Supporting Evidence**  
   Evidence utama.

7. **Counterevidence**  
   Evidence yang membatasi.

8. **Constraints and Gates**  
   Batas yang berlaku.

9. **Tradeoffs**  
   Objective yang bersaing.

10. **Confidence**  
    Kekuatan reasoning.

11. **Uncertainty**  
    Hal yang belum diketahui.

12. **Scenario**  
    Condition yang membuat kesimpulan berlaku.

13. **Recommendation Category**  
    Safe, Near, Stretch, Explore, Deferred, atau Blocked.

14. **Next Validation**  
    Langkah untuk mengurangi uncertainty.

15. **Review Trigger**  
    Perubahan apa yang harus memicu evaluasi ulang.

Agent yang tidak dapat memenuhi contract harus menghasilkan partial result, warning, atau escalation.

---

# 17. Graph Governance and Integrity

## 17.1 Graph Ownership

CDG memiliki governance owner yang menjaga:

- taxonomy;
- semantics;
- version;
- conformance;
- amendment;
- evaluation;
- incident learning.

## 17.2 Node Addition

Node baru hanya ditambahkan jika:

- memiliki makna berbeda;
- memengaruhi keputusan;
- tidak dapat direpresentasikan oleh node yang ada;
- memiliki evidence model;
- memiliki privacy classification;
- memiliki explainability value.

## 17.3 Edge Addition

Edge baru harus menjelaskan:

- semantic meaning;
- direction;
- evidence requirement;
- confidence behavior;
- temporal behavior;
- explanation;
- risk of misuse.

## 17.4 Graph Correction

Correction tidak menghapus history.

Node atau edge lama dapat menjadi:

- corrected;
- superseded;
- revoked;
- expired.

## 17.5 Graph Versioning

Version change diperlukan jika:

- node meaning berubah;
- edge meaning berubah;
- recommendation category berubah;
- confidence semantics berubah;
- constitutional gate berubah;
- integration contract berubah.

## 17.6 Conflict Visibility

Graph tidak boleh dipaksa menjadi konsisten jika evidence memang berbeda.

## 17.7 Causal Humility

Edge seperti CONTRIBUTED_TO tidak boleh diubah menjadi CAUSED_BY tanpa evidence yang memadai.

## 17.8 Sensitive Node Protection

Sensitive node hanya aktif ketika:

- relevant;
- authorized;
- purpose-bound;
- consented jika diperlukan;
- necessary.

## 17.9 No Protected Attribute Proxy

Graph harus diaudit agar node lain tidak menjadi proxy untuk diskriminasi.

## 17.10 Human Override

Manusia dapat:

- mengoreksi state;
- mengubah objective;
- menolak recommendation;
- membatasi memory use;
- meminta review;
- memilih alternative;
- menerima tradeoff.

Human override harus tercatat, tetapi tidak dianggap error.

---

# 18. Future Expansion

## 18.1 AI Coach

CDG dapat menambah node:

- habit;
- commitment;
- obstacle;
- support;
- check-in;
- behavior experiment.

Coach harus menggunakan action yang reversible dan non-manipulative.

## 18.2 AI Mentor

CDG dapat menambah:

- strategic insight;
- mentor perspective;
- domain heuristic;
- role model path.

Mentor opinion tetap dibedakan dari evidence.

## 18.3 AI Recruiter

CDG dapat menambah:

- job requirement;
- job-relevant evidence;
- structured competency;
- accommodation;
- selection risk;
- fairness review.

Recruiter hanya menggunakan graph subset yang sah.

## 18.4 AI Interviewer

CDG dapat menambah:

- question competency;
- response evidence;
- communication behavior;
- uncertainty;
- interviewer bias;
- context condition.

## 18.5 Company Matching

Graph dapat menghubungkan:

- culture;
- work model;
- career progression;
- compensation;
- learning opportunity;
- management environment;
- location;
- values.

Company match tidak boleh hanya berdasarkan brand atau popularity.

## 18.6 Scholarship Matching

Graph dapat menambah:

- eligibility;
- funding coverage;
- deadline;
- geography;
- field requirement;
- service obligation;
- competitiveness;
- preparation readiness.

## 18.7 Global Career Mapping

Graph dapat menambah:

- credential equivalence;
- visa pathway;
- language;
- local regulation;
- cost of living;
- global demand;
- remote access;
- relocation risk.

## 18.8 Entrepreneurship Path

Graph dapat menambah:

- problem insight;
- founder motivation;
- risk capacity;
- market validation;
- team complementarity;
- runway;
- execution evidence.

## 18.9 Portfolio Career

Graph dapat mendukung kombinasi:

- employment;
- freelance;
- creator;
- teaching;
- entrepreneurship;
- consulting.

## 18.10 Multi-person Decision

Pada masa depan, CDG dapat mendukung keputusan yang melibatkan:

- user;
- family;
- counselor;
- mentor;
- employer.

Graph harus tetap menjaga agency dan data boundary masing-masing pihak.

## 18.11 Global Knowledge and Local Context

Knowledge dapat berskala global, tetapi reasoning harus mempertahankan:

- local education system;
- local labor market;
- culture;
- language;
- affordability;
- regulation.

## 18.12 Dynamic Market and AI Simulation

Graph dapat membandingkan beberapa future scenario.

Projection harus tetap diberi uncertainty dan tidak boleh disajikan sebagai kepastian.

---

# 19. Evaluation Framework

## 19.1 Decision Relevance

Apakah graph menggunakan node yang benar-benar memengaruhi keputusan.

## 19.2 Evidence Integrity

Apakah setiap hubungan material dapat ditelusuri.

## 19.3 Multi-objective Quality

Apakah graph mempertahankan objective yang berbeda.

## 19.4 Tradeoff Visibility

Apakah conflict terlihat secara jelas.

## 19.5 Confidence Calibration

Apakah confidence sesuai dengan outcome dan evidence.

## 19.6 Uncertainty Quality

Apakah missing information diperlakukan dengan benar.

## 19.7 Recommendation Diversity

Apakah alternative meaningful tersedia.

## 19.8 Longitudinal Accuracy

Apakah current dan historical state dibedakan.

## 19.9 Adaptation Quality

Apakah graph berubah secara proporsional setelah outcome baru.

## 19.10 Explainability

Apakah manusia dapat memahami jalur reasoning.

## 19.11 Fairness

Apakah graph tidak mengunci atau mempersempit pilihan secara tidak sah.

## 19.12 Privacy

Apakah hanya node yang relevan dan authorized yang aktif.

## 19.13 Actionability

Apakah recommendation menghasilkan next step yang realistis.

## 19.14 Regret Awareness

Apakah graph membantu pengguna memahami downside dan switching cost sebelum memilih.

## 19.15 Outcome Learning

Apakah sistem belajar dari hasil nyata tanpa overfitting pada satu event.

## 19.16 Agent Consistency

Apakah agent berbeda menghasilkan reasoning yang kompatibel saat menggunakan graph state yang sama.

## 19.17 Scenario Stability

Apakah perubahan ranking dapat dijelaskan oleh perubahan objective atau condition.

---

# 20. Success Criteria

Career Decision Graph dianggap berhasil ketika:

## 20.1 Shared Reasoning Language

Seluruh agent menggunakan node, edge, confidence, uncertainty, dan recommendation category dengan makna konsisten.

## 20.2 No Single-Test Determinism

Tidak ada recommendation yang ditentukan hanya oleh satu test atau trait.

## 20.3 Conditional Ranking

Setiap ranking terkait dengan objective, horizon, constraints, dan scenario.

## 20.4 Explainable Paths

Setiap recommendation dapat ditelusuri dari evidence ke conclusion.

## 20.5 Tradeoff Transparency

Pengguna dapat melihat apa yang diperoleh dan dikorbankan.

## 20.6 Fit, Readiness, Feasibility, and Potential Separation

Empat konsep tersebut tidak dicampur.

## 20.7 Confidence Integrity

Confidence tidak meningkat tanpa evidence dan tidak disamakan dengan fit.

## 20.8 Uncertainty Preservation

Unknown tidak diubah menjadi negative label.

## 20.9 Longitudinal Intelligence

Graph memahami perubahan manusia tanpa menghapus history atau menghukum masa lalu.

## 20.10 Adaptive Learning

Outcome memperbarui graph secara proporsional.

## 20.11 User Agency

Pengguna tetap dapat memilih, menolak, mengoreksi, dan mengubah objective.

## 20.12 Fairness and Privacy

Graph hanya menggunakan data yang relevan, sah, dan sesuai purpose.

## 20.13 Modular Expansion

Agent, domain, country, market, dan opportunity baru dapat ditambahkan tanpa merusak semantic core.

## 20.14 Actionable Intelligence

Recommendation menghasilkan:

- alternative;
- risk;
- tradeoff;
- validation;
- next action;
- review trigger.

## 20.15 Auditable Decision Intelligence

Reviewer dapat menjawab:

- Mengapa candidate ini direkomendasikan?
- Evidence apa yang digunakan?
- Memory mana yang aktif?
- Constraint apa yang memengaruhi?
- Tradeoff apa yang muncul?
- Apa yang belum diketahui?
- Mengapa confidence berada pada level tersebut?
- Apa yang dapat mengubah recommendation?

---

# 21. Mandatory Decision Graph Checklist

Sebelum recommendation diterbitkan, responsible agent harus memastikan:

- [ ] Decision question telah didefinisikan.
- [ ] Decision owner adalah pengguna atau pihak yang sah.
- [ ] Horizon waktu telah dinyatakan.
- [ ] Current state telah dibedakan dari historical state.
- [ ] Goal aktif telah diverifikasi.
- [ ] Objective utama dan sekunder terlihat.
- [ ] Non-negotiable dan preference dibedakan.
- [ ] Candidate set cukup beragam.
- [ ] Hard gate telah diperiksa.
- [ ] Fit dievaluasi secara multidimensional.
- [ ] Readiness dan potential dibedakan.
- [ ] Feasibility diperiksa.
- [ ] Learning path dipertimbangkan.
- [ ] Market dan AI impact digunakan secara proporsional.
- [ ] Constraints tidak diperlakukan sebagai identity.
- [ ] Tradeoff material terlihat.
- [ ] Counterevidence dicantumkan.
- [ ] Confidence memiliki basis.
- [ ] Uncertainty tetap terlihat.
- [ ] Scenario yang relevan dipertimbangkan.
- [ ] Safe, Near, dan Stretch digunakan secara benar.
- [ ] Exclusion tidak dibuat dari missing evidence.
- [ ] Next validation tersedia.
- [ ] Review trigger tersedia.
- [ ] Privacy dan purpose telah diperiksa.
- [ ] Constitutional check telah dilakukan.
- [ ] Decision path dapat diaudit.

---

# 22. Closing Principle

Career Decision Graph membuat KarirGPS berpikir tentang keputusan karier sebagai hubungan dinamis antara manusia, tujuan, evidence, constraint, opportunity, tradeoff, dan waktu.

CDG tidak mencari label yang paling tepat untuk manusia.

CDG mencari:

- pilihan yang layak dipertimbangkan;
- alasan yang dapat diuji;
- risiko yang perlu dipahami;
- gap yang dapat dikembangkan;
- scenario yang mengubah hasil;
- langkah berikutnya yang proporsional.

Keputusan karier yang baik bukan keputusan dengan skor tertinggi.

Keputusan yang baik adalah keputusan yang:

- memahami current reality;
- menjaga future possibility;
- menggunakan evidence secara proporsional;
- mengakui uncertainty;
- memperlihatkan tradeoff;
- menghormati constraint;
- tidak mengunci manusia;
- dapat diperbaiki ketika manusia berubah.

Career Decision Graph V1 menjadi inti reasoning bersama agar seluruh AI KarirGPS dapat menghasilkan Decision Intelligence yang konsisten, explainable, longitudinal, adaptive, dan human-centered.
