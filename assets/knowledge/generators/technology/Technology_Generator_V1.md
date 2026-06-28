# Technology Generator V1

**File Path:** `assets/knowledge/generators/technology/Technology_Generator_V1.md`  
**Generator ID:** `generator:technology:v1`  
**Entity Type:** `technology`  
**Status:** Production Ready  
**Version:** 1.0.0  
**Release Date:** 2026-06-28  
**Owner:** KarirGPS Principal Knowledge Engineering Team

---

## 1. Document Control

| Field | Value |
|---|---|
| Document name | Technology Generator V1 |
| Canonical file | `assets/knowledge/generators/technology/Technology_Generator_V1.md` |
| Generator class | Entity Generator |
| Target entity | Technology |
| Upstream dependencies | AI Constitution, Career Knowledge Ontology, KOS, UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, UKCF, Generator Development Standard V1 |
| Reference style | Career Generator V1, Skill Generator V1, Competency Generator V1, Knowledge Domain Generator V1 |
| Release state | Production-ready implementation specification |
| Change policy | Revisions must preserve architecture inheritance and pass conformance tests |

## 2. Purpose and Scope

The Technology Generator V1 creates, revises, repairs, localizes, enriches, refreshes evidence for, and creates evolution successors for `technology` knowledge objects. A technology is a technical method, platform, standard, infrastructure layer, programming language, protocol, architecture, runtime, model family, or engineered capability that enables tools, systems, tasks, activities, and careers.

This generator distinguishes technologies from tools. A technology is the underlying capability or technical system; a tool is an implementable product, device, application, or instrument that uses one or more technologies.

### 2.1 In Scope

- Technology taxonomy, lifecycle, maturity, technology stack, dependencies, compatibility, replacement, deprecation, evolution, relationships, standards, and ecosystem.
- Relationships to tools, skills, competencies, knowledge domains, work tasks, work activities, and careers.
- Evidence refresh for fast-changing technology facts.
- Operation support for `create`, `revise`, `repair`, `localize`, `enrich`, `evidence_refresh`, and `evolution_successor`.

### 2.2 Out of Scope

- Generating tool objects when the candidate is a specific software application, hardware device, or AI product.
- Generating skill or knowledge domain objects when the candidate is a learnable ability or conceptual domain rather than technology.
- Redesigning technology ontology or creating a parallel framework.


## 3. Authority, Inheritance, and Non-Redesign Constraint

This generator is an implementation artifact. It does not redesign, fork, supersede, duplicate, or reinterpret any KarirGPS foundation or framework. It inherits the following authoritative contracts exactly as upstream requirements:

| Authority | Inheritance Applied in This Generator |
|---|---|
| AI Constitution | Safety, truthfulness, privacy, non-deceptive generation, bias control, traceability, and human benefit constraints are enforced during generation, validation, repair, localization, enrichment, evidence refresh, and successor creation. |
| Career Knowledge Ontology | Entity relationships must align with the canonical career graph, including Career, Skill, Competency, Knowledge Domain, Work Task, Work Activity, Technology, and Tool relations. |
| Knowledge Object Specification (KOS) | Every produced object must use the canonical KOS envelope, identity, lineage, evidence, language, validation, registry, and lifecycle fields. |
| Universal Entity Generator Framework (UEGF) | This generator follows the universal entity generation contract, operation model, normalization requirements, and output guarantees. |
| Universal Knowledge Production Pipeline (UKPP) | Intake, normalization, generation, validation, repair, registration, compilation, and release stages are implemented. |
| Universal Knowledge Validation Framework (UKVF) | Structural, semantic, ontological, evidence, safety, localization, registry, query, evolution, and compilation validation are required. |
| Universal Knowledge Registry Framework (UKR) | Object identity, versioning, lineage, deduplication, merge policy, and registry state transitions are enforced. |
| Universal Knowledge Language Framework (UKL) | Canonical language, localized variants, terminology control, and locale-specific examples are supported. |
| Universal Knowledge Query Framework (UKQF) | Generated objects must be queryable by identity, label, relationship, competency demand, technology/tool dependency, evidence, maturity, and lifecycle state. |
| Universal Knowledge Evolution Framework (UKEF) | Revision, deprecation, successor creation, evidence aging, drift detection, and relation revalidation are supported. |
| Universal Knowledge Compilation Framework (UKCF) | Objects compile into registry-ready Markdown, JSON, graph triples, embeddings, and API payloads without losing semantic meaning. |
| Generator Development Standard V1 | All mandatory sections, conformance tests, diagrams, schemas, prompt templates, failure examples, certification checks, and production readiness checks are included. |

### 3.1 Binding Implementation Rule

If any instruction in this generator conflicts with an upstream authority, the upstream authority wins. The generator must stop, report the conflict, and produce a repair request rather than generating a non-conformant object.


## 4. Generator Development Standard V1 Mandatory Section Map

The following table maps this document to the mandatory sections required by Generator Development Standard V1. No mandatory section is intentionally omitted.

| GDS V1 Mandatory Section | Implemented Section in This Document |
|---|---|
| Document control | Section 1 |
| Purpose and scope | Section 2 |
| Authority and inheritance | Section 3 |
| Mandatory section conformance map | Section 4 |
| Entity definition | Section 5 |
| Ontology alignment | Section 6 |
| Canonical object model | Section 7 |
| Operation support | Section 8 |
| Production pipeline | Section 9 |
| Validation framework | Section 10 |
| Registry and identity rules | Section 11 |
| Language and localization rules | Section 12 |
| Query support | Section 13 |
| Evolution rules | Section 14 |
| Compilation outputs | Section 15 |
| Architecture diagrams | Section 16 |
| Mermaid diagrams | Section 16 |
| Sequence diagrams | Section 16 |
| State diagrams | Section 16 |
| Flowcharts | Section 16 |
| Schemas | Section 17 |
| Prompt templates | Section 18 |
| Validation examples | Section 19 |
| Failure examples | Section 20 |
| Conformance tests | Section 21 |
| Engineering certification checklist | Section 22 |
| Production readiness checklist | Section 23 |
| Release contract | Section 24 |


## 5. Entity Definition: Technology

A `technology` is a reusable technical capability or system class that enables tools, infrastructures, workflows, automation, and professional practice. It may be abstract, platform-level, protocol-level, architectural, algorithmic, or implementation-level, but it must not be merely a vendor product unless the product itself has become a technology platform category in the ontology.

### 5.1 Canonical Definition

```yaml
object_type: technology
canonical_definition: >
  A reusable technical capability, method, architecture, platform, protocol,
  language, runtime, infrastructure layer, or engineered system class that
  enables tools, work tasks, work activities, and career practice.
boundary_rule: >
  A technology describes the underlying technical capability or system class;
  a tool describes a concrete product, device, application, instrument, or
  service used to apply one or more technologies.
```

### 5.2 Technology Boundary Tests

| Test | A Valid Technology Must Answer |
|---|---|
| Capability | What technical capability does it enable? |
| Stack position | Where does it sit in a technology stack? |
| Dependency | What technologies, standards, or infrastructures does it require? |
| Compatibility | What does it interoperate with or exclude? |
| Lifecycle | Is it emerging, active, mature, declining, deprecated, or retired? |
| Ecosystem | Which tools, vendors, standards, communities, and practices surround it? |
| Evolution | What replaces it or succeeds it when the ecosystem changes? |

### 5.3 Non-Examples

| Invalid Candidate | Reason It Is Not a Technology | Correct Entity Direction |
|---|---|---|
| "Microsoft Excel" | Specific software product. | Tool. |
| "Data cleaning" | Work process or skill. | Work Task, Work Activity, or Skill. |
| "Problem solving" | Human capability. | Competency or Skill. |
| "Nursing" | Professional domain/career context. | Career or Knowledge Domain. |

## 6. Ontology Alignment

Technology objects define the enabling technical layer of the Career Knowledge Ontology.

### 6.1 Required Ontology Class

```yaml
ontology_binding:
  primary_class: career_ontology.Technology
  parent_classes:
    - career_ontology.EnablingEntity
    - career_ontology.TechnicalEntity
  disjoint_with:
    - career_ontology.Tool
    - career_ontology.Skill
    - career_ontology.Competency
    - career_ontology.WorkTask
    - career_ontology.WorkActivity
```

### 6.2 Technology Taxonomy

```yaml
technology_taxonomy:
  primary_category:
    - programming_language
    - runtime_environment
    - framework
    - library
    - protocol
    - data_storage
    - cloud_platform
    - infrastructure
    - cybersecurity_technology
    - ai_ml_technology
    - analytics_technology
    - integration_technology
    - hardware_architecture
    - industrial_technology
    - healthcare_technology
    - finance_technology
    - design_technology
    - productivity_technology
  abstraction_level:
    - concept
    - standard
    - architecture
    - platform
    - implementation_family
    - ecosystem
  stack_layer:
    - physical
    - network
    - compute
    - storage
    - data
    - runtime
    - application
    - integration
    - security
    - ai_model
    - user_experience
    - governance
```

### 6.3 Allowed Relationships

| Relationship | Target Entity | Cardinality | Meaning |
|---|---|---:|---|
| `enables_tool` | `tool` | 0..n | Tools that apply or implement this technology. |
| `requires_technology` | `technology` | 0..n | Required technology dependency. |
| `compatible_with` | `technology` or `tool` | 0..n | Compatible technology/tool. |
| `incompatible_with` | `technology` or `tool` | 0..n | Known incompatibility. |
| `replaces_technology` | `technology` | 0..n | Technology replaced by this technology. |
| `replaced_by_technology` | `technology` | 0..n | Successor or replacement technology. |
| `implements_standard` | standard object or reference | 0..n | Standards implemented or required. |
| `requires_skill` | `skill` | 0..n | Skill needed to use or implement technology. |
| `requires_knowledge_domain` | `knowledge_domain` | 0..n | Knowledge domain needed. |
| `supports_work_task` | `work_task` | 0..n | Tasks enabled by the technology. |
| `supports_work_activity` | `work_activity` | 0..n | Activities enabled by the technology. |
| `supports_career` | `career` | 0..n | Careers using the technology. |

### 6.4 Technology Lifecycle and Maturity

```yaml
technology_lifecycle:
  lifecycle_state: emerging | active | mature | declining | deprecated | retired
  maturity_level: experimental | early_adoption | mainstream | established | legacy | obsolete
  adoption_pattern: niche | growing | widespread | regulated | legacy_maintenance
  stability: volatile | moderate | stable | frozen
  support_status: community | vendor_supported | long_term_support | limited_support | unsupported
```

## 7. Canonical Object Model

### 7.1 Required KOS Envelope

```yaml
kos:
  kos_version: "1.0"
  object_id: "technology:<slug>:v1"
  object_type: "technology"
  object_version: "1.0.0"
  lifecycle_state: active
  canonical_language: en
  created_by_generator: "generator:technology:v1"
  created_at: "YYYY-MM-DD"
  updated_at: "YYYY-MM-DD"
```

### 7.2 Required Technology Fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `canonical_label` | string | Yes | Canonical technology name. |
| `aliases` | string[] | Yes | Abbreviations, alternate spellings, former names. |
| `definition` | string | Yes | Clear technology definition and scope. |
| `technology_taxonomy` | object | Yes | Category, abstraction level, stack layer, domain. |
| `technology_lifecycle` | object | Yes | Lifecycle state, maturity, stability, support status. |
| `maturity` | object | Yes | Adoption, ecosystem maturity, risk, readiness. |
| `technology_stack` | object | Yes | Stack position, upstream/downstream layers, runtime context. |
| `dependencies` | object[] | Yes | Required technologies, standards, hardware, data, network, or governance. |
| `compatibility` | object[] | Yes | Compatible versions, platforms, protocols, tools, or constraints. |
| `replacement` | object | Yes | Replacement candidates, migration path, compatibility. |
| `deprecation` | object | Yes | Deprecation state, triggers, risk, timelines when known. |
| `technology_evolution` | object | Yes | Evolution drivers, successor/predecessor logic. |
| `technology_relationships` | object | Yes | Ontology relationships and ecosystem links. |
| `technology_standards` | object[] | Yes | Standards, specifications, compliance requirements. |
| `technology_ecosystem` | object | Yes | Tools, vendors, communities, libraries, platforms, practices. |
| `required_skills` | relation[] | Yes | Skills needed to use, implement, maintain, or evaluate technology. |
| `required_competencies` | relation[] | Yes | Competencies enabled or required. |
| `required_knowledge_domains` | relation[] | Yes | Conceptual domains required. |
| `supported_tasks` | relation[] | Yes | Work tasks enabled. |
| `supported_activities` | relation[] | Yes | Work activities enabled. |
| `automation_relevance` | object | Yes | How technology supports automation. |
| `ai_relevance` | object | Yes | How technology relates to AI execution or AI tooling. |
| `risks_and_constraints` | object[] | Yes | Security, privacy, compliance, reliability, maintainability risks. |
| `relationships` | object | Yes | Ontology relationships. |
| `evidence` | object[] | Yes | Evidence ledger. |
| `validation` | object | Yes | UKVF validation result. |
| `registry` | object | Yes | UKR registry action and lineage. |
| `query_facets` | object | Yes | UKQF indexing metadata. |

### 7.3 Technology Stack Contract

```yaml
technology_stack:
  stack_layer: physical | network | compute | storage | data | runtime | application | integration | security | ai_model | governance
  upstream_dependencies:
    - technology_id: string
      dependency_type: runtime | protocol | hardware | data | security | governance | standard
  downstream_enables:
    - entity_type: tool | technology | work_task | work_activity
      entity_id: string
  deployment_context: local | cloud | hybrid | edge | embedded | managed_service | offline
```


## 8. Supported Operations

This generator supports exactly the required operation set. Every operation returns a KOS-compliant object or a structured refusal/repair report.

| Operation | Purpose | Identity Rule | Validation Rule | Output Rule |
|---|---|---|---|---|
| `create` | Produce a new entity object from validated input. | Create a new canonical ID unless an equivalent object already exists. | Run full UKVF validation before registry submission. | Return registry-ready KOS object plus compiled formats. |
| `revise` | Modify an existing entity while preserving its identity. | Preserve `object_id`; increment semantic version. | Validate changed fields and impacted relationships. | Return revision diff, updated object, and lineage entry. |
| `repair` | Correct invalid, incomplete, inconsistent, or stale object fields. | Preserve identity unless the object is proven to be misclassified. | Run targeted validation, then full validation. | Return repair log, repaired object, and unresolved issues if any. |
| `localize` | Generate locale-specific representation without changing canonical meaning. | Preserve canonical ID; add locale variant. | Validate terminology, cultural fit, and semantic equivalence. | Return localized labels, descriptions, examples, and locale metadata. |
| `enrich` | Add relationships, evidence, examples, metrics, or operational detail. | Preserve identity; append enrichment provenance. | Validate that enrichment does not introduce contradiction. | Return enriched object and confidence changes. |
| `evidence_refresh` | Reassess evidence, sources, confidence, and aging. | Preserve identity; update evidence state and refresh timestamp. | Validate source reliability and evidence-object fit. | Return evidence delta, confidence changes, and refresh status. |
| `evolution_successor` | Create a successor object when the entity materially changes. | Create new ID; link predecessor and successor. | Validate successor necessity and backward compatibility. | Return successor object, migration notes, and deprecation metadata for predecessor when appropriate. |

### 8.1 Operation Preconditions

All operations require: authenticated generation context, declared operation, target entity type, canonical language, evidence policy, registry mode, validation mode, and release mode. When any required context is missing, the generator must request repair input or return a structured failure rather than guessing.

### 8.2 Operation Postconditions

All successful operations must produce: a KOS envelope, canonical identity, normalized labels, entity-specific fields, ontology relationships, evidence state, validation report, registry action, query facets, lifecycle metadata, and compilation artifacts.


## 9. Universal Knowledge Production Pipeline Implementation

The generator implements UKPP as a deterministic production pipeline. Each stage has explicit inputs, outputs, controls, and failure gates.

| Stage | Name | Input | Processing | Output | Failure Gate |
|---:|---|---|---|---|---|
| 1 | Intake | User request, seed object, operation | Parse operation, entity scope, locale, registry intent | Normalized request | Missing operation or incompatible entity |
| 2 | Ontology Binding | Normalized request | Bind to Career Ontology classes and allowed relationships | Ontology binding map | Unknown class or illegal relation |
| 3 | Draft Generation | Binding map and source facts | Generate canonical object fields | Draft KOS object | Insufficient facts for required fields |
| 4 | Entity-Specific Completion | Draft object | Populate mandatory entity-specific fields | Complete draft | Missing mandatory entity field |
| 5 | Relationship Expansion | Complete draft | Add allowed relationships and inverse relation hints | Relationship graph | Unsupported or cyclic relation |
| 6 | Evidence Handling | Relationship graph | Attach, assess, refresh, or mark evidence state | Evidence ledger | Fabricated, weak, stale, or mismatched evidence |
| 7 | Validation | Candidate object | Run UKVF validation suites | Validation report | Critical or blocking issue |
| 8 | Repair Loop | Validation report | Repair object deterministically | Repaired object | More than two repair cycles or unresolved critical issue |
| 9 | Registry Decision | Validated object | Determine create, revise, merge, deprecate, or reject | Registry action | Duplicate conflict or identity collision |
| 10 | Compilation | Registry-ready object | Compile to Markdown, JSON, graph triples, embedding text, API payload | Release bundle | Compilation mismatch |
| 11 | Release | Release bundle | Produce final response and audit log | Released object | Incomplete release artifact |

### 9.1 Repair Loop Limit

The generator may perform at most two automatic repair cycles per operation. A third unresolved critical defect must produce a structured `repair_required` failure with field-level diagnostics.


## 10. Universal Knowledge Validation Framework Implementation

Validation is mandatory for every operation. A generated object is releasable only when all blocking validations pass.

| Validation Layer | Checks | Severity When Failed | Repair Strategy |
|---|---|---|---|
| Structural | Required fields, data types, enum values, version fields, schema shape | Blocking | Fill missing required fields from source input or return repair failure. |
| Semantic | Definition clarity, non-circular wording, entity boundary, operational meaning | Blocking | Rewrite definition and boundary fields. |
| Ontological | Valid class, allowed relationships, inverse relation compatibility, hierarchy consistency | Blocking | Remove illegal relations or rebind entity class. |
| Evidence | Source existence, evidence relevance, evidence age, confidence level, provenance | Blocking for evidence-backed claims | Downgrade confidence, remove claim, or trigger evidence refresh. |
| Safety | AI Constitution alignment, privacy, non-deception, harmful automation risk | Blocking | Remove unsafe execution claim or constrain automation metadata. |
| Language | Canonical language quality, locale equivalence, controlled vocabulary | Major | Normalize terms and regenerate localized labels. |
| Registry | ID uniqueness, duplicate detection, version lineage, merge eligibility | Blocking | Merge, revise, or allocate successor identity. |
| Query | Facet completeness, search labels, relationship indexability | Major | Add missing facets and synonyms. |
| Evolution | Lifecycle state, successor/predecessor logic, deprecation conditions | Major | Correct lifecycle metadata. |
| Compilation | Markdown/JSON/triple/API equivalence, checksum consistency | Blocking | Recompile from canonical object. |

### 10.1 Validation Result Format

Each validation run produces:

```yaml
validation_result:
  status: pass | fail | repair_required
  blocking_issue_count: 0
  major_issue_count: 0
  minor_issue_count: 0
  checks:
- check_id: string
  layer: structural | semantic | ontological | evidence | safety | language | registry | query | evolution | compilation
  status: pass | fail
  severity: blocking | major | minor
  message: string
  repaired: boolean
  release_decision: release | repair | reject
```


## 11. Registry, Identity, and Versioning Rules

The generator follows UKR registry semantics.

### 11.1 Canonical Identity

```text
<object_type>:<normalized_slug>:v<major>
```

Identity rules:

1. `object_type` must equal the generator entity type.
2. `normalized_slug` is derived from the canonical English label using lowercase ASCII, hyphen separators, and no organization-specific secrets.
3. `major` increments only for evolution successors or incompatible semantic changes.
4. Revisions preserve `object_id` and increment `object_version`.
5. Localizations do not create new canonical object IDs.

### 11.2 Registry Actions

| Registry Action | When Used | Required Metadata |
|---|---|---|
| `create_new` | No equivalent object exists. | object_id, object_version, created_at, created_by_generator |
| `revise_existing` | Same entity meaning, improved fields. | revision_summary, previous_version, changed_fields |
| `merge_duplicate` | Two objects represent the same entity. | retained_id, merged_ids, merge_reason |
| `repair_existing` | Invalid object can be fixed without semantic replacement. | repair_summary, validation_before, validation_after |
| `create_successor` | Entity meaning changed materially. | predecessor_id, successor_reason, migration_guidance |
| `reject_candidate` | Candidate violates blocking constraints. | rejection_reason, failed_checks |

### 11.3 Deduplication Signals

The generator must compare canonical label, aliases, definition, relationship signature, examples, dependency pattern, and lifecycle context before creating a new object.


## 12. Language and Localization Rules

The canonical object language is English unless the registry request explicitly sets another canonical language. Localization is additive and must preserve meaning.

| Field Type | Localization Rule |
|---|---|
| Canonical ID | Never localized. |
| Canonical label | Preserved; localized label added separately. |
| Definition | Localized with semantic equivalence and domain terminology control. |
| Examples | May be culturally adapted if the underlying entity meaning remains identical. |
| Relationships | Never localized at ID level; display labels may be localized. |
| Evidence | Source metadata preserved; commentary may be localized. |
| Query facets | Add locale-specific synonyms and spelling variants. |

### 12.1 Required Locale Metadata

```yaml
localization:
  canonical_language: en
  localized_variants:
- locale: id-ID
  label: string
  definition: string
  semantic_equivalence: exact | near_exact
  reviewer_required: false
```


## 13. Query Support

The generator must produce objects that can be retrieved and reasoned over through UKQF.

### 13.1 Required Query Facets

Every generated object must expose:

- `object_id`
- `object_type`
- `canonical_label`
- `aliases`
- `definition_terms`
- `ontology_classes`
- `related_careers`
- `related_skills`
- `related_competencies`
- `related_knowledge_domains`
- `related_technologies`
- `related_tools`
- `lifecycle_state`
- `evidence_confidence`
- `automation_level`
- `ai_applicability`
- `locale_variants`

### 13.2 Query Examples

```yaml
queries:
  by_label: "find entity where canonical_label ~= 'example label'"
  by_dependency: "find entities requiring technology:<slug>:v1"
  by_skill_gap: "find entities requiring skill:<slug>:v1 and proficiency >= intermediate"
  by_lifecycle: "find entities where lifecycle_state in ['active','deprecated']"
  by_ai_applicability: "find entities where ai_execution.possible = true and human_review_required = true"
```


## 14. Evolution and Successor Rules

The generator follows UKEF for controlled change over time.

| Evolution Condition | Required Action |
|---|---|
| Minor wording improvement | `revise` existing object. |
| Added relationship without semantic change | `enrich` existing object. |
| Evidence confidence changed | `evidence_refresh` existing object. |
| Entity becomes obsolete but still historically valid | Mark lifecycle state `deprecated`. |
| Entity is replaced by a materially different entity | Create `evolution_successor`. |
| Entity was incorrectly classified | Run `repair`; if class changes, create registry migration record. |
| Entity merges into broader canonical object | `merge_duplicate` and preserve aliases. |

### 14.1 Lifecycle States

```yaml
lifecycle_state: proposed | active | mature | declining | deprecated | retired
```

### 14.2 Successor Metadata

```yaml
evolution:
  predecessor_id: string
  successor_id: string
  successor_reason: string
  compatibility: backward_compatible | partially_compatible | incompatible
  migration_guidance: string
  effective_date: YYYY-MM-DD
```


## 15. Compilation Outputs

The generator must compile every validated object into equivalent output formats.

| Output | Purpose | Required Guarantee |
|---|---|---|
| Markdown | Human review, documentation, pull request review | Full object rendered with tables and relationship sections. |
| JSON | API ingestion and automated validation | Must conform to JSON Schema in Section 17. |
| Graph triples | Ontology graph ingestion | Subject-predicate-object triples preserve relationship semantics. |
| Embedding text | Semantic retrieval | Concise, non-lossy natural language summary. |
| Registry payload | UKR write operation | Includes identity, lifecycle, lineage, validation, and checksum metadata. |
| Localization bundle | UKL consumption | Includes canonical and localized display fields. |

### 15.1 Compilation Consistency Rule

All compiled outputs must be derived from the same canonical object. Manual divergence between Markdown, JSON, graph triples, and registry payload is a blocking failure.


## 16. Architecture and Mermaid Diagrams

### 16.1 Architecture Diagram

```mermaid
graph TD
  A[Operation Request] --> B[UEGF Intake Normalizer]
  B --> C[Technology Boundary Classifier]
  C --> D[KOS Object Builder]
  D --> E[Taxonomy and Stack Classifier]
  E --> F[Lifecycle Maturity Assessor]
  F --> G[Dependency Compatibility Modeler]
  G --> H[Standards Ecosystem Binder]
  H --> I[UKVF Validation]
  I -->|pass| J[UKR Registry Decision]
  I -->|repairable| K[Repair Loop]
  K --> E
  I -->|blocking failure| L[Structured Failure Report]
  J --> M[UKCF Compilation]
  M --> N[Markdown JSON Triples Embedding API Payload]
```

### 16.2 Sequence Diagram

```mermaid
sequenceDiagram
  participant User
  participant Generator as Technology Generator V1
  participant Ontology as Career Ontology
  participant Validator as UKVF
  participant Registry as UKR
  participant Compiler as UKCF

  User->>Generator: operation request
  Generator->>Generator: normalize and classify technology candidate
  Generator->>Ontology: bind Technology class and relationships
  Ontology-->>Generator: allowed relations and constraints
  Generator->>Generator: generate taxonomy lifecycle stack dependencies
  Generator->>Validator: validate candidate and evidence state
  Validator-->>Generator: validation report
  alt pass
    Generator->>Registry: submit registry action
    Registry-->>Generator: registry decision
    Generator->>Compiler: compile release bundle
    Compiler-->>Generator: compiled outputs
    Generator-->>User: released technology object
  else repairable
    Generator->>Generator: repair classification or dependency model
    Generator->>Validator: revalidate
  else blocked
    Generator-->>User: structured failure report
  end
```

### 16.3 State Diagram

```mermaid
stateDiagram-v2
  [*] --> Intake
  Intake --> BoundaryCheck
  BoundaryCheck --> TaxonomyDraft: valid technology
  BoundaryCheck --> Rejected: tool skill task or domain
  TaxonomyDraft --> StackModeling
  StackModeling --> LifecycleMaturity
  LifecycleMaturity --> DependencyCompatibility
  DependencyCompatibility --> StandardsEcosystem
  StandardsEcosystem --> Validation
  Validation --> Repair: repairable
  Repair --> Validation
  Validation --> RegistryReady: pass
  Validation --> Failed: blocking
  RegistryReady --> Compiled
  Compiled --> Released
  Released --> Revised
  Released --> Localized
  Released --> Enriched
  Released --> EvidenceRefreshed
  Released --> Deprecated
  Deprecated --> SuccessorCreated
  Failed --> [*]
  Rejected --> [*]
  SuccessorCreated --> [*]
```

### 16.4 Flowchart

```mermaid
flowchart LR
  Start([Start]) --> Parse[Parse operation]
  Parse --> Boundary{Is candidate technology, not tool or skill?}
  Boundary -- No --> FailBoundary[Return boundary failure with correct entity direction]
  Boundary -- Yes --> Tax[Classify taxonomy and stack layer]
  Tax --> Life[Assess lifecycle maturity support]
  Life --> Dep[Model dependencies compatibility standards]
  Dep --> Eco[Map ecosystem tools and practices]
  Eco --> Validate{UKVF pass?}
  Validate -- Yes --> Register[Registry decision]
  Validate -- Repairable --> Repair[Repair classification evidence relation defects]
  Repair --> Validate
  Validate -- No --> Fail[Structured failure]
  Register --> Compile[Compile outputs]
  Compile --> End([Release])
```

### 16.5 Ontology Relationship Diagram

```mermaid
erDiagram
  TECHNOLOGY ||--o{ TOOL : enables
  TECHNOLOGY }o--o{ TECHNOLOGY : depends_on
  TECHNOLOGY }o--o{ TECHNOLOGY : compatible_with
  TECHNOLOGY }o--o{ TECHNOLOGY : replaces
  TECHNOLOGY }o--o{ SKILL : requires
  TECHNOLOGY }o--o{ KNOWLEDGE_DOMAIN : requires
  TECHNOLOGY }o--o{ WORK_TASK : supports
  TECHNOLOGY }o--o{ WORK_ACTIVITY : supports
  CAREER ||--o{ TECHNOLOGY : uses
```

## 17. Schemas

### 17.1 Technology JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://karirgps.internal/schema/technology_generator_v1.json",
  "title": "Technology KOS Object",
  "type": "object",
  "required": [
    "kos", "canonical_label", "aliases", "definition", "technology_taxonomy",
    "technology_lifecycle", "maturity", "technology_stack", "dependencies",
    "compatibility", "replacement", "deprecation", "technology_evolution",
    "technology_relationships", "technology_standards", "technology_ecosystem",
    "required_skills", "required_competencies", "required_knowledge_domains",
    "supported_tasks", "supported_activities", "automation_relevance", "ai_relevance",
    "risks_and_constraints", "relationships", "evidence", "validation", "registry",
    "query_facets"
  ],
  "properties": {
    "kos": {
      "type": "object",
      "required": ["kos_version", "object_id", "object_type", "object_version", "lifecycle_state", "canonical_language", "created_by_generator"],
      "properties": {
        "object_id": {"type": "string", "pattern": "^technology:[a-z0-9-]+:v[0-9]+$"},
        "object_type": {"const": "technology"},
        "created_by_generator": {"const": "generator:technology:v1"}
      }
    },
    "canonical_label": {"type": "string", "minLength": 2},
    "aliases": {"type": "array", "items": {"type": "string"}},
    "definition": {"type": "string", "minLength": 25},
    "technology_taxonomy": {"type": "object"},
    "technology_lifecycle": {"type": "object"},
    "maturity": {"type": "object"},
    "technology_stack": {"type": "object"},
    "dependencies": {"type": "array", "items": {"type": "object"}},
    "compatibility": {"type": "array", "items": {"type": "object"}},
    "replacement": {"type": "object"},
    "deprecation": {"type": "object"},
    "technology_evolution": {"type": "object"},
    "technology_relationships": {"type": "object"},
    "technology_standards": {"type": "array", "items": {"type": "object"}},
    "technology_ecosystem": {"type": "object"},
    "required_skills": {"type": "array", "items": {"type": "object"}},
    "required_competencies": {"type": "array", "items": {"type": "object"}},
    "required_knowledge_domains": {"type": "array", "items": {"type": "object"}},
    "supported_tasks": {"type": "array", "items": {"type": "object"}},
    "supported_activities": {"type": "array", "items": {"type": "object"}},
    "automation_relevance": {"type": "object"},
    "ai_relevance": {"type": "object"},
    "risks_and_constraints": {"type": "array", "items": {"type": "object"}},
    "relationships": {"type": "object"},
    "evidence": {"type": "array", "items": {"type": "object"}},
    "validation": {"type": "object"},
    "registry": {"type": "object"},
    "query_facets": {"type": "object"}
  }
}
```

### 17.2 Compatibility Schema

```yaml
compatibility_item:
  target_id: string
  target_type: technology | tool | standard | platform
  compatibility_type: version | protocol | runtime | data_format | operating_system | hardware | license | security
  status: compatible | conditionally_compatible | incompatible | unknown
  constraints: string[]
  evidence_refs: string[]
```


## 18. Prompt Templates

Prompt templates are implementation assets for deterministic generator execution. Template variables are runtime-supplied values and must be filled before execution.

### 18.1 System Prompt Template

```text
You are the KarirGPS Technology Generator V1.
Operate only within the inherited KarirGPS architecture.
Do not redesign any foundation or framework.
Generate, validate, repair, register, localize, enrich, refresh evidence, or create successors for Technology objects according to Generator Development Standard V1, KOS, Career Ontology, AI Constitution, UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, and UKCF.
Return only KOS-compliant objects or structured failure reports.
```

### 18.2 Create Operation Prompt

```text
Operation: create
Entity type: technology
Canonical label: {CANONICAL_LABEL}
Context: {CONTEXT}
Locale: {LOCALE}
Evidence policy: {EVIDENCE_POLICY}
Registry mode: {REGISTRY_MODE}

Generate a complete KOS object. Include mandatory entity-specific fields, ontology relationships, lifecycle metadata, query facets, validation report, and compilation-ready output.
```

### 18.3 Revise Operation Prompt

```text
Operation: revise
Object ID: {OBJECT_ID}
Current object: {CURRENT_OBJECT}
Requested change: {CHANGE_REQUEST}

Preserve identity unless the request requires a successor. Apply the revision, update version metadata, validate impacted fields, and return a revision diff plus the complete revised object.
```

### 18.4 Repair Operation Prompt

```text
Operation: repair
Object ID: {OBJECT_ID}
Validation failures: {VALIDATION_FAILURES}
Current object: {CURRENT_OBJECT}

Repair only the invalid or inconsistent fields. Do not invent evidence. Return repair log, validation after repair, and the complete repaired object.
```

### 18.5 Localize Operation Prompt

```text
Operation: localize
Object ID: {OBJECT_ID}
Target locale: {TARGET_LOCALE}
Canonical object: {CANONICAL_OBJECT}

Create a locale-specific representation that preserves canonical meaning. Add localized labels, definition, examples, and query synonyms. Validate semantic equivalence.
```

### 18.6 Enrich Operation Prompt

```text
Operation: enrich
Object ID: {OBJECT_ID}
Enrichment request: {ENRICHMENT_REQUEST}
Canonical object: {CANONICAL_OBJECT}

Add valid relationships, evidence, examples, metrics, or operational details. Preserve identity. Validate contradictions, evidence fit, and query impact.
```

### 18.7 Evidence Refresh Prompt

```text
Operation: evidence_refresh
Object ID: {OBJECT_ID}
Evidence policy: {EVIDENCE_POLICY}
Canonical object: {CANONICAL_OBJECT}

Reassess evidence relevance, reliability, freshness, and claim support. Update confidence and evidence state. Remove or downgrade unsupported claims.
```

### 18.8 Evolution Successor Prompt

```text
Operation: evolution_successor
Predecessor object ID: {PREDECESSOR_ID}
Change driver: {CHANGE_DRIVER}
Current object: {CURRENT_OBJECT}

Create a successor only if the entity meaning materially changes. Link predecessor and successor, provide compatibility status, migration guidance, lifecycle metadata, and validation report.
```


## 19. Validation Examples

### 19.1 Passing Example

```yaml
canonical_label: "Containerization"
object_type: technology
definition: "An operating-system-level virtualization technology that packages applications and dependencies into isolated, portable runtime units called containers."
technology_taxonomy:
  primary_category: infrastructure
  abstraction_level: architecture
  stack_layer: runtime
technology_lifecycle:
  lifecycle_state: mature
  maturity_level: established
  adoption_pattern: widespread
technology_stack:
  upstream_dependencies:
    - operating_system_kernel_features
  downstream_enables:
    - container_orchestration
    - cloud_native_deployment
technology_ecosystem:
  related_tools:
    - Docker
    - Podman
    - Kubernetes
validation_result:
  status: pass
```

Why it passes: it describes an enabling technical capability, not a single product, and includes taxonomy, stack, maturity, dependencies, and ecosystem.

### 19.2 Repairable Example

```yaml
canonical_label: "Figma"
definition: "A design collaboration platform used for UI and UX work."
```

Repair action: reclassify as `tool` unless the request specifically concerns the browser-based collaborative design technology pattern rather than the product.

## 20. Failure Examples

| Failure Case | Invalid Input | Failure Reason | Required Response |
|---|---|---|---|
| Tool misclassified | "Tableau" as technology | Specific software tool. | Reject as Technology; suggest Tool. |
| Skill misclassified | "SQL querying" | Human skill using a technology. | Suggest Skill; link to SQL technology if present. |
| No lifecycle | Technology object has no maturity or support status | Lifecycle requirement missing. | Repair lifecycle fields. |
| Fabricated deprecation | Claims deprecation without evidence | Evidence failure. | Remove claim or trigger evidence refresh. |
| Incompatible successor | Successor created for minor version update | Evolution misuse. | Revise existing object instead. |

## 21. Conformance Tests

| Test ID | Test Name | Input | Expected Result |
|---|---|---|---|
| TECH-CREATE-001 | Create technology | "Create technology: relational database" | Valid `technology` with taxonomy, lifecycle, stack, dependencies, standards. |
| TECH-BOUNDARY-002 | Reject tool | "Create technology: Visual Studio Code" | Boundary failure; suggest Tool. |
| TECH-TAX-003 | Taxonomy classification | "OAuth 2.0" | Protocol/security/integration classification with standards metadata. |
| TECH-LIFE-004 | Lifecycle classification | "COBOL" | Mature or legacy state with evidence policy and ecosystem context. |
| TECH-DEP-005 | Dependency modeling | "WebAssembly" | Runtime, browser, compiler/toolchain dependencies modeled. |
| TECH-COMP-006 | Compatibility modeling | "PostgreSQL extensions" | Conditional compatibility captured. |
| TECH-EVID-007 | Evidence refresh | Fast-changing library ecosystem | Evidence state and confidence updated. |
| TECH-LOC-008 | Localize to Indonesian | Valid English object | Adds `id-ID` fields without changing ID. |
| TECH-EVO-009 | Successor creation | Replaced technology | Successor linked with migration guidance. |
| TECH-COMPILATION-010 | Compile equivalence | Valid object | Markdown, JSON, triples, embedding text, registry payload align. |


## 22. Engineering Certification Checklist

A generator implementation is engineering-certified only when every item is satisfied.

| Check | Status Required |
|---|---|
| Inherits AI Constitution without modification | Pass |
| Inherits Career Ontology without modification | Pass |
| Inherits KOS without modification | Pass |
| Inherits UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, UKCF | Pass |
| Implements all required operations | Pass |
| Includes entity-specific required fields | Pass |
| Includes architecture, sequence, state, and flow diagrams | Pass |
| Includes schemas and prompt templates | Pass |
| Includes validation examples and failure examples | Pass |
| Includes conformance tests | Pass |
| Provides deterministic identity and versioning rules | Pass |
| Provides lifecycle and successor rules | Pass |
| Provides evidence handling and refresh behavior | Pass |
| Produces no registry write without validation pass | Pass |
| Produces no unsupported automation or AI execution claim | Pass |
| Compiles into Markdown, JSON, triples, embedding text, and registry payload | Pass |

## 23. Production Readiness Checklist

| Readiness Area | Requirement | Release Gate |
|---|---|---|
| Operational completeness | All required operations available and tested. | Blocking |
| Entity completeness | All mandatory entity fields generated. | Blocking |
| Validation | UKVF pass required for release. | Blocking |
| Repair | Automatic repair bounded and auditable. | Blocking |
| Registry | Identity, duplicate detection, lineage, and lifecycle supported. | Blocking |
| Localization | Canonical and localized fields separated. | Major |
| Evidence | Evidence claims traceable and refreshable. | Blocking for evidence-backed claims |
| Safety | AI execution and automation fields safety-reviewed. | Blocking |
| Query | Required facets emitted. | Major |
| Compilation | Output equivalence verified across formats. | Blocking |
| Observability | Validation report, repair log, and registry decision emitted. | Major |
| Maintainability | Versioned document, stable schemas, deterministic prompts. | Major |

## 24. Release Contract

This generator is production-ready when invoked with a valid operation request and sufficient source facts. It must produce either a complete KOS-compliant object or a structured failure report. It must never silently omit required fields, fabricate evidence, create illegal ontology relationships, or bypass validation.
