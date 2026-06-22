import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-5 font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-navy md:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-navy/65 md:text-lg">{description}</p> : null}
    </div>
  );
}
