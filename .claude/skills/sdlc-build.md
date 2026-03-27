# SDLC Build Agent

Automatically build the verified, bug-free code for production deployment.

## When to use

Use this skill to build the project after all tests pass. This is **Step 4** of the agentic SDLC pipeline.

## Instructions

You are an autonomous build agent. Your job is to produce a production-ready build after verifying code quality.

### Phase 1: Pre-Build Verification

Before building, verify the code is ready:

1. **Run lint check:**
   ```bash
   npm run lint 2>&1
   ```
   - If lint errors exist, fix them automatically (auto-fixable) or report them
   - Run `npx eslint . --fix 2>&1` for auto-fixable issues

2. **Run TypeScript check:**
   ```bash
   npx tsc --noEmit 2>&1
   ```
   - If type errors exist, read the affected files and fix the type issues
   - Re-run until clean

3. **Quick test verification:**
   ```bash
   npx vitest run 2>&1
   ```
   - If any tests fail, STOP and report that the code is not ready for build
   - Recommend running the Test Analyzer agent first

4. Verify all critical files exist:
   - `index.html`
   - `src/main.tsx`
   - `src/App.tsx`
   - `vite.config.ts`
   - `tailwind.config.ts`
   - `CNAME` (for custom domain)

### Phase 2: Clean Build

1. Remove previous build artifacts:
   ```bash
   rm -rf dist 2>&1
   ```

2. Run production build:
   ```bash
   npm run build 2>&1
   ```

3. Capture build output including:
   - Bundle sizes (JS, CSS)
   - Asset count
   - Build duration
   - Any warnings

### Phase 3: Build Validation

After the build completes, verify the output:

1. **Check dist directory exists and has expected structure:**
   ```bash
   ls -la dist/ 2>&1
   ls -la dist/assets/ 2>&1
   ```

2. **Verify critical files in dist:**
   - `dist/index.html` exists and contains the root div
   - `dist/assets/` contains JS and CSS bundles
   - `dist/robots.txt` exists
   - Static assets (logos, media) are present
   - `CNAME` file is present (for GitHub Pages custom domain)

3. **Check index.html references correct assets:**
   - Read `dist/index.html` and verify script/link tags point to existing files

4. **Bundle size check:**
   - Report total bundle size
   - Warn if JS bundle exceeds 500KB (gzipped)
   - Warn if CSS bundle exceeds 100KB

### Phase 4: Post-Build Smoke Test

Run a quick preview to verify the build works:

```bash
timeout 10 npx vite preview --port 4173 2>&1 || true
```

Verify the server starts without errors.

### Phase 5: Generate Build Report

Create `test-results/build-report.md`:

```markdown
# Build Report
**Date:** [current date/time]
**Branch:** [current git branch]
**Commit:** [current commit hash]

## Pre-Build Checks
| Check | Status |
|-------|--------|
| Lint | PASS/FAIL |
| TypeScript | PASS/FAIL |
| Tests | PASS/FAIL |
| Critical files | PASS/FAIL |

## Build Output
- **Duration:** Xs
- **Output dir:** dist/
- **Total size:** XKB

## Bundle Analysis
| Asset | Size |
|-------|------|
| JS bundle | XKB |
| CSS bundle | XKB |
| Static assets | XKB |

## Validation
| Check | Status |
|-------|--------|
| dist/ structure | PASS/FAIL |
| index.html valid | PASS/FAIL |
| Assets referenced | PASS/FAIL |
| CNAME present | PASS/FAIL |

## Status: READY FOR DEPLOYMENT / NOT READY
```

### Output

Provide the user with:
1. Build success/failure status
2. Bundle size summary
3. Any warnings or issues found
4. Clear YES/NO on whether the build is ready for deployment
