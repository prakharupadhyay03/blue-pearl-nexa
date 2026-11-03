"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "James Wilson",
    role: "Commercial Director",
    company: "Apex Global",
    content:
      "From strategy to execution, every step was handled with clarity and professionalism. The campaigns became more focused, the reporting improved, and our overall performance grew consistently.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  },
  {
    id: "review-2",
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Aura Financial OS",
    content:
      "Working with Blue Pearl Nexa felt like having an elite in-house design and engineering squad. They translated complex financial data into an intuitive, visually stunning Next.js application that our users love.",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
  },
  {
    id: "review-3",
    name: "Alexander Wright",
    role: "Managing Director",
    company: "Vanguard Logistics",
    content:
      "Blue Pearl Nexa delivered an exceptional corporate portal that elevated our international credibility immediately. The attention to typography, sub-second performance, and clean responsive layout surpassed all our expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
  },
  {
    id: "review-4",
    name: "Marcus Lindqvist",
    role: "Creative Director",
    company: "Kanso Living",
    content:
      "The aesthetic maturity and technical precision brought to our digital relaunch was phenomenal. Our conversion rate and user engagement rose noticeably within the first 30 days after deployment.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Continuous auto-advance loop one-by-one
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2800);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section
      aria-label="Client Feedback and Reviews"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60 overflow-hidden"
    >
      {/* Subtle Dotted World Map Watermark Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full max-w-5xl object-contain text-[#101A35]"
          fill="currentColor"
        >
          <circle cx="200" cy="180" r="3" />
          <circle cx="220" cy="170" r="3.5" />
          <circle cx="240" cy="190" r="3" />
          <circle cx="260" cy="200" r="3.5" />
          <circle cx="280" cy="220" r="3" />
          <circle cx="300" cy="210" r="4" />
          <circle cx="320" cy="230" r="3" />
          <circle cx="340" cy="240" r="3.5" />
          <circle cx="480" cy="160" r="3.5" />
          <circle cx="500" cy="150" r="4" />
          <circle cx="520" cy="170" r="3.5" />
          <circle cx="540" cy="180" r="3" />
          <circle cx="560" cy="190" r="4" />
          <circle cx="580" cy="170" r="3.5" />
          <circle cx="600" cy="200" r="3" />
          <circle cx="700" cy="190" r="3.5" />
          <circle cx="720" cy="210" r="4" />
          <circle cx="740" cy="220" r="3" />
          <circle cx="760" cy="240" r="3.5" />
          <circle cx="780" cy="260" r="4" />
          <circle cx="800" cy="280" r="3" />
          <circle cx="820" cy="300" r="3.5" />
          <circle cx="350" cy="320" r="3" />
          <circle cx="370" cy="340" r="3.5" />
          <circle cx="390" cy="360" r="4" />
          <circle cx="520" cy="280" r="3.5" />
          <circle cx="540" cy="300" r="4" />
          <circle cx="560" cy="320" r="3.5" />
          <circle cx="580" cy="340" r="3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-2.5">
          Client Feedback & Reviews
        </h2>
        <p className="text-sm sm:text-base text-[#727989] font-normal max-w-xl mx-auto mb-4 sm:mb-6">
          What our partners and clients say about our development standards and delivery.
        </p>

        {/* Large Royal Blue Quotation Icon */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] shadow-xs">
            <LuQuote className="w-5 h-5 sm:w-7 sm:h-7" />
          </div>
        </div>

        {/* Carousel Content Container with Side Arrow Buttons */}
        <div className="relative px-8 sm:px-14">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border border-[#D9DDE5] text-[#101A35] hover:text-[#2448A5] hover:border-[#2448A5]/60 hover:shadow-md transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer z-20"
          >
            <LuChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Smooth Sliding Carousel Track */}
          <div className="overflow-hidden w-full max-w-3xl mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 flex flex-col items-center text-center px-2 sm:px-4"
                >
                  <p className="text-sm sm:text-xl lg:text-2xl text-[#171B24] font-medium leading-relaxed max-w-2xl mx-auto min-h-[60px] sm:min-h-[64px] flex items-center justify-center">
                    &ldquo;{item.content}&rdquo;
                  </p>

                  {/* Client Profile Info */}
                  <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3">
                    <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-[#2448A5]/20 bg-[#D9DDE5] shrink-0">
                      <Image
                        src={item.avatarUrl}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-lg font-bold text-[#101A35] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-[#727989] font-medium">
                        {item.role}
                        {item.company && (
                          <span className="text-[#101A35]">, {item.company}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border border-[#D9DDE5] text-[#101A35] hover:text-[#2448A5] hover:border-[#2448A5]/60 hover:shadow-md transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer z-20"
          >
            <LuChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Pagination Dots (Clickable) */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to review ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "w-6 sm:w-7 h-2 sm:h-2.5 bg-[#2448A5] shadow-xs"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#2448A5]/25 hover:bg-[#2448A5]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
