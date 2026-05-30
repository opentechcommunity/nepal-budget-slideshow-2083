@echo off
REM Setup script for GitHub Pages deployment (Windows)
REM This script helps configure the necessary files for deployment

echo.
echo Nepal Budget Slideshow - GitHub Pages Setup
echo ==============================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo Error: package.json not found. Please run this script from the project root.
    exit /b 1
)

REM Get user input
set /p github_username="GitHub Username: "
set /p repo_name="Repository Name: "

if "%github_username%"=="" (
    echo Error: Username is required.
    exit /b 1
)

if "%repo_name%"=="" (
    echo Error: Repository name is required.
    exit /b 1
)

echo.
echo Configuration:
echo    Username: %github_username%
echo    Repository: %repo_name%
echo    URL: https://%github_username%.github.io/%repo_name%/
echo.
set /p confirm="Is this correct? (y/n): "

if /i not "%confirm%"=="y" (
    echo Setup cancelled.
    exit /b 0
)

echo.
echo Updating configuration files...

REM Update vite.config.js
echo    - Updating vite.config.js...
powershell -Command "(Get-Content vite.config.js) -replace '// base: ''/nepal-budget-slideshow/'',', 'base: ''/%repo_name%/'',' | Set-Content vite.config.js"
powershell -Command "(Get-Content vite.config.js) -replace 'base: ''/nepal-budget-slideshow/'',', 'base: ''/%repo_name%/'',' | Set-Content vite.config.js"

REM Update index.html
echo    - Updating index.html...
powershell -Command "(Get-Content index.html) -replace 'yourusername', '%github_username%' | Set-Content index.html"
powershell -Command "(Get-Content index.html) -replace 'nepal-budget-slideshow', '%repo_name%' | Set-Content index.html"

REM Update README.md
echo    - Updating README.md...
powershell -Command "(Get-Content README.md) -replace 'yourusername', '%github_username%' | Set-Content README.md"
powershell -Command "(Get-Content README.md) -replace 'nepal-budget-slideshow', '%repo_name%' | Set-Content README.md"

echo.
echo Configuration complete!
echo.
echo Next steps:
echo.
echo 1. (Optional) Add an Open Graph image:
echo    - Create a 1200x630px image
echo    - Save as: public\og-image.png
echo.
echo 2. Test the build:
echo    npm run build
echo    npm run preview
echo.
echo 3. Initialize git (if not already done):
echo    git init
echo    git add .
echo    git commit -m "Initial commit"
echo.
echo 4. Create GitHub repository and push:
echo    git remote add origin https://github.com/%github_username%/%repo_name%.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 5. Enable GitHub Pages:
echo    - Go to: https://github.com/%github_username%/%repo_name%/settings/pages
echo    - Source: GitHub Actions
echo.
echo 6. Your site will be live at:
echo    https://%github_username%.github.io/%repo_name%/
echo.
echo For detailed instructions, see DEPLOYMENT.md
echo.
pause
