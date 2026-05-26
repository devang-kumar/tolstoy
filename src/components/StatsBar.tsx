"use client";

import React from "react";

const STATS = [
  {
    value: "10x",
    label: "Conversion lift",
    sub: "Based on results seen across Tolstoy's 2,000+ brand partners.",
  },
  {
    value: "3 products",
    label: "All best-in-class",
    sub: "Industry-leading AI Tools for content creation, shoppable video, and AI-driven sales chat.",
  },
  {
    value: "1 Platform",
    label: "Endless innovative use cases",
    sub: "Unlock AI-shopping experiences only possible with the combination of all three products.",
  },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "80px clamp(16px, 4vw, 40px)",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 48,
          }}
        >
          Why brands choose Tolstoy AI Commerce platform
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.value}
              style={{
                background: "#fafafa",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid #efefef",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>
                {s.label}
              </div>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
