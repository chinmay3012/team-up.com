# Deployment Guide

## Vercel Deployment

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```

3. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Vite and configure build settings
   - Click "Deploy"

### Environment Variables
Add these in Vercel dashboard under Settings → Environment Variables:
- `VITE_MAP_API_KEY`
- `VITE_STRIPE_PUBLIC_KEY`
- `VITE_API_URL`

## Netlify Deployment

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   netlify deploy --prod
   ```

3. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Environment Variables
Add these in Netlify dashboard under Site settings → Environment variables:
- `VITE_MAP_API_KEY`
- `VITE_STRIPE_PUBLIC_KEY`
- `VITE_API_URL`

## Custom Domain

Both Vercel and Netlify support custom domains:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Performance Optimization

Before deploying to production:
1. Optimize images (already using srcset in components)
2. Enable compression (Vercel/Netlify do this automatically)
3. Check bundle size: `npm run build` and review `dist/` folder
4. Test with Lighthouse for performance scores

## CI/CD

Both platforms automatically redeploy when you push to your main branch.
