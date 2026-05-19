# BMSC Website

**Bangladesh Marma Students Council Official Website**

A modern, responsive website built with Next.js 16, React 19, and Tailwind CSS v4. This project showcases contemporary web development practices with interactive components, optimized performance, and beautiful design.

## 🎯 About BMSC

The Bangladesh Marma Students Council (BMSC) has been uniting Marma students across Bangladesh since **1989**, preserving culture, championing indigenous rights, and building leadership in the Chittagong Hill Tracts.

### Mission

To unite Marma students across Bangladesh, fostering education, cultural pride, leadership, and advocacy for indigenous rights in the Chittagong Hill Tracts and beyond.

### Core Principles

- **শিক্ষা (Education)** - Empowering every Marma student with knowledge and opportunities
- **সাম্য (Equality)** - Advocating for equal rights and dignity for all indigenous peoples
- **মৈত্রী (Friendship)** - Building bridges of solidarity and unity
- **প্রগতি (Progress)** - Driving social, cultural, and economic development

## 🌟 Features

- ✅ **Server-Side Rendering** with Next.js App Router for optimal SEO
- ✅ **Responsive Mobile-First Design** - Perfect on all devices
- ✅ **Tailwind CSS v4** - Modern utility-first styling with custom theme
- ✅ **Interactive Carousels** - Embla Carousel with auto-play and indicators
- ✅ **Type-Safe Code** - Full TypeScript support
- ✅ **Accessible Components** - Built with Radix UI primitives
- ✅ **Dark/Light Theming** - Custom color palette with CSS variables
- ✅ **ESLint & Code Quality** - Consistent code standards
- ✅ **Optimized Performance** - Fast load times and smooth interactions

## 📋 Project Structure

```
bmsc-website/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with responsive menu
│   │   ├── Footer.tsx           # Footer with links and info
│   │   ├── CorePrinciples.tsx   # Mission, vision, goals section
│   │   └── ui/
│   │       └── carousel.tsx     # Custom carousel component
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About us with timeline
│   ├── programs/page.tsx        # Programs & initiatives
│   ├── gallery/page.tsx         # Photo & video gallery
│   ├── news/page.tsx            # News & events
│   ├── contact/page.tsx         # Contact form
│   ├── join/page.tsx            # Join membership
│   ├── archive/page.tsx         # Document archive
│   ├── globals.css              # Global styles + Tailwind theme
│   └── page.module.css          # Page-specific styles
├── lib/
│   └── utils.ts                 # Utility functions (cn, etc.)
├── public/                      # Static assets
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
└── package.json                 # Dependencies & scripts
```

## 🎨 Color Theme & Design Philosophy

### Theme Overview

The BMSC website uses a carefully curated color palette rooted in **nature, heritage, and cultural identity**. Each color is intentionally selected to reflect the Marma community's deep connection to the Chittagong Hill Tracts environment while maintaining modern web accessibility standards.

### Color Palette

| Color            | Hex       | CSS Variable           | Purpose                    | Psychology                         |
| ---------------- | --------- | ---------------------- | -------------------------- | ---------------------------------- |
| **Forest**       | `#1a3a2a` | `--color-forest`       | Primary background         | Trust, stability, nature           |
| **Forest Mid**   | `#2d5a40` | `--color-forest-mid`   | Secondary background       | Balance, growth, harmony           |
| **Forest Light** | `#3d7a56` | `--color-forest-light` | Tertiary background        | Vitality, healing, hope            |
| **Leaf**         | `#7ab648` | `--color-leaf`         | Accent - calls to action   | Nature, renewal, prosperity        |
| **Gold**         | `#c8922a` | `--color-gold`         | Accent - premium/highlight | Prestige, value, tradition         |
| **Sun**          | `#f0a500` | `--color-sun`          | Accent - energy/warmth     | Energy, optimism, celebration      |
| **Cream**        | `#f8f3ea` | `--color-cream`        | Text/light backgrounds     | Clarity, warmth, readability       |
| **Earth**        | `#8b5e3c` | `--color-earth`        | Secondary accent           | Stability, authenticity, grounding |
| **Muted**        | `#6b6b5a` | `--color-muted`        | Secondary text             | Sophistication, subtle contrast    |

### Design Theory

#### 🌲 Forest Greens (Primary Colors)

- **Foundation of identity**: The three shades of forest green represent the Chittagong Hill Tracts landscape - from deep shadows of the forest to light filtering through canopy
- **Emotional connection**: Green universally represents nature, growth, and renewal - core values of environmental preservation
- **Cultural significance**: Reflects the indigenous landscape and environmental stewardship central to Marma community activism
- **Accessibility**: High contrast ratios ensure readability for all users while maintaining visual harmony

#### 🍃 Leaf Green (Natural Accent)

- **Call to action**: Used for "Join Us" buttons, links, and interactive elements
- **Psychology**: Represents new beginnings and active participation
- **Symbolism**: Direct reference to nature and environmental advocacy
- **Engagement**: Draws attention naturally without feeling aggressive

#### ✨ Gold (Heritage & Prestige)

- **Cultural reverence**: Gold traditionally signifies prestige, cultural heritage, and ceremonial importance
- **Timeline markers**: Used for historical milestones and important achievements
- **Premium accents**: Elevates certain sections and components
- **Warmth**: Creates a welcoming, dignified atmosphere
- **Tradition**: Connects to cultural ornamentation and artistic heritage

#### ☀️ Sun (Energy & Movement)

- **Vitality**: Represents the vibrancy and energy of youth leadership
- **Ticker messages**: Used in animated banner sections
- **Accent highlights**: Brings warmth and optimism to the design
- **Call-to-action secondary**: Alternative to green for secondary engagement buttons
- **Celebration**: Used for celebratory content and positive announcements

#### 🟤 Cream (Accessibility & Contrast)

- **Primary text**: Ensures excellent readability on dark backgrounds
- **Clarity**: High contrast ratio (WCAG AAA compliant)
- **Warmth**: Avoids harsh pure white, reducing eye strain
- **Heritage**: Warm ivory tones reflect natural materials and authenticity
- **Approachability**: Creates a softer, more inviting aesthetic

#### 🪨 Earth Brown (Secondary Support)

- **Grounding**: Provides stability and authenticity
- **Alternative accent**: Used for secondary navigation and supporting elements
- **Balance**: Prevents over-reliance on green, creating visual depth
- **Regional reference**: Represents the soil and landscape of CHT

### Color Usage Guidelines

**Primary Sections**

- Headers and hero sections: Forest gradient backgrounds
- Main navigation: Forest with cream text
- Body text: Muted or cream on light backgrounds

**Interactive Elements**

- Primary buttons: Leaf green (`border-(--leaf)`)
- Secondary buttons: Forest with gold borders
- Links and calls-to-action: Leaf or gold
- Hover states: Lighter shade of base color

**Information Hierarchy**

- Most important: Gold and sun accents
- Secondary: Forest mid and light
- Tertiary: Muted and earth tones

**Data Visualization**

- Charts: Forest mid, leaf, gold, sun (sequential palette)
- Highlights: Sun for peaks, forest for valleys
- Categories: Distinct forest shades with gold/leaf accents

### Accessibility Features

- ✅ **WCAG AAA Compliant**: All text meets minimum contrast ratios
- ✅ **Color-blind friendly**: Uses varied hues, not just saturation differences
- ✅ **Reduced motion**: Respects `prefers-reduced-motion` settings
- ✅ **Dark mode ready**: Palette maintains readability in different lighting
- ✅ **High contrast option**: Easy to implement alternative palette

### CSS Variables Usage

All colors are defined as CSS custom properties in `globals.css`:

```css
@theme {
  --color-forest: #1a3a2a;
  --color-forest-mid: #2d5a40;
  --color-forest-light: #3d7a56;
  --color-leaf: #7ab648;
  --color-gold: #c8922a;
  --color-sun: #f0a500;
  --color-cream: #f8f3ea;
  --color-earth: #8b5e3c;
}
```

Used in Tailwind classes:

```html
<button className="bg-(--leaf) text-(--cream)">Join Us</button>
<div className="border-(--gold)">Featured</div>
```

### Evolution & Flexibility

The color theme is **intentionally flexible** to allow:

- Seasonal color variations (e.g., autumn tones for specific campaigns)
- Regional customization for different CHT districts
- Dark/light mode implementations
- High-contrast accessibility modes
- Cultural event specific palettes

### Design Inspiration

This palette draws inspiration from:

- 🏔️ Chittagong Hill Tracts landscape and biodiversity
- 🎨 Traditional Marma textile patterns and craftsmanship
- 🌍 Indigenous earth and nature symbolism
- ♿ Modern accessibility and inclusive design principles
- 🎭 Cultural festivals and celebrations of the Marma community

---

## 🛠️ Tech Stack

### Core Framework

- **Next.js 16.2.6** - React framework with App Router & SSR
- **React 19.2.4** - Modern UI library with hooks
- **TypeScript 5** - Type safety and better DX

### Styling

- **Tailwind CSS 4.3.0** - Utility-first CSS framework (v4 syntax)
- **PostCSS 8.5.14** - CSS transformations
- **tailwind-merge & clsx** - Class name utilities

### Components & UI

- **Embla Carousel 8.6.0** - Lightweight carousel library
- **Lucide React 1.16.0** - Beautiful SVG icons
- **Radix UI (react-slot)** - Accessible component primitives
- **class-variance-authority** - Component style variants

### Development

- **ESLint 9** - Code linting and quality
- **Node Types 20** - TypeScript definitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

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

Open [http://localhost:3000](http://localhost:3000) to see the site. Changes auto-refresh.

### Build for Production

Build the application:

```bash
npm run build
```

Start production server:

```bash
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

## 📄 Pages

- **Home** (`/`) - Hero, stats, programs, testimonials, gallery, CTA
- **About** (`/about`) - Mission, vision, goals, timeline, structure, leadership
- **Programs** (`/programs`) - BMSC initiatives and programs
- **Gallery** (`/gallery`) - Photo and video archive
- **News** (`/news`) - Latest updates and events
- **Contact** (`/contact`) - Contact form and information
- **Join** (`/join`) - Membership information and application
- **Archive** (`/archive`) - Document and press release archive

## 🎯 Component Highlights

### Carousel with Indicators

- Auto-play with configurable delay
- Previous/Next navigation buttons
- Visual progress indicator bars
- Responsive on all devices
- Touch-friendly controls

### Timeline

- Responsive vertical timeline
- Responsive on mobile (no vertical line)
- Desktop view with connector line
- Historical journey from 1989

### Gallery

- Masonry layout on desktop
- Responsive grid on mobile/tablet
- Hover effects and overlays
- API-ready for dynamic content

### Navigation

- Fixed header with scroll detection
- Responsive mobile menu
- Logo and brand identity
- Active link highlighting

## 🔧 Tailwind CSS v4 Features Used

- **Modern syntax**: `border-(--gold)`, `text-(--gold)!` instead of old syntax
- **Linear gradients**: `bg-linear-to-br` with custom colors
- **CSS custom properties**: Theme colors defined in `@theme` block
- **Important modifier**: Moved to end `class!` instead of `!class`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: 1024px+ (4+ columns)

All components are mobile-first and fully responsive.

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project to Vercel
3. Vercel auto-detects Next.js configuration
4. Automatic deployments on push

### Other Platforms

- AWS Amplify
- Netlify
- Docker containers
- Traditional Node.js hosting

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Lucide Icons](https://lucide.dev/)

## 📝 Code Examples

### Adding a New Page

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-[1280px] mx-auto px-8">
        <h1>Page Title</h1>
      </div>
    </section>
  );
}
```

### Using the Carousel

```typescript
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/components/ui/carousel";

<Carousel>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id}>
        {item.content}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## 📄 License

This project is private and proprietary to Bangladesh Marma Students Council (BMSC).

---

**Built with ❤️ for the Marma Community**
