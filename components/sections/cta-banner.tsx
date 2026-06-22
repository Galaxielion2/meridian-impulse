import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SunMark } from "@/components/brand/sun-mark";

export function CtaBanner({
  title = "Ready to build momentum with the right people?",
  description = "Tell us what your team needs. We will help you define the role, find aligned LATAM talent, and move with precision.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.25rem] navy-texture p-8 text-cloud shadow-soft md:p-12">
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-sun-glow opacity-80" />
          <SunMark className="absolute right-8 top-8 h-16 w-16 opacity-30" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-gold">Meridian Impulse</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cloud/75 md:text-lg">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link href="/book-a-call">Book a discovery call <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <Link href="/apply-as-talent">Join talent network</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
