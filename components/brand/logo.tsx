import Link from "next/link";
import { SunMark } from "@/components/brand/sun-mark";
import { cn } from "@/lib/utils";

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 text-navy", className)} aria-label="Meridian Impulse home">
      <SunMark className={cn("h-11 w-11", markClassName)} />
      <span className="leading-none">
        <span className="block font-serif text-2xl font-semibold tracking-tight text-current">Meridian</span>
        <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-current opacity-70">Impulse</span>
      </span>
    </Link>
  );
}
