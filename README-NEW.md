# 💫 The Developer's Odyssey — Ansh Chaurasiya's Portfolio

A cinematic, story-driven portfolio website built with Next.js 14+, TypeScript, TailwindCSS, GSAP, and Three.js. This project showcases an immersive journey through the world of a Full Stack Developer & AI/ML Engineer.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock)](https://greensock.com/gsap/)

## 🌟 Features

- **Cinematic Animations**: Smooth GSAP-powered scroll animations and interactions
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark Theme**: Immersive dark mode with glowing accents
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Built with Next.js App Router and Turbopack for blazing-fast performance
- **Type-Safe**: Full TypeScript integration
- **Modern Stack**: React 18+, Next.js 16+, GSAP, Framer Motion

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + CSS Modules
- **Animations**: GSAP, Framer Motion
- **3D**: React Three Fiber (R3F), drei
- **State Management**: Zustand
- **Icons**: Radix Icons

### Tools & Libraries
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest, React Testing Library

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── src/
│   ├── components/         # React components
│   │   ├── common/         # Shared components
│   │   └── worlds/         # World-specific components
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Zustand stores
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── animations/         # Animation configurations
│   ├── assets/             # Static assets
│   └── services/           # API services
├── public/                 # Static files
└── tests/                  # Test files
```

## 🛠 Installation

### Prerequisites
- Node.js 18+ 
- npm 9+

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/AnshChaurasiya/AnshChaurasiya.github.io.git
cd AnshChaurasiya.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Web3Forms access key:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test         # Run tests in watch mode
npm run test:ci      # Run tests in CI mode
```

## 🎨 Design System

### Color Palette
- **Primary**: #A5B4FC (Indigo)
- **Highlight**: #7DD3FC (Sky Blue)
- **Accent**: Various per world theme
- **Background**: #0E0F14 (Dark)
- **Text Primary**: #F1F4F8
- **Text Secondary**: #94A3B8

### World Themes
1. **Awakening Grove**: Green/Emerald theme
2. **Trial Peaks**: Ice Blue/Snow theme
3. **Creation District**: Neon Pink/Cyan theme
4. **Future Constellarium**: Purple/Nebula theme

### Typography
- **Primary Font**: Inter
- **Headings**: Bold, -2% letter spacing
- **Body**: Regular weight, 1.6 line height

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:ci
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
The project is configured with `output: 'export'` for static export.

```bash
npm run build
# The output will be in the /out directory
```

Deploy the `/out` directory to GitHub Pages or any static hosting service.

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact form | Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ansh Chaurasiya**
- Portfolio: [anshchaurasiya.github.io](https://anshchaurasiya.github.io)
- GitHub: [@AnshChaurasiya](https://github.com/AnshChaurasiya)
- LinkedIn: [Ansh Chaurasiya](https://linkedin.com/in/anshchaurasiya)
- Email: anshchaurasiya239@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- GSAP for amazing animation capabilities
- Next.js team for the incredible framework
- Radix UI for accessible components

---

**Made with ❤️ by Ansh Chaurasiya**
