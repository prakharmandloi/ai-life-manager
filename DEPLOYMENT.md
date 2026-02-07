# 🚀 Deployment Guide

## Deploy to Vercel (Recommended - 2 minutes)

### Option 1: One-Click Deploy

Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/ai-life-manager)

### Option 2: Manual Deployment via Vercel Dashboard

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose `prakharmandloi/ai-life-manager`

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at `https://your-project.vercel.app`

### Option 3: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd ai-life-manager

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? ai-life-manager
# - In which directory is your code located? ./
# - Want to override settings? No

# Your app will be deployed!
```

### Option 4: Deploy to Production

```bash
# Deploy to production domain
vercel --prod
```

---

## Deploy to Netlify

### Via Netlify Dashboard

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `prakharmandloi/ai-life-manager`

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js (auto-detected)

4. **Deploy**
   - Click "Deploy site"
   - Your app will be live in 2-3 minutes

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init

# Deploy to production
netlify deploy --prod
```

---

## Deploy to Railway

1. **Go to Railway**
   - Visit [railway.app](https://railway.app)
   - Sign in with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `prakharmandloi/ai-life-manager`

3. **Configure**
   - Railway auto-detects Next.js
   - No additional configuration needed

4. **Deploy**
   - Click "Deploy"
   - Your app will be live with a Railway domain

---

## Deploy to Your Own Server

### Prerequisites
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx (optional, for reverse proxy)

### Steps

1. **Clone and Build**
```bash
git clone https://github.com/prakharmandloi/ai-life-manager.git
cd ai-life-manager
npm install
npm run build
```

2. **Start with PM2**
```bash
# Install PM2
npm install -g pm2

# Start the app
pm2 start npm --name "ai-life-manager" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
```

3. **Configure Nginx (Optional)**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **Enable SSL with Let's Encrypt**
```bash
sudo certbot --nginx -d your-domain.com
```

---

## Environment Variables

Currently, the app works without any environment variables. For future features, you may need:

```env
# Optional: OpenAI API Key (for advanced AI features)
OPENAI_API_KEY=your_key_here

# Optional: Web Push Notifications
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_key_here
VAPID_PRIVATE_KEY=your_key_here
```

Add these in your deployment platform's environment variables section.

---

## Post-Deployment Checklist

- ✅ App loads successfully
- ✅ Can create new tasks
- ✅ AI parsing works correctly
- ✅ Tasks persist after page reload
- ✅ Dark mode works
- ✅ Mobile responsive
- ✅ No console errors

---

## Troubleshooting

### Build Fails
- Check Node.js version (must be 18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check build logs for specific errors

### App Not Loading
- Verify build completed successfully
- Check server logs
- Ensure port 3000 is not blocked

### Tasks Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (5-60 minutes)

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. Enable HTTPS

---

## Performance Optimization

The app is already optimized with:
- ✅ Next.js 14 App Router
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ CSS optimization with Tailwind
- ✅ Client-side state management with Zustand

For additional optimization:
- Enable Vercel Analytics
- Add Vercel Speed Insights
- Configure caching headers

---

**Need help?** Open an issue on [GitHub](https://github.com/prakharmandloi/ai-life-manager/issues)
