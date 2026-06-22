import { z } from "zod";

export const clientInquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Company name is required."),
  website: z.string().url("Enter a valid website URL.").optional().or(z.literal("")),
  email: z.email("Enter a valid business email."),
  role_needed: z.string().min(2, "Tell us what role you need."),
  industry: z.string().min(2, "Industry is required."),
  hiring_timeline: z.string().min(2, "Select a hiring timeline."),
  budget_range: z.string().min(2, "Select a budget range."),
  notes: z.string().max(1200, "Please keep notes under 1,200 characters.").optional().or(z.literal("")),
  intent: z.string().optional(),
});

export const talentApplicationSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name."),
  country: z.string().min(2, "Country is required."),
  email: z.email("Enter a valid email."),
  whatsapp: z.string().min(7, "Please include your WhatsApp number with country code."),
  english_level: z.string().min(2, "Select your English level."),
  role_interests: z.string().min(2, "Select or write your role interests."),
  years_experience: z.string().min(1, "Select your experience range."),
  salary_expectation: z.string().min(2, "Salary expectation is required."),
  availability: z.string().min(2, "Availability is required."),
  linkedin_url: z.string().url("Enter a valid LinkedIn URL.").optional().or(z.literal("")),
  resume_file_name: z.string().optional(),
  intro_url: z.string().url("Enter a valid video or intro URL.").optional().or(z.literal("")),
});

export type ClientInquiryInput = z.infer<typeof clientInquirySchema>;
export type TalentApplicationInput = z.infer<typeof talentApplicationSchema>;
