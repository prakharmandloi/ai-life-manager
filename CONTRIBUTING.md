# Contributing to AI Life Manager

First off, thank you for considering contributing to AI Life Manager! 🎉

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Browser/OS information**

### 💡 Suggesting Features

Feature suggestions are welcome! Please:

- **Check existing feature requests** first
- **Describe the feature** in detail
- **Explain why it would be useful**
- **Provide examples** if possible

### 🔧 Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes**
3. **Test thoroughly**
4. **Update documentation** if needed
5. **Follow the code style**
6. **Write clear commit messages**
7. **Submit the PR**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ai-life-manager.git
cd ai-life-manager

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Code Style

- Use **TypeScript** for type safety
- Follow **ESLint** rules
- Use **Prettier** for formatting
- Write **meaningful variable names**
- Add **comments** for complex logic

## Project Structure

```
ai-life-manager/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── TaskInput.tsx   # Task creation
│   ├── TaskList.tsx    # Task display
│   └── DailySummary.tsx # Summary widget
├── lib/                # Utilities
│   └── ai.ts          # AI parsing logic
├── store/             # State management
│   └── taskStore.ts   # Zustand store
└── public/            # Static assets
```

## Testing

Before submitting:

- ✅ Test on Chrome, Firefox, Safari
- ✅ Test mobile responsiveness
- ✅ Test dark mode
- ✅ Verify no console errors
- ✅ Check TypeScript compilation

## Commit Messages

Use clear, descriptive commit messages:

```
✅ Good:
- "Add voice input feature"
- "Fix date parsing for relative dates"
- "Improve mobile responsiveness"

❌ Bad:
- "Update"
- "Fix bug"
- "Changes"
```

## Feature Ideas Welcome

Some areas we'd love help with:

- 🔔 Web Push Notifications
- 🎤 Voice input
- 📅 Calendar integration
- 🌍 Internationalization
- 📱 Mobile app
- 🎨 UI/UX improvements
- 🧪 Testing framework
- 📊 Analytics

## Questions?

Feel free to:
- Open an issue
- Start a discussion
- Email: prakharmandloi22@gmail.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making AI Life Manager better!** ❤️
