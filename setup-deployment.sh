#!/bin/bash

# Setup script for GitHub Pages deployment
# This script helps configure the necessary files for deployment

echo "🚀 Nepal Budget Slideshow - GitHub Pages Setup"
echo "=============================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Get user input
echo "Please provide the following information:"
echo ""
read -p "GitHub Username: " github_username
read -p "Repository Name: " repo_name

if [ -z "$github_username" ] || [ -z "$repo_name" ]; then
    echo "❌ Error: Username and repository name are required."
    exit 1
fi

echo ""
echo "📝 Configuration:"
echo "   Username: $github_username"
echo "   Repository: $repo_name"
echo "   URL: https://$github_username.github.io/$repo_name/"
echo ""
read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Setup cancelled."
    exit 0
fi

echo ""
echo "🔧 Updating configuration files..."

# Update vite.config.js
echo "   → Updating vite.config.js..."
sed -i.bak "s|// base: '/nepal-budget-slideshow/',|base: '/$repo_name/',|g" vite.config.js
sed -i.bak "s|base: '/nepal-budget-slideshow/',|base: '/$repo_name/',|g" vite.config.js

# Update index.html
echo "   → Updating index.html..."
sed -i.bak "s|yourusername|$github_username|g" index.html
sed -i.bak "s|nepal-budget-slideshow|$repo_name|g" index.html

# Update README.md
echo "   → Updating README.md..."
sed -i.bak "s|yourusername|$github_username|g" README.md
sed -i.bak "s|nepal-budget-slideshow|$repo_name|g" README.md

# Clean up backup files
rm -f vite.config.js.bak index.html.bak README.md.bak

echo ""
echo "✅ Configuration complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. (Optional) Add an Open Graph image:"
echo "   - Create a 1200x630px image"
echo "   - Save as: public/og-image.png"
echo ""
echo "2. Test the build:"
echo "   npm run build"
echo "   npm run preview"
echo ""
echo "3. Initialize git (if not already done):"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo ""
echo "4. Create GitHub repository and push:"
echo "   git remote add origin https://github.com/$github_username/$repo_name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "5. Enable GitHub Pages:"
echo "   - Go to: https://github.com/$github_username/$repo_name/settings/pages"
echo "   - Source: GitHub Actions"
echo ""
echo "6. Your site will be live at:"
echo "   https://$github_username.github.io/$repo_name/"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""
