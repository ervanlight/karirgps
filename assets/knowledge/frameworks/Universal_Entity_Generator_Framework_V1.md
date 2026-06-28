# Universal Entity Generator Framework V1

**Product:** KarirGPS  
**Document Type:** Enterprise Knowledge Generator Architecture Framework  
**Version:** 1.0  
**Status:** Normative Framework Baseline  
**Governing Constitution:** AI Constitution  
**Governing Ontology:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`  
**Governing Object Contract:** `assets/knowledge/specification/Knowledge_Object_Specification_V1.md`  
**Reference Generator:** `assets/knowledge/generators/career/Career_Object_Generator_V1.md`  
**Reference Generator:** `assets/knowledge/generators/major/Major_Object_Generator_V1.md`  
**Target Path:** `assets/knowledge/frameworks/Universal_Entity_Generator_Framework_V1.md`

---

## 0. Normative Status, Scope, and Language

### 0.1 Status

Universal Entity Generator Framework V1, hereafter **UEGF**, is the single architectural source from which all future KarirGPS Entity Generator specifications must be derived.

UEGF abstracts the domain-independent architecture shared by the Career Object Generator and Major Object Generator and formalizes it as a reusable, governed generator framework.

UEGF does not replace:

- the AI Constitution;
- the Career Knowledge Ontology;
- the Knowledge Object Specification;
- an entity-specific generator;
- an entity-specific production prompt;
- a batch-production SOP;
- a validator implementation.

### 0.2 Applicability

UEGF applies to generators for Ontology Entity Objects, including but not limited to:

- Career;
- Major;
- Skill;
- Competency;
- Knowledge Domain;
- Industry;
- Organization;
- University;
- Course;
- Learning Resource;
- Certification;
- Credential;
- Scholarship;
- Opportunity;
- Tool;
- Technology;
- AI Trend;
- Work Environment;
- Personality Trait;
- Work Value;
- Interest Domain;
- Project;
- Internship;
- Experience;
- Assessment Instrument;
- future Ontology entity types.

### 0.3 Non-Applicability

UEGF does not directly govern generators whose primary output kind is:

- Contextual Assertion Object;
- Relationship Object;
- Evidence Object;
- Source Object;
- Package Object;
- Collection Object.

Such generators may inherit selected principles, but they require separate object-kind frameworks because their identity, lifecycle, evidence, and composition semantics differ.

### 0.4 Normative Terms

- **MUST** indicates a mandatory requirement.
- **MUST NOT** indicates a prohibited condition.
- **SHOULD** indicates a requirement that may be waived only through documented governance.
- **MAY** indicates an allowed option.
- **CONDITIONAL** indicates a requirement that becomes mandatory when a stated condition applies.

### 0.5 Authority Precedence

When a derived generator conflicts with an authoritative source, apply this order:

1. AI Constitution;
2. Career Knowledge Ontology;
3. Knowledge Object Specification;
4. Universal Entity Generator Framework;
5. entity-specific generator specification;
6. entity-specific production prompt;
7. batch-production SOP;
8. execution-specific instructions.

An entity generator may extend UEGF only through approved extension points. It may not weaken or redefine the universal kernel.

### 0.6 Universal Framework Invariants

Every UEGF-derived generator MUST preserve these invariants:

1. It produces a Draft Entity Object or a typed failure result.
2. It never self-validates, self-approves, self-activates, or self-publishes.
3. It resolves semantic identity before generating substantive content.
4. It distinguishes concept, subtype, instance, offering, label, and contextual assertion.
5. It requires a governed input package.
6. It uses only supported Ontology classes, attributes, and predicates.
7. It maps every material claim to evidence.
8. It preserves source provenance and usage restrictions.
9. It separates stable entity semantics from temporal, regional, institutional, and market context.
10. It represents relationships explicitly and precisely.
11. It preserves uncertainty, conflict, and missing evidence states.
12. It uses scoped provisional confidence.
13. It follows a canonical output contract.
14. It performs generator-level pre-validation.
15. It returns typed failures when mandatory preconditions fail.
16. It preserves immutable revision and attempt lineage.
17. It exposes an audit record without exposing private chain of thought.
18. It supports localization without duplicating semantic identity.
19. It remains model-agnostic.
20. It remains compatible with multi-agent and batch-production systems.
21. It applies non-compensatory quality gates.
22. It does not treat verbosity, popularity, or model agreement as evidence.
23. It supports graph projection through typed references.
24. It supports AI reasoning through explicit semantics, not narrative implication.
25. It is governed and versioned independently from its execution prompt.

### 0.7 System Impact

UEGF eliminates duplicated generator architecture and ensures that future entity generators add only entity-specific semantics while inheriting one consistent production, evidence, validation, confidence, failure, governance, and audit model.

---

# 1. Purpose

## 1.1 Architectural Purpose

UEGF defines the reusable architecture of a KarirGPS Entity Generator.

It establishes the universal generator kernel and the controlled mechanism through which an entity-specific generator injects domain semantics.

## 1.2 Standardization Purpose

UEGF ensures that generators for different entity types behave consistently in:

- authority;
- lifecycle;
- input handling;
- identity resolution;
- scope resolution;
- evidence discipline;
- relationship construction;
- generation sequence;
- validation;
- confidence;
- failure handling;
- acceptance;
- governance;
- versioning;
- audit.

## 1.3 Reuse Purpose

Universal logic must be defined once and inherited.

A future entity generator should define only:

- what uniquely identifies its entity;
- what adjacent entity types must be distinguished;
- what domain evidence is required;
- what relationships are mandatory or optional;
- what domain sections are added to the output;
- what entity-specific validations apply;
- what entity-specific failures and forbidden behaviors exist.

## 1.4 Production Purpose

A UEGF-derived generator must create Draft Entity Objects that can proceed through:

- KOS validation;
- Ontology validation;
- domain review;
- graph registration;
- vector registration;
- reasoning-readiness assessment;
- controlled publication.

## 1.5 Constraints

UEGF does not define entity data.

UEGF does not authorize a model to infer domain-specific rules that are absent from the entity extension.

UEGF does not permit a derived generator to bypass KOS or Ontology governance.

## 1.6 Rationale

Without a universal framework, each new generator would repeat and gradually alter the same production controls, creating incompatible failure behavior, evidence standards, field structures, and authority assumptions.

## 1.7 System Impact

KarirGPS can onboard new entity types through a predictable derivation process rather than designing every generator from the beginning.

---

# 2. Generator Inheritance Model

## 2.1 Inheritance Architecture

Every entity generator is composed from four layers:

1. **Universal Generator Kernel**
2. **Entity Extension Pack**
3. **Optional Cross-Cutting Profiles**
4. **Execution Projection**

### Universal Generator Kernel

The immutable architecture defined by UEGF.

It contains:

- lifecycle;
- authority ceiling;
- input envelope;
- identity-resolution stages;
- evidence model;
- relationship entry contract;
- generation sequence;
- validation layers;
- confidence semantics;
- failure envelope;
- acceptance semantics;
- governance;
- versioning;
- audit requirements.

### Entity Extension Pack

The domain-specific contract for one Ontology entity type.

It contains the mandatory extension points defined in Section 15.

### Optional Cross-Cutting Profiles

Reusable profiles that apply to multiple entity types, such as:

- Volatile Knowledge Profile;
- Regulated Entity Profile;
- Localized Entity Profile;
- Real-World Organization Profile;
- Opportunity Profile;
- Quantitative Observation Profile;
- Institutional Contribution Profile;
- Sensitive Construct Profile;
- Versioned Product or Technology Profile.

### Execution Projection

A derived operational artifact, such as:

- entity generator specification;
- production master prompt;
- validator profile;
- batch-production profile;
- review checklist.

Execution projections are derived from the kernel and extension pack. They do not become the semantic authority.

## 2.2 Inheritance Formula

Conceptually:

**Derived Entity Generator = Universal Kernel + Entity Extension Pack + Applicable Profiles + Version Lock**

No derived generator is complete without all four dimensions being resolved.

## 2.3 Inheritance Direction

Inheritance is one-way.

A derived generator may not modify the universal kernel.

Entity-specific lessons may propose a future UEGF revision, but they must not silently alter the current framework.

## 2.4 Single Semantic Parent

Each generator has one primary Ontology entity type.

A generator must not produce multiple unrelated entity types.

When one entity has formal subtypes, the architecture may use:

- one parent entity-family generator;
- subtype extension packs;
- subtype-specific output and validation deltas.

## 2.5 Composition Over Multiple Inheritance

Cross-cutting behavior is composed through profiles rather than inherited from multiple generators.

For example, a future Scholarship generator may compose:

- Universal Kernel;
- Scholarship Extension Pack;
- Opportunity Profile;
- Volatile Knowledge Profile;
- Localized Entity Profile.

It must not inherit conflicting logic from several concrete generators.

## 2.6 Universal Layer

The Universal Layer owns:

- generation authority;
- Draft-only behavior;
- contract versioning;
- universal input package structure;
- semantic identity pipeline;
- source provenance requirements;
- claim classes;
- relationship entry structure;
- confidence levels;
- failure envelope;
- acceptance meaning;
- governance lifecycle;
- audit requirements;
- private-reasoning rule;
- non-compensatory blockers.

## 2.7 Entity-Specific Layer

The Entity-Specific Layer owns:

- entity definition boundary;
- adjacent entity disambiguation;
- core domain fields;
- mandatory domain relationships;
- optional domain relationships;
- domain evidence categories;
- preferred source classes;
- volatility and recency rules;
- domain validation checks;
- domain-specific failure modes;
- entity-specific output modules;
- entity-specific forbidden behaviors;
- domain quality checks;
- naming and localization rules;
- entity readiness conditions.

## 2.8 Inheritance Constraints

A derived generator MUST NOT:

- redefine universal confidence levels;
- remove the Draft-only restriction;
- remove source provenance;
- remove typed failure behavior;
- remove mandatory audit fields;
- weaken evidence requirements;
- permit unsupported Ontology predicates;
- remove conflict visibility;
- allow self-approval;
- replace semantic identity with a display label;
- make contextual claims intrinsic by default.

## 2.9 Rationale

This model allows reuse without forcing all entities into identical domain semantics.

## 2.10 System Impact

Future generators remain structurally consistent while still accurately representing different knowledge domains.

---

# 3. Universal Lifecycle

## 3.1 Purpose

UEGF distinguishes three related lifecycles:

1. Generator Definition Lifecycle;
2. Generation Execution Lifecycle;
3. Generated Object Lifecycle.

These lifecycles must not be conflated.

## 3.2 Generator Definition Lifecycle

### `proposed`

A new generator need has been identified.

### `draft`

The Entity Extension Pack and derived specification are being authored.

### `meta_review`

The generator is being checked against UEGF, Ontology, and KOS.

### `validated`

The generator passes Meta Validation but is not yet approved for production.

### `active`

The generator is approved for production use.

### `deprecated`

The generator remains readable but must not be used for new production.

### `superseded`

A newer generator version has replaced it.

### `archived`

The generator is retained for historical and audit purposes.

## 3.3 Generation Execution Lifecycle

A compliant generation execution follows:

1. request received;
2. contract checked;
3. input package checked;
4. identity resolved;
5. scope locked;
6. evidence readiness confirmed;
7. claim inventory created;
8. evidence mapped;
9. relationships resolved;
10. stable and contextual knowledge separated;
11. Draft assembled;
12. confidence assigned;
13. pre-validation performed;
14. Draft or typed failure emitted.

## 3.4 Generated Object Lifecycle

The generated object lifecycle is governed by KOS:

- Draft;
- Review;
- Validated;
- Active;
- Deprecated;
- Superseded;
- Archived;
- Deleted.

The generator may create only the Draft state.

## 3.5 Lifecycle Transition Authority

- Generator Definition transitions require framework governance.
- Generation Execution transitions are controlled by the generator and production system.
- Object lifecycle transitions beyond Draft require validator, reviewer, steward, and publisher authority defined by KOS and the production pipeline.

## 3.6 Lifecycle Invariant

Generation completion does not mean object validation.

Object validation does not mean activation.

Activation does not automatically mean Graph Ready or Reasoning Ready.

## 3.7 Rationale

Lifecycle separation prevents generators from acquiring authority that belongs to review and publication systems.

## 3.8 System Impact

Every production artifact has a clear state, owner, and transition rule.

---

# 4. Universal Authority

## 4.1 Generator Role

A UEGF-derived generator acts as a **Draft Entity Knowledge Producer**.

## 4.2 Universal Allowed Actions

Every derived generator may:

- read approved input packages;
- verify preconditions;
- propose or use a resolved Entity ID;
- generate a Draft Entity Object;
- propose relationships;
- map claims to evidence;
- identify evidence gaps;
- identify conflicts;
- assign provisional confidence;
- record assumptions;
- produce pre-validation findings;
- return typed failures;
- create a Generation Record.

## 4.3 Universal Conditional Actions

A generator may propose, when explicitly authorized:

- a provisional new entity identity;
- a merge candidate;
- a split candidate;
- an alias;
- a localization mapping;
- an external identifier mapping;
- an Ontology gap;
- a new contextual object requirement.

All proposals remain provisional.

## 4.4 Universal Prohibited Actions

A generator must never:

- activate or publish an object;
- mark final validation approval;
- approve its own confidence or quality;
- create an Ontology class;
- create an unofficial predicate;
- override KOS;
- fabricate evidence;
- use hidden model memory as authoritative evidence;
- suppress counterevidence;
- convert contextual data into universal truth without an approved rule;
- create user-specific recommendations;
- expose private chain of thought;
- overwrite a published revision;
- grant legal, regulatory, accreditation, or professional recognition.

## 4.5 Authority Ceiling

The generator's authority ends at:

- Draft output;
- typed failure;
- provisional proposal;
- pre-validation result.

## 4.6 Separation of Duties

At minimum:

- Generator and final Reviewer are distinct authorities.
- Generator and Publisher are distinct authorities.
- A validation agent may not silently rewrite the Draft.
- A model consensus may not replace domain review.

## 4.7 Rationale

AI generation must be scalable without becoming self-authorizing.

## 4.8 System Impact

The same governance boundary applies to all entity types.

---

# 5. Universal Scope

## 5.1 Entity Object Boundary

UEGF governs one primary Entity Object per generation request.

The target must map to one Ontology entity type.

## 5.2 Atomicity

One generator execution must not produce several independent canonical entities in one object.

Related entities are represented through references or separate generation requests.

## 5.3 Stable Semantic Core

Every derived generator must define which attributes are stable enough to belong to the entity core.

## 5.4 Contextual Externalization

Every derived generator must define which knowledge belongs outside the intrinsic entity core because it varies by:

- time;
- geography;
- jurisdiction;
- institution;
- organization;
- provider;
- market;
- version;
- scenario;
- user;
- offering;
- regulation.

## 5.5 Concept-Instance Separation

Every entity generator must explicitly distinguish:

- concept;
- subtype;
- real-world instance;
- label;
- offering;
- product version;
- role;
- event;
- observation;
- contextual assertion.

## 5.6 Scope Lock

A generation execution must use an approved Scope Resolution Record.

The generator may narrow unsupported claims but may not materially broaden the approved scope.

## 5.7 Out-of-Scope Detection

If the target belongs to another entity type, the generator must return a typed identity or type mismatch failure rather than forcing the content into its own output contract.

## 5.8 Rationale

Universal scope rules prevent entity-type collapse across the knowledge system.

## 5.9 System Impact

Ontology nodes remain distinct and reusable across reasoning contexts.

---

# 6. Universal Identity Resolution Pipeline

## 6.1 Purpose

Identity Resolution establishes whether the requested target is one valid entity of the generator's primary type.

## 6.2 Stage 1: Candidate Normalization

Normalize:

- proposed canonical name;
- spelling variants;
- abbreviations;
- local labels;
- former names;
- transliterations;
- external identifiers.

Normalization does not establish identity.

## 6.3 Stage 2: Registry Search

Compare the target against:

- existing Entity IDs;
- aliases;
- deprecated entities;
- superseded entities;
- subtype identities;
- external mappings;
- prior batch candidates.

## 6.4 Stage 3: Ontology Type Classification

Confirm that the target belongs to the generator's Ontology entity type.

## 6.5 Stage 4: Adjacent-Type Disambiguation

Each derived generator must define adjacent entities that are frequently confused with the target type.

The generator must test the target against those boundaries.

## 6.6 Stage 5: Concept-Instance Test

Determine whether the target is:

- universal concept;
- local concept;
- subtype;
- instance;
- offering;
- version;
- label;
- contextual assertion.

## 6.7 Stage 6: Duplicate Classification

Classify candidate matches as:

- exact duplicate;
- synonym;
- local label;
- former name;
- subtype;
- broader concept;
- narrower concept;
- close mapping;
- related but distinct;
- unresolved.

## 6.8 Stage 7: Identity Disposition

The result is one of:

- use existing Entity ID;
- propose new Entity ID;
- create subtype proposal;
- use alias mapping;
- use localized mapping;
- merge candidate;
- split candidate;
- reject wrong type;
- block unresolved identity.

## 6.9 Stage 8: Identity Confidence

Assign provisional confidence based on:

- definition consistency;
- source authority;
- naming stability;
- boundary clarity;
- registry coverage;
- cross-source agreement;
- localization consistency;
- duplicate resolution.

## 6.10 Stage 9: Identity Lock

Generation may proceed only when the identity is:

- resolved;
- or explicitly authorized as provisional with no duplicate blocker.

## 6.11 Universal Identity Failure Types

- `IDENTITY_CONFLICT`;
- `ENTITY_TYPE_MISMATCH`;
- `DUPLICATE_ENTITY`;
- `CONCEPT_INSTANCE_COLLAPSE`;
- `SUBTYPE_BOUNDARY_UNRESOLVED`;
- `LOCALIZATION_IDENTITY_CONFLICT`.

## 6.12 Entity-Specific Requirement

Each derived generator must supply:

- identity test;
- adjacent entity matrix;
- subtype criteria;
- instance criteria;
- duplicate resolution rules;
- naming collision rules;
- identity confidence factors.

## 6.13 Rationale

Identity defects propagate into every relationship, retrieval result, and recommendation.

## 6.14 System Impact

All entity generators use one identity pipeline while preserving domain-specific boundaries.

---

# 7. Universal Evidence Model

## 7.1 Evidence as a Production Prerequisite

A generator may not produce material claims without a Normalized Evidence Bundle.

## 7.2 Evidence Bundle Contract

Every evidence entry must identify:

- Evidence ID;
- Source ID;
- source type;
- source title;
- author or publisher;
- publication or issuance date;
- verification date;
- source locator;
- language;
- geography or jurisdiction;
- primary or secondary status;
- normalized evidence statement;
- claim category;
- methodology when applicable;
- evidence confidence;
- source credibility;
- transformation lineage;
- usage restrictions;
- conflict group when applicable.

## 7.3 Universal Claim Classes

Every material claim must be classified as:

- observation;
- verified fact;
- editorial synthesis;
- inference;
- projection;
- normative statement.

A derived generator may narrow allowed claim classes for its entity type but may not invent incompatible classes without framework governance.

## 7.4 Claim-Evidence Mapping

Every material claim must map to one or more evidence entries.

The mapping must preserve:

- source scope;
- time;
- geography;
- entity context;
- methodology;
- confidence;
- conflict.

## 7.5 Source Scope Discipline

A claim may not exceed its evidence in:

- geography;
- time;
- entity level;
- subtype;
- instance;
- population;
- institution;
- market;
- regulation;
- version;
- methodology.

## 7.6 Evidence Independence

Several sources that reproduce one upstream source form one evidence lineage.

Repetition does not create independent confirmation.

## 7.7 Evidence Conflict

The generator must:

- preserve conflicting evidence;
- identify the conflict dimension;
- test whether context explains the difference;
- lower affected confidence;
- avoid forced synthesis;
- escalate material conflicts.

## 7.8 Missing Evidence States

The universal absence vocabulary is:

- `unknown`;
- `not_found`;
- `insufficient_evidence`;
- `disputed`;
- `not_applicable`;
- `not_assessed`;
- `source_unavailable`;
- `expired`.

Missing evidence must not be converted into a negative claim.

## 7.9 Recency and Volatility

Each entity extension must classify knowledge dimensions as:

- stable;
- moderate volatility;
- high volatility.

High-volatility knowledge must have:

- recent evidence;
- review due;
- contextual scope;
- externalization rules.

## 7.10 Rights and Usage

A generator must respect:

- copyright;
- licensing;
- access restrictions;
- attribution requirements;
- internal-use restrictions;
- personal-data restrictions.

## 7.11 Evidence Quality Dimensions

Universal evidence quality considers:

- authority;
- directness;
- methodology;
- transparency;
- recency;
- coverage;
- independence;
- reproducibility;
- scope fit;
- conflict of interest.

## 7.12 Source Preference Extension

Each entity generator must define preferred source classes by claim category.

A preference order is not absolute; claim-source fit remains controlling.

## 7.13 Evidence Ceiling

Generated confidence and claim strength may not exceed the evidence chain supporting them.

## 7.14 No Model-Memory Evidence

Unstated model knowledge is not an evidence source.

## 7.15 Rationale

A common evidence model allows different entity generators to feed one auditable knowledge system.

## 7.16 System Impact

Evidence lineage can be reused across graph, RAG, review, and reasoning systems.

---

# 8. Universal Relationship Model

## 8.1 Typed Relationship Requirement

Entity generators must use Ontology-defined predicates.

Narrative association does not replace a relationship entry.

## 8.2 Universal Relationship Entry Contract

Every relationship proposal must contain:

- Relationship ID or proposal ID;
- predicate;
- source Entity ID;
- source entity type;
- target Entity ID;
- target entity type;
- direction;
- relationship status;
- strength;
- requirement level when applicable;
- context when applicable;
- evidence references;
- provisional confidence;
- rationale;
- valid period when applicable;
- geography when applicable;
- inverse predicate when defined;
- source object reference.

## 8.3 Relationship Strength Vocabulary

The universal strength vocabulary is:

- `essential`;
- `strong`;
- `common`;
- `possible`;
- `emerging`;
- `disputed`.

A derived generator may define domain interpretation, but not contradictory meanings.

## 8.4 Requirement-Level Vocabulary

When a relationship represents a requirement, use:

- `legally_required`;
- `required`;
- `commonly_required`;
- `preferred`;
- `beneficial`.

Not every entity type uses requirement relationships.

## 8.5 Relationship Validity

A relationship is valid only when:

- predicate exists;
- source and target types are allowed;
- direction is correct;
- context is sufficient;
- evidence supports the relationship;
- strength is proportional;
- target resolves.

## 8.6 Contextual Relationships

Relationships that vary by:

- time;
- geography;
- institution;
- organization;
- market;
- regulation;
- version;
- scenario;

must carry context or reference a Contextual Assertion Object.

## 8.7 Inverse Relationships

The generator should not independently duplicate inverse relationships when the knowledge platform can derive them.

If both directions are stored, they must remain reconciled.

## 8.8 Reference-First Rule

Target entities are referenced through IDs.

Full canonical target objects are not embedded.

## 8.9 No Graph Inflation

Relationship count is not a quality metric.

Generators must not produce weak, redundant, or speculative edges to increase graph density.

## 8.10 Relationship Conflict

Contradictory relationships must be:

- scoped;
- evidence-linked;
- marked disputed;
- or escalated.

## 8.11 Entity-Specific Requirement

Each derived generator must define:

- mandatory relationship classes;
- recommended relationship classes;
- forbidden relationship patterns;
- context rules;
- relationship strengths by domain;
- required target entity types;
- minimum relationship evidence.

## 8.12 Rationale

A single relationship model enables consistent graph projection across all entity types.

## 8.13 System Impact

Knowledge Graph consumers do not need entity-specific parsing of narrative text.

---

# 9. Universal Generation Workflow

## 9.1 Step 1: Confirm Contract

Verify:

- governing versions;
- entity generator version;
- output authority;
- expected Draft status;
- supported execution mode.

## 9.2 Step 2: Validate Input Package

Confirm:

- Generation Request;
- Identity Resolution Record;
- Scope Resolution Record;
- Evidence Bundle;
- Existing Knowledge References;
- Generation Policy;
- conditional profiles.

## 9.3 Step 3: Resolve Identity

Execute the Universal Identity Resolution Pipeline and the entity-specific identity rules.

## 9.4 Step 4: Lock Scope

Confirm:

- stable semantic core;
- excluded adjacent entities;
- contextual externalization;
- localization scope;
- entity abstraction level.

## 9.5 Step 5: Build Material Claim Inventory

List the claims required by:

- KOS;
- the entity extension;
- the target readiness profile.

## 9.6 Step 6: Map Evidence

Map every material claim to:

- evidence;
- source;
- claim class;
- scope;
- confidence;
- conflict;
- uncertainty.

## 9.7 Step 7: Resolve Relationships

Create a relationship plan using:

- mandatory relationships;
- recommended relationships;
- contextual relationships;
- forbidden relationships;
- unresolved targets.

## 9.8 Step 8: Separate Stable and Contextual Knowledge

Keep stable entity semantics in the Entity Object.

Externalize volatile or scope-bound knowledge.

## 9.9 Step 9: Populate Canonical Output Contract

Populate:

- universal output spine;
- entity-specific semantic modules;
- evidence and confidence modules;
- governance and audit modules.

## 9.10 Step 10: Assign Confidence and Uncertainty

Use the Universal Confidence Framework and entity-specific confidence dimensions.

## 9.11 Step 11: Run Forbidden-Behavior Scan

Apply universal and entity-specific prohibitions.

## 9.12 Step 12: Run Self-Consistency Verification

Check internal and cross-reference consistency.

## 9.13 Step 13: Run Generator Pre-validation

Apply universal validators and entity-specific validators.

## 9.14 Step 14: Emit One Outcome

Return:

- Draft Entity Object;
- or typed failure result.

A complete Draft and blocking failure must not be returned together.

## 9.15 Workflow Invariant

Evidence mapping must precede final claim wording.

## 9.16 Rationale

This workflow is shared across Career, Major, and all future Entity Generators.

## 9.17 System Impact

Model changes do not alter the production sequence.

---

# 10. Universal Validation Framework

## 10.1 Validation Layers

Every derived generator must implement the following layers.

### Layer 1: Contract Validation

Checks:

- framework version;
- generator version;
- KOS version;
- Ontology version;
- object kind;
- entity type;
- Draft status;
- output contract.

### Layer 2: Input Validation

Checks:

- mandatory packages;
- package integrity;
- version compatibility;
- conditional input requirements.

### Layer 3: Identity Validation

Checks:

- semantic identity;
- duplicate state;
- adjacent-type boundaries;
- concept-instance distinction;
- naming consistency.

### Layer 4: Scope Validation

Checks:

- inclusion;
- exclusion;
- abstraction level;
- stable-context separation;
- geography;
- time;
- localization.

### Layer 5: Entity Core Validation

Checks the core semantic fields supplied by the Entity Extension Pack.

### Layer 6: Ontology Validation

Checks:

- class;
- inheritance;
- attributes;
- taxonomy;
- predicates;
- target types;
- direction;
- approved extensions.

### Layer 7: Relationship Validation

Checks relationship completeness, precision, context, evidence, confidence, and prohibited patterns.

### Layer 8: Evidence Validation

Checks:

- claim mapping;
- source existence;
- source scope;
- independence;
- conflict;
- rights;
- fabricated references;
- recency.

### Layer 9: Temporal and Geographic Validation

Checks context-sensitive knowledge and externalization.

### Layer 10: Localization Validation

Checks language, terminology, equivalence, local frameworks, and translation status.

### Layer 11: Constitutional Validation

Checks:

- no harmful labeling;
- no protected-attribute stereotype;
- no personal recommendation;
- no unsupported certainty;
- no privacy violation;
- no manipulation;
- no unauthorized legal or regulatory claim.

### Layer 12: Lifecycle and Revision Validation

Checks:

- Draft state;
- immutable revision;
- prior revision;
- change class;
- no publication authority;
- audit fields.

### Layer 13: Explainability Validation

Checks whether a reviewer can understand:

- what the entity is;
- what it is not;
- why relationships exist;
- what evidence supports claims;
- what remains uncertain.

### Layer 14: Retrieval Validation

Checks:

- canonical name;
- aliases;
- disambiguation;
- taxonomy paths;
- localized labels;
- collision risk.

### Layer 15: Reasoning-Readiness Potential

Checks whether the Draft exposes enough semantics for future reasoning without claiming approved readiness.

### Layer 16: Self-Consistency Validation

Checks internal field, claim, relationship, confidence, lifecycle, and source consistency.

## 10.2 Validation Results

Each validator returns:

- `pass`;
- `pass_with_warnings`;
- `fail`;
- `indeterminate`.

## 10.3 Severity

Findings use:

- `blocker`;
- `error`;
- `warning`;
- `information`.

## 10.4 Non-Compensatory Blockers

Universal blockers include:

- fabricated source;
- invalid entity type;
- duplicate identity unresolved;
- invalid Ontology class;
- unauthorized predicate;
- missing mandatory evidence;
- rights violation;
- hidden critical conflict;
- publication-state claim;
- revision overwrite;
- personal-data violation;
- constitutional violation.

Entity generators may add blockers but may not remove these.

## 10.5 Validator Behavior

A validator must not silently rewrite domain content.

Corrections require a new Draft or attempt.

## 10.6 Entity-Specific Requirement

Each extension must define:

- core semantic validation;
- adjacent-type validation;
- domain relationship validation;
- domain contextualization validation;
- domain-specific blockers;
- common failure detection.

## 10.7 Rationale

Universal validation ensures that every entity type enters the production pipeline with the same governance maturity.

## 10.8 System Impact

Validator infrastructure can reuse one architecture and load entity-specific rules as extensions.

---

# 11. Universal Confidence Framework

## 11.1 Confidence Layers

Every derived generator must support:

- identity confidence;
- evidence confidence;
- claim confidence;
- relationship confidence;
- coverage confidence;
- localization confidence when applicable;
- object confidence.

Entity extensions may add domain-specific confidence dimensions.

## 11.2 Confidence Vocabulary

Use:

- `high`;
- `medium_high`;
- `medium`;
- `medium_low`;
- `low`;
- `indeterminate`.

A future framework revision may add calibrated numeric representations, but human-readable levels remain authoritative for explanation.

## 11.3 Confidence Basis

Confidence must consider:

- source authority;
- directness;
- independence;
- recency;
- methodology;
- geographic fit;
- temporal fit;
- entity-level fit;
- cross-source consistency;
- evidence coverage;
- conflict;
- identity clarity;
- localization review.

## 11.4 Confidence Ceiling

No claim, relationship, or object confidence may exceed its necessary evidence chain without independent confirmation.

## 11.5 Scoped Confidence

Uneven confidence must be represented by field, claim, relationship, or domain module.

One object-level score must not conceal weak dimensions.

## 11.6 Conflict Adjustment

Conflict reduces affected confidence.

It should not automatically reduce unrelated dimensions.

## 11.7 Missing Evidence

Missing evidence produces low or indeterminate confidence and an explicit gap.

It does not produce a negative fact.

## 11.8 Object Confidence Rule

Object confidence cannot be high when a mandatory core dimension is low or indeterminate.

## 11.9 Provisional Status

All generator confidence is provisional until formal validation and review.

## 11.10 Prohibited Confidence Sources

Confidence must not increase because:

- the model is powerful;
- prose is detailed;
- the entity is popular;
- several models agree;
- many sources repeat one source;
- a source is commercially prominent.

## 11.11 Entity-Specific Requirement

Each extension must define:

- additional confidence dimensions;
- confidence-critical core fields;
- conflict adjustment rules;
- confidence ceiling dependencies.

## 11.12 Rationale

A common confidence model allows reasoning systems to compare knowledge quality across entity types.

## 11.13 System Impact

AI agents can use knowledge proportionally instead of treating all active fields as equally certain.

---

# 12. Universal Failure Framework

## 12.1 Failure Principle

When a mandatory precondition fails, the correct output is a typed failure, not a speculative entity.

## 12.2 Universal Failure Envelope

A failure result must include:

- generation outcome;
- request ID;
- production case ID;
- generator type and version;
- failure type;
- failure stage;
- failure summary;
- blocking conditions;
- missing inputs;
- conflicting inputs;
- affected requirements;
- evidence status;
- Ontology status;
- KOS status;
- safe partial results;
- required remediation;
- recommended owner;
- retry eligibility;
- audit notes.

## 12.3 Universal Failure Types

- `GENERATION_BLOCKED`;
- `INPUT_PACKAGE_INCOMPLETE`;
- `CONTRACT_VERSION_UNSUPPORTED`;
- `IDENTITY_CONFLICT`;
- `ENTITY_TYPE_MISMATCH`;
- `DUPLICATE_ENTITY`;
- `SCOPE_UNRESOLVED`;
- `ONTOLOGY_MISMATCH`;
- `INSUFFICIENT_EVIDENCE`;
- `SOURCE_INTEGRITY_FAILURE`;
- `RIGHTS_OR_USAGE_RESTRICTION`;
- `RELATIONSHIP_CONFLICT`;
- `TEMPORAL_CONTEXT_FAILURE`;
- `LOCALIZATION_BLOCKED`;
- `REVISION_CONFLICT`;
- `VALIDATION_FAILURE`;
- `GENERATION_FAILURE`.

## 12.4 Entity-Specific Failure Types

An entity extension may add namespaced or clearly defined failure types for domain-specific conditions.

It must map each added failure to:

- failure stage;
- remediation owner;
- retry eligibility;
- blocking status.

## 12.5 Retry Eligibility Vocabulary

- `eligible_after_input_remediation`;
- `eligible_after_identity_resolution`;
- `eligible_after_scope_resolution`;
- `eligible_after_ontology_resolution`;
- `eligible_after_evidence_collection`;
- `eligible_after_relationship_resolution`;
- `eligible_after_localization_review`;
- `eligible_after_rights_clearance`;
- `not_eligible_without_scope_change`;
- `not_eligible`.

## 12.6 Safe Partial Results

Safe partial results may contain:

- detected duplicate candidates;
- evidence gaps;
- source conflicts;
- unresolved mappings;
- Ontology gap;
- required authority;
- partial identity analysis.

They must not resemble an accepted complete Entity Object.

## 12.7 No Mixed Outcome

A response must not contain both:

- a complete Draft;
- and a blocking failure.

## 12.8 Rationale

Typed failures enable deterministic routing and prevent hallucinated completion.

## 12.9 System Impact

Batch systems can recover and assign remediation without interpreting free-form model explanations.

---

# 13. Universal Acceptance Criteria

A generated Draft Entity Object may proceed to formal validation only when all universal conditions are true:

1. output type is Draft Entity Object;
2. status is Draft;
3. object kind is Entity;
4. entity type matches the generator;
5. Ontology class is valid;
6. contract versions are declared;
7. object, entity, and revision identifiers are present or validly provisional;
8. identity is resolved;
9. duplicate state is resolved;
10. adjacent entity boundaries are resolved;
11. scope is explicit;
12. stable and contextual knowledge are separated;
13. universal mandatory fields are present;
14. entity-specific mandatory fields are present;
15. mandatory relationships are present or a blocker prevents acceptance;
16. every material claim maps to evidence;
17. every source reference resolves;
18. no source is fabricated;
19. relationship predicates are approved;
20. relationship target types are valid;
21. confidence is scoped and provisional;
22. uncertainty and conflict are explicit;
23. localization state is explicit;
24. no universal forbidden behavior occurred;
25. no entity-specific forbidden behavior occurred;
26. Generation Record is complete;
27. pre-validation passes;
28. no non-compensatory blocker remains.

## 13.1 Conditional Acceptance

A Draft may proceed with warnings only when missing elements are:

- optional;
- non-core;
- explicitly marked;
- not required by the target readiness profile;
- not concealed by aggregate quality scores.

## 13.2 Acceptance Meaning

Generator acceptance means:

**eligible for formal KOS, Ontology, and domain validation.**

It does not mean:

- Validated;
- Active;
- Published;
- Graph Ready;
- Vector Ready;
- Reasoning Ready;
- legally recognized;
- institutionally approved.

## 13.3 Entity-Specific Requirement

Each extension must add:

- mandatory domain acceptance criteria;
- conditional warnings;
- rejection conditions;
- domain-specific blockers.

## 13.4 Rationale

Acceptance remains consistent across entity types while preserving domain requirements.

---

# 14. Universal Governance

## 14.1 Governance Roles

- UEGF Owner;
- Ontology Owner;
- KOS Owner;
- Entity Generator Owner;
- Domain Steward;
- Evidence Governance Reviewer;
- Localization Steward;
- AI Systems Reviewer;
- Validator Owner;
- Batch Production Owner;
- Change Approver.

## 14.2 Governance Objects

Governance applies to:

- UEGF;
- Entity Extension Pack;
- derived generator specification;
- production prompt;
- validation profile;
- model qualification;
- batch profile.

## 14.3 Change Classes

### Editorial

No semantic or behavioral change.

### Compatible Extension

Adds optional capability or clarification.

### Entity Extension Revision

Changes entity-specific behavior without changing the universal kernel.

### Universal Semantic Revision

Changes UEGF behavior and may affect all generators.

### Breaking Revision

Changes mandatory architecture, lifecycle, evidence, failure, or output semantics.

## 14.4 Change Proposal Requirements

A change proposal must describe:

- problem;
- affected layer;
- affected generators;
- semantic impact;
- KOS impact;
- Ontology impact;
- validation impact;
- prompt impact;
- batch impact;
- compatibility;
- migration;
- rollback;
- regression tests.

## 14.5 Exception Policy

Exceptions must be:

- explicit;
- scoped;
- approved;
- time-bound;
- auditable;
- non-conflicting with Constitution, Ontology, and KOS.

An exception may not weaken a universal blocker.

## 14.6 Model Qualification

A model may execute a derived generator only after demonstrating:

- fixed output compliance;
- typed failure behavior;
- no source fabrication;
- identity-boundary handling;
- evidence mapping;
- relationship precision;
- confidence discipline;
- no self-publication;
- entity-specific failure handling.

## 14.7 Audit

The production system must record:

- UEGF version;
- extension version;
- generator version;
- model version;
- input package;
- evidence bundle;
- output;
- validation;
- review;
- remediation;
- final disposition.

## 14.8 Rationale

Universal governance prevents entity generators from becoming independent, incompatible policy systems.

## 14.9 System Impact

All future generators evolve under one change and audit model.

---

# 15. Extension Mechanism

## 15.1 Entity Extension Pack

Every future entity generator must define one **Entity Extension Pack**.

The pack contains only domain-specific rules.

## 15.2 Mandatory Extension Points

The following extension points are mandatory.

### EP-01: Entity Descriptor

Defines:

- entity type;
- Ontology class;
- parent class;
- concept or real-world entity status;
- volatility profile;
- risk profile;
- expected use cases.

### EP-02: Identity Rules

Defines:

- positive identity test;
- adjacent entity types;
- concept-instance boundary;
- subtype criteria;
- duplicate criteria;
- alias rules;
- external identifier rules;
- identity confidence factors.

### EP-03: Scope Rules

Defines:

- stable core;
- included semantics;
- excluded semantics;
- abstraction level;
- contextual externalization;
- geographic and temporal behavior;
- provider or instance boundaries.

### EP-04: Core Semantic Fields

Defines:

- mandatory domain fields;
- optional domain fields;
- forbidden intrinsic fields;
- inheritance from parent Ontology class;
- field-level evidence requirements.

### EP-05: Evidence Rules

Defines:

- mandatory evidence categories;
- minimum evidence threshold;
- preferred source classes;
- source diversity rules;
- recency rules;
- claim-scope constraints;
- conflict patterns;
- entity-specific evidence blockers.

### EP-06: Relationship Rules

Defines:

- mandatory relationship classes;
- recommended relationship classes;
- allowed target entity types;
- required contexts;
- strength interpretation;
- requirement-level use;
- forbidden relationship patterns;
- contextual assertion rules.

### EP-07: Output Contract

Defines:

- entity-specific semantic modules;
- canonical section order;
- field labels;
- required lists and relationship structures;
- approved absence states;
- pre-validation report additions.

The output contract must compose with the Universal Output Spine.

### EP-08: Validation Rules

Defines:

- core semantic validators;
- identity-boundary validators;
- domain relationship validators;
- evidence validators;
- temporal and geographic validators;
- localization validators;
- domain-specific blockers and warnings.

### EP-09: Confidence Rules

Defines:

- domain-specific confidence dimensions;
- confidence-critical fields;
- confidence ceilings;
- conflict adjustment;
- object-confidence constraints.

### EP-10: Forbidden Behaviors

Defines:

- entity-type collapse patterns;
- unsupported universalizations;
- domain-specific guarantees;
- prohibited intrinsic attributes;
- common model hallucinations;
- regulatory or market overreach.

### EP-11: Quality Rules

Defines:

- domain accuracy;
- coverage;
- completeness;
- relationship quality;
- explainability;
- retrieval utility;
- reasoning utility;
- maintainability;
- domain-specific quality blockers.

### EP-12: Failure Rules

Defines:

- entity-specific failure types;
- failure-stage mapping;
- remediation owner;
- retry eligibility;
- safe partial results.

### EP-13: Naming and Localization Rules

Defines:

- canonical naming;
- official names;
- aliases;
- abbreviations;
- localization equivalence;
- transliteration;
- historical names;
- collision handling.

### EP-14: Acceptance Delta

Defines:

- additional mandatory acceptance criteria;
- conditional acceptance;
- rejection criteria;
- readiness limitations.

### EP-15: Future Compatibility

Defines:

- likely future subtypes;
- external standards;
- international mappings;
- new relationship needs;
- profile compatibility;
- migration risks.

## 15.3 Optional Extension Points

A generator may additionally define:

- quantitative data rules;
- regulatory profile;
- opportunity lifecycle;
- provider-authority rules;
- versioned product rules;
- sensitive construct rules;
- external standard mappings;
- domain-specific review roles.

## 15.4 Extension Completeness

A derived generator is invalid if any mandatory extension point is absent, even when the entity appears simple.

## 15.5 No Universal Duplication

A derived generator should reference universal rules by framework section and define only its delta.

It may summarize inherited rules for readability but must not create an altered copy.

## 15.6 Rationale

Mandatory extension points make generator design predictable and auditable.

## 15.7 System Impact

New generators can be created through a standard package rather than ad hoc documentation.

---

# 16. Entity-Specific Override Rules

## 16.1 Permitted Overrides

An entity extension may:

- narrow a universal allowed behavior;
- add mandatory domain fields;
- add domain relationships;
- add validation layers;
- add confidence dimensions;
- add forbidden behaviors;
- add failure types;
- increase evidence requirements;
- shorten review intervals;
- add non-compensatory blockers;
- restrict allowed claim classes.

## 16.2 Prohibited Overrides

An entity extension must not:

- permit Active output;
- remove evidence provenance;
- remove identity resolution;
- remove typed failures;
- remove universal confidence layers;
- rename universal field semantics;
- redefine universal failure meanings;
- allow unofficial Ontology predicates;
- allow hidden conflict;
- allow model-memory evidence;
- allow unsupported contextual universalization;
- reduce rights or privacy controls;
- remove audit requirements;
- treat quality scores as approval;
- remove immutable revision behavior.

## 16.3 Conflict Resolution

When an entity extension conflicts with UEGF:

1. the universal rule prevails;
2. the generator fails Meta Validation;
3. a UEGF change proposal may be submitted if the universal rule is genuinely insufficient.

## 16.4 Override Declaration

Every override must declare:

- inherited rule;
- extension behavior;
- reason;
- compatibility;
- validation impact;
- output impact.

## 16.5 No Silent Override

A domain-specific example, prompt, or batch instruction cannot override the Entity Extension Pack.

## 16.6 Rationale

Controlled overrides preserve flexibility without fragmenting the architecture.

## 16.7 System Impact

Generators remain compatible across decades of entity expansion.

---

# 17. Composition Rules

## 17.1 Composition Layers

A concrete generator is composed in this order:

1. AI Constitution constraints;
2. Ontology entity semantics;
3. KOS universal and entity-specific contract;
4. UEGF Universal Kernel;
5. Entity Extension Pack;
6. Cross-Cutting Profiles;
7. derived Generator Specification;
8. execution Prompt;
9. Batch Production Profile.

## 17.2 Universal Output Spine

Every derived generator output contract must contain these zones in order:

### Zone A: Contract and Identity

Includes:

- versions;
- IDs;
- object kind;
- entity type;
- Ontology class;
- Draft status;
- revision semantics.

### Zone B: Naming, Localization, Definition, and Scope

Includes:

- canonical name;
- display names;
- aliases;
- localization;
- definition;
- purpose;
- inclusion;
- exclusion;
- disambiguation.

### Zone C: Entity Core Semantics

Defined by the Entity Extension Pack.

### Zone D: Relationship and Context Modules

Defined by the Entity Extension Pack and applicable profiles.

### Zone E: Evidence, Sources, Confidence, Conflict, and Uncertainty

Uses the universal evidence and confidence models.

### Zone F: Governance, Lifecycle, Quality, and Readiness

Uses KOS and UEGF controls.

### Zone G: Generation and Audit Record

Always final.

A derived generator may split zones into multiple numbered sections, but it must preserve this semantic order.

## 17.3 Profile Composition

Profiles must be orthogonal.

Examples:

- Volatile Knowledge Profile adds recency and review rules.
- Regulated Entity Profile adds jurisdiction and authority evidence.
- Localized Entity Profile adds mapping and terminology review.
- Opportunity Profile adds availability and eligibility lifecycle.
- Real-World Entity Profile adds official identity and operational status.
- Versioned Technology Profile adds version and lifecycle rules.

## 17.4 Profile Conflict

If two profiles conflict:

1. choose the more restrictive rule;
2. document the resolution;
3. fail Meta Validation if the conflict changes semantics.

## 17.5 Reference-First Composition

Entity outputs reference other canonical objects.

They do not embed full canonical entities.

## 17.6 No Recursive Generator Dependency

A generator may depend on existing reference objects but must not require another generator to complete synchronously inside the same entity generation execution.

Missing targets become:

- unresolved references;
- future generation requests;
- blockers when mandatory.

## 17.7 Parent-Subtype Composition

A subtype generator inherits:

- universal kernel;
- parent entity extension;
- subtype delta.

The subtype delta may narrow but must not contradict parent semantics.

## 17.8 Rationale

Composition supports reuse across entity families and cross-cutting concerns.

## 17.9 System Impact

Generators can be assembled consistently without multiple-inheritance ambiguity.

---

# 18. Versioning Strategy

## 18.1 Versioned Components

The following are versioned independently:

- UEGF;
- Entity Extension Pack;
- derived Generator Specification;
- production Prompt;
- validator profile;
- model qualification profile;
- batch profile.

## 18.2 Semantic Version Classes

### Patch

Editorial or non-behavioral clarification.

### Minor

Compatible optional extension, new warning, or added non-breaking validation.

### Major

Breaking change to:

- mandatory input;
- lifecycle;
- identity;
- evidence;
- relationship structure;
- confidence vocabulary;
- failure envelope;
- output spine;
- acceptance criteria;
- authority.

## 18.3 Generator Version Fingerprint

Each generated Draft must record:

- UEGF version;
- Entity Extension version;
- generator version;
- Ontology version;
- KOS version;
- prompt version when applicable;
- model version;
- Evidence Bundle revision;
- Generation Policy version.

## 18.4 Backward Compatibility

A newer generator is backward compatible only if:

- prior mandatory fields remain interpretable;
- field semantics do not change;
- failure meanings remain stable;
- relationship meanings remain stable;
- validators can process older Drafts or a migration exists.

## 18.5 Deprecation

Deprecated generator versions:

- remain available for audit;
- must not be used for new production;
- identify a successor;
- define migration guidance.

## 18.6 Migration

A migration plan must identify:

- affected objects;
- affected fields;
- revalidation requirements;
- regeneration requirements;
- compatibility behavior;
- rollback.

## 18.7 Rationale

Independent versioning prevents one entity extension from forcing unnecessary universal changes.

## 18.8 System Impact

Historical outputs remain reproducible and attributable.

---

# 19. Compatibility Strategy

## 19.1 Compatibility Dimensions

Compatibility must be evaluated across:

- Constitution;
- Ontology;
- KOS;
- UEGF;
- Entity Extension;
- output contract;
- validation profile;
- prompt;
- batch system;
- graph consumer;
- vector or RAG consumer;
- reasoning consumer.

## 19.2 Compatibility Matrix

Each active generator must declare:

- supported Ontology versions;
- supported KOS versions;
- supported UEGF versions;
- supported profiles;
- compatible prompt versions;
- validator version range;
- output compatibility class.

## 19.3 Compatibility Classes

- `fully_compatible`;
- `compatible_with_warnings`;
- `migration_required`;
- `incompatible`;
- `not_assessed`.

## 19.4 Forward Compatibility

Future optional fields should be ignorable by older consumers when core meaning remains intact.

## 19.5 Backward Compatibility

New generators must preserve old identifiers and revision lineage.

## 19.6 Ontology Compatibility

If an Ontology class or predicate changes:

- the generator must update its extension;
- affected outputs require impact analysis;
- unofficial local substitutes are prohibited.

## 19.7 KOS Compatibility

The generator must not add fields that conflict with KOS semantics.

Entity-specific fields must reside in approved domain sections or extensions.

## 19.8 Prompt Compatibility

The production prompt must be generated or reviewed against the exact generator version.

A prompt must not silently omit generator rules.

## 19.9 Batch Compatibility

Batch systems must lock one compatibility set per execution lane.

## 19.10 Rationale

Compatibility management protects long-lived knowledge assets from framework drift.

## 19.11 System Impact

KarirGPS can evolve specifications without losing historical reproducibility.

---

# 20. Meta Validation

## 20.1 Purpose

Meta Validation determines whether a derived Entity Generator is itself complete, lawful, coherent, and production-ready.

It validates the generator specification, not an Entity Object.

## 20.2 Meta Validation Layers

### MV-01: Authority Alignment

Checks that the generator does not exceed Draft authority.

### MV-02: Ontology Alignment

Checks:

- entity class;
- inherited attributes;
- allowed relationships;
- adjacent entity boundaries;
- extension legitimacy.

### MV-03: KOS Alignment

Checks:

- object kind;
- universal fields;
- entity template;
- lifecycle;
- quality;
- audit;
- versioning.

### MV-04: UEGF Inheritance

Checks that all universal kernel rules are inherited.

### MV-05: Extension Completeness

Checks all mandatory extension points.

### MV-06: No Universal Duplication Drift

Checks whether copied universal logic differs from UEGF.

### MV-07: Identity Completeness

Checks identity tests, adjacent entity matrix, subtype rules, and duplicate handling.

### MV-08: Evidence Completeness

Checks mandatory evidence categories, source preferences, conflict rules, recency, and blockers.

### MV-09: Relationship Completeness

Checks mandatory and optional relationships, target types, contexts, forbidden edges, and graph readiness.

### MV-10: Output Contract Completeness

Checks Universal Output Spine and entity-specific modules.

### MV-11: Validation Completeness

Checks universal and domain validators.

### MV-12: Confidence Completeness

Checks confidence layers, ceilings, and domain dimensions.

### MV-13: Failure Completeness

Checks typed failures, remediation, retry eligibility, and safe partial results.

### MV-14: Quality Completeness

Checks domain quality criteria and non-compensatory blockers.

### MV-15: Governance Completeness

Checks owner, versioning, exceptions, audit, and model qualification.

### MV-16: Promptability

Checks whether the generator can be operationalized into a model-agnostic production prompt without hidden interpretation.

### MV-17: Batchability

Checks whether the generator supports immutable attempts, isolated inputs, typed outcomes, and deterministic validation.

### MV-18: Future Compatibility

Checks profiles, subtypes, external mappings, and migration risks.

## 20.3 Meta Validation Outcomes

- `validated`;
- `validated_with_warnings`;
- `changes_required`;
- `rejected`;
- `framework_change_required`.

## 20.4 Generator Conformance Certificate

An active generator should have a conformance record identifying:

- UEGF version;
- extension version;
- generator version;
- Meta Validation result;
- approved entity type;
- supported profiles;
- model qualification status;
- activation authority.

## 20.5 Non-Compensatory Meta Blockers

- missing extension point;
- authority violation;
- invalid Ontology class;
- KOS conflict;
- removed evidence requirement;
- removed typed failure behavior;
- output contract without audit zone;
- self-publication permission;
- unsupported predicate creation;
- missing domain identity boundary;
- no model qualification criteria.

## 20.6 Rationale

Object validators cannot compensate for a defective generator specification.

## 20.7 System Impact

Only architecturally conformant generators enter production.

---

# 21. Generator Factory Pattern

## 21.1 Purpose

The Generator Factory Pattern defines the repeatable process for constructing a new Entity Generator from authoritative inputs.

It is a conceptual factory, not implementation code.

## 21.2 Factory Inputs

The factory requires:

1. Ontology Entity Definition;
2. KOS Entity Template;
3. UEGF version;
4. Entity Extension Pack;
5. applicable Cross-Cutting Profiles;
6. domain governance owner;
7. target use cases;
8. target readiness profiles;
9. external standards and mappings;
10. model qualification requirements.

## 21.3 Factory Prechecks

Before construction:

- entity class exists;
- KOS template exists;
- entity boundary is sufficiently defined;
- governance owner exists;
- mandatory relationships are known;
- evidence sources are identifiable;
- no separate object kind is more appropriate.

## 21.4 Factory Assembly Stages

### Stage 1: Load Universal Kernel

Load all non-overridable UEGF rules.

### Stage 2: Load Entity Extension Pack

Load domain identity, scope, evidence, relationship, output, validation, confidence, failure, quality, and naming rules.

### Stage 3: Compose Profiles

Apply regulated, volatile, localized, opportunity, organization, technology, or other profiles.

### Stage 4: Resolve Conflicts

Use more restrictive rules and document profile conflicts.

### Stage 5: Build Derived Generator Specification

Produce the complete entity-specific generator contract.

### Stage 6: Build Conformance Matrix

Map every derived section to:

- UEGF rule;
- extension rule;
- Ontology rule;
- KOS rule.

### Stage 7: Run Meta Validation

Validate the generator.

### Stage 8: Define Execution Projections

Prepare requirements for:

- production prompt;
- validator profile;
- batch profile;
- reviewer checklist.

### Stage 9: Run Qualification Suite

Test model behavior using clear, ambiguous, invalid, conflicted, and revision scenarios.

### Stage 10: Activate Generator

Activate only after governance approval.

## 21.5 Factory Outputs

The factory produces:

- Entity Generator Specification;
- Generator Conformance Matrix;
- Meta Validation Report;
- Production Prompt Requirements;
- Validator Profile;
- Model Qualification Suite;
- Batch Production Profile;
- Governance and version record.

## 21.6 Factory Failure Outcomes

- Ontology not ready;
- KOS template missing;
- extension incomplete;
- profile conflict;
- evidence model insufficient;
- entity boundary unresolved;
- Meta Validation failed;
- model qualification failed.

## 21.7 No Automatic Ontology Creation

The factory must not create missing Ontology semantics.

It must return an Ontology change requirement.

## 21.8 Rationale

The factory pattern makes generator creation systematic and repeatable.

## 21.9 System Impact

KarirGPS can create future generators through a governed assembly process rather than manual reinvention.

---

# 22. Architectural Principles

## 22.1 Immutable Universal Kernel

Universal lifecycle, authority, evidence, failure, confidence, and audit logic are defined once.

## 22.2 Domain Injection Through Contracts

Entity semantics enter only through approved extension points.

## 22.3 Identity First

No substantive generation before semantic identity is resolved.

## 22.4 Evidence First

No material claim without traceable evidence.

## 22.5 Draft Only

Generation is separated from validation, review, activation, and publication.

## 22.6 Explicit Failure

The system fails visibly rather than completing speculatively.

## 22.7 Stable Core, Contextual Edge

Intrinsic entity knowledge is separated from volatile context.

## 22.8 Typed Relationships

Graph semantics are explicit and evidence-supported.

## 22.9 Reference First

Canonical entities are referenced, not recursively embedded.

## 22.10 Model Agnostic

The framework does not depend on a specific model provider.

## 22.11 Human Accountable

AI may generate; authorized humans and governance systems approve.

## 22.12 Deterministic Contract

Identical generation envelopes should yield semantically equivalent outputs.

## 22.13 Non-Compensatory Quality

Critical defects cannot be hidden by aggregate scores.

## 22.14 Localization Without Duplication

One semantic identity may have many local representations.

## 22.15 Composition Over Duplication

Cross-cutting concerns use reusable profiles.

## 22.16 Versioned Evolution

Framework, extension, prompt, validator, and outputs maintain explicit version lineage.

## 22.17 Audit Without Chain of Thought

The system records evidence, rationale, confidence, and decisions without private reasoning traces.

## 22.18 Retrieval and Reasoning Readiness

Outputs are structured for graph and AI reasoning while remaining human-readable.

## 22.19 Least Authority

Each component receives only the authority necessary for its role.

## 22.20 Global Core, Local Governance

Universal semantics coexist with local evidence, regulation, terminology, and frameworks.

## 22.21 No Hidden Defaults

Missing, unknown, disputed, and not applicable states are explicit.

## 22.22 Future-Proof by Boundary Stability

Longevity comes from stable entity boundaries and controlled extension, not from predicting every future field.

---

# 23. Future Entity Onboarding Process

## 23.1 Step 1: Confirm Ontology Readiness

Verify:

- entity type exists;
- definition is stable;
- parent class exists;
- relationships are defined;
- validation rules exist.

If not, stop and initiate Ontology governance.

## 23.2 Step 2: Confirm KOS Readiness

Verify:

- entity-specific template exists;
- mandatory and forbidden fields are defined;
- universal lifecycle applies;
- quality and audit fields are supported.

If not, stop and initiate KOS governance.

## 23.3 Step 3: Classify Entity Nature

Determine whether the entity is:

- abstract concept;
- real-world organization;
- opportunity;
- credential;
- tool or technology;
- human construct;
- volatile signal;
- regulated entity;
- versioned product;
- contextual entity.

## 23.4 Step 4: Select Cross-Cutting Profiles

Select applicable profiles.

## 23.5 Step 5: Build Adjacent Entity Matrix

Identify common type confusions.

## 23.6 Step 6: Define Stable and Contextual Boundary

Determine what belongs inside the core object and what must be externalized.

## 23.7 Step 7: Build Entity Extension Pack

Complete all mandatory extension points.

## 23.8 Step 8: Define Canonical Output Modules

Compose the Universal Output Spine and domain modules.

## 23.9 Step 9: Define Validation and Failure Rules

Add domain validators, blockers, and typed failures.

## 23.10 Step 10: Run Meta Validation

The generator must pass all Meta Validation layers.

## 23.11 Step 11: Create Production Prompt

Operationalize the validated generator without changing its rules.

## 23.12 Step 12: Create Validator and Batch Profiles

Define automated validation and mass-production controls.

## 23.13 Step 13: Qualify Models

Test:

- valid identity;
- adjacent-type ambiguity;
- duplicate;
- insufficient evidence;
- source conflict;
- localization;
- revision;
- invalid source;
- contextual contamination;
- prohibited guarantee;
- failure output.

## 23.14 Step 14: Run Canary Production

Use a small, diverse set of abstract or authorized targets.

## 23.15 Step 15: Review Canary Outcomes

Measure:

- identity accuracy;
- KOS conformance;
- relationship precision;
- evidence mapping;
- failure behavior;
- reviewer correction load;
- model drift.

## 23.16 Step 16: Activate

Activate the generator only after:

- Meta Validation;
- model qualification;
- canary success;
- governance approval.

## 23.17 Step 17: Monitor

Monitor:

- format drift;
- identity errors;
- source fabrication;
- validation failure;
- reviewer rejection;
- extension gaps;
- Ontology change needs.

## 23.18 Onboarding Exit Criteria

An entity is fully onboarded when:

- active generator exists;
- conformance certificate exists;
- production prompt exists;
- validator profile exists;
- batch profile exists;
- governance owner exists;
- model lane is qualified;
- monitoring is active.

## 23.19 Rationale

A formal onboarding process prevents rushed generator creation for new entity types.

## 23.20 System Impact

The knowledge system can expand systematically to future domains.

---

# 24. Closing Standard

Universal Entity Generator Framework V1 is the architectural contract that governs how KarirGPS designs every Entity Generator.

The framework separates what must remain universal from what must remain domain-specific.

The Universal Layer owns:

- Draft-only authority;
- lifecycle separation;
- input discipline;
- identity sequence;
- evidence lineage;
- relationship entry semantics;
- confidence vocabulary;
- typed failure behavior;
- validation architecture;
- acceptance meaning;
- governance;
- audit;
- version compatibility.

The Entity-Specific Layer owns:

- identity boundaries;
- domain scope;
- core semantic fields;
- evidence categories;
- mandatory and optional relationships;
- domain validation;
- forbidden behaviors;
- domain failures;
- quality rules;
- output modules;
- future compatibility.

A future generator is not permitted to copy the universal architecture and modify it informally.

It must inherit the Universal Kernel and inject a governed Entity Extension Pack.

When an entity requires stricter evidence, the extension may strengthen the rule.

When an entity requires a new relationship, the extension may add it if the Ontology permits it.

When an entity has unique failure modes, the extension may define them.

When an entity conflicts with the Universal Kernel, the generator must stop and request framework governance rather than override the architecture.

This framework ensures that Career, Major, Skill, Industry, University, Scholarship, Tool, Certification, Organization, Technology, Learning Resource, AI Trend, and future generators remain part of one coherent Knowledge Operating System.

The defining standard is not that every generator looks identical.

The defining standard is that every generator inherits the same authority, evidence discipline, identity integrity, validation philosophy, failure behavior, confidence semantics, lifecycle governance, and audit model while expressing only the semantics unique to its entity type.

UEGF is therefore the permanent foundation for scalable, explainable, model-agnostic, and production-grade entity generation across the KarirGPS ecosystem.

---

# Appendix A. Mandatory Entity Extension Pack Template

Every new Entity Extension Pack must contain the following sections:

1. Entity Descriptor
2. Identity Rules
3. Adjacent Entity Matrix
4. Scope Rules
5. Stable Core Definition
6. Contextual Externalization Rules
7. Mandatory Domain Fields
8. Optional Domain Fields
9. Forbidden Intrinsic Fields
10. Evidence Categories
11. Source Preference Rules
12. Recency and Volatility Rules
13. Mandatory Relationships
14. Recommended Relationships
15. Forbidden Relationships
16. Domain Output Modules
17. Domain Validation Rules
18. Domain Confidence Rules
19. Domain Failure Types
20. Forbidden Behaviors
21. Quality Rules
22. Naming and Localization
23. Acceptance Delta
24. Future Compatibility
25. Governance Owner
26. Version and Change Record

An extension pack missing any mandatory section fails Meta Validation.

---

# Appendix B. Universal Versus Entity-Specific Responsibility Matrix

| Concern | Universal Kernel | Entity Extension |
|---|---|---|
| Draft-only authority | Owns | Cannot override |
| KOS lifecycle | Owns | May add restrictions |
| Entity type | Provides mechanism | Declares concrete type |
| Identity sequence | Owns | Defines domain boundaries |
| Duplicate handling | Owns mechanism | Defines domain equivalence |
| Input envelope | Owns | Adds conditional inputs |
| Evidence entry contract | Owns | Defines evidence categories |
| Claim classes | Owns | May restrict |
| Source quality dimensions | Owns | Defines preferred sources |
| Recency framework | Owns | Classifies domain volatility |
| Relationship entry contract | Owns | Defines required predicates |
| Confidence levels | Owns | Adds domain dimensions |
| Failure envelope | Owns | Adds domain failures |
| Output spine | Owns | Adds semantic modules |
| Universal validation | Owns | Adds domain validators |
| Universal blockers | Owns | Adds blockers |
| Naming base rules | Owns | Adds domain conventions |
| Localization architecture | Owns | Adds mapping rules |
| Quality dimensions | Owns | Adds domain checks |
| Audit record | Owns | Adds domain references |
| Versioning architecture | Owns | Versions extension |
| Governance process | Owns | Assigns domain owner |
| Future profiles | Owns composition | Declares compatibility |

---

# Appendix C. Derived Generator Conformance Checklist

A derived generator may be activated only when:

- [ ] The Ontology entity class exists.
- [ ] The KOS entity template exists.
- [ ] The UEGF version is declared.
- [ ] The Entity Extension Pack is complete.
- [ ] Identity rules are explicit.
- [ ] Adjacent entity boundaries are explicit.
- [ ] Stable and contextual scope is explicit.
- [ ] Mandatory evidence categories are defined.
- [ ] Source preferences are defined.
- [ ] Mandatory relationships are defined.
- [ ] Forbidden relationships are defined.
- [ ] Output modules compose with the Universal Output Spine.
- [ ] Universal validation layers are inherited.
- [ ] Domain validators are defined.
- [ ] Confidence dimensions are defined.
- [ ] Universal failure envelope is inherited.
- [ ] Domain failures are actionable.
- [ ] Universal forbidden behaviors are inherited.
- [ ] Domain forbidden behaviors are defined.
- [ ] Quality rules are defined.
- [ ] Acceptance delta is defined.
- [ ] Governance owner is assigned.
- [ ] Version compatibility is declared.
- [ ] Meta Validation passes.
- [ ] Production prompt requirements are defined.
- [ ] Validator profile is defined.
- [ ] Batch profile is defined.
- [ ] Model qualification suite passes.
- [ ] Canary production passes.
- [ ] Conformance certificate is issued.
