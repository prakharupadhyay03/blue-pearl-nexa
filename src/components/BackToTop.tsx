"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2448A5] text-[#FAFAF8] shadow-[0_4px_16px_rgba(36,72,165,0.28)] hover:bg-[#1b3884] hover:shadow-[0_8px_24px_rgba(36,72,165,0.4)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5] focus-visible:ring-offset-2 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-5 sm:h-5 transition-transform duration-200" />
    </button>
  );
}

