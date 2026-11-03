"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/context/PageTransitionContext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageBanner({
  title,
  subtitle,
  description,
}: PageBannerProps) {
  const displayDescription = subtitle || description || "";
  const { isExiting } = usePageTransition();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label={`${title} Introduction`}
      className="relative w-full overflow-hidden min-h-[220px] sm:min-h-[340px] lg:min-h-[350px] pt-24 pb-8 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 flex flex-col justify-center rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[3.5rem] border-b border-[#B9C8E0]/70 shadow-[0_12px_40px_-20px_rgba(53,103,168,0.1)] select-none"
    >
      {/* 1. Multi-Tone Base Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #F0EFF5 0%, #DCE3EF 32%, #DAD8ED 68%, #B9C8E0 100%)",
        }}
      />

      {/* 2. Soft Organic Flowing Blurred Accent Shapes for Depth */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Lavender-Grey Mesh Shape */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 35, -20, 0],
                  y: [0, -20, 16, 0],
                  scale: [1, 1.08, 0.95, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-16 left-1/4 w-[500px] h-[260px] rounded-full bg-[#DAD8ED]/60 blur-[65px]"
        />

        {/* Subtle Brand Blue (#3567A8) Accent Shape for Depth */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -32, 22, 0],
                  y: [0, 22, -16, 0],
                  scale: [1, 0.95, 1.07, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 right-1/4 w-[520px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(53,103,168,0.15)_0%,transparent_70%)] blur-[55px]"
        />

        {/* Muted Steel Blue Base Glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 22, -26, 0],
                  y: [0, -16, 20, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-16 left-1/3 w-[560px] h-[240px] rounded-full bg-[#B9C8E0]/45 blur-[60px]"
        />

        {/* Subtle bottom edge line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B9C8E0]/80 to-transparent" />
      </div>

      {/* 3. Centered Content Composition with Generous Vertical Breathing Room */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto text-center md:text-left">
          {/* LEFT: Large Page Heading with Masked Text Reveal Animation */}
          <div className="overflow-hidden py-2">
            <motion.h1
              key={`banner-title-${title}-${pathname}`}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { y: "135%", opacity: 0 }
              }
              animate={
                isExiting
                  ? shouldReduceMotion
                    ? { opacity: 0, transition: { duration: 0.25 } }
                    : {
                        y: "-110%",
                        opacity: 0,
                        transition: {
                          duration: 0.28,
                          ease: [0.32, 0, 0.67, 0],
                        },
                      }
                  : shouldReduceMotion
                  ? { opacity: 1, transition: { duration: 0.4 } }
                  : {
                      y: "0%",
                      opacity: 1,
                      transition: {
                        duration: 0.62,
                        ease: [0.16, 1, 0.3, 1], // Smooth elegant easeOutExpo curve
                      },
                    }
              }
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#101A35] tracking-tight shrink-0 md:text-right leading-[1.1]"
            >
              {title}
            </motion.h1>
          </div>

          {/* CENTER: Thin Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
          <motion.div
            key={`banner-divider-${pathname}`}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { scaleY: 0, opacity: 0 }
            }
            animate={
              isExiting
                ? { scaleY: 0, opacity: 0, transition: { duration: 0.2 } }
                : shouldReduceMotion
                ? { opacity: 1, transition: { duration: 0.3, delay: 0.1 } }
                : {
                    scaleY: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }
            }
            className="hidden md:block w-[1.5px] h-12 sm:h-14 lg:h-16 bg-[#B9C8E0] shrink-0 origin-center"
            aria-hidden="true"
          />

          <motion.div
            key={`banner-divider-mobile-${pathname}`}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { scaleX: 0, opacity: 0 }
            }
            animate={
              isExiting
                ? { scaleX: 0, opacity: 0, transition: { duration: 0.2 } }
                : shouldReduceMotion
                ? { opacity: 1, transition: { duration: 0.3, delay: 0.1 } }
                : {
                    scaleX: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }
            }
            className="block md:hidden w-14 h-[1.5px] bg-[#B9C8E0] my-2 shrink-0 origin-center"
            aria-hidden="true"
          />

          {/* RIGHT: Supporting Description with Delayed Reveal Animation */}
          {displayDescription && (
            <div className="overflow-hidden py-2">
              <motion.p
                key={`banner-desc-${title}-${pathname}`}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { y: "125%", opacity: 0 }
                }
                animate={
                  isExiting
                    ? shouldReduceMotion
                      ? { opacity: 0, transition: { duration: 0.22 } }
                      : {
                          y: "-110%",
                          opacity: 0,
                          transition: {
                            duration: 0.25,
                            ease: [0.32, 0, 0.67, 0],
                          },
                        }
                    : shouldReduceMotion
                    ? { opacity: 1, transition: { duration: 0.4, delay: 0.15 } }
                    : {
                        y: "0%",
                        opacity: 1,
                        transition: {
                          duration: 0.55,
                          delay: 0.15, // Starts smoothly 150ms after title begins
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }
                }
                className="text-sm sm:text-lg text-[#475569] leading-relaxed max-w-lg text-center md:text-left font-normal"
              >
                {displayDescription}
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
