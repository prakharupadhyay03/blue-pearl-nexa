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
    description: "Work from our studio or globally from anywhere you do your best thinking.",
  },
  {
    title: "Top-Tier Hardware",
    description: "Latest Apple Silicon MacBook Pro, 4K displays, and premium ergonomic workstation stipends.",
  },
  {
    title: "Annual Learning Fund",
    description: "Dedicated annual budget for books, courses, tooling, and tech conferences.",
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

// Open Positions based on official Blue Pearl Nexa hiring requirements
export const jobPositions: JobPosition[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Frontend Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Build sub-second, highly accessible web applications using Next.js App Router, React 19, TypeScript, and modern CSS frameworks.",
    requirements: [
      "Proficiency in React 19, Next.js, and TypeScript",
      "Strong understanding of Core Web Vitals and SSR",
      "Expertise in Tailwind CSS and responsive design",
    ],
    status: "open",
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    department: "Backend Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Design and maintain high-throughput REST & GraphQL APIs, microservices, and database architectures.",
    requirements: [
      "Deep knowledge of Node.js, TypeScript, and PostgreSQL / MySQL",
      "Experience with Redis, Prisma ORM, and cloud deployments",
      "Knowledge of secure authentication and API rate limiting",
    ],
    status: "open",
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Full Stack Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Architect end-to-end digital solutions connecting polished React frontends to robust serverless backends.",
    requirements: [
      "Proven full-stack expertise with Next.js, Node.js, and SQL",
      "Experience with AWS, Docker, or Vercel infrastructure",
      "Solid problem-solving skills and clean architecture practices",
    ],
    status: "open",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Product & Brand Design",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Craft human-centered user experiences, pixel-perfect design systems, and responsive wireframes in Figma.",
    requirements: [
      "Expert in Figma, auto-layout, design tokens, and components",
      "Strong understanding of accessibility (WCAG) and usability",
      "Portfolio demonstrating clean typography and interaction design",
    ],
    status: "open",
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer (General)",
    department: "Mobile Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Develop performant, native-like mobile applications across iOS and Android ecosystems.",
    requirements: [
      "Hands-on experience in cross-platform and native mobile architectures",
      "Experience with App Store and Google Play deployment workflows",
      "Proficiency in mobile UI patterns and state management",
    ],
    status: "open",
  },
  {
    id: "flutter-developer",
    title: "Flutter Developer",
    department: "Mobile Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Create cross-platform mobile apps with buttery smooth 60fps animations using Flutter & Dart.",
    requirements: [
      "Strong proficiency in Dart and Flutter framework",
      "Experience with Bloc, Provider, or Riverpod state management",
      "Integration with RESTful APIs, Firebase, and native plugins",
    ],
    status: "open",
  },
  {
    id: "react-native-developer",
    title: "React Native Developer",
    department: "Mobile Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Engineer scalable mobile applications using React Native, Expo, and TypeScript.",
    requirements: [
      "Expertise in React Native and modern JavaScript/TypeScript",
      "Experience with Expo, React Navigation, and native bridging",
      "Deep understanding of mobile offline storage and push notifications",
    ],
    status: "open",
  },
  {
    id: "android-developer",
    title: "Android Developer (Kotlin/Java)",
    department: "Native Mobile Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Build robust, scalable native Android applications using Kotlin, Jetpack Compose, and modern architecture components.",
    requirements: [
      "Expertise in Kotlin and Jetpack Compose",
      "Familiarity with Coroutines, Flow, Dagger-Hilt, and Room",
      "Adherence to Material Design guidelines and Google Play standards",
    ],
    status: "open",
  },
  {
    id: "ios-developer",
    title: "iOS Developer (Swift)",
    department: "Native Mobile Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Develop refined native iOS applications using Swift, SwiftUI, and Apple ecosystem frameworks.",
    requirements: [
      "Deep knowledge of Swift, SwiftUI, and UIKit",
      "Experience with Combine, Core Data, and async/await concurrency",
      "Commitment to Apple Human Interface Guidelines and App Store standards",
    ],
    status: "open",
  },
];

export const careerRolesList = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Mobile App Developer (General)",
  "Flutter Developer",
  "React Native Developer",
  "Android Developer (Kotlin/Java)",
  "iOS Developer (Swift)",
];

export const futureProfiles = [
  {
    role: "Senior Solutions & Cloud Architect",
    skills: "AWS, Kubernetes, Next.js, Distributed Systems, Microservices",
    type: "Full-Time • Remote or Hybrid",
  },
  {
    role: "AI & Machine Learning Engineer",
    skills: "Python, PyTorch, LLM Fine-Tuning, LangChain, Vector Databases",
    type: "Full-Time • Remote or Hybrid",
  },
  {
    role: "DevOps & Infrastructure Lead",
    skills: "CI/CD, Terraform, Docker, Cloudflare Workers, Edge Computing",
    type: "Full-Time • Remote or Hybrid",
  },
];
