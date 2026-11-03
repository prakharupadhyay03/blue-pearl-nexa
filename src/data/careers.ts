import { JobPosition } from "@/types";

export const careerValues = [
  {
    title: "Craft Over Expediency",
    description:
      "We take deep pride in the elegance, security, and sub-second performance of our code. We never cut corners or ship bloated shortcuts.",
    icon: "Award",
  },
  {
    title: "Autonomous Ownership",
    description:
      "We hire senior thinkers who thrive with freedom and trust. No micromanagement, endless status meetings, or bureaucratic approval loops.",
    icon: "Compass",
  },
  {
    title: "Continuous Technical Mastery",
    description:
      "The web evolves constantly. We sponsor books, courses, conference travels, and open-source contributions to keep our team at the frontier.",
    icon: "Sparkles",
  },
  {
    title: "Candor & Transparent Teamwork",
    description:
      "We practice kind, radical honesty in code reviews, design critiques, and client discussions. Great ideas win on merit, not seniority.",
    icon: "MessageSquare",
  },
];

export const careerPerks = [
  {
    title: "Competitive Compensation",
    description: "Top-tier base salaries and project performance incentives.",
  },
  {
    title: "Remote-First Flexibility",
    description: "Work from our Bangalore studio or globally from anywhere you do your best thinking.",
  },
  {
    title: "Top-Tier Hardware",
    description: "Latest Apple Silicon MacBook Pro, 4K displays, and premium ergonomic workstation stipends.",
  },
  {
    title: "Annual Learning Fund",
    description: "₹1,50,000 / $2,000 annual budget for books, courses, tooling, and tech conferences.",
  },
  {
    title: "Comprehensive Health",
    description: "Premium medical insurance covering employees and immediate family members.",
  },
  {
    title: "Flexible Time Off",
    description: "Generous paid leave, public holidays, and dedicated mental rejuvenation days.",
  },
];

// Open positions list: currently at full capacity as requested by prompt ("Do not invent actual job openings. Use an appropriate empty-state message")
export const jobPositions: JobPosition[] = [
  // When openings become active, they populate here.
];

export const futureProfiles = [
  {
    role: "Senior Next.js & Frontend Architect",
    skills: "React 19, TypeScript, Next.js App Router, Tailwind CSS, Performance Optimization",
    type: "Full-Time • Remote or Hybrid",
  },
  {
    role: "Senior UI/UX Systems Designer",
    skills: "Figma, Design Tokens, Micro-interactions, Accessibility, Design Systems",
    type: "Full-Time • Remote or Hybrid",
  },
  {
    role: "Full-Stack Node.js & Cloud Engineer",
    skills: "PostgreSQL, Prisma, Node.js, AWS/Vercel Edge, API Architecture",
    type: "Full-Time • Remote or Hybrid",
  },
];

