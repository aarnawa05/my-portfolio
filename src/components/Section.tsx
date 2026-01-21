import React from "react";

export function Section(props: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={props.id} style={{ padding: "28px 0" }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 18, letterSpacing: 0.2 }}>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
}
