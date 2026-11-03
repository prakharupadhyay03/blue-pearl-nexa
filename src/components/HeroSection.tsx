"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuChevronRight } from "react-icons/lu";

interface HeroSlide {
  src: string;
  alt: string;
  theme: string;
}

const heroSlides: HeroSlide[] = [
  {
    // Image 1: Development Team collaborating around laptops in a modern office
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85",
    alt: "Professional software development team collaborating around laptops in a modern office",
    theme: "Development Team",
  },
  {
    // Image 2: Technology & Engineering - code, professional monitors & modern workspace
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2400&q=85",
    alt: "Close-up scene of developers working on code, professional monitors and technical workspace",
    theme: "Technology & Engineering",
  },
  {
    // Image 3: Creative Collaboration - agency team discussing website design & digital experiences
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=85",
    alt: "Modern digital agency team discussing website design, product ideas and digital experiences",
    theme: "Creative Collaboration",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    let intervalId: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (intervalId) clearInterval(intervalId);
      // Auto-advance every 6.5 seconds (6-7 seconds requirement)
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      }, 6500);
    };

    const stopTimer = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction Hero"
      className="relative w-full max-w-full h-screen h-[100svh] min-h-[520px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-center overflow-hidden bg-[#101A35] pt-16 pb-10 sm:pt-24 sm:pb-14 lg:pt-20 lg:pb-16 box-border m-0 p-0 border-0 outline-none"
    >
      {/* Full-Bleed Automatic Three-Image Background Crossfade Slider */}
      <div className="absolute -inset-[3px] z-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              style={{ transitionDuration: "800ms" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className={`object-cover object-center w-full h-full motion-safe:transition-transform motion-safe:duration-[7000ms] motion-safe:ease-out ${
                  isActive ? "scale-[1.06]" : "scale-[1.02]"
                }`}
              />
            </div>
          );
        })}

        {/* Lighter, Natural Dark Navy Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#101A35]/50 via-[#101A35]/38 to-[#101A35]/25" />
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#101A35]/40 via-transparent to-[#101A35]/15" />
      </div>

      {/* Hero Content Container — 100% Static & Perfectly Proportioned */}
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1200px] text-left">
          {/* Refined, Balanced Headline */}
          <h1
            style={{ fontSize: "clamp(1.85rem, 3.8vw + 0.5rem, 4.25rem)" }}
            className="font-extrabold text-[#FAFAF8] tracking-tight leading-[1.14] sm:leading-[1.12] lg:leading-[1.1] mb-4 sm:mb-6 max-w-[1200px] drop-shadow-[0_2px_14px_rgba(16,26,53,0.9)]"
          >
            Digital Experiences. Built to{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF8] via-[#D9DDE5] to-[#FAFAF8]">
              Move Your Business
            </span>{" "}
            Forward.
          </h1>

          {/* Comfortable Supporting Description */}
          <p className="text-sm sm:text-lg lg:text-[20px] text-[#D9DDE5] font-normal leading-[1.5] mb-6 sm:mb-9 lg:mb-10 max-w-[780px] drop-shadow-[0_1px_8px_rgba(16,26,53,0.95)]">
            We design and develop powerful websites that help businesses
            establish their digital presence, connect with customers, and grow
            with confidence.
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-sm sm:max-w-none">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <LuArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAFAF8]/15 hover:bg-[#FAFAF8]/25 text-[#FAFAF8] border border-[#D9DDE5]/40 hover:border-[#FAFAF8]/70 font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-4 rounded-full backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shadow-md"
            >
              <span>Explore Our Services</span>
              <LuChevronRight className="w-4 h-4 text-[#D9DDE5]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Discrete Slide Progress Indicators */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-16 xl:right-20 z-30 flex items-center gap-2">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}: ${slide.theme}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-7 sm:w-8 bg-[#FAFAF8]"
                : "w-2 sm:w-2.5 bg-[#FAFAF8]/35 hover:bg-[#FAFAF8]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
