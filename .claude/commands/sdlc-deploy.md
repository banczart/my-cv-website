# SDLC Deploy Agent

Automatically deploy the built application to the web server (GitHub Pages).

## When to use

Use this skill to deploy a verified build to production. This is **Step 5** (final step) of the agentic SDLC pipeline.

## Instructions

You are an autonomous deployment agent. Your job is to safely deploy the production build to GitHub Pages.

### Phase 1: Pre-Deployment Checks

1. **Verify build exists:**
   ```bash
   ls dist/index.html 2>&1
   ```
   - If `dist/` doesn't exist or is empty, STOP and recommend running the Build agent first

2. **Verify CNAME file:**
   ```bash
   cat dist/CNAME 2>&1 || echo "WARNING: No CNAME in dist"
   ```
   - If CNAME is missing from dist but exists in root, copy it:
   ```bash
   cp CNAME dist/CNAME 2>&1
   ```

3. **Verify git status:**
   ```bash
   git status 2>&1
   ```
   - Report any uncommitted changes
   - ASK the user if they want to commit changes before deploying

4. **Check current branch:**
   ```bash
   git branch --show-current 2>&1
   ```
   - Warn if not on `main` branch

5. **Verify remote is reachable:**
   ```bash
   git remote -v 2>&1
   ```

### Phase 2: Deployment

**IMPORTANT: Always ask the user for confirmation before deploying.**

Present the deployment summary:
```
DEPLOYMENT SUMMARY
==================
Repository: [repo URL]
Branch: [current branch]
Target: GitHub Pages (gh-pages branch)
Domain: cvbanczyk.pl
Build size: [total dist size]
Files: [file count]

Proceed with deployment? (yes/no)
```

After user confirmation, deploy:

```bash
npm run deploy 2>&1
```

This uses `gh-pages -d dist` which:
- Creates/updates the `gh-pages` branch
- Pushes the contents of `dist/` to that branch
- GitHub Pages serves from that branch

### Phase 3: Post-Deployment Verification

1. **Check deployment status:**
   ```bash
   git log gh-pages -1 --oneline 2>&1
   ```

2. **Verify GitHub Pages deployment** (if `gh` CLI is available):
   ```bash
   gh api repos/{owner}/{repo}/pages 2>&1 || echo "gh CLI not available"
   ```

3. **Wait for deployment propagation** (GitHub Pages can take 1-2 minutes):
   - Inform the user that deployment may take a minute to propagate

4. **Verify the live site** (optional - requires network access):
   - Check if `https://cvbanczyk.pl` responds
   - Verify the page title matches expected value

### Phase 4: Generate Deployment Report

Create `test-results/deploy-report.md`:

```markdown
# Deployment Report
**Date:** [current date/time]
**Deployed by:** Claude Code SDLC Pipeline
**Branch:** [source branch]
**Commit:** [commit hash]

## Deployment Details
- **Target:** GitHub Pages (gh-pages branch)
- **Domain:** cvbanczyk.pl
- **Build size:** [size]
- **Files deployed:** [count]

## Pre-Deployment Checks
| Check | Status |
|-------|--------|
| Build exists | PASS/FAIL |
| CNAME present | PASS/FAIL |
| Git clean | PASS/FAIL |
| Correct branch | PASS/FAIL |

## Deployment Status: SUCCESS / FAILED
- **gh-pages updated:** YES/NO
- **Live URL:** https://cvbanczyk.pl

## Post-Deployment
- [ ] Verify live site loads correctly
- [ ] Check all sections render properly
- [ ] Verify custom domain works
- [ ] Check mobile responsiveness
```

### Rollback Plan

If deployment fails or the live site has issues:

1. **Quick rollback** - redeploy the previous version:
   ```bash
   git log gh-pages --oneline -5 2>&1
   ```
   The user can revert the gh-pages branch to the previous commit.

2. **Manual fix** - if the issue is in the source code:
   - Run the full SDLC pipeline again (test → analyze → fix → build → deploy)

### Output

Provide the user with:
1. Deployment success/failure status
2. The live URL: https://cvbanczyk.pl
3. Reminder to verify the live site after 1-2 minutes
4. Rollback instructions if needed
