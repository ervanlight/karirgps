# Universal Knowledge Language Framework V1

**Product:** KarirGPS  
**Document Type:** Enterprise Semantic Language Specification  
**Version:** 1.0  
**Status:** Normative Framework Baseline  
**Governing Constitution:** AI Constitution  
**Governing Ontology:** Career Knowledge Ontology  
**Governing Object Contract:** Knowledge Object Specification  
**Governing Generator Framework:** `assets/knowledge/frameworks/Universal_Entity_Generator_Framework_V1.md`  
**Governing Production Pipeline:** `assets/knowledge/frameworks/Universal_Knowledge_Production_Pipeline_V1.md`  
**Governing Validation Framework:** `assets/knowledge/frameworks/Universal_Knowledge_Validation_Framework_V1.md`  
**Governing Registry Framework:** `assets/knowledge/frameworks/Universal_Knowledge_Registry_Framework_V1.md`  
**Target Path:** `assets/knowledge/frameworks/Universal_Knowledge_Language_Framework_V1.md`

---

## 0. Normative Status, Authority, and Language Boundary

### 0.1 Status

Universal Knowledge Language Framework V1, hereafter **UKL**, is the canonical semantic language used to express knowledge intent across the KarirGPS ecosystem.

UKL is the language contract used by:

- AI models;
- autonomous agents;
- APIs;
- generators;
- validators;
- registry clients;
- query engines;
- search engines;
- recommendation engines;
- reasoning engines;
- analytics engines;
- graph services;
- retrieval systems;
- human-facing applications;
- external integration adapters;
- future knowledge consumers.

### 0.2 Authority Precedence

When a UKL expression conflicts with an authoritative framework or policy, apply this order:

1. applicable law, safety, privacy, and binding rights restrictions;
2. AI Constitution;
3. Career Knowledge Ontology;
4. Knowledge Object Specification;
5. Universal Entity Generator Framework or applicable object-kind framework;
6. Universal Knowledge Production Pipeline;
7. Universal Knowledge Validation Framework;
8. Universal Knowledge Registry Framework;
9. Universal Knowledge Language Framework;
10. domain-specific UKL extension;
11. requesting agent or application instruction.

UKL expresses intent. It does not grant authority to violate a higher-order rule.

### 0.3 Language Boundary

UKL is:

- a semantic intent language;
- a typed knowledge expression language;
- a model-independent communication contract;
- a transport-neutral request and response language;
- a canonical intermediate representation for knowledge operations;
- an explainable language for AI and human collaboration.

UKL is not:

- SQL;
- GraphQL;
- Cypher;
- SPARQL;
- Mongo Query;
- Elasticsearch DSL;
- a database schema;
- a programming language;
- a storage access protocol;
- a vector-store language;
- a model prompt language;
- a workflow implementation language.

UKL never expresses physical storage instructions such as:

- table joins;
- indexes;
- partitions;
- database collections;
- query plans;
- storage shards;
- database vendor functions.

### 0.4 Normative Semantic Representation

The **UKL Abstract Syntax Tree**, or **UKL AST**, is the authoritative semantic representation.

The **UKL Canonical Text Form** is the normative human-readable and LLM-readable representation of the AST.

Alternative transport serializations MAY represent the same AST using:

- JSON;
- YAML;
- protocol buffers;
- typed messages;
- API objects;
- event payloads;
- future serialization standards.

A serialization is conformant only when it preserves the complete UKL AST semantics.

### 0.5 Normative Terms

- **MUST** indicates a mandatory requirement.
- **MUST NOT** indicates a prohibited condition.
- **SHOULD** indicates a requirement that may be waived only through documented governance.
- **MAY** indicates an allowed option.
- **CONDITIONAL** indicates a requirement activated by a defined condition.

### 0.6 Language Invariants

Every conformant UKL implementation MUST preserve the following invariants:

1. UKL expresses semantic intent, not storage implementation.
2. Every target type and predicate resolves through the Ontology or a registered extension.
3. Every canonical identity resolves through UKR.
4. Entity names are not silently treated as canonical IDs.
5. Ambiguous identity produces an explicit ambiguity result.
6. Object lifecycle, registry state, validation state, and publication state remain distinct.
7. Context is explicit whenever time, geography, jurisdiction, locale, audience, or purpose affects meaning.
8. Unknown is not equivalent to false.
9. Not applicable is not equivalent to unknown.
10. Missing evidence is not evidence of absence.
11. Confidence constraints are scoped to claims, relationships, results, or objects.
12. Evidence constraints are independent from confidence constraints.
13. Validation-aware expressions use UKVF outcomes and validity.
14. Registry-aware expressions use UKR IDs, revisions, redirects, and active pointers.
15. Security constraints are evaluated before restricted results are exposed.
16. Recommendation expressions do not guarantee outcomes.
17. Forecast expressions preserve horizon, scenarios, evidence, and uncertainty.
18. Ranking expresses ordering criteria, not objective truth or human worth.
19. Similarity does not imply equivalence.
20. Relationship traversal uses Ontology direction, not database edge storage.
21. Historical queries never silently return only the current revision.
22. Canonical output identifies the registry snapshot or consistency point.
23. Explanations identify evidence, confidence, constraints, and material reasoning factors without exposing private chain of thought.
24. Execution adapters may optimize operations but may not change semantic intent.
25. Unsupported capabilities fail explicitly.
26. Every mutating semantic operation is outside UKL V1 unless represented as a governed command extension.
27. UKL V1 is primarily read, reason, compare, recommend, explain, and resolve oriented.
28. Language version and extension versions are explicit in auditable requests.
29. The same UKL AST produces semantically equivalent results across compliant execution backends, subject to snapshot and capability differences.
30. UKL remains valid as databases, graph stores, vector systems, and AI models change.

---

# 1. Purpose

## 1.1 Primary Purpose

UKL provides one canonical language for expressing what a knowledge consumer intends to know, compare, traverse, reason about, recommend, rank, aggregate, explain, or trace.

## 1.2 Interoperability Purpose

UKL enables communication among heterogeneous components without requiring each component to understand:

- another component’s implementation language;
- a database-specific query;
- model-specific prompts;
- internal index structures;
- storage topology.

## 1.3 Semantic Integrity Purpose

UKL ensures that every knowledge operation can express:

- target identity;
- Ontology type;
- relationships;
- context;
- evidence requirements;
- confidence requirements;
- validation requirements;
- version requirements;
- publication requirements;
- access purpose;
- output and explanation needs.

## 1.4 AI-Native Purpose

UKL is designed to be:

- understandable by LLMs;
- serializable by APIs;
- verifiable by deterministic parsers;
- compilable by query planners;
- explainable to humans;
- safe for multi-agent coordination.

## 1.5 Scope

UKL V1 supports semantic operations for:

- retrieval;
- lexical and semantic search;
- filtering;
- relationship traversal;
- graph navigation;
- reasoning;
- recommendation;
- comparison;
- ranking;
- aggregation;
- similarity;
- dependency resolution;
- lineage and provenance;
- temporal analysis;
- localization;
- access control;
- confidence and evidence constraints;
- version and publication constraints;
- contextual resolution;
- explanation.

## 1.6 Non-Scope

UKL V1 does not define:

- canonical content generation;
- object mutation syntax;
- schema migration syntax;
- publication commands;
- database administration;
- model training instructions;
- physical query optimization;
- user-interface layout.

Future governed command profiles may extend UKL while preserving semantic and authority boundaries.

---

# 2. Philosophy

## 2.1 Intent Before Implementation

A UKL expression states what knowledge operation is required.

The execution environment decides how to implement it.

## 2.2 Explicit Context Before Assumption

When meaning depends on context, context must be declared or resolved through an explicit context policy.

## 2.3 Canonical Identity Before Label Matching

The resolver converts names and aliases into UKR identities before authoritative operations.

## 2.4 Evidence-Aware by Default

UKL can require:

- evidence coverage;
- source class;
- source count;
- evidence freshness;
- citation availability;
- counterevidence visibility.

## 2.5 Validation-Aware by Default

UKL can restrict results to revisions with valid UKVF outcomes.

## 2.6 Explainability as a First-Class Output

Explanation is a semantic projection, not an informal appendix.

## 2.7 Uncertainty Preservation

Results may be:

- known;
- unknown;
- disputed;
- insufficiently evidenced;
- not applicable;
- inaccessible;
- context dependent.

## 2.8 Recommendation as Constrained Reasoning

Recommendation combines:

- candidate retrieval;
- eligibility;
- compatibility;
- gaps;
- preferences;
- evidence;
- confidence;
- policy;
- diversity;
- explanation.

It does not produce deterministic judgments about a person.

## 2.9 Forecast as Scenario Reasoning

Future-oriented expressions use scenarios, horizons, evidence, drivers, and uncertainty.

They do not claim timeless certainty.

## 2.10 One Language, Multiple Engines

The same UKL request may involve:

- UKR resolution;
- graph traversal;
- lexical search;
- semantic similarity;
- numerical aggregation;
- reasoning;
- recommendation;
- validation lookup;
- lineage lookup.

The requesting component does not select physical engines.

---

# 3. Language Principles

## 3.1 Typed Semantics

Every expression has a type and expected result type.

## 3.2 Ontology Grounding

Entity types, fields, and predicates must resolve to registered semantic definitions.

## 3.3 Registry Grounding

Canonical IDs and revisions resolve through UKR.

## 3.4 Context Completeness

The evaluator detects when required context is absent.

## 3.5 Four-Valued Logic

Predicates evaluate to:

- true;
- false;
- unknown;
- not_applicable.

Security checks may additionally produce `inaccessible`.

## 3.6 Composability

Expressions can be combined without changing their local semantics.

## 3.7 Deterministic Normalization

Semantically equivalent expressions normalize to one canonical AST where practical.

## 3.8 No Hidden Defaults in Audited Form

Human-friendly requests may use governed defaults.

Canonical audited form expands all material defaults.

## 3.9 Explainable Planning

The system may expose a high-level execution explanation, but not physical storage details unless separately authorized.

## 3.10 Capability Negotiation

A consumer may request capabilities and receive explicit support or degradation information.

## 3.11 Safe Failure

Ambiguity, unsupported operations, insufficient evidence, and denied access produce typed errors or partial-result statuses.

## 3.12 Snapshot Consistency

A request identifies or receives a knowledge snapshot, release, or consistency point.

---

# 4. Language Layers

## 4.1 Layer 1: Message Envelope

Defines:

- language version;
- request identity;
- actor;
- purpose;
- expression;
- context;
- output contract;
- capability requirements.

## 4.2 Layer 2: Intent Layer

Defines the primary operation:

- retrieve;
- search;
- traverse;
- compare;
- aggregate;
- rank;
- similar;
- reason;
- recommend;
- explain;
- trace;
- resolve.

## 4.3 Layer 3: Domain Semantic Layer

Defines:

- target entity or object kind;
- Ontology types;
- predicates;
- fields;
- semantic references.

## 4.4 Layer 4: Context Layer

Defines:

- time;
- geography;
- jurisdiction;
- locale;
- audience;
- user or subject context;
- purpose;
- scenario;
- release snapshot.

## 4.5 Layer 5: Constraint Layer

Defines:

- filters;
- evidence;
- confidence;
- validation;
- version;
- publication;
- security;
- dependency;
- quality.

## 4.6 Layer 6: Operation Layer

Defines:

- paths;
- comparisons;
- aggregations;
- rankings;
- similarity;
- reasoning;
- recommendation;
- lineage.

## 4.7 Layer 7: Projection Layer

Defines what result fields and semantic structures are returned.

## 4.8 Layer 8: Explanation Layer

Defines the required explanation dimensions.

## 4.9 Layer 9: Result Envelope

Defines:

- status;
- snapshot;
- resolved intent;
- items;
- scores;
- explanations;
- evidence;
- warnings;
- errors;
- pagination or continuation.

## 4.10 Layer Separation Rule

A storage adapter may translate lower layers into physical operations, but it may not alter the intent, context, constraints, or output semantics.

---

# 5. Semantic Grammar

## 5.1 Canonical Text Form

A UKL request uses a block-oriented canonical syntax.

Example skeleton:

```ukl
UKL 1.0

REQUEST <request_id>
ACTOR <actor_reference>
PURPOSE <purpose_reference>

<INTENT> <target_expression>

CONTEXT
  <context_expression>

CONSTRAIN
  <constraint_expression>

OPERATE
  <operation_expression>

RETURN
  <projection_expression>

EXPLAIN
  <explanation_expression>
```

Only clauses relevant to the request are required.

## 5.2 Canonical EBNF

The following EBNF defines the UKL V1 semantic surface grammar. Whitespace and line breaks are not semantically significant except inside quoted literals.

```ebnf
document              = version_decl, request_block ;

version_decl          = "UKL", version_literal ;

request_block         = "REQUEST", request_id,
                        [ actor_clause ],
                        [ purpose_clause ],
                        intent_clause,
                        { context_clause
                        | constraint_clause
                        | operation_clause
                        | return_clause
                        | explain_clause
                        | option_clause } ;

actor_clause          = "ACTOR", reference ;
purpose_clause        = "PURPOSE", reference_or_literal ;

intent_clause         = retrieve_expr
                      | search_expr
                      | traverse_expr
                      | compare_expr
                      | aggregate_expr
                      | rank_expr
                      | similarity_expr
                      | reason_expr
                      | recommend_expr
                      | explain_expr
                      | trace_expr
                      | resolve_expr ;

retrieve_expr         = "RETRIEVE", target_expr ;
search_expr           = "SEARCH", target_expr, search_spec ;
traverse_expr         = "TRAVERSE", start_expr, path_expr ;
compare_expr          = "COMPARE", collection_expr, comparison_spec ;
aggregate_expr        = "AGGREGATE", target_expr, aggregation_spec ;
rank_expr             = "RANK", target_expr, ranking_spec ;
similarity_expr       = "SIMILAR", target_expr, "TO", reference_or_expr,
                        similarity_spec ;
reason_expr           = "REASON", reasoning_mode, target_expr,
                        [ reasoning_spec ] ;
recommend_expr        = "RECOMMEND", target_expr, recommendation_spec ;
explain_expr          = "EXPLAIN", reference_or_expr, explanation_spec ;
trace_expr            = "TRACE", trace_mode, reference_or_expr,
                        [ trace_spec ] ;
resolve_expr          = "RESOLVE", resolve_mode, reference_or_literal,
                        [ resolve_spec ] ;

target_expr           = type_ref
                      | object_kind_ref
                      | reference
                      | set_expr
                      | subquery ;

start_expr            = "FROM", reference_or_expr ;

path_expr             = path_step, { path_join, path_step } ;
path_step             = [ direction_in ], predicate_ref,
                        [ repetition ],
                        direction_out,
                        [ type_ref ],
                        [ path_alias ] ;
path_join             = "/" | "|" ;
direction_in          = "<-" ;
direction_out         = "->" | "<-" | "<->" ;
repetition            = "*", integer, "..", integer
                      | "*", integer
                      | "?" ;
path_alias             = "AS", identifier ;

context_clause        = "CONTEXT", context_expr, { ",", context_expr } ;
context_expr          = context_key, context_operator, value_expr ;

constraint_clause     = "CONSTRAIN", boolean_expr ;
operation_clause      = "OPERATE", operation_expr ;
return_clause         = "RETURN", projection_expr ;
explain_clause        = "EXPLAIN", explanation_expr ;
option_clause         = "OPTIONS", option_expr, { ",", option_expr } ;

boolean_expr          = boolean_term, { "OR", boolean_term } ;
boolean_term          = boolean_factor, { "AND", boolean_factor } ;
boolean_factor        = [ "NOT" ], predicate_expr
                      | "(", boolean_expr, ")" ;

predicate_expr        = value_expr, comparison_operator, value_expr
                      | value_expr, set_operator, collection_expr
                      | existence_expr
                      | evidence_constraint
                      | confidence_constraint
                      | validation_constraint
                      | publication_constraint
                      | version_constraint
                      | security_constraint
                      | temporal_predicate
                      | geographic_predicate ;

comparison_operator   = "=" | "!=" | "<" | "<=" | ">" | ">="
                      | "~=" | "MATCHES" | "IS" ;
set_operator          = "IN" | "NOT IN" | "CONTAINS"
                      | "OVERLAPS" | "SUBSET OF" | "SUPERSET OF" ;
existence_expr        = "EXISTS", field_path
                      | "MISSING", field_path ;

search_spec           = "FOR", search_value,
                        [ "USING", search_mode_list ],
                        [ "THRESHOLD", number ] ;

search_mode_list      = search_mode, { ",", search_mode } ;
search_mode           = "LEXICAL" | "SEMANTIC" | "ALIAS"
                      | "RELATIONAL" | "HYBRID" ;

comparison_spec       = "ON", projection_list,
                        [ "NORMALIZE", normalization_spec ] ;

aggregation_spec      = aggregation_item, { ",", aggregation_item },
                        [ "GROUP BY", projection_list ],
                        [ "HAVING", boolean_expr ] ;

aggregation_item      = aggregation_operator, "(", value_expr, ")",
                        [ "AS", identifier ] ;

ranking_spec          = "BY", ranking_item, { ",", ranking_item },
                        [ "DIVERSIFY BY", projection_list ] ;

ranking_item          = value_expr, [ direction ],
                        [ "WEIGHT", number ],
                        [ "NULLS", ("FIRST" | "LAST" | "EXCLUDE") ] ;

similarity_spec       = [ "BY", similarity_dimension_list ],
                        [ "THRESHOLD", number ],
                        [ "DIVERSIFY", diversity_spec ],
                        [ "EXCLUDE", boolean_expr ] ;

reasoning_spec        = [ "USING", collection_expr ],
                        [ "ASSUME", assumption_list ],
                        [ "HORIZON", duration_or_date ],
                        [ "SCENARIOS", collection_expr ] ;

recommendation_spec   = "FOR", subject_expr,
                        [ "GOALS", collection_expr ],
                        [ "USING", collection_expr ],
                        [ "OPTIMIZE", ranking_spec ],
                        [ "DIVERSIFY", diversity_spec ],
                        [ "EXCLUDE", boolean_expr ] ;

trace_spec            = [ "DIRECTION", trace_direction ],
                        [ "DEPTH", integer_or_all ],
                        [ "UNTIL", boolean_expr ] ;

resolve_spec          = [ "AS", type_ref ],
                        [ "IN", context_expr ],
                        [ "AMBIGUITY", ambiguity_policy ] ;

projection_expr       = projection_item, { ",", projection_item },
                        [ "AS", representation_mode ] ;

projection_item       = field_path
                      | relationship_projection
                      | evidence_projection
                      | lineage_projection
                      | computed_projection
                      | "*" ;

explanation_expr      = explanation_dimension,
                        { ",", explanation_dimension },
                        [ "DEPTH", explanation_depth ] ;

value_expr            = literal
                      | reference
                      | field_path
                      | function_expr
                      | parameter_ref
                      | subquery ;

reference_or_expr     = reference | value_expr ;
reference_or_literal  = reference | literal ;
collection_expr       = "[", [ value_expr, { ",", value_expr } ], "]"
                      | set_expr
                      | subquery ;

reference             = reference_type, ":", reference_value,
                        [ "@", revision_selector ] ;

reference_type        = "entity" | "object" | "revision" | "claim"
                      | "relationship" | "evidence" | "source"
                      | "release" | "profile" | "actor"
                      | "geography" | "locale" | "policy"
                      | "validation" ;

revision_selector     = revision_id
                      | "active"
                      | "published"
                      | "latest_validated"
                      | temporal_selector ;

field_path            = identifier, { ".", identifier } ;
type_ref              = identifier ;
predicate_ref         = identifier | qualified_identifier ;
object_kind_ref       = "OBJECT_KIND", "(", identifier, ")" ;

literal               = string | number | boolean | date | datetime
                      | duration | money | percentage | null_literal
                      | unknown_literal | not_applicable_literal ;

direction             = "ASC" | "DESC" ;
```

## 5.3 Grammar Semantics

The grammar defines structure.

The Ontology, KOS, UKR, UKVF, policy registry, and extension registry define valid semantic values.

A syntactically valid expression may still fail semantic validation.

---

# 6. Core Expressions

## 6.1 `RETRIEVE`

Returns canonical objects or identities selected by explicit references or constraints.

```ukl
RETRIEVE Career
CONSTRAIN publication.state = published
RETURN entity_id, canonical_name, summary
```

## 6.2 `SEARCH`

Finds candidates using lexical, alias, semantic, relational, or hybrid matching.

```ukl
SEARCH Career FOR "cloud security"
USING LEXICAL, SEMANTIC, ALIAS
THRESHOLD 0.72
RETURN entity_id, canonical_name, match_score
```

## 6.3 `TRAVERSE`

Navigates typed Ontology relationships.

```ukl
TRAVERSE FROM entity:career:example
  -requires_skill-> Skill
RETURN entity_id, canonical_name, relationship.strength
```

## 6.4 `COMPARE`

Compares two or more entities or result sets on explicit dimensions.

```ukl
COMPARE [
  entity:career:first,
  entity:career:second
]
ON core_skill_refs, work_environment_refs, entry_pathway_summary
RETURN comparison_matrix, shared_features, distinguishing_features
```

## 6.5 `AGGREGATE`

Computes semantic aggregates over a constrained result set.

```ukl
AGGREGATE Scholarship
  COUNT(*) AS scholarship_count
GROUP BY geography.country
CONSTRAIN publication.state = published
```

## 6.6 `RANK`

Orders candidates under declared criteria.

```ukl
RANK LearningResource
BY evidence_quality DESC,
   learner_level_match DESC,
   freshness DESC
RETURN entity_id, canonical_name, rank_score
```

## 6.7 `SIMILAR`

Retrieves semantically or structurally similar entities.

```ukl
SIMILAR Skill TO entity:skill:reference
BY SEMANTIC, RELATIONSHIPS, KNOWLEDGE_DOMAIN
THRESHOLD 0.75
RETURN entity_id, canonical_name, similarity_score, similarity_basis
```

## 6.8 `REASON`

Requests knowledge reasoning, scenario analysis, gap analysis, dependency reasoning, or forecasting.

```ukl
REASON GAP Career
USING [
  subject:current_skills,
  entity:career:target
]
RETURN missing_skills, prerequisite_dependencies, evidence
```

## 6.9 `RECOMMEND`

Requests constrained and explainable recommendations.

```ukl
RECOMMEND Career
FOR subject:user_context
GOALS ["remote_work", "data_analysis"]
OPTIMIZE compatibility DESC, evidence_quality DESC
RETURN candidates, score_components, gaps
EXPLAIN recommendation_basis, evidence, uncertainty
```

## 6.10 `EXPLAIN`

Requests an explanation of an object, result, ranking, relationship, recommendation, or decision.

```ukl
EXPLAIN entity:career:example
RETURN definition, scope, key_relationships
EXPLAIN evidence, confidence, limitations
```

## 6.11 `TRACE`

Traverses lineage, provenance, dependency, or revision history.

```ukl
TRACE PROVENANCE claim:claim_id
DIRECTION BACKWARD
DEPTH ALL
RETURN evidence, sources, transformations
```

## 6.12 `RESOLVE`

Resolves labels, aliases, external IDs, or context-dependent active revisions.

```ukl
RESOLVE IDENTITY "software engineering"
AS Career
CONTEXT locale = "en"
AMBIGUITY REQUIRE_EXPLICIT
RETURN candidates, disambiguation
```

---

# 7. Query Expressions

## 7.1 Retrieval by Canonical ID

```ukl
RETRIEVE entity:career:canonical_id
CONSTRAIN registry.state = registered
RETURN *
```

## 7.2 Retrieval by Object Revision

```ukl
RETRIEVE revision:revision_id
RETURN object_id, revision_id, payload, lifecycle, lineage
```

## 7.3 Retrieval by Type and Field

```ukl
RETRIEVE Certification
CONSTRAIN certification_scope = "cloud_security"
  AND publication.state = published
RETURN entity_id, canonical_name, issuing_authority_refs
```

## 7.4 Query Resolution Order

For a type-based retrieval, the evaluator:

1. resolves the Ontology type;
2. selects an authorized registry snapshot;
3. applies registry, validation, publication, and security constraints;
4. evaluates semantic filters;
5. applies operations;
6. returns the requested projection.

## 7.5 Query Result Stability

A response MUST identify:

- snapshot or release;
- resolution context;
- applied defaults;
- warnings;
- partial-result status.

---

# 8. Traversal Expressions

## 8.1 Path Semantics

A path step has:

- predicate;
- direction;
- target type;
- optional repetition;
- optional alias;
- optional edge constraints.

## 8.2 Traversal Operators

- `->` follows the Ontology predicate direction.
- `<-` follows the inverse direction.
- `<->` allows either direction when the predicate permits.
- `/` sequences path steps.
- `|` expresses alternative paths.
- `*n..m` repeats a path between depths.
- `?` marks an optional step.

## 8.3 Skill Dependency Traversal

```ukl
TRAVERSE FROM entity:skill:target
  -prerequisite_of<- Skill *1..4
CONSTRAIN relationship.status = active
RETURN path, dependency_depth, evidence, confidence
```

## 8.4 Career to Learning Resource Traversal

```ukl
TRAVERSE FROM entity:career:target
  -requires_skill-> Skill
  / -developed_by<- LearningResource
CONSTRAIN LearningResource.publication.state = published
RETURN Skill.canonical_name,
       LearningResource.entity_id,
       LearningResource.canonical_name
```

## 8.5 University to Major to Career Traversal

```ukl
TRAVERSE FROM entity:university:target
  -offers_program-> EducationProgram
  / -focuses_on-> Major
  / -prepares_for-> Career
CONTEXT geography = geography:country:ID
RETURN path, entities, relationship_confidence
```

## 8.6 Cycle Policy

A traversal MUST declare or inherit a cycle policy:

- `NO_CYCLES`;
- `ALLOW_SEMANTIC_CYCLES`;
- `UNIQUE_ENTITIES`;
- `UNIQUE_RELATIONSHIPS`.

Canonical audited form expands the selected policy.

## 8.7 Path Evidence

A result path may require evidence on:

- every edge;
- material edges only;
- terminal result only.

```ukl
CONSTRAIN path.evidence_coverage = complete
```

---

# 9. Relationship Expressions

## 9.1 Relationship Selection

```ukl
RETRIEVE Relationship
CONSTRAIN source = entity:career:target
  AND predicate = requires_skill
  AND status = active
RETURN relationship_id, target, strength, evidence, confidence
```

## 9.2 Relationship Pattern

Conceptually:

```ukl
RELATIONSHIP (
  entity:career:target
  -requires_skill->
  Skill
)
```

## 9.3 Relationship Constraints

Supported semantic attributes include:

- predicate;
- source type;
- target type;
- direction;
- strength;
- requirement level;
- status;
- context;
- valid period;
- geography;
- evidence;
- confidence.

## 9.4 Relationship Strength Filters

```ukl
CONSTRAIN relationship.strength IN [essential, strong, common]
```

## 9.5 Requirement-Level Filters

```ukl
CONSTRAIN relationship.requirement_level IN [
  legally_required,
  required,
  commonly_required
]
```

## 9.6 Disputed Relationships

```ukl
CONSTRAIN relationship.status IN [active, disputed]
RETURN relationship, conflict_details, counterevidence
```

---

# 10. Context Expressions

## 10.1 Context Dimensions

UKL V1 recognizes:

- `as_of`;
- `during`;
- `geography`;
- `jurisdiction`;
- `locale`;
- `language`;
- `currency`;
- `audience`;
- `purpose`;
- `subject`;
- `scenario`;
- `release`;
- `registry_snapshot`;
- `validation_profile`;
- `publication_channel`;
- `access_context`.

## 10.2 Context Example

```ukl
CONTEXT
  as_of = 2026-06-28,
  geography = geography:country:ID,
  locale = "id-ID",
  currency = "IDR",
  purpose = "career_exploration",
  release = release:active
```

## 10.3 Context Precedence

Context resolves in this order:

1. explicit expression context;
2. request envelope context;
3. authorized application context;
4. governed system default;
5. context-required error.

User profile context MUST NOT silently override explicit query context.

## 10.4 Context Inheritance

Subqueries inherit parent context unless they override a dimension explicitly.

## 10.5 Context Conflict

Conflicting contexts produce a typed conflict unless the operation defines a comparison across contexts.

---

# 11. Constraint Expressions

## 11.1 Constraint Categories

- semantic;
- evidence;
- confidence;
- validation;
- registry;
- publication;
- version;
- temporal;
- geographic;
- security;
- quality;
- dependency.

## 11.2 Constraint Composition

Constraints use Boolean operators:

- `AND`;
- `OR`;
- `NOT`.

## 11.3 Constraint Scope

A constraint may apply to:

- target object;
- result entity;
- relationship;
- claim;
- evidence;
- source;
- path;
- recommendation candidate;
- aggregate group.

## 11.4 Mandatory Versus Preference

`CONSTRAIN` defines mandatory eligibility.

`PREFER` or ranking weight defines nonmandatory preference.

A recommendation engine MUST NOT treat preference as eligibility.

## 11.5 Unknown Policy

Default filter behavior retains only predicates evaluating to `true`.

A request may specify:

```ukl
OPTIONS unknown_policy = INCLUDE_WITH_WARNING
```

Allowed policies:

- `EXCLUDE`;
- `INCLUDE_WITH_WARNING`;
- `REQUIRE_KNOWN`;
- `ERROR`.

---

# 12. Filter Expressions

## 12.1 Comparison Operators

- `=`;
- `!=`;
- `<`;
- `<=`;
- `>`;
- `>=`;
- `~=`;
- `MATCHES`;
- `IS`.

## 12.2 Set Operators

- `IN`;
- `NOT IN`;
- `CONTAINS`;
- `OVERLAPS`;
- `SUBSET OF`;
- `SUPERSET OF`.

## 12.3 Existence Operators

- `EXISTS`;
- `MISSING`.

## 12.4 Text Match

`~=` indicates normalized semantic label matching.

`MATCHES` indicates a registered pattern or text-matching profile, not an implementation-specific regular expression unless an extension explicitly defines it.

## 12.5 Career Filter Example

```ukl
RETRIEVE Career
CONSTRAIN remote_pattern IN ["remote", "hybrid"]
  AND core_skill_refs CONTAINS entity:skill:data_analysis
  AND confidence.object >= medium_high
RETURN entity_id, canonical_name, remote_pattern
```

## 12.6 Scholarship Filter Example

```ukl
RETRIEVE Scholarship
CONTEXT
  geography = geography:country:ID,
  as_of = 2026-06-28
CONSTRAIN publication.state = published
  AND eligibility.education_level CONTAINS entity:education_level:undergraduate
  AND valid_period CONTAINS context.as_of
RETURN entity_id, canonical_name, deadline, eligibility
```

---

# 13. Ranking Expressions

## 13.1 Ranking Semantics

Ranking creates an ordered result set using declared criteria.

Ranking does not imply universal superiority.

## 13.2 Ranking Operators

- `BY`;
- `ASC`;
- `DESC`;
- `WEIGHT`;
- `NULLS FIRST`;
- `NULLS LAST`;
- `NULLS EXCLUDE`;
- `DIVERSIFY BY`;
- `TIE BREAK BY`.

## 13.3 Multi-Criteria Ranking

```ukl
RANK Certification
BY relevance_to_goal DESC WEIGHT 0.40,
   evidence_quality DESC WEIGHT 0.25,
   recognition_scope DESC WEIGHT 0.20,
   cost_fit DESC WEIGHT 0.15
DIVERSIFY BY issuing_authority
RETURN entity_id, canonical_name, rank_score, score_components
```

## 13.4 Normalization

Ranking criteria with different scales require an explicit or profile-governed normalization.

Allowed semantic normalization modes:

- `MIN_MAX`;
- `PERCENTILE`;
- `Z_SCORE`;
- `ORDINAL`;
- `PROFILE_DEFINED`;
- `NONE`.

## 13.5 Missing Values

The ranking item declares missing-value behavior.

## 13.6 Ranking Explainability

For high-impact ranking, the result must expose:

- criteria;
- weights;
- normalized values;
- exclusions;
- uncertainty;
- evidence;
- ties.

---

# 14. Aggregation Expressions

## 14.1 Aggregation Operators

- `COUNT`;
- `DISTINCT_COUNT`;
- `SUM`;
- `AVG`;
- `MIN`;
- `MAX`;
- `MEDIAN`;
- `PERCENTILE`;
- `RANGE`;
- `DISTRIBUTION`;
- `TOP_K`;
- `BOTTOM_K`.

## 14.2 Grouping

```ukl
AGGREGATE University
  COUNT(*) AS university_count
GROUP BY geography.country
CONSTRAIN publication.state = published
RETURN geography.country, university_count
```

## 14.3 Salary Aggregation

```ukl
AGGREGATE SalaryObservation
  MEDIAN(amount.normalized) AS median_salary,
  PERCENTILE(amount.normalized, 25) AS p25,
  PERCENTILE(amount.normalized, 75) AS p75,
  COUNT(*) AS observation_count
GROUP BY career_ref
CONTEXT
  geography = geography:country:ID,
  currency = "IDR",
  during = 2025-01-01..2026-06-28
CONSTRAIN validation.outcome IN [passed, passed_with_warnings]
RETURN career_ref, median_salary, p25, p75, observation_count
EXPLAIN methodology, evidence, limitations
```

## 14.4 Aggregation Integrity

Aggregations must preserve:

- denominator;
- unit;
- time;
- geography;
- missing-value policy;
- source count;
- statistical method.

## 14.5 Aggregation Across Context

Cross-context aggregation requires explicit normalization or returns a context-mismatch error.

---

# 15. Projection Expressions

## 15.1 Projection Purpose

Projection defines which semantic fields and structures appear in the result.

## 15.2 Projection Types

- field projection;
- relationship projection;
- evidence projection;
- source projection;
- lineage projection;
- computed projection;
- explanation projection;
- readiness projection.

## 15.3 Representation Modes

- `COMPACT`;
- `STANDARD`;
- `FULL`;
- `GRAPH`;
- `TABLE`;
- `TIMELINE`;
- `COMPARISON`;
- `EXPLAINABLE`;
- `MACHINE`;
- `HUMAN`.

These are semantic result shapes, not UI layouts.

## 15.4 Example

```ukl
RETURN
  entity_id,
  canonical_name,
  summary,
  relationships(requires_skill),
  evidence(material_claims),
  confidence
AS EXPLAINABLE
```

## 15.5 Field Access

Field paths use canonical semantic names.

Unknown or unauthorized fields produce typed findings.

## 15.6 Projection Minimization

Security policy may reduce the requested projection while returning a partial-result notice.

---

# 16. Explanation Expressions

## 16.1 Explanation Dimensions

- `definition`;
- `scope`;
- `identity_resolution`;
- `relationship_basis`;
- `evidence`;
- `sources`;
- `confidence`;
- `ranking_basis`;
- `similarity_basis`;
- `recommendation_basis`;
- `reasoning_steps_summary`;
- `assumptions`;
- `uncertainty`;
- `limitations`;
- `counterevidence`;
- `lineage`;
- `validation`;
- `policy_constraints`;
- `excluded_candidates`.

## 16.2 Explanation Depth

- `BRIEF`;
- `STANDARD`;
- `DETAILED`;
- `AUDIT`.

`AUDIT` exposes registered rationale and traceability, not private chain of thought.

## 16.3 Recommendation Explanation

```ukl
EXPLAIN
  recommendation_basis,
  score_components,
  skill_gaps,
  evidence,
  uncertainty,
  excluded_candidates
DEPTH DETAILED
```

## 16.4 Reasoning Summary

UKL may request a concise reasoning summary that includes:

- premises;
- rules or relationship paths;
- evidence;
- intermediate semantic conclusions;
- uncertainty.

It MUST NOT require hidden token-level chain of thought.

---

# 17. Reasoning Expressions

## 17.1 Reasoning Modes

- `DEDUCT`;
- `INFER`;
- `GAP`;
- `DEPENDENCY`;
- `PATH`;
- `SCENARIO`;
- `FORECAST`;
- `COUNTERFACTUAL`;
- `CONSISTENCY`;
- `ELIGIBILITY`;
- `IMPACT`.

## 17.2 Deductive Reasoning

Uses explicit Ontology and rule premises.

```ukl
REASON DEDUCT Certification
USING [
  entity:certification:target,
  entity:career:target
]
CONSTRAIN evidence.coverage = complete
RETURN applicable_relationships, conclusion, confidence
```

## 17.3 Gap Reasoning

```ukl
REASON GAP Career
USING [
  subject:current_skill_profile,
  entity:career:target
]
RETURN
  matched_skills,
  missing_skills,
  prerequisite_skills,
  recommended_learning_resources
EXPLAIN evidence, confidence, limitations
```

## 17.4 Dependency Reasoning

```ukl
REASON DEPENDENCY Skill
USING [entity:skill:target]
RETURN prerequisite_graph, critical_path, optional_dependencies
```

## 17.5 Scenario Reasoning

```ukl
REASON SCENARIO Career
USING [
  entity:career:target,
  entity:ai_trend:relevant,
  entity:technology:relevant
]
SCENARIOS ["baseline", "accelerated_adoption", "regulated_adoption"]
HORIZON 5 YEARS
CONTEXT geography = geography:country:ID
RETURN scenarios, drivers, affected_tasks, uncertainty
```

## 17.6 Counterfactual Reasoning

Counterfactual requests must identify a changed premise.

```ukl
REASON COUNTERFACTUAL Career
USING [entity:career:target]
ASSUME [remote_pattern = "fully_remote"]
RETURN affected_requirements, changed_constraints, unsupported_assumptions
```

## 17.7 Reasoning Guardrails

Reasoning results must distinguish:

- explicit fact;
- derived conclusion;
- assumption;
- scenario;
- forecast;
- unknown.

---

# 18. Recommendation Expressions

## 18.1 Recommendation Anatomy

A recommendation expression contains:

- candidate type;
- subject context;
- goals;
- eligibility constraints;
- preferences;
- optimization criteria;
- diversity policy;
- exclusions;
- evidence and confidence constraints;
- explanation requirements.

## 18.2 Recommendation Operators

- `FOR`;
- `GOALS`;
- `USING`;
- `CONSTRAIN`;
- `PREFER`;
- `OPTIMIZE`;
- `DIVERSIFY`;
- `EXCLUDE`;
- `REQUIRE_EXPLANATION`;
- `LIMIT`.

## 18.3 Career Recommendation

```ukl
RECOMMEND Career
FOR subject:user_context
GOALS [
  "analytical_work",
  "long_term_learning",
  "location_flexibility"
]
CONSTRAIN
  publication.state = published
  AND validation.outcome IN [passed, passed_with_warnings]
  AND confidence.object >= medium
PREFER
  remote_pattern IN ["remote", "hybrid"]
OPTIMIZE
  skill_compatibility DESC WEIGHT 0.35,
  interest_alignment DESC WEIGHT 0.25,
  pathway_feasibility DESC WEIGHT 0.20,
  evidence_quality DESC WEIGHT 0.20
DIVERSIFY BY career_family_refs
RETURN candidates, score_components, skill_gaps, pathway_summary
EXPLAIN recommendation_basis, evidence, uncertainty, excluded_candidates
```

## 18.4 Learning Resource Recommendation

```ukl
RECOMMEND LearningResource
FOR subject:learner_context
GOALS [entity:skill:target]
CONSTRAIN
  publication.state = published
  AND access_policy permits purpose:"learning"
  AND validation.outcome = passed
PREFER
  learner_level = subject.level
OPTIMIZE
  skill_coverage DESC,
  evidence_quality DESC,
  recency DESC
RETURN candidates, coverage, prerequisites
```

## 18.5 Scholarship Recommendation

```ukl
RECOMMEND Scholarship
FOR subject:education_context
CONTEXT
  geography = geography:country:ID,
  as_of = 2026-06-28
CONSTRAIN
  eligibility(subject) = true
  AND valid_period CONTAINS context.as_of
  AND publication.state = published
RETURN candidates, eligibility_basis, deadlines, required_documents
EXPLAIN evidence, unknown_requirements, limitations
```

## 18.6 Recommendation Safety

Recommendation output must not:

- guarantee success;
- rank human worth;
- infer protected attributes without authority;
- conceal missing data;
- treat one pathway as mandatory unless legally required;
- present a forecast as fact.

---

# 19. Similarity Expressions

## 19.1 Similarity Dimensions

- `SEMANTIC`;
- `RELATIONSHIPS`;
- `SKILLS`;
- `KNOWLEDGE_DOMAINS`;
- `TASKS`;
- `INDUSTRIES`;
- `PATHWAYS`;
- `TECHNOLOGIES`;
- `TEXT`;
- `EVIDENCE_PROFILE`;
- `HYBRID`.

## 19.2 Similarity Is Not Equality

Every result identifies the basis and limitations of similarity.

## 19.3 Occupation Similarity

```ukl
SIMILAR Career TO entity:career:reference
BY SKILLS, TASKS, KNOWLEDGE_DOMAINS
THRESHOLD 0.70
EXCLUDE entity_id = entity:career:reference
RETURN entity_id, canonical_name, similarity_score, shared_features, differences
```

## 19.4 University Similarity

```ukl
SIMILAR University TO entity:university:reference
BY PROGRAM_PORTFOLIO, GEOGRAPHY, ORGANIZATION_TYPE
CONSTRAIN publication.state = published
RETURN entity_id, canonical_name, similarity_score, similarity_basis
```

## 19.5 Similarity Calibration

Similarity scores must declare:

- model or method;
- dimensions;
- weights;
- normalization;
- snapshot;
- threshold;
- confidence.

---

# 20. Lineage Expressions

## 20.1 Lineage Modes

- `PROVENANCE`;
- `REVISION`;
- `PRODUCTION`;
- `VALIDATION`;
- `PUBLICATION`;
- `DEPENDENCY`;
- `IDENTITY`;
- `PROJECTION`;
- `FULL`.

## 20.2 Lineage Operators

- `BACKWARD`;
- `FORWARD`;
- `BOTH`;
- `DEPTH`;
- `UNTIL`;
- `AS_OF`;
- `INCLUDING`;
- `EXCLUDING`.

## 20.3 Evidence Lineage

```ukl
TRACE PROVENANCE claim:claim_id
DIRECTION BACKWARD
DEPTH ALL
RETURN claim, evidence, source, transformations, validation
```

## 20.4 Revision History

```ukl
TRACE REVISION object:object_id
DIRECTION BACKWARD
DEPTH ALL
RETURN revision_id, semantic_version, change_class, effective_time, predecessor
AS TIMELINE
```

## 20.5 Publication Lineage

```ukl
TRACE PUBLICATION revision:revision_id
DIRECTION FORWARD
RETURN releases, publication_channels, supersession, withdrawals
```

## 20.6 Knowledge Lineage

```ukl
TRACE FULL entity:career:target
DIRECTION BOTH
DEPTH 5
RETURN
  identity_history,
  object_revisions,
  evidence,
  validations,
  reviews,
  releases,
  projections
```

---

# 21. Temporal Expressions

## 21.1 Temporal Operators

- `AS_OF`;
- `DURING`;
- `BEFORE`;
- `AFTER`;
- `BETWEEN`;
- `VALID_AT`;
- `EFFECTIVE_AT`;
- `PUBLISHED_AT`;
- `KNOWN_AT`;
- `CHANGED_SINCE`;
- `EXPIRES_BEFORE`;
- `OVERLAPS_PERIOD`.

## 21.2 Valid Time and Transaction Time

UKL distinguishes:

- **valid time**: when the knowledge applies;
- **transaction time**: when UKR recorded it;
- **publication time**: when consumers could access it.

## 21.3 Historical Revision Query

```ukl
RETRIEVE object:object_id
CONTEXT as_of = 2024-12-31
CONSTRAIN temporal.mode = VALID_TIME
RETURN revision_id, payload, lifecycle
```

## 21.4 Knowledge Known at Time

```ukl
RETRIEVE entity:technology:target
CONTEXT known_at = 2025-06-01
RETURN active_revision, evidence_available_at_time
```

## 21.5 Temporal Comparison

```ukl
COMPARE [
  entity:career:target @ AS_OF 2024-01-01,
  entity:career:target @ AS_OF 2026-01-01
]
ON required_skill_refs, ai_trend_refs, labor_market_assertion_refs
RETURN changes, added, removed, confidence_change
```

## 21.6 Future Forecast

```ukl
REASON FORECAST Career
USING [
  entity:career:target,
  AITrend,
  FutureOfWorkSignal
]
HORIZON 2031-12-31
CONTEXT geography = geography:country:ID
CONSTRAIN
  evidence.quality >= medium_high
  AND confidence.claim >= medium
RETURN scenarios, drivers, affected_tasks, opportunity_signals, risk_signals
EXPLAIN evidence, uncertainty, counterevidence
```

---

# 22. Validation-Aware Expressions

## 22.1 Validation Properties

- outcome;
- profile;
- valid_from;
- valid_until;
- blockers;
- warnings;
- waivers;
- score dimensions;
- Validator Versions.

## 22.2 Validation Operators

- `VALIDATED_BY`;
- `VALIDATION_OUTCOME`;
- `VALIDATION_VALID_AT`;
- `NO_BLOCKERS`;
- `WARNING_COUNT`;
- `WAIVER_FREE`;
- `SCORE_AT_LEAST`.

## 22.3 Publication-Quality Retrieval

```ukl
RETRIEVE Career
CONSTRAIN
  validation.outcome = passed
  AND validation.profile = profile:publication
  AND validation.valid_until >= context.as_of
  AND validation.blockers = 0
RETURN entity_id, canonical_name, validation_summary
```

## 22.4 Warning-Aware Retrieval

```ukl
RETRIEVE Technology
CONSTRAIN
  validation.outcome IN [passed, passed_with_warnings]
RETURN entity_id, canonical_name, warnings, readiness_profiles
```

## 22.5 Validation Failure Explanation

```ukl
EXPLAIN validation:run_id
RETURN outcome, blockers, errors, warnings, remediation
DEPTH AUDIT
```

---

# 23. Registry-Aware Expressions

## 23.1 Registry Properties

- Entity ID;
- Object ID;
- Revision ID;
- registry state;
- active pointer;
- redirects;
- merge and split history;
- supersession;
- archive;
- logical deletion;
- namespace;
- external references.

## 23.2 Registry Operators

- `REGISTERED`;
- `ACTIVE_REVISION`;
- `EXACT_REVISION`;
- `FOLLOW_REDIRECT`;
- `INCLUDE_SUPERSEDED`;
- `INCLUDE_ARCHIVED`;
- `RESOLVE_CONTEXT`;
- `EXTERNAL_ID`;
- `NAMESPACE`.

## 23.3 Active Revision Resolution

```ukl
RESOLVE ACTIVE_REVISION entity:career:target
CONTEXT
  locale = "id-ID",
  publication_channel = "public"
RETURN object_id, revision_id, pointer_context
```

## 23.4 Merge History

```ukl
TRACE IDENTITY entity:legacy_id
DIRECTION FORWARD
RETURN redirects, merge_record, canonical_survivor
```

## 23.5 Split History

```ukl
TRACE IDENTITY entity:origin_id
DIRECTION FORWARD
RETURN split_children, allocation_map, effective_time
```

## 23.6 Archived Retrieval

```ukl
RETRIEVE object:object_id
CONSTRAIN registry.state = registry_archived
  AND access_policy permits purpose:"audit"
RETURN revisions, archive_metadata, replacement_links
```

---

# 24. Security-Aware Expressions

## 24.1 Security Context

A request envelope may include:

- actor;
- organization;
- role;
- purpose;
- jurisdiction;
- authorization token reference;
- data handling profile.

UKL does not carry raw secrets.

## 24.2 Security Operators

- `PERMITS`;
- `DENIES`;
- `REQUIRES_ROLE`;
- `PURPOSE_IS`;
- `CLASSIFICATION_AT_MOST`;
- `REDACT`;
- `MINIMIZE`;
- `AUDIT_ACCESS`.

## 24.3 Purpose-Limited Query

```ukl
RETRIEVE LearningResource
PURPOSE "career_guidance"
CONSTRAIN access_policy permits purpose:"career_guidance"
RETURN entity_id, canonical_name, public_summary
```

## 24.4 Restricted Projection

```ukl
RETRIEVE source:source_id
CONSTRAIN access.classification <= actor.clearance
RETURN metadata, permitted_excerpt
OPTIONS denied_field_policy = REDACT
```

## 24.5 Fail-Closed Rule

When authorization is indeterminate, restricted data is not returned.

## 24.6 Security Result Status

A result may be:

- complete;
- redacted;
- access_denied;
- partially_authorized;
- purpose_restricted.

---

# 25. Localization Expressions

## 25.1 Localization Dimensions

- locale;
- language;
- jurisdiction;
- terminology source;
- translation status;
- equivalence status;
- local framework;
- currency;
- units;
- date format.

## 25.2 Localization Operators

- `IN_LOCALE`;
- `FALLBACK_LOCALE`;
- `OFFICIAL_NAME`;
- `DISPLAY_NAME`;
- `TRANSLATION_STATUS`;
- `EQUIVALENCE`;
- `LOCAL_FRAMEWORK`;
- `TRANSLITERATE`.

## 25.3 Localized Career Retrieval

```ukl
RETRIEVE entity:career:target
CONTEXT locale = "id-ID"
RETURN
  display_name,
  localized_summary,
  aliases,
  localization_status
OPTIONS fallback_locale = "en"
```

## 25.4 University Official Name

```ukl
RETRIEVE University
CONSTRAIN geography.country = geography:country:ID
RETURN entity_id, official_name IN_LOCALE "id-ID", former_names
```

## 25.5 Cross-Locale Comparison

```ukl
COMPARE [
  entity:major:target IN_LOCALE "en-US",
  entity:major:target IN_LOCALE "id-ID"
]
ON definition, scope, equivalence_status
RETURN semantic_differences, translation_notes
```

---

# 26. Output Representation

## 26.1 Canonical Result Envelope

Every UKL result MUST contain:

- language version;
- request ID;
- result ID;
- status;
- resolved intent;
- execution capabilities used;
- registry snapshot or release;
- context;
- applied constraints;
- result payload;
- warnings;
- errors;
- partial-result information;
- continuation;
- explanation references;
- audit and correlation references where authorized.

## 26.2 Result Status

- `success`;
- `success_with_warnings`;
- `partial`;
- `no_results`;
- `ambiguous`;
- `indeterminate`;
- `access_denied`;
- `invalid_request`;
- `unsupported`;
- `failed`.

## 26.3 Result Item Metadata

Each item should identify:

- Entity ID;
- Object ID;
- Revision ID;
- entity or object type;
- lifecycle;
- registry state;
- publication state;
- validation summary;
- confidence;
- context;
- source or evidence availability;
- ranking or similarity score when applicable.

## 26.4 Partial Results

Partial results must state:

- missing partitions or capabilities;
- inaccessible fields;
- unresolved dependencies;
- unexecuted clauses;
- impact on interpretation.

## 26.5 Stable Ordering

When ordering is semantically required, tie-break rules must be explicit or profile-governed.

## 26.6 Continuation

Continuation semantics are logical and opaque.

UKL does not expose database cursors.

---

# 27. Error Semantics

## 27.1 Error Classes

- syntax error;
- semantic type error;
- unknown keyword;
- unknown entity type;
- unknown predicate;
- unknown field;
- unresolved identity;
- ambiguous identity;
- invalid context;
- missing required context;
- invalid constraint;
- incompatible constraints;
- unsupported capability;
- validation constraint unsatisfied;
- evidence constraint unsatisfied;
- confidence constraint unsatisfied;
- version not found;
- publication state unavailable;
- access denied;
- dependency cycle;
- result too broad;
- execution timeout;
- partial backend failure;
- internal execution failure.

## 27.2 Error Contract

Every error contains:

- Error ID;
- code;
- category;
- message;
- affected AST node;
- severity;
- retryability;
- remediation;
- available alternatives;
- correlation ID.

## 27.3 Ambiguity

Ambiguity is not silently resolved in authoritative mode.

Allowed ambiguity policies:

- `REQUIRE_EXPLICIT`;
- `RETURN_CANDIDATES`;
- `USE_HIGHEST_CONFIDENCE` only when policy permits;
- `USE_CONTEXT`;
- `ERROR`.

## 27.4 Multiple Errors

A parser or semantic analyzer may return multiple independent errors when safe.

## 27.5 Security Errors

Security errors must not leak the existence or contents of restricted objects beyond policy.

---

# 28. Versioning

## 28.1 Language Version

Every request declares a UKL version.

Example:

```ukl
UKL 1.0
```

## 28.2 Semantic Versioning

### Major

Breaking grammar or semantic change.

### Minor

Backward-compatible operators, clauses, types, or profiles.

### Patch

Clarification or correction without behavioral change.

## 28.3 Compatibility

An engine declares supported:

- UKL versions;
- profiles;
- extensions;
- operators;
- output modes;
- reasoning capabilities.

## 28.4 Deprecation

Deprecated syntax:

- remains parseable for a declared period;
- emits warning;
- has a canonical replacement;
- is excluded from new canonical examples.

## 28.5 Canonicalization Version

Canonical AST normalization rules are versioned independently when necessary.

## 28.6 Request Upgrade

An engine may return an upgraded canonical expression only when semantic equivalence is provable.

---

# 29. Extensibility

## 29.1 Extension Principles

Extensions must:

- use registered namespaces;
- preserve universal semantics;
- remain typed;
- declare version;
- define grammar or AST additions;
- define validator rules;
- define capability negotiation;
- avoid reserved-keyword collision.

## 29.2 Namespaced Extensions

Example conceptual form:

```ukl
EXTENSION karirgps.education:1.0
```

Namespaced operators:

```ukl
karirgps.education:qualification_equivalence(...)
```

## 29.3 Extension Types

- new entity semantic functions;
- domain-specific aggregations;
- domain-specific reasoning modes;
- output profiles;
- policy profiles;
- new literal types;
- controlled operators.

## 29.4 Prohibited Extensions

An extension must not:

- bypass access control;
- create unregistered Ontology predicates;
- redefine confidence levels;
- weaken evidence or validation requirements;
- change ID semantics;
- expose physical database instructions;
- require private chain of thought.

## 29.5 Extension Registry

Each extension record contains:

- namespace;
- version;
- owner;
- grammar changes;
- AST nodes;
- semantic rules;
- validator;
- compatibility;
- deprecation;
- security profile.

---

# 30. Future Compatibility

## 30.1 New Entity Types

New entity types become queryable when registered in the Ontology and UKR.

The UKL grammar does not require redesign.

## 30.2 New Object Kinds

New object kinds use `OBJECT_KIND(...)` and registered projections.

## 30.3 Multimodal Knowledge

Future UKL versions may support semantic operations over:

- images;
- audio;
- video;
- diagrams;
- datasets;
- simulations;
- executable artifacts.

The same identity, evidence, version, access, and explanation principles remain.

## 30.4 Federated Knowledge

Federated queries may use registered namespaces and exchange profiles while preserving canonical identity mappings.

## 30.5 Agent-to-Agent Communication

Agents may exchange UKL ASTs and result envelopes without sharing implementation details.

## 30.6 New Retrieval Methods

Future retrieval methods may implement UKL `SEARCH` or `SIMILAR` capabilities without changing request semantics.

## 30.7 New Reasoning Engines

Symbolic, probabilistic, causal, neural, and hybrid engines may implement `REASON` modes if they declare capabilities and preserve evidence and uncertainty.

## 30.8 Decade-Scale Stability

UKL remains stable by preserving:

- typed semantic intent;
- explicit context;
- Ontology grounding;
- registry grounding;
- evidence and validation constraints;
- explainable results;
- implementation independence.

---

# 31. Lexical Model and Reserved Keywords

## 31.1 Case

Reserved keywords are case-insensitive during parsing but MUST be uppercase in Canonical Text Form.

Ontology identifiers and field paths preserve registered case rules; canonical recommendation is `lower_snake_case`.

## 31.2 Identifiers

Identifiers may contain:

- letters;
- digits after the first character;
- underscore;
- registered namespace separator `:`.

## 31.3 String Literals

Strings use double quotes.

Escaping rules are serialization-profile specific but must preserve Unicode.

## 31.4 Dates and Times

- Date: ISO 8601 `YYYY-MM-DD`.
- Date-time: ISO 8601 with timezone.
- Duration: ISO 8601 duration or canonical UKL duration literal.
- Date range: `start..end`.

## 31.5 Locale and Currency

- locale: BCP 47;
- currency: ISO 4217;
- geography: UKR Geography ID.

## 31.6 Reserved Keywords

Core reserved keywords include:

```text
UKL
REQUEST
ACTOR
PURPOSE
RETRIEVE
SEARCH
TRAVERSE
COMPARE
AGGREGATE
RANK
SIMILAR
REASON
RECOMMEND
EXPLAIN
TRACE
RESOLVE
FROM
TO
FOR
ON
BY
USING
CONTEXT
CONSTRAIN
OPERATE
RETURN
OPTIONS
AND
OR
NOT
IN
IS
EXISTS
MISSING
CONTAINS
OVERLAPS
SUBSET
SUPERSET
AS
OF
DURING
BEFORE
AFTER
BETWEEN
VALID
EFFECTIVE
PUBLISHED
KNOWN
CHANGED
SINCE
HORIZON
SCENARIOS
ASSUME
GOALS
PREFER
OPTIMIZE
DIVERSIFY
EXCLUDE
LIMIT
OFFSET
DEPTH
DIRECTION
UNTIL
GROUP
HAVING
ASC
DESC
WEIGHT
THRESHOLD
NULLS
FIRST
LAST
INCLUDE
ACTIVE
REGISTERED
VALIDATED
LINEAGE
PROVENANCE
REVISION
DEPENDENCY
IDENTITY
PUBLICATION
SEMANTIC
RELATIONAL
LEXICAL
HYBRID
EVIDENCE
CONFIDENCE
VALIDATION
VERSION
SECURITY
LOCALIZATION
```

## 31.7 Reserved Keyword Governance

Adding a core keyword requires a minor or major UKL version depending on compatibility.

---

# 32. Abstract Syntax Tree

## 32.1 Root Node

`UKLRequest`

Fields:

- language_version;
- request_id;
- actor;
- purpose;
- intent;
- context;
- constraints;
- operations;
- projection;
- explanation;
- options;
- extensions.

## 32.2 Intent Node Hierarchy

```text
Intent
├── RetrieveIntent
├── SearchIntent
├── TraverseIntent
├── CompareIntent
├── AggregateIntent
├── RankIntent
├── SimilarityIntent
├── ReasonIntent
├── RecommendIntent
├── ExplainIntent
├── TraceIntent
└── ResolveIntent
```

## 32.3 Expression Node Hierarchy

```text
Expression
├── ReferenceExpression
├── TypeExpression
├── FieldExpression
├── LiteralExpression
├── FunctionExpression
├── CollectionExpression
├── SubqueryExpression
├── BooleanExpression
├── ConstraintExpression
├── PathExpression
├── AggregationExpression
├── RankingExpression
├── SimilarityExpression
├── ReasoningExpression
├── RecommendationExpression
├── ProjectionExpression
└── ExplanationExpression
```

## 32.4 Constraint Node Hierarchy

```text
Constraint
├── SemanticConstraint
├── EvidenceConstraint
├── ConfidenceConstraint
├── ValidationConstraint
├── RegistryConstraint
├── PublicationConstraint
├── VersionConstraint
├── TemporalConstraint
├── GeographicConstraint
├── LocalizationConstraint
├── SecurityConstraint
├── DependencyConstraint
└── QualityConstraint
```

## 32.5 Reference Node

Fields:

- reference_type;
- namespace;
- identifier;
- revision_selector;
- context_selector.

## 32.6 Path Node

Fields:

- start;
- steps;
- cycle_policy;
- path_constraints;
- result_mode.

Each step contains:

- predicate;
- direction;
- target_type;
- repetition;
- alias;
- edge_constraints.

## 32.7 AST Canonicalization

Canonicalization:

1. expands material defaults;
2. resolves keyword case;
3. resolves type and predicate namespaces;
4. normalizes literals;
5. sorts unordered constraint sets;
6. preserves ordered ranking and path clauses;
7. assigns node IDs for audit;
8. records unresolved references explicitly.

## 32.8 AST Fingerprint

An auditable request may include a semantic AST fingerprint.

Whitespace and nonsemantic formatting do not affect the fingerprint.

---

# 33. Type System

## 33.1 Primitive Types

- String;
- Boolean;
- Integer;
- Decimal;
- Date;
- DateTime;
- Duration;
- Percentage;
- Money;
- Locale;
- Currency;
- Geography;
- URI;
- Null;
- Unknown;
- NotApplicable.

## 33.2 Knowledge Types

- EntityReference;
- ObjectReference;
- RevisionReference;
- ClaimReference;
- RelationshipReference;
- EvidenceReference;
- SourceReference;
- ReleaseReference;
- ValidationReference;
- PolicyReference;
- ActorReference.

## 33.3 Semantic Types

- EntityType;
- ObjectKind;
- Predicate;
- FieldPath;
- ConfidenceLevel;
- ValidationOutcome;
- LifecycleState;
- RegistryState;
- PublicationState;
- RelationshipStrength;
- RequirementLevel;
- EvidenceQuality;
- VersionConstraint.

## 33.4 Collection Types

- List;
- Set;
- OrderedSet;
- Map;
- Path;
- ResultSet;
- GroupedResult;
- ComparisonMatrix;
- Timeline;
- ExplanationBundle.

## 33.5 Type Compatibility

Type compatibility is determined by:

- primitive type;
- Ontology class hierarchy;
- predicate domain and range;
- registered coercion;
- extension rules.

## 33.6 Coercion

Only safe, registered coercions are permitted.

Examples:

- integer to decimal;
- canonical name to unresolved identity candidate;
- date to closed day interval.

Names cannot be coerced silently to canonical identities in authoritative mode.

---

# 34. Evaluation Semantics

## 34.1 Semantic Evaluation Pipeline

1. parse Canonical Text Form;
2. construct AST;
3. validate language version;
4. resolve extensions;
5. type-check;
6. resolve Ontology terms;
7. resolve UKR references;
8. resolve context;
9. authorize actor and purpose;
10. normalize constraints;
11. select capability plan;
12. execute semantic operations;
13. merge engine results;
14. apply evidence, confidence, validation, and publication constraints;
15. project output;
16. construct explanation;
17. emit result envelope.

## 34.2 Backend Independence

An engine may use any combination of physical backends.

The result must preserve UKL semantics.

## 34.3 Capability Plan

The evaluator may use:

- registry resolver;
- lexical retrieval;
- semantic retrieval;
- graph traversal;
- numerical analytics;
- reasoning engine;
- recommendation engine;
- validation service;
- lineage service.

## 34.4 Capability Degradation

If a requested capability is unavailable:

- fail when mandatory;
- return partial result when allowed;
- identify the unexecuted clause;
- never silently substitute a materially different method.

## 34.5 Snapshot

All stages use one compatible snapshot or explicitly declared cross-snapshot semantics.

## 34.6 Determinism

Deterministic clauses should produce identical results under the same snapshot and policy.

Probabilistic clauses must expose method, version, and score semantics.

---

# 35. Four-Valued Logic

## 35.1 Values

- `TRUE`;
- `FALSE`;
- `UNKNOWN`;
- `NOT_APPLICABLE`.

Security may produce `INACCESSIBLE`, which is not a truth value and is handled before ordinary filtering.

## 35.2 Negation

- NOT TRUE = FALSE
- NOT FALSE = TRUE
- NOT UNKNOWN = UNKNOWN
- NOT NOT_APPLICABLE = NOT_APPLICABLE

## 35.3 Conjunction

Key behavior:

- FALSE AND anything = FALSE, except inaccessible is handled separately.
- TRUE AND UNKNOWN = UNKNOWN.
- TRUE AND NOT_APPLICABLE = NOT_APPLICABLE when the condition expects applicability.
- UNKNOWN AND NOT_APPLICABLE = UNKNOWN or profile-defined indeterminate.

## 35.4 Disjunction

- TRUE OR anything = TRUE.
- FALSE OR UNKNOWN = UNKNOWN.
- FALSE OR NOT_APPLICABLE = NOT_APPLICABLE.
- UNKNOWN OR NOT_APPLICABLE = UNKNOWN or profile-defined indeterminate.

## 35.5 Filter Default

Only `TRUE` satisfies a mandatory filter unless `unknown_policy` changes the behavior.

## 35.6 Comparison with Null

`NULL` represents an explicitly empty value.

`UNKNOWN` represents unavailable or insufficiently known value.

They are not interchangeable.

---

# 36. Context Resolution and Defaults

## 36.1 Canonical Context Object

A resolved context includes:

- time;
- geography;
- jurisdiction;
- locale;
- audience;
- purpose;
- actor;
- subject;
- release;
- registry snapshot;
- validation profile;
- publication channel;
- currency;
- unit system.

## 36.2 Required Context Detection

The engine determines required context from:

- target type;
- selected fields;
- predicates;
- profiles;
- policy;
- operation.

Salary requires geography, time, and currency.

Regulation requires jurisdiction and effective time.

Localization requires locale.

## 36.3 Default Policy

Defaults are registered policies with:

- policy ID;
- version;
- scope;
- value;
- reason;
- audit visibility.

## 36.4 Context Expansion

The result envelope lists explicit and defaulted context separately.

## 36.5 Subject Context

A subject reference may point to authorized Memory, Assessment, or user-context data.

UKL does not embed sensitive personal attributes unnecessarily.

---

# 37. Capability and Conformance Profiles

## 37.1 Core Profile

Supports:

- retrieve;
- resolve;
- filter;
- projection;
- context;
- registry and publication constraints.

## 37.2 Graph Profile

Adds:

- traversal;
- path expressions;
- relationship filters;
- graph projection.

## 37.3 Evidence Profile

Adds:

- evidence;
- sources;
- citations;
- provenance;
- confidence constraints.

## 37.4 Analytics Profile

Adds:

- aggregation;
- numerical;
- statistical;
- comparison;
- ranking.

## 37.5 Reasoning Profile

Adds:

- reason;
- dependencies;
- scenarios;
- gap analysis;
- impact analysis.

## 37.6 Recommendation Profile

Adds:

- subject context;
- goals;
- optimize;
- diversify;
- exclusions;
- explanation.

## 37.7 Historical Profile

Adds:

- as-of;
- known-at;
- revision history;
- lineage;
- release history.

## 37.8 Secure Profile

Adds:

- actor;
- purpose;
- access constraints;
- redaction;
- audit.

## 37.9 Engine Conformance

An engine declares:

- supported profiles;
- operator coverage;
- maximum path depth;
- aggregation limits;
- reasoning modes;
- similarity methods;
- output modes;
- extensions.

---

# 38. Message and Agent Interchange Envelope

## 38.1 Request Envelope

A semantic request envelope contains:

- message type;
- UKL version;
- request ID;
- conversation or task correlation;
- actor;
- purpose;
- UKL AST or Canonical Text;
- capabilities required;
- deadline or service class;
- access context;
- expected result profile;
- callback or continuation metadata where transport permits.

## 38.2 Agent Delegation

An agent may delegate a subexpression.

The delegated request must include:

- parent request ID;
- causation ID;
- narrowed authority;
- inherited context;
- allowed projection;
- result-use restriction.

## 38.3 Result Envelope

Agents return:

- status;
- resolved AST;
- result;
- explanation;
- evidence;
- warnings;
- errors;
- continuation;
- provenance;
- capability report.

## 38.4 No Prompt Coupling

Agents exchange UKL intent, not model-specific prompt instructions, whenever a semantic operation can be represented in UKL.

---

# 39. Semantic Operator Catalog

## 39.1 Boolean Operators

- AND
- OR
- NOT

## 39.2 Comparison Operators

- =
- !=
- <
- <=
- >
- >=
- ~=
- MATCHES
- IS

## 39.3 Set Operators

- IN
- NOT IN
- CONTAINS
- OVERLAPS
- SUBSET OF
- SUPERSET OF

## 39.4 Traversal Operators

- ->
- <-
- <->
- /
- |
- *n
- *n..m
- ?

## 39.5 Temporal Operators

- AS_OF
- DURING
- BEFORE
- AFTER
- BETWEEN
- VALID_AT
- EFFECTIVE_AT
- PUBLISHED_AT
- KNOWN_AT
- CHANGED_SINCE
- EXPIRES_BEFORE
- OVERLAPS_PERIOD

## 39.6 Confidence Operators

- CONFIDENCE_AT_LEAST
- CONFIDENCE_AT_MOST
- CONFIDENCE_BETWEEN
- CONFIDENCE_KNOWN
- CONFIDENCE_SCOPED_TO

Canonical text may express these as field comparisons.

## 39.7 Evidence Operators

- EVIDENCE_REQUIRED
- EVIDENCE_COUNT
- PRIMARY_SOURCE_REQUIRED
- SOURCE_CLASS_IN
- EVIDENCE_FRESH_AT
- COUNTEREVIDENCE_INCLUDED
- PROVENANCE_COMPLETE

## 39.8 Lineage Operators

- TRACE
- BACKWARD
- FORWARD
- BOTH
- DEPTH
- UNTIL
- INCLUDING
- EXCLUDING

## 39.9 Recommendation Operators

- FOR
- GOALS
- PREFER
- OPTIMIZE
- DIVERSIFY
- EXCLUDE
- LIMIT
- REQUIRE_EXPLANATION

## 39.10 Ranking Operators

- BY
- ASC
- DESC
- WEIGHT
- NULLS
- TIE_BREAK
- DIVERSIFY_BY

## 39.11 Similarity Operators

- SIMILAR
- BY
- THRESHOLD
- DIVERSIFY
- EXCLUDE_SAME_ID
- METHOD
- NORMALIZE

---

# 40. Comprehensive Examples

The examples use conceptual identifiers. They demonstrate language behavior and do not assert real-world knowledge.

## 40.1 Career Retrieval

```ukl
UKL 1.0
REQUEST req-career-001
PURPOSE "career_exploration"

RETRIEVE Career

CONTEXT
  locale = "en",
  release = release:active

CONSTRAIN
  registry.state = registered
  AND publication.state = published
  AND validation.outcome IN [passed, passed_with_warnings]
  AND confidence.object >= medium

RETURN
  entity_id,
  canonical_name,
  summary,
  career_family_refs,
  core_skill_refs,
  confidence,
  warnings
AS STANDARD
```

## 40.2 Skill Search

```ukl
UKL 1.0
REQUEST req-skill-001

SEARCH Skill FOR "data visualization"
USING LEXICAL, SEMANTIC, ALIAS
THRESHOLD 0.70

CONSTRAIN
  publication.state = published

RETURN
  entity_id,
  canonical_name,
  definition,
  match_score,
  match_basis
```

## 40.3 University Search by Major and Geography

```ukl
UKL 1.0
REQUEST req-university-001

RETRIEVE University

CONTEXT
  geography = geography:country:ID,
  locale = "id-ID"

CONSTRAIN
  publication.state = published
  AND relationships(offers_program)
      CONTAINS (
        EducationProgram -focuses_on-> entity:major:target
      )

RETURN
  entity_id,
  official_name,
  geography,
  matching_program_refs
```

## 40.4 Company and Technology Relationship

```ukl
UKL 1.0
REQUEST req-company-tech-001

TRAVERSE FROM entity:company:target
  -uses_technology-> Technology

CONSTRAIN
  relationship.status = active
  AND relationship.evidence_coverage = complete

RETURN
  Technology.entity_id,
  Technology.canonical_name,
  relationship.context,
  relationship.evidence,
  relationship.confidence
```

## 40.5 Certification for a Career

```ukl
UKL 1.0
REQUEST req-certification-001

TRAVERSE FROM entity:career:target
  -benefits_from_certification-> Certification

CONSTRAIN
  Certification.publication.state = published
  AND relationship.strength IN [essential, strong, common]

RETURN
  Certification.entity_id,
  Certification.canonical_name,
  relationship.requirement_level,
  relationship.rationale,
  evidence
```

## 40.6 Industry Career Exploration

```ukl
UKL 1.0
REQUEST req-industry-career-001

TRAVERSE FROM entity:industry:target
  -employs_or_uses-> Career

CONTEXT
  geography = geography:country:ID,
  as_of = 2026-06-28

CONSTRAIN
  relationship.status IN [active, contextual]

RETURN
  Career.entity_id,
  Career.canonical_name,
  relationship.strength,
  contextual_assertions
```

## 40.7 Technology Dependency

```ukl
UKL 1.0
REQUEST req-tech-dependency-001

TRACE DEPENDENCY entity:technology:target
DIRECTION BACKWARD
DEPTH 4

RETURN
  dependency_path,
  mandatory_dependencies,
  optional_dependencies,
  blocked_dependencies
```

## 40.8 Learning Resource for a Skill

```ukl
UKL 1.0
REQUEST req-learning-001

RECOMMEND LearningResource
FOR subject:learner_context
GOALS [entity:skill:target]

CONSTRAIN
  publication.state = published
  AND validation.outcome = passed
  AND access_policy permits purpose:"learning"

PREFER
  learner_level = subject.level

OPTIMIZE
  skill_coverage DESC WEIGHT 0.40,
  evidence_quality DESC WEIGHT 0.30,
  recency DESC WEIGHT 0.20,
  accessibility DESC WEIGHT 0.10

RETURN
  candidates,
  coverage,
  prerequisites,
  score_components

EXPLAIN
  recommendation_basis,
  evidence,
  limitations
DEPTH STANDARD
```

## 40.9 Scholarship Exploration

```ukl
UKL 1.0
REQUEST req-scholarship-001

SEARCH Scholarship FOR "engineering undergraduate"
USING LEXICAL, SEMANTIC

CONTEXT
  geography = geography:country:ID,
  as_of = 2026-06-28,
  locale = "id-ID"

CONSTRAIN
  publication.state = published
  AND valid_period CONTAINS context.as_of
  AND validation.outcome IN [passed, passed_with_warnings]

RETURN
  entity_id,
  canonical_name,
  eligibility,
  deadline,
  funding_scope,
  warnings
```

## 40.10 Occupation Comparison

```ukl
UKL 1.0
REQUEST req-career-compare-001

COMPARE [
  entity:career:first,
  entity:career:second
]

ON
  primary_work_purpose,
  core_task_categories,
  core_skill_refs,
  typical_work_environment_refs,
  entry_pathway_summary,
  transferability_summary

CONTEXT
  geography = geography:country:ID,
  as_of = 2026-06-28

RETURN
  comparison_matrix,
  shared_features,
  distinguishing_features,
  unknown_dimensions,
  evidence_quality

EXPLAIN
  evidence,
  confidence,
  limitations
```

## 40.11 Career Roadmap

```ukl
UKL 1.0
REQUEST req-roadmap-001

REASON PATH Career
USING [
  subject:current_profile,
  entity:career:target
]

CONSTRAIN
  relationship.evidence_coverage >= substantial
  AND validation.outcome IN [passed, passed_with_warnings]

RETURN
  current_strengths,
  missing_skills,
  prerequisite_order,
  learning_resource_options,
  certification_options,
  project_options,
  estimated_stages

EXPLAIN
  pathway_basis,
  assumptions,
  evidence,
  uncertainty
DEPTH DETAILED
```

## 40.12 Career Recommendation

```ukl
UKL 1.0
REQUEST req-career-recommend-001
ACTOR actor:authorized_recommendation_agent
PURPOSE "career_exploration"

RECOMMEND Career
FOR subject:user_context

GOALS [
  "analytical_problem_solving",
  "continuous_learning",
  "flexible_work_environment"
]

CONSTRAIN
  publication.state = published
  AND validation.outcome IN [passed, passed_with_warnings]
  AND confidence.object >= medium
  AND access_policy permits purpose:"career_exploration"

OPTIMIZE
  skill_compatibility DESC WEIGHT 0.30,
  interest_alignment DESC WEIGHT 0.25,
  pathway_feasibility DESC WEIGHT 0.20,
  work_environment_alignment DESC WEIGHT 0.15,
  evidence_quality DESC WEIGHT 0.10

DIVERSIFY BY
  career_family_refs,
  industry_relationships

RETURN
  candidates,
  score_components,
  matched_attributes,
  gaps,
  pathway_summary,
  warnings

EXPLAIN
  recommendation_basis,
  evidence,
  confidence,
  uncertainty,
  excluded_candidates
DEPTH DETAILED
```

## 40.13 Future Career Prediction as Forecast

```ukl
UKL 1.0
REQUEST req-career-forecast-001

REASON FORECAST Career
USING [
  entity:career:target,
  AITrend,
  FutureOfWorkSignal,
  LaborMarketAssertion
]

HORIZON 2031-12-31
SCENARIOS [
  "baseline",
  "accelerated_ai_adoption",
  "regulated_ai_adoption"
]

CONTEXT
  geography = geography:country:ID,
  as_of = 2026-06-28

CONSTRAIN
  evidence.quality >= medium
  AND confidence.claim >= medium
  AND validation.outcome IN [passed, passed_with_warnings]

RETURN
  scenarios,
  drivers,
  affected_tasks,
  emerging_skills,
  opportunity_signals,
  risk_signals,
  uncertainty

EXPLAIN
  evidence,
  counterevidence,
  assumptions,
  limitations
DEPTH AUDIT
```

## 40.14 Salary Exploration

```ukl
UKL 1.0
REQUEST req-salary-001

AGGREGATE SalaryObservation
  MEDIAN(amount.normalized) AS median_salary,
  PERCENTILE(amount.normalized, 25) AS lower_quartile,
  PERCENTILE(amount.normalized, 75) AS upper_quartile,
  COUNT(*) AS observation_count

GROUP BY
  career_ref,
  experience_level

CONTEXT
  geography = geography:country:ID,
  currency = "IDR",
  during = 2025-01-01..2026-06-28

CONSTRAIN
  publication.state = published
  AND evidence.quality >= medium
  AND validation.outcome IN [passed, passed_with_warnings]

RETURN
  career_ref,
  experience_level,
  median_salary,
  lower_quartile,
  upper_quartile,
  observation_count,
  methodology

EXPLAIN
  source_coverage,
  normalization,
  limitations
```

## 40.15 Skill Dependency Graph

```ukl
UKL 1.0
REQUEST req-skill-graph-001

TRAVERSE FROM entity:skill:target
  <-prerequisite_of- Skill *1..5

CONSTRAIN
  relationship.status = active
  AND relationship.confidence >= medium

RETURN
  path,
  skill_nodes,
  critical_dependencies,
  optional_dependencies,
  cycle_warnings
AS GRAPH
```

## 40.16 Evidence Lookup

```ukl
UKL 1.0
REQUEST req-evidence-001

TRACE PROVENANCE claim:claim_id
DIRECTION BACKWARD
DEPTH ALL

RETURN
  claim,
  evidence,
  sources,
  source_locations,
  transformations,
  evidence_quality,
  validation_findings
```

## 40.17 Historical Revisions

```ukl
UKL 1.0
REQUEST req-history-001

TRACE REVISION object:object_id
DIRECTION BACKWARD
DEPTH ALL

RETURN
  revision_id,
  semantic_version,
  lifecycle,
  change_class,
  change_summary,
  effective_time,
  validation_run,
  release_membership
AS TIMELINE
```

## 40.18 Knowledge Lineage

```ukl
UKL 1.0
REQUEST req-lineage-001

TRACE FULL revision:revision_id
DIRECTION BOTH
DEPTH 6

RETURN
  production_case,
  generator_attempt,
  evidence_bundle,
  claims,
  validation_runs,
  reviews,
  registration_transaction,
  releases,
  projections
```

## 40.19 Graph Traversal Across Career, Skill, Certification, and Learning Resource

```ukl
UKL 1.0
REQUEST req-graph-001

TRAVERSE FROM entity:career:target
  -requires_skill-> Skill
  / <-validates_skill- Certification
  | <-develops- LearningResource

CONSTRAIN
  relationship.status = active
  AND publication.state = published

RETURN
  paths,
  entities,
  relationships,
  evidence,
  confidence
AS GRAPH
```

## 40.20 Compare Historical and Current Technology

```ukl
UKL 1.0
REQUEST req-tech-history-001

COMPARE [
  entity:technology:target @ AS_OF 2023-12-31,
  entity:technology:target @ AS_OF 2026-06-28
]

ON
  capabilities,
  version_status,
  industry_relationships,
  career_relationships,
  ai_trend_refs

RETURN
  changes,
  added,
  removed,
  superseded,
  evidence_change,
  confidence_change
```

## 40.21 Certification Lineage and Authority

```ukl
UKL 1.0
REQUEST req-cert-lineage-001

TRACE PROVENANCE entity:certification:target
DIRECTION BACKWARD
DEPTH ALL

RETURN
  issuing_authority,
  standards,
  source_records,
  validation,
  jurisdiction,
  effective_period
```

## 40.22 Similar Careers with Transfer Paths

```ukl
UKL 1.0
REQUEST req-adjacent-career-001

SIMILAR Career TO entity:career:target
BY SKILLS, TASKS, KNOWLEDGE_DOMAINS
THRESHOLD 0.68

CONSTRAIN
  publication.state = published
  AND validation.outcome = passed

RETURN
  entity_id,
  canonical_name,
  similarity_score,
  shared_skills,
  missing_skills,
  transfer_path_relationships
```

---

# 41. Canonical Normalization Rules

## 41.1 Keyword Form

Keywords are uppercase.

## 41.2 Clause Order

Canonical clause order:

1. UKL version;
2. request;
3. actor;
4. purpose;
5. intent;
6. context;
7. constraints;
8. operations;
9. return;
10. explain;
11. options;
12. extensions.

## 41.3 Identifier Resolution

Resolved canonical form uses IDs rather than unresolved labels when available.

## 41.4 Literal Normalization

- dates use ISO 8601;
- locale uses BCP 47;
- currency uses ISO 4217;
- confidence uses registered enum;
- percentages use decimal or explicit percentage type consistently.

## 41.5 Boolean Normalization

Associative Boolean expressions may be sorted only when order has no diagnostic significance.

## 41.6 Ordered Expressions

Ranking, traversal, comparison dimensions, and projection order remain ordered.

## 41.7 Default Expansion

Canonical audit form expands:

- context defaults;
- unknown policy;
- cycle policy;
- snapshot;
- validation profile;
- publication policy;
- capability method where material.

---

# 42. Semantic Validation of UKL Requests

## 42.1 Parser Validation

Checks grammar and literals.

## 42.2 Type Validation

Checks operators and operand types.

## 42.3 Ontology Validation

Checks target types, fields, and predicates.

## 42.4 Registry Validation

Checks references, revisions, redirects, and active-pointer selectors.

## 42.5 Context Validation

Checks required and conflicting dimensions.

## 42.6 Policy Validation

Checks actor, purpose, access, and permitted operations.

## 42.7 Capability Validation

Checks engine support.

## 42.8 Constraint Satisfiability

Detects contradictions such as:

```text
publication.state = published
AND publication.state = not_published
```

## 42.9 Complexity Validation

The engine may reject or require approval for expressions exceeding governed:

- path depth;
- candidate volume;
- aggregation scale;
- reasoning complexity;
- cost;
- time.

## 42.10 Validation Result

A UKL request receives:

- valid;
- valid with warnings;
- invalid;
- ambiguous;
- unsupported;
- unauthorized.

---

# 43. Governance

## 43.1 Governance Roles

- UKL Owner;
- Language Architecture Board;
- Ontology Owner;
- UKR Owner;
- UKVF Owner;
- Security and Compliance Reviewer;
- Recommendation Governance Owner;
- Reasoning Governance Owner;
- Extension Owner;
- Conformance Test Owner.

## 43.2 Governed Assets

- grammar;
- AST;
- type system;
- reserved keywords;
- operators;
- profiles;
- extensions;
- canonicalization;
- error codes;
- examples;
- conformance suite.

## 43.3 Change Requirements

A change proposal includes:

- semantic purpose;
- grammar impact;
- AST impact;
- compatibility;
- security impact;
- Ontology impact;
- registry impact;
- validator impact;
- migration;
- tests;
- deprecation.

## 43.4 Extension Approval

Extensions require:

- namespace ownership;
- semantic definition;
- parser and validator support;
- capability declaration;
- security review;
- conformance tests.

## 43.5 No Vendor Capture

A storage or model vendor cannot introduce core UKL semantics through implementation-specific behavior.

---

# 44. Conformance Requirements

## 44.1 Parser Conformance

A conformant parser:

- accepts valid canonical syntax;
- rejects invalid syntax;
- produces the normative AST;
- preserves literals and references;
- identifies error locations.

## 44.2 Semantic Analyzer Conformance

A conformant analyzer:

- resolves types and predicates;
- validates references;
- checks context;
- checks constraints;
- produces deterministic canonical AST.

## 44.3 Execution Engine Conformance

A conformant engine:

- declares capabilities;
- preserves semantic intent;
- enforces access;
- identifies snapshot;
- exposes degradation;
- returns canonical result envelope.

## 44.4 Recommendation Engine Conformance

Must:

- separate eligibility and preference;
- expose score components;
- preserve uncertainty;
- avoid deterministic human labeling;
- use registered evidence and constraints.

## 44.5 Reasoning Engine Conformance

Must:

- label facts, assumptions, and derived conclusions;
- cite paths and evidence;
- expose uncertainty;
- avoid hidden unsupported premises.

## 44.6 Multi-Agent Conformance

Agents must preserve:

- parent request;
- delegated authority;
- context;
- projection limits;
- correlation;
- evidence and result lineage.

## 44.7 Conformance Levels

- Syntax Conformant;
- Semantic Conformant;
- Core Execution Conformant;
- Profile Conformant;
- Full UKL V1 Conformant.

---

# 45. Conformance Test Categories

A UKL implementation must test:

1. valid retrieval;
2. invalid grammar;
3. unknown type;
4. unknown predicate;
5. ambiguous identity;
6. alias resolution;
7. active revision resolution;
8. historical revision;
9. graph traversal;
10. traversal cycle;
11. evidence constraint;
12. validation constraint;
13. confidence constraint;
14. publication constraint;
15. access denial;
16. redacted result;
17. temporal context;
18. geographic context;
19. localization;
20. numerical aggregation;
21. statistical output;
22. comparison;
23. similarity;
24. recommendation;
25. reasoning;
26. forecast;
27. lineage;
28. partial capability;
29. conflicting constraints;
30. unsupported extension.

---

# 46. Success Criteria

UKL is successful when:

1. all KarirGPS knowledge consumers can express intent without database-specific syntax;
2. every authoritative reference resolves through UKR;
3. every type and predicate resolves through the Ontology;
4. evidence, confidence, validation, version, publication, and access constraints are first-class;
5. graph, lexical, vector, analytics, reasoning, and recommendation engines can consume the same AST;
6. ambiguous identity is never silently canonicalized;
7. temporal, geographic, and localization context remain explicit;
8. recommendation and forecast operations preserve uncertainty and explanation;
9. result envelopes expose snapshot, revisions, warnings, and partial status;
10. agent delegation preserves authority and lineage;
11. physical backends can change without changing semantic requests;
12. future entity types can be used without redesigning the core grammar;
13. extensions remain namespaced and governed;
14. conformance can be tested deterministically;
15. the language remains readable by humans and generatable by AI models.

---

# 47. Closing Standard

Universal Knowledge Language Framework V1 is the semantic communication layer of the KarirGPS Knowledge Operating System.

The Ontology defines what concepts and relationships mean.

KOS defines how Knowledge Objects are structured.

UEGF defines how generators behave.

UKPP defines how knowledge moves through production.

UKVF defines how knowledge is validated.

UKR defines how knowledge is canonically identified, versioned, and registered.

UKL defines how every authorized system asks for, navigates, compares, reasons about, recommends, explains, and traces that knowledge.

UKL does not ask a database how to store data.

It asks the knowledge system what the user or agent intends to know.

UKL does not treat a name as an identity.

It resolves the name through UKR.

UKL does not treat a graph path as truth.

It evaluates relationships, evidence, confidence, validation, context, and publication state.

UKL does not treat recommendation as destiny.

It expresses goals, constraints, preferences, gaps, evidence, uncertainty, and alternatives.

UKL does not treat prediction as fact.

It expresses scenarios, horizons, drivers, counterevidence, and confidence.

UKL does not require private chain of thought.

It requires auditable premises, relationship paths, evidence, limitations, and explanation.

The permanent contracts of UKL are:

- semantic intent;
- typed expression;
- explicit context;
- canonical identity;
- Ontology grounding;
- evidence constraints;
- confidence constraints;
- validation awareness;
- registry awareness;
- security awareness;
- explainable output;
- implementation independence.

These contracts allow KarirGPS to evolve across models, APIs, agents, databases, graph technologies, vector systems, recommendation engines, analytics platforms, and future knowledge modalities while preserving one stable language of meaning.
