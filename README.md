# Blue Pearl Nexa — Multi-Page Digital Solutions Platform

A complete, premium, multi-page website for **BLUE PEARL NEXA**, a website development, web design, and digital solutions company. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

---

## 💎 Brand Identity & Visual Palette

- **Midnight Navy (`#101A35`)**: Anchor dark color for authoritative headings, dark sections (Why Choose Us, CTA Banner, Footer), page banners, and high-contrast overlays.
- **Royal Blue (`#2448A5`)**: Selective interactive accent: Primary CTA buttons ("Get in Touch"), active navigation state indicators, badges, and interactive hover highlights.
- **Pearl White (`#FAFAF8`)**: Primary canvas background providing spacious editorial breathing room.
- **Soft Silver (`#D9DDE5`)**: Subtle borders, dividers, card outlines, and metadata tags.
- **Slate Grey (`#727989`)**: Legible, comfortable body copy and secondary metadata.
- **Deep Charcoal (`#171B24`)**: High-contrast body typography and dark surface cards.

---

## 🗺️ Multi-Page Routing Architecture

The website is structured as a complete multi-page platform with dedicated routes for every navigation item:

| Route | Page Name | Purpose & Contents |
| :--- | :--- | :--- |
| `/` | **Home** | Primary landing page featuring the full-width cinematic hero, company intro, approach, service highlights, portfolio showcase, dark navy value section, development process, testimonials, FAQ, and contact trigger. |
| `/about` | **About Us** | Discover who we are: Origin story, mission & vision, core cultural values, leadership & engineering team profiles, and why choose us. |
| `/services` | **Our Services** | Detailed breakdowns of all 6 core services (Website Design, Website Development, E-Commerce, Corporate Sites, Redesigns, Maintenance), with capabilities, deliverables, and service inquiry triggers. |
| `/technologies` | **Technologies** | Structured technology stack organized into 6 categories: Frontend, Backend, Database, Frameworks & Libraries, Cloud & Deployment, and Development Tools. |
| `/portfolio` | **Our Portfolio** | Selected demonstration platforms (*Aura Financial OS*, *Kanso Living*, *Vanguard Global Logistics*, *Crestview Health*, *Helios Renewable Systems*) with category filtering and interactive case study modals. |
| `/blog` | **Blog & Insights** | Knowledge base with featured article, category filters, publication dates, read time estimates, and author cards. |
| `/blog/[slug]` | **Article Detail** | Full editorial reader for individual articles with key takeaways, code callouts, author bios, and related articles. |
| `/careers` | **Career** | Company culture, perks & benefits, transparent empty-state position notification, anticipated future profiles, and speculative application option. |
| `/contact` | **Contact** | Full project specification inquiry form with client-side validation, direct contact details, response SLAs, and onboarding FAQ. |
| `/privacy` | **Privacy Policy** | Proprietary information and client code ownership standards. |
| `/terms` | **Terms** | Terms of engagement, statement of work guidelines, and delivery benchmarks. |

---

## 🧭 Navigation & Header Highlights

- **8 Dedicated Navigation Items**: Home, About Us, Services, Technologies, Portfolio, Blog, Career, Contact.
- **Updated Action CTA**: "Get in Touch" button navigating directly to `/contact`.
- **Pure Brand Identity**: Logo emblem + "BLUE PEARL NEXA" typography (the "Digital Web Studio" tagline has been removed).
- **Active Navigation State**: Highlights the current route with a royal blue pill and indicator dot using `usePathname()`.
- **Responsive Mobile Menu**: Clean animated hamburger toggle that expands an accessible slide-down drawer and closes automatically on navigation.
- **Introductory Page Banners**: Every internal page features a consistent, full-width banner using the approved Midnight Navy and Royal Blue palette with breadcrumbs and supporting descriptions.
- **Smooth Page Transitions**: Powered by Framer Motion for subtle, performant upward fade reveals without jarring layout shifts.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Running Locally

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
