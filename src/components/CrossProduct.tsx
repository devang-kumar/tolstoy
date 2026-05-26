"use client";

import React from "react";
import { featureMedia } from "@/lib/media";
import { InteractiveMedia } from "@/components/InteractiveMedia";

const CROSS_FEATURES = [
  {
    title: "Customers choose their own models",
    desc: 'By generating & publishing content in the same platform, you can now offer "choose your model" personalization. No extra work needed.',
    bg: "linear-gradient(135deg, var(--player-bg) 0%, var(--studio-bg) 100%)",
    ...featureMedia.cross[0],
    label: "Choose model",
  },
  {
    title: "Hyper personal emails",
    desc: "Your sales agent builds customer profiles that include customer images, accurate sizing information, beauty preferences, & more. AI Studio uses this data to generate personalized images & videos on demand.",
    bg: "linear-gradient(135deg, var(--studio-bg) 0%, var(--shopper-bg) 100%)",
    ...featureMedia.cross[1],
    label: "Personalized",
  },
  {
    title: "Self-improving media",
    desc: "Tolstoy's AI algorithm flags under-performing media, auto-creates A/B-tested variants, and keeps only the top-performing assets.",
    bg: "linear-gradient(135deg, var(--shopper-bg) 0%, var(--player-bg) 100%)",
    ...featureMedia.cross[2],
    label: "A/B tested",
  },
];

export default function CrossProduct() {
  return (
    <section
      style={{
        padding: "100px clamp(16px, 4vw, 40px)",
        background: "var(--gray-50)",
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            textAlign: "center",
            marginBottom: 56,
            lineHeight: 1.15,
          }}
        >
          The AI Commerce Platform unlocks entirely new AI-Shopping experiences
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {CROSS_FEATURES.map((f, i) => (
            <div
              key={f.title}
              style={{
                display: "flex",
                flexDirection: i % 2 === 1 ? "row-reverse" : "row",
                gap: 40,
                alignItems: "center",
                flexWrap: "wrap",
                background: f.bg,
                borderRadius: 28,
                padding: "clamp(28px, 5vw, 48px)",
              }}
            >
              <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    marginBottom: 14,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#444",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {f.desc}
                </p>
                <a href="#" className="btn-black">
                  Get Tolstoy for free
                </a>
              </div>
              <div style={{ flex: "1 1 280px", display: "flex", justifyContent: "center" }}>
                <InteractiveMedia
                  image={f.image}
                  video={f.video}
                  alt={f.title}
                  label={f.label}
                  aspectRatio="16/10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
