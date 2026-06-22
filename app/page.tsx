import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { RoleGrid } from "@/components/sections/role-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { SunMark } from "@/components/brand/sun-mark";
import { candidateFilters, homeStats, roles, serviceAreas, trustPoints, whyUruguay } from "@/data/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium Nearshore Staffing for U.S. Teams",
  description:
    "Hire vetted English-speaking LATAM talent for remote administrative support, logistics coordination, supply chain support, procurement follow-up, and operations support.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-coastal-gradient py-20 md:py-28">
        <div className="absolute inset-0 meridian-grid opacity-70" aria-hidden="true" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sun-glow blur-2xl" aria-hidden="true" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <Badge>Uruguay-based · LATAM talent · U.S. time zones</Badge>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-navy md:text-7xl lg:text-8xl">
              Premium nearshore staffing for teams that need trusted execution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70 md:text-xl">
              Meridian Impulse helps U.S. companies source, vet, shortlist, and hire exceptional English-speaking LATAM professionals for administrative, logistics, procurement, and operations support roles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link href="/for-clients">Hire Talent <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/apply-as-talent">Join Talent Network</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {homeStats.map((stat) => (
                <div key={stat.value} className="rounded-3xl border border-navy/10 bg-white/55 p-4 backdrop-blur">
                  <p className="font-serif text-3xl font-semibold text-meridian">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="relative">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/60 p-5 shadow-soft backdrop-blur">
              <div className="rounded-[2rem] navy-texture p-6 text-cloud">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">People. Strategy. Momentum.</p>
                    <h2 className="mt-5 font-serif text-4xl font-semibold leading-none tracking-tight">A better way to build remote support.</h2>
                  </div>
                  <SunMark className="h-20 w-20 animate-float" />
                </div>
                <div className="mt-8 grid gap-3">
                  {[
                    "Human-first candidate vetting",
                    "English-speaking LATAM professionals",
                    "Administrative and operational support focus",
                    "Premium shortlist, not resume flooding",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-medium text-cloud/82">
                      <CheckCircle2 className="h-5 w-5 text-gold" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Trust positioning" title="Not a cheap call center. A premium operating partner." description="Meridian Impulse is designed for companies that value communication, reliability, and fit as much as speed." />
          <div className="mt-12">
            <FeatureGrid items={trustPoints} />
          </div>
        </div>
      </section>

      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Core service areas" title="Focused support where work actually gets stuck." description="We start with roles that remove friction from leadership, logistics, procurement, documentation, and daily operations." />
          <div className="mt-12">
            <FeatureGrid items={serviceAreas} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading align="left" eyebrow="Why LATAM · Why Uruguay" title="Regional reach with a refined international base." description="Meridian Impulse is incorporated in Uruguay and built to serve U.S. companies with LATAM professionals who can collaborate across business hours." />
            <Button asChild className="mt-8" variant="outline">
              <Link href="/about">Learn about Meridian</Link>
            </Button>
          </div>
          <FeatureGrid items={whyUruguay} />
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Our process" title="Four steps from role clarity to shortlist." description="The process is simple enough for a founding team to manage and rigorous enough to protect client trust." />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 navy-texture text-cloud">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge className="border-gold/50 bg-gold/15 text-gold">Featured niche</Badge>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-none tracking-[-0.04em] text-cloud md:text-6xl">Logistics and operations support with clear handoffs.</h2>
            <p className="mt-5 text-lg leading-8 text-cloud/72">From vendor follow-up to shipment documentation, we help clients find coordinators who can protect managers from recurring status loops and operational noise.</p>
            <Button asChild variant="gold" className="mt-8">
              <Link href="/services/logistics-operations-support">Explore logistics support</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {roles.slice(2, 8).map((role) => (
              <div key={role} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <p className="font-semibold text-gold">{role}</p>
                <p className="mt-2 text-sm leading-6 text-cloud/65">Vetted for communication, documentation, and follow-up discipline.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Candidate quality filters" title="We look for the signals that make remote support work." description="A good hire is not only available. They must communicate clearly, own details, and stay aligned with the client's operating rhythm." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {candidateFilters.map((filter) => (
              <div key={filter} className="flex items-center gap-3 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                <Sparkles className="h-5 w-5 text-gold" />
                <span className="font-semibold text-navy/76">{filter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/50 py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Human-first · AI-enabled" title="Technology supports the process. People make the judgment." description="We use structured workflows, scorecards, and automation-ready form data to reduce manual noise. But final fit, communication quality, and client alignment remain human decisions." />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Built to scale without losing warmth</CardTitle>
            </CardHeader>
            <CardContent>
              <RoleGrid roles={["Structured lead capture", "Candidate pipeline data", "CMS-ready insights", "Future dashboard path"]} />
              <p className="mt-6 text-sm leading-7 text-navy/65">The website starts as a polished MVP and is organized to later support BPO pods, managed services, country hubs, content workflows, and admin dashboards.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
