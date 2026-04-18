# Complete Deployment Setup Guide for BuyNswipe

## Overview

This guide explains how to set up and configure your CI/CD pipeline for seamless PR-to-deployment workflow using GitHub Actions and Vercel.

---

## What Was Missing (Root Cause Analysis)

Your deployment was failing because:

1. **No GitHub Actions Workflows** - No CI/CD pipeline to validate code before deployment
2. **No Vercel Configuration** - Missing project configuration and environment setup
3. **No Build Validation** - No automated testing or type checking during PRs
4. **Missing Environment Variables** - Vercel didn't have required secrets configured

---

## Setup Instructions

### Step 1: Configure GitHub Secrets

You need to add 3 secrets to your GitHub repository:

1. Go to: `Settings` → `Secrets and variables` → `Actions`
2. Add these secrets:

| Secret Name | What It Is | Where to Find |
|-------------|-----------|---------------|
| `VERCEL_TOKEN` | Authentication token for Vercel | [Vercel Settings](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel organization ID | Vercel Dashboard → Settings → Team ID |
| `VERCEL_PROJECT_ID` | Your project ID in Vercel | Vercel Project Settings |

**How to get VERCEL_TOKEN:**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "GitHub Actions"
4. Copy and paste into GitHub Secrets as `VERCEL_TOKEN`

**How to get VERCEL_ORG_ID and VERCEL_PROJECT_ID:**
1. Go to your Vercel project
2. Click "Settings"
3. Copy "Project ID" and "Team ID" (if applicable)

### Step 2: Update Next.js Configuration

The `next.config.mjs` file is already optimized, but ensure it includes:
- TypeScript error ignoring (for strict mode compatibility)
- Image optimization disabled (for edge deployment)

✅ Already configured correctly.

### Step 3: Verify Package.json Scripts

Your `package.json` has these scripts:
- `npm run dev` - Local development
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Code linting

✅ All required scripts present.

---

## How the Deployment Pipeline Works

### When You Open a PR:

```
1. Code pushed to GitHub
   ↓
2. GitHub Actions triggers build job
   ↓
3. Install dependencies (npm ci)
   ↓
4. Run linting checks
   ↓
5. Run TypeScript type checking
   ↓
6. Build the application
   ↓
7. Deploy preview to Vercel (if PR approved)
   ↓
8. Add deployment link to PR comments
```

### When You Merge to main/master:

```
1. Code merged to main
   ↓
2. GitHub Actions triggers build job
   ↓
3. All validation tests run
   ↓
4. Production deployment to Vercel
   ↓
5. All traffic routed to new version
```

---

## Files Added to Your Project

### 1. `.github/workflows/deploy.yml` (97 lines)
- Complete CI/CD pipeline configuration
- Build validation on every PR
- Automatic deployment on merge
- Multi-node version testing (18.x, 20.x)

### 2. `vercel.json` (16 lines)
- Vercel project configuration
- Build command settings
- Environment variable declarations
- Region selection

### 3. `.eslintrc.json` (16 lines)
- Code quality rules
- React hooks validation
- Console log restrictions
- Next.js specific rules

---

## Testing Your Deployment

### Test 1: Verify GitHub Actions Configuration

1. Go to your GitHub repository
2. Click "Actions" tab
3. You should see "Deploy to Vercel" workflow
4. Make a small change and push to a branch
5. Create a PR - the workflow should trigger automatically

### Test 2: Check Build Status

1. In the PR, scroll down to "Checks" section
2. You should see:
   - `build-and-test` ✅ PASSED
   - `pr-preview` ✅ PASSED (after Vercel setup)
3. A preview URL will be added as a comment

### Test 3: Test Production Deployment

1. Merge PR to main/master
2. Go to Actions tab
3. Watch the deployment workflow complete
4. Vercel will update your production site

---

## Common Issues and Solutions

### Issue: "Secrets not found" Error

**Solution:**
- Go to GitHub Settings → Secrets
- Add all 3 required secrets
- Restart the workflow by pushing a new commit

### Issue: "Vercel project not found"

**Solution:**
- Verify VERCEL_PROJECT_ID is correct
- Make sure you're using the right organization ID
- Check that the project exists in Vercel dashboard

### Issue: "Build fails with TypeScript errors"

**Solution:**
- Run `npm run build` locally to see errors
- Fix TypeScript issues in your code
- Commit and push to trigger workflow again

### Issue: "ESLint failures"

**Solution:**
- Run `npm run lint` locally
- Fix linting errors or update `.eslintrc.json` rules
- Commit and push

### Issue: "Vercel deployment preview not created"

**Solution:**
- Check that VERCEL_TOKEN has correct permissions
- Ensure VERCEL_ORG_ID matches your organization
- Verify workflow has `github-token: ${{ secrets.GITHUB_TOKEN }}`

---

## Environment Variables

### Required for Deployment

The following are already configured in `vercel.json`:
- `NEXT_PUBLIC_APP_NAME` = "BuyNswipe Credit"
- `NEXT_PUBLIC_APP_URL` = "https://buynswipe.com"

### If You Need Additional Variables

1. Add to `vercel.json` in the `env` section
2. Or add directly in Vercel dashboard:
   - Project Settings → Environment Variables
   - Add for Development, Preview, and Production

---

## Deployment Status Dashboard

After setting up, you can monitor deployments at:
- **GitHub Actions**: `https://github.com/[user]/[repo]/actions`
- **Vercel Deployments**: `https://vercel.com/[team]/[project]/deployments`

---

## Next Steps

1. ✅ Add the 3 GitHub Secrets
2. ✅ Push changes to your repository
3. ✅ Create a test PR
4. ✅ Verify GitHub Actions runs
5. ✅ Check Vercel preview deployment
6. ✅ Merge PR to production
7. ✅ Confirm production deployment

---

## Support & Monitoring

### Check Deployment Logs

1. GitHub Actions: `Actions` tab → Select workflow → View logs
2. Vercel: Project → `Deployments` tab → Click deployment → View logs

### Monitor Build Performance

GitHub Actions shows:
- Build duration
- Install time
- Test execution time
- Deployment time

### Set Up Alerts

In Vercel:
- Settings → Integrations
- Enable GitHub integration for PR comments
- Get instant notifications for deployment status
