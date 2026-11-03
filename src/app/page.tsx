"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition className="w-full max-w-full m-0 p-0 overflow-x-hidden">
      {/* HERO SECTION */}
      <HeroSection />

      {/* INTRODUCTION / ABOUT US */}
      <AboutSection />

      {/* TRUST & CREDIBILITY */}
      <TrustSection />

      {/* OUR APPROACH */}
      <ApproachSection />

      {/* OUR SERVICES */}
      <ServicesSection />

      {/* CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <FaqSection />
    </PageTransition>
  );
}
