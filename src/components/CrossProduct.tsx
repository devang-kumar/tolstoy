"use client";

import React from "react";

const CROSS_FEATURES = [
  {
    title: "Customers choose their own models",
    desc: 'By generating & publishing content in the same platform, you can now offer "choose your model" personalization. No extra work needed.',
    bg: "linear-gradient(135deg, #e8f4ff 0%, #f3e8ff 100%)",
    imageUrl: "https://images.pexels.com/photos/8798401/pexels-photo-8798401.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Hyper personal emails",
    desc: "Your sales agent builds customer profiles that include customer images, accurate sizing information, beauty preferences, & more. AI Studio uses this data to generate personalized images & videos on demand.",
    bg: "linear-gradient(135deg, #f3e8ff 0%, #e8fff0 100%)",
    imageUrl: "https://images.pexels.com/photos/5585952/pexels-photo-5585952.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Self-improving media",
    desc: "Tolstoy's AI algorithm flags under-performing media, auto-creates A/B-tested variants, and keeps only the top-performing assets.",
    bg: "linear-gradient(135deg, #e8fff0 0%, #e8f4ff 100%)",
    imageUrl: "https://images.pexels.com/photos/6214218/pexels-photo-6214218.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function CrossProduct() {
  return (
    <section style={{ padding: "100px 24px", background: "#fafafa", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#000",
            marginBottom: "20px",
          }}>
            The AI Commerce Platform unlocks entirely new AI-Shopping experiences
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {CROSS_FEATURES.map((f, i) => (
            <div key={i} style={{
              display: "flex",
              flexDirection: i % 2 === 1 ? "row-reverse" : "row",
              gap: "56px",
              alignItems: "center",
              flexWrap: "wrap",
              background: f.bg,
              borderRadius: "32px",
              padding: "56px",
              border: "1px solid rgba(0,0,0,0.04)",
            }}>
              <div style={{ flex: "1 1 340px", minWidth: 0 }}>
                <h3 style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#000",
                  marginBottom: "18px",
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#444",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                }}>
                  {f.desc}
                </p>
                <a href="#" className="btn-black">
                  Get Tolstoy for free
                </a>
              </div>
              <div style={{ flex: "1 1 340px", display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "300px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                }}>
                  <img
                    src={f.imageUrl}
                    alt={f.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
