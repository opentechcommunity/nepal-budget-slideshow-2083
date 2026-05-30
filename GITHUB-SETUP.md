# GitHub Setup Guide - Quick Start

Follow these steps to deploy your Nepal Budget Slideshow to GitHub Pages.

## Prerequisites

- GitHub account ([Sign up here](https://github.com/join) if you don't have one)
- Git installed on your computer ([Download here](https://git-scm.com/downloads))

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `nepal-budget-slideshow` (or your preferred name)
   - **Description**: "Interactive slideshow of Nepal's Budget FY 2083/84"
   - **Visibility**: Select **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have files)
5. Click **"Create repository"**

## Step 2: Configure Your Project

You have two options:

### Option A: Use the Setup Script (Easiest)

**On Linux/Mac:**
```bash
cd nepal-budget-slideshow
./setup-deployment.sh
```

**On Windows:**
```bash
cd nepal-budget-slideshow
setup-deployment.bat
```

The script will ask for:
- Your GitHub username
- Your repository name

It will automatically update all necessary files.

### Option B: Manual Configuration

1. **Update `vite.config.js`** - Open the file and change line 6:
   ```javascript
   base: '/nepal-budget-slideshow/', // Replace with YOUR repository name
   ```

2. **Update `index.html`** - Replace these placeholders:
   - Find: `yourusername` → Replace with your GitHub username
   - Find: `nepal-budget-slideshow` → Replace with your repository name
   
   (There are 5 occurrences total)

## Step 3: Push to GitHub

Open your terminal/command prompt in the `nepal-budget-slideshow` folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Nepal Budget Slideshow"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Example:**
If your username is `john` and repo is `nepal-budget`:
```bash
git remote add origin https://github.com/john/nepal-budget.git
```

### Troubleshooting Push Issues

**If you get authentication errors:**

1. **Use Personal Access Token (Recommended)**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name like "Nepal Budget Deploy"
   - Check the `repo` scope
   - Click "Generate token"
   - Copy the token (you won't see it again!)
   - When pushing, use your token as the password

2. **Or use SSH** (if you have SSH keys set up):
   ```bash
   git remote set-url origin git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git
   ```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. That's it! No need to click Save, it's automatic.

## Step 5: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running (yellow dot)
3. Wait for it to complete (green checkmark) - usually takes 1-2 minutes
4. If it fails (red X), click on it to see error details

## Step 6: Visit Your Site! 🎉

Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
- Username: `john`
- Repo: `nepal-budget`
- URL: `https://john.github.io/nepal-budget/`

## Common Issues & Solutions

### Issue 1: "Repository not found" when pushing
**Solution**: Make sure you created the repository on GitHub and the URL is correct.

### Issue 2: Build fails in GitHub Actions
**Solution**: 
- Check the Actions tab for error details
- Most common: Wrong `base` path in `vite.config.js`
- Make sure it matches your repository name exactly

### Issue 3: Site shows 404 or blank page
**Solution**: 
- Verify `base` in `vite.config.js` matches your repo name
- Must have leading and trailing slashes: `/repo-name/`
- Wait a few minutes after deployment

### Issue 4: Images or fonts not loading
**Solution**: 
- Check browser console (F12) for errors
- Usually means wrong `base` path in config

### Issue 5: Authentication failed when pushing
**Solution**: 
- Use a Personal Access Token instead of password
- Or set up SSH keys

## Making Updates Later

After your initial setup, updating is easy:

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Description of your changes"
git push origin main

# GitHub Actions will automatically rebuild and deploy!
```

## Visual Guide

```
┌─────────────────────────────────────────────────────────────┐
│  1. Create Repo on GitHub                                   │
│     github.com → New Repository                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  2. Configure Project                                       │
│     Run: ./setup-deployment.sh                              │
│     Or manually update vite.config.js & index.html          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  3. Push to GitHub                                          │
│     git init                                                │
│     git add .                                               │
│     git commit -m "Initial commit"                          │
│     git remote add origin https://github.com/USER/REPO.git  │
│     git push -u origin main                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  4. Enable GitHub Pages                                     │
│     Settings → Pages → Source: GitHub Actions               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  5. Wait for Deployment                                     │
│     Actions tab → Watch workflow (1-2 minutes)              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  6. Visit Your Site! 🎉                                     │
│     https://USERNAME.github.io/REPO-NAME/                   │
└─────────────────────────────────────────────────────────────┘
```

## Need More Help?

- **Detailed guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Checklist**: See [CHECKLIST.md](./CHECKLIST.md)
- **GitHub Pages docs**: https://docs.github.com/en/pages
- **Git basics**: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

## Quick Reference Commands

```bash
# Check git status
git status

# See what changed
git diff

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Force push (use carefully!)
git push -f origin main
```

---

**Ready to deploy?** Start with Step 1 above! 🚀

If you get stuck, check the "Common Issues" section or refer to DEPLOYMENT.md for more details.
