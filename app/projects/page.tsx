import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected systems and full-stack projects by Aarnawa Koirala.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto w-full max-w-[1200px] px-5 sm:px-12 pt-8 sm:pt-12 pb-16 sm:pb-22">
      <Nav />
      <h1 className="font-display font-extrabold tracking-[-0.035em] text-4xl sm:text-6xl pt-14 pb-10">
        Work<span className="text-accent">.</span>
      </h1>
      <ul className="flex flex-col gap-3.5 max-w-[980px]">
        {projects.map((p) => (
          <li key={p.slug} className="bg-card rounded shadow-card">
            <Link
              href={`/projects/${p.slug}`}
              className="flex flex-col gap-2 px-5 py-4 sm:px-8 sm:py-6 group"
            >
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="font-display font-extrabold tracking-[-0.03em] text-2xl sm:text-[2.1rem] grow group-hover:text-accent">
                  {p.title}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-faint">
                  {p.stack.join(" · ")}
                </span>
              </span>
              <span className="text-dim text-[14px] sm:text-base leading-relaxed max-w-[680px]">
                {p.blurb}
              </span>
              {p.metrics.length > 0 && (
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  {p.metrics.join(" · ")}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}
