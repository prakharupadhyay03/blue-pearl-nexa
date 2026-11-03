import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import ApproachSection from "@/components/ApproachSection";
import {
  LuCircleCheck,
  LuArrowUpRight,
  LuShield,
  LuZap,
  LuUsers,
  LuCodeXml,
  LuSparkles,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover who we are and how we create meaningful digital experiences at Blue Pearl Nexa.",
};

const teamMembers = [
  {
    name: "Alexander Reed",
    role: "Founder & Principal Solutions Architect",
    bio: "Over 12 years of enterprise cloud engineering experience leading web architecture for high-growth SaaS and e-commerce companies.",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    tags: ["Systems Architecture", "Next.js", "Cloud Edge"],
  },
  {
    name: "Elena Rostova",
    role: "Head of Product & Design Systems",
    bio: "Passionate about human-centered interaction design, typographic clarity, and building scalable design systems that bridge Figma to code.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    tags: ["UI/UX Systems", "Figma", "User Psychology"],
  },
  {
    name: "Karan Mehta",
    role: "Lead Frontend Engineer",
    bio: "Specializes in sub-second Core Web Vitals optimization, concurrent React 19 rendering, and strict TypeScript engineering.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    tags: ["React 19", "Performance", "Tailwind CSS"],
  },
  {
    name: "Samantha Chen",
    role: "Client Strategy & QA Director",
    bio: "Guarantees that every digital flagship we ship adheres to zero-downtime standards, cross-browser compatibility, and WCAG accessibility.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    tags: ["Client Strategy", "Accessibility", "Automated QA"],
  },
];

const companyValues = [
  {
    title: "Engineering Integrity",
    description:
      "We write clean, strictly-typed code with zero shortcuts or bloated templates. Every line serves a commercial purpose.",
    icon: LuShield,
  },
  {
    title: "Aesthetic Precision",
    description:
      "Design is not decoration; it is how trust is established. We sculpt interfaces with intentional whitespace and balanced hierarchy.",
    icon: LuSparkles,
  },
  {
    title: "Radical Transparency",
    description:
      "No technical jargon or hidden project scopes. We communicate with weekly milestones, clear deliverables, and fixed timelines.",
    icon: LuUsers,
  },
  {
    title: "Velocity with Reliability",
    description:
      "We build on high-velocity modern frameworks like Next.js App Router to deliver enterprise speed without compromising safety.",
    icon: LuZap,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="About Us"
        subtitle="Discover who we are and how we create meaningful digital experiences."
      />

      <PageTransition>
        {/* 2. Company Introduction & Story */}
        <section className="py-12 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center">
              {/* Story Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D9DDE5] shadow-xl aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] bg-[#101A35] max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    alt="Blue Pearl Nexa Team Discussion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-4 sm:mb-6">
                  Bridging the Gap Between Creative Design and Deep Engineering.
                </h2>

                <p className="text-base sm:text-lg text-[#727989] leading-[1.75] mb-5 font-normal">
                  <strong className="text-[#101A35] font-semibold">Blue Pearl Nexa</strong> was founded on a simple observation: modern businesses were constantly forced to choose between design agencies that couldn&apos;t write scalable code, or technical software houses that had zero design sensibility.
                </p>

                <p className="text-base text-[#727989] leading-[1.75] mb-8 font-normal">
                  We assembled a multidisciplinary collective of senior UI/UX designers, systems architects, and frontend performance engineers under one roof. Our mission is to craft digital flagships where breathtaking visual identity and rock-solid technical infrastructure coexist in total harmony.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-5 border-t border-[#D9DDE5]">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#101A35]">
                    <LuCircleCheck className="w-4 h-4 text-[#2448A5] shrink-0" />
                    <span>100% Handcrafted Codebases</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#101A35]">
                    <LuCircleCheck className="w-4 h-4 text-[#2448A5] shrink-0" />
                    <span>Sub-Second Page Load Standard</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#101A35]">
                    <LuCircleCheck className="w-4 h-4 text-[#2448A5] shrink-0" />
                    <span>Strict Type-Safe TypeScript Core</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#101A35]">
                    <LuCircleCheck className="w-4 h-4 text-[#2448A5] shrink-0" />
                    <span>Continuous Post-Launch Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* 3. Mission, Vision & Guiding Principles */}
      <ApproachSection />

      {/* 4. Core Values Grid */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-14 text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-4">
              The Principles Behind Every Pixel and Commit.
            </h2>
            <p className="text-sm sm:text-lg text-[#727989] font-normal leading-relaxed">
              We hold ourselves to uncompromising standards of craftsmanship,
              transparency, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyValues.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#D9DDE5] shadow-xs hover:border-[#2448A5]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] mb-3.5 sm:mb-5">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#101A35] mb-1.5 sm:mb-2 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#727989] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-14 lg:mb-18 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-2 sm:mb-4">
              Guided by Senior Architects and Designers.
            </h2>
            <p className="text-sm sm:text-lg text-[#727989] font-normal leading-relaxed">
              You collaborate directly with senior specialists who design, code,
              and deploy your solution—no account managers or outsourced intermediaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#D9DDE5] hover:border-[#2448A5]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-52 sm:h-64 w-full bg-[#101A35] overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A35]/80 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-[#101A35] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2448A5] mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#727989] leading-relaxed mb-5">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D9DDE5]/60 flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAFAF8] text-[#727989] border border-[#D9DDE5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Footer Banner */}
      <section className="py-20 bg-[#FAFAF8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] mb-4">
            Ready to Build With a Team That Cares About Details?
          </h2>
          <p className="text-base text-[#727989] mb-8 max-w-xl mx-auto">
            Schedule a direct 30-minute discovery call to explore technical feasibility,
            design scopes, and fixed timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] font-semibold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Get in Touch with Our Team</span>
              <LuArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FAFAF8] text-[#101A35] border border-[#D9DDE5] font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              <span>Browse All Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
      </PageTransition>
    </>
  );
}

