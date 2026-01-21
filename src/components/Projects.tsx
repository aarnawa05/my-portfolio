import { resume, type ProjectItem, type Link } from "../content/resume";

export function Projects() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
          {resume.projects.map((p: ProjectItem) => (
        <article key={p.name} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800 }}>{p.name}</div>
              <div style={{ opacity: 0.8, marginTop: 4 }}>{p.stack}</div>
            </div>
            {p.links?.length ? (
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                          {p.links.map((l: Link) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                ))}
              </div>
            ) : null}
          </div>

          <ul style={{ margin: "10px 0 0 18px", opacity: 0.95 }}>
                  {p.bullets.map((b: string, i: number) => (
                      <li key={i} style={{ margin: "6px 0" }}>{b}</li>
                  ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
