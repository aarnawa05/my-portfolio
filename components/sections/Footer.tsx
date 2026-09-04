export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 pt-14 sm:pt-16 max-w-[980px]">
      <h2 className="font-display font-semibold text-[15px] text-faint">
        Get in touch
      </h2>
      <a
        href="mailto:aarnawakoirala@gmail.com"
        className="font-display font-extrabold tracking-[-0.03em] text-[1.4rem] sm:text-[2.6rem] text-accent hover:text-accent-deep break-words"
      >
        aarnawakoirala@gmail.com
      </a>
      <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-6 text-[13px] font-medium text-faint">
        <a href="https://github.com/aarnawa05" className="hover:text-ink">
          github.com/aarnawa05
        </a>
        <a href="https://linkedin.com/in/aarnawa" className="hover:text-ink">
          linkedin.com/in/aarnawa
        </a>
      </div>
      <p className="text-[13px] text-faint border-t border-line pt-4 leading-normal">
        Rust · C · Java · Python · JavaScript · React · Flask · Spring ·
        PostgreSQL · Docker · AWS — B.S. Computer Science, UT Austin, May 2027,
        GPA 3.94
      </p>
    </footer>
  );
}
