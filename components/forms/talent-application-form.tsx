"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/forms/form-field";
import { talentApplicationSchema, type TalentApplicationInput } from "@/lib/schemas";

type TalentFormValues = TalentApplicationInput & { resume?: FileList };

export function TalentApplicationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TalentFormValues>({
    resolver: zodResolver(talentApplicationSchema),
  });

  async function onSubmit(values: TalentFormValues) {
    setStatus("idle");
    setMessage("");
    const resumeFileName = values.resume?.[0]?.name || "";
    const payload = { ...values, resume_file_name: resumeFileName, resume: undefined };

    const response = await fetch("/api/talent-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Something went wrong. Please email hello@meridianimpulse.com or try again.");
      return;
    }

    const result = await response.json();
    setStatus("success");
    setMessage(result.mode === "mock" ? "Application received in demo mode. Connect Supabase Storage later for resume uploads." : "Application received. Thank you for joining the Meridian Impulse talent network.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-[2rem] border border-navy/10 bg-white/85 p-5 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Full name" error={errors.full_name?.message}>
          <Input placeholder="Your full name" {...register("full_name")} />
        </FormField>
        <FormField label="Country" error={errors.country?.message}>
          <Input placeholder="Uruguay, Honduras, Argentina..." {...register("country")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Email" error={errors.email?.message}>
          <Input type="email" placeholder="you@email.com" {...register("email")} />
        </FormField>
        <FormField label="WhatsApp" error={errors.whatsapp?.message}>
          <Input placeholder="+598 ..." {...register("whatsapp")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="English level" error={errors.english_level?.message}>
          <Select {...register("english_level")} defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="C2 / Near-native">C2 / Near-native</option>
            <option value="C1 / Advanced professional">C1 / Advanced professional</option>
            <option value="B2 / Strong business English">B2 / Strong business English</option>
          </Select>
        </FormField>
        <FormField label="Role interests" error={errors.role_interests?.message}>
          <Input placeholder="Executive Assistant, Logistics, Procurement..." {...register("role_interests")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Years of experience" error={errors.years_experience?.message}>
          <Select {...register("years_experience")} defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="1-2 years">1–2 years</option>
            <option value="3-5 years">3–5 years</option>
            <option value="6-9 years">6–9 years</option>
            <option value="10+ years">10+ years</option>
          </Select>
        </FormField>
        <FormField label="Salary expectation" error={errors.salary_expectation?.message}>
          <Input placeholder="Monthly USD range" {...register("salary_expectation")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Availability" error={errors.availability?.message}>
          <Input placeholder="Immediate, 2 weeks, part-time only..." {...register("availability")} />
        </FormField>
        <FormField label="LinkedIn URL" error={errors.linkedin_url?.message}>
          <Input placeholder="https://linkedin.com/in/..." {...register("linkedin_url")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Resume upload placeholder" error={errors.resume_file_name?.message}>
          <Input type="file" accept=".pdf,.doc,.docx" {...register("resume")} />
        </FormField>
        <FormField label="Short intro / video URL" error={errors.intro_url?.message}>
          <Input placeholder="Loom, Google Drive, YouTube unlisted..." {...register("intro_url")} />
        </FormField>
      </div>
      <FormField label="Short professional introduction">
        <Textarea placeholder="Briefly describe your strongest support experience, preferred roles, and the type of client you serve best." />
      </FormField>
      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit application"} <UploadCloud className="h-4 w-4" />
      </Button>
      {message ? (
        <p className={status === "success" ? "text-sm font-semibold text-meridian" : "text-sm font-semibold text-red-700"}>{message}</p>
      ) : null}
    </form>
  );
}
