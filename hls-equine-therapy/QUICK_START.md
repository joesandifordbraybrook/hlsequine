# Quick Start Guide - HLS Equine Therapy Website

## Getting Started in Your IDE

Follow these simple steps to run the project in your own development environment.

### Prerequisites

Make sure you have the following installed:
- **Node.js** version 18 or higher (22.13.0 recommended)
- **pnpm** package manager (or npm/yarn)

### Installation Steps

1. **Extract the project files**
   ```bash
   unzip hls-equine-therapy-final.zip
   cd hls-equine-therapy
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using pnpm
   pnpm run dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open in browser**
   - The dev server will start at `http://localhost:5173`
   - Open this URL in your browser
   - The page will automatically reload when you save changes

### Available Scripts

- **`pnpm run dev`** - Start development server with hot reload
- **`pnpm run build`** - Build for production (outputs to `dist/` folder)
- **`pnpm run preview`** - Preview the production build locally

### Project Structure

```
hls-equine-therapy/
├── src/
│   ├── App.jsx           # Main application component (edit this for content changes)
│   ├── App.css           # Tailwind CSS configuration and styles
│   ├── main.jsx          # Application entry point
│   └── assets/
│       ├── images/       # All 40 horse/facility photos
│       └── image.png     # Logo
├── public/               # Static files
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── netlify.toml         # Netlify deployment config
```

### Making Changes

#### Update Content
Edit `src/App.jsx` to change:
- Text content (headings, descriptions)
- Contact information
- Services
- Testimonials
- Any other content

#### Update Styles
Edit `src/App.css` to change:
- Colors (search for `teal-600` to change brand color)
- Fonts
- Spacing
- Other design elements

#### Add/Remove Images
1. Add images to `src/assets/images/`
2. Import them in `src/App.jsx`
3. Add to the appropriate image array

### Recommended IDEs

- **VS Code** (recommended)
  - Install extensions: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense
- **WebStorm**
- **Cursor**
- **Any modern code editor with JavaScript support**

### Hot Reload

The development server supports hot module replacement (HMR):
- Save any file in `src/`
- Changes appear instantly in the browser
- No need to manually refresh

### Building for Production

When ready to deploy:

```bash
pnpm run build
```

This creates optimized files in the `dist/` folder ready for deployment.

### Troubleshooting

**Port 5173 already in use?**
```bash
# Kill the process using port 5173
# On Mac/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Images not loading?**
- Check that images are in `src/assets/images/`
- Verify import paths in `src/App.jsx`
- Restart the dev server

### Next Steps

1. **Customize content** - Update text, contact info, and images in `App.jsx`
2. **Test locally** - Make sure everything works in the dev server
3. **Build for production** - Run `pnpm run build` to create deployment files
4. **Deploy** - Follow `DEPLOYMENT_GUIDE.md` for Netlify deployment

### Need Help?

- Check `README.md` for detailed project documentation
- See `DEPLOYMENT_GUIDE.md` for deployment instructions
- Review `PROJECT_SUMMARY.md` for project overview

---

**Quick Command Reference:**

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

Your website will be running at **http://localhost:5173** 🚀

