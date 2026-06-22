import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { logisticsCapabilities } from "@/data/content";

export const metadata: Metadata = {
  title: "Logistics & Operations Support",
  description: "Hire LATAM logistics coordinators, supply chain assistants, procurement assistants, and operations coordinators for remote business support.",
};

export default function LogisticsOperationsSupportPage() {
  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Featured niche"
        title="Logistics and operations support for teams that need follow-through."
        description="Meridian Impulse helps companies find bilingual LATAM coordinators who can handle status updates, vendor follow-up, shipment documentation, procurement support, and operational trackers."
      >
        <Button asChild variant="gold" size="lg"><Link href="/book-a-call">Discuss a logistics role <ArrowRight className="h-4 w-4" /></Link></Button>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading align="left" eyebrow="Why this niche" title="Operational details need calm, consistent ownership." description="Logistics, procurement, and supply chain support often fail because no one has time to chase the small updates that prevent large problems. A strong remote coordinator can bring order to the follow-up loop." />
          <div className="grid gap-3 sm:grid-cols-2">
            {logisticsCapabilities.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ocean" />
                <p className="text-sm font-semibold leading-6 text-navy/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Example roles" title="The roles we can help source." description="Each search can be shaped around tools, schedule, shipment volume, vendor communication style, and reporting expectations." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Logistics Coordinator", "Supply Chain Assistant", "Procurement Assistant", "Operations Coordinator", "Documentation Specialist", "Vendor Follow-up Assistant"].map((role) => (
              <div key={role} className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-navy">{role}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/65">Vetted for English, detail orientation, status discipline, remote professionalism, and calm escalation habits.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Need someone to keep vendors, shipments, and trackers moving?" description="Share the workflow. We will help define the role and begin a focused search for the right LATAM support profile." />
    </>
  );
}
