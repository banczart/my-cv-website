# SDLC Pipeline Orchestrator

Run the full agentic SDLC pipeline: Generate Tests -> Run Tests -> Analyze & Fix -> Build -> Deploy.

## When to use

Use this skill to execute the complete automated SDLC pipeline end-to-end. This orchestrates all 5 SDLC agents in sequence.

## Instructions

You are the SDLC Pipeline Orchestrator. You coordinate the execution of 5 specialized agents in sequence to take code from testing through deployment. Each step must succeed before proceeding to the next.

### Pipeline Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  1. TEST GEN    │────>│  2. TEST RUN    │────>│  3. ANALYZE &   │────>│  4. BUILD       │────>│  5. DEPLOY      │
│                 │     │                 │     │     FIX         │     │                 │     │                 │
│ Generate unit,  │     │ Execute all     │     │ Analyze fails,  │     │ Lint, typecheck │     │ Deploy to       │
│ integration &   │     │ test suites,    │     │ identify bugs,  │     │ build for prod  │     │ GitHub Pages    │
│ E2E tests       │     │ capture results │     │ apply fixes     │     │ validate output │     │ verify live     │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Execution Protocol

#### Step 1: Test Generation
- Invoke the `/sdlc-test-generator` skill
- Launch an Agent with subagent_type "general-purpose" to execute the test generator instructions
- **Gate:** At least 1 test file must be created for unit, integration, and E2E categories
- **On failure:** Report what couldn't be generated and why, then STOP

#### Step 2: Test Execution
- Invoke the `/sdlc-test-runner` skill
- Launch an Agent to execute all test suites and capture results
- **Gate:** Test runner must complete and produce a report
- **On failure:** If test runner itself fails (not test failures), diagnose infrastructure issues and retry once

#### Step 3: Test Analysis & Bug Fixing
- Invoke the `/sdlc-test-analyzer` skill
- Launch an Agent to analyze failures and apply fixes
- This step runs iteratively (up to 3 cycles of fix → retest)
- **Gate:** All unit and integration tests must pass. E2E test failures are acceptable if they are environment-specific (browser install issues)
- **On failure:** If bugs cannot be fixed after 3 iterations, report remaining issues and ASK the user whether to proceed with known issues or stop

#### Step 4: Production Build
- Invoke the `/sdlc-build` skill
- Launch an Agent to lint, typecheck, and build
- **Gate:** Build must complete successfully with no errors
- **On failure:** Analyze build errors, attempt fix, rebuild. If still failing, STOP and report

#### Step 5: Deployment
- Invoke the `/sdlc-deploy` skill
- Launch an Agent to deploy to GitHub Pages
- **Gate:** User must confirm deployment (this is a non-reversible action that affects production)
- **On failure:** Report deployment error and provide rollback instructions

### Pipeline State Tracking

Throughout the pipeline, maintain a status display:

```
SDLC PIPELINE STATUS
====================
[DONE]       Step 1: Test Generation - X test files created
[DONE]       Step 2: Test Execution - X passed, Y failed
[DONE]       Step 3: Analysis & Fix - Y bugs fixed, all tests pass
[RUNNING]    Step 4: Build - building for production...
[PENDING]    Step 5: Deploy
```

### Abort Conditions

The pipeline MUST stop if:
1. Test generation produces zero test files
2. Test analysis cannot achieve all-pass after 3 fix iterations (ask user)
3. Build fails after fix attempt
4. User declines deployment confirmation

### Reports

All reports are saved to `test-results/` directory:
- `test-results/report.md` - Test execution results
- `test-results/analysis-report.md` - Bug analysis and fixes
- `test-results/build-report.md` - Build verification
- `test-results/deploy-report.md` - Deployment status

### Final Output

At the end of the pipeline, present a comprehensive summary:

```markdown
# SDLC Pipeline Complete

## Pipeline Results
| Step | Status | Duration | Details |
|------|--------|----------|---------|
| Test Generation | PASS | Xs | N test files |
| Test Execution | PASS | Xs | N/M passed |
| Analysis & Fix | PASS | Xs | N bugs fixed |
| Build | PASS | Xs | XKB bundle |
| Deploy | PASS | Xs | Live at cvbanczyk.pl |

## Key Metrics
- Test coverage: X%
- Bugs found & fixed: N
- Bundle size: XKB
- Deployment URL: https://cvbanczyk.pl

## Reports Generated
- [links to all report files]
```
