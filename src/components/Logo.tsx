import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({
  variant = "light",
  showText = true,
  className = "",
  iconOnly = false,
}: LogoProps) {
  const isDark = variant === "dark";
  const displayTitle = showText && !iconOnly;

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Brand Logo from public/logo.webp */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 ${
          isDark
            ? "bg-white p-2 rounded-2xl shadow-[0_0_24px_rgba(255,255,255,0.22)] border border-white/80"
            : ""
        }`}
      >
        <Image
          src="/logo.webp"
          alt="Blue Pearl Nexa Logo"
          width={128}
          height={118}
          priority
          className="h-8 sm:h-9 w-auto object-contain"
        />
      </div>

      {/* Company Name Beside Logo */}
      {displayTitle && (
        <div className="flex flex-col text-left">
          <span
            className={`text-base sm:text-lg font-black tracking-tight leading-tight whitespace-nowrap ${
              isDark ? "text-[#FAFAF8]" : "text-[#101A35]"
            }`}
          >
            Blue Pearl{" "}
            <span className={isDark ? "text-[#6B93F7]" : "text-[#2448A5]"}>
              Nexa
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
