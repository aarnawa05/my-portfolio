import React from "react";
import { resume } from "../content/resume";

export function Header() {
  return (
    <header style={{ padding: "28px 0 10px", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 28 }}>{resume.name}</h1>
        <div style={{ marginTop: 6, opacity: 0.85 }}>
          <span>{resume.phone}</span>{" · "}
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
        </div>
      </div>

      <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {resume.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
    </header>
  );
}
