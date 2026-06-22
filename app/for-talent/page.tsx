import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TalentApplicationForm } from "@/components/forms/talent-application-form";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { professionalStandards } from "@/data/content";

export const metadata: Metadata = {
  title: "For Talent",
  description: "Join the Meridian Impulse talent network for English-speaking LATAM professionals seeking remote administrative, logistics, procurement, and operations support roles.",
};

export default function ForTalentPage() {
  return (
    <>
      <PageHero
        eyebrow="For talent"
        title="Join a premium talent network built around professionalism and trust."
        description="Meridian Impulse connects English-speaking LATAM professionals with international companies that value clear communication, ownership, and reliable remote execution."
      >
        <Button asChild variant="gold" size="lg"><Link href="/apply-as-talent">Apply as Talent <ArrowRight className="h-4 w-4" /></Link></Button>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Why join" title="We are building a network for serious professionals." description="The goal is not to flood candidates into generic jobs. We want to understand your strengths, standards, English level, schedule, and ideal client environment." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Access to foreign client opportunities", "Roles aligned to your experience and expectations", "A human process that respects professionalism"].map((item) => (
              <div key={item} className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-navy">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/65">We prioritize alignment and quality so the match has a better chance of becoming stable, respected, long-term work.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading align="left" eyebrow="Who we look for" title="Professionals ready for international remote work." description="We are especially interested in candidates with strong English and experience in administration, executive assistance, logistics, supply chain, procurement, customer support, documentation, and operations coordination." />
          <FeatureGrid items={professionalStandards} columns={2} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading align="left" eyebrow="Requirements" title="English and remote standards matter." description="Most client-facing opportunities require advanced written and spoken English, dependable internet, a professional work environment, schedule overlap with U.S. teams, and clear documentation habits." />
          </div>
          <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
            {["Advanced business English", "Reliable internet and workspace", "Comfort with calendars, email, documents, spreadsheets, and collaboration tools", "Proactive communication and early escalation", "Availability aligned with client working hours", "Professional references or verifiable work history"].map((item) => (
              <div key={item} className="rounded-3xl border border-navy/10 bg-white p-5 font-semibold text-navy/75 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="Candidate application" title="Apply to join the Meridian Impulse pipeline." description="This first version captures your profile and resume filename. Later, Supabase Storage or a candidate portal can be added for full document management." />
            <div className="mt-8 rounded-3xl bg-sand/70 p-5 text-sm leading-7 text-navy/70">
              <strong className="text-navy">Pipeline explanation:</strong> after applying, qualified candidates may be contacted for English review, experience discussion, role matching, work sample review, and client shortlist consideration.
            </div>
          </div>
          <TalentApplicationForm />
        </div>
      </section>
    </>
  );
}
