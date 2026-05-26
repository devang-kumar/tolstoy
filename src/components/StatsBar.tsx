"use client";

import React from "react";

const STATS = [
  { value: "10x", label: "Conversion lift", desc: "Based on results seen across Tolstoy's 2,000+ brand partners." },
  { value: "3 products", label: "All best-in-class", desc: "Industry-leading AI Tools for content creation, shoppable video, and AI-driven sales chat." },
  { value: "1 Platform", label: "Endless innovative use cases", desc: "Unlock AI-shopping experiences only possible with the combination of all three products." },
];

export default function StatsBar() {
  return (
    <section style={{
      background: "#fff",
      padding: "100px 24px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          marginBottom: "64px",
          color: "#000",
        }}>
          Why brands choose Tolstoy AI Commerce platform
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}>
          {STATS.map((s) => (
            <div key={s.value} style={{
              background: "#fafafa",
              borderRadius: "24px",
              padding: "40px 36px",
              border: "1px solid #efefef",
            }}>
              <div style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#000",
                marginBottom: "8px",
              }}>
                {s.value}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "12px", color: "#111" }}>
                {s.label}
              </div>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.65, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
