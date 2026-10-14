import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://spencerdelimas.vercel.app";

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
