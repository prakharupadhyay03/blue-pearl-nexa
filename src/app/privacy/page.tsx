import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data protection standards at Blue Pearl Nexa.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding your proprietary information and client data."
      />

      <PageTransition>
        <section className="py-24 sm:py-28 bg-[#FAFAF8] text-left">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 bg-white p-8 sm:p-12 rounded-3xl border border-[#D9DDE5] shadow-xs">
            <h2 className="text-2xl font-bold text-[#101A35] mb-4">1. Data Collection & Usage</h2>
            <p className="text-sm sm:text-base text-[#727989] leading-relaxed mb-6 font-normal">
              Blue Pearl Nexa collects only the information necessary to evaluate and execute digital web design and development engagements. We never sell, lease, or distribute prospective client data to third-party marketing entities.
            </p>

            <h2 className="text-2xl font-bold text-[#101A35] mb-4">2. Intellectual Property & Codebases</h2>
            <p className="text-sm sm:text-base text-[#727989] leading-relaxed mb-6 font-normal">
              All codebases, design prototypes, and custom architectural solutions developed under signed client agreements remain the exclusive intellectual property of the commissioning client upon project settlement.
            </p>

            <h2 className="text-2xl font-bold text-[#101A35] mb-4">3. Contact Information</h2>
            <p className="text-sm sm:text-base text-[#727989] leading-relaxed font-normal">
              For inquiries regarding our data handling or security compliance, contact our legal counsel at <strong className="text-[#101A35]">privacy@bluepearlnexa.com</strong>.
            </p>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
