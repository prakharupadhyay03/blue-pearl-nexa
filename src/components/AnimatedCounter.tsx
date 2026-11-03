"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  trigger?: boolean;
}

export default function AnimatedCounter({
  value,
  decimals = 0,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
  trigger = true,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string>(() =>
    shouldReduceMotion
      ? (decimals > 0 ? value.toFixed(decimals) : value.toString())
      : (decimals > 0 ? (0).toFixed(decimals) : "0")
  );
  const hasAnimatedRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // If user prefers reduced motion, set final value immediately
    if (shouldReduceMotion) {
      setDisplayValue(decimals > 0 ? value.toFixed(decimals) : value.toString());
      return;
    }

    // Only start counting when trigger becomes true and hasn't animated yet
    if (!trigger || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = easeOutCubic * value;

      setDisplayValue(
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
      );

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(
          decimals > 0 ? value.toFixed(decimals) : value.toString()
        );
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [trigger, value, decimals, duration, shouldReduceMotion]);

  return (
    <span className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
