import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Insights on nearshore staffing, LATAM talent, remote administrative support, logistics coordination, and operations support.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights / Blog"
        title="Practical notes on nearshore staffing and remote operations support."
        description="A CMS-ready content area for thought leadership, role guides, hiring checklists, and future case studies. Initial articles are static and can later move to Sanity, Contentful, or Notion."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Latest" title="Business-ready placeholder content." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {insights.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-ocean/40">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-meridian/65">{post.category}</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-navy group-hover:text-meridian">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-navy/65">{post.excerpt}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-meridian">Read article <ArrowRight className="h-4 w-4" /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
