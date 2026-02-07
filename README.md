# 🧠 AI Life Manager

> **Your future self texting you at the right time.**

An AI-powered personal life manager that remembers important tasks and reminds you before you forget them. Built with Next.js 14, TypeScript, and Tailwind CSS.

![AI Life Manager](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🚀 Quick Start

**Deploy in 2 minutes:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/ai-life-manager)

**Try it now (no installation):**

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/prakharmandloi/ai-life-manager)

**Or run locally:**

```bash
git clone https://github.com/prakharmandloi/ai-life-manager.git
cd ai-life-manager
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ✨ Features

### 🤖 Smart Task Creation (AI-Powered)
- Type in natural language: *"Book train tickets on 15th March"*
- AI automatically:
  - Detects task type (exam, travel, payment, form, personal)
  - Extracts dates from natural language
  - Suggests optimal reminder times
  - Assigns priority levels

### 🔔 Intelligent Reminder System
- Multiple reminders based on task urgency
- Category-specific reminder patterns:
  - **Exams/Forms**: 7 days, 3 days, 1 day before
  - **Travel**: 1 day before
  - **Urgent tasks**: Multiple same-day reminders

### 📊 Daily Smart Summary
- Morning overview of your day
- Highlights:
  - Tasks due today
  - Overdue items
  - Urgent priorities
  - Upcoming this week

### 🎯 Smart Categories (Auto-Detected)
- 🎓 Exams
- 🚆 Travel
- 💳 Payments
- 📄 Forms
- 🧍 Personal

### 🎨 Beautiful UI/UX
- Clean, modern interface
- Smooth animations with Framer Motion
- Dark mode support
- Mobile-responsive design
- Priority-based color coding

---

## 🎮 Example Tasks

Try these to see AI in action:

```
Book train tickets on 15th March
Apply for GATE exam before last date
Pay electricity bill on 20th February
Remind me to call mom tomorrow
Submit project report in 3 days
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Storage**: LocalStorage (via Zustand persist)

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment Options

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/ai-life-manager)

### Netlify
```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

### Railway
1. Visit [railway.app](https://railway.app)
2. Connect GitHub → Select repo → Deploy

**Full deployment guide:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📱 Features Roadmap

### Phase 1 (Current - MVP) ✅
- ✅ Natural language task input
- ✅ AI-powered task parsing
- ✅ Smart reminders
- ✅ Daily summary
- ✅ Task management (CRUD)
- ✅ Priority & category detection

### Phase 2 (Coming Soon)
- [ ] Web Push Notifications
- [ ] Voice input support
- [ ] Calendar sync (Google Calendar)
- [ ] Email reminders
- [ ] Streak system & gamification
- [ ] "Saved You" counter

### Phase 3 (Future)
- [ ] WhatsApp/SMS reminders
- [ ] Collaborative reminders
- [ ] Autopilot mode (recurring tasks)
- [ ] Mobile app (React Native)
- [ ] Advanced AI with GPT-4

---

## 🎯 Use Cases

Perfect for:
- 📚 Students tracking exam dates and form deadlines
- 🎫 Travelers managing ticket bookings
- 💼 Professionals handling subscriptions and payments
- 📝 Anyone who forgets important dates

---

## 📚 Documentation

- 📖 [Quick Start Guide](QUICKSTART.md) - Get started in 5 minutes
- 🚀 [Deployment Guide](DEPLOYMENT.md) - Deploy to production
- 🤝 [Contributing Guide](CONTRIBUTING.md) - Help improve the project

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

Quick steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Prakhar Mandloi**
- GitHub: [@prakharmandloi](https://github.com/prakharmandloi)
- Email: prakharmandloi22@gmail.com

---

## 🙏 Acknowledgments

- Inspired by the need to never forget important life tasks
- Built with modern web technologies
- Designed for simplicity and effectiveness

---

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on [GitHub](https://github.com/prakharmandloi/ai-life-manager)!

---

**Made with ❤️ and AI** • Never forget what matters

[🚀 Deploy Now](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/ai-life-manager) • [💻 Try Online](https://stackblitz.com/github/prakharmandloi/ai-life-manager) • [📖 Documentation](QUICKSTART.md)
