# Nepal Budget Slideshow FY 2083/84

An interactive, elegant slideshow presentation of Nepal's Federal Budget for Fiscal Year 2083/84 (2026-27), featuring bilingual content (English & Nepali) with year-over-year budget comparisons.

![Nepal Budget Slideshow](https://img.shields.io/badge/Nepal-Budget%202083%2F84-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)

## 🚀 Quick Links

- **[5-Minute Quick Start](./QUICK-START.md)** - Deploy to GitHub Pages in 5 minutes
- **[GitHub Setup Guide](./GITHUB-SETUP.md)** - Step-by-step with troubleshooting
- **[Deployment Guide](./DEPLOYMENT.md)** - Comprehensive deployment instructions
- **[Pre-Deployment Checklist](./CHECKLIST.md)** - Don't miss anything!
- **[Troubleshooting Guide](./TROUBLESHOOTING.md)** - Fix common issues

## 🌟 Features

- **12 Key Sectors**: Comprehensive coverage of major budget sectors including Taxation, Energy, Roads, Agriculture, Education, Health, Technology & AI, Investment, Tourism, Social Security, Labour, and Governance
- **Bilingual Content**: Full budget speech excerpts in Nepali (Devanagari script) with English translations
- **Budget Comparisons**: Year-over-year comparison cards showing FY 2082/83 vs 2083/84 allocations
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Elegant UI**: Glass-morphism design with smooth animations and transitions
- **Keyboard Navigation**: Arrow keys for slide navigation, Escape to exit
- **Touch Gestures**: Swipe support for mobile devices
- **Sector Navigation**: Quick jump to any sector or specific decision point

## 📊 Budget Highlights

- **Total Budget**: Rs. 2.124 trillion (8.1% increase from previous year)
- **Revenue Target**: Rs. 1,405.31 billion
- **Major Allocations**:
  - Roads & Infrastructure: Rs. 286.48 billion (+88.5%)
  - Education: Rs. 218.30 billion
  - Social Security: Rs. 120 billion
  - Health: Rs. 101.95 billion
  - Energy: Rs. 95+ billion

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL]

## 🛠️ Technology Stack

- **React 18.3** - UI framework
- **Vite 6.0** - Build tool and dev server
- **CSS3** - Styling with modern features (backdrop-filter, flexbox, grid)
- **Noto Sans Devanagari** - Font for Nepali text rendering

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/arjun-gautam/nepal-budget-slideshow-2083-2083.git
cd nepal-budget-slideshow-2083-2083
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🌐 Deploy to GitHub Pages

### Quick Setup (Automated Configuration)

Use the setup script to automatically configure all necessary files:

**Linux/Mac:**
```bash
./setup-deployment.sh
```

**Windows:**
```bash
setup-deployment.bat
```

The script will:
- Prompt for your GitHub username and repository name
- Update `vite.config.js` with the correct base path
- Update all URLs in `index.html` and `README.md`
- Provide next steps for deployment

**Or follow the manual steps below:**

### Option 1: Using GitHub Actions (Recommended)

1. Update `vite.config.js` with your repository name:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/nepal-budget-slideshow-2083-2083/', // Replace with your repo name
})
```

2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

3. Push to GitHub:
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

4. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Source: GitHub Actions
   - Your site will be live at `https://arjun-gautam.github.io/nepal-budget-slideshow-2083-2083/`

### Option 2: Manual Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js` base path (as shown above)

4. Deploy:
```bash
npm run deploy
```

## 📱 Usage

### Navigation

- **Arrow Keys**: Navigate between slides (←/→ or ↑/↓)
- **Swipe**: Touch gestures on mobile devices
- **Sidebar**: Click sector names to jump to specific sections
- **Dots**: Click sector dots at bottom to switch sectors
- **Escape**: Exit slideshow and return to sector selection

### Slide Structure

Each sector contains:
1. **Intro Slide**: Sector overview with budget comparison and full Nepali excerpt
2. **Decision Slides**: Individual budget decisions with related Nepali excerpts

## 📂 Project Structure

```
nepal-budget-slideshow-2083-2083/
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deployment
├── src/
│   ├── components/
│   │   ├── SectorSelection.jsx    # Sector grid view
│   │   ├── SectorSelection.css
│   │   ├── Slideshow.jsx          # Main slideshow component
│   │   └── Slideshow.css
│   ├── data/
│   │   └── sectors.js             # Budget data and content
│   ├── assets/                    # Images and icons
│   ├── App.jsx                    # Root component
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── index.html
├── vite.config.js
├── package.json
├── README.md                      # This file
├── DEPLOYMENT.md                  # Detailed deployment guide
├── CHECKLIST.md                   # Pre-deployment checklist
├── setup-deployment.sh            # Setup script (Linux/Mac)
└── setup-deployment.bat           # Setup script (Windows)
```

## 📚 Documentation Files

- **README.md** - Project overview and quick start guide
- **DEPLOYMENT.md** - Comprehensive deployment instructions with troubleshooting
- **CHECKLIST.md** - Step-by-step checklist for deployment preparation
- **setup-deployment.sh** / **.bat** - Automated configuration scripts

## 🎨 Customization

### Adding New Sectors

Edit `src/data/sectors.js`:

```javascript
{
  id: "new-sector",
  title: "New Sector",
  tag: "Tag",
  icon: "🎯",
  description: "Sector description",
  color: "#hexcolor",
  budgetComparison: {
    previous: "100",
    current: "120",
    unit: "billion",
    change: "+20%",
    category: "Sector Name"
  },
  nepaliText: `Nepali overview text`,
  bullets: [
    {
      text: "Decision point",
      image: "image-url",
      source: "Image source",
      nepaliText: "Related Nepali excerpt"
    }
  ]
}
```

### Styling

- Main theme colors in `src/index.css`
- Component-specific styles in respective `.css` files
- Glass-morphism effects use `backdrop-filter` and `rgba()` colors

## 📄 Data Sources

Budget data compiled from:
- [Nepal News](https://english.nepalnews.com) - FY 2082/83 allocations
- [Kathmandu Post](https://kathmandupost.com) - Sector-wise analysis
- [Himalayan Times](https://thehimalayantimes.com) - FY 2083/84 budget speech
- Official Budget Speech Document (original.txt)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Budget speech content from Nepal Government, Ministry of Finance
- Unsplash photographers for high-quality images
- Noto Sans Devanagari font by Google Fonts
- React and Vite communities

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is an educational and informational project. For official budget documents, please refer to the [Ministry of Finance, Nepal](https://mof.gov.np).
