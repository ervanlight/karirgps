# Career Generator V1

**Product:** KarirGPS  
**Document Type:** Production Entity Generator Specification  
**Generator Family:** Universal Entity Generator Framework implementation  
**Entity Type:** Career  
**Object Kind:** Entity Object  
**Version:** 1.0.0  
**Status:** Normative Production Baseline  
**Target Path:** `assets/knowledge/generators/Career_Generator_V1.md`

**Authoritative Dependencies**

- AI Constitution
- Career Knowledge Ontology
- Knowledge Object Specification
- Universal Entity Generator Framework
- Universal Knowledge Production Pipeline
- Universal Knowledge Validation Framework
- Universal Knowledge Registry Framework
- Universal Knowledge Language Framework
- Universal Knowledge Query Framework
- Universal Knowledge Evolution Framework
- Universal Knowledge Compilation Framework

**Career-Specific Semantic Reference**

- `assets/knowledge/generators/career/Career_Object_Generator_V1.md`

---

## 0. Normative Status, Inheritance, and Generator Boundary

### 0.1 Status

Career Generator V1, hereafter **Career Generator**, is the first production-ready implementation of the Universal Entity Generator Framework for the `Career` entity type.

It defines the Career-specific extension required to generate one canonical Draft Career Knowledge Object.

It does not redefine any universal architecture.

### 0.2 Authority Precedence

When requirements conflict, apply this order:

1. applicable law, privacy, rights, safety, and binding regulatory requirements;
2. AI Constitution;
3. Career Knowledge Ontology;
4. Knowledge Object Specification;
5. Universal Entity Generator Framework;
6. Universal Knowledge Production Pipeline;
7. Universal Knowledge Validation Framework;
8. Universal Knowledge Registry Framework;
9. Universal Knowledge Language Framework;
10. Universal Knowledge Query Framework;
11. Universal Knowledge Evolution Framework;
12. Universal Knowledge Compilation Framework;
13. Career Generator V1;
14. approved Career production prompt;
15. execution-specific instructions.

Career Generator may specialize universal rules but MUST NOT weaken or replace them.

### 0.3 Relationship to the Career-Specific Semantic Reference

The existing Career Object Generator specification remains a Career-domain semantic reference.

Career Generator V1 operationalizes those Career-specific rules as a UEGF-derived production generator integrated with UKCF, UKPP, UKVF, UKR, UKL, UKQF, and UKEF.

Where the semantic reference uses legacy paths, lifecycle wording, or pre-universal integration terminology, the current universal frameworks govern execution.

### 0.4 Normative Terms

- **MUST** indicates a mandatory requirement.
- **MUST NOT** indicates a prohibited condition.
- **SHOULD** indicates a requirement that may be waived only through governed policy.
- **MAY** indicates an allowed option.
- **CONDITIONAL** indicates a requirement activated by a declared condition.

### 0.5 Generator Authority

Career Generator may:

- interpret an authorized Career Generator Input Package;
- generate one Draft Career Entity Object;
- generate proposed Career relationship entries;
- map material Career claims to supplied evidence;
- identify evidence gaps, conflicts, and uncertainty;
- propose aliases and localization entries;
- produce a Generator Pre-Validation Report;
- emit one typed failure when generation cannot safely proceed.

Career Generator may not:

- create or approve canonical IDs;
- create dependent Knowledge Objects;
- retrieve unapproved data directly from a database or the public internet;
- validate its own Draft as passed;
- register or publish an object;
- activate a lifecycle state;
- merge or split identities;
- modify a published object without an authorized UKEF Evolution Plan;
- make user-specific suitability decisions;
- infer universal salary, demand, personality fit, or AI displacement.

### 0.6 Generator Invariants

Every successful Career Generator result MUST satisfy all of the following:

1. exactly one primary Career semantic identity;
2. object kind is `entity`;
3. entity type is `career`;
4. lifecycle state is `draft`;
5. identity is supplied as a UKR-resolved or reserved reference;
6. Career is separated from Role, Job Title, Position, Major, Industry, Skill, Tool, Technology, Organization, and Opportunity;
7. stable Career semantics are separated from volatile contextual assertions;
8. every material claim maps to one or more supplied Evidence IDs;
9. every proposed relationship uses an Ontology predicate and resolvable target reference;
10. evidence conflict remains explicit;
11. unknown information remains unknown;
12. no source, citation, ID, or relationship target is fabricated;
13. no field claims validation, registration, publication, graph readiness, or reasoning readiness as approved;
14. no output contains a personal fit verdict;
15. no model-memory assertion is treated as evidence;
16. the 18 canonical semantic sections remain identifiable and ordered;
17. the output is deterministic in structure under the same contract;
18. one invocation emits one successful Draft or one failure envelope, never both;
19. all downstream authority remains with UKPP, UKVF, UKR, UKEF, and UKCF;
20. all generation activity is auditable without private chain of thought.

---

# 1. Purpose

## 1.1 Primary Purpose

Career Generator produces a structured Draft Career Entity Object that faithfully represents a durable professional pathway or field of professional activity.

## 1.2 Production Purpose

The generator standardizes Career production across:

- AI models;
- institutional contributors;
- batch processes;
- human-assisted workflows;
- revision workflows;
- localization workflows;
- evidence-refresh workflows.

## 1.3 Semantic Purpose

A generated Career Object must answer:

- what professional purpose defines the Career;
- what broad task pattern characterizes it;
- which competencies and Skills are materially related;
- which Work Environments are typical or context-dependent;
- how the Career relates to Career Families, Roles, Industries, pathways, and adjacent Careers;
- which claims are stable and which require contextual references;
- what evidence supports each material statement.

## 1.4 Operational Purpose

The Draft must be directly consumable by:

- UKVF validators;
- UKPP human review and quality assurance;
- UKR registration workflows;
- Knowledge Graph projection;
- retrieval and reasoning readiness assessment;
- UKEF successor-revision workflows.

---

# 2. Scope

## 2.1 In Scope

Career Generator supports the generation of one Career Entity Object representing a stable Career concept.

Examples of valid Career scope include:

- a recognized professional pathway;
- a stable occupational field;
- an interdisciplinary professional field with coherent work purpose and task pattern;
- an Ontology-approved Career subtype.

## 2.2 Conditional Scope

The generator may produce a successor Draft for an existing Career only when the Input Package contains:

- exact Entity ID;
- exact Object ID;
- source Revision ID;
- authorized Change Request;
- UKEF Evolution Plan when the source revision is Active or Published;
- expected semantic version and change class.

## 2.3 Out of Scope

Career Generator MUST NOT generate:

- Role Objects;
- Job Title Objects;
- Position Objects;
- Work Task Objects;
- Skill Objects;
- Competency Objects;
- Major Objects;
- University Objects;
- Industry Objects;
- Company or Organization Objects;
- Certification Objects;
- Tool Objects;
- Technology Objects;
- Learning Resource Objects;
- Salary Observation Objects;
- Labor Market Assertion Objects;
- AI Trend Objects;
- personal Career recommendations;
- job vacancies;
- employer-specific position profiles.

The generator may reference these objects when supplied through UKR-resolved dependencies.

## 2.4 Scope Boundary Tests

A candidate is not a Career when it primarily denotes:

- one employer-specific vacancy;
- one seniority level;
- one project assignment;
- one organizational title;
- one branded tool;
- one isolated Skill;
- one academic Major;
- one Industry;
- one license or credential;
- one temporary market label without stable professional meaning.

---

# 3. Responsibilities

Career Generator MUST:

1. verify the Career Generator Input Package;
2. verify the target object kind and entity type;
3. respect the UKR identity disposition;
4. lock Career scope before writing claims;
5. inventory all material Career claims;
6. map claims to Evidence IDs before final wording;
7. generate stable Career core semantics;
8. externalize volatile and jurisdictional knowledge;
9. generate typed relationship proposals;
10. apply Career-specific naming and boundary rules;
11. represent uncertainty and source conflict;
12. populate the canonical Career output structure;
13. produce generator-scoped confidence proposals;
14. run deterministic self-checks;
15. emit a Draft or a typed failure;
16. preserve all input and output lineage;
17. supply downstream validation metadata.

---

# 4. Non-Responsibilities

Career Generator is not responsible for:

- request interpretation from raw natural language, owned by UKCF;
- production lifecycle management, owned by UKPP;
- factual or publication approval, owned by UKVF and human review;
- canonical identity assignment, owned by UKR;
- database querying, replaced by UKL and UKQF;
- post-publication evolution governance, owned by UKEF;
- graph, vector, or search registration;
- release activation;
- user-specific ranking or recommendation;
- Ontology extension approval;
- KOS modification;
- source acquisition outside the supplied Evidence Bundle;
- determining model qualification;
- deciding legal compliance without authoritative evidence and review.

---

# 5. Supported Career Object Types and Generation Modes

## 5.1 Supported Object Type

Career Generator supports exactly one canonical object type:

```text
Object Kind: Entity Object
Entity Type: Career
Ontology Class: Career or an approved Career subtype
```

## 5.2 Supported Generation Modes

### `create`

Produces an initial Draft for a UKR-reserved Career identity.

### `revise_draft`

Produces a new Draft revision from an existing Draft or Review revision.

### `enrich`

Adds backward-compatible Career semantics, evidence, relationships, or localization to a non-published lineage.

### `localize`

Produces a localized Career revision while preserving canonical identity and semantic scope.

### `evidence_refresh`

Updates evidence, confidence, or source mappings without changing unsupported semantics.

### `evolution_successor`

Produces a successor Draft under an authorized UKEF Evolution Plan.

### `repair`

Produces a corrected Draft in response to UKVF findings.

## 5.3 Unsupported Modes

The generator rejects:

- `publish`;
- `activate`;
- `register`;
- `merge_identity`;
- `split_identity`;
- `delete`;
- `archive`;
- `recommend_to_user`;
- `predict_salary`;
- `predict_employment`;
- `declare_ai_safety`.

## 5.4 Readiness Targets

The Input Package may request generation toward:

- Core Profile candidate;
- Retrieval Ready candidate;
- Localized Profile candidate;
- Reasoning Ready candidate;
- Publication Profile candidate.

The generator may populate candidate readiness metadata.

Only UKVF, review, UKR, and UKPP may approve readiness.

---

# 6. Architecture and Framework Bindings

## 6.1 Architecture Diagram

```mermaid
flowchart LR
    A[UKCF Career Compilation Target] --> B[UKL/UKQF Discovery]
    B --> C[UKR Identity and Dependency Resolution]
    C --> D[UKPP Career Production Case]
    D --> E[Career Generator V1]
    E --> F[Draft Career Object or Typed Failure]
    F --> G[UKVF Career Validation Profile]
    G --> H[UKPP Human Review and QA]
    H --> I[UKR Registration]
    I --> J[Graph / Vector / Search Registration]
    J --> K[UKPP Publication]
    L[UKEF Evolution Plan] --> D
```

## 6.2 Internal Generator Component Diagram

```mermaid
flowchart LR
    A[Input Contract Gate] --> B[Identity and Scope Guard]
    B --> C[Evidence Mapper]
    C --> D[Career Core Composer]
    D --> E[Relationship Composer]
    E --> F[Context Externalizer]
    F --> G[Confidence and Uncertainty Assessor]
    G --> H[Forbidden-Behavior Scanner]
    H --> I[Self-Consistency Checker]
    I --> J[Generator Pre-Validator]
    J --> K[Draft Serializer]
    J --> L[Typed Failure Serializer]
```

The components are logical responsibilities. They may be implemented in one service or several services, but their contracts and audit boundaries must remain identifiable.

## 6.3 Binding Matrix

| Concern | Authoritative Owner | Career Generator Action |
|---|---|---|
| Safety and prohibited behavior | AI Constitution | Enforce generator constraints |
| Career semantic type and predicates | Ontology | Resolve supplied terms; never extend |
| Career object fields | KOS | Populate applicable contract |
| Universal generator behavior | UEGF | Inherit lifecycle, evidence, failure, confidence, and output rules |
| Production state | UKPP | Consume Production Case; return typed outcome |
| Validation | UKVF | Supply Draft and pre-validation metadata |
| Identity and revisions | UKR | Use supplied IDs and references only |
| Discovery and duplicate checks | UKL/UKQF | Consume results supplied by UKCF/UKPP |
| Published-object change | UKEF | Require authorized Evolution Plan |
| Compilation and orchestration | UKCF | Consume compiled Career invocation |
| Career generation | Career Generator | Produce one Draft Career Entity Object |

## 6.4 UEGF Extension Pack Mapping

| UEGF Extension Point | Career Generator Definition |
|---|---|
| Entity Descriptor | Career Entity Object |
| Identity Rules | Career versus Role, Job Title, Position, Major, Industry, Skill, Tool, and Organization separation |
| Scope Rules | one stable professional Career concept |
| Core Semantic Fields | Career purpose, scope, task pattern, competencies, environment, family, pathways |
| Evidence Rules | identity, purpose, tasks, competencies, family, environment, pathway evidence |
| Relationship Rules | Career Family, Work Task or Activity, Skill or Competency, Work Environment mandatory |
| Output Contract | 18-section Career semantic spine |
| Validation Rules | Career UKVF profile |
| Confidence Rules | scoped Career identity, claim, evidence, relationship, coverage, localization, object confidence |
| Forbidden Behaviors | personal fit, universal salary/demand, fixed pathway, personality determinism, AI absolutism |
| Quality Rules | evidence-supported, boundary-safe, graph-ready proposal structure |
| Failure Rules | Career-specific typed failures |
| Naming and Localization | Career concept names, typed aliases, scope-preserving localization |
| Acceptance Delta | mandatory Career relationships and core evidence |
| Future Compatibility | Ontology-approved subtypes and extensions only |

---

# 7. Required Inputs

## 7.1 Mandatory Input Package

Every invocation MUST include:

1. `generator_request`;
2. `production_context`;
3. `contract_lock`;
4. `identity_resolution`;
5. `scope_resolution`;
6. `evidence_bundle`;
7. `existing_knowledge`;
8. `dependency_manifest`;
9. `generation_policy`;
10. `validation_plan`;
11. `security_context`;
12. `audit_context`.

## 7.2 Generator Request

Required fields:

- request ID;
- Compilation ID;
- Production Case ID;
- generation mode;
- requested Career name;
- requested locale;
- target readiness candidate;
- requested output format;
- requested change class where applicable.

## 7.3 Production Context

Required fields:

- UKPP state;
- invoking authority;
- target lifecycle state;
- deadline;
- performance profile;
- model qualification lane;
- retry attempt;
- idempotency key.

## 7.4 Contract Lock

Required versions:

- AI Constitution;
- Ontology;
- KOS;
- UEGF;
- UKPP;
- UKVF;
- UKR;
- UKL;
- UKQF;
- UKEF;
- UKCF;
- Career Generator;
- Career validation profile;
- approved prompt template.

## 7.5 Identity Resolution

Required fields:

- identity disposition;
- Entity ID or reservation ID;
- Object ID when existing;
- source Revision ID when revising;
- canonical-name candidate;
- aliases;
- duplicate candidates;
- adjacent-type analysis;
- identity confidence;
- Identity Steward decision when required.

## 7.6 Scope Resolution

Required fields:

- one-sentence scope lock;
- inclusion criteria;
- exclusion criteria;
- adjacent Careers;
- Role and Job Title exclusions;
- geography and jurisdiction limits;
- stable-versus-contextual boundary;
- regulated-Career indicator.

## 7.7 Evidence Bundle

Required contents:

- Evidence Bundle ID and Revision ID;
- Source IDs;
- normalized evidence statements;
- source locations;
- claim categories;
- temporal and geographic scope;
- source quality;
- independence groups;
- rights and usage;
- conflicts;
- missing-evidence states.

## 7.8 Existing Knowledge

May contain:

- current or historical Career revisions;
- Career Family references;
- Task references;
- Skill and Competency references;
- Work Environment references;
- Industry references;
- pathway references;
- contextual assertion references;
- validation findings;
- UKEF Evolution Plan.

## 7.9 Dependency Manifest

Every referenced target contains:

- target Entity ID;
- target Object or Revision ID when required;
- entity type;
- relationship eligibility;
- status;
- validation status;
- publication state;
- dependency type;
- mandatory or optional;
- unresolved status.

## 7.10 Conditional Inputs

### Localization

- locale;
- terminology authority;
- official local names;
- translation status;
- reviewer requirement;
- fallback locale.

### Regulated Career

- jurisdiction;
- regulator or Authority ID;
- regulation references;
- license requirements;
- effective periods.

### Revision or Evolution

- source revision;
- change request;
- change set;
- semantic version target;
- compatibility;
- UKEF Evolution Case;
- migration constraints.

### Repair

- exact UKVF findings;
- finding severity;
- affected paths;
- allowed remediation scope;
- unchanged-field lock.

---

# 8. Input Schema

The following schema is conceptual and technology-neutral.

```yaml
career_generator_input:
  request:
    request_id: string
    compilation_id: string
    production_case_id: string
    mode: create | revise_draft | enrich | localize | evidence_refresh | evolution_successor | repair
    requested_name: string
    requested_locale: bcp47
    target_readiness_candidates: [string]
    output_representation: structured
  production_context:
    ukpp_state: string
    actor_ref: string
    model_lane_ref: string
    attempt_number: integer
    idempotency_key: string
    deadline: datetime
    performance_profile: string
  contract_lock:
    ai_constitution_version: string
    ontology_version: string
    kos_version: string
    uegf_version: string
    ukpp_version: string
    ukvf_version: string
    ukr_version: string
    ukl_version: string
    ukqf_version: string
    ukef_version: string
    ukcf_version: string
    career_generator_version: 1.0.0
    prompt_template_version: string
  identity_resolution:
    disposition: use_existing | reserve_new | revision | blocked
    entity_id: string
    identity_reservation_id: string
    object_id: string
    source_revision_id: string
    canonical_name_candidate: string
    aliases: [alias_entry]
    duplicate_candidates: [reference]
    adjacent_type_decisions: [decision]
    confidence: confidence_level
    steward_decision_ref: string
  scope_resolution:
    scope_lock: string
    inclusion_criteria: [string]
    exclusion_criteria: [string]
    adjacent_career_refs: [reference]
    role_exclusions: [reference]
    job_title_exclusions: [reference]
    stable_context_boundary: string
    geography_scope: [reference]
    jurisdiction_scope: [reference]
    regulated: boolean
  evidence_bundle:
    evidence_bundle_id: string
    revision_id: string
    evidence_entries: [evidence_entry]
    source_entries: [source_reference]
    conflicts: [conflict_entry]
    missing_evidence: [missing_evidence_entry]
    rights_status: string
  existing_knowledge:
    source_career_revision: reference
    related_entities: [reference]
    contextual_assertions: [reference]
    prior_validation_findings: [reference]
    evolution_plan_ref: string
  dependency_manifest:
    dependencies: [dependency_entry]
    closure_status: complete | partial | blocked
  generation_policy:
    required_sections: [string]
    forbidden_claims: [string]
    confidence_policy: string
    contextual_externalization_policy: string
    partial_output_policy: string
  validation_plan:
    profile_refs: [reference]
    mandatory_validator_types: [string]
    human_review_required: boolean
  security_context:
    classification: string
    allowed_purposes: [string]
    source_usage_constraints: [string]
    prohibited_outputs: [string]
  audit_context:
    correlation_id: string
    causation_id: string
    parent_attempt_id: string
```

## 8.1 Input Gate

Generation MUST NOT start when any of the following applies:

- object kind or entity type unresolved;
- identity disposition is blocked;
- no Entity ID or valid reservation exists;
- scope lock absent;
- Evidence Bundle absent;
- evidence does not support identity and minimum Career core;
- mandatory dependency target is unresolved;
- required UKEF plan absent;
- rights prohibit model processing;
- contract version is unsupported;
- security context is absent;
- UKPP state does not permit generation.

---

# 9. Required Outputs

## 9.1 Allowed Top-Level Outcomes

Career Generator returns exactly one:

1. `draft_career_object`;
2. `blocked_generation_result`;
3. `insufficient_evidence_result`;
4. `identity_conflict_result`;
5. `entity_type_mismatch_result`;
6. `scope_unresolved_result`;
7. `ontology_mismatch_result`;
8. `dependency_blocked_result`;
9. `rights_restriction_result`;
10. `validation_repair_failed_result`;
11. `generation_failure_result`.

## 9.2 Successful Output

A successful output contains:

- immutable attempt metadata;
- one Draft Career Object;
- proposed relationship entries;
- material claim inventory;
- claim–evidence map;
- uncertainty and conflict register;
- Generator Pre-Validation Report;
- dependency-use report;
- generation diagnostics;
- audit metadata.

## 9.3 Output Constraints

The successful output MUST NOT contain:

- a second primary Career Object;
- embedded full dependent objects;
- final validation approval;
- UKR registration outcome;
- Published or Active state;
- unregistered IDs invented by the model;
- unsupported claims disguised as summaries;
- hidden assumptions.

---

# 10. Output Schema and Canonical Career Contract

## 10.1 Output Envelope

```yaml
career_generator_result:
  outcome: draft_career_object
  generator:
    generator_id: career_generator
    version: 1.0.0
    prompt_template_version: string
    model_lane_ref: string
    attempt_id: string
  input_fingerprint: string
  contract_fingerprint: string
  draft:
    contract_and_identity: {}
    naming_and_localization: {}
    definition_and_scope: {}
    career_core_semantics: {}
    task_structure: {}
    competency_and_skill_structure: {}
    knowledge_and_technology_context: {}
    work_environment: {}
    career_family_and_role_structure: {}
    entry_and_development_pathways: {}
    industry_and_application_context: {}
    transferability_and_adjacent_careers: {}
    contextual_knowledge_references: {}
    evidence_and_sources: {}
    confidence_conflict_and_uncertainty: {}
    governance_and_lifecycle: {}
    quality_and_readiness: {}
    generation_and_audit_record: {}
  pre_validation_report: {}
  diagnostics: []
```

## 10.2 Canonical Section Order

Every Draft MUST preserve the following conceptual order:

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

## 10.3 Section 1 — Contract and Identity

Mandatory:

- framework version locks;
- Entity ID or reservation;
- Object ID where supplied;
- Revision ID only when preallocated by UKR policy;
- object kind;
- entity type;
- Ontology class;
- lifecycle state `draft`;
- semantic version candidate;
- change class;
- compatibility candidate;
- source revision when applicable.

## 10.4 Section 2 — Naming and Localization

Mandatory:

- canonical name;
- display name;
- canonical language;
- default locale;
- available locales.

Conditional:

- aliases;
- abbreviations;
- former names;
- localized names;
- disambiguation;
- terminology authority;
- localization confidence.

## 10.5 Section 3 — Definition and Scope

Mandatory:

- definition;
- summary;
- professional purpose;
- scope;
- inclusion criteria;
- exclusion criteria;
- Career boundary note;
- adjacent-type distinction.

## 10.6 Section 4 — Career Core Semantics

Mandatory KOS Career fields:

- `career_scope`;
- `primary_work_purpose`;
- `core_task_categories`;
- `core_competency_refs`;
- `typical_work_environment_refs`;
- `career_family_refs`;
- `entry_pathway_summary`;
- `career_boundary_note`.

Conditional:

- ethical considerations;
- regulatory notes;
- physical demand category;
- schedule pattern;
- remote pattern;
- transferability summary.

## 10.7 Section 5 — Task Structure

Mandatory:

- at least one Work Task or Work Activity relationship proposal;
- task categories;
- task universality classification;
- evidence;
- confidence;
- variability note.

## 10.8 Section 6 — Competency and Skill Structure

Mandatory:

- at least one Skill or Competency relationship proposal;
- requirement level;
- evidence;
- confidence;
- scope;
- target type distinction.

## 10.9 Section 7 — Knowledge and Technology Context

Conditional:

- Knowledge Domain;
- Tool;
- Technology;
- Standard;
- regulatory knowledge.

Every Tool or Technology relation must state whether it is:

- essential;
- common;
- possible;
- emerging;
- context-dependent.

## 10.10 Section 8 — Work Environment

Mandatory:

- at least one Work Environment reference or explicit blocker;
- variability;
- evidence;
- confidence;
- contextual dimensions.

## 10.11 Section 9 — Career Family and Role Structure

Mandatory:

- at least one Career Family relation;
- grouping basis;
- evidence;
- confidence.

Conditional:

- Role references;
- Job Title mappings;
- progression-role references.

## 10.12 Section 10 — Entry and Development Pathways

Mandatory:

- entry pathway summary;
- multiplicity or conditionality statement.

Conditional references:

- Major;
- Education Program;
- Qualification;
- Certification;
- License;
- Learning Path;
- Experience;
- Internship;
- Project.

## 10.13 Section 11 — Industry and Application Context

Conditional:

- Industry;
- Sector;
- Organization type;
- application domains;
- jurisdiction-specific practice context.

## 10.14 Section 12 — Transferability and Adjacent Careers

Recommended for Reasoning Ready candidate:

- adjacent Career references;
- shared Skills;
- transferable tasks;
- distinction notes;
- transfer-path references;
- evidence.

## 10.15 Section 13 — Contextual Knowledge References

May include references to:

- Salary Observations;
- Labor Market Assertions;
- AI Trends;
- Future of Work Signals;
- Regulation;
- geographic variants;
- local recognition;
- Opportunity classes.

Volatile values MUST remain external.

## 10.16 Section 14 — Evidence and Sources

Mandatory:

- material claims;
- Evidence IDs;
- Source IDs;
- source locations;
- claim classes;
- provenance;
- source coverage;
- conflicts;
- missing-evidence states;
- rights.

## 10.17 Section 15 — Confidence, Conflict, and Uncertainty

Mandatory:

- identity confidence;
- claim confidence;
- relationship confidence;
- evidence confidence;
- coverage confidence;
- localization confidence when applicable;
- object confidence proposal;
- confidence basis;
- uncertainty register;
- conflict register;
- assumptions;
- forbidden interpretations.

## 10.18 Section 16 — Governance and Lifecycle

Mandatory:

- owner;
- maintainer;
- created by;
- created at;
- lifecycle `draft`;
- review status;
- permitted uses;
- prohibited uses;
- license;
- sensitivity;
- retention;
- UKEF Evolution Case when applicable.

## 10.19 Section 17 — Quality and Readiness

Mandatory:

- completeness proposal;
- consistency proposal;
- freshness proposal;
- evidence quality proposal;
- explainability proposal;
- quality method version;
- candidate readiness profiles;
- blockers;
- warnings.

Scores are provisional and cannot override blockers.

## 10.20 Section 18 — Generation and Audit Record

Mandatory:

- Compilation ID;
- Production Case ID;
- generator attempt;
- input fingerprint;
- contract fingerprint;
- model lane;
- prompt version;
- Evidence Bundle version;
- dependency manifest;
- start and completion time;
- retries;
- diagnostics;
- correlation and causation IDs.

---

# 11. Generation Pipeline

## 11.1 Canonical Steps

1. accept UKPP invocation;
2. validate contract and security context;
3. validate identity disposition;
4. lock Career scope;
5. validate Evidence Bundle;
6. resolve dependency references;
7. construct material claim inventory;
8. map evidence to claims;
9. draft definition and core semantics;
10. draft Task structure;
11. draft Competency and Skill structure;
12. draft environment, family, and pathway structure;
13. draft optional contextual relationships;
14. externalize volatile content;
15. assign scoped confidence and uncertainty;
16. run forbidden-behavior scan;
17. run self-consistency scan;
18. run Career pre-validation;
19. emit one Draft or one typed failure.

## 11.2 Pipeline Flowchart

```mermaid
flowchart TD
    A[UKPP Invocation] --> B[Contract and Security Gate]
    B --> C[Identity Gate]
    C --> D[Scope Lock]
    D --> E[Evidence Sufficiency Gate]
    E --> F[Dependency Resolution]
    F --> G[Claim Inventory]
    G --> H[Claim-Evidence Mapping]
    H --> I[Career Core Draft]
    I --> J[Relationship Draft]
    J --> K[Context Externalization]
    K --> L[Confidence and Uncertainty]
    L --> M[Forbidden Behavior Scan]
    M --> N[Self-Consistency]
    N --> O[Generator Pre-Validation]
    O -->|pass or warnings| P[Draft Career Object]
    O -->|blocker| Q[Typed Failure]
```

## 11.3 Evidence-First Rule

Final material wording MUST NOT be produced before claim–evidence mapping exists.

## 11.4 Stable-Core Rule

The generator must ask of every claim:

- Is this intrinsic to the Career?
- Is it stable across contexts?
- Does evidence support the same scope?
- Should it instead become a relationship or Contextual Assertion reference?

---

# 12. Generator State Machine

## 12.1 States

- `invoked`;
- `input_validating`;
- `identity_checking`;
- `scope_locking`;
- `evidence_mapping`;
- `drafting_core`;
- `drafting_relationships`;
- `externalizing_context`;
- `self_checking`;
- `pre_validating`;
- `draft_emitted`;
- `failure_emitted`;
- `cancelled`;
- `timed_out`;
- `quarantined`.

## 12.2 State Diagram

```mermaid
stateDiagram-v2
    [*] --> invoked
    invoked --> input_validating
    input_validating --> identity_checking
    identity_checking --> scope_locking
    scope_locking --> evidence_mapping
    evidence_mapping --> drafting_core
    drafting_core --> drafting_relationships
    drafting_relationships --> externalizing_context
    externalizing_context --> self_checking
    self_checking --> pre_validating
    pre_validating --> draft_emitted
    input_validating --> failure_emitted
    identity_checking --> failure_emitted
    scope_locking --> failure_emitted
    evidence_mapping --> failure_emitted
    pre_validating --> failure_emitted
    any_state --> cancelled
    any_state --> timed_out
    any_state --> quarantined
    draft_emitted --> [*]
    failure_emitted --> [*]
```

## 12.3 Terminal Outcomes

A generator attempt terminates as:

- Draft emitted;
- failure emitted;
- cancelled;
- timed out;
- quarantined.

---

# 13. Sequence Diagrams

## 13.1 New Career Generation

```mermaid
sequenceDiagram
    participant C as UKCF
    participant Q as UKL/UKQF
    participant R as UKR
    participant P as UKPP
    participant G as Career Generator
    participant V as UKVF
    participant H as Human Reviewer

    C->>Q: Resolve Career identity and dependencies
    Q-->>C: Query results and snapshot
    C->>R: Reserve or reuse Career identity
    R-->>C: Identity disposition
    C->>P: Create Career Production Case
    P->>G: Invoke with locked Input Package
    G-->>P: Draft Career Object
    P->>V: Validate exact Draft
    V-->>P: Findings and outcome
    P->>H: Review when required
    H-->>P: Approval or remediation
    P->>R: Register approved revision
    R-->>P: Canonical registration result
```

## 13.2 Published Career Successor

```mermaid
sequenceDiagram
    participant C as UKCF
    participant E as UKEF
    participant P as UKPP
    participant G as Career Generator
    participant V as UKVF
    participant R as UKR

    C->>E: Compile Career evolution
    E-->>C: Evolution Case, change class, source revision
    C->>P: Create successor Production Case
    P->>G: Invoke evolution_successor mode
    G-->>P: Draft successor
    P->>V: Full or targeted validation
    V-->>P: Outcome
    P->>R: Register new immutable revision
    R-->>P: Lineage and registration
    P->>E: Continue migration and release
```

---

# 14. Prompt Templates

Prompt Templates are implementation artifacts subordinate to this specification.

They must not request hidden chain of thought.

## 14.1 Normative System Template

```text
You are the KarirGPS Career Generator V1.

Your authority is limited to producing exactly one Draft Career Entity Object
or exactly one typed failure envelope from the supplied Career Generator Input Package.

You must obey the locked AI Constitution, Ontology, KOS, UEGF, UKPP, UKVF,
UKR, UKL, UKQF, UKEF, UKCF, and Career Generator versions.

You do not retrieve external information.
You do not use model memory as evidence.
You do not create canonical IDs.
You do not generate dependent objects.
You do not validate, register, activate, or publish.
You do not provide personal suitability judgments.

Use only supplied UKR references, Evidence IDs, Source IDs, and scope decisions.
Map every material Career claim to evidence before final wording.
Keep volatile salary, demand, regulation, AI impact, and geography-specific observations
outside the stable Career core and represent them only as supplied contextual references.

Return the canonical 18-section Draft structure or one failure envelope.
Do not return explanatory prose outside the result contract.
```

## 14.2 Create Invocation Template

```text
GENERATION MODE: create

CONTRACT LOCK:
{{contract_lock}}

PRODUCTION CONTEXT:
{{production_context}}

IDENTITY RESOLUTION:
{{identity_resolution}}

SCOPE RESOLUTION:
{{scope_resolution}}

EVIDENCE BUNDLE:
{{evidence_bundle}}

DEPENDENCY MANIFEST:
{{dependency_manifest}}

GENERATION POLICY:
{{generation_policy}}

VALIDATION PLAN:
{{validation_plan}}

TASK:
Produce one Draft Career Entity Object for the resolved identity.
Use only supplied evidence and references.
Apply the Career canonical output contract.
Where evidence is insufficient, narrow the claim, mark uncertainty,
or emit an insufficient-evidence failure.
```

## 14.3 Revision Template

```text
GENERATION MODE: revise_draft | enrich | evidence_refresh

SOURCE CAREER REVISION:
{{source_revision}}

AUTHORIZED CHANGE SET:
{{change_set}}

UNCHANGED FIELD LOCK:
{{unchanged_fields}}

NEW OR UPDATED EVIDENCE:
{{evidence_bundle}}

UKVF FINDINGS:
{{validation_findings}}

TASK:
Create a new Draft revision.
Do not overwrite or silently alter locked fields.
Address only authorized changes.
Preserve all unaffected lineage and references.
```

## 14.4 Evolution Successor Template

```text
GENERATION MODE: evolution_successor

UKEF EVOLUTION PLAN:
{{evolution_plan}}

SOURCE ACTIVE REVISION:
{{source_revision}}

CHANGE CLASS:
{{change_class}}

EFFECTIVE TIME:
{{effective_time}}

COMPATIBILITY:
{{compatibility}}

TASK:
Produce a successor Draft under the supplied UKEF plan.
Preserve canonical identity unless the plan explicitly provides another identity disposition.
Represent temporal changes and supersession metadata exactly as supplied.
```

## 14.5 Localization Template

```text
GENERATION MODE: localize

CANONICAL SOURCE REVISION:
{{source_revision}}

TARGET LOCALE:
{{locale}}

TERMINOLOGY AUTHORITY:
{{terminology_sources}}

LOCALIZATION POLICY:
{{localization_policy}}

TASK:
Produce a localized Draft revision that preserves Career identity, definition scope,
relationship meaning, evidence references, uncertainty, and forbidden interpretations.
Do not translate Role or Job Title labels as exact Career aliases unless authorized.
```

## 14.6 Repair Template

```text
GENERATION MODE: repair

FAILED REVISION:
{{failed_revision}}

UKVF FINDINGS:
{{findings}}

AUTHORIZED REMEDIATION PATHS:
{{allowed_paths}}

UNCHANGED FIELD LOCK:
{{locked_paths}}

TASK:
Produce a corrected Draft revision or a validation_repair_failed_result.
Do not suppress, downgrade, or rewrite UKVF findings.
Do not modify fields outside the authorized remediation paths.
```

---

# 15. Career Identity and Scope Rules

## 15.1 Career Identity Test

A Career candidate should have:

- durable professional purpose;
- coherent broad task pattern;
- recognizable competency structure;
- progression or development continuity;
- scope broader than one vacancy or employer title;
- boundaries distinct from adjacent Careers.

## 15.2 Adjacent-Type Matrix

| Candidate resembles | Required distinction |
|---|---|
| Role | Role is a functional variation within a Career or organization context |
| Job Title | Job Title is a label used by a market or organization |
| Position | Position is a specific instance held by a person |
| Major | Major is an academic field or pathway |
| Industry | Industry is an economic or application context |
| Skill | Skill is an observable capability |
| Tool | Tool is an instrument or application |
| Technology | Technology is a technical system or method family |
| Company | Company is an organization |
| Certification | Certification is a credential |
| Opportunity | Opportunity is a time-bound offering |

## 15.3 Scope Inflation Control

The generator must reject a scope that combines multiple Careers without an Ontology-approved umbrella identity.

## 15.4 Scope Fragmentation Control

The generator must not create separate Careers solely for:

- junior, mid, senior;
- one employer;
- one Tool;
- one temporary specialization;
- one Industry context;
- one geographic Job Title.

## 15.5 Career Boundary Note

Every Draft must explicitly state:

- included professional scope;
- excluded Roles or Job Titles;
- adjacent Careers;
- context-sensitive variants.

---

# 16. Naming and Localization Strategy

## 16.1 Canonical Name

The canonical name must identify the Career concept, not:

- employer;
- vacancy;
- seniority;
- branded Tool;
- degree;
- credential;
- department.

## 16.2 Alias Types

Allowed:

- common name;
- alternate spelling;
- acronym;
- former name;
- transliteration;
- market label;
- historical label;
- localized display label.

## 16.3 Exact Alias Restriction

Role and Job Title labels may be exact aliases only when identity review confirms semantic equivalence.

## 16.4 Localization

Localization must preserve:

- professional purpose;
- scope;
- exclusions;
- relationship meaning;
- requirement levels;
- uncertainty;
- evidence.

## 16.5 Fallback

Missing localization may fall back to canonical language under policy, with explicit status.

## 16.6 Localization Failure

Identity-changing or scope-changing translation is a blocker.

---

# 17. Career Core Generation Rules

## 17.1 Definition

The definition must identify:

- professional purpose;
- broad activity pattern;
- differentiating boundary.

## 17.2 Definition Prohibitions

Definition MUST NOT include:

- salary;
- current demand;
- guaranteed employment;
- personality suitability;
- one required degree unless jurisdictionally legal and externalized;
- timeless AI prediction;
- employer-specific conditions.

## 17.3 Career Scope

`career_scope` must describe breadth and recognized boundary.

## 17.4 Primary Work Purpose

`primary_work_purpose` must be evidence-supported and distinct from a list of tasks.

## 17.5 Core Task Categories

Task categories summarize supplied Work Task or Work Activity references.

They do not replace Task Objects.

## 17.6 Core Competency References

Career core references supplied Skill or Competency identities.

It does not embed full definitions.

## 17.7 Entry Pathway Summary

The summary must preserve multiple pathways and jurisdictional conditions.

## 17.8 Career Boundary Note

The note must explain nearby semantic distinctions required for identity resolution and retrieval.

---

# 18. Task Structure Generation

## 18.1 Mandatory Relation

At least one relationship to Work Task or Work Activity is required.

If absent, the output is blocked unless the applicable profile explicitly permits an incomplete Draft—and the missing category remains a blocker for downstream acceptance.

## 18.2 Task Classes

- core;
- common;
- role-specific;
- industry-specific;
- jurisdiction-specific;
- emerging;
- historical.

## 18.3 Task Evidence

One organization’s job description cannot establish universal Career tasks without broader evidence.

## 18.4 Task–Skill Separation

A task describes an activity performed.

A Skill describes capability used to perform it.

## 18.5 AI Context

AI effects on tasks must reference AI Trend or Contextual Assertion objects and include horizon and scope.

---

# 19. Competency and Skill Generation

## 19.1 Mandatory Relation

At least one supplied Skill or Competency reference is required.

## 19.2 Requirement Levels

- legally_required;
- required;
- commonly_required;
- preferred;
- beneficial.

## 19.3 Level Discipline

The generator must not label all related Skills as `required`.

## 19.4 Type Separation

- Skill: observable capability;
- Competency: integrated performance expectation;
- Knowledge Domain: body of knowledge;
- Tool: instrument;
- Personality Trait: not a Skill.

## 19.5 Proficiency

Universal proficiency levels are prohibited unless evidence and scope justify them.

---

# 20. Knowledge, Tool, Technology, and Standard Context

## 20.1 Knowledge Domain

Use for knowledge the Career draws upon.

## 20.2 Tool

Use for specific instruments or applications.

## 20.3 Technology

Use for technical systems, methods, or platforms.

## 20.4 Standard

Use for formal technical or professional standards.

## 20.5 Context Rule

Branded Tool and Technology relations are usually contextual unless broad evidence supports a stable relationship.

## 20.6 No Tool–Skill Collapse

A Tool name cannot be listed as a Skill without an associated capability reference.

---

# 21. Work Environment Generation

## 21.1 Mandatory Environment Handling

The Draft must include:

- at least one Work Environment reference; or
- an explicit evidence gap and blocker.

## 21.2 Environment Dimensions

May include:

- collaboration;
- autonomy;
- structure;
- pace;
- client interaction;
- physical setting;
- schedule;
- travel;
- remote pattern;
- safety exposure.

## 21.3 Variability

Every environment characterization must state variability by:

- Role;
- Industry;
- Organization;
- geography;
- seniority;
- project.

## 21.4 Personality Prohibition

The generator cannot infer that an environment makes the Career suitable for a personality type.

---

# 22. Career Family, Role, and Job Title Rules

## 22.1 Career Family

At least one Career Family relation is required.

## 22.2 Grouping Basis

The relation must identify whether grouping is based on:

- professional purpose;
- task pattern;
- knowledge domain;
- Industry function;
- recognized taxonomy.

## 22.3 Role

Role references describe functional variants.

They do not create additional Career identities in this output.

## 22.4 Job Title

Job Titles are mapping labels and may vary by market or organization.

## 22.5 Seniority

Seniority belongs to Role, Job Title, Position, or pathway context unless the Ontology explicitly models a distinct Career.

---

# 23. Entry and Development Pathway Rules

## 23.1 Multiple Paths

Pathways must be expressed as plural, conditional, or jurisdictional where appropriate.

## 23.2 Allowed References

- Major;
- Education Program;
- Qualification;
- Certification;
- License;
- Experience;
- Internship;
- Project;
- Learning Path.

## 23.3 Forbidden Semantics

- `guarantees`;
- `only_path_from`;
- universal degree requirement without legal evidence;
- guaranteed progression;
- certification equals competence without assessed scope.

## 23.4 Regulated Careers

Legal requirements require:

- Authority source;
- jurisdiction;
- effective period;
- current status;
- Regulation or License reference.

---

# 24. Industry and Application Context

## 24.1 Multi-Industry Rule

A Career may operate in multiple Industries.

## 24.2 Identity Rule

Industry does not define Career identity unless the Ontology and scope explicitly establish an industry-specific Career.

## 24.3 Organization Examples

Organization examples must be supplied as references and must not become canonical Career attributes.

## 24.4 Application Domains

Application domains may refine context without fragmenting identity.

---

# 25. Transferability and Adjacent Careers

## 25.1 Adjacency Basis

Adjacent Career relations require shared:

- tasks;
- Skills;
- Knowledge Domains;
- pathways;
- Work Environments;
- Industry functions.

## 25.2 Non-Equivalence

Adjacency never means exact identity.

## 25.3 Transferability

Transfer claims must identify:

- shared capabilities;
- missing capabilities;
- contextual barriers;
- evidence or Ontology rationale.

## 25.4 Recommendation Boundary

The generator may describe structural transferability.

It may not recommend the Career to a person.

---

# 26. Contextual Knowledge References

## 26.1 Externalization Requirements

The following normally remain external:

- salary;
- labor demand;
- vacancy volume;
- unemployment;
- regulation;
- licensing status;
- local recognition;
- AI impact;
- Future of Work signals;
- economic trends;
- opportunity availability.

## 26.2 Reference Contract

Every contextual reference identifies:

- target object;
- Revision ID or governed active selector;
- geography;
- time;
- evidence status;
- relationship meaning.

## 26.3 No Value Copying

The Career core may summarize the existence of contextual data but must not copy volatile values into intrinsic fields.

---

# 27. Evidence Requirements

## 27.1 Minimum Material Claim Categories

Evidence must support:

1. identity and definition;
2. primary work purpose;
3. at least one core task category;
4. at least one Skill or Competency relation;
5. Career Family relation;
6. Work Environment characterization or explicit gap;
7. entry pathway summary or explicit gap;
8. boundary distinction.

## 27.2 Source Preference

Depending on the claim:

1. official occupational or professional standard;
2. regulator or licensing authority;
3. government labor or education source;
4. professional association;
5. institutional competency framework;
6. academic research;
7. structured labor-market dataset;
8. verified employer evidence for local context;
9. reputable secondary synthesis;
10. authorized expert review.

## 27.3 Claim–Source Fit

Source prestige does not compensate for scope mismatch.

## 27.4 Independence

Several sources derived from one upstream source count as one lineage.

## 27.5 Recency

Stable definitions may use older authoritative evidence.

Volatile context requires current externalized assertions.

## 27.6 Evidence Conflict

The generator must:

- preserve each material side;
- identify conflict dimension;
- avoid forced synthesis;
- lower affected confidence;
- request review.

## 27.7 Missing Evidence Vocabulary

- unknown;
- not_found;
- insufficient_evidence;
- disputed;
- not_applicable;
- source_unavailable;
- expired;
- rights_restricted.

## 27.8 Rights

Evidence may be used only within supplied rights and processing constraints.

---

# 28. Claim, Confidence, Conflict, and Uncertainty Rules

## 28.1 Claim Classes

- verified fact candidate;
- observation;
- editorial synthesis;
- inference;
- projection;
- normative statement.

The generator cannot upgrade a class beyond the evidence.

## 28.2 Confidence Layers

- identity;
- evidence;
- claim;
- relationship;
- coverage;
- localization;
- object.

## 28.3 Confidence Levels

Use the UKVF/UEGF approved vocabulary:

- high;
- medium_high;
- medium;
- medium_low;
- low;
- indeterminate.

## 28.4 Confidence Ceiling

No claim or object confidence may exceed its evidence and identity ceilings.

## 28.5 Scoped Confidence

Confidence applies to explicit claims or relationships.

One strong claim does not make the whole object high confidence.

## 28.6 Assumptions

Assumptions must be:

- explicit;
- minimal;
- non-material where possible;
- excluded from verified facts;
- reviewed.

## 28.7 Forbidden Interpretations

Every Career Draft states that it is:

- not a personal fit verdict;
- not a guaranteed outcome;
- not a universal salary statement;
- not a universal demand statement;
- not a deterministic personality mapping;
- not a timeless AI risk statement;
- not legal advice;
- not an employment promise.

---

# 29. Relationship Generation

## 29.1 Required Relationship Classes

The Draft must propose:

1. Career Family;
2. Work Task or Work Activity;
3. Skill or Competency;
4. Work Environment.

## 29.2 Recommended Classes

Evaluate when supplied and relevant:

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
- Standard;
- adjacent Career;
- AI Trend;
- Labor Market Assertion;
- Regulation.

## 29.3 Relationship Entry Schema

```yaml
relationship_proposal:
  proposal_id: string
  source_entity_id: string
  predicate: ontology_predicate
  target_entity_id: string
  target_entity_type: string
  direction: outbound | inbound
  status: proposed
  strength: essential | strong | common | possible | emerging | disputed
  requirement_level: legally_required | required | commonly_required | preferred | beneficial | not_applicable
  context:
    geography_refs: [reference]
    jurisdiction_refs: [reference]
    role_refs: [reference]
    industry_refs: [reference]
    valid_period: interval
  evidence_refs: [evidence_id]
  confidence: confidence_level
  rationale: string
  declaring_draft_ref: local_reference
```

## 29.4 Predicate Discipline

Predicates must exist in the locked Ontology.

Conceptual examples include:

- `belongs_to`;
- `performs`;
- `characterized_by`;
- `requires_skill`;
- `requires_competency`;
- `occurs_in`;
- `draws_on`;
- `uses`;
- `may_use`;
- `operates_in`;
- `accessible_through`;
- `benefits_from_certification`;
- `legally_requires_license`;
- `adjacent_to`;
- `affected_by`.

The actual registered predicate governs.

## 29.5 Forbidden Relationship Patterns

- Career requires Personality Trait;
- Career guarantees salary;
- Career guarantees employment;
- Major guarantees Career;
- Career is safe from AI;
- Skill same as Tool;
- Job Title same as Career without identity resolution;
- one employer Task marked essential to all Career contexts.

## 29.6 No Graph Inflation

Relationship count is not a quality target.

Only evidence-supported, semantically useful edges should be proposed.

---

# 30. Dependency Handling

## 30.1 Dependency Principle

Career Generator consumes dependency references.

It does not create dependency objects.

## 30.2 Mandatory Dependencies

- identity;
- Evidence Bundle;
- Source references;
- Career Family;
- at least one Task or Activity;
- at least one Skill or Competency;
- Work Environment or declared blocker;
- Ontology and KOS contracts;
- validation profile.

## 30.3 Optional Dependencies

- Major;
- Industry;
- Technology;
- Tool;
- Certification;
- License;
- Learning Resource;
- adjacent Career;
- contextual assertion.

## 30.4 Missing Mandatory Dependency

The generator emits `dependency_blocked_result`.

UKCF may compile the missing object through another generator and retry.

## 30.5 Provisional Reference

A UKR-approved reservation may be referenced only when policy permits and registration ordering is explicit.

## 30.6 Circular Dependency

The generator uses references only.

It does not embed full Career dependencies or recursively invoke other generators.

---

# 31. Validation Integration

## 31.1 UKVF Profiles

Career Generator outputs are expected to use:

- Universal Core Profile;
- Entity Object Profile;
- Career entity extension;
- Localization Profile when applicable;
- Regulated Knowledge Profile when applicable;
- Quantitative Profile only for permitted referenced quantitative objects;
- Publication Profile for publication-targeted production;
- High-Impact Reasoning Profile for reasoning-ready candidates.

## 31.2 Generator Pre-Validation

The generator checks:

- output contract;
- entity type;
- identity and scope;
- mandatory Career fields;
- required relationship classes;
- claim–evidence coverage;
- contextual externalization;
- forbidden content;
- lifecycle state;
- IDs and references;
- confidence;
- audit completeness.

## 31.3 UKVF Authority

Generator Pre-Validation is not UKVF validation.

UKVF may:

- pass;
- pass with warnings;
- fail;
- block;
- require human review;
- quarantine;
- record eligible waivers.

## 31.4 Repair Integration

A repair invocation receives exact UKVF findings and may modify only authorized paths.

## 31.5 Validation Example

```text
Finding: CAREER-TASK-001
Severity: blocker
Path: task_structure.relationships
Reason: no Work Task or Work Activity relation
Recovery: UKCF compiles missing Task dependency or provides additional evidence,
then UKPP invokes Career Generator repair mode.
```

---

# 32. Registry Integration

## 32.1 Identity Use

The generator uses:

- Entity ID;
- identity reservation;
- Object ID;
- source Revision ID

exactly as supplied.

## 32.2 Prohibited Registry Behavior

The generator cannot:

- mint IDs;
- create aliases in UKR;
- register relationships;
- select a canonical survivor;
- set an active pointer;
- publish.

## 32.3 Registration Preparation

The Draft supplies:

- identity;
- semantic version candidate;
- source revision;
- relationships;
- dependencies;
- evidence;
- validation-ready metadata;
- integrity fingerprint input.

## 32.4 Registration Failure

UKR conflicts return through UKPP/UKCF and may trigger:

- retry with refreshed state;
- UKEF evolution;
- merge review;
- split review;
- cancellation.

---

# 33. Evolution Integration

## 33.1 Trigger

`evolution_successor` mode is mandatory when changing an Active or Published Career revision.

## 33.2 Required UKEF Inputs

- Evolution Case ID;
- change classification;
- identity continuity decision;
- source revision;
- effective time;
- compatibility;
- dependency impact;
- migration rules;
- rollback target.

## 33.3 Generator Role

The generator produces the successor Draft only.

UKEF governs:

- evolution approval;
- migration;
- compatibility;
- release;
- rollback;
- historical lineage.

## 33.4 Rename

A Career rename preserves Entity ID when UKEF confirms identity continuity.

## 33.5 Merge or Split

Career Generator does not perform merge or split.

After UKR/UKEF identity decisions, it may generate new or successor Career Drafts for the resulting identities.

---

# 34. Localization Strategy

## 34.1 Canonical Language

Every Career has one canonical language declared by the Input Package.

## 34.2 Localized Fields

May include:

- display name;
- definition;
- summary;
- boundary note;
- pathway summary;
- aliases;
- explanatory notes.

## 34.3 Non-Localized References

Canonical IDs, predicates, Evidence IDs, Source IDs, and enum values remain stable.

## 34.4 Local Meaning

Local Career labels may represent:

- exact equivalent;
- close equivalent;
- market label;
- former name;
- no direct equivalent.

## 34.5 Human Review

High-impact or legal localization requires qualified local review.

---

# 35. Versioning Strategy

## 35.1 Generator Version

Career Generator follows semantic versioning.

### Major

Breaking input, output, Career semantic, or generator behavior change.

### Minor

Backward-compatible Career rule, optional field, prompt, or validation enrichment.

### Patch

Nonbehavioral clarification or defect correction.

## 35.2 Draft Semantic Version

The Career Draft receives a semantic version candidate supplied or governed by UKR/UKEF planning.

## 35.3 Prompt Version

Prompt templates are versioned independently.

## 35.4 Model Version

Model lane and model version are recorded but do not define generator version.

## 35.5 Compatibility

Every invocation records compatibility among:

- Generator;
- UEGF;
- KOS;
- Ontology;
- prompt;
- UKVF profile;
- model lane.

## 35.6 Deprecation

A deprecated Career Generator version cannot run new production cases.

Historical attempts remain reproducible.

---

# 36. Failure Modes

## 36.1 Failure Envelope

```yaml
career_generator_failure:
  outcome: string
  failure_code: string
  severity: blocker | error
  retryability: retry_same_input | retry_changed_input | human_review | not_retryable
  affected_target: string
  stage: string
  message: string
  evidence: [reference]
  missing_requirements: [string]
  remediation: [string]
  safe_partial_artifacts: [reference]
  attempt_id: string
  correlation_id: string
```

## 36.2 Career-Specific Failure Codes

- `CAREER_INPUT_INCOMPLETE`;
- `CAREER_IDENTITY_CONFLICT`;
- `CAREER_TYPE_MISMATCH`;
- `CAREER_SCOPE_UNRESOLVED`;
- `CAREER_ROLE_COLLAPSE`;
- `CAREER_JOB_TITLE_COLLAPSE`;
- `CAREER_MAJOR_COLLAPSE`;
- `CAREER_INDUSTRY_COLLAPSE`;
- `CAREER_TASK_SKILL_CONFUSION`;
- `CAREER_TOOL_SKILL_CONFUSION`;
- `CAREER_CORE_EVIDENCE_INSUFFICIENT`;
- `CAREER_REQUIRED_RELATIONSHIP_MISSING`;
- `CAREER_CONTEXT_CONTAMINATION`;
- `CAREER_SOURCE_HALLUCINATION`;
- `CAREER_DEPENDENCY_BLOCKED`;
- `CAREER_ONTOLOGY_MISMATCH`;
- `CAREER_LOCALIZATION_DRIFT`;
- `CAREER_EVOLUTION_PLAN_REQUIRED`;
- `CAREER_REPAIR_SCOPE_VIOLATION`;
- `CAREER_GENERATION_FAILURE`.

## 36.3 No Mixed Outcome

A blocker result cannot include a complete Draft presented as usable.

Safe partial artifacts may include:

- claim inventory;
- unresolved identity candidates;
- missing-evidence list;
- diagnostics.

---

# 37. Retry Rules

## 37.1 Retry Classes

### Same-Input Retry

Only for transient model or infrastructure failure.

### Changed-Input Retry

For:

- new evidence;
- resolved identity;
- resolved dependency;
- corrected contract;
- completed UKEF plan.

### Repair Retry

For authorized UKVF remediation.

### No Retry

For:

- prohibited purpose;
- wrong entity type;
- rights prohibition;
- unresolved non-waivable identity conflict;
- missing generator authority.

## 37.2 Retry Invariants

Retry must preserve:

- Compilation ID;
- Production Case lineage;
- prior Attempt ID;
- semantic target;
- contract lock unless a new Compilation Revision is created.

## 37.3 Retry Limit

Retry is bounded by UKPP policy.

Repeated deterministic failure without changed conditions is prohibited.

## 37.4 Retry Flow

```mermaid
flowchart TD
    A[Generation Failure] --> B{Transient?}
    B -->|Yes| C[Retry Same Input]
    B -->|No| D{Input Remediable?}
    D -->|Yes| E[UKCF/UKPP Update Input]
    D -->|No| F[Terminal Failure]
    E --> G[New Attempt]
    C --> G
    G --> H{Draft Emitted?}
    H -->|Yes| I[UKVF]
    H -->|No| J{Retry Limit Reached?}
    J -->|No| B
    J -->|Yes| F
```

---

# 38. Quality Gates

## 38.1 Gate Q0 — Contract

All required versions and authority references resolve.

## 38.2 Gate Q1 — Identity

One Career identity is locked and distinct from adjacent types.

## 38.3 Gate Q2 — Scope

Inclusion, exclusion, and boundary are explicit.

## 38.4 Gate Q3 — Evidence

Minimum Career claim categories are supported.

## 38.5 Gate Q4 — Core Semantics

All mandatory KOS Career fields are populated or validly blocked.

## 38.6 Gate Q5 — Relationships

Career Family, Task or Activity, Skill or Competency, and Work Environment are present or explicitly blocking.

## 38.7 Gate Q6 — Context

Salary, demand, regulation, AI impact, and geographic volatility are externalized.

## 38.8 Gate Q7 — Confidence

Confidence is scoped and evidence-bounded.

## 38.9 Gate Q8 — Safety

No personal fit, guarantee, stereotype, or prohibited inference.

## 38.10 Gate Q9 — Audit

Generation lineage and fingerprints are complete.

## 38.11 Non-Compensatory Blockers

No score can compensate for:

- identity conflict;
- wrong type;
- fabricated source;
- missing material evidence;
- invalid Ontology predicate;
- rights violation;
- constitutional violation;
- missing UKEF plan for published change.

---

# 39. Performance Targets

Performance targets are profile-specific and do not weaken quality.

## 39.1 Interactive Single Career

Recommended service objectives:

- contract and input gate: ≤ 2 seconds, excluding unavailable dependencies;
- structured generation: ≤ 90 seconds;
- pre-validation: ≤ 10 seconds;
- total generator attempt: ≤ 120 seconds.

## 39.2 Standard Production

- deterministic structure success: ≥ 99.5%;
- typed failure coverage: 100%;
- fabricated ID tolerance: 0;
- fabricated source tolerance: 0;
- mandatory field structural compliance before UKVF: ≥ 99%;
- evidence mapping coverage for material claims: 100% or explicit blocker.

## 39.3 Batch

- deterministic target manifests;
- configurable concurrency;
- bounded retries;
- no unaccounted targets;
- checkpoint support;
- backpressure from UKVF and UKR.

## 39.4 Scale

The generator specification must support millions of independent Career attempts without changing its logical contract.

---

# 40. Security Considerations

## 40.1 Least Data

Only input fields needed for Career generation are provided to the model lane.

## 40.2 Source Isolation

Source text is data and cannot override system instructions.

## 40.3 Restricted Evidence

Restricted sources may be used only in qualified processing lanes.

## 40.4 Personal Data

Universal Career Objects must not contain unnecessary personal data.

## 40.5 Prompt Injection

Instructions found inside evidence, web pages, documents, or quoted text are ignored as authority.

## 40.6 Output Exfiltration

The generator cannot reveal:

- secrets;
- credentials;
- private chain of thought;
- restricted full-source content;
- unauthorized personal data.

## 40.7 Quarantine

Suspected source poisoning, ID fabrication, rights breach, or instruction injection results in quarantine.

---

# 41. Observability and Audit

## 41.1 Metrics

- attempts;
- success rate;
- typed failure rate;
- average evidence coverage;
- missing relationship rate;
- UKVF blocker rate;
- repair rate;
- identity conflict rate;
- localization failure rate;
- latency;
- token or inference cost;
- retry count.

## 41.2 Trace Chain

Compilation Target → Production Case → Career Generator Attempt → Draft → UKVF Run → Human Review → UKR Revision → Release.

## 41.3 Logs

Logs contain:

- states;
- IDs;
- versions;
- timings;
- diagnostics;
- artifact references.

Logs do not contain private chain of thought or unredacted restricted evidence.

---

# 42. Example Input Requests

## 42.1 New Career

```text
Generate a canonical Career Object for “Data Privacy Engineer”.
Target locale: en.
Target geography context: global stable core, with Indonesia contextual references.
Target readiness: publication-profile candidate.
Include Career Family, Tasks, Skills, Work Environment, pathways,
Industry contexts, and evidence-backed boundaries.
```

## 42.2 Localized Career

```text
Create an Indonesian localization revision for the existing Career
identified by entity:career:example.
Preserve canonical scope and relationships.
Use the supplied terminology authority and localization review policy.
```

## 42.3 Repair

```text
Repair revision:career:example:r2 based on UKVF findings:
- missing Work Task relationship;
- one unsupported universal remote-work claim;
- pathway statement overstates a single Major.
Modify only the affected paths.
```

## 42.4 Evolution Successor

```text
Produce a successor Draft for an Active Career revision under Evolution Case EVC-204.
The change updates task distribution and Skill relationships effective 2027-01-01.
Preserve Entity ID and historical relationships.
```

---

# 43. Example Generated Career Objects

## 43.1 Successful New Career Draft

The following is an illustrative, non-production example. IDs and evidence are placeholders.

```yaml
career_generator_result:
  outcome: draft_career_object
  generator:
    generator_id: career_generator
    version: 1.0.0
    prompt_template_version: career-create-1.0.0
    model_lane_ref: model_lane:qualified:example
    attempt_id: attempt:career:demo:001
  input_fingerprint: sha256:example-input
  contract_fingerprint: sha256:example-contract

  draft:
    contract_and_identity:
      entity_id: entity:career:demo-data-privacy-engineer
      identity_reservation_id: reservation:demo-001
      object_id: null
      revision_id: null
      object_kind: entity
      entity_type: career
      ontology_class: Career
      lifecycle_state: draft
      semantic_version_candidate: 1.0.0
      change_class: initial
      compatibility: not_applicable

    naming_and_localization:
      canonical_name: Data Privacy Engineer
      display_name: Data Privacy Engineer
      canonical_language: en
      default_locale: en
      available_locales: [en]
      aliases:
        - text: Privacy Engineering Professional
          alias_type: common_label
          locale: en
          status: proposed
      disambiguation_note: >
        Represents a Career centered on engineering systems and controls
        that operationalize privacy requirements; it is distinct from
        a legal privacy counsel Role and from a single organization Job Title.

    definition_and_scope:
      definition: >
        A Career focused on designing, implementing, evaluating, and improving
        technical systems and engineering controls that support privacy-preserving
        data processing and accountable use of personal information.
      summary: >
        The Career combines software, data, security, and privacy-control work
        across system design, implementation, testing, and governance collaboration.
      purpose: >
        Translate privacy requirements and risk controls into technical system behavior.
      scope:
        included:
          - privacy-oriented system design
          - technical privacy controls
          - privacy testing and verification
          - collaboration on data-governance implementation
        excluded:
          - legal representation
          - a single privacy-officer Role
          - one product-specific privacy Tool
      career_boundary_note: >
        The Career is broader than a privacy engineer Job Title at one organization
        and narrower than the full privacy profession.

    career_core_semantics:
      career_scope: interdisciplinary technical Career
      primary_work_purpose: >
        Build and improve technical systems that reduce privacy risk
        and implement defined privacy requirements.
      core_task_categories:
        - privacy_requirements_translation
        - system_design_review
        - privacy_control_implementation
        - privacy_testing
        - technical_risk_analysis
      core_competency_refs:
        - entity:competency:demo-privacy-by-design
        - entity:skill:demo-software-engineering
        - entity:skill:demo-data-governance
      typical_work_environment_refs:
        - entity:work_environment:demo-cross-functional-technical
      career_family_refs:
        - entity:career_family:demo-security-privacy-engineering
      entry_pathway_summary: >
        Entry may occur through software engineering, data engineering,
        cybersecurity, privacy technology, or related technical pathways,
        with additional privacy-domain learning.
      career_boundary_note: >
        Does not imply one mandatory degree, credential, Industry, or employer context.

    task_structure:
      categories:
        - category: privacy_requirements_translation
          universality: strong
        - category: privacy_control_implementation
          universality: strong
        - category: privacy_testing
          universality: common
      relationships:
        - proposal_id: rel-proposal-001
          source_entity_id: entity:career:demo-data-privacy-engineer
          predicate: performs
          target_entity_id: entity:work_task:demo-privacy-control-design
          target_entity_type: work_task
          direction: outbound
          status: proposed
          strength: strong
          requirement_level: not_applicable
          evidence_refs: [evidence:demo-001, evidence:demo-002]
          confidence: medium_high
          rationale: >
            Supplied evidence describes design and implementation of technical privacy controls.

    competency_and_skill_structure:
      relationships:
        - proposal_id: rel-proposal-002
          source_entity_id: entity:career:demo-data-privacy-engineer
          predicate: requires_skill
          target_entity_id: entity:skill:demo-software-engineering
          target_entity_type: skill
          direction: outbound
          status: proposed
          strength: strong
          requirement_level: commonly_required
          evidence_refs: [evidence:demo-002]
          confidence: medium_high
          rationale: >
            Engineering implementation tasks rely on software-development capability.
        - proposal_id: rel-proposal-003
          source_entity_id: entity:career:demo-data-privacy-engineer
          predicate: requires_competency
          target_entity_id: entity:competency:demo-privacy-by-design
          target_entity_type: competency
          direction: outbound
          status: proposed
          strength: essential
          requirement_level: required
          evidence_refs: [evidence:demo-001]
          confidence: high
          rationale: >
            Privacy-by-design performance is central to the Career scope.

    knowledge_and_technology_context:
      knowledge_domain_refs:
        - entity:knowledge_domain:demo-data-privacy
        - entity:knowledge_domain:demo-information-security
      technology_relationships:
        - proposal_id: rel-proposal-004
          predicate: may_use
          target_entity_id: entity:technology:demo-privacy-enhancing-technologies
          target_entity_type: technology
          strength: possible
          requirement_level: beneficial
          evidence_refs: [evidence:demo-003]
          confidence: medium
          context_note: >
            Relevance varies by Role, organization, and system architecture.

    work_environment:
      typical_environment_refs:
        - entity:work_environment:demo-cross-functional-technical
      variability_note: >
        Collaboration, autonomy, regulatory exposure, and deployment responsibility
        vary by Industry, organization, and Role.
      evidence_refs: [evidence:demo-002, evidence:demo-004]
      confidence: medium

    career_family_and_role_structure:
      career_family_relationships:
        - proposal_id: rel-proposal-005
          predicate: belongs_to
          target_entity_id: entity:career_family:demo-security-privacy-engineering
          target_entity_type: career_family
          strength: strong
          evidence_refs: [evidence:demo-001, evidence:demo-004]
          confidence: medium_high
          rationale: >
            Grouped by technical system-protection purpose and engineering task pattern.
      role_refs:
        - entity:role:demo-privacy-architecture
        - entity:role:demo-privacy-implementation
      job_title_mappings:
        - label: Privacy Engineer
          locale: en
          mapping_type: common_market_label

    entry_and_development_pathways:
      summary: >
        Multiple pathways may lead into the Career, including software, security,
        data, and privacy-technology experience.
      major_refs:
        - entity:major:demo-computer-science
      certification_refs: []
      license_refs: []
      pathway_uncertainty: >
        No universal Major, Certification, or License is asserted.

    industry_and_application_context:
      industry_refs:
        - entity:industry:demo-technology-services
        - entity:industry:demo-financial-services
      variability_note: >
        The Career may occur in multiple Industries where personal-data processing
        and privacy controls are material.

    transferability_and_adjacent_careers:
      adjacent_career_refs:
        - entity:career:demo-security-engineer
        - entity:career:demo-data-governance-specialist
      distinction_note: >
        Adjacency reflects shared technical or governance capabilities,
        not semantic equivalence.
      confidence: medium

    contextual_knowledge_references:
      salary_observation_refs: []
      labor_market_assertion_refs: []
      ai_trend_refs:
        - entity:ai_trend:demo-privacy-automation
      regulation_refs:
        - entity:regulation:demo-indonesia-personal-data-protection
      note: >
        Values and legal requirements remain external and context-scoped.

    evidence_and_sources:
      material_claims:
        - claim_id: claim-demo-identity
          claim_class: editorial_synthesis
          evidence_refs: [evidence:demo-001, evidence:demo-004]
        - claim_id: claim-demo-purpose
          claim_class: editorial_synthesis
          evidence_refs: [evidence:demo-001, evidence:demo-002]
        - claim_id: claim-demo-tasks
          claim_class: editorial_synthesis
          evidence_refs: [evidence:demo-002]
        - claim_id: claim-demo-skills
          claim_class: editorial_synthesis
          evidence_refs: [evidence:demo-002, evidence:demo-003]
      source_refs:
        - source:demo-001
        - source:demo-002
        - source:demo-003
        - source:demo-004
      evidence_status: proposed
      conflict_status: none_detected_in_supplied_bundle
      source_coverage: substantial
      rights_status: permitted_for_generation

    confidence_conflict_and_uncertainty:
      identity_confidence: medium_high
      evidence_confidence: medium_high
      coverage_confidence: medium
      object_confidence_proposal: medium
      uncertainties:
        - Work Environment evidence is broad but not universal.
        - Pathways differ by jurisdiction and employer.
        - Technology use varies by Role.
      conflicts: []
      assumptions: []
      forbidden_interpretations:
        - not a personal fit verdict
        - not a guaranteed employment outcome
        - not a universal salary or demand statement
        - not a deterministic personality mapping
        - not a timeless AI risk statement

    governance_and_lifecycle:
      owner_ref: owner:career-domain
      maintainer_ref: steward:career-domain
      created_by: generator:career_generator:1.0.0
      created_at: 2026-06-28T00:00:00Z
      lifecycle_state: draft
      review_status: not_started
      allowed_purposes:
        - knowledge_review
        - validation
      prohibited_uses:
        - direct_personal_suitability_verdict
        - guaranteed_employment_prediction
      sensitivity_class: public_candidate
      retention_class: knowledge_draft

    quality_and_readiness:
      quality_method_version: career-quality-proposal-1.0
      completeness_proposal: 0.91
      consistency_proposal: 0.94
      evidence_quality_proposal: 0.82
      explainability_proposal: 0.90
      candidate_readiness_profiles:
        - core_candidate
        - retrieval_ready_candidate
      blocking_issues: []
      warnings:
        - publication and reasoning readiness require UKVF and human approval

    generation_and_audit_record:
      compilation_id: compilation:demo-career-001
      production_case_id: production:demo-career-001
      attempt_id: attempt:career:demo:001
      input_fingerprint: sha256:example-input
      contract_fingerprint: sha256:example-contract
      evidence_bundle_revision: revision:evidence-bundle:demo-001
      dependency_manifest_ref: dependency-manifest:demo-001
      correlation_id: correlation:demo-001
      causation_id: causation:demo-001

  pre_validation_report:
    status: pass_with_warnings
    blockers: []
    warnings:
      - Work Environment scope requires UKVF review.
      - Contextual regulation reference requires jurisdiction validation.
```

---


## 43.2 Localized Successor Career Draft

The following compact example demonstrates a valid successor Draft generated under UKEF control. It is illustrative and does not assert production facts.

```yaml
career_generator_result:
  outcome: draft_career_object
  generator:
    generator_id: career_generator
    version: 1.0.0
    prompt_template_version: career-localize-evolution-1.0.0
    attempt_id: attempt:career:demo:003
  draft:
    contract_and_identity:
      entity_id: entity:career:demo-data-privacy-engineer
      object_id: object:career:demo-data-privacy-engineer
      source_revision_id: revision:career:demo-data-privacy-engineer:r1
      revision_id: null
      object_kind: entity
      entity_type: career
      ontology_class: Career
      lifecycle_state: draft
      semantic_version_candidate: 1.1.0
      change_class: localization_and_compatible_enrichment
      compatibility: backward_compatible
      evolution_case_ref: evolution:demo-003
    naming_and_localization:
      canonical_name: Data Privacy Engineer
      canonical_language: en
      default_locale: id-ID
      available_locales: [en, id-ID]
      localizations:
        - locale: id-ID
          display_name: Insinyur Privasi Data
          translation_status: reviewed_candidate
          equivalence_status: exact_scope_candidate
          terminology_authority_refs:
            - source:terminology:demo-id-001
    definition_and_scope:
      definition: >
        Karier yang berfokus pada perancangan, penerapan, evaluasi,
        dan peningkatan kontrol teknis untuk mendukung pemrosesan data
        yang menjaga privasi.
      scope: preserved_from_source_revision
      career_boundary_note: >
        Bukan penasihat hukum privasi, satu jabatan organisasi,
        atau nama alat perlindungan data.
    career_core_semantics:
      inherited_from_revision: revision:career:demo-data-privacy-engineer:r1
      authorized_changes:
        - localized definition
        - localized summary
        - localized boundary note
      core_semantic_change: none
    evidence_and_sources:
      inherited_evidence_refs:
        - evidence:demo-001
        - evidence:demo-002
      localization_evidence_refs:
        - evidence:terminology:demo-id-001
      conflict_status: none_detected
    confidence_conflict_and_uncertainty:
      identity_confidence: high
      localization_confidence: medium_high
      object_confidence_proposal: medium_high
      uncertainties:
        - Local market Job Titles may use different labels and are not exact aliases by default.
    governance_and_lifecycle:
      lifecycle_state: draft
      review_status: localization_review_pending
      evolution_case_ref: evolution:demo-003
    quality_and_readiness:
      candidate_readiness_profiles:
        - localized_profile_candidate
      blocking_issues: []
      warnings:
        - Requires UKVF localization validation and qualified local review.
    generation_and_audit_record:
      compilation_id: compilation:demo-career-003
      production_case_id: production:demo-career-003
      attempt_id: attempt:career:demo:003
      source_revision_id: revision:career:demo-data-privacy-engineer:r1
      correlation_id: correlation:demo-003
```

# 44. Example Failure Output — Blocked Draft Attempt

```yaml
career_generator_failure:
  outcome: insufficient_evidence_result
  failure_code: CAREER_CORE_EVIDENCE_INSUFFICIENT
  severity: blocker
  retryability: retry_changed_input
  affected_target: entity:career:reservation:demo-002
  stage: evidence_mapping
  message: >
    Supplied evidence supports a Job Title used by one employer but does not support
    a stable Career identity, broad task pattern, Career Family, or Work Environment.
  evidence:
    - evidence:demo-employer-vacancy-001
  missing_requirements:
    - independent Career identity evidence
    - broad Work Task evidence
    - Skill or Competency structure
    - Career Family mapping
    - scope beyond one employer
  remediation:
    - obtain occupational or professional sources
    - rerun UKQF duplicate and adjacent-type search
    - consider generating a Job Title or Role object instead
  safe_partial_artifacts:
    - diagnostic:career-job-title-collapse
  attempt_id: attempt:career:demo:002
  correlation_id: correlation:demo-002
```

---

# 45. End-to-End Generation Example

## 45.1 Request

Generate “Renewable Energy Systems Technician” as a publication-profile Career candidate.

## 45.2 UKCF Compilation

UKCF resolves:

- target as Career candidate;
- possible Occupation subtype;
- geography-neutral stable core;
- required Skill, Task, Career Family, Work Environment, Industry, Certification, and evidence dependencies.

## 45.3 UKQF Discovery

UKQF returns:

- one possible existing Career;
- two Job Title labels;
- one external occupation code;
- related Skills;
- relevant Work Tasks;
- published source and evidence references.

## 45.4 UKR Decision

UKR determines:

- use existing Entity ID;
- create a new Draft revision under existing Object ID;
- no duplicate identity.

## 45.5 Generation

Career Generator:

- locks scope;
- maps evidence;
- distinguishes technician Career from engineer Career and installer Role;
- proposes Task, Skill, environment, family, and Industry relationships;
- externalizes salary and labor-demand observations;
- emits Draft.

## 45.6 Validation

UKVF finds:

- schema pass;
- identity pass;
- evidence pass;
- one warning: Certification relation is jurisdiction-specific;
- human review required for localization.

## 45.7 Registration and Publication

After review:

- UKR registers the new revision;
- UKPP registers projections;
- publication occurs only after release approval.

---

# 46. Validation Examples

## 46.1 Pass with Warning

```text
Validator: Career Semantic Validator
Outcome: passed_with_warnings
Finding:
  The Work Environment statement is supported across several sources,
  but remote-work frequency is contextual and must remain an external assertion.
Generator response:
  Keep general collaboration environment in the Career core.
  Remove remote-work frequency from intrinsic fields.
  Retain contextual reference.
```

## 46.2 Blocker

```text
Validator: Identity Validator
Outcome: blocked
Finding:
  Candidate “Senior Data Analyst” is a seniority-specific Job Title
  and does not establish a separate Career identity.
Generator response:
  No repair within Career identity is permitted.
  Return entity_type_mismatch_result.
  UKCF may compile Job Title or Role production.
```

## 46.3 Evidence Error

```text
Validator: Citation Validator
Outcome: failed
Finding:
  Source cited for required Skill does not contain the claimed capability.
Generator response:
  Remove or narrow the relationship.
  Retry only with corrected evidence mapping.
```

## 46.4 Constitutional Blocker

```text
Validator: Constitutional Validator
Outcome: blocked
Finding:
  Draft states that the Career is suitable for introverts.
Generator response:
  Remove the personal fit assertion.
  Add forbidden-interpretation statement.
  Regenerate affected section.
```

---

# 47. Error Handling Examples

## 47.1 Missing Career Family

```text
Input:
  Task and Skill references are available.
  No Career Family identity is resolved.

Outcome:
  dependency_blocked_result

Reason:
  Career Family relationship is mandatory.

Recovery:
  UKCF compiles or resolves a Career Family dependency,
  then UKPP retries the Career target with changed input.
```

## 47.2 Source Hallucination Detected

```text
Condition:
  Model output contains a source identifier not present in the Evidence Bundle.

Outcome:
  generation_failure_result
  failure_code: CAREER_SOURCE_HALLUCINATION
  quarantine_recommended: true

Recovery:
  discard Draft;
  investigate model lane;
  rerun from locked evidence;
  review affected cohort.
```

## 47.3 Published Revision Without Evolution Plan

```text
Condition:
  Input mode is revise_draft, but source revision is Published.

Outcome:
  blocked_generation_result
  failure_code: CAREER_EVOLUTION_PLAN_REQUIRED

Recovery:
  UKCF creates a UKEF Evolution Plan and resubmits in evolution_successor mode.
```

## 47.4 Repair Exceeds Scope

```text
Condition:
  Repair invocation authorizes Task correction only.
  Generated output also changes canonical name and Career Family.

Outcome:
  validation_repair_failed_result
  failure_code: CAREER_REPAIR_SCOPE_VIOLATION
```

---

# 48. Conformance Tests

## 48.1 Contract Tests

1. accepts complete version lock;
2. rejects unsupported KOS version;
3. rejects missing UKPP Production Case;
4. rejects missing identity disposition;
5. emits one outcome only.

## 48.2 Identity Tests

6. distinguishes Career from Role;
7. distinguishes Career from Job Title;
8. distinguishes Career from Position;
9. distinguishes Career from Major;
10. distinguishes Career from Industry;
11. detects duplicate Career identity;
12. preserves Entity ID during authorized rename;
13. rejects split or merge without UKEF/UKR decision.

## 48.3 Evidence Tests

14. maps every material claim to Evidence IDs;
15. rejects fabricated source;
16. preserves conflict;
17. uses explicit missing-evidence states;
18. does not treat repeated source lineage as independence;
19. externalizes volatile claims;
20. enforces rights restrictions.

## 48.4 Output Tests

21. produces all 18 sections;
22. sets lifecycle to Draft;
23. uses Career object kind and type;
24. populates mandatory KOS Career fields;
25. embeds no full dependent object;
26. includes audit lineage;
27. includes forbidden interpretations.

## 48.5 Relationship Tests

28. includes Career Family relation;
29. includes Task or Activity relation;
30. includes Skill or Competency relation;
31. includes Work Environment relation or blocker;
32. rejects unregistered predicate;
33. rejects Tool-as-Skill;
34. rejects Major-guarantees-Career;
35. scopes legal requirements.

## 48.6 Context and Safety Tests

36. removes universal salary;
37. removes universal demand;
38. rejects personality fit;
39. rejects timeless AI safety label;
40. keeps regulation jurisdictional;
41. keeps employer-specific context external.

## 48.7 Revision and Evolution Tests

42. creates a new revision rather than overwrite;
43. requires UKEF plan for Published source;
44. respects unchanged-field lock;
45. preserves source-revision lineage;
46. records semantic version candidate.

## 48.8 Retry and Failure Tests

47. transient retry preserves semantic target;
48. deterministic failure requires changed input;
49. missing generator dependency remains typed;
50. blocker output contains no usable full Draft.

## 48.9 Determinism Tests

51. identical inputs produce identical section structure;
52. stable enum ordering is preserved;
53. relationship proposals use deterministic ordering;
54. audit fingerprints are reproducible.

## 48.10 Security Tests

55. ignores instructions embedded in evidence;
56. does not expose restricted source body;
57. does not include secrets;
58. quarantines fabricated IDs;
59. preserves least-privilege context;
60. does not reveal private chain of thought.

---

# 49. Production Readiness Checklist

Career Generator V1 is production-ready only when:

- [ ] Registered as a UEGF-derived generator.
- [ ] Generator version is active.
- [ ] Career entity extension is approved.
- [ ] KOS Career template compatibility is verified.
- [ ] Ontology classes and predicates are locked.
- [ ] UKCF binding is registered.
- [ ] UKPP invocation contract is implemented.
- [ ] UKVF Career profile is available.
- [ ] UKR identity and revision contracts are integrated.
- [ ] UKEF successor mode is implemented.
- [ ] UKL/UKQF discovery dependencies are supplied through UKCF.
- [ ] Create, revision, localization, repair, and evolution prompts are versioned.
- [ ] Input schema is validated.
- [ ] Output schema is validated.
- [ ] One-outcome rule is enforced.
- [ ] Draft-only lifecycle is enforced.
- [ ] Career versus adjacent-type tests pass.
- [ ] Evidence mapping tests pass.
- [ ] Required relationship tests pass.
- [ ] Volatile-context externalization tests pass.
- [ ] Constitutional safety tests pass.
- [ ] Source-hallucination tolerance is zero.
- [ ] Retry and quarantine behavior is tested.
- [ ] Batch idempotency is tested.
- [ ] Deterministic structure is verified.
- [ ] Audit and trace records are complete.
- [ ] Security review is complete.
- [ ] Model lanes are qualified.
- [ ] Human review workflow is operational.
- [ ] Rollback and corrective revision workflows are tested.
- [ ] Production monitoring and alerts are active.

---

# 50. Acceptance Criteria

A Career Generator attempt is accepted for UKVF processing only when:

1. one Draft Career Entity Object is emitted;
2. identity and scope are locked;
3. all mandatory KOS Career fields are present;
4. mandatory relationship classes are proposed or a blocker prevents Draft acceptance;
5. every material claim maps to supplied evidence;
6. volatile contextual knowledge remains external;
7. confidence and uncertainty are explicit;
8. no prohibited assertion exists;
9. references resolve or are approved reservations;
10. lifecycle remains Draft;
11. audit metadata is complete;
12. Generator Pre-Validation contains no generator-level blocker.

Acceptance means only:

**eligible for UKVF validation**.

It does not mean:

- Validated;
- Approved;
- Registered;
- Active;
- Published;
- Graph Ready;
- Vector Ready;
- Retrieval Ready;
- Reasoning Ready.

---

# 51. Closing Standard

Career Generator V1 is the official production implementation of UEGF for canonical Career Knowledge Objects.

It generates one Career Draft.

It does not generate the surrounding knowledge ecosystem.

It references that ecosystem through UKR-resolved identities and Ontology-defined relationships.

It does not decide identity.

UKR supplies identity disposition.

It does not retrieve knowledge directly.

UKL and UKQF provide discovery results through UKCF and UKPP.

It does not approve its evidence.

UKVF validates the Draft.

It does not publish.

UKPP and UKR govern registration and release.

It does not update published knowledge as ordinary generation.

UKEF governs evolution.

Its permanent Career-specific contracts are:

- one stable Career identity;
- one Draft Entity Object;
- explicit Career boundary;
- professional purpose;
- Task structure;
- Skill and Competency structure;
- Work Environment;
- Career Family;
- conditional pathways;
- typed relationships;
- evidence mapping;
- scoped confidence;
- contextual externalization;
- forbidden personal and deterministic interpretations;
- complete audit lineage.

These contracts make Career generation deterministic in structure, evidence-aware, graph-compatible, explainable, auditable, scalable, and faithful to the complete KarirGPS Knowledge Operating System architecture.
