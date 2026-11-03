"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import {
  allTechnologies,
  showcaseCategories,
  TechItem,
} from "@/data/technologiesShowcase";
import { LuArrowUpRight, LuFilter } from "react-icons/lu";

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTechnologies: TechItem[] =
    activeCategory === "All"
      ? allTechnologies
      : allTechnologies.filter((tech) => tech.category === activeCategory);

  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="Technologies"
        subtitle="Discover the technologies powering our digital solutions."
      />

      <PageTransition>
        {/* 2. Technologies We Work With Showcase (Category Filters & Square Cards Grid) */}
        <section
          aria-label="Technologies We Work With"
          className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto mb-6 sm:mb-10 text-center">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-2.5">
                Technologies We Work With
              </h2>
              <p className="text-sm sm:text-lg text-[#727989] font-normal max-w-2xl mx-auto leading-relaxed">
                We leverage the latest technologies to build robust and scalable solutions.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-col items-center mb-8 sm:mb-12">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2448A5] mb-2.5 sm:mb-3">
                Browse Complete Ecosystem by Category
              </span>

              <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-white border border-[#D9DDE5] shadow-xs flex-wrap justify-center max-w-full">
                <LuFilter className="w-4 h-4 text-[#727989] ml-2 mr-1 hidden sm:block" />
                {showcaseCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      activeCategory === category
                        ? "bg-[#2448A5] text-white shadow-xs"
                        : "text-[#727989] hover:text-[#101A35] hover:bg-[#FAFAF8]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Square Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
              {filteredTechnologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="aspect-square rounded-2xl bg-white border border-[#D9DDE5]/80 shadow-[0_8px_30px_rgba(16,26,53,0.06)] hover:shadow-xl hover:border-[#2448A5]/40 transition-all duration-300 flex flex-col items-center justify-center p-3.5 sm:p-4 group select-none cursor-default"
                  >
                    <div className="w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center mb-2 sm:mb-2.5 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        className="w-10 h-10 sm:w-11 sm:h-11"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#101A35] group-hover:text-[#2448A5] transition-colors tracking-tight text-center">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Bottom Action */}
        <section className="py-16 sm:py-20 bg-[#FAFAF8] text-center border-t border-[#D9DDE5]/60">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] tracking-tight mb-3">
              Need a Specific Tech Stack or Integration?
            </h2>
            <p className="text-base text-[#727989] mb-7 max-w-xl mx-auto leading-relaxed">
              From legacy migration audits to custom cloud integrations, our senior
              architects evaluate your exact technology needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Consult With a Systems Architect</span>
              <LuArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
