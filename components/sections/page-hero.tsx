import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  variant?: "light" | "navy";
}) {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28", variant === "navy" ? "navy-texture text-cloud" : "bg-coastal-gradient")}> 
      <div className="absolute inset-0 meridian-grid opacity-50" aria-hidden="true" />
      <div className="container relative">
        <div className="max-w-4xl">
          <Badge className={variant === "navy" ? "border-gold/50 bg-gold/15 text-gold" : undefined}>{eyebrow}</Badge>
          <h1 className={cn("mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl", variant === "navy" ? "text-cloud" : "text-navy")}>{title}</h1>
          <p className={cn("mt-6 max-w-2xl text-lg leading-8 md:text-xl", variant === "navy" ? "text-cloud/75" : "text-navy/70")}>{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
