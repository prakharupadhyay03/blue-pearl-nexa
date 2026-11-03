import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, objectives, target audience and requirements.",
    details: [
      "Deep-dive stakeholder interviews to define project goals and KPIs",
      "Competitive benchmarking and digital positioning analysis",
      "Audience persona definition and key conversion paths mapping",
      "Technical architecture and integration scope planning",
    ],
    deliverables: [
      "Project Discovery Blueprint",
      "Technical Architecture Roadmap",
      "Site Hierarchy & Content Map",
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create the website structure, visual direction and user experience.",
    details: [
      "Low-fidelity wireframing to validate user flow and content hierarchy",
      "Design moodboards reflecting Blue Pearl Nexa's premium brand aesthetic",
      "High-fidelity interactive UI prototypes built in Figma",
      "Cross-device responsive layout design for mobile, tablet, and desktop",
    ],
    deliverables: [
      "Interactive Figma Prototypes",
      "Comprehensive Design System",
      "Micro-interaction & Animation Guidelines",
    ],
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the website using modern technologies with responsive and performance-focused development.",
    details: [
      "Clean, modular Next.js App Router and TypeScript engineering",
      "Strict semantic HTML5 markup and Tailwind CSS design tokens",
      "Pixel-perfect responsive implementation across all breakpoints",
      "Automated unit testing, cross-browser verification, and code reviews",
    ],
    deliverables: [
      "Production-ready Next.js Repository",
      "Optimized Asset Pipeline",
      "Sub-second Core Web Vitals",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Test, deploy and provide ongoing improvements.",
    details: [
      "Rigorous pre-launch QA across mobile, tablet, desktop, and Safari/Chrome",
      "Production deployment with zero downtime via high-availability cloud CDNs",
      "SEO audit, XML sitemaps, structured schema data, and analytics setup",
      "Post-launch warranty, ongoing monitoring, and performance retainers",
    ],
    deliverables: [
      "Production Launch Verification",
      "SEO & Analytics Audit Report",
      "Post-Launch Technical SLA & Support",
    ],
  },
];

