# BMSC Website

A modern, responsive website built with Next.js 16, React 19, and Tailwind CSS. This project showcases a contemporary web application with interactive components and optimized performance.

## Overview

BMSC Website is a full-stack web application featuring:

- **Server-Side Rendering (SSR)** with Next.js App Router for optimal SEO and performance
- **Responsive Design** powered by Tailwind CSS 4
- **Interactive UI Components** including carousels, modals, and dynamic content
- **Type-Safe Development** with TypeScript
- **Modern React** with React 19 and functional components
- **Icon System** using Lucide React for consistent branding

## Tech Stack

### Core Dependencies

- **Next.js 16.2.6** - React framework with App Router
- **React 19.2.4 & React DOM 19.2.4** - UI library
- **TypeScript 5** - Type safety and developer experience
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **PostCSS 8.5.14** - CSS transformations

### UI & Components

- **Radix UI** (`@radix-ui/react-slot`) - Unstyled, accessible component primitives
- **Embla Carousel** (8.6.0) - Lightweight carousel component
- **Lucide React** (1.16.0) - Beautiful SVG icon library
- **class-variance-authority** (0.7.1) - Component style variants
- **clsx & tailwind-merge** - CSS class utilities

### Development Tools

- **ESLint 9** - Code quality and consistency
- **Node Types 20** - TypeScript node environment support

## Project Structure

```
bmsc-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   └── layout.tsx         # Root layout
├── lib/                   # Utility functions & helpers
├── public/                # Static assets (images, fonts, etc.)
├── components/            # Reusable UI components (optional)
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bmsc-website
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-refresh as you make changes to `app/page.tsx`.

### Build & Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Development Workflow

### Creating Components

Components should be placed in a `components/` directory and follow these patterns:

```typescript
// components/Button.tsx
import { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button };
```

### Styling

This project uses **Tailwind CSS 4** for styling. Define custom styles in `tailwind.config.js` and apply utility classes directly to elements.

### Adding Pages

Create new pages in the `app/` directory following Next.js App Router conventions:

```typescript
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>;
}
```

## Features

- ✅ Server-side rendering for SEO optimization
- ✅ Responsive mobile-first design
- ✅ TypeScript for type safety
- ✅ Carousel support with Embla
- ✅ Icon library with Lucide React
- ✅ Code linting with ESLint
- ✅ Optimized font loading
- ✅ Fast refresh during development

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live after deployment

For more details, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- AWS Amplify
- Netlify
- Docker containers
- Traditional Node.js hosting

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Embla Carousel Documentation](https://www.embla-carousel.com/)

## License

This project is private and proprietary to BMSC.
