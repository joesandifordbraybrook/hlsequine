# HLS Equine Therapy Website

Professional equine therapy and rehabilitation center website built with React, Vite, and Tailwind CSS.

## Overview

HLS Equine Therapy is a leading equine rehabilitation and therapy center located in North West England, offering state-of-the-art facilities and comprehensive care for horses.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with React and Tailwind CSS for a professional appearance
- **Image Gallery** - Showcases 40+ high-quality photos of facilities and horses
- **Service Pages** - Detailed information about all therapy services offered
- **Contact Form** - Easy-to-use form for consultation requests
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## Services Highlighted

1. **Treadmill Therapy** - Controlled exercise and rehabilitation
2. **Sea Salt & Oxygen Therapy** - Respiratory health support
3. **Laser Therapy** - Pain management and tissue repair
4. **Residential Rehabilitation** - 24/7 professional care programs

## Technology Stack

- **React 18** - Modern JavaScript framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide Icons** - Beautiful icon library
- **pnpm** - Fast, disk space efficient package manager

## Local Development

### Prerequisites

- Node.js 22.13.0 or higher
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Development Server

The development server runs on `http://localhost:5173` with hot module replacement (HMR) enabled.

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)

2. **Configure Build Settings**
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: `22.13.0`

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 3: Manual Deploy

```bash
# Build the project
pnpm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy the dist folder
netlify deploy --prod --dir=dist
```

## Build Configuration

The project includes a `netlify.toml` configuration file with:

- Build command and publish directory settings
- SPA redirect rules for client-side routing
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Cache headers for optimal performance

## Project Structure

```
hls-equine-therapy/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── images/        # 40 horse and facility photos
│   │   └── image.png      # Logo
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and Tailwind config
│   ├── main.jsx          # Application entry point
│   └── index.css         # Base styles
├── index.html            # HTML template
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Performance

- **Build Time**: ~2.7 seconds
- **JavaScript Bundle**: 237KB (73KB gzipped)
- **CSS Bundle**: 88KB (14KB gzipped)
- **Images**: Optimized and lazy-loaded

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO

The website includes:
- Descriptive meta tags
- Proper heading hierarchy
- Semantic HTML structure
- Alt text for all images
- Mobile-friendly design

## Contact Information

- **Phone**: +44 (0) 1234 567890
- **Email**: info@hlsequinetherapy.co.uk
- **Location**: North West England

## License

Copyright © 2025 HLS Equine Therapy. All rights reserved.

## Support

For technical support or questions about the website, please contact the development team.

