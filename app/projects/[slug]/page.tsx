import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { diagrams } from "@/components/diagrams";
import { mdxComponents } from "@/components/mdx-components";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Diagram = diagrams[project.slug];

  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 sm:px-12 pt-8 sm:pt-12 pb-16 sm:pb-22">
      <Nav />
      <article className="max-w-[760px]">
        <header className="flex flex-col gap-4 pt-14 pb-8">
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-4xl sm:text-6xl">
            {project.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="text-dim text-base sm:text-lg leading-relaxed">
            {project.blurb}
          </p>
          <dl className="flex flex-wrap gap-x-8 gap-y-1.5 text-[13px] text-faint">
            <div className="flex gap-2">
              <dt className="font-semibold">When</dt>
              <dd>{project.timeframe}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold">Stack</dt>
              <dd>{project.stack.join(", ")}</dd>
            </div>
          </dl>
          {project.metrics.length > 0 && (
            <ul className="flex flex-wrap gap-2.5 pt-1">
              {project.metrics.map((m) => (
                <li
                  key={m}
                  className="bg-card shadow-card rounded px-3 py-1.5 text-[13px] font-semibold text-accent"
                >
                  {m}
                </li>
              ))}
            </ul>
          )}
        </header>
        {Diagram && (
          <div className="bg-card rounded shadow-card p-5 sm:p-8 mb-2">
            <Diagram />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <MDXRemote source={project.body} components={mdxComponents} />
        </div>
        <p className="pt-10">
          <Link
            href="/projects"
            className="text-accent hover:text-accent-deep text-sm font-semibold"
          >
            ← All work
          </Link>
        </p>
      </article>
      <Footer />
    </main>
  );
}
