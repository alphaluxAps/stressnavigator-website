# StressNavigator Website - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Navigate to the App Directory
```bash
cd stressnavigator-app
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

---

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

---

## 🌐 Deploying to AWS

### One-Time Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your AWS details:**
   ```bash
   S3_BUCKET=your-bucket-name
   CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC
   AWS_PROFILE=default  # or your AWS CLI profile name
   ```

3. **Ensure AWS CLI is installed and configured:**
   ```bash
   aws configure --profile your-profile-name
   ```

### Deploy Command

```bash
./deploy.sh
```

That's it! The script will:
- Build the React app
- Upload to S3
- Invalidate CloudFront cache
- Show you the CloudFront URL

---

## 📂 Project Structure

```
stressnavigator-app/
├── src/
│   ├── components/     # Header, Footer, Layout
│   ├── pages/         # Home, Network, Contact, Press, etc.
│   └── App.jsx        # Main app with routing
├── public/
│   └── assets/        # CSS, images, fonts
├── deploy.sh          # Deployment script
└── .env              # Your AWS config (create from .env.example)
```

---

## 🔧 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `./deploy.sh` | Deploy to AWS S3 + CloudFront |

---

## 🎯 Current Status

✅ **Working:**
- React app with routing
- Header with updated navigation (no login/member access)
- Footer with social links
- All page routes configured
- Deployment script ready
- Font Awesome icons from CDN

⚠️ **To Enhance:**
- Page content (currently placeholders)
- Page-specific images
- Mobile menu toggle
- Contact form functionality
- Landing pages

---

## 📝 Navigation Structure

**Main Menu:**
- Om netværket
- Kontakt
- Presse

**Footer Links:**
- Kontakt
- Cookie- og privatlivspolitik
- Handels- og abonnementsbetingelser

---

## 🆘 Troubleshooting

### Icons not showing?
Font Awesome CDN is already added to `index.html`. If icons still don't show, check your internet connection.

### Build warnings about webfonts?
These can be safely ignored - we're using Font Awesome from CDN instead of local files.

### Deployment fails?
- Check that AWS CLI is installed: `aws --version`
- Verify your AWS credentials: `aws s3 ls --profile your-profile-name`
- Ensure S3 bucket exists and CloudFront distribution is set up

---

## 🔗 Useful Links

- **Full Documentation:** See `README.md` in stressnavigator-app/
- **Implementation Details:** See `../IMPLEMENTATION_SUMMARY.md`
- **Original Site:** https://www.stressnavigator.dk/

---

## 💡 Next Steps

1. **Test the site locally:** `npm run dev`
2. **Review the pages** and see what content needs to be added
3. **Set up AWS** (S3 bucket + CloudFront)
4. **Deploy:** `./deploy.sh`
5. **Enhance content** by extracting from Source_pages HTML files

---

**Questions?** Check the full README.md or IMPLEMENTATION_SUMMARY.md for detailed information!
