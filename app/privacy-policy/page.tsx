import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Meridian Impulse website form submissions, client inquiries, and talent applications.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Privacy Policy" description="A practical starter privacy policy for the Meridian Impulse website. Review with legal counsel before launch." />
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl prose-meridian">
          <p>Last updated: June 22, 2026.</p>
          <h2>Information we collect</h2>
          <p>Meridian Impulse may collect information submitted through website forms, including name, company, website, email, role needs, industry, hiring timeline, budget range, notes, country, WhatsApp number, English level, role interests, experience, salary expectations, availability, LinkedIn URL, resume filename, and intro/video URL.</p>
          <h2>How we use information</h2>
          <p>We use submitted information to respond to inquiries, evaluate candidate fit, manage staffing conversations, prepare proposals, improve our services, and maintain business records.</p>
          <h2>Candidate and client data</h2>
          <p>Candidate information may be reviewed internally for role matching. Client information may be used to understand hiring needs and provide relevant recommendations. We do not sell personal information.</p>
          <h2>Third-party services</h2>
          <p>The website is structured to work with Supabase, Vercel, analytics tools, scheduling tools, and future CMS providers. Each third-party service may process data according to its own terms and privacy practices.</p>
          <h2>Contact</h2>
          <p>For privacy questions, contact hello@meridianimpulse.com.</p>
        </div>
      </section>
    </>
  );
}
