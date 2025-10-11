# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two main parts:

1. **Source_pages/** - Static HTML archive from the original Kajabi-hosted site (https://www.stressnavigator.dk/)
2. **stressnavigator-app/** - Modern React application rebuilt from the source pages

The site is for StressNavigator.dk, a Danish online community platform for mothers dealing with stress.

## Repository Structure

```
stressnavigator-website/
├── Source_pages/              # Original static HTML pages (archive)
│   ├── about/
│   ├── cookie/
│   ├── forside/              # Homepage
│   ├── handel/               # Terms and conditions
│   ├── kontakt/              # Contact page
│   ├── landingpages/         # Marketing landing pages
│   ├── om-netvaerket/        # About the network
│   └── presse/               # Press collaboration
│
├── stressnavigator-app/      # React application (active development)
│   ├── src/
│   │   ├── components/       # Header, Footer, Layout
│   │   ├── pages/           # Page components
│   │   ├── App.jsx          # Main app with routing
│   │   └── index.css        # Global styles
│   ├── public/assets/       # Deduplicated CSS, images, fonts
│   ├── deploy.sh            # AWS S3 + CloudFront deployment script
│   └── .env.example         # Environment variables template
│
├── QUICK_START.md           # Quick start guide
├── IMPLEMENTATION_SUMMARY.md # Detailed implementation notes
└── CLAUDE.md                # This file
```

### Source_pages (Archive)
Each page directory contains:
- Main HTML file (e.g., `forside.html`, `About.html`)
- Supporting `*_files/` directory with assets (CSS, JS, images)

## Architecture & Technology

**Static HTML Archive**: This is NOT an active development project. All pages are saved static HTML from the original Kajabi-hosted site.

**Page Structure Pattern**:
- Each page is saved from `https://www.stressnavigator.dk/[page-name]`
- HTML includes inline metadata (CSRF tokens, schema.org JSON-LD)
- Referenced assets are saved locally in corresponding `*_files/` directories

**Asset Organization**:
- CSS files include: Kajabi core styles, Font Awesome, Pine theme, custom overrides
- JavaScript includes: Kajabi platform scripts, analytics trackers, form handlers
- Images and media are stored in respective `*_files/` directories

## Key Page Mappings

| Directory | Original URL | Purpose |
|-----------|-------------|---------|
| forside | / | Main homepage |
| about | /about | About page |
| kontakt | /contact | Contact page |
| handel | /handels-og-abonnementsbetingelser | Terms & conditions |
| cookie | /cookie-og-privatlivspolitik | Privacy policy |
| om-netvaerket | (varies) | Network information |
| presse | /pressesamarbejder | Press collaboration |
| landingpages/* | /[landing-page-slug] | Marketing landing pages |

## Custom Styling

Custom CSS overrides are minimal (see `overrides.css` in each page's files directory). Main customizations include:
- Modified navigation spacing and hover effects
- Squared form field edges with bottom border only
- Removed button shadows and filter field rounded corners

## Working with This Repository

**No Build Process**: This repository has no build tools, package managers, or compilation steps. Pages are static HTML archives.

**Viewing Pages**: Open HTML files directly in a browser. Note that some external resources (CDN assets, Kajabi platform scripts) may not load properly offline.

**Asset References**: All local assets use relative paths (e.g., `./forside_files/styles.css`). External resources reference Kajabi CDN or third-party services.

## React Application (stressnavigator-app/)

### Tech Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: CSS from original Kajabi theme (deduplicated)
- **Fonts**: Google Fonts (Cabin, Chivo) + Font Awesome 5
- **Deployment**: AWS S3 + CloudFront

### Key Commands
```bash
cd stressnavigator-app
npm install           # Install dependencies
npm run dev          # Development server (http://localhost:5173)
npm run build        # Build for production
./deploy.sh          # Deploy to AWS
```

### Navigation Structure
**Main Menu** (Header):
- Om netværket
- Kontakt
- Presse

**Footer Links**:
- Kontakt
- Cookie- og privatlivspolitik
- Handels- og abonnementsbetingelser

**Removed from original**:
- Medlemsadgang (Member Access)
- Log ind (Login)

### Page Routes
- `/` - Home (forside)
- `/om-netvaerket` - About the network
- `/kontakt` - Contact
- `/presse` - Press collaboration
- `/cookie-og-privatlivspolitik` - Privacy policy
- `/handels-og-abonnementsbetingelser` - Terms and conditions

### Deployment
Deployment requires `.env` file with:
- `S3_BUCKET` - S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID
- `AWS_PROFILE` - AWS CLI profile (optional, defaults to 'default')

Run `./deploy.sh` to build and deploy automatically.

## Language & Content

The site is in Danish (da-DK). Content focuses on:
- Stress management for mothers
- Online community and expert guidance
- Educational resources (e-books, meditations, webinars)
- Network membership and support services
