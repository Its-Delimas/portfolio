import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { SITE } from "@/lib/site";

const BASE = SITE;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...projects.map((p) => ({
      url: `${BASE}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.kind === "product" ? 0.8 : 0.6,
    })),
  ];
}
