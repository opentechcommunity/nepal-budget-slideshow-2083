# Deployment Guide for GitHub Pages

This guide will help you deploy the Nepal Budget Slideshow to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

## Step-by-Step Deployment

### 1. Update Configuration Files

#### A. Update `vite.config.js`

Replace the repository name with your actual GitHub repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // ⚠️ IMPORTANT: Replace with your actual repo name
})
```

**Example**: If your repo is `https://github.com/username/nepal-budget`, use:
```javascript
base: '/nepal-budget/',
```

#### B. Update `index.html` Meta Tags

Replace placeholder URLs in `index.html` with your actual GitHub Pages URL:

1. Find and replace `yourusername` with your GitHub username
2. Find and replace `nepal-budget-slideshow` with your repository name

**Lines to update** (around lines 21-28):
```html
<meta property="og:url" content="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/" />
<meta property="og:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/og-image.png" />
<meta property="twitter:url" content="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/" />
<meta property="twitter:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/og-image.png" />
```

And in the JSON-LD structured data (around line 47):
```json
"url": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/",
```

### 2. Create Social Media Image (Optional but Recommended)

Create an Open Graph image for better social media sharing:

1. Create a 1200x630px image showcasing your slideshow
2. Save it as `og-image.png` in the `public` folder
3. The image will be automatically included in the build

**Tip**: Use a screenshot of your slideshow with the title overlaid.

### 3. Choose Deployment Method

You have two options:

---

## Option A: Automated Deployment (Recommended)

This method automatically deploys whenever you push to the `main` branch.

### Steps:

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit - Nepal Budget Slideshow"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Trigger deployment**:
   - The GitHub Action will run automatically on push
   - Go to the **Actions** tab to monitor progress
   - Once complete (green checkmark), your site is live!

4. **Access your site**:
   - URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - It may take 1-2 minutes for the first deployment

### Troubleshooting:

- **Build fails**: Check the Actions tab for error logs
- **404 error**: Verify the `base` path in `vite.config.js` matches your repo name
- **Blank page**: Check browser console for errors (likely a base path issue)

---

## Option B: Manual Deployment

Deploy manually using the `gh-pages` package.

### Steps:

1. **Install gh-pages** (if not already installed):
```bash
npm install --save-dev gh-pages
```

2. **Update vite.config.js** (same as Option A)

3. **Deploy**:
```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Push the `dist` folder to the `gh-pages` branch
- GitHub Pages will automatically serve from this branch

4. **Enable GitHub Pages** (first time only):
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages` and folder: `/ (root)`
   - Save

5. **Access your site**:
   - URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Re-deploying:

Simply run `npm run deploy` whenever you want to update the live site.

---

## Verification Checklist

After deployment, verify:

- [ ] Site loads at the correct URL
- [ ] All sectors are visible and clickable
- [ ] Slideshow navigation works (arrows, swipe, keyboard)
- [ ] Images load correctly
- [ ] Nepali text renders properly
- [ ] Budget comparison cards display
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools

## Testing Locally Before Deployment

Test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the production build at `http://localhost:4173` (or similar).

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain:
```
yourdomain.com
```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`

3. In GitHub Settings → Pages, enter your custom domain

## Updating the Site

### With GitHub Actions (Option A):
```bash
# Make your changes
git add .
git commit -m "Update content"
git push origin main
# Deployment happens automatically
```

### With Manual Deployment (Option B):
```bash
# Make your changes
npm run deploy
# Deployment happens immediately
```

## Common Issues

### Issue: 404 on all routes except homepage
**Solution**: Ensure `base` in `vite.config.js` matches your repo name exactly, including the trailing slash.

### Issue: Images not loading
**Solution**: 
- Check that images are in the `public` folder or imported in components
- Verify image URLs don't have hardcoded paths

### Issue: Fonts not loading
**Solution**: Fonts are loaded from Google Fonts CDN, ensure the links in `index.html` are correct.

### Issue: GitHub Action fails
**Solution**: 
- Check that GitHub Pages is enabled in repository settings
- Verify the workflow file is in `.github/workflows/deploy.yml`
- Check Actions tab for specific error messages

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the GitHub Actions logs (if using automated deployment)
3. Verify all configuration files are updated correctly
4. Open an issue on the repository

---

**Ready to deploy?** Follow the steps above and your Nepal Budget Slideshow will be live in minutes! 🚀
