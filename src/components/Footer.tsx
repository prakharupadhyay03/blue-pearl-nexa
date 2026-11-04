"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";
import { servicesData } from "@/data/services";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuLinkedin,
  LuTwitter,
  LuGithub,
  LuChevronDown,
} from "react-icons/lu";

export default function Footer() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCapOpen, setIsCapOpen] = useState(false);

  return (
    <footer
      aria-label="Footer"
      className="bg-[#101A35] text-[#FAFAF8] border-t border-[#171B24] pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: Collapsible on mobile, 4-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 pb-8 sm:pb-14 border-b border-[#D9DDE5]/10">
          {/* Column 1: Brand & Description (4 cols on desktop) */}
          <div className="lg:col-span-4 text-left border-b lg:border-b-0 border-[#D9DDE5]/10 pb-6 lg:pb-0">
            <div className="mb-4 sm:mb-6">
              <Link href="/" aria-label="Blue Pearl Nexa Home">
                <Logo variant="dark" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-[#D9DDE5]/80 leading-relaxed font-normal mb-5 sm:mb-6 max-w-sm">
              Blue Pearl Nexa is a premier website design and development agency.
              We craft high-performance, aesthetically refined digital experiences
              for ambitious brands worldwide.
            </p>

            {/* Social Icons — Horizontal Alignment */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blue Pearl Nexa on LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#171B24] border border-[#D9DDE5]/15 flex items-center justify-center text-[#D9DDE5] hover:text-[#FAFAF8] hover:border-[#2448A5] transition-colors"
              >
                <LuLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blue Pearl Nexa on X"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#171B24] border border-[#D9DDE5]/15 flex items-center justify-center text-[#D9DDE5] hover:text-[#FAFAF8] hover:border-[#2448A5] transition-colors"
              >
                <LuTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blue Pearl Nexa on GitHub"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#171B24] border border-[#D9DDE5]/15 flex items-center justify-center text-[#D9DDE5] hover:text-[#FAFAF8] hover:border-[#2448A5] transition-colors"
              >
                <LuGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols on desktop, Collapsible on Mobile) */}
          <div className="lg:col-span-2 text-left border-b lg:border-b-0 border-[#D9DDE5]/10 pb-4 lg:pb-0">
            <button
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="w-full flex items-center justify-between text-left lg:pointer-events-none mb-1 lg:mb-5 cursor-pointer lg:cursor-default py-1 lg:py-0 focus:outline-none"
              aria-expanded={isNavOpen}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9DDE5]">
                Navigation
              </h4>
              <LuChevronDown
                className={`w-4 h-4 text-[#D9DDE5] transition-transform duration-200 lg:hidden ${
                  isNavOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2.5 sm:space-y-3 text-xs sm:text-sm pt-2 lg:pt-0 ${
                isNavOpen ? "block" : "hidden lg:block"
              }`}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D9DDE5]/70 hover:text-[#FAFAF8] transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols on desktop, Collapsible on Mobile) */}
          <div className="lg:col-span-3 text-left border-b lg:border-b-0 border-[#D9DDE5]/10 pb-4 lg:pb-0">
            <button
              type="button"
              onClick={() => setIsCapOpen(!isCapOpen)}
              className="w-full flex items-center justify-between text-left lg:pointer-events-none mb-1 lg:mb-5 cursor-pointer lg:cursor-default py-1 lg:py-0 focus:outline-none"
              aria-expanded={isCapOpen}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9DDE5]">
                Our Capabilities
              </h4>
              <LuChevronDown
                className={`w-4 h-4 text-[#D9DDE5] transition-transform duration-200 lg:hidden ${
                  isCapOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2.5 sm:space-y-3 text-xs sm:text-sm pt-2 lg:pt-0 ${
                isCapOpen ? "block" : "hidden lg:block"
              }`}
            >
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.id}`}
                    className="text-[#D9DDE5]/70 hover:text-[#FAFAF8] transition-colors line-clamp-1 block py-0.5"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Studio Info (3 cols on desktop) */}
          <div className="lg:col-span-3 text-left pt-2 lg:pt-0">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9DDE5] mb-3 sm:mb-5">
              Direct Inquiries
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-[#D9DDE5]/80">
              <li className="flex items-center gap-3">
                <LuMail className="w-4 h-4 text-[#2448A5] shrink-0" />
                <a
                  href="mailto:bluepearlnexa@gmail.com"
                  className="hover:text-[#FAFAF8] transition-colors"
                >
                  bluepearlnexa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="w-4 h-4 text-[#2448A5] shrink-0" />
                <a
                  href="tel:+919075556635"
                  className="hover:text-[#FAFAF8] transition-colors"
                >
                  +91 9075556635
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuMapPin className="w-4 h-4 text-[#2448A5] shrink-0" />
                <span>Nashik, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 sm:pt-7 text-xs text-[#D9DDE5]/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Blue Pearl Nexa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
