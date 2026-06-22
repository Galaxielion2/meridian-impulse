import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientInquiryForm } from "@/components/forms/client-inquiry-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { RoleGrid } from "@/components/sections/role-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { clientPainPoints, clientWorkflow, qualitySignals, roles } from "@/data/content";

export const metadata: Metadata = {
  title: "For Clients",
  description: "Hire vetted English-speaking LATAM professionals for administrative, logistics, supply chain, procurement, customer support, and operations roles.",
};

export default function ForClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="For clients"
        title="Build reliable support capacity without lowering your standards."
        description="Meridian Impulse helps U.S. companies find LATAM professionals who can communicate clearly, own recurring work, and bring momentum to the operating team."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gold" size="lg"><Link href="/book-a-call">Book discovery call <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="/process">See our process</Link></Button>
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading align="left" eyebrow="Common bottlenecks" title="The work is not always complex. But it does need ownership." description="Hiring delays and administrative overload often create the same problem: too much follow-up living in a manager's head." />
          <div className="grid gap-4">
            {clientPainPoints.map((point) => (
              <div key={point} className="flex gap-4 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ocean" />
                <p className="leading-7 text-navy/70">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/45 py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Solution" title="Vetted LATAM talent with strong English and business professionalism." description="We present a focused shortlist of candidates aligned to your role, tools, communication expectations, working hours, and compensation range." />
          <div className="mt-12">
            <RoleGrid roles={roles} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="Vetting process" title="We filter for the qualities that protect client trust." description="A polished resume is not enough. We look for practical proof that a candidate can work remotely, communicate clearly, and execute without constant rescue." />
            <div className="mt-8 grid gap-3">
              {qualitySignals.map((signal) => (
                <div key={signal} className="rounded-2xl bg-sand/60 p-4 text-sm font-semibold text-navy/76">{signal}</div>
              ))}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Example client workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="grid gap-4">
                {clientWorkflow.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/30 text-sm font-bold text-meridian">{index + 1}</span>
                    <span className="pt-1 text-sm leading-6 text-navy/70">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading align="left" eyebrow="Start here" title="Tell us what kind of support would change your week." description="Use this form for client inquiries, role scoping, or proposal requests. Without Supabase credentials, submissions run in safe demo mode." />
          <ClientInquiryForm />
        </div>
      </section>

      <CtaBanner title="Let us help you find the right person, not just more resumes." />
    </>
  );
}
