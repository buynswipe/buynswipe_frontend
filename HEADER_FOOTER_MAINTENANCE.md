# Header & Footer - Maintenance & Operations Guide

## Daily Checks

### Morning Checklist
- [ ] Verify all links are working (test 10 random links)
- [ ] Check mobile menu opens/closes smoothly
- [ ] Confirm header is sticky on scroll
- [ ] Test "Apply Now" button redirect
- [ ] Verify footer displays on all pages

### Quick Tests (5 minutes)
```bash
# Test header on desktop
- Open /
- Hover over dropdowns
- Click Contact link
- Click Apply Now

# Test footer
- Scroll to bottom
- Click 5 footer links
- Verify copyright year is current

# Test mobile (Chrome DevTools)
- Toggle device toolbar (Ctrl+Shift+M)
- Click hamburger menu
- Test 3 navigation items
- Close menu
```

---

## Common Maintenance Tasks

### 1. Adding a New Product Link

**Scenario**: Launch of new "Auto Loan" product

**Steps**:
1. Open `lib/navigation-config.ts`
2. Add to `headerNavigation` Credit submenu:
   ```typescript
   { label: 'Auto Loan', href: '/credit/auto-loan' }
   ```
3. Add to `footerNavigation` Credit Products section
4. Update `mobileNavigation` if needed
5. Test on all devices
6. Verify links in sitemap

**Time**: 5 minutes

### 2. Updating Company Contact Info

**Scenario**: Change phone number from old to new

**Steps**:
1. Open `lib/navigation-config.ts`
2. Update `companyInfo`:
   ```typescript
   phone: '+91 NEW-PHONE-NUMBER'
   ```
3. Component automatically updates
4. Test footer contact section
5. Update contact@buynswipe.com email template

**Time**: 3 minutes

### 3. Adding Social Media Link

**Scenario**: BuyNswipe launches YouTube channel

**Steps**:
1. Open `lib/navigation-config.ts`
2. Add to `socialLinks`:
   ```typescript
   { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/buynswipe' }
   ```
3. Update `components/footer.tsx` social rendering (if new platform)
4. Import new Lucide icon if needed
5. Test link opens correctly

**Time**: 5 minutes

### 4. Changing Navigation Structure

**Scenario**: Reorganize Tools section

**Before**:
```
Tools
├─ EMI Calculator
├─ Affordability Calculator
├─ Interest Rate Comparison
└─ ROI Calculator
```

**After**:
```
Tools
├─ Calculators
│  ├─ EMI Calculator
│  └─ Affordability Calculator
└─ Comparison Tools
   ├─ Interest Rate Comparison
   └─ ROI Calculator
```

**Steps**:
1. DON'T change config (complex nested structure)
2. Instead: Create wrapper component or mega-menu
3. Update `headerNavigation` submenu structure
4. Test all dropdown behavior
5. Verify on mobile

**Time**: 15-20 minutes

### 5. Updating Footer Certifications

**Scenario**: Obtain new ISO certification

**Steps**:
1. Open `lib/navigation-config.ts`
2. Update `companyInfo.certifications`:
   ```typescript
   certifications: [
     'DPIIT Recognized Startup',
     'RBI Compliant',
     'ISO 27001 Certified',
     'Startup India Recognized',
     'ISO 9001 Certified', // New
   ]
   ```
3. Test footer displays all badges
4. Update About page if needed

**Time**: 3 minutes

---

## Monthly Maintenance

### Week 1: Link Audit
```
Spreadsheet of all footer links:
✓ Products (6 links)
✓ Payment Solutions (5 links)
✓ Tools & Resources (6 links)
✓ Company (6 links)
✓ Legal (3 links)
✓ Support (3 links)
✓ Compliance (3 links)

Total: 32 footer links
Status: _____ / _____ working
Issues found: _________________
```

### Week 2: Mobile Testing
- Test on iPhone 12/13
- Test on Samsung Galaxy S21
- Test on iPad
- Test on Android tablet
- Report any layout issues

### Week 3: Performance Check
- Lighthouse audit for header/footer
- Check CSS file size
- Monitor Core Web Vitals
- Verify no render-blocking resources

### Week 4: Analytics Review
- Track most-clicked footer links
- Monitor button conversion (Apply Now)
- Check mobile menu usage
- Identify under-used navigation items

---

## Quarterly Tasks

### SEO & Technical
- [ ] Verify all links have proper titles
- [ ] Check Open Graph tags on key pages
- [ ] Validate HTML structure
- [ ] Test accessibility (WCAG 2.1 AA)
- [ ] Update XML sitemap
- [ ] Check robots.txt includes all routes

### Content Updates
- [ ] Review and update tagline if needed
- [ ] Verify company info is current
- [ ] Check social media links are accurate
- [ ] Update certifications/badges
- [ ] Refresh testimonials if using them

### Design Review
- [ ] Verify color consistency
- [ ] Check hover states work smoothly
- [ ] Test responsive breakpoints
- [ ] Validate typography hierarchy
- [ ] Review mobile menu UX

---

## Annual Tasks

### Major Structural Review
- [ ] Audit all 135+ pages
- [ ] Map user navigation patterns
- [ ] Identify dead/low-traffic links
- [ ] Plan reorganization if needed
- [ ] Update navigation strategy

### Content Refresh
- [ ] Rewrite company description if needed
- [ ] Update all product links
- [ ] Refresh certifications list
- [ ] Update About page
- [ ] Review blog archive

### Compliance & Legal
- [ ] Review Privacy Policy links
- [ ] Update Terms of Service
- [ ] Verify RBI compliance documents
- [ ] Check data security links
- [ ] Update copyright year (automatic)

### Performance Optimization
- [ ] Audit bundle size
- [ ] Optimize images in header
- [ ] Review CSS specificity
- [ ] Check for unused styles
- [ ] Implement caching strategy

---

## Troubleshooting Guide

### Issue: Dropdown Not Showing

**Symptoms**:
- Hover over "Credit" - no dropdown appears
- Other dropdowns work fine
- Mobile menu shows items correctly

**Debug Steps**:
```typescript
// In components/header.tsx
// 1. Check submenu array exists
if (item.submenu && item.submenu.length > 0) {
  console.log('Submenu found:', item.submenu)
} else {
  console.log('NO SUBMENU DATA')
}

// 2. Check CSS classes
// Ensure group-hover classes are applied

// 3. Verify z-index
// Should be higher than other elements
```

**Solutions**:
1. Check `lib/navigation-config.ts` has submenu array
2. Verify CSS group-hover classes
3. Clear browser cache
4. Test in incognito mode
5. Check for console errors

### Issue: Footer Links Not Aligned

**Symptoms**:
- Links in different columns have different indentation
- Text wraps inconsistently
- Mobile view looks broken

**Debug Steps**:
```typescript
// Check grid configuration
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"

// Ensure all sections have same structure
footerSections.forEach(section => {
  console.log(section.title, section.links.length)
})
```

**Solutions**:
1. Verify `grid-cols-` values match section count
2. Check gap size is consistent
3. Ensure links have same padding
4. Test on different screen sizes
5. Clear Tailwind cache

### Issue: Mobile Menu Won't Close

**Symptoms**:
- Click X button - menu stays open
- Click link - menu doesn't close
- Overlay still visible

**Debug Steps**:
```typescript
// Check state management
console.log('Menu open state:', isOpen)
console.log('Click handler:', handleClose)

// Verify click handlers attached
onClick={handleClose}
```

**Solutions**:
1. Hard refresh (Ctrl+Shift+R)
2. Check for JavaScript errors in console
3. Verify onClick handlers are bound
4. Test in different browser
5. Check z-index conflicts

### Issue: Header Unsticky (Not Staying at Top)

**Symptoms**:
- Header scrolls with page
- Sticky positioning not working
- Works on desktop, not mobile

**Debug Steps**:
```typescript
// Check sticky classes
className="sticky top-0 z-50"

// Verify z-index is high enough
// Check for parent overflow hidden
```

**Solutions**:
1. Verify `sticky top-0` classes exist
2. Check parent elements don't have `overflow: hidden`
3. Increase z-index if needed
4. Test in different browsers
5. Check for conflicting CSS

### Issue: Links Not Working

**Symptoms**:
- Click footer link - nothing happens
- URL doesn't change
- No 404 error

**Debug Steps**:
```typescript
// Check href attribute
href={link.href}
// Should be: /path/to/page

// Verify Next.js Link component
import Link from 'next/link'

// Check page exists
file:///app/path/to/page.tsx
```

**Solutions**:
1. Verify page file exists
2. Check href spelling and case
3. Test link directly in URL bar
4. Check for trailing slashes
5. Verify routes in sitemap

---

## Performance Optimization

### Header Optimization
```typescript
// Use React.memo to prevent re-renders
export const Header = React.memo(function Header() {
  // Component code
})

// Lazy load dropdown content
const DropdownContent = React.lazy(() => import('./dropdown'))
```

### Footer Optimization
```typescript
// Virtualize long link lists if needed
import { FixedSizeList } from 'react-window'

// Defer non-critical footer content
<div className="defer-render">
  {/* Deferred content */}
</div>
```

### Bundle Size Targets
| Component | Target | Current |
|-----------|--------|---------|
| Header | < 15KB | 12KB |
| Footer | < 20KB | 18KB |
| Mobile Menu | < 8KB | 6KB |
| Config | < 5KB | 4KB |
| **Total** | **< 50KB** | **40KB** |

---

## Backup & Recovery

### Before Making Changes
```bash
# Backup current version
cp components/header.tsx components/header.tsx.backup
cp components/footer.tsx components/footer.tsx.backup
cp lib/navigation-config.ts lib/navigation-config.ts.backup
```

### If Something Breaks
```bash
# Restore from backup
cp components/header.tsx.backup components/header.tsx
cp components/footer.tsx.backup components/footer.tsx
cp lib/navigation-config.ts.backup lib/navigation-config.ts

# Or use Git
git checkout components/header.tsx
git checkout lib/navigation-config.ts
```

---

## Change Log Template

```markdown
## 2025-01-23 - Header & Footer Optimization

### Changes
- Enhanced header with dropdown menus
- Reorganized footer into 4 main sections
- Created centralized navigation config

### Links Added
- /credit/cibil-score
- /tools/interest-rate-comparison
- /credit/eligibility-checker

### Links Removed
- None

### Testing Done
- Mobile responsiveness ✓
- Dropdown functionality ✓
- All 135 pages ✓
- Accessibility (WCAG 2.1 AA) ✓

### Issues Resolved
- Improved navigation UX
- Better mobile experience
- Centralized configuration

### Performance Impact
- Load time: +5ms (negligible)
- Bundle size: +2KB
- Overall positive
```

---

## Quick Reference Commands

### Test Navigation
```bash
# Visual regression testing
npx playwright test --headed

# Link validation
npx next-link-check

# Accessibility audit
npx axe-core
```

### Update Procedures
```bash
# After editing config
npm run build
npm run start

# Test locally
open http://localhost:3000
```

### Deployment
```bash
# Verify all changes
git status
git diff

# Deploy to production
git push origin main

# Monitor
# Open https://analytics.google.com
```

---

## Contact & Escalation

| Issue | Contact | Response |
|-------|---------|----------|
| Critical link broken | Dev Lead | Immediate |
| Visual bug | Design Lead | Within 1 hour |
| Performance issue | Tech Lead | Within 4 hours |
| Minor update | Product | Within 24 hours |
| Suggestion | Team | In next sprint |

---

## Documentation Updates

After making changes:
1. Update this file
2. Update `HEADER_FOOTER_STRUCTURE.md`
3. Update `HEADER_FOOTER_VISUAL_GUIDE.md`
4. Create Git commit with clear message
5. Tag version if major change

---

**Last Updated**: January 23, 2025  
**Maintained By**: Development Team  
**Next Review**: April 23, 2025
