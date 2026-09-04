const links = [
  { label: "GitHub", href: "https://github.com/aarnawa05" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aarnawa" },
  { label: "Email", href: "mailto:aarnawakoirala@gmail.com" },
  { label: "Résumé (PDF)", href: "/Aarnawa_Koirala_Resume.pdf" },
];

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 pt-16 pb-14 sm:pt-20 sm:pb-16 max-w-[980px]">
      <h1 className="font-display font-extrabold tracking-[-0.04em] leading-[0.92] text-[3.4rem] sm:text-[6.5rem]">
        Aarnawa
        <br />
        Koirala<span className="text-accent">.</span>
      </h1>
      <p className="text-dim text-lg sm:text-2xl leading-[1.45] max-w-[700px]">
        I build systems software in Rust and C — kernels, allocators, and
        simulation engines where the numbers have to hold up.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 max-w-[680px]">
        <span className="bg-accent text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full self-start shrink-0">
          NOW
        </span>
        <p className="text-dim text-[15px] sm:text-base leading-normal">
          Just wrapped a summer writing production Rust at{" "}
          <strong className="font-semibold text-ink">Progress Rail</strong>, a
          Caterpillar Company.
        </p>
      </div>
      {/* TODO(aarnawa): replace with your About line */}
      <p className="text-faint italic text-sm sm:text-[15px] max-w-[640px]">
        [About — one or two lines in your voice go here.]
      </p>
      <nav aria-label="Profiles" className="flex flex-wrap gap-5 sm:gap-6 pt-0.5">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-accent hover:text-accent-deep text-[13px] font-semibold"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
