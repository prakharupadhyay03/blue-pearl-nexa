import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import CareersContent from "@/components/CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Blue Pearl Nexa. Join our senior engineering and UI/UX design team building high-performance web and mobile experiences.",
};

export default function CareersPage() {
  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="Career"
        subtitle="Discover opportunities to grow, innovate, and build with us."
      />

      <PageTransition>
        <CareersContent />
      </PageTransition>
    </>
  );
}
