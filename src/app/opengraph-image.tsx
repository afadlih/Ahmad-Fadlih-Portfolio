import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmad Fadlih, Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f8fbff",
          background: "#102039",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "88px",
            height: "88px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "24px",
            background: "#8fb4e5",
            color: "#102039",
            fontSize: "30px",
            fontWeight: 800,
          }}
        >
          AF
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "64px", fontWeight: 800, letterSpacing: "-2px" }}>
            Ahmad Fadlih
          </div>
          <div style={{ maxWidth: "900px", fontSize: "30px", lineHeight: 1.35, color: "#d7e6f5" }}>
            Fullstack Developer for automation, operational dashboards, IoT, testing, and AI-assisted products.
          </div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: "20px", color: "#aac4e2" }}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>FastAPI</span>
          <span>Go</span>
          <span>Firebase</span>
        </div>
      </div>
    ),
    size,
  );
}
