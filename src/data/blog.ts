import { BlogPost } from "@/types";

export const blogCategories = [
  "All",
  "Web Architecture",
  "Performance & Speed",
  "UI/UX Design",
  "E-Commerce",
  "Engineering Standards",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-web-architecture-nextjs-app-router",
    title: "Why Next.js App Router and Server Components Redefine Modern Corporate Web Architecture",
    excerpt:
      "A deep technical dive into how React Server Components, streaming SSR, and edge data fetching eliminate traditional client-side JavaScript bloat.",
    content: [
      "For years, modern web engineering struggled with an uncomfortable tradeoff: developers wanted the rich reactivity of single-page applications (SPAs), but enterprise businesses suffered from sluggish Initial Page Loads, heavy JavaScript bundles, and brittle SEO indexing.",
      "The introduction of React Server Components (RSC) and the Next.js App Router fundamentally shifts this equation. By executing component logic and database queries on the server by default, client browsers receive clean, streamable HTML rather than massive client-side bundles.",
      "Key Architectural Advantages of Server Components:",
      "1. Zero Client-Side Bundle for Static Content: Markdown parsers, date formatting libraries, and large data-fetching utilities remain entirely on the server, shaving hundreds of kilobytes off initial mobile downloads.",
      "2. Streaming With Suspense: Rather than blocking the entire page render while waiting for a slow microservice or third-party CRM query, fast static sections render immediately while dynamic components stream in progressively.",
      "3. Direct Server Actions: Mutating data no longer requires wiring up custom Express endpoints or boilerplate API route handlers. Form actions execute securely on the server with full TypeScript validation.",
      "At Blue Pearl Nexa, standardizing our client flagships on Next.js App Router has resulted in average performance improvements of 45% in Time to First Byte (TTFB) and consistent 99/100 Google Lighthouse scores across all desktop and mobile viewports.",
    ],
    category: "Web Architecture",
    date: "October 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Marcus Vance",
      role: "Lead Solutions Architect",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "achieving-sub-second-core-web-vitals",
    title: "The Death of Sluggish Websites: Achieving 95+ Core Web Vitals in 2026",
    excerpt:
      "Why sub-second page loads are no longer just an engineering metric, but a direct driver of corporate revenue, SEO rank, and client trust.",
    content: [
      "User tolerance for slow digital experiences has reached an all-time low. Industry studies repeatedly demonstrate that a 100-millisecond delay in website response time can depress conversion rates by up to 7%.",
      "Google's Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift) now serve as decisive ranking factors in organic search results.",
      "To achieve consistent 95+ scores on mobile:",
      "• Image Optimization & Next-Gen Formats: Never serve raw JPEG or PNG assets directly. Modern Next.js Image components automatically transcode assets into AVIF and WebP formats, tailored to the visitor's screen density.",
      "• Font Display Strategies: Using system font fallbacks or preloaded variable fonts with font-display: swap prevents layout shifting and invisible text during font loading.",
      "• Eliminating Third-Party Tag Bloat: Legacy tracking scripts and bloated chat widgets often delay hydration by multiple seconds. Loading analytics asynchronously via Cloudflare Workers or server-side Google Tag Manager protects main thread interactivity.",
    ],
    category: "Performance & Speed",
    date: "October 14, 2026",
    readTime: "5 min read",
    author: {
      name: "Sophia Sterling",
      role: "Principal Frontend Engineer",
      avatarUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    slug: "human-centered-ui-ux-design-for-conversion",
    title: "Designing for Conversion: Human Psychology in Corporate UI/UX",
    excerpt:
      "How deliberate whitespace, typography hierarchy, and cognitive load reduction translate directly into higher enterprise engagement.",
    content: [
      "Many corporate websites fail not because of flawed technology, but because of cognitive overload. When an executive or decision-maker lands on a homepage, they have an urgent question: 'Can this company solve my specific problem reliably?'",
      "If the answer is buried beneath flashy particle animations, confusing navigation menus, or generic stock illustrations, they will bounce within seconds.",
      "Our Core UI/UX Principles for Enterprise Platforms:",
      "1. Visual Hierarchy: Every viewport should have one primary focal point. Supporting information should recede gracefully into softer contrast levels.",
      "2. Generous Editorial Whitespace: Whitespace is not empty space—it is an active design element that confers luxury, focus, and authority.",
      "3. Purposeful Motion: Animations should only exist to orient the user or provide feedback. If an animation exists solely for decoration, it is distracting.",
    ],
    category: "UI/UX Design",
    date: "September 29, 2026",
    readTime: "7 min read",
    author: {
      name: "Julian Rivera",
      role: "Creative Director",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    slug: "headless-vs-monolithic-ecommerce",
    title: "Headless vs. Monolithic: Choosing the Right E-Commerce Stack for Scale",
    excerpt:
      "Comparing monolithic all-in-one store platforms with modern headless architectures using React, Next.js, and Stripe.",
    content: [
      "As e-commerce brands scale beyond their initial product lines, traditional monolithic platforms (such as legacy WooCommerce or standard Shopify themes) often become performance bottlenecks.",
      "A headless architecture decouples the customer-facing frontend from the backend commerce engine. This enables developers to craft bespoke, blisteringly fast storefronts in Next.js while retaining robust merchant backend tools for inventory and order fulfillment.",
      "When Should You Go Headless?",
      "• When custom product configurators or complex filtering require instantaneous client feedback.",
      "• When global localization and multi-currency edge caching are paramount.",
      "• When brand storytelling and editorial shopping experiences cannot be constrained by rigid theme templates.",
    ],
    category: "E-Commerce",
    date: "September 12, 2026",
    readTime: "8 min read",
    author: {
      name: "Marcus Vance",
      role: "Lead Solutions Architect",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    slug: "typescript-enterprise-scale",
    title: "TypeScript at Scale: How Strict Typing Protects High-Growth Startups",
    excerpt:
      "Preventing runtime crashes, guaranteeing API payload consistency, and boosting team velocity through strict TypeScript configurations.",
    content: [
      "In early-stage software development, speed often comes at the cost of code quality. However, as applications scale and multiple engineers contribute to the same codebase, untyped JavaScript rapidly turns into a minefield of 'Cannot read properties of undefined' errors.",
      "Strict TypeScript configurations enforce a single source of truth across components, server actions, and external API integrations.",
      "Real-World Benefits We Deliver for Clients:",
      "• Self-Documenting Codebases: Any engineer can inspect a component's props and immediately understand its contract without reading external documentation.",
      "• Refactoring Confidence: Renaming a field or restructuring a database model produces immediate compile-time errors in every affected file, eliminating silent production bugs.",
    ],
    category: "Engineering Standards",
    date: "August 24, 2026",
    readTime: "5 min read",
    author: {
      name: "Sophia Sterling",
      role: "Principal Frontend Engineer",
      avatarUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1516116211227-bbc07ef6996d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    slug: "safe-website-redesign-seo-preservation",
    title: "The Enterprise Guide to Web Redesigns Without Losing SEO Rankings",
    excerpt:
      "A strategic checklist for migrating legacy corporate websites to Next.js while protecting organic search traffic and backlink equity.",
    content: [
      "A website redesign should accelerate business growth, not tank organic search rankings. Yet all too often, redesigns launch without proper URL mapping, causing sudden 404 errors, loss of high-ranking keywords, and drop in organic inquiries.",
      "The Blue Pearl Nexa Migration Framework:",
      "1. Complete URL & Backlink Crawl: Before modifying any code, we map every indexed URL, its incoming backlinks, and its top ranking search queries.",
      "2. Exact 1:1 301 Redirect Mapping: Any altered URL structure receives a permanent 301 redirect implemented at the edge CDN level for instantaneous response.",
      "3. Structured Schema Markup: Incorporating JSON-LD Organization, BreadcrumbList, and WebSite schemas helps Google understand the site's authority during re-indexing.",
    ],
    category: "Web Architecture",
    date: "August 05, 2026",
    readTime: "6 min read",
    author: {
      name: "Julian Rivera",
      role: "Creative Director",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];

