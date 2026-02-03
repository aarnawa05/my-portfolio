import { resume, type EducationItem } from "../content/resume";

export function Education() {
  return (
    <div className="grid2">
      {resume.education.map((e: EducationItem) => (
        <div key={e.school} className="itemCard">
          <div className="itemTop">
            <div>
              <div className="itemTitle">{e.school}</div>
              <div className="itemSubtitle">{e.degree} — {e.location}</div>
              {e.gpa ? <div className="itemSubtitle">GPA: {e.gpa}</div> : null}
            </div>
            <div className="itemDate">{e.date}</div>
          </div>

          {e.coursework?.length ? (
            <div className="tags">
              {e.coursework.slice(0, 6).map((c) => (
                <span className="tag" key={c}>{c}</span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
