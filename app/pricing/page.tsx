import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { models } from "@/data/content";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models",
  description: "Review Meridian Impulse engagement model examples: placement fee model, monthly support model, and custom team model. Request a tailored proposal.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing / Engagement Models"
        title="Flexible models without publishing one-size-fits-all prices."
        description="Every role depends on seniority, market, availability, language requirements, working hours, and whether you need placement only or ongoing coordination. Request a proposal for final pricing."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Model examples" title="Choose the structure that fits the relationship." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {models.map((model) => {
              const Icon = model.icon;
              return (
                <div key={model.title} className="flex h-full flex-col rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-meridian"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-navy">{model.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-navy/65">{model.description}</p>
                  <ul className="mt-5 grid gap-2">
                    {model.bullets.map((bullet) => <li key={bullet} className="rounded-2xl bg-sand/50 px-4 py-3 text-sm font-semibold text-navy/70">{bullet}</li>)}
                  </ul>
                  <Button asChild variant="outline" className="mt-6"><Link href="/contact">Request proposal <ArrowRight className="h-4 w-4" /></Link></Button>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-navy/60">Exact prices are intentionally not shown as final because the right quote should reflect role complexity, search scope, employment structure, and the level of Meridian involvement.</p>
        </div>
      </section>
      <CtaBanner title="Request a proposal shaped around the role, not a generic package." />
    </>
  );
}
