"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <section
      id="services"
      aria-label="What We Do"
      className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Introduction */}
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12 text-center mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#2448A5] tracking-normal mb-1.5 sm:mb-2">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101A35] tracking-tight leading-[1.2] mb-2 sm:mb-2.5">
            Technology Solutions Built Around Your Business.
          </h2>
          <p className="text-sm sm:text-lg text-[#727989] font-normal leading-relaxed max-w-2xl mx-auto">
            From the first idea to deployment and ongoing growth, we build digital
            solutions that solve real business problems.
          </p>
        </div>

        {/* Card Grid: 3 visible by default on mobile with toggle button; Exactly Three Cards Per Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {servicesData.map((service, idx) => {
            const isLast = idx === 6; // 7th card: centered in 3rd row on desktop
            const isHiddenOnMobile = idx >= 3 && !showAllServices;
            const imageUrl =
              service.imageUrl ||
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

            return (
              <div
                key={service.id}
                className={`group flex-col justify-between rounded-2xl sm:rounded-[22px] bg-white border border-[#E2E6EE] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2448A5]/40 hover:-translate-y-1.5 transition-all duration-300 text-center ${
                  isHiddenOnMobile ? "hidden md:flex" : "flex"
                } ${
                  isLast
                    ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:col-span-1 lg:col-start-2 lg:max-w-none"
                    : ""
                }`}
              >
                <div>
                  {/* Image Container with 16:9 / Landscape Proportion */}
                  <div className="relative h-[160px] sm:h-[230px] w-full overflow-hidden rounded-t-[18px] sm:rounded-t-[20px] bg-[#101A35]">
                    <Image
                      src={imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* Distinctive Curved White Cut-out / Title Plate overlapping bottom of image */}
                    <svg
                      viewBox="0 0 400 52"
                      fill="none"
                      preserveAspectRatio="none"
                      className="absolute -bottom-0.5 left-0 w-full h-10 sm:h-14 text-white fill-current pointer-events-none z-10"
                      aria-hidden="true"
                    >
                      <path d="M 0,52 L 0,38 C 22,38 34,38 46,24 C 54,14 66,6 84,6 L 316,6 C 334,6 346,14 354,24 C 366,38 378,38 400,38 L 400,52 Z" />
                    </svg>
                  </div>

                  {/* Card Content: Title positioned inside curved white cut-out */}
                  <div className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-7 pb-2 text-center bg-transparent">
                    {/* Centred Service Title in Corporate Blue */}
                    <h3 className="text-lg sm:text-[22px] font-bold text-[#2448A5] tracking-tight mb-1.5 sm:mb-2">
                      {service.title}
                    </h3>
                    {/* Centred Short Description in Readable Grey */}
                    <p className="text-xs sm:text-sm text-[#727989] leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Action: Small Centred Learn More Button */}
                <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3 text-center">
                  <Link
                    href={`/services#${service.id}`}
                    onClick={() => onSelectService?.(service.title)}
                    className="inline-flex items-center justify-center bg-[#2448A5] hover:bg-[#1b3884] text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-2 sm:py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5] focus-visible:ring-offset-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All / Show Less Toggle Button */}
        <div className="mt-7 sm:mt-8 text-center md:hidden">
          <button
            type="button"
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D9DDE5] bg-white text-[#101A35] hover:text-[#2448A5] hover:border-[#2448A5] font-semibold text-xs shadow-xs transition-all cursor-pointer"
          >
            <span>{showAllServices ? "Show Less" : "View All Services (7)"}</span>
            {showAllServices ? (
              <LuChevronUp className="w-4 h-4 text-[#2448A5]" />
            ) : (
              <LuChevronDown className="w-4 h-4 text-[#2448A5]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
