"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuCircleCheck } from "react-icons/lu";
import { useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.28 });
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  interface StatItem {
    numValue: number;
    suffix: string;
    label: string;
    detail: string;
    decimals?: number;
  }

  const stats: StatItem[] = [
    { numValue: 7, suffix: "+", label: "Projects Delivered", detail: "Across web & e-commerce" },
    { numValue: 98, suffix: "%", label: "Happy Clients", detail: "Consistent retention rate" },
    { numValue: 15, suffix: "+", label: "Technologies Used", detail: "Modern full-stack ecosystems" },
  ];

  return (
    <section
      id="about"
      aria-label="About Blue Pearl Nexa"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] text-[#171B24] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Team Introduction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-14">
          {/* Left Column: Studio & Team Photography with Subtle Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(16,26,53,0.08)] border border-[#D9DDE5] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="/hero4.png"
                alt="Blue Pearl Nexa Development and Design Team in Studio Session"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>

            {/* Decorative soft silver frame element */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#D9DDE5] rounded-tl-3xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#D9DDE5] rounded-br-3xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Strong Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-3 sm:mb-4">
              Technology Meets Thoughtful Design.
            </h2>

            {/* Narrative Explanation */}
            <p className="text-sm sm:text-lg text-[#727989] leading-relaxed mb-3 sm:mb-3.5 font-normal">
              At <strong className="text-[#101A35] font-semibold">Blue Pearl Nexa</strong>, we help forward-thinking businesses turn ambitious ideas into functional, visually appealing, and scalable digital experiences. We believe that a company’s website is its most valuable digital asset—a 24/7 ambassador of brand reputation and commercial capability.
            </p>

            <p className="text-xs sm:text-base text-[#727989] leading-relaxed mb-4 sm:mb-5">
              By combining purposeful UI/UX design with robust modern engineering practices, we eliminate the friction between creative expression and technical execution. Every line of code, layout decision, and micro-interaction is calibrated to build trust and move your business forward.
            </p>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-5 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-[#101A35]">
                <LuCircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2448A5] shrink-0" />
                <span>Bespoke Design — No Cloned Templates</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-[#101A35]">
                <LuCircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2448A5] shrink-0" />
                <span>Next.js App Router & TypeScript Core</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-[#101A35]">
                <LuCircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2448A5] shrink-0" />
                <span>Sub-Second Page Load Guarantees</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-[#101A35]">
                <LuCircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2448A5] shrink-0" />
                <span>Transparent Milestones & Delivery</span>
              </div>
            </div>

            {/* Simple Learn More CTA Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#101A35] hover:bg-[#2448A5] text-[#FAFAF8] text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Explore Our Capabilities</span>
              <LuArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Small Stats Row Underneath — Single Horizontal Row on Mobile & Desktop */}
        <div ref={statsRef} className="pt-6 sm:pt-9 border-t border-[#D9DDE5]">
          <div className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col text-left ${
                  idx !== 0 ? "border-l border-[#D9DDE5] pl-2 sm:pl-8 lg:pl-10" : ""
                }`}
              >
                <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight">
                  <AnimatedCounter
                    value={stat.numValue}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                    trigger={isStatsInView}
                    duration={1800}
                  />
                </span>
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#2448A5] mt-0.5 sm:mt-1 uppercase tracking-tight sm:tracking-wider leading-tight">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-xs text-[#727989] mt-0.5 line-clamp-1 sm:line-clamp-none">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

