import { resume } from "../content/resume";

function Row(props: { label: string; items: string[] }) {
  return (
    <div className="itemCard" style={{ padding: 14 }}>
      <div className="itemTop" style={{ alignItems: "center" }}>
        <div className="itemTitle">{props.label}</div>
      </div>
      <div className="tags">
        {props.items.map((x) => (
          <span className="tag" key={x}>{x}</span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const s = resume.skills;
  return (
    <div className="grid2">
      <Row label="Languages" items={s.languages} />
      <Row label="Frameworks" items={s.frameworks} />
      <Row label="Developer Tools" items={s.developerTools} />
      <Row label="Libraries" items={s.libraries} />
    </div>
  );
}
