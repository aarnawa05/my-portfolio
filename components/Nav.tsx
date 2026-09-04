import Link from "next/link";

export default function Nav({ home = false }: { home?: boolean }) {
  return (
    <header className="flex items-baseline justify-between text-[13px] font-semibold">
      {home ? (
        <span className="text-ink">Aarnawa Koirala</span>
      ) : (
        <Link href="/" className="text-ink hover:text-accent">
          Aarnawa Koirala
        </Link>
      )}
      <nav className="flex gap-6 text-faint">
        <Link href="/projects" className="hover:text-ink">
          Work
        </Link>
        <a
          href="/Aarnawa_Koirala_Resume.pdf"
          className="text-accent hover:text-accent-deep"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
