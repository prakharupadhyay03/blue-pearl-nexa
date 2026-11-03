"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/context/PageTransitionContext";

export default function PageTransition({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { isExiting } = usePageTransition();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={
        isExiting
          ? shouldReduceMotion
            ? { opacity: 0, transition: { duration: 0.2 } }
            : {
                opacity: 0,
                y: -14,
                transition: {
                  duration: 0.25,
                  ease: [0.32, 0, 0.67, 0],
                },
              }
          : shouldReduceMotion
          ? { opacity: 1, transition: { duration: 0.3 } }
          : {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                delay: 0.22, // Appears smoothly right after banner title reveals
                ease: [0.22, 1, 0.36, 1],
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
