"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";
import { LuMenu, LuX, LuPhoneCall } from "react-icons/lu";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "@/context/PageTransitionContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navigateWithTransition } = usePageTransition();

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateWithTransition(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
          isScrolled ? "py-2 sm:py-2.5" : "py-2.5 sm:py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Floating Pill Container */}
          <nav
            aria-label="Primary Navigation"
            className={`w-full bg-[#FAFAF8]/95 backdrop-blur-md border border-[#D9DDE5]/80 transition-all duration-300 rounded-full px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_4px_24px_rgba(16,26,53,0.06)] ${
              isScrolled ? "shadow-[0_8px_30px_rgba(16,26,53,0.12)] py-2" : ""
            }`}
          >
            {/* Left: Brand Identity (Logo from public/logo.webp) */}
            <Link
              href="/"
              onClick={(e) => handleNavClick("/", e)}
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5] rounded-full p-1 shrink-0"
              aria-label="Blue Pearl Nexa Home"
            >
              <Logo variant="light" />
            </Link>

            {/* Center: Desktop Navigation Links (7 Items) */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`group relative px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                      active
                        ? "text-[#2448A5] font-bold"
                        : "text-[#171B24]/80 hover:text-[#2448A5]"
                    }`}
                  >
                    {item.label}
                    {/* Clean underline effect on hover and active - no glass/background */}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-[#2448A5] transition-all duration-200 origin-center ${
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right: CTA Button ("Get in Touch") & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                href="/contact"
                onClick={(e) => handleNavClick("/contact", e)}
                className="hidden sm:inline-flex items-center gap-1.5 lg:gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] text-xs xl:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </Link>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-[#101A35] hover:bg-[#D9DDE5]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <LuX className="w-5 h-5 text-[#101A35]" />
                ) : (
                  <LuMenu className="w-5 h-5 text-[#101A35]" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#101A35]/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-40 lg:hidden bg-[#FAFAF8] border border-[#D9DDE5] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl transition-all duration-300 transform max-h-[85vh] overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`flex items-center justify-between px-3 py-2.5 text-sm font-semibold transition-colors border-b border-[#D9DDE5]/40 last:border-b-0 ${
                  active
                    ? "text-[#2448A5] font-bold"
                    : "text-[#101A35] hover:text-[#2448A5]"
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="w-2 h-0.5 rounded-full bg-[#2448A5]" />
                )}
              </Link>
            );
          })}

          <div className="pt-3 mt-2 border-t border-[#D9DDE5] flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={(e) => handleNavClick("/contact", e)}
              className="flex items-center justify-center gap-2 w-full bg-[#2448A5] text-[#FAFAF8] font-semibold text-sm py-3 rounded-full shadow-md hover:bg-[#1b3884] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            <a
              href="mailto:bluepearlnexa@gmail.com"
              className="flex items-center justify-center gap-2 text-xs text-[#727989] hover:text-[#2448A5] pt-1 transition-colors"
            >
              <LuPhoneCall className="w-3.5 h-3.5 text-[#2448A5]" />
              <span>Direct: bluepearlnexa@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
