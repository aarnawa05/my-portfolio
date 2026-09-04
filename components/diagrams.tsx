// Mechanism diagrams for the featured projects, drawn to the site's design system.
// Keyed by project slug; Work.tsx and the case-study pages look them up here.

function PintosDiagram() {
  return (
    <svg viewBox="0 0 620 150" className="w-full max-w-[620px]" role="img" aria-label="Priority donation: thread H donates its priority through a lock to thread L">
      <rect x="10" y="18" width="150" height="40" rx="3" fill="none" stroke="#35373b" strokeWidth="1.2" />
      <text x="85" y="38" textAnchor="middle" fontSize="13" fill="#1a1b1e" fontWeight="600">Thread H</text>
      <text x="85" y="52" textAnchor="middle" fontSize="11" fill="#85878c">priority 31 · blocked</text>
      <rect x="250" y="18" width="110" height="40" rx="3" fill="#f1f2f4" stroke="#35373b" strokeWidth="1.2" />
      <text x="305" y="42" textAnchor="middle" fontSize="13" fill="#1a1b1e">lock</text>
      <rect x="450" y="18" width="150" height="40" rx="3" fill="none" stroke="#35373b" strokeWidth="1.2" />
      <text x="525" y="38" textAnchor="middle" fontSize="13" fill="#1a1b1e" fontWeight="600">Thread L</text>
      <text x="525" y="52" textAnchor="middle" fontSize="11" fill="#85878c">priority 1 · holds it</text>
      <line x1="160" y1="38" x2="244" y2="38" stroke="#35373b" strokeWidth="1.2" />
      <path d="M244 38 l-8 -4 v8 z" fill="#35373b" />
      <line x1="450" y1="38" x2="366" y2="38" stroke="#35373b" strokeWidth="1.2" />
      <path d="M366 38 l8 -4 v8 z" fill="#35373b" />
      <path d="M85 58 C 85 120, 525 120, 525 62" fill="none" stroke="#d92d20" strokeWidth="1.4" strokeDasharray="5 4" />
      <path d="M525 62 l-5 8 h10 z" fill="#d92d20" />
      <text x="305" y="128" textAnchor="middle" fontSize="12" fill="#d92d20" fontWeight="600">H donates priority 31 → L runs, releases, H proceeds</text>
    </svg>
  );
}

function AllocatorDiagram() {
  return (
    <svg viewBox="0 0 620 150" className="w-full max-w-[620px]" role="img" aria-label="Explicit free list linking free blocks, which coalesce into one free block">
      <rect x="10" y="30" width="110" height="36" rx="3" fill="#f1f2f4" stroke="#35373b" strokeWidth="1.2" />
      <text x="65" y="52" textAnchor="middle" fontSize="12" fill="#4e5054">allocated</text>
      <rect x="120" y="30" width="120" height="36" rx="3" fill="none" stroke="#d92d20" strokeWidth="1.4" />
      <text x="180" y="52" textAnchor="middle" fontSize="12" fill="#d92d20">free</text>
      <rect x="240" y="30" width="100" height="36" rx="3" fill="none" stroke="#d92d20" strokeWidth="1.4" />
      <text x="290" y="52" textAnchor="middle" fontSize="12" fill="#d92d20">free</text>
      <rect x="340" y="30" width="120" height="36" rx="3" fill="#f1f2f4" stroke="#35373b" strokeWidth="1.2" />
      <text x="400" y="52" textAnchor="middle" fontSize="12" fill="#4e5054">allocated</text>
      <path d="M180 30 C 200 8, 270 8, 290 30" fill="none" stroke="#d92d20" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="235" y="12" textAnchor="middle" fontSize="11" fill="#d92d20">explicit free list</text>
      <line x1="235" y1="66" x2="235" y2="96" stroke="#35373b" strokeWidth="1.2" />
      <path d="M235 96 l-4 -8 h8 z" fill="#35373b" />
      <text x="330" y="88" fontSize="11" fill="#85878c">boundary tags → coalesce</text>
      <rect x="120" y="100" width="220" height="36" rx="3" fill="none" stroke="#d92d20" strokeWidth="1.4" />
      <text x="230" y="122" textAnchor="middle" fontSize="12" fill="#d92d20">one free block</text>
    </svg>
  );
}

function EducanationDiagram() {
  return (
    <svg viewBox="0 0 620 110" className="w-full max-w-[620px]" role="img" aria-label="Request path from React through the Flask API to PostgreSQL, averaging under 300 milliseconds">
      <rect x="10" y="20" width="150" height="42" rx="3" fill="none" stroke="#35373b" strokeWidth="1.2" />
      <text x="85" y="45" textAnchor="middle" fontSize="13" fill="#1a1b1e" fontWeight="600">React</text>
      <rect x="235" y="20" width="150" height="42" rx="3" fill="none" stroke="#35373b" strokeWidth="1.2" />
      <text x="310" y="40" textAnchor="middle" fontSize="13" fill="#1a1b1e" fontWeight="600">Flask API</text>
      <text x="310" y="54" textAnchor="middle" fontSize="10" fill="#85878c">paginate · filter</text>
      <rect x="460" y="20" width="150" height="42" rx="3" fill="none" stroke="#35373b" strokeWidth="1.2" />
      <text x="535" y="45" textAnchor="middle" fontSize="13" fill="#1a1b1e" fontWeight="600">PostgreSQL</text>
      <line x1="160" y1="41" x2="229" y2="41" stroke="#35373b" strokeWidth="1.2" />
      <path d="M229 41 l-8 -4 v8 z" fill="#35373b" />
      <line x1="385" y1="41" x2="454" y2="41" stroke="#35373b" strokeWidth="1.2" />
      <path d="M454 41 l-8 -4 v8 z" fill="#35373b" />
      <path d="M10 78 h600" stroke="#d92d20" strokeWidth="1" strokeDasharray="4 3" />
      <text x="310" y="98" textAnchor="middle" fontSize="12" fill="#d92d20" fontWeight="600">average round trip under 300 ms · payloads ~70% smaller</text>
    </svg>
  );
}

export const diagrams: Record<string, () => React.ReactElement> = {
  pintos: PintosDiagram,
  "memory-allocator": AllocatorDiagram,
  educanation: EducanationDiagram,
};
