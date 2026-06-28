# Certification Generator V1

    **File Path:** `assets/knowledge/generators/certification/Certification_Generator_V1.md`  
    **Generator ID:** `generator:certification:v1`  
    **Entity Type:** `certification`  
    **Status:** Production Ready  
    **Version:** 1.0.0  
    **Release Date:** 2026-06-28  
    **Owner:** KarirGPS Principal Knowledge Engineering Team

    ---

    ## 1. Document Control

    | Field | Value |
    |---|---|
    | Document name | Certification Generator V1 |
    | Canonical file | `assets/knowledge/generators/certification/Certification_Generator_V1.md` |
    | Generator class | Entity Generator |
    | Target entity | Certification |
    | Upstream dependencies | AI Constitution, Career Knowledge Ontology, KOS, UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, UKCF, Generator Development Standard V1 |
    | Reference generator lineage | Career, Skill, Competency, Knowledge Domain, Work Task, Work Activity, Technology, Tool, Industry, Organization, Education Program, Major Generators V1 |
    | Release state | Production-ready implementation specification |
    | Change policy | Revisions must preserve locked architecture inheritance and pass conformance tests. |


### 1.1 Generator Development Standard V1 Mandatory Section Map

| Required Element | Implemented Section |
|---|---|
| Purpose | Section 2 |
| Scope | Section 3 |
| Philosophy | Section 4 |
| Architecture | Section 6 |
| Lifecycle | Section 7 |
| Inputs/Outputs | Section 8 |
| Entity taxonomy and definition | Section 9 |
| Relationship mapping | Section 10 |
| Canonical object model | Section 11 |
| Generation Pipeline | Section 12 |
| Prompt Templates | Section 13 |
| Validation Rules | Section 14 |
| Failure Modes | Section 15 |
| Retry Strategy | Section 16 |
| Registry Integration | Section 17 |
| Language, query, and compilation | Section 18 |
| Evolution Model | Section 19 |
| Example Objects | Section 20 |
| Diagrams: Mermaid + Flow + Sequence + State | Section 21 |
| Conformance Tests | Section 22 |
| Production Readiness Checklist | Section 23 |
| Release Contract | Section 24 |


## 2. Purpose

The Certification Generator V1 creates, revises, repairs, localizes, enriches, refreshes evidence for, and creates evolution successors for `certification` knowledge objects. A certification is a formal credential issued by an identifiable authority after a defined assessment, verification, training completion, portfolio review, examination, audit, or competency-evaluation process. It signals that a person, and in limited cases an organization or system, has met an externally defined standard of knowledge, skill, competency, practice, safety, compliance, or technical capability.

## 3. Scope

### 3.1 In Scope

- Professional, academic, vendor, regulatory, industry-association, safety, compliance, microcredential, stackable, and continuing education certifications.
- Certification taxonomy, issuing authority, assessment model, competency mapping, skill validation mapping, industry alignment, renewal/expiration, global/local recognition, trust scoring, compliance mapping, and lifecycle.
- Relationships to careers, skills, competencies, domains, tasks, activities, technologies, tools, industries, organizations, education programs, majors, licenses, learning resources, and regulations.

### 3.2 Out of Scope

- Legal permission to practice or operate; that is a license.
- Learning content itself; that is a learning resource.
- Regulations, education programs, majors, jobs, skills, competencies, domains, tasks, technologies, tools, industries, and organizations except as relationships.

## 4. Philosophy

Certification objects must represent credible, assessable credential signals rather than marketing labels. A certification's value depends on authority legitimacy, assessment rigor, identity verification, competency and skill coverage, evidence quality, industry adoption, renewal discipline, and compliance relevance. The generator must distinguish certification from actual legal permission, actual education completion, and actual skill mastery. It must state where the certification is recognized, what it validates, how current it remains, and what limitations apply.


## 5. Authority, Inheritance, and Non-Redesign Constraint

This generator is an implementation artifact. It does not redesign, fork, replace, duplicate, or reinterpret any KarirGPS foundation, ontology, core engine, standard, registry rule, validation rule, language rule, query rule, evolution rule, or compilation rule. It implements entity-specific behavior only inside the locked KarirGPS architecture.

| Authority | Binding Inheritance |
|---|---|
| AI Constitution | Enforces safety, truthfulness, privacy, non-deception, fairness, traceability, and human-benefit constraints. |
| Career Knowledge Ontology | Binds this entity to the canonical Career → Skill → Competency → Knowledge Domain → Work Task → Work Activity → Technology → Tool graph and to Batch 3/4 entities through explicitly allowed relationships. |
| KOS | Requires canonical identity, version, lifecycle, evidence, validation, registry, language, query, lineage, and compiled output fields. |
| UEGF | Supplies operation contracts for create, revise, repair, localize, enrich, evidence_refresh, and evolution_successor. |
| UKPP | Supplies deterministic intake, normalization, generation, validation, repair, registration, compilation, and release stages. |
| UKVF | Supplies structural, semantic, ontological, evidence, safety, language, registry, query, evolution, and compilation validation suites. |
| UKR | Supplies identity, deduplication, merge, versioning, lineage, registry transition, deprecation, and successor rules. |
| UKL | Supplies canonical language, localization, terminology control, and semantic equivalence rules. |
| UKQF | Supplies query facets, graph traversal, relationship indexing, and embedding-text requirements. |
| UKEF | Supplies drift detection, evidence aging, lifecycle transitions, successor creation, compatibility, and migration handling. |
| UKCF | Supplies lossless compilation to Markdown, JSON, graph triples, embedding text, API payload, and registry manifest. |
| Generator Development Standard V1 | Supplies mandatory sections, engineering acceptance gates, failure handling, diagrams, and release checks. |

### 5.1 Binding Conflict Rule

If any entity-specific rule conflicts with an upstream authority, the generator must stop, emit `authoritative_conflict`, identify the exact rule path, and return a structured repair report. The generator must not resolve conflicts by guessing or silently overriding the locked system.


## 6. Architecture

### 6.1 Runtime Components

| Component | Responsibility | Output |
|---|---|---|
| Operation Router | Routes UEGF operation and validates operation preconditions. | Operation context. |
| Intake Normalizer | Normalizes label, aliases, source facts, locale, evidence policy, jurisdiction terms, and relationship hints. | Normalized request. |
| Entity Boundary Classifier | Confirms the candidate belongs to this entity and not to a neighboring generator. | Boundary decision. |
| Evidence Planner | Classifies claims by source need, freshness, reliability, and unsupported-claim policy. | Evidence plan. |
| Object Constructor | Builds KOS envelope, entity fields, lifecycle, scores, risks, and query facets. | Candidate object. |
| Relationship Resolver | Normalizes relationship names, target types, cardinalities, inverse hints, and graph impact. | Relationship graph. |
| Validation Orchestrator | Runs UKVF and entity-specific validation. | Validation report. |
| Repair Controller | Applies deterministic repair for valid repair classes and enforces retry limits. | Repaired object or failure. |
| Registry Adapter | Applies UKR identity, deduplication, merge, versioning, lineage, and state transition. | Registry action. |
| Evolution Adapter | Applies UKEF drift, successor, deprecation, compatibility, and migration rules. | Evolution package. |
| Compilation Adapter | Applies UKCF to generate Markdown, JSON, graph triples, embedding text, API payload, and manifest. | Release bundle. |

### 6.2 Architecture Constraints

- The generator is stateless except for registry and validation context supplied by UKR/UKVF.
- The generator emits only a KOS-compliant object, compiled release bundle, registry action, or structured failure.
- It cannot introduce new universal frameworks, new ontology roots, hidden relation types, or non-KOS output formats.
- All object claims requiring evidence must be evidence-backed, evidence-limited, or removed.
- Localization and compilation must preserve canonical meaning.


## 7. Lifecycle

```yaml
certification_lifecycle:
  lifecycle_state:
    - proposed
    - active
    - renewal_due
    - expired
    - suspended
    - revoked
    - superseded
    - deprecated
    - retired
  market_state:
    - emerging
    - established
    - mature
    - declining
    - discontinued
  holder_state:
    - not_applicable_to_object
    - eligible
    - candidate
    - awarded
    - renewed
    - lapsed
    - revoked
```

| Transition | Allowed When | Required Metadata |
|---|---|---|
| proposed → active | Issuer, assessment, recognition scope, and evidence validate. | activation_date, issuer evidence, assessment evidence. |
| active → renewal_due | Renewal window opens or CE requirement pending. | renewal_due_date, renewal_conditions. |
| renewal_due → active | Renewal requirements satisfied. | renewal_evidence, new_expiry_date. |
| active → expired | Validity period ends without renewal. | expiration_date, grace_period. |
| active → suspended | Issuer or regulator temporarily restricts validity. | suspension_reason, affected_scope. |
| active → revoked | Issuer invalidates credential context. | revocation_basis. |
| active → superseded | New version replaces old credential. | successor_id, migration_notes. |
| superseded/deprecated → retired | No current recommendation use remains. | retirement_basis. |


## 8. Inputs/Outputs

### 8.1 Required Inputs

| Input | Type | Required | Rule |
|---|---|---:|---|
| `operation` | enum | Yes | `create`, `revise`, `repair`, `localize`, `enrich`, `evidence_refresh`, or `evolution_successor`. |
| `candidate_label` | string | Yes | Name or title to normalize into canonical label and slug. |
| `candidate_description` | string | Yes | Source description sufficient for boundary classification and required fields. |
| `canonical_language` | BCP-47 language tag | Yes | Default `en`; localized variants are handled by UKL. |
| `source_context` | object | Yes | User source facts, imported data, registry state, or controlled corpus references. |
| `evidence_policy` | object | Yes | Required source class, freshness threshold, reliability threshold, and unsupported-claim behavior. |
| `registry_mode` | enum | Yes | `draft`, `candidate`, `registered`, `revise_existing`, `merge_candidate`, or `deprecate_candidate`. |
| `validation_mode` | enum | Yes | `strict` for release; `exploratory` for non-release analysis. |
| `relationship_hints` | relation[] | No | Existing graph references to validate, normalize, or reject. |
| `locale_targets` | string[] | No | Locale variants to generate through UKL. |

### 8.2 Required Outputs

| Output | Type | Required | Rule |
|---|---|---:|---|
| `kos_object` | object | Yes | Canonical KOS-compliant entity object. |
| `validation_report` | object | Yes | UKVF result plus entity-specific checks. |
| `registry_action` | object | Yes | UKR action and lineage entry. |
| `relationship_delta` | object | Yes | Added, changed, removed, and rejected relationships. |
| `evidence_delta` | object | Yes | Evidence added, refreshed, downgraded, or rejected. |
| `compiled_outputs` | object | Yes | Markdown, JSON, graph triples, embedding text, API payload, registry manifest. |
| `audit_log` | object | Yes | Operation, generator version, source hash, validation summary, release decision. |

### 8.3 Structured Failure Output

```yaml
failure:
  code: string
  severity: blocking | major | minor | advisory
  operation: create | revise | repair | localize | enrich | evidence_refresh | evolution_successor
  entity_type: string
  field_path: string
  reason: string
  upstream_rule: string
  repair_action: string
  retry_allowed: boolean
  registry_safe: boolean
```


## 9. Entity Definition and Taxonomy

### 9.1 Definition

A `certification` object is a credentialing entity with a named credential outcome, identifiable authority, assessment or verification mechanism, mapped capability signal, recognition scope, and validity/renewal rule.

### 9.2 Certification Taxonomy

```yaml
certification_taxonomy:
  primary_type:
    - professional_certification
    - academic_certification
    - vendor_certification
    - regulatory_certification
    - industry_association_certification
    - safety_certification
    - compliance_certification
    - microcredential
    - stackable_certification
    - continuing_education_certificate
  authority_type:
    - government_agency
    - statutory_board
    - professional_association
    - university_or_school
    - vendor_or_product_company
    - industry_consortium
    - standards_body
    - employer_internal_authority
    - training_provider
    - independent_assessment_body
  assessment_model:
    - standardized_exam
    - practical_exam
    - portfolio_review
    - supervised_practice
    - course_completion_with_assessment
    - audit_based_assessment
    - peer_review
    - proctored_lab
    - simulation_based_assessment
    - continuing_education_units
    - experience_documentation
  recognition_scope:
    - global
    - multi_country
    - national
    - subnational
    - industry_specific
    - vendor_ecosystem
    - organization_internal
    - academic_internal
  validity_model:
    - fixed_expiration
    - renewable
    - perpetual_with_version_risk
    - lifetime
    - conditional_on_membership
    - conditional_on_license
    - conditional_on_continuing_education
```

### 9.3 Issuing Authority Model

| Field | Requirement |
|---|---|
| `authority_name` | Canonical issuer or governing body. |
| `authority_type` | Must use taxonomy enum. |
| `authority_object_ref` | Organization object when available. |
| `authority_jurisdiction` | Required for regulatory, statutory, academic, local, or public-sector certifications. |
| `authority_role` | issuer, accreditor, sponsor, regulator, exam_provider, curriculum_owner, standards_owner. |
| `authority_legitimacy_basis` | Legal mandate, accreditation, market adoption, professional recognition, vendor ownership, institutional authority, or documented governance. |
| `authority_risk_flags` | Unclear issuer, diploma-mill risk, revoked recognition, unverifiable registry, marketing-only badge. |

### 9.4 Competency and Skill Validation Mapping

```yaml
competency_mapping:
  competency_ref: competency:privacy_aware_data_handling:v1
  mapping_type: validates | partially_validates | introduces | renews | prerequisite_for | compliance_evidence_for
  coverage_depth: awareness | foundational | working | advanced | expert
  assessment_depth: none | knowledge_check | scenario_exam | practical_demonstration | supervised_performance | audit
  transferability: vendor_specific | domain_general | industry_general | jurisdiction_limited | global_general
  confidence: 0.82
  evidence_refs: []

skill_validation_mapping:
  skill_ref: skill:clinical_data_classification:v1
  validation_type: direct_assessment | indirect_assessment | prerequisite_assumption | continuing_education | self_reported_completion
  proficiency_signal: awareness | beginner | intermediate | advanced | expert
  assessment_artifact: exam | lab | project | portfolio | observed_practice | course_quiz | audit_record
  recency_sensitivity: low | medium | high
  renewal_required_for_signal: true
  confidence: 0.78
```

### 9.5 Expiration, Renewal, and Recognition Scope

```yaml
expiration_and_renewal:
  expires: true
  validity_period_months: 36
  renewal_cycle_months: 36
  renewal_requirements:
    - continuing_education
    - reexamination
    - fee_payment
    - professional_practice_hours
    - compliance_attestation
  grace_period_days: 90
  expired_state_effect:
    - no_longer_current_skill_signal
    - may_remain_historical_achievement
    - may_not_satisfy_license_dependency
  renewal_evidence_required: true

global_local_scope:
  recognition_scope: global | multi_country | national | subnational | industry_specific | vendor_ecosystem | organization_internal | academic_internal
  jurisdictions: []
  limitations: []
  recognition_evidence_required: true
```

Global recognition requires evidence of international recognition or cross-border adoption; online delivery alone is insufficient. Organization-internal certifications must not be recommended as externally recognized unless validated by external evidence.

### 9.6 Trust Level Scoring

```yaml
trust_level_score:
  total: 0-100
  components:
    issuing_authority_legitimacy: 0-20
    assessment_rigor: 0-20
    identity_verification_and_fraud_resistance: 0-10
    competency_skill_mapping_quality: 0-15
    industry_or_regulatory_recognition: 0-15
    renewal_and_recency_controls: 0-10
    evidence_quality: 0-10
  bands:
    very_high: 85-100
    high: 70-84
    moderate: 50-69
    low: 25-49
    unreliable: 0-24
```

### 9.7 Compliance Mapping

```yaml
compliance_mapping:
  compliance_role:
    - optional_best_practice
    - industry_expectation
    - audit_evidence
    - prerequisite_for_license
    - required_by_regulation
    - accepted_alternative_evidence
  regulation_refs: []
  license_refs: []
  jurisdiction_scope: []
  compliance_limitations: []
```

## 10. Relationship Mapping and Ontology Alignment

| Relationship | Target Entity | Cardinality | Meaning |
|---|---|---:|---|
| `issued_by` | organization | 1..n | Authority issuing or governing the certification. |
| `accredited_by` | organization | 0..n | External accreditor or standards body. |
| `validates_skill` | skill | 0..n | Skill directly or indirectly validated. |
| `validates_competency` | competency | 0..n | Competency assessed or evidenced. |
| `requires_knowledge_domain` | knowledge_domain | 0..n | Domain required for certification. |
| `prepares_for_career` | career | 0..n | Careers for which certification is relevant. |
| `supports_work_task` | work_task | 0..n | Tasks supported by certified capability. |
| `supports_work_activity` | work_activity | 0..n | Activities supported by certified capability. |
| `aligned_to_industry` | industry | 0..n | Industry where certification is recognized. |
| `uses_technology` | technology | 0..n | Technologies assessed or required. |
| `uses_tool` | tool | 0..n | Tools assessed or required. |
| `requires_learning_resource` | learning_resource | 0..n | Required or official preparation resource. |
| `required_by_license` | license | 0..n | License that depends on certification. |
| `recognized_by_regulation` | regulation | 0..n | Regulation that recognizes/requires certification. |
| `supersedes_certification` | certification | 0..n | Prior certification replaced by this object. |
| `superseded_by_certification` | certification | 0..n | Successor certification. |

Boundary rules: legal authorization routes to License; courses/books/videos/AI tutors route to Learning Resource; legal rules route to Regulation; abilities route to Skill/Competency; degree programs route to Education Program.

## 11. Canonical Object Model

```yaml
kos:
  kos_version: "1.0"
  object_id: "certification:clinical_data_privacy_associate:v1"
  object_type: "certification"
  object_version: "1.0.0"
  lifecycle_state: active
  canonical_language: en
  created_by_generator: "generator:certification:v1"
  created_at: "2026-06-28T00:00:00+07:00"
  updated_at: "2026-06-28T00:00:00+07:00"
```

| Field | Type | Required | Description |
|---|---|---:|---|
| `canonical_label` | string | Yes | Canonical certification name. |
| `aliases` | string[] | Yes | Alternate names, acronyms, former names. |
| `definition` | string | Yes | Credential definition and certified capability. |
| `certification_taxonomy` | object | Yes | Type, authority type, assessment, scope, validity. |
| `issuing_authority` | object | Yes | Issuer, role, legitimacy, verification, risks. |
| `assessment_model` | object | Yes | Exam, practical, portfolio, audit, course assessment, or validated route. |
| `competency_mapping` | object[] | Yes | Competencies validated with depth and confidence. |
| `skill_validation_mapping` | object[] | Yes | Skills validated and signal strength. |
| `industry_alignment` | object[] | Yes | Industry recognition/usefulness. |
| `global_local_scope` | object | Yes | Recognition scope, jurisdictions, limitations. |
| `expiration_and_renewal` | object | Yes | Validity, renewal, expiry impact. |
| `trust_level_score` | object | Yes | Component scores and total. |
| `compliance_mapping` | object[] | Yes | Compliance role, licenses, regulations, limitations. |
| `requirements` | object | Yes | Eligibility, prerequisites, experience, education, fees where modeled. |
| `relationships` | object | Yes | Ontology relationships. |
| `risks_and_limitations` | object[] | Yes | Trust, recognition, recency, fraud, compliance risks. |
| `evidence` | object[] | Yes | Evidence ledger. |
| `validation` | object | Yes | UKVF result. |
| `registry` | object | Yes | UKR action and lineage. |
| `query_facets` | object | Yes | UKQF indexing metadata. |


## 12. Generation Pipeline

| Stage | Name | Inputs | Processing | Outputs | Blocking Gate |
|---:|---|---|---|---|---|
| 1 | Intake | Operation context, source context | Parse operation, normalize label, extract aliases and claims. | Normalized request. | Missing operation, label, description, or evidence policy. |
| 2 | Boundary Classification | Normalized request | Check entity identity against all neighboring generators. | Boundary decision. | Candidate belongs elsewhere or mixes entities. |
| 3 | Ontology Binding | Boundary decision, hints | Bind allowed classes, relationships, and inverse hints. | Binding map. | Unknown class or illegal relationship. |
| 4 | Evidence Planning | Claims, evidence policy | Determine evidence need, freshness, source reliability, unsupported-claim treatment. | Evidence plan. | High-impact claim has no allowed evidence route. |
| 5 | Object Construction | Binding map, source facts | Generate KOS envelope, entity fields, lifecycle, scores, risks, and query facets. | Draft KOS object. | Required fields missing. |
| 6 | Relationship Resolution | Draft object, registry refs | Resolve target IDs, cardinality, direction, and graph consistency. | Relationship graph. | Unsupported, circular, or contradictory relation. |
| 7 | Scoring and Risk | Draft object, evidence ledger | Compute score components and risk flags. | Scored candidate. | Score not reproducible. |
| 8 | Validation | Scored candidate | Run UKVF and entity-specific validators. | Validation report. | Any blocking finding. |
| 9 | Repair Loop | Validation report | Apply deterministic repair and rerun validation. | Repaired object or failure. | More than two repair cycles or non-repairable defect. |
| 10 | Registry Decision | Validated object, UKR lookup | Create, revise, merge, reject, deprecate, or successor-link. | Registry action. | Identity collision or unsafe merge. |
| 11 | Compilation | Registry-ready object | Compile through UKCF. | Release bundle. | Markdown/JSON/triples/API mismatch. |
| 12 | Release | Release bundle, audit log | Emit artifacts and registry action. | Production release artifact. | Missing artifact or incomplete audit. |

### 12.1 Supported Operations

| Operation | Identity Rule | Output Rule |
|---|---|---|
| `create` | Allocate new canonical ID unless UKR resolves equivalent object. | New registry-ready object. |
| `revise` | Preserve identity; increment semantic version; append lineage. | Revision diff and updated object. |
| `repair` | Preserve identity unless misclassified. | Repair log and repaired object. |
| `localize` | Preserve canonical ID and meaning. | Locale variant and query aliases. |
| `enrich` | Preserve identity; append provenance. | Enrichment delta and updated object. |
| `evidence_refresh` | Preserve identity; update evidence ledger. | Evidence delta and drift report. |
| `evolution_successor` | Create successor ID; link predecessor. | Successor object and migration notes. |


## 13. Prompt Templates

### 13.1 Create Prompt

```text
System: You are Certification Generator V1 operating under the locked KarirGPS architecture. Do not redesign frameworks. Produce only a KOS-compliant certification object or a structured failure.
Developer: Confirm entity boundary, required fields, lifecycle, evidence, relationships, validation, registry action, and compiled outputs.
User: operation=create; candidate_label={candidate_label}; candidate_description={candidate_description}; canonical_language={canonical_language}; evidence_policy={evidence_policy}; registry_mode={registry_mode}; relationship_hints={relationship_hints}.
Output: kos_object, validation_report, registry_action, relationship_delta, evidence_delta, compiled_outputs, audit_log.
```

### 13.2 Revise Prompt

```text
System: Preserve object identity unless UKR/UKEF requires successor or reclassification.
Developer: Apply the requested source-supported changes, compute field/relationship/evidence deltas, rerun strict validation, and append lineage.
User: operation=revise; existing_object={existing_object}; change_request={change_request}; source_context={source_context}.
Output: revision_diff, updated_kos_object, validation_report, registry_action.
```

### 13.3 Repair Prompt

```text
System: Repair only defects supported by source context, ontology, or schema. Do not invent evidence or authority facts.
Developer: Fix blocking and major validation findings within retry limits; return repair_required when unresolved.
User: operation=repair; invalid_object={object}; validation_findings={validation_findings}; evidence_policy={evidence_policy}.
Output: repair_log, repaired_object, unresolved_findings, validation_report.
```

### 13.4 Localize Prompt

```text
System: Preserve canonical meaning while creating locale-specific labels, definitions, examples, and query aliases.
Developer: Apply UKL terminology control and semantic-equivalence validation.
User: operation=localize; object_id={object_id}; target_locales={locale_targets}; localization_context={localization_context}.
Output: localized_variants, UKL_validation_report, query_alias_delta.
```

### 13.5 Enrich Prompt

```text
System: Enrich only when evidence, ontology, and registry policy allow it.
Developer: Add relationships, scoring detail, risk flags, examples, or operational detail; validate no contradiction.
User: operation=enrich; object_id={object_id}; enrichment_request={enrichment_request}; source_context={source_context}.
Output: enriched_object, enrichment_delta, validation_report.
```

### 13.6 Evidence Refresh Prompt

```text
System: Reassess evidence freshness, source reliability, source relevance, lifecycle drift, and score changes.
Developer: Remove, downgrade, or repair claims that no longer satisfy evidence policy.
User: operation=evidence_refresh; object_id={object_id}; evidence_policy={evidence_policy}; refresh_date=2026-06-28.
Output: evidence_delta, score_delta, drift_report, updated_object.
```

### 13.7 Evolution Successor Prompt

```text
System: Create a successor only when material change requires a new identity under UKEF.
Developer: Compare predecessor and successor candidate, decide revise versus successor, link migration notes.
User: operation=evolution_successor; predecessor={object_id}; successor_context={successor_context}.
Output: successor_object, predecessor_transition, migration_notes, validation_report.
```


## 14. Validation Rules

### 14.1 Universal UKVF Layers

| Layer | Checks | Blocking Conditions | Repair Path |
|---|---|---|---|
| Structural | Required fields, types, enums, cardinality, KOS envelope. | Missing required field, invalid object type, malformed schema. | Rebuild schema fragment or fail. |
| Semantic | Definition clarity, entity boundary, non-circular meaning, unsupported claims. | Entity cannot be distinguished from neighboring generator. | Rewrite, reclassify, or fail. |
| Ontological | Allowed relationship names, target types, cardinality, graph direction. | Illegal relation, invalid target, contradictory dependency. | Remove, remap, or fail. |
| Evidence | Source reliability, relevance, freshness, traceability, claim coverage. | Fabricated evidence or high-impact unsupported claim. | Refresh, downgrade, remove, or fail. |
| Safety | Privacy, non-deception, harmful automation, legal/credential misinformation. | Unsafe or deceptive object claim. | Constrain or fail. |
| Language | Canonical language, localization equivalence, controlled terminology. | Translation changes credential/legal/compliance meaning. | Regenerate locale variant. |
| Registry | ID uniqueness, duplicate detection, version lineage, merge safety. | Identity collision or unsafe merge. | Use UKR resolution or fail. |
| Query | Facet completeness, alias quality, graph indexability, embedding fidelity. | Object cannot be retrieved or traversed correctly. | Rebuild facets. |
| Evolution | Valid lifecycle transitions, successor basis, compatibility notes. | Invalid transition or successor without material change. | Correct UKEF metadata. |
| Compilation | Markdown/JSON/triples/API equivalence. | Lost relationship, missing field, checksum mismatch. | Recompile from canonical object. |

### 14.2 Validation Result Format

```yaml
validation:
  framework: UKVF
  validation_mode: strict
  result: pass | fail | pass_with_warnings
  blocking_count: 0
  major_count: 0
  minor_count: 0
  advisory_count: 0
  checks:
    structural: pass | fail
    semantic: pass | fail
    ontological: pass | fail
    evidence: pass | fail | limited
    safety: pass | fail
    language: pass | fail
    registry: pass | fail
    query: pass | fail
    evolution: pass | fail
    compilation: pass | fail
  entity_specific_checks: []
  repair_attempts: 0
  release_allowed: true
```


### 14.3 Certification-Specific Rules

| Rule ID | Rule | Severity |
|---|---|---|
| CERT-V-01 | Issuing authority name and type are required. | Blocking |
| CERT-V-02 | At least one assessment, audit, verification, or completion mechanism must be defined. | Blocking |
| CERT-V-03 | Trust score total must equal component sum and remain 0–100. | Blocking |
| CERT-V-04 | Direct skill validation cannot be claimed from attendance-only completion. | Blocking |
| CERT-V-05 | Regulatory certifications require jurisdiction and compliance mapping. | Blocking |
| CERT-V-06 | Global recognition requires evidence beyond online availability. | Major |
| CERT-V-07 | Expiration/renewal must specify cycle or explicit non-expiring basis. | Blocking |
| CERT-V-08 | Vendor certifications must map to relevant technology/tool when product-specific. | Major |
| CERT-V-09 | Certification must not be treated as legal authorization unless linked to license/regulation. | Blocking |
| CERT-V-10 | Revoked, expired, discontinued, or superseded certifications cannot be recommended as active qualifications. | Blocking |


## 15. Failure Modes

| Failure Code | Severity | Meaning | Required Response |
|---|---|---|---|
| `entity_boundary_error` | Blocking | Candidate belongs to another generator or mixes entity types. | Stop, identify correct generator, do not release object. |
| `missing_required_field` | Blocking | Required KOS/entity field is absent. | Repair when source-supported; otherwise return repair request. |
| `invalid_relationship` | Blocking | Relation name, target type, cardinality, or direction violates ontology. | Remove or remap only when unambiguous. |
| `unsupported_claim` | Blocking for high-impact facts | Claim lacks acceptable evidence. | Remove, downgrade, refresh evidence, or fail. |
| `identity_collision` | Blocking | Proposed ID conflicts with UKR. | Invoke UKR duplicate/merge resolution. |
| `lifecycle_transition_error` | Major or blocking | Proposed lifecycle transition violates UKEF. | Correct transition or fail. |
| `localization_drift` | Major | Locale variant changes canonical meaning. | Regenerate locale variant. |
| `compilation_mismatch` | Blocking | Compiled outputs lose canonical semantics. | Recompile from canonical object. |
| `safety_policy_violation` | Blocking | Output enables deception, privacy breach, harm, or legal/credential misinformation. | Stop and emit safety failure. |
| `authoritative_conflict` | Blocking | Entity behavior conflicts with locked architecture. | Stop and report conflict. |

## 16. Retry Strategy

| Failure Class | Retry Allowed | Maximum Attempts | Strategy |
|---|---:|---:|---|
| Missing optional enrichment | Yes | 1 | Generate conservative enrichment only if ontology/evidence permit. |
| Missing required field with source support | Yes | 2 | Fill from source context or deterministic schema inference. |
| Invalid enum or malformed schema | Yes | 2 | Normalize enum and rebuild schema fragment. |
| Unsupported relation | Yes | 1 | Remove or remap when semantic equivalence is clear. |
| Ambiguous entity boundary | Yes | 1 | Reclassify against neighboring generators; fail if unresolved. |
| Weak or stale evidence | Yes | 1 | Downgrade, refresh, or remove affected claim. |
| Identity collision | Yes | 1 | Use UKR deduplication/merge decision. |
| Legal/compliance contradiction | No | 0 | Stop; do not repair by guessing. |
| Safety violation | No | 0 | Stop; emit AI Constitution failure. |
| Upstream conflict | No | 0 | Stop; emit authoritative conflict. |

Retry exits when blocking failures reach zero, the same blocking defect appears twice, a no-retry defect appears, or repair would require missing facts. A third unresolved blocking defect emits `repair_required`.

## 17. Registry Integration

### 17.1 Identity and Versioning

| Rule | Requirement |
|---|---|
| Canonical ID | `object_type:normalized_slug:vMajor` unless UKR assigns a canonical ID. |
| Slug source | Canonical label, disambiguated by authority, jurisdiction, level, domain, or scope. |
| Version | Semantic version in `object_version`; major version only when compatibility breaks. |
| Lineage | Every operation appends operation, timestamp, generator ID, source hash, evidence delta, relationship delta, and reason. |
| Duplicate detection | Compare canonical label, aliases, authority/source, jurisdiction/scope, taxonomy, relationships, and evidence signature. |
| Merge policy | Merge only when semantic equivalence is proven and no legal, credential, learning, or compliance scope is lost. |

### 17.2 Registry Action Payload

```yaml
registry_action:
  action: create | revise | repair | merge | reject | deprecate | successor
  target_object_id: string
  prior_object_id: string | null
  successor_object_id: string | null
  identity_confidence: 0.0
  version_increment: major | minor | patch | none
  deduplication_basis: []
  lineage_entry:
    timestamp: datetime
    generator_id: string
    operation: string
    reason: string
    evidence_delta_summary: string
    relationship_delta_summary: string
```

## 18. Language, Query, and Compilation Integration

### 18.1 UKL Rules

- Canonical language is preserved in `canonical_language`.
- Localized variants must preserve canonical meaning and relationship semantics.
- Locale aliases must not override canonical labels.
- Legal, credential, curriculum, and compliance terms must use precise local equivalents when available.
- Localized examples must carry locale metadata and cannot change object identity.

### 18.2 UKQF Facets

```yaml
query_facets:
  object_type: string
  canonical_label: string
  aliases: []
  taxonomy: []
  lifecycle_state: string
  jurisdiction_scope: []
  industry_alignment: []
  related_careers: []
  related_skills: []
  related_competencies: []
  related_knowledge_domains: []
  related_work_tasks: []
  related_work_activities: []
  related_technologies: []
  related_tools: []
  related_certifications: []
  related_licenses: []
  related_learning_resources: []
  related_regulations: []
  authority_or_source: []
  compliance_relevance: []
  score_bands: []
  evidence_confidence: string
```

### 18.3 UKCF Outputs

| Output | Requirement |
|---|---|
| Markdown | Human-readable object card and specification summary. |
| JSON | Canonical machine object with stable field order. |
| Graph triples | Subject-predicate-object triples for all relationships. |
| Embedding text | Controlled summary optimized for semantic retrieval. |
| API payload | Registry-safe payload with validation and registry metadata. |
| Registry manifest | Object ID, version, checksum, dependencies, lifecycle, release status. |


## 19. Evolution Model

| Drift Signal | Impact | Action |
|---|---|---|
| Issuing authority changes | Identity/trust risk | Evidence refresh; revise or successor depending on continuity. |
| Assessment model changes materially | Skill/competency signal changes | Recompute mappings and trust; successor if compatibility breaks. |
| Renewal cycle changes | Recency/compliance impact | Revise renewal fields. |
| Certification retired or replaced | Lifecycle impact | Supersede or retire and link successor. |
| Regulation stops recognizing certification | Compliance impact | Remove/downgrade compliance mapping. |
| Industry adoption declines | Recommendation impact | Update industry alignment and trust components. |
| Fraud/verifiability issue appears | Trust impact | Flag risk, reduce trust, or deprecate recommendation use. |

Successor is required when authority versioning, assessment scope, recognition scope, or compliance eligibility changes materially. Minor syllabus, fee, or wording updates normally use `revise`.

## 20. Example Objects

This synthetic object is for engineering conformance tests only.

```yaml
kos:
  kos_version: "1.0"
  object_id: "certification:clinical_data_privacy_associate:v1"
  object_type: "certification"
  object_version: "1.0.0"
  lifecycle_state: active
  canonical_language: en
  created_by_generator: "generator:certification:v1"
  created_at: "2026-06-28T00:00:00+07:00"
  updated_at: "2026-06-28T00:00:00+07:00"
canonical_label: "Clinical Data Privacy Associate Certification"
aliases: ["CDPA Certification", "Clinical Data Privacy Associate"]
definition: "A professional certification that validates foundational competency in clinical data privacy, data-handling controls, and compliance-sensitive information workflows."
certification_taxonomy:
  primary_type: professional_certification
  authority_type: professional_association
  assessment_model: standardized_exam
  recognition_scope: industry_specific
  validity_model: renewable
issuing_authority:
  authority_name: "KarirGPS Synthetic Health Data Association"
  authority_type: professional_association
  authority_role: issuer
  authority_jurisdiction: "synthetic_global_test_scope"
  authority_legitimacy_basis: "synthetic_conformance_authority"
  authority_risk_flags: []
assessment_model:
  methods: [standardized_exam, scenario_exam]
  proctored: true
  identity_verification: government_id_or_equivalent
competency_mapping:
  - competency_ref: "competency:privacy_aware_data_handling:v1"
    mapping_type: validates
    coverage_depth: foundational
    assessment_depth: scenario_exam
    transferability: industry_general
    confidence: 0.82
skill_validation_mapping:
  - skill_ref: "skill:clinical_data_classification:v1"
    validation_type: direct_assessment
    proficiency_signal: intermediate
    assessment_artifact: exam
    recency_sensitivity: high
    renewal_required_for_signal: true
    confidence: 0.78
expiration_and_renewal:
  expires: true
  validity_period_months: 36
  renewal_cycle_months: 36
  renewal_requirements: [continuing_education, compliance_attestation]
trust_level_score:
  total: 76
  components:
    issuing_authority_legitimacy: 15
    assessment_rigor: 16
    identity_verification_and_fraud_resistance: 8
    competency_skill_mapping_quality: 13
    industry_or_regulatory_recognition: 10
    renewal_and_recency_controls: 7
    evidence_quality: 7
  band: high
compliance_mapping:
  - compliance_role: audit_evidence
    regulation_refs: []
    license_refs: []
    compliance_limitations: ["Supportive evidence only; not legal authorization."]
relationships:
  validates_skill: ["skill:clinical_data_classification:v1"]
  validates_competency: ["competency:privacy_aware_data_handling:v1"]
  aligned_to_industry: ["industry:healthcare:v1"]
evidence:
  - evidence_id: "ev:certification:cdpa:synthetic:001"
    source_type: synthetic_conformance_record
    claim: "Object exists for generator conformance testing."
    confidence: 1.0
validation: {framework: UKVF, result: pass, blocking_count: 0}
registry: {action: create, identity_status: new_unique}
query_facets:
  object_type: certification
  taxonomy: [professional_certification]
  score_bands: [high_trust]
```

## 21. Diagrams

### 21.1 Mermaid Architecture Diagram

```mermaid
graph TD
  A[Certification Request] --> B[Operation Router]
  B --> C[Intake Normalizer]
  C --> D[Certification Boundary Classifier]
  D --> E[Authority and Evidence Planner]
  E --> F[Certification Object Constructor]
  F --> G[Skill and Competency Mapper]
  G --> H[Trust and Compliance Scorer]
  H --> I[UKVF Validation]
  I -->|Pass| J[UKR Registry Adapter]
  I -->|Repairable| K[Repair Controller]
  K --> F
  I -->|Blocking| L[Structured Failure]
  J --> M[UKCF Compilation]
  M --> N[Release Bundle]
```

### 21.2 Flow Diagram

```mermaid
flowchart LR
  intake([Intake]) --> boundary{Certification?}
  boundary -- No --> fail[Route or Fail]
  boundary -- Yes --> authority[Validate Authority]
  authority --> assess[Validate Assessment]
  assess --> map[Map Skills and Competencies]
  map --> renew[Set Validity and Renewal]
  renew --> score[Compute Trust and Compliance]
  score --> validate{UKVF Pass?}
  validate -- No --> repair[Retry or Structured Failure]
  validate -- Yes --> register[UKR Register]
  register --> compile[UKCF Compile]
```

### 21.3 Sequence Diagram

```mermaid
sequenceDiagram
  participant User
  participant Gen as Certification Generator V1
  participant UKVF
  participant UKR
  participant UKEF
  participant UKCF
  User->>Gen: create certification candidate
  Gen->>Gen: normalize, classify, construct
  Gen->>UKVF: validate authority, assessment, mappings
  UKVF-->>Gen: validation report
  alt pass
    Gen->>UKR: registry action
    UKR-->>Gen: approved package
    Gen->>UKCF: compile outputs
    UKCF-->>Gen: release bundle
    Gen-->>User: KOS object
  else material change
    Gen->>UKEF: successor decision
    UKEF-->>Gen: successor/revise decision
  else fail
    Gen-->>User: structured failure
  end
```

### 21.4 State Diagram

```mermaid
stateDiagram-v2
  [*] --> Proposed
  Proposed --> Active: authority and assessment validated
  Active --> RenewalDue: renewal window opens
  RenewalDue --> Active: renewed
  RenewalDue --> Expired: renewal missed
  Active --> Suspended: temporary restriction
  Suspended --> Active: reinstated
  Active --> Revoked: invalidated
  Active --> Superseded: successor released
  Superseded --> Retired
  Active --> Deprecated: recommendation risk
  Deprecated --> Retired
```


## 22. Conformance Tests

| Test ID | Test Name | Procedure | Expected Result |
|---|---|---|---|
| CT-01 | KOS Envelope Completeness | Generate minimum valid object and inspect KOS envelope. | Correct object type, generator ID, version, lifecycle, language, and timestamps. |
| CT-02 | Entity Boundary Protection | Submit neighboring entity candidates from all finalized generators. | Incorrect candidates are rejected or routed; no mixed object released. |
| CT-03 | Required Field Enforcement | Remove each required field one at a time. | UKVF reports blocking `missing_required_field`. |
| CT-04 | Relationship Cardinality | Submit invalid targets and illegal relation names. | Invalid relations rejected with field path. |
| CT-05 | Evidence Integrity | Attach stale, fabricated, or irrelevant evidence. | Evidence validation blocks or downgrades claims. |
| CT-06 | Registry Deduplication | Submit duplicate by alias, spelling, authority, and scope variation. | UKR identifies duplicate, merge, or disambiguation action. |
| CT-07 | Localization Equivalence | Generate locale variant and compare meaning. | UKL passes; no identity change. |
| CT-08 | Query Coverage | Query by label, alias, taxonomy, relationship, jurisdiction, lifecycle, and score band. | UKQF retrieves object and valid graph path. |
| CT-09 | Evolution Successor | Trigger material-change scenario. | UKEF creates successor only when required and links predecessor. |
| CT-10 | Compilation Equivalence | Compile to Markdown, JSON, triples, embedding text, API payload. | All formats preserve canonical semantics. |
| CT-11 | Retry Limit | Inject repeated blocking defect. | Generator stops after allowed attempts and emits structured failure. |
| CT-12 | Release Gate | Run strict validation on release candidate. | Release allowed only with zero blocking findings. |

## 23. Production Readiness Checklist

| Item | Required Status |
|---|---|
| Purpose, scope, and philosophy are explicit. | Pass |
| Architecture integrates UEGF, UKPP, UKVF, UKR, UKL, UKQF, UKEF, and UKCF. | Pass |
| Entity taxonomy, lifecycle, inputs/outputs, pipeline, prompts, validation, failures, retry, registry, evolution, relationships, examples, and diagrams are present. | Pass |
| Entity-specific scoring and evidence rules are reproducible. | Pass |
| All relationships use ontology-consistent target entity types and cardinalities. | Pass |
| Example object is complete enough for implementation tests. | Pass |
| Mermaid architecture, flow, sequence, and state diagrams are present. | Pass |
| Conformance tests are executable as engineering acceptance criteria. | Pass |
| No unfinished markers, missing sections, or framework redesign instructions are present. | Pass |

## 24. Release Contract

This generator is production-ready when all conformance tests pass, the production readiness checklist is satisfied, and strict UKVF validation returns zero blocking findings. Release authorizes implementation of this entity generator only and does not authorize any modification of the locked KarirGPS architecture.
