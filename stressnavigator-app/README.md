# StressNavigator Website

A React-based website for StressNavigator.dk, a support network for mothers dealing with stress.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS (from original Kajabi theme)
- **Deployment**: AWS S3 + CloudFront

## Project Structure

```
stressnavigator-app/
├── public/
│   └── assets/
│       ├── css/           # Stylesheets from original site
│       ├── images/        # Images and graphics
│       └── fonts/         # Font files (if any local fonts)
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Network.jsx
│   │   ├── Contact.jsx
│   │   ├── Press.jsx
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── deploy.sh             # Deployment script
├── .env.example          # Example environment variables
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- AWS CLI configured with appropriate credentials

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

### Prerequisites

1. AWS S3 bucket configured for static website hosting
2. CloudFront distribution pointing to the S3 bucket
3. AWS CLI installed and configured with a profile

### Setup

1. Copy the environment example file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your AWS configuration:
   ```
   S3_BUCKET=your-s3-bucket-name
   CLOUDFRONT_DISTRIBUTION_ID=your-cloudfront-distribution-id
   AWS_PROFILE=your-aws-profile-name
   ```

### Deploy

Run the deployment script:

```bash
./deploy.sh
```

This script will:
1. Build the React application
2. Upload files to S3 with appropriate cache headers
3. Create a CloudFront invalidation to clear the cache
4. Wait for the invalidation to complete

## Pages and Routes

- `/` - Home page (Forside)
- `/om-netvaerket` - About the network
- `/kontakt` - Contact page
- `/presse` - Press collaboration
- `/cookie-og-privatlivspolitik` - Privacy policy
- `/handels-og-abonnementsbetingelser` - Terms and conditions

## Navigation Changes

The following items have been removed from the original site navigation:
- "Medlemsadgang" (Member Access)
- "Log ind" (Login)

The following items have been added:
- "Presse" (Press) - moved from footer to main navigation

## Fonts and Assets

- **Google Fonts**: Cabin and Chivo (loaded via CSS)
- **Icons**: Font Awesome 5 Free
- **Theme**: Pine theme from Kajabi
- **Images**: Stored in `/public/assets/images/`

## Development Notes

- The site uses CSS from the original Kajabi-hosted website
- Some external resources (CDN assets) are loaded from the original URLs
- Page content can be enhanced by extracting more HTML from the source pages

## Future Enhancements

- Extract complete page content from source HTML files
- Add mobile menu functionality
- Integrate contact forms
- Add landing pages
- Implement cookie consent banner (if needed)
- Add analytics tracking (Google Analytics, etc.)

## License

Proprietary - All rights reserved
