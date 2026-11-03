"use client";

import React, { useState, useEffect } from "react";
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
  SiPrisma,
  SiKubernetes,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

// Exactly 4 curated groups of 6 technologies each (all 19 original technologies preserved)
const techGroups: TechItem[][] = [
  // Group 1: Modern Frontend & Core Languages
  [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#101A35" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
  // Group 2: Enterprise Backend & Databases
  [
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#FF4438" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  ],
  // Group 3: Cloud Infrastructure & Modern Frameworks
  [
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    { name: "Vercel", icon: SiVercel, color: "#101A35" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  ],
  // Group 4: Architecture, Design & Developer Tooling
  [
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  ],
];

export default function TrustSection() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    // Automatically transition to the next group of 6 technologies every 1.5 seconds
    const interval = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % techGroups.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Technologies We Work With"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-2.5">
            Technologies We Work With
          </h2>
          <p className="text-sm sm:text-lg text-[#727989] font-normal max-w-2xl mx-auto leading-relaxed">
            We leverage the latest technologies to build robust and scalable solutions
          </p>
        </div>

        {/* Minimal Clean Logo Showcase: 6 Logos (3 cols x 2 rows on mobile, 6 cols on desktop) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-5xl mx-auto grid grid-cols-1 grid-rows-1 items-center justify-items-center min-h-[160px] sm:min-h-[108px]"
        >
          {techGroups.map((group, groupIdx) => {
            const isCurrent = groupIdx === currentGroupIndex;
            return (
              <div
                key={groupIdx}
                aria-hidden={!isCurrent}
                className={`col-start-1 row-start-1 w-full grid grid-cols-3 sm:grid-cols-6 gap-y-4 gap-x-2 sm:gap-8 lg:gap-10 items-center justify-items-center transition-opacity duration-500 ease-in-out ${
                  isCurrent
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {group.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center text-center group cursor-default select-none py-1"
                    >
                      {/* Authentic Brand Logo directly on background */}
                      <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-1.5 sm:mb-2.5 transition-transform duration-300 group-hover:scale-105">
                        <Icon
                          className="w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
                          style={{ color: tech.color }}
                        />
                      </div>

                      {/* Technology Name */}
                      <span className="text-xs sm:text-sm font-semibold text-[#101A35] tracking-tight group-hover:text-[#2448A5] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
