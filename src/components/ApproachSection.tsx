"use client";

import React, { useState } from "react";
import { LuCompass, LuTarget, LuSparkles, LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";

export default function ApproachSection() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "Our Vision",
      description:
        "We envision a digital landscape where every company, regardless of size, possesses a high-performing digital flagship that accurately mirrors their real-world excellence and drives sustainable long-term value.",
      icon: LuCompass,
      highlights: [
        "Enduring architectural scalability",
        "Future-proof technology stacks",
        "Lasting digital equity and brand recall",
      ],
    },
    {
      title: "Our Mission",
      description:
        "Our daily commitment is to bridge the divide between world-class visual design and uncompromising engineering rigor, giving ambitious teams the digital firepower they need to win in their markets.",
      icon: LuTarget,
      highlights: [
        "Meticulous user-experience design",
        "Clean, maintainable Next.js codebases",
        "Transparent, deadline-driven execution",
      ],
    },
    {
      title: "Our Philosophy",
      description:
        "We reject superficial design trends and slow, bloated frameworks. True digital elegance exists when form and function operate in absolute harmony, delivering instant page loads and delightful user journeys.",
      icon: LuSparkles,
      highlights: [
        "Sub-second Core Web Vitals standard",
        "Human-first interaction hierarchies",
        "Zero template bloat or superfluous code",
      ],
    },
  ];

  return (
    <section
      aria-label="Our Core Principles"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-2 sm:mb-2.5">
            A Purpose-Driven Approach to Modern Web Engineering.
          </h2>
          <p className="text-sm sm:text-lg text-[#727989] font-normal leading-relaxed">
            Every project we undertake is anchored in three foundational pillars
            that define how we think, design, and code.
          </p>
        </div>

        {/* Supporting Cards: 2 visible by default on mobile with toggle; 3 horizontally on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            const isHiddenOnMobile = idx >= 2 && !showAll;

            return (
              <div
                key={card.title}
                className={`group relative flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D9DDE5] hover:border-[#2448A5]/60 hover:shadow-[0_16px_36px_rgba(16,26,53,0.06)] transition-all duration-300 ${
                  isHiddenOnMobile ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  {/* Card Header: Icon + Number Index */}
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2448A5]/8 border border-[#2448A5]/20 flex items-center justify-center text-[#2448A5] group-hover:bg-[#2448A5] group-hover:text-[#FAFAF8] transition-colors duration-200">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#D9DDE5] group-hover:text-[#2448A5] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-[#101A35] mb-2 sm:mb-2.5 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-[#727989] leading-relaxed mb-3.5 sm:mb-5 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="pt-3.5 sm:pt-5 border-t border-[#D9DDE5]/80 space-y-1.5 sm:space-y-2">
                  {card.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-semibold text-[#101A35]"
                    >
                      <LuCheck className="w-3.5 h-3.5 text-[#2448A5] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View More / Show Less Button */}
        <div className="mt-6 text-center md:hidden">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#D9DDE5] bg-white text-[#101A35] hover:text-[#2448A5] hover:border-[#2448A5] font-semibold text-xs shadow-xs transition-all cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "View More Principles"}</span>
            {showAll ? (
              <LuChevronUp className="w-3.5 h-3.5 text-[#2448A5]" />
            ) : (
              <LuChevronDown className="w-3.5 h-3.5 text-[#2448A5]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

