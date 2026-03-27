# Build Report
**Date:** 2026-03-27 14:30 UTC
**Branch:** main
**Commit:** 835f380bd27f4035810fb8a73882fb964ef00974

## Pre-Build Checks
| Check | Status | Details |
|-------|--------|---------|
| Lint | PASS | No errors in source code |
| TypeScript | PASS | Zero type errors |
| Tests | PASS | 15/15 files, 79/79 tests |
| Critical files | PASS | All 6 files present |

## Build Output
- **Tool:** Vite 5.4.19
- **Duration:** 2.51s
- **Modules transformed:** 1,674
- **Output dir:** dist/
- **Total size:** 874KB
- **Total files:** 13

## Bundle Analysis
| Asset | Raw Size | Gzipped |
|-------|----------|---------|
| JS bundle (`index-MiMixrjV.js`) | 348.94 KB | 109.10 KB |
| CSS bundle (`index-Z7rmmeq7.css`) | 61.73 KB | 11.11 KB |
| index.html | 1.18 KB | 0.53 KB |
| Logos (5 images) | ~416 KB | - |
| Media (2 files) | ~36 KB | - |
| **Total** | **~874 KB** | **~121 KB** (JS+CSS+HTML) |

## Bundle Size Assessment
- JS gzipped (109 KB) - **UNDER 500KB threshold** - OK
- CSS gzipped (11 KB) - **UNDER 100KB threshold** - OK

## Validation
| Check | Status |
|-------|--------|
| dist/ structure | PASS |
| index.html contains root div | PASS |
| JS bundle referenced & exists | PASS |
| CSS bundle referenced & exists | PASS |
| robots.txt present | PASS |
| CNAME present (cvbanczyk.pl) | PASS |
| Logos directory (5 images) | PASS |
| Media directory (2 files) | PASS |
| Preview server starts | PASS |

## Infrastructure Fix Applied
- **CNAME file was missing from `public/` directory** - copied `CNAME` to `public/CNAME` so Vite includes it in all future builds automatically. Previously it was only at root level and had to be manually copied to `dist/`.

## Warnings (Non-blocking)
- Browserslist data is 9 months old (cosmetic, does not affect builds)

## Status: READY FOR DEPLOYMENT
