import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import ProcessSection from "@/components/ProcessSection";
import { servicesData } from "@/data/services";
import { LuArrowUpRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our complete range of digital solutions: custom Next.js web development, bespoke UI/UX design, and e-commerce platforms.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="Services"
        subtitle="Explore our digital services designed to help businesses grow."
      />

      <PageTransition>
        {/* 2. Service Cards Grid matching homepage design */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Section Introduction */}
            <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-14 text-center mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101A35] tracking-tight leading-[1.2] mb-3">
                Comprehensive Web Engineering & Design Offerings.
              </h2>
              <p className="text-base sm:text-lg text-[#727989] font-normal leading-relaxed max-w-2xl mx-auto">
                Every service is delivered with transparent milestone scopes, strict
                type-safe codebases, and sub-second performance guarantees.
              </p>
            </div>

            {/* Card Grid: Exactly Three Cards Per Row on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
              {servicesData.map((service, idx) => {
                const isLast = idx === 6; // 7th card: centered in 3rd row on desktop
                const imageUrl =
                  service.imageUrl ||
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`group flex flex-col justify-between rounded-[22px] bg-white border border-[#E2E6EE] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2448A5]/40 hover:-translate-y-1.5 transition-all duration-300 text-center ${
                      isLast
                        ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:col-span-1 lg:col-start-2 lg:max-w-none"
                        : ""
                    }`}
                  >
                    <div>
                      {/* Image Container with Landscape Proportion */}
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
                          className="absolute -bottom-0.5 left-0 w-full h-12 sm:h-14 text-white fill-current pointer-events-none z-10"
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
                        <p className="text-xs sm:text-sm text-[#727989] leading-relaxed font-normal">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Card Action: Small Centred Action Button */}
                    <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3 text-center">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center bg-[#2448A5] hover:bg-[#1b3884] text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-2 sm:py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5] focus-visible:ring-offset-2"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Process Section Integration */}
        <ProcessSection />

        {/* 4. Bottom CTA Card */}
        <section className="py-16 sm:py-20 bg-[#FAFAF8] text-center border-t border-[#D9DDE5]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] mb-3">
              Need a Tailored Multi-Service Architecture?
            </h2>
            <p className="text-base text-[#727989] mb-7 max-w-xl mx-auto">
              Many clients combine design systems, Next.js engineering, and ongoing
              optimization retainers into a single milestone package.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Request a Custom Scoped Proposal</span>
              <LuArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
