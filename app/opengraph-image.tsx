import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "Aayush Joshi, AI systems engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f2ede1", color: "#151515", padding: 64, position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>AI systems engineer</div>
          <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 0.9, textTransform: "uppercase", display: "flex", flexDirection: "column" }}>
            <span>Aayush</span><span>Joshi</span>
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.25 }}>{site.tagline}</div>
        </div>
        <div style={{ position: "absolute", right: 64, top: 64, width: 400, height: 400, border: "4px solid #151515", display: "flex" }}>
          <div style={{ position: "absolute", left: 30, top: 30, width: 230, height: 230, borderRadius: 999, background: "#d7261e" }} />
          <div style={{ position: "absolute", right: 30, bottom: 30, width: 180, height: 180, background: "#1b3fa0" }} />
          <svg width="150" height="140" viewBox="0 0 150 140" style={{ position: "absolute", left: 56, bottom: 30 }}><polygon points="75,0 150,140 0,140" fill="#f2b705" /></svg>
        </div>
      </div>
    ),
    size,
  );
}
