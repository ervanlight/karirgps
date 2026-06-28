# Universal Knowledge Validation Framework V1

**Product:** KarirGPS  
**Document Type:** Enterprise Knowledge Validation Architecture and Operating Standard  
**Version:** 1.0  
**Status:** Normative Framework Baseline  
**Governing Constitution:** AI Constitution  
**Governing Ontology:** Career Knowledge Ontology  
**Governing Object Contract:** Knowledge Object Specification  
**Governing Generator Framework:** `assets/knowledge/frameworks/Universal_Entity_Generator_Framework_V1.md`  
**Governing Production Pipeline:** `assets/knowledge/frameworks/Universal_Knowledge_Production_Pipeline_V1.md`  
**Target Path:** `assets/knowledge/frameworks/Universal_Knowledge_Validation_Framework_V1.md`

---

## 0. Normative Status, Authority, and Framework Boundary

### 0.1 Status

Universal Knowledge Validation Framework V1, hereafter **UKVF**, is the authoritative enterprise-wide validation architecture for all KarirGPS Knowledge Objects.

UKVF operates after generation and before canonical registration and publication. It may also operate continuously after publication when changes in evidence, dependencies, policies, Ontology, KOS, source status, or external reality require revalidation.

Every Knowledge Object produced by any KarirGPS generator MUST pass the applicable UKVF validation profile before entering canonical registration or publication.

### 0.2 Authority Precedence

When validation rules conflict, apply this order:

1. applicable law, safety, privacy, and binding rights restrictions;
2. AI Constitution;
3. Career Knowledge Ontology;
4. Knowledge Object Specification;
5. Universal Entity Generator Framework or applicable object-kind framework;
6. Universal Knowledge Production Pipeline;
7. Universal Knowledge Validation Framework;
8. entity-specific generator specification;
9. entity-specific validation extension;
10. production-profile or batch-specific policy.

A lower-level rule may strengthen but must not weaken a higher-level rule.

### 0.3 Applicability

UKVF applies to:

- Entity Objects;
- Contextual Assertion Objects;
- Relationship Objects;
- Evidence Objects;
- Source Objects;
- Package Objects;
- Collection Objects;
- object revisions;
- release candidates;
- graph projections;
- vector projections;
- search projections;
- derived reasoning packages;
- localized representations.

### 0.4 Non-Scope

UKVF does not:

- generate Knowledge Objects;
- redesign the Ontology;
- redesign KOS;
- make publication decisions by itself;
- silently repair canonical knowledge;
- replace authorized human review;
- expose private model chain of thought;
- define a specific database, programming language, or model provider.

### 0.5 Normative Terms

- **MUST** indicates a mandatory requirement.
- **MUST NOT** indicates a prohibited condition.
- **SHOULD** indicates a requirement that may be waived only through documented governance.
- **MAY** indicates an allowed option.
- **CONDITIONAL** indicates a requirement activated by a defined condition.

### 0.6 Validation Invariants

Every UKVF implementation MUST preserve the following invariants:

1. Validation is revision-specific.
2. Validation findings are immutable once issued; corrections create new findings or runs.
3. A validator never silently rewrites the object it validates.
4. Structural completeness does not prove factual correctness.
5. Factual plausibility does not prove evidence support.
6. A high aggregate score cannot override a blocker.
7. Identity, fabricated evidence, rights, privacy, and constitutional blockers are non-compensatory.
8. Every material finding identifies its validator, version, rule, affected path, evidence, and remediation.
9. Every material claim is traceable to evidence and source.
10. Every relationship is checked for predicate, type, direction, scope, evidence, and confidence.
11. Missing evidence is not interpreted as evidence of absence.
12. Model agreement is not independent evidence.
13. Validator agreement is not proof when validators share the same model, prompt, or source lineage.
14. Validation outcomes are distinct from publication states.
15. Passed validation does not automatically imply Human Review completion.
16. Waivers cannot apply to non-waivable rules.
17. A waiver does not change the underlying finding.
18. AI-assisted validation must remain explainable and auditable.
19. High-impact objects require validator independence from the generating model or lane.
20. Validation inputs are version-locked.
21. Validation results expire when relevant dependencies or validity periods change.
22. Cross-object consistency is evaluated against an explicit knowledge snapshot.
23. Temporal, geographic, and localization context are validated as first-class semantics.
24. Numerical and statistical claims require method-aware validation.
25. Hallucination detection uses traceability and source resolution, not stylistic suspicion alone.
26. Duplicate detection distinguishes exact identity, alias, subtype, close mapping, and related entities.
27. Quarantined objects are isolated from ordinary registration and retrieval.
28. Continuous validation never mutates published knowledge directly; it creates findings and revalidation cases.
29. Validation logs must not contain private chain of thought or restricted source bodies.
30. The framework remains model-independent and implementation-neutral.

### 0.7 Validation Architecture Planes

UKVF separates six logical planes:

1. **Validation Control Plane**  
   Profiles, orchestration, run state, policies, dependencies, and outcomes.

2. **Deterministic Validation Plane**  
   Schema, reference, type, numerical, lifecycle, and policy rules that can be evaluated deterministically.

3. **Semantic Validation Plane**  
   Ontology, identity, relationship, meaning, contradiction, hallucination, and reasoning checks.

4. **Evidence Assurance Plane**  
   Source, evidence, citation, provenance, rights, freshness, and confidence checks.

5. **Human Adjudication Plane**  
   Expert review, conflict resolution, waivers, exceptions, and final judgment.

6. **Governance and Observability Plane**  
   Registry, versions, qualification, audit, metrics, continuous validation, and incident response.

---

# 1. Purpose and Scope

## 1.1 Purpose

UKVF guarantees that every Knowledge Object is evaluated for:

- structural validity;
- Ontology compliance;
- identity integrity;
- relationship validity;
- factual support;
- source quality;
- citation correctness;
- logical consistency;
- semantic consistency;
- cross-object coherence;
- temporal and geographic correctness;
- localization quality;
- numerical and statistical reliability;
- confidence calibration;
- contradiction and hallucination risk;
- policy and constitutional compliance;
- explainability;
- publication readiness.

## 1.2 Primary Objectives

UKVF MUST provide:

- one universal validation lifecycle;
- one finding and outcome model;
- reusable validator types;
- profile-based validation selection;
- deterministic orchestration;
- human-review integration;
- non-compensatory blocking;
- explicit waivers;
- complete audit lineage;
- continuous revalidation;
- validator qualification and version control.

## 1.3 Supported Validation Targets

Validation targets include:

- one Knowledge Object revision;
- one claim;
- one relationship;
- one source;
- one Evidence Bundle;
- one object package;
- one batch;
- one release;
- one graph projection;
- one vector representation;
- one search document;
- one localized variant;
- one dependency set.

## 1.4 Validation Boundary

UKVF evaluates whether a target satisfies its declared contracts and evidence.

It does not independently establish universal truth beyond available evidence and authorized review.

## 1.5 System Impact

UKVF becomes the quality and integrity gate between AI generation and trusted KarirGPS knowledge.

---

# 2. Validation Philosophy

## 2.1 Validate Claims, Not Prose Appearance

Fluent or detailed writing is not evidence of correctness.

Validation focuses on explicit fields, claims, relationships, evidence, scope, and lineage.

## 2.2 Layered Assurance

No single validator can establish total quality.

Assurance is produced by independent validation layers with distinct responsibilities.

## 2.3 Evidence-Proportional Judgment

Validation strength must match:

- claim materiality;
- object risk;
- volatility;
- intended use;
- evidence quality;
- downstream impact.

## 2.4 Fail Closed at Critical Boundaries

Identity, fabricated evidence, rights, privacy, constitutional, and invalid Ontology failures block progression.

## 2.5 Explain Every Finding

A validation decision must be understandable without requiring access to private model reasoning.

## 2.6 Separate Detection from Remediation

Validators identify and classify defects.

Generators, editors, Stewards, or authorized remediation agents create corrected revisions.

## 2.7 Context Is Part of Truth

A claim without correct time, geography, jurisdiction, population, version, or scope may be invalid even when its wording appears factual.

## 2.8 Validation Is Continuous

A passed object can become invalid when:

- evidence is withdrawn;
- regulation changes;
- Ontology changes;
- dependencies are superseded;
- the source expires;
- new contradiction emerges.

## 2.9 Human Judgment at Ambiguous Boundaries

Automated validation must escalate when correctness depends on:

- domain interpretation;
- contested evidence;
- normative judgment;
- legal meaning;
- cultural localization;
- unresolved identity.

## 2.10 Conservative Publication, Visible Uncertainty

The framework prefers explicit limitation over unsupported completeness.

---

# 3. Validation Principles

## 3.1 Revision Specificity

A validation result applies to one Revision ID and declared dependency snapshot.

## 3.2 Profile Specificity

A result applies to one Validation Profile and intended readiness target.

## 3.3 Rule Traceability

Every finding references a registered Rule ID and Validator Version.

## 3.4 Independence

High-risk validation must include at least one path independent of the generating model or prompt lineage.

## 3.5 Idempotency

Revalidating identical inputs with the same deterministic validator version must produce the same result.

## 3.6 Reproducibility

AI-assisted validators must preserve enough metadata to reproduce the evaluation context and explain variance.

## 3.7 Least Authority

Validators can issue findings and outcomes but cannot publish, alter identity, or silently modify content.

## 3.8 Non-Compensatory Gates

Critical failures cannot be averaged away.

## 3.9 Explicit Indeterminacy

When evidence or authority is insufficient, the correct result is `indeterminate` or `human_review_required`.

## 3.10 No Circular Validation

A generated claim cannot validate itself, and one AI output cannot be treated as an independent source for another without governed provenance.

## 3.11 Source-Lineage Awareness

Multiple validators or citations derived from the same source lineage do not provide independent confirmation.

## 3.12 Minimal Exposure

Validators receive only data needed for their task, subject to access and rights controls.

## 3.13 Append-Only Findings

Historical findings remain available after remediation.

## 3.14 Machine and Human Readability

Validation outputs must support automation and expert review.

## 3.15 Stable Core, Contextual Validation

Intrinsic entity semantics and contextual assertions use different validation rules.

---

# 4. Validation Lifecycle

## 4.1 Validation Run States

### `planned`

A Validation Plan exists.

### `queued`

The run is eligible and waiting for execution.

### `running`

One or more validators are active.

### `awaiting_dependencies`

Required reference, source, policy, or validator result is unavailable.

### `awaiting_human_review`

Automated validation requires human judgment.

### `completed`

All required validators reached terminal outcomes.

### `failed`

The validation execution failed operationally.

### `cancelled`

The run was intentionally terminated.

### `superseded`

A newer run replaced this run before final use.

### `quarantined`

The run or its target is isolated due to integrity or security concerns.

### `expired`

The result is no longer valid due to time, dependency, or policy change.

## 4.2 Finding States

- open;
- acknowledged;
- remediation_pending;
- resolved;
- accepted_risk;
- waived;
- rejected;
- superseded;
- expired.

## 4.3 Validation Outcomes

### `passed`

All mandatory validators pass, with no warnings requiring disposition.

### `passed_with_warnings`

No blocker or error remains, but nonblocking findings exist.

### `failed`

One or more errors prevent the target readiness transition.

### `blocked`

One or more non-compensatory blockers exist.

### `human_review_required`

Automated validation cannot make a defensible determination.

### `quarantined`

Integrity, security, rights, provenance, or systemic contamination is suspected.

### `waived`

The run contains an authorized waiver disposition and otherwise meets the applicable gate.

A run with waivers SHOULD be represented as `passed_with_waivers` in implementations that support a more precise enum. The underlying finding remains visible.

### `indeterminate`

Evidence, dependency, or validator capability is insufficient.

## 4.4 Lifecycle Transitions

| From | To | Trigger | Required Artifact |
|---|---|---|---|
| planned | queued | Validation Orchestrator | approved Validation Plan |
| queued | running | Validator Worker | lease, input lock, run fingerprint |
| running | awaiting_dependencies | Validator or Orchestrator | unresolved dependency record |
| running | awaiting_human_review | Validator | escalation finding |
| running | completed | Orchestrator | all mandatory validator results |
| running | failed | Orchestrator | operational failure record |
| awaiting_dependencies | queued | Dependency Resolver | resolved dependency and changed-condition record |
| awaiting_human_review | running | Human Review Coordinator | review or adjudication result |
| completed | superseded | Orchestrator | newer run reference |
| completed | expired | Continuous Validation Service | invalidation trigger |
| any nonterminal | cancelled | authorized owner | cancellation record |
| any state | quarantined | Security, Auditor, or Validation Authority | critical integrity finding |

## 4.5 Validation Gate Mapping to UKPP

- `generated → validating`: Validation Plan created and inputs locked.
- `validating → under_review`: mandatory automated checks pass or require review without blockers.
- `validating → validation_failed`: one or more errors.
- `validating → quarantined`: critical integrity or security issue.
- `under_review → approved`: review and validation disposition pass.
- `approved → registering`: applicable UKVF profile remains valid.

---

# 5. Validation Levels

## 5.1 Level 0: Intake Precheck

Purpose:

- reject malformed or unauthorized inputs before full validation.

Includes:

- artifact presence;
- ID consistency;
- status check;
- contract version presence.

## 5.2 Level 1: Structural Validation

Includes:

- schema;
- field types;
- mandatory fields;
- object-kind contract;
- lifecycle fields;
- reference syntax.

## 5.3 Level 2: Semantic and Ontological Validation

Includes:

- Ontology class;
- identity;
- scope;
- relationships;
- meaning;
- entity-specific rules.

## 5.4 Level 3: Evidence and Factual Validation

Includes:

- claim-evidence mapping;
- source authenticity;
- citation;
- factual scope;
- freshness;
- hallucination detection.

## 5.5 Level 4: Cross-Context Validation

Includes:

- temporal;
- geographic;
- localization;
- numerical;
- statistical;
- cross-object consistency.

## 5.6 Level 5: Constitutional and Policy Validation

Includes:

- AI Constitution;
- privacy;
- fairness;
- licensing;
- prohibited uses;
- security and access policy.

## 5.7 Level 6: Human Expert Validation

Includes:

- domain review;
- legal review;
- localization review;
- evidence adjudication;
- identity adjudication.

## 5.8 Level 7: Publication Readiness Validation

Includes:

- quality;
- explainability;
- dependency closure;
- registration readiness;
- audit completeness;
- freshness;
- release-policy compliance.

## 5.9 Level Rule

A higher level does not replace lower levels.

Validation Profiles specify which levels and validators are mandatory.

---

# 6. Validation Profiles

## 6.1 Universal Core Profile

Required for every Knowledge Object:

- Structural Validator;
- KOS Validator;
- Ontology Validator;
- Identity or Subject Validator;
- Evidence Validator;
- Source Validator;
- Citation Validator;
- Semantic Consistency Validator;
- Policy Validator;
- Constitutional Validator;
- Lifecycle Validator;
- Audit Completeness Validator.

## 6.2 Entity Object Profile

Adds:

- adjacent-type identity validation;
- Relationship Validator;
- Duplicate Detector;
- Cross-Object Validator;
- Retrieval Validator;
- Reasoning Validator.

## 6.3 Contextual Assertion Profile

Adds:

- Temporal Validator;
- Geographic Validator;
- Numerical Validator when applicable;
- Statistical Validator when applicable;
- volatility and expiry rules;
- contradiction detection.

## 6.4 Volatile Knowledge Profile

Adds:

- strict freshness threshold;
- current-status verification;
- source expiry;
- continuous validation schedule;
- stale exposure blocker.

## 6.5 Regulated Knowledge Profile

Adds:

- Authority and Regulation validation;
- jurisdiction;
- effective period;
- amendment and supersession;
- specialist human review;
- non-waivable rights and legal-source rules.

## 6.6 Localization Profile

Adds:

- language;
- terminology authority;
- equivalence mapping;
- local legal name;
- unit and currency;
- local human review where risk is material.

## 6.7 Quantitative Profile

Adds:

- units;
- denominator;
- range;
- formula;
- precision;
- aggregation;
- sample;
- methodology;
- statistical validation.

## 6.8 High-Impact Reasoning Profile

For objects used in recommendation or decision systems.

Adds:

- stronger evidence threshold;
- independent semantic validation;
- explicit forbidden interpretations;
- confidence calibration;
- relationship strength validation;
- human review.

## 6.9 Retrieval and RAG Profile

Adds:

- summary quality;
- aliases;
- disambiguation;
- chunk safety;
- source linkage;
- access propagation;
- false-retrieval risk.

## 6.10 Publication Profile

Adds:

- no blocker or error;
- waiver check;
- license;
- freshness;
- audit;
- dependency closure;
- registration readiness;
- release compatibility.

## 6.11 Profile Composition

Multiple profiles may apply.

When rules conflict, the more restrictive rule applies unless governance explicitly resolves the conflict.

## 6.12 Profile Registry

Each profile has:

- Profile ID;
- version;
- applicable object kinds;
- trigger conditions;
- mandatory validators;
- scoring weights;
- blockers;
- waiver rules;
- validity period;
- owner.

---

# 7. Validation Categories

UKVF recognizes the following validation categories:

1. artifact integrity;
2. schema and contract;
3. Ontology;
4. identity;
5. scope;
6. relationship;
7. evidence;
8. source;
9. citation;
10. logical consistency;
11. semantic consistency;
12. cross-object consistency;
13. temporal;
14. geographic;
15. localization;
16. numerical;
17. statistical;
18. confidence;
19. contradiction;
20. hallucination;
21. duplicate;
22. policy;
23. constitutional;
24. privacy and security;
25. explainability;
26. retrieval;
27. reasoning readiness;
28. lifecycle and version;
29. dependency;
30. quality and publication readiness.

Each finding MUST belong to one primary category and MAY include secondary categories.

---

# 8. Validation Pipeline

## 8.1 Pipeline Stages

1. create Validation Plan;
2. lock target and dependency snapshot;
3. resolve applicable profiles;
4. validate artifact integrity;
5. run structural validators;
6. run Ontology and identity validators;
7. run relationship and entity-specific validators;
8. run evidence, source, and citation validators;
9. run logical, semantic, contradiction, and hallucination validators;
10. run contextual validators;
11. run policy and constitutional validators;
12. run cross-object validators;
13. calculate provisional scores;
14. evaluate blockers and warnings;
15. escalate to human review if required;
16. produce final Validation Report;
17. emit UKPP transition recommendation;
18. register validation metadata;
19. schedule revalidation.

## 8.2 Dependency Ordering

A validator may depend on another result.

Examples:

- Citation Validation depends on Source Resolution.
- Relationship Validation depends on Ontology and Identity.
- Confidence Assessment depends on Evidence, Source, and Contradiction results.
- Publication Readiness depends on all mandatory validators.

## 8.3 Parallel Execution

Independent validators MAY run in parallel.

Validators must use the same locked target revision and dependency snapshot.

## 8.4 Short-Circuiting

A critical blocker MAY stop expensive downstream validators when:

- the skipped validations cannot change the blocking outcome;
- skipped validators are recorded;
- security or forensic validators still run when needed.

## 8.5 Validation Fingerprint

Each run records:

- target Revision ID;
- Validation Profile versions;
- Validator IDs and versions;
- Ontology version;
- KOS version;
- evidence and source snapshot;
- policy versions;
- locale;
- model versions;
- reference snapshot;
- run configuration.

## 8.6 Deterministic and AI-Assisted Stages

Deterministic validators SHOULD run before AI-assisted validators to reduce ambiguity and cost.

## 8.7 Final Aggregation

The Validation Orchestrator aggregates findings according to:

- severity;
- profile;
- non-compensatory blockers;
- waiver status;
- required human review;
- score thresholds;
- dependency validity.

---

# 9. Schema Validation

## 9.1 Objective

Verify that the target conforms to KOS structure, field requirements, object-kind contract, and serialization-independent data types.

## 9.2 Rules

- mandatory universal fields exist;
- object-kind fields exist;
- entity-specific fields exist;
- conditional fields are present when triggered;
- enumerations are valid;
- IDs use valid namespaces;
- dates and versions are parseable;
- references follow contract;
- forbidden fields are absent;
- Draft does not claim Active authority.

## 9.3 Pass Criteria

No missing mandatory field, invalid type, or forbidden field.

## 9.4 Failure Impact

- missing identity fields: blocker;
- malformed mandatory field: error or blocker;
- optional formatting issue: warning.

## 9.5 Recovery

Create a corrected revision or generation attempt.

Validator must not rewrite the object silently.

---

# 10. Ontology Validation

## 10.1 Objective

Verify semantic compatibility with the declared Ontology version.

## 10.2 Rules

- entity type exists;
- Ontology class exists;
- parent class and inheritance are valid;
- attributes are allowed;
- required Ontology attributes exist;
- controlled vocabularies are valid;
- category mixing is absent;
- predicates are defined;
- source and target types are allowed;
- no unauthorized extension exists.

## 10.3 Pass Criteria

All material classes, attributes, and predicates resolve under the locked Ontology.

## 10.4 Failure Impact

Invalid class or unauthorized predicate is a blocker.

## 10.5 Recovery

Return to generator, Ontology resolution, or Ontology governance.

---

# 11. Identity Validation

## 11.1 Objective

Verify that the object represents the correct and unique semantic subject.

## 11.2 Rules

- Entity ID resolves or is validly reserved;
- canonical name and definition align;
- object describes one subject;
- concept, subtype, instance, offering, and label are distinguished;
- aliases are not false equivalences;
- adjacent entity types are separated;
- external identifiers do not conflict;
- merge or split requirements are absent or governed;
- identity confidence meets profile threshold.

## 11.3 Pass Criteria

One stable identity with no unresolved exact duplicate or type conflict.

## 11.4 Failure Impact

Identity error is a non-waivable blocker.

## 11.5 Recovery

Identity Steward review, merge/split process, or corrected object revision.

---

# 12. Relationship Validation

## 12.1 Objective

Verify that each relationship is semantically valid, evidence-supported, correctly directed, and properly scoped.

## 12.2 Rules

- predicate exists;
- source and target resolve;
- source and target types are permitted;
- direction is correct;
- cardinality is valid;
- relationship strength is proportional;
- requirement level is present when applicable;
- context is present when required;
- evidence and confidence exist;
- inverse relationship is compatible;
- duplicate or contradictory edges are dispositioned;
- no graph inflation.

## 12.3 Pass Criteria

Every mandatory relationship passes; optional invalid relationships are removed through remediation.

## 12.4 Failure Impact

Invalid mandatory relationship: error or blocker. Unsupported optional edge: error.

## 12.5 Recovery

Correct predicate, target, scope, evidence, or relationship strength in a new revision.

---

# 13. Evidence Validation

## 13.1 Objective

Verify that material claims are supported by adequate, relevant, independent, and correctly scoped evidence.

## 13.2 Rules

- every material claim has evidence references;
- evidence statements resolve;
- evidence scope supports claim scope;
- claim class is appropriate;
- evidence is direct enough;
- source lineage is understood;
- conflicts are preserved;
- missing evidence states are explicit;
- evidence freshness matches volatility;
- methodology is sufficient where applicable;
- evidence use complies with rights.

## 13.3 Pass Criteria

All mandatory claims have sufficient evidence for the intended profile.

## 13.4 Failure Impact

Unsupported material claim: blocker. Weak non-core evidence: warning or error.

## 13.5 Recovery

Narrow claim, collect evidence, downgrade confidence, externalize context, or remove unsupported claim.

---

# 14. Source Validation

## 14.1 Objective

Verify source identity, authenticity, authority, accessibility, scope, rights, and status.

## 14.2 Rules

- Source ID resolves;
- publisher or author identified;
- title and locator match;
- publication or issuance date exists;
- source content supports the normalized evidence;
- source is not withdrawn or superseded without context;
- primary or secondary status is correct;
- authority and methodology are assessed;
- licensing and access restrictions are recorded;
- conflict of interest is visible;
- source is not an AI-generated citation without provenance.

## 14.3 Pass Criteria

Every mandatory source is authentic, traceable, usable, and appropriately classified.

## 14.4 Failure Impact

Fabricated or nonresolving source: blocker and possible quarantine.

## 14.5 Recovery

Replace source, correct metadata, obtain rights, or invalidate dependent claims.

---

# 15. Citation Validation

## 15.1 Objective

Verify that citations accurately identify and support the claims to which they are attached.

## 15.2 Rules

- citation resolves to Source ID;
- cited location exists when location is required;
- citation is attached to the correct claim;
- citation wording does not overstate the source;
- citation date and version are correct;
- quoted text is accurate and rights-compliant;
- secondary citation is not presented as primary;
- citation is not circular;
- one citation is not reused for unrelated claims without support;
- inaccessible citations are dispositioned.

## 15.3 Pass Criteria

Every mandatory citation is accurate, relevant, resolvable, and properly scoped.

## 15.4 Failure Impact

Fabricated citation: blocker. Misplaced material citation: error.

## 15.5 Recovery

Correct citation mapping, replace citation, or revise the claim.

---

# 16. Logical Consistency Validation

## 16.1 Objective

Detect formal and practical contradictions among fields, claims, states, dates, conditions, and implications.

## 16.2 Rules

- mutually exclusive states do not coexist;
- dates follow lifecycle order;
- ranges are coherent;
- conditional fields satisfy their triggers;
- conclusions do not contradict premises;
- requirement levels do not conflict;
- successor and predecessor links are coherent;
- confidence does not contradict blocker status;
- no impossible cardinality;
- no circular production dependency.

## 16.3 Pass Criteria

No unresolved logical contradiction affects material meaning.

## 16.4 Failure Impact

Material contradiction: error or blocker.

## 16.5 Recovery

Correct the conflicting fields or escalate when source conflict is the cause.

---

# 17. Semantic Consistency Validation

## 17.1 Objective

Verify that all parts of the object describe the same meaning, scope, and entity boundary.

## 17.2 Rules

- definition aligns with purpose and scope;
- attributes align with entity type;
- relationships align with definition;
- aliases preserve meaning;
- localizations preserve scope;
- evidence statements support the intended semantics;
- stable core does not contain contextual contamination;
- fields do not drift into adjacent entity types;
- summary does not add claims absent from the structured body.

## 17.3 Pass Criteria

The object has one coherent semantic interpretation.

## 17.4 Failure Impact

Core semantic drift: blocker or error.

## 17.5 Recovery

Revise definition, fields, relationships, or entity classification.

---

# 18. Cross-Object Validation

## 18.1 Objective

Verify consistency between the target revision and the active or designated knowledge snapshot.

## 18.2 Rules

- referenced objects exist;
- entity IDs are unique;
- equivalent claims do not conflict without status;
- inverse relationships reconcile;
- taxonomy placement is coherent;
- aliases do not collide improperly;
- active revisions are not duplicated;
- successor and predecessor links resolve;
- local mappings are consistent;
- shared source mappings do not create inconsistent interpretations;
- aggregate or package content matches component revisions.

## 18.3 Pass Criteria

No unresolved cross-object defect blocks the target profile.

## 18.4 Failure Impact

Duplicate identity or incompatible active truth: blocker.

## 18.5 Recovery

Reconcile objects, create contextual variants, supersede, merge, split, or adjudicate.

---

# 19. Temporal Validation

## 19.1 Objective

Verify dates, effective periods, freshness, expiry, supersession, and historical applicability.

## 19.2 Rules

- publication, effective, review, and expiry dates are coherent;
- current claims use current evidence;
- historical claims retain periods;
- projections include horizon;
- regulatory claims use effective period;
- no unexplained overlap of mutually exclusive statuses;
- stale objects are not treated as current;
- source and evidence dates meet volatility rules;
- superseded data is marked.

## 19.3 Pass Criteria

All material claims are temporally scoped and fresh enough for intended use.

## 19.4 Failure Impact

Stale high-impact claim: blocker. Missing noncritical date: warning or error.

## 19.5 Recovery

Refresh evidence, add temporal scope, expire the claim, or create historical variant.

---

# 20. Geographic Validation

## 20.1 Objective

Verify geographic, jurisdictional, market, and regional applicability.

## 20.2 Rules

- geography is explicit where material;
- local evidence is not generalized globally;
- jurisdiction-specific rules remain scoped;
- geographic hierarchy is valid;
- place names and IDs resolve;
- market and administrative boundaries are not conflated;
- multi-region claims identify coverage;
- currency and unit context match geography;
- no false international equivalence.

## 20.3 Pass Criteria

The claim's geographic scope is explicit and supported.

## 20.4 Failure Impact

Material geographic overgeneralization: error or blocker.

## 20.5 Recovery

Narrow claim, add context, create regional variant, or collect broader evidence.

---

# 21. Localization Validation

## 21.1 Objective

Verify language identity, terminology, translation quality, semantic equivalence, and local framework compatibility.

## 21.2 Rules

- locale is declared;
- canonical and display labels are separated;
- translation status is explicit;
- terminology source is identified;
- local legal or official names are accurate;
- aliases are typed;
- transliteration is correct;
- local framework mapping is explicit;
- units, currencies, and date formats are appropriate;
- translation does not broaden or narrow scope;
- machine translation is not marked human-approved without review.

## 21.3 Pass Criteria

Localized representation preserves semantic identity and local correctness.

## 21.4 Failure Impact

Identity-changing localization: blocker. Minor wording issue: warning.

## 21.5 Recovery

Correct translation, downgrade approval status, or request local reviewer.

---

# 22. Numerical Validation

## 22.1 Objective

Verify correctness and interpretability of quantitative values.

## 22.2 Rules

- numeric type is valid;
- unit is present;
- currency and base year are present when applicable;
- denominator is explicit;
- percentage range is valid;
- min, max, and average are coherent;
- formula is documented;
- rounding and precision are appropriate;
- missing values are distinguished from zero;
- aggregation does not double-count;
- time and geography are attached;
- derived values reproduce from inputs within tolerance.

## 22.3 Pass Criteria

Every material number is reproducible, scoped, and unit-complete.

## 22.4 Failure Impact

Incorrect material calculation: error or blocker.

## 22.5 Recovery

Correct value, formula, unit, denominator, or source.

---

# 23. Statistical Validation

## 23.1 Objective

Verify statistical claims, methods, samples, uncertainty, and interpretation.

## 23.2 Rules

- population and sample are defined;
- sampling method is identified;
- sample size is adequate for stated inference;
- statistic and estimator are named;
- uncertainty or confidence interval is included when required;
- p-values are not treated as effect size;
- correlation is not presented as causation;
- weighting and missing-data treatment are documented;
- subgroup claims have sufficient support;
- model assumptions are disclosed;
- projection is distinguished from observation;
- time series uses comparable periods;
- source methodology is reproducible enough for intended use.

## 23.3 Pass Criteria

The statistical statement is methodologically supported and not overstated.

## 23.4 Failure Impact

Misleading material inference: blocker or error.

## 23.5 Recovery

Narrow interpretation, add uncertainty, correct method, or remove the claim.

---

# 24. Confidence Assessment

## 24.1 Objective

Assess whether confidence is calibrated to evidence, conflict, scope, and uncertainty.

## 24.2 Confidence Dimensions

- identity confidence;
- evidence confidence;
- claim confidence;
- relationship confidence;
- localization confidence;
- numerical confidence;
- coverage confidence;
- object confidence.

## 24.3 Rules

- confidence uses approved vocabulary;
- basis is explicit;
- no claim exceeds evidence ceiling;
- conflict lowers affected confidence;
- missing evidence yields low or indeterminate confidence;
- object confidence is constrained by mandatory dimensions;
- model self-confidence is not evidence;
- confidence is not derived from prose length;
- confidence changes are traceable.

## 24.4 Pass Criteria

Confidence is proportionate, scoped, and explainable.

## 24.5 Failure Impact

Overconfident high-impact object: error or blocker.

## 24.6 Recovery

Recalibrate confidence, narrow scope, add evidence, or require human review.

---

# 25. Contradiction Detection

## 25.1 Objective

Detect contradictions within the object, across sources, and against the designated knowledge snapshot.

## 25.2 Contradiction Classes

- direct factual contradiction;
- temporal contradiction;
- geographic contradiction;
- definition contradiction;
- relationship contradiction;
- regulatory contradiction;
- numerical contradiction;
- source-method contradiction;
- apparent contradiction explained by context.

## 25.3 Rules

- compare normalized propositions;
- consider negation and qualifiers;
- compare scope, time, geography, and subject;
- retain both sides and evidence;
- do not mark contextual difference as contradiction;
- distinguish unresolved conflict from disproven claim.

## 25.4 Pass Criteria

No unexplained material contradiction remains.

## 25.5 Failure Impact

Critical unresolved contradiction: human review or blocker.

## 25.6 Recovery

Add context, mark disputed, split assertions, update source, or adjudicate.

---

# 26. Hallucination Detection

## 26.1 Objective

Detect claims, citations, IDs, relationships, or metadata not grounded in authorized inputs or canonical references.

## 26.2 Detection Methods

- claim-to-evidence coverage;
- source and citation resolution;
- ID registry lookup;
- relationship target resolution;
- unsupported named-entity detection;
- comparison with input package;
- generated detail anomaly detection;
- citation-title-content mismatch;
- impossible metadata detection;
- cross-model or deterministic verification where appropriate.

## 26.3 Rules

A statement is high-risk hallucination when it:

- lacks required evidence;
- invents a source or locator;
- invents an Entity ID;
- invents legal or regulatory authority;
- asserts an unprovided quantitative value;
- creates an unsupported relationship;
- presents model memory as source;
- fabricates a quote.

Plausibility alone does not clear a hallucination finding.

## 26.4 Pass Criteria

All material generated content is traceable to allowed inputs, evidence, or clearly labeled synthesis.

## 26.5 Failure Impact

Fabricated source, ID, or authority: blocker and quarantine candidate.

## 26.6 Recovery

Remove unsupported content, regenerate from locked inputs, investigate model lane, and review affected cohort.

---

# 27. Duplicate Detection

## 27.1 Objective

Detect duplicate objects, identities, claims, relationships, and derived representations.

## 27.2 Duplicate Classes

- exact identity duplicate;
- alias duplicate;
- localized duplicate;
- subtype mistaken as duplicate;
- broader or narrower concept;
- near-duplicate content;
- duplicate claim;
- duplicate relationship;
- duplicate source lineage;
- duplicate registration artifact.

## 27.3 Rules

- compare stable IDs and external identifiers;
- normalize names and aliases;
- compare definitions and boundaries;
- compare Ontology type;
- compare time and geography;
- distinguish same entity from related entities;
- detect copied content across unrelated objects;
- detect repeated active revisions.

## 27.4 Pass Criteria

No unresolved exact duplicate or duplicate active effect remains.

## 27.5 Failure Impact

Duplicate semantic identity: blocker.

## 27.6 Recovery

Reuse existing object, merge, map alias, split subtype, supersede, or remove duplicate artifact.

---

# 28. Policy Validation

## 28.1 Objective

Verify compliance with current production, access, rights, retention, review, and registration policies.

## 28.2 Rules

- correct Validation Profile used;
- correct reviewer level assigned;
- allowed model provider used;
- source rights permit processing;
- access classification is correct;
- retention policy is assigned;
- prohibited uses are represented;
- registration policy is followed;
- release channel is permitted;
- exception and waiver records are valid;
- policy versions are current.

## 28.3 Pass Criteria

No applicable policy violation remains.

## 28.4 Failure Impact

Security, rights, or prohibited-use violation: blocker.

## 28.5 Recovery

Correct policy metadata, change processing lane, obtain authorization, or reject.

---

# 29. AI Constitution Compliance

## 29.1 Objective

Verify that the object and its intended use comply with the AI Constitution.

## 29.2 Rules

- evidence over assumption;
- uncertainty visible;
- no deterministic human labeling;
- no protected-attribute stereotype;
- no prohibited sensitive inference;
- no manipulative ranking or commercial bias;
- no user-specific judgment in universal knowledge;
- human agency preserved;
- local context respected;
- causality not overstated;
- privacy and dignity protected;
- contestability and correction remain possible.

## 29.3 Pass Criteria

The object contains no constitutional violation and its intended use is permitted.

## 29.4 Failure Impact

Constitutional violation is non-waivable blocker.

## 29.5 Recovery

Remove or revise prohibited content, narrow purpose, or reject the object.

---

# 30. Explainability Validation

## 30.1 Objective

Verify that authorized users and reviewers can understand the object's meaning, limits, evidence, relationships, and confidence.

## 30.2 Rules

- definition is clear;
- scope and exclusions are explicit;
- jargon is defined or controlled;
- material relationships have rationale;
- confidence basis is visible;
- uncertainty and conflict are visible;
- source and evidence paths are inspectable;
- scores are not presented without explanation;
- forbidden interpretations exist for high-risk objects;
- no hidden assumptions are required.

## 30.3 Pass Criteria

A qualified reviewer can understand and audit the object without reconstructing missing logic.

## 30.4 Failure Impact

High-impact unexplained object: error or human review required.

## 30.5 Recovery

Add scope, rationale, evidence mapping, limitations, or explanatory metadata.

---

# 31. Human Review Integration

## 31.1 Human Review Triggers

Human review is mandatory when:

- profile requires it;
- identity confidence is insufficient;
- evidence conflicts materially;
- legal or regulatory meaning is involved;
- localization equivalence is uncertain;
- high-impact reasoning use is intended;
- statistical interpretation is complex;
- automated validators disagree materially;
- waiver is requested;
- a critical warning requires judgment.

## 31.2 Review Roles

- Domain Reviewer;
- Evidence Reviewer;
- Ontology Steward;
- Localization Reviewer;
- Statistical Reviewer;
- Legal or Regulatory Reviewer;
- Constitutional Reviewer;
- Adjudicator.

## 31.3 Review Package

Contains:

- target revision;
- Validation Plan;
- findings;
- evidence map;
- source records;
- contradictions;
- confidence assessment;
- proposed remediation;
- prior revision;
- intended use.

## 31.4 Review Decisions

- confirm pass;
- confirm warning;
- require remediation;
- reject;
- adjudicate conflict;
- grant eligible waiver;
- quarantine;
- request additional evidence.

## 31.5 Human Review Independence

High-risk review should be independent from generation and source sponsorship.

## 31.6 Review Record

Includes:

- Review ID;
- reviewer identity and qualification;
- scope;
- decision;
- findings addressed;
- evidence considered;
- conflict of interest;
- timestamp;
- expiry or review due;
- signature or authority reference.

---

# 32. Validation Scoring

## 32.1 Purpose

Scores summarize quality dimensions but do not replace rule outcomes.

## 32.2 Score Dimensions

- structural compliance;
- Ontology compliance;
- identity integrity;
- relationship quality;
- evidence quality;
- source quality;
- citation quality;
- logical consistency;
- semantic consistency;
- temporal quality;
- geographic quality;
- localization quality;
- numerical quality;
- statistical quality;
- confidence calibration;
- explainability;
- auditability;
- publication readiness.

## 32.3 Score Scale

Recommended normalized scale:

- 0–19: unacceptable;
- 20–39: severely deficient;
- 40–59: insufficient;
- 60–74: conditionally usable with remediation;
- 75–89: strong;
- 90–100: excellent.

Profile-specific interpretation may vary.

## 32.4 Score Computation

Each score records:

- method version;
- applicable rules;
- numerator and denominator or calculation logic;
- unassessed dimensions;
- uncertainty;
- confidence.

## 32.5 Aggregate Score

Aggregate scores may be weighted by profile.

An aggregate score MUST NOT be calculated as if non-applicable or unassessed dimensions were passes.

## 32.6 Score and Blocker Rule

Any blocker overrides any score.

## 32.7 Minimum Thresholds

Profiles define minimum dimension and aggregate thresholds.

## 32.8 Score Status

Scores are:

- provisional before human review;
- validated after required review;
- expired when dependencies change.

---

# 33. Validation Severity Levels

## 33.1 Blocker

Prevents validation, registration, or publication.

Examples:

- fabricated source;
- invalid identity;
- invalid Ontology class;
- rights violation;
- constitutional violation;
- unresolved duplicate;
- missing mandatory evidence;
- critical privacy issue.

## 33.2 Error

Prevents the target lifecycle transition but is normally remediable.

Examples:

- unsupported relationship;
- stale material claim;
- incorrect number;
- missing mandatory contextual scope.

## 33.3 Warning

Does not block the current transition but must be visible and may restrict readiness.

Examples:

- incomplete optional localization;
- weak non-core evidence;
- limited source diversity;
- minor terminology ambiguity.

## 33.4 Information

Nonblocking observation or recommendation.

## 33.5 Critical Security Finding

A special blocker requiring quarantine and incident handling.

## 33.6 Severity Assignment

Severity depends on:

- materiality;
- intended use;
- risk profile;
- scope;
- reversibility;
- downstream impact;
- likelihood of harm;
- detectability.

---

# 34. Blocking Rules

## 34.1 Universal Non-Waivable Blockers

- fabricated or deliberately misrepresented source;
- unresolved semantic identity conflict;
- invalid Ontology class;
- unauthorized predicate affecting core semantics;
- duplicate canonical entity;
- missing mandatory evidence for material claim;
- prohibited rights or licensing use;
- personal-data or privacy violation;
- AI Constitution violation;
- corrupted provenance chain;
- unauthorized publication state;
- revision overwrite;
- critical security incident.

## 34.2 Profile-Specific Blockers

Profiles may add blockers for:

- stale regulatory data;
- invalid statistical inference;
- missing local authority;
- unresolvable relationship dependency;
- unsupported quantitative value;
- missing specialist review.

## 34.3 Blocker Propagation

A blocker in a dependency may block the target when the target materially relies on it.

## 34.4 Blocker Resolution

A blocker is resolved only through:

- corrected revision;
- authoritative identity decision;
- new evidence;
- rights clearance;
- policy correction;
- valid dependency replacement;
- formal rejection or quarantine.

Changing severity without evidence is prohibited.

---

# 35. Warning Rules

## 35.1 Warning Requirements

Every warning must include:

- why it is nonblocking;
- affected scope;
- potential impact;
- remediation recommendation;
- readiness restriction;
- expiry or review condition if applicable.

## 35.2 Warning Accumulation

Several warnings may collectively become an error when they undermine a mandatory quality dimension.

## 35.3 Warning Visibility

Warnings must propagate to:

- Human Review;
- Quality Assurance;
- registration metadata;
- publication release notes when material;
- downstream reasoning constraints.

## 35.4 Warning Closure

Warnings may be:

- resolved;
- accepted risk;
- converted to error;
- expired;
- superseded.

---

# 36. Waiver Mechanism

## 36.1 Purpose

Permit a controlled exception for eligible findings without erasing the finding.

## 36.2 Non-Waivable Findings

The following cannot be waived:

- fabricated source;
- invalid identity;
- invalid Ontology class;
- privacy violation;
- AI Constitution violation;
- prohibited rights use;
- critical security finding;
- deliberate audit manipulation.

## 36.3 Waiver Request

Contains:

- Waiver ID;
- finding;
- rule;
- justification;
- scope;
- risk;
- compensating controls;
- requester;
- approver;
- effective period;
- expiry;
- affected readiness;
- monitoring requirement.

## 36.4 Waiver Authority

Authority depends on:

- severity;
- domain;
- legal or security impact;
- publication channel;
- object risk.

## 36.5 Waiver Outcome

- granted;
- denied;
- modified;
- expired;
- revoked.

## 36.6 Waiver Effect

A waiver changes the disposition of an eligible finding.

It does not:

- delete the finding;
- prove correctness;
- change source quality;
- permit prohibited use;
- apply beyond declared scope.

## 36.7 Waiver Revalidation

Expired or context-invalid waivers trigger revalidation.

---

# 37. Validation Reports

## 37.1 Report Types

- Validator Result Report;
- Consolidated Validation Report;
- Human Review Report;
- Waiver Report;
- Cross-Object Consistency Report;
- Release Validation Report;
- Continuous Validation Alert;
- Revalidation Comparison Report.

## 37.2 Consolidated Report Structure

1. report identity;
2. target identity and revision;
3. Validation Profile;
4. run fingerprint;
5. overall outcome;
6. executive finding summary;
7. validator results;
8. blockers;
9. errors;
10. warnings;
11. waivers;
12. human-review requirements;
13. scores;
14. confidence;
15. dependency status;
16. remediation plan;
17. UKPP transition recommendation;
18. validity period;
19. audit references.

## 37.3 Report Constraints

Reports must not:

- claim publication authority;
- hide failed validators;
- omit waived findings;
- expose private chain of thought;
- copy restricted source content unnecessarily.

## 37.4 Transition Recommendation

Allowed recommendations:

- proceed to human review;
- proceed to approval;
- return for remediation;
- reject;
- quarantine;
- defer;
- revalidate after dependency resolution.

---

# 38. Validation Metadata

Every Validation Run MUST record:

- Validation Run ID;
- target Object ID;
- Entity ID if applicable;
- Revision ID;
- Production Case ID;
- Validation Profile IDs and versions;
- Validator IDs and versions;
- run state;
- run outcome;
- start and completion times;
- actor or service;
- target integrity reference;
- Ontology version;
- KOS version;
- UEGF or object-framework version;
- evidence snapshot;
- source snapshot;
- reference snapshot;
- policy versions;
- locale;
- model versions;
- findings;
- scores;
- waivers;
- human reviews;
- validity period;
- expiry triggers;
- correlation and causation IDs;
- access classification;
- audit references.

---

# 39. Validation APIs — Conceptual

## 39.1 API Principles

Conceptual APIs may be implemented as commands, services, workflow tasks, or events.

Mutating operations require:

- authorization;
- idempotency key;
- expected state or version;
- correlation ID;
- typed result;
- audit metadata.

## 39.2 Validation Plan Operations

### Create Validation Plan

Inputs:

- target revision;
- intended transition;
- readiness target;
- risk;
- applicable profiles.

Output:

- Validation Plan ID;
- mandatory validators;
- dependencies;
- human-review requirements.

### Resolve Validation Profiles

Returns applicable profiles and precedence.

## 39.3 Run Operations

### Start Validation Run

Creates locked run fingerprint.

### Submit Validator Result

Adds one immutable validator result.

### Complete Validation Run

Aggregates outcomes.

### Cancel Validation Run

Cancels an eligible nonterminal run.

### Revalidate Target

Creates a new run linked to prior results.

## 39.4 Finding Operations

### Raise Finding

Creates finding.

### Acknowledge Finding

Records responsible owner.

### Resolve Finding

Links corrected revision or evidence.

### Accept Risk

Records an allowed risk acceptance.

### Request Waiver

Starts waiver process.

## 39.5 Human Review Operations

### Request Human Review

Creates review assignment.

### Submit Human Decision

Records expert disposition.

### Request Adjudication

Escalates conflict.

## 39.6 Registry Operations

### Register Validator

Adds validator metadata.

### Qualify Validator Version

Records qualification.

### Deprecate Validator

Prevents new runs.

### Register Validation Profile

Adds or revises profile.

## 39.7 Query Operations

- get Validation Run;
- get findings;
- get validator result;
- get active waivers;
- get validation lineage;
- get expiration triggers;
- get revalidation status;
- get profile requirements;
- get validator qualification.

## 39.8 API Error Contract

Includes:

- error code;
- message;
- retryability;
- affected IDs;
- current state;
- expected state;
- remediation;
- correlation ID.

---

# 40. Validation Events

## 40.1 Event Envelope

Every event includes:

- Event ID;
- event type;
- schema version;
- event time;
- producer;
- Validation Run ID;
- target IDs;
- correlation ID;
- causation ID;
- actor;
- profile;
- access class;
- payload reference;
- integrity reference.

## 40.2 Core Events

### Planning

- ValidationPlanCreated;
- ValidationProfilesResolved;
- ValidationDependencyDeclared.

### Execution

- ValidationQueued;
- ValidationStarted;
- ValidatorStarted;
- ValidatorCompleted;
- ValidatorFailed;
- ValidationAwaitingDependency.

### Findings

- ValidationFindingRaised;
- ValidationFindingAcknowledged;
- ValidationFindingResolved;
- ValidationFindingEscalated.

### Human Review

- HumanReviewRequired;
- HumanReviewAssigned;
- HumanReviewCompleted;
- AdjudicationRequested;
- AdjudicationCompleted.

### Waivers

- WaiverRequested;
- WaiverGranted;
- WaiverDenied;
- WaiverExpired;
- WaiverRevoked.

### Outcomes

- ValidationPassed;
- ValidationPassedWithWarnings;
- ValidationFailed;
- ValidationBlocked;
- ValidationQuarantined;
- ValidationExpired;
- RevalidationRequired.

### Registry and Governance

- ValidatorRegistered;
- ValidatorQualified;
- ValidatorDeprecated;
- ValidationProfileUpdated;
- ValidationRuleUpdated.

## 40.3 Delivery Semantics

Consumers must support at-least-once delivery and idempotent effects.

---

# 41. Validation Logs

## 41.1 Log Classes

- orchestration log;
- validator execution log;
- finding log;
- dependency log;
- human-review log;
- waiver log;
- registry log;
- qualification log;
- continuous-validation log;
- security log;
- audit log;
- performance log.

## 41.2 Log Entry Contract

Each entry records:

- Log Event ID;
- timestamp;
- severity;
- component;
- actor;
- Validation Run ID;
- Validator ID;
- target IDs;
- operation;
- outcome;
- affected path;
- error reference;
- artifact references;
- correlation and causation IDs.

## 41.3 Prohibited Log Content

Logs must not contain:

- private chain of thought;
- secrets;
- credentials;
- unnecessary personal data;
- unrestricted source bodies;
- hidden prompts when restricted;
- unredacted protected information.

## 41.4 Integrity

Logs are append-only from an audit perspective.

Corrections are new entries.

---

# 42. Validation Audit Trail

## 42.1 Audit Chain

Target Revision → Validation Plan → Validator Inputs → Validator Results → Findings → Human Review → Waivers → Consolidated Outcome → UKPP Transition.

## 42.2 Audit Questions

The system must answer:

- which profile applied;
- which validators ran;
- which versions were used;
- what evidence and reference snapshot were used;
- what findings were raised;
- who reviewed or waived them;
- why the object passed or failed;
- when the result expires;
- what changed during revalidation.

## 42.3 Audit Integrity

Audit artifacts must be:

- immutable;
- time-stamped;
- actor-attributed;
- integrity-protected;
- access-controlled;
- retained according to policy.

## 42.4 No Private Reasoning Requirement

Auditability is achieved through:

- rules;
- evidence;
- findings;
- rationale;
- decisions;
- metadata.

Private chain of thought is neither required nor stored.

---

# 43. Validation Metrics

## 43.1 Operational Metrics

- validation throughput;
- run latency;
- validator latency;
- queue depth;
- failure rate;
- retry rate;
- dependency wait time;
- human-review wait time.

## 43.2 Quality Metrics

- first-pass validation rate;
- blocker rate;
- error rate;
- warning rate;
- hallucination finding rate;
- fabricated-source rate;
- duplicate detection rate;
- contradiction rate;
- evidence coverage;
- citation accuracy;
- confidence-calibration error;
- cross-object inconsistency rate.

## 43.3 Governance Metrics

- waiver count;
- waiver age;
- waiver expiry compliance;
- non-waivable violation attempts;
- validator qualification coverage;
- deprecated validator use;
- unresolved audit findings.

## 43.4 Effectiveness Metrics

- false-positive rate;
- false-negative rate;
- reviewer overturn rate;
- post-publication defect rate;
- stale exposure rate;
- downstream incident rate;
- correction latency.

## 43.5 Drift Metrics

- validator output drift;
- model-lane drift;
- profile drift;
- rule-distribution drift;
- source-quality drift;
- localization drift.

## 43.6 Metric Guardrails

Metrics must not incentivize:

- fewer findings;
- lower severities;
- skipped validation;
- excessive waivers;
- avoidance of human review;
- inflated scores.

---

# 44. Validation Governance

## 44.1 Governance Roles

- UKVF Owner;
- Validation Architecture Board;
- Validator Owner;
- Validation Profile Owner;
- Rule Steward;
- Ontology Steward;
- KOS Owner;
- Evidence Governance Reviewer;
- Constitutional Reviewer;
- Security and Compliance Reviewer;
- Domain Reviewer;
- Production Auditor.

## 44.2 Governance Decisions

Required for:

- new validator type;
- new profile;
- rule changes;
- severity changes;
- waiver eligibility;
- model qualification;
- validator deprecation;
- scoring changes;
- release-gate changes;
- non-waivable blocker changes.

## 44.3 Rule Registry

Each rule has:

- Rule ID;
- name;
- description;
- category;
- severity;
- applicability;
- validator owner;
- version;
- effective date;
- deprecation status;
- waiver eligibility;
- remediation guidance;
- references.

## 44.4 Change Control

A change proposal must include:

- reason;
- affected validators and profiles;
- compatibility;
- false-positive and false-negative risk;
- migration;
- regression tests;
- rollback;
- effective date.

## 44.5 Governance Independence

Audit and Security authorities may suspend validators, profiles, or production lanes when integrity is at risk.

---

# 45. Validator Registry

## 45.1 Purpose

The Validator Registry is the authoritative catalog of validators available to UKVF.

## 45.2 Registry Entry

Each validator entry includes:

- Validator ID;
- name;
- type;
- version;
- owner;
- implementation class;
- deterministic or AI-assisted status;
- supported object kinds;
- supported entity types;
- supported Ontology versions;
- supported KOS versions;
- input contract;
- output contract;
- rules implemented;
- profiles supported;
- dependencies;
- severity capability;
- waiver behavior;
- qualification status;
- performance limits;
- security class;
- active, deprecated, or suspended status;
- known limitations.

## 45.3 Validator Selection

The Orchestrator selects validators using:

- Validation Profile;
- object kind;
- entity type;
- risk;
- locale;
- quantitative content;
- regulated status;
- target readiness;
- dependency availability.

## 45.4 Registry Constraints

An unregistered or unqualified validator cannot issue authoritative production findings.

## 45.5 Validator Suspension

A validator may be suspended for:

- drift;
- security issue;
- excessive false positives;
- excessive false negatives;
- version incompatibility;
- audit failure;
- model-provider incident.

---

# 46. Validator Versioning

## 46.1 Independent Versioning

Validator rules, model, prompts, thresholds, and implementation are versioned.

## 46.2 Version Classes

### Patch

Nonbehavioral correction.

### Minor

Compatible rule expansion or warning improvement.

### Major

Behavioral change affecting pass, severity, evidence, or outcome.

## 46.3 Result Applicability

A validation result records the exact Validator Version.

## 46.4 Backward Compatibility

A new validator version is backward compatible only if prior result interpretation remains valid.

## 46.5 Revalidation Trigger

A major validator change may require cohort revalidation when:

- blocker logic changes;
- false-negative defect is fixed;
- evidence rules change;
- constitutional rules change;
- severity changes materially.

## 46.6 Deprecation

Deprecated validators remain available for historical audit but cannot run new production validations.

---

# 47. Validator Qualification

## 47.1 Qualification Objective

Demonstrate that a validator is accurate, stable, secure, explainable, and compatible before production use.

## 47.2 Qualification Dataset

Must include:

- valid objects;
- structural failures;
- Ontology mismatches;
- identity conflicts;
- evidence gaps;
- fabricated sources;
- citation mismatches;
- contradictions;
- localization errors;
- numerical errors;
- statistical overclaims;
- constitutional violations;
- ambiguous cases;
- expected human-review cases.

## 47.3 Qualification Measures

- precision;
- recall;
- false-positive rate;
- false-negative rate;
- calibration;
- determinism or variance;
- explanation quality;
- latency;
- cost;
- security;
- profile coverage.

## 47.4 AI-Assisted Validator Qualification

Must additionally evaluate:

- prompt injection resistance;
- source-instruction isolation;
- hallucinated findings;
- unsupported confidence;
- sensitivity to wording;
- cross-model independence;
- reproducibility.

## 47.5 Qualification Outcomes

- qualified;
- qualified with limitations;
- pilot only;
- failed;
- suspended.

## 47.6 Canary Requirement

New major versions run in shadow or canary mode before replacing an active validator.

## 47.7 Periodic Requalification

Required after:

- model change;
- prompt change;
- major rule change;
- drift signal;
- security incident;
- material Ontology or KOS revision.

---

# 48. Continuous Validation

## 48.1 Purpose

Detect when a previously passed or published object no longer satisfies current requirements.

## 48.2 Continuous Triggers

- source withdrawal;
- source update;
- evidence conflict;
- regulation change;
- Ontology change;
- KOS change;
- validator-rule change;
- dependency supersession;
- active-object correction;
- stale review date;
- user or expert dispute;
- downstream incident;
- security or rights change.

## 48.3 Continuous Actions

- mark result expired;
- create revalidation case;
- restrict readiness;
- warn consumers;
- pause registration;
- quarantine object;
- trigger corrective production;
- update release risk.

## 48.4 No Direct Mutation

Continuous validators create findings and state recommendations.

They do not directly rewrite the canonical object.

## 48.5 Consumer Notification

Material invalidation events must notify affected:

- graph consumers;
- retrieval systems;
- recommendation systems;
- releases;
- owners;
- reviewers.

## 48.6 Monitoring Schedules

Schedules depend on:

- volatility;
- risk;
- source class;
- regulation;
- publication profile;
- historical failure rate.

---

# 49. Revalidation Strategy

## 49.1 Full Revalidation

Required when:

- semantic content changes materially;
- identity changes;
- Ontology class changes;
- evidence foundation changes;
- source integrity fails;
- object is reactivated from Deprecated or Archived;
- major validator defect is discovered.

## 49.2 Partial Revalidation

Allowed when:

- only localization changes;
- one contextual assertion changes;
- a non-core source is replaced;
- a derived representation is rebuilt;
- an independent field changes without affecting dependencies.

The Validation Plan must prove the unaffected scope.

## 49.3 Dependency-Based Revalidation

When a dependency changes:

1. determine impact path;
2. identify affected claims and relationships;
3. select validators;
4. invalidate reused results where necessary;
5. revalidate affected objects.

## 49.4 Validation Reuse

A prior result may be reused only if:

- target revision unchanged;
- relevant evidence unchanged;
- dependency snapshot compatible;
- validator still qualified;
- policy unchanged;
- validity period active;
- no new contradiction or incident exists.

## 49.5 Comparative Report

Revalidation must show:

- prior outcome;
- current outcome;
- changed inputs;
- changed findings;
- resolved findings;
- new findings;
- score changes;
- readiness impact.

---

# 50. Future Compatibility

## 50.1 New Entity Types

New entities inherit UKVF through:

- KOS template;
- UEGF extension;
- entity-specific validation extension;
- profile mapping;
- validator qualification.

## 50.2 New Object Kinds

New object kinds require:

- object-kind validation profile;
- lifecycle mapping;
- evidence rules;
- registry support;
- publication-gate integration.

## 50.3 New Models

New AI validators remain subordinate to:

- registered rules;
- qualification;
- explainability;
- source isolation;
- human review.

## 50.4 New Knowledge Modalities

Future validation may support:

- images;
- diagrams;
- audio;
- video;
- executable artifacts;
- simulations;
- multimodal evidence.

The universal principles of identity, provenance, scope, evidence, and audit remain unchanged.

## 50.5 Federated Validation

External institutions may provide validator results if:

- validator identity is registered;
- rules and versions are known;
- evidence is accessible under policy;
- integrity can be verified;
- conflict resolution is governed.

## 50.6 Cryptographic and Provenance Standards

Future systems may add:

- signed artifacts;
- verifiable credentials;
- content provenance standards;
- tamper-evident logs.

These strengthen but do not replace semantic validation.

## 50.7 Decade-Scale Stability

UKVF remains valid by preserving:

- revision-specific validation;
- registered rules;
- typed findings;
- non-compensatory blockers;
- explainable outcomes;
- human accountability;
- continuous revalidation;
- complete lineage.

---

# 51. Universal Validator Contract

Every validator, regardless of type, MUST define:

## 51.1 Objective

The specific risk or correctness dimension evaluated.

## 51.2 Inputs

- target revision;
- applicable profile;
- locked dependency snapshot;
- relevant evidence and source data;
- relevant policies;
- prior validator results if required.

## 51.3 Outputs

- Validator Result ID;
- result;
- findings;
- severity;
- score if applicable;
- confidence;
- remediation;
- retry condition;
- human-review requirement;
- validity period.

## 51.4 Validation Rules

Registered Rule IDs and deterministic or AI-assisted evaluation logic.

## 51.5 Pass Criteria

Explicit conditions for `pass` or `pass_with_warnings`.

## 51.6 Failure Criteria

Explicit conditions for error, blocker, indeterminate, or quarantine.

## 51.7 Severity Capability

The severities the validator is authorized to issue.

## 51.8 Recovery Actions

Who must act and what artifact must change.

## 51.9 Retry Conditions

Transient or changed-condition requirements.

## 51.10 Audit Metadata

- Validator ID and version;
- run timestamp;
- target IDs;
- input fingerprint;
- rule versions;
- model and prompt version if AI-assisted;
- evidence snapshot;
- output integrity;
- correlation and causation IDs.

---

# 52. Validator Type Catalog

The following validator types are the minimum enterprise catalog. Implementations may compose multiple rule modules into one service, but each logical validator contract must remain independently identifiable.

## 52.1 Structural Validator

**Objective:** Verify artifact integrity, required sections, field types, identifiers, lifecycle fields, and KOS structural compliance.  
**Inputs:** target revision, KOS version, object-kind template, profile.  
**Outputs:** structural result, missing or invalid paths, completeness score.  
**Validation Rules:** mandatory fields, conditional fields, enum values, ID format, reference syntax, forbidden fields, revision semantics.  
**Pass Criteria:** no structural blocker or error.  
**Failure Criteria:** missing identity or mandatory field, malformed contract, invalid lifecycle claim.  
**Severity Levels:** blocker, error, warning, information.  
**Recovery Actions:** regenerate or edit a new revision; do not patch validated artifact in place.  
**Retry Conditions:** input structure or generator output changes.  
**Audit Metadata:** KOS version, template version, field-path findings, checksum.

## 52.2 Ontology Validator

**Objective:** Verify class, inheritance, attributes, controlled vocabularies, predicates, and target-type compatibility.  
**Inputs:** target, Ontology snapshot, relationship set, extension rules.  
**Outputs:** Ontology result, invalid classes or predicates, mapping findings.  
**Validation Rules:** Ontology class existence, parent compatibility, attribute allowance, taxonomy, predicate domain and range.  
**Pass Criteria:** all material semantics resolve under the locked Ontology.  
**Failure Criteria:** invalid class, category mixing, unauthorized predicate, impossible target type.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** correct object, relationship, or request Ontology governance.  
**Retry Conditions:** object or Ontology resolution changes.  
**Audit Metadata:** Ontology version, rule IDs, class and predicate paths.

## 52.3 Identity Validator

**Objective:** Verify one stable and unique semantic identity.  
**Inputs:** target, Identity Resolution Package, canonical registry, aliases, external IDs.  
**Outputs:** identity result, duplicate candidates, confidence, adjudication request.  
**Validation Rules:** name-definition alignment, concept-instance test, adjacent-type separation, duplicate and alias classification.  
**Pass Criteria:** one resolved identity without exact duplicate.  
**Failure Criteria:** duplicate, wrong type, unresolved split or merge, identity collision.  
**Severity Levels:** blocker, warning, information.  
**Recovery Actions:** Steward resolution, merge, split, alias mapping, or corrected revision.  
**Retry Conditions:** registry, identity decision, or scope changes.  
**Audit Metadata:** registry snapshot, candidate set, decision basis, identity confidence.

## 52.4 Relationship Validator

**Objective:** Verify typed relationship correctness and evidence.  
**Inputs:** target relationships, Ontology, referenced objects, evidence.  
**Outputs:** relationship result, invalid edges, unresolved targets, strength findings.  
**Validation Rules:** predicate, direction, domain, range, context, cardinality, evidence, confidence, inverse consistency.  
**Pass Criteria:** mandatory edges valid; no unsupported material edge.  
**Failure Criteria:** unauthorized predicate, wrong target type, unsupported requirement, unresolved target.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** revise edge, target, scope, evidence, or strength.  
**Retry Conditions:** relationship or dependency changes.  
**Audit Metadata:** Relationship IDs, target revisions, Ontology rules, evidence refs.

## 52.5 Evidence Validator

**Objective:** Verify claim support, evidence sufficiency, independence, scope, and freshness.  
**Inputs:** claims, Evidence Bundle, profiles, volatility rules.  
**Outputs:** evidence coverage, sufficiency findings, evidence score.  
**Validation Rules:** claim mapping, directness, scope, independence, conflicts, freshness, methodology.  
**Pass Criteria:** all mandatory claims meet profile thresholds.  
**Failure Criteria:** unsupported material claim, hidden conflict, insufficient or stale evidence.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** collect evidence, narrow claim, externalize context, lower confidence, or remove claim.  
**Retry Conditions:** Evidence Bundle or claim changes.  
**Audit Metadata:** Evidence Bundle revision, claim map, source lineage, quality method.

## 52.6 Source Validator

**Objective:** Verify source authenticity, identity, authority, rights, and status.  
**Inputs:** Source Objects, source snapshots, evidence mappings, rights policy.  
**Outputs:** source status, authenticity findings, rights findings.  
**Validation Rules:** locator resolution, metadata match, publisher identity, withdrawal, supersession, license, conflict of interest.  
**Pass Criteria:** all mandatory sources are authentic and permitted.  
**Failure Criteria:** fabricated, inaccessible without disposition, withdrawn, rights prohibited, false primary classification.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** replace source, correct metadata, obtain rights, invalidate claims.  
**Retry Conditions:** source status or rights changes.  
**Audit Metadata:** Source IDs, verification timestamp, locator, rights version.

## 52.7 Citation Validator

**Objective:** Verify citation-to-claim accuracy and attribution.  
**Inputs:** claims, citations, Source Objects, source locations.  
**Outputs:** citation accuracy result, mismatches, missing citations.  
**Validation Rules:** resolution, location, relevance, quote accuracy, primary or secondary labeling, circularity.  
**Pass Criteria:** mandatory citations accurately support claims.  
**Failure Criteria:** fabricated citation, wrong source, unsupported attribution, quote mismatch.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** correct citation, revise claim, replace source.  
**Retry Conditions:** citation or source mapping changes.  
**Audit Metadata:** citation IDs, claim IDs, source location, verification method.

## 52.8 Logical Consistency Validator

**Objective:** Detect contradictions in states, conditions, dates, implications, and calculations.  
**Inputs:** full target, lifecycle, dependencies, related findings.  
**Outputs:** contradiction paths, logical result.  
**Validation Rules:** exclusivity, ordering, conditional requirements, range logic, successor coherence, confidence-blocker alignment.  
**Pass Criteria:** no material formal contradiction.  
**Failure Criteria:** mutually impossible values or implications.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** revise conflicting fields or escalate source conflict.  
**Retry Conditions:** affected fields or dependencies change.  
**Audit Metadata:** rule trace, field paths, dependency snapshot.

## 52.9 Semantic Validator

**Objective:** Verify coherent meaning across definition, fields, claims, relationships, and scope.  
**Inputs:** target, Ontology, entity extension, evidence.  
**Outputs:** semantic result, drift findings, ambiguity findings.  
**Validation Rules:** definition-field alignment, entity boundary, contextual separation, summary-body agreement, terminology consistency.  
**Pass Criteria:** one coherent semantic interpretation.  
**Failure Criteria:** entity drift, adjacent-type collapse, context presented as intrinsic.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** revise scope, definition, fields, or type.  
**Retry Conditions:** semantic content changes.  
**Audit Metadata:** semantic rule set, model version if AI-assisted, affected sections.

## 52.10 Reasoning Validator

**Objective:** Verify safe use in Decision Graph, recommendation, pathway, or analytical reasoning.  
**Inputs:** target, relationships, confidence, evidence, forbidden interpretations, intended use.  
**Outputs:** reasoning readiness outcome, constraints, missing semantics.  
**Validation Rules:** stable identity, material relationships, explicit strength and requirement, evidence coverage, uncertainty, context, no unresolved blocker.  
**Pass Criteria:** reasoning ready or reasoning ready with explicit constraints.  
**Failure Criteria:** missing core relations, unsupported causal or requirement semantics, hidden uncertainty.  
**Severity Levels:** error, warning, information; blocker for declared reasoning-ready publication.  
**Recovery Actions:** add evidence, relationships, constraints, or downgrade readiness.  
**Retry Conditions:** reasoning fields or profile changes.  
**Audit Metadata:** intended reasoning use, relationship set, readiness policy version.

## 52.11 Cross-Object Consistency Validator

**Objective:** Verify target coherence with a locked knowledge snapshot.  
**Inputs:** target, canonical registry snapshot, dependency graph, active assertions.  
**Outputs:** cross-object findings, duplicate or conflict set.  
**Validation Rules:** reference resolution, inverse edges, active claim conflicts, taxonomy, successor links, aliases.  
**Pass Criteria:** no unresolved material cross-object inconsistency.  
**Failure Criteria:** duplicate active identity, incompatible active claims, broken references.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** reconcile, supersede, merge, split, contextualize, or adjudicate.  
**Retry Conditions:** target or snapshot changes.  
**Audit Metadata:** snapshot ID, compared objects, conflict pairs.

## 52.12 Contradiction Detector

**Objective:** Identify direct and contextual contradictions in claims and evidence.  
**Inputs:** normalized claims, source scope, active claims, time and geography.  
**Outputs:** contradiction candidates, contextual explanation, confidence.  
**Validation Rules:** proposition comparison, negation, qualifiers, subject, time, geography, methodology.  
**Pass Criteria:** no unexplained material contradiction.  
**Failure Criteria:** high-confidence contradiction affecting core claim.  
**Severity Levels:** blocker, error, warning, human-review requirement.  
**Recovery Actions:** contextualize, mark disputed, split assertions, adjudicate.  
**Retry Conditions:** claims, evidence, or context changes.  
**Audit Metadata:** compared Claim IDs, evidence, detector model and threshold.

## 52.13 Hallucination Detector

**Objective:** Detect unsupported generated content and fabricated references.  
**Inputs:** target, invocation input package, evidence, registries, source records.  
**Outputs:** unsupported-content findings, fabricated-reference findings, quarantine recommendation.  
**Validation Rules:** traceability coverage, ID resolution, source resolution, input-delta analysis, unsupported numerical and legal details.  
**Pass Criteria:** all material content is grounded or labeled synthesis.  
**Failure Criteria:** fabricated source, ID, quote, authority, or unsupported material detail.  
**Severity Levels:** blocker, critical security finding, error.  
**Recovery Actions:** quarantine, regenerate, investigate model lane, cohort review.  
**Retry Conditions:** only after corrected inputs or model remediation.  
**Audit Metadata:** input fingerprint, unsupported spans or field paths, model and prompt versions.

## 52.14 Duplicate Detector

**Objective:** Detect semantic, textual, claim, relationship, and registration duplicates.  
**Inputs:** target, registry, aliases, definitions, external IDs, active revisions.  
**Outputs:** duplicate class, candidate matches, recommended disposition.  
**Validation Rules:** exact IDs, normalized labels, definition similarity, Ontology type, scope, time, geography.  
**Pass Criteria:** no unresolved exact duplicate or duplicate effect.  
**Failure Criteria:** duplicate canonical entity or active revision.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** reuse, merge, alias, subtype, supersede, or remove duplicate artifact.  
**Retry Conditions:** identity or registry changes.  
**Audit Metadata:** candidate IDs, match features, snapshot ID, thresholds.

## 52.15 Temporal Validator

**Objective:** Verify freshness, periods, expiry, lifecycle dates, and temporal scope.  
**Inputs:** target, source dates, volatility profile, regulation and revision history.  
**Outputs:** temporal result, stale findings, overlap findings.  
**Validation Rules:** date order, effective periods, expiry, review due, projection horizon, current status.  
**Pass Criteria:** material claims are temporally valid for intended use.  
**Failure Criteria:** stale high-impact claim or impossible lifecycle dates.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** refresh, scope historically, expire, or supersede.  
**Retry Conditions:** dates, evidence, or status changes.  
**Audit Metadata:** evaluation time, volatility class, freshness thresholds.

## 52.16 Geographic Validator

**Objective:** Verify location and jurisdictional applicability.  
**Inputs:** target, Geography Objects, source scope, jurisdiction policy.  
**Outputs:** geographic result, overgeneralization findings.  
**Validation Rules:** place resolution, hierarchy, local-to-global scope, jurisdiction, market versus administrative region.  
**Pass Criteria:** every material geographic claim is scoped and supported.  
**Failure Criteria:** false global claim or wrong jurisdiction.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** narrow claim, add regional variant, correct geography.  
**Retry Conditions:** scope or evidence changes.  
**Audit Metadata:** Geography IDs, hierarchy version, source regions.

## 52.17 Localization Validator

**Objective:** Verify local meaning, terminology, translation, units, and framework mapping.  
**Inputs:** localized content, language and Geography Objects, terminology sources, mapping records.  
**Outputs:** localization result, equivalence findings, reviewer requirement.  
**Validation Rules:** locale, official name, alias type, translation status, semantic equivalence, currency, unit, local framework.  
**Pass Criteria:** local representation preserves identity and local correctness.  
**Failure Criteria:** identity-changing translation or false equivalence.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** correct translation, downgrade status, local review.  
**Retry Conditions:** localization or terminology changes.  
**Audit Metadata:** locale, translation method, reviewer, mapping source.

## 52.18 Numerical Validator

**Objective:** Verify quantitative values, units, formulas, denominators, and precision.  
**Inputs:** numeric claims, formulas, source data, units, currencies.  
**Outputs:** recalculation result, numerical findings.  
**Validation Rules:** parse, unit, range, denominator, formula reproduction, rounding, missing-value semantics.  
**Pass Criteria:** material numbers reproduce within approved tolerance.  
**Failure Criteria:** incorrect material number or unit mismatch.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** correct calculation, source, unit, or precision.  
**Retry Conditions:** numeric inputs or formula change.  
**Audit Metadata:** formula version, inputs, tolerance, recalculated result.

## 52.19 Statistical Validator

**Objective:** Verify statistical methods and inference.  
**Inputs:** datasets or summaries, methodology, sample, statistical claims.  
**Outputs:** methodology result, inference findings, uncertainty assessment.  
**Validation Rules:** sample, estimator, effect size, interval, assumptions, weighting, causality, subgroup support.  
**Pass Criteria:** claims match method and uncertainty.  
**Failure Criteria:** misleading inference, unsupported causal claim, invalid aggregation.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** revise method or interpretation, add uncertainty, remove claim.  
**Retry Conditions:** method, data, or claim changes.  
**Audit Metadata:** method version, sample metadata, reproduced statistics where available.

## 52.20 Confidence Validator

**Objective:** Verify calibration and evidence ceiling.  
**Inputs:** confidence fields, evidence results, conflicts, identity result.  
**Outputs:** confidence-calibration findings, adjusted recommendation.  
**Validation Rules:** approved vocabulary, basis, ceiling, scoped confidence, object-level constraints.  
**Pass Criteria:** confidence is proportional and explainable.  
**Failure Criteria:** high confidence despite weak core evidence or unresolved conflict.  
**Severity Levels:** blocker for high-impact overconfidence, error, warning.  
**Recovery Actions:** recalibrate, narrow claim, add evidence, require review.  
**Retry Conditions:** confidence, evidence, or conflict changes.  
**Audit Metadata:** confidence method, dependencies, calibration references.

## 52.21 Policy Validator

**Objective:** Verify production, access, rights, retention, review, and registration policy compliance.  
**Inputs:** target metadata, policy registry, intended use, source rights.  
**Outputs:** policy result, violations, required approvals.  
**Validation Rules:** profile selection, model authorization, access class, retention, permitted use, review level, release channel.  
**Pass Criteria:** all applicable policies pass or eligible waivers exist.  
**Failure Criteria:** prohibited use, unauthorized model, rights or access violation.  
**Severity Levels:** blocker, error, warning.  
**Recovery Actions:** change policy metadata, processing lane, rights, or purpose.  
**Retry Conditions:** policy or authorization changes.  
**Audit Metadata:** Policy IDs and versions, decision path, waiver references.

## 52.22 Constitutional Validator

**Objective:** Verify AI Constitution compliance.  
**Inputs:** target content, intended use, constitutional rules, sensitive-context metadata.  
**Outputs:** constitutional result, prohibited-content findings.  
**Validation Rules:** privacy, fairness, uncertainty, no deterministic labeling, no manipulation, no harmful stereotype, human agency.  
**Pass Criteria:** no constitutional violation.  
**Failure Criteria:** prohibited sensitive inference, privacy breach, manipulative or discriminatory semantics.  
**Severity Levels:** non-waivable blocker.  
**Recovery Actions:** remove or revise content, narrow purpose, reject.  
**Retry Conditions:** corrected content or purpose.  
**Audit Metadata:** constitutional rule IDs, affected paths, reviewer if required.

## 52.23 Explainability Validator

**Objective:** Verify human interpretability and auditability.  
**Inputs:** target, evidence map, confidence, relationships, intended users.  
**Outputs:** explainability result, missing rationale or limitation findings.  
**Validation Rules:** definition, scope, rationale, uncertainty, source visibility, jargon, score explanation.  
**Pass Criteria:** qualified reviewer can understand meaning and limitations.  
**Failure Criteria:** high-impact black-box claim or unexplained score.  
**Severity Levels:** error, warning, human-review requirement.  
**Recovery Actions:** add explanation, rationale, limitations, or references.  
**Retry Conditions:** explanatory fields change.  
**Audit Metadata:** evaluated sections, audience profile, readability method if used.

## 52.24 Retrieval Validator

**Objective:** Verify discoverability and false-retrieval risk.  
**Inputs:** canonical name, aliases, summary, taxonomy, locale, search policy.  
**Outputs:** retrieval readiness, collision findings, indexing recommendations.  
**Validation Rules:** canonical name, aliases, disambiguation, deprecated labels, taxonomy, summary, locale.  
**Pass Criteria:** object is discoverable without material identity collision.  
**Failure Criteria:** ambiguous name without disambiguation, invalid alias, false retrieval risk.  
**Severity Levels:** error, warning.  
**Recovery Actions:** improve naming, alias typing, disambiguation, taxonomy.  
**Retry Conditions:** retrieval metadata changes.  
**Audit Metadata:** search snapshot, collision candidates, retrieval policy.

## 52.25 Quality Validator

**Objective:** Aggregate quality dimensions and assess target readiness without overriding blockers.  
**Inputs:** all validator results, profile thresholds, review decisions.  
**Outputs:** dimension scores, aggregate score, readiness recommendation.  
**Validation Rules:** method-versioned scoring, unassessed handling, blocker precedence, warning propagation.  
**Pass Criteria:** thresholds met and no blocking findings.  
**Failure Criteria:** required dimension below threshold or invalid score inputs.  
**Severity Levels:** error, warning, information; does not independently waive blockers.  
**Recovery Actions:** remediate deficient dimensions or downgrade readiness.  
**Retry Conditions:** underlying validator results change.  
**Audit Metadata:** scoring method, weights, input results, thresholds.

## 52.26 Security and Rights Validator

**Objective:** Verify confidentiality, access, licensing, purpose limitation, and derived-representation controls.  
**Inputs:** target, source rights, access policy, intended use, projection policy.  
**Outputs:** security and rights result, restrictions, quarantine recommendation.  
**Validation Rules:** least privilege, model authorization, license, redistribution, secret detection, restricted-field propagation.  
**Pass Criteria:** processing and intended use are permitted and controlled.  
**Failure Criteria:** unauthorized disclosure, prohibited use, secret or rights breach.  
**Severity Levels:** blocker, critical security finding, error.  
**Recovery Actions:** quarantine, restrict access, obtain rights, redact through governed revision, incident response.  
**Retry Conditions:** rights, access, or artifact changes.  
**Audit Metadata:** access policy, rights version, actor, security incident reference.

---

# 53. Validation Outcome Decision Table

| Condition | Overall Outcome |
|---|---|
| All mandatory validators pass, no warnings | Passed |
| No blocker or error, one or more warnings | Passed with Warnings |
| One or more remediable errors | Failed |
| One or more non-compensatory blockers | Blocked |
| Automated result is indeterminate and expert judgment is mandatory | Human Review Required |
| Security, provenance, rights, or systemic contamination is suspected | Quarantined |
| Eligible findings are waived and all remaining gates pass | Waived or Passed with Waivers |
| Required dependency or evidence is unavailable | Indeterminate or Human Review Required |
| Validation execution fails operationally | Run Failed; no knowledge outcome |

---

# 54. Validation Profile Construction Checklist

A Validation Profile is valid only when:

- [ ] Profile ID and version exist.
- [ ] Applicable object kinds are defined.
- [ ] Trigger conditions are defined.
- [ ] Intended readiness transition is defined.
- [ ] Mandatory validator types are listed.
- [ ] Validator dependencies are ordered.
- [ ] Human-review triggers are defined.
- [ ] Scoring method is defined.
- [ ] Minimum dimension thresholds are defined.
- [ ] Universal blockers are inherited.
- [ ] Profile-specific blockers are defined.
- [ ] Warning propagation is defined.
- [ ] Waiver eligibility is defined.
- [ ] Validity period is defined.
- [ ] Revalidation triggers are defined.
- [ ] Owner and governance authority are assigned.
- [ ] Compatibility with Ontology, KOS, UEGF, and UKPP is declared.

---

# 55. Publication Readiness Validation Checklist

A Knowledge Object may be recommended for canonical registration and publication only when:

- [ ] Target revision is immutable.
- [ ] Structural validation passes.
- [ ] Ontology validation passes.
- [ ] Identity validation passes.
- [ ] Mandatory relationships pass.
- [ ] Material claims have sufficient evidence.
- [ ] Mandatory sources and citations resolve.
- [ ] No material logical contradiction remains.
- [ ] No material semantic inconsistency remains.
- [ ] Cross-object validation passes.
- [ ] Temporal and geographic scope pass.
- [ ] Localization passes where applicable.
- [ ] Numerical and statistical claims pass where applicable.
- [ ] Confidence is calibrated.
- [ ] No hallucination or fabricated reference remains.
- [ ] No duplicate canonical identity remains.
- [ ] Policy and constitutional validation pass.
- [ ] Security and rights validation pass.
- [ ] Explainability meets profile requirements.
- [ ] Required Human Review is complete.
- [ ] Scores meet profile thresholds.
- [ ] No blocker or error remains.
- [ ] Waivers are valid, visible, and eligible.
- [ ] Validation Report is complete.
- [ ] Audit trail is complete.
- [ ] Validation has not expired.
- [ ] UKPP transition recommendation is explicit.

---

# 56. Framework Success Criteria

UKVF is successful when:

1. every generated Knowledge Object enters a registered Validation Profile;
2. every material validation rule is versioned and traceable;
3. every finding identifies an affected path, severity, evidence, and remediation;
4. fabricated sources and unsupported material claims are blocked;
5. identity duplicates are detected before registration;
6. Ontology and relationship errors are stopped before graph registration;
7. time, geography, and localization are treated as semantic requirements;
8. numerical and statistical claims are method-aware;
9. confidence is calibrated and scoped;
10. automated ambiguity escalates to human review instead of false certainty;
11. waivers are controlled and cannot erase findings;
12. validation results are revision-specific and reproducible;
13. continuous validation detects invalidated published knowledge;
14. validators are registered, versioned, qualified, and monitored;
15. graph, vector, search, and reasoning readiness use explicit validation profiles;
16. no aggregate score can hide a critical defect;
17. audit and lineage can reconstruct why an object passed, failed, or was waived;
18. the framework supports all current and future Knowledge Object types without entity-specific assumptions in the universal kernel.

---

# 57. Closing Standard

Universal Knowledge Validation Framework V1 is the enterprise assurance system that separates generated content from trusted knowledge.

UKVF does not ask whether an object looks complete.

It asks whether the object:

- has the correct identity;
- follows KOS;
- follows the Ontology;
- uses valid relationships;
- supports claims with defensible evidence;
- cites authentic sources accurately;
- remains logically and semantically coherent;
- respects time, geography, and localization;
- represents numbers and statistics correctly;
- calibrates confidence honestly;
- exposes contradictions and uncertainty;
- avoids hallucination and duplication;
- complies with policy and the AI Constitution;
- is explainable to authorized humans;
- is ready for its declared use.

A validator does not repair knowledge silently.

It produces a finding.

A finding does not disappear when waived.

It remains part of the audit record.

A passed validation is not eternal.

It remains valid only while its revision, evidence, dependencies, policies, validators, and external context remain valid.

UKVF therefore provides the permanent validation architecture required for KarirGPS to operate as a trustworthy, AI-native, ontology-driven Knowledge Operating System at enterprise scale.

Its enduring contracts are:

- validation profile;
- registered validator;
- immutable finding;
- severity;
- evidence;
- outcome;
- waiver;
- audit;
- validity period;
- revalidation.
