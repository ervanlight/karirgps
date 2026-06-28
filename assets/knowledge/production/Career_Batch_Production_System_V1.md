# Career Batch Production System V1

**Product:** KarirGPS  
**Document Type:** Enterprise AI Knowledge Mass-Production Standard Operating Procedure  
**Version:** 1.0  
**Status:** Normative Production SOP  
**Governing Constitution:** AI Constitution  
**Governing Ontology:** `assets/knowledge/ontology/Career_Knowledge_Ontology_V1.md`  
**Governing Object Contract:** `assets/knowledge/specification/Knowledge_Object_Specification_V1.md`  
**Governing Generator Specification:** `assets/knowledge/generators/career/Career_Object_Generator_V1.md`  
**Governing Production Prompt:** `assets/knowledge/generators/career/Career_Object_Production_Master_Prompt_V1.md`  
**Target Path:** `assets/knowledge/production/Career_Batch_Production_System_V1.md`

---

## 0. Normative Status, Scope, and Operating Boundary

### 0.1 Purpose

Career Batch Production System V1, hereafter **CBPS**, is the official Standard Operating Procedure used by AI agents and authorized human operators to produce Career Objects in controlled batches.

CBPS defines the executable operating discipline for:

- preparing a batch;
- resolving item readiness;
- loading evidence;
- allocating work;
- invoking the approved production prompt;
- validating outputs;
- retrying recoverable failures;
- quarantining unsafe outputs;
- coordinating human review;
- accepting or rejecting each item;
- tracking progress;
- closing and archiving the batch.

### 0.2 What CBPS Is

CBPS is:

- a mass-production SOP;
- an execution contract;
- a batch state-management standard;
- a recovery and audit procedure;
- a folder and artifact convention;
- a quality-gated production method.

### 0.3 What CBPS Is Not

CBPS is not:

- an Ontology;
- a Knowledge Object Specification;
- a Career Object Generator definition;
- a production prompt;
- a database design;
- an API design;
- an orchestration architecture;
- a model implementation;
- a source-collection methodology;
- a publication bypass.

### 0.4 Production Boundary

CBPS produces and manages Career Object revisions through:

1. batch initialization;
2. generation;
3. validation;
4. human review;
5. acceptance or rejection;
6. controlled handoff to the authoritative Knowledge Production Pipeline.

CBPS does not independently grant:

- Active status;
- Published status;
- Graph Ready approval;
- Vector Ready approval;
- Reasoning Ready approval;
- final ontology authority.

An item may be marked `accepted_for_pipeline_handoff` only after the conditions in this SOP are satisfied.

### 0.5 Normative Terms

- **MUST** indicates a mandatory requirement.
- **MUST NOT** indicates a prohibited condition.
- **SHOULD** indicates a requirement that may be waived only with documented justification.
- **MAY** indicates an allowed option.
- **CONDITIONAL** indicates a requirement that becomes mandatory when the stated condition applies.

### 0.6 Authority Precedence

When instructions conflict, apply this order:

1. AI Constitution;
2. Career Knowledge Ontology V1;
3. Knowledge Object Specification V1;
4. Career Object Generator V1;
5. Career Object Production Master Prompt V1;
6. Knowledge Production Pipeline V1;
7. CBPS;
8. batch-specific instructions.

### 0.7 Operating Invariants

Every CBPS execution MUST preserve the following invariants:

1. One manifest item represents one intended Career Object production target.
2. One work item has one active production owner at a time.
3. Every attempt is immutable and separately identifiable.
4. An accepted artifact is never overwritten.
5. Failed items do not block unrelated items unless a shared contract defect exists.
6. Identical work is not executed twice without a recorded reason.
7. No item is generated before identity, scope, and evidence readiness pass.
8. No generated item is accepted before required validation and review.
9. No retry repeats the same deterministic failure with unchanged conditions.
10. No batch closes with unaccounted manifest items.
11. Every terminal item has a disposition and audit trail.
12. Every artifact references its governing specification versions.
13. Cross-item evidence leakage is prohibited.
14. Shared evidence is reused by reference, not copied without lineage.
15. Parallel production must not create multiple canonical outputs for the same item.
16. Quality gates are non-compensatory.
17. Throughput targets cannot override evidence, Ontology, KOS, or constitutional blockers.
18. A batch can be resumed from durable checkpoints.
19. A model or prompt version change creates a new execution lane or batch revision.
20. Batch completion does not imply publication.

### 0.8 System Impact

CBPS allows KarirGPS to scale from small controlled runs to production programs containing up to 100,000 Career Objects while preserving determinism, resumability, fault isolation, and auditability.

---

# 1. Purpose

## 1.1 Operational Purpose

CBPS converts a governed inventory of Career production targets into accepted Career Object Draft packages through a repeatable and controlled process.

## 1.2 Production Objectives

The SOP ensures:

- consistent execution across models and agents;
- deterministic item assignment;
- immutable attempt lineage;
- resumable processing;
- evidence isolation;
- repeatable validation;
- bounded retries;
- explicit failure recovery;
- item-level human accountability;
- complete batch reconciliation.

## 1.3 Primary Production Outputs

A batch may produce:

- accepted Career Draft packages;
- rejected item records;
- quarantined item records;
- blocked item records;
- evidence remediation requests;
- identity resolution requests;
- ontology escalation requests;
- batch completion report;
- pipeline handoff manifest.

## 1.4 Constraints

The SOP MUST NOT be used to generate Career knowledge without the approved Master Prompt and required input packages.

The SOP MUST NOT create or infer profession data itself.

## 1.5 Rationale

A single-object generator does not address large-scale concerns such as concurrency, duplicate processing, checkpoints, partial failure, progress reconciliation, review capacity, or batch version control.

## 1.6 System Impact

CBPS transforms single-object generation controls into a reliable production operation suitable for enterprise-scale knowledge creation.

---

# 2. Production Philosophy

## 2.1 Item Independence

Each Career work item is independently processable, retryable, reviewable, and terminal.

A defect in one item MUST NOT invalidate unrelated outputs.

## 2.2 Batch-Level Consistency

Items remain independent operationally but share a locked contract set:

- Ontology version;
- KOS version;
- Generator version;
- Master Prompt version;
- quality method version;
- generation policy version;
- approved model lane.

## 2.3 Determinism Envelope

CBPS defines determinism as semantic and procedural equivalence under a fixed envelope.

The determinism envelope consists of:

- work item identity;
- scope revision;
- evidence bundle revision;
- existing knowledge snapshot;
- contract versions;
- model identity and version;
- production prompt version;
- generation policy;
- locale;
- execution lane.

Identical envelopes SHOULD produce semantically equivalent results.

Textual wording may vary, but the following MUST remain stable:

- item disposition;
- Career identity;
- mandatory sections;
- claim classes;
- relationship predicates;
- evidence references;
- absence states;
- confidence scope;
- validation outcome.

## 2.4 Fail Closed, Continue Safely

An individual item with a blocker MUST stop.

The batch SHOULD continue processing unaffected items.

A shared blocker MUST pause the affected batch or lane.

## 2.5 Resume, Do Not Restart

Recovery MUST resume from the last valid checkpoint.

Accepted, rejected, and non-impacted validated items MUST NOT be regenerated during ordinary recovery.

## 2.6 Evidence Isolation

Each work item receives an explicit Evidence Bundle.

The model MUST NOT infer evidence from neighboring work items, prior batch outputs, or shared conversational context.

## 2.7 Immutable Attempts

Each generation attempt is preserved.

A retry creates a new attempt and MUST NOT modify the previous attempt.

## 2.8 Human Review as a Production State

Human review is not an informal final check.

It is a governed state with:

- assigned reviewer;
- review scope;
- decision;
- findings;
- remediation;
- timestamp;
- accountability.

## 2.9 Quality Before Coverage

A batch may complete with rejected or blocked items.

It MUST NOT lower quality rules to achieve 100 percent acceptance.

## 2.10 Progressive Scale

Large production programs MUST be executed in waves.

A new model, prompt revision, locale, or policy MUST pass a canary batch before large-scale execution.

## 2.11 Canonical and Derived Separation

The generated Career Object is canonical within the batch artifact set.

Validation summaries, review views, indexes, reports, and metrics are derived artifacts.

## 2.12 Explicit Terminal States

Every work item must end in one terminal state.

No item may disappear from the batch because it failed.

## 2.13 Production Philosophy Impact

These principles prevent mass production from becoming uncontrolled content generation.

---

# 3. Batch Production Lifecycle

## 3.1 Production Hierarchy

CBPS uses the following hierarchy:

1. **Production Program**  
   A long-term initiative containing one or more releases.

2. **Production Release**  
   A contract-locked production period or content release.

3. **Batch**  
   A bounded collection of Career work items with one execution policy.

4. **Shard**  
   A deterministic subset of a batch assigned for parallel processing.

5. **Work Item**  
   One Career Object production target.

6. **Attempt**  
   One immutable generation or remediation execution for one work item.

7. **Artifact**  
   An input, output, log, validation record, review record, or report.

## 3.2 Batch States

### `planned`

The batch definition exists but has not been initialized.

### `initialized`

Folders, manifest, version locks, and control records exist.

### `preflight`

Input, identity, evidence, contract, and resource checks are running.

### `ready`

All batch-level preconditions pass, and at least one item is eligible to run.

### `running`

One or more shards or work items are executing.

### `paused`

Execution has been intentionally stopped.

A pause record and resume condition are mandatory.

### `degraded`

Execution continues with reduced capacity or isolated failed lanes.

### `reviewing`

Generation is substantially complete, and review queues are active.

### `reconciling`

Item states, artifacts, counts, and handoff records are being reconciled.

### `completed`

All manifest items reached terminal states, and all target items were accepted.

### `completed_with_exceptions`

All manifest items reached terminal states, but one or more items were rejected, blocked, quarantined, or deferred.

### `failed`

A batch-level blocker prevents safe completion.

### `cancelled`

The batch was intentionally terminated.

### `archived`

The closed batch has been packaged under retention controls.

## 3.3 Work Item States

### Intake States

- `registered`
- `identity_pending`
- `scope_pending`
- `evidence_pending`
- `preflight_ready`

### Execution States

- `queued`
- `claimed`
- `evidence_loaded`
- `generating`
- `generated`
- `validating`
- `validation_failed`
- `retry_pending`
- `review_queued`
- `under_review`
- `changes_requested`
- `remediation_pending`

### Terminal States

- `accepted_for_pipeline_handoff`
- `rejected`
- `blocked`
- `quarantined`
- `deferred`
- `cancelled`
- `superseded_in_batch`

## 3.4 Attempt States

- `created`
- `running`
- `output_written`
- `validated`
- `failed`
- `abandoned`
- `superseded`

## 3.5 Allowed State Transitions

A work item MUST follow an allowed state path.

Typical successful path:

`registered → preflight_ready → queued → claimed → evidence_loaded → generating → generated → validating → review_queued → under_review → accepted_for_pipeline_handoff`

Typical remediated path:

`validating → validation_failed → retry_pending → queued → ...`

Typical review revision path:

`under_review → changes_requested → remediation_pending → queued → ...`

Typical terminal failure path:

`identity_pending → blocked`

or:

`validating → quarantined`

## 3.6 State Transition Requirements

Every transition MUST record:

- item ID;
- previous state;
- new state;
- actor;
- timestamp;
- reason;
- attempt ID if applicable;
- artifact references;
- next required action.

## 3.7 Constraints

A terminal item MUST NOT return to an active state inside the same batch revision.

If reprocessing is required, create:

- a new work item revision;
- a delta batch;
- or a formally authorized batch revision.

## 3.8 Rationale

Separate state machines make batch recovery and item accountability deterministic.

## 3.9 System Impact

The system can safely pause, resume, and reconcile very large production runs.

---

# 4. Production Stages

## 4.1 Stage 0: Production Authorization

### Actions

1. Confirm production program and release.
2. Confirm target Career inventory is authorized.
3. Confirm governing specifications.
4. Confirm model lane and human review policy.
5. Assign batch owner.

### Exit Criteria

- authorization record exists;
- no policy blocker;
- accountable owner exists.

### Failure Result

Batch remains `planned`.

---

## 4.2 Stage 1: Batch Initialization

### Actions

1. Assign Batch ID.
2. Create batch folder structure.
3. Write batch manifest.
4. Lock contract versions.
5. Write execution policy.
6. Write review policy.
7. Create empty state ledger.
8. Create checkpoint zero.
9. Record expected item count.

### Exit Criteria

- all required control artifacts exist;
- manifest is internally consistent;
- folder paths resolve;
- expected counts reconcile.

### Failure Result

Batch state `failed` or returned to `planned`.

---

## 4.3 Stage 2: Inventory and Identity Preflight

### Actions

For every proposed target:

1. assign Work Item ID;
2. resolve or confirm Entity ID;
3. check duplicates in:
   - current batch;
   - prior batches;
   - existing Career registry;
4. classify:
   - new entity;
   - revision;
   - reuse;
   - duplicate;
   - unresolved identity;
5. confirm target is Career, not Role or Job Title;
6. assign item state.

### Exit Criteria

Each item has an identity disposition.

### Failure Handling

Unresolved identity items become `blocked` or `identity_pending`.

They MUST NOT enter generation.

---

## 4.4 Stage 3: Scope and Readiness Preflight

### Actions

For each non-duplicate item:

1. verify Scope Resolution Record;
2. verify Career boundary;
3. verify locale and geography;
4. verify stable versus contextual separation;
5. verify target readiness profile;
6. verify risk class;
7. verify required relationship classes.

### Exit Criteria

Items that pass become eligible for evidence loading.

---

## 4.5 Stage 4: Evidence Readiness

### Actions

1. locate the item's Normalized Evidence Bundle;
2. verify evidence revision;
3. verify source references;
4. verify usage rights;
5. verify core evidence categories;
6. verify conflict record;
7. verify freshness;
8. lock the evidence bundle for the attempt.

### Exit Criteria

Item state becomes `preflight_ready`.

### Failure Handling

Items with insufficient evidence become:

- `evidence_pending`;
- `blocked`;
- or `deferred`.

---

## 4.6 Stage 5: Batch Deduplication and Reuse Decision

### Actions

1. compare item identities;
2. identify exact duplicates;
3. identify revision candidates;
4. identify localized variants;
5. identify contextual assertions incorrectly requested as Career Objects;
6. remove redundant generation work through explicit disposition.

### Exit Criteria

Every manifest item has one production disposition.

### Constraint

Removing an item from generation does not remove it from the manifest.

It becomes `superseded_in_batch`, `reused_existing_object`, or another recorded disposition.

---

## 4.7 Stage 6: Shard Planning

### Actions

1. sort eligible items by deterministic order;
2. classify by:
   - risk;
   - locale;
   - evidence size;
   - regulated status;
   - revision or new entity;
3. create shards;
4. assign expected item counts;
5. assign execution lane;
6. write shard manifests.

### Exit Criteria

Each eligible item belongs to exactly one shard.

### Constraint

An item MUST NOT appear in multiple active shards.

---

## 4.8 Stage 7: Generation Preflight

### Actions

For each shard:

1. verify Master Prompt version;
2. verify model qualification;
3. verify model version;
4. verify contract lock;
5. verify input package completeness;
6. verify output path;
7. verify no item is already terminal;
8. verify single-writer assignment;
9. write shard checkpoint.

### Exit Criteria

Shard state becomes ready for generation.

---

## 4.9 Stage 8: Career Object Generation

### Actions Per Work Item

1. claim item;
2. create Attempt ID;
3. record attempt start;
4. load exact input package;
5. load locked evidence bundle;
6. load approved existing references;
7. invoke Career Object Production Master Prompt V1;
8. capture exactly one success or typed failure outcome;
9. write output to attempt folder;
10. record completion state;
11. release item claim.

### Exit Criteria

The attempt is immutable and has a complete artifact set.

### Constraint

The AI agent MUST NOT modify another item's files or use another item's evidence.

---

## 4.10 Stage 9: Automated Validation

### Validation Order

1. artifact presence validation;
2. output type validation;
3. Master Prompt conformance;
4. KOS structural validation;
5. identity validation;
6. Ontology validation;
7. relationship validation;
8. evidence validation;
9. source reference validation;
10. temporal and geographic validation;
11. localization validation;
12. constitutional validation;
13. lifecycle validation;
14. self-consistency validation;
15. cross-object duplicate validation.

### Exit Criteria

Outcome is one of:

- validation pass;
- pass with warnings;
- retryable failure;
- non-retryable failure;
- quarantine required.

---

## 4.11 Stage 10: Automated Remediation Decision

### Actions

1. classify failure;
2. determine whether input, evidence, prompt, model, or output caused it;
3. determine retry eligibility;
4. assign remediation owner;
5. set next state.

### Constraint

The validator MUST NOT silently rewrite the Career Object.

---

## 4.12 Stage 11: Human Review Queue Preparation

### Actions

1. group accepted validation outputs by review specialization;
2. attach review package;
3. prioritize by risk and blocker history;
4. assign reviewer;
5. set review due state;
6. prevent duplicate reviewer ownership.

### Review Package

Must include:

- Career Draft;
- pre-validation report;
- formal validation reports;
- evidence map;
- source list;
- identity and scope records;
- attempt lineage;
- prior revision if applicable;
- warnings and unresolved questions.

---

## 4.13 Stage 12: Human Review and Remediation

### Actions

Reviewer returns exactly one:

- approve for handoff;
- approve with recorded limitations;
- request changes;
- reject;
- escalate;
- quarantine.

Changes requested create a remediation attempt.

The reviewer does not overwrite the original attempt.

---

## 4.14 Stage 13: Acceptance Packaging

### Actions

For approved items:

1. confirm all mandatory review findings resolved;
2. verify accepted revision;
3. create acceptance record;
4. copy or reference the accepted artifact into the accepted folder;
5. write dependency references;
6. write handoff metadata;
7. mark item terminal.

### Exit Criteria

Item state becomes `accepted_for_pipeline_handoff`.

---

## 4.15 Stage 14: Batch Reconciliation

### Actions

1. count all manifest items;
2. count all terminal dispositions;
3. detect missing items;
4. detect duplicate outputs;
5. detect orphan attempts;
6. detect unreferenced accepted files;
7. verify logs and review records;
8. verify accepted artifact revisions;
9. reconcile shard counts;
10. create batch disposition table.

### Exit Criteria

Expected item count equals terminal item count.

---

## 4.16 Stage 15: Batch Closure and Handoff

### Actions

1. create final batch report;
2. create pipeline handoff manifest;
3. freeze batch artifacts;
4. create final checkpoint;
5. set batch completion state;
6. archive according to retention policy.

### Completion State

- `completed` if all target items were accepted;
- `completed_with_exceptions` if all items are terminal but exceptions exist;
- `failed` if reconciliation or shared contract integrity cannot be established.

---

# 5. AI Responsibilities

## 5.1 Batch Coordinator Agent

Responsible for:

- batch state;
- shard planning;
- state transitions;
- progress reconciliation;
- pause and resume;
- failure routing;
- final closure.

Must not generate domain content.

## 5.2 Work Item Preparation Agent

Responsible for:

- input package verification;
- identity and scope references;
- evidence bundle presence;
- path preparation.

Must not resolve unresolved Ontology disputes.

## 5.3 Career Generation Agent

Responsible for:

- executing the approved Master Prompt;
- producing one Draft or typed failure;
- writing Generation Record;
- preserving evidence boundaries.

Must not self-approve.

## 5.4 Validation Agent

Responsible for:

- running required validation layers;
- producing immutable findings;
- classifying failure;
- recommending retry or quarantine.

Must not rewrite output silently.

## 5.5 Consistency Agent

Responsible for:

- duplicate detection;
- cross-object naming consistency;
- Career-versus-Role drift;
- relationship pattern anomalies;
- section and field uniformity.

Must not merge identities without Steward authority.

## 5.6 Review Preparation Agent

Responsible for:

- assembling review packages;
- ranking review urgency;
- checking package completeness.

Must not make the human review decision.

## 5.7 Recovery Agent

Responsible for:

- detecting abandoned claims;
- finding incomplete attempts;
- restoring from checkpoints;
- reconciling logs and artifacts;
- preventing duplicate reruns.

## 5.8 Reporting Agent

Responsible for:

- batch metrics;
- terminal disposition report;
- exception report;
- handoff manifest;
- audit summary.

Must not alter item state without Batch Coordinator authority.

## 5.9 AI Separation of Duties

One AI execution may perform multiple low-risk operational roles only when:

- all actions remain logged;
- generation and validation outputs remain separate;
- no self-approval occurs;
- the batch policy permits it.

Generation and final human acceptance MUST remain separate.

---

# 6. Input Packages

## 6.1 Batch Control Package

Required contents:

- Production Program ID;
- Production Release ID;
- Batch ID;
- batch title;
- batch purpose;
- authorized scope;
- expected item count;
- contract lock;
- execution policy;
- model lane;
- review policy;
- quality policy;
- retry policy;
- folder root;
- owner;
- retention class.

## 6.2 Batch Manifest

Each manifest row or entry MUST contain:

- sequence number;
- Work Item ID;
- target Entity ID or provisional token;
- canonical name proposal;
- production mode;
- locale;
- geography;
- risk class;
- target readiness;
- identity record reference;
- scope record reference;
- evidence bundle reference;
- existing knowledge snapshot reference;
- prior revision reference;
- current item state;
- assigned shard;
- disposition;
- terminal reason if applicable.

## 6.3 Contract Lock Package

Must declare exact versions of:

- AI Constitution;
- Ontology;
- KOS;
- Generator Specification;
- Master Prompt;
- Pipeline;
- CBPS;
- relationship vocabulary;
- quality method;
- approved model;
- model configuration class;
- localization policy.

## 6.4 Work Item Package

Each item package MUST contain:

1. Generation Request;
2. Identity Resolution Record;
3. Scope Resolution Record;
4. Normalized Evidence Bundle reference;
5. Existing Knowledge References;
6. Generation Policy;
7. conditional regulated input;
8. conditional localization input;
9. conditional prior revision input;
10. expected output path;
11. item control metadata.

## 6.5 Review Policy Package

Must declare:

- required reviewer role;
- number of reviewers;
- independent review requirement;
- risk-based review depth;
- escalation owner;
- conflict-of-interest rule;
- acceptance authority;
- maximum remediation cycles;
- review sampling policy, if any.

## 6.6 Execution Policy Package

Must declare:

- shard size policy;
- concurrency limit;
- attempt limit;
- retry classes;
- pause conditions;
- model lane;
- backpressure rules;
- checkpoint cadence;
- log retention;
- exception policy.

## 6.7 Package Immutability

An input package used by an attempt MUST be immutable for that attempt.

Any material change creates:

- a new package revision;
- a new Attempt ID;
- a recorded reason.

## 6.8 Package Validation

No work item may be queued until all mandatory packages resolve.

---

# 7. Evidence Loading

## 7.1 Evidence Loading Objective

Load the exact evidence approved for one work item without cross-item contamination.

## 7.2 Evidence Loading Procedure

For each item:

1. resolve Evidence Bundle reference;
2. verify bundle revision;
3. verify bundle integrity reference;
4. verify all source IDs;
5. verify source access and usage restriction;
6. verify core evidence categories;
7. verify geography and time;
8. verify conflict groups;
9. verify prior normalization record;
10. attach bundle to Attempt ID;
11. record evidence load completion.

## 7.3 Evidence Bundle Lock

An Attempt uses one locked Evidence Bundle revision.

A newer bundle does not alter an in-progress attempt.

If new evidence is material:

- stop or finish the current attempt according to policy;
- create a new attempt with the new bundle revision;
- preserve both attempt records.

## 7.4 Shared Evidence

Shared evidence MAY be referenced across items when it genuinely applies.

Shared evidence MUST:

- retain one Source Object identity;
- retain claim-specific scope;
- not be copied as unsupported universal evidence;
- preserve item-specific evidence mapping.

## 7.5 Evidence Locality

Agents MUST receive only:

- the current item's evidence;
- approved shared references;
- required contract material.

Batch-wide evidence dumps are prohibited unless the evidence is explicitly shared and scoped.

## 7.6 Evidence Freshness

Before generation, the system MUST evaluate:

- source age;
- volatility class;
- review due date;
- supersession;
- jurisdictional validity.

A stale core bundle blocks generation if freshness is material.

## 7.7 Evidence Conflict

Conflict does not automatically block generation.

Generation may proceed only if:

- conflict is represented;
- identity remains stable;
- the Master Prompt can preserve uncertainty;
- review policy permits it.

## 7.8 Evidence Load Failures

Possible outcomes:

- `evidence_loaded`;
- `evidence_pending`;
- `insufficient_evidence`;
- `source_integrity_failure`;
- `rights_restriction`;
- `stale_evidence`;
- `conflicted_evidence`.

## 7.9 Audit Requirements

Record:

- bundle revision;
- loaded source count;
- missing sources;
- restricted sources;
- stale sources;
- conflict groups;
- loader identity;
- load timestamp.

---

# 8. Generation Workflow

## 8.1 Claiming a Work Item

An agent may generate only an item in `queued` state.

Claiming MUST record:

- Work Item ID;
- agent identity;
- model version;
- claim timestamp;
- claim expiry or release condition;
- Attempt ID.

## 8.2 Pre-execution Recheck

Immediately before invocation, verify:

- item is not terminal;
- no other active owner exists;
- contract lock matches batch;
- evidence bundle matches attempt;
- output path is empty for this Attempt ID;
- Master Prompt version matches batch;
- model lane is approved.

## 8.3 Prompt Execution

The generation agent MUST use the exact approved Career Object Production Master Prompt.

Batch instructions may populate placeholders but MUST NOT remove:

- precondition gates;
- evidence rules;
- failure rules;
- fixed output structure;
- validation checklist;
- Draft-only restriction.

## 8.4 Output Capture

The execution must return exactly:

- `draft_career_object`;
- or a typed failure result.

Additional conversational text is non-conforming.

## 8.5 Artifact Write Order

The agent or production controller writes:

1. attempt metadata;
2. input reference manifest;
3. raw model output;
4. normalized production output, if the raw output is structurally usable;
5. generation log;
6. output integrity reference;
7. attempt completion record.

## 8.6 Output Immutability

After attempt completion, output files are read-only from the SOP perspective.

Corrections require a new attempt.

## 8.7 Generation Completion

Generation completion means the output was captured.

It does not mean the output passed validation.

## 8.8 Abandoned Attempts

An attempt is `abandoned` if:

- the agent terminates before valid output capture;
- output is incomplete;
- ownership expires;
- infrastructure fails before artifact integrity is established.

The item becomes retry-eligible according to failure policy.

## 8.9 Duplicate Output Protection

Before accepting output:

- compare Attempt ID;
- compare Work Item ID;
- compare object ID and revision ID;
- verify no prior accepted attempt exists for the same item revision.

If a prior accepted attempt exists, new output becomes `superseded` or is quarantined.

---

# 9. Validation Workflow

## 9.1 Validation Principle

Validation is a sequence of independent checks.

A later pass cannot override an earlier blocker.

## 9.2 Validation Layer 1: Artifact Integrity

Checks:

- expected files exist;
- files are readable;
- item and attempt IDs match;
- output is complete;
- integrity reference exists;
- no unexpected file mutation occurred.

## 9.3 Validation Layer 2: Outcome Type

Checks:

- success or typed failure is explicit;
- success and failure are not mixed;
- success output has Draft status;
- failure output follows allowed failure types.

## 9.4 Validation Layer 3: Master Prompt Conformance

Checks:

- exact 18-section structure;
- required field labels;
- pre-validation report;
- no commentary outside object;
- no prohibited status.

## 9.5 Validation Layer 4: KOS Compliance

Checks:

- universal fields;
- Career-specific fields;
- lifecycle semantics;
- revision semantics;
- absence state semantics;
- governance fields;
- quality fields;
- audit fields.

## 9.6 Validation Layer 5: Identity

Checks:

- one Career identity;
- duplicate state;
- Career-versus-Role separation;
- Career-versus-Job Title separation;
- Career-versus-Major separation;
- scope consistency.

## 9.7 Validation Layer 6: Ontology

Checks:

- entity class;
- taxonomy path;
- predicates;
- target entity types;
- relationship direction;
- approved relationship levels;
- no unofficial extension.

## 9.8 Validation Layer 7: Evidence

Checks:

- claim-to-evidence mapping;
- source existence;
- source scope;
- conflict preservation;
- source independence;
- no fabricated references;
- usage rights;
- evidence confidence.

## 9.9 Validation Layer 8: Temporal and Geographic Context

Checks:

- salary externalization;
- labor market externalization;
- regulation scope;
- AI Trend scope;
- local pathway scope;
- Work Environment variability.

## 9.10 Validation Layer 9: Constitutional Compliance

Checks:

- no personal fit;
- no deterministic trait mapping;
- no protected-group stereotype;
- no guaranteed outcome;
- no hidden promotion;
- no personal data;
- no false certainty.

## 9.11 Validation Layer 10: Self-consistency

Checks:

- definition and scope;
- task and Competency;
- pathway and requirements;
- relationship strength and confidence;
- object confidence and blockers;
- stable and contextual separation;
- lifecycle and readiness.

## 9.12 Validation Layer 11: Cross-object Consistency

Checks:

- duplicate canonical names;
- alias collision;
- duplicate Entity IDs;
- inconsistent Career Family mapping;
- inconsistent predicate use;
- Role or Job Title duplicated as Career;
- inconsistent localization;
- repeated source hallucination pattern;
- copied evidence mappings across unrelated items.

## 9.13 Validation Outcomes

- `pass`;
- `pass_with_warnings`;
- `retryable_failure`;
- `non_retryable_failure`;
- `quarantine`;
- `human_adjudication_required`.

## 9.14 Validation Record

Every validation layer records:

- validator identity;
- version;
- input Attempt ID;
- timestamp;
- result;
- findings;
- severity;
- remediation;
- affected paths.

## 9.15 Validator Independence

For high-risk batches, at least one validation pass SHOULD use an independent model or deterministic rule system distinct from the generator lane.

---

# 10. Retry Strategy

## 10.1 Retry Principle

A retry is permitted only when the failure is recoverable and a meaningful condition changes.

## 10.2 Retry Classes

### Class A: Transient Execution Failure

Examples:

- interrupted execution;
- temporary model unavailability;
- incomplete file write;
- temporary evidence access failure.

Action:

- retry with the same inputs and version lock;
- create a new Attempt ID.

### Class B: Formatting or Contract Failure

Examples:

- missing section;
- invalid field label;
- mixed success and failure output.

Action:

- retry only after prompt execution repair or model-lane remediation;
- use unchanged evidence if content was not the cause.

### Class C: Evidence Mapping Failure

Examples:

- missing source reference;
- overbroad claim;
- conflict omitted.

Action:

- repair input package, Evidence Bundle, or generation policy;
- create new package revision;
- retry.

### Class D: Identity or Ontology Failure

Examples:

- Career-versus-Role ambiguity;
- duplicate entity;
- invalid predicate.

Action:

- no blind retry;
- return to Identity or Ontology Resolution;
- retry only after authoritative resolution.

### Class E: Human Changes Requested

Action:

- create remediation instruction referencing exact review findings;
- create new attempt;
- preserve prior attempt.

### Class F: Non-retryable Failure

Examples:

- rights restriction;
- invalid production purpose;
- unsupported contract version;
- deliberate source fabrication;
- irreconcilable identity conflict without authority decision.

Action:

- block, reject, or quarantine.

## 10.3 Retry Attempt Limit

The batch policy MUST define maximum attempts.

Default operating principle:

- transient failure: limited automatic retries;
- format failure: one controlled regeneration after root-cause correction;
- evidence or identity failure: no retry until input revision;
- human remediation: limited cycles defined by review policy.

No item may enter an infinite retry loop.

## 10.4 Same-condition Retry Prohibition

The system MUST NOT repeat a deterministic failed attempt with identical:

- model;
- prompt;
- inputs;
- evidence;
- policy;
- expected output.

A retry must document what changed.

## 10.5 Retry Ladder

Use this order when applicable:

1. recover incomplete execution;
2. retry same approved model after transient recovery;
3. retry with repaired package;
4. use an approved fallback model lane;
5. request human remediation;
6. quarantine or block.

## 10.6 Retry Record

Every retry MUST record:

- parent Attempt ID;
- failure class;
- changed condition;
- retry authorizer;
- new Attempt ID;
- expected correction;
- final outcome.

## 10.7 Model Fallback

A fallback model may be used only if:

- qualified for the same contract;
- recorded in batch policy or approved exception;
- output is validated under the same gates;
- model change is recorded in determinism metadata.

---

# 11. Failure Recovery

## 11.1 Recovery Objective

Restore safe execution without regenerating completed work or losing audit lineage.

## 11.2 Worker or Agent Failure

Procedure:

1. detect missing heartbeat or incomplete attempt;
2. mark attempt `abandoned`;
3. verify whether a valid output artifact exists;
4. if valid, continue to validation;
5. if invalid, create retry decision;
6. release item ownership;
7. record recovery event.

## 11.3 Batch Coordinator Failure

Procedure:

1. pause new claims;
2. load latest batch checkpoint;
3. reconcile state ledger with artifacts;
4. identify active item claims;
5. expire or confirm claims;
6. restore coordinator ownership;
7. resume only after reconciliation.

## 11.4 Partial File Write

Procedure:

1. mark artifact corrupt;
2. preserve corrupt file for audit;
3. invalidate attempt output;
4. create new Attempt ID;
5. do not overwrite corrupt artifact.

## 11.5 Lost or Missing Log

Procedure:

1. compare item state, attempt folder, and checkpoint;
2. reconstruct only from signed or integrity-checked artifacts;
3. if state cannot be proven, quarantine the attempt;
4. do not infer success from file presence alone.

## 11.6 Duplicate Processing

Procedure:

1. identify all active attempts;
2. determine earliest valid claim;
3. stop later duplicate execution where possible;
4. validate outputs independently;
5. retain one accepted candidate according to policy;
6. mark others `superseded` or quarantine;
7. record duplicate-processing incident.

## 11.7 Corrupted Batch Manifest

Procedure:

1. stop state transitions;
2. restore last valid manifest revision;
3. reconcile against state ledger and item folders;
4. create manifest recovery revision;
5. require Batch Owner approval before resume.

## 11.8 Evidence Bundle Withdrawal

Procedure:

1. identify affected items and attempts;
2. pause unvalidated outputs;
3. invalidate source-dependent findings as necessary;
4. create new Evidence Bundle revision;
5. rerun affected validation or generation;
6. preserve prior outputs as historical attempts.

## 11.9 Contract Version Defect

If a shared Master Prompt, KOS, Ontology, or validation defect is discovered:

1. pause the affected execution lane;
2. identify all outputs created under the defect;
3. mark affected items for contract review;
4. create a new batch revision or corrective delta batch;
5. do not silently patch accepted artifacts.

## 11.10 Model Drift

Signals:

- rising format failure;
- relationship drift;
- fabricated references;
- reduced self-consistency;
- increased reviewer rejection.

Procedure:

1. pause model lane;
2. run qualification suite;
3. compare against baseline;
4. switch to approved fallback or hold batch;
5. review affected recent attempts.

## 11.11 Review Backlog Failure

Procedure:

1. apply backpressure to new generation;
2. prioritize high-risk and oldest items;
3. reallocate qualified reviewers;
4. pause low-priority shards if review capacity is exceeded;
5. do not auto-accept due to backlog.

## 11.12 Recovery Completion

Recovery is complete only when:

- state ledger and artifacts reconcile;
- duplicate active ownership is absent;
- invalid attempts are classified;
- resume checkpoint is written;
- Batch Coordinator approves continuation.

---

# 12. Versioning Strategy

## 12.1 Versioned Production Dimensions

CBPS MUST version:

- Batch Manifest;
- Work Item Package;
- Evidence Bundle;
- Identity Resolution Record;
- Scope Resolution Record;
- Contract Lock;
- Master Prompt;
- model lane;
- generation policy;
- validation policy;
- review policy;
- output attempt;
- accepted item package;
- final batch report.

## 12.2 Batch Revision

A Batch Revision changes when:

- item inventory changes materially;
- contract lock changes;
- approved model lane changes for remaining items;
- execution policy changes materially;
- review policy changes materially.

## 12.3 Work Item Revision

A Work Item Revision changes when:

- identity resolution changes;
- scope changes;
- evidence bundle changes materially;
- prior revision target changes;
- locale changes;
- generation policy changes.

## 12.4 Attempt Versioning

Attempts are sequential and immutable.

Pattern concept:

- Attempt 001;
- Attempt 002;
- Attempt 003.

Attempt count is not the Career Object version.

## 12.5 Career Object Version

Career Object version follows KOS.

It MUST NOT be derived from batch attempt number.

## 12.6 Contract Lock Policy

A running shard MUST NOT change its contract lock.

When a new contract is required:

- close or pause the shard;
- create a new shard revision or batch revision;
- record migration disposition.

## 12.7 Mixed-version Batch Policy

A single batch SHOULD use one contract lock.

Mixed contract versions are allowed only through explicit lanes with:

- separate shard manifests;
- separate reports;
- no unlabelled output mixing;
- cross-version compatibility review.

## 12.8 Rollback

Rollback means selecting a prior accepted artifact or prior batch control revision.

Rollback MUST:

- preserve newer failed artifacts;
- state reason;
- identify affected items;
- create a rollback record;
- avoid in-place overwrite.

## 12.9 Version Fingerprint

Each attempt MUST record a production fingerprint composed conceptually of:

- Batch Revision;
- Work Item Revision;
- Evidence Bundle Revision;
- Ontology Version;
- KOS Version;
- Generator Version;
- Master Prompt Version;
- model version;
- generation policy version;
- locale.

---

# 13. Progress Tracking

## 13.1 Tracking Objective

Provide item-level and batch-level state without relying on conversational memory.

## 13.2 Authoritative Progress Sources

Progress is derived from:

1. Batch Manifest;
2. State Transition Ledger;
3. Work Item control records;
4. Attempt records;
5. checkpoints;
6. validation and review records;
7. terminal disposition records.

Dashboard summaries are derived and not authoritative.

## 13.3 Batch Counters

Track:

- total manifest items;
- duplicate or reused items;
- preflight-ready items;
- queued items;
- active items;
- generated items;
- validation pass;
- validation fail;
- retry pending;
- review queued;
- under review;
- accepted;
- rejected;
- blocked;
- quarantined;
- deferred;
- unaccounted.

## 13.4 Shard Counters

Each shard tracks:

- expected items;
- claimed items;
- completed attempts;
- accepted items;
- failed items;
- outstanding items;
- checkpoint time;
- execution lane.

## 13.5 Work Item Progress Record

Must contain:

- Work Item ID;
- current state;
- current attempt;
- current owner;
- last transition;
- next action;
- blocker;
- retry count;
- review state;
- terminal disposition.

## 13.6 Checkpoint Policy

A checkpoint MUST be created:

- after batch initialization;
- after preflight;
- after shard creation;
- at configured item or time intervals;
- before pause;
- after recovery;
- before reconciliation;
- at batch closure.

## 13.7 Progress Reconciliation

At every checkpoint:

- manifest count;
- state ledger count;
- active claims;
- attempt folders;
- terminal records;

must reconcile.

## 13.8 Stalled Item Detection

An item is stalled when:

- state has not changed within policy threshold;
- owner is inactive;
- expected artifact is missing;
- review assignment is unresolved;
- retry has no remediation owner.

Stalled items require explicit intervention.

## 13.9 Progress Integrity

An item cannot be counted as accepted based only on file existence.

Acceptance requires the acceptance record and review disposition.

---

# 14. Production Logs

## 14.1 Logging Objective

Provide a complete operational and audit trace without exposing private chain of thought.

## 14.2 Required Log Classes

### Batch Control Log

Records batch state, pause, resume, policy change, and closure.

### State Transition Log

Records every item and batch transition.

### Generation Log

Records attempt execution metadata and outcome.

### Evidence Load Log

Records bundle loading and source issues.

### Validation Log

Records validator results.

### Review Log

Records reviewer assignment and decision.

### Retry Log

Records failure class and changed retry condition.

### Recovery Log

Records recovery procedures.

### Security and Rights Log

Records permission, licensing, and access incidents.

### Audit Log

Records final lineage and governance decisions.

## 14.3 Log Entry Contract

Every log entry MUST include:

- log event ID;
- timestamp;
- batch ID;
- shard ID if applicable;
- Work Item ID if applicable;
- Attempt ID if applicable;
- actor;
- action;
- previous state;
- new state;
- reason;
- artifact references;
- severity;
- correlation reference.

## 14.4 Prohibited Log Content

Logs MUST NOT contain:

- private chain of thought;
- unrestricted source content;
- secrets;
- personal credentials;
- unnecessary sensitive data;
- undocumented manual conclusions.

## 14.5 Log Immutability

Historical log entries are not edited.

Corrections are appended as correction events.

## 14.6 Log Severity

- `info`;
- `warning`;
- `error`;
- `critical`;
- `audit`.

## 14.7 Log Retention

Retention follows the batch retention policy and governance requirements.

Accepted-object lineage MUST remain available for the lifetime of the object.

---

# 15. Output Folder Convention

## 15.1 Purpose

Ensure outputs are predictable, separable by lifecycle state, and resumable.

## 15.2 Canonical Career Object Output Root

Accepted Career Object handoff packages SHOULD use the conceptual path:

`assets/knowledge/objects/career/<entity_key>/<object_id>/<revision_id>/`

## 15.3 Accepted Object Package Contents

A handoff-ready item folder contains:

- Career Draft Object;
- Generation Record;
- input reference manifest;
- evidence reference manifest;
- validation summary;
- human review disposition;
- acceptance record;
- quality summary;
- dependency references;
- handoff metadata.

## 15.4 Attempt Output Convention

Attempts remain under the batch folder and are not written directly into the canonical object root.

## 15.5 No In-place Replacement

A new revision receives a new revision folder.

## 15.6 File Role Naming

Recommended role-based file names:

- `career_object.md`
- `generation_record.md`
- `input_references.md`
- `evidence_references.md`
- `validation_report.md`
- `review_record.md`
- `acceptance_record.md`
- `quality_summary.md`
- `handoff_record.md`

The implementation may use another serialization format, but role names and semantics must remain clear.

## 15.7 Failure Output Convention

Rejected and quarantined artifacts remain in the batch, not the canonical accepted-object root.

---

# 16. Batch Folder Convention

## 16.1 Canonical Batch Root

`assets/knowledge/production/batches/<batch_id>/`

## 16.2 Required Batch Structure

```text
<batch_id>/
├── 00_control/
├── 01_manifest/
├── 02_contract_lock/
├── 03_inputs/
├── 04_evidence/
├── 05_shards/
├── 06_attempts/
├── 07_validation/
├── 08_review/
├── 09_accepted/
├── 10_rejected/
├── 11_blocked/
├── 12_quarantine/
├── 13_checkpoints/
├── 14_logs/
├── 15_reports/
├── 16_handoff/
└── 17_archive/
```

This tree is a folder contract, not a database design.

## 16.3 Folder Responsibilities

### `00_control`

- batch control record;
- owner;
- execution policy;
- pause and resume records;
- status.

### `01_manifest`

- Batch Manifest revisions;
- item disposition tables;
- reconciliation files.

### `02_contract_lock`

- specification versions;
- model lane;
- policy versions;
- compatibility record.

### `03_inputs`

- Work Item Packages;
- identity records;
- scope records;
- prior revision references.

### `04_evidence`

- Evidence Bundle references;
- evidence load reports;
- shared evidence manifests.

### `05_shards`

- shard manifests;
- shard assignment records;
- shard summaries.

### `06_attempts`

Path:

`06_attempts/<work_item_id>/<attempt_id>/`

Contains immutable generation attempt artifacts.

### `07_validation`

Path:

`07_validation/<work_item_id>/<attempt_id>/`

Contains layered validation reports.

### `08_review`

Path:

`08_review/<work_item_id>/<review_cycle_id>/`

Contains review packages and decisions.

### `09_accepted`

Contains accepted handoff package references or copies.

### `10_rejected`

Contains rejection records and final artifacts.

### `11_blocked`

Contains unresolved prerequisite failures.

### `12_quarantine`

Contains unsafe, inconsistent, or integrity-failed artifacts.

### `13_checkpoints`

Contains batch and shard checkpoints.

### `14_logs`

Contains append-only production logs.

### `15_reports`

Contains progress, exception, metrics, and final reports.

### `16_handoff`

Contains the Knowledge Production Pipeline handoff manifest.

### `17_archive`

Contains closure and retention packaging metadata.

## 16.4 Folder Creation Rule

All required folders are created at batch initialization, even if they remain empty.

## 16.5 Folder Mutation Rule

Accepted, rejected, and quarantine folders are append-only at the artifact level.

---

# 17. Naming Convention

## 17.1 Batch ID

Recommended pattern:

`career-batch-<release_key>-<sequence>-r<batch_revision>`

Example pattern only:

`career-batch-<release>-0001-r01`

No actual Career data is implied.

## 17.2 Shard ID

Pattern:

`<batch_id>-shard-<zero_padded_sequence>`

## 17.3 Work Item ID

Pattern:

`career-item-<batch_sequence>-<stable_item_sequence>`

The Work Item ID is operational and does not replace Entity ID.

## 17.4 Attempt ID

Pattern:

`<work_item_id>-attempt-<zero_padded_sequence>`

## 17.5 Review Cycle ID

Pattern:

`<work_item_id>-review-<zero_padded_sequence>`

## 17.6 File Name Pattern

Recommended:

`<artifact_role>__<work_item_id>__<attempt_or_revision_id>.<extension>`

## 17.7 Entity Key

The folder-safe Entity Key:

- is derived from an approved stable identifier;
- is lowercase;
- avoids display-name dependence where possible;
- does not replace Entity ID;
- remains stable across locale changes.

## 17.8 Naming Constraints

Names MUST NOT:

- contain reviewer opinions;
- contain quality claims;
- contain status not reflected in control records;
- depend solely on mutable localized names;
- reuse IDs across batches for different operational items.

## 17.9 Sequence Stability

Manifest sequence numbers do not change after batch initialization.

Removed or duplicate items retain their original sequence and receive a disposition.

---

# 18. Parallel Generation Strategy

## 18.1 Parallelization Objective

Increase throughput while preserving item isolation, deterministic assignment, and review capacity.

## 18.2 Safe Parallel Unit

The Work Item is the smallest parallel generation unit.

## 18.3 Shard Formation

Shards SHOULD group items with compatible:

- contract versions;
- model lane;
- locale;
- risk class;
- evidence readiness;
- review policy.

## 18.4 Deterministic Sharding

Given the same:

- Batch Manifest revision;
- shard policy version;
- item ordering;

the same items SHOULD map to the same shards.

## 18.5 Single-writer Rule

Only one generation agent may own one Work Item at a time.

## 18.6 Parallel Barriers

The following SHOULD complete before unrestricted parallel generation:

- identity deduplication;
- contract lock;
- evidence readiness;
- shard manifest freeze.

Cross-object consistency validation occurs after a meaningful set of items has been generated.

## 18.7 Concurrency Limit

The Execution Policy defines concurrency based on:

- model capacity;
- evidence-loading capacity;
- validator capacity;
- review capacity;
- failure rate;
- cost controls.

Generation concurrency MUST be reduced when downstream validation or review queues exceed policy limits.

## 18.8 Backpressure

Backpressure actions include:

- stop new claims;
- pause low-priority shards;
- continue validation and review;
- prioritize retries with known remediation;
- defer evidence-incomplete items.

## 18.9 Parallel Model Lanes

Different model lanes MAY run in parallel only when:

- each model is qualified;
- lanes are explicitly named;
- contract locks are identical or separated;
- outputs remain lane-attributed;
- quality metrics are compared;
- cross-lane semantic drift is monitored.

## 18.10 No Consensus Shortcut

Multiple generated outputs for one item do not become valid by majority vote.

They require evidence and validation.

## 18.11 Shared Dependency Failure

If a shared input, prompt, or validator defect affects a shard:

- pause the entire shard;
- identify affected attempts;
- do not continue item-level retries until the shared defect is resolved.

## 18.12 Cross-object Validation

After shard generation, run checks for:

- duplicate identity;
- naming drift;
- repeated relationship inflation;
- copied evidence errors;
- inconsistent absence-state use;
- model-specific formatting drift.

---

# 19. Incremental Production Strategy

## 19.1 Incremental Modes

### Additive Production

Adds new Career targets.

### Revision Production

Creates new revisions for existing Career Objects.

### Evidence Refresh

Updates evidence without changing semantic identity.

### Relationship Enrichment

Adds supported relationships.

### Localization Expansion

Adds or improves locale content.

### Corrective Production

Fixes known defects.

### Reprocessing

Regenerates items affected by contract, prompt, model, or evidence defects.

## 19.2 Delta Batch

Incremental work MUST use a delta batch when it affects a subset of the catalog.

A delta batch references:

- source release;
- prior accepted revision;
- change reason;
- impacted fields;
- dependency impact;
- expected successor behavior.

## 19.3 Unchanged Item Reuse

Items unaffected by the change MUST NOT be regenerated.

They are referenced as unchanged.

## 19.4 Impact Analysis

Before a delta batch:

1. identify affected Career Objects;
2. identify dependent relationships;
3. identify graph and vector derivatives;
4. identify downstream recommendations or reports if applicable;
5. define required revalidation.

## 19.5 Incremental Acceptance

A new accepted revision does not delete the prior revision.

It creates a handoff package with:

- predecessor;
- change class;
- compatibility;
- migration note;
- affected dependencies.

## 19.6 Contract Upgrade Campaign

When Ontology, KOS, Generator, or Master Prompt changes:

1. classify compatibility;
2. determine whether existing objects require migration;
3. run a canary delta batch;
4. compare outputs;
5. approve rollout;
6. process affected subsets in waves.

## 19.7 Freshness Campaign

Volatile contextual knowledge SHOULD be refreshed independently from stable Career core whenever possible.

---

# 20. Human Review Workflow

## 20.1 Review Principle

No Career Draft enters `accepted_for_pipeline_handoff` without an authorized human disposition under the Review Policy.

## 20.2 Reviewer Assignment

Reviewers are assigned based on:

- domain expertise;
- locale;
- regulation expertise;
- evidence expertise;
- conflict-of-interest status;
- workload;
- risk class.

## 20.3 Review Levels

### Level 1: Structural and Editorial Review

Checks clarity, completeness, naming, and output consistency.

### Level 2: Domain and Evidence Review

Checks Career identity, tasks, competencies, pathways, evidence, and relationships.

### Level 3: Specialized Review

Required for:

- regulated Career;
- legal requirement;
- disputed identity;
- high-impact AI Trend linkage;
- complex localization;
- critical evidence conflict.

## 20.4 Review Package Completeness

The reviewer MUST receive the full review package specified in Stage 11.

## 20.5 Review Decisions

Allowed decisions:

- `approve_for_handoff`;
- `approve_with_limitations`;
- `changes_requested`;
- `reject`;
- `escalate`;
- `quarantine`.

## 20.6 Review Findings

Each finding includes:

- finding ID;
- severity;
- affected field or claim;
- evidence reference;
- required correction;
- reviewer rationale;
- blocking status.

## 20.7 Changes Requested

The original attempt remains immutable.

A remediation attempt receives:

- review finding references;
- authorized correction scope;
- unchanged evidence or revised Evidence Bundle;
- new Attempt ID.

## 20.8 Reviewer Disagreement

If reviewers disagree:

1. compare review scope;
2. identify factual versus semantic versus policy conflict;
3. assign adjudicator;
4. preserve both reviews;
5. do not average decisions.

## 20.9 Review Sampling

For production handoff, item-level disposition remains mandatory.

AI-assisted prioritization and batch-level statistical sampling MAY supplement review quality assurance but MUST NOT replace the required item disposition unless a future governing policy explicitly authorizes cohort approval.

## 20.10 Conflict of Interest

A reviewer MUST disclose:

- institutional affiliation;
- commercial interest;
- authorship of source;
- prior generation involvement when material.

## 20.11 Review Closure

Review closes only when:

- decision recorded;
- all blocking findings resolved or item rejected;
- accepted revision identified;
- reviewer authority verified.

---

# 21. Quality Gates

## 21.1 Gate Q0: Batch Authorization

Pass conditions:

- authorized purpose;
- owner;
- contract lock;
- review policy;
- model lane.

## 21.2 Gate Q1: Manifest Integrity

Pass conditions:

- unique Work Item IDs;
- stable sequence;
- expected count;
- no missing required references.

## 21.3 Gate Q2: Identity Readiness

Pass conditions:

- Career identity resolved;
- duplicates dispositioned;
- Career-versus-Role boundary clear.

## 21.4 Gate Q3: Scope Readiness

Pass conditions:

- inclusion and exclusion;
- abstraction level;
- locale and geography;
- stable-context separation.

## 21.5 Gate Q4: Evidence Readiness

Pass conditions:

- core evidence categories;
- source integrity;
- rights;
- conflict record;
- freshness.

## 21.6 Gate Q5: Generation Conformance

Pass conditions:

- exact Master Prompt used;
- Draft or typed failure only;
- complete Generation Record;
- immutable Attempt ID.

## 21.7 Gate Q6: KOS Validation

Pass conditions:

- mandatory fields;
- 18 sections;
- lifecycle correctness;
- no forbidden structure.

## 21.8 Gate Q7: Ontology and Identity Validation

Pass conditions:

- valid class;
- valid predicates;
- valid target types;
- no unresolved duplicate;
- no entity-type collapse.

## 21.9 Gate Q8: Evidence and Constitutional Validation

Pass conditions:

- claim mapping;
- source resolution;
- no fabricated source;
- no deterministic personal claims;
- no contextual contamination.

## 21.10 Gate Q9: Cross-object Consistency

Pass conditions:

- no duplicate output;
- no naming drift;
- no batch-wide predicate misuse;
- no copied unsupported content pattern.

## 21.11 Gate Q10: Human Review

Pass conditions:

- authorized reviewer;
- no unresolved blocker;
- decision recorded;
- accepted revision identified.

## 21.12 Gate Q11: Acceptance Package

Pass conditions:

- accepted artifact;
- validation records;
- review record;
- acceptance record;
- handoff metadata;
- complete audit trail.

## 21.13 Gate Q12: Batch Reconciliation

Pass conditions:

- all manifest items terminal;
- expected and actual counts match;
- no orphan attempts;
- no missing accepted files;
- final reports complete.

## 21.14 Non-compensatory Blockers

No score, throughput target, or reviewer preference can override:

- fabricated source;
- invalid identity;
- invalid Ontology class;
- rights violation;
- unsupported mandatory claim;
- unresolved critical conflict;
- duplicate canonical output;
- missing revision lineage;
- self-approved generation;
- corrupted audit chain.

---

# 22. Acceptance Criteria

## 22.1 Item Acceptance Criteria

A Work Item may enter `accepted_for_pipeline_handoff` only if:

1. it has one accepted Attempt ID;
2. the output is a Draft Career Object;
3. all mandatory sections exist;
4. KOS validation passes;
5. Ontology validation passes;
6. identity validation passes;
7. evidence validation passes;
8. constitutional validation passes;
9. self-consistency passes;
10. cross-object validation has no blocker;
11. human review approves;
12. all blocking findings are resolved;
13. source and evidence references resolve;
14. revision lineage is complete;
15. acceptance record exists;
16. handoff package exists;
17. no duplicate accepted artifact exists.

## 22.2 Accepted With Limitations

An item may be approved with limitations only if:

- limitations are non-blocking;
- limitations are explicit;
- readiness is not overstated;
- pipeline handoff receives the warnings;
- no core identity, evidence, or constitutional issue remains.

## 22.3 Rejection Criteria

Reject if:

- target is not a Career;
- core evidence cannot be obtained;
- identity cannot be resolved;
- source fabrication occurred;
- rights prohibit use;
- review determines the Draft is materially unreliable;
- repeated remediation does not resolve blockers.

## 22.4 Quarantine Criteria

Quarantine if:

- integrity is uncertain;
- model behavior suggests systematic contamination;
- source lineage is compromised;
- duplicate processing cannot be reconciled;
- prohibited content may have propagated;
- security or rights incident exists.

## 22.5 Batch Completion Criteria

A batch may close only when:

- every manifest item is terminal;
- state and artifact counts reconcile;
- accepted items have handoff packages;
- rejected, blocked, deferred, and quarantined items have reason records;
- no active claims remain;
- final checkpoint exists;
- batch report exists;
- exception report exists;
- handoff manifest exists.

## 22.6 Batch Completion Classes

### Completed

All intended target items accepted.

### Completed With Exceptions

All items terminal, but exceptions exist.

### Failed

Shared integrity or reconciliation failure prevents a trustworthy closure.

### Cancelled

Authorized cancellation with all active work stopped and dispositioned.

---

# 23. Example Batch Execution

## 23.1 Purpose

This example demonstrates the SOP using abstract work items. It does not create Career Objects or profession data.

## 23.2 Initial Batch

A production release authorizes a batch containing **1,000 abstract Career targets**.

The Batch Manifest contains 1,000 stable sequence entries.

## 23.3 Initialization

The Batch Coordinator:

1. creates Batch ID and folder structure;
2. locks specification and model versions;
3. writes review and retry policies;
4. records expected count: 1,000;
5. creates checkpoint zero.

Batch state becomes `initialized`.

## 23.4 Identity Preflight

The system identifies hypothetical dispositions:

- 970 items are distinct production candidates;
- 10 resolve to existing accepted objects and become reuse dispositions;
- 8 are duplicate requests within the batch;
- 7 are unresolved Career-versus-Role cases;
- 5 lack sufficient identity information.

No item is deleted from the manifest.

The 15 unresolved items become blocked or identity-pending.

## 23.5 Evidence Readiness

Of the 970 production candidates:

- 930 pass evidence readiness;
- 25 require additional evidence;
- 10 have rights restrictions;
- 5 contain unresolved core evidence conflict.

Only the 930 ready items are eligible for generation.

## 23.6 Sharding

The 930 items are deterministically assigned to shards according to:

- risk;
- locale;
- regulated status;
- evidence size;
- model lane.

Each item belongs to one shard.

## 23.7 Generation

Each item:

1. is claimed;
2. receives an Attempt ID;
3. loads its own package;
4. executes the Master Prompt;
5. writes immutable output;
6. releases ownership.

A model interruption affects several attempts. Those attempts are marked abandoned and retried under Class A recovery. Completed attempts are not rerun.

## 23.8 Validation

Validation produces hypothetical outcomes:

- pass;
- pass with warnings;
- retryable formatting failures;
- evidence mapping failures;
- ontology failures;
- quarantined integrity failures.

Only affected items enter retries or escalation.

## 23.9 Human Review

Validated items enter reviewer queues based on domain and risk.

Reviewers:

- approve some items;
- request remediation on some items;
- reject unsupported items;
- escalate disputed cases.

Every decision is item-specific.

## 23.10 Reconciliation

At the end:

- all 1,000 manifest items have terminal dispositions;
- accepted items have complete handoff packages;
- all attempts are accounted for;
- no duplicate accepted revision exists;
- exceptions are listed;
- batch state becomes `completed_with_exceptions`.

## 23.11 Key Operational Lesson

The batch succeeds operationally even when not every target is accepted.

Success means the system preserves quality, accountability, and complete disposition for every requested item.

---

# 24. Enterprise Scaling Strategy

## 24.1 Scale Target

CBPS is designed to support production programs of up to 100,000 Career Objects without executing all items as one undifferentiated batch.

## 24.2 Scale Hierarchy

For large programs, use:

- one Production Program;
- multiple Releases;
- multiple Batches per Release;
- multiple Shards per Batch;
- one Work Item per Career target;
- multiple immutable Attempts when needed.

## 24.3 Wave Strategy

A large program SHOULD progress through:

1. qualification suite;
2. micro canary batch;
3. limited production batch;
4. expanded wave;
5. steady-state production;
6. corrective and refresh waves.

## 24.4 Canary Requirements

Before large-scale rollout, a canary batch MUST test:

- clear Career identity;
- ambiguous Role case;
- duplicate case;
- insufficient evidence;
- evidence conflict;
- regulated case;
- localization;
- revision;
- source integrity failure;
- salary contamination;
- AI Trend contamination;
- personality determinism;
- recovery from interrupted execution.

## 24.5 Production Portfolio Partitioning

The 100,000-object portfolio SHOULD be partitioned by operationally relevant dimensions such as:

- locale;
- jurisdiction;
- risk;
- evidence readiness;
- regulated status;
- revision versus new entity;
- review specialization;
- contract version.

Partitioning MUST NOT redefine Ontology identity.

## 24.6 Review Capacity Scaling

Review scale is achieved through:

- reviewer specialization;
- distributed review queues;
- AI-prepared review packages;
- priority-based assignment;
- standardized findings;
- independent adjudication pools;
- backpressure.

Quality is not achieved by removing review.

## 24.7 Model Qualification at Scale

Each model lane MUST have:

- contract conformance baseline;
- source fabrication test;
- identity boundary test;
- fixed-output test;
- failure behavior test;
- drift monitoring;
- suspension criteria.

## 24.8 Throughput Control

Throughput is increased by:

- item parallelism;
- deterministic shards;
- shared source references;
- reusable validation;
- incremental processing;
- early blocker detection;
- avoiding duplicate generation.

Throughput MUST NOT be increased by:

- skipping identity resolution;
- skipping evidence readiness;
- merging work items;
- accepting unreviewed outputs;
- reusing unsupported content across items.

## 24.9 Backpressure at Scale

The system MUST reduce generation when:

- validation backlog exceeds policy;
- human review backlog exceeds policy;
- failure rate rises;
- model drift is detected;
- source systems become unreliable;
- reconciliation falls behind.

## 24.10 Regional Production Lanes

International expansion may use regional lanes with:

- local evidence;
- local reviewers;
- local regulations;
- approved terminology;
- common global semantic identity;
- separate contextual assertions.

## 24.11 Disaster Recovery

Large production programs MUST maintain:

- immutable manifests;
- durable checkpoints;
- independent artifact copies according to policy;
- contract lock records;
- attempt lineage;
- restart procedures;
- batch reconciliation capability.

## 24.12 Continuous Production

After initial catalog production, use incremental campaigns for:

- new Careers;
- revision;
- localization;
- evidence refresh;
- relationship enrichment;
- corrective updates;
- contract migrations.

## 24.13 Enterprise Acceptance

The system is enterprise-ready when it can:

- process multiple batches concurrently;
- isolate shard failures;
- resume without duplicate acceptance;
- maintain item-level audit;
- reconcile 100 percent of manifest entries;
- stop unsafe lanes;
- preserve version lineage;
- support distributed human review;
- produce deterministic handoff packages.

---

# 25. Operational Checklists

## 25.1 Batch Start Checklist

- [ ] Production authorization exists.
- [ ] Batch owner assigned.
- [ ] Batch ID assigned.
- [ ] Folder structure created.
- [ ] Manifest frozen.
- [ ] Expected count recorded.
- [ ] Contract lock complete.
- [ ] Model lane qualified.
- [ ] Execution policy complete.
- [ ] Review policy complete.
- [ ] Retry policy complete.
- [ ] Checkpoint zero written.

## 25.2 Item Preflight Checklist

- [ ] Work Item ID unique.
- [ ] Entity identity resolved or correctly blocked.
- [ ] Target is Career.
- [ ] Duplicate decision exists.
- [ ] Scope record exists.
- [ ] Evidence Bundle exists.
- [ ] Source rights pass.
- [ ] Contract versions match.
- [ ] Output path assigned.
- [ ] Item not terminal.
- [ ] Item belongs to one shard.

## 25.3 Generation Checklist

- [ ] Item claimed by one owner.
- [ ] Attempt ID created.
- [ ] Master Prompt version correct.
- [ ] Evidence Bundle locked.
- [ ] Existing references loaded.
- [ ] Output contains one outcome.
- [ ] Raw output preserved.
- [ ] Generation Record written.
- [ ] Attempt completion recorded.
- [ ] Ownership released.

## 25.4 Validation Checklist

- [ ] Artifact integrity passes.
- [ ] Outcome type valid.
- [ ] Fixed structure passes.
- [ ] KOS passes.
- [ ] Identity passes.
- [ ] Ontology passes.
- [ ] Relationships pass.
- [ ] Evidence passes.
- [ ] Temporal and geographic checks pass.
- [ ] Constitutional checks pass.
- [ ] Self-consistency passes.
- [ ] Cross-object checks pass.
- [ ] Retry classification recorded.

## 25.5 Review Checklist

- [ ] Review package complete.
- [ ] Reviewer qualified.
- [ ] Conflict of interest disclosed.
- [ ] All blocker findings reviewed.
- [ ] Decision recorded.
- [ ] Accepted revision identified.
- [ ] Changes use a new attempt.
- [ ] Review closure recorded.

## 25.6 Acceptance Checklist

- [ ] Accepted Attempt ID exists.
- [ ] Validation reports complete.
- [ ] Review approval complete.
- [ ] No unresolved blocker.
- [ ] Acceptance Record complete.
- [ ] Handoff package complete.
- [ ] No duplicate accepted revision.
- [ ] Item state terminal.

## 25.7 Batch Closure Checklist

- [ ] All manifest items terminal.
- [ ] Counts reconcile.
- [ ] No active claims.
- [ ] No orphan attempts.
- [ ] Accepted packages exist.
- [ ] Exception dispositions exist.
- [ ] Final checkpoint exists.
- [ ] Final report exists.
- [ ] Handoff manifest exists.
- [ ] Batch state assigned.
- [ ] Archive metadata written.

---

# 26. Production Success Criteria

CBPS is successful when:

1. all Career Objects are generated through the same approved prompt contract;
2. each item uses an isolated and versioned input package;
3. every attempt is immutable and traceable;
4. generation can stop and resume without reprocessing accepted items;
5. failures remain item-scoped unless a shared defect exists;
6. retries are bounded and condition-changing;
7. no item is lost from the manifest;
8. no duplicate accepted revision is created;
9. all accepted items pass KOS, Ontology, evidence, constitutional, and human review gates;
10. batch progress is derived from durable records;
11. every terminal item has a disposition;
12. accepted outputs have complete handoff packages;
13. batch closure reconciles all counts and artifacts;
14. model, prompt, contract, and evidence versions are reproducible;
15. the same SOP supports small batches and production programs up to 100,000 Career Objects;
16. scale is achieved through parallelism, sharding, incremental production, and distributed review rather than weaker quality controls.

---

# 27. Closing Operating Standard

Career Batch Production System V1 is the operating discipline that converts the KarirGPS Career knowledge framework into controlled mass production.

The system does not assume that every requested Career target should become an accepted object.

It requires every target to receive a complete and auditable disposition.

The system does not assume that generation completion means production success.

A Career Object is accepted only after:

- identity readiness;
- scope readiness;
- evidence readiness;
- governed generation;
- layered validation;
- cross-object consistency checks;
- human review;
- acceptance packaging.

The system does not recover by restarting everything.

It recovers through:

- item isolation;
- immutable attempts;
- checkpoints;
- deterministic manifests;
- state reconciliation;
- bounded retries.

The system does not scale by weakening standards.

It scales through:

- controlled batches;
- deterministic shards;
- qualified model lanes;
- evidence references;
- automated validation;
- review specialization;
- incremental campaigns;
- complete production logs.

This SOP is the authoritative operational standard for producing Career Objects consistently, safely, and reproducibly across the KarirGPS ecosystem.
