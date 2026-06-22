import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ClientInquiryForm } from "@/components/forms/client-inquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Meridian Impulse to discuss nearshore staffing, LATAM talent, remote administrative support, and logistics coordinator outsourcing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what kind of support would create momentum."
        description="Use this page for client inquiries, partnership conversations, future country hub ideas, or staffing model questions."
      />
      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="Reach us" title="A warm first conversation is the best place to start." description="Share the role, operational problem, or hiring question. We will help you think through the next practical step." />
            <div className="mt-8 grid gap-4">
              <a href={`mailto:${site.email}`} className="flex gap-3 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                <Mail className="h-5 w-5 text-ocean" />
                <span className="font-semibold text-navy/76">{site.email}</span>
              </a>
              <div className="flex gap-3 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm">
                <MapPin className="h-5 w-5 text-ocean" />
                <span className="font-semibold text-navy/76">{site.location}</span>
              </div>
            </div>
          </div>
          <ClientInquiryForm intent="contact" />
        </div>
      </section>
    </>
  );
}
