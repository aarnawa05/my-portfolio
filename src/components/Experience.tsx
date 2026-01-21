import { resume, type ExperienceItem } from "../content/resume";

export function Experience() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
          {resume.experience.map((x: ExperienceItem) => (
        <article key={`${x.company}-${x.role}`} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800 }}>{x.role}</div>
              <div style={{ opacity: 0.85, marginTop: 4 }}>{x.company} — {x.location}</div>
            </div>
            <div style={{ opacity: 0.8 }}>{x.date}</div>
          </div>

          <ul style={{ margin: "10px 0 0 18px", opacity: 0.95 }}>
                  {x.bullets.map((b: string, i: number) => (
                      <li key={i} style={{ margin: "6px 0" }}>{b}</li>
                  ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
