import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { models, serviceAreas, supportRoles } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Meridian Impulse staffing placement, managed staffing, and future BPO operations pod models for premium LATAM support talent.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A focused staffing model today. A scalable operations partner tomorrow."
        description="Meridian Impulse starts with premium staffing and recruiting, then expands naturally into managed staffing, BPO pods, payroll support, and operational consulting as client needs mature."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="What we support" title="Administrative, logistics, procurement, and operations roles." description="Our initial niche is intentionally practical: roles that reduce follow-up load, improve coordination, and keep work moving." />
          <div className="mt-12">
            <FeatureGrid items={serviceAreas} />
          </div>
        </div>
      </section>

      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Engagement models" title="Three models, one quality standard." description="The first model is staffing placement. The structure is ready for managed staffing and future recurring operations pods without rebranding." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {models.map((model) => {
              const Icon = model.icon;
              return (
                <div key={model.title} className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-meridian"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-navy">{model.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-navy/65">{model.description}</p>
                  <ul className="mt-5 grid gap-2">
                    {model.bullets.map((bullet) => <li key={bullet} className="rounded-2xl bg-sand/50 px-4 py-3 text-sm font-semibold text-navy/70">{bullet}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Role examples" title="Support roles a U.S. team can delegate with confidence." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportRoles.map((role) => (
              <div key={role.title} className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-navy">{role.title}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/65">{role.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline"><Link href="/services/logistics-operations-support">View logistics support <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
