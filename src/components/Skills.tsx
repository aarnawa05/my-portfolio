import { resume } from "../content/resume";

function PillRow(props: { label: string; items: string[] }) {
  return (
    <div style={{ display: "flex", gap: 10, margin: "10px 0", flexWrap: "wrap" }}>
      <div style={{ minWidth: 120, fontWeight: 600 }}>{props.label}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {props.items.map((x) => (
          <span key={x} style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 999 }}>
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const s = resume.skills;
  return (
    <div>
      <PillRow label="Languages" items={s.languages} />
      <PillRow label="Frameworks" items={s.frameworks} />
      <PillRow label="Dev Tools" items={s.developerTools} />
      <PillRow label="Libraries" items={s.libraries} />
    </div>
  );
}
