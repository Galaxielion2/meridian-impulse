# Meridian Impulse Website

A complete, production-ready Next.js App Router website for **Meridian Impulse**, a Uruguay-incorporated premium LATAM staffing and outsourcing company serving primarily U.S. clients.

## What is included

- Next.js App Router + TypeScript
- Tailwind CSS design system
- shadcn/ui-style local components
- Framer Motion subtle scroll animations
- React Hook Form + Zod validation
- Supabase/PostgreSQL-ready API routes for forms
- Mock form submissions when Supabase credentials are not configured
- SEO metadata on all pages
- Sitemap and robots routes
- Fully responsive mobile-first layout
- Business-ready copy, no Latin placeholder text
- CMS-ready insights/blog structure

## Project architecture

```txt
app/
  api/
    client-inquiry/route.ts
    talent-application/route.ts
  apply-as-talent/page.tsx
  book-a-call/page.tsx
  contact/page.tsx
  for-clients/page.tsx
  for-talent/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  services/page.tsx
  services/logistics-operations-support/page.tsx
  about/page.tsx
  process/page.tsx
  pricing/page.tsx
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  layout.tsx
  page.tsx
  globals.css
components/
  brand/         Logo, sun mark, wave divider
  forms/         Client and talent forms
  layout/        Navbar and footer
  motion/        Reusable Framer Motion wrapper
  sections/      Reusable page sections
  ui/            Small shadcn/ui-style primitives
data/
  content.ts     Services, roles, process, quality signals
  insights.ts    Static CMS-ready blog content
lib/
  schemas.ts     Zod schemas and TypeScript types
  site.ts        Site metadata and navigation
  supabase-server.ts
  utils.ts
supabase/
  schema.sql     Starter table schema
```

## Brand usage notes

### Positioning
Meridian Impulse should feel like a boutique consulting firm, premium recruiting agency, and international operations partner. Avoid language that makes the brand sound like a cheap call center or commodity outsourcing shop.

### Tagline options
- People. Strategy. Momentum.
- The right people. The right direction. Real impact.
- We navigate. We connect. We create momentum.

### Colors
- Deep Navy: `#0D1B2A`
- Meridian Blue: `#1E3A5F`
- Ocean Blue: `#6BAEDB`
- Sky Blue: `#A8D2F0`
- Sun Gold: `#F2C766`
- Sand: `#F5E6C8`
- Cloud White: `#FAFAF2`

### Visual motifs
Use sun, meridian/navigation lines, waves, compass/direction, partnership, and momentum. Avoid robotic AI visuals, neon cyber effects, and generic stock outsourcing imagery.

### Typography
The CSS uses elegant serif fallbacks for headings and modern sans-serif fallbacks for body copy. For launch, you may connect Google Fonts or self-host licensed fonts similar to Cormorant Garamond / Playfair Display and Inter / Montserrat.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

1. Create a GitHub repository.
2. Upload this project folder to the repository.
3. Go to Vercel and import the repository.
4. Keep the default Next.js build settings.
5. Add environment variables only if you are connecting Supabase.
6. Deploy.

## Environment variables

Create `.env.local` only if you want real form storage.

```bash
NEXT_PUBLIC_SITE_URL=https://meridianimpulse.com
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Do **not** expose the Supabase service role key in client-side code.

## Supabase setup

1. Create a Supabase project.
2. Open the SQL Editor.
3. Run `supabase/schema.sql`.
4. Add the environment variables above in Vercel.
5. Redeploy.

Without these credentials, the API routes return success in `mock` mode and log submissions server-side for development.

## Future CMS/admin dashboard path

Recommended next steps when the company grows:

1. **CMS for Insights**: move `data/insights.ts` to Sanity, Contentful, or Notion API.
2. **Admin dashboard**: add protected `/admin` routes with Supabase Auth.
3. **Candidate pipeline**: add statuses such as `new`, `screening`, `qualified`, `shortlisted`, `presented`, `placed`, `inactive`.
4. **File uploads**: connect Supabase Storage for resumes and intro videos.
5. **Client portal**: show active searches, shortlist notes, interview status, and onboarding tasks.
6. **Automations**: trigger email notifications or Slack alerts on new client inquiries and candidate applications.
7. **Analytics**: add Vercel Analytics, PostHog, or Plausible for conversion tracking.

## Editing copy

Most reusable business content lives in `data/content.ts`. Blog content lives in `data/insights.ts`. Page-specific copy is in each `app/**/page.tsx` file.
