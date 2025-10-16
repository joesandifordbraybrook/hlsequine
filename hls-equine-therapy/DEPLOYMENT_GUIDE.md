# HLS Equine Therapy - Netlify Deployment Guide

This guide provides step-by-step instructions for deploying the HLS Equine Therapy website to Netlify.

## Prerequisites

Before deploying, ensure you have the following ready:

1. A Netlify account (free tier is sufficient) - Sign up at [netlify.com](https://www.netlify.com)
2. The project files (this folder)
3. Either:
   - A Git repository (GitHub, GitLab, or Bitbucket) with the project code, OR
   - The Netlify CLI installed on your computer

## Deployment Method 1: Git-Based Deployment (Recommended)

This method automatically deploys your site whenever you push changes to your repository.

### Step 1: Push Code to Git Repository

If you haven't already, push your project to a Git repository:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - HLS Equine Therapy website"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/hls-equine-therapy.git

# Push to repository
git push -u origin main
```

### Step 2: Connect Repository to Netlify

1. Log in to your [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select the `hls-equine-therapy` repository

### Step 3: Configure Build Settings

Netlify should automatically detect the settings from `netlify.toml`, but verify:

- **Build command**: `pnpm run build`
- **Publish directory**: `dist`
- **Node version**: `22.13.0` (set in Environment Variables if needed)

### Step 4: Deploy

1. Click **"Deploy site"**
2. Netlify will build and deploy your site (takes 2-3 minutes)
3. Once complete, you'll receive a URL like `https://random-name-123456.netlify.app`

### Step 5: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS settings
4. Netlify will automatically provision an SSL certificate

## Deployment Method 2: Manual Deployment via Netlify Dashboard

This method is useful for quick deployments without Git.

### Step 1: Build the Project Locally

```bash
# Navigate to project directory
cd hls-equine-therapy

# Install dependencies (if not already done)
pnpm install

# Build for production
pnpm run build
```

This creates a `dist` folder with the production-ready files.

### Step 2: Deploy via Drag and Drop

1. Log in to [Netlify Dashboard](https://app.netlify.com)
2. Scroll down to **"Want to deploy a new site without connecting to Git?"**
3. Drag and drop the `dist` folder onto the deployment area
4. Netlify will upload and deploy your site immediately

**Note**: This method requires manual rebuilds and uploads for updates.

## Deployment Method 3: Netlify CLI

This method provides command-line control over deployments.

### Step 1: Install Netlify CLI

```bash
# Install globally using npm
npm install -g netlify-cli

# Or using pnpm
pnpm add -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser window for authentication.

### Step 3: Initialize Site (First Time Only)

```bash
# Navigate to project directory
cd hls-equine-therapy

# Initialize Netlify site
netlify init
```

Follow the prompts to:
- Create a new site or link to an existing one
- Configure build settings (use defaults from netlify.toml)

### Step 4: Deploy

```bash
# Deploy to production
netlify deploy --prod

# Or deploy to a preview URL first
netlify deploy
```

The CLI will build and deploy your site, then provide the live URL.

## Post-Deployment Checklist

After deployment, verify the following:

- [ ] Website loads correctly at the Netlify URL
- [ ] All images display properly
- [ ] Navigation menu works on desktop and mobile
- [ ] Contact form is visible and styled correctly
- [ ] All service cards display with images
- [ ] Gallery images load and are clickable
- [ ] Footer displays correctly
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (https://)

## Updating the Website

### For Git-Based Deployments

Simply push changes to your repository:

```bash
# Make your changes to the code
# ...

# Commit and push
git add .
git commit -m "Description of changes"
git push
```

Netlify automatically rebuilds and deploys within minutes.

### For Manual Deployments

1. Make changes to the code
2. Run `pnpm run build`
3. Drag and drop the new `dist` folder to Netlify

### For CLI Deployments

```bash
# Make your changes
# ...

# Deploy
netlify deploy --prod
```

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add key-value pairs (e.g., `VITE_API_URL=https://api.example.com`)
4. Redeploy the site

**Note**: Vite environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Custom Domain Setup

### Step 1: Add Domain in Netlify

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `hlsequinetherapy.co.uk`)

### Step 2: Configure DNS

You have two options:

**Option A: Use Netlify DNS (Recommended)**
1. Update your domain's nameservers to Netlify's nameservers
2. Netlify will automatically configure everything

**Option B: Use External DNS**
1. Add an A record pointing to Netlify's load balancer IP
2. Add a CNAME record for `www` pointing to your Netlify site URL

### Step 3: Enable HTTPS

Netlify automatically provisions and renews SSL certificates via Let's Encrypt. This usually takes a few minutes after DNS propagation.

## Troubleshooting

### Build Fails

**Issue**: Build command fails on Netlify

**Solutions**:
- Check that `pnpm` is being used (add `NPM_FLAGS="--version"` to environment variables)
- Verify Node version is set to 22.13.0
- Check build logs for specific error messages

### Images Not Loading

**Issue**: Images show broken links

**Solutions**:
- Verify images are in `src/assets/images/` directory
- Check import paths in `App.jsx`
- Ensure images were included in Git commit
- Rebuild and redeploy

### 404 Errors on Page Refresh

**Issue**: Refreshing the page shows a 404 error

**Solution**: This is fixed by the redirect rule in `netlify.toml`. Ensure the file is present and correctly configured.

### Slow Initial Load

**Issue**: Website loads slowly on first visit

**Solutions**:
- Images are automatically optimized by Vite
- Consider implementing lazy loading for below-the-fold images
- Enable Netlify's asset optimization features in Site settings

## Performance Optimization

Netlify provides several built-in optimizations:

1. **Asset Optimization**
   - Go to **Site settings** → **Build & deploy** → **Post processing**
   - Enable "Bundle CSS" and "Minify JS"

2. **Image Optimization**
   - Consider using Netlify Image CDN for automatic image optimization
   - Enable in Site settings

3. **Caching**
   - Cache headers are already configured in `netlify.toml`
   - Netlify's CDN automatically caches assets globally

## Analytics and Monitoring

### Netlify Analytics

1. Go to **Site settings** → **Analytics**
2. Enable Netlify Analytics (paid feature)
3. View traffic, page views, and performance metrics

### Google Analytics (Free Alternative)

Add Google Analytics by including the tracking code in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support and Resources

- **Netlify Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community**: [community.netlify.com](https://community.netlify.com)
- **Status Page**: [netlifystatus.com](https://www.netlifystatus.com)

## Summary

Your HLS Equine Therapy website is now ready for deployment to Netlify. The recommended approach is Git-based deployment for automatic updates, but all three methods work well depending on your workflow.

The site is optimized, includes proper security headers, and is configured for optimal performance on Netlify's global CDN.

For any questions or issues during deployment, refer to the troubleshooting section or consult Netlify's documentation.

