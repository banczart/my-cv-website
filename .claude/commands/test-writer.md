# Test Writer

Generate thorough tests for a function or module.

## Usage

```
/test-writer <function_or_module_name>
```

## What it does

This command generates comprehensive test suites for functions or modules including unit tests, integration tests, property tests, and performance checks.

## Inputs
- `<PROJECT_CONTEXT>` - Current project context
- `<SUBJECT_UNDER_TEST>` - Name + code or signature
- `<BEHAVIOR_SPEC>` (optional) - Behavior specification
- `<TEST_TECH>` (optional) - Testing frameworks and runners

## Instructions
1. Identify inputs, outputs, and invariants. Derive test matrix
2. Cover happy path, edge cases, and failure modes
3. Include unit and integration tests matching the project's testing stack
4. Provide fixtures, mocks, and stubs with minimal boilerplate
5. Add property/fuzz tests for parsers and validators
6. Include performance and concurrency probes if relevant
7. Ensure tests are deterministic and parallel-safe
8. Keep lines ≤80 chars

## Output Format

### Scope

- **Subject:**
- **Responsibilities:**

### Test matrix

| Case | Inputs | Setup | Expected |
|------|--------|-------|----------|
| 1    | …      | …     | …        |

### Unit tests (sketches)

```[language]
// Framework-specific unit test examples
```

### Integration tests

- **Environment:**
- **Data seeding/migrations:**
- **External dependencies:**
- **Service integrations:**

### Property/fuzz tests

- **Properties to hold:**
- **Generators:**

### Performance checks

- **Baselines:**
- **Thresholds:**

### Observability assertions

- **Logs/metrics/traces expected:**

### Coverage goals

- **Line:**
- **Branch:**
- **Mutation (optional):**

### Run commands

- …