import React from "react";
import {
  SiPython,
  SiMongodb,
  SiMysql,
  SiAmazonwebservices,
  SiVuedotjs,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiSupabase,
  SiFigma,
  SiGit,
  SiGraphql,
  SiPostman,
  SiHtml5,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud & DevOps" | "Design & Tools";
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

// Row 1: Python, Java, MongoDB, MySQL, AWS, Vue.js, TypeScript, React, Next.js
export const row1: TechItem[] = [
  { name: "Python", category: "Backend", icon: SiPython, color: "#3776AB" },
  { name: "Java", category: "Backend", icon: FaJava, color: "#E76F00" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "AWS", category: "Cloud & DevOps", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Vue.js", category: "Frontend", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#101A35" },
];

// Row 2: Node.js, Tailwind CSS, PostgreSQL, Docker, Redis, Supabase, Figma, Git & GitHub, GraphQL, Postman
export const row2: TechItem[] = [
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", category: "Cloud & DevOps", icon: SiDocker, color: "#2496ED" },
  { name: "Redis", category: "Database", icon: SiRedis, color: "#FF4438" },
  { name: "Supabase", category: "Database", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Figma", category: "Design & Tools", icon: SiFigma, color: "#F24E1E" },
  { name: "Git & GitHub", category: "Design & Tools", icon: SiGit, color: "#F05032" },
  { name: "GraphQL", category: "Backend", icon: SiGraphql, color: "#E10098" },
  { name: "Postman", category: "Design & Tools", icon: SiPostman, color: "#FF6C37" },
];

// Row 3: Expanded showcase technologies
export const row3: TechItem[] = [
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "Cloudflare", category: "Cloud & DevOps", icon: SiCloudflare, color: "#F38020" },
  { name: "Vercel", category: "Cloud & DevOps", icon: SiVercel, color: "#000000" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#101A35" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS", category: "Cloud & DevOps", icon: SiAmazonwebservices, color: "#FF9900" },
];

// Unique list of all distinct technologies for categorized directory
export const allTechnologies: TechItem[] = [
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#101A35" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vue.js", category: "Frontend", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", category: "Backend", icon: SiPython, color: "#3776AB" },
  { name: "Java", category: "Backend", icon: FaJava, color: "#E76F00" },
  { name: "GraphQL", category: "Backend", icon: SiGraphql, color: "#E10098" },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", category: "Database", icon: SiRedis, color: "#FF4438" },
  { name: "Supabase", category: "Database", icon: SiSupabase, color: "#3ECF8E" },
  { name: "AWS", category: "Cloud & DevOps", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", category: "Cloud & DevOps", icon: SiDocker, color: "#2496ED" },
  { name: "Cloudflare", category: "Cloud & DevOps", icon: SiCloudflare, color: "#F38020" },
  { name: "Vercel", category: "Cloud & DevOps", icon: SiVercel, color: "#000000" },
  { name: "Figma", category: "Design & Tools", icon: SiFigma, color: "#F24E1E" },
  { name: "Git & GitHub", category: "Design & Tools", icon: SiGit, color: "#F05032" },
  { name: "Postman", category: "Design & Tools", icon: SiPostman, color: "#FF6C37" },
];

export const showcaseCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Design & Tools",
] as const;

