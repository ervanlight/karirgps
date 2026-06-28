# Major Object Generator V1

**Product:** KarirGPS  
**Document Type:** Major Knowledge Generation Engineering Specification  
**Version:** 1.0  
**Status:** Normative Generator Baseline  
**Governing Constitution:** AI Constitution  
**Governing Ontology:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`  
**Governing Object Contract:** `assets/knowledge/specification/Knowledge_Object_Specification_V1.md`  
**Inherited Generator Philosophy:** `assets/knowledge/generators/career/Career_Object_Generator_V1.md`  
**Inherited Production Standard:** `assets/knowledge/generators/career/Career_Object_Production_Master_Prompt_V1.md`  
**Inherited Batch Production Standard:** `assets/knowledge/production/Career_Batch_Production_System_V1.md`  
**Target Path:** `assets/knowledge/generators/major/Major_Object_Generator_V1.md`

---

## 0. Status, Scope, and Normative Language

### 0.1 Purpose

Major Object Generator V1, hereafter **MOG**, is the official engineering specification governing how AI or human-assisted generation systems produce Draft Major Objects for KarirGPS.

MOG defines:

- the generator's production authority;
- the input package required before generation;
- Major identity and scope resolution;
- evidence requirements;
- relationship requirements;
- the mandatory generation sequence;
- the canonical output contract;
- validation rules;
- confidence semantics;
- failure handling;
- quality gates;
- governance requirements;
- future compatibility requirements.

MOG does not create Major data in this document.

MOG governs the creation of future Major Objects.

### 0.2 Applies To

This specification applies to:

- AI Knowledge Generators;
- GPT;
- Claude Code;
- future AI models;
- batch generation systems;
- human-assisted generation systems;
- institutional contribution systems;
- localization generators;
- revision and remediation generators;
- validation preparation agents.

### 0.3 Normative Terms

- **MUST** indicates a mandatory requirement.
- **MUST NOT** indicates a prohibited condition.
- **SHOULD** indicates a requirement that may be waived only with documented justification.
- **MAY** indicates an allowed option.
- **CONDITIONAL** indicates a requirement that becomes mandatory when the stated condition applies.

### 0.4 Generator Boundary

The generator may produce only:

- a Draft Major Entity Object;
- proposed relationships;
- proposed Contextual Assertion references;
- evidence mappings;
- uncertainty declarations;
- provisional confidence assessments;
- generation and audit records;
- validation preparation metadata;
- typed generation failure results.

The generator MUST NOT:

- activate or publish a Major Object;
- validate its own object as final;
- redesign the Ontology;
- redesign KOS;
- create a new semantic class without authority;
- create a Major Object from unsupported model memory;
- merge a Major with an Education Program, Qualification, Academic Field, Faculty, Department, Course, or Institution;
- resolve disputed academic equivalence without authorized review;
- make employment guarantees;
- make institution-specific claims intrinsic to the Major.

### 0.5 Generator Invariants

Every generated Major Object MUST preserve the following invariants:

1. It represents one stable Major semantic identity.
2. It has lifecycle status `draft`.
3. It uses object kind `entity`.
4. It uses entity type `major`.
5. It maps to the approved Ontology class Major.
6. It represents a field of formal study, not a provider-specific offering.
7. It is distinct from Academic Field.
8. It is distinct from Education Program.
9. It is distinct from Qualification or Degree.
10. It is distinct from Faculty, Department, School, or Institution.
11. It is distinct from Course and Curriculum Component.
12. It contains conceptual learning outcomes, not institution-specific promises.
13. It identifies relevant Knowledge Domains and Skill development relationships.
14. It states education-level applicability without assuming one universal qualification framework.
15. It keeps provider-specific curriculum, tuition, duration, ranking, accreditation, admission cycles, and capacity outside the intrinsic Major core.
16. It does not guarantee a Career outcome.
17. It does not treat one Career as the sole destination.
18. It does not infer Major quality from institutional reputation.
19. It maps every material claim to evidence.
20. It preserves uncertainty and conflicting classifications.
21. It uses only approved Ontology predicates.
22. It has passed duplicate and identity-resolution checks.
23. It contains no fabricated source.
24. It follows one canonical section order.
25. It can be validated without hidden context.
26. It can become Knowledge Graph compatible after formal validation and activation.
27. It can support AI Reasoning after approval for the Reasoning Ready profile.
28. It contains no user-specific education recommendation.

### 0.6 System Impact

MOG allows hundreds or thousands of Major Objects to be generated with consistent semantic boundaries, evidence discipline, relationship quality, and lifecycle behavior across models, institutions, locales, and future education systems.

---

# 1. Purpose

## 1.1 Generator Purpose

MOG defines how an approved generation system transforms a governed Major Generation Input Package into one KOS-compliant Draft Major Object.

## 1.2 Knowledge Purpose

A generated Major Object must provide a stable semantic representation of a formal field of study that can be used to reason about:

- Academic Field membership;
- conceptual learning outcomes;
- Knowledge Domains;
- Skill development;
- curriculum themes;
- education-level applicability;
- Education Program relationships;
- Career pathways;
- Certification relationships;
- progression pathways;
- geographic or framework variants.

## 1.3 Production Purpose

The generator must create outputs that:

- use identical structural sections;
- use identical field semantics;
- are evidence-grounded;
- expose explicit relationships;
- preserve localization boundaries;
- support graph registration;
- support educational pathway reasoning;
- support human audit;
- remain maintainable when provider offerings change.

## 1.4 Difference from a Major Object

MOG is a production specification.

A Major Object is a generated knowledge artifact.

This document is not a Major Object and contains no full Major data.

## 1.5 Difference from a Production Prompt

MOG defines the generator contract and constraints.

A future Major Production Master Prompt may operationalize MOG for model execution.

The prompt must not redefine:

- identity boundaries;
- mandatory fields;
- evidence requirements;
- relationship rules;
- confidence rules;
- acceptance criteria.

## 1.6 Difference from Ontology and KOS

The Ontology defines what a Major is and how it relates to other entities.

KOS defines universal and entity-specific Knowledge Object contracts.

MOG defines how a generator must produce a Draft Major Object under those contracts.

## 1.7 Constraints

MOG does not authorize:

- source collection without an evidence process;
- institution-specific program creation;
- publication;
- object activation;
- user-specific Major matching;
- degree equivalency decisions.

## 1.8 Rationale

Major knowledge is frequently corrupted by provider-specific program details, local naming conventions, degree labels, curriculum variants, and employment claims. A dedicated generator is required to preserve the Major as a stable semantic concept.

## 1.9 System Impact

KarirGPS can compare and connect Majors across institutions and countries without treating every local program name as a separate universal Major.

---

# 2. Generator Philosophy

## 2.1 Semantic Identity Before Label

The generator determines the Major concept before selecting a canonical name.

A local label or program title does not independently establish a new Major identity.

## 2.2 Field of Study Before Provider Offering

The Major core represents what is studied.

The Education Program represents where, how, when, and under what conditions it is offered.

## 2.3 Conceptual Outcomes Before Curriculum Inventory

The generator must represent learning outcome categories and curriculum themes at a provider-independent level.

It must not reproduce a single institution's course list as the Major definition.

## 2.4 Evidence Before Completion

Unsupported sections remain explicit gaps.

The generator must not fill gaps with plausible educational content from model memory.

## 2.5 Multiple Pathways, No Guaranteed Destination

A Major may prepare learners for multiple Careers, further study routes, and competency domains.

The generator must not describe one guaranteed or exclusive outcome.

## 2.6 Global Semantic Core, Local Context

The Major identity remains globally stable where possible.

Local:

- names;
- education levels;
- qualification frameworks;
- accreditation;
- admission systems;
- program structures;
- professional recognition;

must be represented through localized or contextual relationships.

## 2.7 Typed Relationships Over Narrative Proximity

The generator must express Major-to-Field, Major-to-Knowledge, Major-to-Skill, Major-to-Program, and Major-to-Career meaning using approved typed relationships.

## 2.8 Provider Neutrality

A Major Object must not privilege one institution, curriculum, accreditation body, education provider, ranking, or delivery model unless the Major identity itself is formally provider-specific, which ordinarily indicates the target is an Education Program rather than a Major.

## 2.9 Epistemic Humility

Academic classifications vary across countries and institutions.

The generator must support:

- exact equivalence;
- close equivalence;
- partial equivalence;
- broader mapping;
- narrower mapping;
- disputed mapping;
- no direct equivalent.

## 2.10 Human Accountability

The model produces a Draft.

Human or authorized institutional review remains required according to KOS and production governance.

## 2.11 Private Reasoning, Public Rationale

The generator must reason internally without exposing private chain of thought.

It may output only concise, auditable rationale through:

- evidence basis;
- relationship rationale;
- confidence basis;
- uncertainty;
- validation findings.

## 2.12 Deterministic Contract

Under an identical generation envelope, the generator should produce semantically equivalent outputs.

The generation envelope includes:

- identity record;
- scope record;
- evidence bundle revision;
- existing knowledge references;
- Ontology version;
- KOS version;
- MOG version;
- generation policy;
- locale;
- model version.

## 2.13 Philosophy Impact

This philosophy prevents Major Objects from becoming institution brochures, degree catalogs, or unsupported career promises.

---

# 3. Generator Scope

## 3.1 In-Scope Production

MOG governs generation of:

- new Major Entity Object Drafts;
- revisions to existing Major Objects;
- localized Major representations;
- Major relationship enrichment;
- Major evidence refresh;
- Major identity remediation;
- Major taxonomy remediation;
- Major progression and pathway relationship updates.

## 3.2 In-Scope Major Semantics

A Major Object may contain or reference:

- Academic Field;
- disciplinary scope;
- conceptual learning outcome categories;
- Knowledge Domains;
- core Skills;
- education-level applicability;
- concentrations;
- curriculum themes;
- common assessment modes;
- common entry patterns;
- Education Programs;
- Qualifications;
- Certifications;
- Careers;
- Learning Paths;
- progression paths;
- geographic variants;
- accreditation context references.

## 3.3 Out-of-Scope Objects

The generator must not produce the following as Major Objects:

- Academic Field;
- Education Program;
- Qualification;
- Degree title;
- Faculty;
- School;
- Department;
- University;
- Course;
- Curriculum Component;
- Certification;
- Career;
- Scholarship;
- Learning Resource;
- Admission opportunity.

## 3.4 Stable Core Scope

The stable Major core may include:

- definition;
- scope;
- disciplinary focus;
- learning outcome categories;
- Knowledge Domain relationships;
- Skill development relationships;
- Academic Field relationship;
- general education-level applicability;
- general pathway relationships.

## 3.5 Contextual Scope

The following should normally remain contextual or external:

- institution-specific curriculum;
- current tuition;
- current program duration;
- current admission criteria;
- current accreditation status;
- current capacity;
- current delivery mode;
- current campus;
- current ranking;
- current scholarship availability;
- jurisdiction-specific professional recognition;
- time-sensitive labor market outcomes;
- institution-specific graduate employment statistics.

## 3.6 Scope Constraint

If the target cannot be represented without provider, duration, delivery mode, current admission status, and awarded credential, the target is likely an Education Program and generation must stop for identity review.

## 3.7 System Impact

Major Objects remain reusable across institutions and regions while local Program Objects can change independently.

---

# 4. Generator Authority

## 4.1 Primary Authority

The generator is authorized to:

1. read approved input packages;
2. produce one Draft Major Object;
3. propose aliases;
4. propose taxonomy paths;
5. propose relationships;
6. classify evidence-supported claims;
7. identify uncertainty;
8. identify conflicts;
9. identify missing evidence;
10. prepare validation metadata;
11. return a typed failure result.

## 4.2 Conditional Authority

The generator may propose:

- a new Major identity;
- a Major merge candidate;
- a Major split candidate;
- an equivalence mapping;
- a localization mapping;
- a concentration relationship;
- an education-level mapping;

only when the input package authorizes proposal mode.

Such proposals remain provisional.

## 4.3 Prohibited Authority

The generator must not:

- approve a new Entity ID;
- approve an Ontology extension;
- merge or split identities;
- determine legal qualification equivalence;
- certify accreditation;
- validate a program offering;
- determine institutional quality;
- determine personal Major suitability;
- rank Majors;
- activate the Draft;
- approve its own quality score.

## 4.4 Authority Ceiling

The generator's authority is always lower than:

- Ontology governance;
- KOS governance;
- Knowledge Steward;
- authorized reviewer;
- institutional source authority for official claims;
- legal or accreditation authority for regulated claims.

## 4.5 Accountability

Every generated output must identify:

- generator identity;
- generator version;
- generation mode;
- input package references;
- source bundle;
- contract versions;
- unresolved issues;
- provisional decisions.

## 4.6 Rationale

Authority boundaries prevent AI fluency from being confused with academic classification authority.

## 4.7 System Impact

Generated Major Objects can be scaled without allowing models to silently redefine education systems.

---

# 5. Required Inputs

## 5.1 Major Generation Input Package

The generator must receive one complete Major Generation Input Package.

## 5.2 Generation Request

Required fields:

- `request_id`;
- `production_case_id`;
- `generation_mode`;
- `intended_use`;
- `target_readiness_profile`;
- `risk_class`;
- `default_locale`;
- `requested_locales`;
- `geographic_scope`;
- `temporal_scope`;
- `expected_output_status`, which must be Draft;
- `deadline`, if applicable.

## 5.3 Identity Resolution Input

Required fields:

- resolved `entity_id` or approved provisional identity token;
- proposed canonical name;
- entity type;
- Ontology class;
- identity status;
- duplicate candidates;
- duplicate disposition;
- Major-versus-Academic-Field decision;
- Major-versus-Education-Program decision;
- Major-versus-Qualification decision;
- Major-versus-Faculty decision;
- Major-versus-Department decision;
- Major-versus-Course decision;
- local naming notes;
- disambiguation notes.

## 5.4 Scope Resolution Input

Required fields:

- Major scope;
- inclusion criteria;
- exclusion criteria;
- abstraction level;
- disciplinary boundary;
- included concentrations;
- excluded neighboring Majors;
- education-level applicability scope;
- geographic applicability;
- temporal applicability;
- stable core boundary;
- contextual claims to externalize;
- required relationship classes;
- optional relationship classes.

## 5.5 Contract Version Input

Required:

- AI Constitution version;
- Ontology version;
- KOS version;
- Major Generator version;
- relationship vocabulary version;
- quality method version;
- production policy version.

## 5.6 Normalized Evidence Bundle

Each evidence entry must include:

- `evidence_id`;
- `source_id`;
- source type;
- source title;
- source author or publisher;
- publication or issuance date;
- verification date;
- source locator;
- language;
- jurisdiction or geography;
- primary or secondary status;
- methodology summary when relevant;
- normalized evidence statement;
- claim category;
- evidence confidence;
- source credibility;
- transformation lineage;
- usage restrictions;
- conflict group if applicable.

## 5.7 Existing Knowledge References

When available:

- existing Major Objects;
- prior Major revision;
- Academic Field Objects;
- Knowledge Domain Objects;
- Skill Objects;
- Competency Objects;
- Education Level Objects;
- Education Program Objects;
- Qualification Objects;
- Curriculum Component Objects;
- Course Objects;
- Career Objects;
- Certification Objects;
- Industry Objects;
- Learning Path Objects;
- Geography Objects;
- Regulation Objects;
- accreditation or authority references;
- external classification mappings.

## 5.8 Generation Policy

Required:

- allowed fields;
- forbidden fields;
- target output profile;
- source minimum;
- maximum assumption level;
- localization rules;
- review requirements;
- output language;
- relationship policy;
- absence-state policy.

## 5.9 Conditional Inputs

### Localization Input

Required when a Localized Profile is targeted:

- locale;
- approved terminology source;
- official or common local name;
- translation status;
- equivalence status;
- local education framework;
- reviewer status;
- cultural or legal notes.

### Regulated or Profession-linked Major Input

Required when the Major is tied to regulated education or professional authorization:

- jurisdiction;
- authority reference;
- regulatory framework;
- required Qualification or License relationship;
- effective period;
- status;
- evidence.

### Revision Input

Required for an existing Major Object revision:

- prior `object_id`;
- prior `revision_id`;
- change request;
- change class;
- affected fields;
- compatibility expectation;
- downstream dependencies.

### Cross-border Mapping Input

Required when exact or approximate international equivalence is claimed:

- source framework;
- target framework;
- mapping type;
- mapping authority;
- evidence;
- limitations.

## 5.10 Input Quality Gate

Generation may begin only when:

- the target is confirmed as Major;
- identity and scope records are available;
- required contract versions are supported;
- the evidence bundle is available;
- evidence supports the Major definition and disciplinary scope;
- Academic Field relationship can be established or an explicit blocker is declared;
- learning outcomes, Knowledge Domains, or Skill development have sufficient evidence;
- duplicate resolution is complete;
- generation policy is available.

## 5.11 Invalid Input Conditions

The generator must stop when:

- only a Major name is supplied;
- the target is provider-specific;
- the target is a Degree or Qualification title;
- the target is an Academic Field rather than Major;
- the target is a Department or Faculty;
- evidence is absent;
- sources are unverifiable;
- scope combines several distinct Majors;
- the request requires institution-specific data in the Major core;
- the request requires Active status;
- source rights prohibit use;
- local equivalence is claimed without mapping evidence.

## 5.12 Input Sufficiency States

### `sufficient`

Core identity, disciplinary scope, learning outcomes, and core relationships are supported.

### `partially_sufficient`

A Draft can be generated, but optional or contextual relationships remain incomplete.

### `insufficient`

Identity, Academic Field, learning outcomes, Knowledge Domain, or Skill development cannot be supported.

### `conflicted`

Sources materially disagree on classification, scope, equivalence, or learning outcomes.

## 5.13 Rationale

A governed input package prevents generation by label completion.

## 5.14 System Impact

Batch systems can determine item readiness before using model capacity.

---

# 6. Preconditions

## 6.1 Contract Compatibility

The generator must verify:

- all governing versions are supplied;
- the versions are supported;
- the expected object type is Major;
- the expected lifecycle state is Draft.

## 6.2 Identity Readiness

The generator must verify:

- one semantic Major identity;
- no unresolved duplicate blocker;
- Major-versus-Program classification is resolved;
- Major-versus-Field classification is resolved;
- local labels are mapped appropriately.

## 6.3 Scope Readiness

The generator must verify:

- inclusion and exclusion criteria;
- disciplinary boundary;
- education-level applicability;
- stable and contextual boundary;
- geographic scope;
- concentration treatment.

## 6.4 Evidence Readiness

At minimum, evidence must support:

- identity;
- definition;
- disciplinary focus;
- Academic Field relationship;
- learning outcome categories;
- at least one Knowledge Domain or Skill relationship;
- Major boundary.

## 6.5 Rights and Provenance Readiness

The generator must verify:

- source identity;
- usage rights;
- access or verification date;
- transformation lineage;
- conflict status.

## 6.6 Relationship Readiness

Approved predicates must exist for:

- `specialization_of` Academic Field;
- `teaches` or equivalent Knowledge Domain relationship;
- `develops` Skill relationship;
- Program relationship where referenced;
- Career relationship where referenced.

## 6.7 Lifecycle Readiness

The request must authorize Draft generation only.

## 6.8 Precondition Failure

If a mandatory precondition fails, the generator must return a typed failure result and must not produce a misleading complete Major Object.

## 6.9 Rationale

Preconditions eliminate predictable identity and evidence defects before drafting.

## 6.10 System Impact

Formal validators receive only generator-eligible outputs.

---

# 7. Identity Resolution

## 7.1 Purpose

Identity Resolution determines whether the target is one stable Major concept and how it differs from adjacent education entities.

## 7.2 Major Identity Test

A target is a Major when it represents:

- a formal field of study;
- a coherent disciplinary or interdisciplinary focus;
- conceptual learning outcomes;
- Knowledge Domain coverage;
- Skill development;
- applicability across one or more Education Programs.

## 7.3 Major Versus Academic Field

Academic Field is broader.

A Major usually specializes within or combines one or more Academic Fields.

The generator must not create identical objects for a Field and its Major without clear scope distinction.

## 7.4 Major Versus Education Program

An Education Program includes provider and offering characteristics such as:

- institution;
- duration;
- delivery mode;
- location;
- admission cycle;
- curriculum version;
- credential awarded;
- operational status.

If these characteristics are necessary to identify the target, it is likely an Education Program.

## 7.5 Major Versus Qualification

A Qualification is an award or formal recognition.

A Major is the field of study.

A degree label may combine qualification level and Major label, but the generator must separate them semantically.

## 7.6 Major Versus Faculty or Department

Faculty and Department are organizational units.

They may contain or administer Majors but are not Majors.

## 7.7 Major Versus Course

A Course is a learning unit.

A Major contains or is implemented through multiple curriculum components and courses.

## 7.8 Major Versus Concentration

A Concentration may be:

- a narrower Major subtype;
- a specialization relationship;
- a Program-specific track;
- a local label.

Identity treatment requires scope evidence.

## 7.9 Major Versus Interdisciplinary Combination

An interdisciplinary Major may be a valid Major identity if it has:

- a stable definition;
- a coherent learning outcome structure;
- recognized usage beyond one temporary offering;
- evidence-supported disciplinary boundary.

Otherwise it may be a provider-specific Program.

## 7.10 Duplicate Resolution

The generator must inspect:

- exact name matches;
- synonyms;
- local translations;
- historical names;
- spelling variants;
- degree-title combinations;
- Program labels;
- concentration labels;
- broader or narrower Fields.

## 7.11 Identity Confidence

Identity confidence must reflect:

- source authority;
- naming consistency;
- cross-institutional usage;
- boundary clarity;
- duplicate resolution;
- localization consistency.

## 7.12 Identity Failure

Return an identity failure when:

- the target combines several independent Majors;
- the target is only one institution's Program title;
- equivalence is unresolved;
- duplicate candidates cannot be resolved;
- Field-versus-Major distinction remains material.

## 7.13 Rationale

Incorrect Major identity creates duplicate nodes and invalid education pathways.

## 7.14 System Impact

KarirGPS can map local Programs to stable Major concepts without collapsing educational diversity.

---

# 8. Scope Resolution

## 8.1 Purpose

Scope Resolution defines what the Major Object represents and what remains external.

## 8.2 Mandatory Scope Dimensions

The generator must receive or determine from approved input:

- disciplinary focus;
- included Knowledge Domains;
- excluded neighboring disciplines;
- level of breadth;
- education-level applicability;
- concentration treatment;
- geographic applicability;
- local naming scope;
- pathway scope;
- context externalization rules.

## 8.3 Inclusion Criteria

Inclusion criteria should state:

- what subject matter belongs within the Major;
- what learning outcome categories characterize it;
- what Knowledge Domains are central;
- what Skill development is expected conceptually;
- what education levels may implement it.

## 8.4 Exclusion Criteria

Exclusion criteria should state:

- adjacent Majors;
- broader Academic Fields;
- provider-specific Programs;
- unrelated degree titles;
- concentrations not included;
- professional authorization not implied;
- current institution offerings not included.

## 8.5 Breadth Control

A Major must be neither:

- so broad that it becomes an Academic Field;
- nor so narrow that it becomes a Course, track, or temporary specialization.

## 8.6 Education-Level Applicability

The generator may state that a Major can appear at one or more Education Levels.

It must not assume that the same label has identical scope across all frameworks.

## 8.7 Geographic Scope

A globally reusable Major Object should retain a global semantic core.

Regional differences should use:

- localizations;
- geographic variants;
- Program relationships;
- Qualification mappings;
- contextual assertions.

## 8.8 Curriculum Scope

Curriculum themes may be included conceptually.

Actual course lists, credits, sequencing, and provider curriculum versions remain external.

## 8.9 Career Scope

The Major may relate to multiple Careers.

Career relationships must not redefine the Major or imply guaranteed employment.

## 8.10 Scope Revision

A material scope change requires:

- a new Scope Resolution Record;
- identity reassessment;
- possible new Major identity;
- a new generation attempt.

## 8.11 Rationale

Clear scope prevents the Major Object from becoming a mixed catalog of fields, programs, qualifications, and careers.

## 8.12 System Impact

Educational pathway reasoning becomes consistent across institutions.

---

# 9. Evidence Requirements

## 9.1 Purpose

Evidence requirements ensure that Major semantics are grounded in authoritative academic, educational, and institutional sources.

## 9.2 Required Evidence Categories

The generator must seek evidence for:

1. identity and canonical naming;
2. definition and disciplinary scope;
3. Academic Field relationship;
4. learning outcome categories;
5. Knowledge Domain relationships;
6. core Skill development relationships;
7. education-level applicability;
8. curriculum themes;
9. entry and assessment patterns, if included;
10. Career pathway relationships;
11. Certification or Qualification relationships, if included;
12. geographic or framework variants;
13. regulatory or accreditation context, if included.

## 9.3 Minimum Evidence Threshold

A Draft Major Object may be produced only when evidence supports:

- one stable identity;
- one definition;
- one disciplinary boundary;
- one Academic Field relationship;
- learning outcome categories;
- at least one Knowledge Domain or core Skill relationship.

For a Reasoning Ready target, evidence should also support:

- education-level applicability;
- curriculum themes;
- pathway relationships;
- Career relationship scope;
- uncertainty and variant notes.

## 9.4 Preferred Source Classes

Depending on claim type, preferred sources include:

1. official education or qualification frameworks;
2. government education authorities;
3. accreditation or quality-assurance authorities;
4. recognized academic classification systems;
5. multi-institution curriculum or discipline standards;
6. professional associations;
7. peer-reviewed education research;
8. authoritative institutional descriptions for Program-specific evidence;
9. recognized international mappings;
10. expert review.

No single source class is universally sufficient.

## 9.5 Provider-Specific Evidence

Institutional sources may support:

- official Program mapping;
- local Major name;
- local curriculum;
- local learning outcomes;
- local delivery and qualification context.

They must not automatically establish universal Major scope.

## 9.6 Source Diversity

The generator should use evidence from more than one independent source when:

- the Major spans countries;
- naming varies;
- classification is disputed;
- learning outcomes are broad;
- Career pathways are material;
- equivalence is claimed.

## 9.7 Source Independence

Several sources derived from one upstream classification count as one evidence lineage.

## 9.8 Evidence Scope

Evidence must match the claim's:

- geography;
- education system;
- level;
- institution scope;
- discipline scope;
- time;
- framework.

## 9.9 Evidence Recency

Stable discipline definitions may use durable sources.

The following need current evidence:

- accreditation;
- regulatory recognition;
- Program offering;
- admission requirements;
- curriculum version;
- qualification mappings;
- professional authorization.

## 9.10 Learning Outcome Evidence

Learning outcomes must be conceptual and synthesized across appropriate sources.

The generator must not copy one provider's promotional outcomes as universal.

## 9.11 Career Relationship Evidence

A Major-to-Career relationship must be supported by:

- curriculum and competency alignment;
- recognized education-to-career pathways;
- professional or labor evidence where appropriate.

Graduate anecdotes alone are insufficient.

## 9.12 Evidence Conflict

When sources conflict about:

- classification;
- scope;
- naming;
- education level;
- equivalence;
- learning outcomes;

the generator must:

- preserve the conflict;
- identify contextual differences;
- lower scoped confidence;
- avoid forced equivalence;
- request review where material.

## 9.13 Missing Evidence

Allowed absence states:

- `unknown`;
- `not_found`;
- `insufficient_evidence`;
- `disputed`;
- `not_applicable`;
- `not_assessed`.

The generator must not infer absence or irrelevance from missing evidence.

## 9.14 Accreditation and Regulation Evidence

Accreditation or professional recognition claims require:

- authority;
- jurisdiction;
- scope;
- effective period;
- status;
- source.

These claims normally belong in contextual references.

## 9.15 Evidence Quality Statement

The generator may propose provisional evidence quality.

Final evidence quality belongs to validation and review.

## 9.16 Constraints

Source count does not replace claim-source alignment.

## 9.17 Rationale

Major Objects must represent educational concepts, not unverified catalog language.

## 9.18 System Impact

Knowledge Graph relationships and recommendation reasoning can rely on traceable educational evidence.

---

# 10. Relationship Rules

## 10.1 Purpose

Relationship rules define how a Major connects to the broader KarirGPS Ontology.

## 10.2 Required Relationship Classes

A Draft Major Object must propose or explicitly declare a blocking gap for:

1. Academic Field;
2. Knowledge Domain;
3. Skill development;
4. education-level applicability.

## 10.3 Recommended Relationship Classes

The generator should evaluate:

- Education Program;
- Qualification;
- Curriculum Component;
- Course;
- Career;
- Certification;
- Competency;
- Learning Path;
- Industry;
- Geography;
- Regulation;
- Authority;
- adjacent Major;
- prerequisite Knowledge Domain;
- progression Major or Field.

## 10.4 Relationship Entry Requirements

Every relationship must include:

- relationship ID or proposal ID;
- predicate;
- target Entity ID;
- target entity type;
- direction;
- status;
- strength;
- context when applicable;
- evidence references;
- provisional confidence;
- rationale;
- source object ID.

## 10.5 Academic Field Rule

A Major must use an approved relationship such as:

- `specialization_of`;
- `belongs_to_academic_field`;
- `interdisciplinary_across`, when approved.

The relationship must explain whether the Major is:

- narrower than one Field;
- interdisciplinary across several Fields;
- locally classified differently.

## 10.6 Knowledge Domain Rule

Use relationships such as:

- `teaches`;
- `covers`;
- `develops_knowledge_in`.

Distinguish:

- core Knowledge Domain;
- supporting Knowledge Domain;
- elective or concentration-specific domain.

## 10.7 Skill Rule

Use `develops` or another approved predicate.

Skill relationships should distinguish:

- core;
- common;
- beneficial;
- concentration-specific;
- Program-dependent.

Do not claim guaranteed mastery.

## 10.8 Competency Rule

A Major may contribute to a Competency but usually does not independently validate professional competence.

Use cautious predicates such as:

- `develops_foundation_for`;
- `contributes_to`;
- `prepares_for`.

## 10.9 Education Program Rule

A Major may be:

- `implemented_by`;
- `offered_through`;
- `focus_of`;

an Education Program.

Provider-specific offerings must be separate Program Objects.

## 10.10 Qualification Rule

A Major may appear within or be associated with a Qualification.

The generator must not treat Major and Qualification as identical.

## 10.11 Curriculum Component Rule

A Major may conceptually include curriculum themes or component categories.

Actual Curriculum Components require Program context.

## 10.12 Career Rule

Use predicates such as:

- `prepares_for`;
- `common_path_to`;
- `related_to`.

Forbidden:

- `guarantees`;
- `ensures_employment_in`;
- `only_path_to`.

## 10.13 Certification Rule

A Major may be related to a Certification but must not imply that completing the Major awards the Certification.

## 10.14 Education Level Rule

Applicability must refer to a recognized Education Level or framework context.

Cross-country equivalence must state mapping type.

## 10.15 Admission and Prerequisite Rule

Common entry patterns may be represented cautiously.

Provider-specific admission rules remain external.

Prerequisite relationships must have context.

## 10.16 Adjacent Major Rule

Adjacency requires an explicit basis:

- shared Academic Field;
- overlapping Knowledge Domains;
- overlapping learning outcomes;
- transferable curriculum foundation;
- common progression routes.

Adjacency does not imply equivalence.

## 10.17 Concentration Rule

A concentration may be related using:

- `has_concentration`;
- `specializes_into`;
- `implemented_as_track_in`;

according to Ontology approval.

The generator must not assume a concentration is globally stable.

## 10.18 Industry Rule

A Major may be applied in Industries, but an Industry does not define the Major.

## 10.19 Geographic Variant Rule

Local variants must reference Geography and mapping type.

## 10.20 Relationship Strength

Allowed conceptual strengths:

- `essential`;
- `strong`;
- `common`;
- `possible`;
- `emerging`;
- `disputed`.

## 10.21 Forbidden Relationship Patterns

The generator must not create:

- Major `same_as` Education Program;
- Major `same_as` Qualification;
- Major `same_as` Academic Field without identity authority;
- Major `guarantees` Career;
- Major `requires` Personality Trait;
- Major `offered_by` University as a universal intrinsic claim without Program mediation;
- Major `has_ranking`;
- Major `has_tuition`;
- Major `has_current_accreditation` without contextual assertion;
- Major `ensures_skill_mastery`;
- Major `only_path_to` Career;
- Major `is_best_for` user group.

## 10.22 Circular Reference Control

Use references, not full embedded target objects.

Inverse relationships should be derived or governed, not independently generated without reconciliation.

## 10.23 Rationale

Typed relationships allow Major Objects to support pathway reasoning without collapsing education entities.

## 10.24 System Impact

Graph registration can map Major knowledge without extracting semantics from prose.

---

# 11. Generation Workflow

## 11.1 Step 1: Confirm Contract

Verify:

- governing versions;
- output authority;
- target type;
- expected Draft state.

## 11.2 Step 2: Lock Identity

Confirm:

- one Major identity;
- canonical name proposal;
- duplicate disposition;
- Field, Program, Qualification, Faculty, Department, and Course boundaries.

## 11.3 Step 3: Lock Scope

Confirm:

- disciplinary boundary;
- inclusion and exclusion;
- education-level scope;
- concentration treatment;
- geographic context;
- stable-context separation.

## 11.4 Step 4: Build Claim Inventory

Identify planned claims for:

- identity;
- definition;
- disciplinary scope;
- Academic Field;
- learning outcomes;
- Knowledge Domains;
- Skills;
- education levels;
- curriculum themes;
- pathways;
- contextual variants.

## 11.5 Step 5: Map Evidence

Each material claim must receive:

- evidence references;
- source references;
- claim class;
- confidence;
- geography;
- time;
- conflict status.

Unsupported claims must be removed, narrowed, or marked as gaps.

## 11.6 Step 6: Build Relationship Plan

Resolve:

- mandatory relationships;
- recommended relationships;
- relationship strengths;
- mapping types;
- target references;
- unresolved targets.

## 11.7 Step 7: Separate Major Core from Program Context

Keep in Major core:

- stable definition;
- learning outcome categories;
- Knowledge Domains;
- Skills;
- Academic Field;
- education-level applicability;
- general pathways.

Externalize:

- institution;
- current Program;
- duration;
- tuition;
- current admission;
- accreditation;
- delivery mode;
- current curriculum;
- qualification award;
- current ranking.

## 11.8 Step 8: Populate Canonical Output Sections

Populate every required section in the prescribed order.

Unsupported optional fields must use approved absence states.

## 11.9 Step 9: Assign Confidence and Uncertainty

Assign provisional confidence at:

- identity;
- claim;
- relationship;
- coverage;
- object level.

## 11.10 Step 10: Run Failure Scan

Check:

- Major versus Program;
- Major versus Field;
- Major versus Qualification;
- provider contamination;
- curriculum overgeneralization;
- employment guarantee;
- source hallucination;
- equivalence inflation;
- localization drift.

## 11.11 Step 11: Run Pre-validation

Run the mandatory validation and quality checklists.

## 11.12 Step 12: Return One Outcome

Return exactly one:

- Draft Major Object;
- or typed generation failure.

## 11.13 Constraint

The generator must not draft a complete narrative and attach evidence afterward.

## 11.14 Rationale

The workflow ensures that structure and evidence precede prose.

## 11.15 System Impact

Different models can produce semantically equivalent Major Drafts.

---

# 12. Mandatory Thinking Sequence

## 12.1 Privacy Requirement

The thinking sequence is mandatory but private.

The generator must not expose detailed chain of thought.

It may expose concise auditable outcomes through structured fields.

## 12.2 Required Internal Sequence

The generator must internally perform:

1. contract compatibility check;
2. output authority check;
3. identity classification;
4. duplicate and equivalence analysis;
5. disciplinary boundary analysis;
6. scope lock;
7. material claim inventory;
8. evidence mapping;
9. source conflict analysis;
10. stable-versus-contextual separation;
11. relationship resolution;
12. localization check;
13. provisional confidence assignment;
14. canonical output assembly;
15. forbidden-content scan;
16. self-consistency verification;
17. acceptance decision.

## 12.3 No Hidden Completion

If the generator cannot resolve a mandatory step, it must fail explicitly.

## 12.4 Allowed Public Rationale

The output may include:

- identity rationale;
- scope note;
- relationship rationale;
- confidence basis;
- uncertainty;
- evidence coverage;
- pre-validation findings.

## 12.5 Rationale

This approach supports audit without disclosing private reasoning traces.

---

# 13. Mandatory Output Contract

## 13.1 Output Types

The generator may return one of:

1. `draft_major_object`;
2. `generation_blocked`;
3. `insufficient_evidence`;
4. `identity_conflict`;
5. `ontology_mismatch`;
6. `rights_or_usage_restriction`;
7. `source_integrity_failure`;
8. `revision_conflict`;
9. `localization_blocked`;
10. `generation_failure`.

## 13.2 Draft Status Requirements

A Draft Major Object must declare:

- object kind `entity`;
- entity type `major`;
- status `draft`;
- review status `not_started`;
- quality values as provisional or not assessed;
- readiness profiles as targets or candidates only;
- explicit blockers and warnings.

## 13.3 Canonical Section Order

Every generated Major Object must contain the following sections in this exact semantic order:

1. Contract and Identity
2. Naming and Localization
3. Definition and Scope
4. Major Core Semantics
5. Academic Field and Disciplinary Structure
6. Learning Outcome Structure
7. Knowledge Domain Structure
8. Skill and Competency Development
9. Curriculum Themes and Components
10. Education Level and Qualification Applicability
11. Education Program and Institutional Context
12. Entry, Assessment, and Progression Patterns
13. Career and Professional Pathway Relationships
14. Certification, Regulation, and Accreditation Context
15. Geographic and International Mapping
16. Evidence, Sources, Confidence, and Uncertainty
17. Governance, Quality, and Readiness
18. Generation and Audit Record

## 13.4 Section 1: Contract and Identity

Required fields:

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

Required values:

- `object_kind`: entity;
- `entity_type`: major;
- `status`: draft.

## 13.5 Section 2: Naming and Localization

Required fields:

- `canonical_name`;
- `display_name`;
- `canonical_language`;
- `default_locale`;
- `available_locales`;
- `aliases`;
- `abbreviations`;
- `former_names`;
- `localizations`;
- `disambiguation_note`;
- `localization_notes`.

Each alias must identify:

- alias type;
- locale;
- mapping confidence;
- status;
- source when material.

## 13.6 Section 3: Definition and Scope

Required fields:

- `definition`;
- `summary`;
- `purpose`;
- `scope`;
- `inclusion_criteria`;
- `exclusion_criteria`;
- `major_boundary_note`.

The definition must not include:

- institution;
- tuition;
- ranking;
- current accreditation;
- current admission;
- guaranteed Career outcome;
- provider-specific curriculum.

## 13.7 Section 4: Major Core Semantics

Required fields:

- `academic_field_ref`;
- `disciplinary_focus`;
- `learning_outcome_categories`;
- `knowledge_domain_refs`;
- `core_skill_refs`;
- `education_level_applicability`;
- `major_type`;
- `interdisciplinary_status`;
- `concentration_summary`;
- `progression_summary`;
- `major_boundary_note`.

Optional fields:

- conceptual assessment modes;
- ethical or professional context;
- research orientation;
- applied orientation;
- theory-practice balance;
- transferability summary.

## 13.8 Section 5: Academic Field and Disciplinary Structure

Required fields:

- `academic_field_relationships`;
- `disciplinary_scope_summary`;
- `subfield_relationships`;
- `related_field_relationships`;
- `interdisciplinary_relationships`;
- `classification_basis`;
- `classification_uncertainties`.

Every relationship must contain:

- relationship ID;
- predicate;
- target Entity ID;
- target entity type;
- status;
- strength;
- context;
- evidence references;
- provisional confidence;
- rationale.

## 13.9 Section 6: Learning Outcome Structure

Required fields:

- `learning_outcome_categories`;
- `learning_outcome_relationships`;
- `outcome_scope_note`;
- `outcome_variability_note`;
- `outcome_evidence_coverage`;
- `outcome_uncertainties`.

Learning outcomes must be conceptual, not institution-specific guarantees.

## 13.10 Section 7: Knowledge Domain Structure

Required fields:

- `core_knowledge_domain_relationships`;
- `supporting_knowledge_domain_relationships`;
- `elective_or_concentration_domain_relationships`;
- `knowledge_boundary_note`;
- `knowledge_evidence_coverage`;
- `knowledge_uncertainties`.

## 13.11 Section 8: Skill and Competency Development

Required fields:

- `core_skill_relationships`;
- `supporting_skill_relationships`;
- `competency_relationships`;
- `skill_development_summary`;
- `skill_variability_note`;
- `skill_evidence_coverage`;
- `skill_uncertainties`.

The generator must distinguish:

- Skill;
- Competency;
- Knowledge Domain;
- Tool;
- assessment result.

## 13.12 Section 9: Curriculum Themes and Components

Required fields:

- `curriculum_theme_relationships`;
- `curriculum_component_category_refs`;
- `course_category_refs`;
- `curriculum_scope_note`;
- `provider_variability_note`;
- `curriculum_evidence_coverage`;
- `curriculum_uncertainties`.

Actual provider course inventories must not be embedded as universal Major content.

## 13.13 Section 10: Education Level and Qualification Applicability

Required fields:

- `education_level_relationships`;
- `qualification_relationships`;
- `framework_mappings`;
- `level_applicability_note`;
- `qualification_boundary_note`;
- `equivalence_uncertainties`.

Cross-border mappings must identify:

- exact;
- close;
- partial;
- broader;
- narrower;
- no direct equivalent;
- disputed.

## 13.14 Section 11: Education Program and Institutional Context

Required fields:

- `education_program_relationships`;
- `institution_type_relationships`;
- `program_implementation_note`;
- `provider_independence_note`;
- `program_variability_note`;
- `missing_program_objects`.

This section may reference Programs and Institution types but must not make provider-specific properties intrinsic to the Major.

## 13.15 Section 12: Entry, Assessment, and Progression Patterns

Required fields:

- `common_entry_pattern_refs`;
- `assessment_mode_refs`;
- `prerequisite_relationships`;
- `progression_path_relationships`;
- `advanced_study_relationships`;
- `entry_variability_note`;
- `assessment_variability_note`;
- `progression_uncertainties`.

Provider-specific admission rules remain external.

## 13.16 Section 13: Career and Professional Pathway Relationships

Required fields:

- `career_relationships`;
- `career_family_relationships`;
- `professional_domain_relationships`;
- `industry_relationships`;
- `pathway_rationale`;
- `career_variability_note`;
- `career_relationship_uncertainties`.

Career relationships must not imply guarantee or exclusivity.

## 13.17 Section 14: Certification, Regulation, and Accreditation Context

Required fields:

- `certification_relationships`;
- `license_relationships`;
- `regulation_refs`;
- `authority_refs`;
- `accreditation_context_refs`;
- `professional_recognition_notes`;
- `regulatory_variability_note`;
- `missing_contextual_objects`.

These are references and contextual notes, not intrinsic universal claims.

## 13.18 Section 15: Geographic and International Mapping

Required fields:

- `geographic_variant_refs`;
- `localized_major_mappings`;
- `international_equivalence_mappings`;
- `local_education_framework_refs`;
- `translation_equivalence_notes`;
- `mapping_conflicts`;
- `geographic_uncertainties`.

## 13.19 Section 16: Evidence, Sources, Confidence, and Uncertainty

Required fields:

- `claims`;
- `evidence`;
- `sources`;
- `provenance`;
- `provenance_chain`;
- `evidence_status`;
- `source_coverage`;
- `methodology_notes`;
- `editorial_synthesis`;
- `counterevidence`;
- `conflict_status`;
- `identity_confidence`;
- `evidence_confidence`;
- `coverage_confidence`;
- `object_confidence`;
- `confidence_basis`;
- `scoped_confidence`;
- `uncertainties`;
- `assumptions`;
- `forbidden_interpretations`.

Every material claim entry must include:

- claim ID;
- claim category;
- claim class;
- claim statement;
- scope;
- evidence refs;
- source refs;
- confidence;
- uncertainty;
- status.

## 13.20 Section 17: Governance, Quality, and Readiness

Required fields:

- `owner`;
- `maintainer`;
- `contributors`;
- `created_at`;
- `created_by`;
- `updated_at`;
- `review_status`;
- `review_history`;
- `license`;
- `usage_restrictions`;
- `allowed_purposes`;
- `prohibited_uses`;
- `sensitivity_class`;
- `retention_class`;
- `governance_notes`;
- `conflict_of_interest`;
- `quality_score`;
- `accuracy_score`;
- `coverage_score`;
- `completeness_score`;
- `consistency_score`;
- `freshness_score`;
- `evidence_quality_score`;
- `relationship_quality_score`;
- `localization_quality_score`;
- `explainability_score`;
- `reasoning_utility_score`;
- `retrieval_quality_score`;
- `validation_score`;
- `quality_method_version`;
- `quality_status`;
- `quality_notes`;
- `readiness_profiles`;
- `blocking_issues`;
- `warnings`.

All generator quality values remain provisional.

## 13.21 Section 18: Generation and Audit Record

Required fields:

- `generation_record`;
- `generation_mode`;
- `generator_identity`;
- `generator_version`;
- `generation_timestamp`;
- `input_package_refs`;
- `evidence_bundle_ref`;
- `prior_revision_ref`;
- `transformation_history`;
- `audit_references`;
- `unresolved_questions`;
- `pre_validation_result`;
- `pre_validation_findings`;
- `generation_limitations`.

## 13.22 Generator Pre-validation Report

The output must include a compact report with:

- contract validation;
- identity validation;
- Major core validation;
- relationship validation;
- evidence validation;
- temporal and geographic validation;
- localization validation;
- constitutional validation;
- lifecycle validation;
- self-consistency validation;
- blockers;
- warnings;
- recommended next pipeline stage.

## 13.23 Output Determinism

Under an identical generation envelope, the following must be stable:

- outcome type;
- identity;
- section structure;
- field labels;
- claim classes;
- relationship predicates;
- evidence references;
- absence states;
- confidence scope;
- blocker classification.

## 13.24 Empty and Missing Fields

No mandatory section may be omitted.

Unsupported fields use approved absence states, not invented content.

## 13.25 Rationale

A fixed output contract makes Major Objects machine-readable without per-object interpretation.

## 13.26 System Impact

Backends, validators, graph systems, and AI agents can consume all Major Drafts uniformly.

---

# 14. Validation Rules

## 14.1 Contract Validation

Check:

- supported KOS version;
- supported Ontology version;
- MOG version;
- object kind;
- entity type;
- Draft status;
- canonical section order;
- mandatory fields.

## 14.2 Identity Validation

Check:

- one Major identity;
- duplicate resolution;
- Major versus Academic Field;
- Major versus Education Program;
- Major versus Qualification;
- Major versus Faculty or Department;
- Major versus Course;
- concentration treatment;
- localization equivalence.

## 14.3 Major Core Validation

Check:

- Academic Field reference;
- disciplinary focus;
- learning outcome categories;
- Knowledge Domain references;
- core Skill references;
- education-level applicability;
- boundary note.

## 14.4 Relationship Validation

Check:

- predicate validity;
- source and target compatibility;
- direction;
- context;
- evidence;
- confidence;
- mapping type;
- no guaranteed Career relationship;
- no provider contamination.

## 14.5 Evidence Validation

Check:

- claim-evidence mapping;
- source existence;
- source scope;
- source independence;
- conflict;
- no fabricated source;
- usage rights;
- current evidence for contextual claims.

## 14.6 Curriculum Validation

Check:

- conceptual themes rather than one provider's curriculum;
- provider variation;
- no universal course list;
- no guaranteed outcomes.

## 14.7 Education Framework Validation

Check:

- education levels tied to framework;
- Qualification not conflated with Major;
- international mappings typed;
- no forced equivalence.

## 14.8 Program Separation Validation

Check:

- provider-specific fields absent from Major core;
- Program relationships remain references;
- institution does not define Major identity;
- current offering data externalized.

## 14.9 Career Relationship Validation

Check:

- multiple pathway possibility;
- no employment guarantee;
- relationship rationale;
- evidence;
- context;
- no single destination claim.

## 14.10 Temporal and Geographic Validation

Check:

- current accreditation externalized;
- admission cycles externalized;
- local regulations scoped;
- local mappings contextual;
- historical names have periods.

## 14.11 Localization Validation

Check:

- locale identity;
- translation status;
- semantic equivalence;
- local framework;
- no translation scope drift;
- no forced global identity from local label.

## 14.12 Constitutional Validation

Check:

- no user-specific recommendation;
- no social or protected-group stereotype;
- no prestige manipulation;
- no guaranteed outcome;
- no unsupported hierarchy of Majors;
- no personal data.

## 14.13 Lifecycle and Audit Validation

Check:

- Draft status;
- generation record;
- no publication fields;
- prior revision preserved;
- blockers and warnings explicit;
- quality provisional.

## 14.14 Validation Severity

- `blocker`;
- `error`;
- `warning`;
- `information`.

Identity, fabricated source, invalid Ontology class, rights violation, and provider-program collapse are non-compensatory blockers.

## 14.15 Generator Decision

Return a Draft only when no generator-level blocker remains.

## 14.16 Rationale

Validation separates structural completeness from semantic correctness.

## 14.17 System Impact

Invalid Major Drafts are stopped before formal review.

---

# 15. Confidence Rules

## 15.1 Confidence Dimensions

The generator must distinguish:

- identity confidence;
- classification confidence;
- evidence confidence;
- learning outcome confidence;
- relationship confidence;
- localization confidence;
- equivalence confidence;
- coverage confidence;
- object confidence.

## 15.2 Allowed Levels

Use:

- `high`;
- `medium_high`;
- `medium`;
- `medium_low`;
- `low`;
- `indeterminate`.

## 15.3 Confidence Basis

Confidence must consider:

- authority of source;
- directness;
- source independence;
- cross-institutional consistency;
- framework consistency;
- geography;
- education level;
- recency;
- methodology;
- scope match;
- unresolved conflict;
- identity clarity.

## 15.4 Confidence Ceiling

A generated synthesis cannot have higher confidence than the required evidence chain unless independently confirmed.

## 15.5 Identity Confidence Rule

Identity confidence cannot be high if:

- Major-versus-Program is unresolved;
- duplicate candidates remain;
- local equivalence is disputed;
- scope depends on one institution only.

## 15.6 Learning Outcome Confidence Rule

Learning outcome confidence must reflect:

- breadth of evidence;
- provider diversity;
- outcome consistency;
- level applicability;
- curriculum variability.

## 15.7 Career Relationship Confidence

Career relationship confidence must not exceed the evidence for curriculum-to-competency-to-career alignment.

## 15.8 Equivalence Confidence

International equivalence requires its own confidence and mapping type.

## 15.9 Object Confidence

Object confidence cannot be high when a mandatory dimension is low or indeterminate.

## 15.10 No Confidence by Repetition

Repeated institutional descriptions derived from one standard do not independently raise confidence.

## 15.11 Provisional Status

All generator confidence remains provisional until validation and review.

## 15.12 Forbidden Confidence Patterns

Do not assign high confidence because:

- the Major is widely known;
- the name appears frequently;
- many institutions offer similarly named Programs;
- multiple models agree;
- the generated description is detailed.

## 15.13 Rationale

Confidence represents evidence strength, not educational familiarity.

## 15.14 System Impact

AI Reasoning can treat Major knowledge proportionally.

---

# 16. Forbidden Behaviors

The generator must never:

1. generate a complete Major Object from only a name;
2. use model memory as evidence;
3. fabricate a source, identifier, mapping, authority, or framework;
4. output Active, Validated, Published, Graph Ready, or approved Reasoning Ready status;
5. conflate Major with Academic Field;
6. conflate Major with Education Program;
7. conflate Major with Qualification or Degree;
8. conflate Major with Faculty, Department, School, or Institution;
9. conflate Major with Course or Curriculum Component;
10. embed provider-specific tuition;
11. embed current admission requirements as universal;
12. embed one institution's duration as universal;
13. embed current accreditation as intrinsic;
14. embed ranking or prestige;
15. guarantee Career or employment outcomes;
16. state that one Major is the only route to a Career;
17. state that a Major guarantees Skill mastery;
18. infer global equivalence from similar labels;
19. use local Program names as new Major identities without resolution;
20. suppress evidence conflict;
21. fill unsupported curriculum sections with plausible content;
22. use vague relationships when a specific predicate exists;
23. assign final quality approval;
24. expose private chain of thought;
25. write a production prompt;
26. redesign Ontology or KOS;
27. create implementation code, API, or database design;
28. overwrite a prior revision;
29. include personal education advice;
30. rank Majors for social groups or protected classes;
31. use promotional institutional language;
32. copy extensive copyrighted curriculum text;
33. treat absence of evidence as absence of relevance;
34. force one global education framework onto local systems.

---

# 17. Quality Checklist

## 17.1 Semantic Consistency

- Major identity is stable.
- Definition, scope, Field, outcomes, Knowledge, and Skills describe the same concept.
- No Program or Qualification contamination exists.

## 17.2 Ontology Compliance

- Entity type is Major.
- Academic Field relationship is valid.
- Predicates are approved.
- Target types are compatible.
- Concept, subtype, and instance are separated.

## 17.3 KOS Compliance

- Universal mandatory fields exist.
- Major-specific mandatory fields exist.
- lifecycle semantics are correct.
- absence states are explicit.
- audit fields are complete.

## 17.4 Evidence Discipline

- Material claims map to evidence.
- Provider-specific evidence is scoped.
- conflicts are visible.
- source rights are respected.
- no unsupported generalization exists.

## 17.5 Learning Outcome Quality

- Outcomes are conceptual.
- Outcomes are not promotional.
- Outcomes are not one provider's guarantee.
- Variability is declared.

## 17.6 Relationship Quality

- Relationships are typed.
- Major-to-Career is non-guaranteed.
- Major-to-Program is external.
- equivalence mappings are typed.
- confidence is scoped.

## 17.7 Localization Quality

- local names preserve identity;
- education framework is identified;
- equivalence is not forced;
- translation status is explicit.

## 17.8 Explainability

A reviewer can determine:

- what the Major is;
- what it is not;
- its Academic Field;
- what learners conceptually learn;
- what Knowledge Domains it covers;
- what Skills it develops;
- at which education levels it may appear;
- what Programs implement it;
- what Careers it may prepare for;
- what remains uncertain;
- which evidence supports each claim.

## 17.9 Graph Readiness Potential

- stable Entity ID;
- typed references;
- no full embedded entities;
- contextual claims externalized;
- mapping types explicit;
- provenance retained.

## 17.10 Reasoning Readiness Potential

The Draft can support future:

- Major comparison;
- education pathway analysis;
- learning outcome comparison;
- Skill development analysis;
- Career pathway analysis;
- qualification mapping;
- international education mapping;
- gap and progression reasoning.

## 17.11 Maintainability

- stable core separated from Program data;
- current accreditation externalized;
- source and version lineage available;
- localization modular;
- optional gaps explicit.

## 17.12 Auditability

- request;
- identity;
- scope;
- evidence;
- model;
- claims;
- relationships;
- confidence;
- validation;

are traceable.

## 17.13 Quality Constraint

Length and apparent completeness are not quality measures.

## 17.14 System Impact

Reviewers can focus on academic judgment rather than structural repair.

---

# 18. Failure Handling

## 18.1 Failure Output Contract

A failure result must include:

- `generation_outcome`;
- `request_id`;
- `production_case_id`;
- `failure_type`;
- `failure_stage`;
- `failure_summary`;
- `blocking_conditions`;
- `missing_inputs`;
- `conflicting_inputs`;
- `affected_requirements`;
- `evidence_status`;
- `ontology_status`;
- `kos_status`;
- `safe_partial_results`;
- `required_remediation`;
- `recommended_owner`;
- `retry_eligibility`;
- `audit_notes`.

The generator must not include a complete Major Object after a blocking failure.

## 18.2 Allowed Failure Types

- `GENERATION_BLOCKED`;
- `INSUFFICIENT_EVIDENCE`;
- `IDENTITY_CONFLICT`;
- `ONTOLOGY_MISMATCH`;
- `CONTRACT_VERSION_UNSUPPORTED`;
- `RIGHTS_OR_USAGE_RESTRICTION`;
- `SOURCE_INTEGRITY_FAILURE`;
- `REVISION_CONFLICT`;
- `LOCALIZATION_BLOCKED`;
- `EQUIVALENCE_MAPPING_CONFLICT`;
- `PROGRAM_MAJOR_COLLAPSE`;
- `GENERATION_FAILURE`.

## 18.3 Identity Conflict

Use when:

- the target may be Program or Field;
- duplicate candidates remain unresolved;
- local labels map to several Major identities;
- several Majors are combined.

## 18.4 Program-Major Collapse

Use when the target requires provider, duration, delivery, curriculum version, or awarded credential to remain identifiable.

## 18.5 Insufficient Evidence

Use when mandatory definition, Field, outcomes, Knowledge, or Skill evidence is missing.

## 18.6 Ontology Mismatch

Use when no valid class or predicate exists.

## 18.7 Equivalence Mapping Conflict

Use when international or local equivalence cannot be represented honestly.

## 18.8 Source Integrity Failure

Use when provenance, identity, access, or source authenticity fails.

## 18.9 Rights Restriction

Use when source licensing or usage terms prohibit production.

## 18.10 Revision Conflict

Use when prior revision, change class, or identity continuity is invalid.

## 18.11 Safe Partial Results

Safe partial results may include:

- duplicate candidates;
- unresolved Field mapping;
- evidence gaps;
- Program-versus-Major analysis;
- candidate mapping types;
- conflict summary;
- required authority.

They must not resemble an accepted Major Draft.

## 18.12 Retry Eligibility

Use:

- `eligible_after_input_remediation`;
- `eligible_after_identity_resolution`;
- `eligible_after_ontology_resolution`;
- `eligible_after_evidence_collection`;
- `eligible_after_mapping_review`;
- `eligible_after_rights_clearance`;
- `not_eligible_without_scope_change`;
- `not_eligible`.

## 18.13 Rationale

Typed failures preserve production integrity and enable deterministic remediation.

## 18.14 System Impact

Batch systems can route failures to the correct owner without speculative retries.

---

# 19. Self-Consistency Verification

## 19.1 Identity Consistency

Verify that:

- canonical name;
- definition;
- scope;
- Academic Field;
- learning outcomes;
- concentrations;
- neighboring Major distinctions;

refer to one Major identity.

## 19.2 Field-Major Consistency

The Academic Field relationship must be consistent with disciplinary scope and Knowledge Domains.

## 19.3 Learning Outcome Consistency

Learning outcomes must align with:

- Knowledge Domains;
- Skills;
- curriculum themes;
- education-level applicability.

## 19.4 Skill-Knowledge Consistency

Skills should be plausibly developed through the declared Knowledge and curriculum themes.

No orphan Skill relationship should exist.

## 19.5 Program Separation Consistency

No provider-specific property may appear as intrinsic Major content.

## 19.6 Qualification Consistency

The Major must not become identical to the Qualification.

## 19.7 Career Relationship Consistency

Career pathways must align with:

- learning outcomes;
- Skills;
- Knowledge Domains;
- stated limitations.

## 19.8 Education-Level Consistency

Learning outcomes and scope must not contradict the declared level applicability.

## 19.9 Localization Consistency

Local labels and mappings must preserve the same semantic identity or explicitly state partial equivalence.

## 19.10 Confidence Consistency

High object confidence must not coexist with:

- unresolved identity conflict;
- missing Academic Field;
- missing learning outcomes;
- missing Knowledge or Skill evidence;
- disputed equivalence;
- Program-Major collapse.

## 19.11 Evidence Consistency

Every evidence and source reference must exist in the input package.

## 19.12 Lifecycle Consistency

Status, review state, readiness, and quality state must reflect Draft authority.

## 19.13 Revision Consistency

For revisions:

- prior revision exists;
- identity continuity is preserved;
- changes match the declared change class;
- breaking identity changes use merge or split governance.

## 19.14 Verification Result

Any blocker found during self-consistency verification requires a failure output.

## 19.15 Rationale

Major Objects are highly relational; section-level correctness is insufficient if relationships contradict each other.

---

# 20. Output Acceptance Criteria

A generated Draft Major Object may be accepted for formal validation only if:

1. output type is `draft_major_object`;
2. lifecycle status is Draft;
3. object kind is Entity;
4. entity type is Major;
5. Ontology class is valid;
6. one semantic identity is resolved;
7. duplicate state is resolved or safely provisional;
8. Major-versus-Field is resolved;
9. Major-versus-Program is resolved;
10. Major-versus-Qualification is resolved;
11. canonical section order is complete;
12. universal mandatory fields exist;
13. Major-specific mandatory fields exist;
14. definition and disciplinary scope are supported;
15. Academic Field relationship exists;
16. learning outcome categories are supported;
17. Knowledge Domain relationships exist;
18. core Skill relationships exist;
19. education-level applicability is stated;
20. Program-specific data is externalized;
21. Career relationships are non-guaranteed;
22. material claims map to evidence;
23. sources resolve;
24. no source is fabricated;
25. relationship predicates are approved;
26. confidence is scoped and provisional;
27. uncertainty and conflict are explicit;
28. no forbidden behavior occurred;
29. Generation Record is complete;
30. pre-validation passes;
31. no non-compensatory blocker remains.

## 20.1 Conditional Acceptance

A Draft may proceed with warnings when:

- optional localization is incomplete;
- Program relationships are incomplete;
- Career relationships are incomplete;
- Certification context is unavailable;
- international mappings are not assessed;
- curriculum themes are partially supported.

Warnings must not conceal a core gap.

## 20.2 Rejection Conditions

Reject when:

- target is not a Major;
- evidence is insufficient for core semantics;
- identity remains unresolved;
- target is provider-specific Program content;
- source fabrication occurs;
- rights prohibit use;
- invalid predicates are used;
- the Draft guarantees Career outcomes;
- mandatory sections are missing;
- revision overwrite is attempted.

## 20.3 Acceptance Meaning

Acceptance means only eligibility for formal KOS and Ontology validation.

It does not mean:

- validated;
- active;
- published;
- Graph Ready;
- Vector Ready;
- Reasoning Ready;
- institutionally recognized.

---

# 21. Generator Governance

## 21.1 Governance Purpose

Ensure MOG evolves without semantic drift or unauthorized simplification.

## 21.2 Governance Roles

- Major Generator Owner;
- Ontology Owner;
- KOS Owner;
- Education Domain Steward;
- Evidence Governance Reviewer;
- Localization Steward;
- AI Systems Reviewer;
- Knowledge Validator Owner;
- Batch Production Owner.

## 21.3 Change Proposal

A MOG change proposal must describe:

- problem;
- affected sections;
- semantic impact;
- KOS impact;
- Ontology impact;
- output compatibility;
- validation changes;
- prompt implications;
- batch-production implications;
- migration;
- rollback.

## 21.4 Versioning

A new major MOG version is required when changing:

- mandatory inputs;
- identity rules;
- output section structure;
- mandatory fields;
- evidence requirements;
- relationship rules;
- failure types;
- acceptance criteria;
- generator authority.

## 21.5 Compatible Changes

Editorial clarification or new optional guidance may use a compatible revision if behavior and semantics remain unchanged.

## 21.6 Model Qualification

A model must demonstrate:

- fixed output compliance;
- typed failure behavior;
- no fabricated sources;
- correct Major-versus-Program handling;
- correct Major-versus-Field handling;
- correct Qualification separation;
- provider neutrality;
- evidence mapping;
- confidence discipline;
- no self-publication.

## 21.7 Regression Scenarios

Every MOG or model version should be tested against:

- clear Major identity;
- Academic Field ambiguity;
- Education Program ambiguity;
- Degree or Qualification ambiguity;
- local naming variation;
- interdisciplinary Major;
- concentration ambiguity;
- insufficient evidence;
- conflicting curriculum evidence;
- international equivalence request;
- provider-specific contamination;
- accreditation contamination;
- Career guarantee attempt;
- invalid source;
- revision request.

## 21.8 Audit

The production system must record:

- MOG version;
- model identity;
- input package;
- evidence bundle;
- generation output;
- validator output;
- reviewer decision;
- remediation attempts.

## 21.9 Exception Policy

Exceptions must be:

- explicit;
- scoped;
- approved;
- time-bound;
- auditable;
- non-conflicting with Constitution, Ontology, and KOS.

## 21.10 System Impact

Generator changes remain controlled across future models and education systems.

---

# 22. Future Compatibility

## 22.1 Knowledge Graph

MOG outputs must support:

- Major nodes;
- Academic Field edges;
- Knowledge Domain edges;
- Skill edges;
- Program edges;
- Career edges;
- Qualification and mapping edges;
- evidence and provenance subgraphs.

## 22.2 Vector Retrieval and RAG

Future derived representations must preserve:

- object ID;
- revision ID;
- locale;
- source field paths;
- access restrictions;
- Major-versus-Program distinction.

## 22.3 International Education Systems

MOG must support:

- multiple education frameworks;
- multiple Qualification systems;
- local names;
- cross-border mappings;
- partial equivalence;
- no direct equivalent;
- regulated education pathways.

## 22.4 New Education Models

MOG should remain compatible with:

- interdisciplinary Majors;
- modular degrees;
- stackable credentials;
- microcredentials;
- competency-based education;
- online and hybrid Programs;
- dual-degree structures;
- work-integrated learning;
- nontraditional education pathways.

These models should be represented through relationships and Program Objects rather than by weakening Major identity.

## 22.5 Multi-agent AI

Future agents may specialize in:

- identity resolution;
- evidence extraction;
- localization;
- curriculum synthesis;
- validation;
- equivalence mapping;
- review preparation.

All remain bound by MOG.

## 22.6 Institutional Contribution

Institutions may contribute:

- official Program mappings;
- curriculum evidence;
- local Major names;
- learning outcomes;
- accreditation context.

Institutional contribution does not independently redefine the universal Major identity.

## 22.7 Community Contribution

Community contributions may propose:

- aliases;
- mapping corrections;
- evidence;
- localization;
- outdated relationship reports.

They enter governance and review, not direct activation.

## 22.8 Future Ontology Extensions

If future Ontology versions add:

- Faculty;
- Department;
- Concentration;
- Degree;
- Admission Requirement;
- Accreditation;
- Qualification Framework;

MOG must adopt them through versioned governance rather than informal fields.

## 22.9 Batch Production Compatibility

A future Major Batch Production System can inherit:

- immutable attempts;
- item-level identity;
- evidence isolation;
- typed failure;
- validation layering;
- review gates;
- resumability;
- deterministic contract locking.

## 22.10 Rationale

Future compatibility is achieved by stable semantic boundaries, not by placing all possible data inside the Major Object.

---

# 23. Generator Success Criteria

MOG is successful when:

1. all generated outputs use the same canonical section structure;
2. every accepted Draft follows KOS;
3. every accepted Draft follows the Ontology;
4. Major, Academic Field, Program, Qualification, Faculty, Department, Course, and Career remain distinct;
5. provider-specific data does not contaminate the Major core;
6. every material claim maps to evidence;
7. source fabrication rate is zero for accepted Drafts;
8. Academic Field relationships are valid;
9. learning outcome categories are conceptual and evidence-supported;
10. Knowledge Domain and Skill relationships are precise;
11. Career relationships do not imply guarantee;
12. international mappings preserve uncertainty;
13. local names do not create duplicate identities;
14. confidence is scoped and provisional;
15. failures are typed and actionable;
16. human reviewers do not need to reconstruct missing generator logic;
17. Graph registration can use structured relationships;
18. AI Reasoning can compare Majors without reading unstructured narratives;
19. revisions preserve lineage;
20. models cannot self-publish;
21. the generator remains usable across countries, providers, and future education models.

---

# 24. Closing Standard

Major Object Generator V1 is the definitive production contract governing how KarirGPS creates Draft Major Objects.

A compliant generator does not produce the longest academic description.

It produces the most defensible representation permitted by the supplied evidence and governing contracts.

When a target is an Education Program, the generator does not force it into a Major.

When a label refers to an Academic Field, the generator does not create a duplicate Major.

When a Degree combines Qualification and field-of-study language, the generator separates the concepts.

When curriculum evidence is provider-specific, the generator preserves that scope.

When international equivalence is uncertain, the generator uses an explicit mapping type and confidence.

When a Career relationship is plausible but not guaranteed, the generator represents it as a conditional pathway.

When evidence is missing, the generator records a gap.

When identity, evidence, rights, or Ontology requirements fail, the generator stops and returns a typed failure.

This specification ensures that every future Major Object begins its lifecycle with:

- stable semantic identity;
- a provider-independent core;
- clear disciplinary boundaries;
- conceptual learning outcomes;
- evidence-supported Knowledge and Skill relationships;
- explicit education-framework context;
- non-deterministic Career pathways;
- visible uncertainty;
- complete provenance;
- auditable generation records.

Major Object Generator V1 therefore provides the foundation for producing Major knowledge consistently at enterprise scale while preserving the semantic integrity required by KarirGPS as a Career Intelligence Operating System.
