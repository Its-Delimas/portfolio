import { ImageResponse } from "next/og";

export const alt = "Spencer Delimas — full-stack & cloud engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0b0d",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#8b929b" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              border: "1px solid #23262b",
              borderRadius: 10,
              background: "#111318",
              color: "#f2f3f5",
              fontSize: 20,
            }}
          >
            SD
          </div>
          spencerdelimas.vercel.app
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
            Spencer Delimas<span style={{ color: "#3b82f6" }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, color: "#c9ccd1" }}>
            Full-stack &amp; cloud engineer building reliable systems.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 24, color: "#8b929b" }}>
          <div style={{ display: "flex", width: 56, height: 4, background: "#3b82f6" }} />
          <span>deck</span>
          <span>·</span>
          <span>Heimdall</span>
          <span>·</span>
          <span>Grabit</span>
        </div>
      </div>
    ),
    size
  );
}
