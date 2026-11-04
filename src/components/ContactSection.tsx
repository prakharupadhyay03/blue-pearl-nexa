"use client";

import React, { useState } from "react";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuClock,
  LuSend,
  LuCircleCheck,
  LuCircleAlert,
  LuLinkedin,
  LuTwitter,
  LuGithub,
  LuGlobe,
} from "react-icons/lu";

interface ContactSectionProps {
  initialProjectType?: string;
}

export default function ContactSection({ initialProjectType }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    projectType: initialProjectType || "Website Development",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Update projectType if passed externally from modal
  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your contact phone number";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please provide a brief summary of your project";
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = "Please provide at least 15 characters of detail";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to transmit inquiry. Please check your connection."
        );
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      projectType: "Website Development",
      projectDescription: "",
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Blue Pearl Nexa"
      className="py-12 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information and Studio Details */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-4 sm:mb-6">
              Let&apos;s Talk About Your Next Project.
            </h2>

            <p className="text-sm sm:text-lg text-[#727989] font-normal leading-relaxed mb-6 sm:mb-8">
              Whether you are looking to create a brand-new custom platform or
              rebuild an existing website for modern scale, our senior team is ready
              to provide strategic direction.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D9DDE5]">
                <div className="w-10 h-10 rounded-xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] shrink-0">
                  <LuMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#727989] block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:bluepearlnexa@gmail.com"
                    className="text-sm font-bold text-[#101A35] hover:text-[#2448A5] transition-colors"
                  >
                    bluepearlnexa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D9DDE5]">
                <div className="w-10 h-10 rounded-xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] shrink-0">
                  <LuPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#727989] block">
                    Phone Inquiries
                  </span>
                  <a
                    href="tel:+919075556635"
                    className="text-sm font-bold text-[#101A35] hover:text-[#2448A5] transition-colors"
                  >
                    +91 9075556635
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D9DDE5]">
                <div className="w-10 h-10 rounded-xl bg-[#2448A5]/10 flex items-center justify-center text-[#2448A5] shrink-0">
                  <LuClock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#727989] block">
                    Response Benchmark
                  </span>
                  <span className="text-sm font-bold text-[#101A35]">
                    Within 24 business hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#727989] block mb-3">
                Connect on Professional Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white border border-[#D9DDE5] flex items-center justify-center text-[#727989] hover:text-[#2448A5] hover:border-[#2448A5] transition-colors"
                >
                  <LuLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-10 h-10 rounded-full bg-white border border-[#D9DDE5] flex items-center justify-center text-[#727989] hover:text-[#2448A5] hover:border-[#2448A5] transition-colors"
                >
                  <LuTwitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-white border border-[#D9DDE5] flex items-center justify-center text-[#727989] hover:text-[#2448A5] hover:border-[#2448A5] transition-colors"
                >
                  <LuGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#D9DDE5] shadow-[0_20px_50px_rgba(16,26,53,0.06)]">
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#2448A5]/10 border border-[#2448A5]/20 flex items-center justify-center text-[#2448A5] mb-5">
                    <LuCircleCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#101A35] tracking-tight mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-[#727989] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-[#101A35]">{formData.fullName}</strong>.
                    Our technical lead will review your project requirements for{" "}
                    <strong className="text-[#2448A5]">{formData.projectType}</strong> and
                    reach out to you at <strong className="text-[#101A35]">{formData.email}</strong>{" "}
                    within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-[#101A35] hover:bg-[#2448A5] text-[#FAFAF8] text-xs font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#D9DDE5] pb-4 mb-4">
                    <h3 className="text-xl font-bold text-[#101A35] tracking-tight">
                      Project Specification Details
                    </h3>
                    <p className="text-xs text-[#727989] mt-0.5">
                      Fields marked with * are required for preliminary assessment.
                    </p>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all ${
                          errors.fullName ? "border-red-500" : "border-[#D9DDE5]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <LuCircleAlert className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all ${
                          errors.email ? "border-red-500" : "border-[#D9DDE5]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <LuCircleAlert className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number and Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all ${
                          errors.phoneNumber ? "border-red-500" : "border-[#D9DDE5]"
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <LuCircleAlert className="w-3 h-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-1.5"
                      >
                        Company Name (Optional)
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-[#D9DDE5] text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-1.5"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border border-[#D9DDE5] text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all cursor-pointer"
                    >
                      <option value="Website Development">Website Development (Next.js & TypeScript)</option>
                      <option value="Website Design">Website Design (UI/UX & Design Systems)</option>
                      <option value="E-commerce Development">E-commerce Development (Custom Storefronts)</option>
                      <option value="Business & Corporate Websites">Business & Corporate Websites</option>
                      <option value="Website Redesign">Website Redesign (Modernization & Speed)</option>
                      <option value="Website Maintenance & Optimization">Website Maintenance & Optimization</option>
                    </select>
                  </div>

                  {/* Project Description Textarea */}
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-1.5"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDescription: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FAFAF8] border text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all resize-none ${
                        errors.projectDescription ? "border-red-500" : "border-[#D9DDE5]"
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <LuCircleAlert className="w-3 h-3" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Error Banner */}
                  {submitError && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                      <LuCircleAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Unable to send message</p>
                        <p className="text-xs text-red-600 mt-0.5">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#2448A5] hover:bg-[#1b3884] disabled:bg-[#727989] text-[#FAFAF8] font-bold text-sm py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Requirements...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <LuSend className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#727989]">
                    Confidentiality guaranteed. We strictly safeguard all client project disclosures.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

