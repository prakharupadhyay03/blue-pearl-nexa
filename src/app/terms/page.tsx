import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: "Terms of engagement and service guidelines for Blue Pearl Nexa.",
};

export default function TermsPage() {
  return (
    <>
      <PageBanner
        title="Terms of Engagement"
        subtitle="Clear, transparent guidelines governing our engineering collaborations."
      />

      <PageTransition>
        <section className="py-24 sm:py-28 bg-[#FAFAF8] text-left">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 bg-white p-8 sm:p-12 rounded-3xl border border-[#D9DDE5] shadow-xs">
            <h2 className="text-2xl font-bold text-[#101A35] mb-4">1. Scope of Work & Milestones</h2>
            <p className="text-sm sm:text-base text-[#727989] leading-relaxed mb-6 font-normal">
              All design and engineering deliverables are executed in accordance with a mutually agreed Statement of Work (SOW). Changes in project scope or additional architectural requirements are managed via structured milestone amendments.
            </p>

            <h2 className="text-2xl font-bold text-[#101A35] mb-4">2. Performance & Delivery Standards</h2>
            <p className="text-sm sm:text-base text-[#727989] leading-relaxed mb-6 font-normal">
              Blue Pearl Nexa guarantees that all production web applications undergo automated linting, cross-device QA, and Core Web Vitals optimization prior to production deployment.
            </p>

            <h2 className="text-2xl font-bold text-[#101A35] mb-4">3. Governing Law</h2>
            <p className="text-sm sm:text-base text-[#727989] leading-relaxed font-normal">
              These terms are governed by and construed in accordance with the laws of India, subject to the jurisdiction of the courts of Bangalore.
            </p>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
