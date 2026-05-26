"use client";

import React from "react";

const BRANDS = [
  "Hampden", "Skin Rocks", "CSB", "Walmart", "TikTok Shop",
  "Shop App", "Tapcart", "Shopify", "Klaviyo", "Yotpo",
];

function BrandTile({ name }: { name: string }) {
  return (
    <div style={{
      flexShrink: 0,
      width: "180px",
      height: "80px",
      margin: "0 16px",
      borderRadius: "16px",
      background: "#f9f9f9",
      border: "1px solid #ececec",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: "0.9rem",
      color: "#333",
      letterSpacing: "-0.01em",
    }}>
      {name}
    </div>
  );
}

export default function Marquee() {
  const doubled = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section style={{
      padding: "80px 0",
      background: "#fff",
      borderTop: "1px solid #f0f0f0",
      borderBottom: "1px solid #f0f0f0",
      overflow: "hidden",
    }}>
      <p style={{
        textAlign: "center",
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#999",
        marginBottom: "40px",
      }}>
        Trusted by 2,000+ brands
      </p>

      {/* Row 1 */}
      <div className="marquee-outer" style={{ position: "relative", overflow: "hidden", marginBottom: "20px" }}>
        <div className="marquee-left">
          {doubled.map((b, i) => <BrandTile key={i} name={b} />)}
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "140px", background: "linear-gradient(to right, #fff, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "140px", background: "linear-gradient(to left, #fff, transparent)", pointerEvents: "none" }} />
      </div>

      {/* Row 2 */}
      <div className="marquee-outer" style={{ position: "relative", overflow: "hidden" }}>
        <div className="marquee-right">
          {[...doubled].reverse().map((b, i) => <BrandTile key={i} name={b} />)}
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "140px", background: "linear-gradient(to right, #fff, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "140px", background: "linear-gradient(to left, #fff, transparent)", pointerEvents: "none" }} />
      </div>
    </section>
  );
}
