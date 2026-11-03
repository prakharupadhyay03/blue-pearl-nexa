"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { LuChevronDown } from "react-icons/lu";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#727989]">
            Everything you need to know about our web engineering standards, delivery milestones, and maintenance.
          </p>
        </div>

        {/* Clean, Full-Width FAQ Accordion Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D9DDE5] p-4 sm:p-7 lg:p-8 shadow-xs divide-y divide-[#D9DDE5]">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-3 sm:py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 py-1 text-[#101A35] hover:text-[#2448A5] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-lg font-bold tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#2448A5] text-[#FAFAF8] border-[#2448A5] rotate-180"
                        : "bg-[#FAFAF8] text-[#727989] border-[#D9DDE5]"
                    }`}
                  >
                    <LuChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </button>

                {/* Content Expansion */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pt-2.5 sm:pt-3 pb-1"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-base text-[#727989] leading-relaxed pr-2 sm:pr-6 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
