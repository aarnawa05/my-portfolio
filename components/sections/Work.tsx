"use client";

import { useState } from "react";
import Link from "next/link";
import { diagrams } from "@/components/diagrams";

export type WorkItem = {
  slug: string;
  title: string;
  stack: string[];
  metrics: string[];
  summary: string;
};

export default function Work({ items }: { items: WorkItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="work" className="max-w-[980px]">
      <div className="flex items-baseline gap-4 pb-3">
        <h2 className="font-display font-semibold text-[15px] text-faint">
          Selected work
        </h2>
        <p className="text-whisper italic text-[13px]">
          click a project to open it
        </p>
      </div>
      <ul className="flex flex-col gap-3.5">
        {items.map((item, i) => {
          const isOpen = open === i;
          const Diagram = diagrams[item.slug];
          const label = item.metrics.length
            ? item.metrics.slice(0, 2).join(" · ")
            : item.stack.join(" · ");
          return (
            <li
              key={item.slug}
              className="bg-card rounded shadow-card px-5 py-4 sm:px-8 sm:py-6"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-baseline gap-3 sm:gap-5 text-left cursor-pointer"
              >
                <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5 grow">
                  <span className="font-display font-extrabold tracking-[-0.03em] text-2xl sm:text-[2.1rem] grow">
                    {item.title}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${
                      item.metrics.length ? "text-accent" : "text-faint"
                    }`}
                  >
                    {label}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-accent text-2xl sm:text-[26px] w-5 text-center shrink-0"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="flex flex-col gap-5 pt-4">
                  <p className="text-[14px] sm:text-base leading-relaxed text-[#35373b] max-w-[680px]">
                    {item.summary}
                  </p>
                  {Diagram && <Diagram />}
                  <Link
                    href={`/projects/${item.slug}`}
                    className="text-accent hover:text-accent-deep text-sm font-semibold"
                  >
                    Read the full case study →
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
