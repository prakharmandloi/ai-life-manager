# ⚡ Quick Start Guide

Get AI Life Manager running in **under 5 minutes**!

## 🚀 Fastest Way: Deploy to Vercel (2 minutes)

**One-click deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/ai-life-manager)

1. Click the button above
2. Sign in with GitHub
3. Click "Deploy"
4. Done! Your app is live 🎉

**Your live URL:** `https://your-project.vercel.app`

---

## 💻 Run Locally (3 minutes)

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- Git ([Download](https://git-scm.com))

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/prakharmandloi/ai-life-manager.git
cd ai-life-manager

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**Open:** [http://localhost:3000](http://localhost:3000)

That's it! 🎊

---

## 🎮 Try It Now (No Installation)

**StackBlitz (Online IDE):**
- [Open in StackBlitz](https://stackblitz.com/github/prakharmandloi/ai-life-manager)
- Edit code in browser
- See changes instantly
- No setup required!

---

## 📱 First Steps After Setup

### 1. Add Your First Task
Click **"Add New Task"** and type naturally:

```
Book train tickets on 15th March
```

### 2. See AI Magic ✨
Watch as AI:
- Detects it's a "travel" task
- Extracts the date (March 15)
- Suggests smart reminders
- Sets priority automatically

### 3. Explore Features
- ✅ Mark tasks complete
- 🗑️ Delete tasks
- 📊 View daily summary
- 🌙 Toggle dark mode

---

## 🎯 Example Tasks to Try

Copy-paste these to see AI in action:

```
Apply for GATE exam before last date
Pay electricity bill on 20th February
Remind me to call mom tomorrow
Book flight tickets next week
Submit project report in 3 days
```

---

## 🛠️ Build for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start
```

---

## 🌐 Deploy to Other Platforms

### Netlify
```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

### Railway
1. Visit [railway.app](https://railway.app)
2. Connect GitHub
3. Select repository
4. Deploy automatically

### Your Server
```bash
npm run build
pm2 start npm --name "ai-life-manager" -- start
```

---

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
# Use different port
PORT=3001 npm run dev
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Tasks not saving?
- Enable browser localStorage
- Clear browser cache
- Try incognito mode

---

## 📚 Next Steps

- 📖 Read [README.md](README.md) for full documentation
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- 💡 Open [issues](https://github.com/prakharmandloi/ai-life-manager/issues) for questions

---

## 🎉 You're All Set!

Start managing your life with AI. Never forget important tasks again!

**Questions?** Open an issue or email prakharmandloi22@gmail.com

---

**Made with ❤️ and AI** • [GitHub](https://github.com/prakharmandloi/ai-life-manager) • [Live Demo](https://stackblitz.com/github/prakharmandloi/ai-life-manager)
