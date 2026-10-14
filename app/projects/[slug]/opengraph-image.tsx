import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";

export const alt = "A project by Spencer Delimas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** A project's link preview: its name and one line on the left, a real screen on the right. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  const baloo = await readFile(join(process.cwd(), "app/fonts/baloo-2-800.ttf"));
  if (!p) {
    return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#121117" }} />, size);
  }
  const shot = p.shots[0];
  const ext = shot.src.endsWith(".png") ? "png" : "jpeg";
  const data = await readFile(join(process.cwd(), "public", shot.src));
  const src = `data:image/${ext};base64,${data.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#121117", color: "#fafafa" }}>
        <div style={{ width: 520, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 0 60px 64px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ background: "#ff6b3d", color: "#121117", borderRadius: 999, padding: "8px 22px", fontSize: 24, fontFamily: "Baloo" }}>
              {p.role}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Baloo", fontSize: 110, lineHeight: 0.9 }}>{p.name}</div>
            <div style={{ marginTop: 22, fontSize: 28, lineHeight: 1.25, color: "#d4d4d4" }}>{p.pitch}</div>
          </div>
          <div style={{ fontSize: 24, color: "#a3a3a3" }}>Spencer Delimas · delimas.me</div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 0 0 40px", overflow: "hidden" }}>
          <img src={src} alt="" width={780} height={Math.round((780 * shot.h) / shot.w)} style={{ borderRadius: 18, border: "2px solid #2a2833" }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Baloo", data: baloo, weight: 800 }] },
  );
}
