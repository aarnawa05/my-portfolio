import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aarnawa Koirala: systems software in Rust and C";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          padding: "0 96px",
          background: "#f1f2f4",
          color: "#1a1b1e",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, letterSpacing: "-0.04em" }}>
          Aarnawa Koirala<span style={{ color: "#d92d20" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#4e5054", maxWidth: 900, lineHeight: 1.4 }}>
          I build systems software in Rust and C: kernels, allocators, and
          simulation engines where the numbers have to hold up.
        </div>
      </div>
    ),
    size
  );
}
