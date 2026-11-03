import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import { LuClock, LuMapPin, LuShieldCheck } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's connect. Tell us about your next digital project, website redesign, or enterprise Next.js application requirements.",
};

interface ContactPageProps {
  searchParams?: Promise<{
    service?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const selectedService = resolvedParams.service || "Website Development";

  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="Contact"
        subtitle="Let's discuss your next digital project."
      />

      <PageTransition>
       
     

        {/* 3. Primary Contact Form & Studio Details */}
        <ContactSection initialProjectType={selectedService} />

        {/* 4. Onboarding FAQ Preview */}
        <FaqSection />
      </PageTransition>
    </>
  );
}
