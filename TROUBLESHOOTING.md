# Troubleshooting Guide

Common issues and their solutions when deploying to GitHub Pages.

## 🔴 Deployment Issues

### Issue: "Repository not found" when pushing

**Symptoms:**
```
remote: Repository not found.
fatal: repository 'https://github.com/username/repo.git/' not found
```

**Solutions:**
1. Verify the repository exists on GitHub
2. Check the remote URL:
   ```bash
   git remote -v
   ```
3. Update if incorrect:
   ```bash
   git remote set-url origin https://github.com/CORRECT-USERNAME/CORRECT-REPO.git
   ```
4. Make sure the repository is public (or you have access)

---

### Issue: Authentication failed when pushing

**Symptoms:**
```
remote: Support for password authentication was removed
fatal: Authentication failed
```

**Solution: Use Personal Access Token**

1. Go to GitHub: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Nepal Budget Deploy`
4. Select scopes: Check **`repo`** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. When pushing, use the token as your password:
   ```bash
   Username: your-github-username
   Password: ghp_xxxxxxxxxxxxxxxxxxxx (paste your token)
   ```

**Alternative: Use SSH**
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Copy your public key:
cat ~/.ssh/id_ed25519.pub

# Change remote to SSH
git remote set-url origin git@github.com:USERNAME/REPO.git
```

---

### Issue: GitHub Actions workflow fails

**Symptoms:**
- Red X in Actions tab
- Build fails with errors

**Common Causes & Solutions:**

**1. Wrong base path in vite.config.js**
```javascript
// ❌ Wrong
base: 'nepal-budget-slideshow'  // Missing slashes
base: '/wrong-repo-name/'       // Doesn't match actual repo

// ✅ Correct
base: '/nepal-budget-slideshow/'  // Must match repo name exactly
```

**2. Node version mismatch**
- Check `.github/workflows/deploy.yml`
- Ensure Node version is 18 or higher:
  ```yaml
  - uses: actions/setup-node@v4
    with:
      node-version: 18  # Or higher
  ```

**3. Missing dependencies**
```bash
# Locally test the build
npm ci
npm run build
```

**4. Check the error logs**
- Go to Actions tab
- Click the failed workflow
- Click on the failed job
- Read the error message

---

## 🌐 Site Loading Issues

### Issue: Site shows 404 "Page not found"

**Symptoms:**
- GitHub Pages URL shows 404 error
- Or "There isn't a GitHub Pages site here"

**Solutions:**

**1. Verify GitHub Pages is enabled**
- Go to Settings → Pages
- Source should be: **GitHub Actions**
- If using manual deployment: Branch should be `gh-pages`

**2. Check the base path**
- Open `vite.config.js`
- Verify `base` matches your repository name:
  ```javascript
  base: '/your-actual-repo-name/',
  ```

**3. Wait a few minutes**
- First deployment can take 2-5 minutes
- Check Actions tab for deployment status

**4. Clear browser cache**
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

---

### Issue: Blank white page

**Symptoms:**
- Site loads but shows nothing
- Blank white screen

**Solutions:**

**1. Check browser console (F12)**
```
Look for errors like:
- "Failed to load resource"
- "Unexpected token '<'"
- "Cannot find module"
```

**2. Most common: Wrong base path**
- Open browser DevTools (F12) → Console
- If you see 404 errors for JS/CSS files, the base path is wrong
- Fix `vite.config.js`:
  ```javascript
  base: '/correct-repo-name/',  // Must have slashes!
  ```

**3. Rebuild and redeploy**
```bash
npm run build
git add .
git commit -m "Fix base path"
git push origin main
```

---

### Issue: Images not loading

**Symptoms:**
- Site loads but images are broken
- 404 errors for image files

**Solutions:**

**1. Check image paths**
- Images should be in `public/` folder or imported in components
- Public folder images: Use `/image.png` (not `./image.png`)
- Imported images: `import hero from './assets/hero.png'`

**2. Verify images exist**
```bash
ls -la public/
ls -la src/assets/
```

**3. Check browser Network tab**
- Open DevTools (F12) → Network
- Look for failed image requests
- Check the URL being requested

---

### Issue: Nepali text not displaying correctly

**Symptoms:**
- Boxes or question marks instead of Nepali characters
- Font not loading

**Solutions:**

**1. Check font loading**
- Open DevTools → Network → Filter: Font
- Verify Google Fonts are loading
- Should see: `Noto+Sans+Devanagari`

**2. Verify font in index.html**
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

**3. Check CSS**
```css
.nepali-text {
  font-family: 'Noto Sans Devanagari', sans-serif;
}
```

---

## 🎨 Styling Issues

### Issue: Styles not applying

**Symptoms:**
- Site looks broken or unstyled
- CSS not loading

**Solutions:**

**1. Check CSS imports**
- Verify all CSS files are imported in components
- Check `main.jsx` imports `index.css`

**2. Clear cache and rebuild**
```bash
rm -rf node_modules dist
npm install
npm run build
```

**3. Check for CSS errors**
```bash
npm run build
# Look for CSS-related errors
```

---

## 🔧 Build Issues

### Issue: "npm run build" fails

**Symptoms:**
```
Error: Build failed
```

**Solutions:**

**1. Check Node version**
```bash
node --version  # Should be 18+
```

**2. Clean install**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**3. Check for syntax errors**
```bash
npm run lint
```

**4. Look at the specific error**
- Read the error message carefully
- Usually points to the problematic file and line

---

### Issue: "Module not found" errors

**Symptoms:**
```
Error: Cannot find module './Component'
```

**Solutions:**

**1. Check file paths**
- Verify the file exists
- Check capitalization (case-sensitive!)
- Use correct relative paths

**2. Check imports**
```javascript
// ❌ Wrong
import Component from './component'  // If file is Component.jsx

// ✅ Correct
import Component from './Component'
```

**3. Reinstall dependencies**
```bash
npm install
```

---

## 📱 Mobile Issues

### Issue: Site not responsive on mobile

**Symptoms:**
- Layout broken on mobile
- Content overflows
- Buttons not clickable

**Solutions:**

**1. Check viewport meta tag** (should already be in index.html)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**2. Test in browser DevTools**
- F12 → Toggle device toolbar (Ctrl+Shift+M)
- Test different screen sizes

**3. Check CSS media queries**
- Verify responsive styles in CSS files

---

## 🔍 Debugging Tips

### General debugging workflow:

1. **Check browser console** (F12)
   - Look for red error messages
   - Note the file and line number

2. **Check Network tab**
   - See which resources failed to load
   - Check status codes (404, 500, etc.)

3. **Test locally first**
   ```bash
   npm run build
   npm run preview
   ```
   - If it works locally but not on GitHub Pages, it's likely a base path issue

4. **Check GitHub Actions logs**
   - Actions tab → Click workflow → Read logs
   - Look for build errors

5. **Compare with working version**
   - Check git history: `git log`
   - Revert to last working commit if needed

---

## 🆘 Still Stuck?

### Checklist:
- [ ] Repository is public
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] `base` in `vite.config.js` matches repo name exactly
- [ ] All URLs in `index.html` are updated
- [ ] Build succeeds locally: `npm run build`
- [ ] No errors in browser console (F12)
- [ ] Waited 2-5 minutes after deployment

### Get Help:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
2. Review [CHECKLIST.md](./CHECKLIST.md) to ensure nothing was missed
3. Search GitHub Issues for similar problems
4. Create a new issue with:
   - Error message (full text)
   - Steps you've tried
   - Screenshots of errors
   - Link to your repository

---

## 📚 Useful Commands

```bash
# Check git status
git status

# View recent commits
git log --oneline -5

# See what changed
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Force rebuild on GitHub
git commit --allow-empty -m "Trigger rebuild"
git push origin main

# Test build locally
npm run build && npm run preview

# Check for errors
npm run lint

# View remote URL
git remote -v
```

---

**Most issues are solved by:**
1. Fixing the `base` path in `vite.config.js`
2. Waiting a few minutes after deployment
3. Clearing browser cache

Good luck! 🍀
