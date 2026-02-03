import { resume, type ProjectItem, type Link } from "../content/resume";

export function Projects() {
  return (
    <div className="grid2">
      {resume.projects.map((p: ProjectItem) => (
        <article key={p.name} className="itemCard">
          <div className="itemTop">
            <div>
              <div className="itemTitle">{p.name}</div>
              <div className="itemSubtitle">{p.stack}</div>
            </div>

            {p.links?.length ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.links.map((l: Link) => (
                  <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">
                    🔗 {l.label}
                  </a>
                ))}
              </div>
            ) : (
              <div className="itemDate">Highlighted</div>
            )}
          </div>

          <ul className="bullets">
            {p.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
