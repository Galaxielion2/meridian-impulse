"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/forms/form-field";
import { clientInquirySchema, type ClientInquiryInput } from "@/lib/schemas";

export function ClientInquiryForm({ intent = "client-inquiry" }: { intent?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ClientInquiryInput>({
    resolver: zodResolver(clientInquirySchema),
    defaultValues: { intent },
  });

  async function onSubmit(values: ClientInquiryInput) {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/client-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, intent }),
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Something went wrong. Please email hello@meridianimpulse.com or try again.");
      return;
    }

    const result = await response.json();
    setStatus("success");
    setMessage(result.mode === "mock" ? "Inquiry received in demo mode. Connect Supabase to store submissions automatically." : "Inquiry received. We will follow up shortly.");
    reset({ intent });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-[2rem] border border-navy/10 bg-white/85 p-5 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Name" error={errors.name?.message}>
          <Input placeholder="Your full name" {...register("name")} />
        </FormField>
        <FormField label="Company" error={errors.company?.message}>
          <Input placeholder="Company name" {...register("company")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Website" error={errors.website?.message}>
          <Input placeholder="https://company.com" {...register("website")} />
        </FormField>
        <FormField label="Email" error={errors.email?.message}>
          <Input type="email" placeholder="you@company.com" {...register("email")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Role needed" error={errors.role_needed?.message}>
          <Input placeholder="Logistics Coordinator, Executive Assistant..." {...register("role_needed")} />
        </FormField>
        <FormField label="Industry" error={errors.industry?.message}>
          <Input placeholder="Logistics, SaaS, real estate, healthcare..." {...register("industry")} />
        </FormField>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Hiring timeline" error={errors.hiring_timeline?.message}>
          <Select {...register("hiring_timeline")} defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="Immediate">Immediate</option>
            <option value="2-4 weeks">2–4 weeks</option>
            <option value="1-2 months">1–2 months</option>
            <option value="Exploring">Exploring options</option>
          </Select>
        </FormField>
        <FormField label="Budget range" error={errors.budget_range?.message}>
          <Select {...register("budget_range")} defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="Under $1,500/month">Under $1,500/month</option>
            <option value="$1,500-$2,500/month">$1,500–$2,500/month</option>
            <option value="$2,500-$4,000/month">$2,500–$4,000/month</option>
            <option value="$4,000+/month">$4,000+/month</option>
            <option value="Placement fee only">Placement fee only</option>
          </Select>
        </FormField>
      </div>
      <FormField label="Notes" error={errors.notes?.message}>
        <Textarea placeholder="What work should this person own? What tools, schedule, or experience matter most?" {...register("notes")} />
      </FormField>
      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send inquiry"} <Send className="h-4 w-4" />
      </Button>
      {message ? (
        <p className={status === "success" ? "text-sm font-semibold text-meridian" : "text-sm font-semibold text-red-700"}>{message}</p>
      ) : null}
    </form>
  );
}
