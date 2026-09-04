"use client";

import { useState } from "react";

const bullets = [
  "Improved performance by 30–50% in critical areas by taking advantage of specialized CPU instructions.",
  "Extended the existing simulation engine with new physics capabilities, scaling it across hundreds of vehicles and multiple train systems without measurable performance degradation.",
  "Learned and applied rail dynamics and physics domain concepts to validate model accuracy, ensuring simulation output matched real-world vehicle behavior.",
  "Developed in Rust within a production, safety-critical simulation codebase, ramping into an unfamiliar language and domain to ship working features.",
];

export default function Experience() {
  const [open, setOpen] = useState(true);

  return (
    <section id="experience" className="max-w-[980px] pb-12 sm:pb-14">
      <h2 className="font-display font-semibold text-[15px] text-faint pb-3">
        Experience
      </h2>
      <div className="bg-card rounded shadow-card px-5 py-4 sm:px-8 sm:py-6">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex w-full items-baseline gap-3 sm:gap-5 text-left cursor-pointer"
        >
          <span className="flex flex-col gap-1 grow">
            <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
              <span className="font-display font-extrabold tracking-[-0.03em] text-2xl sm:text-[1.75rem] grow">
                Software Engineering Intern
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-faint shrink-0">
                May–Aug 2026
              </span>
            </span>
            <span className="text-dim text-[14px] sm:text-base">
              Progress Rail, a Caterpillar Company · Southlake, TX
            </span>
          </span>
          <span
            aria-hidden
            className="text-accent text-2xl sm:text-[26px] w-5 text-center shrink-0"
          >
            {open ? "−" : "+"}
          </span>
        </button>
        {open && (
          <div className="flex flex-col gap-4 pt-4">
            <ul className="flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-[14px] sm:text-base leading-relaxed text-[#35373b] max-w-[720px]"
                >
                  <span aria-hidden className="text-accent shrink-0">
                    ·
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-accent">
              Rust · SIMD · 30–50% faster
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
