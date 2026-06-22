import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cloud">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Logo className="text-cloud" markClassName="" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-cloud/70">
              Premium nearshore staffing for U.S. companies seeking English-speaking LATAM professionals in administration, logistics, procurement, and operations support.
            </p>
            <p className="mt-4 text-sm text-cloud/55">{site.location}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gold">Explore</h3>
            <div className="mt-4 grid gap-3">
              {navItems.slice(0, 5).map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-cloud/70 transition hover:text-gold">{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gold">Convert</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/book-a-call" className="text-sm text-cloud/70 transition hover:text-gold">Book a Call</Link>
              <Link href="/contact" className="text-sm text-cloud/70 transition hover:text-gold">Contact</Link>
              <Link href="/apply-as-talent" className="text-sm text-cloud/70 transition hover:text-gold">Apply as Talent</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gold">Legal</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/privacy-policy" className="text-sm text-cloud/70 transition hover:text-gold">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-sm text-cloud/70 transition hover:text-gold">Terms of Service</Link>
              <a href={`mailto:${site.email}`} className="text-sm text-cloud/70 transition hover:text-gold">{site.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cloud/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Meridian Impulse. All rights reserved.</p>
          <p>People. Strategy. Momentum.</p>
        </div>
      </div>
    </footer>
  );
}
