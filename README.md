# 🧠 AI Life Manager

> **Your future self texting you at the right time.**

An AI-powered personal life manager that remembers important tasks and reminds you before you forget them. Built with Next.js 14, TypeScript, and Tailwind CSS.

![AI Life Manager](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

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

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/prakharmandloi/ai-life-manager.git
cd ai-life-manager
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/ai-life-manager)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Storage**: LocalStorage (via Zustand persist)

## 📱 Features Roadmap

### Phase 1 (Current - MVP)
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

## 🎯 Use Cases

Perfect for:
- 📚 Students tracking exam dates and form deadlines
- 🎫 Travelers managing ticket bookings
- 💼 Professionals handling subscriptions and payments
- 📝 Anyone who forgets important dates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prakhar Mandloi**
- GitHub: [@prakharmandloi](https://github.com/prakharmandloi)
- Email: prakharmandloi22@gmail.com

## 🙏 Acknowledgments

- Inspired by the need to never forget important life tasks
- Built with modern web technologies
- Designed for simplicity and effectiveness

---

**Made with ❤️ and AI** • Never forget what matters
