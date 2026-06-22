import type { Metadata } from "next";
import { Anchor, Compass, Handshake, ShipWheel } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Meridian Impulse, a Uruguay-incorporated premium LATAM staffing firm built around human vetting, trust, and operational excellence.",
};

const values = [
  { title: "Human judgment", description: "We believe staffing requires conversation, context, and discernment. The right match is more than a keyword match.", icon: Handshake },
  { title: "Directional clarity", description: "Like a meridian, we help clients and candidates find the right direction before asking them to move fast.", icon: Compass },
  { title: "Operational excellence", description: "We value clean handoffs, documented expectations, consistent follow-up, and realistic commitments.", icon: ShipWheel },
  { title: "Regional partnership", description: "Our Uruguay base and LATAM reach create a refined, international platform for nearshore collaboration.", icon: Anchor },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Meridian Impulse"
        title="A premium LATAM staffing company built for trust, warmth, and execution."
        description="Meridian Impulse is Uruguay-incorporated and designed for U.S. companies that want nearshore support without treating people as commodities. We connect clients with capable English-speaking LATAM professionals who can become trusted extensions of their teams."
      />
      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading align="left" eyebrow="Brand meaning" title="Direction plus momentum." description="A meridian gives orientation. An impulse creates movement. Together, Meridian Impulse represents our promise: help companies move in the right direction with the right people." />
          <div className="rounded-[2rem] navy-texture p-8 text-cloud shadow-soft">
            <p className="font-serif text-4xl font-semibold leading-tight tracking-[-0.04em]">We navigate. We connect. We create momentum.</p>
            <p className="mt-5 leading-8 text-cloud/72">Our refined nautical and sun-inspired identity reflects partnership, warmth, and operational direction — a human alternative to generic outsourcing.</p>
          </div>
        </div>
      </section>
      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Values" title="The standards behind the work." />
          <div className="mt-12"><FeatureGrid items={values} columns={2} /></div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
