# Test Execution Report
**Date:** 2026-03-27 14:11 UTC
**Branch:** main
**Commit:** 835f380

## Summary
| Suite | Total | Passed | Failed | Skipped | Duration |
|-------|-------|--------|--------|---------|----------|
| Unit (Vitest) | 67 | 67 | 0 | 0 | 4.44s |
| Integration (Vitest) | 9 | 9 | 0 | 0 | (included above) |
| **Vitest Total** | **79** | **79** | **0** | **0** | **4.44s** |
| E2E - Chromium | 23 | 23 | 0 | 0 | ~25s |
| E2E - Firefox | 23 | 23 | 0 | 0 | ~40s |
| E2E - Mobile Chrome | 23 | 23 | 0 | 0 | ~20s |
| **E2E Total** | **69** | **69** | **0** | **0** | **1.0m** |
| **Grand Total** | **148** | **148** | **0** | **0** | **~1.1m** |

## Coverage
| Metric | Percentage |
|--------|-----------|
| Statements | 100% |
| Branches | 89.87% |
| Functions | 100% |
| Lines | 100% |

### Per-File Coverage
| File | Stmts | Branch | Funcs | Lines | Uncovered |
|------|-------|--------|-------|-------|-----------|
| CVHeader.tsx | 100% | 100% | 100% | 100% | - |
| CareerTimeline.tsx | 100% | 83.33% | 100% | 100% | Line 10 (months > 0 branch) |
| Courses.tsx | 100% | 100% | 100% | 100% | - |
| Education.tsx | 100% | 100% | 100% | 100% | - |
| LanguageProficiency.tsx | 100% | 100% | 100% | 100% | - |
| ProfessionalSummary.tsx | 100% | 100% | 100% | 100% | - |
| References.tsx | 100% | 100% | 100% | 100% | - |
| TechnicalSkills.tsx | 100% | 100% | 100% | 100% | - |
| WorkExperience.tsx | 100% | 85.71% | 100% | 100% | Lines 84,105,112 (keyword conditional branches) |
| utils.ts | 100% | 100% | 100% | 100% | - |
| Index.tsx | 100% | 100% | 100% | 100% | - |
| NotFound.tsx | 100% | 100% | 100% | 100% | - |

## Failed Tests
None. All 148 tests passed.

## Test Files Breakdown
### Unit Tests (13 files, 67 tests)
- `src/components/__tests__/CVHeader.test.tsx` - 9 tests
- `src/components/__tests__/ProfessionalSummary.test.tsx` - 5 tests
- `src/components/__tests__/CareerTimeline.test.tsx` - 5 tests
- `src/components/__tests__/TechnicalSkills.test.tsx` - 6 tests
- `src/components/__tests__/LanguageProficiency.test.tsx` - 4 tests
- `src/components/__tests__/WorkExperience.test.tsx` - 7 tests
- `src/components/__tests__/Education.test.tsx` - 4 tests
- `src/components/__tests__/Courses.test.tsx` - 4 tests
- `src/components/__tests__/References.test.tsx` - 7 tests
- `src/pages/__tests__/Index.test.tsx` - 5 tests
- `src/pages/__tests__/NotFound.test.tsx` - 4 tests
- `src/lib/__tests__/utils.test.ts` - 7 tests
- `src/hooks/__tests__/use-mobile.test.ts` - 4 tests

### Integration Tests (2 files, 9 tests)
- `src/__tests__/integration/App.integration.test.tsx` - 4 tests
- `src/__tests__/integration/CVPage.integration.test.tsx` - 5 tests

### E2E Tests (4 files, 23 tests x 3 browsers = 69 runs)
- `e2e/cv-page.spec.ts` - 8 tests (page load, sections, image, links, footer)
- `e2e/navigation.spec.ts` - 4 tests (routing, 404, home link)
- `e2e/responsive.spec.ts` - 5 tests (mobile, tablet, desktop, overflow checks)
- `e2e/accessibility.spec.ts` - 6 tests (lang, alt text, headings, external links, fonts)

## Warnings (Non-blocking)
- React Router v6 future flag warnings (v7_startTransition, v7_relativeSplatPath) - informational only, no action needed until upgrading to React Router v7
- Vite deprecation warning: `optimizeDeps.esbuildOptions` specified by vite:react-swc plugin
- Browserslist data is 9 months old (cosmetic, does not affect builds)

## Recommendations
- **All tests pass** - code is ready for the analysis phase
- Branch coverage at 89.87% due to some conditional keyword rendering paths in WorkExperience.tsx and a ternary in CareerTimeline.tsx - acceptable for production
- Consider upgrading to React Router v7 in a future iteration to eliminate the future flag warnings
- No infrastructure issues, no flaky tests detected
