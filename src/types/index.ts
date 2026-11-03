export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageUrl?: string;
  features: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
  projectType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  imageUrl: string;
  featured?: boolean;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  status: "open" | "future";
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  projectType: string;
  budgetRange: string;
  projectDescription: string;
}
