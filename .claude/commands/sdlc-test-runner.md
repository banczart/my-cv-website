# SDLC Test Runner Agent

Automatically execute all test suites and capture structured results.

## When to use

Use this skill to run all automated tests after they have been generated. This is **Step 2** of the agentic SDLC pipeline.

## Instructions

You are an autonomous test execution agent. Your job is to run all test suites and produce structured, actionable results.

### Pre-flight Checks

1. Verify test infrastructure exists:
   - `vitest.config.ts` exists at project root
   - `playwright.config.ts` exists at project root
   - `src/test/setup.ts` exists
   - `src/test/test-utils.tsx` exists
2. Verify test files exist:
   - Check for `*.test.tsx` / `*.test.ts` files in `src/`
   - Check for `*.spec.ts` files in `e2e/`
3. If any infrastructure is missing, report what's missing and stop.

### Phase 1: Run Unit & Integration Tests (Vitest)

Execute the following command and capture full output:

```bash
npx vitest run --reporter=verbose 2>&1
```

Parse the output to extract:
- Total tests run, passed, failed, skipped
- For each failed test: test name, file path, error message, stack trace
- Test execution time

If tests fail due to **import errors or missing modules**, note these as infrastructure issues (not code bugs).

### Phase 2: Run Coverage Analysis

Execute:

```bash
npx vitest run --coverage 2>&1
```

Parse coverage output to extract:
- Overall coverage percentage (statements, branches, functions, lines)
- Per-file coverage breakdown
- Uncovered lines/branches

### Phase 3: Run E2E Tests (Playwright)

First, build the project for preview:

```bash
npm run build 2>&1
```

Then run Playwright tests:

```bash
npx playwright test --reporter=list 2>&1
```

Parse the output to extract:
- Total tests run per browser/device
- Passed/failed/skipped counts
- For each failed test: test name, browser, error message, screenshot path
- Test execution time

### Phase 4: Generate Test Results Report

Create a structured report file at `test-results/report.md` with:

```markdown
# Test Execution Report
**Date:** [current date/time]
**Branch:** [current git branch]

## Summary
| Suite | Total | Passed | Failed | Skipped | Duration |
|-------|-------|--------|--------|---------|----------|
| Unit  | ...   | ...    | ...    | ...     | ...      |
| Integration | ... | ... | ... | ... | ... |
| E2E   | ...   | ...    | ...    | ...     | ...      |

## Coverage
| Metric | Percentage |
|--------|-----------|
| Statements | ...% |
| Branches | ...% |
| Functions | ...% |
| Lines | ...% |

## Failed Tests
### [Test Name]
- **File:** path/to/test
- **Error:** error message
- **Stack:** stack trace (truncated)

## Recommendations
- [any observations about test health]
```

### Error Handling

- If Vitest fails to start: check `vitest.config.ts` and `node_modules`
- If Playwright fails to start: run `npx playwright install` to install browsers, then retry
- If the build fails before E2E: skip E2E tests and note build failure in the report
- Always produce a report even if some test suites fail to execute

### Output

Provide the user with:
1. A concise summary of pass/fail counts
2. The path to the full report file
3. List of all failing tests (if any) with brief error descriptions
4. Recommendation on whether to proceed to the analysis phase
