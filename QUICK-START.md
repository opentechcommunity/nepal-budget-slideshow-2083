# 🚀 Quick Start - 5 Minutes to Deploy

The fastest way to get your Nepal Budget Slideshow live on GitHub Pages.

## ⚡ Super Quick Setup

### 1️⃣ Create GitHub Repository (2 minutes)

1. Go to https://github.com/new
2. Repository name: `nepal-budget-slideshow`
3. Make it **Public**
4. Click **Create repository**

### 2️⃣ Configure & Push (2 minutes)

**Open terminal in the `nepal-budget-slideshow` folder:**

```bash
# Run the setup script
./setup-deployment.sh
# (On Windows: setup-deployment.bat)

# Enter your GitHub username and repo name when prompted
# The script updates all files automatically

# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### 3️⃣ Enable GitHub Pages (1 minute)

1. Go to your repo → **Settings** → **Pages**
2. Source: Select **GitHub Actions**
3. Done!

### 4️⃣ Visit Your Site! 🎉

Wait 1-2 minutes, then visit:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## 📋 Copy-Paste Commands

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual values:

```bash
cd nepal-budget-slideshow
./setup-deployment.sh
git init
git add .
git commit -m "Initial commit: Nepal Budget Slideshow"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

Then go to: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/settings/pages`
- Set Source to: **GitHub Actions**

---

## 🆘 Having Issues?

### Can't push to GitHub?
```bash
# Use Personal Access Token:
# 1. Go to: https://github.com/settings/tokens
# 2. Generate new token (classic)
# 3. Check 'repo' scope
# 4. Use token as password when pushing
```

### Site shows 404?
- Check `vite.config.js` - the `base` path must match your repo name
- Example: `base: '/nepal-budget-slideshow/',`

### Build failed?
- Go to Actions tab to see error
- Usually a typo in `vite.config.js`

---

## 📚 More Help

- **Step-by-step guide**: [GITHUB-SETUP.md](./GITHUB-SETUP.md)
- **Detailed instructions**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Pre-flight checklist**: [CHECKLIST.md](./CHECKLIST.md)

---

**That's it!** Your site should be live in under 5 minutes. 🎊
