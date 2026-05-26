"use client";

import React from "react";

export default function AIPlayerFeatures() {
  const features = [
    {
      title: "Shoppable PDP Feeds",
      description: "Embed endless scrolling video feeds directly onto your product pages. Increase conversion by letting customers see products in action.",
      icon: "📱"
    },
    {
      title: "AI Auto-Tagging",
      description: "Automatically identify and tag products within your videos using computer vision. No more manual linking.",
      icon: "🤖"
    },
    {
      title: "Syndication Network",
      description: "Distribute your shoppable videos to the Tolstoy Syndication Network, pushing directly to Walmart, Shop App, and more.",
      icon: "🌐"
    }
  ];

  return (
    <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "20px" }}>
          Everything you need for shoppable video
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        {features.map((feature, idx) => (
          <div key={idx} className="glass-card" style={{ padding: "40px", textAlign: "left", background: "#f9f9f9" }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{feature.icon}</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}>{feature.title}</h3>
            <p style={{ color: "#555", lineHeight: 1.6, fontSize: "1.1rem" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
