import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #818cf8, #22d3ee)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          color: "white",
          fontSize: "72px",
          fontWeight: "bold",
          letterSpacing: "-2px",
        }}
      >
        MK
      </div>
    ),
    { ...size }
  );
}
