import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Meridian Impulse website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Terms of Service" title="Terms of Service" description="Starter website terms for Meridian Impulse. Review with legal counsel before launch." />
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl prose-meridian">
          <p>Last updated: June 22, 2026.</p>
          <h2>Website use</h2>
          <p>This website provides general information about Meridian Impulse services. The content is not a binding offer, employment guarantee, legal advice, tax advice, or immigration advice.</p>
          <h2>Client inquiries</h2>
          <p>Submitting a client inquiry does not create a staffing agreement. Engagement terms, fees, replacement periods, responsibilities, and payment conditions must be agreed separately in writing.</p>
          <h2>Talent applications</h2>
          <p>Submitting a talent application does not guarantee placement, interview, employment, contractor engagement, or client presentation. Meridian Impulse may review, retain, or decline profiles based on business needs and role fit.</p>
          <h2>Accuracy</h2>
          <p>Users are responsible for providing accurate, current, and lawful information in forms and communications.</p>
          <h2>Limitation</h2>
          <p>Meridian Impulse is not responsible for losses resulting from website interruptions, incomplete information, third-party services, or reliance on general website content.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact hello@meridianimpulse.com.</p>
        </div>
      </section>
    </>
  );
}
