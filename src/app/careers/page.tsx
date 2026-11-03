import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import {
  careerValues,
  careerPerks,
  jobPositions,
  futureProfiles,
} from "@/data/careers";
import {
  LuAward,
  LuCompass,
  LuSparkles,
  LuMessageSquare,
  LuCircleCheck,
  LuBriefcase,
  LuMail,
  LuArrowUpRight,
  LuSend,
  LuClock,
  LuHeart,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Blue Pearl Nexa. Join our senior engineering and UI/UX design team building high-performance web experiences.",
};

const iconMap: Record<string, React.ElementType> = {
  Award: LuAward,
  Compass: LuCompass,
  Sparkles: LuSparkles,
  MessageSquare: LuMessageSquare,
};

export default function CareersPage() {
  const hasOpenings = jobPositions.length > 0;

  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="Career"
        subtitle="Discover opportunities to grow and build with us."
      />

      <PageTransition>
        {/* 2. Company Culture Overview */}
        <section className="py-12 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-3xl mb-8 sm:mb-14 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-2 sm:mb-4">
              A Studio Engineered for Senior Builders.
            </h2>
            <p className="text-sm sm:text-lg text-[#727989] font-normal leading-relaxed">
              We reject corporate politics, endless sprint rituals, and cookie-cutter
              deliverables. We are a compact squad of makers who take pride in our craft.
            </p>
          </div>

          {/* Culture Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {careerValues.map((val) => {
              const IconComp = iconMap[val.icon] || LuSparkles;
              return (
                <div
                  key={val.title}
                  className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D9DDE5] shadow-xs hover:border-[#2448A5]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] mb-4 sm:mb-6">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#101A35] mb-3 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#727989] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Work With Us & Perks */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-4">
              Why Engineers and Designers Thrive Here.
            </h2>
            <p className="text-sm sm:text-base text-[#727989]">
              We invest in your well-being, tools, and personal growth so you can do the
              best work of your career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {careerPerks.map((perk) => (
              <div
                key={perk.title}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#FAFAF8] border border-[#D9DDE5] flex items-start gap-3 sm:gap-3.5"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] shrink-0 mt-0.5">
                  <LuCircleCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#101A35] mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#727989] leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Current Openings & Empty State */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-12 text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-4">
              Current Openings
            </h2>
            <p className="text-sm sm:text-base text-[#727989]">
              Live recruitment roles across frontend engineering, systems design, and product delivery.
            </p>
          </div>

          {hasOpenings ? (
            <div className="space-y-4">
              {jobPositions.map((job) => (
                <div
                  key={job.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D9DDE5] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2448A5] block mb-1">
                      {job.department} • {job.location}
                    </span>
                    <h3 className="text-xl font-bold text-[#101A35]">
                      {job.title}
                    </h3>
                    <p className="text-sm text-[#727989] mt-1">
                      {job.experience} experience
                    </p>
                  </div>
                  <Link
                    href={`mailto:bluepearlnexa@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] text-xs font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors"
                  >
                    <span>Apply for Role</span>
                    <LuArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            /* Appropriate Empty-State Message */
            <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-white border border-[#D9DDE5] shadow-xs text-center max-w-3xl mx-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FAFAF8] border border-[#D9DDE5] flex items-center justify-center text-[#2448A5] mx-auto mb-4 sm:mb-5">
                <LuBriefcase className="w-6 h-6 sm:w-7 sm:h-7 text-[#2448A5]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#101A35] tracking-tight mb-2 sm:mb-3">
                No Immediate Openings Currently Listed
              </h3>
              <p className="text-xs sm:text-base text-[#727989] leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
                Our core squads are currently operating at planned Q1 capacity.
                However, we are always eager to meet extraordinary engineers and designers.
                If you have an exceptional portfolio or deep Next.js expertise, we want to hear from you.
              </p>

              {/* Anticipated Upcoming Profiles */}
              <div className="text-left border-t border-[#D9DDE5] pt-6 sm:pt-8 mb-6 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#101A35] block mb-3 sm:mb-4">
                  Anticipated Future Talent Profiles (Q2 - Q3):
                </span>
                <div className="space-y-2.5 sm:space-y-3">
                  {futureProfiles.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAFAF8] border border-[#D9DDE5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                    >
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#101A35]">
                          {item.role}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#727989] mt-0.5">
                          {item.skills}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#2448A5] bg-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#D9DDE5]">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Application Contact */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:bluepearlnexa@gmail.com?subject=Speculative%20Application%20%E2%80%94%20Blue%20Pearl%20Nexa"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md transition-all"
                >
                  <span>Send Speculative Application</span>
                  <LuSend className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 text-xs text-[#727989]">
                  <LuMail className="w-4 h-4 text-[#2448A5]" />
                  <span>bluepearlnexa@gmail.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      </PageTransition>
    </>
  );
}

