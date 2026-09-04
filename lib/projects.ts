import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  blurb: z.string(),
  summary: z.string(),
  timeframe: z.string(),
  role: z.string(),
  stack: z.array(z.string()),
  metrics: z.array(z.string()).default([]),
  repo: z.string().nullable().default(null),
  demo: z.string().nullable().default(null),
  featured: z.boolean().default(false),
  order: z.number(),
});

export type Project = z.infer<typeof projectSchema> & { body: string };

const contentDir = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): Project[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data, content } = matter(raw);
      const parsed = projectSchema.parse(data);
      if (`${parsed.slug}.mdx` !== file) {
        throw new Error(`Slug "${parsed.slug}" does not match filename "${file}"`);
      }
      return { ...parsed, body: content };
    })
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
