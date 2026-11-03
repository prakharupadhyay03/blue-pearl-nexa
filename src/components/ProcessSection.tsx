"use client";

import React from "react";
import { processSteps } from "@/data/process";
import { LuCheck, LuSearch, LuPenTool, LuCode, LuRocket } from "react-icons/lu";

const stepIcons = [LuSearch, LuPenTool, LuCode, LuRocket];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Our Development Process"
      className="py-14 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 text-center mx-auto">
          <p className="text-sm font-semibold text-[#2448A5] tracking-normal mb-2">
            Our Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101A35] tracking-tight leading-[1.2] mb-3">
            A Clear 4-Step Process from Concept to Launch.
          </h2>
          <p className="text-base sm:text-lg text-[#727989] font-normal leading-relaxed max-w-xl mx-auto">
            A predictable, transparent workflow designed to keep projects on schedule and guarantee clean production code.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {processSteps.map((step, idx) => {
            const IconComp = stepIcons[idx] || LuCheck;

            return (
              <div
                key={step.number}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#D9DDE5] p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#2448A5]/40 hover:-translate-y-1 transition-all duration-200 text-left h-full"
              >
                <div>
                  {/* Top Bar: Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#2448A5] bg-[#2448A5]/10 px-2.5 py-1 rounded-lg">
                      PHASE {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#D9DDE5]/80 flex items-center justify-center text-[#2448A5] group-hover:bg-[#2448A5] group-hover:text-white transition-colors duration-200">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-[#101A35] tracking-tight mb-2">
                    {step.title}
                  </h3>

                  {/* Step Short Description */}
                  <p className="text-sm text-[#727989] leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables Checklist */}
                <div className="pt-4 border-t border-[#D9DDE5]/70 mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#101A35]/70 block mb-2.5">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs font-medium text-[#171B24]"
                      >
                        <LuCheck className="w-3.5 h-3.5 text-[#2448A5] mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
