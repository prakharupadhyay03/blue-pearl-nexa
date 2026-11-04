"use client";

import React, { useState } from "react";
import { jobPositions } from "@/data/careers";
import {
  LuCircleCheck,
  LuArrowDown,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";
import CareerApplicationForm from "./CareerApplicationForm";

export default function CareersContent() {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Open Positions Cards Grid */}
      <section id="openings" className="py-14 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-14 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2448A5] block mb-2">
              Opportunities at Blue Pearl Nexa
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101A35] tracking-tight mb-2 sm:mb-4">
              Current Open Roles
            </h2>
            <p className="text-sm sm:text-base text-[#727989]">
              Explore active roles across web engineering, mobile development, and product design.
              Click &ldquo;Apply for Role&rdquo; to quickly jump to the application form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {jobPositions.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D9DDE5] shadow-xs hover:border-[#2448A5]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Top Meta Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2448A5] bg-[#2448A5]/10 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Actively Hiring
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-bold text-[#101A35] tracking-tight mb-1.5 group-hover:text-[#2448A5] transition-colors">
                    {job.title}
                  </h3>

                  {/* Location & Experience */}
                  <p className="text-xs text-[#727989] mb-4 font-medium">
                    {job.location} • {job.experience} experience • {job.type}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#727989] leading-relaxed mb-5">
                    {job.description}
                  </p>

                  {/* Requirements List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#D9DDE5]/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#101A35]/60 block mb-1">
                      Key Competencies
                    </span>
                    {job.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#171B24]">
                        <LuCircleCheck className="w-3.5 h-3.5 text-[#2448A5] shrink-0 mt-0.5" />
                        <span className="leading-snug">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] text-xs font-semibold px-5 py-3 rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>Apply for Role</span>
                  <LuArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Direct Career Application & Resume Upload Form Section */}
      <section id="apply-form" className="py-14 sm:py-20 lg:py-28 bg-white border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12 text-center mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2448A5] block mb-2">
              Join Our Engineering Team
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight mb-3">
              Submit Application &amp; Resume
            </h2>
            <p className="text-sm sm:text-base text-[#727989] max-w-xl mx-auto">
              Choose your role from the list, provide your contact details, and upload your resume in
              PDF or DOCX format. Your application is sent securely via direct SMTP.
            </p>
          </div>

          {/* Interactive Form Component */}
          <CareerApplicationForm
            selectedRole={selectedRole}
            onRoleSelected={(role) => setSelectedRole(role)}
          />

          {/* Direct Assistance Details */}
          <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-[#727989]">
            <a
              href="mailto:bluepearlnexa@gmail.com"
              className="flex items-center gap-2 hover:text-[#2448A5] transition-colors"
            >
              <LuMail className="w-4 h-4 text-[#2448A5]" />
              <span>bluepearlnexa@gmail.com</span>
            </a>
            <span className="text-[#D9DDE5] hidden sm:inline">•</span>
            <a
              href="tel:+919075556635"
              className="flex items-center gap-2 hover:text-[#2448A5] transition-colors"
            >
              <LuPhone className="w-4 h-4 text-[#2448A5]" />
              <span>+91 9075556635</span>
            </a>
            <span className="text-[#D9DDE5] hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <LuMapPin className="w-4 h-4 text-[#2448A5]" />
              <span>Nashik, Maharashtra, India</span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
