# Work Task Generator V1

**File Path:** `assets/knowledge/generators/work_task/Work_Task_Generator_V1.md`  
**Generator ID:** `generator:work_task:v1`  
**Entity Type:** `work_task`  
**Status:** Production Ready  
**Version:** 1.0.0  
**Release Date:** 2026-06-28  
**Owner:** KarirGPS Principal Knowledge Engineering Team

---

## 1. Document Control

| Field | Value |
|---|---|
| Document name | Work Task Generator V1 |
| Canonical file | `assets/knowledge/generators/work_task/Work_Task_Generator_V1.md` |
| Generator class | Entity Generator |
| Target entity | Work Task |
| Upstream dependencies | AI Constitution, Career Knowledge Ontology, KOS, UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, UKCF, Generator Development Standard V1 |
| Reference style | Career Generator V1, Skill Generator V1, Competency Generator V1, Knowledge Domain Generator V1 |
| Release state | Production-ready implementation specification |
| Change policy | Revisions must preserve architecture inheritance and pass conformance tests |

## 2. Purpose and Scope

The Work Task Generator V1 creates, revises, repairs, localizes, enriches, refreshes evidence for, and creates evolution successors for `work_task` knowledge objects. A work task is an atomic unit of work that can be assigned, executed, observed, evaluated, decomposed, sequenced, automated, and connected to the competencies, skills, knowledge domains, technologies, and tools required for performance.

This generator defines the canonical structure of a work task in KarirGPS. It is used to represent concrete work units such as "Prepare monthly payroll reconciliation", "Run vulnerability scan", "Draft patient discharge summary", or "Configure CI pipeline environment variables". It does not generate broad job roles, careers, skills, competencies, activities, technologies, or tools except as relationships to those existing entity types.

### 2.1 In Scope

- Atomic work unit definition.
- Inputs, outputs, preconditions, postconditions, dependencies, failure conditions, and completion criteria.
- Required competencies, skills, knowledge domains, technologies, and tools.
- Automation potential and AI execution possibility.
- Task hierarchy, parent-child structure, decomposition rules, sequencing, and dependency semantics.
- Operation support for `create`, `revise`, `repair`, `localize`, `enrich`, `evidence_refresh`, and `evolution_successor`.

### 2.2 Out of Scope

- Redefining Work Activity, Career, Skill, Competency, Knowledge Domain, Technology, or Tool schemas.
- Creating a new ontology, pipeline, validation framework, registry framework, language framework, query framework, evolution framework, or compilation framework.
- Treating a broad responsibility, ongoing process, or job family as a work task.


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


## 5. Entity Definition: Work Task

A `work_task` is the smallest meaningful career-knowledge unit that describes a discrete, outcome-oriented unit of work. It has explicit inputs and outputs, can be started and completed, has defined quality criteria, and may be part of a task hierarchy or an activity composition.

### 5.1 Canonical Definition

```yaml
object_type: work_task
canonical_definition: >
  An atomic, outcome-oriented unit of work with defined inputs, outputs,
  preconditions, postconditions, dependencies, required capabilities,
  failure conditions, and completion criteria.
boundary_rule: >
  A work task must be small enough to be executed and evaluated as a unit,
  but large enough to produce a meaningful work output.
```

### 5.2 Work Task Boundary Tests

| Test | A Valid Work Task Must Answer |
|---|---|
| Atomicity | Can a competent performer complete this as one unit of work? |
| Outcome | What concrete output is produced? |
| Start condition | What must be true before work begins? |
| Completion | What proves the task is done? |
| Capability | Which skills, competencies, and knowledge domains are needed? |
| Dependency | Which tasks, tools, technologies, or inputs are required first? |
| Automation | Can software, AI, or machines execute or assist the task? |

### 5.3 Non-Examples

| Invalid Candidate | Reason It Is Not a Work Task | Correct Entity Direction |
|---|---|---|
| "Customer support" | Too broad and ongoing. | Work Activity or Career responsibility. |
| "Data analysis" | Capability area, not an atomic work unit. | Skill, Competency, or Knowledge Domain. |
| "Python" | Technology/language, not work. | Technology or Tool relation. |
| "Manage operations" | Broad accountability, not a single executable unit. | Work Activity or role responsibility. |

## 6. Ontology Alignment

Work Task objects occupy the execution layer of the Career Knowledge Ontology.

### 6.1 Required Ontology Class

```yaml
ontology_binding:
  primary_class: career_ontology.WorkTask
  parent_classes:
    - career_ontology.WorkUnit
    - career_ontology.OperationalEntity
  disjoint_with:
    - career_ontology.WorkActivity
    - career_ontology.Skill
    - career_ontology.Competency
    - career_ontology.Technology
    - career_ontology.Tool
```

### 6.2 Allowed Relationships

| Relationship | Target Entity | Cardinality | Meaning |
|---|---|---:|---|
| `part_of_activity` | `work_activity` | 0..n | Activity containing the task. |
| `parent_task` | `work_task` | 0..1 | Higher-level task that decomposes into this task. |
| `subtask` | `work_task` | 0..n | Lower-level task required for completion. |
| `depends_on_task` | `work_task` | 0..n | Task that must be completed or available first. |
| `produces_output_for` | `work_task` or `work_activity` | 0..n | Downstream work unit using this task output. |
| `requires_competency` | `competency` | 0..n | Competency required to perform the task well. |
| `requires_skill` | `skill` | 0..n | Skill required for execution. |
| `requires_knowledge_domain` | `knowledge_domain` | 0..n | Knowledge domain required for understanding. |
| `uses_technology` | `technology` | 0..n | Technology needed during execution. |
| `uses_tool` | `tool` | 0..n | Tool needed during execution. |
| `supports_career` | `career` | 0..n | Career in which this task is commonly performed. |

### 6.3 Relationship Integrity Rules

1. `subtask` must be a work task and must not create a cycle with `parent_task`.
2. `depends_on_task` must not be equivalent to the same object ID.
3. `uses_tool` should imply at least one compatible `uses_technology` when the tool requires a technology platform.
4. `requires_skill` must not duplicate `requires_competency`; skills describe performable ability, competencies describe integrated performance capacity.
5. A task can be part of multiple activities only when it is reusable across activity contexts.

## 7. Canonical Object Model

### 7.1 Required KOS Envelope

```yaml
kos:
  kos_version: "1.0"
  object_id: "work_task:<slug>:v1"
  object_type: "work_task"
  object_version: "1.0.0"
  lifecycle_state: active
  canonical_language: en
  created_by_generator: "generator:work_task:v1"
  created_at: "YYYY-MM-DD"
  updated_at: "YYYY-MM-DD"
```

### 7.2 Required Work Task Fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `canonical_label` | string | Yes | Human-readable task name using verb-object form. |
| `aliases` | string[] | Yes | Alternative labels, abbreviations, or regional variants. |
| `definition` | string | Yes | Clear task definition with outcome. |
| `atomic_work_unit` | object | Yes | Atomicity, granularity, performer, duration band. |
| `inputs` | object[] | Yes | Materials, data, requests, instructions, or conditions consumed. |
| `outputs` | object[] | Yes | Deliverables, decisions, records, updates, or physical outputs produced. |
| `preconditions` | string[] | Yes | Conditions that must be true before execution. |
| `postconditions` | string[] | Yes | Conditions that must be true after successful completion. |
| `dependencies` | object[] | Yes | Upstream task, activity, technology, tool, data, or approval dependencies. |
| `required_competencies` | relation[] | Yes | Competency relations with proficiency demand and criticality. |
| `required_skills` | relation[] | Yes | Skill relations with proficiency demand and criticality. |
| `required_knowledge_domains` | relation[] | Yes | Knowledge domain relations. |
| `technologies` | relation[] | Yes | Technologies used or required. |
| `tools` | relation[] | Yes | Tools used or required. |
| `automation_potential` | object | Yes | Automation suitability, level, constraints, and risk. |
| `ai_execution_possibility` | object | Yes | Whether AI can execute, assist, review, or only advise. |
| `failure_conditions` | object[] | Yes | Conditions that make the task fail or unsafe. |
| `completion_criteria` | object[] | Yes | Observable criteria for done state and quality acceptance. |
| `task_hierarchy` | object | Yes | Parent, child, sibling, and decomposition metadata. |
| `task_decomposition` | object | Yes | Rules and subtask sequence. |
| `quality_metrics` | object[] | Yes | Measures of correctness, timeliness, completeness, risk, or quality. |
| `human_review` | object | Yes | Human oversight requirements. |
| `relationships` | object | Yes | Ontology relationships. |
| `evidence` | object[] | Yes | Evidence ledger or explicit no-evidence-needed state for generic tasks. |
| `validation` | object | Yes | UKVF validation result. |
| `registry` | object | Yes | UKR action and lineage metadata. |
| `query_facets` | object | Yes | UKQF indexing metadata. |

### 7.3 Atomic Work Unit Contract

```yaml
atomic_work_unit:
  granularity: atomic | composite_candidate | too_broad
  performer_type: human | ai | human_ai_team | machine | software_system
  estimated_duration_band: seconds | minutes | hours | days
  repeatability: one_time | recurring | event_triggered | continuous_monitoring
  assignment_unit: individual | pair | team | system
  observability: direct | indirect | audit_log | output_only
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
  B --> C[Work Task Boundary Classifier]
  C --> D[KOS Object Builder]
  D --> E[Task Field Composer]
  E --> F[Ontology Relationship Binder]
  F --> G[Automation and AI Applicability Assessor]
  G --> H[UKVF Validation]
  H -->|pass| I[UKR Registry Decision]
  H -->|repairable| J[Repair Loop]
  J --> E
  H -->|blocking failure| K[Structured Failure Report]
  I --> L[UKCF Compilation]
  L --> M[Markdown JSON Triples Embedding API Payload]
```

### 16.2 Sequence Diagram

```mermaid
sequenceDiagram
  participant User
  participant Generator as Work Task Generator V1
  participant Ontology as Career Ontology
  participant Validator as UKVF
  participant Registry as UKR
  participant Compiler as UKCF

  User->>Generator: operation request
  Generator->>Generator: normalize request and classify task boundary
  Generator->>Ontology: bind WorkTask class and relationships
  Ontology-->>Generator: allowed relations and constraints
  Generator->>Generator: generate KOS candidate
  Generator->>Validator: validate candidate
  Validator-->>Generator: validation result
  alt pass
    Generator->>Registry: submit registry action
    Registry-->>Generator: registry decision
    Generator->>Compiler: compile release formats
    Compiler-->>Generator: compiled outputs
    Generator-->>User: released work_task object
  else repairable
    Generator->>Generator: repair candidate
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
  BoundaryCheck --> Drafting: valid task candidate
  BoundaryCheck --> Rejected: not atomic work unit
  Drafting --> RelationshipBinding
  RelationshipBinding --> Validation
  Validation --> Repair: repairable defect
  Repair --> Validation
  Validation --> RegistryReady: pass
  Validation --> Failed: blocking defect
  RegistryReady --> Compiled
  Compiled --> Released
  Released --> Revised: revise operation
  Released --> Enriched: enrich operation
  Released --> Localized: localize operation
  Released --> EvidenceRefreshed: evidence_refresh operation
  Released --> SuccessorCreated: evolution_successor operation
  Rejected --> [*]
  Failed --> [*]
  SuccessorCreated --> [*]
```

### 16.4 Flowchart

```mermaid
flowchart LR
  Start([Start]) --> Parse[Parse operation and entity request]
  Parse --> Atomic{Is candidate atomic?}
  Atomic -- No --> FailBroad[Return boundary failure with suggested entity type]
  Atomic -- Yes --> Fields[Generate task fields]
  Fields --> Rel[Bind ontology relationships]
  Rel --> Auto[Assess automation and AI execution]
  Auto --> Validate{UKVF pass?}
  Validate -- Yes --> Register[Create registry decision]
  Validate -- Repairable --> Repair[Repair invalid fields]
  Repair --> Validate
  Validate -- No --> Fail[Return structured failure]
  Register --> Compile[Compile outputs]
  Compile --> End([Release])
```

### 16.5 Ontology Relationship Diagram

```mermaid
erDiagram
  WORK_TASK ||--o{ WORK_TASK : decomposes_into
  WORK_ACTIVITY ||--o{ WORK_TASK : contains
  WORK_TASK }o--o{ COMPETENCY : requires
  WORK_TASK }o--o{ SKILL : requires
  WORK_TASK }o--o{ KNOWLEDGE_DOMAIN : requires
  WORK_TASK }o--o{ TECHNOLOGY : uses
  WORK_TASK }o--o{ TOOL : uses
  CAREER ||--o{ WORK_TASK : performs
```

## 17. Schemas

### 17.1 Work Task JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://karirgps.internal/schema/work_task_generator_v1.json",
  "title": "Work Task KOS Object",
  "type": "object",
  "required": [
    "kos", "canonical_label", "aliases", "definition", "atomic_work_unit",
    "inputs", "outputs", "preconditions", "postconditions", "dependencies",
    "required_competencies", "required_skills", "required_knowledge_domains",
    "technologies", "tools", "automation_potential", "ai_execution_possibility",
    "failure_conditions", "completion_criteria", "task_hierarchy", "task_decomposition",
    "quality_metrics", "human_review", "relationships", "evidence", "validation",
    "registry", "query_facets"
  ],
  "properties": {
    "kos": {
      "type": "object",
      "required": ["kos_version", "object_id", "object_type", "object_version", "lifecycle_state", "canonical_language", "created_by_generator"],
      "properties": {
        "kos_version": {"type": "string"},
        "object_id": {"type": "string", "pattern": "^work_task:[a-z0-9-]+:v[0-9]+$"},
        "object_type": {"const": "work_task"},
        "object_version": {"type": "string"},
        "lifecycle_state": {"enum": ["proposed", "active", "mature", "declining", "deprecated", "retired"]},
        "canonical_language": {"type": "string"},
        "created_by_generator": {"const": "generator:work_task:v1"}
      }
    },
    "canonical_label": {"type": "string", "minLength": 3},
    "aliases": {"type": "array", "items": {"type": "string"}},
    "definition": {"type": "string", "minLength": 20},
    "atomic_work_unit": {"type": "object"},
    "inputs": {"type": "array", "items": {"type": "object"}},
    "outputs": {"type": "array", "items": {"type": "object"}},
    "preconditions": {"type": "array", "items": {"type": "string"}},
    "postconditions": {"type": "array", "items": {"type": "string"}},
    "dependencies": {"type": "array", "items": {"type": "object"}},
    "required_competencies": {"type": "array", "items": {"type": "object"}},
    "required_skills": {"type": "array", "items": {"type": "object"}},
    "required_knowledge_domains": {"type": "array", "items": {"type": "object"}},
    "technologies": {"type": "array", "items": {"type": "object"}},
    "tools": {"type": "array", "items": {"type": "object"}},
    "automation_potential": {"type": "object"},
    "ai_execution_possibility": {"type": "object"},
    "failure_conditions": {"type": "array", "items": {"type": "object"}},
    "completion_criteria": {"type": "array", "items": {"type": "object"}},
    "task_hierarchy": {"type": "object"},
    "task_decomposition": {"type": "object"},
    "quality_metrics": {"type": "array", "items": {"type": "object"}},
    "human_review": {"type": "object"},
    "relationships": {"type": "object"},
    "evidence": {"type": "array", "items": {"type": "object"}},
    "validation": {"type": "object"},
    "registry": {"type": "object"},
    "query_facets": {"type": "object"}
  }
}
```

### 17.2 Relationship Object Schema

```yaml
relation:
  target_object_id: string
  target_object_type: career | skill | competency | knowledge_domain | work_activity | work_task | technology | tool
  relationship_type: string
  criticality: essential | important | optional
  proficiency_or_depth: foundational | intermediate | advanced | expert
  confidence: low | medium | high
  evidence_refs: string[]
```


## 18. Prompt Templates

Prompt templates are implementation assets for deterministic generator execution. Template variables are runtime-supplied values and must be filled before execution.

### 18.1 System Prompt Template

```text
You are the KarirGPS Work Task Generator V1.
Operate only within the inherited KarirGPS architecture.
Do not redesign any foundation or framework.
Generate, validate, repair, register, localize, enrich, refresh evidence, or create successors for Work Task objects according to Generator Development Standard V1, KOS, Career Ontology, AI Constitution, UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, and UKCF.
Return only KOS-compliant objects or structured failure reports.
```

### 18.2 Create Operation Prompt

```text
Operation: create
Entity type: work_task
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
canonical_label: "Validate invoice line items"
object_type: work_task
definition: "Compare invoice line items against purchase order and receipt records to identify quantity, price, tax, or vendor discrepancies before payment approval."
inputs:
  - purchase_order
  - goods_receipt
  - supplier_invoice
outputs:
  - validated_invoice_record
  - discrepancy_log
preconditions:
  - "Invoice, purchase order, and receipt records are available."
postconditions:
  - "Invoice status is approved, rejected, or marked for exception handling."
completion_criteria:
  - criterion: "All invoice lines checked against source records."
    measure: "100 percent line coverage"
automation_potential:
  level: high
  reason: "Structured matching rules can be automated, with exceptions routed to humans."
ai_execution_possibility:
  possible: true
  mode: assist_or_execute_with_review
  human_review_required: true
validation_result:
  status: pass
```

Why it passes: the task is atomic, has clear inputs and outputs, measurable completion criteria, and bounded automation claims.

### 19.2 Repairable Example

```yaml
canonical_label: "Reporting"
definition: "Make reports."
```

Repair action: convert to a specific verb-object task such as "Generate weekly sales performance report" and require inputs, outputs, completion criteria, and relationships.

## 20. Failure Examples

| Failure Case | Invalid Input | Failure Reason | Required Response |
|---|---|---|---|
| Too broad | "Manage finance operations" | Not atomic; describes ongoing activity or role accountability. | Return boundary failure and suggest Work Activity. |
| Missing output | "Review customer data" | No concrete output or completion proof. | Request repair or infer output only if provided by source facts. |
| Unsafe AI claim | "AI may approve controlled medication prescriptions autonomously" | Violates safety and domain oversight constraints. | Block autonomous AI execution; require licensed human review. |
| Circular hierarchy | Task A subtask of Task B and Task B subtask of Task A | Invalid task hierarchy. | Remove cycle and return repair log. |
| Fabricated evidence | Source claim supplied without evidence object | Evidence cannot be verified. | Downgrade claim or require evidence refresh. |

## 21. Conformance Tests

| Test ID | Test Name | Input | Expected Result |
|---|---|---|---|
| WT-CREATE-001 | Create atomic task | "Create task: reconcile bank statement" | Valid `work_task` with inputs, outputs, preconditions, postconditions, criteria. |
| WT-BOUNDARY-002 | Reject activity | "Create task: run accounting department" | Structured failure; candidate is not atomic. |
| WT-REL-003 | Validate required skill relation | Task requiring spreadsheet modeling | `requires_skill` relation emitted with criticality and proficiency. |
| WT-AI-004 | AI execution classification | Task: summarize meeting transcript | AI possible; human review depends on business criticality. |
| WT-AI-005 | Unsafe autonomy block | Task: approve legal settlement | AI may assist but not autonomously execute final approval. |
| WT-HIER-006 | Detect cycle | Parent/subtask cycle | Blocking ontology validation failure. |
| WT-REPAIR-007 | Repair vague label | "Documentation" | Repair to verb-object form or return repair failure. |
| WT-LOC-008 | Localize to Indonesian | Valid English object | Adds `id-ID` labels and examples; preserves canonical ID. |
| WT-EVO-009 | Create successor | Manual task replaced by materially different automated workflow | New successor ID with predecessor relation. |
| WT-COMP-010 | Compilation consistency | Valid object | Markdown, JSON, triples, and registry payload have equivalent facts. |


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
