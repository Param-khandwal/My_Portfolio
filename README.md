# 🎨 Animated Portfolio Website

A modern, fully animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode support, and a premium design inspired by Apple, Stripe, and Linear.

## ✨ Features

- **Fully Animated**: Smooth, professional animations using Framer Motion
- **Dark Mode**: Seamless dark/light mode toggle with smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with glassmorphism effects
- **Performance Optimized**: Lazy loading, reduced motion support, and optimized animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── Hero.tsx             # Hero section with animated gradient
│   ├── About.tsx            # About section with timeline
│   ├── Skills.tsx           # Skills showcase
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects grid with modals
│   ├── Certifications.tsx   # Certifications carousel
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer with back-to-top
│   ├── DarkModeToggle.tsx   # Dark mode toggle button
│   └── ThemeProvider.tsx    # Theme context provider
├── lib/
│   └── animations.ts        # Reusable animation variants
└── public/                  # Static assets
```

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and subtitle
   - Modify CTA button links

2. **About Section** (`components/About.tsx`):
   - Update profile description
   - Add your education and experience

3. **Skills** (`components/Skills.tsx`):
   - Modify `skillCategories` object with your skills

4. **Experience** (`components/Experience.tsx`):
   - Update the `experiences` array with your work history

5. **Projects** (`components/Projects.tsx`):
   - Update the `projects` array with your portfolio projects
   - Add project images, descriptions, and links

6. **Certifications** (`components/Certifications.tsx`):
   - Update the `certifications` array

7. **Contact** (`components/Contact.tsx`):
   - Update social media links
   - Configure form submission endpoint

### Styling

- Colors: Modify Tailwind classes or update CSS variables in `app/globals.css`
- Animations: Adjust animation variants in `lib/animations.ts`
- Layout: Modify component spacing and grid layouts

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from Apple, Stripe, Linear, and Framer
- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)

---

Built with ❤️ using Next.js and Framer Motion
