import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Process",
  description: "See the Meridian Impulse process for role mapping, sourcing, vetting, shortlist presentation, and onboarding support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear staffing process for high-trust remote roles."
        description="We keep the workflow simple, visible, and human. The goal is not to send a pile of resumes. The goal is to help you meet aligned candidates who can do the work."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="From role clarity to trusted shortlist." />
          <div className="mt-12"><ProcessSteps /></div>
        </div>
      </section>
      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            ["Before sourcing", "We clarify the real work, must-have skills, schedule, tools, reporting line, compensation range, and success criteria."],
            ["During vetting", "We review English, experience, communication style, professional standards, availability, and role-specific judgment."],
            ["After shortlist", "We support interview planning, candidate comparison, expectations, and optional ongoing coordination for managed staffing."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-3xl font-semibold text-navy">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-navy/65">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
