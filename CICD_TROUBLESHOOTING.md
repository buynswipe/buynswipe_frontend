# CI/CD Pipeline Troubleshooting Guide

## Quick Diagnostics

### Symptom: PR shows "An unexpected error occurred"

**Root Cause:** GitHub Actions workflow not triggering or failing silently

**Solution:**
1. Check GitHub Actions tab: `https://github.com/[user]/[repo]/actions`
2. Look for failed workflow runs
3. Click the failed run to see error logs
4. Common fixes below...

---

## Error Messages & Solutions

### Error 1: "Resource not accessible by integration"

**Cause:** Missing GitHub Secrets

**Fix:**
```
Settings → Secrets and variables → Actions
Add:
- VERCEL_TOKEN (from Vercel)
- VERCEL_ORG_ID (from Vercel)
- VERCEL_PROJECT_ID (from Vercel)
```

---

### Error 2: "npm: dependencies not found"

**Cause:** npm install failed or npm ci not run

**Fix:**
1. Check Node.js version (should be 18.x or 20.x)
2. Delete `package-lock.json` and regenerate:
   ```bash
   rm package-lock.json
   npm install
   git add package-lock.json
   git commit -m "Update lock file"
   ```

---

### Error 3: "TypeScript compilation failed"

**Cause:** Type errors in your code

**Fix:**
1. Run locally: `npx tsc --noEmit`
2. Fix all type errors
3. Commit and push to re-trigger workflow

---

### Error 4: "Vercel deployment failed"

**Cause:** Invalid Vercel credentials or configuration

**Fix:**
1. Verify all 3 secrets are correctly set
2. Test VERCEL_TOKEN locally:
   ```bash
   npm install -g vercel
   vercel --token YOUR_TOKEN
   ```
3. Check `vercel.json` configuration
4. Re-create secrets if they're old

---

### Error 5: "Build timed out after 60 minutes"

**Cause:** Build is too slow or stuck

**Fix:**
1. Optimize dependencies (remove unused packages)
2. Check for infinite loops in build
3. Increase Node.js memory:
   ```
   NODE_OPTIONS=--max-old-space-size=4096
   ```

---

## Local Testing Before PR

### Validate Everything Locally

```bash
# 1. Install dependencies exactly as CI does
npm ci

# 2. Run linting
npm run lint

# 3. Type checking
npx tsc --noEmit

# 4. Build application
npm run build

# 5. Test the build
npm start
```

If all pass locally, they should pass in CI.

---

## Debug Specific Jobs

### Job: build-and-test

Check logs for:
- Node.js version compatibility
- Missing peer dependencies
- Environment variable issues

Fix:
```bash
npm ci --verbose
npm run build --verbose
```

### Job: deploy-to-vercel

Check logs for:
- Invalid VERCEL_TOKEN (expired or revoked)
- VERCEL_ORG_ID mismatch
- VERCEL_PROJECT_ID not found

Fix:
1. Generate new VERCEL_TOKEN
2. Verify org and project IDs match exactly
3. Ensure token has "Full Access" permissions

### Job: pr-preview

Similar to deploy-to-vercel but creates preview URLs

Check:
- Vercel organization has preview deployments enabled
- GitHub integration is connected in Vercel

---

## Advanced Diagnostics

### Enable Debug Logging in GitHub Actions

Add to workflow file:
```yaml
env:
  ACTIONS_STEP_DEBUG: true
```

Then re-run failed job with "Enable debug logging"

### Monitor Build Performance

GitHub Actions shows timing for each step:
- Checkout: Should be <5s
- Setup Node: Should be <30s
- npm ci: Should be <2 min
- Linting: Should be <1 min
- Build: Should be <3 min
- Deploy: Should be <2 min

If any step exceeds normal time, it's the bottleneck.

### Check Disk Space

If build fails unexpectedly:
```bash
# Add to workflow
- name: Check disk space
  run: df -h
```

GitHub Actions runners typically have 35GB available.

---

## Reset and Recover

### Option 1: Recreate All Secrets

1. Delete all 3 secrets from GitHub
2. Delete workflow runs from Actions tab (optional)
3. Get new VERCEL_TOKEN from Vercel
4. Re-add all secrets
5. Push a new commit to trigger workflow

### Option 2: Disable and Re-enable Workflow

1. Go to Actions → Deploy to Vercel
2. Click "..." menu → Disable workflow
3. Wait 30 seconds
4. Click "..." menu → Enable workflow
5. Push a new commit

### Option 3: Clear Vercel Cache

1. Go to Vercel project
2. Settings → Git → Redeploy
3. Or delete project and reconnect from GitHub

---

## Monitoring Checklist

After fixing deployment issues:

- [ ] GitHub Actions workflow shows all jobs passing ✅
- [ ] PR preview deployment URL created in comments
- [ ] Can visit preview URL and see no errors in browser console
- [ ] Merged to main/master triggers production deployment
- [ ] Production URL works without errors
- [ ] No "An unexpected error occurred" messages
- [ ] Performance is normal (<3s load time)
- [ ] All interactive features work (calculators, forms)

---

## Getting Help

### Check These First:

1. **GitHub Actions Logs**: Actions → Select workflow → See full logs
2. **Vercel Deployment Logs**: Project → Deployments → Select deployment
3. **Browser Console Errors**: Open browser DevTools (F12) → Console tab
4. **Application Logs**: Check Next.js server logs if self-hosted

### Contact Vercel Support

- URL: https://vercel.com/help
- Include: Workflow logs, error messages, VERCEL_PROJECT_ID

### Contact GitHub Support

- URL: https://github.com/support
- Include: Repository name, workflow file, error logs

---

## Prevention Tips

1. **Test locally before pushing**
2. **Keep dependencies updated**: `npm audit`
3. **Monitor workflow runs** in GitHub Actions tab
4. **Set up email notifications** for failed deployments
5. **Review workflow logs regularly** for slow steps
6. **Use semantic versioning** for releases
7. **Document any custom environment variables**
8. **Back up secrets** (not in version control!)
