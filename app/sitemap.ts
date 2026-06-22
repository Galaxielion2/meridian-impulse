import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { site } from "@/lib/site";

const routes = [
  "",
  "/for-clients",
  "/for-talent",
  "/services",
  "/services/logistics-operations-support",
  "/about",
  "/process",
  "/pricing",
  "/insights",
  "/contact",
  "/apply-as-talent",
  "/book-a-call",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: now })),
    ...insights.map((post) => ({ url: `${site.url}/insights/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
