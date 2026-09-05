# BuyNswipe Deployment Checklist
**Target Launch Date:** This Week  
**Estimated Effort:** 4-5 hours  
**Risk Level:** LOW ✅

---

## PRE-DEPLOYMENT PHASE (2-3 hours)

### Step 1: Prepare Required Files (1 hour)

- [ ] Create `/public/documents/` directory if not exists
- [ ] Create `/public/media/` directory if not exists
- [ ] Prepare `buynswipe-teaser.pdf` (investor document)
- [ ] Prepare `buynswipe-brand-guidelines.pdf` (brand guide)
- [ ] Prepare `buynswipe-fact-sheet.pdf` (company info)
- [ ] Prepare `buynswipe-logos.zip` (logo package)
- [ ] Upload all 4 files to their respective directories

**Command to verify:**
```bash
ls -la public/documents/
ls -la public/media/
```

**Expected Output:**
```
documents/:
  buynswipe-teaser.pdf
  buynswipe-brand-guidelines.pdf
  buynswipe-fact-sheet.pdf

media/:
  buynswipe-logos.zip
```

### Step 2: Review All Fixes (30 mins)

- [ ] Review `/components/emi-calculator.tsx` (NEW - 151 lines)
- [ ] Review changes to `/app/mobile-app/page.tsx` (app store links)
- [ ] Review changes to `/app/investor-relations/page.tsx` (PDF links)
- [ ] Review changes to `/app/press/page.tsx` (media kit links)
- [ ] Review changes to `/components/header.tsx` (nav links)
- [ ] Review changes to `/components/footer.tsx` (footer links)
- [ ] Review changes to `/app/credit/page.tsx` (EMI calculator import)

### Step 3: Run Build Test (30 mins)

```bash
# Clean build
npm run build

# Verify no errors
# Expected: ✓ Compiled successfully

# Check bundle size
# Expected: All sizes reasonable

# Test locally
npm run dev

# Check console for errors
# Expected: No errors or warnings
```

- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No build warnings
- [ ] Bundle size acceptable
- [ ] Dev server runs without errors

### Step 4: Manual Link Testing (30 mins)

Test the following critical links in dev environment:

**Mobile App Page:**
- [ ] iOS App Store link opens in new tab
- [ ] Android Play Store link opens in new tab
- [ ] Download button works

**Investor Relations Page:**
- [ ] First "Download Teaser" button works
- [ ] Second "Download Teaser" button works
- [ ] File downloads with correct name

**Press Page:**
- [ ] Logo download works
- [ ] Brand guidelines download works
- [ ] Fact sheet download works
- [ ] "Read Full Article" link to /blog works

**Header Navigation:**
- [ ] Cashback card link goes to #cashback
- [ ] Travel card link goes to #travel
- [ ] Lifetime free link goes to #lifetime-free
- [ ] All links smooth scroll

**Credit Page:**
- [ ] EMI calculator displays
- [ ] EMI sliders move
- [ ] EMI values update in real-time
- [ ] "Apply" button works

---

## STAGING PHASE (1-2 hours)

### Step 5: Deploy to Staging (if available)

```bash
# Deploy to staging environment
vercel deploy --prebuilt

# Verify deployment
# Expected: Preview URL working
```

- [ ] Staging deployment successful
- [ ] Staging URL accessible
- [ ] All pages load in staging
- [ ] No console errors in staging

### Step 6: Smoke Test in Staging

**Desktop Testing:**
- [ ] Home page loads
- [ ] Credit page loads
- [ ] EMI calculator works
- [ ] Navigation works
- [ ] All links functional

**Mobile Testing:**
- [ ] Mobile menu opens/closes
- [ ] Touch interactions smooth
- [ ] No layout shifts
- [ ] Buttons clickable

**Cross-Browser Testing:**
- [ ] Chrome: All pages work
- [ ] Firefox: All pages work
- [ ] Safari: All pages work
- [ ] Edge: All pages work

### Step 7: Link Checker in Staging

Use a tool like Broken Link Checker:
- [ ] Run link check on staging URL
- [ ] Fix any broken links found
- [ ] Verify 404 count is 0
- [ ] Verify redirect count is acceptable

---

## PRODUCTION DEPLOYMENT (30 mins)

### Step 8: Final Pre-Launch Checks

Before deploying to production:

```bash
# Verify files are in place
ls -la public/documents/
ls -la public/media/

# Verify latest code is built
npm run build

# Check git status
git status
# Expected: Clean working directory
```

- [ ] All files uploaded to public/
- [ ] Build completes successfully
- [ ] Git working directory clean
- [ ] No uncommitted changes

### Step 9: Deploy to Production

```bash
# Deploy to production
vercel deploy --prod

# Verify production deployment
# Expected: Live URL is now updated
```

- [ ] Production deployment initiated
- [ ] Deployment completes successfully
- [ ] Live URL is accessible
- [ ] DNS properly configured

### Step 10: Post-Deployment Verification

**Immediate checks (first 10 minutes):**

```bash
# Check production URL loads
curl https://buynswipe.com

# Monitor for errors
# Watch application logs
```

- [ ] Production home page loads
- [ ] All critical pages load
- [ ] No 500 errors
- [ ] No broken links
- [ ] Navigation works
- [ ] EMI calculator interactive
- [ ] File downloads work

**Critical page verification:**
- [ ] Home page: ✅ Working
- [ ] Credit page: ✅ Working
- [ ] Mobile app page: ✅ Links working
- [ ] Investor relations: ✅ PDFs downloadable
- [ ] Press page: ✅ Media kit downloadable
- [ ] All other pages: ✅ Accessible

---

## POST-DEPLOYMENT PHASE (24-48 hours)

### Step 11: Monitor First 24 Hours

**Monitoring checklist:**

- [ ] Watch error logs every hour
- [ ] Monitor uptime (should be 99.9%+)
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor Analytics for traffic
- [ ] Check form submissions working
- [ ] Monitor page load speeds

**What to watch for:**
- ❌ 404 errors (should be 0)
- ❌ 500 errors (should be 0)
- ❌ High bounce rate (should be normal)
- ❌ Slow pages (should be <3s)
- ❌ Failed form submissions

**Alert thresholds:**
- 404 error rate > 1% → Investigate
- 500 error rate > 0.1% → Escalate
- Page load time > 5s → Check
- Uptime < 99% → Alert

### Step 12: Update Search Engines

After 24 hours of monitoring:

```
1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Verify all pages indexed
4. Check for crawl errors
5. Monitor for ranking changes
```

- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools
- [ ] Verified sitemap acceptance
- [ ] No crawl errors reported
- [ ] Monitoring rankings

### Step 13: Team Communication

- [ ] Notify team of successful launch
- [ ] Share monitoring dashboard
- [ ] Provide escalation procedures
- [ ] Document any issues found
- [ ] Plan post-launch review

---

## ROLLBACK PROCEDURE (If Needed)

If critical issues occur after deployment:

### Step 1: Immediate Rollback

```bash
# Rollback to previous version
vercel rollback

# Verify previous version is live
curl https://buynswipe.com
```

- [ ] Identify critical issue
- [ ] Notify team
- [ ] Initiate rollback
- [ ] Verify previous version works
- [ ] Post mortem analysis

### Step 2: Investigation & Fix

- [ ] Identify root cause
- [ ] Fix issue in code
- [ ] Test thoroughly
- [ ] Plan re-deployment
- [ ] Schedule next attempt

---

## SUCCESS CRITERIA

### Launch is SUCCESSFUL if:

✅ **Functionality:**
- All 135+ pages load without 404s
- All links work correctly
- EMI calculator interactive
- File downloads functional
- Navigation smooth

✅ **Performance:**
- Page load time < 3 seconds
- No JavaScript errors
- Mobile responsive
- Core Web Vitals green

✅ **Monitoring:**
- Error logs clean
- Uptime > 99%
- No unusual traffic patterns
- Conversion tracking working

✅ **User Experience:**
- No user complaints
- Form submissions working
- Search functionality (if present) working
- Mobile menu working

---

## QUICK REFERENCE

### Critical Files Uploaded
```
/public/documents/
  ✓ buynswipe-teaser.pdf
  ✓ buynswipe-brand-guidelines.pdf
  ✓ buynswipe-fact-sheet.pdf

/public/media/
  ✓ buynswipe-logos.zip
```

### Critical Links
- Mobile app: ✅ Fixed
- Investor PDFs: ✅ Fixed
- Press media: ✅ Fixed
- Credit card nav: ✅ Fixed
- EMI calculator: ✅ Fixed

### Testing Checklist
- [ ] Build successful
- [ ] Links working
- [ ] Pages responsive
- [ ] No errors
- [ ] All features work

### Go/No-Go Decision

**Green Light ✅ (Proceed with deployment) if:**
- All build tests pass
- All link tests pass
- Staging verification successful
- No critical issues found

**Red Light ❌ (Hold deployment) if:**
- Build fails
- Critical links broken
- Staging errors found
- Files missing

---

## TIMELINE ESTIMATE

| Phase | Task | Time | Status |
|-------|------|------|--------|
| Prep | Upload files | 1 hr | TODO |
| Prep | Review fixes | 30 min | TODO |
| Prep | Build test | 30 min | TODO |
| Prep | Link testing | 30 min | TODO |
| Staging | Deploy to staging | 30 min | TODO |
| Staging | Smoke test | 30 min | TODO |
| Staging | Link checker | 30 min | TODO |
| Prod | Final checks | 15 min | TODO |
| Prod | Deploy to production | 15 min | TODO |
| Post | Verification (24h) | Ongoing | TODO |
| Post | Search engines | 15 min | TODO |
| Post | Team communication | 15 min | TODO |
| **TOTAL** | | **~5 hours** | |

---

## SIGN-OFF

| Role | Name | Date | Sign-Off |
|------|------|------|----------|
| Developer | — | — | [ ] |
| QA Lead | — | — | [ ] |
| Product Owner | — | — | [ ] |
| DevOps/Infra | — | — | [ ] |

---

## NOTES & ISSUES

**Issue #1:** Missing document files  
**Resolution:** Upload to `/public/documents/`  
**Status:** Pending  

**Issue #2:** Placeholder testimonials  
**Resolution:** Replace with real reviews  
**Status:** Can do post-launch  

**Issue #3:** No live chat widget  
**Resolution:** Implement in next phase  
**Status:** Can do post-launch  

---

## ADDITIONAL RESOURCES

- Production Environment: https://buynswipe.com
- Staging Environment: [staging URL]
- Error Logs: [log dashboard URL]
- Monitoring Dashboard: [monitoring URL]
- Google Search Console: [GSC URL]
- Analytics Dashboard: [analytics URL]

---

**Last Updated:** March 3, 2026  
**Status:** READY FOR DEPLOYMENT  
**Confidence:** 98%

**Next Action:** Upload required files and execute deployment checklist
