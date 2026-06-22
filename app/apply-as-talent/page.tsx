import type { Metadata } from "next";
import { TalentApplicationForm } from "@/components/forms/talent-application-form";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Apply as Talent",
  description: "Apply to join the Meridian Impulse talent network for remote administrative, logistics, procurement, and operations support opportunities.",
};

export default function ApplyAsTalentPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply as Talent"
        title="Submit your profile for future international support roles."
        description="We are looking for English-speaking LATAM professionals with strong communication, reliable follow-through, and experience supporting real business operations."
      />
      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading align="left" eyebrow="Application" title="Complete the first-step profile." description="The form is ready for Supabase storage and currently includes a resume upload placeholder. Later, the project can add Supabase Storage, candidate profiles, and internal review stages." />
          <TalentApplicationForm />
        </div>
      </section>
    </>
  );
}
