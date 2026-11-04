"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  LuSend,
  LuUpload,
  LuFileText,
  LuX,
  LuCircleCheck,
  LuCircleAlert,
  LuLoader,
} from "react-icons/lu";
import { careerRolesList } from "@/data/careers";

interface CareerApplicationFormProps {
  selectedRole?: string;
  onRoleSelected?: (role: string) => void;
}

export default function CareerApplicationForm({
  selectedRole,
  onRoleSelected,
}: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: selectedRole || "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({ ...prev, position: selectedRole }));
    }
  }, [selectedRole]);

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

    if (!formData.position || formData.position === "Select Role") {
      newErrors.position = "Please select a role / position";
    }

    if (!resumeFile) {
      newErrors.resume = "Please upload your resume (PDF or DOCX)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const lowerName = file.name.toLowerCase();
    const hasValidExt = allowedExtensions.some((ext) => lowerName.endsWith(ext));

    if (!hasValidExt) {
      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF, DOC, and DOCX files are supported",
      }));
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size exceeds the 10MB limit",
      }));
      return;
    }

    setResumeFile(file);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName.trim());
      data.append("email", formData.email.trim());
      data.append("phoneNumber", formData.phoneNumber.trim());
      data.append("position", formData.position);
      if (resumeFile) {
        data.append("resume", resumeFile);
      }

      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      position: "",
    });
    setResumeFile(null);
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-[#D9DDE5] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(16,26,53,0.06)] text-left">
      {isSubmitted ? (
        /* Success State */
        <div className="py-10 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#2448A5]/10 border border-[#2448A5]/20 flex items-center justify-center text-[#2448A5] mb-5">
            <LuCircleCheck className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] tracking-tight mb-2.5">
            Application Submitted Successfully!
          </h3>
          <p className="text-sm sm:text-base text-[#727989] max-w-lg mx-auto leading-relaxed mb-6 font-normal">
            Thank you, <strong className="text-[#101A35]">{formData.fullName}</strong>. We have
            received your application and resume for the{" "}
            <strong className="text-[#2448A5]">{formData.position}</strong> role. Our engineering
            recruitment team will review your profile and reach out via{" "}
            <strong className="text-[#101A35]">{formData.email}</strong> within 2–3 business days.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 bg-[#101A35] hover:bg-[#2448A5] text-[#FAFAF8] text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-colors cursor-pointer"
          >
            <span>Submit Another Application</span>
          </button>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Server Error Alert */}
          {submitError && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
              <LuCircleAlert className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
              <div>
                <p className="font-semibold text-red-800">Submission Failed</p>
                <p className="text-xs sm:text-sm mt-0.5 text-red-600">{submitError}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="career-fullName"
                className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="career-fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) {
                    const next = { ...errors };
                    delete next.fullName;
                    setErrors(next);
                  }
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border text-sm text-[#101A35] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all placeholder:text-[#727989]/50 ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-[#D9DDE5]"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="career-email"
                className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="career-email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) {
                    const next = { ...errors };
                    delete next.email;
                    setErrors(next);
                  }
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border text-sm text-[#101A35] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all placeholder:text-[#727989]/50 ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#D9DDE5]"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Phone Number */}
            <div>
              <label
                htmlFor="career-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="career-phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phoneNumber}
                onChange={(e) => {
                  setFormData({ ...formData, phoneNumber: e.target.value });
                  if (errors.phoneNumber) {
                    const next = { ...errors };
                    delete next.phoneNumber;
                    setErrors(next);
                  }
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border text-sm text-[#101A35] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all placeholder:text-[#727989]/50 ${
                  errors.phoneNumber ? "border-red-400 bg-red-50/20" : "border-[#D9DDE5]"
                }`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Position / Role Dropdown */}
            <div>
              <label
                htmlFor="career-position"
                className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-2"
              >
                Position / Role <span className="text-red-500">*</span>
              </label>
              <select
                id="career-position"
                value={formData.position}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData({ ...formData, position: val });
                  onRoleSelected?.(val);
                  if (errors.position) {
                    const next = { ...errors };
                    delete next.position;
                    setErrors(next);
                  }
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border text-sm text-[#101A35] focus:outline-none focus:ring-2 focus:ring-[#2448A5] transition-all cursor-pointer ${
                  errors.position ? "border-red-400 bg-red-50/20" : "border-[#D9DDE5]"
                }`}
              >
                <option value="">Select Role</option>
                {careerRolesList.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.position && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.position}</p>
              )}
            </div>
          </div>

          {/* Upload Resume (PDF / Docx) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101A35] mb-2">
              Upload Resume (PDF / Docx) <span className="text-red-500">*</span>
            </label>

            {/* Drag and Drop Container */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer ${
                isDragging
                  ? "border-[#2448A5] bg-[#2448A5]/5"
                  : errors.resume
                  ? "border-red-400 bg-red-50/10"
                  : "border-[#D9DDE5] hover:border-[#2448A5]/60 hover:bg-[#FAFAF8]"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
              />

              {resumeFile ? (
                /* Selected File Display */
                <div
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#D9DDE5] max-w-md mx-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[#2448A5]/10 text-[#2448A5] flex items-center justify-center shrink-0">
                      <LuFileText className="w-5 h-5" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-xs sm:text-sm font-bold text-[#101A35] truncate">
                        {resumeFile.name}
                      </p>
                      <p className="text-[11px] text-[#727989]">
                        {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to send
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setResumeFile(null)}
                    aria-label="Remove uploaded resume"
                    className="p-1.5 rounded-lg text-[#727989] hover:text-red-600 hover:bg-red-50 transition-colors shrink-0 ml-2"
                  >
                    <LuX className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Empty Upload Prompt */
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#2448A5]/8 border border-[#2448A5]/20 flex items-center justify-center text-[#2448A5] mb-1">
                    <LuUpload className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-[#101A35]">
                    Drag &amp; drop your resume here, or{" "}
                    <span className="text-[#2448A5] underline underline-offset-2">browse</span>
                  </p>
                  <p className="text-xs text-[#727989]">
                    Supports PDF, DOC, DOCX • Maximum file size: 10MB
                  </p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2448A5]/10 text-[#2448A5] text-xs font-semibold">
                      Choose File
                    </span>
                  </div>
                </div>
              )}
            </div>

            {errors.resume && (
              <p className="mt-1 text-xs text-red-600 font-medium">{errors.resume}</p>
            )}
          </div>

          {/* Submit Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex items-center justify-center gap-2.5 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] text-sm sm:text-base font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2448A5] focus-visible:ring-offset-2 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? (
                <>
                  <LuLoader className="w-5 h-5 animate-spin" />
                  <span>Submitting Application &amp; Resume...</span>
                </>
              ) : (
                <>
                  <LuSend className="w-4 h-4" />
                  <span>Submit Application &amp; Resume</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-[#727989] mt-3">
              Your contact details and resume will be sent directly to our hiring team via encrypted SMTP.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
