import { resume, type EducationItem } from "../content/resume";

export function Education() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
          {resume.education.map((e: EducationItem) => (
        <div key={e.school} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <div style={{ fontWeight: 700 }}>{e.school}</div>
            <div style={{ opacity: 0.8 }}>{e.date}</div>
          </div>
          <div style={{ opacity: 0.9, marginTop: 6 }}>{e.degree} — {e.location}</div>
          {e.gpa && <div style={{ marginTop: 6, opacity: 0.9 }}>GPA: {e.gpa}</div>}
              {e.coursework?.length ? <div style={{ marginTop: 8, opacity: 0.85 }}>Coursework: {e.coursework.join(", ")}</div> : null}
        </div>
      ))}
    </div>
  );
}
