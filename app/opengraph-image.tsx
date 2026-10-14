import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Spencer Delimas, founder of Grabbit and software engineer in Nairobi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The link preview: the name, the role, and the three projects, in Grabbit's colours. */
export default async function OpengraphImage() {
  const baloo = await readFile(join(process.cwd(), "app/fonts/baloo-2-800.ttf"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#fafafa", padding: 72 }}>
        <div style={{ display: "flex" }}>
          <div style={{ background: "#ffb000", color: "#0a0a0a", borderRadius: 999, padding: "10px 26px", fontSize: 30, fontFamily: "Baloo" }}>
            Founder of Grabbit
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Baloo", fontSize: 140, lineHeight: 0.9 }}>Spencer Delimas</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#a3a3a3" }}>Software engineer · Nairobi, Kenya</div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 30 }}>
          {["Grabbit", "NuruLabs", "deck", "Heimdall"].map((p, i) => (
            <div key={p} style={{ border: "2px solid #262626", borderRadius: 999, padding: "8px 24px", color: i === 0 ? "#2fd071" : "#fafafa" }}>
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Baloo", data: baloo, weight: 800 }] },
  );
}
