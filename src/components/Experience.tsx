import { resume, type ExperienceItem } from "../content/resume";

export function Experience() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      {resume.experience.map((x: ExperienceItem) => (
        <article key={`${x.company}-${x.role}`} className="itemCard">
          <div className="itemTop">
            <div>
              <div className="itemTitle">{x.role}</div>
              <div className="itemSubtitle">{x.company} — {x.location}</div>
            </div>
            <div className="itemDate">{x.date}</div>
          </div>

          <ul className="bullets">
            {x.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
