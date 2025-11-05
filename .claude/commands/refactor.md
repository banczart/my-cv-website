# Refactor

Refactor legacy code toward a stated goal, with safety.

## Usage

```
/refactor <file_path> "<refactor_goal>"
```

## What it does

This command helps refactor legacy code toward specific goals (e.g., improve readability, adopt patterns, reduce coupling) while maintaining safety and behavior preservation.

## Inputs
- `<PROJECT_CONTEXT>` - Current project context
- `<LEGACY_CODE>` - Code to refactor
- `<REFACTOR_GOAL>` - e.g., improve readability, adopt a pattern, reduce coupling
- `<CONSTRAINTS>` (optional) - Any constraints to consider

## Instructions
1. Restate refactor goal and constraints. Preserve behavior
2. Propose a target design (patterns, boundaries, contracts)
3. Provide a refactored version or representative slices
4. Explain rationale trade-offs (perf, readability, testability)
5. Add safety checks: tests, metrics, and rollout steps
6. Show an incremental plan of small commits
7. Keep lines ≤80 chars

## Output Format

### Goal & constraints

- **Goal:**
- **Constraints:**

### Diagnosis

- **Smells:**
- **Risks:**

### Target design

- **Patterns:**
- **Module boundaries:**
- **Public interfaces:**

### Refactored code (slice)

```diff
- old
+ new
```

### Rationale

- **Why this is better:**
- **Alternatives considered:**

### Safety & verification

- **Regression tests:**
- **Contracts/property checks:**
- **Perf baselines:**
- **Observability:**

### Incremental plan

1. …
2. …

### Backout plan

- **How to revert safely:**

### Follow-ups

- …