import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights } from "@/data/insights";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="bg-coastal-gradient py-20 md:py-28">
        <div className="container max-w-4xl">
          <Badge>{post.category}</Badge>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-navy md:text-7xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-navy/70">{post.excerpt}</p>
          <p className="mt-5 text-sm font-semibold text-navy/55">{post.readingTime} · {post.date}</p>
        </div>
      </article>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl prose-meridian">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
