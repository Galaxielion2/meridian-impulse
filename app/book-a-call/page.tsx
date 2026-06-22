import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { ClientInquiryForm } from "@/components/forms/client-inquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Book a discovery call with Meridian Impulse to discuss nearshore staffing, LATAM talent, and remote operations support.",
};

export default function BookACallPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Call"
        title="Start with a focused discovery conversation."
        description="Tell us what role you need, what work is stuck, and what good support would look like. We will help define a practical next step."
      />
      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="Discovery" title="Use the form now. Add Calendly later." description="This MVP includes a conversion-ready inquiry form. Replace this panel with Calendly, Cal.com, SavvyCal, or HubSpot Meetings when your scheduling link is ready." />
            <div className="mt-8 rounded-[2rem] border border-dashed border-ocean/50 bg-sky/20 p-6">
              <CalendarDays className="h-8 w-8 text-meridian" />
              <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">Calendar embed placeholder</h3>
              <p className="mt-3 text-sm leading-7 text-navy/65">Add your booking URL in this page once your scheduling tool is chosen.</p>
            </div>
          </div>
          <ClientInquiryForm intent="book-a-call" />
        </div>
      </section>
    </>
  );
}
