# Pre-Deployment Checklist

Use this checklist before deploying to GitHub Pages.

## 📋 Configuration Updates

### 1. vite.config.js
- [ ] Uncomment the `base` line
- [ ] Replace `/nepal-budget-slideshow/` with your actual repository name
- [ ] Ensure it has a leading and trailing slash (e.g., `/my-repo/`)

```javascript
base: '/YOUR-REPO-NAME/', // ⚠️ Update this!
```

### 2. index.html Meta Tags
- [ ] Replace `yourusername` with your GitHub username (5 occurrences)
- [ ] Replace `nepal-budget-slideshow` with your repo name (5 occurrences)
- [ ] Update `og:url` meta tag
- [ ] Update `og:image` meta tag
- [ ] Update `twitter:url` meta tag
- [ ] Update `twitter:image` meta tag
- [ ] Update JSON-LD `url` field

**Search and replace**:
- Find: `yourusername` → Replace with: `YOUR-GITHUB-USERNAME`
- Find: `nepal-budget-slideshow` → Replace with: `YOUR-REPO-NAME`

### 3. README.md
- [ ] Update the live demo URL (line 27)
- [ ] Update clone command with your repo URL (line 42)
- [ ] Update repository name in examples (lines 60, 82, 104)
- [ ] Add your contact information (optional, line 253)

## 🎨 Optional Enhancements

### Social Media Image
- [ ] Create a 1200x630px Open Graph image
- [ ] Save as `public/og-image.png`
- [ ] Test how it looks using [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### Favicon
- [ ] Customize `public/favicon.svg` with your own icon (optional)

### Analytics (Optional)
- [ ] Add Google Analytics or Plausible tracking code to `index.html`

## 🧪 Testing

### Local Testing
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run dev` and test all features
- [ ] Run `npm run build` to ensure build succeeds
- [ ] Run `npm run preview` to test production build locally
- [ ] Test on mobile device or browser DevTools mobile view

### Feature Testing
- [ ] All 12 sectors load correctly
- [ ] Slideshow navigation works (arrows, dots, sidebar)
- [ ] Keyboard shortcuts work (arrow keys, Escape)
- [ ] Touch/swipe gestures work on mobile
- [ ] Budget comparison cards display correctly
- [ ] Nepali text renders properly (Devanagari script)
- [ ] Images load without errors
- [ ] Scrolling works on long content
- [ ] No console errors in browser DevTools

## 🚀 Deployment

### GitHub Repository
- [ ] Create repository on GitHub
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Initialize git locally: `git init`
- [ ] Add remote: `git remote add origin <your-repo-url>`

### Choose Deployment Method

#### Option A: GitHub Actions (Automated)
- [ ] `.github/workflows/deploy.yml` file exists
- [ ] Push code to GitHub: `git push -u origin main`
- [ ] Go to Settings → Pages → Source: **GitHub Actions**
- [ ] Monitor deployment in Actions tab
- [ ] Verify site is live

#### Option B: Manual Deployment
- [ ] Install gh-pages: `npm install --save-dev gh-pages`
- [ ] Run: `npm run deploy`
- [ ] Go to Settings → Pages → Source: **Deploy from a branch**
- [ ] Select branch: `gh-pages`, folder: `/ (root)`
- [ ] Verify site is live

## ✅ Post-Deployment Verification

### Site Functionality
- [ ] Visit your GitHub Pages URL
- [ ] Site loads without errors
- [ ] All sectors are clickable
- [ ] Slideshow works correctly
- [ ] Images load properly
- [ ] Fonts render correctly (including Nepali)
- [ ] Mobile responsive design works
- [ ] No 404 errors in Network tab

### SEO & Social Media
- [ ] Test Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Card with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify site appears in Google Search Console (after a few days)

### Performance (Optional)
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Check PageSpeed Insights score
- [ ] Verify Core Web Vitals

## 📝 Documentation

- [ ] Update README.md with actual live URL
- [ ] Add screenshots to README (optional)
- [ ] Document any custom modifications
- [ ] Add LICENSE file if needed

## 🎉 Launch

- [ ] Share your site URL
- [ ] Post on social media (test OG image)
- [ ] Add to your portfolio
- [ ] Star the repository ⭐

---

## Quick Reference

**Your GitHub Pages URL format**:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Key files to update**:
1. `vite.config.js` - base path
2. `index.html` - meta tags (5 URLs)
3. `README.md` - live demo URL

**Deploy commands**:
- Automated: `git push origin main`
- Manual: `npm run deploy`

---

**Need help?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.
