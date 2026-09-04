import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/projects`, priority: 0.8 },
    ...getAllProjects().map((p) => ({
      url: `${base}/projects/${p.slug}`,
      priority: 0.6,
    })),
  ];
}
