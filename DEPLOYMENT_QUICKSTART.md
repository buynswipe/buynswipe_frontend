# Deployment Quick Start Checklist

## 5-Minute Setup

Follow these steps to activate deployment pipeline:

### Step 1: Create Vercel Secrets (2 minutes)

1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name: "GitHub Actions"
4. Expiration: 90 days
5. **Copy the token** (save for Step 3)

### Step 2: Get Vercel IDs (1 minute)

1. Go to your Vercel project dashboard
2. Click "Settings"
3. Note down:
   - **Project ID** (top of settings)
   - **Team ID** (if using team account)

### Step 3: Add GitHub Secrets (2 minutes)

1. Go to GitHub repository
2. Click "Settings" tab
3. Left menu: "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add 3 secrets:

```
Name: VERCEL_TOKEN
Value: [Paste from Step 1]

Name: VERCEL_ORG_ID
Value: [Team ID or your username from Step 2]

Name: VERCEL_PROJECT_ID
Value: [Project ID from Step 2]
```

### Step 4: Test Deployment (1 minute)

1. Push any change to GitHub
2. Go to "Actions" tab
3. Watch "Deploy to Vercel" workflow run
4. Wait for ✅ All green checks
5. PR or main should show deployment link

---

## Verification

After setup, verify with:

```bash
# Test 1: Build locally
npm run build

# Test 2: Lint code
npm run lint

# Test 3: Type check
npx tsc --noEmit

# All should pass ✅
```

---

## The 3 Things You Added

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Runs tests and deploys |
| `vercel.json` | Tells Vercel how to build |
| `.eslintrc.json` | Enforces code quality |

---

## Workflow Triggers

Your deployment pipeline now auto-triggers on:

- **Every PR** → Creates preview URL
- **Every push to main/master** → Deploys to production
- **Manual trigger** → Go to Actions → Deploy to Vercel → Run workflow

---

## When Deployment Fails

Check in this order:

1. **GitHub Actions logs** → Settings tab → Actions → Latest run
2. **Vercel logs** → Vercel dashboard → Deployments tab
3. **Build errors** → Run `npm run build` locally
4. **Type errors** → Run `npx tsc --noEmit` locally
5. **Lint errors** → Run `npm run lint` locally

---

## Common Issues (Copy-Paste Solutions)

### "Resource not accessible by integration"
**Solution:** Check all 3 secrets are added in GitHub Settings

### "Vercel project not found"
**Solution:** Verify PROJECT_ID matches exactly in GitHub Secrets

### "npm dependencies not found"
**Solution:** Delete `package-lock.json` and run `npm install`

### "Build failed"
**Solution:** Run `npm run build` locally and fix errors before pushing

### "Type checking failed"
**Solution:** Run `npx tsc --noEmit` locally and fix TypeScript errors

---

## Success Indicators

After proper setup:

✅ PR opens → GitHub Actions runs automatically
✅ Green checkmarks appear on PR
✅ Preview URL posted in PR comments
✅ Merge to main → Production deploys automatically
✅ No "An unexpected error occurred" messages

---

## Files Reference

For more details, see:
- `DEPLOYMENT_SETUP_GUIDE.md` - Detailed setup instructions
- `CICD_TROUBLESHOOTING.md` - Problem-solving guide
- `DEPLOYMENT_INFRASTRUCTURE_SUMMARY.md` - Complete architecture overview
