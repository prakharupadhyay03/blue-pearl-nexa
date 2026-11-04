import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription:
      "Fast, responsive and well-crafted websites designed to give your business a strong digital presence.",
    fullDescription:
      "We design and engineer performant, accessible websites tailored to your commercial objectives. From custom design implementation to modern Next.js architectures, every build focuses on speed, responsiveness, and clear content presentation.",
    iconName: "Code2",
    imageUrl:
      "/webdev.png",
    features: [
      "Custom responsive layouts optimized for all device viewports",
      "Next.js App Router and TypeScript frontend engineering",
      "Semantic HTML structure and WCAG 2.1 accessibility compliance",
      "Core Web Vitals optimization for fast, predictable load times",
    ],
    deliverables: [
      "Production-ready Next.js web application",
      "Component-driven design system and assets",
      "Automated CI/CD build and deployment configuration",
      "Technical handoff documentation and training",
    ],
  },
  {
    id: "app-development",
    number: "02",
    title: "App Development",
    shortDescription:
      "Custom business applications designed to simplify workflows, improve operations and support your business goals.",
    fullDescription:
      "We build tailored business applications and internal administrative platforms that eliminate operational bottlenecks, centralize core data, and give modern teams the structured software tools they need to execute efficiently.",
    iconName: "AppWindow",
    imageUrl:
      "/appdevelopment.png",
    features: [
      "Role-based authentication, user permissions and access control",
      "Custom business logic, validation rules and workflow automation",
      "Real-time data synchronization and interactive dashboards",
      "Enterprise audit logging and activity tracking",
    ],
    deliverables: [
      "Full-stack custom web application codebase",
      "Role-based administration portal",
      "Database schema definitions and migration scripts",
      "Comprehensive API documentation and test coverage",
    ],
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    shortDescription:
      "Intuitive Android and iOS applications designed around real user needs and everyday usability.",
    fullDescription:
      "We build reliable mobile experiences using modern cross-platform frameworks. We prioritize ergonomic touch interactions, efficient state caching for offline reliability, and practical workflows that users can adopt without a learning curve.",
    iconName: "Smartphone",
    imageUrl:
      "/appdev.png",
    features: [
      "Cross-platform iOS and Android application development",
      "Offline-first local caching and seamless background sync",
      "Native device integration (camera, biometrics, notifications)",
      "Smooth micro-interactions and platform-specific UI conventions",
    ],
    deliverables: [
      "Compiled iOS and Android application binaries",
      "App Store & Google Play submission packages",
      "Mobile analytics and crash monitoring integration",
      "Source code repository with automated release scripts",
    ],
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud & DevOps Solutions",
    shortDescription:
      "Reliable cloud infrastructure, automated deployment workflows and scalable environments for modern applications.",
    fullDescription:
      "We structure and manage predictable cloud setups across AWS, Google Cloud, and modern serverless platforms. Our focus is automated deployment pipelines, resilient container orchestration, and sensible resource scaling that prevents surprise infrastructure costs.",
    iconName: "Cloud",
    imageUrl:
      "/clouddevops.png",
    features: [
      "Infrastructure as Code (Terraform) for repeatable environments",
      "Automated CI/CD deployment pipelines (GitHub Actions, GitLab)",
      "Containerization and container orchestration with Docker & Kubernetes",
      "Proactive application monitoring, log aggregation and alert systems",
    ],
    deliverables: [
      "Declarative Infrastructure as Code configurations",
      "Configured automated deployment pipelines",
      "Health dashboards and alert routing policies",
      "Disaster recovery and automated backup runbooks",
    ],
  },
  {
    id: "api-backend-engineering",
    number: "05",
    title: "API & Backend Engineering",
    shortDescription:
      "Robust APIs, database architecture and dependable backend systems that keep digital products running smoothly.",
    fullDescription:
      "We architect dependable server-side architectures, scalable relational and document databases, and clean RESTful/GraphQL interfaces. Every system is built with data validation, structured logging, and straightforward maintainability as core priorities.",
    iconName: "Workflow",
    imageUrl:
      "/backend.png",
    features: [
      "RESTful and GraphQL API design with OpenAPI specification",
      "Relational (PostgreSQL) and document database modeling",
      "Background worker queues and event-driven job processors",
      "Rate limiting, request validation and structured error handling",
    ],
    deliverables: [
      "Type-safe backend API services and schemas",
      "Database migration scripts and seed datasets",
      "OpenAPI / Swagger interactive documentation",
      "Unit and integration test suites with CI verification",
    ],
  },
  {
    id: "cybersecurity-auditing",
    number: "06",
    title: "Cybersecurity & Auditing",
    shortDescription:
      "Practical security assessments and application audits to identify vulnerabilities and strengthen digital protection.",
    fullDescription:
      "We perform pragmatic code reviews, dependency vulnerability scanning, authentication flow assessments, and infrastructure security checks. We provide clear, prioritized remediation paths rather than unhelpful automated scanner reports.",
    iconName: "ShieldCheck",
    imageUrl:
      "/cybersecurity.png",
    features: [
      "OWASP Top 10 vulnerability assessments and code reviews",
      "Authentication, token handling and session security audits",
      "Third-party dependency and open-source license risk analysis",
      "Infrastructure network configuration and permission boundary review",
    ],
    deliverables: [
      "Comprehensive security audit findings report",
      "Prioritized vulnerability remediation roadmap",
      "Patch verification and re-testing sign-off",
      "Practical secure-coding checklist for development teams",
    ],
  },
  {
    id: "digital-growth-branding",
    number: "07",
    title: "Digital Growth & Branding",
    shortDescription:
      "Consistent digital branding, search visibility and thoughtful marketing strategies that help businesses grow online.",
    fullDescription:
      "We help technology companies establish an authoritative online presence through coherent visual branding, search engine accessibility, structured metadata, and measurable digital growth channels that generate qualified inbound inquiries.",
    iconName: "TrendingUp",
    imageUrl:
      "/digitalgrowth.png",
    features: [
      "Coherent visual brand guidelines, typography and color systems",
      "Technical SEO, semantic schema markup and crawl optimization",
      "Conversion rate optimization (CRO) and user journey audits",
      "Privacy-respecting analytics and conversion funnel measurement",
    ],
    deliverables: [
      "Comprehensive digital brand guidelines and vector assets",
      "Technical SEO configuration and XML sitemap hierarchy",
      "Analytics tracking dashboards and event goal setup",
      "Quarterly digital presence review and growth recommendations",
    ],
  },
];
